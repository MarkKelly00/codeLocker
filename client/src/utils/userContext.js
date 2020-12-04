import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import userAPI from "./userAPI"
import Loading from "../components/AuthO/Loading"

const UserSessionContext = React.createContext({
    userProfile: null,
    loginMethod: null,
    logoutMethod: null,
});

const UserSessionProfileUpdateContext = createContext({updateUser:null})

export function UseUserSession() {
    const { userProfile, loginMethod, logoutMethod } = useContext(UserSessionContext)
    return { userProfile, loginMethod, logoutMethod };
}

export default function UserSessionProvider({ children }) {
    const [userProfile, setUserProfile] = useState({userName: "No Name"})

    const { user, logout, loginWithRedirect, isLoading } = useAuth0();

    useEffect(()=>{
        fetchUserData()
        // console.log('user: ', user)
    }, [user])


    async function fetchUserData() {

        let dbProfile;


        if (user !== undefined){
            console.log('user in fetchUserData: ', user)


            const userNewProfile = {
                userName: user?.nickname || "Member", 
                Auth0Id: user.sub,
                email: user.email, 
                userImage: user?.picture || null,
            }

            const isUser = await userAPI.isUser(userNewProfile.Auth0Id);


            isUser
                ? (dbProfile= await userAPI.getUserProfile(userNewProfile.Auth0Id))
                : (dbProfile= await userAPI.createUser(userNewProfile))

            setUserProfile(dbProfile)

        } else {
            setUserProfile({userName: "Guest"})
        }
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <UserSessionContext.Provider value={{
            userProfile: userProfile,
            loginMethod: loginWithRedirect,
            logoutMethod: logout
        }}
        >
            <UserSessionProfileUpdateContext.Provider value={{updateUser:fetchUserData}}>
                {children}
            </UserSessionProfileUpdateContext.Provider> 
        </UserSessionContext.Provider>
    )

}
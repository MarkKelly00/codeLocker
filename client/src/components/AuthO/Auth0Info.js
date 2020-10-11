import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Auth0Info = () => {
    const { user } = useAuth0();

    console.log("user is: ", user);

    return <div>{user}</div>;
};

export default Auth0Info;

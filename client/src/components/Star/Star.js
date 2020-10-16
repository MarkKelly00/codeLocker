import React, {useState, useEffect}from "react";
import userAPI from "../../utils/userAPI";
import codeBlockAPI from "../../utils/codeBlockAPI"
import { useAuth0 } from "@auth0/auth0-react";
import ConsoleCopy from "../ConsoleWrapper/consoleCopy";


const StarIcon = ({ data, onClick, onView, codeId }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [favorites, setFavorites] = useState([])
    const { user } = useAuth0();
    const { sub } = user;


    useEffect(()=>{
        // getUserFavorties()
        toggleFavorite()

    }, [])


    async function toggleFavorite(){
        const userID= await userAPI.getUserId(sub);
        const code = await userAPI.getFavoritesCodeBlock(userID._id);

        console.log("toggle favorite is fired")
        console.log("favorites is", code)
        console.log("Code id is: ", codeId)


        const filteredFav = code.filter((e)=>e._id===codeId)

        if(filteredFav.length>0){
            setIsFavorite(true)
        }else{
            setIsFavorite(false)
        }
    }

return(
        <>
        <i className={`${isFavorite ? "fas fa-star": "far fa-star"}`} id ="star" data-codeid={codeId} data-fav={false}  
        ></i>
        </>
)
}

export default StarIcon;
import React, {useState, useEffect}from "react";
import userAPI from "../../utils/userAPI";
import codeBlockAPI from "../../utils/codeBlockAPI";
import { useAuth0 } from "@auth0/auth0-react";

const StarIcon = ({ data, onView, codeId, onClick }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    
    const { user } = useAuth0();
    const { sub } = user;


    useEffect(()=>{
        // getUserFavorties()
        toggleFavorite()

    }, [])


    function onStar(e){
        
        e.preventDefault()
        console.log("fired")
        const isFavored = e.target.getAttribute("data-fav")

        console.log("isFavored from onClick: ", isFavored)

        setFavoriteCode(e.target.getAttribute("data-fav"), e.target.id)


    }

    async function setFavoriteCode(isFavored, codeId){
        console.log("fired")

        console.log("isFavored from setFavoriteCode: ", isFavored)

        // const star = document.getElementById(codeId)

        const userID= await userAPI.getUserId(sub);
        console.log("userId from onClcik", userID._id)

        let result;

        if(isFavorite){
            console.log("Hey this is now a favorite but will be unfavorited")
            result = await userAPI.removeFavorite( userID._id, codeId)

        }else{
            console.log("hey it's not a favorite but will be")
            result = await userAPI.addFavorite(codeId, userID._id)

        }

        console.log("result is: ",result)
        setIsFavorite(!isFavorite)

    }


    async function toggleFavorite(){
        const userID= await userAPI.getUserId(sub);
        const code = await userAPI.getFavoritesCodeBlock(userID._id);

        const filteredFav = code.filter((e)=>e?._id===codeId)

        if(filteredFav.length>0){
            setIsFavorite(true)
            return true

        }else{
            setIsFavorite(false)
            return false
        }
    }

return(
        <>
        <i className={`${isFavorite ? "fas fa-star": "far fa-star"}`} id={codeId} data-fav={isFavorite}  onClick={ onStar}
        ></i>
        </>
)
}

export default StarIcon;
import React from "react";
import codeBlockAPI from "../../utils/codeBlockAPI";
import userAPI from "../../utils/userAPI";
import ShareBTN from "../Buttons/Share";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";

function CopyButtons({ onExecute, onCopy, onShare, viewOnlyCode }) {
    const { user } = useAuth0();
    const { sub } = user;

    async function onLike(){
        
        const isLiked = await isUserInLikesArr();
        // console.log("isLiked is", isLiked)
        
        if (isLiked){
            console.log("it's been previously liked")
        } else {
            console.log("Will be liked")
            likeCode()
        }

    }

    async function isUserInLikesArr(){
        const userId = await userAPI.getUserId(sub);
        // console.log("userId in isUserInLikesArr")

        const {likesArr} = await codeBlockAPI.getLikeArr(viewOnlyCode.codeId);
        // console.log("likeArr is: ", likesArr )

        const authorLiked = likesArr.includes(userId)
        // console.log("authorliked is: ", authorLiked)

        return authorLiked;
    }

    async function likeCode(){
        const {_id} = await userAPI.getUserId(sub);
        await codeBlockAPI.addLike(viewOnlyCode.codeId, _id)

        // console.log("liked from likeCode is: ", liked)
    }

    return (
        <div className="buttonWrapper flex flex-row flex-wrap overflow-hidden justify-center">
            <div className="text-gray-700 text-center px-2 py-2 m-1">
                <button
                    className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-white font-bold shadow sm:shadow-md"
                    onClick={onExecute}
                >
                    Run!
                </button>
            </div>
            <div className="text-gray-700 text-center px-2 py-2 m-1">
                <button
                    className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-white font-bold shadow sm:shadow-md"
                    onClick={onLike}
                >
                    Like!
                </button>
            </div>
            <div className="text-gray-700 text-center px-2 py-2 m-1">
                <button
                    className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-white font-bold shadow sm:shadow-md"
                    onClick={onCopy}
                >
                    Copy!
                </button>
            </div>
            <ShareBTN onShare={onShare}/>
        </div>
    );
}

export default CopyButtons;

import React from "react";
import ShareBTN from "../Buttons/Share";
import "./styles.css";

function CopyButtons({ onExecute, onLike , onCopy, onShare }) {

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

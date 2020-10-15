import React from "react";

const ShareBTN = ({ email, onShare }) => {
    return (
    <div className="flex items-center cursor-pointer">
                <button class="flex-1 flex-wrap bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                    <img className="flex-1 h-6" src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/7986747571558096451-512.png" alt="shareIMG"/>
                    <div className="ml-1 text-gray-700 font-medium">
                    <a href={`mailto:${email}?subject=${encodeURIComponent(onShare.title) || ''}&body=${encodeURIComponent(onShare.userCode) || ''}`}>Share!</a></div>
                </button>
                </div>
    );
};

export default ShareBTN;

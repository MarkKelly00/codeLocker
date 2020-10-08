import React from "react";
import "./styles.css";

function CopyButtons({ onSave, onExecute, onReset }) {
    function onCopy(text) {
        const elem = document.createElement('textarea');
   elem.value = text;
   document.body.appendChild(elem);
   elem.select();
   document.execCommand('copy');
   document.body.removeChild(elem);
}

    return (
        <div className="buttonWrapper flex flex-row justify-center">
            <div className="text-gray-700 text-center px-2 py-2 m-1">
                <button
                    className="bg-blue-700 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded shadow sm:shadow-md"
                    onClick={onExecute}
                >
                    Run!
                </button>
            </div>
            <div className="text-gray-700 text-center px-2 py-2 m-1">
                <button
                    className="bg-blue-700 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded shadow sm:shadow-md"
                    onClick={onReset}
                >
                    Reset!
                </button>
            </div>
            <div className="text-gray-700 text-center px-2 py-2 m-1">
                <button
                    className="bg-blue-700 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded shadow sm:shadow-md"
                    onClick={onCopy}
                >
                    Copy!
                </button>
            </div>
        </div>
    );
}

export default CopyButtons;

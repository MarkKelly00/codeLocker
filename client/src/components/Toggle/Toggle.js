import React from "react";
import "./styles.css";

const Toggle = () => {
    return (
        <label htmlFor="isPrivate" className="flex items-center cursor-pointer">
            <div className="relative">
                <input id="isPrivate" type="checkbox" className="hidden" />
                <div className="toggle__line w-8 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div className="toggle__dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0"></div>
            </div>
            <div className="ml-1 text-gray-700 font-medium">Keep Private</div>
        </label>
    );
};


export default Toggle;
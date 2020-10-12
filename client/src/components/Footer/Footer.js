import React from "react";

function Footer() { 
    return (
            <footer className="w-full p-1 pin-b bg-blue-300 h-6 text-center text-white">
                © Copyright { (new Date()).getFullYear() } <span className="text-gray-700 font-semibold">CodeLocker</span>
                
            </footer>
    );
}


export default Footer;
import React from "react";

function Footer() { 
    return (
        <div className="w-full text-center p-2 pin-b">
            <footer className="footer text-center text-gray-200">
                © Copyright { (new Date()).getFullYear() }
            </footer>
        </div>
    );
}


export default Footer;
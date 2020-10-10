import React from "react";

function Footer() { 
    return (
        <div className="pin-b mx-auto justify-center bg-blue-700 border-t-2 border-teal-500 rounded-b px-4 shadow-lg h-6">
            <footer className="footer text-center">
                <small className="mb-2 text-muted m-0 small">© Copyright { (new Date()).getFullYear() }</small>
            </footer>
        </div>
    );
}


export default Footer;
import React, { useState, useEffect } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/AuthO/Loading";
import LogOutButton from "../components/Buttons/LogoutButton";
import { Transition } from "@tailwindui/react";
import "../components/styles.css";
import Logo from "../features/images/clLogo2.png";
import Sidebar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import Footer from "../components/Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import AboutUsContainer from "../components/AboutUsContainer/AboutUsContainer";


import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/snippets/html";
import "ace-builds/webpack-resolver";


function AboutUs() {
    const [isOpen, setIsOpen] = useState(false);

    const { user } = useAuth0();
    const { nickname, name, picture, email, sub } = user;

    return (
        <div>
            <nav className="bg-blue-700 p-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/dashboard">
                                    <img
                                        className="h-32"
                                        src={Logo}
                                        alt="Workflow logo"
                                    />
                                </a>
                            </div>
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Search />
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <div className="ml-3 relative">
                                    <button
                                        className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid transition ease-in-out duration-150"
                                        id="user-menu"
                                        aria-label="User menu"
                                        aria-haspopup="true"
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                        }}
                                    >
                                        <img
                                            src={picture}
                                            alt="user profile "
                                            className="shadow rounded-full max-w-full h-auto align-middle border-none"
                                            style={{ width: 50 }}
                                        />
                                    </button>
                                    <Transition
                                        show={isOpen}
                                        enter="transition ease-out duration-100 transform"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="transition ease-in duration-75 transform"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        {(ref) => (
                                            <div
                                                ref={ref}
                                                className="absolute right-0 mt-3 px-2 sm:px-0"
                                            >
                                                <div className="origin-top-right mt-2 w-48 rounded-md shadow-lg">
                                                    <div
                                                        ref={ref}
                                                        className="py-1 rounded-md bg-white shadow-xs"
                                                        role="menu"
                                                        aria-orientation="vertical"
                                                        aria-labelledby="user-menu"
                                                    >
                                                        <a
                                                            href="/profile"
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            role="menuitem"
                                                        >
                                                            Settings
                                                        </a>

                                                        <LogOutButton />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Transition>
                                </div>
                                <div className="mr-2 flex md:hidden">
                                    <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                                        <svg
                                            className="block h-6 w-6"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>

                                        <svg
                                            className="hidden h-6 w-6"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="shadow">
                <div className="max-w-7xl mx-auto border-t-2 border-gray-600 py-6 px-4 sm:px-6 lg:px-8 bg-gray-300">
                    <h1 className="text-3xl font-bold leading-tight text-black">
                        About Us
                    </h1>
                </div>
            </header>
            <Sidebar />
            <main>
                <AboutUsContainer />
            </main>
            <Footer />
        </div>
    );
}

export default withAuthenticationRequired(AboutUs, {
    onRedirecting: () => <Loading />,
});
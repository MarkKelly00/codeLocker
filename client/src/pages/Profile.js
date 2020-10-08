import React, { useState, useEffect } from "react";
// import { Transition } from "@tailwindui/react";
import "../components/styles.css";
import Logo from "../features/images/clLogo2.png";
import Sidebar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";

import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/snippets/html";
import "ace-builds/webpack-resolver";

function Profile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="bg-blue-700 p-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-32"
                                    src={Logo}
                                    alt="Workflow logo"
                                />
                            </div>
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Search />
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <div className="ml-3 relative">
                                    <div>
                                        <button
                                            className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid transition ease-in-out duration-150"
                                            id="user-menu"
                                            aria-label="User menu"
                                            aria-haspopup="true"
                                            onClick={() => {
                                                setIsOpen(!isOpen);
                                            }}
                                        >
                                            <i class="fas fa-user-circle fa-2x"></i>
                                        </button>
                                    </div>
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                                        <div
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

                                            <a
                                                href="/"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Sign out
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            </nav>

            <header className="shadow">
                <div className="max-w-7xl mx-auto border-t-2 border-gray-600 py-6 px-4 sm:px-6 lg:px-8 bg-gray-300">
                    <h1 className="text-3xl font-bold leading-tight text-black">
                        Profile
                    </h1>
                </div>
            </header>
            <Sidebar />
            <main>
                <div className="bg-blue-400 h-screen">
                    <div className="container mx-auto lg:w-3/6 xl:w-3/5 justify-center bg-blue-700 border-t-4 border-b-4 border-teal-500 rounded-b px-4 py-3 shadow-lg">
                        <div className="flex-no-wrap justify-center overflow-hidden shadow-lg bg-blue-700">
                            <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                                <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
                                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                                        Username Here
                                    </h3>
                                </div>
                                <div>
                                    <dl>
                                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-sm leading-5 font-medium text-gray-500">
                                                Full name
                                            </dt>
                                            <input class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2 w-40" placeholder="List Name Here" />
                                            <a href="#" class="float-right text-sm leading-5 font-medium no-underline hover:underline text-blue-500">
                                                Update
                                            </a>
                                        </div>
                                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-sm leading-5 font-medium text-gray-500">
                                                Password
                                            </dt>
                                            <input class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2 w-40" placeholder="List Password Here" />
                                            <a href="#" class="float-right text-sm leading-5 font-medium no-underline hover:underline text-blue-500">
                                                Update
                                            </a>
                                        </div>
                                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-sm leading-5 font-medium text-gray-500">
                                                Email address
                                            </dt>
                                            <input class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2 w-40" placeholder="List Email Here"/>
                                                
                                            <a href="#" class="float-right text-sm leading-5 font-medium no-underline hover:underline text-blue-500">
                                                Update
                                            </a>
                                            
                                        </div>
                                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <a href="#" class="text-sm leading-5 font-medium no-underline hover:underline text-red-400">
                                                Deactivate Account
                                            </a>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Profile;

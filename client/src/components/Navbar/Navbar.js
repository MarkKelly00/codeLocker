import React from "react";
import { useState } from "react";

function Sidebar() {
    const [isOn, setIsOn] = useState(false);

    return (
        <>
            <nav class="flex-row md:justify-between">
                <div className="hidden lg:block xl:block">
                    <div className="flex flex-col w-64 bg-gray-300 fixed border-t-4 border-b-4 border-teal-500 px-1 py-1 shadow-lg">
                        <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex items-center flex-shrink-0 px-4 font-serif text-lg text-center">
                                <a href="/profile" className="flex-shrink-0 w-full group block">
                                    <div className="flex items-center">
                                        <div>
                                            <i className="fas fa-user-circle fa-2x" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm leading-5 font-medium text-gray">
                                                Name Here
                                            </p>
                                            <p className="text-xs leading-4 font-medium text-gray-700 group-hover:text-gray-200 transition ease-in-out duration-150">
                                                View profile
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <nav className="mt-5 flex-1 px-2 bg-blue-700">
                            <a
                                href="/dashboard"
                                className="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md bg-gray-900 focus:outline-none focus:bg-blue-400 transition ease-in-out duration-150"
                            >
                                <svg
                                    className="mr-3 h-6 w-6 text-gray-300 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                Dashboard
                            </a>
                            <a
                                href="#"
                                className="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-blue-400 focus:outline-none focus:text-white focus:bg-blue-400 transition ease-in-out duration-150"
                            >
                                <svg
                                    fill="currentColor"
                                    className="mr-3 h-6 w-6 text-gray-300 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150 bi bi-file-lock"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M8 5a1 1 0 0 0-1 1v1h2V6a1 1 0 0 0-1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224zM6.105 8.125C6.02 8.193 6 8.258 6 8.3v2.4c0 .042.02.107.105.175A.637.637 0 0 0 6.5 11h3a.64.64 0 0 0 .395-.125c.085-.068.105-.133.105-.175V8.3c0-.042-.02-.107-.105-.175A.637.637 0 0 0 9.5 8h-3a.637.637 0 0 0-.395.125z"
                                    />
                                </svg>
                                Locker
                            </a>
                            <a
                                href="#"
                                className="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-blue-400 focus:outline-none focus:text-white focus:bg-blue-400 transition ease-in-out duration-150"
                            >
                                <svg
                                    className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                                Friends
                            </a>
                            <a
                                href="#"
                                className="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-blue-400 focus:outline-none focus:text-white focus:bg-blue-400 transition ease-in-out duration-150"
                            >
                                <svg
                                    className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                    />
                                </svg>
                                Projects
                            </a>
                            <div className="flex-col bg-blue-400 border"></div>
                            <div className="overflow-y-auto h-64 flex-1 text-center px-4 py-2 bg-blue-700 p-2 my-auto justify-center">
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p> <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p> <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                                <p className="text-sm leading-5 font-medium text-white">
                                    Favorites
                                </p>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="mx-auto p-1 flex lg:hidden bg-blue-700">
                    <a
                        href="#"
                        className="group flex items-center px-2 py-2 text-sm leading-5 font-small text-white rounded-md bg-gray-900 focus:outline-none focus:bg-blue-400 transition ease-in-out duration-150"
                    >
                        <svg
                            className="mr-1 h-6 w-4 text-gray-300 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-small text-gray-300 rounded-md hover:text-white hover:bg-blue-400 focus:outline-none focus:text-white focus:bg-blue-400 transition ease-in-out duration-150"
                    >
                        <svg
                            fill="currentColor"
                            className="mr-1 h-6 w-4 text-gray-300 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150 bi bi-file-lock"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"
                            />
                            <path
                                fillRule="evenodd"
                                d="M8 5a1 1 0 0 0-1 1v1h2V6a1 1 0 0 0-1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224zM6.105 8.125C6.02 8.193 6 8.258 6 8.3v2.4c0 .042.02.107.105.175A.637.637 0 0 0 6.5 11h3a.64.64 0 0 0 .395-.125c.085-.068.105-.133.105-.175V8.3c0-.042-.02-.107-.105-.175A.637.637 0 0 0 9.5 8h-3a.637.637 0 0 0-.395.125z"
                            />
                        </svg>
                        Locker
                    </a>
                    <a
                        href="#"
                        className="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-small text-gray-300 rounded-md hover:text-white hover:bg-blue-400 focus:outline-none focus:text-white focus:bg-blue-400 transition ease-in-out duration-150"
                    >
                        <svg
                            className="mr-1 h-6 w-4 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                        Friends
                    </a>
                    <a
                        href="#"
                        className="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-small text-gray-300 rounded-md hover:text-white hover:bg-blue-400 focus:outline-none focus:text-white focus:bg-blue-400 transition ease-in-out duration-150"
                    >
                        <svg
                            className="mr-1 h-6 w-4 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            />
                        </svg>
                        Projects
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Sidebar;

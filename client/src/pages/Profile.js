import React, { useState, useEffect } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/AuthO/Loading";
import { Transition } from "@tailwindui/react";
import "../components/styles.css";
import Logo from "../features/images/clLogo2.png";
import Sidebar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import Footer from "../components/Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import userAPI from '../utils/userAPI';

import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/snippets/html";
import "ace-builds/webpack-resolver";

function Profile() {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = React.useState(false);

    const { logout } = useAuth0();
    const { user } = useAuth0();
    const { nickname, name, picture, email, sub } = user;

    async function deactivateUser() {
        const userID= await userAPI.getUserId(sub);
        
        userAPI.deleteUser(userID._id);
        logout({
                returnTo:
                    window
                        .location
                        .origin,
            })
    }

    return (
        <div>
            {showModal ? (
                <div
                    className="fixed z-10 inset-0 overflow-y-auto"
                    onClick={() => setShowModal(false)}
                >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" />
                        &#8203;
                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg
                                            className="h-6 w-6 text-red-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3
                                            className="text-lg leading-6 font-medium text-gray-900"
                                            id="modal-headline"
                                        >
                                            Deactivate account
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm leading-5 text-gray-500">
                                                Are you sure you want to
                                                deactivate your account? All of
                                                your data will be permanently
                                                removed. This action cannot be
                                                undone.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                    <button
                                        type="button"
                                        style={{ transition: "all 0.15s ease" }}
                                        className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                        onClick={deactivateUser}
                                    >
                                        Deactivate
                                    </button>
                                </span>
                                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                    >
                                        Cancel
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
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
                                                        <button
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            role="menuitem"
                                                            onClick={() =>
                                                                logout({
                                                                    returnTo:
                                                                        window
                                                                            .location
                                                                            .origin,
                                                                })
                                                            }
                                                        >
                                                            Sign Out
                                                        </button>
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
                        Profile
                    </h1>
                </div>
            </header>
            <Sidebar />
            <main>
                <div className="bg-gray-800 h-screen">
                    <div className="container mx-auto lg:w-3/6 xl:w-3/5 justify-center bg-blue-700 border-t-4 border-b-4 border-teal-500 rounded-b px-4 py-3 shadow-lg">
                        <div className="flex-no-wrap justify-center overflow-hidden shadow-lg bg-blue-700">
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        {nickname}
                                    </h3>
                                </div>
                                <div>
                                    <dl>
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                                {name}
                                            </dt>
                                            <input
                                                className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2 w-40"
                                                placeholder="List Name Here"
                                            />
                                            <a
                                                href="/profile"
                                                className="float-right text-sm leading-5 font-medium no-underline hover:underline text-blue-500"
                                            >
                                                Update
                                            </a>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                                {email}
                                            </dt>
                                            <input
                                                className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2 w-40"
                                                placeholder="List Email Here"
                                            />

                                            <a
                                                href="/profile"
                                                className="float-right text-sm leading-5 font-medium no-underline hover:underline text-blue-500"
                                            >
                                                Update
                                            </a>
                                        </div>
                                        <div className="float-right bg-white px-4 py-5 sm:grid">
                                            <button
                                                href="#"
                                                className="text-sm leading-5 font-medium no-underline hover:underline text-red-400"
                                                type="button"
                                                style={{
                                                    transition: "all 0.15s ease",
                                                }}
                                                onClick={() =>
                                                    setShowModal(true)
                                                }
                                            >
                                                Deactivate Account
                                            </button>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Loading />,
});
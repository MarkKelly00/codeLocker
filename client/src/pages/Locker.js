/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/AuthO/Loading";
import LogOutButton from "../components/Buttons/LogoutButton";
import { Transition } from "@tailwindui/react";
import "../components/styles.css";
import Logo from "../features/images/clLogo2.png";
import Sidebar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import Table from "../components/Table/Tables";
import userAPI from "../utils/userAPI";
import Footer from "../components/Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";

import codeBlockAPI from "../utils/codeBlockAPI";

function Locker() {
    const [isOpen, setIsOpen] = useState(false);
    const [editor, setEditor] = useState({});
    const [viewOnlyCode, setViewOnlyCode] = useState({
        userCode: 'console.log("Hello World!")',
        title: "Welcome",
    });
    const [filter, setFilter] = useState("author");
    const [titleInput, setTitleInput] = useState({
        codeTitle: "Please title your code!",
    });
    const [editCodeId, seteditCodeId] = useState({ codeId: "" , authorId:""});
    // data that appears in table component
    const [codeSnips, setCodeSnips] = useState([]);

    const { user } = useAuth0();
    const { sub, picture} = user;



    useEffect(() => {        
        getCode();

    }, []);
    async function getCode() {
        const { _id } = await userAPI.getUserId(sub);
        try {
            const FilteredByAuth = codeSnips.filter((c) => c.author === _id)
            setCodeSnips(FilteredByAuth);
        
        } catch (e) {
            console.log(e);
        }
    }

    async function onEditCode(e) {
        e.preventDefault();
        console.log("I was fired");

        const codeId = e.target.id;
        const codeAuthor = e.target.getAttribute("data-author");
        console.log("CodeAuthor from event listener is ", codeAuthor)

        const { data } = await codeBlockAPI.getCodeBlock(codeId);
        console.log("codeID ", codeId);
        console.log("codeBlock: ", data);
        setTitleInput({ codeTitle: data.title });
        setEditor({ userCode: data.code });
        seteditCodeId({ codeId: codeId , authorId:codeAuthor});
    }

    async function onViewCode(e) {
        e.preventDefault();

        const codeId = e.target.id;

        const { data } = await codeBlockAPI.getCodeBlock(codeId);

        setViewOnlyCode({ userCode: data.code, title: data.title });
    }

    return (
        <div>
            <nav className="bg-blue-700 p-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href= "/dashboard">
                                <img
                                    className="h-32"
                                    src={Logo}
                                    alt="Workflow logo"
                                />
                                </a>
                            </div>
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Search codeSnips={codeSnips} setCodeSnips = {setCodeSnips}/>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <div className="relative ml-3">
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
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
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
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
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
                    <h1 className="text-3xl font-bold leading-tight">
                        Dashboard
                    </h1>
                </div>
            </header>
            <Sidebar codeSnips={codeSnips} setCodeSnips={setCodeSnips} />
            <main>
                <div className="bg-gray-800 overflow-y-auto">
                    <div className="container mx-auto lg:w-3/6 xl:w-2/3 justify-center bg-blue-700 h-full border-t-4 border-b-4 border-teal-500 rounded-b px-4 py-3 mb-4 shadow-lg">
                        <div className="justify-center overflow-hidden shadow-lg bg-gray-400 h-full">
                            <div className="px-6 pt-4 pb-2">
                                <Table
                                    codeSnips={codeSnips}
                                    setCodeSnips={setCodeSnips}
                                    onEdit={onEditCode}
                                    onView={onViewCode}
                                    filter={filter}
                                    setFileter={setFilter}
                                    Auth0Id={sub}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default withAuthenticationRequired(Locker, {
    onRedirecting: () => <Loading />,
});

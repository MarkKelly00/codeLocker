import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
// import { Transition } from "@tailwindui/react";
import "../components/styles.css";
import Logo from "../features/images/clLogo2.png";
import Sidebar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import ConsoleWrapper from "../components/ConsoleWrapper/consoleWrapper";
import { console, consoleMessages } from "../utils/consoleLogic";
import Table from "../components/Table/Tables";
import ConsoleCopy from "../components/ConsoleWrapper/consoleCopy";

import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/snippets/html";
import "ace-builds/webpack-resolver";

//sets up new console
window.console = console;

function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const [editor, setEditor] = useState({});
    const [viewOnlyCode, setViewOnlyCode] = useState({userCode:""})
    const [consoleLog, setConsoleLog] = useState([]);

    useEffect(() => {
        const previousCode = localStorage.getItem("code");
        if (previousCode) {
            setEditor({ userCode: previousCode });
        }
    }, []);

    //get the Ace editor value as uyer types
    function onChange(newValue) {
        setEditor({ userCode: newValue });
    }

    //onclick for copying and excecuting click functions
    function saveButton() {
        localStorage.setItem("code", editor.userCode);
    }

    function saveConsoleMsgs(mgsArr) {
        setConsoleLog(() => {
            return { messages: [mgsArr] };
        });
    }

    function runButton() {
        try {
            // eslint-disable-next-line
            new Function(editor.userCode)();

            const messages = consoleMessages.map((msg) => {
                return msg.message;
            });

            saveConsoleMsgs(messages);
        } catch (err) {
            console.error(err);
        }
    }

    function resetButton() {
        localStorage.removeItem("code");
        setEditor({ userCode: " " });

        saveConsoleMsgs([]);
    }

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
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-gray-300">
                    <h1 className="text-3xl font-bold leading-tight text-black">
                        Dashboard
                    </h1>
                </div>
            </header>
            <Sidebar />
            <main>
                <div className="bg-blue-400 h-screen">
                    <div className="container mx-auto lg:w-3/6 xl:w-2/3 justify-center bg-blue-700 h-full border-t-4 border-b-4 border-teal-500 rounded-b px-4 py-3 shadow-lg">
                        <div className="justify-center overflow-hidden shadow-lg bg-gray-400 h-full">
                            <div className="px-4 py-4">
                                <div className="flex overflow-hidden bg-blue-800 justify-center">
                                    <div className="flex flex-wrap xs:w-1/2 sm:w-3/4 overflow-hidden p-2 mx-auto">
                                        <div className="text-gray-700 text-center bg-white h-full p-2">
                                                <AceEditor
                                                    mode="javascript"
                                                    theme="monokai"
                                                    onChange={onChange}
                                                    fontSize={18}
                                                    value={viewOnlyCode.userCode}
                                                    width={"550px"}
                                                    height={"300px"}
                                                    readOnly={true}
                                                />
                                            <ConsoleCopy
                                                onExecute={runButton}
                                                onReset={resetButton}
                                                console={consoleLog}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-1/2 flex flex-no-wrap p-2 mx-auto hidden xl:block">
                                    <div className="text-gray-700 text-center bg-white h-full p-2">
                                            <div id="w-full">
                                        <AceEditor
                                            mode="javascript"
                                            theme="monokai"
                                            onChange={onChange}
                                            fontSize={18}
                                            value={editor.userCode}
                                            width={"550px"}
                                            height={"300px"}
                                        />
                                        </div>
                                        <ConsoleWrapper
                                                onSave={saveButton}
                                                onExecute={runButton}
                                                onReset={resetButton}
                                                console={consoleLog}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                    <Table />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;

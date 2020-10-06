import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
// import { Transition } from "@tailwindui/react";
import "../components/styles.css";
import Logo from "../features/images/clLogo.png";
import Sidebar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import ConsoleWrapper from "../components/ConsoleWrapper/consoleWrapper";
import { console, consoleMessages } from "../utils/consoleLogic";

import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/snippets/html";
import "ace-builds/webpack-resolver";

//sets up new console
window.console = console;

function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const [editor, setEditor] = useState({});
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
            <nav className="bg-blue-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-16 w-18"
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
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Your Profile
                                            </a>

                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Settings
                                            </a>

                                            <a
                                                href="#"
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
                        <div className="-mr-2 flex md:hidden">
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

            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">
                        Dashboard
                    </h1>
                </div>
            </header>
            <Sidebar />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="rounded justify-center overflow-hidden h-96">
                            <AceEditor
                                mode="javascript"
                                theme="monokai"
                                onChange={onChange}
                                fontSize={18}
                                value={editor.userCode}
                                width={"600px"}
                                height={"300px"}
                            />

                            <ConsoleWrapper
                                onSave={saveButton}
                                onExecute={runButton}
                                onReset={resetButton}
                                console={consoleLog}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;

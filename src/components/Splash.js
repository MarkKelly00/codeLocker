import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import Logo from "../features/images/clLogo.png";
import "./styles.css";

import ConsoleWrapper from './ConsoleWrapper/consoleWrapper'
import { console, consoleMessages } from "./AceEditor/consoleLogic"

import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton"


import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/snippets/html";
import "ace-builds/webpack-resolver";

//sets up new console
window.console = console;


function Splash() {
    
    const [editor, setEditor] = useState({})
    const [consoleLog, setConsoleLog] = useState([])

    useEffect(() => {
        const previousCode = localStorage.getItem("code")
        if (previousCode) {
            setEditor({ userCode: previousCode })
        }
    }, [])
    
    //get the Ace editor value as uyer types
    function onChange(newValue) {
        setEditor({ userCode: newValue })

    }

    //onclick for copying and excecuting click functions
    function saveButton() {
        localStorage.setItem("code", (editor.userCode))
    }

    function saveConsoleMsgs(mgsArr) {

        setConsoleLog(() => {
            return { messages: [mgsArr] }
        });

    }

    function runButton() {

        try {
            // eslint-disable-next-line
            new Function(editor.userCode)();

            const messages = consoleMessages.map(msg => {
                return msg.message
            })

            saveConsoleMsgs(messages);


        } catch (err) {
            console.error(err)
        }

    }

    function resetButton() {
        localStorage.removeItem("code");
        setEditor({ userCode: " " })

        saveConsoleMsgs([]);
    }


    return (
        <body className="bg-blue-600">
            <div className="container mx-auto justify-center bg-blue-700 h-full border-t-4 border-b-4 border-teal-500 rounded-b px-4 py-3 shadow-lg">
                <div className="max-w-full rounded justify-center overflow-hidden shadow-lg bg-blue-400">
                    <div className="font-bold text-xl mb-2 text-center">
                        <img src={Logo} />
                        <h1>Try It Out</h1>
                    </div>
                    <div id="w-full">
                    <AceEditor
                mode="javascript" theme="monokai"
                onChange={onChange} fontSize={18} value={editor.userCode} width={"600px"} height={"300px"} />
                </div>
            <ConsoleWrapper onSave={saveButton} onExecute={runButton} onReset={resetButton} console={consoleLog} />
                    <div className="px-4 py-4">
                        <div className="flex flex-no-wrap bg-blue-800 justify-center">
                            <div className="w-1/2 flex-none p-2 mx-auto">
                                <div className="text-gray-700 text-center bg-gray-400 h-full p-2">
                                    <div className="font-bold text-xl mb-2">
                                        What Is CodeLocker
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        CodeLocker is a web based code editor
                                        that allows you to execute code/save
                                        notes in your personalized{" "}
                                        <b>CodeLocker</b> and search for the
                                        tags you need. Sign Up for free to have
                                        your own Locker.
                                    </p>
                                </div>
                            </div>
                            <div className="w-1/2 flex-none p-2 mx-auto">
                                <div className="text-gray-700 text-center bg-gray-400 p-2">
                                    <div className="mb-4">
                                        <label
                                            className="block text-grey-darker text-sm font-bold mb-2"
                                            for="username"
                                        >
                                            Username
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                            id="username"
                                            type="text"
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            className="block text-grey-darker text-sm font-bold mb-2"
                                            for="password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                                            id="password"
                                            type="password"
                                            placeholder="******************"
                                        />
                                        <p className="text-red text-xs italic">
                                            Please choose a password.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <LoginButton/>
                                        <LogoutButton/>
                                        <button
                                            className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                                            type="button"
                                        >
                                            Sign Up
                                        </button>
                                        <a
                                            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                                            href="#"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                            #codelocker
                        </span>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Splash;

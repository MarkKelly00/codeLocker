import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import Logo from "../features/images/clLogo2.png";
import "../components/styles.css";
import Footer from "../components/Footer/Footer"

import ConsoleDemo from "../components/ConsoleWrapper/consoleDemo";
import { console, consoleMessages } from "../utils/consoleLogic";

// import LoginButton from "../components/LoginButton";
// import LogoutButton from "../components/LogoutButton"

import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/snippets/html";
import "ace-builds/webpack-resolver";
import UserSignIn from "../components/SignIn/UserSignIn";

//sets up new console
window.console = console;

function Splash() {
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
        <div className="bg-blue-300 h-auto">
            <div className="container mx-auto justify-center bg-blue-700 my-auto border-t-4 border-b-4 border-teal-500 rounded-b px-4 py-3 shadow-lg">
                <div className="max-w-full rounded justify-center overflow-hidden shadow-lg bg-blue-400">
                    <div className="font-bold text-xl mb-2 text-center">
                        <a href="/dashboard">
                            <img
                                className="h-32"
                                src={Logo}
                                alt="Workflow logo"
                            />
                        </a>
                        <h1>Try It Out</h1>
                    </div>

                    <div id="w-full">
                        <AceEditor
                            mode="javascript"
                            theme="monokai"
                            onChange={onChange}
                            fontSize={18}
                            value={editor.userCode}
                            width={"600px"}
                            height={"300px"}
                        />
                    </div>

                    <ConsoleDemo
                        onSave={saveButton}
                        onExecute={runButton}
                        onReset={resetButton}
                        console={consoleLog}
                    />

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
                                <UserSignIn />
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
            <Footer />
        </div>
    );
}

export default Splash;

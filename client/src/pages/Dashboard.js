import React, { useState, useEffect } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/AuthO/Loading";
import LogOutButton from "../components/Buttons/LogoutButton";
import AceEditor from "react-ace";
import { Transition } from "@tailwindui/react";
import "../components/styles.css";
import Logo from "../features/images/clLogo2.png";
import Sidebar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import ConsoleWrapper from "../components/ConsoleWrapper/consoleWrapper";
import { console, consoleMessages } from "../utils/consoleLogic";
import Table from "../components/Table/Tables";
import ConsoleCopy from "../components/ConsoleWrapper/consoleCopy";
import userAPI from "../utils/userAPI";
import Footer from "../components/Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";



import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/snippets/html";
import "ace-builds/webpack-resolver";
import codeBlockAPI from "../utils/codeBlockAPI";


//sets up new console
window.console = console;

function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const [editor, setEditor] = useState({});
    const [viewOnlyCode, setViewOnlyCode] = useState({ userCode: "console.log(\"Hello World!\")", title:"Welcome" });
    const [consoleLog, setConsoleLog] = useState([]);
    const [titleInput, setTitleInput] = useState({codeTitle:"Please title your code!"})
    const [isPrivate, setIsPrivate] = useState(false);
    const [editCodeId, seteditCodeId] = useState({codeId:""})

    const { user } = useAuth0();
    const { nickname, picture, email, sub } = user;

    const userObj = {
        Auth0Id: sub,
        userName: nickname,
        userImage: picture,
        email: email,
    };

    checkUser();

    async function checkUser() {
        try {
            const userCheck = await userAPI.isUser(sub);
            // console.log("userId from checkuser is: ", userCheck)
            if (!userCheck) {
                await userAPI.createUser(userObj);
                // console.log("user from Checkuser is: ", user);
            } else {
                await userAPI.getUserProfile(sub);

            }
        } catch (err) {
            console.log(err);
        }
    }

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
    async function saveButton(e) {
        // localStorage.setItem("code", editor.userCode);
        e.preventDefault()

        console.log("edit code id is: ", editCodeId)

        try {
            
            if (editCodeId.codeId ===""){
                const {_id} = await userAPI.getUserId(sub)
    
                const codeBlock = {
                    author:_id,
                    code: editor.userCode,
                    title:titleInput.codeTitle,
                    isPrivate:isPrivate
                }
    
                const newCodeBlock = await codeBlockAPI.saveCodeBlock(codeBlock);
                console.log("New code block is: ", newCodeBlock);
    
            }else{
                const _id = editCodeId.codeId;
                const authorId = await userAPI.getUserId(sub)
    
                const codeBlock = {
                    author:authorId,
                    code:editor.userCode,
                    title:titleInput.codeTitle,
                    isPrivate: isPrivate,
                    dateModified: new Date(),
                }

                console.log("codeblock is: ", codeBlock)
    
                const updatedCodeBlock = await codeBlockAPI.updateCodeBlock(_id, codeBlock);
                console.log("updated code block is: ", updatedCodeBlock)
            }

        } catch (err) {
            console.log(err)
        }
        
        seteditCodeId({codeId:""})
    }

    function handleToggleChange(e) {
        setIsPrivate(!isPrivate);
    }

    function handleTitleInputChange(e){
        setTitleInput({codeTitle: e.target.value})
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

    async function onEditCode(e){
        e.preventDefault();
        console.log("I was fired")

        const codeId = e.target.id;

        const {data} = await codeBlockAPI.getCodeBlock(codeId)
        console.log("codeID ", codeId);
        console.log("codeBlock: ", data)
        setTitleInput({codeTitle:data.title});
        setEditor({userCode:data.code});
        seteditCodeId({codeId:codeId})
        
    }

    async function onViewCode(e){
        e.preventDefault();

        const codeId = e.target.id;

        const {data} = await codeBlockAPI.getCodeBlock(codeId);
        console.log("onViewCode, data is: ", data.code)

        setViewOnlyCode({userCode:data.code, title: data.title});
        
    }

    async function onCopyCode(e){
        e.preventDefault();

        setClipboardText(viewOnlyCode.userCode)

    }

    function setClipboardText(text){
        const id = "mycustom-clipboard-textarea-hidden-id";
        let existsTextarea = document.getElementById(id);
    
        if(!existsTextarea){
            console.log("Creating textarea");
            let textarea = document.createElement("textarea");
            textarea.id = id;
            // Place in top-left corner of screen regardless of scroll position.
            textarea.style.position = 'fixed';
            textarea.style.top = 0;
            textarea.style.left = 0;
    
            // Ensure it has a small width and height. Setting to 1px / 1em
            // doesn't work as this gives a negative w/h on some browsers.
            textarea.style.width = '1px';
            textarea.style.height = '1px';
    
            // We don't need padding, reducing the size if it does flash render.
            textarea.style.padding = 0;
    
            // Clean up any borders.
            textarea.style.border = 'none';
            textarea.style.outline = 'none';
            textarea.style.boxShadow = 'none';
    
            // Avoid flash of white box if rendered for any reason.
            textarea.style.background = 'transparent';
            document.querySelector("body").appendChild(textarea);
            console.log("The textarea now exists :)");
            existsTextarea = document.getElementById(id);
        }else{
            console.log("The textarea already exists :3")
        }
    
        existsTextarea.value = text;
        existsTextarea.select();
    
        try {
            var status = document.execCommand('copy');
            if(!status){
                console.error("Cannot copy text");
            }else{
                console.log("The text is now on the clipboard");
            }
        } catch (err) {
            console.log('Unable to copy.');
        }
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
                                        <i class="fas fa-user-circle fa-2x"></i>
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
                    <h1 className="text-3xl font-bold leading-tight text-black">
                        Dashboard
                    </h1>
                </div>
            </header>
            <Sidebar username={nickname} userImg={userObj.userImage}/>
            <main>
                <div className="bg-gray-800 overflow-y-auto">
                    <div className="container mx-auto lg:w-3/6 xl:w-2/3 justify-center bg-blue-700 h-full border-t-4 border-b-4 border-teal-500 rounded-b px-4 py-3 mb-4 shadow-lg">
                        <div className="justify-center overflow-hidden shadow-lg bg-gray-400 h-full">
                            <div className="px-4 py-4">
                                <div className="flex flex-wrap overflow-hidden bg-blue-800 justify-center">
                                    <div className="w-1/2 flex-1 flex-no-wrap p-2 mx-auto hidden xl:block">
                                        <div className="flex flex-wrap justify-center bg-white h-full p-2">
                                            <h3 className="mt-2 mb-2">
                                                {viewOnlyCode.title} (Read-Only)
                                            </h3>
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
                                                onCopy= {onCopyCode}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-1/2 flex flex-no-wrap p-2 mx-auto hidden xs:block sm:block md:block">
                                        <div className="flex flex-wrap justify-center bg-white h-full p-2">
                                            <input
                                                id="codeTitle"
                                                class="mt-2 text-md leading-5 text-black text-center sm:mt-0 sm:col-span-2 w-40 outline-none focus:shadow-outline focus:bg-blue-100"
                                                placeholder={titleInput.codeTitle}
                                                onChange={handleTitleInputChange}
                                            />
                                            <AceEditor
                                                mode="javascript"
                                                theme="monokai"
                                                onChange={onChange}
                                                fontSize={18}
                                                value={editor.userCode}
                                                width={"550px"}
                                                height={"300px"}
                                            />

                                            <ConsoleWrapper
                                                onSave={saveButton}
                                                onExecute={runButton}
                                                onReset={resetButton}
                                                console={consoleLog}
                                                onChange= {handleToggleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <Table onEdit = {onEditCode} onView = {onViewCode}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default withAuthenticationRequired(Dashboard, {
    onRedirecting: () => <Loading />,
});

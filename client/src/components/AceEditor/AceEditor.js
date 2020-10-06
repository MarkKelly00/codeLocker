import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import ConsoleWrapper from "../ConsoleWrapper/consoleWrapper";
import { console, consoleMessages } from "../../utils/consoleLogic";
// import editorContext from '../utils/editorContext'

// required editor to work
import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/snippets/html";
import "ace-builds/webpack-resolver";

//sets up new console
window.console = console;

function AcEditor() {
    //contexts
    const [editor, setEditor] = useState({});
    // const [consoleLog, setConsoleLog] = useState([])

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
    // function saveButton() {
    //     localStorage.setItem("code", (editor.userCode))
    // }

    // function saveConsoleMsgs(mgsArr) {

    //     setConsoleLog(() => {
    //         return { messages: [mgsArr] }
    //     });

    // }

    // function runButton() {

    //     try {
    //         // eslint-disable-next-line
    //         new Function(editor.userCode)();

    //         const messages = consoleMessages.map(msg => {
    //             return msg.message
    //         })

    //         saveConsoleMsgs(messages);

    //     } catch (err) {
    //         console.error(err)
    //     }

    // }

    // function resetButton() {
    //     localStorage.removeItem("code");
    //     setEditor({ userCode: " " })

    //     saveConsoleMsgs([]);
    // }

    return (
        <div className="AceEditor">
            <AceEditor
                mode="javascript"
                theme="monokai"
                onChange={onChange}
                fontSize={18}
                value={editor.userCode}
                width={"600px"}
                height={"300px"}
            />
            {/* <ConsoleWrapper onSave={saveButton} onExecute={runButton} onReset={resetButton} console={consoleLog} /> */}
        </div>
    );
}

export default AcEditor;

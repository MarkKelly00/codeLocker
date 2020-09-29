import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';

// import editorContext from '../utils/editorContext'

//required editor to work
import 'ace-builds/src-min-noconflict/mode-html'
import 'ace-builds/src-min-noconflict/theme-monokai'
import 'ace-builds/src-min-noconflict/snippets/html'


function AcEditor() {


    function onChange(newValue) {
        setEditor({ userCode: newValue })

        console.log("Editor is: ", editor)
        console.log("New Value is :", newValue)

        localStorage.setItem("code", newValue)
    }

    //contexts
    const [editor, setEditor] = useState({})

    useEffect(()=>{ 
        const previousCode = localStorage.getItem("code")
        if(previousCode){
            setEditor({userCode:previousCode})
        }
    },[])

    return (
        <div>
            <AceEditor mode="javascript" theme="monokai" onChange={ onChange } fontSize={16} value = {editor.userCode} />
        </div>
    )
}

export default AcEditor
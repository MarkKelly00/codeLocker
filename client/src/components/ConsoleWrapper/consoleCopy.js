import React from 'react'
import CopyButtons from "../RunResetButtons/CopyButton"
import ConsoleLog from '../ConsoleLog/ConsoleLog'

function ConsoleCopy({ onCopy, onExecute, onReset, console, onShare, viewOnlyCode }) {
    return (
        <div className="consoleWrapper flex flex-row overflow-hidden justify-center">
            <CopyButtons onExecute={onExecute} onReset={onReset} onCopy={onCopy} onShare={onShare} viewOnlyCode={viewOnlyCode}/>
            <ConsoleLog console={console} />
        </div>
    )
}

export default ConsoleCopy;
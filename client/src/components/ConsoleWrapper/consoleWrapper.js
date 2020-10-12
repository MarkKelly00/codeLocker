import React from 'react'
import RunResetButtons from "../RunResetButtons/RunResetButtons"
import ConsoleLog from '../ConsoleLog/ConsoleLog'

function ConsoleWrapper({ onSave, onExecute, onReset, console, onChange }) {
    return (
        <div className="consoleWrapper flex flex-row overflow-hidden justify-center">
            <RunResetButtons onExecute={onExecute} onReset={onReset} onSave = {onSave} onChange={onChange}/>
            <ConsoleLog console={console} />
        </div>

    )
}

export default ConsoleWrapper;
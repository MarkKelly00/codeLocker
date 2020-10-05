import React from 'react'
import RunResetButtons from "../RunResetButtons/RunResetButtons"
import ConsoleLog from '../ConsoleLog/ConsoleLog'

function ConsoleWrapper({ onSave, onExecute, onReset, console }) {
    return (
        <div className="consoleWrapper flex flex-row justify-center">
            <RunResetButtons onExecute={onExecute} onReset={onReset} />
            <ConsoleLog console={console} />
        </div>

    )
}

export default ConsoleWrapper;
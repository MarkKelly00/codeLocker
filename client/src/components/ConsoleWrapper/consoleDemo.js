import React from 'react'
import DemoButtons from "../RunResetButtons/demoButtons"
import ConsoleLog from '../ConsoleLog/ConsoleLog'

function DemoWrapper({ onSave, onExecute, onReset, console }) {
    return (
        <div className="consoleWrapper flex flex-row overflow-hidden justify-center">
            <DemoButtons onExecute={onExecute} onReset={onReset} />
            <ConsoleLog console={console} />
        </div>

    )
}

export default DemoWrapper;
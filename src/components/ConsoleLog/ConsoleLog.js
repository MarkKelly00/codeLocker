import React from 'react';
import "./styles.css"

function ConsoleLog({console}){
    
    return(
        <div className="console flex flex-row">
            <input className="shadow appearance-none border rounded py-2 px-3 w-full text-grey-darker" value={console.messages}>
            </input>
        </div>
    )

}

export default ConsoleLog;
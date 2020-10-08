import React from 'react';
import "./styles.css"

function ConsoleLog({console}){
    
    return(
        <div className="console flex flex-wrap overflow-hidden">
            <div className="bg-gray-200 shadow appearance-none border rounded py-2 px-3 text-grey-darker" style={{minWidth: 250}}>
            {console.messages}
            </div>
        </div>
    )

}

export default ConsoleLog;
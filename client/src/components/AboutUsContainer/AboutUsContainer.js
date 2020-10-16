import React from 'react';
import "./assets/AboutUsStyle.css"
 


function AboutUsContainer() {

        
    return(

        
                <div className="bg-blue-400 h-screen">
                    <div className="container mx-auto lg:w-3/6 xl:w-3/5 justify-center bg-blue-700 border-t-4 border-b-4 border-teal-500 rounded-b px-4 py-3 shadow-lg">
                        <div className="flex-no-wrap justify-center overflow-hidden shadow-lg bg-blue-700">
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
                                        About Us 
                                    </h3>
                                    <div className="grid grid-flow-col auto-cols-max md:auto-cols-min">
                                        {/* Joe Mengis */}
                                        <div>
                                            
                                            <img src={"https://avatars2.githubusercontent.com/u/62780709?s=400&u=d54ce8e65d1021a95c4dedde6157ae0710e7a71b&v=4"} alt="Joe Mengis headshot" />
                                            <a href="https://github.com/joemengis">
                                            <button
                                                className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-white font-bold shadow sm:shadow-md">
                                                    Github
                                            </button>
                                            </a>
                                            <a href="mailto:someone@example.com">
                                                <button
                                                    className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-white font-bold shadow sm:shadow-md">
                                                        Email
                                                </button>
                                            </a>                                            
                                        </div>
                                        
                                        {/* Rebeca Gonzalez */}
                                        <div>
                                            <img src={"https://avatars3.githubusercontent.com/u/63758052?s=400&u=7b60715a5c4d37dcc9b502d5594fefa727e4be9f&v=4"} alt="Rebeca Gonzalez headshot" />
                                            <a href="https://github.com/Beki-G">
                                            <button
                                                className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-white font-bold shadow sm:shadow-md">
                                                    Github
                                            </button>
                                            </a>
                                            <a href="mailto:someone@example.com">
                                                <button
                                                    className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-white font-bold shadow sm:shadow-md">
                                                        Email
                                                </button>
                                            </a>
                                        </div>
                                        {/* Mark Kelly */}
                                        <div>
                                            <img src={"https://avatars3.githubusercontent.com/u/35087238?s=400&u=8f37f1327a494ba2de43a59631c9c952951de52e&v=4"} alt="Mark Kelly headshot" />
                                            <a href="https://github.com/MarkKelly00">
                                                <button
                                                    className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-white font-bold shadow sm:shadow-md">
                                                        Github
                                                </button>
                                            </a>
                                            <a href="mailto:someone@example.com">
                                                <button
                                                    className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-white font-bold shadow sm:shadow-md">
                                                        Email
                                                </button>
                                            </a>
                                        </div>
                                        {/* Josh Blank */}
                                        <div>
                                            <img src={"https://avatars3.githubusercontent.com/u/63118162?s=400&u=2466ce7d8754afea5cfb3a0ce5c8638c4c0bf251&v=4"} alt="Josh Blank headshot" />
                                            <a href="https://github.com/Jmnblnk54">
                                            <button
                                                    className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-white font-bold shadow sm:shadow-md">
                                                        Github
                                            </button>                                                
                                            </a>
                                            <a href="mailto:someone@example.com">
                                                <button
                                                    className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-white font-bold shadow sm:shadow-md">
                                                        Email
                                                </button>
                                            </a>

                                        </div>
                                    </div>
                                    
                                </div>
                                                                    
                                    
                            </div>
                        </div>
                    </div>    
                    
                </div>
       
        
    );
}

export default AboutUsContainer;

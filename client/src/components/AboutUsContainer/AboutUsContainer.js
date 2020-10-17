import React from 'react';
import "./assets/AboutUsStyle.css"
 


function AboutUsContainer() {

        
    return(

        
                <div className="bg-gray-800 h-full pb-6">
                    <div className="container mx-auto h-screen lg:w-3/6 xl:w-3/6 justify-center bg-blue-700 border-t-4 border-b-4 border-teal-500 rounded-b px-4 py-3 shadow-lg">
                        <div className="flex-wrap justify-center overflow-hidden shadow-lg bg-blue-700">
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                <h3 className="text-lg leading-6 font-medium text-gray-900 text-center items-center">
                                        About Us 
                                    </h3>
                                    <div className="px-2 ">
                                        <div className="flex -mx-2 justify-center">
                                        {/* Joe Mengis */}
                                        <div className="w-1/3 px-2 text-center">
                                            <strong>Joe</strong>
                                            <img className="w-48" src={"https://avatars2.githubusercontent.com/u/62780709?s=400&u=d54ce8e65d1021a95c4dedde6157ae0710e7a71b&v=4"} alt="Joe Mengis headshot" />
                                            <a href="https://github.com/joemengis" target="_blank">
                                            <button
                                                className="text-blue-700 font-bold m-2 border-b-4 border-blue-700 hover:border-blue-500 font-bold shadow sm:shadow-md">
                                                    Github
                                            </button>
                                            </a>
                                            <a href="mailto:joe.mengis@gmail.com">
                                                <button
                                                    className="text-blue-700 font-bold m-2 border-b-4 border-blue-700 hover:border-blue-500 font-bold shadow sm:shadow-md">
                                                        Email
                                                </button>
                                            </a>                                            
                                        </div>
                                        
                                        {/* Rebeca Gonzalez */}
                                        <div className="w-1/3 px-2 text-center">
                                            <strong>Beki</strong>
                                            <img className="w-48" src={"https://avatars3.githubusercontent.com/u/63758052?s=400&u=7b60715a5c4d37dcc9b502d5594fefa727e4be9f&v=4"} alt="Rebeca Gonzalez headshot" />
                                            <a href="https://github.com/Beki-G" target="_blank">
                                            <button
                                                className="text-blue-700 font-bold m-2 border-b-4 border-blue-700 hover:border-blue-500 font-bold shadow sm:shadow-md">
                                                    Github
                                            </button>
                                            </a>
                                            <a href="mailto:rebgon93@gmail.com">
                                                <button
                                                    className="text-blue-700 font-bold m-2 border-b-4 border-blue-700 hover:border-blue-500 font-bold shadow sm:shadow-md">
                                                        Email
                                                </button>
                                            </a>
                                        </div>
                                        {/* Mark Kelly */}
                                        <div className="w-1/3 px-2 text-center">
                                            <strong>Mark</strong>
                                            <img className="w-48" src={"https://avatars3.githubusercontent.com/u/35087238?s=400&u=8f37f1327a494ba2de43a59631c9c952951de52e&v=4"} alt="Mark Kelly headshot" />
                                            <a href="https://github.com/MarkKelly00" target="_blank">
                                                <button
                                                    className="text-blue-700 font-bold m-2 border-b-4 border-blue-700 hover:border-blue-500 font-bold shadow sm:shadow-md">
                                                        Github
                                                </button>
                                            </a>
                                            <a href="mailto:kellymark0101@gmail.com">
                                                <button
                                                    className="text-blue-700 font-bold m-2 border-b-4 border-blue-700 hover:border-blue-500 font-bold shadow sm:shadow-md">
                                                        Email
                                                </button>
                                            </a>
                                        </div>
                                        {/* Josh Blank */}
                                        <div className="w-1/3 px-2 text-center">
                                            <strong>Josh</strong>
                                            <img className="w-48" src={"https://avatars3.githubusercontent.com/u/63118162?s=400&u=2466ce7d8754afea5cfb3a0ce5c8638c4c0bf251&v=4"} alt="Josh Blank headshot" />
                                            <a href="https://github.com/Jmnblnk54" target="_blank">
                                            <button
                                                    className="text-blue-700 font-bold m-2 border-b-4 border-blue-700 hover:border-blue-500 font-bold shadow sm:shadow-md">
                                                        Github
                                            </button>                                                
                                            </a>
                                            <a href="mailto:jmnblank@gmail.com">
                                                <button
                                                    className="text-blue-700 font-bold m-2 border-b-4 border-blue-700 hover:border-blue-500 font-bold shadow sm:shadow-md">
                                                        Email
                                                </button>
                                            </a>

                                        </div>

                                    </div>
                                    <br></br>
                                        <p className="text-center text-lg"> 
                                            Your Code Locker team, consisting of Joe, Beki, Mark and Josh bring to the table a diverse set of professional backgrounds such as: a Missile and Space Systems Maintenance Tech in the Air Force, Cusotomer Service, Human Resouces, Psychology, Admin, Touring Musician and Session Artist and Pro Audio Engineer. These backgrounds combined with excellent comunication skills create an ideal environment for creativity in problem solving, resourcefulness, and mastery of Web Development, even in spite of our recent immersion into the Full Stack skill set. CodeLocker is not yet complete with all of the ideas we have.
                                        </p>
                                        <p className="text-center text-lg">
                                            Please contact any one of us above with your suggestions, comments, or bugs, we will be happy to address them.
                                        </p>
                                </div>

                                    
                            </div>
                        </div>
                    </div>    
                    
                </div>
       
        
    );
}

export default AboutUsContainer;

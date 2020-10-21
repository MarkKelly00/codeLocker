import React from "react";
import "./assets/AboutUsStyle.css";

function AboutUsContainer() {
    return (
        <div className="bg-gray-800 h-full pb-6">
            <div className="container mx-auto lg:w-3/6 xl:w-3/5 justify-center bg-blue-700 border-t-4 border-b-4 border-teal-500 rounded-b px-4 py-3 shadow-lg">
                <div className="flex-wrap justify-center overflow-hidden shadow-lg bg-blue-700">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                            <h1 className="text-2xl leading-6 font-medium text-gray-900 text-center items-center mb-4">
                                About Us
                            </h1>
                            {/* Beki Gonzalez */}
                            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                                    <img
                                        className="rounded-lg shadow-lg antialiased"
                                        src={
                                            "https://avatars3.githubusercontent.com/u/63758052?s=400&u=7b60715a5c4d37dcc9b502d5594fefa727e4be9f&v=4"
                                        }
                                        alt="Rebeca Gonzalez headshot"
                                    />
                                    <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        <a
                                            href="https://github.com/Beki-G"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="text-blue-700 font-bold m-2 border-b-4 border-blue-700 hover:border-blue-500 font-bold shadow sm:shadow-md">
                                                Github
                                            </button>
                                        </a>
                                    </span>
                                    <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        <a href="mailto:rebgon93@gmail.com">
                                            <button className="text-blue-700 font-bold m-2 border-b-4 border-blue-700 hover:border-blue-500 font-bold shadow sm:shadow-md">
                                                Email
                                            </button>
                                        </a>
                                    </span>
                                </div>
                                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="text-gray-900 font-bold text-lg">
                                        Rebeca Gonzalez
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        Full Stack Developer with administrative
                                        and customer service background to
                                        design and build effective and efficient
                                        web applications. Certificate in
                                        Full-Stack web development from the
                                        University of Oregon, with skills in
                                        JavaScript, HTML, CSS. A passionate,
                                        collaborative, and curious mindset to
                                        learn and apply new concepts quickly.
                                        For each project, I bring an attentive
                                        eye to details and a systematic approach
                                        to create and execute new solutions.
                                        Worked on a team to build a website to
                                        filter character traits from a game for
                                        other players to use as the sole web
                                        developer. Open and eager to utilize my
                                        skills in software and web development.
                                    </p>
                                    <div className="mb-8"></div>
                                </div>
                            </div>
                            {/* Mark Kelly */}
                            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                                    <img
                                        className="rounded-lg shadow-lg antialiased"
                                        src={
                                            "https://avatars3.githubusercontent.com/u/35087238?s=400&u=8f37f1327a494ba2de43a59631c9c952951de52e&v=4"
                                        }
                                        alt="Mark Kelly headshot"
                                    />
                                    <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        <a
                                            href="https://github.com/MarkKelly00"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="text-blue-700 font-bold m-2 border-b-4 border-blue-700 hover:border-blue-500 font-bold shadow sm:shadow-md">
                                                Github
                                            </button>
                                        </a>
                                    </span>
                                    <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        <a href="mailto:kellymark0101@gmail.com">
                                            <button className="text-blue-700 font-bold m-2 border-b-4 border-blue-700 hover:border-blue-500 font-bold shadow sm:shadow-md">
                                                Email
                                            </button>
                                        </a>
                                    </span>
                                </div>
                                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="text-gray-900 font-bold text-lg">
                                        Mark Kelly
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        Certified Full Stack Devloper from the
                                        University of Oregon. Served in the Air
                                        Force as a Missile and Space Systems
                                        Technician. For as long as I can
                                        remember, technology has been a passion
                                        of mine. I particularly enjoy the
                                        excitement of emerging technologies.
                                        I've spent the last several years building work experience that led me to where I am today: a disciplined worker with strong core values of integrity, excellence, and respect.
                                        Experienced in mediums including and not
                                        limited to HTML, CSS, JavaScript, Node,
                                        Python, React, MongoDB, and Git.
                                    </p>
                                    <div className="mb-8"></div>
                                </div>
                            </div>
                            {/* Joe Mengis */}
                            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                                    <img
                                        className="rounded-lg shadow-lg antialiased"
                                        src={
                                            "https://avatars2.githubusercontent.com/u/62780709?s=400&u=d54ce8e65d1021a95c4dedde6157ae0710e7a71b&v=4"
                                        }
                                        alt="Joe Mengis headshot"
                                    />
                                    <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        <a
                                            href="https://github.com/joemengis"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="text-blue-700 font-bold m-2 border-b-4 border-blue-700 hover:border-blue-500 font-bold shadow sm:shadow-md">
                                                Github
                                            </button>
                                        </a>
                                    </span>
                                    <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        <a href="mailto:joe.mengis@gmail.com">
                                            <button className="text-blue-700 font-bold m-2 border-b-4 border-blue-700 hover:border-blue-500 font-bold shadow sm:shadow-md">
                                                Email
                                            </button>
                                        </a>
                                    </span>
                                </div>
                                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="text-gray-900 font-bold text-lg">
                                        Joe Mengis
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        I am an experienced Musician with a
                                        demonstrated history of working in the
                                        music industry. As a drummer, I have
                                        been touring, recording, and writing
                                        with major label artists for over 20
                                        years. I am currently a member of the
                                        band Eels and work and tour with them. I
                                        also have a lesson studio in Portland,
                                        Or where I teach privately and work with
                                        5-10 students at any given time. I am
                                        currently becoming a Full Stack Software
                                        Engineer and my current goal is to get a
                                        job as a Web Developer.{" "}
                                    </p>
                                    <div className="mb-8"></div>
                                </div>
                            </div>
                            {/* Joshua Blank */}
                            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                                    <img
                                        className="rounded-lg shadow-lg antialiased"
                                        src={
                                            "https://avatars3.githubusercontent.com/u/63118162?s=400&u=2466ce7d8754afea5cfb3a0ce5c8638c4c0bf251&v=4"
                                        }
                                        alt="Josh Blank headshot"
                                    />
                                    <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        <a
                                            href="https://github.com/Jmnblnk54"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="text-blue-700 font-bold m-2 border-b-4 border-blue-700 hover:border-blue-500 font-bold shadow sm:shadow-md">
                                                Github
                                            </button>
                                        </a>
                                    </span>
                                    <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        <a href="mailto:jmnblank@gmail.com">
                                            <button className="text-blue-700 font-bold m-2 border-b-4 border-blue-700 hover:border-blue-500 font-bold shadow sm:shadow-md">
                                                Email
                                            </button>
                                        </a>
                                    </span>
                                </div>
                                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="text-gray-900 font-bold text-lg">
                                        Joshua Blank
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        Experienced Receptionist with a
                                        demonstrated history of working in the
                                        civil engineering industry. Skilled in
                                        Microsoft Offices, Various databases,
                                        Spanish, and Teamwork. Strong
                                        administrative professional with
                                        interpersonal and coding skills.{" "}
                                    </p>
                                    <div className="mb-8"></div>
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

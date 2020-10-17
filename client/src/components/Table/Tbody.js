import React, { useEffect, useState } from "react";
import "./style.css";
import userAPI from "../../utils/userAPI";
import codeBlockAPI from "../../utils/codeBlockAPI";
import { useAuth0 } from "@auth0/auth0-react";
import StarIcon from "../Star/Star";

function MyTbody({ data, onClick, onView }) {
    const { user } = useAuth0();
    const { nickname, picture, sub } = user;

    return (
        <tr className="bg-white">
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                    <img
                                            src={picture}
                                            alt="user profile "
                                            className="shadow rounded-full max-w-full h-auto align-middle border-none"
                                            style={{ width: 50 }}
                                        />
                    </div>
                    <div className="ml-4">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {nickname}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    <a
                        href="/"
                        className="text-indigo-600 hover:text-indigo-900"
                        id={data._id}
                        onClick={onView}
                    >
                        {data.title}
                    </a>
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {data.dateCreated}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex items-center">
                <p className="py-5 text-gray-900 whitespace-no-wrap mx-auto">
                    <StarIcon codeId={data._id}/>
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {data.likes}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="float-right text-gray-900 whitespace-no-wrap">
                <a
                    href="/"
                    className="text-indigo-600 hover:text-indigo-900"
                    id={data._id}
                    data-author={data.author}
                    onClick={onClick}
                >
                    Edit
                </a>
                </p>
            </td>
        </tr>
    );
};

export default MyTbody;

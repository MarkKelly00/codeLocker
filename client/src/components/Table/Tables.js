import React, { useEffect, useState } from "react";
// import "./style.css";
import userAPI from "../../utils/userAPI";
import codeBlockAPI from "../../utils/codeBlockAPI"
import { useAuth0 } from "@auth0/auth0-react";
import StarIcon from "../Star/Star";

const Tbody = ({ data, onClick, onView }) => {
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
                    {data.likesArr.length}
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

function Table({
    codeSnips,
    onEdit,
    onView,
    setCodeSnips,
    filter,
    Auth0Id,
}) {
    function compareBy(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }

    function sortBy(key) {
        let arrayCopy = [...codeSnips];
        arrayCopy.sort(compareBy(key));
        setCodeSnips(arrayCopy);
    }


    async function handleFilter(e) {
        e.preventDefault();
        const filterSelection = e.target.value
        const { _id } = await userAPI.getUserId(Auth0Id);
        
        switch (filterSelection) {
            case "author":
                const response = await codeBlockAPI.getGlobalCode()
                const FilteredByAuth = response.data.filter((c) => c.author === _id)
                setCodeSnips(FilteredByAuth);
                break;
                
            case "Favs":
                const favoriteCodes = await userAPI.getFavoritesCodeBlock(_id);
                setCodeSnips(favoriteCodes);
            break;
        
            case "All":
                const {data} = await codeBlockAPI.getGlobalCode()
                setCodeSnips(data);
            break;

            default:

                break;
        }

    }

    return (
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-hidden">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table
                            className="min-w-full leading-normal"
                        >
                            <thead>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-blue-700 text-left text-xs font-semibold text-white uppercase tracking-wider text-center"
                                        data-name="user"
                                        onClick={() => sortBy("user")}
                                    >
                                        User
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-blue-700 text-left text-xs font-semibold text-white uppercase tracking-wider"
                                        data-name="title"
                                        onClick={() => sortBy("title")}
                                    >
                                        Title
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-blue-700 text-left text-xs font-semibold text-white uppercase tracking-wider"
                                        data-name="date"
                                        onClick={() => sortBy("date")}
                                    >
                                        Date Modified
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-blue-700 text-left text-xs font-semibold text-white uppercase tracking-wider text-center"
                                        data-name="tags"
                                        onClick={() => sortBy("tags")}
                                    >
                                        Favorites
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-blue-700 text-left text-xs font-semibold text-white uppercase tracking-wider"
                                        data-name="likes"
                                        onClick={() => sortBy("likes")}
                                    >
                                        Likes
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-700 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        Filter By
                                        <select
                                            onChange={handleFilter}
                                            className="text-gray-700 text-center bg-gray-200 px-4  m-2"
                                        >
                                            <option value="All">
                                                All Users
                                            </option>
                                            <option value="author">
                                                My CodeLocker
                                            </option>
                                            <option value="Favs">
                                                Favorites
                                            </option>
                                        </select>
                                    </th>
                            </thead>
                            <tbody>
                                {codeSnips.map((rowData, index) => (
                                    <Tbody
                                        data={rowData}
                                        onClick={onEdit}
                                        onView={onView}
                                        key={index}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    );
}

export default Table;

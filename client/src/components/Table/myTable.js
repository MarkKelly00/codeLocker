import React, { useEffect, useState } from "react";
import "./style.css";
import userAPI from "../../utils/userAPI";
import codeBlockAPI from "../../utils/codeBlockAPI";
import { useAuth0 } from "@auth0/auth0-react";
import StarIcon from "../Star/Star";
import MyTbody from "./Tbody";

function MyTable({ codeSnips, onEdit, onView, setCodeSnips, filter, Auth0Id }) {
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
        const filterSelection = e.target.value;
        const { _id } = await userAPI.getUserId(Auth0Id);

        switch (filterSelection) {
            case "author":
                const FilteredByAuth = codeSnips.filter(
                    (c) => c.author === _id
                );
                setCodeSnips(FilteredByAuth);
                break;

            case "Favs":
                const favoriteCodes = await userAPI.getFavoritesCodeBlock(_id);
                setCodeSnips(favoriteCodes);
                break;

            case "All":
                const { data } = await codeBlockAPI.getGlobalCode();
                setCodeSnips(data);
                break;

            default:
                break;
        }
    }
    console.log("codesnips from myTable, ", codeSnips);
    return (
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table
                            className="min-w-full leading-normal">
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
                                    <MyTbody
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

export default MyTable;

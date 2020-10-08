import React from "react";
import "./style.css";

function Table(sort) {
    // state = {
    //     snippet: [],
    //     title: [],
    //     date: [],
    //     language: [],
    //     isLoading: true,
    // };

    // sort = (event) => {
    //     const name = event.target.value;

    //     if (name === "snippet") {
    //         const { snippet } = this.state;
    //         this.setState({
    //             snippet: snippet.sort((snippet1, snippet2) => {
    //                 if (snippet1.name < snippet2.name) {
    //                     return -1;
    //                 }
    //                 if (snippet1.name > snippet2.name) {
    //                     return 1;
    //                 }
    //                 return 0;
    //             }),
    //         });
    //     }
    // }

    return (
        <div className="flex flex-col bg-blue-700">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th
                                        className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider cursor-pointer"
                                        data-name="snippet"
                                        onClick={() => sort(0)}
                                    >
                                        Snippet
                                    </th>
                                    <th
                                        className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider cursor-pointer"
                                        data-name="title"
                                        onClick={() => sort(1)}
                                    >
                                        Title
                                    </th>
                                    <th
                                        className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider cursor-pointer"
                                        data-name="date"
                                        onClick={() => sort(2)}
                                    >
                                        Date Modified
                                    </th>
                                    <th
                                        className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider cursor-pointer"
                                        data-name="language"
                                        onClick={() => sort(3)}
                                    >
                                        Language
                                    </th>
                                    <th
                                        className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider cursor-pointer"
                                        data-name="language">
                                        Filter By
                                        <select className="text-gray-700 text-center bg-gray-200 px-4  m-2">
                                            <option value="All">All Users</option>
                                            <option value="MyCode">My CodeLocker</option>
                                            <option value="Favs">
                                            Favorites
                                            </option>
                                        </select>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <i class="fas fa-user-circle fa-2x"></i>
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm leading-5 font-medium text-gray-900">
                                                    console.log('Hello World');
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="text-sm leading-5 text-gray-900">
                                            Hello World
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            10/5/2020
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                        <div className="text-sm leading-5 text-gray-900">
                                            Javascript
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                                        <a
                                            href="/"
                                            className="text-indigo-600 hover:text-indigo-900"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;

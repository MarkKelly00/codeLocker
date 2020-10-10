import React, { Component } from "react";
import "./style.css";
// import API from "../../utils/codeBlockAPI";

const Tbody = ({ user, code, title, date, tags, likes }) => (
    <tbody className="bg-white divide-y divide-gray-200">
        <tr>
            <td className="px-6 py-4 whitespace-no-wrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <i class="fas fa-user-circle fa-2x"></i>
                    </div>
                    <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                            {user}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">{title}</div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {date}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                <div className="text-sm leading-5 text-gray-900">{tags}</div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                <div className="text-sm leading-5 text-gray-900">{likes}</div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="/" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                </a>
            </td>
        </tr>
    </tbody>
);

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    code: "console",
                    title: "Task console",
                    tags: "console.log",
                    date: "05/23/20",
                    likes: "33",
                },
                {
                    code: "eerrorr",
                    title: "Task eerrorr",
                    tags: "err",
                    date: "11/3/20",
                    likes: ">9000",
                },
                {
                    code: "homebrew",
                    title: "Task homebrew",
                    tags: "HB",
                    date: "09/23/20",
                    likes: "1",
                },
            ],
        };
        this.compareBy.bind(this);
        this.sortBy.bind(this);
    }
    compareBy(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }
    sortBy(key) {
        let arrayCopy = [...this.state.data];
        arrayCopy.sort(this.compareBy(key));
        this.setState({ data: arrayCopy });
    }

    render() {
        const rows = this.state.data.map((rowData) => <Tbody {...rowData} />);

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
                                            data-name="user"
                                            onClick={() => this.sortBy("user")}
                                        >
                                            User
                                        </th>
                                        <th
                                            className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider cursor-pointer"
                                            data-name="title"
                                            onClick={() => this.sortBy("title")}
                                        >
                                            Title
                                        </th>
                                        <th
                                            className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider cursor-pointer"
                                            data-name="date"
                                            onClick={() => this.sortBy("date")}
                                        >
                                            Date Modified
                                        </th>
                                        <th
                                            className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider cursor-pointer"
                                            data-name="tags"
                                            onClick={() => this.sortBy("tags")}
                                        >
                                            Tags
                                        </th>
                                        <th
                                            className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider cursor-pointer"
                                            data-name="likes"
                                            onClick={() => this.sortBy("likes")}
                                        >
                                            Likes
                                        </th>
                                        <th
                                            className="float-right px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider cursor-pointer"
                                        >
                                            Filter By
                                            <select className="text-gray-700 text-center bg-gray-200 px-4  m-2">
                                                <option value="All">
                                                    All Users
                                                </option>
                                                <option value="MyCode">
                                                    My CodeLocker
                                                </option>
                                                <option value="Favs">
                                                    Favorites
                                                </option>
                                            </select>
                                        </th>
                                    </tr>
                                </thead>
                                {/* TBODY */}
                                {rows}
                                {/* TBODY */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;

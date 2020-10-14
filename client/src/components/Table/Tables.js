import React from "react";
import "./style.css";
import API from "../../utils/codeBlockAPI";
import userAPI from "../../utils/userAPI";

const Tbody = ({ data, onClick, onView }) => {
    return (
        <tr className="bg-white divide-y divide-gray-200 h-full">
            <td className="p-4 ">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <i class="fas fa-user-circle fa-2x"></i>
                    </div>
                    <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                            {data.user}
                        </div>
                    </div>
                </div>
            </td>
            <td className="p-4 w-1/4">
                <div className="text-sm leading-5 text-gray-900">
                    <a
                        href="/"
                        className="text-indigo-600 hover:text-indigo-900"
                        id={data._id}
                        onClick={onView}
                    >
                        {data.title}
                    </a>
                </div>
            </td>
            <td className="p-4 w-1/4">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {data.dateCreated}
                </span>
            </td>
            <td className="p-4 w-1/4 text-sm leading-5 text-gray-500">
                <div className="text-sm leading-5 text-gray-900">
                    {data.tags}
                </div>
            </td>
            <td className="p-4 w-1/4 text-sm leading-5 text-gray-500">
                <div className="text-sm leading-5 text-gray-900">
                    {data.likes}
                </div>
            </td>
            <td className="p-4 w-1/4 text-right text-sm leading-5 font-medium">
                <a
                    href="/"
                    className="text-indigo-600 hover:text-indigo-900"
                    id={data._id}
                    onClick={onClick}
                >
                    Edit
                </a>
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
    setFilter,
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
        console.log("e is", e.target.value);
        //5f84e7fa7cd56264749b7e03

        const filterSelection = e.target.value

        const { _id } = await userAPI.getUserId(Auth0Id);

        console.log("userAPI Id is: ", _id);
        console.log(
            "codesnips is: ",
            codeSnips.filter((c) => c.author === _id)
        );

        switch (filterSelection) {
            case "author":
                console.log("I made it to Author")
                const FilteredByAuth = codeSnips.filter((c) => c.author === _id)
                setCodeSnips(FilteredByAuth);
                break;
            case "Favs":
                const favs = await userAPI.getFavorites(_id);
                console.log("this is favorites", favs)
                
                const filtered = []

                for(let i = 0; i < codeSnips.length; i++ ){
                    for(let j = 0; j< favs.length; j++) {
                        console.log("codesnips I: ", codeSnips[i]._id)
                        console.log("favs J: ", favs[j])
                    if(codeSnips[i]._id === favs._id){
                        filtered.push(codeSnips[i])
                    }
                }
                }

                // const filtered = favs.map((favorite) => {
                //     return favorite._id === codeSnips._id;
                // });

                console.log("favorite array", favs);
                console.log("filtered  array", filtered);
                setCodeSnips(filtered);
            break;
        
            default:
                break;
        }

    }

    return (
        <div className="flex flex-col bg-blue-700">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table
                            className="text-left w-full"
                            style={{ marginBottom: "60px" }}
                        >
                            <thead className="flex text-white w-full">
                                <tr className="flex w-full">
                                    <th
                                        className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider cursor-pointer "
                                        data-name="user"
                                        onClick={() => sortBy("user")}
                                    >
                                        User
                                    </th>
                                    <th
                                        className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider cursor-pointer w-1/4"
                                        data-name="title"
                                        onClick={() => sortBy("title")}
                                    >
                                        Title
                                    </th>
                                    <th
                                        className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider cursor-pointer w-1/4"
                                        data-name="date"
                                        onClick={() => sortBy("date")}
                                    >
                                        Date Modified
                                    </th>
                                    <th
                                        className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider cursor-pointer"
                                        data-name="tags"
                                        onClick={() => sortBy("tags")}
                                    >
                                        Tags
                                    </th>
                                    <th
                                        className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider cursor-pointer"
                                        data-name="likes"
                                        onClick={() => sortBy("likes")}
                                    >
                                        Likes
                                    </th>
                                    <th className="float-right px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider cursor-pointer">
                                        Filter By
                                        <select
                                            value={filter}
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
                                </tr>
                            </thead>
                            <tbody className="justify-between flex flex-col overflow-y-scroll w-full">
                                {codeSnips.map((rowData) => (
                                    <Tbody
                                        data={rowData}
                                        onClick={onEdit}
                                        onView={onView}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;

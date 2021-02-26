import React, { useEffect, useState, useMemo } from 'react'
import codeBlockAPI from '../utils/codeBlockAPI';
import {UseUserSession} from "../utils/UserContext";
import ReactTable from "../components/ReactTable/ReactTable";
import Star from "../components/Star/Star";

const Test = () => {
    const {userProfile} = UseUserSession()

    const [codeSnips, setCodeSnips] = useState([]);
    const [hideColumns, setHideColumns] = useState([])

    useEffect(()=>{
        getCode()
    }, [userProfile])

    async function getCode() {
        try {
            const data = await codeBlockAPI.getGlobalCodePopulated()
            // console.log('data: ', data)
            setCodeSnips(data)
            // console.log('codeSnips in getCode: ', codeSnips)
            // console.log('userProfile', userProfile)
        } catch (error) {
            console.log('error in GetCode: ', error)
        }
    }
    const formatDate = (date) => {
        let newFormat =
          date.getMonth() +
          1 +
          "/" +
          date.getDate() +
          "/" +
          date.getFullYear().toString().substr(-2);
    
        if (newFormat === "NaN/NaN/aN") newFormat = "N/A";
        return newFormat;
      };


    const columns = useMemo(() => [
        {
            Header: "User", 
            accessor: "author.userName"
        },
        {
            Header: "Title", 
            accessor: 'title'
        },
        {
            Header: "Date Modified", 
            accessor: "dateModified",
            Cell: ({cell}) =>{
                const unformatted = new Date(cell.value);
              const formattedDate = formatDate(unformatted);
              return <div className="">{formattedDate}</div>
            }
        },
        {
            Header: "Likes",
            accessor: "likesArr", 
            Cell: ({cell}) =>{
                const { value } = cell
                console.log("Cell: ", value.length)
            return (<div>{value.length}</div>)
            }, 
            disableFilters: true
        },
        {
            Header: "Favorites",
            // id: "favorites",
            accessor: "_id",
            Cell: ({ cell }) => {
                // console.log(cell)
                const { value } = cell;
                return ( <Star codeId={value}/>)
            },
            disableFilters: true
        },
    ], [])

    return (
        <div className= "w-5/6 mx-auto bg-white rounded-md mt-3">
            <ReactTable columns={columns} data={codeSnips} columnsHidden={hideColumns} isShowFilter={true} />
        </div>
    )
}

export default Test

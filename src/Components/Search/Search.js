import React, { useEffect, useState } from "react";
import './Search.css'
import { useParams } from "react-router-dom";
import FetchData from "../../Utils/Rapisapi";
import Sidebar from "../Sidebar/Sidebar";
import Searchcomp from "../Searchcomp/Searchcomp";


function Search() {

    const [search, setsearch] = useState([])
    const { searchQuery } = useParams();

    useEffect(() => {
        searchdataFetch()
    }, [searchQuery])

    const searchdataFetch = () => {
        FetchData(`search/?q=${searchQuery}`).then(({ contents }) => {
            console.log(`...............,${contents}`)
            setsearch(contents)
        })
    }

    return (
        <>
            <div className="Search_Con">
    
            <Sidebar />
            
        
            <div className="Search_inner_con">
                { search?.map((item,index)=>{
               return     <Searchcomp key={index} video={item?.video} />
                })}
            </div>


            </div>
        </>
    )

}
export default Search;
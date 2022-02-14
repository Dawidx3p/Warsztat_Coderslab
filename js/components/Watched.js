import React, { useEffect, useState } from "react";
import { filterList } from "../redux/selectors";
import Filter from "./FilterWatched";
import Navbar from "./Navbar";
import SingleResult from "./Search/SingleResult";

export default function Watched({watchedList, setWatchedList}){
    const [filter, setFilter] = useState({name: undefined});
    useEffect(() => {
        const watchedListLocal = JSON.parse(localStorage.getItem('watchedList'));
        if(watchedListLocal && watchedListLocal.length>0  && watchedList.length===0)setWatchedList(watchedListLocal);
    },[])
    useEffect(() => {
        localStorage.setItem('watchedList', JSON.stringify(watchedList))
    },[watchedList])
    return(
        <>
        <Navbar />
        <Filter filter={filter.name} setFilter={(filter) => setFilter(filter)}/>
        <ul className='searchResults'>
            {filterList(watchedList, filter).map((item, key) => <SingleResult key={key} Poster={item.Poster} imdbID={item.imdbID}/>)}
        </ul>
        </>
    )
}
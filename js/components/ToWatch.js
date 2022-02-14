import React, { useEffect, useState } from "react";
import SingleResult from "./Search/SingleResult";
import Navbar from "./Navbar";
import Filter from "./FilterToWatch";
import { filterList } from "../redux/selectors";

export default function ToWatch({toWatchList, setWatchList}){
    const [filter, setFilter] = useState({name: 'undefined'});
    useEffect(() => {
        const toWatch = JSON.parse(localStorage.getItem('toWatchList'));
        if(toWatch && toWatch.length>0 && toWatchList.length===0)setWatchList(toWatch);
    },[])
    useEffect(() => {
        localStorage.setItem('toWatchList', JSON.stringify(toWatchList))
    },[toWatchList])
    return(
        <>
        <Navbar activeLink={'toWatch'}/>
        <Filter filter={filter.name} setFilter={(filter) => setFilter(filter)}/>
        <ul className='searchResults'>
            {filterList(toWatchList, filter).map((item, key) => <SingleResult key={key} Poster={item.Poster} imdbID={item.imdbID}/>)}
        </ul>
        </>
    )
}
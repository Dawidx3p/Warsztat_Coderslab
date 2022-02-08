import React, { useEffect } from "react";
import SingleResult from "./Search/SingleResult";
import Navbar from "./Navbar";

export default function ToWatch({toWatchList, setWatchList}){
    useEffect(() => {
        const toWatch = JSON.parse(localStorage.getItem('toWatchList'));
        if(toWatch && toWatch.length>0)setWatchList(toWatch);
    },[])
    useEffect(() => {
        localStorage.setItem('toWatchList', JSON.stringify(toWatchList))
    },[toWatchList])
    return(
        <>
        <Navbar />
        <ul className='searchResults'>
            {toWatchList.map((item, key) => <SingleResult key={key} Poster={item.Poster} imdbID={item.imdbID}/>)}
        </ul>
        </>
    )
}
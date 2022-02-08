import React, { useEffect } from "react";
import Navbar from "./Navbar";
import SingleResult from "./Search/SingleResult";

export default function Watched({watchedList, setWatchedList}){
    useEffect(() => {
        const watchedList = JSON.parse(localStorage.getItem('watchedList'));
        if(watchedList && watchedList.length>0)setWatchedList(watchedList);
    },[])
    useEffect(() => {
        localStorage.setItem('watchedList', JSON.stringify(watchedList))
    },[watchedList])
    return(
        <>
        <Navbar />
        <ul className='searchResults'>
            {watchedList.map((item, key) => <SingleResult key={key} Poster={item.Poster} imdbID={item.imdbID}/>)}
        </ul>
        </>
    )
}
import React, { useEffect } from "react";
import SingleResult from './SingleResult'

export default function SearchResults({watchedList,toWatchList,setWatchList,setWatchedList, results, error}){
    useEffect(() => {
        const toWatch = JSON.parse(localStorage.getItem('toWatchList'));
        if(toWatch && toWatch.length>0 && toWatchList.length===0)setWatchList(toWatch);
        const watchedListLocal = JSON.parse(localStorage.getItem('watchedList'));
        if(watchedListLocal && watchedListLocal.length>0 && watchedList.length===0)setWatchedList(watchedListLocal);
    },[])
    useEffect(() => {
        localStorage.setItem('watchedList', JSON.stringify(watchedList))
    },[watchedList])
    useEffect(() => {
        localStorage.setItem('toWatchList', JSON.stringify(toWatchList))
    },[toWatchList])
    return(
        <ul className='searchResults'>
            {results && results.map((result, key) => <SingleResult key={key} {...result}/>)}
            {error && <h3>{error}</h3>}
        </ul>
    )
}
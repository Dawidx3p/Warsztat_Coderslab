import React from "react";
import SingleResult from './SingleResult'

export default function SearchResults({results, error, addToWatchList, addToWatchedList, changeRating}){
    return(
        <ul className='searchResults'>
            {results && results.map((result, key) => <SingleResult key={key} {...result} {...{addToWatchList, addToWatchedList, changeRating}}/>)}
            {error && <h3>{error}</h3>}
        </ul>
    )
}
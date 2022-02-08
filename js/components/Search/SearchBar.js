import React, { useState } from "react";

export default function SearchBar({onSearch}){
    const [searchPhrase, setSearchPhrase] = useState('');
    return(
        <form onSubmit={e => {
            e.preventDefault();
            onSearch(searchPhrase)
        }}>
            <input type='search' value={searchPhrase} onChange={e => setSearchPhrase(e.target.value)}/>
            <input type='submit' value='search'/>
        </form>
    )
}
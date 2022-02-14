import React, { useState } from "react";

export default function SearchBar({onSearch}){
    const [searchPhrase, setSearchPhrase] = useState('');
    return(
        <form className='searchBar' onSubmit={e => {
            e.preventDefault();
            onSearch(searchPhrase)
        }}>
            <input type='search' className='search' value={searchPhrase} onChange={e => setSearchPhrase(e.target.value)}/>
            <input type='submit' className='submit' value='Search'/>
        </form>
    )
}
import React, {useState} from "react";

export default function Filter({filter, setFilter}){
    const [title, setTitle] = useState('')
    return(
        <form className='filterForm'>
            <input type='text' value={title} placeholder='search in the list' onChange={e => {
                setTitle(e.target.value);
                setFilter({name: 'title', value: e.target.value})
            }}/>
            <select id='filmType' value={filter} onChange={(e) => setFilter({name: e.target.value})}>
                <option value={undefined}>Film Type</option>
                <option value={'movie'}>Movie</option>
                <option value={'series'}>Series</option>
                <option value={'episode'}>Episode</option>
            </select>
            <select id='filter' value={filter} onChange={(e) => setFilter({name: e.target.value})}>
                <option value={undefined}>Sort</option>
                <option value={'a-z'}>A-Z</option>
                <option value={'year_desc'}>Year Descending</option>
                <option value={'year_asc'}>Year Ascending</option>
            </select>
        </form>
    )
}
export function filterList(state, filter={name: 'default'}){
    switch(filter.name){
        case 'a-z':
            return [...state].sort(function(a, b){
                let nameA=a.Title.toLowerCase(), nameB=b.Title.toLowerCase();
                if (nameA < nameB)
                 return -1;
                if (nameA > nameB)
                 return 1;
                return 0;
               });
        case 'rating_desc':
            return [...state].sort((a,b) => Number(a.rating)-Number(b.rating)).reverse();
        case 'rating_asc':
            return [...state].sort((a,b) => Number(a.rating)-Number(b.rating));
        case 'year_desc':
            return [...state].sort((a,b) => parseInt(a.Year)-parseInt(b.Year)).reverse();
        case 'year_asc':
            return [...state].sort((a,b) => parseInt(a.Year)-parseInt(b.Year));
        case 'title':
            return state.filter(item => item.Title.toLowerCase().includes(filter.value.toLowerCase()))
        case 'movie':
            return state.filter(item => item.Type==='movie');
        case 'series':
            return state.filter(item => item.Type==='series');
        case 'episode':
            return state.filter(item => item.Type==='episode');
        default:
            return state;
    }
}
import {search} from '../api/';

const SEARCHING_FILMS = 'SEARCHING_FILMS';
const FILMS_FETCHED = 'FILMS_FETCHED';
const FILMS_ERROR = 'FILMS_ERROR';

const ADD_TO_WATCHED_LIST = 'ADD_TO_WATCHED_LIST';
const DELETE_FROM_WATCHED_LIST = 'DELETE_FROM_WATCHED_LIST';

const ADD_TO_WATCH_LIST = 'ADD_TO_WATCH_LIST';
const DELETE_FROM_WATCH_LIST = 'DELETE_FROM_WATCH_LIST';

const searchFilms = (payload) => (dispatch) => {
    dispatch(startFetching());
    search(payload)
    .then(response => response.json())
    .then(data => {
        if(data.Error){
            throw(data.Error)
        }else{
            dispatch(filmsFetched(data))
        }
    })
    .catch(error => dispatch(filmsError(error)))
}

const startFetching = (payload) => ({
    type: SEARCHING_FILMS,
    payload
})

const filmsFetched = (payload) => ({
    type: FILMS_FETCHED,
    payload
})

const filmsError = (payload) => ({
    type: FILMS_ERROR,
    payload
})

const addToWatchedList = (payload) => ({
    type: ADD_TO_WATCHED_LIST,
    payload
})

const deleteFromWatchedList = (payload) => ({
    type: DELETE_FROM_WATCHED_LIST,
    payload
})

const deleteFromWatchList = (payload) => ({
    type: DELETE_FROM_WATCH_LIST,
    payload
})

const addToWatchList = (payload) => ({
    type: ADD_TO_WATCH_LIST,
    payload
})

export {SEARCHING_FILMS, FILMS_FETCHED, FILMS_ERROR, ADD_TO_WATCHED_LIST, 
    ADD_TO_WATCH_LIST, DELETE_FROM_WATCH_LIST, 
    DELETE_FROM_WATCHED_LIST, addToWatchedList, addToWatchList, 
    deleteFromWatchList, deleteFromWatchedList, searchFilms}
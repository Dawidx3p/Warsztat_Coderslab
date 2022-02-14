import {search, getDetails} from '../api/';

const SEARCHING_FILMS = 'SEARCHING_FILMS';
const FILMS_FETCHED = 'FILMS_FETCHED';
const FILMS_ERROR = 'FILMS_ERROR';

const ADD_TO_WATCHED_LIST = 'ADD_TO_WATCHED_LIST';
const DELETE_FROM_WATCHED_LIST = 'DELETE_FROM_WATCHED_LIST';
const CHANGE_RATING = 'CHANGE_RATING';
const SET_WATCH_LIST = 'SET_WATCH_LIST';

const ADD_TO_WATCH_LIST = 'ADD_TO_WATCH_LIST';
const SET_WATCHED_LIST = 'SET_WATCHED_LIST';
const DELETE_FROM_WATCH_LIST = 'DELETE_FROM_WATCH_LIST';

const FETCHING_DETAILS = 'FETCHING_DETAILS';
const FETCHED_DETAILS = 'FETCHED_DETAILS';
const DETAILS_ERROR = 'DETAILS_ERROR';


const getFilmDetails = (id) => (dispatch) => {
    dispatch(fetchDetails());
    getDetails(id)
    .then(response => response.json())
    .then(data => {
        if(data.Error){
            throw(data.Error)
        }else{
            dispatch(fetchedDetails(data))
        }
    })
    .catch(error => dispatch(detailsError(error)))
}

const fetchDetails = (payload) => ({
    type: FETCHING_DETAILS,
    payload
})

const fetchedDetails = (payload) => ({
    type: FETCHED_DETAILS,
    payload
})

const detailsError = (payload) => ({
    type: DETAILS_ERROR,
    payload
})

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

const setToWatchList = (payload) => ({
    type: SET_WATCH_LIST,
    payload
})

const setWatchedList = (payload) => ({
    type: SET_WATCHED_LIST,
    payload
})

const changeRating = (payload) => ({
    type: CHANGE_RATING,
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

export {SEARCHING_FILMS, FILMS_FETCHED, FILMS_ERROR, ADD_TO_WATCHED_LIST, CHANGE_RATING, 
    ADD_TO_WATCH_LIST, DELETE_FROM_WATCH_LIST, SET_WATCH_LIST, SET_WATCHED_LIST, FETCHING_DETAILS, 
    FETCHED_DETAILS, DETAILS_ERROR,
    DELETE_FROM_WATCHED_LIST, addToWatchedList, changeRating, addToWatchList, 
    deleteFromWatchList, deleteFromWatchedList, searchFilms, setToWatchList, setWatchedList, getFilmDetails}
import { combineReducers } from 'redux';
import { ADD_TO_WATCHED_LIST, CHANGE_RATING, DELETE_FROM_WATCHED_LIST, ADD_TO_WATCH_LIST, DELETE_FROM_WATCH_LIST, SEARCHING_FILMS, FILMS_FETCHED, FILMS_ERROR, SET_WATCHED_LIST, SET_WATCH_LIST, FETCHING_DETAILS, FETCHED_DETAILS, DETAILS_ERROR } from './actions';

function watchedList(state=[], {type, payload}){
    switch(type){
        case ADD_TO_WATCHED_LIST:
            return [...state, payload];
        case CHANGE_RATING:
            return [...state.filter(film => film.imdbID!==payload.imdbID), payload]
        case DELETE_FROM_WATCHED_LIST:
            return state.filter(film => film.imdbID!==payload.imdbID);
        case SET_WATCHED_LIST:
            return payload;
        default:
            return state;
    }
}

function toWatchList(state=[], {type, payload}){
    switch(type){
        case ADD_TO_WATCH_LIST:
            return [...state, payload];
        case DELETE_FROM_WATCH_LIST:
            return state.filter(film => film.imdbID!==payload.imdbID);
        case SET_WATCH_LIST:
            return payload;
        default:
            return state;
    }
}

const initialState = {
    loading: false,
    error: "",
    films: null
  }
  const initialStateDetails = {
    loading: false,
    error: "",
    details: null
  }

function moviesSearch(state=initialState, {type, payload}){
    switch(type){
        case SEARCHING_FILMS:
            return {loading: true, films: null, error: ''};
        case FILMS_FETCHED:
            return {loading: false, films: payload, error: ''};
        case FILMS_ERROR:
            return {loading: false, films: null, error: payload};
        default: 
            return state;
    }
}

function details(state=initialStateDetails, {type, payload}){
    switch(type){
        case FETCHING_DETAILS:
            return {loading: true, details: null, error: ''};
        case FETCHED_DETAILS:
            return {loading: false, details: payload, error: ''};
        case DETAILS_ERROR:
            return {loading: false, details: null, error: payload};
        default:
            return state
    }
}

export default combineReducers({moviesSearch, watchedList, toWatchList, details})
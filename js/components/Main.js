import React, { useState } from "react";
import { Provider } from "react-redux";

import store from '../redux/store';
import Navbar from "./Navbar";
import SearchBar from "../containers/SearchBar";
import SearchResults from "../containers/SearchResults";

export default function Main(){
    return(
        <Provider store={store}>
            <Navbar />
            <SearchBar />
            <SearchResults/>
        </Provider>
    )
}
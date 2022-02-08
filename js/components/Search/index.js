import React from "react";
import SearchBar from "../../containers/SearchBar";
import SearchResults from "../../containers/SearchResults";
import Navbar from "../Navbar";

export default function Search(){
    return(
        <>
        <Navbar />
        <SearchBar />
        <SearchResults />
        </>
    )
}
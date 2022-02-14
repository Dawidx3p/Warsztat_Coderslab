import React, { useEffect } from "react";
import Rating from "../containers/Rating";
import Navbar from "./Navbar";

export default function Details({details, onFetch}){
    useEffect(() => {
        onFetch()
    },[])
    return(
        <>
        <Navbar />
        {details.details && <div className="detailsContainer">
            <div className="detailsPicture">
            <h2>{details.details.Title}</h2>
            <img src={details.details.Poster} />
            <Rating imdbID={details.details.imdbID} Poster={details.details.Poster}/>
            </div>
            <div  className="detailsRight">
                <p>Year: {details.details.Year}</p>
                <p>Director: {details.details.Director}</p>
                <p>Description: {details.details.Plot}</p>
            </div>
        </div>}
        </>
    )
}
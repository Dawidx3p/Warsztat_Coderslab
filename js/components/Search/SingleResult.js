import React from "react";
import Rating from "../../containers/Rating";

export default function SingleResult({Poster, imdbID}){
    return(
        <div className="singleResult">
            <img src={Poster}/>
            <Rating imdbID={imdbID} Poster={Poster}/>
        </div>
    )
}
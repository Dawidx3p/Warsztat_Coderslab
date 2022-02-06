import React from "react";
import Rating from "./Rating";

export default function SingleResult({Poster}){
    return(
        <div className="singleResult">
            <img src={Poster}/>
            <Rating />
        </div>
    )
}
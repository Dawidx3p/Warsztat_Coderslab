import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../containers/Rating";

export default function SingleResult(props){
    const {Poster, imdbID} = props;
    return(
        <div className="singleResult">
            <Link to={`${imdbID}`}><img src={Poster}/></Link>
            <Rating {...props}/>
        </div>
    )
}
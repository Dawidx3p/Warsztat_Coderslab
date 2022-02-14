import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link to='/'>Search</Link></li>
                <li><Link to='/watched'>Watched</Link></li>
                <li><Link to='/to_watch'>To Watch</Link></li>
            </ul>
        </nav>
    )
}
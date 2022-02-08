import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link to='/'>Wyszukiwarka</Link></li>
                <li><Link to='/watched'>Obejrzane</Link></li>
                <li><Link to='/to_watch'>Do obejrzenia</Link></li>
            </ul>
        </nav>
    )
}
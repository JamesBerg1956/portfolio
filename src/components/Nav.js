import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav(){

    const location = useLocation();

    return(
        <ul>
            <li>
                <Link to="/About">
                    About
                </Link>
                <Link to="/Portfolio">
                    Portfolio
                </Link>
                <Link to="/Contact">
                    Contact
                </Link>
            </li>
        </ul>
    );

}

export default Nav;
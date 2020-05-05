import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation(){

    return(

        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    
                    <Link to="/About">
                        About
                    </Link>
                
                    <Link to="/Portfolio">
                        Portfolio
                    </Link>
                
                    <Link to="/Contact">
                        Contact
                    </Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        // <ul>
        //     <li>
        //         <Link to="/About">
        //             About
        //         </Link>
        //     </li>
        //     <li>
        //         <Link to="/Portfolio">
        //             Portfolio
        //         </Link>
        //     </li>
        //     <li>
        //         <Link to="/Contact">
        //             Contact
        //         </Link>
        //     </li>
        // </ul>
    );

}

export default Navigation;
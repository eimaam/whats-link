import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInfo} from "@fortawesome/free-solid-svg-icons"

export default function Nav(){
    return(
        <nav>
            <ul>
                <li><FontAwesomeIcon icon={faInfo} /> LEARN </li>
                <li>GET LINK</li>
                <li>ABOUT US</li>
                <li>CONTACT US</li>
                <li>SOURCE CODE</li>
                <li>MORE APPS</li>
            </ul>
        </nav>
    )
}
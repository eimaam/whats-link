import React from "react";
import {FaInfo, FaBars, FaCaretLeft} from "react-icons/fa";
import { HashLink } from "react-router-hash-link"

export default function Nav(){
    const body = document.getElementById("main");
    const mNav = document.getElementById("mNav");

    
    // Mobile Navigation setup
    function showHideNav(){
        const hamburger = document.getElementById("hamburger") 
        const closeNav = document.getElementById("closeNav");

        if(mNav.style.display !== "block"){
            mNav.style.display = "block"
            closeNav.style.display = "block"
            hamburger.style.display = "none"
        }else{
            mNav.style.display = "none"
            closeNav.style.display = "none"
            hamburger.style.display = "block"

        }
        
    }
    // Hide Nav on body click
    // function bodyHide(){
    //     if(mNav.style.display == "block"){
    //         mNav.style.display = "none"
    //     }
    // }
    // body.addEventListener("click", bodyHide);
// Function end

    return(
        <>
        <nav>
            <h2 className="site-title">Whats-Link</h2>
            <ul>
                <HashLink to="#steps"><li><FaInfo /> LEARN </li></HashLink>
                <li>GET LINK</li>
                <li>ABOUT US</li>
                <li><a href="mailto:1leadtechie@gmail.com">CONTACT US </a></li>
                <li><a href="github.com/eimaam/whats-link">SOURCE CODE</a></li>
                <li>MORE APPS</li>
            </ul>
            <FaBars id="hamburger" className="bars" onClick={showHideNav}/>
        </nav>

        <div id="mNav">
            <FaCaretLeft id="closeNav" className="close" onClick={showHideNav}/>
            <ul>
                <HashLink to="#steps"><li><FaInfo /> LEARN </li></HashLink>
                <li>GET LINK</li>
                <li>ABOUT US</li>
                <li><a href="mailto:1leadtechie@gmail.com">CONTACT US </a></li>
                <li><a href="github.com/eimaam/whats-link">SOURCE CODE</a></li>
                <li>MORE APPS</li>
            </ul>
        </div>
        </>
    )
}
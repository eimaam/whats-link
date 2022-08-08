import React from "react";
import Nav from "./Nav";
import chart from "../Assets/images/chart.png" 
import { HashLink } from "react-router-hash-link"

export default function Header(){
    return(
        <header>
            <Nav />
            <div id="header">
                <div>
                    <h1>WHATS-LINK</h1>
                    <h2>Generate your personal WhatsApp Contact Link in 3 easy steps!</h2>
                    <h3>Make reaching you easier for your Customers. </h3>
                    <HashLink to="#form">
                        <button>Generate Link</button>
                    </HashLink>
                </div>
                <div id="headerImg">
                    <img src={chart} alt="Charts, graph, stock" />
                </div>
            </div>
        </header>
    )
}
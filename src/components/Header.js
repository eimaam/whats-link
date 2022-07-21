import React from "react";
import Nav from "./Nav";
import chart from "../Assets/images/chart.png" 

export default function Header(){
    return(
        <header>
            <Nav />
            <div id="header">
                <div>
                    <h1>WHATS-LINK</h1>
                    <h2>Generate your personal WhatsApp Contact Link in 3 easy steps!</h2>
                    <h3>Give your Business more attention!</h3>
                    <button>Generate Link</button>
                </div>
                <div id="headerImg">
                    <img src={chart} alt="Charts, graph, stock" />
                </div>
            </div>
        </header>
    )
}
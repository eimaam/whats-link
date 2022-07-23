import React from "react";
import {HashLink} from "react-router-hash-link"
export default function Footer(){
    return (
        <footer>
            <div id="footer">
                <div>
                    <h4>Whats-Link.</h4>
                    <p>About</p>
                    <p><a href="mailto:1leadtechie@gmail.com" target="_blaank" rel="noreferrer"> Contact Us</a></p>
                    <p><a href="https://github.com/eimaam/whats-link" target="_blaank" rel="noreferrer">Source Code</a></p>
                </div>
                <div>
                    <h4>Quick Links:</h4>
                    <ul>
                        <HashLink to="#steps"><ol>User Guide</ol></HashLink>
                        <ol>Get More Apps</ol>
                        <ol>Social Media Management Tools</ol>
                    </ul>
                </div>
                <div>
                    <h4>Reach Us:</h4>
                    <p>whatslink@techdesk.io</p>
                </div>
            </div>
            <div className="endNote">
                <div>
                    <p>Built by <a href="techdesk.vercel.app">Tech Desk Inc.</a> All rights reserved. &copy; 2022</p>
                </div>
                <div>
                    <p>Privacy Policy. Terms and Conditions. Documentation.</p>
                </div>
            </div>
        </footer>
    )
}
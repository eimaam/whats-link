import React from "react";

export default function Footer(){
    return (
        <footer>
            <div id="footer">
                <div>
                    <h4>Whats-Link.</h4>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>Source COde</p>
                </div>
                <div>
                    <h4>Quick Links:</h4>
                    <ul>
                        <ol>User Guide</ol>
                        <ol>Get MOre Apps</ol>
                        <ol>Social Media Management Tools</ol>
                    </ul>
                </div>
                <div>
                    <h4>Reach Us:</h4>
                    <p>Whatslink@techdesk.io</p>
                </div>
            </div>
            <div className="endNote">
                <div>
                    <p>Built by Tech Desk Inc. All rights reserved. &copy; 2022</p>
                </div>
                <div>
                    <p>Privacy Policy. Terms and Conditions. Documentation.</p>
                </div>
            </div>
        </footer>
    )
}
import React from "react";
import steps from "../Assets/images/WhatsApp-Link-In-Signatures.jpg"
import {FaWhatsapp, FaLink, FaRocketchat, FaAngleDoubleRight} from "react-icons/fa"


export default function Steps(){
    return(
        <div id="steps">
            <div>
                <div className="test">
                    <h2> Get Link in 3 easy steps </h2>
                    <div>
                        <FaAngleDoubleRight className="FaAngleDoubleRight"/>
                    </div>
                </div>
                
                <div className="steps">
                    <div>
                        <FaWhatsapp className="step-icons"/>
                        <h2> Open Whats-Link </h2>
                        <p>Visit Whats-Link from your browser and click on the generate personal link from the first page.</p>
                    </div>
                    <div>
                        <FaRocketchat className="step-icons"/>
                        <h2> Click on Generate Link </h2>
                        <p>Fill in the form with your Phone number and predefined message (if needed).</p>
                    </div>
                    <div>
                        <FaLink className="step-icons"/>
                        <h2> Get your Link</h2>
                        <p>Hit Enter or Click on the "Generate Link" Button. Now you've your personal Link.</p>
                        <p>Copy your generated Link and share!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
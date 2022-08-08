import React from "react";
import {FaWhatsapp, FaLink, FaRocketchat, FaAngleDoubleRight, FaAngleDoubleDown} from "react-icons/fa"


export default function Steps(){
    return(
        <div id="steps">
            <div>
                <div className="step1">
                    <h2> Get Link in 3 easy steps </h2>
                    <div>
                        <FaAngleDoubleRight className="FaAngleDoubleRight"/>
                        <FaAngleDoubleDown className="FaAngleDoubleDown"/>
                    </div>
                </div>
                
                <div className="steps">
                    <div>
                        <FaWhatsapp className="step-icons"/>
                        <h2> Open Whats-Link </h2>
                        <p>Visit Whats-Link from your browser and click on the generate link from the first page or navigation menu.</p>
                    </div>
                    <div>
                        <FaRocketchat className="step-icons"/>
                        <h2> Enter Phone Number &amp; Type-in personalized message... </h2>
                        <p>Fill in the form with your Phone number and predefined message (if needed).</p>
                    </div>
                    <div>
                        <FaLink className="step-icons"/>
                        <h2> Get your Link</h2>
                        <p>Hit Enter or Click on the "Generate Link" Button. Voila!🥳 Your personal link will be displayed under.</p>
                        <p>Now you can add a WhatsApp Contact button with custom messages to your Business page(s).</p>
                        <p>Copy and Share your Link!🎊</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
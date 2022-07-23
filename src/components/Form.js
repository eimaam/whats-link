import React, { useState } from "react";

// image
import messsaging from "../Assets/images/wa-display.webp"

export default function Form(){
    const [Link, setLink] = useState(null);
     
    // Function to generate Link
    function generate(){
        const errorMessage =  document.getElementById("errorMessage");
        const contact = document.getElementById("number");
        const customMessage = document.getElementById("customMessage");
        const res = `https://api.whatsapp.com/send?phone=+${contact.value}&text=${customMessage.value}`;
        const result = res.replace(/\s/g, '%20');
        
        // Check if Phone Number field is empty and throw error
        let contact_value = contact.value; 
        if(contact_value === ""){
            return errorMessage.innerHTML = "Number cannot be empty! Phone Number needed to generate Link."
        }else{
            errorMessage.innerHTML = ""
        }
        if(contact_value.length < 3){
            return errorMessage.innerHTML = "Phone Number incorrect"
        }
        setLink(result)
    };
    
     
    function keyPressAction(event){
        const errorMessage =  document.getElementById("errorMessage");
        const contact = document.getElementById("number");
        const customMessage = document.getElementById("customMessage");
        const res = `https://api.whatsapp.com/send?phone=+${contact.value}&text=${customMessage.value}`;
        const result = res.replace(/\s/g, '%20');

        // Check if Phone Number field is empty and throw error
        if(contact.value === ""){
            return errorMessage.innerHTML = "Number can't be empty! Phone Number needed to generate Link!"
        }else{
            errorMessage.innerHTML = ""
        }

        // Generate Link on Pressing Enter key
        if(event.keyCode === 13){
            setLink(result);
        }
    }
    
    
   
        

    return (
        <div id="form">
            <div>
                <div>
                    <img src={messsaging} alt="whatsapp ui" />
                </div>
                <div id="form-data">
                    <input 
                    id="number" 
                    type="text" 
                    placeholder="Number with Country Code (e.g 2348012345678"
                    onKeyUp={keyPressAction}
                    />
                    <h3>Enter message your Customers/Clients should see when contacting you:</h3>
                    <textarea 
                    name="customMessage"
                    id="customMessage" 
                    type="text" 
                    placeholder="Enter Personalized Message..."
                    rows={15}
                    onKeyUp={keyPressAction}
                    />

                    <button onClick={generate}>Generate Link</button>
                    
                    <div id="resultLink">
                        <a href={Link} target="_blank" rel="noreferrer">{Link}</a>
                    </div>

                    <p id="errorMessage"></p>
                </div>
            </div>
        </div>
    )
}
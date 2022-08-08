import React, { useState } from "react";
import {FaCopy} from "react-icons/fa"
// react-phone-number-input package
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'

// image
import WAtemplate from "../Assets/images/whatsapp-template.jpg"

export default function Form(){
    // State for managing Link generation
    const [Link, setLink] = useState(null);
    // setting state of input to react-phone-number-input package defined states
    const [value, setValue] = useState()

    // Function to generate Link
    function generate(){
        const errorMessage =  document.getElementById("errorMessage");
        const customMessage = document.getElementById("customMessage");
        const res = `https://api.whatsapp.com/send?phone=${value}&text=${customMessage.value}`;
        let result = res.replace(/\s/g, '%20');
        
        // Check if Phone Number field is empty and throw error
        // let contact_value = contact.value; 
        if(value === undefined){
            return errorMessage.innerHTML = "Phone Number cannot be empty! Its required to generate a Link."
        }else{
            errorMessage.innerHTML = ""
        }
        if(value < 3){
            return errorMessage.innerHTML = "Phone Number incorrect"
        }
        if(customMessage.value === ""){
            result = res.replace(/\s/g, '%20');
            result = res.replace("+", "")
        }
        setLink(result)
    };
    
     
    function keyPressAction(event){
        const errorMessage =  document.getElementById("errorMessage");
        const phoneNumber = document.getElementById("number");
        const customMessage = document.getElementById("customMessage");
        const res = `https://api.whatsapp.com/send?phone=${phoneNumber.value}&text=${customMessage.value}`;
        // replace white whitespaces in custom message with "%20" in order to follow the
        // default WhatsApp link design 
        const result = res.replace(/\s/g, '%20');

        // Check if Phone Number field is empty and throw error
        if(phoneNumber.value === ""){
            return errorMessage.innerHTML = "Number can't be empty! Phone Number needed to generate Link!"
        }else{
            errorMessage.innerHTML = ""
        }

        // Generate Link on Pressing Enter key
        if(event.keyCode === 13){
            setLink(result);
        }
    }

    // Copy generated link
    const copyText = () =>{
        const errorMessage =  document.getElementById("errorMessage");
        const result = document.getElementById("output");
        
        if(result === ""){
            errorMessage.innerHTML = "No Link generated!"
        }else{
            navigator.clipboard.writeText(result);
        }
    }
    
   
// Page content
    return (
        <div id="form">
            <div>
                <div className="template-img">
                    <img src={WAtemplate} alt="whatsapp ui" />
                </div>
                <div id="form-data">
                    {/* React-phone-number-input <PhoneInput /> package component*/}
                    <PhoneInput
                        className="PhoneInput"
                        id="number"
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                        onKeyUp={keyPressAction}
                        defaultCountry="NG"
                        limitMaxLength={true}
                    />
                    <h3>Enter personalized message your Customers/Clients will send to you: </h3>
                    <textarea 
                        name="customMessage"
                        id="customMessage" 
                        type="text" 
                        placeholder="Enter Personalized Message..."
                        rows={15}
                        onKeyUp={keyPressAction}
                    />

                    <p id="errorMessage"></p>
                    <button onClick={generate}>Generate Link</button>
                    
                    {/* Result Link displayed on condition that Phone number field is not empty */}
                    {
                    Link && 
                    <div id="resultLink">
                        <a id="output" href={Link} target="_blank" rel="noreferrer">{Link}</a>
                        <p onClick={copyText}><FaCopy className="FaCopy"/></p>
                    </div>}

                </div>
            </div>
        </div>
    )
}
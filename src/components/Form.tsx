import React, { useState } from "react";
import { FaCopy } from "react-icons/fa"
// react-phone-number-input package
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'

// image
import WAtemplate from "../assets/images/whatsapp-template.jpg"

const Form: React.FC = () => {
    // State for managing Link generation
    const [Link, setLink] = useState<string | null>(null);
    // setting state of input to react-phone-number-input package defined states
    const [value, setValue] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [customMessage, setCustomMessage] = useState<string | null>(null);

    // Function to generate Link
    function generate() {
        const res = `https://api.whatsapp.com/send?phone=${value}&text=${customMessage}`;
        let result = res.replace(/\s/g, '%20');

        // Check if Phone Number field is empty and throw error
        // let contact_value = contact.value; 
        if (!value) {
            setErrorMessage("Phone Number cannot be empty! Its required to generate a Link.");
        }

        // validate phone number using regex
        const phoneNumberRegex = /^(\+?\d{1,3}[-.\s]?)?\d{10}$/;
        if (!phoneNumberRegex.test(value)) {
            setErrorMessage("Phone Number incorrect");
        }

        if (!customMessage) {
            setErrorMessage("Custom Message cannot be empty!");
        }

        setLink(result);
    };


    function keyPressAction(event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const res = `https://api.whatsapp.com/send?phone=${value}&text=${customMessage}`;
        // format the result to be a valid URL
        const result = encodeURIComponent(res);

        // Generate Link on Pressing Enter key
        if (event.key === "Enter") {
            setLink(result);
        }
    }

    const copyText = (text: string) => {
        if (!text) {
            return;
        }
        navigator.clipboard.writeText(text);
    }


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
                        value={value || ""}
                        onChange={(value: string | undefined) => setValue(value)}
                        onKeyUp={keyPressAction}
                        defaultCountry="NG"
                        limitMaxLength={true}
                    />
                    <h3>Enter personalized message your Customers/Clients will send to you: </h3>
                    <textarea
                        name="customMessage"
                        id="customMessage"
                        placeholder="Enter Personalized Message..."
                        rows={15}
                        onKeyUp={(event: React.KeyboardEvent<HTMLTextAreaElement>) => keyPressAction(event)}
                    />

                    <p id="errorMessage"></p>
                    <button onClick={generate}>Generate Link</button>

                    {/* Result Link displayed on condition that Phone number field is not empty */}
                    {
                        Link &&
                        <div id="resultLink">
                            <a id="output" href={Link} target="_blank" rel="noreferrer">{Link}</a>
                            <button type="button" onClick={() => copyText(Link)}>
                                <FaCopy className="FaCopy" />
                            </button>
                        </div>}

                </div>
            </div>
        </div>
    )
}

export default Form;
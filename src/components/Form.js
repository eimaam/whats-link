import React from "react";

export default function Form(){
    const [Link, setLink] = useState("");

     const errorMessage =  document.getElementById("errorMessage");
     const contact = document.getElementById("number");
     const customMessage = document.getElementById("customMessage");
     
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
    
    // Function to generate Link
    function generate(){
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

        setLink(result)
    };
    
   
        

    return (
        <div>
                <input 
                id="number" 
                type="text" 
                placeholder="Enter Number with Country Code"
                // onKeyUp={keyPressAction}
                />
                <input 
                name="customMessage"
                id="customMessage" 
                type="text" 
                placeholder="Enter Custom Text"
                // onKeyUp={keyPressAction}
                />
                <button onClick={generate}>Generate Link</button>
                <div>
                    <a href={Link} target="_blank">{Link}</a>
                </div>
                <p id="errorMessage"></p>
        </div>
    )
}
import React from "react";

export default function Section(props){
    return(
        <>
            <div>
                <h2>{props.label}</h2>
                <p>{props.detail}</p>
            </div>
            <button>{props.label}</button>
        </>
    )
}
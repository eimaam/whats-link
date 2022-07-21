import React from "react";

export default function Section(props){
    return(
        <section>
            <div id="section">
                <div>
                    <h2>{props.label}</h2>
                    <p>{props.detail}</p>
                </div>
                <button>{props.btnLabel}</button>
            </div>
        </section>
    )
}
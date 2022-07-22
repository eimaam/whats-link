import React from "react";

export default function Section(props){
    return(
        <section>
            <div id="section">
                <div>
                    <h2>{props.label1}</h2>
                    <h2>{props.label2}</h2>
                    <p>{props.detail}</p>
                </div>
                <button>{props.btnLabel}</button>
            </div>
        </section>
    )
}
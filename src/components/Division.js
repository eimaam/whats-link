import React from "react";
import {FaWhatsapp, FaLink} from "react-icons/fa"


export default function Division(props){
    const image_first = props.imageFirst;
    if(image_first){
        return (
            <div id="division">
                <div>
                    <div>
                        <img src={props.image} alt="" />
                    </div>
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.content}</p>
                        {props.showButton && <button>{props.btnLabel}</button>}
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div id="division">
                <div>
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.content}</p>
                        {props.showButton && <button>{props.btnLabel}</button>}
                    </div>
                    <div>
                        <img src={props.image} alt="" />
                    </div>
                </div>
            </div>
        )
    }
    
}
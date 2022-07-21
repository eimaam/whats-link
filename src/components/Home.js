import React from "react";
import Division from "./Division";
import Header from "./Header";
import chart from "../Assets/images/chart.png" 

export default function Home(){  
     return(
        <>
            <Header />
            <div className="main">
                <Division
                imageFirst={false} 
                image={chart}
                title="Get professional with your business"
                content="Give your business a better standing and look more professional with some of our business tools!"
                btnLabel="read more"
                />
            </div>
        </>
     )
}
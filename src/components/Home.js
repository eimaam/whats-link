import React from "react";
import Division from "./Division";
import Header from "./Header";
import chart from "../Assets/images/chart.png" 
import Section from "./Section";
import Steps from "./Steps";
import Footer from "./Footer";

export default function Home(){  
     return(
        <>
            <Header />
            <div className="main">
                <Division
                imageFirst={true} 
                image={chart}
                title="Get professional with your business"
                content="Give your business a better standing and look more professional with some of our business tools!"
                btnLabel="read more"
                />
                <Steps />
                <Section 
                label="Reach more Customers? Lets us manage your social Accounts"
                detail="With our qualified team of Social Media Managers and Business strategist be sure to get more traffic when we help you market."
                btnLabel="Check pricing"
                />

                <Footer />
            </div>
        </>
     )
}
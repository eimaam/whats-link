import React from "react";
import Division from "./Division";
import Section from "./Section";
import Steps from "./Steps";
import Footer from "./Footer";
// images
import chart from "../Assets/images/chart.png" 
import waLink from "../Assets/images/undraw_share_link_re_54rx.svg"
import Form from "./Form";

export default function Home(){  
     return(
        <>
            <div id="main" className="main" >
                <Division
                imageFirst={true} 
                image={waLink}
                title="Get professional with your business"
                content="Give your business a better standing and look more professional with some of our business tools!"
                btnLabel="read more"
                />
                <Steps />
                <Section 
                label1="Reach more Customers?"
                label2="Lets us manage your social Accounts"
                detail="With our qualified team of Social Media Managers and Business strategist be sure to get more traffic when we help you market."
                btnLabel="Check pricing"
                />
                <Form />

                <Footer />
            </div>
        </>
     )
}
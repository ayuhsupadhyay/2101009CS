import React from "react";
import Card from "./Card";

const Testimonial=(props)=>{
    let review=props.review; 
    return (
        <div>
            <Card review={review[0]}></Card>

        </div>

    );
}
export  default Testimonial;
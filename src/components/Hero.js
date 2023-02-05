import React from "react";
import Carousel from "./Carosel";
// import Instagram from "./Instagram";
import Myself from './Myself';
import Testimonial from "./Testimonial";
// import MyworkBasic from "./MyworkBasic";


const Hero = () => {
    return (<>
        <div className="container">
            <Carousel />
            <Myself />
            <Testimonial/>
            {/* <MyworkBasic /> */}
            {/* <Instagram/> */}
        </div>
    </>
    )
}

export default Hero;
 

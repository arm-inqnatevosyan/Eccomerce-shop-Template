import React from "react";
import img from "../img/banner/b2.jpg";

function Services(){
    return(
        <div className="div6">
            <img src={img} />
            <div className="div7">
                <h5>Repoir Services</h5>
                <h1>Up To <b>70% Off</b> - All t-Shirts & Accessoires</h1>
                <button>Explore More</button>
            </div>
        </div>
    )
}
export default Services;
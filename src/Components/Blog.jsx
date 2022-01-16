import React from "react";
import img from "../img/banner/b17.jpg";
import img1 from "../img/banner/b10.jpg";

function Blog(){
    return(
        <div className="blog">
            <div className="blogs">
            <div className="img-bloks">
               <img src={img} id="blok-img"/>
            </div>
            <div className="blog-texts">
                <h5>crazy deals</h5>
                <h1>buy 1 get free</h1>
                <h6>The best classic dress on sole at card</h6>
                <div>
                    <button className="btn3">Learn More</button>
                </div>
            </div>
            </div>
            <div className="blogs1">
            <div className="img-bloks1">
               <img src={img1} id="blok-img1"/>
            </div>
            <div className="blog-texts1">
                <h5>spring/summer</h5>
                <h1>upcomming season</h1>
                <h6>The best classic dress on sole at card</h6>
                <div>
                    <button className="btn4">Collection</button>
                </div>
            </div>
            </div>
            </div>
    )
}
export default Blog;
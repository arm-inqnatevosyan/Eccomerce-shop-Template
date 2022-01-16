import React from "react";
import img from  "../img/banner/b7.jpg";
import img1 from  "../img/banner/b4.jpg";
import img2 from  "../img/banner/b18.jpg";

function Blog1(){
    return (
        <div className="blogss2">
            <div className="blogs-div2">
                <img src={img} />
                <div className="blog-texts2">
                    <h2>Seasonal Sale</h2>
                    <h5>Winter Collection - 50% OFF</h5>
                </div>
            </div>
            <div className="blogs-div3">
                <img src={img1} />
                <div className="blog-texts3">
                    <h2>New FooterWear Collection</h2>
                    <h5>Spring/Summer 2022</h5>
                </div>
            </div>
            <div className="blogs-div4">
                <img src={img2} />
                <div className="blog-texts4">
                    <h2>T-Shirts</h2>
                    <h5>New Trendly Prihis</h5>
                </div>
            </div>
        </div>
    )
}
export default Blog1;
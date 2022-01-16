import React from "react";
import image from "../img/features/f1.png";
import image1 from "../img/features/f2.png";
import image2 from "../img/features/f3.png";
import image3 from "../img/features/f4.png";
import image4 from "../img/features/f5.png";
import image5 from "../img/features/f6.png";

function Section(){
    return(
      <section>
          <div className="div3">
            <img src={image} />
            <div className="btn-div">
            <button className="btn2" id="one-btn">Free Shoping</button>
            </div>
         </div>
         <div className="div3">
          <img src={image1} />
             <div className="btn-div">
              <button className="btn2" id="two-btn">Online Order</button>
            </div>
         </div>
         <div className="div3">
              <img src={image2} />
            <div className="btn-div">
              <button className="btn2" id="three-btn">Save Money</button>
            </div>
          </div>
         <div className="div3">
           <img src={image3} />
           <div className="btn-div">
              <button className="btn2" id="four-btn">Promotions</button>
            </div>
         </div>
         <div className="div3">
           <img src={image4} />
           <div className="btn-div">
              <button className="btn2" id="five-btn">Happy Sell</button>
            </div>
         </div>
         <div className="div3">
           <img src={image5} />
           <div className="btn-div">
              <button className="btn2" id="six-btn">F24/7 Support</button>
            </div>
         </div>
         </section>
    )
}
export default Section;
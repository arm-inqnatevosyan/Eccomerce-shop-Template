import React from "react";
import img from "../img/pay/app.jpg";
import img1 from "../img/pay/play.jpg";
import img2 from "../img/pay/pay.png";

function Footer(){
    return (
        <>
        <footer>
            <div className="firsts">
                <h3>Contact</h3>
                <h6>Adress:New York 99123/1</h6>
                <h6>Phone:399112345</h6>
                <h6>Hours:10.00 - 16.00 Mon-Sat</h6>
                <div className="icon-div">
                <h6>Follow Us</h6>
                 <div className="icons">
                  <i class="fab fa-facebook-f" id="icons2"></i>
                  <i class="fab fa-twitter" id="icons"></i>
                  <i class="fab fa-instagram" id="icons"></i>
                  <i class="fab fa-pinterest" id="icons"></i>
                  <i class="fab fa-youtube" id="icons"></i>
                  </div>
                </div>
            </div>
            <div>
                <div className="firsts">About</div>
                <ul className="ul2">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Delivery Information</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Terms & Conditional</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <div className="firsts">My Account</div>
                <ul className="ul2">
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#">View Cart</a></li>
                    <li><a href="#">My Wishlist</a></li>
                    <li><a href="#">Track My Order</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="firsts1">
                <div className="firsts">Install App</div>
                <ul className="ul2">
                    <li><a href="#">From App Store </a></li>
                    <div>
                        <button className="btn3"><img src={img} /></button>
                        <button className="btn3"><img src={img1} /></button>
                    </div>
                </ul>
                <div>
                    <img src={img2} className="img-bank"/>
                </div>
            </div>
        </footer>
        <h1 className="last-h1">2022 Tech2 etc - HTML CSS JS REACT Ecommerce Template</h1>
        </>
    )
}
export default Footer;
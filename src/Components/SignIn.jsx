import React, { useState } from "react";
import img from "../img/banner/b14.png";

function Sign(){
    const [set,newset] = useState('');
    const [get,newget] = useState('');
    return (
        <div className="sign-in">
            <img src={img} className="img5"/>
            <div className="sign-div">
                <h1>Sign Up For Newsletters</h1>
                <h6>Get E-mail uptades about our latest shop and <b>special offers.</b></h6>
            </div>
            <div className="sign-div1">
                <input type="text" placeholder="Your Email Adress..." id="input" onClick={(evt) => {
                      if(set === ''){
                        let inp = document.querySelector("#input");
                        newset(inp.classList.add("red"));
                      }
                  }} onChange={() => {
                    if(get === ''){
                        let inp = document.querySelector("#input");
                        newget(inp.classList.add("green"));
                      }
                  }}/>
                <button id="btn-sign">Sign Up</button>
            </div>
        </div>
    )
}
export default Sign;
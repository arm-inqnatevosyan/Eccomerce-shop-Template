import React, { useState } from "react";
import logo from "../img/logo.png";

function NavBar(){
    const [nav,Setnav] = useState(false);

    const changebg = () => {
        if(window.scrollY >= 50){
            Setnav(true)
        }else{
            Setnav(false)
        }
    }

    window.addEventListener("scroll",changebg);

    return (
        <nav className={nav ? "navactive" : nav}>
            <i class="fas fa-bars" id="open-icon" onClick={() => {
                let ull = document.querySelector(".ull");
                let texts = document.querySelector(".texts-div")
                 let openicon = document.querySelector("#open-icon")
                    ull.classList.add("open")
                    ull.classList.remove("remove")
                    texts.classList.add("open1")
                    texts.classList.remove("remove1")
            }}></i>
            <div className="logo"><img src={logo} /></div>
            <ul className="ull">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#"><i class="fas fa-shopping-bag"></i></a></li>
            <i class="fas fa-times" id="close-icon" onClick={() => {
                let ull = document.querySelector(".ull");
                let texts = document.querySelector(".texts-div")
                let openicon = document.querySelector("#open-icon")
                   ull.classList.add("remove")
                   ull.classList.remove("open")
                   texts.classList.remove("open1")
            }}></i>
            </ul>
        </nav>
    )
}
export default NavBar;
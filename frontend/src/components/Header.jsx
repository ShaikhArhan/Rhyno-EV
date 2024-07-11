import React, { useState } from "react";
import "../Header.css";
import { Link } from "react-router-dom";
export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header id="navbar">
            <div id="logo"></div>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`menu ${isOpen ? "open" : ""}`}>
                <li class="">
                    <Link to="/home"><span >Home</span></Link>
                </li>
                <li class="">
                    <Link to="/about">About</Link>
                </li>
                <li class="expandable">
                    <Link to="/product">Product</Link>
                    <ul class="submenu">
                        <li>
                            <Link to="/product1" id="product1">SE03 Lite</Link>
                        </li>
                        <li>
                            <Link to="/product2" id="product2">SE03</Link>
                        </li>
                        <li>
                            <Link to="/product3" id="product3">SE03 Max</Link>
                        </li>
                        <li>
                            <Link to="/comparisonTable" id="compare">Compare all</Link>
                        </li>
                    </ul>
                </li>
                <li class="">
                    <Link to="/contect">Contect</Link>
                </li>
                <div id="preBook">
                    <Link to="/paymentGateway">PreBook</Link>
                </div>
                <div id="social-link">
                    <div id="instagramLogo"></div>
                    <div id="linkedinLogo"></div>
                </div>
            </ul>
        </header>
    );
};

// import React, { useState } from 'react';
// import "../Header.css";
// import { Link } from 'react-router-dom';

// export const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <header id="navbar">
//             <div id="logo"></div>
//             <div className="hamburger" onClick={toggleMenu}>
//                 &#9776;
//             </div>
//             <ul className={`menu ${isOpen ? "open" : ""}`}>
//                 <li><Link to="/home">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li className="expandable">
//                     <Link to="/product">Product</Link>
//                     <ul className="submenu">
//                         <li><Link id='product1'>SE03 Lite</Link></li>
//                         <li><Link id='product2'>SE03</Link></li>
//                         <li><Link id='product3'>SE03 Max</Link></li>
//                         <li><Link id='compare'>Compare all</Link></li>
//                     </ul>
//                 </li>
//                 <li><Link to="/contact">Contact</Link></li>
//                 <div id="preBook">
//                     <Link to="/pre-book">PreBook</Link>
//                 </div>
//                 <div id='social-link'>
//                     <div id="instagramLogo"></div>
//                     <div id="linkedinLogo"></div>
//                 </div>
//             </ul>
//         </header>
//     );
// }

// #navbar {
//     width: 100%;
//     height: 80px;
//     position: fixed;
//     background-color: #787878;
//     background-repeat: no-repeat;
//     background-size: cover;
//     border: 0.1px solid black;
//     border-radius: 5px 0 5px 25px;
//     display: flex;
//     flex-direction: row;
//   }
//   #navbar #logo {
//     width: 200px;
//     height: auto;
//     border-radius: 5px 0 5px 25px;
//     background-color: #4242425c;
//     margin-left: 0px;
//     background-image: url(../public/images/Nav_Logo.png);
//     background-repeat: no-repeat;
//     background-size: contain;
//   }
//   #navbar li {
//     list-style: none;
//     margin-top: 20px;
//   }

//   #navbar a {
//     color: #252525;
//     text-decoration: none;
//     font-size: 30px;
//     margin-right: 30px;
//     margin-left: 30px;
//     border-radius: 10px;
//     transition: background-color 1.5s, border 0.5s, box-shadow 0.5s, padding 0.5s;
//     padding: 0px 18px;
//   }

//   #navbar a:hover {
//     color: whitesmoke;
//     border-radius: 10% 30% 30% 70%;
//     background-color: #2c2a2ab1;
//     background-image: url(../public/images/final_design_try_2_cross_view.182.png);
//     background-size: cover;
//     padding: 20px 10px;
//   }
//   #navbar #preBook {
//     margin-top: 20px;
//   }
//   #navbar #preBook a:hover {
//     border-radius: 25% 10%;
//     background-image: url(../public/images/Pre-book.png);
//     color: #ffffff;
//   }
//   #social-link {
//     display: flex;
//     flex-direction: column;
//     margin: 6px 0px;
//     justify-content: space-between;
//   }
//   #instagramLogo {
//     background-image: url(../public/images/instagram-logo.png);
//     background-size: cover;
//     width: 30px;
//     height: 30px;
//     border-radius: 30px;
//     border: 2px solid b;
//   }
//   #linkedinLogo {
//     background-image: url(../public/images/linkedin-logo.png);
//     background-size: cover;
//     width: 30px;
//     height: 30px;
//     border-radius: 30px;
//   }

//   .expandable {
//     float: left;
//     overflow: hidden;
//   }
//   .submenu {
//     display: none;
//     position: absolute;
//     /* background-color:  #373737; */
//     background-color: #ffffffb4;
//     border: #252525 solid 1px;
//     min-width: 160px;
//     /* height: 240px; */
//     box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//     z-index: 1;
//   }

//   .submenu a {
//     float: none;
//     color: black;
//     margin: 10px;
//     display: block;
//     text-align: left;
//   }

//   .expandable:hover .submenu {
//     display: block;
//     border-radius: 5% 30% 30%;
//   }
//   .expandable:hover #product1:hover{
//     background-image: url(../public/images/bike.png);
//     border-radius: 30px;
//   }
//   .expandable:hover #product2:hover{
//     background-image: url(../public/images/black.png);
//     border-radius: 30px;
//   }
//   .expandable:hover #product3:hover{
//     background-image: url(../public/images/blue.png);
//     border-radius: 30px;
//   }

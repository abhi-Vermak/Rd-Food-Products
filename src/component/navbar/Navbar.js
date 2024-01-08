
import React,{useState} from "react";
import "./navbar.css";

export default function Navbar() {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const showMenu = () => {
    // setMenuVisibility(!isMenuVisible);
    console.log("button clicked")
  };
   
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/Images/Logo.png" alt="logo"/>
      </div>

      <ul className={`itemList ${isMenuVisible ? "visible" : ""}`}>

        <li className="items">Namkeen</li>
        <li className="items">Maida Items</li>
        <li className="items">Snacks</li>
        <li className="items">Sweets</li>
        <li className="items">Fried Items</li>
        <li className="items">Navratra Items</li>
        <li className="items">Dry Fruits</li>
        <li className="items">Giftings</li>
        <li className="items">About Us</li>
  

      <div className="rightSide">
        <li className="searchBox items">
            <input type="text" id="search" name="search" placeholder="Search Items"/>
          <i className="fa-solid fa-search"></i>
        </li>
        <li className="items"> 
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
        <li className="items">Login</li>
      </div>
      </ul>
      </div>
  );
}

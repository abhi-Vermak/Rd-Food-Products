import React,{useState,useEffect} from "react";
import "./navbar.css";

export default function Navbar () {
    const [menu ,setMenu] = useState(null);
    const[menuButton, setMenuButton] = useState(null);

    useEffect(()=>{
        const navMenu = document.querySelector(".navbarItems");

        const menubtn = document.querySelector(".menu");
        setMenu(navMenu);
        setMenuButton(menubtn);
        
    },[])

  const showMenu = () => {
    console.log("click me ");
    menu.classList.toggle("visible");
    menuButton.classList.toggle("show");
 
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        {/* Navbar Logo image */}
        <div className="logo">
          <img src="./Images/Logo.png" alt="Logo" className="logoImg" />
        </div>

        <div className="navbarItems">
          <ul className="itemList">
            <li className="item">Namkeen</li>
            <li className="item">Navratra Items</li>
            <li className="item">Maida Items</li>
            <li className="item">Fried</li>
            <li className="item">Sweets</li>
            <li className="item">Gifting</li>
          </ul>
          {/* OtherItems */}
          <ul className="otherItems">

            <li>
              <i className="fa-solid fa-search"></i>
            </li>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>
            </li>

            <li className="login">Login</li>
          </ul>

          {/* close Button */}
          <button onClick={showMenu} className="cutButton">
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
      </div>

      {/* Menu button */}
      <button onClick={showMenu} className="menu">
        <i className="fa-solid fa-bars"></i>
      </button>
    </>
  );
}

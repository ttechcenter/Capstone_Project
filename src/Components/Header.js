
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { IoClose, IoMenu } from "react-icons/io5";
import "./MovieCSS.css";

const Header = () => {
 const [showMenu, setShowMenu] = useState(false);

 const toggleMenu = () => {
   setShowMenu(!showMenu);
 };

 const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
 return (
   <header className="header">
     <nav className="nav container">
       <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/" className="nav__link"  onClick={closeMenuOnMobile}>
               Home
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/movies" className="nav__link"  onClick={closeMenuOnMobile}>
               Movies
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/SearchBar"
               className="nav__link"
                onClick={closeMenuOnMobile}
             >
               Top Movies
             </NavLink>
           </li>
         </ul>
         <div className="nav__close" id="nav-close" onClick={toggleMenu}>
           {/* <IoClose /> */}
         </div>
       </div>

       <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
         {/* <IoMenu /> */}
       </div>
     </nav>
   </header>
 );
};

export default Header;
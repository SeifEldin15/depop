import React from 'react';
import "./Navbar.css";
import Bag from "../../assets/pictures/bag.svg";
import SellBtn from "../SellBtn/SellBtn";
import SignupBtn from "../SignupBtn/SignupBtn";
import LoginBtn from "../LoginBtn/LoginBtn";

const Navbar = () => {
  return (
    <nav className="navbar container2">
         <a href="#" className="navbar-brand">Depop</a>

 
    <div className="nav-right">
        <div className="nav-icons">
            <a href=""><i class="far fa-heart"></i></a>
            <a href=""><img src={Bag} alt="" /></a>
        </div>
    <ul className="nav navbar-nav navbar-right">
          <li><SellBtn /></li>
          <li><SignupBtn /></li>
          <li><LoginBtn /></li>
        </ul>
    </div>
     </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const link = document.querySelector('Link');

  link.addEventListener('change', function() {
    window.scrollTo(0,0);
  });

  return (
    <>
     
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl" id="logo">
              ClickBuzz
            </span>
          </Link>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center font-semibold font-my">
            <Link to={"/"} className="mr-5 hover:text-gray-900">
              Overview
            </Link>
            <Link to={"/Gallery"} className="mr-5 hover:text-gray-900">
              Gallery
            </Link>
            <Link to={"/Investment"} className="mr-5 hover:text-gray-900">
              Investment
            </Link>
            <Link to={"/About"} className="mr-5 hover:text-gray-900">
              About
            </Link>
          
          </nav>
          <Link to={"/contact"} className="mr-5 hover:text-gray-900 hvn my fb"><button className="bps">Book a Photo Shoot <i className="fa-thin fa-arrow-right"></i></button></Link>    
        </div>
      </header>
    </>
  );
};

export default Navbar;

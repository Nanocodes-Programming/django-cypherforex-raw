import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";


const Nav = ({footer}) => {
 
  const [navScroll, setNavScroll] = useState(false);
  const [navToggle, setNavToggle] = useState(true);

  // changenavbg
  const changeBg = () => {
    window.scrollY >= 80 ? setNavScroll(true) : setNavScroll(false);
  };
  window.addEventListener("scroll", changeBg);

  const toggleMobile = () => {
    setNavToggle(!navToggle);
  };
  return (
    <>
      <div
        className={
          navScroll
            ? "flex card_content items-center justify-between p-[1rem] px-[3rem] h-[80px] fixed top-0 w-full z-20 bg-[#030C4B]"
            : "flex bg-transparent card_content items-center justify-between p-[1rem] px-[3rem] fixed top-0 w-full z-20 bg-[#030C4B]"
        }
      >
        <Link to="/">
          <div className="flex items-center">
          {footer.map(logo=>{
            return   <img src={logo.company_logo} alt="main" className="w-[60px] h-[60px]" />
          })}
            <h2 className="text-white font-bold mx-2">
              CypherForex <br />
              Academy
            </h2>
          </div>
        </Link>
        <ul className="hidden md:flex justify-between items-center text-white">
          <Link to="/mentorship">
            <li className="p-[0.5rem] font-bold font-2xl">Mentorship</li>
          </Link>
          <Link to="/signal">
            <li className="p-[0.5rem]  font-bold font-2xl">Signals</li>
          </Link>
          <Link to="/exchange">
            <li className="p-[0.5rem] font-bold font-2xl">Exchange</li>
          </Link>
          <Link to="/about">
            <li className="p-[0.5rem]  font-bold font-2xl">About us </li>
          </Link>
          <Link to="/contact">
            <li className="p-[0.5rem]  font-bold font-2xl">Contact us </li>
          </Link>
          <Link to="/resource">
            <li className="p-[0.5rem]  font-bold font-2xl">Resources </li>
          </Link>
        </ul>
        {/* mobile view stats here  */}
        {navToggle && (
          <HiMenuAlt3
            className="cursor-pointer text-white text-3xl md:hidden block"
            onClick={toggleMobile}
          />
        )}
        {!navToggle && (
          <MdClose
            className="cursor-pointer text-white text-3xl md:hidden block"
            onClick={toggleMobile}
          />
        )}
        {!navToggle && (
          <ul className="flex items-center w-[50%] navy justify-center flex-col z-100 bg-slate-100 p-2 rounded absolute top-[90%] right-3">
            <Link to="/mentorship">
              <li className="p-[0.5rem] font-bold font-2xl">Mentorship</li>
            </Link>
            <Link to="/signal">
              <li className="p-[0.5rem]  font-bold font-2xl">Signals</li>
            </Link>
            <Link to="/exchange">
              <li className="p-[0.5rem] font-bold font-2xl">Exchange</li>
            </Link>
            <Link to="/about">
              <li className="p-[0.5rem]  font-bold font-2xl">About us </li>
            </Link>
            <Link to="/contact">
              <li className="p-[0.5rem]  font-bold font-2xl">Contact us </li>
            </Link>
            <Link to="/resource">
              <li className="p-[0.5rem]  font-bold font-2xl">Resources</li>
            </Link>
          </ul>
        )}
      </div>
    </>
  );
};

export default Nav;

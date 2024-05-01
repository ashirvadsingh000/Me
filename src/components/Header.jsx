import React, { useState, useRef } from "react";
import { Link } from "react-scroll";

import { MdMenuBook } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiServiceFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { GiBrain } from "react-icons/gi";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
   
  };
  

  return (
    <>
      <head className=" flex flex-col gap-2 relative ">
        <div className="navbar md:max-h-14 md:h-screen bg-white bg-opacity-10 flex backdrop-brightness-50 z-50 text-white flex-row justify-between items-center font-poppins italic px-7 rounded-full fixed w-screen mt-1 max-h-10">
          <div
            className="navbar_left  text-3xl font-bold text-shadow-xl cursor-pointer
             text-red-700 "
          >
            <span className="text-4xl">A</span>SHIRAVD
          </div>
          <div className="navbar_right hidden md:flex">
            <ul className="option flex flex-row gap-x-8  font-semibold ">
              <Link spy={true} smooth={true} to="Home">
              <li className="ng hover:underline underline-offset-4 hover:text-red-700 hover:text-shadow-lg cursor-pointer hover:font-Berkshire" onClick={() => scrollToRef(homeRef)}>
            
               HOME
            
              </li>
              </Link>
              <Link spy={true} smooth={true} to="Service">
              <li className="ng hover:underline underline-offset-4 hover:text-red-700 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                SERVICE
              </li>
              </Link>
              <Link spy={true} smooth={true} to="Skills">
              <li className="ng hover:underline underline-offset-4 hover:text-red-700 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                TECH STACK
              </li>
              </Link>
              <Link spy={true} smooth={true} to="Education">
              <li className="ng hover:underline underline-offset-4 hover:text-red-700 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                EDUCATION
              </li>
              </Link>
              <Link spy={true} smooth={true} to="Project" >
              <li className="ng hover:underline underline-offset-4 hover:text-red-700 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                PROJECTS
              </li>
              </Link>
              <Link spy={true} smooth={true} to="hobbies">
              <li className="ng hover:underline underline-offset-4 hover:text-red-700 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                HOBBIES
              </li>
              </Link>
              <Link spy={true} smooth={true} to="contact">
              <li className="ng hover:underline underline-offset-4 hover:text-red-700 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                CONTACT
              </li>
              </Link>
            </ul>
          </div>
          <div
            className="menu text-4xl md:hidden text-red-700 hover:text-white cursor-pointer hover:rotate-180 ease-in-out duration-300 te  text-shadow-xl"
            onClick={toggleMenu}
          >
            {isOpen ? <IoMdCloseCircleOutline /> : <MdMenuBook />}
          </div>
        </div>
        {isOpen && (
          <>
            <div
              onClick={toggleMenu}
              className="sidebar fixed h-screen w-screen inset-0  z-10 bg-red-600  bg-opacity-10"
            ></div>
            <div className="  md:hidden fixed mt-14 right-1 flex z-50 bg-white bg-opacity-10 backdrop-brightness-0 px-6 rounded-t-xl rounded-b-xl py-2 text-white">
              <ul className="option flex flex-col justify-between font-semibold gap-y-6 ">

                <Link spy={true} smooth={true} to="Home">
                <li className="ng   border-red-500 border-b-2  hover:text-red-700 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                  <FaHome /> HOME
                </li>
                </Link>

                <Link spy={true} smooth={true} to="Service">
                <li className="ng   border-red-500 border-b-2  hover:text-red-700 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                  <RiServiceFill /> SERVICE
                </li>
                </Link>

                <Link spy={true} smooth={true} to="Skills">
                <li className="ng   border-red-500 border-b-2  hover:text-red-700 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                  <GrWorkshop /> TECH STACK
                </li>
                </Link>

                <Link spy={true} smooth={true} to="Education">
                <li className="ng4 border-red-500  border-b-2  hover:text-red-700 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                  <MdCastForEducation /> EDUCATION
                </li>
                </Link>

                <Link spy={true} smooth={true} to="Project">
                <li className="ng   border-red-500 border-b-2  hover:text-red-700 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                <GoProjectSymlink />
                  PROJECTS
                </li>
                </Link>
                <Link spy={true} smooth={true} to="hobbies">
                <li className="ng   border-red-500 border-b-2  hover:text-red-700 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                <GiBrain />
                  HOBBIES
                </li>
                </Link>

                <Link spy={true} smooth={true} to="contact">
                <li className="ng   border-red-500 border-b-2  hover:text-red-700 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                  <RiCustomerService2Fill />
                  CONTACT
                </li>
                </Link>
              </ul>
            </div>
          </>
        )}
      </head>
    </>
  );
};

export default Header;

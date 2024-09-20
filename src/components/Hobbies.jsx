import { useState, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo1 from "../../public/Edu logo/logo1.png";
import logo2 from "../../public/Edu logo/logo2.png";
import logo3 from "../../public/Edu logo/logo3.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Hobbies = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 8000,
      duration: 50000,
    });
  }, []); 
  return (
    <div
      id="hobbies"
      className="sectionH flex  flex-col items-center justify-center  md:py-20 sm:py-10 p-6"
    >
      <h3
        data-aos="fade-down"
        className="definer text-white self-center font-anta text-4xl font-bold italic mb-5 hover:text-red-900"
      >
        HOBBIES
      </h3>
      <div className="container flex flex-col gap-10 ">
       
        <div className="cont-bot p-2 text-white grid md:grid-cols-3 grid-cols-1 gap-5">
          <div
            data-aos="flip-right"
            className="items p-2 bg-red-950  shadow-lg hover:transition ease-in-out delay-150 bg-blue- hover:-translate-y-1 hover:scale-110  duration-300 shadow-red-600 flex flex-col items-center gap-5 hover:bg-opacity-35 hover:border-2 border-red-600  rounded-2xl"
          >
            <div className="im ">
              <img src={logo1} alt="" />
            </div>
            <h4 className=" self-center bg-black bg-opacity-65 border shadow-md shadow-slate-600 px-4 p-1 font-poppins uppercase text-xl font-semibold italic rounded-full  hover:px-8  text-slate-400  hover:text-red-900 cursor-pointer">
             <Link to="/gaming"> Gaming</Link>
            </h4>
          </div>
          <div
            data-aos="flip-up"
            className="items p-2 bg-red-950  shadow-lg hover:transition ease-in-out delay-150 bg-blue- hover:-translate-y-1 hover:scale-110  duration-300 shadow-red-600 flex flex-col items-center gap-4 
          hover:bg-opacity-35 hover:border-2 border-red-600 justify-center   
          rounded-2xl"
          >
            <div className="im ">
              <img src={logo3} alt="" />
            </div>
            <h4 className=" self-center bg-black bg-opacity-65 border shadow-md shadow-slate-600 px-4 p-1 font-poppins uppercase text-xl font-semibold italic rounded-full  hover:px-8  text-slate-400 hover:text-red-900 cursor-pointer ">
              Programming
            </h4>
          </div>

          <div
            data-aos="flip-left"
            className="items  bg-red-950  justify-center items-center p-2 shadow-lg  
          hover:bg-opacity-35 hover:border-2 border-red-600 
          shadow-red-600 flex flex-col  gap-5 
          rounded-2xl "
          >
            <div className="im ">
              <img src={logo2} alt="" />
            </div>
            <h4 className=" self-center bg-black bg-opacity-65 border shadow-md shadow-slate-600 px-4 p-1 font-poppins uppercase text-xl font-semibold italic rounded-full  hover:px-8  text-slate-400  hover:text-red-900 cursor-pointer">
              Listening
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;

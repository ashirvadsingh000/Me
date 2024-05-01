import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo1 from "../../public/logos/logo1.png";
import logo2 from "../../public/logos/logo2.png";
import logo3 from "../../public/logos/logo3.png";
import logo4 from "../../public/logos/logo4.png";
import logo5 from "../../public/logos/logo5.png";
import logo6 from "../../public/logos/logo6.png";
import logo7 from "../../public/logos/logo7.png";
import logo8 from "../../public/logos/logo8.png";
import logo9 from "../../public/logos/logo9.png";
import logo10 from "../../public/logos/logo10.png";
import logo11 from "../../public/logos/logo11.png";
import logo12 from "../../public/logos/logo12.png";
import logo13 from "../../public/logos/logo13.png";
import logo14 from "../../public/logos/logo14.png";


const Skills = () => {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 200,
      duration: 500,
    });
  },[])

  return (
  <>
  <div id="Skills" className="  flex flex-col items-center h-screen justify-center p-10 pt-10 pb-20">
<h3 data-aos="fade-left"  className=" self-center text-4xl font-anta italic text-white hover:text-red-900 font-semibold"> TECH STACK</h3>
<div className="grid  md:grid-cols-6 grid-cols-3 gap-5 mt-5">
    
    <div data-aos="fade-right" className="box2  grid md:h-36 md:w-36 h-24 w-24 rounded-full border border-spacing-3 border-red-900 shadow-lg shadow-red-900 hover:border-white hover:shadow-white overflow-hidden object-cover items-center justify-center "> <img src={logo1} alt=""  className=" w-full h-auto rounded-full"/> </div>
    <div data-aos="fade-right" className="box3 grid md:h-36 md:w-36 h-24 w-24 rounded-full border border-spacing-3 border-red-900 shadow-lg shadow-red-900  hover:border-white hover:shadow-white overflow-hidden object-cover items-center justify-center "> <img src={logo2} alt=""  className=" w-full h-auto rounded-full"/> </div>
    <div data-aos="fade-right" className="box4 grid md:h-36 md:w-36 h-24 w-24 rounded-full border border-spacing-3 border-red-900 shadow-lg shadow-red-900  hover:border-white hover:shadow-white overflow-hidden object-cover items-center justify-center "> <img src={logo3} alt=""  className=" w-full h-auto rounded-full"/> </div>
    <div data-aos="fade-right" className="box5 grid md:h-36 md:w-36 h-24 w-24 rounded-full border border-spacing-3 border-red-900 shadow-lg shadow-red-900  hover:border-white hover:shadow-white overflow-hidden object-cover items-center justify-center "> <img src={logo4} alt=""  className=" w-full h-auto rounded-full"/> </div>
    <div data-aos="fade-right" className="box6 grid md:h-36 md:w-36 h-24 w-24 rounded-full border border-spacing-3 border-red-900 shadow-lg shadow-red-900  hover:border-white hover:shadow-white overflow-hidden object-cover items-center justify-center "> <img src={logo5} alt=""  className=" w-full h-auto rounded-full"/> </div>
    <div data-aos="fade-right" className="box7 grid md:h-36 md:w-36 h-24 w-24 rounded-full border border-spacing-3 border-red-900 shadow-lg shadow-red-900  hover:border-white hover:shadow-white overflow-hidden object-cover items-center justify-center "> <img src={logo6} alt=""  className=" w-full h-auto rounded-full"/> </div>
    <div data-aos="fade-right" className="box8 grid md:h-36 md:w-36 h-24 w-24 rounded-full border border-spacing-3 border-red-900 shadow-lg shadow-red-900  hover:border-white hover:shadow-white overflow-hidden object-cover items-center justify-center "> <img src={logo7} alt=""  className=" w-full h-auto rounded-full"/> </div>
    <div data-aos="fade-right" className="box9 grid md:h-36 md:w-36 h-24 w-24 rounded-full border border-spacing-3 border-red-900 shadow-lg shadow-red-900  hover:border-white hover:shadow-white overflow-hidden object-cover items-center justify-center "> <img src={logo8} alt=""  className=" w-full h-auto rounded-full"/> </div>
    <div data-aos="fade-right" className="box1 grid md:h-36 md:w-36 h-24 w-24 rounded-full border border-spacing-3 border-red-900 shadow-lg shadow-red-900  hover:border-white hover:shadow-white overflow-hidden object-cover items-center justify-center "> <img src={logo9} alt=""  className=" w-full h-auto rounded-full"/> </div>
    <div data-aos="fade-right" className="box1 grid md:h-36 md:w-36 h-24 w-24 rounded-full border border-spacing-3 border-red-900 shadow-lg shadow-red-900  hover:border-white hover:shadow-white overflow-hidden object-cover items-center justify-center "> <img src={logo10} alt="" className=" w-full h-auto rounded-full" /> </div>
    <div data-aos="fade-right" className="box1 grid md:h-36 md:w-36 h-24 w-24 rounded-full border border-spacing-3 border-red-900 shadow-lg shadow-red-900  hover:border-white hover:shadow-white overflow-hidden object-cover items-center justify-center "> <img src={logo11} alt="" className=" w-full h-auto rounded-full" /> </div>
    <div data-aos="fade-right" className="box1 grid md:h-36 md:w-36 h-24 w-24 rounded-full border border-spacing-3 border-red-900 shadow-lg shadow-red-900  hover:border-white hover:shadow-white overflow-hidden object-cover items-center justify-center "> <img src={logo12} alt="" className=" w-full h-auto rounded-full" /> </div>
    <div data-aos="fade-right" className="box1  md:col-start-3   grid md:h-36 md:w-36 h-24 w-24 rounded-full border border-spacing-3 border-red-900 shadow-lg shadow-red-900  hover:border-white hover:shadow-white overflow-hidden object-cover items-center justify-center "> <img src={logo13} alt="" className=" w-full h-auto rounded-full" /> </div>
    <div data-aos="fade-right" className="box1 md:col-start-4  grid md:h-36 md:w-36 h-24 w-24 rounded-full border border-spacing-3 border-red-900 shadow-lg shadow-red-900  hover:border-white hover:shadow-white overflow-hidden object-cover items-center justify-center "> <img src={logo14} alt="" className=" w-full h-auto rounded-full" /> </div>

</div >
  </div>
  </>
  );
}

export default Skills;

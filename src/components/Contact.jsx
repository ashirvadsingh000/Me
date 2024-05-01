import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiTelegram, SiWhatsapp, SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact" className="section-last md:mx-20 sm:mx-10 mx-6 my-10">
      <div className="contact p-6 flex flex-row items-center justify-between">
        <div className="contact-left hover:text-white  flex flex-col font-whisper font-extrabold  md:text-5xl sm:text-4xl text-3xl text-red-800">
          <span className="">Ashiravd </span>
          <span className=" ml-8">Singh </span>
        </div>
        <div className="contact-right">
          <ul className="flex flex-row  md:gap-x-10 sm:gap-x-5 gap-x-3">
           <a href="mailto:ashirvadsingh000@gmail.com">
           <li className="ico cursor-pointer ease-in-out duration-400 hover:-translate-y-1 hover:scale-110 ring-2 rounded-full p-2 text-red-700 ring-red-700 hover:ring-white hover:text-white hover:shadow-md hover:shadow-white  ">
              <SiGmail className=" md:text-3xl " />
            </li>
           </a>
            <a href="https://t.me/+919569732035">
            <li className="ico cursor-pointer ease-in-out duration-400 hover:-translate-y-1 hover:scale-110 ring-2 rounded-full p-2 text-red-700 ring-red-700 hover:ring-white hover:text-white hover:shadow-md hover:shadow-white  ">
              <SiTelegram className=" md:text-3xl " />
            </li>
            </a>
           <a href="https://api.whatsapp.com/send?phone=919569732035&text=Hi%2C%0ALet%27s%20talk%20work...">
           <li className="ico cursor-pointer ease-in-out duration-400 hover:-translate-y-1 hover:scale-110 ring-2 rounded-full p-2 text-red-700 ring-red-700 hover:ring-white hover:text-white  hover:shadow-md hover:shadow-white ">
              <SiWhatsapp className=" md:text-3xl " />
            </li>
           </a>
         <a href="tel:9569732035">
         <li className="ico cursor-pointer ease-in-out duration-400 hover:-translate-y-1 hover:scale-110 ring-2 rounded-full p-2 text-red-700 ring-red-700 hover:ring-white hover:text-white  hover:shadow-md hover:shadow-white ">
              <FaPhoneAlt className=" md:text-3xl " />
            </li>
         </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from '../../public/Edu logo/clglogo.png'
import ji from '../../public/Edu logo/gi.png'

import '../assets/css/Edu.css'
const Education = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 200,
      duration: 500,
    });
  }, []);
  return (
    <div div className="rd flex items-center justify-center">
     <div id="Education" class="container items-center justify-center w-screen  md:pt-20 sm:pt-10 p-2 flex flex-col ">
      <h3 data-aos="fade-down" className="text-white self-center font-anta text-4xl font-semibold italic mb-5 hover:text-red-900">EDUCATION</h3>
    <div class="row  ">
        <div data-aos="fade-right" class="col-md-3 col-sm-6">
            <div class="serviceBox ">
                <div class="service-icon">
                    <span><i className="fa fa-globe flex  justify-center p-6" > <img src={logo} alt="" className="h-[50px]" /></i></span>
                </div>
                <h3 class="title font-anta ">BCA</h3>
                <p class="description text-lg font-poppins font-bold">JNMPG Collage Barabanki Uttar Pradesh</p>
                <p class="description text-lg font-poppins font-bold">2022 - ......</p>
            </div>
        </div>
        <div data-aos="fade-left" class="col-md-3 col-sm-6">
            <div class="serviceBox pink">
                <div class="service-icon">
                    <span><i class="fa fa-rocket"> <img src={ji} alt="" /></i></span>
                </div>
                <h3 class="title"> Full Stack Web Development(MERN)</h3>
                <p class="description text-xl font-bold font-poppins">Open Source</p>
                <p class="description text-lg font-bold font-poppins">2022-2023</p>

            </div>
        </div>
    </div>
</div>
    </div>
  );
};

export default Education;

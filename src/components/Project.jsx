import React from "react";
import smily from '../../public/smily.png'
const Project = () => {
  return (
    <div  id="Project" className="Projects flex  w-screen items-center justify-center p-6 h-screen">
      <div className="secPro  flex flex-col ">
        <h1 className="title font-anta text-4xl self-center text-white italic font-semibold hover:text-red-900 pb-8">
          Projects
        </h1>
        <div className="main grid md:grid-cols-2 grid-cols-1 gap-5">
          <div className="item1 border-2 border-red-950 shadow-lg shadow-red-600 hover:shadow-yellow-100 text-white p-4">
            <h3 className=" text-2xl font-poppins font-bold">Hotel-Website</h3>
            <p className=" text-lg font-semibold font-poppins pt-3 pb-5">Welcome to our hotel website, your online gateway to luxury and comfort. Explore our accommodations and book your perfect stay with us today!</p>
            <a  className=" font-semibold font-anta text-lg  text-red-900 hover:text-white underline-offset-2 underline" href="https://ashirvadsingh000.github.io/hotel-website/">
              {" "}
              Live Preview
            </a>
            <a className=" font-semibold font-anta hover:text-red-800 text-lg pl-3 underline-offset-2 underline" href="https://github.com/ashirvadsingh000/hotel-website">
              {" "}
              Source Code
            </a>
          </div>
         
          <div className="item1 border-2 border-red-950 shadow-lg shadow-red-600 hover:shadow-yellow-100 text-white p-4">
            <h3 className=" text-2xl font-poppins font-bold">Expence-tracker</h3>
            <p className=" text-lg font-semibold font-poppins pt-3 ">not-yet-finalized</p>
            <p className=" text-lg font-semibold font-poppins pt-3 pb-5">comming Soon . . . . . . . . . . . . . .</p>
            <a  className=" font-semibold font-anta text-lg  text-red-900 hover:text-white underline-offset-2 underline" href="">
              {" "}
              Live Preview
            </a>
            <a className=" font-semibold font-anta hover:text-red-800 text-lg pl-3 underline-offset-2 underline" href="https://github.com/ashirvadsingh000/Expence-tracker">
              {" "}
              Source Code
            </a>
          </div>
         <div className="div flex items-center justify-center w-screen pt-5">
<img src={smily} alt="" className=" self-center md:size-80 sm:size-72 size-36" />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Service = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 5000,
      duration: 50000,
    });
  }, []);
  return (
    <>
      <div
        id="Service"
        className="section2  flex flex-col items-center p-4 justify-center lg:pb-14"
      >
        <h1
          data-aos="fade-right"
          className=" font-anta text-4xl text-white italic font-semibold hover:text-red-900"
        >
          SERVICES
        </h1>
        <div
         
          className="cont   grid lg:grid-cols-3 md:gid-col-2 sm:grid-cols-1 gap-5 p-5"
        >
          <div  data-aos="flip-left" className="box1 shadow-lg shadow-red-700 flex flex-col mah-h-full max-w-full  rounded-md bg-red-900 text-white hover:bg-opacity-25 hover:text-red-900 hover:border-red-900 hover:border p-4">
            <h3 className=" self-center font-anta font-semibold text-xl">
              {" "}
              Web development(Mern)
            </h3>
            <p className=" font-anta ">
              I specialize in crafting dynamic web applications using MongoDB,
              Express.js, React.js, and Node.js. From data modeling to front-end
              rendering, I leverage the power of the MERN stack to build
              scalable and responsive digital experiences.
            </p>
          </div>
          <div  data-aos="flip-left" className="box2 shadow-lg shadow-red-700 flex flex-col mah-h-full max-w-full  rounded-md bg-red-900 text-white hover:bg-opacity-25 hover:text-red-900 hover:border-red-900 hover:border p-4">
            <h3 className=" self-center font-anta font-semibold text-xl">
              UI/UX Design
            </h3>
            <p className=" font-anta ">
              {" "}
              I craft digital experiences, weaving together code and creativity
              to bring ideas to life in the boundless realm of the internet.
              Each line of code is a brushstroke in the canvas of the web, where
              functionality meets design to shape the online world.
            </p>
          </div>
          <div  data-aos="flip-left" className="box3 shadow-lg shadow-red-700 flex flex-col mah-h-full max-w-full  rounded-md bg-red-900 text-white hover:bg-opacity-25 hover:text-red-900 hover:border-red-900 hover:border p-4">
            <h3 className=" self-center font-anta font-semibold text-xl">
              Graphic Designer
            </h3>
            <p className=" font-anta ">
              I blend creativity with technical skill to communicate visually
              captivating messages across various mediums. Each design element
              meticulously crafted, converges to tell a compelling story,
              transcending pixels into impactful experiences.
            </p>
          </div>
          <div  data-aos="flip-left" className="box4 shadow-lg shadow-red-700 flex flex-col mah-h-full max-w-full  rounded-md bg-red-900 text-white hover:bg-opacity-25 hover:text-red-900 hover:border-red-900 hover:border p-4">
            <h3 className=" self-center font-anta font-semibold text-xl">
              Content Manager
            </h3>
            <p className=" font-anta ">
              I curate and optimize digital content, ensuring it resonates with
              audiences and aligns with strategic goals. From crafting engaging
              narratives to implementing SEO strategies, I navigate the digital
              landscape to drive engagement and foster meaningful connections.
            </p>
          </div>
          <div  data-aos="flip-left" className="box5 shadow-lg shadow-red-700 flex flex-col mah-h-full max-w-full  rounded-md bg-red-900 text-white hover:bg-opacity-25 hover:text-red-900 hover:border-red-900 hover:border p-4">
            <h3 className=" self-center font-anta font-semibold text-xl">
              {" "}
              Android Developer
            </h3>
            <p className=" font-anta ">
              {" "}
              I sculpt intuitive mobile experiences, harnessing the power of
              Java or Kotlin to create innovative applications for the vast
              Android ecosystem. From sleek user interfaces to robust backend
              integration, I engineer solutions that seamlessly blend
              functionality with user delight.
            </p>
          </div>
          <div  data-aos="flip-left" className="box6 shadow-lg shadow-red-700 flex flex-col mah-h-full max-w-full  rounded-md bg-red-900 text-white hover:bg-opacity-25 hover:text-red-900 hover:border-red-900 hover:border p-4">
            <h3 className=" self-center font-anta font-semibold text-xl">
              {" "}
              Logo Designer
            </h3>
            <p className=" font-anta ">
              {" "}
              I breathe life into brands through symbolic representation,
              distilling identity into iconic visuals that resonate with
              audiences. Each line and curve meticulously crafted, encapsulates
              the essence of a brand, leaving a lasting impression in the minds
              of viewers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

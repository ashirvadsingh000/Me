import { useState, useEffect, useRef } from "react";
import girl from "../../public/girl.png";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
import my from '../../public/My resume.pdf'
import {
  SiGithub,
  SiReplit,
  SiTelegram,
  SiWhatsapp,
  SiCodepen,
  SiBlogger,
} from "react-icons/si";
const Home = () => {
  useEffect(() => {

  
  AOS.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750,
  });
},[])
  const words = [
    "Full-Stack Web Developer",
    "UI/UX Designer",
    "Web Designer",
    "Android Developer",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [typing, setTyping] = useState(true);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typing) {
        if (currentLetterIndex < currentWord.length) {
          setCurrentLetterIndex((prevIndex) => prevIndex + 1);
        } else {
          setTyping(false);
          setTimeout(() => setTyping(true), 100000); // Pause before erasing
        }
      } else {
        if (currentLetterIndex > 0) {
          setCurrentLetterIndex((prevIndex) => prevIndex - 1);
        } else {
          setCurrentLetterIndex(0);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setTimeout(() => setTyping(true), 700); // Pause before retyping
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentWordIndex, currentWord, currentLetterIndex, typing]);

  useEffect(() => {
    setCurrentWord(words[currentWordIndex]);
  }, [currentWordIndex]);

  return (
    <section id="Home" data-aos="fade-up" className="section1 flex md:flex-row flex-col gap-10 p-10 md:pt-32 pt-16  items-center md:max-h-screen md:h-screen h-screen
    ">
      <div className="container_left flex md:w-1/3   items-center justify-center">
        <div class="outer-circle ">
          <div class="inner-circle">
            <img src={girl} alt="" srcset="" />
          </div>
          <spinner></spinner>
          <spinner></spinner>
          <spinner></spinner>
          <spinner></spinner>
        </div>
      </div>
      <div className="container_right flex text-white flex-col md:w-1/2 gap-3 ">
        <h2 className="md:text-5xl font-extrabold font-anta text-4xl ">
          Hi, It's{" "}
          <span className="text-red-700 hover:font-Berkshire ">
            Ashirvad Singh
          </span>
        </h2>
        <div className="use md:text-4xl font-bold font-anta text-2xl ">
          <span className="text text-slate-50 ">I'm a </span>
          <span className="animate-blink text-red-700 ">
            {currentWord.substring(0, currentLetterIndex)}
          </span>
        </div>
        <p data-aos="fade-left" className="in md:text-xl font-anta italic text-yellow-100">
          {" "}
          Welcome to my portfolio! I,m a passionate web devloper with 1-year of
          experience in creating responsive, user-friendly and visually
          appealing website.My expertise includes front-end and back-end
          development, along with experience working with various web
          technologies and frameworks.
        </p>
        <div  className="icon md:mt-14 mt-8">
          <ul className="flex flex-row gap-x-5">
            <a href="https://github.com/ashirvadsingh000"><li className="ico cursor-pointer ease-in-out duration-400 hover:-translate-y-1 hover:scale-110 ring-2 rounded-full p-2 text-red-700 ring-red-700 hover:ring-white hover:text-white hover:shadow-md hover:shadow-white  ">
              <SiGithub className=" md:text-xl " />
            </li>
            </a>
            <a href="https://replit.com/@Singh000"><li className="ico cursor-pointer ease-in-out duration-400 hover:-translate-y-1 hover:scale-110 ring-2 rounded-full p-2 text-red-700 ring-red-700 hover:ring-white hover:text-white hover:shadow-md hover:shadow-white  ">
              <SiReplit className=" md:text-xl " />
            </li>
            </a>
            <a href=""><li className="ico cursor-pointer ease-in-out duration-400 hover:-translate-y-1 hover:scale-110 ring-2 rounded-full p-2 text-red-700 ring-red-700 hover:ring-white hover:text-white hover:shadow-md hover:shadow-white  ">
              <SiTelegram className=" md:text-xl " />
            </li>
            </a>
            <a href=""><li className="ico cursor-pointer ease-in-out duration-400 hover:-translate-y-1 hover:scale-110 ring-2 rounded-full p-2 text-red-700 ring-red-700 hover:ring-white hover:text-white  hover:shadow-md hover:shadow-white ">
              <SiWhatsapp className=" md:text-xl " />
            </li>
            </a>
            <a href="https://codepen.io/ashirvadsingh000"><li className="ico cursor-pointer ease-in-out duration-400 hover:-translate-y-1 hover:scale-110 ring-2 rounded-full p-2 text-red-700 ring-red-700 hover:ring-white hover:text-white hover:shadow-md hover:shadow-white  ">
            <SiCodepen  className=" md:text-xl " />
            </li>
            </a>
            <a href="https://ashirvadsingh000.blogspot.com/"><li className="ico cursor-pointer ease-in-out duration-400 hover:-translate-y-1 hover:scale-110 ring-2 rounded-full p-2 text-red-700 ring-red-700 hover:ring-white hover:text-white hover:shadow-md hover:shadow-white  ">
              <SiBlogger className=" md:text-xl " />
            </li>
            </a>
          </ul>
        </div>
        <div  className="btn flex flex-grow mt-4 gap-x-5">
          <a href="tel:9569732035">
          <button  className="hover:-translate-y-1 hover:scale-110 duration-400 transition-shadow ring-2 rounded-full p-1 font-anta text-red-700 ring-red-700 px-6 hover:ring-white hover:bg-slate-200 hover:text-black shadow-md hover:shadow-white font-bold text-lg shadow-red-500">
            Hire Me
          </button>
          </a>
          <a href={my} download={my}>
          <button  className="hover:-translate-y-1 hover:scale-110 duration-400 transition-shadow ring-2 rounded-full p-1 font-anta text-black ring-red-900 px-6 bg-red-900 hover:bg-black hover:text-white hover:ring-white shadow-md hover:shadow-white font-bold text-lg shadow-red-500 ">
            Resume
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

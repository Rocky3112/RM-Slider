import "./App.css";
import monitor from "./assets/monitor.jpeg"
import camera from "./assets/camerajpeg.jpeg"
import ipod from "./assets/ipod.jpeg"

import { BsStarFill,BsStar } from "react-icons/bs";
import { FaArrowsRotate } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import { useState } from "react";
import './style.css'



const App = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <div className="">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item w-full h-[90vh]">
          
      <div className="grid lg:grid-cols-2 gap-5  ">
        <div className={`relative text-left p-4 rounded-lg flex items-center justify-center gap-4 hover-trigger ${
          isHovered1 ? 'hovered' : ''
        }`}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)} >
          <img className="h-80 w-80 rounded-lg" src={monitor} alt="" />
          <div>
          <div className="flex gap-1 my-2">
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="">
            <BsStar />
            </p>
          </div>
          <h1 className="text-2xl font-semibold my-3 inline-block">
            All Super fast style Regular
          </h1>
          
          <div className="text-2xl font-bold text-amber-400">
             $1.60
          </div>
          <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga modi a incidunt fugit, temporibus explicabo pariatur! Assumen?</p>
          <div className={`hidden-button ${isHovered1 ? 'block' : 'hidden'}`}>
            <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
              Add to cart
            </button>
            <div className=" absolute flex gap-2 text-2xl left-20 top-[160px]">
              <div className=" p-3 bg-yellow-50 rounded-full">
              <IoMdHeart/>
              </div>
              <div className=" p-3 bg-yellow-50 rounded-full">
              <FaArrowsRotate/>
              </div>
              <div className=" p-3 bg-yellow-50 rounded-full">
              <IoSearch/>
              </div>
              
          </div>
          </div>
          </div>

        </div>

        <div className={` relative text-left p-4 rounded-lg flex items-center justify-center gap-4 hover-trigger ${
          isHovered2 ? 'hovered' : ''
        }`}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)} >
          <img className="h-80 w-80 rounded-lg" src={monitor} alt="" />
          <div>
          <div className="flex gap-1 my-2">
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="">
            <BsStar />
            </p>
          </div>
          <h1 className="text-2xl font-semibold my-3 inline-block">
            All Super fast style Regular
          </h1>
          
          <div className="text-2xl font-bold text-amber-400">
             $1.60
          </div>
          <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga modi a incidunt fugit, temporibus explicabo pariatur! Assumen?</p>
          <div className={`hidden-button ${isHovered2 ? 'block' : 'hidden'}`}>
            <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
              Add to cart
            </button>
            <div className=" absolute flex gap-2 text-2xl left-20 top-[150px]">
              <div className=" p-3 bg-yellow-50 rounded-full">
              <IoMdHeart/>
              </div>
              <div className=" p-3 bg-yellow-50 rounded-full">
              <FaArrowsRotate/>
              </div>
              <div className=" p-3 bg-yellow-50 rounded-full">
              <IoSearch/>
              </div>
              
          </div>
          </div>
          </div>

        </div>
        
      </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
       
        
      </div>
    </div>
  );
};

export default App;

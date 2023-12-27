import "./App.css";
import monitor from "./assets/monitor.jpeg";
import camera from "./assets/camerajpeg.jpeg";
import ipod from "./assets/ipod.jpeg";
import desktop from "./assets/desktop.jpeg";

import { BsStarFill, BsStar } from "react-icons/bs";
import { FaArrowsRotate } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import { useState } from "react";
import "./style.css";

const App = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  return (
    <div className="">
      {/* for slider 1 */}
      <div className="carousel w-full my-20">
        <div id="slide1" className="carousel-item w-full h-[100vh] relative">
          <div className="grid lg:grid-cols-2 gap-5  ">
            <div
              className={`relative text-left p-4 rounded-lg lg:flex items-center justify-center gap-4 hover-trigger ${
                isHovered1 ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <img className="h-60 w-80 rounded-lg" src={monitor} alt="" />
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

                <div className="text-2xl font-bold text-amber-400">$1.60</div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  modi a incidunt fugit, temporibus explicabo pariatur! Assumen?
                </p>
                <div
                  className={`hidden-button ${isHovered1 ? "block" : "hidden"}`}
                >
                  <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
                    Add to cart
                  </button>
                  <div className=" absolute flex gap-2 text-2xl left-16 top-[130px]">
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoMdHeart />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <FaArrowsRotate />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoSearch />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={` relative text-left p-4 rounded-lg lg:flex items-center justify-center gap-4 hover-trigger ${
                isHovered2 ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <img className="h-60 w-80 rounded-lg" src={camera} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $68.00{" "}
                  <del className="text-slate-300 font-normal text-xl">
                    $72.00
                  </del>
                </div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  modi a incidunt fugit, temporibus explicabo pariatur! Assumen?
                </p>
                <div
                  className={`hidden-button ${isHovered2 ? "block" : "hidden"}`}
                >
                  <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
                    Add to cart
                  </button>
                  <div className=" absolute flex gap-2 text-2xl left-16 top-[130px]">
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoMdHeart />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <FaArrowsRotate />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoSearch />
                    </div>
                  </div>
                </div>
                <div className="w-12 absolute top-16 left-10">
                  <p className=" text-white bg-orange-500 px-3 py-3 rounded-full  ">
                    -6%
                  </p>
                </div>
              </div>
            </div>
            <div
              className={` relative text-left p-4 rounded-lg lg:flex items-center justify-center gap-4 hover-trigger ${
                isHovered2 ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <img className="h-60 w-80 rounded-lg" src={ipod} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $50.00{" "}
                  <del className="text-slate-300 font-normal text-xl">
                    $59.00
                  </del>
                </div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  modi a incidunt fugit, temporibus explicabo pariatur! Assumen?
                </p>
                <div
                  className={`hidden-button ${isHovered3 ? "block" : "hidden"}`}
                >
                  <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
                    Add to cart
                  </button>
                  <div className=" absolute flex gap-2 text-2xl left-16 top-[130px]">
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoMdHeart />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <FaArrowsRotate />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoSearch />
                    </div>
                  </div>
                </div>
                <div className="w-12 absolute top-16 left-10">
                  <p className=" text-white bg-orange-500 px-3 py-3 rounded-full  ">
                    -9%
                  </p>
                </div>
              </div>
            </div>
            <div
              className={` relative text-left p-4 rounded-lg lg:flex items-center justify-center gap-4 hover-trigger ${
                isHovered2 ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              <img className="h-60 w-80 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00{" "}
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  modi a incidunt fugit, temporibus explicabo pariatur! Assumen?
                </p>
                <div
                  className={`hidden-button ${isHovered4 ? "block" : "hidden"}`}
                >
                  <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
                    Add to cart
                  </button>
                  <div className=" absolute flex gap-2 text-2xl left-16 top-[130px]">
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoMdHeart />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <FaArrowsRotate />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoSearch />
                    </div>
                  </div>
                </div>
                <div className="w-12 absolute top-16 left-10">
                  <p className=" text-white bg-orange-500 px-3 py-3 rounded-full  ">
                    -4%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn btn-circle hover:bg-orange-400 hover:text-white"
            >
              ❮
            </a>
            <hr />
            <a
              href="#slide2"
              className="btn btn-circle hover:bg-orange-400 hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item w-full h-[100vh] relative">
          <div className="grid lg:grid-cols-2 gap-5  ">
            <div
              className={`relative text-left p-4 rounded-lg lg:flex items-center justify-center gap-4 hover-trigger ${
                isHovered1 ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <img className="h-60 w-80 rounded-lg" src={monitor} alt="" />
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

                <div className="text-2xl font-bold text-amber-400">$1.60</div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  modi a incidunt fugit, temporibus explicabo pariatur! Assumen?
                </p>
                <div
                  className={`hidden-button ${isHovered1 ? "block" : "hidden"}`}
                >
                  <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
                    Add to cart
                  </button>
                  <div className=" absolute flex gap-2 text-2xl left-16 top-[130px]">
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoMdHeart />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <FaArrowsRotate />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoSearch />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={` relative text-left p-4 rounded-lg lg:flex items-center justify-center gap-4 hover-trigger ${
                isHovered2 ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <img className="h-60 w-80 rounded-lg" src={monitor} alt="" />
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
                  $68.00{" "}
                  <del className="text-slate-300 font-normal text-xl">
                    $72.00
                  </del>
                </div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  modi a incidunt fugit, temporibus explicabo pariatur! Assumen?
                </p>
                <div
                  className={`hidden-button ${isHovered2 ? "block" : "hidden"}`}
                >
                  <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
                    Add to cart
                  </button>
                  <div className=" absolute flex gap-2 text-2xl left-16 top-[130px]">
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoMdHeart />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <FaArrowsRotate />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoSearch />
                    </div>
                  </div>
                </div>
                <div className="w-12 absolute top-16 left-10">
                  <p className=" text-white bg-orange-500 px-3 py-3 rounded-full  ">
                    -6%
                  </p>
                </div>
              </div>
            </div>
            <div
              className={` relative text-left p-4 rounded-lg lg:flex items-center justify-center gap-4 hover-trigger ${
                isHovered2 ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <img className="h-60 w-80 rounded-lg" src={monitor} alt="" />
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
                  $50.00{" "}
                  <del className="text-slate-300 font-normal text-xl">
                    $59.00
                  </del>
                </div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  modi a incidunt fugit, temporibus explicabo pariatur! Assumen?
                </p>
                <div
                  className={`hidden-button ${isHovered3 ? "block" : "hidden"}`}
                >
                  <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
                    Add to cart
                  </button>
                  <div className=" absolute flex gap-2 text-2xl left-16 top-[130px]">
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoMdHeart />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <FaArrowsRotate />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoSearch />
                    </div>
                  </div>
                </div>
                <div className="w-12 absolute top-16 left-10">
                  <p className=" text-white bg-orange-500 px-3 py-3 rounded-full  ">
                    -10%
                  </p>
                </div>
              </div>
            </div>
            <div
              className={` relative text-left p-4 rounded-lg lg:flex items-center justify-center gap-4 hover-trigger ${
                isHovered2 ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              <img className="h-60 w-80 rounded-lg" src={monitor} alt="" />
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
                  $80.00{" "}
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  modi a incidunt fugit, temporibus explicabo pariatur! Assumen?
                </p>
                <div
                  className={`hidden-button ${isHovered4 ? "block" : "hidden"}`}
                >
                  <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
                    Add to cart
                  </button>
                  <div className=" absolute flex gap-2 text-2xl left-16 top-[130px]">
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoMdHeart />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <FaArrowsRotate />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoSearch />
                    </div>
                  </div>
                </div>
                <div className="w-12 absolute top-16 left-10">
                  <p className=" text-white bg-orange-500 px-3 py-3 rounded-full  ">
                    -4%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle hover:bg-orange-400 hover:text-white"
            >
              ❮
            </a>
            <hr />
            <a
              href="#slide3"
              className="btn btn-circle hover:bg-orange-400 hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item w-full h-[100vh] relative">
          <div className="grid lg:grid-cols-2 gap-5  ">
            <div
              className={`relative text-left p-4 rounded-lg lg:flex items-center justify-center gap-4 hover-trigger ${
                isHovered1 ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <img className="h-60 w-80 rounded-lg" src={monitor} alt="" />
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

                <div className="text-2xl font-bold text-amber-400">$1.60</div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  modi a incidunt fugit, temporibus explicabo pariatur! Assumen?
                </p>
                <div
                  className={`hidden-button ${isHovered1 ? "block" : "hidden"}`}
                >
                  <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
                    Add to cart
                  </button>
                  <div className=" absolute flex gap-2 text-2xl left-16 top-[130px]">
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoMdHeart />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <FaArrowsRotate />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoSearch />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={` relative text-left p-4 rounded-lg lg:flex items-center justify-center gap-4 hover-trigger ${
                isHovered2 ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <img className="h-60 w-80 rounded-lg" src={monitor} alt="" />
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
                  $68.00{" "}
                  <del className="text-slate-300 font-normal text-xl">
                    $72.00
                  </del>
                </div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  modi a incidunt fugit, temporibus explicabo pariatur! Assumen?
                </p>
                <div
                  className={`hidden-button ${isHovered2 ? "block" : "hidden"}`}
                >
                  <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
                    Add to cart
                  </button>
                  <div className=" absolute flex gap-2 text-2xl left-16 top-[130px]">
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoMdHeart />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <FaArrowsRotate />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoSearch />
                    </div>
                  </div>
                </div>
                <div className="w-12 absolute top-16 left-10">
                  <p className=" text-white bg-orange-500 px-3 py-3 rounded-full  ">
                    -6%
                  </p>
                </div>
              </div>
            </div>
            <div
              className={` relative text-left p-4 rounded-lg lg:flex items-center justify-center gap-4 hover-trigger ${
                isHovered2 ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <img className="h-60 w-80 rounded-lg" src={monitor} alt="" />
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
                  $50.00{" "}
                  <del className="text-slate-300 font-normal text-xl">
                    $59.00
                  </del>
                </div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  modi a incidunt fugit, temporibus explicabo pariatur! Assumen?
                </p>
                <div
                  className={`hidden-button ${isHovered3 ? "block" : "hidden"}`}
                >
                  <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
                    Add to cart
                  </button>
                  <div className=" absolute flex gap-2 text-2xl left-16 top-[130px]">
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoMdHeart />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <FaArrowsRotate />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoSearch />
                    </div>
                  </div>
                </div>
                <div className="w-12 absolute top-16 left-10">
                  <p className=" text-white bg-orange-500 px-3 py-3 rounded-full  ">
                    -10%
                  </p>
                </div>
              </div>
            </div>
            <div
              className={` relative text-left p-4 rounded-lg lg:flex items-center justify-center gap-4 hover-trigger ${
                isHovered2 ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              <img className="h-60 w-80 rounded-lg" src={monitor} alt="" />
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
                  $80.00{" "}
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  modi a incidunt fugit, temporibus explicabo pariatur! Assumen?
                </p>
                <div
                  className={`hidden-button ${isHovered4 ? "block" : "hidden"}`}
                >
                  <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
                    Add to cart
                  </button>
                  <div className=" absolute flex gap-2 text-2xl left-16 top-[130px]">
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoMdHeart />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <FaArrowsRotate />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoSearch />
                    </div>
                  </div>
                </div>
                <div className="w-12 absolute top-16 left-10">
                  <p className=" text-white bg-orange-500 px-3 py-3 rounded-full  ">
                    -4%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle hover:bg-orange-400 hover:text-white"
            >
              ❮
            </a>
            <hr />
            <a
              href="#slide4"
              className="btn btn-circle hover:bg-orange-400 hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item w-full h-[100vh] relative">
          <div className="grid lg:grid-cols-2 gap-5  ">
            <div
              className={`relative text-left p-4 rounded-lg lg:flex items-center justify-center gap-4 hover-trigger ${
                isHovered1 ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <img className="h-60 w-80 rounded-lg" src={monitor} alt="" />
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

                <div className="text-2xl font-bold text-amber-400">$1.60</div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  modi a incidunt fugit, temporibus explicabo pariatur! Assumen?
                </p>
                <div
                  className={`hidden-button ${isHovered1 ? "block" : "hidden"}`}
                >
                  <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
                    Add to cart
                  </button>
                  <div className=" absolute flex gap-2 text-2xl left-16 top-[130px] hover:bg-yellow-500">
                    <div className=" p-3 bg-white rounded-full">
                      <IoMdHeart />
                    </div>
                    <div className=" p-3 bg-white rounded-full">
                      <FaArrowsRotate />
                    </div>
                    <div className=" p-3 bg-white rounded-full">
                      <IoSearch />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={` relative text-left p-4 rounded-lg lg:flex items-center justify-center gap-4 hover-trigger ${
                isHovered2 ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <img className="h-60 w-80 rounded-lg" src={monitor} alt="" />
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
                  $68.00{" "}
                  <del className="text-slate-300 font-normal text-xl">
                    $72.00
                  </del>
                </div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  modi a incidunt fugit, temporibus explicabo pariatur! Assumen?
                </p>
                <div
                  className={`hidden-button ${isHovered2 ? "block" : "hidden"}`}
                >
                  <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
                    Add to cart
                  </button>
                  <div className=" absolute flex gap-2 text-2xl left-16 top-[130px]">
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoMdHeart />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <FaArrowsRotate />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoSearch />
                    </div>
                  </div>
                </div>
                <div className="w-12 absolute top-16 left-10">
                  <p className=" text-white bg-orange-500 px-3 py-3 rounded-full  ">
                    -6%
                  </p>
                </div>
              </div>
            </div>
            <div
              className={` relative text-left p-4 rounded-lg lg:flex items-center justify-center gap-4 hover-trigger ${
                isHovered2 ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <img className="h-60 w-80 rounded-lg" src={monitor} alt="" />
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
                  $50.00{" "}
                  <del className="text-slate-300 font-normal text-xl">
                    $59.00
                  </del>
                </div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  modi a incidunt fugit, temporibus explicabo pariatur! Assumen?
                </p>
                <div
                  className={`hidden-button ${isHovered3 ? "block" : "hidden"}`}
                >
                  <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
                    Add to cart
                  </button>
                  <div className=" absolute flex gap-2 text-2xl left-16 top-[130px]">
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoMdHeart />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <FaArrowsRotate />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoSearch />
                    </div>
                  </div>
                </div>
                <div className="w-12 absolute top-16 left-10">
                  <p className=" text-white bg-orange-500 px-3 py-3 rounded-full  ">
                    -10%
                  </p>
                </div>
              </div>
            </div>
            <div
              className={` relative text-left p-4 rounded-lg lg:flex items-center justify-center gap-4 hover-trigger ${
                isHovered2 ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              <img className="h-60 w-80 rounded-lg" src={monitor} alt="" />
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
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  modi a incidunt fugit, temporibus explicabo pariatur! Assumen?
                </p>
                <div
                  className={`hidden-button ${isHovered4 ? "block" : "hidden"}`}
                >
                  <button className="uppercase px-7 py-3 rounded-3xl bg-slate-500 my-3 text-white">
                    Add to cart
                  </button>
                  <div className=" absolute flex gap-2 text-2xl left-16 top-[130px]">
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoMdHeart />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <FaArrowsRotate />
                    </div>
                    <div className=" p-3 bg-yellow-50 rounded-full">
                      <IoSearch />
                    </div>
                  </div>
                </div>
                <div className="w-12 absolute top-16 left-10">
                  <p className=" text-white bg-orange-500 px-3 py-3 rounded-full  ">
                    -4%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle hover:bg-orange-400 hover:text-white"
            >
              ❮
            </a>
            <hr />
            <a
              href="#slide1"
              className="btn btn-circle hover:bg-orange-400 hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* for Slider 2 */}
      <div className="w-[700px]">
        
        <div>
        <div className="flex py-2 gap-2 pr-6">
          <div className="flex justify-end w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs hover:bg-orange-500">
            1
          </a>
          <a href="#item2" className="btn btn-xs hover:bg-orange-500">
            2
          </a>
          <a href="#item3" className="btn btn-xs hover:bg-orange-500">
            3
          </a>
          <a href="#item4" className="btn btn-xs hover:bg-orange-500">
            4
          </a>
          </div>
        </div>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full grid">
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          </div>
          <div id="item2" className="carousel-item w-full grid">
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          </div>
          <div id="item3" className="carousel-item w-full grid">
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          </div>
          <div id="item4" className="carousel-item w-full grid">
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          <div className= "text-left p-4 rounded-lg lg:flex items-center justify-center gap-4">
              <img className="h-32 w-40 rounded-lg" src={monitor} alt="" />
              <div>
                <div className="flex gap-1 my-2">
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p>
                    <BsStar />
                  </p>
                  <p className="">
                    <BsStar />
                  </p>
                </div>
                <h1 className="text-2xl font-semibold my-3 inline-block">
                  All Super fast style Regular
                </h1>

                <div className="text-2xl font-bold text-amber-400">
                  $80.00
                  <del className="text-slate-300 font-normal text-xl">
                    $83.00
                  </del>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;

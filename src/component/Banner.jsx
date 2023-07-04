import React from "react";
import { Link, NavLink } from "react-router-dom";
import color from "../data/color";
import { TwitterLogo, FacebookLogo, LinkedinLogo, InstagramLogo, CaretDown } from "phosphor-react";

const Banner = ({ img, txt, txt2, extra, info, btn_txt }) => {
  return (
    // <div className="h-[80vh] bg-red-200 text-white capitalize">
    <div style={{color:'white',textTransform:'capitalize'}} className={extra?"h-[100vh] md:h-[82vh] bg-red-200":"bg-red-200 h-[80vh] xl:h-[60vh]"}>
      <div style={{ backgroundImage: `url(${img})` }} className="bg-no-repeat bg-cover bg-center h-full relative">
        <div className="bg-[#091242]/30">
          <div className="lg:w-3/4 lg:m-auto">
            <div className=" font-medium flex items-center justify-between">
              <div className="flex items-center text-white w-full text-center lg:w-3/5 lg:-ml-5 xl:-ml-9">
                <Link className="border-r last:border-none border-r-white w-full" to={"/"}>home</Link>
                <Link className="border-r last:border-none border-r-white w-full" to={"/about"}>about</Link>
                {/* <Link className="border-r last:border-none border-r-white w-full" to={"/about"}>pages</Link> */}
                <div className=" relative bg-red-500 text-center border-r last:border-none border-r-white w-full group">
                  <div className="flex items-center gap-1 justify-center mx-auto w-3/4 bg-red-400">
                    <p>pages</p>
                    <CaretDown color="#fdfdfd" size={20}/>
                  </div>
                  <div className="hidden z-10 group-hover:block absolute w-full text-left bg-blue-500">
                    <Link className=" w-3/5 mx-auto bg-red-300">blog</Link>
                    <Link className=" w-3/5 mx-auto bg-red-300">change</Link>
                    <Link className=" w-3/5 mx-auto bg-red-300">errorLinkage</Link>
                    <Link className=" w-3/5 mx-auto bg-red-300">liecenses</Link>
                    <Link className=" w-3/5 mx-auto bg-red-300">Linkricing</Link>
                    <Link className=" w-3/5 mx-auto bg-red-300">Linkroject</Link>
                    <Link className=" w-3/5 mx-auto bg-red-300">service</Link>
                    <Link className=" w-3/5 mx-auto bg-red-300">team</Link>
                  </div>
                </div>
                <Link className="border-r last:border-none border-r-white w-full" to={"/project"}>projects</Link>
                <Link className="border-r last:border-none border-r-white w-full" to={"/contact"}>contact</Link>
              </div>
              <div className=" hidden md:flex items-center justify-between w-2/5">
                <div className="flex items-center justify-between w-2/5 md:w-full lg:w-2/5">
                  <InstagramLogo size={20} color="#ffffff" />
                  <LinkedinLogo size={20} color="#ffffff" weight="fill" />
                  <TwitterLogo size={20} color="#ffffff" weight="fill" />
                  <FacebookLogo size={20} color="#ffffff" weight="fill" />
                </div>
                <button className="p-4 text-black bg-white w-2/4 capitalize md:hidden lg:block">request quote</button>
              </div>
            </div>
            <div className=" absolute top-1/2 -translate-y-1/2 w-full mx-4 md:mx-8 lg:mx-0 md:w-2/4 lg:w-2/3 xl:w-2/4">
              <p style={{ borderLeft: `2px solid ${color.grdt}` }} className="bg-[#041c37]/50 w-fit px-2 py-1">
                {txt}
              </p>
              <p className="font-[Rubik] font-semibold text-4xl/normal w-3/4">
                {info}
              </p>
              {extra && (
                <div>
                  <p className=" font-[Krub] font-medium mr-4 md:w-3/5 my-2 ">{txt2}</p>
                  <button
                    style={{
                      background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)`,
                    }}
                    className="p-2 text-black capitalize font-medium">
                    {btn_txt}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

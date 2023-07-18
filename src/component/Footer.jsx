import React from "react";
import { Link } from "react-router-dom";
import color from "../data/color";
import Logo from "./Logo";
import {
  Envelope,
  Phone,
  LinkedinLogo,
  TwitterLogo,
  FacebookLogo,
} from "phosphor-react";

const Footer = () => {
  // const linear = {background: linear-gradient(`94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%`)};

  const iconAry = [
    {
      icon: Envelope,
      txt: "email",
      txt2: "contact@logistics.com",
    },
    {
      icon: Phone,
      txt: "call us",
      txt2: "(00) 112 365 489",
    },
  ];

  const icon = iconAry.map((item, idx) => (
    <div key={idx} className="flex items-center gap-4 my-4">
      <div className="p-3 rounded-full bg-[#111c55] border border-[#273270]">
        {React.createElement(item.icon, {
          size: 20,
          color: "#f6b426",
        })}
      </div>
      <div>
        <p>{item.txt}</p>
        <p>{item.txt2}</p>
      </div>
    </div>
  ));

  const topAry = ["pages", "utility", "subscribe"];
  const top = topAry.map((item, idx) => (
    <p key={idx} className="last:md:w-2/4 md:w-2/5 md:py-0 py-2">
      {item}
    </p>
  ));

  const listAry = [
    { path: "about", txt: "about us" },
    { path: "team", txt: "our team" },
    { path: "project", txt: "our project" },
    { path: "pricing", txt: "pricing" },
    { path: "contact", txt: "contact" },
    { path: "", txt: "style guide" },
    { path: "change", txt: "changelog" },
    { path: "liecense", txt: "liecenses" },
    { path: "protection", txt: "protected" },
    { path: "error", txt: "not found" },
  ];

  const listClass = "even:w-fit even:ml-auto md:even:m-0 last:col-span-2 last:text-[#f6b426] last:text-center md:last:col-span-full md:last:text-left lg:last:text-white";
  const list = listAry.slice(0, 5).map((item, idx) => (
    <Link key={idx} to={`/${item.path}`} className={listClass}>
      {item.txt}
    </Link>
  ));
  const list2 = listAry.slice(5, 10).map((item, idx) => (
    <Link key={idx} to={`/${item.path}`} className={listClass}>
      {item.txt}
    </Link>
  ));

  return (
    <div style={{ backgroundColor: color.blueBg }} className=" capitalize text-white">      
      <div className="bg-white/5">
        <div className=" lg:flex md:space-x-4 px-4 items-center justify-between font-[Rubik] font-semibold text-lg flex flex-wrap md:flex-nowrap lg:w-3/4 lg:mx-auto">
          <div style={{ backgroundColor: color.blueBg }} className="w-full flex-none md:flex-auto md:-ml-4 md:px-4">
            <Logo />
          </div>
          {top}
        </div>
      </div>
      <div className="px-4 lg:w-3/4 mx-auto">
        <div className="md:flex items-start justify-between py-4 md:space-x-4">
          <div style={{ backgroundColor: color.blueBg }} className=" w-full normal-case mb-4">
            <p className="">Leverage agile frameworks to provide a robust synopsis for strategy collaborative thinking to further the overall value proposition.
            </p>
            {icon}
          </div>
          <div className="gap-4 md:gap-0 md:w-2/5 lg:space-y-2  md:grid-cols-1 grid grid-cols-2">
            {list}
          </div>
          <div className="gap-4 md:gap-0 md:w-2/5 lg:space-y-2  md:grid-cols-1 grid grid-cols-2">
            {list2}
          </div>
          <div className="md:w-2/4 md:m-0 space-y-4 mt-4">
            <input
              className=" font-[League_Spartan] w-full py-2 bg-transparent border border-[#4e5683] indent-4 "
              type="text"
              placeholder="Email here*"
            />
            <div className="flex items-center justify-between space-x-4">
              <button
                style={{
                  background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)`,
                }}
                className="py-2 text-black font-semibold w-2/4 md:w-full"
              >
                send now
              </button>
              <div className="flex items-center justify-between lg:justify-around w-2/4 md:hidden">
                <LinkedinLogo size={20} color="#ffffff" weight="fill" />
                <TwitterLogo size={20} color="#ffffff" weight="fill" />
                <FacebookLogo size={20} color="#ffffff" weight="fill" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center justify-between border-t border-t-white py-4 space-y-2 lg:space-y-0">
          <p className=" w-full">
            Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.
          </p>
          <div style={{ color: color.grayTxt }} className="flex items-center justify-between lg:w-3/4">
            <p>Style Guide</p>
            <p>Licenses</p>
            <p>Changelog</p>
            <p>Password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
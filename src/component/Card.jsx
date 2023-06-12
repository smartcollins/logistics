import React from "react";
import color from "../data/color";
import card from "../data/card";
import { TwitterLogo, FacebookLogo, InstagramLogo } from "phosphor-react";

const Card = ({ start, end, pat }) => {
  return card.slice(start, end).map((item, idx) => (
    <div key={idx} className={`w-full relative ${pat}`}>
      <img className="h-[60vh] w-full object-cover xl:h-[50vh] " src={item.img} alt={`team${idx}`}/>
      <div style={{background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)`,}} className="flex items-center w-fit gap-4 p-2 absolute bottom-16 right-0">
        <TwitterLogo size={20} color={color.darkTxt} weight="fill" />
        <FacebookLogo size={20} color={color.darkTxt} weight="fill" />
        <InstagramLogo size={20} color={color.darkTxt} />
      </div>
      <div style={{ background: color.blueBg }} className="text-white capitalize p-4">
        <p className=" font-bold">{item.names}</p>
        <p>{item.title}</p>
      </div>
    </div>
  ));
};

export default Card;

import React from "react";
import icon from "../data/icon";

const Icon = ({alt}) => {
  return icon.map((item, idx) => (
    <div
      key={idx}
      className={alt ? "text-white flex items-center gap-4 capitalize" : "md:w-2/4 flex gap-4 justify-between md:justify-normal md:flex-col items-center text-white"}>
      {React.createElement(item.icon, {
        size: 30,
        color: alt ? "#F6B426" : "#ffffff",
        className: "w-fit h-fit p-4 bg-[#273270] border border-[#273270] rounded-full",
      })}
      <div className="w-full">
        {alt? <p>{item.type}</p> : null}
        <p className={alt?" w-3/4":"w-full"}>{item.txt}</p>
      </div>
    </div>
  ));
};

export default Icon;

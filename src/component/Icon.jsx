import React from "react";
import icon from "../data/icon";

const Icon = ({alt}) => {
  return icon.map((item, idx) => (
    <div
      key={idx}
      className={alt ? "text-white flex items-center gap-4 capitalize w-1/5 bg-red-500" : "md:w-2/4 flex gap-4 justify-between md:justify-normal md:flex-col items-center text-white bg-red-400"}>
      {React.createElement(item.icon, {
        size: 30,
        color: alt ? "#F6B426" : "#ffffff",
        className: "w-fit h-fit p-4 bg-[#273270] border border-[#273270] rounded-full",
      })}
      <div>
        {alt? <p>{item.type}</p> : null}
        <p className="w-full">{item.txt}</p>
      </div>
    </div>
  ));
};

export default Icon;

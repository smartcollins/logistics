import React from "react";
import color from "../data/color";
import work from "../data/work";

const Work = () => {
  return (
    <div className=" space-y-4 gap-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 lg:w-11/12 mx-auto">
      {work.map((item, idx) => (
        <div key={idx} className="group md:text-left">
          <img className="mx-auto md:m-0" src={item.icon} alt="icon-logo" />
          <p className=" text-[#1c1f35] group-hover:text-[#ffb82b] text-2xl capitalize">
            {item.txt}
          </p>
          <p style={{ color: color.grayTxt }} className="xl:w-3/4">
            following the quality of our service thus having gained trust of our many clients
          </p>
        </div>
      ))}
    </div>
  );
};

export default Work;
import React from "react";
import color from "../data/color";
import work from "../data/work";
import { Link } from "react-router-dom";

const Work = ({ start, end, dest, home }) => {
  return (
    <div className="space-y-8">
      <div className= {home?"w-full":"space-y-4 gap-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 mx-auto"}>
        {work.slice(start, end).map((item, idx) => (
          <Link to={dest} key={idx} className={home?"group md:text-left flex gap-4 items-start":"group md:text-left"}>
            <div className={home?"w-2/5":undefined}>
              <img className={home?"mx-auto object-contain":"mx-auto md:m-0"} src={item.icon} alt="icon-logo" />
            </div>
            <div className={home?" border-l px-4":undefined}>
              <p className=" text-[#1c1f35] group-hover:text-[#ffb82b] text-2xl capitalize">
                {item.txt}
              </p>
              <p style={{ color: color.grayTxt }}>following the quality of our service thus having gained trust of our many clients</p>
            </div>
          </Link>
        ))}
      </div>
      {home ? undefined : <button style={{ background: color.blueBg }} className="text-white py-2 px-8 rounded">More Works</button>}
    </div>
  );
};

export default Work;

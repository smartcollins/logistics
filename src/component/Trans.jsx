import React from "react";

const Trans = ({ img, txt, txt2 }) => {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className="relative h-[60vh] px-4 bg-no-repeat">
      <div className="absolute bottom-4 capitalize">
        <p className="text-2xl font-semibold text-white">{txt}</p>
        <p className="text-[#ffb629] text-lg font-medium">{txt2}</p>
      </div>
    </div>
  );
};

export default Trans;
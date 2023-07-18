import React from "react";

const Logo = () => {
  return (
    <div className=" py-4 flex items-center gap-4 w-2/4">
      <div className="h-full grid grid-cols-2 gap-1">
        <span className=" h-3 w-3 bg-[#ffb82b] origin-bottom rotate-[-30deg]"></span>
        <span className=" h-3 w-3 bg-[#ffb82b]"></span>
        <span className=" h-3 w-3 bg-[#ffb82b]"></span>
        <span className=" h-3 w-3 bg-[#ffb82b]"></span>
      </div>
      <p>TransitFlow</p>
    </div>
  );
};

export default Logo;
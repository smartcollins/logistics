import React from "react";
import { Link } from "react-router-dom";
import project from "../data/project";
import Carousel from "../component/Carousel";
import Review from "../component/Review";
import Stat from "../component/Stat";
import { ArrowSquareOut } from "phosphor-react";

const Project = () => {
  const item = project.map((itm, idx) => (
    <img key={idx} src={itm.img} alt="avater" />
  ));

  const grid = project.map((item, idx) => (
    <Link to={'/project-info'} key={idx} className=" relative w-fit group">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[85%] w-[85%] hidden bg-[#1c1f35]/80 group-hover:flex items-center justify-center">
        <ArrowSquareOut size={50} color="#fdaf3b" />
      </div>
      <img src={item.img} alt="news" />
    </Link>
  ));

  return (
    <div>
      <div className="hidden lg:grid grid-cols-3 gap-4 w-3/4 my-8 mx-auto">
        {grid}
      </div>
      <div className=" w-11/12 my-8 mb-10 mx-auto md:w-3/4 lg:hidden">
        <Carousel items={item} dot={true} show={3} scroll={1} />
      </div>
      <div className="mx-auto w-11/12 md:w-3/4">
        <Review />
      </div>
      <Stat />
    </div>
  );
};

export default Project;
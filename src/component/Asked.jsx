import React from "react";
import color from "../data/color";
import Caption from "./Caption";
import client2 from "../images/client2.png";
import { Phone, CaretDown, CaretRight } from "phosphor-react";

const Asked = () => {
  const endAry = [
    "What payment methods are supported?",
    "What options for logistics plans are available?",
    "Can i specify a delivery date when ordering?",
  ];

  const end = endAry.map((item, idx) => (
    <div key={idx} className="flex justify-between items-center">
      <p className=" font-semibold">{item}</p>
      <CaretRight size={25} color="#000000" />
    </div>
  ));
  return (
    <div className="bg-[#f4f4f4]">
      <div className="gap-8 py-4 my-8 md:py-8 md:my-0 space-y-4 lg:flex lg:py-16 lg:space-y-0 2xl:h-[30vh] 2xl:w-3/4 2xl:mx-auto">
        <div className=" text-black px-4 md:mx-auto md:w-11/12 lg:w-3/4 xl:ml-40 2xl:m-0">
          <div className="mx-auto w-fit text-left">
            <Caption txt={"faq"} txt2={"frequently asked questions"} />
            <div className=" space-y-8">
              <div className=" space-y-2">
                <div className="flex justify-between items-center">
                  <p className=" font-semibold">
                    How can I pay for your logistics services?
                  </p>
                  <CaretDown size={25} color="#ffbb2b" />
                </div>
                <p> Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
                </p>
              </div>
              {end}
            </div>
          </div>
        </div>
        <div className="w-full h-[70vh] relative md:h-[50vh] lg:h-full text-white 2xl:h-full">
          <img
            className="h-full w-full object-cover md:ml-auto xl:w-4/6 2xl:ml-0 2xl:w-full"
            src={client2}
            alt="delivery"
          />
          <div className="absolute z-50 bg-[#091242]/95 top-1/2 -translate-y-1/2 md:left-4 p-8 space-y-4 md:bg-[#091242] md:w-2/4 lg:w-2/3 xl:w-2/4">
            <p style={{ borderLeft: `4px solid ${color.grdt}` }} className=" bg-[#e8e8e8]/10 uppercase w-fit px-4">
              let's talk
            </p>
            <p className="font-[Rubik] font-bold text-2xl">
              you need any help? get free consultation
            </p>
            <div className="flex gap-4 items-center w-fit">
              <Phone className=" w-12 h-12 bg-[#111c55] border border-[#2d3a7b] rounded-full px-3" size={16} color="#ffffff"/>
              <div>
                <p>have any questions</p>
                <p>(00) 112 365 489</p>
              </div>
            </div>
            <button
              style={{
                color: color.darkTxt,
                background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)`,
              }}
              className=" py-2 font-bold capitalize text-center w-2/5">contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asked;

import React from "react";
import side from "../images/team-side.png";
import sponsor from "../images/client_logo.png";
import user from "../icons/user-icon.svg";
import timer from "../icons/timer-icon.svg";
import Caption from "../component/Caption";
import Card from "../component/Card";

const Team = () => {
  const abtAry = [
    {
      icon: user,
      txt: "our vision",
    },
    {
      icon: timer,
      txt: "estimate shipping",
    },
  ];

  const abt = abtAry.map((item, idx) => (
    <div key={idx} className="md:space-y-1 xl:space-y-2">
      <img src={item.icon} alt="icon" />
      <p className=" capitalize font-medium text-lg">{item.txt}</p>
      <p className="text-[#666c89]"> Leverage agile frameworks to provide a robust synopsis for strategy foster.</p>
    </div>
  ));

  return (
    <div>
      <div className="my-8">
        <Caption mid={true} dark={true} txt={"team"} txt2={"meet expert team"}/>
      </div>
      <div className="space-y-4 w-11/12 gap-8 my-8 mx-auto md:grid md:space-y-0 md:grid-cols-2 xl:grid-cols-3 xl:w-3/4">
        <Card/>
      </div>
      <div className="flex flex-wrap items-center justify-between w-11/12 mx-auto xl:flex-nowrap xl:gap-8">
        <img className="w-full object-cover md:h-[50vh] xl:h-full xl:w-4/6 " src={side} alt="side-ad"/>
        <div className="text-left xl:w-2/4 space-y-8">
          <div className="my-4 capitalize">
            <Caption txt="about" txt2="why chose us" />
            <p className=" normal-case text-[#666c89]"> Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
          </div>
          <div className="items-center justify-between border-t border-[#d6d6d6] gap-4 pt-4 space-y-4 md:flex md:space-y-0 xl:py-8">
            {abt}
          </div>
        </div>
      </div>
      <div className="my-4 md:my-8 xl:my-8">
        <img className=" mx-auto h-16 w-11/12 md:object-cover md:h-full xl:w-3/4" src={sponsor} alt="delivery"/>
      </div>
    </div>
  );
};

export default Team;
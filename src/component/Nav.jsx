import React from "react";
import color from "../data/color";
import Logo from "./Logo";
import { Clock, Envelope, Phone } from "phosphor-react";

const Nav = () => {
  const ary = [{
    icon: Clock,
    txt: 'mon - sat 9.00 - 18.00',
    txt2: 'Sunday Closed'
  },{
    icon: Envelope,
    txt: 'email',
    txt2: 'contact@logistics.com'
  },{
    icon: Phone,
    txt: 'call us',
    txt2: '(00) 112 365 489'
  }]

  const item = ary.map(({icon,txt,txt2},idx)=><div key={idx} className="flex items-center gap-4 w-full ">
  <div className="p-3 rounded-full bg-[#111c55] border border-[#273270]">
    {/* <{item.icon} size={20} color="#f6b426" /> */}
    {React.createElement(icon,{
      size: 20,
      color: "#f6b426"
    })}
  </div>
  <div>
    <p>{txt}</p>
    <p>{txt2}</p>
  </div>
</div>)
  return (
    <div className="text-white capitalize hidden md:block">
      <div style={{ backgroundColor: color.blueBg }} className="flex items-center justify-between py-4">
        {item}
        <div className="mx-4 w-full lg:flex lg:w-3/4 lg:mx-auto">
          <div className="hidden xl:block w-1/3">
            <Logo />
          </div>
          <div className="flex flex-col items-center justify-between gap-4 w-full md:flex-row">
            <div className="flex items-center gap-4 w-full ">
              <div className="p-3 rounded-full bg-[#111c55] border border-[#273270]">
                <Clock size={20} color="#f6b426" />
              </div>
              <div>
                <p>Mon - Sat 9.00 - 18.00</p>
                <p>Sunday Closed</p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full ">
              <div className="p-3 rounded-full bg-[#111c55] border border-[#273270]">
                <Envelope size={20} color="#f6b426" />
              </div>
              <div>
                <p>Email</p>
                <p>contact@logistics.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full ">
              <div className="p-3 rounded-full bg-[#111c55] border border-[#273270]">
                <Phone size={20} color="#f6b426" />
              </div>
              <div>
                <p>Call us</p>
                <p>(00) 112 365 489</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
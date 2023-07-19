import React from "react";
import { Link, useLocation } from "react-router-dom";
import color from "../data/color";
import cal from "../icons/cal-w-Icon.svg";
import { TwitterLogo, FacebookLogo, LinkedinLogo, InstagramLogo, CaretDown } from "phosphor-react";

const Banner = ({ img, txt, txt2, blog, extra, info, btn_txt }) => {
  const location = useLocation();
  const style = 'border-r last:border-none border-r-white w-full py-1 lg:py-0'
  const style2 = 'hover:bg-blue-500/20 text-left w-full overflow-hidden truncate text-center px-1 md:px-0 md:w-3/5'
  const ary = [
    {dest:'blog'},
    {dest:'change'},
    {dest:'liecense'},
    {dest:'pricing'},
    {dest:'service'},
    {dest:'team'}
  ]
  const items = ary.map((item,idx)=><Link key={idx} to={`/${item.dest}`} className={location.pathname === `/${item.dest}`?`${style2} border-b-2 border-white`:style2}>{item.dest}</Link>)
  return (
    <div style={{color:'white',textTransform:'capitalize',backgroundColor: color.blueBg}} className={extra?"h-[100vh] md:h-[82vh]":"h-[80vh] xl:h-[60vh]"}>
      <div style={{ backgroundImage: `url(${img})` }} className="bg-no-repeat bg-cover bg-center h-full relative">
        <div className="bg-[#091242]/30">
          <div className="lg:w-3/4 lg:m-auto">
            <div className=" font-medium flex items-center justify-between">
              <div className="flex items-center text-white w-full text-center lg:w-3/5 lg:-ml-5 xl:-ml-9">
                <Link className={style} to={"/"}>home</Link>
                <Link className={style} to={"/about"}>about</Link>
                <div className={`relative text-center group ${style}`}>
                  <div className="flex items-center gap-1 justify-center mx-auto w-3/4">
                    <p>pages</p>
                    <CaretDown className="hidden md:block" color="#fdfdfd" size={20}/>
                  </div>
                  <div style={{backgroundColor:color.blueBg}} className="hidden z-10 rounded group-hover:flex flex-col items-center gap-2 absolute w-full text-left py-1">
                    {items}
                  </div>
                </div>
                <Link className={style} to={"/project"}>projects</Link>
                <Link className={style} to={"/contact"}>contact</Link>
              </div>
              <div className=" hidden md:flex items-center justify-between w-2/5">
                <div className="flex items-center justify-between w-2/5 md:w-full lg:w-2/5">
                  <InstagramLogo size={20} color="#ffffff" />
                  <LinkedinLogo size={20} color="#ffffff" weight="fill" />
                  <TwitterLogo size={20} color="#ffffff" weight="fill" />
                  <FacebookLogo size={20} color="#ffffff" weight="fill" />
                </div>
                <button className="p-4 text-black bg-white w-2/4 capitalize md:hidden lg:block">request quote</button>
              </div>
            </div>
            <div className=" absolute top-1/2 -translate-y-1/2 w-full mx-4 md:mx-8 lg:mx-0 md:w-3/4 xl:w-2/4">
              {blog?
              <div className="flex gap-4 py-1">
                <img src={cal} alt="calender" />
                <div>
                  <p className=" text-4xl font-bold">12</p>
                  <p className=" text-lg">march</p>
                </div>
              </div>:
              <p style={{ borderLeft: `2px solid ${color.grdt}` }} className="bg-[#041c37]/50 w-fit px-2 py-1">
                {txt}
              </p>}
              <p style={blog?{width:'100%'}:{width:'75%'}} className="font-[Rubik] font-semibold text-4xl/normal">
                {info}
              </p>
              {extra && (
                <div>
                  <p className=" font-[Krub] font-medium mr-4 md:w-3/5 my-2 ">{txt2}</p>
                  <button
                    style={{
                      background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)`,
                    }}
                    className="p-2 text-black capitalize font-medium">
                    {btn_txt}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import banner from "./data/banner";
import Footer from "./component/Footer";
import Banner from "./component/Banner";

const Layout = () => {
  const location = useLocation();
  const recent = banner.filter((item) => {
    console.log(item)
    return (`/${item.path}` === location.pathname) || (item.path === 'home' && location.pathname === '/')
});
  console.log(location)
  
  console.log(recent)
  return (
    <div>

      {/* {
        recent === [] ? <div>
            {banner.slice(0,1).map((itm, idx) => (
        <Banner key={idx} {...itm} />
      ))}
        </div>:<div>
            {recent.map((itm, idx) => (
                <Banner key={idx} {...itm} />
            ))}
        </div>
      } */}

      {recent.map((itm, idx) => (
        <Banner key={idx} {...itm} />
      ))}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

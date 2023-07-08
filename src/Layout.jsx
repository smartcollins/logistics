import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import banner from "./data/banner";
import Footer from "./component/Footer";
import Banner from "./component/Banner";

const Layout = () => {
  const location = useLocation();
  const recent = banner.filter((item) => ((`/${item.path}` === location.pathname) || (item.path === 'home' && location.pathname === '/')))

  console.log(location)
  console.log(recent)
  return (
    <div>
      {recent.map((itm, idx) => (
        <Banner key={idx} {...itm} />
      ))}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

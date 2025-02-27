import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import banner from "../data/banner";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const recent = banner.filter((item) => ((`/${item.path}` === location.pathname) || (item.path === 'home' && location.pathname === '/')))
  return (
    <div className="overflow-x-clip">
      <Nav/>
      {recent.map((itm, idx) => (
        <Banner key={idx} {...itm} />
      ))}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

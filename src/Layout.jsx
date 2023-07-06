import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import banner from "./data/banner";

const Layout = () => {
  const location = useLocation();
  const recent = banner.filter((item) => `/${item.path}` === location.pathname);
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

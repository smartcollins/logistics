import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './component/Footer';
import Banner from './component/Banner';
import banner from './data/banner';


const Layout = ()=>{
    const location = useLocation();
    const loc = location.pathname;
    // const me = banner.filter(item => item.img)
    // const recent = banner.filter(item => `/${item.img}` === location.pathname)
    // const recent = banner.filter(item => item.img === 'home')
    const recent = banner.filter(item => `/${item.path}` === location.pathname)

    console.log(loc)
    console.log(location)
    console.log(recent)
    return(
        <div>
            {/* {banner.filter((item.img === location))} */}
            <Outlet/>
            <Footer/>
        </div>
    )
}


export default Layout; 
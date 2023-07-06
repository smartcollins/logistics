import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer';


const Layout = ()=>{
    return(
        <div>
            <Outlet/>
            <Footer/>
        </div>
    )
}


export default Layout; 
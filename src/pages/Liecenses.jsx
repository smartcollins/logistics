import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';
import Footer from '../component/Footer';
import color from '../data/color';


const Liecenses = ()=>{
    return(
        <div>
            <div>{banner.slice(13, 14).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className='bg-red-500 flex items-start gap-8 mx-auto w-4/5'>
                <p style={{color: color.darkTxt}} className='bg-red-200 w-3/4 font-semibold text-2xl capitalize text-center'>icon & graphics</p>
                <div className='bg-red-300'>
                    <p>
                    All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.

The iconography used in this Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific Icon, you can check the licenses and download the images for free on phosphoricons.
                    </p>
                    <p>Phosphor Icon:<span>Liecenses</span></p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Liecenses; 
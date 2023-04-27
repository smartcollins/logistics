import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';
import Footer from '../component/Footer';
import color from '../data/color';


const Change = ()=>{
    return(
        <div>
            <div>{banner.slice(12, 13).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div style={{backgroundColor: color.blueBg}} className='flex items-center justify-center w-2/4 mx-auto my-8 h-[30vh]'>
                <div className='flex items-center gap-4 text-white'>
                    <p className=' font-bold text-2xl font-[Rubik]'>Version 01</p>
                    <p className='bg-[#1c2551] font-[Krub] py-2 px-4'>Initial TransitFlow Webflow Template Release</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Change; 
import React from 'react';
import banner from '../data/banner';
import Banner from './Banner';
import Footer from './Footer';
import color from '../data/color';


const ErrorPage = ()=>{
    return(
        <div>
            <div>{banner.slice(11,12).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className='h-[70vh] text-center'>
                <p className='text-[200px] font-semibold text-[#1c1f35]'>4<span className='text-[#ffbb2b]'>0</span>4</p>
                <p className='text-[#1c1f35] font-semibold text-2xl -mt-10'>Oops! Page not found.</p>
                <p className='text-[#666c89] text-base'>Lets's get you to where you need to be.</p>
                <button style={{ background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className='px-4 py-2 my-4 font-medium text-black'>Back to home</button>
            </div>
            <Footer/>
        </div>
    )
}


export default ErrorPage; 
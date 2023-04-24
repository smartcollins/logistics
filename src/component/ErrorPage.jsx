import React from 'react';
import banner from '../data/banner';
import Banner from './Banner';
import Footer from './Footer';


const ErrorPage = ()=>{
    return(
        <div>
            <div>{banner.slice(11,12).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className='h-[70vh] text-center'>
                <p className='text-[200px] font-semibold text-[#1c1f35]'>4<span className='text-[#ffbb2b]'>0</span>4</p>
                <p className='text-[#1c1f35] font-semibold text-2xl'>Oops! Page not found.</p>
                <p>Lets's get you to where you need to be.</p>
                <button>Back to home</button>
            </div>
            <Footer/>
        </div>
    )
}


export default ErrorPage; 
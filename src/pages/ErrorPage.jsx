import React from 'react';
import color from '../data/color';
import banner from '../data/banner';
import Banner from '../component/Banner';
import Footer from '../component/Footer';


const ErrorPage = () => {
    return (
        <div>
            <div>{banner.slice(11, 12).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className=' text-center text-[#1c1f35] my-4'>
                <p className='md:text-[200px] text-9xl font-semibold'>4<span className='text-[#ffbb2b]'>0</span>4</p>
                <p className='font-bold text-2xl'>Oops! Page not found.</p>
                <p className='text-[#666c89] text-base tracking-tighter'>Lets's get you to where you need to be.</p>
                <button style={{
                    background: `linear-gradient(94.06deg,
                                ${color.grdt} -1.21%, ${color.grdt2} 58.66%,
                                ${color.grdt3} 116.84%)`
                }}
                    className='px-4 py-2 my-4 font-medium text-black'>Back to home</button>
            </div>
            <Footer />
        </div>
    )
}


export default ErrorPage; 
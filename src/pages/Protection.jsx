import React from 'react';
import color from '../data/color';
import banner from '../data/banner';
import Banner from '../component/Banner';
import Footer from '../component/Footer';


const Protection = () => {
    return (
        <div>
            <div>{banner.slice(14, 15).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div style={{ backgroundColor: color.blueBg }} className='h-[45vh] my-8 lg:mx-auto lg:w-3/4 capitalize text-center flex flex-col items-center'>
                <div className='space-y-4 w-full px-4 my-auto md:px-0 md:m-auto md:w-3/4 lg:m-auto lg:w-2/4 lg:h-2/4 flex flex-col items-center justify-between'>
                    <p className='text-white text-2xl font-bold'>enter password</p>
                    <div className='w-full flex items-center justify-center gap-4'>
                        <input className=' w-full bg-transparent text-white indent-4 placeholder:capitalize caret-[#999999] py-2 border border-[#4e5683] outline-[#4e5683]' type="text" placeholder='enter your password' />
                        <button style={{
                            background: `linear-gradient(94.06deg,
                                ${color.grdt} -1.21%, ${color.grdt2} 58.66%,
                                ${color.grdt3} 116.84%)`
                        }}
                            className='w-2/4 font-medium text-base py-2'>submit</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Protection; 
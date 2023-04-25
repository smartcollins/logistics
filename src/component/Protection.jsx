import React from 'react';
import color from '../data/color';
import banner from '../data/banner';
import Banner from './Banner';
import Footer from './Footer';


const Protection = ()=>{
    return(
        <div>
            <div>{banner.slice(14, 15).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div style={{backgroundColor: color.blueBg}} className='h-[45vh] my-8 mx-auto w-2/4 capitalize text-center flex flex-col items-center'>
                <div className='m-auto w-2/4 h-2/4 flex flex-col items-center justify-between'>
                    <p className='text-white text-2xl font-bold'>enter password</p>
                    <div className=' w-full flex items-center gap-4'>
                        <input className=' bg-transparent text-white indent-4 placeholder:capitalize caret-[#999999] py-2 border border-[#4e5683] outline-[#4e5683]' type="text" placeholder='enter your password' />
                        <button style={{
                    background: `linear-gradient(94.06deg,
                                ${color.grdt} -1.21%, ${color.grdt2} 58.66%,
                                ${color.grdt3} 116.84%)`
                }}
                    className='w-full font-medium text-base py-2'>submit</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Protection; 
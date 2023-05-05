import React from 'react';
import ccc from '../images/br-blog2.png'
import color from '../data/color'


const News = ()=>{
    return(
        <div className='flex  gap-4 border-y py-4 group'>
            <div className=' w-3/4 relative'>
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5/6 w-5/6 hidden bg-[#1c1f35]/80 group-hover:flex items-center justify-center font-bold text-white'>Read more</p>
                <img className='h-full object-cover' src={ccc} alt="news" />
            </div>
            <div className=' text-center'>
                <p style={{color: color.darkTxt}} className=' font-bold text-2xl'>08</p>
                <p style={{color: color.grayTxt}} className=' capitalize text-sm'>march</p>
            </div>
            <div className=' font-["Rubik"]  border-l border-[#d6d6d6] px-4'>
                <p className=' font-bold text-[#1c1f35] text-lg group-hover:text-[#ffbe34]'>Inland freight a worthy solution for your business</p>
                <p className=' text-[#666c89]'>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>
                <ul className=' list-inside list-disc '>
                    <li>urgent transport solutions</li>
                    <li>reliable & experienced staffs</li>
                    <li>urgent transport solutions</li>
                    <li>reliable & experienced staffs</li>
                </ul>
            </div>
        </div>
    )
}


export default News; 
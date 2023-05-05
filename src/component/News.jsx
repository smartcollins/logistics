import React from 'react';
import ccc from '../images/br-blog2.png'
import color from '../data/color'


const News = ()=>{
    return(
        <div className='flex bg-red-500 gap-4'>
            <div className='bg-red-400 w-3/4'>
                <img className='h-full object-cover' src={ccc} alt="news" />
            </div>
            <div className='bg-red-300 text-center'>
                <p style={{color: color.darkTxt}} className=' font-bold text-2xl'>08</p>
                <p style={{color: color.grayTxt}} className=' capitalize text-sm'>march</p>
            </div>
            <div className=' font-["Rubik"] bg-red-200 border-l border-[#d6d6d6] px-2'>
                <p className=' font-medium'>Inland freight a worthy solution for your business</p>
                <p className=' text-[#666c89]'>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>
                <ul className=' list-inside list-disc bg-red-400'>
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
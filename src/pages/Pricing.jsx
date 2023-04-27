import React from 'react';
import banner from '../data/banner';
import color from '../data/color';
import Banner from '../component/Banner';
import Footer from '../component/Footer'


const Pricing = ()=>{
    
    return(
        <div>
            <div>{banner.slice(10, 11).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div style={{color: color.darkTxt}} className=' capitalize bg-red-500 w-4/5 mx-auto my-4'>
                <div className='mx-auto w-fit bg-red-400 text-white '>
                    <p style={{ borderLeft: `4px solid ${color.grdt}` }} className='bg-[#041c37]/50 w-fit px-4 mx-auto'>pricing</p>
                    <p className='font-[Rubik] font-semibold text-2xl/normal'>our best pricing</p>
                </div>
                <div className='flex gap-4 text-center py-4'>
                    <div className='bg-red-300 w-full flex flex-col space-y-4 p-8'>
                        <p className=' font-medium text-xl'>standard</p>
                        <div className='flex items-end justify-center bg-red-500'>
                            <p className=' font-medium text-4xl font-[Rubik]'>$59</p>
                            <p className=' lowercase font-[Rubik]'>/ month</p>
                        </div>
                        <div className=' font-normal text-lg'>
                            <p className=' last:border-b border-t py-2'>single truck</p>
                            <p className=' last:border-b border-t py-2'>full insurance</p>
                            <p className=' last:border-b border-t py-2'>500km</p>
                            <p className=' last:border-b border-t py-2'>real-time shopping</p>
                        </div>
                        <button className='bg-red-200 w-2/4 py-2 mx-auto'>choose plan</button>
                    </div>
                    <div className='bg-red-300 w-full flex flex-col space-y-4 p-8'>
                        <p className=' font-medium text-xl'>standard</p>
                        <div className='flex items-end justify-center bg-red-500'>
                            <p className=' font-medium text-4xl font-[Rubik]'>$59</p>
                            <p className=' lowercase font-[Rubik]'>/ month</p>
                        </div>
                        <div className=' font-normal text-lg'>
                            <p className=' last:border-b border-t py-2'>single truck</p>
                            <p className=' last:border-b border-t py-2'>full insurance</p>
                            <p className=' last:border-b border-t py-2'>500km</p>
                            <p className=' last:border-b border-t py-2'>real-time shopping</p>
                        </div>
                        <button className='bg-red-200 w-2/4 py-2 mx-auto'>choose plan</button>
                    </div>
                    <div className='bg-red-300 w-full flex flex-col space-y-4 p-8'>
                        <p className=' font-medium text-xl'>standard</p>
                        <div className='flex items-end justify-center bg-red-500'>
                            <p className=' font-medium text-4xl font-[Rubik]'>$59</p>
                            <p className=' lowercase font-[Rubik]'>/ month</p>
                        </div>
                        <div className=' font-normal text-lg'>
                            <p className=' last:border-b border-t py-2'>single truck</p>
                            <p className=' last:border-b border-t py-2'>full insurance</p>
                            <p className=' last:border-b border-t py-2'>500km</p>
                            <p className=' last:border-b border-t py-2'>real-time shopping</p>
                        </div>
                        <button className='bg-red-200 w-2/4 py-2 mx-auto'>choose plan</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Pricing; 
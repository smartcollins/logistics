import React from 'react';
import color from '../data/color';


const Change = () => {
    return (
        <div className=' overflow-x-clip'>
            <div style={{ backgroundColor: color.blueBg }} className='flex items-center justify-center mx-auto my-8 h-[30vh] md:w-3/4 lg:w-2/4'>
                <div className='flex items-center gap-4 text-white text-center flex-wrap md:flex-nowrap'>
                    <p className=' font-bold text-2xl font-[Rubik] text-center flex-grow'>Version 01</p>
                    <p className='bg-[#1c2551] font-[Krub] py-2 px-4 flex-grow'>Initial TransitFlow Webflow Template Release</p>
                </div>
            </div>
        </div>
    )
}


export default Change;
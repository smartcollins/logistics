import React from 'react';
import banner from '../data/banner';
import color from '../data/color';
import Banner from '../component/Banner';


const Contact = ()=>{
    return(
        <div className=' capitalize text-white'>
            <div>{banner.slice(9, 10).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div style={{background: color.blueBg}} className=' w-4/5 mx-auto my-8 py-8'>
                <div className='mx-auto w-fit text-center bg-red-500 '>
                    <p style={{ borderLeft: `4px solid ${color.grdt}` }} className='bg-[#e8e8e8]/50 w-fit px-4 mx-auto'>contact</p>
                    <p className='font-[Rubik] font-semibold text-2xl/normal'>get in touch with us</p>
                    <p className='w-3/4 mx-auto'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>
                </div>
            </div>
        </div>
    )
}


export default Contact; 
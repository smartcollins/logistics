import React from 'react';
import banner from '../data/banner';
import color from '../data/color';
import Banner from '../component/Banner';
import {EnvelopeSimple,Phone,Clock} from 'phosphor-react'

const Contact = ()=>{
    return(
        <div className=' capitalize text-white'>
            <div>{banner.slice(9, 10).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div style={{background: color.blueBg}} className=' w-4/5 mx-auto my-8 py-8'>
                <div className='mx-auto w-fit text-center'>
                    <p style={{ borderLeft: `4px solid ${color.grdt}` }} className=' bg-[#e8e8e8]/10 w-fit px-4 mx-auto'>contact</p>
                    <p className='font-[Rubik] font-bold text-4xl/normal'>get in touch with us</p>
                    <p className='w-3/4 mx-auto'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>
                </div>
                <div className='flex items-center justify-between w-3/4 mx-auto my-4'>
                    <EnvelopeSimple className='w-16 h-16 bg-[#273270] border border-[#273270] rounded-full px-4' size={30} color="#ffffff" />
                    <Phone className='w-16 h-16 bg-[#273270] border border-[#273270] rounded-full px-4' size={30} color="#ffffff" />
                    <Clock className='w-16 h-16 bg-[#273270] border border-[#273270] rounded-full px-4' size={30} color="#ffffff" />
                </div>
            </div>
        </div>
    )
}


export default Contact; 
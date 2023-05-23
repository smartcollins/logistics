import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import images from './images';


const Slider = ()=>{
    const [slide,setSlide] = useState(0);

    const forward = ()=>{
        slide === images.length - 1 ? setSlide(0) : setSlide(slide + 1)
    }
    
    const backward = ()=>{
        slide === images.length - 1 ? setSlide(0) : setSlide(slide - 1)
    }




    return(
        <div>
            <div className='bg-red-500 h-[50vh] w-3/4 mx-auto'></div>
            <ArrowLeft className='absolute top-1/2 left-0' size={20} weight='fill'/>
            <ArrowRight className='absolute top-1/2 right-0' size={20} weight='fill'/>
        </div>
    )
}


export default  Slider;
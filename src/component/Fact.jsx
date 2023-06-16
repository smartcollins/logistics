import React from 'react';
import color from '../data/color';


const Fact = ({icon,txt})=>{
    return(
        <div className='flex items-center gap-4'>
            <div style={{background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)`}} className=' rounded-full w-16 h-16 p-4'>
                <img src={icon} alt="icon" />
            </div>
            <p className=' capitalize text-lg'>{txt}</p>
        </div>
    )
}


export default Fact; 
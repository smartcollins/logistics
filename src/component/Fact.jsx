import React from 'react';
import color from '../data/color';

const Fact = ({ icon, txt }) => {
    return (
        <div className='flex items-center gap-4'>
            <div style={{ background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className=' rounded-full w-12 h-12 p-2 flex items-center justify-center'>
                <img src={icon} alt="icon" />
            </div>
            <p className=' capitalize text-lg'>{txt}</p>
        </div>
    )
}

export default Fact; 
import React from 'react';
import icon from '../data/icon';

const Icon = ()=>{
    return(
        icon.map((item, idx) => <div key={idx} className='md:w-2/4 flex gap-4 justify-between md:justify-normal md:flex-col items-center'>
        {
            React.createElement(item.icon, {
                size: 30, color: '#ffffff', className: 'w-fit h-fit p-4 bg-[#273270] border border-[#273270] rounded-full'
            })
        }
        <p className='w-full'>{item.txt}</p>
    </div>)
    )
}


export default Icon; 
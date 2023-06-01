import React from 'react';
import work from '../data/work';


const Work = ()=>{
    return(
        <div>
            {
                work.map((item,idx)=><div key={idx} className='group md:text-left'>
                    <img className='mx-auto md:m-0' src={item.icon} alt='icon-logo' />
                    <p className=' text-[#1c1f35] group-hover:text-[#ffb82b] text-2xl capitalize'>{item.txt}</p>
                    <p style={{ color: color.grayTxt }} className='xl:w-3/4'>following the quality of our service thus having gained trust of our many clients</p>
                </div>)
            }
        </div>
    )
}


export default Work; 
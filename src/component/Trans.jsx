import React from 'react';
import tran from '../images/tran.png'


const Trans = ()=>{
    return(
        <div style={{backgroundImage: `url(${tran})`}} className='relative h-[60vh] px-4 bg-no-repeat'>
            <div className='absolute bottom-4 capitalize'>
                <p className='text-2xl font-semibold text-white'>specialized transport</p>
                <p className='text-[#ffb629] text-lg font-medium'>ocean transports</p>
            </div>
        </div>
    )
}


export default Trans;
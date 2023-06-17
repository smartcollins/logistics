import React from 'react';
import tran from '../images/tran.png'


const Trans = ()=>{
    return(
        <div>
            <div className=' bg-blue-500 relative object-contain'>
                <img className='h-full object-cover' src={tran} alt="ideas" />
                {/* <div className=' text-red-300'> */}
                    <p className='absolute'>specialized transport</p>
                    <p>ocean transports</p>
                {/* </div> */}
            </div>
            {/* <div style={{backgroundImage: `url(${tran})`}}>
                <p>specialized transport</p>
                <p>ocean transports</p>
            </div> */}
        </div>
    )
}


export default Trans;
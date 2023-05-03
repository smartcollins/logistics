import React from 'react';
import color from '../data/color';


const Caption = ({dark,txt,txt2})=>{
    return(
        <div className='my-4 capitalize'>
            {/* <p style={dark?{background: 'rgb(232 232 232 / 0.1)'}:light?{background: 'rgb(232 232 232 / 0.5)'}:left?{margin: '50'}:{margin: 'auto'}} className='w-fit px-4 font-semibold border-l-4 border-l-[#ffb629]'>{txt}</p> */}
            <p style={dark?{background: 'rgb(232 232 232 / 0.5)'}:{background: 'rgb(232 232 232 / 0.1)'}} className=' px-4 font-semibold border-l-4 border-l-[#ffb629]'>{txt}</p>
            <p className='font-[Rubik] font-bold text-4xl/normal'>{txt2}</p>
        </div>
    )
}


export default Caption; 
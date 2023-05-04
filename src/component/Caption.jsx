import React from 'react';


const Caption = ({ dark, mid, txt, txt2 }) => {
    const fiz = 'px-4 font-semibold border-l-4 border-l-[#ffb629]'
    const fiz2 = 'font-[Rubik] font-bold text-4xl/normal'
    return (
        // <div className='my-4 capitalize'>
        <div className='my-4 capitalize'>
            {/* <p style={dark?{background: 'rgb(232 232 232 / 0.1)'}:light?{background: 'rgb(232 232 232 / 0.5)'}:left?{margin: '50'}:{margin: 'auto'}} className='w-fit px-4 font-semibold border-l-4 border-l-[#ffb629]'>{txt}</p> */}

            {/* <p style={dark ? { background: 'rgb(232 232 232 / 0.5)' } : { background: 'rgb(232 232 232 / 0.1)' }} className=' px-4 font-semibold border-l-4 border-l-[#ffb629] w-fit mx-auto'>{txt}</p>
            <p className='font-[Rubik] font-bold text-4xl/normal'>{txt2}</p> */}

            <p style={dark ? { background: 'rgb(232 232 232 / 0.5)' } : { background: 'rgb(232 232 232 / 0.1)' }} className={mid?`w-fit mx-auto ${fiz}`:fiz}>{txt}</p>
            <p className={mid?`mx-auto w-fit ${fiz2}`:fiz2}>{txt2}</p>
        </div>
    )
}


export default Caption; 
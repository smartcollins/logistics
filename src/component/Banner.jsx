import React from 'react';
import color from '../data/color';



const Banner = ()=>{
    return(
        <div className='bg-red-400'>
            <div className='w-2/4'>
            {/* linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%) */}
            <p style={{borderLeft:`2px solid ${color.grdt}`}} className='bg-[#041c37]/50 w-fit px-2'>Logistics & Supply Chain Solutions</p>
            <p className=' w-[55%] font-[Rubik] font-semibold text-5xl leading-normal'>Your Gateway to any Destination in the World</p>
            <p>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </p>
            <button>explore more</button>
            </div>
        </div>
    )
}


export default Banner; 
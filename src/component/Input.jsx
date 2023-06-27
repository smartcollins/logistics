import React from 'react';
import input from '../data/input';

const Input = ()=>{
    return(
        input.map((item, idx) => <input key={idx} type={item.type} placeholder={item.place} className=' indent-4 text-2xl placeholder:text-white lg:placeholder:text-2xl placeholder:text-lg placeholder:text-white/80 placeholder:capitalize bg-transparent border border-white h-16 w-full' />)
    )
}

export default Input; 
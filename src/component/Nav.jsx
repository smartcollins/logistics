import React from 'react';
import color from '../data/color';
import { Clock, Envelope, Phone } from 'phosphor-react';


const Nav = ()=>{
    return(
        <div>
            <div style={{ backgroundColor: color.blueBg }} className='flex items-center justify-between text-white'>
                <div className=' py-4 flex items-center gap-4 bg-red-300 w-2/4'>
                    <div className='h-full grid grid-cols-2 gap-1'>
                        <span className=' h-3 w-3 bg-[#ffb82b] origin-bottom rotate-[-30deg]'></span>
                        <span className=' h-3 w-3 bg-[#ffb82b]'></span>
                        <span className=' h-3 w-3 bg-[#ffb82b]'></span>
                        <span className=' h-3 w-3 bg-[#ffb82b]'></span>
                    </div>
                    <p>TransitFlow</p>
                </div>
                <div className='flex items-center justify-between gap-4 bg-red-100 w-full'>
                    <div className='flex items-center gap-4 w-full bg-red-500'>
                        <div className='p-3 rounded-full bg-[#111c55] border border-[#273270]'>
                            <Clock size={20} color="#f6b426" />
                        </div>
                        <div>
                            <p>Mon - Sat 9.00 - 18.00</p>
                            <p>Sunday Closed</p>
                        </div>
                    </div>
                <div className='flex items-center gap-4 w-full bg-red-500'>
                        <div className='p-3 rounded-full bg-[#111c55] border border-[#273270]'>
                            <Envelope size={20} color="#f6b426" />
                        </div>
                        <div>
                            <p>Email</p>
                            <p>contact@logistics.com</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 w-full bg-red-500'>
                        <div className='p-3 rounded-full bg-[#111c55] border border-[#273270]'>
                            <Phone size={20} color="#f6b426" />
                        </div>
                        <div>
                            <p>Call us</p>
                            <p>(00) 112 365 489</p>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}


export default Nav; 
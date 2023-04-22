import React from 'react';
import color from '../data/color';
import Logo from './Logo';
import Banner from './Banner';
import banner from '../data/banner'
import { Clock, Envelope, Phone } from 'phosphor-react';


const Nav = () => {
    return (
        <div className='text-white capitalize'>
            <div style={{ backgroundColor: color.blueBg }} className='flex items-center justify-between py-4'>
                <Logo />
                <div className='flex items-center justify-between gap-4  w-full'>
                    <div className='flex items-center gap-4 w-full '>
                        <div className='p-3 rounded-full bg-[#111c55] border border-[#273270]'>
                            <Clock size={20} color="#f6b426" />
                        </div>
                        <div>
                            <p>Mon - Sat 9.00 - 18.00</p>
                            <p>Sunday Closed</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 w-full '>
                        <div className='p-3 rounded-full bg-[#111c55] border border-[#273270]'>
                            <Envelope size={20} color="#f6b426" />
                        </div>
                        <div>
                            <p>Email</p>
                            <p>contact@logistics.com</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 w-full '>
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
            {banner.map((item, idx) => <Banner key={idx} {...item} />)}
        </div>
    )
}


export default Nav; 
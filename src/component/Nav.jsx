import React from 'react';
import color from '../data/color';
import Logo from './Logo';
import Banner from './Banner';
import banner from '../data/banner'
// import { Clock, Envelope, Phone, TwitterLogo, FacebookLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';
import { Clock, Envelope, Phone } from 'phosphor-react';


const Nav = () => {
    return (
        <div className='text-white capitalize'>
            <div style={{ backgroundColor: color.blueBg }} className='flex items-center justify-between'>
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
            {/* <div className=' bg-[#091242]/5 font-medium flex items-center justify-between'>
                <div className='flex items-center bg-red-200 w-2/4 text-center'>
                    <p className='border-r h-full py-4 last:border-none border-r-white w-full'>home</p>
                    <p className='border-r h-full py-4 last:border-none border-r-white w-full'>about</p>
                    <p className='border-r h-full py-4 last:border-none border-r-white w-full'>pages</p>
                    <p className='border-r h-full py-4 last:border-none border-r-white w-full'>projects</p>
                    <p className='border-r h-full py-4 last:border-none border-r-white w-full'>contact</p>
                </div>
                <div className='flex items-center justify-between w-2/5'>
                    <div className='flex items-center justify-between w-2/5'>
                        <InstagramLogo size={20} color="#ffffff" />
                        <LinkedinLogo size={20} color="#ffffff" weight="fill" />
                        <TwitterLogo size={20} color="#ffffff" weight="fill" />
                        <FacebookLogo size={20} color="#ffffff" weight="fill" />
                    </div>
                    <button className='p-4 text-black bg-white w-2/4 capitalize'>request quote</button>
                </div>
            </div> */}
            {banner.map((item,idx)=><Banner key={idx} {...item} />)}
        </div>
    )
}


export default Nav; 
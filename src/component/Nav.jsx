import React from 'react';
import color from '../data/color';
import Logo from './Logo';
import Banner from './Banner';
import banner from '../data/banner'
import { Clock, Envelope, Phone } from 'phosphor-react';


const Nav = () => {
    return (
        <div className='text-white capitalize'>
            {/* <div style={{ backgroundColor: color.blueBg }} className='flex items-center justify-between py-4'>
                <div className='mx-auto flex w-3/4 bg-red-500'>
                <div className='w-1/3'>
                    <Logo />
                </div>
                <div className='flex items-center justify-between gap-4 w-full'>
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
            </div> */}

            <div className="text-white capitalize">
        <div style={{ backgroundColor: color.blueBg }} className="flex items-center justify-between py-4 lg:py-8">
          <div className="mx-4 w-full lg:flex lg:w-3/4 lg:mx-auto">
            <div className="hidden xl:block w-1/3">
              <Logo />
            </div>
            <div className="flex flex-col items-center justify-between gap-4 w-full md:flex-row">
              <div className="flex items-center gap-4 w-full ">
                <div className="p-3 rounded-full bg-[#111c55] border border-[#273270]">
                  <Clock size={20} color="#f6b426" />
                </div>
                <div>
                  <p>Mon - Sat 9.00 - 18.00</p>
                  <p>Sunday Closed</p>
                </div>
              </div>
              <div className="flex items-center gap-4 w-full ">
                <div className="p-3 rounded-full bg-[#111c55] border border-[#273270]">
                  <Envelope size={20} color="#f6b426" />
                </div>
                <div>
                  <p>Email</p>
                  <p>contact@logistics.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 w-full ">
                <div className="p-3 rounded-full bg-[#111c55] border border-[#273270]">
                  <Phone size={20} color="#f6b426" />
                </div>
                <div>
                  <p>Call us</p>
                  <p>(00) 112 365 489</p>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
            {/* {banner.slice(0,1).map((item, idx) => <Banner key={idx} {...item} />)} */}
        </div>
    )
}


export default Nav; 
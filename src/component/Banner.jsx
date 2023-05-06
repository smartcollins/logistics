import React from 'react';
import color from '../data/color';
import icon from '../icons/cal-Icon.svg';
import { TwitterLogo, FacebookLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';

const Banner = ({ img, txt, txt2, blog, extra, info, btn_txt }) => {
    return (
        <div className='h-[80vh] bg-red-200 text-white capitalize'>
            <div style={{ backgroundImage: `url(${img})` }} className='bg-no-repeat bg-cover bg-center h-full relative'>
                <div className=' bg-[#091242]/5 font-medium flex items-center justify-between'>
                    <div className='flex items-center w-2/4 text-center text-white'>
                        <p className='border-r last:border-none border-r-white w-full'>home</p>
                        <p className='border-r last:border-none border-r-white w-full'>about</p>
                        <p className='border-r last:border-none border-r-white w-full'>pages</p>
                        <p className='border-r last:border-none border-r-white w-full'>projects</p>
                        <p className='border-r last:border-none border-r-white w-full'>contact</p>
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
                </div>
                {blog?
                <div className=' absolute top-1/2 -translate-y-1/2 bg-red-500'>
                    <div className="flex gap-2 bg-red-300 w-fit">
                        <img className=' w-10 bg-red-400' src={icon} alt="calender-logo" />
                        <div className='flex flex-col capitalize text-lg bg-red-200'>
                            <p>12</p>
                            <p>march</p>
                        </div>
                    </div>
                    <p className='font-[Rubik] font-semibold text-4xl/normal'>{info}</p>
                </div>:
                <div className=' absolute top-1/2 -translate-y-1/2 w-2/4'>
                    <p style={{ borderLeft: `2px solid ${color.grdt}` }} className='bg-[#041c37]/50 w-fit px-2 py-1'>{txt}</p>
                    <p className='font-[Rubik] font-semibold text-4xl/normal w-[50%]'>{info}</p>
                    {extra &&
                        <div>
                            <p className=' font-[Krub] font-medium w-3/5 my-2 '>{txt2}</p>
                            <button style={{ background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className='p-2 text-black capitalize font-medium'>{btn_txt}</button>
                        </div>
                    }
                </div>}
            </div>
        </div>
    )
}

export default Banner; 
import React from 'react';
import banner from '../data/banner';
import color from '../data/color';
import Banner from '../component/Banner';
import client from '../images/client_logo.png'
import client2 from '../images/client2.png'
import {EnvelopeSimple,Phone,Clock, CaretDown, CaretRight} from 'phosphor-react'

const Contact = ()=>{
    return(
        <div className=' capitalize text-white'>
            <div>{banner.slice(9, 10).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div style={{background: color.blueBg}} className=' w-2/4 mx-auto my-8 py-8 px-16'>
                <div className='mx-auto w-fit text-center'>
                    <p style={{ borderLeft: `4px solid ${color.grdt}` }} className=' bg-[#e8e8e8]/10 w-fit px-4 mx-auto'>contact</p>
                    <p className='font-[Rubik] font-bold text-4xl/normal'>get in touch with us</p>
                    <p className='w-3/4 mx-auto'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>
                </div>
                <div className='flex items-center justify-between w-3/4 mx-auto my-8'>
                    <EnvelopeSimple className='w-16 h-16 bg-[#273270] border border-[#273270] rounded-full px-4' size={30} color="#ffffff" />
                    <Phone className='w-16 h-16 bg-[#273270] border border-[#273270] rounded-full px-4' size={30} color="#ffffff" />
                    <Clock className='w-16 h-16 bg-[#273270] border border-[#273270] rounded-full px-4' size={30} color="#ffffff" />
                </div>
                <div className=' w-full text-center pt-4'>
                <div className=' grid grid-rows-4 grid-cols-2 gap-4 font-["League_Spartan"] capitalize text-4xl'>
                    <input type="text" placeholder='Your name*' className=' indent-4 text-2xl placeholder:text-white placeholder:text-2xl bg-transparent border border-white h-16 w-full' />
                    <input type="text" placeholder='Email*' className=' indent-4 text-2xl placeholder:text-white placeholder:text-2xl bg-transparent border border-white h-16 w-full' />
                    <input type="number" placeholder='Phone Number*' className=' indent-4 text-2xl placeholder:text-white placeholder:text-2xl bg-transparent border border-white h-16 w-full' />
                    <input type="text" placeholder='City' className=' indent-4 text-2xl placeholder:text-white placeholder:text-2xl bg-transparent border border-white h-16 w-full' />
                    <textarea placeholder='Your Message' className=' indent-4 text-2xl placeholder:text-white placeholder:text-2xl bg-transparent border border-white w-full col-span-2 row-span-2' name="" id=""></textarea>
                    {/* <textarea placeholder='Your Message' className=' indent-4 text-2xl placeholder:text-white placeholder:text-2xl bg-transparent border border-white w-full col-span-2 row-span-2' name="" id="" cols="30" rows="10"></textarea> */}
                    {/* <input className='bg-red-300 w-full col-span-2 row-span-2'/> */}
                </div>
                
                <button style={{ color: color.darkTxt,background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className=' py-4 font-medium text-xl capitalize text-center w-2/5 mt-8'>send message</button>
                </div>
            </div>
            <div className='bg-red-500 my-8'>
                <img className='mx-auto' src={client} alt="client-logo" />
            </div>
            <div className='flex gap-8'>
                <div className=' text-black bg-blue-500 py-8 w-3/4'>
                    <div className='mx-auto w-fit text-left bg-red-400'>
                        <p style={{ borderLeft: `4px solid ${color.grdt}` }} className=' bg-[#e8e8e8]/10 uppercase w-fit px-4'>faq</p>
                        <p className='font-[Rubik] font-bold text-4xl/normal'>Frequently Asked Questions</p>
                        <div className=' space-y-8'>
                            <div>
                            <div className='flex justify-between items-center bg-red-300'>
                                <p className=' font-semibold'>How can I pay for your logistics services?</p>
                                <CaretDown size={25} color="#ffbb2b" />
                            </div>
                            <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.</p>
                        </div>
                        <div className='flex justify-between items-center bg-red-300'>
                            <p className=' font-semibold'>How can I pay for your logistics services?</p>
                            <CaretRight size={25} color="#000000" />
                        </div>
                        <div className='flex justify-between items-center bg-red-300'>
                            <p className=' font-semibold'>What options for logistics plans are available?</p>
                            <CaretRight size={25} color="#000000" />
                        </div>
                        <div className='flex justify-between items-center bg-red-300'>
                            <p className=' font-semibold'>Can i specify a delivery date when ordering?</p>
                            <CaretRight size={25} color="#000000" />
                        </div>
                        </div>
                    </div>
                </div>
                {/* <div className='w-full h-[57vh] overflow-clip bg-blue-400 relative'> */}
                <div className='w-full h-full bg-blue-400 relative'>
                    {/* <img className='h-[70%] w-full object-cover' src={client2} alt="delivery" /> */}
                    <img className=' ml-auto w-[65%]' src={client2} alt="delivery" />
                    <div style={{background: color.blueBg}}  className='absolute z-50 top-1/2 -translate-y-1/2 left-4 p-8 space-y-4 w-2/4'>
                        <p style={{ borderLeft: `4px solid ${color.grdt}` }} className=' bg-[#e8e8e8]/10 uppercase w-fit px-4'>let's talk</p>
                        <p className='font-[Rubik] font-bold text-2xl bg-red-500'>you nedd any help? get free consultation</p>
                        <div className='flex gap-4 items-center bg-red-500 w-fit'>
                            <Phone className='w-16 h-16 bg-[#111c55] border border-[#2d3a7b] rounded-full px-4' size={30} color="#ffffff" />
                            <div classN>
                                <p>have any questions</p>
                                <p>(00) 112 365 489</p>
                            </div>
                        </div>
                        <button style={{ color: color.darkTxt,background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className=' py-2 font-medium text-xl capitalize text-center w-2/5'>contact us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact; 
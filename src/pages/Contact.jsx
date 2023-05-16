import React from 'react';
import client from '../images/client_logo.png'
import client2 from '../images/client2.png'
import banner from '../data/banner';
import color from '../data/color';
import Banner from '../component/Banner';
import Caption from '../component/Caption';
import Footer from '../component/Footer'
import { EnvelopeSimple, Phone, Clock, CaretDown, CaretRight } from 'phosphor-react'

const Contact = () => {
    const iconAry = [{
        icon: EnvelopeSimple,
        txt: 'contact@logistics.com'
    },{
        icon: Phone,
        txt: '(00) 112 365 489'
    },{
        icon: Clock,
        txt: 'mon - sat 9.00 - 18.00 sunday closed'
    }]

    const icons = iconAry.map((item,idx)=><div key={idx} className='md:w-2/4 flex gap-4 justify-between md:justify-normal md:flex-col items-center'>
        {
            React.createElement(item.icon, {
                size: 30, color: '#ffffff', className: 'w-fit h-fit p-4 bg-[#273270] border border-[#273270] rounded-full'
            })
        }
    <p className='w-full'>{item.txt}</p>
</div>)

    const inputAry = [{
        type: 'text',
        place: 'your name*'
    }, {
        type: 'email',
        place: 'email*'
    }, {
        type: 'number',
        place: 'phone number*'
    }, {
        type: 'text',
        place: 'city*'
    }];

    const endAry = [
        'What payment methods are supported?',
        'What options for logistics plans are available?',
        'Can i specify a delivery date when ordering?'
    ]

    const input = inputAry.map((item, idx) => <input key={idx} type={item.type} placeholder={item.place} className=' indent-4 text-2xl placeholder:text-white lg:placeholder:text-2xl placeholder:text-lg placeholder:text-white/80 placeholder:capitalize bg-transparent border border-white h-16 w-full' />)
    const end = endAry.map((item, idx) => <div key={idx} className='flex justify-between items-center'>
        <p className=' font-semibold'>{item}</p>
        <CaretRight size={25} color="#000000" />
    </div>)

    return (
        <div className=' capitalize text-white'>
            <div>{banner.slice(9, 10).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div style={{ background: color.blueBg }} className=' xl:w-2/4 lg:w-3/4 md:px-16 px-4 mx-auto my-8 py-8'>
                <div className='mx-auto w-fit text-center'>
                    <Caption mid={true} txt={'contact'} txt2={'get in touch with us'}/>
                    <p className='w-3/4 mx-auto'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>
                </div>
                <div className='md:flex space-y-4 md:space-y-0 md:gap-4 mx-auto my-8 text-right md:text-center'>
                    {icons}
                </div>
                <div className=' w-full text-center'>
                    <div className=' space-y-4 md:space-y-0 md:grid grid-rows-4 grid-cols-2 gap-4 font-["League_Spartan"] capitalize text-4xl'>
                        {input}
                        <textarea placeholder='Your Message' className=' indent-4 placeholder:py-4 md:placeholder:py-12 text-2xl lg:placeholder:text-2xl placeholder:text-lg placeholder:text-white/80 placeholder:text-white bg-transparent border border-white w-full col-span-2 row-span-2' name="" id=""></textarea>
                    </div>
                    <button style={{ color: color.darkTxt, background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className='font-medium capitalize text-center mt-8 py-2 w-full md:text-xl md:py-4 md:w-2/5'>send message</button>
                </div>
            </div>
            <div className='my-8'>
                <img className='mx-auto' src={client} alt="client-logo" />
            </div>
            <div className='md:flex gap-8 bg-[#f4f4f4] md:py-16'>
                <div className=' text-black w-3/4'>
                    <div className='mx-auto w-fit text-left'>
                        <Caption txt={'faq'} txt2={'frequently asked questions'}/>
                        <div className=' space-y-8'>
                            <div className=' space-y-2'>
                                <div className='flex justify-between items-center'>
                                    <p className=' font-semibold'>How can I pay for your logistics services?</p>
                                    <CaretDown size={25} color="#ffbb2b" />
                                </div>
                                <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.</p>
                            </div>
                            {end}
                        </div>
                    </div>
                </div>
                <div className='w-full h-full relative'>
                    <img className=' ml-auto w-[65%]' src={client2} alt="delivery" />
                    <div style={{ background: color.blueBg }} className='absolute z-50 top-1/2 -translate-y-1/2 left-4 p-8 space-y-4 w-2/4'>
                        <p style={{ borderLeft: `4px solid ${color.grdt}` }} className=' bg-[#e8e8e8]/10 uppercase w-fit px-4'>let's talk</p>
                        <p className='font-[Rubik] font-bold text-2xl'>you nedd any help? get free consultation</p>
                        <div className='flex gap-4 items-center w-fit'>
                            <Phone className=' w-12 h-12 bg-[#111c55] border border-[#2d3a7b] rounded-full px-3' size={16} color="#ffffff" />
                            <div>
                                <p>have any questions</p>
                                <p>(00) 112 365 489</p>
                            </div>
                        </div>
                        <button style={{ color: color.darkTxt, background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className=' py-2 font-bold capitalize text-center w-2/5'>contact us</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Contact; 
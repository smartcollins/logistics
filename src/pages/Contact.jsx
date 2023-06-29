import React from 'react';
import client from '../images/client_logo.png'
import banner from '../data/banner';
import color from '../data/color';
import Banner from '../component/Banner';
import Caption from '../component/Caption';
import Icon from '../component/Icon';
import Input from '../component/Input';
import Asked from '../component/Asked';
import Footer from '../component/Footer'

const Contact = () => {
    return (
        <div className=' capitalize text-white overflow-x-clip'>
            <div>{banner.slice(9, 10).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div style={{ background: color.blueBg }} className='lg:w-3/4 md:px-16 px-4 mx-auto my-8 py-8'>
                <div className='mx-auto w-fit text-center'>
                    <Caption mid={true} txt={'contact'} txt2={'get in touch with us'} />
                    <p className='w-3/4 mx-auto'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>
                </div>
                <div className='md:flex space-y-4 md:space-y-0 md:gap-4 mx-auto my-8 text-right md:text-center'>
                    <Icon/>
                </div>
                <div className=' w-full text-center'>
                    <div className=' space-y-4 md:space-y-0 md:grid grid-rows-4 grid-cols-2 gap-4 font-["League_Spartan"] capitalize text-4xl'>
                        <Input/>
                        <textarea placeholder='Your Message' className=' indent-4 placeholder:py-4 md:placeholder:py-12 text-2xl lg:placeholder:text-2xl placeholder:text-lg placeholder:text-white/80 placeholder:text-white bg-transparent border border-white w-full col-span-2 row-span-2' name="" id=""></textarea>
                    </div>
                    <button style={{ color: color.darkTxt, background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className='font-medium capitalize text-center mt-8 py-2 w-full md:text-xl md:py-4 md:w-2/5'>send message</button>
                </div>
            </div>
            <div className='my-8 h-full mx-auto xl:h-[15vh] xl:w-3/4'>
                <img className='mx-auto xl:w-full h-full object-cover' src={client} alt="client-logo" />
            </div>
            <Asked />
            <Footer />
        </div>
    )
}


export default Contact; 
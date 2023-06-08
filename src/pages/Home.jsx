import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';
import Caption from '../component/Caption';
import Footer from '../component/Footer';
import card from '../data/card';
import Card from '../component/Card';
import news from '../data/news';
import News from '../component/News';
import Review from '../component/Review';
import Stat from '../component/Stat';
import color from '../data/color';
import Input from '../component/Input';
import Icon from '../component/Icon';


const Home = ()=>{
    return(
        <div>
            <div>{banner.slice(0, 1).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <Stat/>
            <div style={{backgroundColor: color.blueBg}}>
                <div>
                    <div className='bg-red-300 space-y-3'>
                        <Icon alt={true}/>
                    </div>
                    <div className=' space-y-4 md:space-y-0 md:grid grid-rows-4 grid-cols-2 gap-4 font-["League_Spartan"] capitalize text-4xl'>
                        <Input/>
                        <textarea placeholder='Your Message' className=' indent-4 placeholder:py-4 text-2xl lg:placeholder:text-2xl placeholder:text-lg placeholder:text-white/80 placeholder:text-white bg-transparent border border-white w-full col-span-2 row-span-2' name="" id=""></textarea>
                    </div>
                    <button style={{ color: color.darkTxt, background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className='font-medium capitalize text-center mt-8 py-2 w-full md:text-xl md:py-4 md:w-2/5'>submit message</button>
                </div>
            </div>
            <div className=' space-y-4 mx-4 lg:my-8 lg:w-3/4 lg:mx-auto xl:w-3/5'>
                {news.map((item,idx)=><News key={idx} {...item}/>)}
            </div>
            <div className='text-center py-8 mx-auto lg:w-3/4'>
                <Review />
            </div>
            <div className=' md:space-y-8'>
                <Caption mid={true} dark={true} txt="the transporters" txt2="meet expert team" />
                <div className="space-y-4 w-11/12 gap-8 mx-auto md:grid md:space-y-0 md:grid-cols-2 xl:grid-cols-3 xl:w-3/4">
                    {card.slice(0, 3).map((item, idx) => <div key={idx} className='md:last:hidden xl:last:block'><Card {...item} /></div>)}
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Home; 
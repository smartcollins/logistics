import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';
import Caption from '../component/Caption';
import Footer from '../component/Footer';
import Card from '../component/Card';
import Work from '../component/Work';
import News from '../component/News';
import Review from '../component/Review';
import Stat from '../component/Stat';
import color from '../data/color';
import side from '../images/hm-side.png'
import hm from '../images/hm-abt.jpg'
import cube from '../icons/cube-icon.svg'
import cash from '../icons/cash-icon.svg'
import Input from '../component/Input';
import Icon from '../component/Icon';
import sponsor from "../images/client_logo.png";
import Fact from '../component/Fact';
import Trans from '../component/Trans';
import trans from '../data/trans';


const Home = ()=>{
    const works = [{start: 0,end:1},{start: 1,end:2},{start: 2,end:3},{start: 4,end:5}]
    const items = works.map((item,idx)=><Work key={idx} home={true} {...item}/>)
    return(
        <div>
            <div>{banner.slice(0, 1).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className='flex gap-4 w-3/4 mx-auto my-8'>
                <Caption txt={'what we do'} txt2={'safe & reliable cargo solutions'}/>
                <div className='grid grid-cols-2 gap-4'>
                    {items}
                </div>
            </div>
            <div style={{backgroundImage: `url(${hm})`}} className=' h-80'></div>
                <div className=' -mt-40 flex bg-white w-3/4 mx-auto p-8 font-medium'>
                    <div className='w-2/4 space-y-2'>
                        <Caption txt={'why us'} txt2={'we provide full range global logistics solution'}/>
                        <div style={{color: color.grayTxt}} className=' space-y-2 text-base font-normal'>
                            <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.</p>
                            <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                        </div>
                        <div className=' space-y-4'>
                            <Fact icon={cube} txt={'delivery on Time'}/>
                            <Fact icon={cash} txt={'optimized travel cost'}/>
                        </div>
                    </div>
                    <div>
                        <img src={side} alt="hm-side" />
                    </div>
                </div>
            <Stat/>
            <div className='text-center space-y-8 bg-gradient-to-b from-blue-500 from-50% to-red-500 to-50% px-4'>
                <p style={{color: color.darkTxt}} className='text-2xl capitalize font-semibold'>transporting across the world</p>
                <div className='bg-red-400 flex gap-4'>
                    {trans.map((item,idx)=><Trans key={idx} {...item}/>)}
                </div>
                {/* <div className=' bg-blue-300 w-1/5 mx-auto'><button style={{background: color.blueBg}} className='font-medium text-white py-2 w-full md:text-lg'>More Work</button></div> */}
                <button style={{background: color.blueBg}} className='font-medium text-white w-fit py-2 px-6 md:text-lg'>More Work</button>
            </div>
            <div className='text-center py-8 mx-auto lg:w-3/4'>
                <Review />
            </div>
            <div className=' md:space-y-8'>
                <Caption mid={true} dark={true} txt="the transporters" txt2="meet expert team" />
                <div className="space-y-4 w-11/12 gap-8 mx-auto md:grid md:space-y-0 md:grid-cols-2 xl:grid-cols-3 xl:w-3/4">
                    <Card start={0} end={3} pat={'md:last:hidden xl:last:block'}/>
                </div>
            </div>
            <div style={{backgroundColor: color.blueBg}} className=' py-12 space-y-8'>
                <div className='flex justify-between w-3/4 mx-auto'>
                    <div className='text-white w-1/3 space-y-4'>
                        <div>
                            <div className='-my-4'><Caption txt={"contact"} txt2={"get in touch with us"}/></div>
                            <p className=''>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>
                        </div>
                        <div className='space-y-3'>
                            <Icon alt={true}/>
                        </div>
                    </div>
                    <div>
                        <div className=' space-y-4 md:space-y-0 md:grid grid-rows-4 grid-cols-2 gap-4 font-["League_Spartan"] capitalize text-4xl'>
                            <Input/>
                            <textarea placeholder='Your Message' className=' indent-4 placeholder:py-4 text-2xl lg:placeholder:text-2xl placeholder:text-lg placeholder:text-white/80 placeholder:text-white bg-transparent border border-white w-full col-span-2 row-span-2' name="" id=""></textarea>
                        </div>
                        <button style={{ color: color.darkTxt, background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className='font-medium capitalize text-center mt-8 py-2 w-full md:text-xl md:py-3 md:w-1/3'>submit message</button>
                    </div>
                </div>
                <div>
                    <img className=" mx-auto h-16 md:w-11/12 md:object-cover md:h-full xl:w-3/4" src={sponsor} alt="delivery" />
                </div>
            </div>
            <div className=' space-y-4 mx-4 lg:my-8 lg:w-3/4 lg:mx-auto xl:w-3/5'>
                <News/>
                <div className=' bg-blue-300 w-1/5 mx-auto'><button style={{background: color.blueBg}} className='font-medium text-white py-2 w-full md:text-lg'>More Blog</button></div>
            </div>
            <Footer/>
        </div>
    )
}


export default Home; 
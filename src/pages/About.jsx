import React from 'react';
import color from '../data/color';
import sponsor from "../images/client_logo.png";
import side from "../images/about-side.png";
import Caption from '../component/Caption';
import Work from '../component/Work';
import Card from '../component/Card';
import Review from '../component/Review'
import Price from '../component/Price';
import Asked from '../component/Asked';


const About = () => {
    const btnAry = ['our goal', 'our approach', 'our target']
    const btn = btnAry.map((item, idx) => <button key={idx} className='bg-[#f4f4f4] text-[#1c1f35] capitalize py-2 rounded font-medium last:mx-auto last:w-2/4 last:bg-[#FFB82B] last:text-white last:col-span-2 md:first:bg-[#FFB82B] md:first:text-white md:last:bg-[#f4f4f4] md:last:text-[#1c1f35] md:w-2/4'>{item}</button>)
    return (
        <div className=' space-y-4 md:space-y-8 lg:space-y-16'>
            <div>
                <div className="flex flex-wrap items-center justify-between w-11/12 mx-auto lg:flex-nowrap xl:w-3/4 lg:gap-8">
                    <div className='mt-4 md:my-8 md:h-[50vh] md:w-full xl:h-full lg:w-2/4'>
                        <img className="w-full h-full object-cover" src={side} alt="side-ad" />
                    </div>
                    <div className="text-left space-y-4 lg:w-2/4">
                        <div className="my-4 capitalize">
                            <Caption txt={"about us"} txt2={"our company overview"} />
                            <p className="normal-case text-[#666c89]">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
                        </div>
                        <div className=' grid grid-cols-2 md:flex lg:items-center gap-4'>
                            {btn}
                        </div>
                        <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.</p>
                        <button style={{ background: color.blueBg }} className='text-white py-2 px-8 rounded'>Learn More</button>
                    </div>
                </div>
            </div>
            <div style={{ background: color.grayBg }} className=' py-8'>
                <Caption dark={true} mid={true} txt={'what we do'} txt2={'our logistics services'}/>
                <div className='text-center mx-auto w-3/4'>
                    <Work dest={'/service-info'}/>
                </div>
            </div>
            <div className=' md:space-y-8'>
                <Caption mid={true} dark={true} txt="the transporters" txt2="meet expert team" />
                <div className="space-y-4 w-11/12 gap-8 mx-auto md:grid md:space-y-0 md:grid-cols-2 xl:grid-cols-3 xl:w-3/4 ">
                    <Card start={0} end={3} pat={'md:last:hidden xl:last:block'} />
                </div>
            </div>
            <div style={{ background: color.grayBg }}>
                <div className='text-center py-8 mx-auto lg:w-3/4'>
                    <Review />
                </div>
            </div>
            <Price />
            <Asked />
            <div>
                <img className=" mx-auto h-[15vh] md:w-11/12 md:object-cover md:h-full xl:w-3/4" src={sponsor} alt="delivery" />
            </div>
        </div>
    )
}


export default About;
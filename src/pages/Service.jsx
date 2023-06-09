import React from 'react';
import color from '../data/color'
import banner from '../data/banner';
import work from '../data/work';
import cube from '../icons/cube-icon.svg'
import shield from '../icons/shield-icon.svg'
import leaf from '../icons/env-icon.svg'
import side from '../images/service-side.png'
import Banner from '../component/Banner';
import Caption from '../component/Caption'
import Work from '../component/Work';
import Footer from '../component/Footer';
import Review from '../component/Review';
import Stat from '../component/Stat';


const Service = () => {
    
    const itmAry = [{
        icon: cube,
        txt: 'warehousing services'
    }, {
        icon: shield,
        txt: 'safety & quality'
    }, {
        icon: leaf,
        txt: 'care for environment'
    }]

    const itm = itmAry.map((item, idx) => <div key={idx} className='flex gap-4 lg:items-start'>
        <img src={item.icon} alt="icons" />
        <div className='lg:mt-4'>
            <p className='capitalize text-xl lg:font-medium'>{item.txt}</p>
            <p>Leverage agile frameworks to provide arobust synopis for strategy foster collaborative thinking</p>
        </div>
    </div>)

    return (
        <div>
            <div>{banner.slice(2, 3).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className=' text-center my-8 w-11/12 mx-auto space-y-8 xl:w-3/4'>
                <Caption mid={true} dark={true} txt={'what we do'} txt2={'logistics services'} />
                {/* {work.map((item,idx)=><Work key={idx} {...item} />)} */}
                <div className='text-center py-8 mx-auto w-3/4 space-y-8'>
                    <div className=" space-y-4 gap-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 mx-auto">
                        {work.map((item,idx)=><Work key={idx} {...item} />)}
                    </div>
                    <button style={{ background: color.blueBg }} className='text-white py-2 px-8 rounded'>More Works</button>
                </div>
            </div>
            <div style={{ background: color.grayBg }}>
                <div className=' w-11/12 mx-auto py-4 xl:py-8 xl:w-5/6'>
                    <Caption mid={true} dark={true} txt={'our goodness'} txt2={'how we work'} />
                    <div className='flex flex-wrap gap-8 lg:flex-nowrap'>
                        <img className='object-cover md:h-[50vh] md:w-full lg:h-auto lg:w-2/4' src={side} alt="service side" />
                        <div className=' space-y-4 xl:w-2/4'>
                            {itm}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto my-8 md:w-11/12 lg:w-3/4'>
                <Review />
            </div>
            <div className='xl:w-4/5 mx-auto'>
                <Stat />
            </div>
            <Footer />
        </div>
    )
}


export default Service; 
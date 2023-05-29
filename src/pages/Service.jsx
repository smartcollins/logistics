import React from 'react';
import color from '../data/color'
import banner from '../data/banner';
import service from '../data/service';
import cube from '../icons/cube-icon.svg'
import shield from '../icons/shield-icon.svg'
import leaf from '../icons/env-icon.svg'
import side from '../images/service-side.png'
import Banner from '../component/Banner';
import Caption from '../component/Caption'
import Footer from '../component/Footer';
import Review from '../component/Review';
import Stat from '../component/Stat';
// import Carousel from '../component/Carousel';


const Service = () => {
    const items = service.map((item, idx) => <div key={idx} className='group md:text-left'>
        <img className='mx-auto md:m-0' src={item.icon} alt='icon-logo' />
        <p className=' text-[#1c1f35] group-hover:text-[#ffb82b] text-2xl capitalize'>{item.txt}</p>
        <p style={{ color: color.grayTxt }} className='lg:w-3/4'>following the quality of our service thus having gained trust of our many clients</p>
    </div>)

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

    const itm = itmAry.map((item, idx) => <div key={idx} className='flex items-start gap-4'>
        <img src={item.icon} alt="icons" />
        <div className='mt-4'>
            <p className='text-xl capitalize'>{item.txt}</p>
            <p>Leverage agile frameworks to provide arobust synopis for strategy foster collaborative thinking</p>
        </div>
    </div>)

    return (
        <div>
            <div>{banner.slice(3, 4).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className=' text-center my-8 w-11/12 mx-auto md:space-y-8 xl:w-3/4'>
                <Caption mid={true} dark={true} txt={'what we do'} txt2={'logistics services'} />
                <div className=' space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {items}
                </div>
                {/* <div className='w-full'>
                    <Carousel items={items} dot={false} scroll={1} show={2} />
                </div> */}
                <button style={{ background: color.blueBg }} className='text-white py-2 px-8'>More Works</button>
            </div>
            <div style={{ background: color.grayBg }}>
                <div className='w-5/6 mx-auto py-8'>
                    <Caption mid={true} dark={true} txt={'our goodness'} txt2={'how we work'} />
                    <div className='flex gap-8 h-[50vh]'>
                        <img className='w-2/4 object-cover' src={side} alt="service side" />
                        <div className=' space-y-4 w-2/4'>
                            {itm}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-3/4 mx-auto my-8'>
                <Review />
            </div>
            <div className='w-4/5 mx-auto'>
                <Stat />
            </div>
            <Footer />
        </div>
    )
}


export default Service; 
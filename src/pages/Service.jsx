import React from 'react';
import color from '../data/color'
import cube from '../icons/cube-icon.svg'
import shield from '../icons/shield-icon.svg'
import leaf from '../icons/env-icon.svg'
import side from '../images/service-side.png'
import Caption from '../component/Caption'
import Work from '../component/Work';
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

    const itm = itmAry.map((item, idx) => (
      <div key={idx} className="flex gap-4 lg:items-start">
        <img src={item.icon} alt="icons" />
        <div className="lg:mt-4">
          <p className="capitalize text-xl lg:font-medium">{item.txt}</p>
          <p>Leverage agile frameworks to provide arobust synopis for strategy foster collaborative thinking</p>
        </div>
      </div>
    ));

    return (
        <div className=' overflow-x-clip'>
            <div className=' text-center my-8 w-11/12 mx-auto space-y-8 xl:w-3/4'>
                <Caption mid={true} dark={true} txt={'what we do'} txt2={'logistics services'} />
                <div className='py-8 space-y-8'>
                    <Work dest={'/service-info'}/>
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
        </div>
    )
}


export default Service; 
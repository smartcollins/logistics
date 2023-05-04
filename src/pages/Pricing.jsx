import React from 'react';
import banner from '../data/banner';
import color from '../data/color';
import Banner from '../component/Banner';
import Footer from '../component/Footer'
import Review from '../component/Review';
import Caption from '../component/Caption';


const Pricing = () => {
    const itemsAry = [{
        title: 'standard',
        cost: 39,
        txt: ['single truck', 'full insurance', '500 km', 'Real-time-shopping'],
    }, {
        title: 'standard',
        cost: 59,
        dark: true,
        txt: ['single truck', 'full insurance', '500 km', 'Real-time-shopping'],
    }, {
        title: 'standard',
        cost: 89,
        txt: ['double truck', 'full insurance', 'unlimited', 'Real-time-shopping'],
    }]
    const items = itemsAry.map((item, idx) => (
        <div style={item.dark ? { backgroundColor: color.blueBg, color: 'white' } : { backgroundColor: color.grayBg }} key={idx} className='bg-red-300 w-full flex flex-col space-y-4 p-8'>
            <p className=' font-medium text-xl'>{item.title}</p>
            <div className='flex items-end justify-center'>
                <p className=' font-medium text-4xl font-[Rubik]'>{item.cost}</p>
                <p className=' lowercase font-[Rubik]'>/ month</p>
            </div>
            <div className=' font-normal text-lg'>
                {
                    item.txt.map((item, idx) => <p key={idx} className=' last:border-b border-t border-[#D6D6D6] py-2'>{item}</p>)
                }
            </div>
            <button style={item.dark ? { color: color.darkTxt, background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` } : { backgroundColor: color.blueBg, color: 'white' }} className='bg-red-200 w-2/4 py-2 mx-auto font-medium'>choose plan</button>
        </div>
    ))
    return (
        <div>
            <div>{banner.slice(10, 11).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div style={{ color: color.darkTxt }} className=' capitalize w-4/5 mx-auto my-8 py-8'>
                <div>
                    <Caption mid={true} dark={true} txt={'pricing'} txt2={'our best pricing'} />
                    <div className='flex gap-4 text-center py-4'>
                        {items}
                    </div>
                </div>
                <div className='bg-[#f4f4f4] mt-8'>
                    <Review />
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Pricing; 
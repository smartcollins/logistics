import React from 'react';
import banner from '../data/banner';
import Banner from '../component/Banner';
import Price from '../component/Price';
import Review from '../component/Review';
import Footer from '../component/Footer'


const Pricing = () => {
    
    return (
        <div>
            <div>{banner.slice(10, 11).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className='md:my-8 md:space-y-4 lg:mb-0'>
                <Price/>
                <div className='bg-[#f4f4f4]'>
                    <div className='mx-auto py-4 md:py-8 md:w-3/4'>
                        <Review />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Pricing; 
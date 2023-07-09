import React from 'react';
import Price from '../component/Price';
import Review from '../component/Review';


const Pricing = () => {
    
    return (
        <div>
            <div className='md:my-8 md:space-y-4 lg:mb-0 overflow-x-clip'>
                <Price/>
                <div className='bg-[#f4f4f4]'>
                    <div className='mx-auto py-4 md:py-8 md:w-3/4'>
                        <Review />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Pricing; 
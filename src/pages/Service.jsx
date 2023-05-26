import React from 'react';
import color from '../data/color'
import banner from '../data/banner';
import Banner from '../component/Banner';
import Caption from '../component/Caption'
import Footer from '../component/Footer';
import service from '../data/service';
import Review from '../component/Review';


const Service = ()=>{
    const items = service.map((item,idx) => <div key={idx} className='group bg-red-500'>
    <img src={item.icon} alt='icon-logo' />
    <p className=' text-[#1c1f35] group-hover:text-[#ffb82b] text-2xl capitalize'>{item.txt}</p>
    <p style={{color: color.grayTxt}} className=' w-2/3'>following the quality of our service thus having gained trust of our many clients</p>
</div>)
    return(
        <div>
            <div>{banner.slice(3, 4).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className=' text-center my-8'>
                <Caption mid={true} dark={true} txt={'what we do'} txt2={'logistics services'}/>
                <div className='grid grid-cols-3 gap-4 text-left'>
                    {items}
                </div>
                <button style={{background: color.blueBg}} className='text-white py-2 px-8 my-4'>More Works</button>
            </div>
            <div>
                <Caption mid={true} dark={true} txt={'our goodness'} txt2={'how we work'}/>
            </div>
            <Review/>
            <Footer/>
        </div>
    )
}


export default Service; 
import React from 'react';
import color from '../data/color'
import banner from '../data/banner';
import Banner from '../component/Banner';
import Caption from '../component/Caption'
import Footer from '../component/Footer';
import service from '../data/service';


const Service = ()=>{
    const items = service.map((item,idx) => <div key={idx} className='bg-red-400 group'>
    <img src={item.icon} alt='icon-logo' />
    <p className=' text-[#1c1f35] group-hover:text-[#ffb82b] text-2xl capitalize'>{item.txt}</p>
    <p style={{color: color.grayTxt}}>following the quality of our service thus having gained trust of our many clients</p>
</div>)
    return(
        <div>
            <div>{banner.slice(3, 4).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <Caption mid={true} dark={true} txt={'what we do'} txt2={'logistics services'}/>
            <div className='grid grid-cols-3 gap-4'>
                {/* <div className='bg-red-400 w-2/4'>
                    <img src={ship} alt="ship-logo" />
                    <p className=' text-[#1c1f35] hover:text-[#ffb82b] text-2xl capitalize'>sea transport service</p>
                    <p style={{color: color.grayTxt}}>following the quality of our service thus having gained trust of our many clients</p>
                </div> */}
                {items}
            </div>
            <Footer/>
        </div>
    )
}


export default Service; 
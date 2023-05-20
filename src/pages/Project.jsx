import React from 'react';
import img from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import img5 from '../images/5.png'
import img6 from '../images/6.png'
import banner from '../data/banner';
import color from '../data/color';
import Banner from '../component/Banner';
import Carousel from '../component/Carousel';
import Footer from '../component/Footer';
import { ArrowSquareOut } from 'phosphor-react';


const Project = ()=>{
    const gridAry = [{
        img: img
    },{
        img: img2
    },{
        img: img3
    },{
        img: img4
    },{
        img: img5
    },{
        img: img6
    }]
    
    const item = gridAry.map((itm,idx)=><img key={idx} src={itm.img} alt="avater" />)

    const grid = gridAry.map((item,idx)=><div key={idx} className=" relative w-fit group bg-red-400">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[85%] w-[85%] hidden bg-[#1c1f35]/80 group-hover:flex items-center justify-center">
    {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden bg-[#1c1f35]/80 group-hover:flex items-center justify-center transition-transform delay-150 duration-700 ease-in "> */}
        <ArrowSquareOut size={50} color="#fdaf3b" />
    </div>
    <img className="" src={item.img} alt="news" />
</div>)

    const endAry = [{
        txt: '24',
        txt2: 'our location'
    },{
        txt: '1294',
        txt2: 'delivered package'
    },{
        txt: '3594',
        txt2: 'satisfied clients'
    },{
        txt: '247+',
        txt2: 'owned vehicles'
    }]

    const end = endAry.map((item,idx)=><div key={idx} className='flex items-center justify-center gap-2 capitalize w-full first:border-x-none last:border-x-none border py-8'>
    <p className='font-bold text-4xl'>{item.txt}</p>
    <span style={{ background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className=' w-3 h-3'></span>
    <p>{item.txt2}</p>
</div>)

    return(
        <div>
            <div>{banner.slice(4, 5).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className='hidden lg:grid grid-cols-3 gap-4 w-3/4 my-8 mx-auto'>
                {grid}
            </div>
            <div className=' w-11/12 my-8 mb-10 mx-auto lg:hidden'>
                <Carousel items={item}/>
            </div>
            {/* <div style={{color: color.darkTxt}} className='flex justify-between'>
                {end}
            </div> */}
            <Footer/>
        </div>
    )
}


export default Project; 
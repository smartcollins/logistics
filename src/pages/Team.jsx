import React from 'react';
import team from '../images/team.png';
import team2 from '../images/team2.png';
import team3 from '../images/team3.png';
import team4 from '../images/team4.png';
import team5 from '../images/team5.png';
import team6 from '../images/team6.png';
import side from '../images/team-side.png'
import sponsor from '../images/client_logo.png'
import user from '../icons/user-icon.svg'
import timer from '../icons/timer-icon.svg'
import banner from '../data/banner';
import color from '../data/color';
import Banner from '../component/Banner';
import Caption from '../component/Caption';
import Footer from '../component/Footer';
import { TwitterLogo, FacebookLogo, InstagramLogo } from 'phosphor-react';


const Team = () => {
    const itemsAry = [{
        img: team,
        name: 'jessica arow',
        title: 'warehouse head'
    }, {
        img: team2,
        name: 'kathleen smith',
        title: 'transport manager'
    }, {
        img: team3,
        name: 'rebecca tylor',
        title: 'cargo head'
    }, {
        img: team4,
        name: 'ria jackson',
        title: 'operational head'
    }, {
        img: team5,
        name: 'kane williams',
        title: 'country head'
    }, {
        img: team6,
        name: 'lisara tylor',
        title: 'finance head'
    }]
    const items = itemsAry.map((item, idx) => (
        <div key={idx} className='w-full relative'>
            <img className='h-[60vh] w-full object-cover xl:h-[40vh] ' src={item.img} alt={`team${item.idx}`} />
            <div style={{ background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className='flex items-center w-fit gap-4 p-2 absolute bottom-16 right-0'>
                <TwitterLogo size={20} color={color.darkTxt} weight="fill" />
                <FacebookLogo size={20} color={color.darkTxt} weight="fill" />
                <InstagramLogo size={20} color={color.darkTxt} />
            </div>
            <div style={{ background: color.blueBg }} className='text-white capitalize p-4'>
                <p className=' font-bold'>{item.name}</p>
                <p>{item.title}</p>
            </div>
        </div>
    ))
    const abtAry = [{
        icon: user,
        txt: 'our vision',
    },{
        icon: timer,
        txt: 'estimate shipping'
    }]

    const abt = abtAry.map((item,idx)=><div key={idx} className='md:space-y-1 xl:space-y-2'>
    <img src={item.icon} alt="icon" />
    <p className=' capitalize font-medium text-lg'>{item.txt}</p>
    <p className='text-[#666c89]'>Leverage agile frameworks to provide a robust synopsis for strategy foster.</p>
</div>)
    return (
        <div>
            <div>{banner.slice(8, 9).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className='my-8'>
                <Caption mid={true} dark={true} txt={'team'} txt2={'meet expert team'}/>
            </div>
            <div className='space-y-4 w-11/12 gap-8 my-8 mx-auto md:grid md:space-y-0 md:grid-cols-2 xl:grid-cols-3 xl:w-3/4'>
                {items}
            </div>
            <div className='flex flex-wrap items-center justify-between w-11/12 mx-auto xl:flex-nowrap xl:gap-8'>
                <img className='w-full object-cover md:h-[50vh] xl:h-full xl:w-4/6 ' src={side} alt="side-ad" />
                <div className='text-left xl:w-2/4 space-y-8'>
                    <div className='my-4 capitalize'>
                        {/* <p style={{ borderLeft: `4px solid ${color.grdt}` }} className=' bg-[#e8e8e8]/10 w-fit px-4'>about</p>
                        <p className='font-[Rubik] font-bold text-4xl/normal w-fit'>why chose us</p> */}
                        <Caption txt='about' txt2='why chose us'/>
                        <p className=' normal-case text-[#666c89]'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
                    </div>
                    <div className='md:flex items-center justify-between border-t border-[#d6d6d6] xl:py-8 gap-4 space-y-4 md:space-y-0 xl:space-y-0'>
                     {abt}
                    </div>
                </div>
            </div>
            <div className='my-8 xl:my-8'>
                <img className=' mx-auto h-16 w-11/12 md:object-cover md:h-full xl:w-3/4' src={sponsor} alt="delivery" />
            </div>
            <Footer />
        </div>
    )
}


export default Team; 
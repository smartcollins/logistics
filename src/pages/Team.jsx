import React from 'react';
import banner from '../data/banner';
import color from '../data/color';
import Banner from '../component/Banner';
import team from '../images/team.png';
import { TwitterLogo,FacebookLogo, InstagramLogo } from 'phosphor-react';


const Team = ()=>{
    return(
        <div>
            <div>{banner.slice(8, 9).map((item, idx) => <Banner key={idx} {...item} />)}</div>
            <div className='bg-red-500'>
                <p style={{ borderLeft: `4px solid ${color.grdt}` }} className=' bg-[#e8e8e8]/10 w-fit px-4 mx-auto'>The Transporters</p>
                <p className='font-[Rubik] font-bold text-4xl/normal mx-auto w-fit'>Meet Expert Team</p>
            </div>
            <div>
                <div className='bg-red-300 w-fit relative'>
                    <img className='h-[60vh] ' src={team} alt="team" />
                    <div  style={{ background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className='flex items-center w-fit gap-4 p-2 absolute bottom-16 right-0'>
                        <TwitterLogo size={20} color={color.darkTxt} weight="fill" />
                        <FacebookLogo size={20} color={color.darkTxt} weight="fill" />
                        <InstagramLogo size={20} color={color.darkTxt} />
                    </div>
                    <div style={{background: color.blueBg}} className='text-white capitalize p-4'>
                        <p className=' font-bold'>Rebecca tylor</p>
                        <p>cargo head</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Team; 
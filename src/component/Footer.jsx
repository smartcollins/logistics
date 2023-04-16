import React from 'react';
import color from '../data/color'
import { Envelope,Phone, LinkedinLogo,TwitterLogo, FacebookLogo  } from 'phosphor-react';


const Footer = ()=>{
    let a = color.blueBg
    return(
        <div style={{backgroundColor:a}} className=' capitalize text-white'>
            <div className=' bg-white/5 flex items-center justify-between py-4'>
                <div style={{backgroundColor:color.blueBg}} className='bg-red-500 w-full'>
                    <p>TransitFlow</p>
                </div>
                <p className='bg-red-400 w-2/4'>Pages</p>
                <p className='bg-red-300 w-2/4'>Utility</p>
                <p className='bg-red-200 w-full'>Subscribe</p>
            </div>
            <div className='flex items-center justify-between'>
                <div style={{backgroundColor:color.blueBg}} className=' w-full normal-case'>
                    <p>Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</p>
                    <div>
                        <div>
                            <Envelope size={16} color="#6949ff" weight="fill" />
                        </div>
                        <div>
                            <p>Email</p>
                            <p>contact@logistics.com</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Phone size={16} color="#6949ff" weight="fill" />
                        </div>
                        <div>
                            <p>Call us</p>
                            <p>(00) 112 365 489</p>
                        </div>
                    </div>
                </div>
                <div className='bg-red-400 w-2/4'>
                    <p>about us</p>
                    <p>our team</p>
                    <p>our project</p>
                    <p>pricing</p>
                    <p>contact</p>
                </div>
                <div className='bg-red-300 w-2/4'>
                    <p>style guide</p>
                    <p>changelog</p>
                    <p>licenses</p>
                    <p>protected</p>
                    <p>not found</p>
                </div>
                <div className='bg-red-200 w-full'>
                    <input type="text" placeholder='Email here*' />
                    <div className='flex items-center justify-between'>
                        <button>send now</button>
                        <LinkedinLogo size={16} color="#6949ff" weight="fill" />
                        <TwitterLogo size={16} color="#6949ff" weight="fill" />
                        <FacebookLogo size={16} color="#6949ff" weight="fill" />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between border-t border-t-white'>
                <p className=' w-full'>Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</p>
                <div style={{color:color.grayTxt}} className='flex items-center justify-between bg-red-400 w-3/4'>
                <p>Style Guide</p>
                <p>Licenses</p>
                <p>Changelog</p>
                <p>Password</p>
                </div>
            </div>
        </div>
    )
}


export default Footer; 
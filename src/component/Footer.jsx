import React from 'react';
import color from '../data/color'
import { Envelope,Phone, LinkedinLogo,TwitterLogo, FacebookLogo  } from 'phosphor-react';


const Footer = ()=>{
    let a = color.blueBg
    return(
        // <div className='bg-red-500'>
        <div style={{backgroundColor:a}}>
            <div className=' bg-white/5'>
                <div>
                    <p>TransitFlow</p>
                </div>
                <p>Pages</p>
                <p>Utility</p>
                <p>Subscribe</p>
            </div>
            <div>
                <div>
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
                <div>
                    <p>about us</p>
                    <p>our team</p>
                    <p>our project</p>
                    <p>pricing</p>
                    <p>contact</p>
                </div>
                <div>
                    <p>style guide</p>
                    <p>changelog</p>
                    <p>licenses</p>
                    <p>protected</p>
                    <p>not found</p>
                </div>
                <div>
                    <input type="text" placeholder='Email here*' />
                    <div>
                        <button>send now</button>
                        <LinkedinLogo size={16} color="#6949ff" weight="fill" />
                        <TwitterLogo size={16} color="#6949ff" weight="fill" />
                        <FacebookLogo size={16} color="#6949ff" weight="fill" />
                    </div>
                </div>
            </div>
            <div>
                <p>Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</p>
                <div>
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
// import React from 'react';
// import color from '../data/color'
// import Logo from './Logo';
// import { Envelope, Phone, LinkedinLogo, TwitterLogo, FacebookLogo } from 'phosphor-react';


// const Footer = () => {
//     // const linear = {background: linear-gradient(`94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%`)};
//     return (
//         <div style={{ backgroundColor: color.blueBg }} className=' capitalize text-white'>
//             <div className='w-3/4 mx-auto'>

//                 <div className=' bg-white/5 flex items-center justify-between space-x-8 font-[Rubik] font-semibold text-lg -mx-40 px-40'>
//                     <div style={{ backgroundColor: color.blueBg }} className="w-full -ml-8 pl-8"><Logo /></div>
//                     <p className='w-2/5'>Pages</p>
//                     <p className='w-2/5'>Utility</p>
//                     <p className='w-2/4'>Subscribe</p>
//                 </div>
//                 <div className='flex items-start justify-between space-x-8 py-4'>
//                     <div style={{ backgroundColor: color.blueBg }} className=' w-full normal-case space-y-4 mb-4'>
//                         <p className='w-3/4'>Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</p>
//                         <div className='flex items-center gap-4'>
//                             <div className='p-3 rounded-full bg-[#111c55] border border-[#273270]'>
//                                 <Envelope size={20} color="#f6b426" />
//                             </div>
//                             <div>
//                                 <p>Email</p>
//                                 <p>contact@logistics.com</p>
//                             </div>
//                         </div>
//                         <div className='flex items-center gap-4'>
//                             <div className='p-3 rounded-full bg-[#111c55] border border-[#273270]'>
//                                 <Phone size={20} color="#f6b426" />
//                             </div>
//                             <div>
//                                 <p>Call us</p>
//                                 <p>(00) 112 365 489</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='w-2/5 space-y-2'>
//                         <p>about us</p>
//                         <p>our team</p>
//                         <p>our project</p>
//                         <p>pricing</p>
//                         <p>contact</p>
//                     </div>
//                     <div className='w-2/5 space-y-2'>
//                         <p>style guide</p>
//                         <p>changelog</p>
//                         <p>licenses</p>
//                         <p>protected</p>
//                         <p>not found</p>
//                     </div>
//                     <div className='w-2/4 space-y-4'>
//                         <input className=' font-[League_Spartan] w-full py-2 bg-transparent border border-[#4e5683] indent-4 ' type="text" placeholder='Email here*' />
//                         <div className='flex items-center justify-between'>
//                             <button style={{ background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className='py-2 text-black w-2/4 font-semibold'>send now</button>
//                             <LinkedinLogo size={20} color="#ffffff" weight="fill" />
//                             <TwitterLogo size={20} color="#ffffff" weight="fill" />
//                             <FacebookLogo size={20} color="#ffffff" weight="fill" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex items-center justify-between border-t border-t-white py-4'>
//                     <p className=' w-full'>Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</p>
//                     <div style={{ color: color.grayTxt }} className='flex items-center justify-between w-3/4'>
//                         <p>Style Guide</p>
//                         <p>Licenses</p>
//                         <p>Changelog</p>
//                         <p>Password</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default Footer; 







import React from 'react';
import color from '../data/color'
import Logo from './Logo';
import { Envelope, Phone, LinkedinLogo, TwitterLogo, FacebookLogo } from 'phosphor-react';


const Footer = () => {
    // const linear = {background: linear-gradient(`94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%`)};
    const listAry = ['about us','our team','our project','pricing','contact','style guide','changelog','licenses','protected','not found']
    return (
        <div style={{ backgroundColor: color.blueBg }} className=' capitalize text-white'>
            <div className='px-4'>

                <div className=' bg-white/5 lg:flex items-center justify-between font-[Rubik] font-semibold text-lg'>
                    <div style={{ backgroundColor: color.blueBg }} className="w-full"><Logo /></div>
                    <p className=''>Pages</p>
                    <p className=''>Utility</p>
                    <p className=''>Subscribe</p>
                </div>
                <div className='lg:flex items-start justify-between py-4'>
                    <div style={{ backgroundColor: color.blueBg }} className=' w-full normal-case mb-4'>
                        <p className=''>Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</p>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full bg-[#111c55] border border-[#273270]'>
                                <Envelope size={20} color="#f6b426" />
                            </div>
                            <div>
                                <p>Email</p>
                                <p>contact@logistics.com</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full bg-[#111c55] border border-[#273270]'>
                                <Phone size={20} color="#f6b426" />
                            </div>
                            <div>
                                <p>Call us</p>
                                <p>(00) 112 365 489</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/5 space-y-2'>
                        <p>about us</p>
                        <p>our team</p>
                        <p>our project</p>
                        <p>pricing</p>
                        <p>contact</p>
                    </div>
                    <div className='md:w-2/5 lg:space-y-2  md:grid-cols-1 md:bg-blue-500 bg-red-400 grid grid-cols-2'>
                        <p>style guide</p>
                        <p className='even:text-yellow-200 w-20 ml-auto md:m-0'>changelog</p>
                        <p>licenses</p>
                        <p className='even:text-yellow-200 w-20 ml-auto md:m-0'>protected</p>
                        <p className=' last:col-span-2 last:text-blue-200 last:text-center md:last:col-span-full md:last:text-left'>not found</p>
                    </div>
                    <div className='lg:w-2/4 space-y-4'>
                        <input className=' font-[League_Spartan] w-full py-2 bg-transparent border border-[#4e5683] indent-4 ' type="text" placeholder='Email here*' />
                        <div className='flex items-center justify-between'>
                            <button style={{ background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className='py-2 text-black w-2/4 font-semibold'>send now</button>
                            <LinkedinLogo size={20} color="#ffffff" weight="fill" />
                            <TwitterLogo size={20} color="#ffffff" weight="fill" />
                            <FacebookLogo size={20} color="#ffffff" weight="fill" />
                        </div>
                    </div>
                </div>
                <div className='lg:flex items-center justify-between border-t border-t-white py-4 space-y-2'>
                    <p className=' w-full'>Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</p>
                    <div style={{ color: color.grayTxt }} className='flex items-center justify-between lg:w-3/4'>
                        <p>Style Guide</p>
                        <p>Licenses</p>
                        <p>Changelog</p>
                        <p>Password</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer; 

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

    const iconAry = [{
        icon: Envelope,
        txt: 'email',
        txt2: 'contact@logistics.com'
    }, {
        icon: Phone,
        txt: 'call us',
        txt2: '(00) 112 365 489'
    }]

    const icon = iconAry.map((item, idx) => <div key={idx} className='flex items-center gap-4 my-4'>
        <div className='p-3 rounded-full bg-[#111c55] border border-[#273270]'>
            {React.createElement(item.icon, {
                size: 20, color: "#f6b426"
            })}
        </div>
        <div>
            <p>{item.txt}</p>
            <p>{item.txt2}</p>
        </div>
    </div>)

    const topAry = ['pages', 'utility', 'subscribe']
    const top = topAry.map((item, idx) => <p key={idx} className='last:md:w-2/4 md:w-2/5 md:py-0 py-2'>{item}</p>)

    const listAry = ['about us', 'our team', 'our project', 'pricing', 'contact', 'style guide', 'changelog', 'licenses', 'protected', 'not found']
    const listClass = 'even:w-fit even:ml-auto md:even:m-0 last:col-span-2 last:text-[#f6b426] last:text-center md:last:col-span-full md:last:text-left lg:last:text-white'
    const list = listAry.slice(0, 5).map((item, idx) => <p key={idx} className={listClass}>{item}</p>)
    const list2 = listAry.slice(5, 10).map((item, idx) => <p key={idx} className={listClass}>{item}</p>)

    return (
        <div style={{ backgroundColor: color.blueBg }} className=' capitalize text-white'>
            {/* <div className='px-4 xl:w-3/4 mx-auto'> */}
            <div className='bg-white/5'>
                <div className=' lg:flex md:space-x-4 px-4 items-center justify-between font-[Rubik] font-semibold text-lg flex flex-wrap md:flex-nowrap lg:w-3/4 lg:mx-auto'>
                    <div style={{ backgroundColor: color.blueBg }} className="w-full flex-none md:flex-auto md:-ml-4 md:px-4"><Logo /></div>
                    {/* <p className='md:w-2/5 md:py-0 py-2'>Pages</p>
                    <p className='md:w-2/5 md:py-0 py-2'>Utility</p>
                    <p className='md:w-2/4 md:py-0 py-2'>Subscribe</p> */}
                    {top}
                </div>
            </div>
            <div className='px-4 lg:w-3/4 mx-auto'>
                <div className='md:flex items-start justify-between py-4 md:space-x-4'>
                    <div style={{ backgroundColor: color.blueBg }} className=' w-full normal-case mb-4'>
                        <p className=''>Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</p>
                        {icon}
                    </div>
                    <div className='gap-4 md:gap-0 md:w-2/5 lg:space-y-2  md:grid-cols-1 grid grid-cols-2'>
                        {list}
                    </div>
                    <div className='gap-4 md:gap-0 md:w-2/5 lg:space-y-2  md:grid-cols-1 grid grid-cols-2'>
                        {list2}
                    </div>
                    <div className='md:w-2/4 md:m-0 space-y-4 mt-4'>
                        <input className=' font-[League_Spartan] w-full py-2 bg-transparent border border-[#4e5683] indent-4 ' type="text" placeholder='Email here*' />
                        <div className='flex items-center justify-between space-x-4'>
                            <button style={{ background: `linear-gradient(94.06deg, ${color.grdt} -1.21%, ${color.grdt2} 58.66%, ${color.grdt3} 116.84%)` }} className='py-2 text-black font-semibold w-2/4 md:w-full'>send now</button>
                            <div className='flex items-center justify-between lg:justify-around w-2/4 md:hidden'>
                                <LinkedinLogo size={20} color="#ffffff" weight="fill" />
                                <TwitterLogo size={20} color="#ffffff" weight="fill" />
                                <FacebookLogo size={20} color="#ffffff" weight="fill" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:flex items-center justify-between border-t border-t-white py-4 space-y-2 lg:space-y-0'>
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

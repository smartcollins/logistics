import React from 'react';
import color from '../data/color';


const Liecenses = () => {
    const itemAry = [{
        txt: 'icon & graphics',
        txt2: "All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.The iconography used in this Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific Icon, you can check the licenses and download the images for free on phosphoricons.",
        txt3: 'phosphor icon'
    }, {
        txt: "Photography",
        txt2: "All images used in this Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Unsplash, Pexels, Pixabay, Freepik.",
        txt3: "Pexels",
    }, {
    }, {
        txt2: "Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21, Image 22, Image 23, Image 24, Image 25",
        txt3: "Unsplash"
    }, {
        txt2: 'Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10'
    }, {
        txt: 'font',
        sm: true
    }]
    const item = itemAry.map((item, idx) => (
        <div key={idx} className='flex items-start justify-between gap-4 flex-wrap md:flex-nowrap'>
            <p style={{ color: color.darkTxt }} className='font-bold text-2xl capitalize md:w-2/4'>{item.txt}</p>
            <div className='w-full flex flex-col gap-4'>
                <p style={{ color: color.grayTxt }} className='empty:hidden'>
                    {item.txt2}
                </p>
                {item.txt3 && <p style={{ color: color.darkTxt }} className=' font-bold capitalize w-fit flex items-center gap-2 text-xl'>{item.txt3}:<span className=' font-normal'>Liecenses</span></p>}
                {item.sm && <p>TransitFlow template uses free licensed <span className='  font-medium'>Google Fonts</span>. please check <span className='  font-medium'>Rubik</span> and <span className='  font-medium'>Krub</span>.</p>}
            </div>
        </div>
    ))
    return (
        <div>
            <div className=' md:w-3/4 mx-auto px-4 space-y-4 my-8'>
                {item}
            </div>
        </div>
    )
}

export default Liecenses;
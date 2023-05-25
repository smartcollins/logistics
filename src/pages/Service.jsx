import React from 'react';


const Service = ()=>{
    return(
        <div>
            <div>{banner.slice(3, 4).map((item, idx) => <Banner key={idx} {...item} />)}</div>
        </div>
    )
}


export default Service; 
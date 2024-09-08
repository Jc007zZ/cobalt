import React from 'react';
import img1 from '../../assets/card/img1.png'
import img2 from '../../assets/card/img2.png'
import img3 from '../../assets/card/img3.png'

const  url = {
    "img1":img1,
    "img2":img2,
    "img3":img3

}

export function Card(props) {
    console.log(props)
    return(
     <div className='bg-zinc-950 rounded-xl border border-zinc-800 flex-1'>
        <img src={url[props.src]} />
        <div className='p-8 gap-4 flex flex-col'>
            <h1 className='font-semibold text-xl lg:text-2xl'>{props.title}</h1>
            <p className='text-zinc-400 text-md'>
                {props.children}
            </p>
        </div>
     </div>
    )
}






import React from 'react'
import '../assets/styles/benefits.scss'
import Lottie from 'react-lottie';
import * as dataColor1 from '../assets/waveFiles/data-color-1.json'
import bgImage from '../assets/homepage/homepage-bg.png'

import Card1 from "../assets/homepage/image1.png"
import Card2 from "../assets/homepage/image2.png"
import Card3 from "../assets/homepage/image3.png"


const cards = [
    {
        img: Card1,
        msg: "Quiet your mind and calm the storm"
    },
    {
        img: Card2,
        msg: "Quiet your mind and calm the storm"
    },
    {
        img: Card3,
        msg: "Quiet your mind and calm the storm"
    }
]

const BenefitsSections = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: dataColor1,
        renderer: 'svg',
        autoplay: true
    }

    return (
        <div className='benefits-section'>
            <div className="headings">
                <h2>Verma's Benefits</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint amet id excepturi quam? Atque tenetur.</p>
            </div>

            <div className="cards">
                {
                    cards.map((card, index)=>
                        <div className='card' id={index}>
                            <div className='image-container'>
                                <img src={card.img} alt="" />
                            </div>
                            <div className='text-container'>
                                <p>{card.msg}</p>
                            </div>
                        </div>
                    )
                }

            </div>

            <div className='wave-container'>
                <Lottie 
                    options={defaultOptions}
                />
            </div>
        </div>
    )
}

export default BenefitsSections
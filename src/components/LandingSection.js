import React from 'react'
import Lottie from 'react-lottie';
import * as dataColor1 from '../assets/waveFiles/data-color-2.json'
import bgImage from '../assets/homepage/homepage-bg.png'

const LandingSection = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: dataColor1,
        renderer: 'svg',
        autoplay: true
    }

    return (
        <div className='landing-section'>
            <div className="heading">
                <h1>Pure All Natural CBD Inspired by the Island of Hawaii</h1>
                <p>Zero THC - all natural cannabidol</p>
                <button>Shop now</button>
            </div>

            <img className="bg" src={bgImage} alt="" />

            <div className='wave-container'>
                <Lottie 
                    options={defaultOptions}
                    // height={400}
                    // width={400}
                    // isStopped={this.state.isStopped}
                    // isPaused={this.state.isPaused}
                />
            </div>
        </div>
    )
}

export default LandingSection
import React from 'react'
import '../assets/styles/learnmore.scss'
import ProductImage from "../assets/homepage/gummies-stacked.png"

const LearnMoreSection = () => {
  return (
    <div className='learnmore-section'>

        <div className='img-container'>
            <img src={ProductImage} alt="" />
        </div> 

        <div className='info-container'>
            <h3>How Does It Work?</h3>
            <h2>It's Simple, Really</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatum eos numquam veniam! Sed ad nemo fuga aut accusamus, voluptatum esse quaerat, vero earum ratione officiis aspernatur enim sit expedita?</p>
            <button>LEARN MORE</button>
        </div>

    </div>
  )
}

export default LearnMoreSection
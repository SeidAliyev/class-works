import React from 'react'
import '../assets/hero.css'

const Hero = () => {
  return (
        <div className='heroContent'>
            <div className='hero'>
                <h3 className='readyText'>
                Generate more leads with a professional landing page!
                </h3>
                <div className='subscribe'>
                    <input placeholder='Email Address' className='myEmail' type="text" />
                    <button className='signUp'>Submit</button>
                </div>
            </div>
        </div>
  )
}

export default Hero
import React, { useState, useEffect } from 'react'
import './Hero.css' // CSS file for styling
import hero2 from '../../assets/hero2.jpg'
const Hero = () => {
  const [cupsSaved, setCupsSaved] = useState(1234)

  useEffect(() => {
    const interval = setInterval(() => {
      setCupsSaved((prev) => prev + Math.floor(Math.random() * 5 + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-section flex w-[100%]">
      <div className="hero-content w-[50%]">
        <h1 className="hero-heading">Sip Smarter, Save the Planet 🌍</h1>
        <p className="hero-subheading">
          Unite against paper cup pollution! Join us in revolutionizing habits
          and creating a sustainable future, one cup at a time.
        </p>
        <div className="cta-buttons">
          <button className="cta-button">Join the Movement</button>
          <button className="cta-button secondary">Learn the Impact</button>
          <button className="cta-button">Track Your Contribution</button>
        </div>
        <div className="impact-counter">
          <span>{cupsSaved.toLocaleString()}</span> paper cups saved from
          landfills!
        </div>
        <p className="hero-tagline">Every Sip Counts – Start Today!</p>
      </div>
      <div className="hero-content-right w-[50%] h-[100%]">
        <img src={hero2} alt="" className="w-[100%] h-[100%]" />
      </div>
    </div>
  )
}

export default Hero

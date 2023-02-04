import './services.css'
import React from 'react'
import Card from '../Card'
import glasseEmoji from '../../img/glasses.png'
import heartEmoji from '../../img/heartemoji.png'
import humbleEmoji from '../../img/humble.png'
import Resume from './final_admission_2022.pdf'
const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <spane>Lorem ipsum dolor sit amet consectetur elit. Suscipit commodi dicta veritatis perspiciatis beatae.
          <br />
          Debitis ut laborum alias blanditiis commodi.
        </spane>
        <a href={Resume} download>

        <button className="button s-buton"> Download CV</button>
        </a>
        
        <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>

      </div>
      <div className="cards">
        <Card
          img={glasseEmoji}
          heading={"React expert"}
          description={"I have two years of React experience"}

        />

        <Card
          img={heartEmoji}
          heading={"NextJS expert"}
          description={"I'm making websites with NextJS for 2 years"}

        />
        <Card
          img={humbleEmoji}
          heading={"Problem solver"}
          description={"HckerRank & CodeSignal"}

        />

      </div>
    </div>
  )
}

export default Services
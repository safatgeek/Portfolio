import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className="cardParent">
        <img src={props.img} alt="" />
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
        <button className='button card-button'>learn more</button>

    </div>
  )
}

export default Card
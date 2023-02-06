import './work.css'
import React from 'react'
import Facebook from '../../img/Facebook.png'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Shopify from '../../img/Shopify.png'
import Amazon from '../../img/amazon.png'

const Work = () => {
    return (
        <div className='work'>
            <div className="l-work">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, eveniet porro <br />
                    ratione doloremque quo quis quibusdam, placeat quia voluptatibus blanditiis. <br />
                    nostrum corporis error earum totam sit necessitatibus a aliquid perspiciatis odit? Aut modi non <br />
                    facere accusantium odio officiis tempora quod, fugiat nobis dolore perspiciatis.</span>

                <button className="button w-button">Hire me</button>

            </div>

            <div className="r-circle">
                <div className="mainCircle">
                    <div>
                    <img src={Facebook} alt="" />
                    </div>
                    <div><img src={Upwork} alt="" />
                    </div>
                    <div><img src={Fiverr} alt="" />
                    </div>
                    <div> <img src={Shopify} alt="" />
                    </div>
                    <div><img src={Amazon} alt="" />
                    </div>
                    
                    
                   
                    
                </div>

            </div>
        </div>

    )
}

export default Work
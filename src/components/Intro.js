import './intro.css'
import GitHub from '../img/gitHub.png'
import LinkedIn from '../img/linkedIn.png'
import Instagram from '../img/insta.png'
import Vector1 from '../img/vectorOne.png'
import Vector2 from '../img/vectorTwo.png'
import Boy from '../img/boy.png'
import FloatingDiv from './FloatingDiv/FloatingDiv'
import Crown from '../img/crown.png'
import Thumbup from '../img/thumbup.png'
import GlassImoji from '../img/glassesimoji.png'


const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Tanjim Safat</span>
                    <span>Fullstack softwere engineer with experience in React, NextJS, Javascript, Python & fastAPI</span>
                </div>

                <button className="button i-button">
                    Hire me
                </button>

                <div className="i-icon">
                    <img src={GitHub} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>

            </div>
            <div className="i-right">
                <img src={Vector2} alt="" />
                <img src={Vector1} alt="" />
                <img src={Boy} alt="" />
                <img src={GlassImoji} alt="" />

                <div style={{ top: '6%', left: '50%' }}>
                    <FloatingDiv image={Crown} txt1='Softwere' txt2='Engineer' />
                </div>

                <div style={{ top: '60%', left: '-10%' }}>
                    <FloatingDiv image={Thumbup} txt1='NextJS' txt2='Expert' />
                </div>

                <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
                <div className="blur"
                    style={{
                        background: '#C1F5FF',
                        top: '17rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-12rem'
                    

                    }}
                ></div>
            </div>

        </div>
    )
}

export default Intro
//--- imports! ---
import tayIcon from './images/tay_profile.png'
import './About.css'

const About = () => {
    return(
        <div className='about-container'>

            <div className='speech-bubble'>

                <h2><span className='hello'>Hello,</span>
                    <br></br> 
                    <i className='intro-name'>I'm Tay!</i>
                </h2>
                
            </div>
            

            <img className='profile-pic' src={tayIcon} alt='profile'></img>

        </div>
        
    )
}

export default About
//--- imports! ---
import tayIcon from './images/tay_profile.png'
import './About.css'

const About = () => {
    return(
        <div>
            <p>Hey, I'm Tay!</p>

            <img className='profile-pic' src={tayIcon} alt='profile photo'></img>

        </div>
        
    )
}

export default About
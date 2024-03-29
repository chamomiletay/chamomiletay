//--- imports! ---
import tayIcon from './images/tay_profile.png'
import './Intro.css'

const Intro = () => {
    return(
        <div className='flex-container'>

            {/* introductory speech bubble */}
            <div id='speech-bubble'>

                <h2><span className='hello'>Hello,</span>
                    <br></br> 
                    <i className='intro-name'>I'm Tay!</i>
                </h2>
                
            </div>
            
            {/* profile photo */}
            <div id='profile-pic'>
                <img  src={tayIcon} alt='profile'></img>
            </div>
            
            {/* about me description */}
            <div id='description'>

                {/* <p id='description'> */}
                <p>
                My name is Taylor, and I am passionate about storytelling. As a detail-oriented front-end engineer and designer, I truly enjoy curating responsive, efficient, and cozy spaces. My toolkit includes Javascript, ReactJS, Tailwind CSS, and other libraries and frameworks.

                <br/>
                <br/>

                I take pride in quickly adapting to new environments, engaging in storytelling, and ideating warm and inviting interactive spaces while engaging my audience. My drive to curate more inclusive and accessible spaces is evident in every application I build.
                </p>

            </div>
            
        </div>
        
    )
}

export default Intro
import "./HeroimageStyles.css"
import IntroImg from "./assests/Intro.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt="IntroImg"/>
        </div>
        <div className='content'>
            <p>Hi, I'm a Prajwol Subedi</p>
            <h1>Web Developer</h1>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
    </div>
  )
};

export default HeroImg

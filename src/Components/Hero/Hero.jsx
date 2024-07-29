import "./Hero.css";
import hero_img from "../Assets/hero_image.png";
import hand_img from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className="container">
            <div className="left-hero">
                <h3>NEW ARRIVALS ONLY</h3>
                <p>
                    new
                    <img src={hand_img} alt="" />
                </p>
                <p>collections</p>
                <p> for everyone</p>
                <Link to='/women'>
                <button className="link">
                    Latest Collection <img src={arrow} alt="" />
                </button>
                </Link>
            </div>
            <div className="right-hero">
                <img src={hero_img} alt="collection" />
            </div>
        </div>
    );
};

export default Hero;

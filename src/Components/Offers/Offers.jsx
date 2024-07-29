import "./offers.css";
import exclusive from "../Assets/exclusive_image.png";
import { Link } from "react-router-dom";
const Offers = () => {
    return (
        <div className="offer-container">
            <div className="offers">
                <div className="offers-left">
                    <h1>EXCLUSIVE <br />Offers only for you</h1>
                    <p>On BEST SELLER products</p>
                    <Link to='/kids'>
                    <button className="offers-btn">Check Now</button>
                    </Link>
                </div>
                <div className="offers-right">
                    <img src={exclusive} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Offers;

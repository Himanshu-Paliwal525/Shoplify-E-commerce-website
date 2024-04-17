import "./offers.css";
import exclusive from "../Assets/exclusive_image.png";
const Offers = () => {
    return (
        <div className="offer-container">
            <div className="offers">
                <div className="offers-left">
                    <h1>EXCLUSIVE <br />Offers only for you</h1>
                    <p>On BEST SELLER products</p>
                    <button>Check Now</button>
                </div>
                <div className="offers-right">
                    <img src={exclusive} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Offers;

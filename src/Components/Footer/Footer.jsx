import "./Footer.css";
import Logo from "../Assets/1_black.png";
import LogoName from "../Assets/2_black.png";
import whatsapp from "../Assets/whatsapp.png";
import instagram from "../Assets/instagram.png";
import pinterest from "../Assets/pinterest.png";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
            <Link to='/'>
                <img src={Logo} className="nav-logo" alt="" /> <img src={LogoName} className="nav-logo" alt="" />
            </Link>
            <ul className="footer-main">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <ul className="footer-icons">
                <li>
                    <a href="https://www.whatsapp.com" target="blank">
                    <img className="icon-size" src={whatsapp} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.pinterest.com" target="blank">
                    <img className="icon-size" src={pinterest} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" target="blank">
                    <img className="icon-size" src={instagram} alt="" />
                    </a>
                </li>
            </ul>
            <hr />
            <div>Copyright @ 2024 - All Rights are Reserved.</div>
        </div>
    );
};

export default Footer;

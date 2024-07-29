import "./Navbar.css";
import nav_Profile from '../../assets/nav-profile.svg'
import LogoName from '../../assets/2.png'
import Logo from '../../assets/1.png'
const Navbar = () => {
    return (
        <div className="navbar">
            <img src={Logo} alt="" className="nav-logo" />
            <img src={LogoName} alt="" className="shoplify"/>
            <img src={nav_Profile} alt="" className="nav-profile" />
        </div>
    );
};

export default Navbar;

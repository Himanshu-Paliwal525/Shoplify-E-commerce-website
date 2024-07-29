import cart_icon from "../Assets/bag.png";
import "./NavBar.css";
import Logo from "../Assets/1.png";
import LogoName from "../Assets/2.png";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/Context";
const NavBar = () => {
    const { totalItems } = useContext(ShopContext);
    const navStyle = ({ isActive }) => {
        return isActive
            ? {
                  color: "red",
                  borderBottom: "4px solid red",
                  fontWeight: "bold",
              }
            : {};
    };
    return (
        <div className="nav-bar">
            <Link style={{ display: "flex", gap: "10px", alignItems: 'center' }} to='/'>
                <img src={Logo} alt="" className="nav-logo" />
                <img src={LogoName} alt="" className="nav-logo" />
            </Link>
            <ul className="nav-bar-main">
                <li>
                    <NavLink to="/" style={navStyle}>
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/men" style={navStyle}>
                        Men
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/women" style={navStyle}>
                        Women
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/kids" style={navStyle}>
                        Kids
                    </NavLink>
                </li>
            </ul>
            <div className="login">
                {localStorage.getItem("token") ? (
                    <button
                        onClick={() => {
                            localStorage.removeItem("token");
                            window.location.replace("/");
                        }}
                        className="login-logout-btn logout"
                    >
                        Logout
                    </button>
                ) : (
                    <NavLink to="/login">
                        <button className="login-logout-btn login-btn">
                            Login
                        </button>
                    </NavLink>
                )}
                <NavLink to="/cart">
                    <img className="cart" src={cart_icon} alt="" />
                    <div className="nav-cart-count">{totalItems}</div>
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;

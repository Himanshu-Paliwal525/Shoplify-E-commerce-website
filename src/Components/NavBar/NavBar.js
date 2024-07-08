import logo from "../Assets/logo.png";
import cart_icon from "../Assets/bag.png";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
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
            <img src={logo} alt="" />
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
                        <button className="login-logout-btn login-btn">Login</button>
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

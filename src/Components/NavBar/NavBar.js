import logo from "../Assets/logo.png";
import cart_icon from "../Assets/bag.png";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/Context";
const NavBar = () => {
    const { TotalCartAmount } = useContext(ShopContext);
    const { quantity } = TotalCartAmount();
    return (
        <div className="nav-bar">
            <img src={logo} alt="" />
            <ul className="nav-bar-main">
                <li>
                    <Link to="/">Shop</Link>
                </li>
                <li>
                    <Link to="/men">Men</Link>
                </li>
                <li>
                    <Link to="/women">Women</Link>
                </li>
                <li>
                    <Link to="/kids">Kids</Link>
                </li>
            </ul>
            <div className="login">
                {localStorage.getItem("auth-token") ? (
                    <button
                        onClick={() => {
                            localStorage.removeItem("auth-token");
                            window.location.replace("/");
                        }}
                    >
                        Logout
                    </button>
                ) : (
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                )}
                <Link to="/cart">
                    <img className="cart" src={cart_icon} alt="" />
                    <div className="nav-cart-count">{quantity}</div>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;

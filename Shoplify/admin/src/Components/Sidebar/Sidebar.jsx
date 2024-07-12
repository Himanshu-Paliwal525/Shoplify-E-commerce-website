import { Link } from "react-router-dom";
import "./Sidebar.css";
import add_product from "../../assets/Product_Cart.svg";
import list_product from '../../assets/Product_list_icon.svg'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to={"/addProduct"} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={add_product} alt="" />
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to={"/listProduct"} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={list_product} alt="" />
                    <p>Product List</p>
                </div>
            </Link>
        </div>
    );
};

export default Sidebar;

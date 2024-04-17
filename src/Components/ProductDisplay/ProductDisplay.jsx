import "./ProductDisplay.css";
import star from "../Assets/star_icon.png";
import dull_star from "../Assets/star_dull_icon.png";
import React from "react";
import { ShopContext } from "../../Context/Context";
const ProductDisplay = (props) => {
    const { product } = props;
    const { AddToCart } = React.useContext(ShopContext);
    return (
        <div className="productdisplay">
            <div className="display-left">
                <div className="display-image-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="display-img">
                    <img src={product.image} alt="" className="main-img" />
                </div>
            </div>
            <div className="display-right">
                <h1>{product.name}</h1>
                <div className="display-right-star">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={dull_star} alt="" />
                    <p>(122)</p>
                </div>
                <div className="display-right-prices">
                    <div className="display-newprice">${product.new_price}</div>
                    <div className="display-oldprice">${product.old_price}</div>
                </div>
                <div className="display-description">
                    A lightweight, usually knitted, pullover shirt,
                    close-fitting and with a round neckline and short sleeves,
                    worn as an undershirt or outer garment.
                </div>
                <div className="display-size">
                    <h1>Select Size</h1>
                    <div className="all-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <div className="shop-buttons">
                    <button>BUY NOW</button>
                    <button onClick={() => AddToCart(product.id)}>
                        ADD TO CART
                    </button>
                </div>
                <p className="display-category">
                    <span>Category: </span>Women, T-Shirt, Crop Top
                </p>
                <p className="display-category">
                    <span>Tags: </span>Modern, Latest
                </p>
            </div>
        </div>
    );
};

export default ProductDisplay;

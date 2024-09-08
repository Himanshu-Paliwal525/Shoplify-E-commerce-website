import "./ProductDisplay.css";
import star from "../Assets/star_icon.png";
import dull_star from "../Assets/star_dull_icon.png";
import React, { useEffect, useState } from "react";
import { ShopContext } from "../../Context/Context";
import { useRef } from "react";
const ProductDisplay = (props) => {
    const { product, setRev } = props;
    const [size, setSize] = useState("");
    const [activeIndex, setActiveIndex] = useState(null);
    const [productWithSize, setProductWithSize] = useState(product);
    const { setTotalItems } = React.useContext(ShopContext);
    const selectSize = (e) => {
        setSize(e.target.innerHTML);
        console.log(productWithSize.size);
    };
    const handleSizeChange = async (e, i) => {
        selectSize(e);
        setActiveIndex(i);
    };
    useEffect(() => {
        setProductWithSize((productSize) => ({ ...productSize, size: size }));
    }, [size]);
    const handleClick = async (productSize) => {
        if (size === "") {
            alert("Please select size first");
        } else {
            console.log(productSize);
            const response = await fetch("https://shoplify-e-commerce-website.onrender.com/addToCart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(productSize),
            });
            const data = await response.json();
            if (data.success) {
                console.log("Product added to cart:", data.product);
                setTotalItems((prev) => prev + 1);
            } else {
                console.error("Failed to add product to cart:", data.error);
            }
        }
    };
    const sizes = ["S", "M", "L", "XL", "XXL"];
    const review = useRef();
    setRev(review);
    const handleReviewClick = () => {
        review.current.scrollIntoView({ behavior: "smooth" });
    };
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
                <div
                    className="display-right-star"
                    onClick={() => handleReviewClick()}
                >
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
                        {sizes.map((item, i) => {
                            return (
                                <div
                                    onClick={(e) => handleSizeChange(e, i)}
                                    key={i}
                                    style={
                                        activeIndex === i
                                            ? {
                                                  background:
                                                      "rgb(242, 86, 86)",
                                                  borderColor:
                                                      "rgb(242, 86, 86)",
                                                  color: "white",
                                                  boxShadow:
                                                      "0 0 2px rgb(124, 124, 124)",
                                              }
                                            : {}
                                    }
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="shop-buttons">
                    <button onClick={() => handleClick(productWithSize)}>
                        BUY NOW
                    </button>
                    <button onClick={() => handleClick(productWithSize)}>
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

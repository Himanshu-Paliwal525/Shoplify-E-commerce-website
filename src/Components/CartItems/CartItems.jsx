import { useContext, useEffect, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/Context";
import remove_icon from "../Assets/cross.png";
const CartItems = () => {
    const { TotalCartAmount, setTotalItems } = useContext(ShopContext);
    const [CartProducts, setCartProducts] = useState(null);
    const [trigger, setTrigger] = useState(false);
    const RemoveFromCart = async (product) => {
        if (product.quantity > 1) {
            const response = await fetch("https://shoplify-e-commerce-website.onrender.com/cart", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    ...product,
                    quantity: product.quantity - 1,
                }),
            });
            if (response.ok) {
                console.log("Item updated successfully.");
                setTrigger((prev) => !prev);
            }
        } else {
            const response = await fetch("https://shoplify-e-commerce-website.onrender.com/cart", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(product),
            });
            if (response.ok) {
                console.log("Item deleted.");
                setTrigger((prev) => !prev);
            }
        }
    };
    useEffect(() => {
        fetch("https://shoplify-e-commerce-website.onrender.com/cart", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => setCartProducts(data));
    }, [trigger]);
    const { totalItem, totalPrice } = TotalCartAmount(CartProducts || []);
    setTotalItems(totalItem);
    return (
        <div className="cart-items">
            <div className="cartItems-format format-head">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {CartProducts &&
                CartProducts.map((product) => {
                    return (
                        <div>
                            <div className="cartItems-format">
                                <p>
                                    <img
                                        src={product.image}
                                        alt=""
                                        className="product-icon"
                                    />
                                </p>
                                <p>{product.name}</p>
                                <p>$ {product.curr_price}</p>
                                <p>{product.quantity}</p>
                                <p>$ {product.curr_price * product.quantity}</p>
                                <p>
                                    <img
                                        className="remove-icon"
                                        src={remove_icon}
                                        alt=""
                                        onClick={() => RemoveFromCart(product)}
                                    />
                                </p>
                            </div>
                            <hr />
                        </div>
                    );
                })}
            <div className="cartItems-down">
                <div className="cartItems-total">
                    <h1>Cart Total</h1>
                    <div className="total-bill">
                        <div className="cartItems-total-item">
                            <p>SubTotal</p>
                            <p>$ {totalItem}</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-item">
                            <p>Total</p>
                            <p>$ {totalPrice}</p>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartItems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="promobox">
                        <input
                            type="text"
                            placeholder="Enter Promo Code"
                            id=""
                        />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;

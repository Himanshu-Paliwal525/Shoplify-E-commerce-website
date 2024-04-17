import { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/Context";
import remove_icon from "../Assets/cross.png";
const CartItems = () => {
    const { all_products, cartItems, RemoveFromCart, TotalCartAmount } =
        useContext(ShopContext);
    const { total } = TotalCartAmount();
    const CartProducts = all_products.map((e) => {
        if (cartItems[e.id] > 0) {
            return (
                <div>
                    <div className="cartItems-format">
                        <p>
                            <img
                                src={e.image}
                                alt=""
                                className="product-icon"
                            />
                        </p>
                        <p>{e.name}</p>
                        <p>$ {e.new_price}</p>
                        <p>{cartItems[e.id]}</p>
                        <p>$ {e.new_price * cartItems[e.id]}</p>
                        <p>
                            <img
                                className="remove-icon"
                                src={remove_icon}
                                alt=""
                                onClick={() => RemoveFromCart(e.id)}
                            />
                        </p>
                    </div>
                    <hr />
                </div>
            );
        } else return null;
    });

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
            {CartProducts}
            <div className="cartItems-down">
                <div className="cartItems-total">
                    <h1>Cart Total</h1>
                    <div className="total-bill">
                        <div className="cartItems-total-item">
                            <p>SubTotal</p>
                            <p>$ {total}</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-item">
                            <p>Total</p>
                            <p>$ {total}</p>
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

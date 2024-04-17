import React, { useEffect } from "react";
import all_products from "../Components/Assets/all_product";

export const ShopContext = React.createContext(null);
function InitializeCart() {
    const cart = {};
    for (let index = 0; index < all_products.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [all_product, setAllProduct] = React.useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/allProducts")
            .then((response) => response.json())
            .then((data) => setAllProduct(data));
    }, []);
    const [cartItems, setCartItems] = React.useState(InitializeCart());
    const AddToCart = (ProductId) => {
        setCartItems((prevItems) => {
            return {
                ...prevItems,
                [ProductId]: prevItems[ProductId] + 1,
            };
        });
    };
    const RemoveFromCart = (ProductId) => {
        setCartItems((prevItems) => {
            return {
                ...prevItems,
                [ProductId]: prevItems[ProductId] - 1,
            };
        });
    };
    const TotalCartAmount = () => {
        let total = 0;
        let quantity = 0;
        let itemInfo;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                itemInfo = all_products.find(
                    (product) => product.id === Number(item)
                );
                total += itemInfo.new_price * cartItems[item];
                quantity = quantity + cartItems[item];
            }
        }
        return { total, quantity };
    };
    const contextValue = {
        all_products,
        AddToCart,
        RemoveFromCart,
        cartItems,
        TotalCartAmount,
    };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider;

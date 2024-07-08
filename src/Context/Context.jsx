// import React, { useEffect } from "react";
import all_products from "../Components/Assets/all_product";
import React from "react";
export const ShopContext = React.createContext(null);
// function InitializeCart() {
//     const cart = {};
//     for (let index = 0; index < all_products.length + 1; index++) {
//         cart[index] = 0;
//     }
//     return cart;
// }
const ShopContextProvider = (props) => {
    // const [all_product, setAllProduct] = React.useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:4000/allProducts")
    //         .then((response) => response.json())
    //         .then((data) => setAllProduct(data));
    // }, []);
    const [totalItems, setTotalItems] = React.useState(0);
    // const [cartItems, setCartItems] = React.useState(InitializeCart());
    // const AddToCart = (ProductId) => {
    //     setCartItems((prevItems) => {
    //         return {
    //             ...prevItems,
    //             [ProductId]: prevItems[ProductId] + 1,
    //         };
    //     });
    // };
    
    const TotalCartAmount = (products) => {
        let totalItem = 0;
        let totalPrice = 0;
        for (const product of products) {
            totalItem += product.quantity;
            totalPrice += product.curr_price * product.quantity;
        }
        return { totalItem, totalPrice };
    };
    const contextValue = {
        all_products,
        TotalCartAmount,
        totalItems,
        setTotalItems,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider;

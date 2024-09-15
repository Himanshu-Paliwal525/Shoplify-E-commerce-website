import all_products from "../Components/Assets/all_product";
import React from "react";
export const ShopContext = React.createContext(null);
const ShopContextProvider = (props) => {
    const [totalItems, setTotalItems] = React.useState(0);

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

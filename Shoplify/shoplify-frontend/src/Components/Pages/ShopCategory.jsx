import React from "react";
import { ShopContext } from '../../Context/Context'
import dropdown from "../Assets/dropdown_icon.png";
import Item from "../Item/Item";
import "./styles/ShopCategory.css";
const ShopCategory = (props) => {
    const { all_products } = React.useContext(ShopContext);
    const products = all_products.map((item) => {
        return item.category === props.category ? (
            <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                oldPrice={item.old_price}
                newPrice={item.new_price}
            />
        ) : (
            <></>
        );
    });
    return (
        <div className="shop-category">
            <img className="banner" src={props.banner} alt="banner" />
            <div className="shop-category-index">
                <p>
                    <span>Showing 1-12 </span> out of 36 products
                </p>
                <div className="shop-category-sort">
                    Sort By <img src={dropdown} alt="" />
                </div>
            </div>
            <div className="shop-category-products">{products}</div>
            <div className="shop-category-loadmore">
                Explore More
            </div>
        </div>
    );
};

export default ShopCategory;

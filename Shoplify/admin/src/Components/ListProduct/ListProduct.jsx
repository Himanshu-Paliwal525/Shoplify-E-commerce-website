import { useEffect, useState } from "react";
import cross_icon from "../../assets/cross.png";
import "./ListProduct.css";
const ListProduct = () => {
    const [allProducts, setAllProducts] = useState([]);
    const fetchInfo = async () => {
        await fetch("http://localhost:4000/allProducts")
            .then((res) => res.json())
            .then((data) => setAllProducts(data));
    };
    useEffect(() => {
        fetchInfo();
    }, []);
    const removeProduct = async (id) => {
        await fetch("http://localhost:4000/removeProduct", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });
        await fetchInfo();
    };
    return (
        <div className="list-product">
            <h1>ALL PRODUCTS LIST</h1>
            <div className="list-product-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="list-allproducts">
                <hr />
                {allProducts.map((product, index) => {
                    return (
                        <>
                            <div
                                key={index}
                                className="list-product-format list-product-format-main "
                            >
                                <img
                                    src={product.image}
                                    alt=""
                                    className="list-product-icon"
                                />
                                <p>{product.name}</p>
                                <p>$ {product.old_price}</p>
                                <p>$ {product.new_price}</p>
                                <p>{product.category}</p>
                                <img
                                    onClick={() => removeProduct(product.id)}
                                    className="list-product-remove-icon"
                                    src={cross_icon}
                                    alt=""
                                />
                            </div>
                            <hr />
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default ListProduct;

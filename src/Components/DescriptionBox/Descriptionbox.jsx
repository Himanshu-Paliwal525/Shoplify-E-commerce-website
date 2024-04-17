import "./descriptionbox.css";
const DescriptionBox = () => {
    return (
        <div className="description-box">
            <div className="navigator">
                <div className="navDescription">Description</div>
                <div className="navDescription nav-reviews">Reviews (122)</div>
            </div>
            <div className="description-box-description">
                <p>
                    An e-commerce website is an online platform that facilitates
                    the buying and selling of products or services over the
                    interned and serves as a virtual marketplace where
                    businesses and individual showcase their products, interact
                    with customers, and conduct transactions without the need
                    for a physical presence. E-commerce websites have gained
                    immense popularity due to their convenient accessibility,
                    and the global reach they offer.
                </p>
                <p>
                    E-commerce websites typically display products or services
                    along with detailed descriptions, images, prices, and any
                    available variations (e.g. sizes,colors). Each product
                    usually has its own dedicated page with relevant
                    information.
                </p>
            </div>
        </div>
    );
};

export default DescriptionBox;

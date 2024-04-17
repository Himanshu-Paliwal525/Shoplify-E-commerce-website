import { Link } from "react-router-dom";
import "./item.css";
const Item = (props) => {
    return (
        <Link to={`/product/${props.id}`}>
            <div className="items">
                <div className="item-image">
                    <img src={props.image} alt="" />
                </div>
                <div className="item-name">{props.name}</div>
                <div className="price">
                    <div className="new-price">$ {props.newPrice}</div>
                    <div className="old-price">$ {props.oldPrice}</div>
                </div>
            </div>
        </Link>
    );
};

export default Item;

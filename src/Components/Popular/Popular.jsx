import Items from "../Assets/data";
import Item from "../Item/Item";
import "./popular.css";
const Popular = (props) => {
    const allItems = Items.map((item) => {
        return (
            <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                oldPrice={item.old_price}
                newPrice={item.new_price}
            />
        );
    });
    return (
        <div className="popular">
            <h1 className="underline">{props.header}</h1>
            <div>{allItems}</div>
        </div>
    );
};

export default Popular;

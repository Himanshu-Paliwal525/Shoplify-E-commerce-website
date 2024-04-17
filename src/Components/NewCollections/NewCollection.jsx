import Items from "../Assets/new_collections";
import Item from "../Item/Item";
import "./newCollection.css";
const NewCollection = () => {
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
        <div className="new-collection">
            <h1 className="collection-underline">New Collection</h1>
            <div>{allItems}</div>
        </div>
    );
};

export default NewCollection;

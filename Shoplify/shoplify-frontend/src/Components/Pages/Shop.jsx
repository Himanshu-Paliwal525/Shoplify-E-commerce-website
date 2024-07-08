import Hero from "../Hero/Hero";
import NewCollection from "../NewCollections/NewCollection";
import NewsLetter from "../NewsLetter/NewsLetter";
import Offers from "../Offers/Offers";
import Popular from "../Popular/Popular";


const Shop = () => {
    return (
        <>
            <Hero />
            <Popular header="Popular In Women"/>
            <Offers/>
            <NewCollection/>
            <NewsLetter/>
        </>
    );
};

export default Shop;

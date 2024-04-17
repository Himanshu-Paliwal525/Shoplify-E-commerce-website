import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Shop from "./Components/Pages/Shop";
import Login from "./Components/Pages/Login";
import Cart from "./Components/Pages/Cart";
import Product from "./Components/Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Components/Pages/ShopCategory";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";
function App() {
    return (
        <BrowserRouter>
        <ScrollToTop/>
            <NavBar />
            <Routes>
                <Route path="/" element={<Shop />} />
                <Route
                    path="/men"
                    element={
                        <ShopCategory banner={men_banner} category="men" />
                    }
                />
                <Route
                    path="/women"
                    element={
                        <ShopCategory banner={women_banner} category="women" />
                    }
                />
                <Route
                    path="/kids"
                    element={
                        <ShopCategory banner={kids_banner} category="kids" />
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product" element={<Product />}>
                    <Route path=":id" element={<Product />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

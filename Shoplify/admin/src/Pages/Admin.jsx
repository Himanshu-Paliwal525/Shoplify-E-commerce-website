import { Route, Routes } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./Admin.css";
import AddProduct from "../Components/AddProduct/AddProduct";
import ListProduct from "../Components/ListProduct/ListProduct";
const Admin = () => {
    return (
        <div className="admin">
            <Sidebar />
            <Routes>
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/listProduct" element={<ListProduct />} />
            </Routes>
        </div>
    );
};

export default Admin;

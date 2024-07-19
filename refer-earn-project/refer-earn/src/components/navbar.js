import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = ({ isActive }) =>
        isActive
            ? {
                  color: "blue",
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
              }
            : {};
    return (
        <div className="flex fixed w-full bg-white justify-between font-medium px-4 py-2 h-14 shadow-sm">
            <div className="list-none">
                <li className="text-blue-500 font-bold text-2xl cursor-pointer">accredian</li>
            </div>
            <div className="list-none flex gap-11 items-center">
                <NavLink
                    to="/"
                    style={activeStyle}
                    className="hover:text-blue-500"
                >
                    <li>Refer & Earn</li>
                </NavLink>
                <NavLink
                    to="/resources"
                    style={activeStyle}
                    className="hover:text-blue-500"
                >
                    <li>Resources</li>
                </NavLink>
                <NavLink
                    to="/about"
                    style={activeStyle}
                    className="hover:text-blue-500"
                >
                    <li>About Us</li>
                </NavLink>
                <NavLink
                    to="/login"
                    style={({ isActive }) =>
                        isActive
                            ? { visibility: "hidden" }
                            : { visibility: "visible" }
                    }
                >
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700">
                        Login
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;

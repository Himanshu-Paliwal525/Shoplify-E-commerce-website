import { useState } from "react";
import "./descriptionbox.css";
import Description from "./description";
import Reviews from "./reviews";
const DescriptionBox = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive((prev) => !prev);
    };
    return (
        <div className="description-box">
            <div className="navigator">
                <div className="navDescription" onClick={handleClick}>
                    <li
                        style={
                            active
                                ? {
                                      borderBottom: "4px solid black",
                                  }
                                : {}
                        }
                    >
                        Description
                    </li>
                </div>
                <div
                    onClick={handleClick}
                    className="navDescription nav-reviews"
                >
                    <li
                        style={
                            !active
                                ? {
                                      borderBottom: "4px solid black",
                                  }
                                : {}
                        }
                    >
                        {" "}
                        Reviews (122){" "}
                    </li>
                </div>
            </div>
            {active ? <Description /> : <Reviews />}
        </div>
    );
};

export default DescriptionBox;

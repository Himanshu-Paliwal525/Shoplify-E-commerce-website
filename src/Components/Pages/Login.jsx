import "./styles/login.css";
import React from "react";
const Login = () => {
    const [state, setState] = React.useState("Login");
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
        email: "",
    });
    const login = async () => {
        let responseData;
        await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => (responseData = data));
            if(responseData.success)
            {
                localStorage.setItem('auth-token',responseData.token);
                window.location.replace('/');
            }
            else {
                alert(responseData.error)
            }
    };
    const signup = async () => {
        let responseData;
        await fetch("http://localhost:4000/signup", {
            method: "POST",
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => (responseData = data));
            if(responseData.success)
            {
                localStorage.setItem('auth-token',responseData.token);
                window.location.replace('/');
            }
            else {
                alert(responseData.error)
            }
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div className="login-signup">
            <div className="login-container">
                <h1>{state}</h1>
                <div className="login-field">
                    {state === "Sign Up" ? (
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Your Name"
                        />
                    ) : (
                        <></>
                    )}
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </div>
                <button
                    onClick={() => {
                        state === "Login" ? login() : signup();
                    }}
                >
                    Continue
                </button>
                {state === "Sign Up" ? (
                    <p className="login-already">
                        Already haven an account ?{" "}
                        <span
                            onClick={() => {
                                setState("Login");
                            }}
                        >
                            Login Here
                        </span>
                    </p>
                ) : (
                    <p className="login-already">
                        Create an account ?{" "}
                        <span
                            onClick={() => {
                                setState("Sign Up");
                            }}
                        >
                            Click Here
                        </span>
                    </p>
                )}
                <div className="login-agree">
                    <input type="checkbox" name="" id="" />
                    <p>
                        By continuing, I agree to the terms of use & privacy
                        policy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

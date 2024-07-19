// src/components/ReferEarnPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const ReferEarnPage = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        referrerName: "",
        referrerEmail: "",
        refereeName: "",
        refereeEmail: "",
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formValues);
        const response = await fetch("http://localhost:4000/referrals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
        });
        if (response) {
            alert("Form submitted");
            navigate("/");
        }

        handleClose();
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-red p-10 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-bold mb-4">Refer & Earn</h1>
                <p className="text-lg mb-6">
                    Refer your friends to our course and earn rewards!
                </p>
                <button
                    className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                    onClick={handleOpen}
                >
                    Refer Now
                </button>
            </div>
            {open && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-gradient-to-r from-slate-300 via-blue-200 to-slate-300 rounded-3xl shadow-lg w-1/3 px-11 py-11">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">
                                Referral Form
                            </h2>
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                onClick={handleClose}
                            >
                                Close
                            </button>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col items-center justify-center"
                        >
                            <div className="mb-4 w-full">
                                <label className="block text-left mb-1">
                                    Your Name:
                                </label>
                                <input
                                    type="text"
                                    name="referrerName"
                                    value={formValues.referrerName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-none outline-none rounded-xl"
                                    required
                                />
                            </div>
                            <div className="mb-4 w-full">
                                <label className="block text-left mb-1">
                                    Your Email:
                                </label>
                                <input
                                    type="email"
                                    name="referrerEmail"
                                    value={formValues.referrerEmail}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-none outline-none rounded-xl"
                                    required
                                />
                            </div>
                            <div className="mb-4 w-full">
                                <label className="block text-left mb-1">
                                    Friend's Name:
                                </label>
                                <input
                                    type="text"
                                    name="refereeName"
                                    value={formValues.refereeName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-none outline-none rounded-xl"
                                    required
                                />
                            </div>
                            <div className="mb-4 w-full">
                                <label className="block text-left mb-1">
                                    Friend's Email:
                                </label>
                                <input
                                    type="email"
                                    name="refereeEmail"
                                    value={formValues.refereeEmail}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-none outline-none rounded-xl"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReferEarnPage;

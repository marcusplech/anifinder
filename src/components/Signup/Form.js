import React, { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";

import Modal from "./Modal";

const FormContent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userInfo, setUserInfo] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (event) => {
        const fieldName = event.target.getAttribute("name");
        setUserInfo({
            ...userInfo,
            [fieldName]: event.target.value,
        });
    };

    const isFormInvalid =
        userInfo.email.length === 0 ||
        userInfo.username.length === 0 ||
        userInfo.password.length === 0 ||
        userInfo.confirmPassword.length === 0;

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <input
                    className="al-input"
                    placeholder="Email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    className="al-input"
                    placeholder="Username"
                    name="username"
                    value={userInfo.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="password"
                    className="al-input"
                    placeholder="Password"
                    name="password"
                    value={userInfo.password}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>
            <div>
                <input
                    type="password"
                    className="al-input"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={userInfo.confirmPassword}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>

            <div className="checkbox-container">
                <label className="label-checkbox">
                    <input
                        checked
                        name="toggle"
                        type="checkbox"
                        disabled={isFormInvalid}
                    ></input>
                    <span>You agree to our terms of service</span>
                </label>
            </div>

            <Link to="/">
                <button className="back-submit">Back to Home</button>
            </Link>
            <button
                disabled={isFormInvalid}
                onClick={() => setIsModalVisible(true)}
                className="submit"
                name="submit"
            >
                Sign Up
            </button>
            {isModalVisible ? (
                <Modal onClose={() => setIsModalVisible(false)} />
            ) : null}
        </form>
    );
};

export const Form = () => {
    return (
        <div>
            <FormContent />
        </div>
    );
};

export default Form;

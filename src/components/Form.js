import React, { useState } from "react";
import content from "./layout/static";
import "./Form.css";

import Modal from "./Modal";

const Form = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div className="form-content">
            <div className="form-container">
                <div className="form-title">Sign up to AniList</div>
                <form>
                    {content.inputs.map((input, key) => {
                        return (
                            <div key={key}>
                                <input
                                    className="al-input"
                                    placeholder="Email"
                                />
                                <input
                                    className="al-input"
                                    placeholder="Username"
                                />
                                <input
                                    name={input.name}
                                    type={input.type}
                                    className="al-input"
                                    placeholder="Password"
                                />
                                <input
                                    name={input.name}
                                    type={input.type}
                                    className="al-input"
                                    placeholder="Confirm Password"
                                />
                                <label className="el-checkbox">
                                    <span
                                        aria-checked="mixed"
                                        className="span-checkbox"
                                    >
                                        <span className="el-checkbox-inner"></span>
                                        <input
                                            className="el-checkbox-original"
                                            type="checkbox"
                                            aria-hidden="true"
                                        ></input>
                                    </span>
                                    <span className="el-checkbox-label">
                                        You agree to our terms of service
                                    </span>
                                </label>
                                <div
                                    onClick={() => setIsModalVisible(true)}
                                    type="submit"
                                    className="submit"
                                >
                                    Sign Up
                                </div>
                                {isModalVisible ? (
                                    <Modal
                                        onClose={() => setIsModalVisible(false)}
                                    />
                                ) : null}
                            </div>
                        );
                    })}
                </form>
            </div>
        </div>
    );
};

export default Form;

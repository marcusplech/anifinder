import React from "react";
import "./Modal.css";

const Signup = () => {
    return (
        <div className="modal-content">
            <div className="signup-img">
                <img
                    src="https://kitsu.io/images/register-head-b2efe1b5bc270b0166c83217a0aecf22.png"
                    alt=""
                />
            </div>
            <h4>Please note</h4>
            <div className="signup-message append">
                This is just a personal
                <span className="signup-standout project"> project</span>. It's
                not fully functional quite yet - perharps if I find the time in
                the future. This modal is based on a favorite App of mine. If
                you want to find out more about it, please refer to{" "}
                <span className="signup-standout e-mail">
                    mplechdev@gmail.com
                </span>
            </div>
        </div>
    );
};

export default Signup;

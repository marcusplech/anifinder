import React from "react";

const Modal = () => {
    return (
        <div className="modal-content">
            <div className="signup-img">
                <img
                    src="https://kitsu.io/images/register-head-b2efe1b5bc270b0166c83217a0aecf22.png"
                    alt=""
                />
            </div>
            <div className="signup-content">
                <p className="signup-title">
                    Create an account to track, share and discover anime and
                    manga in a uniquely social way.
                </p>
                <div className="facebook">
                    <i className="fab fa-facebook-square"></i>
                    <div className="facebook-connect">
                        <p>Continue with Facebook</p>
                    </div>
                </div>
                <div className="signup-connecting">
                    <span className="signup-connect"> Sign up with email </span>
                    <span>
                        Have an Account?{" "}
                        <span className="signup-standout login"> Login </span>
                    </span>
                </div>
                <div className="signup-message">
                    If you sign up with Facebook, we’ll start you off with a
                    network by automatically matching you with your
                    followers/followees or friends already on Kitsu. Don't
                    worry, we’ll never post to Facebook without your permission.
                </div>
                <h4>Please note</h4>
                <div className="signup-message append">
                    This is just a personal
                    <span className="signup-standout project"> project</span>.
                    It's not fully functional quite yet - perharps if I find the
                    time in the future. This modal is based on a favorite App of
                    mine. If you want to find out more about it, please refer to{" "}
                    <span className="signup-standout e-mail">
                        rmcsoftdev@gmail.com
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Modal;

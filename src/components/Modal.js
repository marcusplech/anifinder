import React from "react";
import Signup from "./Signup";
import "./Modal.css";

const Modal = () => {
    return (
        <div className="modal">
            <div className="modal-container">
                <div className="content-modal">
                    <Signup />
                </div>
            </div>
        </div>
    );
};
export default Modal;

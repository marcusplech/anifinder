import React from "react";
import Signup from "./Signup";
import "./Modal.css";

const Modal = ({ id = "modal", onClose = () => {} }) => {
    const handleClickOutside = (e) => {
        if (e.target.id === id) onClose();
    };

    return (
        <div id={id} className="modal" onClick={handleClickOutside}>
            <div className="modal-container">
                <Signup />
            </div>
        </div>
    );
};
export default Modal;

import React from "react";
import "./Dropdown.css";

const Dropdown = (props) => {
    return (
        <div className={`open menu${props.open ? "active" : ""}`}>
            <div className="ps-container">
                <div
                    className="option-group"
                    onClick={() => props.setOpen(false)}
                >
                    <div className="group-title">{props.title}</div>
                    {props.canal}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;

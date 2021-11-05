import React from "react";
import "./Dropdown.css";

const Dropdown = ({
    id = "menu",
    open,
    setOpen,
    title,
    canal,
    onClose = () => { },
}) => {
    const handleClickOutside = (e) => {
        if (e.target.id === id) onClose();
    };

    return (
        <div
            onClick={handleClickOutside}
            id={id}
            className={`open menu ${open ? "active" : ""}`}
        >
            <div className="ps-container">
                <div className="option-group" onClick={() => setOpen(false)}>
                    <div className="group-title">{title}</div>
                    {canal}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;

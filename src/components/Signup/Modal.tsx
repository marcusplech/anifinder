import React from "react";
import SignupContent from "./SignupContent";

interface ModalProps {
  id?: string;
  onClose?: () => void;
}

const Modal = ({ id = "modal", onClose = () => {} }: ModalProps) => {
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.id === id) onClose();
  };

  return (
    <div id={id} className="modal" onClick={handleClickOutside}>
      <div className="modal-container">
        <SignupContent />
      </div>
    </div>
  );
};

export default Modal;

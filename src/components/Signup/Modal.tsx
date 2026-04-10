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
    <div
      id={id}
      className="fixed inset-0 z-10 flex animate-[fade-in_0.5s_ease-out] justify-center bg-slate-900/75 pt-[70px] backdrop-blur-sm"
      onClick={handleClickOutside}
    >
      <div className="z-[101] mt-0 w-[30%] min-w-[280px] max-w-lg overflow-hidden rounded-[14px] border border-slate-900/[0.06] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)] transition-all duration-300 ease-out max-[500px]:w-1/2">
        <SignupContent />
      </div>
    </div>
  );
};

export default Modal;

import React, { ReactNode } from "react";

interface DropdownProps {
  id?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  canal: ReactNode;
  onClose?: () => void;
}

const Dropdown = ({
  id = "menu",
  open,
  setOpen,
  title,
  canal,
  onClose = () => {},
}: DropdownProps) => {
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.id === id) onClose();
  };

  return (
    <div onClick={handleClickOutside} id={id} className={`open menu ${open ? "active" : ""}`}>
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

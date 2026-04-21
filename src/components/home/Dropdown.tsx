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
    <div
      onClick={handleClickOutside}
      id={id}
      className={`absolute left-0 top-[calc(100%+10px)] z-50 w-full origin-top overflow-auto overscroll-contain rounded-[10px] border border-[#c5cfdb] bg-white p-2.5 shadow-[0_12px_40px_rgba(15,23,42,0.1),0_0_0_1px_rgba(15,23,42,0.04)] transition-all duration-300 ease-in-out ${
        open
          ? "pointer-events-auto scale-100 opacity-100"
          : "pointer-events-none scale-95 opacity-0"
      }`}
      style={{ maxHeight: 500 }}
    >
      <div className="relative">
        <div className="option-group" onClick={() => setOpen(false)}>
          <div className="select-none px-1 py-1.5 text-xs font-extrabold uppercase tracking-[0.1em] text-slate-500">
            {title}
          </div>
          {canal}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

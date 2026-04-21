import Dropdown from "./Dropdown";

interface FilterOption {
  key: string;
  label: string;
}

interface FilterSelectProps {
  label: string;
  dropdownTitle: string;
  value: string;
  placeholder?: string;
  open: boolean;
  onOpen: () => void;
  onToggle: (open: boolean) => void;
  onChange: (value: string) => void;
  options: FilterOption[];
  /** Permite digitar no campo (ex.: gênero). Caso falso, o valor exibido usa o rótulo traduzido. */
  allowTyping?: boolean;
}

const FilterSelect = ({
  label,
  dropdownTitle,
  value,
  placeholder = "Qualquer",
  open,
  onOpen,
  onToggle,
  onChange,
  options,
  allowTyping = false,
}: FilterSelectProps) => {
  const displayValue =
    allowTyping || !options.length ? value : (options.find((o) => o.key === value)?.label ?? value);

  const optionNodes = options.map((option) => (
    <div
      key={option.key}
      onClick={() => onChange(option.key)}
      className="cursor-pointer whitespace-normal rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-500 transition-colors duration-200 hover:bg-indigo-500/10 hover:text-indigo-500"
    >
      {option.label}
    </div>
  ));

  return (
    <div className="flex flex-col gap-1.5">
      <div className="p-0 text-[11px] font-bold uppercase tracking-[0.08em] text-slate-600">
        {label}
      </div>
      <div className="relative w-full">
        <div className="relative grid h-[42px] grid-cols-[1fr_22px] items-center rounded-[10px] border border-[#c5cfdb] bg-[#eef2f6] px-3 py-0 pl-3 text-[13px] font-semibold tracking-wide shadow-[inset_0_1px_2px_rgba(15,23,42,0.05)] transition-[background,border-color,box-shadow] duration-150 hover:border-slate-400 hover:bg-[#e8edf3] focus-within:border-indigo-500 focus-within:bg-white focus-within:shadow-[inset_0_1px_2px_rgba(15,23,42,0.05),0_0_0_3px_rgba(99,102,241,0.2)]">
          <div className="relative flex min-h-[18px] items-center">
            <input
              onClick={onOpen}
              onChange={allowTyping ? (e) => onChange(e.target.value) : undefined}
              readOnly={!allowTyping}
              value={displayValue}
              placeholder={placeholder}
              type="search"
              autoComplete="off"
              className="m-0 w-full border-0 bg-transparent p-0 text-sm font-medium leading-tight text-slate-900 outline-none placeholder:text-slate-500"
            />
          </div>
          <svg
            onClick={onOpen}
            className="h-6 w-6 shrink-0 cursor-pointer text-slate-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
              fill="currentColor"
            />
          </svg>
          <Dropdown
            title={dropdownTitle}
            open={open}
            setOpen={(next) => onToggle(next)}
            canal={optionNodes}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSelect;

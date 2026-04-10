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
    <div key={option.key} onClick={() => onChange(option.key)} className="option">
      {option.label}
    </div>
  ));

  return (
    <div className="filter-select">
      <div className="name">{label}</div>
      <div className="select-wrap">
        <div className="select">
          <div className="value-wrap">
            <input
              onClick={onOpen}
              onChange={allowTyping ? (e) => onChange(e.target.value) : undefined}
              readOnly={!allowTyping}
              value={displayValue}
              placeholder={placeholder}
              type="search"
              autoComplete="off"
              className="filter"
            />
          </div>
          <svg
            onClick={onOpen}
            className="chevrondown"
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

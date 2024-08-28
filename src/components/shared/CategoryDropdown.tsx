import * as React from "react";
import { cn } from "@/lib/utils";

export interface DropdownProps {
  options: string[];
  onSelect: (value: string) => void;
  placeholder?: string;
  dropdownWrapperClassName?: string;
  dropdownItemClassName?: string;
  selectedClassName?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder = "Select an option",
  dropdownWrapperClassName,
  dropdownItemClassName,
  selectedClassName,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState<string | null>(
    null
  );

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={cn("relative text-gray-600 z-50 w-full md:w-[200px]", dropdownWrapperClassName)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-between w-full h-10 px-3 py-1 border border-input rounded-md bg-background text-sm cursor-pointer",
          selectedClassName
        )}
      >
        {selectedOption || placeholder}
        <svg
          className="w-5 h-5 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </button>
      {isOpen && (
        <ul
          className={cn(
            "absolute z-10 w-full bg-background shadow-lg rounded-md mt-1 overflow-auto ring-1 ring-black ring-opacity-5",
            dropdownWrapperClassName
          )}
        >
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className={cn(
                "cursor-pointer m-2 rounded-lg no-scrollbar select-none py-2 px-3 text-sm hover:bg-green-200 hover:text-gray-700",
                dropdownItemClassName
              )}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Dropdown };

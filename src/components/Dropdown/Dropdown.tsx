import React, { useEffect, useRef } from "react";
import style from "./Dropdown.module.scss";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface DropdownReturn {
  name: string;
  value: { key: string; value: string };
}

interface DropdownProps {
  value?: string | null;
  options: { key: string; value: string }[];
  placeholder: string;
  onChange: (args1: DropdownReturn) => void;
  icon?: IconDefinition;
  name: string;
  setShowOptions: (value: boolean) => void;
}

const Dropdown = ({
  options,
  onChange,
  name,
  setShowOptions,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className={style.wrapper} ref={dropdownRef}>
      <div className={style.list}>
        {options.map((opt) => (
          <button
            name={name}
            className={style.item}
            key={opt.key}
            onClick={() => {
              const returnValue = {
                name: name,
                value: { key: opt.key, value: opt.value },
              };
              onChange(returnValue);
              setShowOptions(false);
            }}
          >
            {opt.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;

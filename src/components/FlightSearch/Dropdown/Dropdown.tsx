import React, { useEffect, useRef } from "react";
import style from "./Dropdown.module.scss";
import { DropdownProps } from "@/components/FlightSearch/Dropdown/DropdownType";

const Dropdown = ({
  options,
  onChange,
  name,
  setShowOptions,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
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
                name: opt.key,
                value: opt.value,
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

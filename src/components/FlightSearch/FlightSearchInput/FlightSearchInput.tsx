"use client";

import styles from "./FlightSearchInput.module.scss";
import Dropdown from "@/components/FlightSearch/Dropdown/Dropdown";
import { useState } from "react";
const FlightSearchInput = ({
  icon,
  placeHolder,
  options = [],
  name = "",
}: {
  icon: React.ReactNode;
  placeHolder: string;
  options: { key: string; value: string }[];
  name: string;
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const handleSetValue = (value: string) => {
    setValue(value);
    setShowOptions(value.length > 0);
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.inputContainer}
        onFocus={() => setShowOptions(true)}
        onMouseOver={() => {
          setShowOptions(true);
        }}
      >
        {icon}
        <input
          placeholder={placeHolder}
          value={value}
          onChange={(e) => handleSetValue(e.target.value)}
        />
      </div>
      {options.length > 0 && showOptions && (
        <Dropdown
          options={options}
          placeholder={"Seçin"}
          onChange={(i) => {
            setValue(i.name);
            localStorage.setItem(name, JSON.stringify(i));
          }}
          name={"airports-selection"}
          setShowOptions={setShowOptions}
        />
      )}
    </div>
  );
};

export default FlightSearchInput;

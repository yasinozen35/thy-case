"use client";

import styles from "./FlightSearchInput.module.scss";
import Dropdown from "@/components/Dropdown/Dropdown";
import { useState } from "react";
const FlightSearchInput = ({
  icon,
  placeHolder,
  options = [],
}: {
  icon: React.ReactNode;
  placeHolder: string;
  options: { key: string; value: string }[];
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <div
        className={styles.inputContainer}
        onMouseOver={() => {
          setShowOptions(true);
          console.log("tdsadadas");
        }}
      >
        {icon}
        <input placeholder={placeHolder} />
      </div>
      {options.length > 0 && showOptions && (
        <Dropdown
          options={options}
          placeholder={"Seçin"}
          onChange={(i) => console.log("test", i)}
          name={"test"}
          setShowOptions={setShowOptions}
        />
      )}
    </div>
  );
};

export default FlightSearchInput;

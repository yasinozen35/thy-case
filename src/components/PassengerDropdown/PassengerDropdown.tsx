"use client";

import styles from "./PassengerDropdown.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { DictType } from "@/utils/types/commonTypes";
import RadioButton from "@/components/RadioButton/RadioButton";
import QuantityChangeButtons from "@/components/QuantityChangeButtons/QuantityChangeButtons";

const PassengerDropdown = ({
  dict,
  closeDropDownTrigger = () => {},
  setSelectedPassengerCount = () => {},
  setSelectedPassengerClass = () => {},
  selectedClass = "economic",
  selectedPassengerCount = 0,
}: {
  dict: DictType;
  closeDropDownTrigger: () => void;
  setSelectedPassengerCount: (value: number) => void;
  selectedClass: string;
  selectedPassengerCount: number;
  setSelectedPassengerClass: (value: string) => void;
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [passengerCount, setPassengerCount] = useState<number>(
    selectedPassengerCount,
  );
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      closeDropDownTrigger();
    }
  };

  useEffect(() => {
    setSelectedPassengerCount(passengerCount);
  }, [passengerCount]);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.passengerWrapper} ref={dropdownRef}>
      <p>{dict.query_selection_title}</p>
      <div className={styles.radiosWrapper}>
        <RadioButton
          name={"flight-class"}
          id={"flight-class-economy"}
          radioText={"Economy Class"}
          value={"economic"}
          onClick={(value) => setSelectedPassengerClass(value)}
          checked={selectedClass === "economic"}
        />
        <RadioButton
          name={"flight-class"}
          id={"flight-class-business"}
          radioText={"Bussiness Class"}
          value={"business"}
          onClick={(value) => setSelectedPassengerClass(value)}
          checked={selectedClass === "business"}
        />
      </div>
      <div className={styles.passengerSelections}>
        <p>{dict.query_passenger}</p>
        <QuantityChangeButtons
          plusOnClick={() => setPassengerCount((prevCount) => (prevCount += 1))}
          minusOnClick={() =>
            setPassengerCount((prevCount) => {
              return (prevCount -= prevCount - 1 < 1 ? 0 : 1);
            })
          }
          counter={selectedPassengerCount}
        />
      </div>
    </div>
  );
};
export default PassengerDropdown;

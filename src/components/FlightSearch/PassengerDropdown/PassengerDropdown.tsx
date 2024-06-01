"use client";

import styles from "./PassengerDropdown.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { DictType } from "@/utils/types/commonTypes";
import RadioButton from "@/components/FlightSearch/RadioButton/RadioButton";
import QuantityChangeButtons from "@/components/FlightSearch/QuantityChangeButtons/QuantityChangeButtons";
import { flightClass } from "@/utils/constants/consts";

const PassengerDropdown = ({
  dict,
  closeDropDownTrigger = () => {},
  setSelectedPassengerCount = () => {},
  setSelectedPassengerClass = () => {},
  selectedClass,
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
  const radioButtonName = "flight-class";

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
          id={"flight-class-economy"}
          name={radioButtonName}
          radioText={dict.query_economy_class}
          value={flightClass.ECONOMY}
          onClick={(value) => setSelectedPassengerClass(value)}
          checked={selectedClass === flightClass.ECONOMY}
        />
        <RadioButton
          id={"flight-class-business"}
          name={radioButtonName}
          radioText={dict.query_business_class}
          value={flightClass.BUSINESS}
          onClick={(value) => setSelectedPassengerClass(value)}
          checked={selectedClass === flightClass.BUSINESS}
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

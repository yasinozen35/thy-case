"use client";

import RadioButton from "@/components/FlightSearch/RadioButton/RadioButton";
import styles from "./ClassItemForListItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const ClassItemForListItem = ({
  radioButtonValue = "",
  radioButtonText = "",
  radioButtonName = "",
  onClick = () => {},
  checked = false,
  priceText = "",
  price = "",
  currencyCode = "TRY",
  isOpen = false,
  index = "0",
  selectedIndex = "0",
}: {
  radioButtonValue: string;
  radioButtonText: string;
  radioButtonName: string;
  onClick: (value: string) => void;
  checked: boolean;
  priceText?: string;
  price: string;
  currencyCode?: string;
  isOpen?: boolean;
  index: string;
  selectedIndex: string;
}) => {
  return (
    <div className={styles.classItemForListItem}>
      <RadioButton
        name={radioButtonName}
        id={radioButtonName + radioButtonValue}
        value={radioButtonValue}
        radioText={radioButtonText}
        onClick={(value) => onClick(value)}
        checked={checked && index === selectedIndex}
      />
      <div className={styles.prices}>
        <p>{priceText}</p>
        <p>
          {currencyCode} {price}
        </p>
      </div>
      <>
        {isOpen && index === selectedIndex ? (
          <FontAwesomeIcon icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} />
        )}
      </>
    </div>
  );
};

export default ClassItemForListItem;

"use client";

import RadioButton from "@/components/FlightSearch/RadioButton/RadioButton";
import styles from "./ClassItemForListItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { ClassItemForListItemType } from "@/components/FlightList/ClassItemForListItem/ClassItemForListItemType";

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
  index = "",
  selectedIndex = "",
}: ClassItemForListItemType) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      onClick(radioButtonValue);
    }
  };
  return (
    <div
      className={styles.classItemForListItem}
      onClick={() => onClick(radioButtonValue)}
      role="button"
      tabIndex={0}
      onKeyPress={handleKeyPress}
    >
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
      <div className={styles.arrow}>
        <FontAwesomeIcon
          icon={isOpen && index === selectedIndex ? faChevronUp : faChevronDown}
          color={"gray"}
        />
      </div>
    </div>
  );
};

export default ClassItemForListItem;

import styles from "./QuantityChangeButtons.module.scss";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { QuantityChangeButtonsType } from "@/components/FlightSearch/QuantityChangeButtons/QuantityChangeButtonsType";
const QuantityChangeButtons = ({
  minusOnClick = () => {},
  plusOnClick = () => {},
  counter = 0,
}: QuantityChangeButtonsType) => {
  return (
    <div className={styles.quantityChangeButtons}>
      <button onClick={minusOnClick}>
        <FontAwesomeIcon
          icon={faMinus}
          color={"white"}
          data-testid={"minus-icon"}
        />
      </button>
      <span>{counter}</span>
      <button onClick={plusOnClick}>
        <FontAwesomeIcon
          icon={faPlus}
          color={"white"}
          data-testid={"plus-icon"}
        />
      </button>
    </div>
  );
};

export default QuantityChangeButtons;

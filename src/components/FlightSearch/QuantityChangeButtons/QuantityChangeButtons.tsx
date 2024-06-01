import styles from "./QuantityChangeButtons.module.scss";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const QuantityChangeButtons = ({
  minusOnClick = () => {},
  plusOnClick = () => {},
  counter = 0,
}: {
  minusOnClick: () => void;
  plusOnClick: () => void;
  counter: number;
}) => {
  return (
    <div className={styles.quantityChangeButtons}>
      <button onClick={minusOnClick}>
        <FontAwesomeIcon icon={faMinus} color={"white"} />
      </button>
      <span>{counter}</span>
      <button onClick={plusOnClick}>
        <FontAwesomeIcon icon={faPlus} color={"white"} />
      </button>
    </div>
  );
};

export default QuantityChangeButtons;

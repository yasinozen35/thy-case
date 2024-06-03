import styles from "./Switch.module.scss";
import { SwitchType } from "@/components/FlightList/PromotionCode/Switch/SwitchType";

const Switch = ({ text, checked = false, onClick = () => {} }: SwitchType) => {
  return (
    <div className={styles.switchContainer}>
      <span>{text}</span>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={styles.switch} htmlFor={"switch"}>
        <input
          type="checkbox"
          onChange={() => onClick(!checked)}
          checked={checked}
          id={"switch"}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default Switch;

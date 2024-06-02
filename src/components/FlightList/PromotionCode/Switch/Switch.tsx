import styles from "./Switch.module.scss";

const Switch = ({
  text,
  checked = false,
  onClick = () => {},
}: {
  text: string;
  checked: boolean;
  onClick: (value: boolean) => void;
}) => {
  return (
    <div className={styles.switchContainer}>
      <span>{text}</span>
      <label className={styles.switch} htmlFor={"switch"}>
        <input
          type="checkbox"
          onClick={() => onClick(!checked)}
          checked={checked}
          id={"switch"}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default Switch;

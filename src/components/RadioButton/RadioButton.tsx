import styles from "./RadioButton.module.scss";
const RadioButton = ({
  name = "",
  id = "",
  value = "",
  radioText = "",
  onClick = () => {},
  checked = false,
}: {
  name: string;
  id: string;
  value: string;
  radioText: string;
  onClick: (type: string) => void;
  checked: boolean;
}) => {
  return (
    <div className={styles.radioGroup}>
      <label htmlFor={id}>
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          onClick={() => onClick(value)}
          checked={checked}
        />
        {radioText}
      </label>
    </div>
  );
};

export default RadioButton;

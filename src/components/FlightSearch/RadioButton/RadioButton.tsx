import styles from "./RadioButton.module.scss";
import { inputType } from "@/utils/constants/consts";
import { RadioButtonType } from "@/components/FlightSearch/RadioButton/RadioButtonType";
const RadioButton = ({
  name = "",
  id = "",
  value = "",
  radioText = "",
  onClick = () => {},
  checked = false,
}: RadioButtonType) => {
  return (
    <div className={styles.radioGroup}>
      <label htmlFor={id}>
        <input
          type={inputType.RADIO}
          name={name}
          id={id}
          value={value}
          onChange={() => onClick(value)}
          checked={checked}
        />
        {radioText}
      </label>
    </div>
  );
};

export default RadioButton;

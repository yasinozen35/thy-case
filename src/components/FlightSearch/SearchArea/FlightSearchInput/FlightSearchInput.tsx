import styles from "./FlightSearchInput.module.scss";
const FlightSearchInput = ({
  icon,
  placeHolder,
}: {
  icon: React.ReactNode;
  placeHolder: string;
}) => {
  return (
    <div className={styles.inputContainer}>
      {icon}
      <input placeholder={placeHolder} />
    </div>
  );
};

export default FlightSearchInput;

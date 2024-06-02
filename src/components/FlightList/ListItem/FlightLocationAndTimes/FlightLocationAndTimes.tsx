import styles from "@/components/FlightList/ListItem/ListItem.module.scss";

const FlightLocationAndTimes = ({
  isAlignRight = false,
  time = "",
  cityShortCode = "",
  city = "",
}: {
  isAlignRight?: boolean;
  time: string;
  cityShortCode: string;
  city: string;
}) => {
  return (
    <div
      className={`${styles.flightLocationAndTimes} ${isAlignRight ? styles.rightAlign : ""}`}
    >
      <p>{time}</p>
      <div className={styles.cities}>
        <p>{cityShortCode}</p>
        <p>{city}</p>
      </div>
    </div>
  );
};

export default FlightLocationAndTimes;

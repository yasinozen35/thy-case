import styles from "@/components/FlightList/ListItem/ListItem.module.scss";
import { FlightLocationAndTimesType } from "@/components/FlightList/ListItem/FlightLocationAndTimes/FlightLocationAndTimesType";

const FlightLocationAndTimes = ({
  isAlignRight = false,
  time = "",
  cityShortCode = "",
  city = "",
}: FlightLocationAndTimesType) => {
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

"use client";

import styles from "./PassengerItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faPlus } from "@fortawesome/free-solid-svg-icons";

const PassengerItem = ({
  passengerOnClick = () => {},
  passengerCount = 0,
}: {
  passengerOnClick: () => void;
  passengerCount: number;
}) => {
  return (
    <div onClick={passengerOnClick} className={styles.passengerContainer}>
      <span className={styles.count}>{passengerCount}</span>
      <div className={styles.passengers}>
        {[...Array(passengerCount)]
          .slice(0, 4)
          .map((_, index) =>
            index < 3 ? (
              <FontAwesomeIcon
                key={index}
                icon={faPerson}
                color={"white"}
                opacity={index === 2 ? "0.5" : "1"}
              />
            ) : (
              <FontAwesomeIcon
                icon={faPlus}
                key={index}
                color={"white"}
                opacity={"0.5"}
              />
            ),
          )}
      </div>
    </div>
  );
};

export default PassengerItem;

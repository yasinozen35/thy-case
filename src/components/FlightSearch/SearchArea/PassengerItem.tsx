"use client";

import styles from "./SearchArea.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const PassengerItem = () => {
  const [passengers, setPassengers] = useState<{ person: string }[]>([]);
  setInterval(() => {
    setPassengers([...passengers, { person: "yasin" }]);

    if (passengers.length === 5) {
      setPassengers([]);
    }
  }, 1000);
  return (
    <div className={`${styles.blankBlock} ${styles.passengerContainer}`}>
      <span className={styles.count}>{passengers.length}</span>
      <div className={styles.passengers}>
        {passengers
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

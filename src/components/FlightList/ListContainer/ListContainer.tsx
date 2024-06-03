"use client";

import styles from "./ListContainer.module.scss";
import ListItem from "@/components/FlightList/ListItem/ListItem";
import { DictType } from "@/utils/types/commonTypes";
import { useEffect, useState } from "react";
import { flightClass } from "@/utils/constants/consts";
import PromotionCodeApply from "@/components/FlightList/PromotionCode/PromotionCodeApply/PromotionCodeApply";
import { useFlights } from "@/contexts/FlightContext";
import { formattedFlightList } from "@/utils/hooks/formattedFlightList";
import { FormattedFlightData } from "@/utils/types/flightTypes";

const ListContainer = ({ dict }: { dict: DictType }) => {
  const [selectedClass, setSelectedClass] = useState<string>(
    flightClass.ECONOMY,
  );
  const [selectedIndex, setSelectedIndex] = useState<string>("0");
  const [flightList, setFlightList] = useState<FormattedFlightData[]>([]);
  const { flights } = useFlights();

  useEffect(() => {
    if (flights.length) {
      setFlightList(formattedFlightList(flights));
      console.log("formattedFlightList(flights)", formattedFlightList(flights));
    }
  }, [flights]);

  return (
    <div className={styles.listContainer}>
      <PromotionCodeApply dict={dict} />
      <div className={styles.listContainerHeader}>
        <div className={styles.listContainerHeaderFilters}>
          <p>{dict.list_sorting_criteria}</p>
          <div className={styles.buttons}>
            <button>{dict.list_economy_fare}</button>
            <button>{dict.list_departure_time}</button>
          </div>
        </div>
      </div>
      <div className={styles.listContainerBody}>
        {flightList.map((flight, index) => (
          <ListItem
            key={index}
            flightInfo={flight}
            dict={dict}
            index={index.toString()}
            setSelectedClass={(classText) => setSelectedClass(classText)}
            selectedClass={selectedClass}
            setSelectedIndex={(index) => setSelectedIndex(index)}
            selectedIndex={selectedIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default ListContainer;

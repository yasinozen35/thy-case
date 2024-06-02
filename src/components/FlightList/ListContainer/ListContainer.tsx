"use client";

import styles from "./ListContainer.module.scss";
import ListItem from "@/components/FlightList/ListItem/ListItem";
import { DictType } from "@/utils/types/commonTypes";
import { useState } from "react";
import { flightClass } from "@/utils/constants/consts";
import PromotionCodeApply from "@/components/FlightList/PromotionCode/PromotionCodeApply/PromotionCodeApply";
const ListContainer = ({ dict }: { dict: DictType }) => {
  const [selectedClass, setSelectedClass] = useState<string>(
    flightClass.ECONOMY,
  );
  const [selectedIndex, setSelectedIndex] = useState<string>("0");
  const flightList = [
    {
      start: {
        time: "01:25",
        cityShortCode: "IST",
        city: "İstanbul",
      },
      finish: {
        time: "02:45",
        cityShortCode: "AYT",
        city: "Antalya",
      },
      totalTime: "1s 30d",
    },
    {
      start: {
        time: "01:25",
        cityShortCode: "IST",
        city: "İstanbul",
      },
      finish: {
        time: "02:45",
        cityShortCode: "AYT",
        city: "Antalya",
      },
      totalTime: "1s 30d",
    },
    {
      start: {
        time: "01:25",
        cityShortCode: "IST",
        city: "İstanbul",
      },
      finish: {
        time: "02:45",
        cityShortCode: "AYT",
        city: "Antalya",
      },
      totalTime: "1s 30d",
    },
  ];
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

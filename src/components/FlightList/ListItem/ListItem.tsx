"use client";

import styles from "./ListItem.module.scss";
import FlightLocationAndTimes from "@/components/FlightList/ListItem/FlightLocationAndTimes/FlightLocationAndTimes";
import ClassItemForListItem from "@/components/FlightList/ClassItemForListItem/ClassItemForListItem";
import ListItemCard from "@/components/FlightList/ListItemCard/ListItemCard";
import { flightClass } from "@/utils/constants/consts";
import { DictType } from "@/utils/types/commonTypes";

const ListItem = ({
  flightInfo,
  dict,
  index,
  selectedIndex = "",
  setSelectedIndex = () => {},
  selectedClass = "",
  setSelectedClass = () => {},
}: {
  flightInfo: {
    start: {
      time: string;
      cityShortCode: string;
      city: string;
    };
    finish: {
      time: string;
      cityShortCode: string;
      city: string;
    };
    totalTime: string;
  };
  dict: DictType;
  index: string;
  selectedIndex: string;
  selectedClass: string;
  setSelectedClass: (value: string) => void;
  setSelectedIndex: (value: string) => void;
}) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.listItemHorizontal}>
        <div className={styles.listItemFlightInfo}>
          <FlightLocationAndTimes
            time={flightInfo.start.time}
            cityShortCode={flightInfo.start.cityShortCode}
            city={flightInfo.start.city}
          />
          <div className={styles.roadLine}>
            <hr />
          </div>
          <FlightLocationAndTimes
            time={flightInfo.finish.time}
            isAlignRight={true}
            cityShortCode={flightInfo.finish.cityShortCode}
            city={flightInfo.finish.city}
          />
          <div className={styles.flightTotalTime}>
            <p>{dict.list_flight_time}</p>
            <p>{flightInfo.totalTime}</p>
          </div>
        </div>
        <ClassItemForListItem
          radioButtonName={`flightClass${index}`}
          radioButtonText={"ECONOMY"}
          radioButtonValue={flightClass.ECONOMY}
          priceText={dict.list_per_passenger}
          price={"135"}
          isOpen={selectedClass === flightClass.ECONOMY}
          checked={selectedClass === flightClass.ECONOMY}
          onClick={(value) => {
            setSelectedClass(value);
            setSelectedIndex(index);
          }}
          selectedIndex={selectedIndex}
          index={index}
        />
        <ClassItemForListItem
          radioButtonName={`flightClass${index}`}
          radioButtonText={"BUSINESS"}
          radioButtonValue={flightClass.BUSINESS}
          priceText={dict.list_per_passenger}
          price={"435"}
          isOpen={selectedClass === flightClass.BUSINESS}
          checked={selectedClass === flightClass.BUSINESS}
          onClick={(value) => {
            setSelectedClass(value);
            setSelectedIndex(index);
          }}
          selectedIndex={selectedIndex}
          index={index}
        />
      </div>
      {selectedIndex === index && (
        <div className={styles.flightCabins}>
          <ListItemCard
            headerTitleText={"Eco Fly"}
            price={"137"}
            cabinFeatures={[
              { value: "15 kg bagaj" },
              { value: "15 kg bagaj" },
              { value: "15 kg bagaj" },
              { value: "15 kg bagaj" },
            ]}
            buttonText={dict.list_select_flight}
          />
        </div>
      )}
    </div>
  );
};

export default ListItem;

"use client";

import styles from "./ListItem.module.scss";
import FlightLocationAndTimes from "@/components/FlightList/ListItem/FlightLocationAndTimes/FlightLocationAndTimes";
import ClassItemForListItem from "@/components/FlightList/ClassItemForListItem/ClassItemForListItem";
import ListItemCard from "@/components/FlightList/ListItemCard/ListItemCard";
import { FARE_CATEGORY_NAMES, flightClass } from "@/utils/constants/consts";
import { Subcategory } from "@/utils/types/flightTypes";
import { useEffect, useState, useMemo, useCallback } from "react";
import { ListItemType } from "@/components/FlightList/ListItem/ListItemType";

const ListItem = ({
  flightInfo,
  dict,
  index,
  selectedIndex = "",
  setSelectedIndex = () => {},
  selectedClass = "",
  setSelectedClass = () => {},
  usePromotion = false,
}: ListItemType) => {
  const [fareSubCategories, setFareSubCategories] = useState<Subcategory[]>();
  const radioButtonName = `flightClass${index}`;

  const buttonDisabledControl = useCallback(
    (brand: string) => {
      return brand !== FARE_CATEGORY_NAMES.ECO_FLY && usePromotion;
    },
    [usePromotion],
  );

  useEffect(() => {
    if (!selectedClass || !flightInfo || !flightInfo.fareCategories) return;

    const key = selectedClass === flightClass.ECONOMY ? "ECONOMY" : "BUSINESS";
    const selectedFareCategories = flightInfo.fareCategories[key] || {
      subcategories: [],
    };

    setFareSubCategories(selectedFareCategories.subcategories);
  }, [selectedClass, flightInfo]);

  const handleClassItemClick = useCallback(
    (value: string) => {
      setSelectedClass(value);
      setSelectedIndex(index);
    },
    [setSelectedClass, setSelectedIndex, index],
  );

  const memoizedFareSubCategories = useMemo(() => {
    return fareSubCategories?.map((item) => (
      <ListItemCard
        key={item.brandCode}
        headerTitleText={item.brandCode}
        price={item.price.amount.toString()}
        currencyCode={item.price.currency}
        cabinFeatures={item.rights.map((rightItem) => {
          return { value: rightItem };
        })}
        buttonText={dict.list_select_flight}
        status={item.status}
        buttonDisabled={buttonDisabledControl(item.brandCode)}
      />
    ));
  }, [fareSubCategories, dict, buttonDisabledControl]);

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
          radioButtonName={radioButtonName}
          radioButtonText={"ECONOMY"}
          radioButtonValue={flightClass.ECONOMY}
          priceText={dict.list_per_passenger}
          price={flightInfo.economyMinPrice.toString()}
          isOpen={selectedClass === flightClass.ECONOMY}
          checked={selectedClass === flightClass.ECONOMY}
          onClick={handleClassItemClick}
          selectedIndex={selectedIndex}
          index={index}
        />
        <ClassItemForListItem
          radioButtonName={radioButtonName}
          radioButtonText={"BUSINESS"}
          radioButtonValue={flightClass.BUSINESS}
          priceText={dict.list_per_passenger}
          price={flightInfo.businessMinPrice.toString()}
          isOpen={selectedClass === flightClass.BUSINESS}
          checked={selectedClass === flightClass.BUSINESS}
          onClick={handleClassItemClick}
          selectedIndex={selectedIndex}
          index={index}
        />
      </div>
      {selectedIndex === index && fareSubCategories?.length && (
        <div className={styles.flightCabins}>{memoizedFareSubCategories}</div>
      )}
    </div>
  );
};

export default ListItem;

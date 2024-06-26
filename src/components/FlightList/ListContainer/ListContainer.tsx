"use client";

import styles from "./ListContainer.module.scss";
import ListItem from "@/components/FlightList/ListItem/ListItem";
import { PageDictType } from "@/utils/types/commonTypes";
import { useEffect, useState, useMemo, useCallback } from "react";
import { flightClass, LOCAL_STORAGE_KEYS } from "@/utils/constants/consts";
import PromotionCodeApply from "@/components/FlightList/PromotionCode/PromotionCodeApply/PromotionCodeApply";
import { useFlights } from "@/contexts/FlightContext";
import { formattedFlightList } from "@/utils/hooks/formattedFlightList";
import { FormattedFlightData } from "@/utils/types/flightTypes";
import { sortFlightsByDepartureTime } from "@/utils/hooks/sortFlightsByDepartureTime";
import { sortFlightsByPrice } from "@/utils/hooks/sortFlightsByPrice";
import { getPriceKey } from "@/utils/hooks/getPriceKey";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ListContainer = ({ dict }: PageDictType) => {
  const [selectedClass, setSelectedClass] = useState<string>(
    flightClass.ECONOMY,
  );
  const [selectedPassengerCount, setSelectedPassengerCount] =
    useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState<string>("0");
  const [flightList, setFlightList] = useState<FormattedFlightData[]>([]);
  const [isMinPriceSorting, setIsMinPriceSorting] = useState<boolean | null>(
    null,
  );
  const [isStartTimeSorting, setIsStartTimeSorting] = useState<boolean | null>(
    null,
  );
  const [usePromotionCode, setUsePromotionCode] = useState<boolean>(false);

  const { flights } = useFlights();

  const getSortedFlights = useCallback(
    (
      flights: FormattedFlightData[],
      selectedClass: string,
      isMinPriceSorting: boolean,
    ) => {
      const key = getPriceKey(selectedClass);
      return sortFlightsByPrice(flights, key, isMinPriceSorting);
    },
    [],
  );

  const sortFilterPrice = useCallback(() => {
    if (isMinPriceSorting !== null) {
      setFlightList(
        getSortedFlights(
          formattedFlightList(flights),
          selectedClass,
          isMinPriceSorting,
        ),
      );
    }
  }, [isMinPriceSorting, flights, getSortedFlights]);

  const handlePromotionCodeApplyClick = useCallback((value: boolean) => {
    setUsePromotionCode(value);
  }, []);

  const handleMinPriceSortingClick = useCallback(() => {
    setIsMinPriceSorting(
      isMinPriceSorting !== null ? !isMinPriceSorting : false,
    );
  }, [isMinPriceSorting]);

  const handleStartTimeSortingClick = useCallback(() => {
    setIsStartTimeSorting(
      isStartTimeSorting !== null ? !isStartTimeSorting : true,
    );
  }, [isStartTimeSorting]);

  useEffect(() => {
    setIsStartTimeSorting(null);
    if (isMinPriceSorting !== null) sortFilterPrice();
  }, [isMinPriceSorting, sortFilterPrice]);

  useEffect(() => {
    setIsMinPriceSorting(null);
    if (isStartTimeSorting !== null) {
      const sortedFlightsAscending = sortFlightsByDepartureTime(
        formattedFlightList(flights),
        isStartTimeSorting,
      );
      setFlightList(sortedFlightsAscending);
    }
  }, [isStartTimeSorting, flights]);

  useEffect(() => {
    if (flights.length) {
      if (
        selectedClass === flightClass.ECONOMY &&
        selectedPassengerCount === "1"
      ) {
        const minEconomyPriceSorting = formattedFlightList(flights).sort(
          (a, b) => a.economyMinPrice - b.economyMinPrice,
        );
        setFlightList(minEconomyPriceSorting);
      } else {
        setFlightList(formattedFlightList(flights));
      }
    }
  }, [flights, selectedPassengerCount]);

  useEffect(() => {
    const savedClass = localStorage.getItem(
      LOCAL_STORAGE_KEYS.SELECTED_PASSENGER_CLASS,
    );
    const savedPassengerCount = localStorage.getItem(
      LOCAL_STORAGE_KEYS.SELECTED_PASSENGER_COUNT,
    );
    setSelectedClass(savedClass || flightClass.ECONOMY);
    setSelectedPassengerCount(savedPassengerCount || "0");
  }, []);

  const memoizedFlightList = useMemo(() => {
    return flightList.map((flight, index) => (
      <ListItem
        key={index}
        flightInfo={flight}
        dict={dict}
        index={index.toString()}
        setSelectedClass={setSelectedClass}
        selectedClass={selectedClass}
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
        usePromotion={usePromotionCode}
      />
    ));
  }, [flightList, dict, selectedClass, selectedIndex, usePromotionCode]);

  const priceMinMaxIcon = useMemo(() => {
    return isMinPriceSorting ? faChevronDown : faChevronUp;
  }, [isMinPriceSorting]);

  const startTimeMinMaxIcon = useMemo(() => {
    return isStartTimeSorting ? faChevronDown : faChevronUp;
  }, [isStartTimeSorting]);

  return (
    <article className={styles.listContainer}>
      <PromotionCodeApply
        dict={dict}
        checked={usePromotionCode}
        onClick={handlePromotionCodeApplyClick}
      />
      <div className={styles.listContainerHeader}>
        <div className={styles.listContainerHeaderFilters}>
          <p>{dict.list_sorting_criteria}</p>
          <div className={styles.buttons}>
            <button onClick={handleMinPriceSortingClick}>
              {dict.list_economy_fare}{" "}
              {isMinPriceSorting !== null && (
                <FontAwesomeIcon icon={priceMinMaxIcon} color={"gray"} />
              )}
            </button>
            <button onClick={handleStartTimeSortingClick}>
              {dict.list_departure_time}{" "}
              {isStartTimeSorting !== null && (
                <FontAwesomeIcon icon={startTimeMinMaxIcon} color={"gray"} />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.listContainerBody}>{memoizedFlightList}</div>
    </article>
  );
};

export default ListContainer;

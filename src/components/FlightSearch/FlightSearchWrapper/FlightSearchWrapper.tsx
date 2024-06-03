"use client";

import { DictType } from "@/utils/types/commonTypes";
import FlightSearchInput from "@/components/FlightSearch/FlightSearchInput/FlightSearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./FlightSearchWrapper.module.scss";
import {
  faPlaneDeparture,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";
import CalendarItem from "@/components/FlightSearch/Calendar/CalendarItem";
import PassengerItem from "@/components/FlightSearch/Passenger/PassengerItem";
import SearchButton from "@/components/FlightSearch/SearchButton/SearchButton";
import PassengerDropdown from "@/components/FlightSearch/PassengerDropdown/PassengerDropdown";
import { useEffect, useState } from "react";
import {
  airportTerms,
  flightClass,
  LOCAL_STORAGE_KEYS,
} from "@/utils/constants/consts";
import { useRouter, usePathname } from "next/navigation";
import { editedPathName } from "@/utils/hooks/usePathWithLanguage";
import { ROUTE } from "@/utils/constants/routes";
import { useFlights } from "@/contexts/FlightContext";
import { useUniqueAirports } from "@/utils/hooks/useUniqueAirports";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const FlightSearchWrapper = ({ dict }: { dict: DictType }) => {
  const router = useRouter();
  const pathName = usePathname();
  const [showPassengerDropdown, setShowPassengerDropdown] =
    useState<boolean>(false);
  const [selectedPassengerCount, setSelectedPassengerCount] =
    useState<number>(1);
  const [selectedPassengerClass, setSelectedPassengerClass] = useState<string>(
    flightClass.ECONOMY,
  );
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

  const { flights } = useFlights();
  const { originAirports, destinationAirports } = useUniqueAirports(flights);
  const flightSearchInputs = [
    {
      options: originAirports,
      icon: (
        <FontAwesomeIcon icon={faPlaneArrival} width={"15px"} height={"15px"} />
      ),
      placeHolder: dict.query_from,
      name: airportTerms.ORIGIN_AIRPORTS,
    },
    {
      options: destinationAirports,
      icon: (
        <FontAwesomeIcon
          icon={faPlaneDeparture}
          width={"15px"}
          height={"15px"}
        />
      ),
      placeHolder: dict.query_to,
      name: airportTerms.DESTINATION_AIRPORTS,
    },
  ];

  const redirectListingPage = () => {
    const originAirportJson = localStorage.getItem(
      LOCAL_STORAGE_KEYS.ORIGIN_AIRPORTS,
    );
    const destinationAirportJson = localStorage.getItem(
      LOCAL_STORAGE_KEYS.DESTINATION_AIRPORTS,
    );

    const originAirport = originAirportJson
      ? JSON.parse(originAirportJson)
      : null;
    const destinationAirport = destinationAirportJson
      ? JSON.parse(destinationAirportJson)
      : null;

    if (originAirport && destinationAirport) {
      router.push(editedPathName(pathName, ROUTE.flightList));
    } else {
      setShowErrorModal(true);
    }
  };

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.SELECTED_PASSENGER_CLASS,
      flightClass.ECONOMY,
    );
    localStorage.setItem(LOCAL_STORAGE_KEYS.SELECTED_PASSENGER_COUNT, "1");
    localStorage.setItem(LOCAL_STORAGE_KEYS.SELECTED_CABIN, "");
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ORIGIN_AIRPORTS);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.DESTINATION_AIRPORTS);
  }, []);

  return (
    <div className={styles.container}>
      {flightSearchInputs.map((item, index) => (
        <FlightSearchInput {...item} key={item.name + index} />
      ))}
      <div className={styles.group}>
        <CalendarItem dict={dict} />
        <PassengerItem
          passengerOnClick={() => setShowPassengerDropdown(true)}
          passengerCount={selectedPassengerCount}
        />
        <SearchButton onClick={() => redirectListingPage()} />
        {showPassengerDropdown && (
          <PassengerDropdown
            dict={dict}
            selectedClass={selectedPassengerClass}
            selectedPassengerCount={selectedPassengerCount}
            setSelectedPassengerClass={(value) => {
              setSelectedPassengerClass(value);
              localStorage.setItem(
                LOCAL_STORAGE_KEYS.SELECTED_PASSENGER_CLASS,
                value,
              );
            }}
            setSelectedPassengerCount={(count) => {
              setSelectedPassengerCount(count);
              localStorage.setItem(
                LOCAL_STORAGE_KEYS.SELECTED_PASSENGER_COUNT,
                count.toString(),
              );
            }}
            closeDropDownTrigger={() => setShowPassengerDropdown(false)}
          />
        )}
      </div>

      <Modal open={showErrorModal} onClose={() => setShowErrorModal(false)}>
        <p>{dict.query_error_message}</p>
      </Modal>
    </div>
  );
};

export default FlightSearchWrapper;

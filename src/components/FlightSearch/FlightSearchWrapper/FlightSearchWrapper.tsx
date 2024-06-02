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
import { useState } from "react";
import { flightClass } from "@/utils/constants/consts";
import { useRouter, usePathname } from "next/navigation";
import { editedPathName } from "@/utils/hooks/usePathWithLanguage";
import { ROUTE } from "@/utils/constants/routes";

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

  const flightSearchInputs = [
    {
      options: [
        { key: "2sadasd", value: "2tasdada" },
        { key: "1sadasd", value: "tasdada" },
      ],
      icon: (
        <FontAwesomeIcon icon={faPlaneArrival} width={"15px"} height={"15px"} />
      ),
      placeHolder: dict.query_from,
    },
    {
      options: [
        { key: "sadasd", value: "tasdada" },
        { key: "sadasd", value: "tasdada" },
      ],
      icon: (
        <FontAwesomeIcon
          icon={faPlaneDeparture}
          width={"15px"}
          height={"15px"}
        />
      ),
      placeHolder: dict.query_to,
    },
  ];

  return (
    <div className={styles.container}>
      {flightSearchInputs.map((item, index) => (
        <FlightSearchInput key={index} {...item} />
      ))}
      <div className={styles.group}>
        <CalendarItem dict={dict} />
        <PassengerItem
          passengerOnClick={() => setShowPassengerDropdown(true)}
          passengerCount={selectedPassengerCount}
        />
        <SearchButton
          onClick={() =>
            router.push(editedPathName(pathName, ROUTE.flightList))
          }
        />
        {showPassengerDropdown && (
          <PassengerDropdown
            dict={dict}
            selectedClass={selectedPassengerClass}
            selectedPassengerCount={selectedPassengerCount}
            setSelectedPassengerClass={(value) =>
              setSelectedPassengerClass(value)
            }
            setSelectedPassengerCount={(count) =>
              setSelectedPassengerCount(count)
            }
            closeDropDownTrigger={() => setShowPassengerDropdown(false)}
          />
        )}
      </div>
    </div>
  );
};

export default FlightSearchWrapper;

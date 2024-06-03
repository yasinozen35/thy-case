"use client";

import styles from "./FlightResult.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
  FLIGHT_RESULT_PROCESS,
  LOCAL_STORAGE_KEYS,
} from "@/utils/constants/consts";
import { editedPathName } from "@/utils/hooks/usePathWithLanguage";
import { ROUTE } from "@/utils/constants/routes";
import { usePathname, useRouter } from "next/navigation";
import { FlightResultType } from "@/components/FlightResult/FlightResultType";

const FlightResult = ({ dict, cabinSlug }: FlightResultType) => {
  const router = useRouter();
  const pathName = usePathname();

  const [price, setPrice] = useState<string>("0");
  const [currency, setCurrency] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    const priceValue =
      localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_CABIN) || "0";
    const currencyCode =
      localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_CABIN_CURRENCY) || "";

    setCurrency(currencyCode);
    setPrice(priceValue);

    setIsCompleted(cabinSlug === FLIGHT_RESULT_PROCESS.COMPLETED);
  }, []);

  return (
    <div className={styles.flightResult}>
      <div className={styles.flightResultContainer}>
        <div className={styles.flightResultText}>
          <FontAwesomeIcon
            icon={isCompleted ? faCircleCheck : faCircleXmark}
            color={isCompleted ? "green" : "red"}
            size={"2x"}
            width={"30px"}
          />
          <b>{isCompleted ? dict.result_success : dict.result_error}</b>
        </div>
      </div>
      {isCompleted ? (
        <div className={styles.prices}>
          <h1>{dict.result_total_amount}</h1>
          <h1>
            {currency} {price}
          </h1>
        </div>
      ) : (
        <div className={styles.redirectButton}>
          <button
            onClick={() => router.push(editedPathName(pathName, ROUTE.base))}
          >
            {dict.result_go_back}
          </button>
        </div>
      )}
    </div>
  );
};

export default FlightResult;

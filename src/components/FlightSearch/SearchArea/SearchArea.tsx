import { DictType } from "@/utils/types/commonTypes";
import FlightSearchInput from "@/components/FlightSearch/SearchArea/FlightSearchInput/FlightSearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SearchArea.module.scss";
import {
  faPlaneDeparture,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";
import CalendarItem from "@/components/FlightSearch/SearchArea/CalendarItem";
import PassengerItem from "@/components/FlightSearch/SearchArea/PassengerItem";

const SearchArea = ({ dict }: { dict: DictType }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <FlightSearchInput
          options={[
            { key: "sadasd", value: "tasdada" },
            { key: "sadasd", value: "tasdada" },
          ]}
          icon={
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              width={"15px"}
              height={"15px"}
            />
          }
          placeHolder={dict.query_from}
        />
        <FlightSearchInput
          options={[
            { key: "2sadasd", value: "2tasdada" },
            { key: "1sadasd", value: "tasdada" },
          ]}
          icon={
            <FontAwesomeIcon
              icon={faPlaneArrival}
              width={"15px"}
              height={"15px"}
            />
          }
          placeHolder={dict.query_to}
        />

        <CalendarItem dict={dict} />
        <PassengerItem />
      </div>
    </div>
  );
};

export default SearchArea;

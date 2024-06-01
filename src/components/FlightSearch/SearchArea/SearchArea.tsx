import { DictType } from "@/utils/types/commonTypes";
import FlightSearchInput from "@/components/FlightSearch/SearchArea/FlightSearchInput/FlightSearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";

const SearchArea = ({ dict }: { dict: DictType }) => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <FlightSearchInput
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
        icon={
          <FontAwesomeIcon
            icon={faPlaneArrival}
            width={"15px"}
            height={"15px"}
          />
        }
        placeHolder={dict.query_to}
      />
    </div>
  );
};

export default SearchArea;

import styles from "./SearchArea.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { DictType } from "@/utils/types/commonTypes";

const CalendarItem = ({ dict }: { dict: DictType }) => {
  return (
    <div className={`${styles.blankBlock} ${styles.calendar}`}>
      <span>{dict.query_date}</span>
      <FontAwesomeIcon icon={faCalendar} color={"white"} width={"17px"} />
    </div>
  );
};

export default CalendarItem;

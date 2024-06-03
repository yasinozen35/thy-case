import styles from "./CalendarItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { PageDictType } from "@/utils/types/commonTypes";

const CalendarItem = ({ dict }: PageDictType) => {
  return (
    <div className={styles.calendar}>
      <span>{dict.query_date}</span>
      <FontAwesomeIcon
        icon={faCalendar}
        color={"white"}
        width={"17px"}
        data-testid="calendar-icon"
      />
    </div>
  );
};

export default CalendarItem;

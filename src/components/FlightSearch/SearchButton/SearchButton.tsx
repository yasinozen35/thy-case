import styles from "./SearchButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const SearchButton = ({ onClick = () => {} }: { onClick: () => void }) => {
  return (
    <button className={styles.searchButton} onClick={onClick}>
      <FontAwesomeIcon
        icon={faChevronRight}
        color={"white"}
        width="10px"
        height={"13px"}
      />
    </button>
  );
};

export default SearchButton;

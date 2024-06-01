import styles from "./SearchButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const SearchButton = () => {
  return (
    <button className={styles.searchButton}>
      <FontAwesomeIcon icon={faChevronRight} color={"white"} width="10px" />
    </button>
  );
};

export default SearchButton;

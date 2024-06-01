import Link from "next/link";
import styles from "./FlightSearchHeader.module.scss";
const FlightSearchHeader = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link href={"/test"}>turkishairlines.com</Link>
        </li>
        <li>
          <span>search</span>
          <Link href={"/test"}>Flight Challenge</Link>
        </li>
      </ul>
    </header>
  );
};

export default FlightSearchHeader;

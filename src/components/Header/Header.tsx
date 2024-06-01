import Link from "next/link";
import styles from "./Header.module.scss";
import { link } from "@/utils/constants/consts";
import { DictType } from "@/utils/types/commonTypes";

const Header = ({ dict }: { dict: DictType }) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>{link}</Link>
          </li>
          <li>
            <span>{dict.header_search}</span>
            <Link href={"/test"}>{dict.header_flight_challenge}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

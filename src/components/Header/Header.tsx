"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { link } from "@/utils/constants/consts";
import { DictType } from "@/utils/types/commonTypes";
import { usePathname } from "next/navigation";
import { ROUTE } from "@/utils/constants/routes";

const Header = ({ dict }: { dict: DictType }) => {
  const pathName = usePathname();

  return (
    <header
      className={`${styles.header} ${pathName.includes(ROUTE.flightList) || pathName.includes(ROUTE.flightCabinSelected) ? styles.dark : ""}`}
    >
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

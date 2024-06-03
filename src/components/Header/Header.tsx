"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { link } from "@/utils/constants/consts";
import { DictType } from "@/utils/types/commonTypes";
import { usePathname, useRouter } from "next/navigation";
import { ROUTE } from "@/utils/constants/routes";
import { editedPathName } from "@/utils/hooks/usePathWithLanguage";

const Header = ({ dict }: { dict: DictType }) => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <>
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
      <div className={styles.changeLanguage}>
        <button onClick={() => router.push(ROUTE.enBase)}>EN</button>
        <button onClick={() => router.push(ROUTE.base)}>TR</button>
      </div>
    </>
  );
};

export default Header;

"use client";
import styles from "./Titles.module.scss";
import { PageDictType } from "@/utils/types/commonTypes";

const Titles = ({ dict }: PageDictType) => {
  return (
    <div className={styles.titles}>
      <h2>{dict.query_title}</h2>
      <h3>{dict.query_content}</h3>
    </div>
  );
};

export default Titles;

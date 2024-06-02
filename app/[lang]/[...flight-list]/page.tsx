import styles from "../page.module.scss";
import Header from "@/components/Header/Header";
import { getDictionary } from "@/dictionaries/dictionaries";
import { PageParamsType } from "@/utils/types/commonTypes";
import TextLabel from "@/components/FlightList/TextLabel/TextLabel";
import ListContainer from "@/components/FlightList/ListContainer/ListContainer";

const FlightList = async (page: PageParamsType) => {
  const { lang } = page.params;
  const dict = await getDictionary(lang);

  return (
    <main className={styles.flightListMain}>
      <Header dict={dict} />
      <div className={styles.flightList}>
        <div className={styles.flightListHeader}>
          <TextLabel text={dict.list_flight} />
          <h1>İstanbul - Antalya, 6 {dict.list_passenger}</h1>
        </div>
        <ListContainer dict={dict} />
      </div>
    </main>
  );
};

export default FlightList;

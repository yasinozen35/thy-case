import styles from "../page.module.scss";
import Header from "@/components/Header/Header";
import { getDictionary } from "@/dictionaries/dictionaries";
import { PageParamsType } from "@/utils/types/commonTypes";
import TextLabel from "@/components/FlightList/TextLabel/TextLabel";
import ListContainer from "@/components/FlightList/ListContainer/ListContainer";
import { PageTitle } from "@/components/FlightList/PageTitle/PageTitle";

const FlightList = async (page: PageParamsType) => {
  const { lang } = page.params;
  const dict = await getDictionary(lang);

  return (
    <main className={styles.flightListMain}>
      <Header dict={dict} />
      <article className={styles.flightList}>
        <section className={styles.flightListHeader}>
          <TextLabel text={dict.list_flight} />
          <PageTitle dict={dict} />
        </section>
        <ListContainer dict={dict} />
      </article>
    </main>
  );
};

export default FlightList;

import { PageParamsType } from "@/utils/types/commonTypes";
import { getDictionary } from "@/dictionaries/dictionaries";
import styles from "../../page.module.scss";
import Header from "@/components/Header/Header";
import FlightResult from "@/components/FlightResult/FlightResult";

const CabinSelection = async (page: PageParamsType) => {
  const { lang, cabinSlug } = page.params;
  const dict = await getDictionary(lang);
  return (
    <main className={styles.flightResultMain}>
      <Header dict={dict} />
      <article className={styles.flightResult}>
        <div className={styles.flightResult}>
          <FlightResult cabinSlug={cabinSlug} dict={dict} />
        </div>
      </article>
    </main>
  );
};

export default CabinSelection;

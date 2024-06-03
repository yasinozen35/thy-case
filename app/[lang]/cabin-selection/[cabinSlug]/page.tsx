import { PageParamsType } from "@/utils/types/commonTypes";
import { getDictionary } from "@/dictionaries/dictionaries";
import styles from "../../page.module.scss";
import Header from "@/components/Header/Header";

const CabinSelection = async (page: PageParamsType) => {
  const { lang, cabinSlug } = page.params;
  const dict = await getDictionary(lang);
  return (
    <main className={styles.flightListMain}>
      <Header dict={dict} />
      <div className={styles.flightList}>
        {cabinSlug === "completed" ? dict.result_success : dict.result_error}
      </div>
    </main>
  );
};

export default CabinSelection;

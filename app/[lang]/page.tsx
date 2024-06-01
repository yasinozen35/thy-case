import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import Titles from "@/components/FlightSearch/Titles/Titles";
import { getDictionary } from "app/[lang]/dictionaries";
import SearchInputs from "@/components/FlightSearch/SearchArea/SearchArea";

export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const dict = await getDictionary(lang);

  return (
    <main className={styles.main}>
      <Header dict={dict} />
      <div className={styles.flightSearch}>
        <Titles dict={dict} />
        <SearchInputs dict={dict} />
      </div>
    </main>
  );
}

// import colorVariables from '@/styles/color-variables.module.scss';
import styles from "./page.module.scss";
import FlightSearchHeader from "@/components/FlightSearch/FlightSearchHeader/FlightSearchHeader";
import FlightSearchMiddle from "@/components/FlightSearch/FlightSearchMiddle/FlightSearchMiddle";
import { getDictionary } from "app/[lang]/dictionaries";

export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const dict = await getDictionary(lang); // en

  return (
    <main className={styles.main}>
      <FlightSearchHeader />
      <div className={styles.flightSearchMiddle}>
        <FlightSearchMiddle dict={dict} />
      </div>
    </main>
  );
}

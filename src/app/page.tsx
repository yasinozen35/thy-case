// import colorVariables from '@/styles/color-variables.module.scss';
import FlightSearch from "@/components/FlightSearch/FlightSearch";
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
        <FlightSearch />
    </main>
  );
}

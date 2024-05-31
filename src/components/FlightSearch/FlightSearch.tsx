import FlightSearchHeader from "@/components/FlightSearch/FlightSearchHeader/FlightSearchHeader";
import FlightSearchMiddle from "@/components/FlightSearch/FlightSearchMiddle/FlightSearchMiddle";
import styles from './FlightSearch.module.scss';

const FlightSearch = () => {
    return (
        <>
            <FlightSearchHeader />
            <div className={styles.flightSearchMiddle}>
                <FlightSearchMiddle />
            </div>
        </>
    )
}

export default FlightSearch;

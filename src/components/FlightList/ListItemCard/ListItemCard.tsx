import styles from "./ListItemCard.module.scss";
import { LOCAL_STORAGE_KEYS, STATUS } from "@/utils/constants/consts";
import { usePathname, useRouter } from "next/navigation";
import { editedPathName } from "@/utils/hooks/usePathWithLanguage";
import { ROUTE } from "@/utils/constants/routes";

const ListItemCard = ({
  headerTitleText = "",
  currencyCode = "TRY",
  price = "0",
  cabinFeatures = [],
  buttonText = "",
  status = "",
  buttonDisabled = false,
}: {
  headerTitleText: string;
  currencyCode?: string;
  price: string;
  cabinFeatures: {
    value: string;
  }[];
  buttonText: string;
  status: string;
  buttonDisabled: boolean;
}) => {
  const router = useRouter();
  const pathName = usePathname();

  const cabinSelection = () => {
    if (status === STATUS.AVAILABLE) {
      const passengerCount =
        localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_PASSENGER_COUNT) ||
        "0";

      const passengerCountNumber = parseFloat(passengerCount);
      const priceNumber = parseFloat(price);

      const finalPrice = passengerCountNumber * priceNumber;

      localStorage.setItem(
        LOCAL_STORAGE_KEYS.SELECTED_CABIN,
        finalPrice.toString(),
      );
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.SELECTED_CABIN_CURRENCY,
        currencyCode,
      );

      router.push(editedPathName(pathName, ROUTE.flightCabinSelectedCompleted));
    } else {
      router.push(editedPathName(pathName, ROUTE.flightCabinSelectedFailed));
    }
  };

  return (
    <div className={styles.listItemCard}>
      <div className={styles.header}>
        <p>{headerTitleText}</p>
        <p>
          <sup>{currencyCode}</sup>
          {price}
        </p>
      </div>
      <div className={styles.body}>
        {cabinFeatures.map((feature, index) => (
          <div
            key={`cabinFeatureItem-${index}`}
            className={styles.cabinFeatureItem}
          >
            <p>{feature.value}</p>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <button disabled={buttonDisabled} onClick={() => cabinSelection()}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ListItemCard;

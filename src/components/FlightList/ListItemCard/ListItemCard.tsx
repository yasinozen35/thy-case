import styles from "./ListItemCard.module.scss";
import { LOCAL_STORAGE_KEYS } from "@/utils/constants/consts";
import { usePathname, useRouter } from "next/navigation";
import { editedPathName } from "@/utils/hooks/usePathWithLanguage";
import { ROUTE } from "@/utils/constants/routes";
const ListItemCard = ({
  headerTitleText = "",
  currencyCode = "TRY",
  price = "",
  cabinFeatures = [],
  buttonText = "",
}: {
  headerTitleText: string;
  currencyCode?: string;
  price: string;
  cabinFeatures: {
    value: string;
  }[];
  buttonText: string;
}) => {
  const router = useRouter();
  const pathName = usePathname();
  const cabinSelectionCompleted = () => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.SELECTED_CABIN, price);
    router.push(editedPathName(pathName, ROUTE.flightCabinSelectedCompleted));
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
        <button onClick={() => cabinSelectionCompleted()}>{buttonText}</button>
      </div>
    </div>
  );
};

export default ListItemCard;

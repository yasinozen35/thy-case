import styles from "./ListItemCard.module.scss";
const ListItemCard = ({
  headerTitleText = "",
  currencyCode = "TRY",
  price = "",
  cabinFeatures = [
    {
      value: "15 kg bagaj",
    },
  ],
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
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default ListItemCard;

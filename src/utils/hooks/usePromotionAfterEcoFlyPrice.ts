import { FARE_CATEGORY_NAMES } from "@/utils/constants/consts";

export const promotionAfterEcoFlyPrice = (
  usePromotion: boolean,
  price: number,
  brandCode: string,
) => {
  if (usePromotion && brandCode === FARE_CATEGORY_NAMES.ECO_FLY) {
    return (price / 2).toFixed(2).toString();
  }
  return price.toString();
};

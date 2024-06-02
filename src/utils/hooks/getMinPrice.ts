import { FareCategories, Subcategory } from "@/utils/types/flightTypes";
import { STATUS } from "@/utils/constants/consts";

export const getMinPrices = (categories: FareCategories) => {
  const minPriceFinder = (subcategories: Subcategory[]) => {
    const availableSubcategories = subcategories.filter(
      (sub) => sub.status === STATUS.AVAILABLE,
    );
    if (availableSubcategories.length === 0) {
      return 0;
    }
    return Math.min(...availableSubcategories.map((sub) => sub.price.amount));
  };

  const economyMinPrice = minPriceFinder(categories.ECONOMY.subcategories);
  const businessMinPrice = minPriceFinder(categories.BUSINESS.subcategories);

  return {
    economyMinPrice,
    businessMinPrice,
  };
};

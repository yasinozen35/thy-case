export type ClassItemForListItemType = {
  radioButtonValue: string;
  radioButtonText: string;
  radioButtonName: string;
  onClick: (value: string) => void;
  checked: boolean;
  priceText?: string;
  price: string;
  currencyCode?: string;
  isOpen?: boolean;
  index: string;
  selectedIndex: string;
};

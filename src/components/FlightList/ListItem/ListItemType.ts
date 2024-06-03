import { FormattedFlightData } from "@/utils/types/flightTypes";
import { DictType } from "@/utils/types/commonTypes";

export type ListItemType = {
  flightInfo: FormattedFlightData;
  dict: DictType;
  index: string;
  selectedIndex: string;
  selectedClass: string;
  setSelectedClass: (value: string) => void;
  setSelectedIndex: (value: string) => void;
  usePromotion: boolean;
};

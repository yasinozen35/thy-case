import { DictType } from "@/utils/types/commonTypes";

export type PassengerDropdownType = {
  dict: DictType;
  closeDropDownTrigger: () => void;
  setSelectedPassengerCount: (value: number) => void;
  selectedClass: string;
  selectedPassengerCount: number;
  setSelectedPassengerClass: (value: string) => void;
};

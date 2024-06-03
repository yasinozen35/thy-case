import { DictType } from "@/utils/types/commonTypes";

export type PromotionCodeApplyType = {
  dict: DictType;
  checked: boolean;
  onClick: (value: boolean) => void;
};

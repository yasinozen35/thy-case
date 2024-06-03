"use client";

import styles from "./PromotionCode.module.scss";
import Switch from "@/components/FlightList/PromotionCode/Switch/Switch";
import { PromotionCodeApplyType } from "@/components/FlightList/PromotionCode/PromotionCodeApply/PromotionCodeApplyType";

const PromotionCodeApply = ({
  dict,
  checked = false,
  onClick = () => {},
}: PromotionCodeApplyType) => {
  return (
    <div className={styles.promotionCodeApply}>
      <Switch
        text={dict.list_promotion_code}
        checked={checked}
        onClick={(value) => onClick(value)}
      />
      {checked && (
        <div className={styles.promotionCodeTexts}>
          <p>{dict.list_promotion_first_content}</p>
          <p>{dict.list_promotion_second_content}</p>
        </div>
      )}
    </div>
  );
};

export default PromotionCodeApply;

import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import {useUnlockPaidFeaturesPopup} from "../../components/UnlockPaidFeatures/UnlockPaidFeaturesContext";
import {logPurchaseModalOpen} from "../../analytics/analytics"; // Crown Icon

const NotPaidMenuItem = forwardRef(({ icon, labelKey, isPaid, ...props }, ref) => {
  const { t } = useTranslation();
  const { showPopup } = useUnlockPaidFeaturesPopup();

  const handlePaidFeaturesClick = () => {
    logPurchaseModalOpen(labelKey)
    showPopup();
  }

  return (<>
    <div className={'menu-item not-paid-menu-item'} onClick={handlePaidFeaturesClick} ref={ref} {...props}>
      <div className={'not-paid-menu-item-content'}>
          {icon}
          <div className={'menu-item-label'}>
            {t(`menu.${labelKey}`)}
          </div>
      </div>
      <LockClosedIcon height={16}/>
    </div>
  </>);
});

export default NotPaidMenuItem;

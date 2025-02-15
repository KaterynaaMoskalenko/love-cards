import React, { useState, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import UnlockPaidFeaturesPopup from "./UnlockPaidFeaturesPopup"; // Crown Icon

const NotPaidMenuItem = forwardRef(({ icon, labelKey, isPaid, ...props }, ref) => {
  const { t, i18n } = useTranslation();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (<>
    <div className={'menu-item not-paid-menu-item'} onClick={() => setIsPopoverOpen(true)} ref={ref} {...props}>
      <div className={'not-paid-menu-item-content'}>
          {icon}
          <div className={'menu-item-label'}>
            {t(`menu.${labelKey}`)}
          </div>
      </div>
      <LockClosedIcon height={16}/>
    </div>
    {isPopoverOpen && <UnlockPaidFeaturesPopup onClose={() => setIsPopoverOpen(false)}/>}
  </>);
});

export default NotPaidMenuItem;

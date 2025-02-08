import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const MenuItem = forwardRef(({ icon, labelKey, onClick, ...props }, ref) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={'menu-item'} onClick={onClick} ref={ref} {...props}>
      {icon}
      <div className={'menu-item-label'}>
        {t(`menu.${labelKey}`)}
      </div>
    </div>
  );
});

export default MenuItem;

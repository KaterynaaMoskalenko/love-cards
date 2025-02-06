import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const MenuItem = forwardRef(({ icon, labelKey, onClick, ...props }, ref) => {
  const { t, i18n } = useTranslation();

  return (
    <div onClick={onClick} ref={ref} {...props}>
      {icon}
      {t(`menu.${labelKey}`)}
    </div>
  );
});

export default MenuItem;

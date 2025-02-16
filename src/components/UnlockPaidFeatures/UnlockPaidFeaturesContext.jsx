import React, { createContext, useContext, useState } from "react";
import UnlockPaidFeaturesPopup from "./UnlockPaidFeaturesPopup";

const UnlockPaidFeaturesPopupContext = createContext();

export const UnlockPaidFeaturesPopupProvider = ({ children }) => {
    const [isShowPopup, setIsShowPopup] = useState(false);

    const showPopup = () => setIsShowPopup(true);

    return (
        <UnlockPaidFeaturesPopupContext.Provider value={{ showPopup }}>
            {children}
            <UnlockPaidFeaturesPopup isShowPopup={isShowPopup} onClose={() => setIsShowPopup(false)}/>
        </UnlockPaidFeaturesPopupContext.Provider>
    );
};

export const useUnlockPaidFeaturesPopup = () => useContext(UnlockPaidFeaturesPopupContext);
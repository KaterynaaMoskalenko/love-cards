import React from "react";
import {useTranslation} from "react-i18next";
import MenuPopoverItem from "./MenuPopoverItem";
import {LanguageIcon} from "@heroicons/react/20/solid";

const languageOptions = [
    { code: "en", name: "English" },
    { code: "ua", name: "Ukrainian" },
    { code: "pl", name: "Polish" },
];

const LanguageMenuItem = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (code) => {
        i18n.changeLanguage(code);
    };

    return <MenuPopoverItem labelKey={"language"} icon={<LanguageIcon height={20}/>}>
        <div>
            {languageOptions.map((subItem) => (
                <div
                    key={subItem.name}
                    className="language-option text-gray-700"
                    style={{
                        fontSize: "0.9rem",
                        fontweight: "300",
                    }}
                    onClick={() => handleLanguageChange(subItem.code)}
                >
                    {subItem.name}
                </div>
            ))}
        </div>
    </MenuPopoverItem>
};

export default LanguageMenuItem;
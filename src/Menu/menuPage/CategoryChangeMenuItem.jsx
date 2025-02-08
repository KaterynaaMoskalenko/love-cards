import React from "react";
import {useTranslation} from "react-i18next";
import MenuPopoverItem from "./MenuPopoverItem";
import {TagIcon} from "@heroicons/react/20/solid";

const CategoryChangeMenuItem = ({categoryFilters, setCategoryFilters}) => {
    const { t } = useTranslation();

    const handleCategoryChange = (category, enabled) => {
        setCategoryFilters({ ...categoryFilters, [category]: !enabled });
    };

    return <MenuPopoverItem labelKey={"categoryChange"} icon={<TagIcon height={20}/>}>
        <div>
            {Object.entries(categoryFilters).map(
                ([category, enabled]) => {
                    return (
                        <div>
                            <input
                                type="checkbox"
                                id="scales"
                                name="scales"
                                checked={enabled}
                                onChange={() =>
                                    handleCategoryChange(category, enabled)
                                }
                            />
                            <label for="scales">
                                {t(`categories.${category}`)}
                            </label>
                        </div>
                    );
                }
            )}
        </div>
    </MenuPopoverItem>
};

export default CategoryChangeMenuItem;
import React from "react";
import {useTranslation} from "react-i18next";
import MenuPopoverItem from "./MenuPopoverItem";
import {TagIcon} from "@heroicons/react/20/solid";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

const CategoryChangeMenuItem = ({categoryFilters, setCategoryFilters}) => {
    const { t } = useTranslation();

    const handleCategoryChange = (category, enabled) => {
        setCategoryFilters({ ...categoryFilters, [category]: !enabled });
    };

    return <MenuPopoverItem labelKey={"categoryChange"} icon={<TagIcon height={20}/>}>
        <CategoryFilter categoryFilters={categoryFilters} handleCategoryChange={handleCategoryChange}/>
    </MenuPopoverItem>
};

export default CategoryChangeMenuItem;
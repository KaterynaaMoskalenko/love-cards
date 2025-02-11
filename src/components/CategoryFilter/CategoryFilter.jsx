import React from "react";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import "./CategoryFilter.css";
import { useTranslation } from "react-i18next";

const CategoryFilter = ({ categoryFilters, handleCategoryChange }) => {
  const { t } = useTranslation();

  return (
    <div className="category-filter">
      <div className="category-container">
        {Object.entries(categoryFilters).map(([category, enabled]) => {
          return (
            <div key={category} className="category-wrapper">
              <div
                className={`category-item ${
                  enabled ? "selected" : ""
                } ${category}`}
                onClick={() => handleCategoryChange(category, enabled)}
              >
                {" "}
                {enabled ? (
                  <HeartIconSolid className="heart-icon" />
                ) : (
                  <HeartIconOutline className="heart-icon" />
                )}
              </div>
              <p className="category-name">{t(`categories.${category}`)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;

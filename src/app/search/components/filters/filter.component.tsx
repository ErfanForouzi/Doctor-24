"use client";
import CardComponent from "@/components/card/card.component";

import FilterButtonComponent from "@/components/filter-button/filter-button.component";

import styles from "./filter.module.css";
import { ReactElement, useContext } from "react";
import { FilterContext } from "../../providers/filters.provider";

import { FiltersType } from "../../types/filter.types";

type Option = {
  key: keyof FiltersType;
  label: string;
};
type Props = {
  title: string;
  options: Option[];
};

export default function FilterComponent({
  title,
  options,
}: Props): ReactElement {
  const { changeFilter, filters } = useContext(FilterContext);
  return (
    <CardComponent>
      <div className={styles.filter}>
        <div className={styles.title}>{title}</div>
        <div className={styles.buttons}>
          {options.map((option) => (
            <FilterButtonComponent
              isActive={filters[option.key]}
              onClick={() => {
                changeFilter(option.key, !filters[option.key]);
              }}
              key={`option-${option.key}`}
            >
              {option.label}
            </FilterButtonComponent>
          ))}
        </div>
      </div>
    </CardComponent>
  );
}

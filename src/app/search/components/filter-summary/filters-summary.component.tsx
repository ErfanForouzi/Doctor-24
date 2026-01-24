"use client";

import { ReactElement, useContext, useMemo } from "react";


import { ButtonComponent } from "@/components/button/button.component";
import CardComponent from "@/components/card/card.component";


import styles from "./filters-summary.module.css";
import { FilterContext } from "../../providers/filters/filters.provider";
import { FiltersType } from "@/types/filters.types";

export default function FiltersSummaryComponent(): ReactElement | null {

  const { filters, dispatchFilters } = useContext(FilterContext)

  const isEmpty = useMemo(() => {
    return (!filters.degree && !filters.query && !filters.gender && !filters.expertise && !filters.day)
  }, [filters])

  const removeAllButtonClickHandler = (): void => {
    dispatchFilters({ type: "removed_all" });
  };

  const filterClickHandler = (key: keyof FiltersType): void => {
    dispatchFilters({ type: "removed_filter", key });
  };


  if (isEmpty) {
    return null
  }

  return (
    <CardComponent>
      <div className={styles["filters-summary"]}>
        <div className={styles.title}>فیلترهای انتخاب‌شده</div>

        <ButtonComponent
          variant="danger"
          shape="outlined"
          type="button"
          onClick={removeAllButtonClickHandler}
        >
          حذف همه
        </ButtonComponent>

        <ul className={styles.filters}>
          {filters.query && <li onClick={() => filterClickHandler("query")}> {filters.query}</li>}
          {filters.expertise && <li onClick={() => filterClickHandler("expertise")}> {filters.expertise}</li>}
          {filters.gender && <li onClick={() => filterClickHandler("gender")}> {filters.gender}</li>}
          {filters.degree && <li onClick={() => filterClickHandler("degree")}> {filters.degree}</li>}
          {filters.day && <li onClick={() => filterClickHandler("day")}>
            {
            filters.day === "1" ?
             "امروز"
            : filters.day === "2" ?
             "تا فردا"
            : filters.day === "3" ?
             "تا سه روز"
            : filters.day === "5" ?
             "تا پنج روز"
            : filters.day === "7" ?
             "تا هفت روز" :""
            }
            </li>}

        </ul>
      </div>
    </CardComponent>
  );
}

"use client";
import CardComponent from "@/components/card/card.component";

import { ReactElement, useContext } from "react";
import { FilterContext } from "../../providers/filters.provider";
import styles from "./remove-filter.module.css";

import RemoveAllFilterButtonComponent from "@/components/remove-all-filter-button/remove-all-filter-button";

type Props = {
  title: string;
};

export default function RemoveFilterComponent({ title }: Props): ReactElement {
  const { clearAll } = useContext(FilterContext);
  return (
    <CardComponent>
      <div className={styles["clear-all"]}>
        <RemoveAllFilterButtonComponent onClick={clearAll}>
          {title}
        </RemoveAllFilterButtonComponent>
      </div>
    </CardComponent>
  );
}

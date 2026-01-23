"use client";

import { ReactElement } from "react";


import { ButtonComponent } from "@/components/button/button.component";
import CardComponent from "@/components/card/card.component";


import styles from "./filters-summary.module.css";

export default function FiltersSummaryComponent(): ReactElement | null {


  return (
    <CardComponent>
      <div className={styles["filters-summary"]}>
        <div className={styles.title}>فیلترهای انتخاب‌شده</div>

        <ButtonComponent
          variant="danger"
          shape="outlined"
          type="button"
        >
          حذف همه
        </ButtonComponent>

        <ul className={styles.filters}>
            <li> query</li>
            <li> expertise</li>
            <li> gender</li>
            <li> degree</li>
        </ul>
      </div>
    </CardComponent>
  );
}

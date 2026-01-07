import { ReactElement } from "react";

import styles from "./page.module.css";
import FilterComponent from "./components/filters/filter.component";
import FilterProvider from "./providers/filter.provider";
import ListComponent from "./components/list/list.component";



export default function Page(): ReactElement {
    return (
       <FilterProvider>
         <div className={styles.page}>
            <div className={styles.filters}>
                <FilterComponent
                    title="زوج یا فرد"
                    options={
                        [
                            { label: "فرد", key: "odd" }
                            , { label: "زوج", key: "even" }
                        ]}
                />
                <FilterComponent
                    title="بخش پذیر بودن"
                    options={
                        [
                            { key: "three", label: "بخش پذیر بر 3" },
                            { key: "five", label: "بخش پذیر بر 5" },
                            { key: "seven", label: "بخش پذیر بر 7" },
                        ]}
                />
            </div>
          <ListComponent/>
        </div>
       </FilterProvider>
    )
}
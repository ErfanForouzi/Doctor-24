import { ReactElement } from "react";

import styles from "./page.module.css";
import FilterComponent from "./components/filter.component";


const items = Array(100).fill(null).map((_, i) => i + 1)

export default function Page(): ReactElement {
    return (
        <div className={styles.page}>
            <div className={styles.filters}>
                <FilterComponent
                    title="زوج یا فرد"
                    options={
                        [
                            { label: "فرد", value: "odd" }
                            , { label: "زوج", value: "even" }
                        ]}
                />
                <FilterComponent
                    title="بخش پذیر بر 2"
                    options={
                        [
                            { value: "2", label: "بخش پذیر بر 2" },
                            { value: "3", label: "بخش پذیر بر 3" },
                            { value: "5", label: "بخش پذیر بر 5" },
                            { value: "7", label: "بخش پذیر بر 7" },
                        ]}
                />
            </div>
            <ul className={styles.results}>
                {items.map((item) => (
                    <li key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
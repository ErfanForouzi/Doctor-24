import CardComponent from "@/components/card/card.component";

import FilterButtonComponent from "@/components/filter-button/filter-button.component";

import styles from "./filter.module.css"
import { ButtonHTMLAttributes, ReactElement } from "react";

type Option = {
    value: string,
    label: string
}
type Props = {
    title: string,
    options: Option[]
}

export default function FilterComponent({ title, options }: Props): ReactElement {
    return (
        <CardComponent>
            <div className={styles.filter}>
                <div className={styles.title}>{title}</div>
                <div className={styles.buttons}>
                    {options.map((option) => (
                        <FilterButtonComponent key={`option-${option.value}`}>{option.label}</FilterButtonComponent>
                    ))}
                </div>
            </div>
        </CardComponent>
    )
}
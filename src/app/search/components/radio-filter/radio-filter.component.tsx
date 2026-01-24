import { ChangeEvent, ReactElement } from "react";

import styles from "./radio-filter.module.css";
import CardComponent from "@/components/card/card.component";
import { SelectOptionType } from "@/types/select-option.types";

type Props = {
    title: string,
    name: string,
    options: SelectOptionType[],
    value?: string,
    onChange?: (value: string) => void
}
export default function RadioFilterComponent({
    title,
    name,
    options,
    value,
    onChange
}: Props): ReactElement {
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.currentTarget.value)
    }
    return (
        <CardComponent>
            <div className={styles['radio-filter']}>
                <div className={styles.title}>{title}</div>
                {options.map((option) => (
                    <label key={option.value}>
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={option.value === value}
                            onChange={inputChangeHandler}
                        />
                        {option.label}
                    </label>
                ))}
            </div>
        </CardComponent>
    )
}
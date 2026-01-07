"use client";

import { ReactElement, useContext, useMemo } from "react";

import { FilterContext } from "../../providers/filter.provider";
import clsx from "clsx";


import styles from "./item.module.css"


type Props = {
    item: number
}


export default function ItemComponent({ item }: Props): ReactElement {
    const { filters } = useContext(FilterContext)
    const isActive = useMemo(() => {
        if (filters.even && item % 2 === 0) {
            return true
        }
        if (filters.odd && item % 2 === 1) {
            return true
        }
        if (filters.three && item % 3 === 0) {
            return true
        }
        if (filters.five && item % 5 === 0) {
            return true
        }
        if (filters.seven && item % 7 === 0) {
            return true
        }
        return false
    }, [filters,item])
    return (
        <li className={clsx(styles.item,isActive && styles.active)} key={item}>
            {item}
        </li>
    )
}
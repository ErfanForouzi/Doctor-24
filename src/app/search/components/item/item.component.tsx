"use client";

import { ReactElement } from "react";

import clsx from "clsx";


import { ItemType } from "@/types/item.types";
import styles from "./item.module.css";


type Props = {
    item: ItemType
}


export default function ItemComponent({ item }: Props): ReactElement {
    return (
        <li className={clsx(styles.item)} key={item.value}>
            {item.value}
        </li>
    )
}
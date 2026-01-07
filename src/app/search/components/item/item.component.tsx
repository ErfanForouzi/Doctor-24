import { ReactElement } from "react";

import styles from "./item.module.css"


type Props = {
    item: number
}


export default function ItemComponent({ item }: Props): ReactElement {
    return (
        <li className={styles.item} key={item}>
            {item}
        </li>
    )
}
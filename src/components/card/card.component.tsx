import { PropsWithChildren, ReactElement } from "react";

type Props = PropsWithChildren

import styles from "./card.module.css";
export default function CardComponent({ children }: Props): ReactElement {
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}
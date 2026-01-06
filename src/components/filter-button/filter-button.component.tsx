import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import styles from "./filter-button.module.css";

type Props = ComponentProps<'button'> & {
    isActive?:boolean
}
export default function FilterButtonComponent({ children, className,isActive, ...otherProps }: Props): ReactElement {
    return (
        <button className={clsx(styles['filter-button'], className, isActive && styles.active)} {...otherProps}>
            {children}
        </button>
    )
}
import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import styles from "./remove-all-filter-button.module.css";

type Props = ComponentProps<'button'>;
export default function RemoveAllFilterButtonComponent({ children, className, ...otherProps }: Props): ReactElement {
    return (
        <button  className={clsx(styles['remove-all-filter-button'], className)} {...otherProps}>
            {children}
        </button>
    )
}
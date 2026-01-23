import clsx from "clsx"
import { ComponentProps, ReactElement } from "react"

import styles from "./button.module.css"
import Link from "next/link"

export type ButtonVariant = "default" | "primary" | "danger"
export type ButtonShape = "inherit" | "solid" | "outlined"
export type ButtonSize = "medium" | "large"
export type ButtonPosition = "default" | "inline"

type CommonProps = {
    variant?: ButtonVariant,
    shape?: ButtonShape,
    size?: ButtonSize,
    position?: ButtonPosition,
}

type ButtonComponentProps = ComponentProps<"button"> & CommonProps
type LinkComponentProps = ComponentProps<typeof Link> & CommonProps


export function ButtonComponent({
  variant = "default",
  shape = "solid",
  size = "medium",
  position = "default",
  className,
  children,
  ...otherProps
}: ButtonComponentProps): ReactElement {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[shape],
        styles[size],
        styles[position],
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export function ButtonLinkComponent({
  variant = "default",
  shape = "solid",
  size = "medium",
  position = "default",
  className,
  href,
  children,
  ...otherProps
}: ButtonLinkComponentProps): ReactElement {
  return (
    <Link
      href={href}
      className={clsx(
        styles.button,
        styles[variant],
        styles[shape],
        styles[size],
        styles[position],
        className,
      )}
      {...otherProps}
    >
      {children}
    </Link>
  );
}
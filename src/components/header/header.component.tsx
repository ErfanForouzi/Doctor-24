"use client";

import { ReactElement } from "react";

import clsx from "clsx";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./header.module.css";
export default function HeaderComponent(): ReactElement {
    const pathname = usePathname()
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <Link className={clsx(pathname === '/' && styles.active)} href="/">خانه</Link>
                    </li>
                    <li>
                        <Link className={clsx(pathname === '/search' && styles.active)} href="/search">جست و جو</Link>
                    </li>
                </ul>
            </nav>
            <button className={styles.cto}>
                ورود | ثبت نام
            </button>
        </header>
    )
}
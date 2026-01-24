
"use client"

import CardComponent from "@/components/card/card.component";
import { ReactElement, useContext } from "react";

import styles from "./expertise-filter.module.css";
import { ButtonComponent } from "@/components/button/button.component";
import { FilterContext } from "../../providers/filters/filters.provider";
import clsx from "clsx";

const options: string[] = [
    "استخوان و مفاصل",
    "زنان، زایمان و نازایی",
    "چشم پزشکی",
    "گوارش و معده",
    "کلیه و مجاری ادراری",
    "غدد و متابولیسم",
    "قلب و عروق",
    "داخلی",
    "دهان و دندان",
    "پوست و مو",
    "جراحی",
    "اطفال، کودکان و نوزادان",
    "روانپزشکی",
    "ریه و دستگاه تنفسی",
    "گوش، حلق و بینی",
    "بیهوشی و مراقبت های ویژه",
    "خون و سرطان",
    "آزمایشگاه",
    "پزشک عمومی",
    "تغذیه",
    "روانشناسی",
    "ژنتیک",
    "طب اورژانس",
    "طب تسکینی و درد",
    "عفونی",
    "مغز و اعصاب",
    "طب سنتی",
    "توانبخشی",
    "کرونا ویروس",
    "داروسازی",
    "سلامت جنسی",
    "زیبایی",
    "آلرژی",
    "دیابت",
    "تصویربرداری",
];

export default function ExpertiseFilterComponent(): ReactElement {
    const { filters, dispatchFilters } = useContext(FilterContext)

    const buttonClickHandler = (value: string) => {
        dispatchFilters({ type: "updated_filter", key: "expertise", value })
    }

    return (
        <CardComponent>
            <ul className={styles["expertise-filter"]}>
                {options.map((x) => {
                    
                    const isActive = filters.expertise === x;
                
                    return (
                        <li className={clsx(isActive && styles.active)} key={x}>
                            <ButtonComponent
                                className={styles.button}
                                type="button"
                                variant="default"
                                onClick={() => buttonClickHandler(x)}
                            >
                                {x}
                            </ButtonComponent>
                        </li>
                    )
                })}
            </ul>
        </CardComponent>
    )
}
"use client";

import { ReactElement, useContext } from "react";



import ItemComponent from "../item/item.component";

import { ItemsContext } from "../../providers/items.provider";
import styles from "./list.module.css";
export default function ListComponent():ReactElement{
    const {filteredItems} = useContext(ItemsContext)
    console.log([...filteredItems]);
    return(
          <ul className={styles.list}>
                {filteredItems.map((item) => (
                   <ItemComponent key={item.value} item={item}/>
                ))}
            </ul>
    )
}
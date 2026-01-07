import { ReactElement } from "react";


const items = Array(100).fill(null).map((_, i) => i + 1)

import styles from "./list.module.css"
import ItemComponent from "../item/item.component"; 
export default function ListComponent():ReactElement{
    return(
          <ul className={styles.list}>
                {items.map((item) => (
                   <ItemComponent key={item} item={item}/>
                ))}
            </ul>
    )
}
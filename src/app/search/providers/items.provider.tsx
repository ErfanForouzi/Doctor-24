"use client";

import { ItemType } from "@/types/item.types";
import {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createContext } from "react";
import { FilterContext } from "./filters.provider";

type ContextType = {
  filteredItems: ItemType[];
};

type Props = PropsWithChildren & {
  items: ItemType[];
};

export const ItemsContext = createContext<ContextType>({} as ContextType);
export const ItemsProvider = ({ children, items }: Props) => {
  const { filters } = useContext(FilterContext);

  const [filteredItems, setFilteredItems] = useState<ItemType[]>([]);

  const isActive = useCallback(
    (item: ItemType) => {
      if (filters.even && item.value % 2 === 0) {
        return true;
      }
      if (filters.odd && item.value % 2 === 1) {
        return true;
      }
      if (filters.three && item.value % 3 === 0) {
        return true;
      }
      if (filters.five && item.value % 5 === 0) {
        return true;
      }
      if (filters.seven && item.value % 7 === 0) {
        return true;
      }
      return false;
    },
    [filters],
  );

  useEffect(() => {
    setFilteredItems(items.filter(isActive));
  }, [isActive, items]);

  return (
    <ItemsContext.Provider value={{ filteredItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

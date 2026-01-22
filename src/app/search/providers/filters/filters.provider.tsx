"use client";
import { FiltersType } from "@/types/filters.types";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useReducer,
} from "react";
import { FiltersAction, filtersReducer } from "../../reducers/filters.reducer";

type Value = {
  filters: FiltersType;
  dispatchFilters: Dispatch<FiltersAction>
};


type Props = PropsWithChildren & {
  defaultFilters: FiltersType
};

export const FilterContext = createContext<Value>({
  filters: {},
  dispatchFilters: () => void
});


export default function FilterProvider({ children, defaultFilters }: Props) {
  const [filters, dispatchFilters] = useReducer(filtersReducer, defaultFilters);


  return (
    <FilterContext.Provider
      value={{ filters, dispatchFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
}

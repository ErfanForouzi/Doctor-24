"use client"
import { createContext, PropsWithChildren, useCallback, useState } from "react"
import { FiltersType } from "../types/filter.types"

type ContextType = {
    filters: FiltersType,
    changeFilter: <TKey extends keyof FiltersType>(key: TKey, value: Exclude<FiltersType[TKey], undefined>) => void,
    clearFilter: <TKey extends keyof FiltersType>(key: TKey) => void,
    clearAll: () => void,
}

export const FilterContext = createContext<ContextType>({} as ContextType)

type Props = PropsWithChildren;

export default function FilterProvider({ children }: Props) {
    const [filters, setFilters] = useState<FiltersType>({})
    console.log({...filters});


    const changeFilter = <TKey extends keyof FiltersType>(key: TKey, value: Exclude<FiltersType[TKey], undefined>): void => {
        setFilters(old => ({ ...old, [key]: value }))
    }
    const clearFilter = useCallback(<TKey extends keyof FiltersType>(key: TKey): void => {
        setFilters(old => {
            const clone = { ...old };
            delete clone[key]
            return clone
        })
    }, [])
    const clearAll = (): void => {
        setFilters({})
    }

    return (
        <FilterContext.Provider value={{ filters, changeFilter, clearFilter, clearAll }}>
            {children}
        </FilterContext.Provider>
    )
}
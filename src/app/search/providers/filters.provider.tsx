"use client"
import { createContext, PropsWithChildren, useCallback, useState } from "react"
import { FiltersType } from "../types/filter.types"

type ContextType = {
    filters: FiltersType,
    changeFilter: <TKey extends keyof FiltersType>(key: TKey, value: FiltersType[TKey]) => void,
    clearFilter: <TKey extends keyof FiltersType>(key: TKey) => void,
    clearAll: () => void,
}

const defaultValues: FiltersType = {
    odd: true,
    even: true,
    two: true,
    three: true,
    five: true,
    seven: true,
}

export const FilterContext = createContext<ContextType>({
    filters: {
        ...defaultValues
    },
    changeFilter: () => { },
    clearFilter: () => { },
    clearAll: () => { }
})

type Props = PropsWithChildren;

export default function FilterProvider({ children }: Props) {
    const [filters, setFilters] = useState<FiltersType>({...defaultValues})

    const changeFilter = <TKey extends keyof FiltersType>(key: TKey, value: FiltersType[TKey]): void => {
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
        setFilters({...defaultValues})
    }

    return (
        <FilterContext.Provider value={{ filters, changeFilter, clearFilter, clearAll }}>
            {children}
        </FilterContext.Provider>
    )
}
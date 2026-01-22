import { ReactElement } from "react";

import FilterComponent from "./components/filters/filter.component";
import ListComponent from "./components/list/list.component";
import RemoveFilterComponent from "./components/remove-filter/remove-filter.component";
import styles from "./page.module.css";
import FilterProvider from "./providers/filters/filters.provider";
import { FiltersType } from "@/types/filters.types";

type SearchParams = { [key: string]: string | string[] | undefined }
type Props = {
  searchParams: SearchParams
}
export default async function Page({ searchParams }: Props): Promise<ReactElement> {
  const defaultFilters: FiltersType = generateDefaultFilters(await searchParams)
  return (
    <FilterProvider defaultFilters={defaultFilters}>
      <div className={styles.page}>
        <div className={styles.filters}>
          <RemoveFilterComponent title="حذف همه" />
          <FilterComponent
            title="زوج یا فرد"
            options={[
              { label: "فرد", key: "odd" },
              { label: "زوج", key: "even" },
            ]}
          />
          <FilterComponent
            title="بخش پذیر بودن"
            options={[
              { key: "three", label: "بخش پذیر بر 3" },
              { key: "five", label: "بخش پذیر بر 5" },
              { key: "seven", label: "بخش پذیر بر 7" },
            ]}
          />
        </div>
        <ListComponent />
      </div>
    </FilterProvider>
  );
}

function generateDefaultFilters(searchParams: SearchParams): FiltersType {
  const {
    query,
    expertise,
    gender,
    degree,
  } = searchParams;

  return {
    query: normalizeFilter(query),
    expertise: normalizeFilter(expertise),
    degree: normalizeFilter(degree),
    gender: normalizeFilter(gender)
  }
}

function normalizeFilter(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) {
    return value[0]
  }
  return value

}
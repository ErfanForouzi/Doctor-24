import { ReactElement } from "react";

import { FiltersType } from "@/types/filters.types";
import styles from "./page.module.css";
import FilterProvider from "./providers/filters/filters.provider";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import DoctorsProvider from "./providers/doctors/doctors.provider";
import { doctors } from "@/mock/doctors";
import FilterSummaryComponent from "./components/filter-summary/filters-summary.component";
import ExpertiseFilterComponent from "./components/expertise-filter/expertise-filter.component";
import GenderFilterComponent from "./components/gender-filter/gender-filter.component";
import DegreeFilterComponent from "./components/degree-filter/degree-filter.component";

type SearchParams = { [key: string]: string | string[] | undefined }
type Props = {
  searchParams: SearchParams
}
export default async function Page({ searchParams }: Props): Promise<ReactElement> {
  const defaultFilters: FiltersType = generateDefaultFilters(await searchParams)
  return (
    <FilterProvider defaultFilters={defaultFilters}>
      <DoctorsProvider doctors={doctors}>
        <div className={styles.page}>
          <div className={styles.search}>
            <GlobalSearchBoxComponent />
          </div>
          <div className={styles.filters}>
            <FilterSummaryComponent/>
            <ExpertiseFilterComponent/>
            <GenderFilterComponent/>
            <DegreeFilterComponent/>
          </div>
          <div className={styles.toolbar}>
            toolbar
          </div>
          <div className={styles.results}>
            results
          </div>
        </div>
      </DoctorsProvider>
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
"use client";

import { ReactElement, useContext } from "react";
import RadioFilterComponent from "../radio-filter/radio-filter.component";
import { FilterContext } from "../../providers/filters/filters.provider";

export default function GenderFilterComponent(): ReactElement {
    const { filters, dispatchFilters } = useContext(FilterContext)

    const changeHandler = (value: string): void => {
        dispatchFilters({ type: "updated_filter", key: "gender", value })
    }

    return (
        <RadioFilterComponent
            title="جنسیت پزشک"
            name="gender"
            options={[
                { value: "آقا", label: "آقا" },
                { value: "خانم", label: "خانم" },
            ]}
            value={filters.gender}
            onChange={changeHandler}
        />
    )
}
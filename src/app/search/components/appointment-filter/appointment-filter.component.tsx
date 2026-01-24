"use client";

import { ReactElement, useContext, useState } from "react";

import SelectComponent from "@/components/select/select.component";
import { SelectOptionType } from "@/types/select-option.types";
import { FilterContext } from "../../providers/filters/filters.provider";


const options: SelectOptionType[] = [
    { value: "", label: "هر زمان" },
    { value: "1", label: "امروز" },
    { value: "2", label: "تا فردا" },
    { value: "3", label: "تا سه روز" },
    { value: "5", label: "تا پنج روز" },
    { value: "7", label: "تا هفت روز" },
];

export default function AppointmentFilterComponent(): ReactElement {
    const { dispatchFilters } = useContext(FilterContext)
    const [selectedOption, setSelectedOption] = useState<SelectOptionType>(options[0]);

    const handleSelectionOptionChange = (selectOption: SelectOptionType): void => {
        setSelectedOption(selectOption)
        dispatchFilters({ type: "updated_filter", key: "day", value: selectOption.value })
    }

    return (
        <SelectComponent
            floating
            title="نزدیک‌ترین نوبت"
            options={options}
            selectedOption={selectedOption}
            onSelectedOptionChange={handleSelectionOptionChange}
        />
    );
}

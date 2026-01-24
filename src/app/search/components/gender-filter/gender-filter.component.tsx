import { ReactElement } from "react";
import RadioFilterComponent from "../radio-filter/radio-filter.component";

export default function GenderFilterComponent(): ReactElement {
    return (
        <RadioFilterComponent
            title="جنسیت پزشک"
            name="gender"
            options={[
                { value: "آقا", label: "آقا" },
                { value: "خانم", label: "خانم" },
            ]}
            // value={filters.gender}
            // onChange={changeHandler}
        />
    )
}
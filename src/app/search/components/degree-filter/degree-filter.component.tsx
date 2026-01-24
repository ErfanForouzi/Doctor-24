"use client";

import { ReactElement } from "react";

import RadioFilterComponent from "@/app/search/components/radio-filter/radio-filter.component";

export default function DegreeFilterComponent(): ReactElement {


  return (
    <RadioFilterComponent
      title="درجه علمی"
      name="degree"
      options={[
        { value: "فلوشیپ", label: "فلوشیپ" },
        { value: "فوق تخصص", label: "فوق تخصص" },
        { value: "دکترای تخصصی", label: "دکترای تخصصی" },
        { value: "متخصص", label: "متخصص" },
        { value: "دکتری", label: "دکتری" },
        { value: "کارشناس ارشد", label: "کارشناس ارشد" },
        { value: "کارشناس", label: "کارشناس" },
      ]}
    //   value={filters.degree}
    //   onChange={changeHandler}
    />
  );
}

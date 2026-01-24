"use client"
import { DoctorModel } from "@/models/doctor.model"
import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useState } from "react"
import { FilterContext } from "../filters/filters.provider"

type ContextValue = {
  filteredDoctors: DoctorModel[]
}
type Props = PropsWithChildren & {
  doctors: DoctorModel[]
}

export const DoctorsContext = createContext<ContextValue>({
  filteredDoctors: [],
});

export default function DoctorsProvider({ children, doctors }: Props) {
  const { filters } = useContext(FilterContext);

  const [filteredDoctors, setFilteredDoctors] = useState<DoctorModel[]>([])

  const isVisible = useCallback(
    (doctor: DoctorModel) => {
      return (
        doesInclude(doctor.degree, filters.degree) &&
        doesInclude(doctor.expertise, filters.expertise) &&
        doesInclude(doctor.gender, filters.gender) &&
        doesDoctorInclude(doctor, filters.query) &&
        filterDay(doctor, filters.day) 
      )
    }
    , [filters])

  useEffect(() => {
    setFilteredDoctors(doctors.filter(isVisible))
  }, [doctors, isVisible])

  return (
    <DoctorsContext.Provider value={{ filteredDoctors }}>
      {children}
    </DoctorsContext.Provider>
  );
}

function doesDoctorInclude(doctor: DoctorModel, query?: string): boolean {
  if (!query) {
    return true
  }
  return doesSomeInclude([doctor.name, doctor.brief, doctor.address], query);
}
function doesSomeInclude(items: string[], query?: string): boolean {
  if (!query) {
    return true
  }
  return items.some((item) => doesInclude(item, query))
}
function doesInclude(item: string, query?: string): boolean {
  if (!query) {
    return true
  }
  return item.toLowerCase().includes(query.toLowerCase())
}
function filterDay(doctor: DoctorModel, query?: string): boolean {
  if (!query || query === "") {
    return true
  }
  const dayTime = Number(query);
  return doctor.firstAvailableAppointmentNumber! <= dayTime
}
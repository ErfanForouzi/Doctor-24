"use client"
import { DoctorModel } from "@/models/doctor.model"
import { createContext, PropsWithChildren } from "react"

type ContextValue = {
    filteredDoctors:DoctorModel[]
}
type Props = PropsWithChildren & {
    doctors:DoctorModel[]
}

export const DoctorsContext = createContext<ContextValue>({
  filteredDoctors: [],
});

export default function DoctorsProvider({children,doctors}:Props){
  return (
    <DoctorsContext.Provider value={{ filteredDoctors:doctors }}>
      {children}
    </DoctorsContext.Provider>
  );
}
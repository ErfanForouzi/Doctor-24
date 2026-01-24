import { doctors } from "@/mock/doctors";
import { DoctorModel } from "@/models/doctor.model";
import { notFound } from "next/navigation";
import { ReactElement } from "react";

type Props = {
    params:{id:string}
}
export default function Page({params}:Props):ReactElement{
    const doctor:DoctorModel | undefined = doctors.find((doctor)=>doctor.id === params.id)
    
    if(!doctor){
        return notFound()
    }
    return(
        <div>{doctor.name}</div>
    )
}
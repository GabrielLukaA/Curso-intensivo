import Evento from "@/components/Evento";

export default function Eventos(){
    return (
        <div className="flex flex-wrap gap-5 justify-center h-screen items-center">
        <Evento/>
        <Evento/>
        <Evento/>
        </div>
    )
}
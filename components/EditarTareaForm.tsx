"use client"
import { actualizarTarea } from "@/actions/tareasActions";
import { InterfaceTareas } from "@/interfaces/tareasInterfaces"
import { useRouter } from "next/navigation";
import { useState } from "react"

interface Props{
    tarea: InterfaceTareas;
    idTarea: number;
}

const EditarTareaForm = ({tarea, idTarea}: Props) => {
    const[tareaValue,setTareaValue] = useState(tarea.tarea)
    const router = useRouter();
    const handleSumbit =  async (e: React.FormEvent) => {
        e.preventDefault();
        const respuesta = await actualizarTarea(idTarea,{texto: tareaValue})

        if (respuesta.codigo==='200 ok'){
            router.refresh();
            router.push('/')
        }else{
            console.error('algo fallo')
        }

    }

    return (
        <>
            <form onSubmit={handleSumbit}>
                <input type="text"
                    value={tareaValue}
                    onChange={(e) => setTareaValue(e.target.value)}
                    placeholder="Editar tarea" className="py-2 px4 border-gray-400 bg-gray-800 rounded-sm text-orange-50" />
                <button type="submit" className="py-2 px-8 rounded-sm bg-green-600 hover:bg-green-800">Crear Tarea</button>
            </form>
        </>

    )
}

export default EditarTareaForm
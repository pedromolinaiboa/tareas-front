import { getTareasById } from "@/actions/tareasActions"
import EditarTareaForm from "@/components/EditarTareaForm"
import { InterfaceTareas } from "@/interfaces/tareasInterfaces"

export default async function EditarTareaPage({ params }: { params: { idTarea: string } }) {
    const tarea  = await getTareasById(params.idTarea)


    return (
        <>
            <div>
                <h1 className="text-4xl uppercase mb-8">Editar Tarea </h1>

                {tarea ? (
                    <EditarTareaForm
                        tarea={tarea}
                        idTarea={params.idTarea}
                    />

                ) :(
                    <div>
                        no existe la tarea con ese ID
                    </div>
                )}

            </div>

        </>
    )
}
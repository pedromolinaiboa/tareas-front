"use client";
import { deleteTarea } from '@/actions/tareasActions';
import { InterfaceTareas } from '@/interfaces/tareasInterfaces';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
interface Props {
    tarea: InterfaceTareas;
}

export const Tarea = ({ tarea }: Props) => {
    const router = useRouter();

    const handleDelete = async (id: number) => {
        console.log(id);
        const respuesta = await deleteTarea(id)

        if (respuesta.codigo === '200 ok') {
            router.refresh();
            console.log(respuesta.mensaje)
        }
        else {
            console.log('NO respuesta ok', respuesta.codigo);
        }

    }

    return (
        <div className='flex'>
            <Link href={`/editar-tarea/${tarea.id}`}>
                <div key={tarea.id} className="w-96 hover:bg-slate-700 px-2 cursor-pointer mb-2 border-b-2">
                    {tarea.tarea}
                </div>
            </Link>



            <button onClick={() => handleDelete(tarea.id)} className='text-red-500 mr-10'> X </button>

        </div>
    )
}

export default Tarea
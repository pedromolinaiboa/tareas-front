"use server";

import { APIResponse, InterfaceTareas } from "@/interfaces/tareasInterfaces";
import { json } from "stream/consumers";

export const getTareas = async () => {
    try {
        const resp = await fetch('http://localhost:8080/tareas', { cache:'no-store' });
        const data: InterfaceTareas[] = await resp.json();
        return data;
    } catch (error) {
        console.log("error al obtener tareas", error)
    }
}

export const postTarea = async (body: { texto: string }) => {
    const resp = await fetch('http://localhost:8080/tareas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })

    const data: APIResponse = await resp.json();
    return data;


}

export const deleteTarea = async (id: number) => {
    const ruta =  `http://localhost:8080/tareas/${id}` 
    const resp = await fetch(ruta, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const data: APIResponse = await resp.json();
    return data;


}

export const getTareasById = async (id:string) => {
    try {
        const resp = await fetch(`http://localhost:8080/tareas/${id}`, { cache: 'no-cache' });
        const data: InterfaceTareas[] = await resp.json();
        return data;
    } catch (error) {
        console.log("error al obtener la tarea", error)
    }
}

export const actualizarTarea = async (idTarea:number,body:{texto:string}) => {
    const resp = await fetch(`http://localhost:8080/tareas/${idTarea}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })

    const data: APIResponse = await resp.json();
    return data;

}

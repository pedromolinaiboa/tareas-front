import { getTareas } from "@/actions/tareasActions";
import {Tarea} from "@/components/Tarea";
// import Image from "next/image";


export default async function Home() {
  const tareas = await getTareas();
  return (
    <>

      <main>
        <h1 className="text-center uppercase mb-5 text-3xl">Tareas</h1>
              

        {tareas && tareas.length > 0 ? tareas.map(tarea => (
          <div key={tarea.id} className="w-96 hover:bg-slate-700 px-2 cursor-pointer mb-2 border-b-2">
            <Tarea key={tarea.id}
              tarea={tarea}
            />
                   
          </div>
        )) : (
          <div>
            No hay tareas
          </div>
        )}

      </main>

    </>
  );
}

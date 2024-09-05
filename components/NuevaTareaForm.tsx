"use client"
import { postTarea } from '@/actions/tareasActions'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

const tareaSchema = z.object({
  texto: z.string().min(3, {
    message: 'La tarea debe contener al menos 3 caracteres'
  }).max(5,{
    message: 'Máximo 5 caracteres'
  })

})

export const NuevaTareaForm = () => {
  const router = useRouter();


  const form = useForm<z.infer<typeof tareaSchema>>({
    resolver: zodResolver(tareaSchema)
  })

  const OnSubmit = async (valores: z.infer<typeof tareaSchema>) => {
    console.log(valores)
    // event.preventDefault();
    const obj = {
      texto: valores.texto
    }
    const resp = await postTarea(obj);

    if(resp.codigo==='200 ok'){
      router.refresh();
      router.push('/');
    }else{
      console.log('falló')
    }

  }

  return (
    <>
      <form onSubmit={form.handleSubmit(OnSubmit)}>
        <input
          placeholder="Nueva tarea" className="py-2 px4 border-gray-400 bg-gray-800 rounded-sm text-orange-50"
          {...form.register('texto')}
        />

        <button type="submit" className="py-2 px-8 rounded-sm bg-green-600 hover:bg-green-800">Crear Tarea</button>
        {form.formState.errors.texto && (
          <div className='text-red-500'>
            {form.formState.errors.texto.message}
          </div>
        )}

      </form>

    </>


  )
}

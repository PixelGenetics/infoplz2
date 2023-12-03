import axios from "axios"
import { useEffect,useState } from "react"
import {useForm} from 'react-hook-form'

    // export async function uploadContent (content_author,
    // content_summary,content_parrafo,content_date,content_image)
    
    const UploadContent = () => {

        const {register, handleSubmit} = useForm()

    let data = {
    "content_author":`Kevin Borge`,
    "content_summary":"Un mock server en Postman es una herramienta que nos permite simular las respuestas de una API (Application Programming Interfaces - Interfaz de Programación de Aplicaciones)",
    "content_parrafo":"Con un mock server puedes definir y configurar diferentes endpoints según las necesidades y las respuestas según la situación. ",
    "content_date":"2023-11-30",
    "content_image":"https://media.istockphoto.com/id/1419410282/es/foto/silencioso-bosque-en-primavera-con-sol-brillante-hermoso.jpg?s=1024x1024&w=is&k=20&c=UxC-CQ-Ik_BbSH7hgQRzIl_Rq1NoC6-Wbn0-cVdgQDI="}

    useEffect(()=> {
        axios.post('http://localhost:3000/api/publicacion',data).then(resp =>{
                console.log("dasdasdasd")
        })
    })

    return(
            <>
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit ((data) => {
                        console.log("bandera",data)
                    })} className="border-2 border-red-400">
                        <div className="flex flex-col text-center gap-2 w-[500px]">
                        <label htmlFor="">Autor</label>
                        <input type="text" defaultValue="" {...register("content_author")} className="rounded-md "/>
                        <label htmlFor="">Resumen</label>
                        <input type="text" defaultValue="" {...register("content_summary")} className="rounded-md  h-20"/>
                        <label htmlFor="">Informacion</label>
                        <input type="text" defaultValue="" {...register("content_parrafo")} className="rounded-md h-52"/>
                        <label htmlFor="">Fecha</label>
                        <input type="text" defaultValue="" {...register("content_date")} className="rounded-md"/>
                        <label htmlFor="">Link de imagen</label>
                        <input type="text" defaultValue="" {...register("content_image")} className="rounded-md"/>
                        <button type="submit" className="border-2 border-blue-400 bg-slate-500">Subir</button>
                        </div>
                    </form>
                </div>
            </>
        )
}

export default UploadContent
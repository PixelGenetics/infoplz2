import axios from "axios"
import { useEffect,useState } from "react"
import {useForm} from 'react-hook-form'
import { useNavigate } from "react-router-dom"

    // export async function uploadContent (content_author,
    // content_summary,content_parrafo,content_date,content_image)
    
    const UploadContent = () => {

    const {register, handleSubmit} = useForm()

    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        console.log(data)
            axios.post('http://localhost:3000/api/publicacion',data).catch(error => {
            navigate('/404')
        })
    })

    const paginaError = () => <p>Error404</p>

    // let data = {onSubmit}
    // console.log("data",data)

    return(
            <>
                <div className="flex justify-center">
                    <form onSubmit={onSubmit} className="border-2 border-red-400">
                        <div className="flex flex-col text-center gap-2 w-[500px]">
                        <label htmlFor="">Autor</label>
                        <input type="text" defaultValue="" {...register("content_author")} className="rounded-md "/>
                        <label htmlFor="">Resumen</label>
                        <textarea name="" id="" cols="30" rows="5" {...register("content_summary")}></textarea>
                        <label htmlFor="">Informacion</label>
                        <textarea name="" id="" cols="30" rows="10" {...register("content_parrafo")}></textarea>
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
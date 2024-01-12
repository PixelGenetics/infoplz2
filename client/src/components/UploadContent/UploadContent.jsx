import axios from "axios"
import {useForm} from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import "../UploadContent/UploadContentStyle.css"
import LoadFonts from "../Config/LoadFonts"
import { useEffect,useState } from "react"


    // export async function uploadContent (content_author,
    // content_summary,content_parrafo,content_date,content_image)
    
    const UploadContent = () => {

    const [fontsLoaded, setFontsLoaded] = useState(false);
    const {register, handleSubmit} = useForm()
    const [inicio,setInicio] = useState([]);

    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        console.log(data)
            axios.post('http://localhost:3000/api/publicacion',data).catch(error => {
                console.log("error: ",error)
            navigate('/404')
        })
    })

    const paginaError = () => <p>Error404</p>

    useEffect(() => {
        axios.get('http://localhost:3000/api/publicacionreveslimited').then(resp => {
    console.log("submit", resp.data.rows)
    setInicio(resp.data.rows)
        });
    }, []);
    
    useEffect(() => {
        LoadFonts(() => {
        setFontsLoaded(true);
        })
    })

    const titleStyle = {
        fontFamily: fontsLoaded ? 'Quicksand, sans-serif' : 'serif',
        fontWeight: '600',
        fontSize: '36px',
        marginBottom:'16px'
    };

    const contentStyle = {
        fontFamily: fontsLoaded ? 'Lato, sans-serif' : 'serif',
        fontWeight: '300',
        fontSize:'18px',
        marginBottom:'16px'
    };
    // let data = {onSubmit}
    // console.log("data",data)

    return(
            <>
                <div className="UploadContent">
                    <form onSubmit={onSubmit} className="">
                        <div style={contentStyle} className="formContent">
                        <label htmlFor="" style={titleStyle}>Autor</label>
                        <input type="text" defaultValue="" {...register("content_author")}/>
                        <label htmlFor="" style={titleStyle}>Resumen</label>
                        <textarea name="" id="" cols="30" rows="5" {...register("content_summary")}></textarea>
                        <label htmlFor="" style={titleStyle}>Informacion</label>
                        <textarea name="" id="" cols="30" rows="10" {...register("content_parrafo")}></textarea>
                        <label htmlFor="" style={titleStyle}>Fecha</label>
                        <input type="text" defaultValue="" {...register("content_date")} className=""/>
                        <label htmlFor="" style={titleStyle}>Link de imagen</label>
                        <input type="text" defaultValue="" {...register("content_image")} className=""/>
                        <button type="submit" className="">Subir</button>
                        </div>
                    </form>
                </div>
            </>
        )
}

export default UploadContent
/*import axios from "axios"
import {useForm} from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import "../UploadContent/UploadContentStyle.css"
import LoadFonts from "../Config/LoadFonts"
import { useEffect,useState } from "react"
// import Form from 'react-bootstrap/Form';

    const UploadContent = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const {register, handleSubmit, formState:{errors} } = useForm()
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
                {/* <div className="UploadContent"> */}
                    {/* <form onSubmit={onSubmit} className="">
                        <div style={contentStyle} className="formContent">

                        <label htmlFor="" style={titleStyle}>Autor</label>
                        <input type="text" defaultValue=""  {...register("content_author")}/>
                        {}

                        <label htmlFor="" style={titleStyle}>Title</label>
                        <textarea name="" id="" cols="30" rows="10"{...register("content_title", {required:true, maxLength:150})}></textarea>
                        {errors.content_title && errors.content_title.type === "required" && <span>This is required</span>}
                        {errors.content_content_title && errors.content_title.type === "maxLength" && <span>Max length exceeded</span>}

                        <label htmlFor="" style={titleStyle}>Resumen</label>
                        <textarea name="" id="" cols="30" rows="5" {...register("content_summary", {required: true, maxLength:150})}></textarea>
                        {errors.content_summary && errors.content_summary.type === "required" && <span>This is required</span>}
                        {errors.content_summary && errors.content_summary.type === "maxLength" && <span>Max length exceeded</span>}

                        <label htmlFor="" style={titleStyle}>Informacion</label>
                        <textarea name="" id="" cols="30" rows="10" {...register("content_parrafo", {required:true})}></textarea>
                        {errors.content_parrafo && errors.content_parrafo.type === "required" && <span>This is required</span>}

                        <label htmlFor="" style={titleStyle}>Fecha</label>
                        <input type="text" defaultValue="" {...register("content_date", {required:true})} className=""/>
                        {errors.content_date && errors.content_date.type === "required" && <span>This is required</span>}

                        <label htmlFor="" style={titleStyle}>Link de imagen</label>
                        <input type="text" defaultValue="" {...register("content_image", {required:true})} className=""/>
                        {errors.content_image && errors.content_image.type === "required" && <span>This is required</span>}

                        <button type="submit" className="">Subir</button>

                        </div>
                    </form> */}

{/*<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/> */}

                {/* </div> 
            </>
        ) 
}

export default UploadContent*/ }
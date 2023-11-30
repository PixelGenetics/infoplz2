import { useEffect,useState } from "react"
import axios from "axios"
const Body = () =>{

    const [inicio,setInicio] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/api/publicacion?page=1&limit=3').then(resp => {
            setInicio(resp.data.rows)
            console.log(resp.data.rows)
        })
    },[])

    const [imagenSrc,setImagenSrc] = useState(null)

    useEffect(() => {
        const obtenerImagen = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/api/upload/1`, {
              responseType: 'arraybuffer', // Indica que esperamos datos binarios en la respuesta
            });
    
            const blob = new Blob([response.data], { type: 'image/jpeg' });
            const imageUrl = URL.createObjectURL(blob);
            setImagenSrc(imageUrl);
          } catch (error) {
            console.error('Error al obtener la imagen:', error);
          }
        };
    
        obtenerImagen();
      }, []);
    

    return(
        <>
        <div className="border-2 border-red-400 flex pl-[400px] pr-[400px]">


        {imagenSrc && <img src={imagenSrc} alt="Imagen" />}  
        {
            inicio.map(item => (
            
                <div key={item.content_id} className="border-2 border-blue-400 gap h-[20%]">
                    <p className="mb-4">Author: {item.content_author}</p>
                    <p>{item.content_summary}</p>
                </div>
            ))
        }
        </div>
        </>
    )
}

export default Body

//flex flex-col items-center ml-[500px] mr-[500px] gap-4
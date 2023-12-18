import { useEffect,useState } from "react"
import axios from "axios"
const Body = () =>{

    const [inicio,setInicio] = useState([])
    const [pagina,setPagina] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/publicacionreveslimited').then(resp => {
            setInicio(resp.data.rows)
        });
    }, []);

    return(
        <>
        <div className="border-2 border-red-400 flex pl-[400px] pr-[400px]">

        {
            inicio.map(item => (
            
                <div key={item.content_id} className="border-2 border-blue-400 gap h-[20%] flex flex-col text-center">
                    <p className="mb-4">Author: {item.content_author}</p>
                    <p>{item.content_summary}</p>
                    <img src={item.content_image} alt="" className=""/>
                    {console.log("Bandera:",item.content_image)}
                </div>
            ))
        }
        </div>
        </>
    )
}

export default Body
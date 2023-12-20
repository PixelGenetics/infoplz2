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
        <div className="flex">

        {
            inicio.map(item => (
            
                <div key={item.content_id} className="border-2 border-blue-400 ml-10 mr-10 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
                    <div className="border-2 border-yellow-950 flex flex-col items-center">
                        <p className="mb-4 flex justify-center">Author: {item.content_author}</p>
                        <p className="flex text-justify ml-4 mr-4 mb-4">{item.content_summary}</p>
                        <img src={item.content_image} alt="" className="h-[200px] w-[200px] "/>
                        {console.log("Bandera:",item.content_image)}
                    </div>
                </div>
            ))
        }
        </div>
        </>
    )
}

export default Body
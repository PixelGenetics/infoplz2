import { useEffect,useState } from "react"
import axios from "axios"
const Body = () =>{

    const [inicio,setInicio] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/api/publicacion?page=1&limit=3').then(resp => {
            setInicio(resp.data.rows)
            console.log(resp.data.rows)
            console.log("dasdsad",resp.data.rows[0].content_image)
        })
    },[])


    return(
        <>
        <div className="border-2 border-red-400 flex pl-[400px] pr-[400px]">

        {
            inicio.map(item => (
            
                <div key={item.content_id} className="border-2 border-blue-400 gap h-[20%]">
                    <p className="mb-4">Author: {item.content_author}</p>
                    <p>{item.content_summary}</p>
                    <img src={item.content_image} alt="" />
                    {console.log("Bandera:",item.content_image)}
                </div>
            ))
        }
        </div>
        </>
    )
}

export default Body
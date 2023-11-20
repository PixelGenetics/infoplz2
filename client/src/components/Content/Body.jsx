import { useEffect,useState } from "react"
import axios from "axios"
const Body = () =>{

    const [inicio,setInicio] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/api/publicacion').then(resp => {
            setInicio(resp.data)
            console.log(resp.data)
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
                </div>
            ))
        }
        </div>
        </>
    )
}

export default Body

//flex flex-col items-center ml-[500px] mr-[500px] gap-4
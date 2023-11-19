import { useEffect,useState } from "react"
import axios from "axios"
const Body = () =>{

    const [inicio,setInicio] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/api/employees').then(resp => {
            setInicio(resp.data)
            console.log(resp.data)
        })
    },[])

    return(
        <>
        {
            inicio.map(item => (
                <div key={item.id}>
                    <p>Articulo:{item.nombre}</p>
                </div>
            ))
        }
        </>
    )
}

export default Body
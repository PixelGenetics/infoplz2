import { useState,useEffect } from 'react';
import './App.css'
import axios from "axios";

function App() {

  const [inicio,setInicio] = useState([]);

  useEffect(() =>{
      axios.get('http://localhost:3000/api/employees').then(resp =>{
    console.log("sadasd",resp.data);
    setInicio(resp.data)
  })},[])

  return (

    <>
      {
        inicio.map(item => (
          <div className='main'  key={item.id}>

            <div className='nombre'>
              <p className=''>Nombre: {item.nombre}</p>
            </div>

            <div className='apellido'>
              <p className=''>Apellido: {item.lastname}</p>
            </div>

          </div>
        ))
      }
    </>
  )
}

export default App

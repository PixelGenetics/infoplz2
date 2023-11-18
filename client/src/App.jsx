import { useState,useEffect } from 'react';
import './App.css'
import axios from "axios";

function App() {

  const [inicio,setInicio] = useState([]);

  useEffect(() =>{
      axios.get('http://localhost:3000/api/employees').then(resp =>{
    //console.log("sadasd",resp.data);
    setInicio(resp.data)
  })},[])

  return (

    <>

    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100vh] '>

      <div>
        <ul className='flex flex-row gap-20 justify-center pt-5 pb-5'>
          <button><li className='border-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-1 rounded-md shadow-xl'>Home</li></button>
          <button><li className='border-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-1 rounded-md shadow-xl'>Articulos</li></button>
          <button><li className='border-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-1 rounded-md shadow-xl'>Linkedin</li></button>
        </ul>
      </div>

      {
        inicio.map(item => (
          <div className='flex justify-center gap-2'  key={item.id}>

            <div className='w-[10%] border-2 border-red-500'>
              <p className=''>Nombre: {item.nombre}</p>
            </div>

            <div className='w-[10%]'>
              <p className=''>Apellido: {item.lastname}</p>
            </div>

          </div>
        ))
      }

    </div>

    </>
  )
}

export default App

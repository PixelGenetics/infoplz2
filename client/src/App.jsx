import { useState,useEffect } from 'react';
import './App.css'
import axios from "axios";
import Header from './components/header';
import Body from './components/Content/Body';
function App() {

  const [inicio,setInicio] = useState([]);

  useEffect(() =>{
      axios.get('http://localhost:3000/api/employees').then(resp =>{
    //console.log("sadasd",resp.data);
    setInicio(resp.data)
  })},[])

  return (

    <>

    <Header />
    <Body />
    </>
  )
}

export default App

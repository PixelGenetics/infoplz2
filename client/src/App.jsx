import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import UploadContent from './components/UploadContent/UploadContent.jsx';
import Error404 from './404/Error404.jsx';
function App() {

  return (

    <>
    <div className='h-[100vh] bg-gradient-to-r from-stone-600 via-sky-200 to-stone-600 border-2'>

      <h1>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/upload' element={<UploadContent />}></Route>
          <Route path='/404' element={<Error404 />}></Route>
        </Routes>
      </h1>

    </div>
    </>
  )
}

export default App

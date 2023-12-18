import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import UploadContent from './components/UploadContent/UploadContent.jsx';
import Error404 from './404/Error404.jsx';
function App() {

  return (

    <>
    <div className='h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>

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

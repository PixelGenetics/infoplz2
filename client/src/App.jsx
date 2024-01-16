import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import UploadContent from './components/UploadContent/UploadContent.jsx';
import Error404 from './404/Error404.jsx';
import SearchComponent from './components/SearchComponent/SearchComponent.jsx';
function App() {


  return (
    <>
    <div>
      <h1>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/upload' element={<UploadContent />}></Route>
          <Route path='/404' element={<Error404 />}></Route>
          <Route path='/search' element={<SearchComponent />}></Route>
        </Routes>
      </h1>
    </div>
    </>
  )
}

export default App

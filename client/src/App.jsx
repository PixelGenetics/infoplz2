import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';

import UploadContent from './components/UploadContent/UploadContent.jsx';
import Error404 from './404/Error404.jsx';
import SearchComponent from './components/SearchComponent/SearchComponent.jsx';

function App() {
  return (
    <>
      <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/upload' element={<UploadContent />} />
            <Route path='/404' element={<Error404 />} />
            <Route path='/search' element={<SearchComponent />} />
          </Routes>
      </div>
    </>
  )
}

export default App

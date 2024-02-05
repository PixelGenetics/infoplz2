import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';

// import UploadContent from './components/UploadContent/UploadContent.jsx';
import Error404 from './404/Error404.jsx';

function App() {
  return (
    <>
      <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            {/*<Route path='/upload' element={<UploadContent />} />*/}
            <Route path='/404' element={<Error404 />} />
          </Routes>
      </div>
    </>
  )
}

export default App

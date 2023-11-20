import './App.css'
import Header from './components/header';
import Body from './components/Content/Body';
function App() {

  return (

    <>
    <div className='h-[100vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <Header />
      <Body />
    </div>
    </>
  )
}

export default App

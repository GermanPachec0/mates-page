import './App.css'
import { ContactButton, Navbar, Products } from './components/index.js'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
              <Route path='/' element={<Products/>}/>
              <Route path='/home' element={<Products/>}/>
              <Route path='/category/:idCategory' element={<Products/>}/>
        </Routes>
      <ContactButton></ContactButton>
      </BrowserRouter>
    </>
  )
}

export default App

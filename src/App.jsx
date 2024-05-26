import './App.css'
import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import ListNews from './components/ListNews/ListNews'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    
    <div className="App">
      <Container>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/ListNews" element={<ListNews />} />
          </Routes>
          <Footer/>
        </BrowserRouter>  
      </Container>
    </div>
  )
}


export default App

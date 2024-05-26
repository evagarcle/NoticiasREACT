import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import ListNews from './components/ListNews/ListNews'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/ListNews" element={<ListNews />} />
        </Routes>
      </BrowserRouter>  
    </div>
  )
}


export default App

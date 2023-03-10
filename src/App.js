import "./styles/App.css";
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import OurVenders from "./Pages/OurVenders"
import Services from "./Pages/Services";


export default function App(){
  return(
    <div className = "App">
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/our vendors" element={<OurVenders/>}/>
        <Route path="/service" element={<Services/>}/>
     </Routes>

      
    </div>
    
  )
}

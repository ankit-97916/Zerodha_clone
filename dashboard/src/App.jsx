
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home"
import "./index.css";
function App() {

  return (
    <>
         <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home/>}/>
  

    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App

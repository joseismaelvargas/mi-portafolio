
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navegador } from "./components/common/Navegador.jsx"
import { Main } from "./components/common/Main.jsx"
import { Footer } from "./components/common/Footer.jsx"
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navegador></Navegador>
    <Routes>
      <Route path="/" element={<Main></Main>} ></Route>
    </Routes>
    
     <Footer></Footer>
</BrowserRouter>
    </>
  )
}

export default App

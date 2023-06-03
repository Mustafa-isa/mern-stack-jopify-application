// import Landing from "./pages/Landing"
import { BrowserRouter ,Routes,Route } from "react-router-dom"
import {Landing ,DashBoard ,Register ,Error} from "./pages"
function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/landing" element={<Landing/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/*" element={<Error/>}/>
  <Route path="/" element={<DashBoard/>}/>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App
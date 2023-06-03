// import Landing from "./pages/Landing"
import { BrowserRouter ,Routes,Route } from "react-router-dom"
import {Landing ,DashBoard ,Register ,Error} from "./pages"
import AppContext from "./context/AppContext"
function App() {
  return (
    <div>
<AppContext>
<BrowserRouter>
<Routes>
  <Route path="/landing" element={<Landing/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/*" element={<Error/>}/>
  <Route path="/" element={<DashBoard/>}/>
</Routes>
</BrowserRouter>
</AppContext>
    </div>
  )
}

export default App
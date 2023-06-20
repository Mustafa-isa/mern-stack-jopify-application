// import Landing from "./pages/Landing"
import { BrowserRouter ,Routes,Route } from "react-router-dom"
import {Landing ,Register ,Error} from "./pages"
import AppContext from "./context/AppContext"
// import {
//   Add_jop,
//   All_jops,
//   SharedLayout,
//   Stats,
//   Profile
//   } from './pages/dashboard'
  import Add_jop from "./pages/dashboard/Add_jop"
  import All_jops from "./pages/dashboard/All_jops"
  import Profile from "./pages/dashboard/Profile"
  import SharedLayout from "./pages/dashboard/SharedLayout"
  import Stats from "./pages/dashboard//Stats"
  import ProtectedRoute from './pages/ProtectedRoute'
function App() {
  return (
    <div>
<AppContext>
<BrowserRouter>
<Routes>
<Route path="/" element={
  <ProtectedRoute>
  <SharedLayout/>
  
  </ProtectedRoute>
}


>
    <Route path="stat" element={<Stats/>}/>
    <Route path="profile" element={<Profile/>}/>
    <Route path="All_jops" element={<All_jops/>}/>
    <Route path="Add_jop" element={<Add_jop/>}/>
  </Route>
  <Route path="/landing" element={<Landing/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/*" element={<Error/>}/>

</Routes>
</BrowserRouter>
</AppContext>
    </div>
  )
}

export default App
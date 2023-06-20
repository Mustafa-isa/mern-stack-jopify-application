import { useAppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"
function ProtectedRoute({children}) {
const user =useAppContext().state
const navigate =useNavigate()
if(!user){
navigate("/landing")
return
}
return children
}

export default ProtectedRoute
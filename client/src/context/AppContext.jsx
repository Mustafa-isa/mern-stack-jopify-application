import { createContext,useReducer ,useContext} from "react";
import reducer from "./reducer";
const Context = createContext();
const inialState ={
  IsLoading:false,
  show_alert:false,
      alertType:'',
      alertStatment:'',
      user:JSON.parse(localStorage.getItem("user")) || null,
      token:localStorage.getItem("token") ||null
      
}
function AppContext(props) {
  const [state,dispatch]=useReducer(reducer,inialState)
  return <Context.Provider value={{
    state,
    dispatch
  }}>{props.children}</Context.Provider>;
}
export const useAppContext=()=>{
  return useContext(Context)
}
export default AppContext;

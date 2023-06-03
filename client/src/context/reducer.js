import {SHOW_ALERT} from "./actions"

const reducer =(state,action)=>{

  if(action.type=== SHOW_ALERT){
    return{
      ...state,
      show_alert:true,
      alertType:'alert-dange',
      alertStatment:'please enter all values'
    }
  }
}
export default reducer
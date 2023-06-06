import {SHOW_ALERT ,CLEAR_ALERT} from "./actions"

const reducer =(state,action)=>{

  if(action.type=== SHOW_ALERT){
    return{
      ...state,
      show_alert:true,
      alertType:'alert-danger',
      alertStatment:'please enter all values'
    }
  }
  if(action.type=== CLEAR_ALERT){
    return{
      ...state,
      show_alert:false,
      alertType:'',
      alertStatment:''
    }
  }
}
export default reducer
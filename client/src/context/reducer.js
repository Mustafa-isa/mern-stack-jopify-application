import {SHOW_ALERT ,CLEAR_ALERT ,REGISTER_BEGIN ,REGISTER_ERROR ,REGISTER_SUCCESS} from "./actions"

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
  if(action.type === REGISTER_BEGIN ){
    return{
      ...state ,
      IsLoadingL:true,
      user:action.payload.user,
      token:action.payload.token,
      location:action.payload.location
    }
  }
  if(action.type === REGISTER_SUCCESS ){
    return{
      ...state ,
      IsLoadingL:false,
  
    }
  }
}
export default reducer
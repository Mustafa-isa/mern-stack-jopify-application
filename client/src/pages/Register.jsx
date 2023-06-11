import { useState } from "react";
import {useAppContext} from "../context/AppContext"
import Wrapper from "../assets/wrappers/RegisterPage";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";
function Register() {
  const appApi =useAppContext()

  const inialState ={
    name:"",
    email:"",
    password:"",
    isMember:true,
    ShowAlert:true
  }
  const [values,SetValues]=useState(inialState)
  const handleChange = (e) => {
    console.log(e.target);
    SetValues({
      ...values,
      [e.target.name]:e.target.value

    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const dispatch= appApi.dispatch
if(values.name==='' &&values.email==='' &&values.password===''){

dispatch({
  type:'SHOW_ALERT'
})

}else{
dispatch()
}

setTimeout(()=>{
  dispatch({
    type:'CLEAR_ALERT'
  })
},3000)

  };
  const formSwitch =()=>{
    SetValues({
      ...values,
      isMember:!values.isMember
    })
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form ">
        <Logo />
        <p style={{
          fontWeight:500,
fontSize:"30px"
        }}>Login</p>


        {
          appApi.state.show_alert &&(
            <Alert/>
          )
        }
    {
      !values.isMember &&(
        <FormRow
        type="text"
        name="name"
        value={values.name}
        handleChange={handleChange}
        labelText="name"
      />
      )
    }
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          labelText="email"
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          labelText="password"
        />
        <button className="btn btn-block">submit</button>
        <p>
          {
            values.isMember?"Not a member yet ?":"Already a member ?"
          }
          <button type="button" className="member-btn" onClick={formSwitch}>
          {
            values.isMember?"Register":"Login"
          }
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;

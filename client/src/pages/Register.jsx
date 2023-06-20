import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import Wrapper from "../assets/wrappers/RegisterPage";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Alert from "../components/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  const savaUserAndTokenInLocalStorage = (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };
  const navigate = useNavigate();

  const appApi = useAppContext();
  const dispatch = appApi.dispatch;
  const IsLoading = appApi.state.IsLoadingL;
  const inialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
    ShowAlert: true,
  };
  const Login = async (user) => {
    const email = user.email;
    const password = user.password;
    const userTryLogin = {
      email,
      password,
    };
    dispatch({ type: "Login_BEGIN" });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        userTryLogin
      );
      // assuming the server returns the created user object
      console.log(response);
      dispatch({
        type: "Login_SUCCESS",
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error(error);
      dispatch({
        type: "Login_ERROR",
      });
    }
  };
  const registerFun = async (userInputs) => {
    dispatch({ type: "REGISTER_BEGIN" });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        userInputs
      );
      // assuming the server returns the created user object
      const { Token, userCreated } = response.data;
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: {
          user: userCreated,
          token: Token,
        },
      });
      savaUserAndTokenInLocalStorage(userCreated, Token);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error(error);
      dispatch({
        type: "REGISTER_ERROR",
      });
    }
  };
  const [values, SetValues] = useState(inialState);
  const handleChange = (e) => {
    SetValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.name === "" && values.email === "" && values.password === "") {
      dispatch({
        type: "SHOW_ALERT",
      });
    } else {
      const user = {
        name: values.name,
        email: values.email,
        password: values.password,
        lastName: "Eisa",
        location: "qena",
      };

      if (values.isMember) {
        Login(user);
      } else {
        registerFun(user);
      }
    }

    setTimeout(() => {
      dispatch({
        type: "CLEAR_ALERT",
      });
    }, 3000);
  };
  const formSwitch = () => {
    SetValues({
      ...values,
      isMember: !values.isMember,
    });
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form ">
        <Logo />
        <p
          style={{
            fontWeight: 500,
            fontSize: "30px",
          }}
        >
          Login
        </p>

        {appApi.state.show_alert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            labelText="name"
          />
        )}
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
        <button className="btn btn-block">
      {
        IsLoading ?   <FontAwesomeIcon icon={faSpinner} spin /> : "Submit"
      }
          </button>
        <p>
          {values.isMember ? "Not a member yet ?" : "Already a member ?"}
          <button type="button" className="member-btn" onClick={formSwitch}>
            {IsLoading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : values.isMember ? (
              "Register"
            ) : (
              "Login"
            )}
            
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;

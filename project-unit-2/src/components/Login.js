import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../reducers/SignupLogin/action";
import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // This array will be filled out by the user
  const [tempUser, setTempUser] = useState("");
  const [tempPass, setTempPass] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [emsg, setemsg] = useState("");
  const state = useSelector((state) => {
    return {
      users: state.usersReducer.users,
      currentUser: state.usersReducer.currentUser,
    };
  });
  const getUser = (event) => {
    setTempUser(event.target.value);
  };
  const getPassword = (event) => {
    setTempPass(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    validation();
    if (errors.password === "" && errors.username === "") {
      const theuser = {
        username: tempUser,
        password: tempPass,
      };
      state.users.map((e) => {
        if (
          e.username === theuser.username &&
          e.password === theuser.password
        ) {
          // if the user is Admin open Admin page
          if (e.username === "Admin") {
            const action = login(e);
            dispatch(action);
            navigate("/Admin");
          } else {
            const action = login(e);
            dispatch(action);
            navigate("/");
            // console.log("Hi user ;)");
          }
        } else {
          setemsg("You don't have account please Sign Up");
        }
      });
    }
  };
  const handleRegister = () => {
    navigate("/signup");
  };
  const validation = () => {
    let error = {
      username: "",
      password: "",
    };
    if (!tempUser) {
      error.username = "Username is required.";
      setemsg("");
    }
    if (!tempPass) {
      error.password = "Password is required.";
      setemsg("");
    } else if (tempPass.length < 4) {
      error.password = "Password must be more than four characters.";
      setemsg("");
    }
    setErrors(error);
  };

  return (
    <div className="container2">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Login</h2>
        </div>
        <form className="form-wrapper">
          <div className="username">
            <label className="label">Username</label>
            <input
              className="input"
              type="text"
              name="username"
              value={tempUser}
              onChange={getUser}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={tempPass}
              onChange={getPassword}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              {" "}
              Login{" "}
            </button>
            {emsg && <p className="error-msg">{emsg}</p>}
            <p className="message">
              Not registered? <a onClick={handleRegister}>Create an account</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;

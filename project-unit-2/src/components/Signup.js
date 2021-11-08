import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {signup} from "../reducers/SignupLogin/action"

function Signup() {

    const dispatch = useDispatch() 
    const navigate = useNavigate();
    // This array will be filled out by the user 
    const [tempUser, setTempUser] = useState("");
    const [tempPass, setTempPass] = useState("");
    const [errors, setErrors] = useState({
        username:"",
        password:""
    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 const state = useSelector((state) => {
    return {
        users: state.usersReducer.users,
    };
  });
  
  const getUser= (event) => {
      setTempUser(event.target.value)
  }
  const getPassword= (event) => {
      setTempPass(event.target.value)
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const handleFormSubmit = (event) => {
        event.preventDefault();
        validation();
        if(errors.password == "" && errors.username == ""){
            const newUser = {
                username: tempUser,
                password:tempPass
            }
            console.log(newUser);
            console.log(state.users);
            const action = signup(newUser);
            dispatch(action);
            console.log(state.users);
            navigate(`/`);
        }
    }

    const handleLogin = () => {
        navigate("/login");
    }

    const validation = () => {
        let error={
            username:"",
            password:""
        }
         if(!tempUser){
            error.username="Username is required."
         }
         if(!tempPass){
             error.password="Password is required."
         } else if(tempPass.length < 4){
             error.password="Password must be more than four characters."
         }
         setErrors(error)
    }
         
    return (
        <div className="container2">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Sign Up</h2>
                </div>
                <form className="form-wrapper">
                    <div className="username">
                        <label className="label">Username</label>
                        <input className="input" type="text" name="username" value={tempUser} onChange={getUser}/>
                         {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input className="input" type="password" name="password" value={tempPass} onChange={getPassword}/>
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
                        <p className="message">Do you have Account ? <a onClick={handleLogin}>Log in </a></p>
                    </div>
                </form>
            </div>    
        </div>
    )
}

export default Signup;
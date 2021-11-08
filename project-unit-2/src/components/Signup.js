import {useState, useEffect} from 'react';
// import Validation from './Validation';
import { useDispatch, useSelector } from "react-redux";
// import Signup from './Signup';
import { useNavigate } from 'react-router-dom';
import {LoginUser} from "../reducers/SignupLogin/action"

function Signup() {

    const dispatch = useDispatch() 
    const navigate = useNavigate();
    // This array will be filled out by the user 
    const [tempUser, setTempUser] = useState("");
    const [tempPass, setTempPass] = useState("");
    const [values, setValues] = useState([{
        username:"",
        password:""
    }]);
    const [errors, setErrors] = useState({
        username:"",
        password:""
    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 const state = useSelector((state) => {
    return {
        values: state.usersReducer.users,
    };
  });
  
  const getUser= (event) => {
      setTempUser(event.target.value)
  }
  const getPassword= (event) => {
      setTempPass(event.target.value)
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // const handleChange = (event) => {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value,
    //     })
    // }

    const handleRegister = () => {
        navigate("/signup");
    }
    useEffect(() => {
        const action=LoginUser(values)
        dispatch(action)
    },[values])

    const handleFormSubmit = (event) => {
        event.preventDefault();

        validation();

        if(errors.password == "" && errors.username == ""){
        
        const state2 = {
        username: tempUser,
        password:tempPass
        }
        let arr = [state2]
        setValues(arr)
    }
        // setErrors((values));
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
         if(state.values[0] === null){
             error.username="You don't have account. Please click on create an account"
         }
         setErrors(error)
    }
         
    return (
        <div className="container2">
            {/* <button className="joinUs" onClick={test}>Join Us</button> */}
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Sign Up</h2>
                </div>
                <form className="form-wrapper">
                    <div className="username">
                        <label className="label">Username</label>
                        <input 
                         className="input"
                         type="text" 
                         name="username" 
                         value={values.username}
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
                         value={values.password}
                         onChange={getPassword}
                         />
                         {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>
                            Sign Up
                        </button>
                    <p className="message">Not registered? <a href="#" onClick={handleRegister}>Create an account</a></p>
                    </div>
                </form>
            </div>
           
        </div>
    )
}

export default Signup;
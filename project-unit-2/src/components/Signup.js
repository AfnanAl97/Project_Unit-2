import {useState} from 'react';
import Validation from './Validation';
import { useDispatch, useSelector } from "react-redux";

function Signup() {

    const dispatch = useDispatch();

    // This array will be filled out by the user 
    const [values, setValues] = useState({
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
        setValues(event.target.value)
      }
      const getPassword= (event) => {
        setValues(event.target.value)
      }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const [errors, setErrors] = useState({});

    // const handleChange = (event) => {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value,
    //     })
    // }

    //Do i make it action ???!!!
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
    }
    return (
        <div className="container2">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create Account</h2>
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
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;
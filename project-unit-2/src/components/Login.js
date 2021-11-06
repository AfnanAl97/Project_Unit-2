import {useState} from 'react';
import validation from './validation';

function Login(){

        // This array will be filled out by the user 
        const [values, setValues] = useState({
            username:"",
            password:""
        });
    
        const [errors, setErrors] = useState({});
    
        const handleChange = (event) => {
            setValues({
                ...values,
                [event.target.name]: event.target.value,
            })
        }
    
        const handleFormSubmit = (event) =>{
            event.preventDefault();
            setErrors(validation(values));
        }
        return (
            <div className="container">
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
                             value={values.username}
                             onChange={handleChange}
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
                             onChange={handleChange}
                             />
                             {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        <div>
                            <button className="submit" onClick={handleFormSubmit}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
}

export default Login;
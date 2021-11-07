import { useSelector } from "react-redux";

function Validation({username, password}) {


    const state = useSelector((state) => {
        return {
            vals: state.usersReducer.users,
        };
      });
//If the user skip entering the name or password and click on submit it will return name or password is required!
    let errors={};

    if(!username){
       return errors.username="UserName is required."
    }
    if(!password){
       return errors.password="Password is required."
    } else if(password.length < 4){
       return errors.password="Password must be more than four characters."
    }
    if(state.vals[0] === null){
       return errors.username="You don't have account. Please click on create an account"
    }
    return(
        <div>
            hello
        </div>
    )

}

export default Validation;

function validation(values) {

//If the user skip entering the name or password and click on submit it will return name or password is required!
    let errors={};

    if(!values.username){
        errors.username="UserName is required."
    }
    if(!values.password){
        errors.password="Password is required."
    } else if(values.password.length < 3){
        errors.password="Password must be more than three characters."
    }

    return errors;
}

export default validation;
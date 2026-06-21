import { Button } from "components/Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, loginUser, logOutUser } from "redux/users/usersOperations";


export const AuthForm = () => {

  const [isRegistering, setIsRegistering] = useState(true);

    const dispatch = useDispatch()

    const handleSubmit =(e) =>{
e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    if(isRegistering){
      dispatch(createUser({email, password}))
    } else {
        dispatch(loginUser({email, password}))
    }
    console.log(email, password)
      form.reset();
    }

    return(
        <form  onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Enter email here"
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password here"
      />

       <Button type="submit">{isRegistering ? "Register" : "Login"}</Button>
      <Button type="button" onClick={() => {dispatch(logOutUser())}}>Log out</Button>
      <Button type="button" onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Switch to Login" : "Switch to Register"}
      </Button>
    </form>
    )
} 
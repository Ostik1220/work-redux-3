import { Button } from "components/Button/Button";
import { useDispatch } from "react-redux";
import { createUser } from "redux/users/usersOperations";

export const AuthForm = () => {

    const dispatch = useDispatch()

    const handleSubmit =(e) =>{
e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
        dispatch(createUser({email, password}))
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
      <Button type="submit">Register</Button>
    </form>
    )
} 
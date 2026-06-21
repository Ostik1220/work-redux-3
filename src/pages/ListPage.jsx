import { TaskList } from "components/TaskList/TaskList";
import { AppBar } from "components/AppBar/AppBar";
import { TaskForm } from "components/TaskForm/TaskForm";
import { useEffect } from "react";
import { fetchTodos } from "redux/todos/todosOperation";
import { useDispatch } from "react-redux";
import { Button } from "components/Button/Button";
import { logOutUser } from "redux/users/usersOperations";

export const ListPage = () => {
    const dispatch = useDispatch();
    
      useEffect(() => {
        dispatch(fetchTodos());
      }, []);   
  return (
    <>
      <AppBar />
      <TaskForm />
      <TaskList />
            <Button type="button" onClick={() => {dispatch(logOutUser())}}>Log out</Button>
      
    </>
  );
};

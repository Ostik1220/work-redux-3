import { TaskList } from "components/TaskList/TaskList";
import { AppBar } from "components/AppBar/AppBar";
import { TaskForm } from "components/TaskForm/TaskForm";
import { useEffect } from "react";
import { fetchTodos } from "redux/todos/todosOperation";
import { useDispatch } from "react-redux";

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
    </>
  );
};

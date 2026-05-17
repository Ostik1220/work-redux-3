import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
// import { changeTodo, removeTodo } from "redux/todos/todosSlice";
import { changeTodo, deleteTodo } from "redux/todos/todosOperation";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  
  const handleChange = () => {
  dispatch(changeTodo(
    { ...task, completed: !task.completed }
  ))
      console.log({ ...task, completed: !task.completed })

  }

  const handleRemove = () => {
    dispatch(deleteTodo(task.id));
  }
  
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleChange}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} type="button" onClick={handleRemove}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

import React, { useRef } from "react";
import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

const AddItem = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "SetToDo":
        return { ...state, name: action.value };
      case "AddToDo":
        const newTodo = {
          id: state.todos.length + 1,
          name: action.name,
        };
        return {
          name: "",
          ...state,
          todos: [...state.todos, newTodo],
        };
      case "DeleteToDo":
        return {
          ...state,
          todos: state.todos.filter((item) => item.id !== action.id),
        };
      case "EditToDo":
        return{
          ...state,
          todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, name:action.newName} :todo)
      }
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, { name: "", todos: []});

  const onchange = (e) => {
    dispatch({ type: "SetToDo", value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "AddToDo", name: state.name });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={onchange} />
        <button type="submit">ADD</button>
      </form>
      <div>
        {state.todos &&
          state.todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.name}</span>
              <button
                onClick={() =>{
                  console.log(todo.id),
                  dispatch({
                    type: "DeleteToDo",
                    id:todo.id
                  })}
                }
              >
                Delete
                <button onClick={() => {
                let newName = prompt('New Name', todo.name);
                if (newName !== null && newName.trim() !== "") {
                  dispatch({
                    type: "EditToDo",
                    id: todo.id,
                    newName: newName
                  });
                }
              }}>
                Edit
              </button>
            </li>
          ))}
      </div>
    </>
  );
};

export default AddItem;

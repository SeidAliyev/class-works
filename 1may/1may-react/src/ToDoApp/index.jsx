import React, { useRef } from "react";
import { useReducer } from "react";

const AddItem = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "SetToDo":
        return { ...state, name: action.value };
      case "AddToDo":
        const newTodo = {
          id: state.todos.lenght + 1,
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
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, { name: "", todos: [] });

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
                onClick={() =>
                  dispatch({
                    type: "DeleteToDo",
                    id:todo.id
                  })
                }
              >
                Delete
              </button>
            </li>
          ))}
      </div>
    </>
  );
};

export default AddItem;

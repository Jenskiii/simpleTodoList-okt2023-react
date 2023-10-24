import { useState } from "react";

export function Todo() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  function removeTodo( item ) {
    setTodo( array => array.filter(todo => todo !== item))
  }

  return (
    <>
      <div className="todo-list | flow">
        <h1>TodoList</h1>
        <div className="flex flow">
            <input
              type="text"
              name="value"
              id="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
            className="button"
              onClick={() => {
                // create todo if value is created
                value
                  ? setTodo((todos) => [...todos, value])
                  : setTodo((todos) => [...todos]);
                setValue("");
              }}
            >
              Create Todo
            </button>
        </div>

        <div className="flow">
          <h2>Todo's</h2>
          {todo?.map((item, index) => {
            return (
              <div className="todo" key={index}>
                <input className="checkbox" type="checkbox" />
                <p className="todo-value">{item}</p>
                <button onClick={() => removeTodo( item )}>x</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

import React, {useState} from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export default function TodoList() {
  const [value, setValue] = useLocalStorage("todo", []);
//   console.log(value);

  const [todoInp, setTodoInp] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (todoInp.trim() !== "") {
      setValue([...value, { id: Math.random(), name: todoInp }]);
      setTodoInp("");
    }
  }

  function handleDelete(item){
    setValue(value.filter((b)=>b.id !== item.id))

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Todo List</h2>
        <input
          type="text"
          value={todoInp}
          onChange={(e) => setTodoInp(e.target.value)}
        />
        <button>add</button>
      </form>
      <div className="lists">
      <ul>
                {value.map((item, i) => <li key={i}>
                    <span>{item.name}</span>
                    <button onClick={() => handleDelete(item)}>X</button>
                </li>
                )}
            </ul>
      </div>
    </>
  );
}

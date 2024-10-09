// import React, { useState, useContext, createContext } from "react";

// const TodoContext = createContext();

// const Myprovider = ({ children }) => {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);

//   const addTodo = () => {
//     setTodos([...todos, todo]);
//     setTodo("");
//   };
//   return (
//     <TodoContext.Provider value={{ todos, setTodos, addTodo, todo, setTodo }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };
// const TodoForm = (props) => {
//   const { todo, setTodo, addTodo } = useContext(TodoContext);
//   return (
//     <>
//       {props.title}
//       <input
//         type="text"
//         value={todo}
//         placeholder="Add your todo"
//         onChange={(e) => setTodo(e.target.value)}
//       />
//       <button type="submit" onClick={props.itemTodo}>
//         Add Todo
//       </button>
//     </>
//   );
// };

// function TodoList(props) {
//   console.log(props);
//   const { todos } = useContext(TodoContext);

//   return (
//     <ul>
//       {todos.length > 0 &&
//         todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}
//     </ul>
//   );
// }

// function TodoItem({ todo }) {
//   return <li>{todo}</li>;
// }
// const TodoApp = () => {
//   return (
//     <TodoProvider>
//       <h1>Todo Application</h1>
//       <TodoList />
//       <TodoForm title={"Todo Form"} />
//     </TodoProvider>
//   );
// };
// export default TodoApp;
import React, { useState, useContext, createContext } from "react";
import TodoProvider, { TodoContext } from "./Context";

// const TodoProvider = ({ children }) => {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);

//   const addTodo = () => {
//     setTodos([...todos, todo]);
//     setTodo("");
//   };

//   return (
//     <TodoContext.Provider value={{ todos, setTodos, addTodo, todo, setTodo }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };

const TodoForm = (props) => {
  const { todo, setTodo, addTodo } = useContext(TodoContext);

  return (
    <>
      {props.title}
      <input
        type="text"
        value={todo}
        placeholder="Add your todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="button" onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

function TodoList(props) {
  console.log(props);
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.length > 0 &&
        todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}
    </ul>
  );
}

function TodoItem({ todo }) {
  return <li>{todo}</li>;
}

const TodoApp = () => {
  return (
    <TodoProvider>
      <h1>Todo Application</h1>
      <TodoList />
      <TodoForm />
    </TodoProvider>
  );
};

export default TodoApp;

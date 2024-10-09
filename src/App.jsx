import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import TodoApp from "./Todos.jsx";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/todos">Todolist</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="*" element={ <h1>404 Not Found</h1>}/> 
          <Route path="/about" element={ <About />}>
           
          </Route>
          <Route path="/users" element={<Users />}>
            
          </Route>
          <Route path="/" element={ <Home />}>
           
          </Route>
          <Route path="/todos" element={ <TodoApp />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


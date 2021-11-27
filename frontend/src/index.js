import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import TodoList from "./routes/TodoList";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
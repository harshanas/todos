import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import NotFound from "./errors/NotFound";
import Login from "./routes/Login";
import Todos from "./routes/Todos";

import store from './store/index';


const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="login" element={<Login />} />
        <Route path='*' exact={true} element={<NotFound/> }/>

      </Routes>
    </BrowserRouter>
    </Provider>,
  rootElement
);
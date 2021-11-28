import Container from '@mui/material/Container';
import React from 'react';
import { connect } from "react-redux";

import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const mapStateToProps = state => {
  return { todos: state.todos };
};

const Todos = ({ todos }) => {
    return (
      <React.Fragment>
        <Header/>
        <Container fixed sx={{ mt: 3, minWidth:100}} alignItems="center" justifyContent="center">

          <TodoForm/>
          <TodoList list={{todos}}/>
        </Container>
      </React.Fragment>
    );
  }

const todosComp = connect(mapStateToProps)(Todos);

export default todosComp;

import List from '@mui/material/List';

import TodoItem from './TodoItem';


export default function TodoList(props) {
    
    return (
        <List >
            {props.list.todos.map(function(todo, i){
                return <TodoItem description={todo.description} id={todo.id} key={i}/>;
            })}
        </List>
    );
}
import { connect } from "react-redux";
import store from '../store/index';
import { removeTodo } from "../actions/index";

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

const mapStateToProps = state => {
    return { todos: state.todos };
};

const handleDelete = (id) => {
    store.dispatch( removeTodo({ id }) )
}

const TodoItem = (props) => {
    return (
        <ListItem
            secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(props.id)}>
                <DeleteIcon />
            </IconButton>
            }
        >
            <ListItemAvatar>
            <Avatar>
                <FolderIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={ props.description }
            />
        </ListItem>
    );
}

const todoItemComp = connect(mapStateToProps)(TodoItem);

export default todoItemComp;
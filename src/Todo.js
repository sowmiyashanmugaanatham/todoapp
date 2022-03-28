import React, { useState } from 'react';
import './Todo.css';
import { List, Avatar, ListItemAvatar, ListItem, ListItemText, Button, Modal, fabClasses } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import db from './firebaseapp';
import {makeStyles} from '@mui/styles';
import { styled } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { useTheme } from '@mui/styles';
import { ClassNames } from '@emotion/react';





const useStyles = createTheme((theme)=>({
  paper: {
  position: 'absolute',
  width:400,
  backgroundColor:theme.palette.background.paper,
  border:'2px solid #000',
  boxShadow:theme.shadows[5],
  padding:theme.spacing(2,4,3),
},
}));




function Todo(props) {
  const theme=useTheme()
  // const classes=useStyles();
  const [open,setOpen] =useState(false);
  const [input, setInput] =useState('');


  const handleOpen =() => {
    setOpen(true);
  };

  const updateTodo =()=> {
    // update the todo with the new input text
    db.collection('todos').doc(props.todo.id).set({
    todo: input 
    },{ merge:true})
    setOpen(false);

  }


  return (
    <ThemeProvider theme={theme}>
    <Modal
    open={open}
    onClose={e => setOpen(false)}
    >
      <div>
        <h1>I am a modal</h1>
        <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
        <Button onClick={updateTodo}>Update Todo</Button>

    </div>
    </Modal>
    <List>
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Dummy deadline 🌺" />
      </ListItem>
      <button  onClick={e => setOpen(true)}>Edit</button>
      <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
    </List>
    </ThemeProvider>
  )
  }

export default Todo
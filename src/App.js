
import React, { useEffect, useState } from 'react';
import Todo from './Todo'
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import './App.css';
import db from './firebaseapp';
import firebase from 'firebase/compat/app'

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  // const [reloadFlag, setRelaodFlag]=useState(false)
  // console.log(`input -- ${input}`)
  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log("snapshot -- ", snapshot)
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, []);

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault();  //will stop the REFRESH

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // console.log(`input inside addTodo -- ${input} ${{
    //   todo: input,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // }}`)
    setInput(''); //clear up the input after clicking add todo button
    // setRelaodFlag(!reloadFlag)
  }
  // console.log(`todo object ${todos}`)
  return (

    <div className="App">
      <h1>Hello Clever Programmers 💥!</h1>
      <form>
        <FormControl>
          <InputLabel>🥳 Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
      SowmiyaShanmugaanatham
    </div>
  );
}
export default App;


import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import './App.css'

const Header = () => {
  return (
    <header>
      <Typography variant="h5" component="h1">A checklist</Typography>
    </header>
  );
};

// This is the ToDo list item component
const ToDo = ({ index, todo }) => {
  return (
    <div
      id={todo.id}
      key={todo.id}
      name="todo"
      value={todo.id}
      className={"todo"}
    >
      {index}. {todo.task}
    </div>
  );
};

const ToDoList = () => {
  // Tip, should return the ToDo component
  return (
    <div className={"main-list"}>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        style={{ margin: "20px 0" }}
      >
        Clear Completed
      </Button>
    </div>
  );
};

const ToDoForm = () => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <Button color="primary" type="submit">Submit</Button>
    </form>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <ToDoList/>
      <ToDoForm />
    </div>
  );
}

export default App;

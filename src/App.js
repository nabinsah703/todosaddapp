import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React, { useState, useEffect } from 'react';


function App() {
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }


  const onDelete = (todo) => {
    alert("Are you sure ?");
    console.log(" I am on delete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todo", JSON.stringify(todos));
  }
  const addTodo = (title, description) => {
    console.log("I am adding this todo", title, description);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else { sno = todos[todos.length - 1].sno + 1; }

    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos])



  return (
    <>
     
        <Header title="My Todos List" />
        <About/>
        
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            
       

        <Footer />
     
    </>

  )
}


export default App;

import { useState, useEffect } from 'react';
import './App.css';
//Importing Componenets
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  //Run once when App starts
  useEffect(() => {
    getLocalTodos();
  }, [])
  //useEffect
  useEffect(() => {
    console.log(`Hey`)
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  //functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;

      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;

      default:
        setFilteredTodos(todos)

    }
  }

  //save to Local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"))
      setTodos(localTodos)
    }
  }

  const deleteStorage = () =>{
    localStorage.clear();
  }

  return (
    <div className="App">
      <header>
        <h1> Todo List </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        deleteStorage={deleteStorage}

      />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

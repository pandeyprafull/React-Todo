import React from 'react'

function Form({ setInputText, todos, setTodos, inputText, setStatus, deleteStorage }) {
    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.floor(Math.random() * 1000).toFixed(2) }
        ])
        setInputText("")
    }

    const setStatusHandler = (e) => {
        console.log(e.target.value)
        setStatus(e.target.value)
    }
    return (
        <div>
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={setStatusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
                <div>
                <button onClick={deleteStorage}>Clear All</button>
                </div>
            </form>
        </div>
    )
}

export default Form

import React, { useState, useEffect } from 'react';
import './App.css'


function Todo({ todo, index, completeTodo, deleteTodo }){
    return(
        <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
            { todo.text }
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => deleteTodo(index)}>x</button>
            </div>
        </div>
    )
}

function TodoForm({addTodo}){
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value)
        setValue('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder='Please add todo...' className="input" value={value} type="text" onChange={e => setValue(e.target.value)} />
        </form>
    )
}

function App() {
    const[todos, setTodos] = useState([
        { 
            text: 'Get Homework done',
            isCompleted: false 
        },
        { 
            text: 'Get COVID 19 updates',
            isCompleted: false 
        },
        { 
            text: 'Some Random work',
            isCompleted: false 
        },
    ])

    const addTodo = text => {
        const NewTodos = [... todos, { text }]
        setTodos(NewTodos)
    }


const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
}

const deleteTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
}

return (
    <div className='App'>
        <div className="todo-list">
            {todos.map((todo, index) => (
                <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
            ))}
            <TodoForm addTodo={addTodo} />
        </div>
    </div>
)

}

export default App;
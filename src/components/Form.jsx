import '../App.css'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form(){
    //useState use two different values, the first is the value indead and the second is the iterative value
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if(localValue === null) return []

        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos])
    
    function addTodo(title){
        const id = uuidv4()

        setTodos(currentTodos => {
            return [
                 ...currentTodos,
                {id: id, title, completed: false},
            ]
        })

    }

    function toggleTodo(id, completed){
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if(todo.id === id){
                    return {...todo, completed}
                }

                return todo
            })
        })
    }

    function deleteTodo(id){
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }

    return (
        <>
            <NewTodoForm onSubmit={addTodo}/>
            <h1 className="header">Todo List</h1>
            <TodoList 
                todos = {todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </>
        
    )
}

export default Form

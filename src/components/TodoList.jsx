import TodoItem from "./TodoItem"
import 'bootstrap/dist/css/bootstrap.min.css';


function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo =>{
                return (
                    <TodoItem
                        {...todo} 
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        //id={todo.id} 
                        //completed={todo.completed} 
                        //title={todo.title} 
                        key={todo.id}/>
                )
            })}
        </ul>
    )
}

export default TodoList
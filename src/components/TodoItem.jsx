import 'bootstrap/dist/css/bootstrap.min.css';

function TodoItem({completed, id, title, toggleTodo, deleteTodo}){
    return (
        <li>
            <label>
                <input 
                    type="checkbox" 
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                /> 
                {title}
            </label>
            <button 
                className="btn btn-danger"
                onClick={() => deleteTodo(id)}
            > Delete
            </button>
        </li>
      )
}

export default TodoItem
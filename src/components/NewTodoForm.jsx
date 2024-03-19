import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



function NewTodoForm({onSubmit}){
    const [newItem, setNewItem] = useState("")
    
    function handleSubmit(e){
        e.preventDefault()

        if(newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input 
                    type="text" 
                    id="item" 
                    value={newItem} 
                    onChange={e => setNewItem(e.target.value)}/>
            </div>
            <button className="btn btn-primary">Add</button>
        </form>
    )
    
}

export default NewTodoForm

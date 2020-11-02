import React from 'react';
import TodoList from './Todolist';

export default function Todo({ todo }) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete}/>
               {todo.name} 
            </label>
        </div>
    )
}
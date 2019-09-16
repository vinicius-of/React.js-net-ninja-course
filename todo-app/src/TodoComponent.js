import React from "react";

export default function TodoComponent({todos, deleteTodo}) {

    const list = todos.length ? (
        todos.map(item => {
            return (
                <div className="collection-item" key={item.id}>
                    <span className="container">{item.content}</span>
                    <button style={{marginLeft: 2 + 'em'}} className="btn-small" onClick={() => {deleteTodo(item.id)}}>Delete</button>
                    <label htmlFor="done">
                        <span>Done?</span>
                        <input type="checkbox" id="done"/>
                    </label>
                </div>
            )
        })
    ) : (
        // If the list has no item
        <p className="center" >You have no item in this list!</p>
    );

    return(
        <div className="todo collection">
            {list}
        </div>
    )
}
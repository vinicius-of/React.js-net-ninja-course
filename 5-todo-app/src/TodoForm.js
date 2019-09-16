import React, {Component} from "react";

export default class TodoForm extends Component{

    state = {
        id: null,
        content: null,
        done: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        document.getElementById('content').value = ""
        this.props.createTodo(this.state)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="content">What task would you like to save?</label>
                <input type="text" id="content" onChange={this.handleChange}/>
                <button className="btn" type="submit">Save</button>
            </form>
        )
    }
}
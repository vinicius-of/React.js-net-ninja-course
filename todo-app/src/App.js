import React, {Component} from 'react';
import TodoComponent from './TodoComponent'
import TodoForm from './TodoForm'

class App extends Component{

  state = {
    todos: [
      {id: 1, content: 'Buy some Milk', done: false},
      {id: 2, content: 'Homework', done: false}
    ]
  }

  createTodo = (newTodo) => {
    newTodo.id = this.state.todos.length + 1
    let todo = [...this.state.todos, newTodo]
    this.setState({
      todos: todo
    })
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(item => {
      return item.id !== id
    })

    this.setState({
      todos: todos
    })
  }

  render(){
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">
          Todo List
        </h1>
        <TodoComponent todos = { this.state.todos } deleteTodo={this.deleteTodo} />
        <TodoForm createTodo = {this.createTodo} />
      </div>
    )
  }
}

export default App;

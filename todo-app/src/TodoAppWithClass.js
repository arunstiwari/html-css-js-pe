import React, {Component} from 'react';

let seq=1;

const Todo = ({todo, markComplete}) => {
    return (
        <div className="todos-list">
            <span className={todo.complete?'complete':null}>{todo.item}</span>
                <button className="button-complete" onClick={()=> markComplete(todo.id)}>Mark Complete</button>
        </div>
    )
}

const TodoList = ({todos, markComplete}) => {
    console.log('todos ',todos)
    return (
        <div >
            <p>Todo List</p>
            <div>
            {todos.map((todo,i)=> (<Todo key={i} todo={todo} markComplete={markComplete} />))}
            </div>
        </div>
    );
};

class TodoForm extends React.Component {
    state ={
        todo:''
    }

     handleSubmit = (e) => {
        e.preventDefault();
        const item = {id: seq++, item: this.state.todo}
        this.props.createNewTodo(item);
        this.setState({todo: ''})
    }

     onTodoChange = (e) => {
        this.setState( {todo: e.target.value})
        console.log('this.state : ',this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter todo..."
                    onInput={this.onTodoChange}
                    value={this.state.todo}
                />
                <button>Add New Todo</button>
            </form>
        );
    }


}



class TodoAppWithClass extends Component {
    state = {
        todos: []
    }
    createNewTodo = (todo) => {
        this.setState({todos: this.state.todos.concat(todo)})
    }

     markComplete = (id) => {
        let newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.complete = !todo.complete
            }
            return todo
        })
        this.setState({todos:[...newTodos]})
    }

    render() {
        return (
            <div>
                <TodoForm createNewTodo={this.createNewTodo}/>
                <TodoList todos={this.state.todos} markComplete={this.markComplete} />
            </div>
        );
    }
}

export default TodoAppWithClass;
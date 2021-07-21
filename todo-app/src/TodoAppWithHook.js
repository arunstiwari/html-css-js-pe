import React, {useState} from 'react';

let seq = 1;

const Todo = ({todo, markComplete}) => {
    return (
        <div className="todos-list">
            <span className={todo.complete?'complete':null}>{todo.item}</span>
            <button className="button-complete" onClick={()=> markComplete(todo.id)}>Mark Complete</button>
        </div>
    )
}

const TodoList = ({todos , markComplete}) => {
    return (
        <>
            <h1>Todos List</h1>
            {todos.map(todo =>(<Todo key={todo.id} todo={todo} markComplete={markComplete} />))}
        </>
    );
};

const TodoForm = ({createNewTodo}) => {
    const[todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {id: seq++, item: todo, complete: false}
        createNewTodo(item);
        setTodo('')
    }

    const onTodoChange = (e) => {
        setTodo(  e.target.value)
        console.log('todo : ',todo);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter todo..."
                onInput={onTodoChange}
                value={todo}
            />
            <button>Add New Todo</button>
        </form>
    )
}

const TodoAppWithHook = () => {
    const[todos, setTodos] = useState([]);

    const createNewTodo = (todo) => {
        setTodos([...todos,todo]);
    }

    const markComplete = (id) => {
        let newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.complete = !todo.complete
            }
            return todo
        })
        setTodos([...newTodos])
    }
    return (
        <div>
            <TodoForm createNewTodo={createNewTodo}/>
            <TodoList todos={todos}  markComplete={markComplete}/>
        </div>
    );
};

export default TodoAppWithHook;
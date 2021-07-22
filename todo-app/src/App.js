import './App.css';
import TodoAppWithClass from "./TodoAppWithClass";
import TodoAppWithHook from "./TodoAppWithHook";
import TodoAppWithUseReducer from "./TodoAppWithUseReducer";

function App() {
  return (
    <div className="App">
      {/*<TodoAppWithClass />*/}
        <TodoAppWithHook />
      {/*  <TodoAppWithUseReducer />*/}
    </div>
  );
}

export default App;

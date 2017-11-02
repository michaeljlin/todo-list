import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import TodoList from './todo_list';

const App = () => (
    <div className="container">
        <div className="app">
            <h1 className="center-align">To Do List</h1>
            <hr />
            <TodoList />
        </div>
    </div>
);

export default App;

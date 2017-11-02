import React, { Component } from 'react';
import todoData from '../helpers/dummy_data';
import { connect } from 'react-redux';
import { getAll } from "../actions/index";

class TodoList extends Component{

    componentDidMount(){
        this.props.getAll();
    }

    render(){
        const todoElements = todoData.map((todoItem, index)=>{return <li className="collection-item" key={index}>{todoItem.title}</li>;});

        console.log('List from props: ',this.props.allTodos);

        return(
            <div>
                <ul className="collection">
                    {todoElements}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        allTodos: state.todo.all
    }
}

export default connect(mapStateToProps, {getAll})(TodoList);
import React, {Component} from 'react';

import './add-todo-item.css'
export default class AddTodoItem extends Component {

    render() {
        return(
        <div className="add-todo-item">
            <button 
                className = "btn btn-outline-secondary"
                onClick={() => this.props.onItemAdded('hello world')}>
                Add new item 
            </button>
        </div>
        )
    }
}
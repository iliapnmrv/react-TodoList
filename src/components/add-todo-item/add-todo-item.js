import React, {Component} from 'react';

import './add-todo-item.css'
export default class AddTodoItem extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onItemAdded(this.state.label)
        this.setState({
            label:''
        })
    }

    render() {
        return(
            <form className="add-todo-item d-flex"
                    onSubmit={this.onSubmit}>
                <input type="text" 
                    className="form-control" 
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done" 
                    value={this.state.label}/>
                <button className = "btn btn-outline-secondary">
                    Add new item 
                </button>
            </form>
        )
    }
}
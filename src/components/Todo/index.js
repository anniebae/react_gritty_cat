import React, { Component } from 'react'
import { Link } from 'react-router'
import Home from '../Home'
import GrumpyCat from '../GrumpyCat'

import {AddNewTask} from './addtask'
import {ToDoAppList} from './applist'


class Todo extends Component {
	constructor(props) {
		super();
		this.state = {tasks: props.tasks};
		this.updateList = this.updateList.bind(this);
		this.removeTask = this.removeTask.bind(this);
	}

	updateList(text) {
		var updatedTasks = this.state.tasks;
		updatedTasks.unshift(text);
		this.setState({ tasks: updatedTasks});
		this.updateLocalStorage(updatedTasks);
	}

	removeTask(text) {
		var updatedTasks = this.state.tasks;
		updatedTasks.splice(updatedTasks.indexOf(text), 1);
		this.setState({ tasks: updatedTasks});
		this.updateLocalStorage(updatedTasks);
	}

	updateLocalStorage(updatedTasks) {
		console.log('tasks updated');
		localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
	}

	render() {
		return(
			<div>
				<h1>Todo App</h1>
				<AddNewTask updateList={this.updateList} />
				<ToDoAppList tasks={this.state.tasks} remove={this.removeTask} />
			</div>
		)
	}
}

export default Todo
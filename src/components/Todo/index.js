import React, { Component } from 'react'
import { Link } from 'react-router'
import Home from '../Home'
import GrumpyCat from '../GrumpyCat'

import {AddNewTask} from './addtask'

class Todo extends Component {
	render() {
		return(

			<div>
				<GrumpyCat />
				<p>Todo app</p>
				<AddNewTask />
			</div>
		)
	}
}

export default Todo
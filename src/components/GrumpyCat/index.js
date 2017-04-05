import React, { Component } from 'react'
import { Link } from 'react-router'

import css from './styles.css'
import grumpycatimg from '../../img/grumpy_cat.png'

class GrumpyCat extends Component {
	render() {
		return (
			<div className="grumpyCat">
				<Link to="/home">
					<img src={grumpycatimg} alt=""/>
				</Link>
			</div>
		)
	}
}

export default GrumpyCat
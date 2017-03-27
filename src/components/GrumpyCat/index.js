import React, { Component } from 'react'
import { Link } from 'react-router'
import grumpycatimg from '../../img/grumpy_cat.png'

class GrumpyCat extends Component {
	render() {
		return (
			<div>
				<Link to="/home">
					<img src={grumpycatimg} alt=""/>
				</Link>
			</div>
		)
	}
}

export default GrumpyCat
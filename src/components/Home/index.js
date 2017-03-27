import React, { Component } from 'react'
import { Link } from 'react-router'
import GrumpyCat from '../GrumpyCat'
import grumpycatimg from '../../img/grumpy_cat.png'

class Home extends Component {
	render() {
		return (
			<div>
				<div>
					<GrumpyCat />

					<Link to="/english">
						<p>hello page</p>
					</Link>

					<Link to="/korean">
						<p>안녕하세요</p>
					</Link>
				</div>
			</div>
		)
	}
}

export default Home
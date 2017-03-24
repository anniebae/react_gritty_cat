import React, { Component } from 'react'
import { Link } from 'react-router'
import grumpycat from '../../img/grumpy_cat.png'

class Enter extends Component {
	render() {
		return (
			<div>
				<div>
					<Link to="/enter">
						<img src={grumpycat} alt=""/>
					</Link>

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

export default Enter
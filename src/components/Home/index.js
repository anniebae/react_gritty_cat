import React, { Component } from 'react'
import { Link } from 'react-router'
import css from './styles.css'

class Home extends Component {
	render() {
		return (
			<div className="homeWrapper">Home alone
				
				<div>
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
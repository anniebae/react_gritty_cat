import React, { Component } from 'react'
import { Link } from 'react-router'
import css from './styles.css'
import $ from 'jquery'




class Home extends Component {
	componentDidMount() {
		// alert('hello home')
	}
	render() {
		return (
			<div className="homeWrapper">
				<div className="landingPage">
					<Link to="/enter">
						<p className="landingTitle grittyTitle">let's <span className="nl">get</span> GRITTY
							<span className="enter">ENTER &#8594;</span>
						</p>
					</Link>
				</div>
				
			</div>
		)
	}
}

export default Home
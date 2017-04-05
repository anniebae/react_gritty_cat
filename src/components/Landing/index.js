import React, { Component } from 'react'
import { Link } from 'react-router'
import css from './styles.css'
import $ from 'jquery'




class Landing extends Component {
	componentDidlMount() {
		alert('hello Hello')
	}
	render() {
		return (
			<div className="landingWrapper">
				<div className="landingPage">
					<Link to="/home">
						<p className="landingTitle grittyTitle">let's <span className="nl">get</span> GRITTY
							<span className="enter">ENTER &#8594;</span>
						</p>
					</Link>
				</div>
				
			</div>
		)
	}
}

export default Landing
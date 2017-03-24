import React, { Component } from 'react'
import { Link } from 'react-router'

import grumpycat from '../../img/grumpy_cat.png'

class English extends Component {
	render() {
		return(

			<div>
				<Link to="/enter">
					<img src={grumpycat} alt=""/>
				</Link>
				<p>hey whats up hello</p>
			</div>
		)
	}
}

export default English
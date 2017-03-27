import React, { Component } from 'react'
import { Link } from 'react-router'

import grumpycat from '../../img/grumpy_cat.png'

class Korean extends Component {
	render() {
		return(
			<div>
				<Link to="/home">
					<img src={grumpycat} alt=""/>
				</Link>
				
				<p>잘 부탁 합니다</p>
			</div>
		)
	}
}

export default Korean
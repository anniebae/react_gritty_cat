import React, { Component } from 'react'
import { Link } from 'react-router'
import GrumpyCat from '../GrumpyCat'

class Korean extends Component {
	render() {
		return(
			<div>
				<GrumpyCat />
				
				<p>잘 부탁 합니다</p>
			</div>
		)
	}
}

export default Korean
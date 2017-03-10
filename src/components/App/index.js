import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from 'react-router'

import Home from '../Home'
import English from '../English'
import Korean from '../Korean'


class App extends Component {
	render() {
		return(
			<div>
				<div>
					<Link to="/">
						<p>universal text</p>
					</Link>
				</div>

				<div>
					{this.props.children}
				</div>

			</div>
		)
	}
}

var appContainer = document.querySelector("#app");
// ReactDOM.render(<App />, appContainer);


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="english" component={English} />
			<Route path="korean" component={Korean} />
		</Route>
	</Router>,
	appContainer
)
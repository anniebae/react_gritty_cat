import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from 'react-router'

import css from './styles.css'
import Home from '../Home'
import English from '../English'
import Korean from '../Korean'
import Enter from '../Enter'

import grumpycat from '../../img/grumpy_cat.png'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ready: false
		};
		console.log(this.state);
	}


	render() {
		const { loading } = this.props;

		return(
			<div className="appWrapper">
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
			<Route path="home" component={Home} />
			<Route path="english" component={English} />
			<Route path="korean" component={Korean} />
			<Route path="enter" component={Enter} />
		</Route>
	</Router>,
	appContainer
)
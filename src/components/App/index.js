import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from 'react-router'

import css from './styles.css'
import Landing from '../Landing'
import Todo from '../Todo'
import Korean from '../Korean'
import Home from '../Home'

import grumpycat from '../../img/grumpy_cat.png'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ready: false
		};
		console.log(this.state);
	}

	componentDidMount() {
		alert('did mount')
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

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Landing} />
			<Route path="landing" component={Landing} />
			<Route path="todo" component={Todo} />
			<Route path="korean" component={Korean} />
			<Route path="home" component={Home} />
		</Route>
	</Router>,
	appContainer
)
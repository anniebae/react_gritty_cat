import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from 'react-router'

import css from './styles.css'
import Home from '../Home'
import English from '../English'
import Korean from '../Korean'

import grumpycat from '../../img/grumpy_cat.png'


class App extends Component {

	render() {
		return(
			<div className="appWrapper">
				<div className="landingPage">
					<Link to="/home">
						<p className="landingTitle" onClick={this.titleSwitch}>let's <span className="nl">get</span> GRITTY</p>
					</Link>
				</div>

				<div>
					{this.props.children}
				</div>

			</div>
		)
	}

	titleSwitch(){
		document.getElementsByClassName('landingTitle')[0].innerHTML = `<img src=${grumpycat} />`;
	}


}

var appContainer = document.querySelector("#app");
// ReactDOM.render(<App />, appContainer);


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="home" component={Home} />
			<Route path="english" component={English} />
			<Route path="korean" component={Korean} />
		</Route>
	</Router>,
	appContainer
)
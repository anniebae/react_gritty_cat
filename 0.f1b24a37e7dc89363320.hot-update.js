webpackHotUpdate(0,{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(22);

var _styles = __webpack_require__(254);

var _styles2 = _interopRequireDefault(_styles);

var _jquery = __webpack_require__(149);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Landing = function (_Component) {
	_inherits(Landing, _Component);

	function Landing() {
		_classCallCheck(this, Landing);

		return _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).apply(this, arguments));
	}

	_createClass(Landing, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// alert('hello Hello')
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'landingWrapper' },
				_react2.default.createElement(
					'div',
					{ className: 'landingPage' },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/home' },
						_react2.default.createElement(
							'p',
							{ className: 'landingTitle grittyTitle' },
							'let\'s ',
							_react2.default.createElement(
								'span',
								{ className: 'nl' },
								'get'
							),
							' GRITTY',
							_react2.default.createElement(
								'span',
								{ className: 'enter' },
								'ENTER \u2192'
							)
						)
					)
				)
			);
		}
	}]);

	return Landing;
}(_react.Component);

exports.default = Landing;

/***/ }),

/***/ 252:
false,

/***/ 253:
false,

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(119);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(22);

var _styles = __webpack_require__(123);

var _styles2 = _interopRequireDefault(_styles);

var _Landing = __webpack_require__(122);

var _Landing2 = _interopRequireDefault(_Landing);

var _English = __webpack_require__(120);

var _English2 = _interopRequireDefault(_English);

var _Korean = __webpack_require__(121);

var _Korean2 = _interopRequireDefault(_Korean);

var _Home = __webpack_require__(80);

var _Home2 = _interopRequireDefault(_Home);

var _grumpy_cat = __webpack_require__(45);

var _grumpy_cat2 = _interopRequireDefault(_grumpy_cat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			ready: false
		};
		console.log(_this.state);
		return _this;
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			var loading = this.props.loading;


			return _react2.default.createElement(
				'div',
				{ className: 'appWrapper' },
				_react2.default.createElement(
					'div',
					null,
					this.props.children
				)
			);
		}
	}]);

	return App;
}(_react.Component);

var appContainer = document.querySelector("#app");

_reactDom2.default.render(_react2.default.createElement(
	_reactRouter.Router,
	{ history: _reactRouter.hashHistory },
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: '/', component: App },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _Landing2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'landing', component: _Landing2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'english', component: _English2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'korean', component: _Korean2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'home', component: _Home2.default })
	)
), appContainer);

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(22);

var _grumpy_cat = __webpack_require__(45);

var _grumpy_cat2 = _interopRequireDefault(_grumpy_cat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GrumpyCat = function (_Component) {
	_inherits(GrumpyCat, _Component);

	function GrumpyCat() {
		_classCallCheck(this, GrumpyCat);

		return _possibleConstructorReturn(this, (GrumpyCat.__proto__ || Object.getPrototypeOf(GrumpyCat)).apply(this, arguments));
	}

	_createClass(GrumpyCat, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: '/home' },
					_react2.default.createElement('img', { src: _grumpy_cat2.default, alt: '' })
				)
			);
		}
	}]);

	return GrumpyCat;
}(_react.Component);

exports.default = GrumpyCat;

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Oswald);", ""]);

// module
exports.push([module.i, "html, body {\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica, Arial;\n  font-weight: 100; }\n  html .landingWrapper .landingPage a, body .landingWrapper .landingPage a {\n    text-decoration: none; }\n  html .landingWrapper .landingPage .grittyTitle, body .landingWrapper .landingPage .grittyTitle {\n    position: absolute;\n    height: 60vh;\n    margin-top: -30vh;\n    width: 120vw;\n    margin-left: -60vw;\n    top: 50%;\n    left: 50%; }\n  html .landingWrapper .landingPage .landingTitle, body .landingWrapper .landingPage .landingTitle {\n    font-size: 50px;\n    text-align: center;\n    font-family: 'Oswald', sans-serif;\n    -webkit-animation: color-change 2s infinite;\n    -moz-animation: color-change 2s infinite;\n    -o-animation: color-change 2s infinite;\n    -ms-animation: color-change 2s infinite;\n    animation: color-change 2s infinite; }\n    html .landingWrapper .landingPage .landingTitle span.nl, body .landingWrapper .landingPage .landingTitle span.nl {\n      display: block; }\n    html .landingWrapper .landingPage .landingTitle span.enter, body .landingWrapper .landingPage .landingTitle span.enter {\n      display: block;\n      font-size: 14px; }\n@-webkit-keyframes color-change {\n  0% {\n    color: #ddd; }\n  50% {\n    color: #07f7cf; }\n  100% {\n    color: #ddd; } }\n@-moz-keyframes color-change {\n  0% {\n    color: #ddd; }\n  50% {\n    color: #07f7cf; }\n  100% {\n    color: #ddd; } }\n@-ms-keyframes color-change {\n  0% {\n    color: #ddd; }\n  50% {\n    color: #07f7cf; }\n  100% {\n    color: #ddd; } }\n@-o-keyframes color-change {\n  0% {\n    color: #ddd; }\n  50% {\n    color: #07f7cf; }\n  100% {\n    color: #ddd; } }\n@keyframes color-change {\n  0% {\n    color: #ddd; }\n  50% {\n    color: #07f7cf; }\n  100% {\n    color: #ddd; } }\n\n/*# sourceMappingURL=styles.css.map */\n", ""]);

// exports


/***/ }),

/***/ 77:
false,

/***/ 78:
false,

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(22);

var _GrumpyCat = __webpack_require__(75);

var _GrumpyCat2 = _interopRequireDefault(_GrumpyCat);

var _grumpy_cat = __webpack_require__(45);

var _grumpy_cat2 = _interopRequireDefault(_grumpy_cat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	}

	_createClass(Home, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_GrumpyCat2.default, null),
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/english' },
						_react2.default.createElement(
							'p',
							null,
							'hello page'
						)
					),
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/korean' },
						_react2.default.createElement(
							'p',
							null,
							'\uC548\uB155\uD558\uC138\uC694'
						)
					)
				)
			);
		}
	}]);

	return Home;
}(_react.Component);

exports.default = Home;

/***/ })

})
//# sourceMappingURL=build/bundle.map
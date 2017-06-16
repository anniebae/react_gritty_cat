webpackHotUpdate(0,{

/***/ 257:
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

var _Landing = __webpack_require__(121);

var _Landing2 = _interopRequireDefault(_Landing);

var _Todo = __webpack_require__(122);

var _Todo2 = _interopRequireDefault(_Todo);

var _Korean = __webpack_require__(120);

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
		key: 'componentDidMount',
		value: function componentDidMount() {
			alert('did mount');
		}
	}, {
		key: 'render',
		value: function render() {
			var loading = this.props.loading;


			return _react2.default.createElement(
				'div',
				{ className: 'appWrapper' },
				_react2.default.createElement(_Todo2.default, null),
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
		_react2.default.createElement(_reactRouter.Route, { path: 'todo', component: _Todo2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'korean', component: _Korean2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'home', component: _Home2.default })
	)
), appContainer);

/***/ })

})
//# sourceMappingURL=build/bundle.map
webpackHotUpdate(0,{

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

var _style = __webpack_require__(253);

var _style2 = _interopRequireDefault(_style);

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
				{ className: 'homeWrapper' },
				_react2.default.createElement(_GrumpyCat2.default, null),
				_react2.default.createElement(
					'div',
					{ className: 'pages' },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/todo' },
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
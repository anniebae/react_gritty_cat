webpackHotUpdate(0,{

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ToDoAppList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToDoAppList = exports.ToDoAppList = function (_Component) {
	_inherits(ToDoAppList, _Component);

	function ToDoAppList() {
		_classCallCheck(this, ToDoAppList);

		var _this = _possibleConstructorReturn(this, (ToDoAppList.__proto__ || Object.getPrototypeOf(ToDoAppList)).call(this));

		_this.remove = _this.remove.bind(_this);
		return _this;
	}

	_createClass(ToDoAppList, [{
		key: 'remove',
		value: function remove(elem) {
			var value = elem.target.parentNode.querySelector('span').innerText;
			this.props.remove(value);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var items = this.props.tasks.map(function (elem, i) {
				return _react2.default.createElement(
					'li',
					{ key: i },
					_react2.default.createElement(
						'span',
						null,
						elem
					),
					_react2.default.createElement(
						'button',
						{ onClick: _this2.remove },
						'X'
					)
				);
			});

			// get items dynamically from its parent
			return _react2.default.createElement(
				'ul',
				null,
				items,
				'ssss'
			);
		}
	}]);

	return ToDoAppList;
}(_react.Component);

/***/ })

})
//# sourceMappingURL=build/bundle.map
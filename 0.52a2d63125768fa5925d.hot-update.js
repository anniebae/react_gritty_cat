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

var _Home = __webpack_require__(80);

var _Home2 = _interopRequireDefault(_Home);

var _GrumpyCat = __webpack_require__(75);

var _GrumpyCat2 = _interopRequireDefault(_GrumpyCat);

var _addtask = __webpack_require__(252);

var _applist = __webpack_require__(253);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todo = function (_Component) {
	_inherits(Todo, _Component);

	function Todo(props) {
		_classCallCheck(this, Todo);

		var _this = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this));

		_this.state = { tasks: props.tasks };
		_this.updateList = _this.updateList.bind(_this);
		_this.removeTask = _this.removeTask.bind(_this);
		return _this;
	}

	_createClass(Todo, [{
		key: 'updateList',
		value: function updateList(text) {
			var updatedTasks = this.state.tasks;
			updatedTasks.unshift(text);
			this.setState({ tasks: updatedTasks });
			this.updateLocalStorage(updatedTasks);
		}
	}, {
		key: 'removeTask',
		value: function removeTask(text) {
			var updatedTasks = this.state.tasks;
			updatedTasks.splice(updatedTasks.indexOf(text), 1);
			this.setState({ tasks: updatedTasks });
			this.updateLocalStorage(updatedTasks);
		}
	}, {
		key: 'updateLocalStorage',
		value: function updateLocalStorage(updatedTasks) {
			console.log('tasks updated');
			localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h1',
					null,
					'Todo App'
				),
				_react2.default.createElement(Todo, { tasks: tasksList }),
				_react2.default.createElement(_addtask.AddNewTask, { updateList: this.updateList }),
				_react2.default.createElement(_applist.ToDoAppList, { tasks: this.state.tasks, remove: this.removeTask })
			);
		}
	}]);

	return Todo;
}(_react.Component);

exports.default = Todo;

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AddNewTask = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddNewTask = exports.AddNewTask = function (_Component) {
	_inherits(AddNewTask, _Component);

	function AddNewTask() {
		_classCallCheck(this, AddNewTask);

		var _this = _possibleConstructorReturn(this, (AddNewTask.__proto__ || Object.getPrototypeOf(AddNewTask)).call(this));

		_this.justSubmitted = _this.justSubmitted.bind(_this);
		return _this;
	}

	_createClass(AddNewTask, [{
		key: 'justSubmitted',
		value: function justSubmitted(event) {
			event.preventDefault();
			var input = event.target.querySelector('input');
			var value = input.value;
			input.value = '';
			this.props.updateList(value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				{ onSubmit: this.justSubmitted },
				_react2.default.createElement('input', { type: 'text' })
			);
		}
	}]);

	return AddNewTask;
}(_react.Component);

/***/ }),

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
				items
			);
		}
	}]);

	return ToDoAppList;
}(_react.Component);

/***/ })

})
//# sourceMappingURL=build/bundle.map
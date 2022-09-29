/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authActions = __webpack_require__(17);

Object.defineProperty(exports, 'FETCH_CURRENT_USER', {
  enumerable: true,
  get: function get() {
    return _authActions.FETCH_CURRENT_USER;
  }
});
Object.defineProperty(exports, 'fetchCurrentUser', {
  enumerable: true,
  get: function get() {
    return _authActions.fetchCurrentUser;
  }
});

var _usersListActions = __webpack_require__(18);

Object.defineProperty(exports, 'FETCH_USERS_LIST', {
  enumerable: true,
  get: function get() {
    return _usersListActions.FETCH_USERS_LIST;
  }
});
Object.defineProperty(exports, 'fetchUsersList', {
  enumerable: true,
  get: function get() {
    return _usersListActions.fetchUsersList;
  }
});

var _adminsListActions = __webpack_require__(19);

Object.defineProperty(exports, 'FETCH_ADMINS_LIST', {
  enumerable: true,
  get: function get() {
    return _adminsListActions.FETCH_ADMINS_LIST;
  }
});
Object.defineProperty(exports, 'fetchAdminsList', {
  enumerable: true,
  get: function get() {
    return _adminsListActions.fetchAdminsList;
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(21);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UsersListPage = __webpack_require__(22);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _AdminsListPage = __webpack_require__(27);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

var _NotFoundPage = __webpack_require__(29);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = exports.Routes = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: '/',
    exact: true
  }), _extends({}, _UsersListPage2.default, {
    path: '/users'
  }), _extends({}, _AdminsListPage2.default, {
    path: '/admins'
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__(23);

Object.defineProperty(exports, 'store', {
  enumerable: true,
  get: function get() {
    return _store.store;
  }
});

var _actions = __webpack_require__(1);

Object.defineProperty(exports, 'fetchUsersList', {
  enumerable: true,
  get: function get() {
    return _actions.fetchUsersList;
  }
});
Object.defineProperty(exports, 'fetchAdminsList', {
  enumerable: true,
  get: function get() {
    return _actions.fetchAdminsList;
  }
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = undefined;

var _redux = __webpack_require__(6);

var _authReducer = __webpack_require__(24);

var _usersListReducer = __webpack_require__(25);

var _adminsListReducer = __webpack_require__(26);

var reducers = exports.reducers = (0, _redux.combineReducers)({
  auth: _authReducer.authReducer,
  usersList: _usersListReducer.usersListReducer,
  adminsList: _adminsListReducer.adminsListReducer
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(13);

var _express = __webpack_require__(14);

var _express2 = _interopRequireDefault(_express);

var _expressHttpProxy = __webpack_require__(15);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _reactRouterConfig = __webpack_require__(4);

var _Routes = __webpack_require__(7);

var _renderer = __webpack_require__(30);

var _createStore = __webpack_require__(33);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var reqNo = 0;

app.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  console.log('%c-> developmentConsole: send=> START', 'color:#77dcfd', ++reqNo);

  var store = (0, _createStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes.Routes, req.path).map(function (_ref) {
    var route = _ref.route;
    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, _) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer.renderer)(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
    console.log('%c-> developmentConsole: res=> END', 'color:#77dcfd', reqNo);
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000 ...');
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(4);

var _actions = __webpack_require__(1);

var _Header = __webpack_require__(20);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    'div',
    { style: { width: '100%' } },
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

var loadData = function loadData(store) {
  return store.dispatch((0, _actions.fetchCurrentUser)());
};

exports.default = {
  component: App,
  loadData: loadData
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, _, axiosApi) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('%c-> developmentConsole: fetchCurrentUser===> ', 'color:#77dcfd');
              _context.next = 3;
              return axiosApi.get('/current_user');

            case 3:
              res = _context.sent;


              dispatch({
                type: FETCH_CURRENT_USER,
                payload: res
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS_LIST = exports.FETCH_USERS_LIST = 'fetch_users_list';

var fetchUsersList = exports.fetchUsersList = function fetchUsersList() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, _, axiosApi) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('%c-> developmentConsole: fetchUsersList===> ', 'color:#77dcfd');
              _context.next = 3;
              return axiosApi.get('/users');

            case 3:
              res = _context.sent;


              dispatch({
                type: FETCH_USERS_LIST,
                payload: res
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_ADMINS_LIST = exports.FETCH_ADMINS_LIST = 'fetch_admins_list';

var fetchAdminsList = exports.fetchAdminsList = function fetchAdminsList() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, _, axiosApi) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('%c-> developmentConsole: fetchAdminsList===> ', 'color:#77dcfd');
              _context.next = 3;
              return axiosApi.get('/admins');

            case 3:
              res = _context.sent;


              dispatch({
                type: FETCH_ADMINS_LIST,
                payload: res
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var auth = _ref.auth;

  var authButton = function () {
    if (auth) {
      return _react2.default.createElement(
        'a',
        { href: '/api/logout' },
        'Logout'
      );
    }
    return _react2.default.createElement(
      'a',
      { href: '/api/auth/google' },
      'Login'
    );
  }();

  return _react2.default.createElement(
    'nav',
    null,
    _react2.default.createElement(
      'div',
      { className: 'nav-wrapper' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'brand-logo', to: '/' },
        'React SSR'
      ),
      _react2.default.createElement(
        'ul',
        { className: 'right' },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/users' },
            'Users'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/admins' },
            'Admins'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          authButton
        )
      )
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return { auth: auth };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  var headContent = _react2.default.createElement(
    _reactHelmet.Helmet,
    null,
    _react2.default.createElement(
      'title',
      null,
      'React/SSR app'
    ),
    _react2.default.createElement('meta', { property: 'og:title', content: 'React/SSR app' })
  );

  return _react2.default.createElement(
    'div',
    { className: 'center-align' },
    headContent,
    _react2.default.createElement(
      'h5',
      null,
      'Welcome '
    ),
    _react2.default.createElement(
      'p',
      null,
      'Check out these awesome features'
    )
  );
};

exports.default = { component: HomePage };

// https://react-ssr-api.herokuapp.com/

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactHelmet = __webpack_require__(3);

var _store = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersListPage = function (_Component) {
  _inherits(UsersListPage, _Component);

  function UsersListPage() {
    _classCallCheck(this, UsersListPage);

    return _possibleConstructorReturn(this, (UsersListPage.__proto__ || Object.getPrototypeOf(UsersListPage)).apply(this, arguments));
  }

  _createClass(UsersListPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.usersList || this.props.usersList.length === 0) {
        this.props.fetchUsersList();
      }
    }
  }, {
    key: 'renderUsers',
    value: function renderUsers() {
      return this.props.usersList.map(function (user) {
        return _react2.default.createElement(
          'li',
          { key: user.id },
          user.name
        );
      });
    }
  }, {
    key: 'getHeadContent',
    value: function getHeadContent() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          'Users App'
        ),
        _react2.default.createElement('meta', { property: 'og:title', content: 'Users App' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('%c-> developmentConsole: this.props.usersList= ', 'color:#77dcfd', this.props.usersList);

      return _react2.default.createElement(
        'div',
        { className: 'center-align' },
        this.getHeadContent(),
        _react2.default.createElement(
          'h5',
          null,
          'Here\'s a big list of users:'
        ),
        _react2.default.createElement(
          'ul',
          null,
          this.renderUsers()
        )
      );
    }
  }]);

  return UsersListPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return { usersList: state.usersList };
};

var loadData = function loadData(store) {
  return store.dispatch((0, _store.fetchUsersList)());
};

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsersList: _store.fetchUsersList })(UsersListPage),
  loadData: loadData
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(9);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(10);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const initialState = window.INITIAL_STATE;
var initialState = {};

if (typeof window !== 'undefined') {
  initialState = window.INITIAL_STATE;
}

var axiosInstance = _axios2.default.create({
  baseURL: '/api'
});

var store = exports.store = (0, _redux.createStore)(_reducers.reducers, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authReducer = undefined;

var _actions = __webpack_require__(1);

var initiaState = null;

var authReducer = exports.authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initiaState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersListReducer = undefined;

var _actions = __webpack_require__(1);

var initiaState = [];

var usersListReducer = exports.usersListReducer = function usersListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initiaState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USERS_LIST:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminsListReducer = undefined;

var _actions = __webpack_require__(1);

var initiaState = [];

var adminsListReducer = exports.adminsListReducer = function adminsListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initiaState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_ADMINS_LIST:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactHelmet = __webpack_require__(3);

var _store = __webpack_require__(8);

var _withRequireAuth = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminsListPage = function (_Component) {
  _inherits(AdminsListPage, _Component);

  function AdminsListPage() {
    _classCallCheck(this, AdminsListPage);

    return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
  }

  _createClass(AdminsListPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.adminsList || this.props.adminsList.length === 0) {
        this.props.fetchAdminsList();
      }
    }
  }, {
    key: 'renderAdmins',
    value: function renderAdmins() {
      return this.props.adminsList.map(function (admin) {
        return _react2.default.createElement(
          'li',
          { key: admin.id },
          admin.name
        );
      });
    }
  }, {
    key: 'getHeadContent',
    value: function getHeadContent() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          'Admins App'
        ),
        _react2.default.createElement('meta', { property: 'og:title', content: 'Admins App' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'center-align' },
        this.getHeadContent(),
        _react2.default.createElement(
          'h5',
          null,
          'Protected list of admins:'
        ),
        _react2.default.createElement(
          'ul',
          null,
          this.renderAdmins()
        )
      );
    }
  }]);

  return AdminsListPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return { adminsList: state.adminsList };
};

var loadData = function loadData(store) {
  return store.dispatch((0, _store.fetchAdminsList)());
};

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdminsList: _store.fetchAdminsList })((0, _withRequireAuth.withRequireAuth)(AdminsListPage)),
  loadData: loadData
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRequireAuth = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withRequireAuth = exports.withRequireAuth = function withRequireAuth(ChildComponent) {
  var RequireAuth = function (_Component) {
    _inherits(RequireAuth, _Component);

    function RequireAuth() {
      _classCallCheck(this, RequireAuth);

      return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
    }

    _createClass(RequireAuth, [{
      key: 'render',
      value: function render() {
        switch (this.props.auth) {
          case false:
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });

          case false:
            return _react2.default.createElement(
              'div',
              { className: 'center-align' },
              _react2.default.createElement(
                'h5',
                null,
                'Unauthenticated'
              ),
              _react2.default.createElement(
                'p',
                null,
                'You need to login'
              )
            );

          default:
            return _react2.default.createElement(ChildComponent, this.props);
        }
      }
    }]);

    return RequireAuth;
  }(_react.Component);

  var mapStateToProps = function mapStateToProps(_ref) {
    var auth = _ref.auth;
    return {
      auth: auth
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;

  var headContent = _react2.default.createElement(
    _reactHelmet.Helmet,
    null,
    _react2.default.createElement(
      'title',
      null,
      'Not found 404'
    ),
    _react2.default.createElement('meta', { property: 'og:title', content: 'React/SSR app' })
  );

  return _react2.default.createElement(
    'div',
    { className: 'center-align' },
    headContent,
    _react2.default.createElement(
      'h5',
      null,
      'Ooops, route not found.'
    )
  );
};
exports.default = { component: NotFoundPage };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderer = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(31);

var _reactRouterDom = __webpack_require__(5);

var _reactRouterConfig = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

var _reactHelmet = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(32);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderer = exports.renderer = function renderer(req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { context: context, location: req.path },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes.Routes)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  var serializedState = (0, _serializeJavascript2.default)(store.getState());

  return '\n     <!DOCTYPE html>\n     <html lang="en">\n       <head>\n         <meta charset="utf-8" />\n         <link rel="icon" href="favicon.ico" />\n          \n         <!--Let browser know website is optimized for mobile-->\n         <meta name="viewport" content="width=device-width, initial-scale=1" />\n          \n         <meta name="description" content="Web site created using React/SSR"/>\n         \n         <!--title-->\n         ' + helmet.title.toString() + '\n          \n         <!--meta-->\n         ' + helmet.meta.toString() + '\n          \n         <!--css/fonts-->\n         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">\n       </head>\n       <body>\n         <noscript>You need to enable JavaScript to run this app.</noscript>\n         <div id="root">' + content + '</div>\n         <script>window.INITIAL_STATE = ' + serializedState + '</script>\n         <script src="bundle.js"></script>\n       </body>\n     </html>\n  ';
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(9);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(10);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: {
      cookie: req.get('cookie') || ''
    }
  });

  var store = (0, _redux.createStore)(_reducers.reducers, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ })
/******/ ]);
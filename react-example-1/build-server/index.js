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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\nvar _jsxFileName = \"/Users/arunstiwari/training/pe/week4/html-and-css/react-example-1/server/index.js\";\n\n\n\n\n\n\n\nconst PORT = 8090;\nconst app = express__WEBPACK_IMPORTED_MODULE_2___default()(); // app.use(express.static(\"./build\"));\n\napp.get('/*', (req, res) => {\n  const context = {};\n  const app1 = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }));\n  console.log('---app1---', app1); // const app = ReactDOMServer.renderToString(<Router location={req.url} context={context}><App /></Router>);\n\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong: ', err);\n      return res.status(500).send('--Better luck next time---');\n    }\n\n    data = data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app1}</div>`);\n    return res.send(data);\n  });\n});\napp.listen(PORT, () => {\n  console.log(`Server-side Rendered application running on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .App {\\n|   text-align: center;\\n| }\");\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserApp */ \"./src/UserApp.js\");\n/* harmony import */ var _UserAppWithHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserAppWithHook */ \"./src/UserAppWithHook.js\");\n/* harmony import */ var _pattern_hoc_HocApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pattern/hoc/HocApp */ \"./src/pattern/hoc/HocApp.js\");\nvar _jsxFileName = \"/Users/arunstiwari/training/pe/week4/html-and-css/react-example-1/src/App.js\";\n\n\n\n\n\n\n\nconst Title = props => {\n  const title = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(TitleContext);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, title);\n};\n\nconst Header = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  });\n};\n\nconst TitleContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext('');\n\nconst TitleApp = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleContext.Provider, {\n    value: 'Pattern on DI',\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }));\n};\n\nconst Comment = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, props.comment.message);\n};\n\nconst CommentList = ({\n  comments\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, comments && comments.map(c => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Comment, {\n    key: c.id,\n    comment: c,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 41\n    }\n  })));\n};\n\nlet commentList = [{\n  id: 1,\n  message: 'Message1'\n}, {\n  id: 2,\n  message: 'Message2'\n}, {\n  id: 3,\n  message: 'Message3'\n}];\n\nconst BlogPost = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: () => props.add(6),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }), props.children) // <CommentList comments={commentList} />\n  ;\n};\n\nconst App = () => {\n  const addNumber = n => {\n    console.log(n);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pattern_hoc_HocApp__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/arunstiwari/training/pe/week4/html-and-css/react-example-1/src/User.js\";\n\n\nconst User = ({\n  user\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: user.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, user.name);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n//# sourceURL=webpack:///./src/User.js?");

/***/ }),

/***/ "./src/UserApp.js":
/*!************************!*\
  !*** ./src/UserApp.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UsersList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersList */ \"./src/UsersList.js\");\n/* harmony import */ var _UserForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserForm */ \"./src/UserForm.js\");\nvar _jsxFileName = \"/Users/arunstiwari/training/pe/week4/html-and-css/react-example-1/src/UserApp.js\";\n\n\n\n\nclass UserApp extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n    this.state = {\n      users: [{\n        id: 1,\n        name: \"User1\"\n      }, {\n        id: 2,\n        name: \"User2\"\n      }, {\n        id: 3,\n        name: \"User3\"\n      }, {\n        id: 4,\n        name: \"User4\"\n      }]\n    };\n\n    this.handleSubmit = user => {\n      // e.preventDefault();\n      console.log('In handle submit method'); // const user = {id: 5, name: this.state.name };\n\n      this.setState({\n        users: this.state.users.concat([user])\n      });\n    };\n  }\n\n  // constructor(props) {\n  //     super(props);\n  //     console.log('In constructor');\n  // }\n  //\n  componentDidMount() {\n    console.log('In componentDidMount');\n    window.addEventListener('resize', () => {\n      console.log(' window size is ', window.innerHeight, ' width : ', window.innerWidth);\n    });\n  } //\n  // shouldComponentUpdate(nextProps, nextState, nextContext) {\n  //     console.log('shouldComponentUpdate : nextProps ', nextProps, ' nextState: ',nextState);\n  //     return true;\n  // }\n  //\n\n\n  componentDidUpdate(prevProps, prevState, snapshot) {\n    console.log('componentDidUpdate(prevProps, prevState, snapshot ', prevProps, '  ', prevState);\n  } //\n  // componentDidCatch(error, info) {\n  //     console.log(' componentDidCatch(error, info) ',error, ' ', info);\n  // }\n  //\n  // getSnapshotBeforeUpdate(prevProps, prevState) {\n  //     console.log(' getSnapshotBeforeUpdate ',prevProps, ' ',prevState );\n  //     return null;\n  // }\n\n\n  componentWillUnmount() {\n    window.removeEventListener('resize');\n  } // handleNameChange = (e) => {\n  //     console.log('In handleNameChange method: ',e.target.value);\n  //     // this.state.name = e.target.value;\n  //     this.setState({name: e.target.value });\n  //     console.log(' have modified the state variable ');\n  // }\n\n\n  render() {\n    console.log('In render method');\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 13\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      handleSubmitParent: this.handleSubmit,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UsersList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      userlist: this.state.users,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 14\n      }\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserApp);\n\n//# sourceURL=webpack:///./src/UserApp.js?");

/***/ }),

/***/ "./src/UserAppWithHook.js":
/*!********************************!*\
  !*** ./src/UserAppWithHook.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UserForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm */ \"./src/UserForm.js\");\n/* harmony import */ var _UsersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UsersList */ \"./src/UsersList.js\");\n/* harmony import */ var _UserFormHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserFormHook */ \"./src/UserFormHook.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _useDataFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useDataFetch */ \"./src/useDataFetcher.js\");\nvar _jsxFileName = \"/Users/arunstiwari/training/pe/week4/html-and-css/react-example-1/src/UserAppWithHook.js\";\n\n\n\n\n\n\n\nconst UserAppWithHook = () => {\n  // const [variable, setVariable] = useState('')\n  //     const[users, setUsers] = useState(\n  // [\n  //             {id: 1, name: \"User1\",email: ''},\n  //             {id: 2, name: \"User2\",email: ''},\n  //             {id: 3, name: \"User3\",email: ''},\n  //             {id: 4, name: \"User4\",email: ''}\n  //          ])\n  // const [users, setUsers] = useState([]);\n  // const[isLoading, setIsLoading] = useState(true);\n  // const[isError, setIsError] = useState(false);\n  // useEffect( ()=> {\n  //     const fetchUsers =  async () => {\n  //         try{\n  //             const {data} = await axios.get(\"http://localhost:8900/users232\");\n  //             console.log('--data---', data);\n  //             setUsers(data);\n  //             setIsLoading(false);\n  //         }catch (e) {\n  //             setIsError(true);\n  //             setIsLoading(false);\n  //         }\n  //\n  //\n  //     }\n  //     fetchUsers();\n  //\n  // },[])\n  const [{\n    data: users,\n    isLoading,\n    isError\n  }] = Object(_useDataFetch__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"http://localhost:8900/users323\");\n\n  const handleSubmit = user => {\n    // e.preventDefault();\n    console.log('In handle submit method', user); // setUsers([...users,user])\n  };\n\n  if (isLoading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 13\n      }\n    }, \"Loading ...\");\n  }\n\n  if (isError) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 13\n      }\n    }, \"Error retrieving the users information\");\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserFormHook__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    handleSubmitParent: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UsersList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    userlist: users,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserAppWithHook);\n\n//# sourceURL=webpack:///./src/UserAppWithHook.js?");

/***/ }),

/***/ "./src/UserForm.js":
/*!*************************!*\
  !*** ./src/UserForm.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/arunstiwari/training/pe/week4/html-and-css/react-example-1/src/UserForm.js\";\n\n\nclass UserForm extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n    this.state = {\n      name: ''\n    };\n\n    this.handleNameChange = e => {\n      console.log('In handleNameChange method: ', e.target.value); // this.state.name = e.target.value;\n\n      this.setState({\n        name: e.target.value\n      });\n      console.log(' have modified the state variable ');\n    };\n\n    this.handleSubmit = e => {\n      e.preventDefault();\n      console.log('In handle submit method');\n      const user = {\n        id: 5,\n        name: this.state.name\n      };\n      this.props.handleSubmitParent(user); // this.setState({users: this.state.users.concat([user])});\n    };\n  }\n\n  render() {\n    console.log('UserForm in render method');\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: this.handleSubmit,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 13\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      placeholder: \"Name...\",\n      onInput: this.handleNameChange,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }\n    }, \"Save\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserForm);\n\n//# sourceURL=webpack:///./src/UserForm.js?");

/***/ }),

/***/ "./src/UserFormHook.js":
/*!*****************************!*\
  !*** ./src/UserFormHook.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/arunstiwari/training/pe/week4/html-and-css/react-example-1/src/UserFormHook.js\";\n\n\nconst UserFormHook = ({\n  handleSubmitParent\n}) => {\n  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const handleNameChange = e => {\n    console.log('In handleNameChange method: ', e.target.value);\n    setName(e.target.value);\n    console.log(' have modified the state variable ');\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    console.log('In handle submit method');\n    const user = {\n      id: 5,\n      name: name,\n      email: email\n    };\n    handleSubmitParent(user);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Name...\",\n    onInput: handleNameChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Email...\",\n    onInput: e => setEmail(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, \"Save\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserFormHook);\n\n//# sourceURL=webpack:///./src/UserFormHook.js?");

/***/ }),

/***/ "./src/UsersList.js":
/*!**************************!*\
  !*** ./src/UsersList.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ \"./src/User.js\");\nvar _jsxFileName = \"/Users/arunstiwari/training/pe/week4/html-and-css/react-example-1/src/UsersList.js\";\n\n\n\nconst UsersList = ({\n  userlist\n}) => {\n  console.log(userlist);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, userlist.map(user => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      user: user,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 28\n      }\n    });\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UsersList);\n\n//# sourceURL=webpack:///./src/UsersList.js?");

/***/ }),

/***/ "./src/pattern/hoc/HocApp.js":
/*!***********************************!*\
  !*** ./src/pattern/hoc/HocApp.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/arunstiwari/training/pe/week4/html-and-css/react-example-1/src/pattern/hoc/HocApp.js\";\n\n\nconst HocComponenent = (WrappedComponent, data) => {\n  return class extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor(...args) {\n      super(...args);\n      this.state = {\n        data: data\n      };\n    }\n\n    render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, Object.assign({}, this.props, {\n        data: this.state.data,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 17\n        }\n      }));\n    }\n\n  };\n};\n\nconst StockApp = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, \"Stock Page\", props.data.map(u => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    key: u.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, u.name)));\n};\n\nconst UserApp = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"User Page\", props.data.map(u => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    key: u.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, u.name)));\n};\n\nlet stocks = [{\n  id: 1,\n  name: 'Stock1'\n}, {\n  id: 2,\n  name: 'Stock2'\n}, {\n  id: 3,\n  name: 'Stock3'\n}];\nlet users = [{\n  id: 1,\n  name: 'User1'\n}, {\n  id: 2,\n  name: 'User2'\n}, {\n  id: 3,\n  name: 'User3'\n}];\nconst Stocks = HocComponenent(StockApp, stocks);\nconst Users = HocComponenent(UserApp, users);\n\nconst HocApp = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Stocks, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Users, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HocApp);\n\n//# sourceURL=webpack:///./src/pattern/hoc/HocApp.js?");

/***/ }),

/***/ "./src/useDataFetch.js":
/*!*****************************!*\
  !*** ./src/useDataFetcher.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst useDataFetcher = apiUrl => {\n  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const [isError, setIsError] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [url, setUrl] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(apiUrl);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const fetchData = async () => {\n      try {\n        const {\n          data\n        } = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(apiUrl);\n        console.log('--data---', data);\n        setData(data);\n        setIsLoading(false);\n      } catch (e) {\n        setIsError(true);\n        setIsLoading(false);\n      }\n    };\n\n    fetchData();\n  }, [url]);\n  return [{\n    data,\n    isLoading,\n    isError\n  }, setUrl];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useDataFetcher);\n\n//# sourceURL=webpack:///./src/useDataFetcher.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });
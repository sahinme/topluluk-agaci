module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Compose/Compose.css":
/*!****************************************!*\
  !*** ./components/Compose/Compose.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ConversationList/ConversationList.css":
/*!**********************************************************!*\
  !*** ./components/ConversationList/ConversationList.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ConversationListItem/ConversationListItem.css":
/*!******************************************************************!*\
  !*** ./components/ConversationListItem/ConversationListItem.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ConversationSearch/ConversationSearch.css":
/*!**************************************************************!*\
  !*** ./components/ConversationSearch/ConversationSearch.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Loader/index.css":
/*!*************************************!*\
  !*** ./components/Loader/index.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Message/Message.css":
/*!****************************************!*\
  !*** ./components/Message/Message.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/MessageList/MessageList.css":
/*!************************************************!*\
  !*** ./components/MessageList/MessageList.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Messenger/Messenger.css":
/*!********************************************!*\
  !*** ./components/Messenger/Messenger.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/RollbarErrorTracking.js":
/*!********************************************!*\
  !*** ./components/RollbarErrorTracking.js ***!
  \********************************************/
/*! exports provided: RollbarErrorTracking, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollbarErrorTracking", function() { return RollbarErrorTracking; });
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rollbar */ "rollbar");
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rollbar__WEBPACK_IMPORTED_MODULE_0__);

const RollbarErrorTracking = (() => {
  const RollbarObj = new rollbar__WEBPACK_IMPORTED_MODULE_0___default.a({
    accessToken: "e8c05952383149e6ab6e77ae07b641c6",
    captureUncaught: true,
    captureUnhandledRejections: true
  });

  const logErroInfo = info => {
    RollbarObj.info(info);
  };

  const logErrorInRollbar = error => {
    throw new Error(error);
  };

  return {
    logErroInfo,
    logErrorInRollbar
  };
})();
/* harmony default export */ __webpack_exports__["default"] = (RollbarErrorTracking);

/***/ }),

/***/ "./components/ShareButton/index.css":
/*!******************************************!*\
  !*** ./components/ShareButton/index.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/SocialCard/index.css":
/*!*****************************************!*\
  !*** ./components/SocialCard/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Toolbar/Toolbar.css":
/*!****************************************!*\
  !*** ./components/Toolbar/Toolbar.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ToolbarButton/ToolbarButton.css":
/*!****************************************************!*\
  !*** ./components/ToolbarButton/ToolbarButton.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/auth/actions.js":
/*!*****************************!*\
  !*** ./lib/auth/actions.js ***!
  \*****************************/
/*! exports provided: AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, SEND_RESET_CODE_REQUEST, SEND_RESET_CODE_SUCCESS, SEND_RESET_CODE_FAILURE, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE, loginRequest, signUpRequest, logOut, sendResetCodeRequest, resetPasswordRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_REQUEST", function() { return AUTH_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SUCCESS", function() { return AUTH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_FAILURE", function() { return AUTH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_REQUEST", function() { return SIGNUP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_SUCCESS", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_FAILURE", function() { return SIGNUP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_REQUEST", function() { return LOGOUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_FAILURE", function() { return LOGOUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_RESET_CODE_REQUEST", function() { return SEND_RESET_CODE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_RESET_CODE_SUCCESS", function() { return SEND_RESET_CODE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_RESET_CODE_FAILURE", function() { return SEND_RESET_CODE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_PASSWORD_REQUEST", function() { return RESET_PASSWORD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_PASSWORD_SUCCESS", function() { return RESET_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_PASSWORD_FAILURE", function() { return RESET_PASSWORD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequest", function() { return loginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpRequest", function() { return signUpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendResetCodeRequest", function() { return sendResetCodeRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPasswordRequest", function() { return resetPasswordRequest; });
const AUTH_REQUEST = 'AUTH_REQUEST';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAILURE = 'AUTH_FAILURE';
const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
const SEND_RESET_CODE_REQUEST = 'SEND_RESET_CODE_REQUEST';
const SEND_RESET_CODE_SUCCESS = 'SEND_RESET_CODE_SUCCESS';
const SEND_RESET_CODE_FAILURE = 'SEND_RESET_CODE_FAILURE';
const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';
const loginRequest = (username, password) => ({
  type: AUTH_REQUEST,
  payload: {
    username,
    password
  }
});
const signUpRequest = payload => ({
  type: SIGNUP_REQUEST,
  payload
});
const logOut = () => ({
  type: LOGOUT_REQUEST
});
const sendResetCodeRequest = emailAddress => ({
  type: SEND_RESET_CODE_REQUEST,
  emailAddress
});
const resetPasswordRequest = payload => ({
  type: RESET_PASSWORD_REQUEST,
  payload
});

/***/ }),

/***/ "./lib/auth/reducers.js":
/*!******************************!*\
  !*** ./lib/auth/reducers.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/auth/actions.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./lib/helpers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  data: {
    token: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["readLocalStorage"])('token'),
    user: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["readLocalStorage"])('user')
  },
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["AUTH_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["AUTH_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["AUTH_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/auth/sagas.js":
/*!***************************!*\
  !*** ./lib/auth/sagas.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Saga; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/auth/actions.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./lib/services.js");
/* harmony import */ var _loader_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/actions */ "./lib/loader/actions.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./lib/helpers.js");
/* harmony import */ var _error_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error/actions */ "./lib/error/actions.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_RollbarErrorTracking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/RollbarErrorTracking */ "./components/RollbarErrorTracking.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_9__);











function* login({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_2__["Post"], "auth/login", payload, true);
    console.log(response);

    if (response && response.success) {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["writeLocalStorage"])('token', response.token);
      Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["writeLocalStorage"])('user', response.user);
      Object(nookies__WEBPACK_IMPORTED_MODULE_9__["setCookie"])(null, 'token', response.token, {
        maxAge: 10 * 365 * 24 * 60 * 60,
        path: '/'
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/'));
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_0__["AUTH_SUCCESS"],
        payload: response
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_0__["AUTH_FAILURE"],
        payload: response
      }); //RollbarErrorTracking.logErroInfo(JSON.stringify(response))

      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _error_actions__WEBPACK_IMPORTED_MODULE_5__["LOGIN_ERROR_START"]
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_0__["AUTH_FAILURE"],
      payload: error
    }); //  RollbarErrorTracking.logErroInfo(JSON.stringify(error))

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _error_actions__WEBPACK_IMPORTED_MODULE_5__["LOGIN_ERROR_START"]
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
    });
  }
}

function* signUpSaga({
  payload
}) {
  const values = {
    username: payload.username,
    password: payload.password
  };

  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_2__["PostFormData"], "user/create-user", payload, {});

    if (response && !response.error && response.success) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_0__["SIGNUP_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["loginRequest"])(values.username, values.password));
    } else {
      if (response.emailAddress) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _error_actions__WEBPACK_IMPORTED_MODULE_5__["EMAIL_ERROR_START"]
        });
      } else if (response.username) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _error_actions__WEBPACK_IMPORTED_MODULE_5__["USERNAME_ERROR_START"]
        });
      } else {
        _components_RollbarErrorTracking__WEBPACK_IMPORTED_MODULE_7__["default"].logErroInfo(JSON.stringify(response));
      }

      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_0__["SIGNUP_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
      });
      _components_RollbarErrorTracking__WEBPACK_IMPORTED_MODULE_7__["default"].logErroInfo(JSON.stringify(response));
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_0__["SIGNUP_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
    });
    _components_RollbarErrorTracking__WEBPACK_IMPORTED_MODULE_7__["default"].logErroInfo(JSON.stringify(error));
  }
}

function* sendResetCodeSaga(payload) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_2__["Post"], `auth/send-reset-code?emailAddress=${payload.emailAddress}`, {}, {});

    if (response && !response.error && response.status) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_0__["SEND_RESET_CODE_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success("E-postanızı kontrol edin");
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/sifre-sifirla'));
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_0__["SEND_RESET_CODE_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_0__["SEND_RESET_CODE_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
    });
  }
}

function* resetPasswordSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_2__["Post"], "auth/reset-password", payload, {});

    if (response && !response.error && response.status) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_0__["RESET_PASSWORD_SUCCESS"],
        payload: response
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success("Şifre başarıyla değiştirildi");
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/giris-yap'));
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_0__["RESET_PASSWORD_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_0__["RESET_PASSWORD_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
    });
  }
}

function* logOutSaga() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_SUCCESS"]
    });
    Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["removeLocalStorage"])("token");
    Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["removeLocalStorage"])("user");
    localStorage.clear();
    sessionStorage.clear();
    Object(nookies__WEBPACK_IMPORTED_MODULE_9__["destroyCookie"])(null, 'token');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: "RESET"
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/giris-yap'));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_FAILURE"]
    });
  }
}

function* Saga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["AUTH_REQUEST"], login);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["SIGNUP_REQUEST"], signUpSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_REQUEST"], logOutSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["SEND_RESET_CODE_REQUEST"], sendResetCodeSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["RESET_PASSWORD_REQUEST"], resetPasswordSaga);
}

/***/ }),

/***/ "./lib/category/actions.js":
/*!*********************************!*\
  !*** ./lib/category/actions.js ***!
  \*********************************/
/*! exports provided: GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE, GET_COMS_BY_CATEGORY_REQUEST, GET_COMS_BY_CATEGORY_SUCCESS, GET_COMS_BY_CATEGORY_FAILURE, getCategoriesRequest, getComsByCategoryRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES_REQUEST", function() { return GET_CATEGORIES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES_SUCCESS", function() { return GET_CATEGORIES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES_FAILURE", function() { return GET_CATEGORIES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMS_BY_CATEGORY_REQUEST", function() { return GET_COMS_BY_CATEGORY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMS_BY_CATEGORY_SUCCESS", function() { return GET_COMS_BY_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMS_BY_CATEGORY_FAILURE", function() { return GET_COMS_BY_CATEGORY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoriesRequest", function() { return getCategoriesRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComsByCategoryRequest", function() { return getComsByCategoryRequest; });
const GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST';
const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';
const GET_COMS_BY_CATEGORY_REQUEST = 'GET_COMS_BY_CATEGORY_REQUEST';
const GET_COMS_BY_CATEGORY_SUCCESS = 'GET_COMS_BY_CATEGORY_SUCCESS';
const GET_COMS_BY_CATEGORY_FAILURE = 'GET_COMS_BY_CATEGORY_FAILURE';
const getCategoriesRequest = payload => {
  return {
    type: GET_CATEGORIES_REQUEST,
    payload
  };
};
const getComsByCategoryRequest = payload => ({
  type: GET_COMS_BY_CATEGORY_REQUEST,
  payload
});

/***/ }),

/***/ "./lib/category/comsByCategoryReducer.js":
/*!***********************************************!*\
  !*** ./lib/category/comsByCategoryReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/category/actions.js");
/* harmony import */ var _community_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../community/actions */ "./lib/community/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_COMS_BY_CATEGORY_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_COMS_BY_CATEGORY_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_COMS_BY_CATEGORY_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    case _community_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_COMMUNITY_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _community_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_COMMUNITY_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _community_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_COMMUNITY_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/category/reducers.js":
/*!**********************************!*\
  !*** ./lib/category/reducers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/category/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORIES_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORIES_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORIES_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/category/sagas.js":
/*!*******************************!*\
  !*** ./lib/category/sagas.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Saga; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./lib/services.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./lib/category/actions.js");
/* harmony import */ var _loader_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/actions */ "./lib/loader/actions.js");





function* getCategoriesSaga({
  payload
}) {
  console.log('kategori saga da');

  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], "category/get-all", {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_CATEGORIES_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_CATEGORIES_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_CATEGORIES_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
    });
  }
}

function* getComsByCategorySaga({
  payload
}) {
  try {
    const url = `category/get-communities?name=${payload.name}`;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], url, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_COMS_BY_CATEGORY_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_COMS_BY_CATEGORY_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_COMS_BY_CATEGORY_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
    });
  }
}

function* Saga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_CATEGORIES_REQUEST"], getCategoriesSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_COMS_BY_CATEGORY_REQUEST"], getComsByCategorySaga);
}

/***/ }),

/***/ "./lib/comment/actions.js":
/*!********************************!*\
  !*** ./lib/comment/actions.js ***!
  \********************************/
/*! exports provided: CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS, CREATE_COMMENT_FAILURE, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE, DELETE_COMMENT_MODERATOR_REQUEST, DELETE_COMMENT_MODERATOR_SUCCESS, DELETE_COMMENT_MODERATOR_FAILURE, CREATE_REPLY_REQUEST, CREATE_REPLY_SUCCESS, CREATE_REPLY_FAILURE, DELETE_REPLY_REQUEST, DELETE_REPLY_SUCCESS, DELETE_REPLY_FAILURE, DELETE_REPLY_MODERATOR_REQUEST, DELETE_REPLY_MODERATOR_SUCCESS, DELETE_REPLY_MODERATOR_FAILURE, LIKE_COMMENT_REQUEST, LIKE_COMMENT_SUCCESS, LIKE_COMMENT_FAILURE, UNLIKE_COMMENT_REQUEST, UNLIKE_COMMENT_SUCCESS, UNLIKE_COMMENT_FAILURE, LIKE_REPLY_REQUEST, LIKE_REPLY_SUCCESS, LIKE_REPLY_FAILURE, UNLIKE_REPLY_REQUEST, UNLIKE_REPLY_SUCCESS, UNLIKE_REPLY_FAILURE, createCommentRequest, createReplyRequest, deleteCommentRequest, deleteCommentModeratorRequest, likeCommentRequest, unlikeCommentRequest, deleteReplyRequest, deleteReplyModeratorRequest, likeReplyRequest, unlikeReplyRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_COMMENT_REQUEST", function() { return CREATE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_COMMENT_SUCCESS", function() { return CREATE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_COMMENT_FAILURE", function() { return CREATE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_REQUEST", function() { return DELETE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_SUCCESS", function() { return DELETE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_FAILURE", function() { return DELETE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_MODERATOR_REQUEST", function() { return DELETE_COMMENT_MODERATOR_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_MODERATOR_SUCCESS", function() { return DELETE_COMMENT_MODERATOR_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_MODERATOR_FAILURE", function() { return DELETE_COMMENT_MODERATOR_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_REPLY_REQUEST", function() { return CREATE_REPLY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_REPLY_SUCCESS", function() { return CREATE_REPLY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_REPLY_FAILURE", function() { return CREATE_REPLY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_REPLY_REQUEST", function() { return DELETE_REPLY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_REPLY_SUCCESS", function() { return DELETE_REPLY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_REPLY_FAILURE", function() { return DELETE_REPLY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_REPLY_MODERATOR_REQUEST", function() { return DELETE_REPLY_MODERATOR_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_REPLY_MODERATOR_SUCCESS", function() { return DELETE_REPLY_MODERATOR_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_REPLY_MODERATOR_FAILURE", function() { return DELETE_REPLY_MODERATOR_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_COMMENT_REQUEST", function() { return LIKE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_COMMENT_SUCCESS", function() { return LIKE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_COMMENT_FAILURE", function() { return LIKE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_COMMENT_REQUEST", function() { return UNLIKE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_COMMENT_SUCCESS", function() { return UNLIKE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_COMMENT_FAILURE", function() { return UNLIKE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_REPLY_REQUEST", function() { return LIKE_REPLY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_REPLY_SUCCESS", function() { return LIKE_REPLY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_REPLY_FAILURE", function() { return LIKE_REPLY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_REPLY_REQUEST", function() { return UNLIKE_REPLY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_REPLY_SUCCESS", function() { return UNLIKE_REPLY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_REPLY_FAILURE", function() { return UNLIKE_REPLY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommentRequest", function() { return createCommentRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReplyRequest", function() { return createReplyRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCommentRequest", function() { return deleteCommentRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCommentModeratorRequest", function() { return deleteCommentModeratorRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likeCommentRequest", function() { return likeCommentRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlikeCommentRequest", function() { return unlikeCommentRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteReplyRequest", function() { return deleteReplyRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteReplyModeratorRequest", function() { return deleteReplyModeratorRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likeReplyRequest", function() { return likeReplyRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlikeReplyRequest", function() { return unlikeReplyRequest; });
const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST';
const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';
const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';
const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';
const DELETE_COMMENT_MODERATOR_REQUEST = 'DELETE_COMMENT_MODERATOR_REQUEST';
const DELETE_COMMENT_MODERATOR_SUCCESS = 'DELETE_COMMENT_MODERATOR_SUCCESS';
const DELETE_COMMENT_MODERATOR_FAILURE = 'DELETE_COMMENT_MODERATOR_FAILURE';
const CREATE_REPLY_REQUEST = 'CREATE_REPLY_REQUEST';
const CREATE_REPLY_SUCCESS = 'CREATE_REPLY_SUCCESS';
const CREATE_REPLY_FAILURE = 'CREATE_REPLY_FAILURE';
const DELETE_REPLY_REQUEST = 'DELETE_REPLY_REQUEST';
const DELETE_REPLY_SUCCESS = 'DELETE_REPLY_SUCCESS';
const DELETE_REPLY_FAILURE = 'DELETE_REPLY_FAILURE';
const DELETE_REPLY_MODERATOR_REQUEST = 'DELETE_REPLY_MODERATOR_REQUEST';
const DELETE_REPLY_MODERATOR_SUCCESS = 'DELETE_REPLY_MODERATOR_SUCCESS';
const DELETE_REPLY_MODERATOR_FAILURE = 'DELETE_REPLY_MODERATOR_FAILURE';
const LIKE_COMMENT_REQUEST = 'LIKE_COMMENT_REQUEST';
const LIKE_COMMENT_SUCCESS = 'LIKE_COMMENT_SUCCESS';
const LIKE_COMMENT_FAILURE = 'LIKE_COMMENT_FAILURE';
const UNLIKE_COMMENT_REQUEST = 'UNLIKE_COMMENT_REQUEST';
const UNLIKE_COMMENT_SUCCESS = 'UNLIKE_COMMENT_SUCCESS';
const UNLIKE_COMMENT_FAILURE = 'UNLIKE_COMMENT_FAILURE';
const LIKE_REPLY_REQUEST = 'LIKE_REPLY_REQUEST';
const LIKE_REPLY_SUCCESS = 'LIKE_REPLY_SUCCESS';
const LIKE_REPLY_FAILURE = 'LIKE_REPLY_FAILURE';
const UNLIKE_REPLY_REQUEST = 'UNLIKE_REPLY_REQUEST';
const UNLIKE_REPLY_SUCCESS = 'UNLIKE_REPLY_SUCCESS';
const UNLIKE_REPLY_FAILURE = 'UNLIKE_REPLY_FAILURE';
const createCommentRequest = payload => ({
  type: CREATE_COMMENT_REQUEST,
  payload
});
const createReplyRequest = payload => ({
  type: CREATE_REPLY_REQUEST,
  payload
});
const deleteCommentRequest = payload => ({
  type: DELETE_COMMENT_REQUEST,
  payload
});
const deleteCommentModeratorRequest = payload => ({
  type: DELETE_COMMENT_MODERATOR_REQUEST,
  payload
});
const likeCommentRequest = payload => ({
  type: LIKE_COMMENT_REQUEST,
  payload
});
const unlikeCommentRequest = payload => ({
  type: UNLIKE_COMMENT_REQUEST,
  payload
});
const deleteReplyRequest = payload => ({
  type: DELETE_REPLY_REQUEST,
  payload
});
const deleteReplyModeratorRequest = payload => ({
  type: DELETE_REPLY_MODERATOR_REQUEST,
  payload
});
const likeReplyRequest = payload => ({
  type: LIKE_REPLY_REQUEST,
  payload
});
const unlikeReplyRequest = payload => ({
  type: UNLIKE_REPLY_REQUEST,
  payload
});

/***/ }),

/***/ "./lib/comment/sagas.js":
/*!******************************!*\
  !*** ./lib/comment/sagas.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Saga; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./lib/services.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./lib/comment/actions.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./lib/helpers.js");
/* harmony import */ var _posts_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../posts/actions */ "./lib/posts/actions.js");
/* harmony import */ var _loader_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/actions */ "./lib/loader/actions.js");







function* createCommentSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_START"]
    });
    const user = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["readLocalStorage"])('user');
    payload.userId = user.id;
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Post"], `comment/create`, payload, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["CREATE_COMMENT_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["CREATE_COMMENT_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["CREATE_COMMENT_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_posts_actions__WEBPACK_IMPORTED_MODULE_4__["getPostDetailRequest"])({
    search: `?status=${payload.postId}`
  }));
}

function* createReplySaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_START"]
    });
    const user = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["readLocalStorage"])('user');
    payload.userId = user.id;
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Post"], `reply/create-reply`, payload, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["CREATE_REPLY_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["CREATE_REPLY_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["CREATE_REPLY_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_posts_actions__WEBPACK_IMPORTED_MODULE_4__["getPostDetailRequest"])({
    search: `?status=${payload.postId}`
  }));
}

function* likeCommentSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_START"]
    });
    const user = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["readLocalStorage"])('user');
    payload.userId = user.id;
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Post"], `comment/like?commentId=${payload.commentId}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["LIKE_COMMENT_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["LIKE_COMMENT_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["LIKE_COMMENT_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_posts_actions__WEBPACK_IMPORTED_MODULE_4__["getPostDetailRequest"])({
    search: `?status=${payload.postId}`
  }));
}

function* unlikeCommentSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_START"]
    });
    const user = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["readLocalStorage"])('user');
    payload.userId = user.id;
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Delete"], `comment/unlike?commentId=${payload.commentId}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_COMMENT_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_COMMENT_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_COMMENT_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_posts_actions__WEBPACK_IMPORTED_MODULE_4__["getPostDetailRequest"])({
    search: `?status=${payload.postId}`
  }));
}

function* deleteCommentSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_START"]
    });
    const user = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["readLocalStorage"])('user');
    payload.userId = user.id;
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Delete"], `comment/delete?id=${payload.commentId}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_COMMENT_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_COMMENT_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_COMMENT_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_posts_actions__WEBPACK_IMPORTED_MODULE_4__["getPostDetailRequest"])({
    search: `?status=${payload.postId}`
  }));
}

function* deleteCommentModeratorSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Delete"], `comment/moderator-delete?id=${payload.commentId}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_COMMENT_MODERATOR_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_COMMENT_MODERATOR_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_COMMENT_MODERATOR_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_posts_actions__WEBPACK_IMPORTED_MODULE_4__["getPostDetailRequest"])({
    search: `?status=${payload.postId}`
  }));
}

function* deleteReplyModeratorSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Delete"], `reply/moderator-delete?id=${payload.replyId}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_REPLY_MODERATOR_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_REPLY_MODERATOR_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_REPLY_MODERATOR_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_posts_actions__WEBPACK_IMPORTED_MODULE_4__["getPostDetailRequest"])({
    search: `?status=${payload.postId}`
  }));
}

function* deleteReplySaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Delete"], `reply/delete?id=${payload.replyId}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_REPLY_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_REPLY_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_REPLY_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_posts_actions__WEBPACK_IMPORTED_MODULE_4__["getPostDetailRequest"])({
    search: `?status=${payload.postId}`
  }));
}

function* likeReplySaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_START"]
    });
    const user = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["readLocalStorage"])('user');
    payload.userId = user.id;
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Post"], `reply/like?replyId=${payload.replyId}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["LIKE_REPLY_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["LIKE_REPLY_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["LIKE_REPLY_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_posts_actions__WEBPACK_IMPORTED_MODULE_4__["getPostDetailRequest"])({
    search: `?status=${payload.postId}`
  }));
}

function* unlikeReplySaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_START"]
    });
    const user = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["readLocalStorage"])('user');
    payload.userId = user.id;
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Delete"], `reply/unlike?replyId=${payload.replyId}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_REPLY_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_REPLY_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_REPLY_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_posts_actions__WEBPACK_IMPORTED_MODULE_4__["getPostDetailRequest"])({
    search: `?status=${payload.postId}`
  }));
}

function* Saga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["CREATE_COMMENT_REQUEST"], createCommentSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["CREATE_REPLY_REQUEST"], createReplySaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["LIKE_COMMENT_REQUEST"], likeCommentSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_COMMENT_REQUEST"], unlikeCommentSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_COMMENT_REQUEST"], deleteCommentSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_COMMENT_MODERATOR_REQUEST"], deleteCommentModeratorSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_REPLY_REQUEST"], deleteReplySaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_REPLY_MODERATOR_REQUEST"], deleteReplyModeratorSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["LIKE_REPLY_REQUEST"], likeReplySaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_REPLY_REQUEST"], unlikeReplySaga);
}

/***/ }),

/***/ "./lib/commonActions.js":
/*!******************************!*\
  !*** ./lib/commonActions.js ***!
  \******************************/
/*! exports provided: CLEAR_HOME, CLEAR_COMMUNITY, CLEAR_USER, CLEAR_PROFILE, CLEAR_COMMUNITY_PAGE, clearStoreRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_HOME", function() { return CLEAR_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_COMMUNITY", function() { return CLEAR_COMMUNITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_USER", function() { return CLEAR_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_PROFILE", function() { return CLEAR_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_COMMUNITY_PAGE", function() { return CLEAR_COMMUNITY_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStoreRequest", function() { return clearStoreRequest; });
const CLEAR_HOME = 'CLEAR_HOME';
const CLEAR_COMMUNITY = 'CLEAR_COMMUNITY';
const CLEAR_USER = 'CLEAR_USER';
const CLEAR_PROFILE = 'CLEAR_PROFILE';
const CLEAR_COMMUNITY_PAGE = 'CLEAR_COMMUNITY_PAGE';
const clearStoreRequest = name => {
  switch (name) {
    case "home_posts":
      return {
        type: CLEAR_HOME
      };

    case "community_posts":
      return {
        type: CLEAR_COMMUNITY
      };

    case "profile_posts":
      return {
        type: CLEAR_PROFILE
      };

    case "user_posts":
      return {
        type: CLEAR_USER
      };

    case "community_oage":
      return {
        type: CLEAR_COMMUNITY_PAGE
      };

    default:
      break;
  }
};

/***/ }),

/***/ "./lib/community/actions.js":
/*!**********************************!*\
  !*** ./lib/community/actions.js ***!
  \**********************************/
/*! exports provided: GET_POPULAR_LIST_REQUEST, GET_POPULAR_LIST_SUCCESS, GET_POPULAR_LIST_FAILURE, GET_COMMUNITY_REQUEST, GET_COMMUNITY_SUCCESS, GET_COMMUNITY_FAILURE, GET_COMMUNITY_POSTS_REQUEST, GET_COMMUNITY_POSTS_SUCCESS, GET_COMMUNITY_POSTS_FAILURE, GET_ALL_COMMUNITY_REQUEST, GET_ALL_COMMUNITY_SUCCESS, GET_ALL_COMMUNITY_FAILURE, GET_USER_COMMUNITIES_REQUEST, GET_USER_COMMUNITIES_SUCCESS, GET_USER_COMMUNITIES_FAILURE, OF_MODERATORS_REQUEST, OF_MODERATORS_SUCCESS, OF_MODERATORS_FAILURE, UPDATE_COMMUNITY_REQUEST, UPDATE_COMMUNITY_SUCCESS, UPDATE_COMMUNITY_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE, getPopularCommnityListRequest, getCommunityRequest, getCommunityPostsRequest, getUserCommunitiesRequest, ofModeratorsRequest, updateCommunityRequest, getUsers, deleteUserRequest, getAllCommunitiesRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POPULAR_LIST_REQUEST", function() { return GET_POPULAR_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POPULAR_LIST_SUCCESS", function() { return GET_POPULAR_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POPULAR_LIST_FAILURE", function() { return GET_POPULAR_LIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMMUNITY_REQUEST", function() { return GET_COMMUNITY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMMUNITY_SUCCESS", function() { return GET_COMMUNITY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMMUNITY_FAILURE", function() { return GET_COMMUNITY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMMUNITY_POSTS_REQUEST", function() { return GET_COMMUNITY_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMMUNITY_POSTS_SUCCESS", function() { return GET_COMMUNITY_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMMUNITY_POSTS_FAILURE", function() { return GET_COMMUNITY_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_COMMUNITY_REQUEST", function() { return GET_ALL_COMMUNITY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_COMMUNITY_SUCCESS", function() { return GET_ALL_COMMUNITY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_COMMUNITY_FAILURE", function() { return GET_ALL_COMMUNITY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_COMMUNITIES_REQUEST", function() { return GET_USER_COMMUNITIES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_COMMUNITIES_SUCCESS", function() { return GET_USER_COMMUNITIES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_COMMUNITIES_FAILURE", function() { return GET_USER_COMMUNITIES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OF_MODERATORS_REQUEST", function() { return OF_MODERATORS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OF_MODERATORS_SUCCESS", function() { return OF_MODERATORS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OF_MODERATORS_FAILURE", function() { return OF_MODERATORS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMMUNITY_REQUEST", function() { return UPDATE_COMMUNITY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMMUNITY_SUCCESS", function() { return UPDATE_COMMUNITY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMMUNITY_FAILURE", function() { return UPDATE_COMMUNITY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USERS_REQUEST", function() { return GET_USERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USERS_SUCCESS", function() { return GET_USERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USERS_FAILURE", function() { return GET_USERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER_REQUEST", function() { return DELETE_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER_SUCCESS", function() { return DELETE_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER_FAILURE", function() { return DELETE_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularCommnityListRequest", function() { return getPopularCommnityListRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommunityRequest", function() { return getCommunityRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommunityPostsRequest", function() { return getCommunityPostsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCommunitiesRequest", function() { return getUserCommunitiesRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofModeratorsRequest", function() { return ofModeratorsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCommunityRequest", function() { return updateCommunityRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUserRequest", function() { return deleteUserRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCommunitiesRequest", function() { return getAllCommunitiesRequest; });
const GET_POPULAR_LIST_REQUEST = 'GET_POPULAR_LIST_REQUEST';
const GET_POPULAR_LIST_SUCCESS = 'GET_POPULAR_LIST_SUCCESS';
const GET_POPULAR_LIST_FAILURE = 'GET_POPULAR_LIST_FAILURE';
const GET_COMMUNITY_REQUEST = 'GET_COMMUNITY_REQUEST';
const GET_COMMUNITY_SUCCESS = 'GET_COMMUNITY_SUCCESS';
const GET_COMMUNITY_FAILURE = 'GET_COMMUNITY_FAILURE';
const GET_COMMUNITY_POSTS_REQUEST = 'GET_COMMUNITY_POSTS_REQUEST';
const GET_COMMUNITY_POSTS_SUCCESS = 'GET_COMMUNITY_POSTS_SUCCESS';
const GET_COMMUNITY_POSTS_FAILURE = 'GET_COMMUNITY_POSTS_FAILURE';
const GET_ALL_COMMUNITY_REQUEST = 'GET_ALL_COMMUNITY_REQUEST';
const GET_ALL_COMMUNITY_SUCCESS = 'GET_ALL_COMMUNITY_SUCCESS';
const GET_ALL_COMMUNITY_FAILURE = 'GET_ALL_COMMUNITY_FAILURE';
const GET_USER_COMMUNITIES_REQUEST = 'GET_USER_COMMUNITIES_REQUEST';
const GET_USER_COMMUNITIES_SUCCESS = 'GET_USER_COMMUNITIES_SUCCESS';
const GET_USER_COMMUNITIES_FAILURE = 'GET_USER_COMMUNITIES_FAILURE';
const OF_MODERATORS_REQUEST = 'OF_MODERATORS_REQUEST';
const OF_MODERATORS_SUCCESS = 'OF_MODERATORS_SUCCESS';
const OF_MODERATORS_FAILURE = 'OF_MODERATORS_FAILURE';
const UPDATE_COMMUNITY_REQUEST = 'UPDATE_COMMUNITY_REQUEST';
const UPDATE_COMMUNITY_SUCCESS = 'UPDATE_COMMUNITY_SUCCESS';
const UPDATE_COMMUNITY_FAILURE = 'UPDATE_COMMUNITY_FAILURE';
const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';
const getPopularCommnityListRequest = payload => ({
  type: GET_POPULAR_LIST_REQUEST,
  payload
});
const getCommunityRequest = payload => ({
  type: GET_COMMUNITY_REQUEST,
  payload
});
const getCommunityPostsRequest = payload => ({
  type: GET_COMMUNITY_POSTS_REQUEST,
  payload
});
const getUserCommunitiesRequest = payload => {
  console.log('action');
  return {
    type: GET_USER_COMMUNITIES_REQUEST,
    payload
  };
};
const ofModeratorsRequest = () => ({
  type: OF_MODERATORS_REQUEST
});
const updateCommunityRequest = payload => ({
  type: UPDATE_COMMUNITY_REQUEST,
  payload
});
const getUsers = payload => ({
  type: GET_USERS_REQUEST,
  payload
});
const deleteUserRequest = payload => ({
  type: DELETE_USER_REQUEST,
  payload
});
const getAllCommunitiesRequest = () => ({
  type: GET_ALL_COMMUNITY_REQUEST
});

/***/ }),

/***/ "./lib/community/communityUsersReducer.js":
/*!************************************************!*\
  !*** ./lib/community/communityUsersReducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/community/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_USERS_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_USERS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_USERS_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/community/ofModeratorsReducer.js":
/*!**********************************************!*\
  !*** ./lib/community/ofModeratorsReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/community/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["OF_MODERATORS_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["OF_MODERATORS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["OF_MODERATORS_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/community/reducers.js":
/*!***********************************!*\
  !*** ./lib/community/reducers.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/community/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_POPULAR_LIST_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_POPULAR_LIST_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_POPULAR_LIST_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_COMMUNITY_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_COMMUNITY_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_COMMUNITY_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/community/sagas.js":
/*!********************************!*\
  !*** ./lib/community/sagas.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Saga; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./lib/services.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./lib/community/actions.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./lib/helpers.js");
/* harmony import */ var _loader_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/actions */ "./lib/loader/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function* getPopularListSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], "community/get-populars", payload, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_POPULAR_LIST_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_POPULAR_LIST_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_POPULAR_LIST_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
    });
  }
}

function* getCommunitySaga({
  payload
}) {
  try {
    const url = `community/get?slug=${payload.slug}`;

    if (payload.loaderStart) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
      });
    }

    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], url, {}, payload.token, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_COMMUNITY_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_COMMUNITY_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_COMMUNITY_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
    });
  }
}

function* getCommunityPostsSaga({
  payload
}) {
  try {
    const {
      pageNumber,
      pageSize,
      slug,
      token
    } = payload;

    if (payload.loaderStart) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
      });
    }

    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `community/get-posts?slug=${slug}&PageNumber=${pageNumber}&PageSize=${pageSize}`, {}, token, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_COMMUNITY_POSTS_SUCCESS"],
        payload: _objectSpread(_objectSpread({}, response), {}, {
          isVoted: payload.isVoted
        })
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_COMMUNITY_POSTS_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  } catch (error) {
    console.log(error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_COMMUNITY_POSTS_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
    });
  }
}

function* getUserCommunitiesSaga({
  payload
}) {
  if (Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["isLogged"])()) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
      });
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `user/get-user-communities`, {}, {}, false);

      if (response && !response.error) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_USER_COMMUNITIES_SUCCESS"],
          payload: response
        });
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
        });
      } else {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_USER_COMMUNITIES_FAILURE"],
          payload: response
        });
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
        });
      }
    } catch (error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_USER_COMMUNITIES_FAILURE"],
        payload: error
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  }
}

function* ofModeratorsSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `community/of-moderators`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["OF_MODERATORS_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["OF_MODERATORS_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["OF_MODERATORS_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
    });
  }
}

function* getUsersSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `community/users?slug=${payload.slug}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_USERS_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_USERS_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_USERS_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
    });
  }
}

function* deleteUserSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Delete"], `user/moderator-rejected-join`, payload, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_USER_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_USER_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_USER_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["getCommunityRequest"])({
    slug: payload.slug
  }));
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["getUsers"])({
    slug: payload.slug
  }));
}

function* updateCommunity({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["PutFormData"], `community/update`, payload, {});

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_COMMUNITY_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_COMMUNITY_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_COMMUNITY_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["getCommunityRequest"])({
    slug: payload.slug
  }));
}

function* getAllSaga() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `community/get-all`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_COMMUNITY_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_COMMUNITY_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_COMMUNITY_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
    });
  }
}

function* Saga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_POPULAR_LIST_REQUEST"], getPopularListSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_COMMUNITY_REQUEST"], getCommunitySaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_USER_COMMUNITIES_REQUEST"], getUserCommunitiesSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["OF_MODERATORS_REQUEST"], ofModeratorsSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_COMMUNITY_REQUEST"], updateCommunity);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_USERS_REQUEST"], getUsersSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_USER_REQUEST"], deleteUserSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_COMMUNITY_REQUEST"], getAllSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_COMMUNITY_POSTS_REQUEST"], getCommunityPostsSaga);
}

/***/ }),

/***/ "./lib/community/selectedCommunityReducer.js":
/*!***************************************************!*\
  !*** ./lib/community/selectedCommunityReducer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/community/actions.js");
/* harmony import */ var _commonActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonActions */ "./lib/commonActions.js");
/* harmony import */ var _home_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/reducers */ "./lib/home/reducers.js");
/* harmony import */ var _posts_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts/actions */ "./lib/posts/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const initialState = {
  pagedData: {
    results: []
  },
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_COMMUNITY_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_COMMUNITY_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_COMMUNITY_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_COMMUNITY_POSTS_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_COMMUNITY_POSTS_SUCCESS"]:
      if (payload.isVoted) {
        const results = Object(_home_reducers__WEBPACK_IMPORTED_MODULE_2__["handleNonPaginatedResult"])(state.pagedData.results, payload.results);
        payload.results = results;
        return _objectSpread(_objectSpread({}, state), {}, {
          pagedData: payload
        });
      } else {
        const prevPosts1 = state.pagedData.results;
        const newPosts1 = prevPosts1.concat(payload.results);
        payload.results = newPosts1;
        return _objectSpread(_objectSpread({}, state), {}, {
          pagedData: payload
        });
      }

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_COMMUNITY_POSTS_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    case _posts_actions__WEBPACK_IMPORTED_MODULE_3__["DELETE_MODERATOR_SUCCESS"]:
      const temp = [...state.pagedData.results];
      const newTemp = temp.filter(x => x.id !== payload.deletedPost);
      payload.results = newTemp;
      return _objectSpread(_objectSpread({}, state), {}, {
        pagedData: payload
      });

    case _commonActions__WEBPACK_IMPORTED_MODULE_1__["CLEAR_COMMUNITY"]:
      const newState = {
        pagedData: {
          results: []
        },
        data: null,
        error: null
      };
      return _objectSpread({}, newState);

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/community/userCommunitiesReducer.js":
/*!*************************************************!*\
  !*** ./lib/community/userCommunitiesReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/community/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_USER_COMMUNITIES_REQUEST"]:
      console.log('reduxeer');
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_USER_COMMUNITIES_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_USER_COMMUNITIES_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/conversation/actions.js":
/*!*************************************!*\
  !*** ./lib/conversation/actions.js ***!
  \*************************************/
/*! exports provided: GET_CONVERSATIONS_REQUEST, GET_CONVERSATIONS_SUCCESS, GET_CONVERSATIONS_FAILURE, GET_CONVERSATION_DETAIL_REQUEST, GET_CONVERSATION_DETAIL_SUCCESS, GET_CONVERSATION_DETAIL_FAILURE, SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE, getConversationsRequest, getConversationDetailRequest, sendMessageRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CONVERSATIONS_REQUEST", function() { return GET_CONVERSATIONS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CONVERSATIONS_SUCCESS", function() { return GET_CONVERSATIONS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CONVERSATIONS_FAILURE", function() { return GET_CONVERSATIONS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CONVERSATION_DETAIL_REQUEST", function() { return GET_CONVERSATION_DETAIL_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CONVERSATION_DETAIL_SUCCESS", function() { return GET_CONVERSATION_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CONVERSATION_DETAIL_FAILURE", function() { return GET_CONVERSATION_DETAIL_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_MESSAGE_REQUEST", function() { return SEND_MESSAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_MESSAGE_SUCCESS", function() { return SEND_MESSAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_MESSAGE_FAILURE", function() { return SEND_MESSAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationsRequest", function() { return getConversationsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationDetailRequest", function() { return getConversationDetailRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageRequest", function() { return sendMessageRequest; });
const GET_CONVERSATIONS_REQUEST = 'GET_CONVERSATIONS_REQUEST';
const GET_CONVERSATIONS_SUCCESS = 'GET_CONVERSATIONS_SUCCESS';
const GET_CONVERSATIONS_FAILURE = 'GET_CONVERSATIONS_FAILURE';
const GET_CONVERSATION_DETAIL_REQUEST = 'GET_CONVERSATION_DETAIL_REQUEST';
const GET_CONVERSATION_DETAIL_SUCCESS = 'GET_CONVERSATION_DETAIL_SUCCESS';
const GET_CONVERSATION_DETAIL_FAILURE = 'GET_CONVERSATION_DETAIL_FAILURE';
const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';
const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';
const getConversationsRequest = () => ({
  type: GET_CONVERSATIONS_REQUEST
});
const getConversationDetailRequest = payload => ({
  type: GET_CONVERSATION_DETAIL_REQUEST,
  payload
});
const sendMessageRequest = payload => ({
  type: SEND_MESSAGE_REQUEST,
  payload
});

/***/ }),

/***/ "./lib/conversation/conversationReducer.js":
/*!*************************************************!*\
  !*** ./lib/conversation/conversationReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/conversation/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_CONVERSATION_DETAIL_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_CONVERSATION_DETAIL_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_CONVERSATION_DETAIL_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/conversation/reducers.js":
/*!**************************************!*\
  !*** ./lib/conversation/reducers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/conversation/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_CONVERSATIONS_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_CONVERSATIONS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_CONVERSATIONS_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/conversation/sagas.js":
/*!***********************************!*\
  !*** ./lib/conversation/sagas.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Saga; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./lib/services.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./lib/conversation/actions.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./lib/helpers.js");
/* harmony import */ var _loader_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/actions */ "./lib/loader/actions.js");



/* import { push } from 'react-router-redux';
 */




function* getConversationsSaga() {
  if (Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["isLogged"])()) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
      });
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `conversation/get-all`, {}, {}, false);

      if (response && !response.error) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_CONVERSATIONS_SUCCESS"],
          payload: response
        });
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
        });
      } else {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_CONVERSATIONS_FAILURE"],
          payload: response
        });
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
        });
      }
    } catch (error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_CONVERSATIONS_FAILURE"],
        payload: error
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  }
}

function* getConversationDetailSaga({
  payload
}) {
  try {
    const user = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["readLocalStorage"])('user');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `conversation/get/by-id?id=${payload.id}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_CONVERSATION_DETAIL_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_CONVERSATION_DETAIL_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_CONVERSATION_DETAIL_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
    });
  }
}

function* sendMessageSaga({
  payload
}) {
  let tempResponseData = {};

  try {
    const user = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["readLocalStorage"])('user');
    payload.senderId = user.id;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Post"], `message/create`, payload, {}, false);
    tempResponseData = response;

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["SEND_MESSAGE_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["SEND_MESSAGE_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["SEND_MESSAGE_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["getConversationDetailRequest"])({
    id: tempResponseData.conversationId
  }));

  if (!payload.conversationId) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(push('/chat'));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["getConversationsRequest"])());
  }
}

function* Saga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_CONVERSATIONS_REQUEST"], getConversationsSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_CONVERSATION_DETAIL_REQUEST"], getConversationDetailSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["SEND_MESSAGE_REQUEST"], sendMessageSaga);
}

/***/ }),

/***/ "./lib/error/actions.js":
/*!******************************!*\
  !*** ./lib/error/actions.js ***!
  \******************************/
/*! exports provided: LOGIN_ERROR_START, EMAIL_ERROR_START, USERNAME_ERROR_START, END_ERROR, setErrorRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR_START", function() { return LOGIN_ERROR_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_ERROR_START", function() { return EMAIL_ERROR_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERNAME_ERROR_START", function() { return USERNAME_ERROR_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_ERROR", function() { return END_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setErrorRequest", function() { return setErrorRequest; });
const LOGIN_ERROR_START = 'LOGIN_ERROR_START';
const EMAIL_ERROR_START = 'EMAIL_ERROR_START';
const USERNAME_ERROR_START = 'USERNAME_ERROR_START';
const END_ERROR = "END_ERROR";
const setErrorRequest = error => ({
  type: error == "username" ? USERNAME_ERROR_START : error == "email" ? EMAIL_ERROR_START : error == "login" ? LOGIN_ERROR_START : END_ERROR
});

/***/ }),

/***/ "./lib/error/reducer.js":
/*!******************************!*\
  !*** ./lib/error/reducer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/error/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loginError: false,
  emailError: false,
  usernameError: false
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN_ERROR_START"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginError: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["EMAIL_ERROR_START"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        emailError: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["USERNAME_ERROR_START"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        usernameError: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["END_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        usernameError: false,
        loginError: false,
        emailError: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/helpers.js":
/*!************************!*\
  !*** ./lib/helpers.js ***!
  \************************/
/*! exports provided: readLocalStorage, loadState, isLoggedWithCookies, writeLocalStorage, removeLocalStorage, clearLocalStorage, getSearchParams, generateString, isLogged, getParameterByName, htmlToText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readLocalStorage", function() { return readLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadState", function() { return loadState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoggedWithCookies", function() { return isLoggedWithCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeLocalStorage", function() { return writeLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLocalStorage", function() { return removeLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearLocalStorage", function() { return clearLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchParams", function() { return getSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateString", function() { return generateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLogged", function() { return isLogged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameterByName", function() { return getParameterByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlToText", function() { return htmlToText; });
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/fp */ "lodash/fp");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_fp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);


const localStorage = global.localStorage && global.localStorage.removeItem ? global.localStorage : function () {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },

    setItem(key, value) {
      store[key] = value.toString();
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      store = Object.keys(store).filter(k => key !== k).reduce((accumulator, currentItem) => {
        accumulator[currentItem] = store[currentItem];
        return accumulator;
      }, {});
    }

  };
}();
const readLocalStorage = key => {
  if (Array.isArray(key)) {
    return Object(lodash_fp__WEBPACK_IMPORTED_MODULE_0__["fromPairs"])(key.map(k => [k, localStorage.getItem(k) && JSON.parse(localStorage.getItem(k))]));
  }

  return localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));
};
const loadState = key => {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
const isLoggedWithCookies = ctx => {
  const cookies = Object(nookies__WEBPACK_IMPORTED_MODULE_1__["parseCookies"])(ctx);
  return cookies && cookies.token && cookies.user;
};
const writeLocalStorage = (key, value) => {
  const keys = typeof key === 'object' ? key : {
    [key]: value
  };
  Object.entries(keys).map(([k, val]) => localStorage.setItem(k, JSON.stringify(val)));
  return keys;
};
const removeLocalStorage = key => {
  const keys = Array.isArray(key) ? key : [key];
  keys.forEach(k => localStorage.removeItem(k));
  return keys;
};
const clearLocalStorage = () => {
  localStorage.clear();
};
const getSearchParams = params => Object.keys(params).map(key => {
  if (typeof params[key] !== 'undefined') {
    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key]) ? encodeURIComponent(params[key]) : ''}`;
  }
}).join('&');
const generateString = () => {
  const name = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return name;
};
const isLogged = () => {
  const token = readLocalStorage("token");
  const user = readLocalStorage("user");
  return token && user;
};
const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
const htmlToText = html => {
  var temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || "";
};

/***/ }),

/***/ "./lib/home/actions.js":
/*!*****************************!*\
  !*** ./lib/home/actions.js ***!
  \*****************************/
/*! exports provided: GET_HOME_POSTS_REQUEST, GET_HOME_POSTS_SUCCESS, GET_HOME_POSTS_FAILURE, GET_UNAUTHORIZED_POSTS_REQUEST, GET_UNAUTHORIZED_POSTS_SUCCESS, GET_UNAUTHORIZED_POSTS_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, getHomePostsRequest, getUnauthorizedPostsRequest, searchRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_POSTS_REQUEST", function() { return GET_HOME_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_POSTS_SUCCESS", function() { return GET_HOME_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_POSTS_FAILURE", function() { return GET_HOME_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_UNAUTHORIZED_POSTS_REQUEST", function() { return GET_UNAUTHORIZED_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_UNAUTHORIZED_POSTS_SUCCESS", function() { return GET_UNAUTHORIZED_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_UNAUTHORIZED_POSTS_FAILURE", function() { return GET_UNAUTHORIZED_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_REQUEST", function() { return SEARCH_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_SUCCESS", function() { return SEARCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_FAILURE", function() { return SEARCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomePostsRequest", function() { return getHomePostsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnauthorizedPostsRequest", function() { return getUnauthorizedPostsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchRequest", function() { return searchRequest; });
const GET_HOME_POSTS_REQUEST = 'GET_HOME_POSTS_REQUEST';
const GET_HOME_POSTS_SUCCESS = 'GET_HOME_POSTS_SUCCESS';
const GET_HOME_POSTS_FAILURE = 'GET_HOME_POSTS_FAILURE';
const GET_UNAUTHORIZED_POSTS_REQUEST = 'GET_UNAUTHORIZED_POSTS_REQUEST';
const GET_UNAUTHORIZED_POSTS_SUCCESS = 'GET_UNAUTHORIZED_POSTS_SUCCESS';
const GET_UNAUTHORIZED_POSTS_FAILURE = 'GET_UNAUTHORIZED_POSTS_FAILURE';
const SEARCH_REQUEST = 'SEARCH_REQUEST';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_FAILURE = 'SEARCH_FAILURE';
const getHomePostsRequest = payload => {
  return {
    type: GET_HOME_POSTS_REQUEST,
    payload
  };
};
const getUnauthorizedPostsRequest = payload => {
  return {
    type: GET_UNAUTHORIZED_POSTS_REQUEST,
    payload
  };
};
const searchRequest = payload => ({
  type: SEARCH_REQUEST,
  payload
});

/***/ }),

/***/ "./lib/home/reducers.js":
/*!******************************!*\
  !*** ./lib/home/reducers.js ***!
  \******************************/
/*! exports provided: handleNonPaginatedResult, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleNonPaginatedResult", function() { return handleNonPaginatedResult; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/home/actions.js");
/* harmony import */ var _commonActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonActions */ "./lib/commonActions.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  data: {
    results: []
  },
  error: null,
  search: null
};
const handleNonPaginatedResult = (stateArray, responseArray) => {
  for (let i = 0; i < stateArray.length; i++) {
    for (let x = 0; x < responseArray.length; x++) {
      if (stateArray[i].id == responseArray[x].id) {
        stateArray[i] = responseArray[x];
      }
    }
  }

  return stateArray;
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_POSTS_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_POSTS_SUCCESS"]:
      if (payload.isVoted) {
        const results = handleNonPaginatedResult(state.data.results, payload.results);
        payload.results = results;
        return _objectSpread(_objectSpread({}, state), {}, {
          data: payload
        });
      } else {
        const prevPosts1 = state.data.results;
        const newPosts1 = prevPosts1.concat(payload.results);
        payload.results = newPosts1;
        return _objectSpread(_objectSpread({}, state), {}, {
          data: payload
        });
      }

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_POSTS_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_UNAUTHORIZED_POSTS_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_UNAUTHORIZED_POSTS_SUCCESS"]:
      const prevPosts = state.data.results;
      const newPosts = prevPosts.concat(payload.results);
      payload.results = newPosts;
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_UNAUTHORIZED_POSTS_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["SEARCH_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["SEARCH_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        search: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["SEARCH_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    case _commonActions__WEBPACK_IMPORTED_MODULE_1__["CLEAR_HOME"]:
      const newData = {
        results: []
      };
      return _objectSpread(_objectSpread({}, state), {}, {
        data: newData
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/home/sagas.js":
/*!***************************!*\
  !*** ./lib/home/sagas.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Saga; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./lib/services.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./lib/home/actions.js");
/* harmony import */ var _loader_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/actions */ "./lib/loader/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function* getHomePostsSaga({
  payload
}) {
  try {
    if (payload.loaderStart) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_START"]
      });
    }

    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `post/paged-home-posts?PageNumber=${payload.pageNumber}&PageSize=${payload.pageSize}`, {}, payload.token, false);
    console.log(response);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_HOME_POSTS_SUCCESS"],
        payload: _objectSpread(_objectSpread({}, response), {}, {
          isVoted: payload.isVoted
        })
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_HOME_POSTS_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_HOME_POSTS_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
    });
  }
}

function* getUnauthorizedPostsSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: payload.loderStart ? _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_START"] : _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `post/paged-unauthorized-home-post?PageNumber=${payload.pageNumber}&PageSize=${payload.pageSize}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_UNAUTHORIZED_POSTS_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_UNAUTHORIZED_POSTS_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_UNAUTHORIZED_POSTS_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
    });
  }
}

function* searchSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `community/search?text=${payload.text}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["SEARCH_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["SEARCH_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["SEARCH_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_3__["LOADER_END"]
    });
  }
}

function* Saga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_HOME_POSTS_REQUEST"], getHomePostsSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_UNAUTHORIZED_POSTS_REQUEST"], getUnauthorizedPostsSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["SEARCH_REQUEST"], searchSaga);
}

/***/ }),

/***/ "./lib/loader/actions.js":
/*!*******************************!*\
  !*** ./lib/loader/actions.js ***!
  \*******************************/
/*! exports provided: LOADER_START, LOADER_END, setLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADER_START", function() { return LOADER_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADER_END", function() { return LOADER_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoader", function() { return setLoader; });
const LOADER_START = 'LOADER_START';
const LOADER_END = 'LOADER_END';
const setLoader = loading => ({
  type: loading ? LOADER_START : LOADER_END
});

/***/ }),

/***/ "./lib/loader/reducers.js":
/*!********************************!*\
  !*** ./lib/loader/reducers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/loader/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: false
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["LOADER_START"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["LOADER_END"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/messages/actions.js":
/*!*********************************!*\
  !*** ./lib/messages/actions.js ***!
  \*********************************/
/*! exports provided: GET_UNREADS_REQUEST, GET_UNREADS_SUCCESS, GET_UNREADS_FAILURE, MARK_AS_READ_REQUEST, MARK_AS_READ_SUCCESS, MARK_AS_READ_FAILURE, getUnreadsRequest, markAsReadRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_UNREADS_REQUEST", function() { return GET_UNREADS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_UNREADS_SUCCESS", function() { return GET_UNREADS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_UNREADS_FAILURE", function() { return GET_UNREADS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK_AS_READ_REQUEST", function() { return MARK_AS_READ_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK_AS_READ_SUCCESS", function() { return MARK_AS_READ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK_AS_READ_FAILURE", function() { return MARK_AS_READ_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnreadsRequest", function() { return getUnreadsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markAsReadRequest", function() { return markAsReadRequest; });
const GET_UNREADS_REQUEST = 'GET_UNREADS_REQUEST';
const GET_UNREADS_SUCCESS = 'GET_UNREADS_SUCCESS';
const GET_UNREADS_FAILURE = 'GET_UNREADS_FAILURE';
const MARK_AS_READ_REQUEST = 'MARK_AS_READ_REQUEST';
const MARK_AS_READ_SUCCESS = 'MARK_AS_READ_SUCCESS';
const MARK_AS_READ_FAILURE = 'MARK_AS_READ_FAILURE';
const getUnreadsRequest = () => ({
  type: GET_UNREADS_REQUEST
});
const markAsReadRequest = payload => ({
  type: MARK_AS_READ_REQUEST,
  payload
});

/***/ }),

/***/ "./lib/messages/reducers.js":
/*!**********************************!*\
  !*** ./lib/messages/reducers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/messages/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  unreads: null,
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_UNREADS_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_UNREADS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        unreads: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_UNREADS_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/messages/sagas.js":
/*!*******************************!*\
  !*** ./lib/messages/sagas.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Saga; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./lib/services.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./lib/messages/actions.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./lib/helpers.js");
/* harmony import */ var _loader_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/actions */ "./lib/loader/actions.js");






function* getUnreadsSaga() {
  if (Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["isLogged"])()) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
      });
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `message/get-un-reads`, {}, {}, false);

      if (response && !response.error) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_UNREADS_SUCCESS"],
          payload: response.count
        });
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
        });
      } else {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_UNREADS_FAILURE"],
          payload: response
        });
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
        });
      }
    } catch (error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_UNREADS_FAILURE"],
        payload: error
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  }
}

function* markAsReadSaga({
  payload
}) {
  try {
    const ids = [...payload.values];
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Put"], `message/mark-as-read`, ids, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["MARK_AS_READ_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["MARK_AS_READ_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["MARK_AS_READ_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
    type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
  });
}

function* Saga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_UNREADS_REQUEST"], getUnreadsSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["MARK_AS_READ_REQUEST"], markAsReadSaga);
}

/***/ }),

/***/ "./lib/notifications/actions.js":
/*!**************************************!*\
  !*** ./lib/notifications/actions.js ***!
  \**************************************/
/*! exports provided: GET_NOTIFICATIONS_REQUEST, GET_NOTIFICATIONS_SUCCESS, GET_NOTIFICATIONS_FAILURE, MARK_AS_READ_REQUEST, MARK_AS_READ_SUCCESS, MARK_AS_READ_FAILURE, GET_COUNT_REQUEST, GET_COUNT_SUCCESS, GET_COUNT_FAILURE, getNotificationsRequest, getCountRequest, markAsReadRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NOTIFICATIONS_REQUEST", function() { return GET_NOTIFICATIONS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NOTIFICATIONS_SUCCESS", function() { return GET_NOTIFICATIONS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NOTIFICATIONS_FAILURE", function() { return GET_NOTIFICATIONS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK_AS_READ_REQUEST", function() { return MARK_AS_READ_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK_AS_READ_SUCCESS", function() { return MARK_AS_READ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK_AS_READ_FAILURE", function() { return MARK_AS_READ_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COUNT_REQUEST", function() { return GET_COUNT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COUNT_SUCCESS", function() { return GET_COUNT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COUNT_FAILURE", function() { return GET_COUNT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotificationsRequest", function() { return getNotificationsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountRequest", function() { return getCountRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markAsReadRequest", function() { return markAsReadRequest; });
const GET_NOTIFICATIONS_REQUEST = 'GET_NOTIFICATIONS_REQUEST';
const GET_NOTIFICATIONS_SUCCESS = 'GET_NOTIFICATIONS_SUCCESS';
const GET_NOTIFICATIONS_FAILURE = 'GET_NOTIFICATIONS_FAILURE';
const MARK_AS_READ_REQUEST = 'MARK_AS_READ_REQUEST';
const MARK_AS_READ_SUCCESS = 'MARK_AS_READ_SUCCESS';
const MARK_AS_READ_FAILURE = 'MARK_AS_READ_FAILURE';
const GET_COUNT_REQUEST = 'GET_COUNT_REQUEST';
const GET_COUNT_SUCCESS = 'GET_COUNT_SUCCESS';
const GET_COUNT_FAILURE = 'GET_COUNT_FAILURE';
const getNotificationsRequest = () => ({
  type: GET_NOTIFICATIONS_REQUEST
});
const getCountRequest = () => ({
  type: GET_COUNT_REQUEST
});
const markAsReadRequest = payload => ({
  type: MARK_AS_READ_REQUEST,
  payload
});

/***/ }),

/***/ "./lib/notifications/reducers.js":
/*!***************************************!*\
  !*** ./lib/notifications/reducers.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/notifications/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_NOTIFICATIONS_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_NOTIFICATIONS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_NOTIFICATIONS_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/notifications/sagas.js":
/*!************************************!*\
  !*** ./lib/notifications/sagas.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Saga; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./lib/services.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./lib/notifications/actions.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./lib/helpers.js");
/* harmony import */ var _loader_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/actions */ "./lib/loader/actions.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);








function* getNotificationsSaga({
  payload
}) {
  if (Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["isLogged"])()) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_START"]
      });
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `notification/get-user`, {}, {});

      if (response && !response.error) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_3__["GET_NOTIFICATIONS_SUCCESS"],
          payload: response
        });
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
        });
      } else {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_3__["GET_NOTIFICATIONS_FAILURE"],
          payload: response
        });
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
        });
      }
    } catch (error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["GET_NOTIFICATIONS_FAILURE"],
        payload: error
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
    });
  }
}

function* getCountSaga() {
  if (Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["isLogged"])()) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_START"]
      });
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `notification/get-count`, {}, {});

      if (response && !response.error) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_3__["GET_COUNT_SUCCESS"],
          payload: response
        });
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
        });
      } else {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_3__["GET_COUNT_FAILURE"],
          payload: response
        });
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
        });
      }
    } catch (error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["GET_COUNT_FAILURE"],
        payload: error
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
    });
  }
}

function* markAsReadSaga({
  payload
}) {
  if (Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["isLogged"])()) {
    try {
      const ids = [...payload.values];
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_START"]
      });
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Put"], `notification/mark-as-read`, ids, {}, false);

      if (response && !response.error) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_3__["MARK_AS_READ_SUCCESS"],
          payload: response
        });
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
        });
      } else {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_3__["MARK_AS_READ_FAILURE"],
          payload: response
        });
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
        });
      }
    } catch (error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["MARK_AS_READ_FAILURE"],
        payload: error
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
    });
  }
}

function* Saga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["GET_NOTIFICATIONS_REQUEST"], getNotificationsSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["MARK_AS_READ_REQUEST"], markAsReadSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["GET_COUNT_REQUEST"], getCountSaga);
}

/***/ }),

/***/ "./lib/notifications/unReadsReducer.js":
/*!*********************************************!*\
  !*** ./lib/notifications/unReadsReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/notifications/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_COUNT_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_COUNT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_COUNT_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/posts/actions.js":
/*!******************************!*\
  !*** ./lib/posts/actions.js ***!
  \******************************/
/*! exports provided: GET_POST_DETAIL_REQUEST, GET_POST_DETAIL_SUCCESS, GET_POST_DETAIL_FAILURE, GET_MAIN_POSTS_REQUEST, GET_MAIN_POSTS_SUCCESS, GET_MAIN_POSTS_FAILURE, GET_USER_POSTS_REQUEST, GET_USER_POSTS_SUCCESS, GET_USER_POSTS_FAILURE, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE, VOTE_POST_REQUEST, VOTE_POST_SUCCESS, VOTE_POST_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, DELETE_MODERATOR_REQUEST, DELETE_MODERATOR_SUCCESS, DELETE_MODERATOR_FAILURE, getPostDetailRequest, getMainPostsRequest, getUserPostsRequest, createPostRequest, votePostRequest, deletePostRequest, deleteModeratorRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_DETAIL_REQUEST", function() { return GET_POST_DETAIL_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_DETAIL_SUCCESS", function() { return GET_POST_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_DETAIL_FAILURE", function() { return GET_POST_DETAIL_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MAIN_POSTS_REQUEST", function() { return GET_MAIN_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MAIN_POSTS_SUCCESS", function() { return GET_MAIN_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MAIN_POSTS_FAILURE", function() { return GET_MAIN_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_POSTS_REQUEST", function() { return GET_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_POSTS_SUCCESS", function() { return GET_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_POSTS_FAILURE", function() { return GET_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST_REQUEST", function() { return CREATE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST_SUCCESS", function() { return CREATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST_FAILURE", function() { return CREATE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOTE_POST_REQUEST", function() { return VOTE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOTE_POST_SUCCESS", function() { return VOTE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOTE_POST_FAILURE", function() { return VOTE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_REQUEST", function() { return DELETE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_SUCCESS", function() { return DELETE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_FAILURE", function() { return DELETE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MODERATOR_REQUEST", function() { return DELETE_MODERATOR_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MODERATOR_SUCCESS", function() { return DELETE_MODERATOR_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MODERATOR_FAILURE", function() { return DELETE_MODERATOR_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostDetailRequest", function() { return getPostDetailRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainPostsRequest", function() { return getMainPostsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPostsRequest", function() { return getUserPostsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostRequest", function() { return createPostRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "votePostRequest", function() { return votePostRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostRequest", function() { return deletePostRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteModeratorRequest", function() { return deleteModeratorRequest; });
const GET_POST_DETAIL_REQUEST = 'GET_POST_DETAIL_REQUEST';
const GET_POST_DETAIL_SUCCESS = 'GET_POST_DETAIL_SUCCESS';
const GET_POST_DETAIL_FAILURE = 'GET_POST_DETAIL_FAILURE';
const GET_MAIN_POSTS_REQUEST = 'GET_MAIN_POSTS_REQUEST';
const GET_MAIN_POSTS_SUCCESS = 'GET_MAIN_POSTS_SUCCESS';
const GET_MAIN_POSTS_FAILURE = 'GET_MAIN_POSTS_FAILURE';
const GET_USER_POSTS_REQUEST = 'GET_USER_POSTS_REQUEST';
const GET_USER_POSTS_SUCCESS = 'GET_USER_POSTS_SUCCESS';
const GET_USER_POSTS_FAILURE = 'GET_USER_POSTS_FAILURE';
const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';
const VOTE_POST_REQUEST = 'VOTE_POST_REQUEST';
const VOTE_POST_SUCCESS = 'VOTE_POST_SUCCESS';
const VOTE_POST_FAILURE = 'VOTE_POST_FAILURE';
const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
const DELETE_MODERATOR_REQUEST = 'DELETE_MODERATOR_REQUEST';
const DELETE_MODERATOR_SUCCESS = 'DELETE_MODERATOR_SUCCESS';
const DELETE_MODERATOR_FAILURE = 'DELETE_MODERATOR_FAILURE';
const getPostDetailRequest = payload => ({
  type: GET_POST_DETAIL_REQUEST,
  payload
});
const getMainPostsRequest = payload => ({
  type: GET_MAIN_POSTS_REQUEST,
  payload
});
const getUserPostsRequest = payload => ({
  type: GET_USER_POSTS_REQUEST,
  payload
});
const createPostRequest = payload => ({
  type: CREATE_POST_REQUEST,
  payload
});
const votePostRequest = payload => ({
  type: VOTE_POST_REQUEST,
  payload
});
const deletePostRequest = payload => ({
  type: DELETE_POST_REQUEST,
  payload
});
const deleteModeratorRequest = payload => ({
  type: DELETE_MODERATOR_REQUEST,
  payload
});

/***/ }),

/***/ "./lib/posts/postDetailReducer.js":
/*!****************************************!*\
  !*** ./lib/posts/postDetailReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/posts/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_POST_DETAIL_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_POST_DETAIL_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_POST_DETAIL_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/posts/reducers.js":
/*!*******************************!*\
  !*** ./lib/posts/reducers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/posts/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_MAIN_POSTS_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_MAIN_POSTS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_MAIN_POSTS_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_USER_POSTS_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_USER_POSTS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_USER_POSTS_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/posts/sagas.js":
/*!****************************!*\
  !*** ./lib/posts/sagas.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Saga; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./lib/services.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./lib/posts/actions.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./lib/helpers.js");
/* harmony import */ var _home_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/actions */ "./lib/home/actions.js");
/* harmony import */ var _loader_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loader/actions */ "./lib/loader/actions.js");
/* harmony import */ var _community_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../community/actions */ "./lib/community/actions.js");
/* harmony import */ var _profile_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../profile/actions */ "./lib/profile/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* import { push } from "react-router-redux";
 */





function* getPostDetailSaga({
  payload
}) {
  try {
    if (payload.loaderStart) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_START"]
      });
    }

    const url = `post/get?slug=${payload.slug}`;
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], url, {}, payload.token, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["GET_POST_DETAIL_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["GET_POST_DETAIL_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_3__["GET_POST_DETAIL_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_END"]
    });
  }
}

function* getUserPostsSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `post/get-user-posts?username=${payload.username}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["GET_USER_POSTS_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["GET_USER_POSTS_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_3__["GET_USER_POSTS_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_END"]
    });
  }
}

function* votePostSaga({
  payload
}) {
  const votedUsername = payload.username;

  try {
    const user = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["readLocalStorage"])('user');
    const newPayload = {
      value: payload.value,
      userId: user.id,
      postId: payload.postId
    };
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Post"], `post/vote`, newPayload, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["VOTE_POST_SUCCESS"],
        payload: response
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["VOTE_POST_FAILURE"],
        payload: response
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_3__["VOTE_POST_FAILURE"],
      payload: error
    });
  }

  if (payload.page == "community") {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_community_actions__WEBPACK_IMPORTED_MODULE_7__["getCommunityPostsRequest"])({
      slug: payload.cSlug,
      isVoted: true,
      pageNumber: payload.pageNumber,
      pageSize: payload.pageSize
    }));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_community_actions__WEBPACK_IMPORTED_MODULE_7__["getCommunityRequest"])({
      slug: payload.cSlug
    }));
  } else if (payload.page == "user") {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["getUserPostsRequest"])({
      username: votedUsername
    }));
  } else if (payload.page == "post_detail") {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["getPostDetailRequest"])({
      search: `?status=${payload.postId}`,
      loaderStart: false
    }));
  } else {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_home_actions__WEBPACK_IMPORTED_MODULE_5__["getHomePostsRequest"])({
      loaderStart: false,
      pageNumber: payload.pageNumber,
      pageSize: payload.pageSize,
      isVoted: payload.isVoted
    }));
  }
}

function* createPostSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_START"]
    });
    const user = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["readLocalStorage"])('user');
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["PostFormData"], `post/create-post`, payload, {});

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["CREATE_POST_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_END"]
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(`/p/${user.username}`));
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["CREATE_POST_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_3__["CREATE_POST_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_END"]
    });
  }
}

function* deletePostSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Delete"], `post/delete?id=${payload.id}`, {}, {});

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_profile_actions__WEBPACK_IMPORTED_MODULE_8__["getProfilePostsRequest"])({}));
}

function* deleteModeratorSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Delete"], `/post/moderator-delete`, payload, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["DELETE_MODERATOR_SUCCESS"],
        payload: _objectSpread(_objectSpread({}, response), {}, {
          deletedPost: payload.postId
        })
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["DELETE_MODERATOR_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_3__["DELETE_MODERATOR_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_6__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_community_actions__WEBPACK_IMPORTED_MODULE_7__["getCommunityRequest"])({
    slug: payload.slug
  })); //yield put(getCommunityPostsRequest({ slug: payload.slug, pageNumber: payload.pageNumber, pageSize: payload.pageSize, }));
}

function* Saga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["GET_POST_DETAIL_REQUEST"], getPostDetailSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["GET_USER_POSTS_REQUEST"], getUserPostsSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["VOTE_POST_REQUEST"], votePostSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["CREATE_POST_REQUEST"], createPostSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_REQUEST"], deletePostSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_3__["DELETE_MODERATOR_REQUEST"], deleteModeratorSaga);
}

/***/ }),

/***/ "./lib/profile/actions.js":
/*!********************************!*\
  !*** ./lib/profile/actions.js ***!
  \********************************/
/*! exports provided: UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE, GET_PROFILE_POSTS_REQUEST, GET_PROFILE_POSTS_SUCCESS, GET_PROFILE_POSTS_FAILURE, updateProfileRequest, getProfileRequest, getProfilePostsRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PROFILE_REQUEST", function() { return UPDATE_PROFILE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PROFILE_SUCCESS", function() { return UPDATE_PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PROFILE_FAILURE", function() { return UPDATE_PROFILE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE_REQUEST", function() { return GET_PROFILE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE_SUCCESS", function() { return GET_PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE_FAILURE", function() { return GET_PROFILE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE_POSTS_REQUEST", function() { return GET_PROFILE_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE_POSTS_SUCCESS", function() { return GET_PROFILE_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE_POSTS_FAILURE", function() { return GET_PROFILE_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfileRequest", function() { return updateProfileRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileRequest", function() { return getProfileRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfilePostsRequest", function() { return getProfilePostsRequest; });
const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';
const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';
const GET_PROFILE_POSTS_REQUEST = 'GET_PROFILE_POSTS_REQUEST';
const GET_PROFILE_POSTS_SUCCESS = 'GET_PROFILE_POSTS_SUCCESS';
const GET_PROFILE_POSTS_FAILURE = 'GET_PROFILE_POSTS_FAILURE';
const updateProfileRequest = payload => ({
  type: UPDATE_PROFILE_REQUEST,
  payload
});
const getProfileRequest = payload => ({
  type: GET_PROFILE_REQUEST,
  payload
});
const getProfilePostsRequest = payload => ({
  type: GET_PROFILE_POSTS_REQUEST,
  payload
});

/***/ }),

/***/ "./lib/profile/postsReducer.js":
/*!*************************************!*\
  !*** ./lib/profile/postsReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/profile/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILE_POSTS_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILE_POSTS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILE_POSTS_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/profile/reducers.js":
/*!*********************************!*\
  !*** ./lib/profile/reducers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/profile/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILE_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILE_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILE_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/profile/sagas.js":
/*!******************************!*\
  !*** ./lib/profile/sagas.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Saga; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./lib/services.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./lib/profile/actions.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./lib/helpers.js");
/* harmony import */ var _loader_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/actions */ "./lib/loader/actions.js");






function* updateProfileSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
    });
    const user = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["readLocalStorage"])("user");
    if (!payload.gender) payload.gender = user.gender;
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["PutFormData"], `user/update-user`, payload, {});

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_PROFILE_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_PROFILE_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_PROFILE_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["getProfileRequest"])({}));
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
    type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
  });
}

function* getPostsSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
    });
    const user = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["readLocalStorage"])("user");
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `post/get-user-posts?username=${user.username}`, payload, {});

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILE_POSTS_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILE_POSTS_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILE_POSTS_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
    type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
  });
}

function* getProfileSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_START"]
    });
    const user = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["readLocalStorage"])("user");
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `user/get?username=${user.username}`, {}, {});

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILE_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILE_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILE_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
    type: _loader_actions__WEBPACK_IMPORTED_MODULE_4__["LOADER_END"]
  });
}

function* Saga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_PROFILE_REQUEST"], updateProfileSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILE_POSTS_REQUEST"], getPostsSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILE_REQUEST"], getProfileSaga);
}

/***/ }),

/***/ "./lib/reducers.js":
/*!*************************!*\
  !*** ./lib/reducers.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users/reducers */ "./lib/users/reducers.js");
/* harmony import */ var _community_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./community/reducers */ "./lib/community/reducers.js");
/* harmony import */ var _loader_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader/reducers */ "./lib/loader/reducers.js");
/* harmony import */ var _auth_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/reducers */ "./lib/auth/reducers.js");
/* harmony import */ var _posts_postDetailReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/postDetailReducer */ "./lib/posts/postDetailReducer.js");
/* harmony import */ var _home_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/reducers */ "./lib/home/reducers.js");
/* harmony import */ var _community_selectedCommunityReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./community/selectedCommunityReducer */ "./lib/community/selectedCommunityReducer.js");
/* harmony import */ var _posts_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts/reducers */ "./lib/posts/reducers.js");
/* harmony import */ var _community_ofModeratorsReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./community/ofModeratorsReducer */ "./lib/community/ofModeratorsReducer.js");
/* harmony import */ var _community_userCommunitiesReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./community/userCommunitiesReducer */ "./lib/community/userCommunitiesReducer.js");
/* harmony import */ var _community_communityUsersReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./community/communityUsersReducer */ "./lib/community/communityUsersReducer.js");
/* harmony import */ var _error_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error/reducer */ "./lib/error/reducer.js");
/* harmony import */ var _category_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./category/reducers */ "./lib/category/reducers.js");
/* harmony import */ var _category_comsByCategoryReducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./category/comsByCategoryReducer */ "./lib/category/comsByCategoryReducer.js");
/* harmony import */ var _conversation_reducers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./conversation/reducers */ "./lib/conversation/reducers.js");
/* harmony import */ var _conversation_conversationReducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./conversation/conversationReducer */ "./lib/conversation/conversationReducer.js");
/* harmony import */ var _notifications_reducers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notifications/reducers */ "./lib/notifications/reducers.js");
/* harmony import */ var _notifications_unReadsReducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./notifications/unReadsReducer */ "./lib/notifications/unReadsReducer.js");
/* harmony import */ var _messages_reducers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./messages/reducers */ "./lib/messages/reducers.js");
/* harmony import */ var _profile_postsReducer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/postsReducer */ "./lib/profile/postsReducer.js");
/* harmony import */ var _profile_reducers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile/reducers */ "./lib/profile/reducers.js");





















/* harmony default export */ __webpack_exports__["default"] = ({
  user: _users_reducers__WEBPACK_IMPORTED_MODULE_0__["default"],
  communities: _community_reducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  loader: _loader_reducers__WEBPACK_IMPORTED_MODULE_2__["default"],
  auth: _auth_reducers__WEBPACK_IMPORTED_MODULE_3__["default"],
  postDetail: _posts_postDetailReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  home: _home_reducers__WEBPACK_IMPORTED_MODULE_5__["default"],
  community: _community_selectedCommunityReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  posts: _posts_reducers__WEBPACK_IMPORTED_MODULE_7__["default"],
  ofModerators: _community_ofModeratorsReducer__WEBPACK_IMPORTED_MODULE_8__["default"],
  userCommunities: _community_userCommunitiesReducer__WEBPACK_IMPORTED_MODULE_9__["default"],
  communityUsers: _community_communityUsersReducer__WEBPACK_IMPORTED_MODULE_10__["default"],
  errors: _error_reducer__WEBPACK_IMPORTED_MODULE_11__["default"],
  categories: _category_reducers__WEBPACK_IMPORTED_MODULE_12__["default"],
  comsByCategory: _category_comsByCategoryReducer__WEBPACK_IMPORTED_MODULE_13__["default"],
  conversations: _conversation_reducers__WEBPACK_IMPORTED_MODULE_14__["default"],
  selectedConversation: _conversation_conversationReducer__WEBPACK_IMPORTED_MODULE_15__["default"],
  notifications: _notifications_reducers__WEBPACK_IMPORTED_MODULE_16__["default"],
  unReads: _notifications_unReadsReducer__WEBPACK_IMPORTED_MODULE_17__["default"],
  unReadMessages: _messages_reducers__WEBPACK_IMPORTED_MODULE_18__["default"],
  profilePosts: _profile_postsReducer__WEBPACK_IMPORTED_MODULE_19__["default"],
  profileData: _profile_reducers__WEBPACK_IMPORTED_MODULE_20__["default"]
});

/***/ }),

/***/ "./lib/sagas.js":
/*!**********************!*\
  !*** ./lib/sagas.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _users_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/sagas */ "./lib/users/sagas.js");
/* harmony import */ var _community_sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./community/sagas */ "./lib/community/sagas.js");
/* harmony import */ var _auth_sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/sagas */ "./lib/auth/sagas.js");
/* harmony import */ var _posts_sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/sagas */ "./lib/posts/sagas.js");
/* harmony import */ var _profile_sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/sagas */ "./lib/profile/sagas.js");
/* harmony import */ var _home_sagas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/sagas */ "./lib/home/sagas.js");
/* harmony import */ var _comment_sagas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comment/sagas */ "./lib/comment/sagas.js");
/* harmony import */ var _category_sagas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category/sagas */ "./lib/category/sagas.js");
/* harmony import */ var _conversation_sagas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./conversation/sagas */ "./lib/conversation/sagas.js");
/* harmony import */ var _notifications_sagas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notifications/sagas */ "./lib/notifications/sagas.js");
/* harmony import */ var _messages_sagas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages/sagas */ "./lib/messages/sagas.js");












function* rootSaga() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_users_sagas__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_community_sagas__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_auth_sagas__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_messages_sagas__WEBPACK_IMPORTED_MODULE_11__["default"])(), Object(_category_sagas__WEBPACK_IMPORTED_MODULE_8__["default"])(), Object(_notifications_sagas__WEBPACK_IMPORTED_MODULE_10__["default"])(), Object(_conversation_sagas__WEBPACK_IMPORTED_MODULE_9__["default"])(), Object(_comment_sagas__WEBPACK_IMPORTED_MODULE_7__["default"])(), Object(_profile_sagas__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(_posts_sagas__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(_home_sagas__WEBPACK_IMPORTED_MODULE_6__["default"])()]);
  } catch (err) {
    console.log(err);
  }
}

/***/ }),

/***/ "./lib/services.js":
/*!*************************!*\
  !*** ./lib/services.js ***!
  \*************************/
/*! exports provided: API_URL, Post, Get, Put, Delete, PostFormData, PutFormData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Get", function() { return Get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Put", function() { return Put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFormData", function() { return PostFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutFormData", function() { return PutFormData; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./lib/helpers.js");
 //export const API_URL = 'https://localhost:44315/api/';

const API_URL = 'https://saalla.radinyazilim.com/api/'; //export const API_URL = 'https://saallaapi.azurewebsites.net/api/'

const contentTypes = {
  json: 'application/json; charset=utf-8',
  urlEncoded: 'application/x-www-form-urlencoded;charset=UTF-8',
  isMultiPart: 'application/json; charset=utf-8'
};

const Post = (endpoint, body = {}, token, isUrlEncoded) => {
  const apiUrl = `${API_URL}${endpoint}`;
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'Content-Type': isUrlEncoded ? contentTypes.urlEncoded : contentTypes.json,
      'Authorization': `Bearer ${Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["readLocalStorage"])('token')}`
    },
    body: isUrlEncoded ? Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getSearchParams"])(body) : JSON.stringify(body)
  };
  const response = fetch(apiUrl, requestOptions).then(fetchResponse => fetchResponse.json()).catch(error => error);
  return response;
};

const PostFormData = (endpoint, body = {}, token) => {
  const apiUrl = `${API_URL}${endpoint}`;
  const bodyAsFormData = new FormData();
  Object.keys(body).forEach(key => bodyAsFormData.append(key, body[key]));
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'Authorization': `Bearer ${Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["readLocalStorage"])('token')}` //token,

    },
    body: bodyAsFormData
  };
  const response = fetch(apiUrl, requestOptions).then(fetchResponse => fetchResponse.json()).catch(error => error);
  return response;
};

const PutFormData = (endpoint, body = {}, token) => {
  const apiUrl = `${API_URL}${endpoint}`;
  const bodyAsFormData = new FormData();
  Object.keys(body).forEach(key => bodyAsFormData.append(key, body[key]));
  const requestOptions = {
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'Authorization': `Bearer ${Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["readLocalStorage"])('token')}` // token,

    },
    body: bodyAsFormData
  };
  const response = fetch(apiUrl, requestOptions).then(fetchResponse => fetchResponse.json()).catch(error => error);
  return response;
};

const Delete = (endpoint, body = {}, token, isUrlEncoded) => {
  const apiUrl = `${API_URL}${endpoint}`;
  const requestOptions = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'Content-Type': isUrlEncoded ? contentTypes.urlEncoded : contentTypes.json,
      //token,
      'Authorization': `Bearer ${Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["readLocalStorage"])('token')}`
    },
    body: isUrlEncoded ? Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getSearchParams"])(body) : JSON.stringify(body)
  };
  const response = fetch(apiUrl, requestOptions).then(response => response.json()).catch(error => error);
  return response;
};

const Put = (endpoint, body = {}, token, isUrlEncoded) => {
  const apiUrl = `${API_URL}${endpoint}`;
  const requestOptions = {
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'Content-Type': isUrlEncoded ? contentTypes.urlEncoded : contentTypes.json,
      //token,
      'Authorization': `Bearer ${Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["readLocalStorage"])('token')}`
    },
    body: isUrlEncoded ? Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getSearchParams"])(body) : JSON.stringify(body)
  };
  const response = fetch(apiUrl, requestOptions).then(response => response.json()).catch(error => error);
  return response;
};

const Get = (endpoint, body = {}, token, isUrlEncoded) => {
  console.log('get deki token', token);
  const apiUrl = isUrlEncoded ? `${API_URL}${endpoint}${Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getSearchParams"])(body)}` : `${API_URL}${endpoint}`;
  const requestOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'Content-Type': isUrlEncoded ? contentTypes.urlEncoded : contentTypes.json,
      //token: readLocalStorage('token'),
      'Authorization': `Bearer ${Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["readLocalStorage"])('token') || token}`
    },
    data: isUrlEncoded ? Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getSearchParams"])(body) : JSON.stringify(body)
  };
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const response = fetch(apiUrl, requestOptions).then(response => response.json()).catch(error => error);
  return response;
};



/***/ }),

/***/ "./lib/store.js":
/*!**********************!*\
  !*** ./lib/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var connected_next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-next-router */ "connected-next-router");
/* harmony import */ var connected_next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./lib/reducers.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagas */ "./lib/sagas.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
const routerMiddleware = Object(connected_next_router__WEBPACK_IMPORTED_MODULE_2__["createRouterMiddleware"])();

const makeStore = initialState => {
  // Make exception for redux dev tools

  /* eslint-disable no-underscore-dangle */

  /* eslint-disable no-undef */
  const composeEnhancers =  false || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
  /* eslint-enable */

  const middlewares = [sagaMiddleware, routerMiddleware];
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(_objectSpread(_objectSpread({}, _reducers__WEBPACK_IMPORTED_MODULE_3__["default"]), {}, {
    router: connected_next_router__WEBPACK_IMPORTED_MODULE_2__["routerReducer"]
  })), initialState, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares)));

  store.runSaga = () => {
    // Avoid running twice
    if (store.saga) return;
    store.saga = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
  };

  store.stopSaga = async () => {
    // Avoid running twice
    if (!store.saga) return;
    store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_1__["END"]);
    await store.saga.done;
    store.saga = null;
  };

  store.execSagaTasks = async (isServer, tasks) => {
    // run saga
    store.runSaga(); // dispatch saga tasks

    tasks(store.dispatch); // Stop running and wait for the tasks to be done

    await store.stopSaga(); // Re-run on client side

    if (!isServer) {
      store.runSaga();
    }
  }; // Initial run


  store.runSaga();
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (makeStore);

/***/ }),

/***/ "./lib/users/actions.js":
/*!******************************!*\
  !*** ./lib/users/actions.js ***!
  \******************************/
/*! exports provided: GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE, GET_USER_BY_USERNAME_REQUEST, GET_USER_BY_USERNAME_SUCCESS, GET_USER_BY_USERNAME_FAILURE, JOIN_COMMUNITY_REQUEST, JOIN_COMMUNITY_SUCCESS, JOIN_COMMUNITY_FAILURE, LEAVE_COMMUNITY_REQUEST, LEAVE_COMMUNITY_SUCCESS, LEAVE_COMMUNITY_FAILURE, SEND_SUGGEST_REQUEST, SEND_SUGGEST_SUCCESS, SEND_SUGGEST_FAILURE, getUserProfile, getUserByUsername, joinCommunityRequest, leaveCommunityRequest, sendSuggestRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE_REQUEST", function() { return GET_PROFILE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE_SUCCESS", function() { return GET_PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE_FAILURE", function() { return GET_PROFILE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_BY_USERNAME_REQUEST", function() { return GET_USER_BY_USERNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_BY_USERNAME_SUCCESS", function() { return GET_USER_BY_USERNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_BY_USERNAME_FAILURE", function() { return GET_USER_BY_USERNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_COMMUNITY_REQUEST", function() { return JOIN_COMMUNITY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_COMMUNITY_SUCCESS", function() { return JOIN_COMMUNITY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_COMMUNITY_FAILURE", function() { return JOIN_COMMUNITY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEAVE_COMMUNITY_REQUEST", function() { return LEAVE_COMMUNITY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEAVE_COMMUNITY_SUCCESS", function() { return LEAVE_COMMUNITY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEAVE_COMMUNITY_FAILURE", function() { return LEAVE_COMMUNITY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_SUGGEST_REQUEST", function() { return SEND_SUGGEST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_SUGGEST_SUCCESS", function() { return SEND_SUGGEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_SUGGEST_FAILURE", function() { return SEND_SUGGEST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProfile", function() { return getUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserByUsername", function() { return getUserByUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinCommunityRequest", function() { return joinCommunityRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveCommunityRequest", function() { return leaveCommunityRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSuggestRequest", function() { return sendSuggestRequest; });
const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';
const GET_USER_BY_USERNAME_REQUEST = 'GET_USER_BY_USERNAME_REQUEST';
const GET_USER_BY_USERNAME_SUCCESS = 'GET_USER_BY_USERNAME_SUCCESS';
const GET_USER_BY_USERNAME_FAILURE = 'GET_USER_BY_USERNAME_FAILURE';
const JOIN_COMMUNITY_REQUEST = 'JOIN_COMMUNITY_REQUEST';
const JOIN_COMMUNITY_SUCCESS = 'JOIN_COMMUNITY_SUCCESS';
const JOIN_COMMUNITY_FAILURE = 'JOIN_COMMUNITY_FAILURE';
const LEAVE_COMMUNITY_REQUEST = 'LEAVE_COMMUNITY_REQUEST';
const LEAVE_COMMUNITY_SUCCESS = 'LEAVE_COMMUNITY_SUCCESS';
const LEAVE_COMMUNITY_FAILURE = 'LEAVE_COMMUNITY_FAILURE';
const SEND_SUGGEST_REQUEST = 'SEND_SUGGEST_REQUEST';
const SEND_SUGGEST_SUCCESS = 'SEND_SUGGEST_SUCCESS';
const SEND_SUGGEST_FAILURE = 'SEND_SUGGEST_FAILURE';
const getUserProfile = payload => ({
  type: GET_PROFILE_REQUEST,
  payload
});
const getUserByUsername = username => ({
  type: GET_USER_BY_USERNAME_REQUEST,
  username
});
const joinCommunityRequest = payload => ({
  type: JOIN_COMMUNITY_REQUEST,
  payload
});
const leaveCommunityRequest = payload => ({
  type: LEAVE_COMMUNITY_REQUEST,
  payload
});
const sendSuggestRequest = payload => ({
  type: SEND_SUGGEST_REQUEST,
  payload
});

/***/ }),

/***/ "./lib/users/reducers.js":
/*!*******************************!*\
  !*** ./lib/users/reducers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/users/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: null,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILE_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILE_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILE_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_USER_BY_USERNAME_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: ''
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_USER_BY_USERNAME_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_USER_BY_USERNAME_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./lib/users/sagas.js":
/*!****************************!*\
  !*** ./lib/users/sagas.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Saga; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./lib/services.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./lib/users/actions.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./lib/helpers.js");
/* harmony import */ var _community_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../community/actions */ "./lib/community/actions.js");
/* harmony import */ var _loader_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/actions */ "./lib/loader/actions.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);








function* getUserProfile({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_START"]
    });
    const user = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["readLocalStorage"])("user");
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `user/get-user/by-id?id=${user.id}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILE_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILE_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILE_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
    });
  }
}

function* getUserByUsernameSaga(username) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_START"]
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Get"], `user/get?username=${username.username}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_USER_BY_USERNAME_SUCCESS"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_USER_BY_USERNAME_FAILURE"],
        payload: response
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["GET_USER_BY_USERNAME_FAILURE"],
      payload: error
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _loader_actions__WEBPACK_IMPORTED_MODULE_5__["LOADER_END"]
    });
  }
}

function* joinCommunitySaga({
  payload
}) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Post"], `user/join-community?slug=${payload.slug}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["JOIN_COMMUNITY_SUCCESS"],
        payload: response
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["JOIN_COMMUNITY_FAILURE"],
        payload: response
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["JOIN_COMMUNITY_FAILURE"],
      payload: error
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_community_actions__WEBPACK_IMPORTED_MODULE_4__["getCommunityRequest"])({
    slug: payload.slug
  }));
}

function* leaveCommunitySaga({
  payload
}) {
  try {
    const userId = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["readLocalStorage"])('user').id;
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Delete"], `user/leave-from-community?slug=${payload.slug}`, {}, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["LEAVE_COMMUNITY_SUCCESS"],
        payload: response
      });
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["LEAVE_COMMUNITY_FAILURE"],
        payload: response
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["LEAVE_COMMUNITY_FAILURE"],
      payload: error
    });
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_community_actions__WEBPACK_IMPORTED_MODULE_4__["getCommunityRequest"])({
    slug: payload.slug
  }));
}

function* sendSuggestSaga({
  payload
}) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_0__["Post"], `user/suggestion`, payload, {}, false);

    if (response && !response.error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["SEND_SUGGEST_SUCCESS"],
        payload: response
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success('Teşekkürler.Önerini inceleyeceğiz');
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["SEND_SUGGEST_FAILURE"],
        payload: response
      });
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["SEND_SUGGEST_FAILURE"],
      payload: error
    });
  }
}

function* Saga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILE_REQUEST"], getUserProfile);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GET_USER_BY_USERNAME_REQUEST"], getUserByUsernameSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["JOIN_COMMUNITY_REQUEST"], joinCommunitySaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["LEAVE_COMMUNITY_REQUEST"], leaveCommunitySaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["SEND_SUGGEST_REQUEST"], sendSuggestSaga);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bootstrap-css-only/css/bootstrap.min.css":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-css-only/css/bootstrap.min.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/mdbreact/dist/css/mdb.css":
/*!************************************************!*\
  !*** ./node_modules/mdbreact/dist/css/mdb.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/react-image-lightbox/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-image-lightbox/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var connected_next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! connected-next-router */ "connected-next-router");
/* harmony import */ var connected_next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(connected_next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/store */ "./lib/store.js");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-image-lightbox/style.css */ "./node_modules/react-image-lightbox/style.css");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Loader_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loader/index.css */ "./components/Loader/index.css");
/* harmony import */ var _components_Loader_index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_Loader_index_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ShareButton_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ShareButton/index.css */ "./components/ShareButton/index.css");
/* harmony import */ var _components_ShareButton_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_ShareButton_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_SocialCard_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SocialCard/index.css */ "./components/SocialCard/index.css");
/* harmony import */ var _components_SocialCard_index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_SocialCard_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mdbreact/dist/css/mdb.css */ "./node_modules/mdbreact/dist/css/mdb.css");
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bootstrap-css-only/css/bootstrap.min.css */ "./node_modules/bootstrap-css-only/css/bootstrap.min.css");
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./custom.css */ "./pages/custom.css");
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_custom_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _profile_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile.css */ "./pages/profile.css");
/* harmony import */ var _profile_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_profile_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _candles_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./candles.scss */ "./pages/candles.scss");
/* harmony import */ var _candles_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_candles_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Compose_Compose_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Compose/Compose.css */ "./components/Compose/Compose.css");
/* harmony import */ var _components_Compose_Compose_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_components_Compose_Compose_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_ConversationList_ConversationList_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/ConversationList/ConversationList.css */ "./components/ConversationList/ConversationList.css");
/* harmony import */ var _components_ConversationList_ConversationList_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_components_ConversationList_ConversationList_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_ConversationListItem_ConversationListItem_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/ConversationListItem/ConversationListItem.css */ "./components/ConversationListItem/ConversationListItem.css");
/* harmony import */ var _components_ConversationListItem_ConversationListItem_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_components_ConversationListItem_ConversationListItem_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_ConversationSearch_ConversationSearch_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/ConversationSearch/ConversationSearch.css */ "./components/ConversationSearch/ConversationSearch.css");
/* harmony import */ var _components_ConversationSearch_ConversationSearch_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_components_ConversationSearch_ConversationSearch_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_Message_Message_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/Message/Message.css */ "./components/Message/Message.css");
/* harmony import */ var _components_Message_Message_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_components_Message_Message_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_MessageList_MessageList_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/MessageList/MessageList.css */ "./components/MessageList/MessageList.css");
/* harmony import */ var _components_MessageList_MessageList_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_components_MessageList_MessageList_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_Messenger_Messenger_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/Messenger/Messenger.css */ "./components/Messenger/Messenger.css");
/* harmony import */ var _components_Messenger_Messenger_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_components_Messenger_Messenger_css__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_Toolbar_Toolbar_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/Toolbar/Toolbar.css */ "./components/Toolbar/Toolbar.css");
/* harmony import */ var _components_Toolbar_Toolbar_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_components_Toolbar_Toolbar_css__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_ToolbarButton_ToolbarButton_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/ToolbarButton/ToolbarButton.css */ "./components/ToolbarButton/ToolbarButton.css");
/* harmony import */ var _components_ToolbarButton_ToolbarButton_css__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_components_ToolbarButton_ToolbarButton_css__WEBPACK_IMPORTED_MODULE_25__);
var _jsxFileName = "D:\\repos\\saalla-next.js\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



























class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, __jsx(connected_next_router__WEBPACK_IMPORTED_MODULE_3__["ConnectedRouter"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(_lib_store__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp));

/***/ }),

/***/ "./pages/candles.scss":
/*!****************************!*\
  !*** ./pages/candles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/custom.css":
/*!**************************!*\
  !*** ./pages/custom.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/profile.css":
/*!***************************!*\
  !*** ./pages/profile.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "connected-next-router":
/*!****************************************!*\
  !*** external "connected-next-router" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connected-next-router");

/***/ }),

/***/ "lodash/fp":
/*!****************************!*\
  !*** external "lodash/fp" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/fp");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "rollbar":
/*!**************************!*\
  !*** external "rollbar" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rollbar");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUm9sbGJhckVycm9yVHJhY2tpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2F1dGgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvYXV0aC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvYXV0aC9zYWdhcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2F0ZWdvcnkvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2F0ZWdvcnkvY29tc0J5Q2F0ZWdvcnlSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9jYXRlZ29yeS9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2F0ZWdvcnkvc2FnYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbW1lbnQvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tbWVudC9zYWdhcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tbW9uQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tbXVuaXR5L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbW11bml0eS9jb21tdW5pdHlVc2Vyc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbW11bml0eS9vZk1vZGVyYXRvcnNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9jb21tdW5pdHkvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbW11bml0eS9zYWdhcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tbXVuaXR5L3NlbGVjdGVkQ29tbXVuaXR5UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tbXVuaXR5L3VzZXJDb21tdW5pdGllc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbnZlcnNhdGlvbi9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9jb252ZXJzYXRpb24vY29udmVyc2F0aW9uUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29udmVyc2F0aW9uL3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL2xpYi9jb252ZXJzYXRpb24vc2FnYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2Vycm9yL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2Vycm9yL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2hvbWUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaG9tZS9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaG9tZS9zYWdhcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvbG9hZGVyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2xvYWRlci9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvbWVzc2FnZXMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvbWVzc2FnZXMvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL21lc3NhZ2VzL3NhZ2FzLmpzIiwid2VicGFjazovLy8uL2xpYi9ub3RpZmljYXRpb25zL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL25vdGlmaWNhdGlvbnMvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL25vdGlmaWNhdGlvbnMvc2FnYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL25vdGlmaWNhdGlvbnMvdW5SZWFkc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Bvc3RzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Bvc3RzL3Bvc3REZXRhaWxSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9wb3N0cy9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcG9zdHMvc2FnYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Byb2ZpbGUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcHJvZmlsZS9wb3N0c1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Byb2ZpbGUvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Byb2ZpbGUvc2FnYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL2xpYi9zYWdhcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3N0b3JlLmpzIiwid2VicGFjazovLy8uL2xpYi91c2Vycy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi91c2Vycy9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXNlcnMvc2FnYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25uZWN0ZWQtbmV4dC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvZnBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyb2xsYmFyXCIiXSwibmFtZXMiOlsiUm9sbGJhckVycm9yVHJhY2tpbmciLCJSb2xsYmFyT2JqIiwiUm9sbGJhciIsImFjY2Vzc1Rva2VuIiwiY2FwdHVyZVVuY2F1Z2h0IiwiY2FwdHVyZVVuaGFuZGxlZFJlamVjdGlvbnMiLCJsb2dFcnJvSW5mbyIsImluZm8iLCJsb2dFcnJvckluUm9sbGJhciIsImVycm9yIiwiRXJyb3IiLCJBVVRIX1JFUVVFU1QiLCJBVVRIX1NVQ0NFU1MiLCJBVVRIX0ZBSUxVUkUiLCJTSUdOVVBfUkVRVUVTVCIsIlNJR05VUF9TVUNDRVNTIiwiU0lHTlVQX0ZBSUxVUkUiLCJMT0dPVVRfUkVRVUVTVCIsIkxPR09VVF9TVUNDRVNTIiwiTE9HT1VUX0ZBSUxVUkUiLCJTRU5EX1JFU0VUX0NPREVfUkVRVUVTVCIsIlNFTkRfUkVTRVRfQ09ERV9TVUNDRVNTIiwiU0VORF9SRVNFVF9DT0RFX0ZBSUxVUkUiLCJSRVNFVF9QQVNTV09SRF9SRVFVRVNUIiwiUkVTRVRfUEFTU1dPUkRfU1VDQ0VTUyIsIlJFU0VUX1BBU1NXT1JEX0ZBSUxVUkUiLCJsb2dpblJlcXVlc3QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidHlwZSIsInBheWxvYWQiLCJzaWduVXBSZXF1ZXN0IiwibG9nT3V0Iiwic2VuZFJlc2V0Q29kZVJlcXVlc3QiLCJlbWFpbEFkZHJlc3MiLCJyZXNldFBhc3N3b3JkUmVxdWVzdCIsImluaXRpYWxTdGF0ZSIsImRhdGEiLCJ0b2tlbiIsInJlYWRMb2NhbFN0b3JhZ2UiLCJ1c2VyIiwic3RhdGUiLCJsb2dpbiIsInB1dCIsIkxPQURFUl9TVEFSVCIsInJlc3BvbnNlIiwiY2FsbCIsIlBvc3QiLCJjb25zb2xlIiwibG9nIiwic3VjY2VzcyIsIndyaXRlTG9jYWxTdG9yYWdlIiwic2V0Q29va2llIiwibWF4QWdlIiwicGF0aCIsIlJvdXRlciIsInB1c2giLCJMT0dJTl9FUlJPUl9TVEFSVCIsIkxPQURFUl9FTkQiLCJzaWduVXBTYWdhIiwidmFsdWVzIiwiUG9zdEZvcm1EYXRhIiwiRU1BSUxfRVJST1JfU1RBUlQiLCJVU0VSTkFNRV9FUlJPUl9TVEFSVCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZW5kUmVzZXRDb2RlU2FnYSIsInN0YXR1cyIsInRvYXN0IiwicmVzZXRQYXNzd29yZFNhZ2EiLCJsb2dPdXRTYWdhIiwicmVtb3ZlTG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJzZXNzaW9uU3RvcmFnZSIsImRlc3Ryb3lDb29raWUiLCJTYWdhIiwidGFrZUxhdGVzdCIsIkdFVF9DQVRFR09SSUVTX1JFUVVFU1QiLCJHRVRfQ0FURUdPUklFU19TVUNDRVNTIiwiR0VUX0NBVEVHT1JJRVNfRkFJTFVSRSIsIkdFVF9DT01TX0JZX0NBVEVHT1JZX1JFUVVFU1QiLCJHRVRfQ09NU19CWV9DQVRFR09SWV9TVUNDRVNTIiwiR0VUX0NPTVNfQllfQ0FURUdPUllfRkFJTFVSRSIsImdldENhdGVnb3JpZXNSZXF1ZXN0IiwiZ2V0Q29tc0J5Q2F0ZWdvcnlSZXF1ZXN0IiwiR0VUX0FMTF9DT01NVU5JVFlfUkVRVUVTVCIsIkdFVF9BTExfQ09NTVVOSVRZX1NVQ0NFU1MiLCJHRVRfQUxMX0NPTU1VTklUWV9GQUlMVVJFIiwiZ2V0Q2F0ZWdvcmllc1NhZ2EiLCJHZXQiLCJnZXRDb21zQnlDYXRlZ29yeVNhZ2EiLCJ1cmwiLCJuYW1lIiwiQ1JFQVRFX0NPTU1FTlRfUkVRVUVTVCIsIkNSRUFURV9DT01NRU5UX1NVQ0NFU1MiLCJDUkVBVEVfQ09NTUVOVF9GQUlMVVJFIiwiREVMRVRFX0NPTU1FTlRfUkVRVUVTVCIsIkRFTEVURV9DT01NRU5UX1NVQ0NFU1MiLCJERUxFVEVfQ09NTUVOVF9GQUlMVVJFIiwiREVMRVRFX0NPTU1FTlRfTU9ERVJBVE9SX1JFUVVFU1QiLCJERUxFVEVfQ09NTUVOVF9NT0RFUkFUT1JfU1VDQ0VTUyIsIkRFTEVURV9DT01NRU5UX01PREVSQVRPUl9GQUlMVVJFIiwiQ1JFQVRFX1JFUExZX1JFUVVFU1QiLCJDUkVBVEVfUkVQTFlfU1VDQ0VTUyIsIkNSRUFURV9SRVBMWV9GQUlMVVJFIiwiREVMRVRFX1JFUExZX1JFUVVFU1QiLCJERUxFVEVfUkVQTFlfU1VDQ0VTUyIsIkRFTEVURV9SRVBMWV9GQUlMVVJFIiwiREVMRVRFX1JFUExZX01PREVSQVRPUl9SRVFVRVNUIiwiREVMRVRFX1JFUExZX01PREVSQVRPUl9TVUNDRVNTIiwiREVMRVRFX1JFUExZX01PREVSQVRPUl9GQUlMVVJFIiwiTElLRV9DT01NRU5UX1JFUVVFU1QiLCJMSUtFX0NPTU1FTlRfU1VDQ0VTUyIsIkxJS0VfQ09NTUVOVF9GQUlMVVJFIiwiVU5MSUtFX0NPTU1FTlRfUkVRVUVTVCIsIlVOTElLRV9DT01NRU5UX1NVQ0NFU1MiLCJVTkxJS0VfQ09NTUVOVF9GQUlMVVJFIiwiTElLRV9SRVBMWV9SRVFVRVNUIiwiTElLRV9SRVBMWV9TVUNDRVNTIiwiTElLRV9SRVBMWV9GQUlMVVJFIiwiVU5MSUtFX1JFUExZX1JFUVVFU1QiLCJVTkxJS0VfUkVQTFlfU1VDQ0VTUyIsIlVOTElLRV9SRVBMWV9GQUlMVVJFIiwiY3JlYXRlQ29tbWVudFJlcXVlc3QiLCJjcmVhdGVSZXBseVJlcXVlc3QiLCJkZWxldGVDb21tZW50UmVxdWVzdCIsImRlbGV0ZUNvbW1lbnRNb2RlcmF0b3JSZXF1ZXN0IiwibGlrZUNvbW1lbnRSZXF1ZXN0IiwidW5saWtlQ29tbWVudFJlcXVlc3QiLCJkZWxldGVSZXBseVJlcXVlc3QiLCJkZWxldGVSZXBseU1vZGVyYXRvclJlcXVlc3QiLCJsaWtlUmVwbHlSZXF1ZXN0IiwidW5saWtlUmVwbHlSZXF1ZXN0IiwiY3JlYXRlQ29tbWVudFNhZ2EiLCJ1c2VySWQiLCJpZCIsImdldFBvc3REZXRhaWxSZXF1ZXN0Iiwic2VhcmNoIiwicG9zdElkIiwiY3JlYXRlUmVwbHlTYWdhIiwibGlrZUNvbW1lbnRTYWdhIiwiY29tbWVudElkIiwidW5saWtlQ29tbWVudFNhZ2EiLCJEZWxldGUiLCJkZWxldGVDb21tZW50U2FnYSIsImRlbGV0ZUNvbW1lbnRNb2RlcmF0b3JTYWdhIiwiZGVsZXRlUmVwbHlNb2RlcmF0b3JTYWdhIiwicmVwbHlJZCIsImRlbGV0ZVJlcGx5U2FnYSIsImxpa2VSZXBseVNhZ2EiLCJ1bmxpa2VSZXBseVNhZ2EiLCJDTEVBUl9IT01FIiwiQ0xFQVJfQ09NTVVOSVRZIiwiQ0xFQVJfVVNFUiIsIkNMRUFSX1BST0ZJTEUiLCJDTEVBUl9DT01NVU5JVFlfUEFHRSIsImNsZWFyU3RvcmVSZXF1ZXN0IiwiR0VUX1BPUFVMQVJfTElTVF9SRVFVRVNUIiwiR0VUX1BPUFVMQVJfTElTVF9TVUNDRVNTIiwiR0VUX1BPUFVMQVJfTElTVF9GQUlMVVJFIiwiR0VUX0NPTU1VTklUWV9SRVFVRVNUIiwiR0VUX0NPTU1VTklUWV9TVUNDRVNTIiwiR0VUX0NPTU1VTklUWV9GQUlMVVJFIiwiR0VUX0NPTU1VTklUWV9QT1NUU19SRVFVRVNUIiwiR0VUX0NPTU1VTklUWV9QT1NUU19TVUNDRVNTIiwiR0VUX0NPTU1VTklUWV9QT1NUU19GQUlMVVJFIiwiR0VUX1VTRVJfQ09NTVVOSVRJRVNfUkVRVUVTVCIsIkdFVF9VU0VSX0NPTU1VTklUSUVTX1NVQ0NFU1MiLCJHRVRfVVNFUl9DT01NVU5JVElFU19GQUlMVVJFIiwiT0ZfTU9ERVJBVE9SU19SRVFVRVNUIiwiT0ZfTU9ERVJBVE9SU19TVUNDRVNTIiwiT0ZfTU9ERVJBVE9SU19GQUlMVVJFIiwiVVBEQVRFX0NPTU1VTklUWV9SRVFVRVNUIiwiVVBEQVRFX0NPTU1VTklUWV9TVUNDRVNTIiwiVVBEQVRFX0NPTU1VTklUWV9GQUlMVVJFIiwiR0VUX1VTRVJTX1JFUVVFU1QiLCJHRVRfVVNFUlNfU1VDQ0VTUyIsIkdFVF9VU0VSU19GQUlMVVJFIiwiREVMRVRFX1VTRVJfUkVRVUVTVCIsIkRFTEVURV9VU0VSX1NVQ0NFU1MiLCJERUxFVEVfVVNFUl9GQUlMVVJFIiwiZ2V0UG9wdWxhckNvbW1uaXR5TGlzdFJlcXVlc3QiLCJnZXRDb21tdW5pdHlSZXF1ZXN0IiwiZ2V0Q29tbXVuaXR5UG9zdHNSZXF1ZXN0IiwiZ2V0VXNlckNvbW11bml0aWVzUmVxdWVzdCIsIm9mTW9kZXJhdG9yc1JlcXVlc3QiLCJ1cGRhdGVDb21tdW5pdHlSZXF1ZXN0IiwiZ2V0VXNlcnMiLCJkZWxldGVVc2VyUmVxdWVzdCIsImdldEFsbENvbW11bml0aWVzUmVxdWVzdCIsImdldFBvcHVsYXJMaXN0U2FnYSIsImdldENvbW11bml0eVNhZ2EiLCJzbHVnIiwibG9hZGVyU3RhcnQiLCJnZXRDb21tdW5pdHlQb3N0c1NhZ2EiLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJpc1ZvdGVkIiwiZ2V0VXNlckNvbW11bml0aWVzU2FnYSIsImlzTG9nZ2VkIiwib2ZNb2RlcmF0b3JzU2FnYSIsImdldFVzZXJzU2FnYSIsImRlbGV0ZVVzZXJTYWdhIiwidXBkYXRlQ29tbXVuaXR5IiwiUHV0Rm9ybURhdGEiLCJnZXRBbGxTYWdhIiwicGFnZWREYXRhIiwicmVzdWx0cyIsImhhbmRsZU5vblBhZ2luYXRlZFJlc3VsdCIsInByZXZQb3N0czEiLCJuZXdQb3N0czEiLCJjb25jYXQiLCJERUxFVEVfTU9ERVJBVE9SX1NVQ0NFU1MiLCJ0ZW1wIiwibmV3VGVtcCIsImZpbHRlciIsIngiLCJkZWxldGVkUG9zdCIsIm5ld1N0YXRlIiwiR0VUX0NPTlZFUlNBVElPTlNfUkVRVUVTVCIsIkdFVF9DT05WRVJTQVRJT05TX1NVQ0NFU1MiLCJHRVRfQ09OVkVSU0FUSU9OU19GQUlMVVJFIiwiR0VUX0NPTlZFUlNBVElPTl9ERVRBSUxfUkVRVUVTVCIsIkdFVF9DT05WRVJTQVRJT05fREVUQUlMX1NVQ0NFU1MiLCJHRVRfQ09OVkVSU0FUSU9OX0RFVEFJTF9GQUlMVVJFIiwiU0VORF9NRVNTQUdFX1JFUVVFU1QiLCJTRU5EX01FU1NBR0VfU1VDQ0VTUyIsIlNFTkRfTUVTU0FHRV9GQUlMVVJFIiwiZ2V0Q29udmVyc2F0aW9uc1JlcXVlc3QiLCJnZXRDb252ZXJzYXRpb25EZXRhaWxSZXF1ZXN0Iiwic2VuZE1lc3NhZ2VSZXF1ZXN0IiwiZ2V0Q29udmVyc2F0aW9uc1NhZ2EiLCJnZXRDb252ZXJzYXRpb25EZXRhaWxTYWdhIiwic2VuZE1lc3NhZ2VTYWdhIiwidGVtcFJlc3BvbnNlRGF0YSIsInNlbmRlcklkIiwiY29udmVyc2F0aW9uSWQiLCJFTkRfRVJST1IiLCJzZXRFcnJvclJlcXVlc3QiLCJsb2dpbkVycm9yIiwiZW1haWxFcnJvciIsInVzZXJuYW1lRXJyb3IiLCJnbG9iYWwiLCJyZW1vdmVJdGVtIiwic3RvcmUiLCJnZXRJdGVtIiwia2V5Iiwic2V0SXRlbSIsInZhbHVlIiwidG9TdHJpbmciLCJPYmplY3QiLCJrZXlzIiwiayIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiY3VycmVudEl0ZW0iLCJBcnJheSIsImlzQXJyYXkiLCJmcm9tUGFpcnMiLCJtYXAiLCJwYXJzZSIsImxvYWRTdGF0ZSIsInNlcmlhbGl6ZWRTdGF0ZSIsInVuZGVmaW5lZCIsImVyciIsImlzTG9nZ2VkV2l0aENvb2tpZXMiLCJjdHgiLCJjb29raWVzIiwicGFyc2VDb29raWVzIiwiZW50cmllcyIsInZhbCIsImZvckVhY2giLCJjbGVhckxvY2FsU3RvcmFnZSIsImdldFNlYXJjaFBhcmFtcyIsInBhcmFtcyIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJnZW5lcmF0ZVN0cmluZyIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJnZXRQYXJhbWV0ZXJCeU5hbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJleGVjIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiaHRtbFRvVGV4dCIsImh0bWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsIkdFVF9IT01FX1BPU1RTX1JFUVVFU1QiLCJHRVRfSE9NRV9QT1NUU19TVUNDRVNTIiwiR0VUX0hPTUVfUE9TVFNfRkFJTFVSRSIsIkdFVF9VTkFVVEhPUklaRURfUE9TVFNfUkVRVUVTVCIsIkdFVF9VTkFVVEhPUklaRURfUE9TVFNfU1VDQ0VTUyIsIkdFVF9VTkFVVEhPUklaRURfUE9TVFNfRkFJTFVSRSIsIlNFQVJDSF9SRVFVRVNUIiwiU0VBUkNIX1NVQ0NFU1MiLCJTRUFSQ0hfRkFJTFVSRSIsImdldEhvbWVQb3N0c1JlcXVlc3QiLCJnZXRVbmF1dGhvcml6ZWRQb3N0c1JlcXVlc3QiLCJzZWFyY2hSZXF1ZXN0Iiwic3RhdGVBcnJheSIsInJlc3BvbnNlQXJyYXkiLCJpIiwibGVuZ3RoIiwicHJldlBvc3RzIiwibmV3UG9zdHMiLCJuZXdEYXRhIiwiZ2V0SG9tZVBvc3RzU2FnYSIsImdldFVuYXV0aG9yaXplZFBvc3RzU2FnYSIsImxvZGVyU3RhcnQiLCJzZWFyY2hTYWdhIiwidGV4dCIsInNldExvYWRlciIsImxvYWRpbmciLCJHRVRfVU5SRUFEU19SRVFVRVNUIiwiR0VUX1VOUkVBRFNfU1VDQ0VTUyIsIkdFVF9VTlJFQURTX0ZBSUxVUkUiLCJNQVJLX0FTX1JFQURfUkVRVUVTVCIsIk1BUktfQVNfUkVBRF9TVUNDRVNTIiwiTUFSS19BU19SRUFEX0ZBSUxVUkUiLCJnZXRVbnJlYWRzUmVxdWVzdCIsIm1hcmtBc1JlYWRSZXF1ZXN0IiwidW5yZWFkcyIsImdldFVucmVhZHNTYWdhIiwiY291bnQiLCJtYXJrQXNSZWFkU2FnYSIsImlkcyIsIlB1dCIsIkdFVF9OT1RJRklDQVRJT05TX1JFUVVFU1QiLCJHRVRfTk9USUZJQ0FUSU9OU19TVUNDRVNTIiwiR0VUX05PVElGSUNBVElPTlNfRkFJTFVSRSIsIkdFVF9DT1VOVF9SRVFVRVNUIiwiR0VUX0NPVU5UX1NVQ0NFU1MiLCJHRVRfQ09VTlRfRkFJTFVSRSIsImdldE5vdGlmaWNhdGlvbnNSZXF1ZXN0IiwiZ2V0Q291bnRSZXF1ZXN0IiwiZ2V0Tm90aWZpY2F0aW9uc1NhZ2EiLCJnZXRDb3VudFNhZ2EiLCJHRVRfUE9TVF9ERVRBSUxfUkVRVUVTVCIsIkdFVF9QT1NUX0RFVEFJTF9TVUNDRVNTIiwiR0VUX1BPU1RfREVUQUlMX0ZBSUxVUkUiLCJHRVRfTUFJTl9QT1NUU19SRVFVRVNUIiwiR0VUX01BSU5fUE9TVFNfU1VDQ0VTUyIsIkdFVF9NQUlOX1BPU1RTX0ZBSUxVUkUiLCJHRVRfVVNFUl9QT1NUU19SRVFVRVNUIiwiR0VUX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkdFVF9VU0VSX1BPU1RTX0ZBSUxVUkUiLCJDUkVBVEVfUE9TVF9SRVFVRVNUIiwiQ1JFQVRFX1BPU1RfU1VDQ0VTUyIsIkNSRUFURV9QT1NUX0ZBSUxVUkUiLCJWT1RFX1BPU1RfUkVRVUVTVCIsIlZPVEVfUE9TVF9TVUNDRVNTIiwiVk9URV9QT1NUX0ZBSUxVUkUiLCJERUxFVEVfUE9TVF9SRVFVRVNUIiwiREVMRVRFX1BPU1RfU1VDQ0VTUyIsIkRFTEVURV9QT1NUX0ZBSUxVUkUiLCJERUxFVEVfTU9ERVJBVE9SX1JFUVVFU1QiLCJERUxFVEVfTU9ERVJBVE9SX0ZBSUxVUkUiLCJnZXRNYWluUG9zdHNSZXF1ZXN0IiwiZ2V0VXNlclBvc3RzUmVxdWVzdCIsImNyZWF0ZVBvc3RSZXF1ZXN0Iiwidm90ZVBvc3RSZXF1ZXN0IiwiZGVsZXRlUG9zdFJlcXVlc3QiLCJkZWxldGVNb2RlcmF0b3JSZXF1ZXN0IiwiZ2V0UG9zdERldGFpbFNhZ2EiLCJnZXRVc2VyUG9zdHNTYWdhIiwidm90ZVBvc3RTYWdhIiwidm90ZWRVc2VybmFtZSIsIm5ld1BheWxvYWQiLCJwYWdlIiwiY1NsdWciLCJjcmVhdGVQb3N0U2FnYSIsImRlbGV0ZVBvc3RTYWdhIiwiZ2V0UHJvZmlsZVBvc3RzUmVxdWVzdCIsImRlbGV0ZU1vZGVyYXRvclNhZ2EiLCJVUERBVEVfUFJPRklMRV9SRVFVRVNUIiwiVVBEQVRFX1BST0ZJTEVfU1VDQ0VTUyIsIlVQREFURV9QUk9GSUxFX0ZBSUxVUkUiLCJHRVRfUFJPRklMRV9SRVFVRVNUIiwiR0VUX1BST0ZJTEVfU1VDQ0VTUyIsIkdFVF9QUk9GSUxFX0ZBSUxVUkUiLCJHRVRfUFJPRklMRV9QT1NUU19SRVFVRVNUIiwiR0VUX1BST0ZJTEVfUE9TVFNfU1VDQ0VTUyIsIkdFVF9QUk9GSUxFX1BPU1RTX0ZBSUxVUkUiLCJ1cGRhdGVQcm9maWxlUmVxdWVzdCIsImdldFByb2ZpbGVSZXF1ZXN0IiwidXBkYXRlUHJvZmlsZVNhZ2EiLCJnZW5kZXIiLCJnZXRQb3N0c1NhZ2EiLCJnZXRQcm9maWxlU2FnYSIsImNvbW11bml0aWVzIiwibG9hZGVyIiwiYXV0aCIsInBvc3REZXRhaWwiLCJob21lIiwiY29tbXVuaXR5IiwicG9zdHMiLCJvZk1vZGVyYXRvcnMiLCJ1c2VyQ29tbXVuaXRpZXMiLCJjb21tdW5pdHlVc2VycyIsImVycm9ycyIsImNhdGVnb3JpZXMiLCJjb21zQnlDYXRlZ29yeSIsImNvbnZlcnNhdGlvbnMiLCJzZWxlY3RlZENvbnZlcnNhdGlvbiIsIm5vdGlmaWNhdGlvbnMiLCJ1blJlYWRzIiwidW5SZWFkTWVzc2FnZXMiLCJwcm9maWxlUG9zdHMiLCJwcm9maWxlRGF0YSIsInJvb3RTYWdhIiwiYWxsIiwibWVzc2FnZXMiLCJjb252ZXJzYXRpb24iLCJjb21tZW50IiwicHJvZmlsZSIsInBvc3QiLCJBUElfVVJMIiwiY29udGVudFR5cGVzIiwianNvbiIsInVybEVuY29kZWQiLCJpc011bHRpUGFydCIsImVuZHBvaW50IiwiYm9keSIsImlzVXJsRW5jb2RlZCIsImFwaVVybCIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImZldGNoIiwidGhlbiIsImZldGNoUmVzcG9uc2UiLCJjYXRjaCIsImJvZHlBc0Zvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJyb3V0ZXJNaWRkbGV3YXJlIiwiY3JlYXRlUm91dGVyTWlkZGxld2FyZSIsIm1ha2VTdG9yZSIsImNvbXBvc2VFbmhhbmNlcnMiLCJjb21wb3NlIiwibWlkZGxld2FyZXMiLCJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsInJlZHVjZXJzIiwicm91dGVyIiwicm91dGVyUmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsInJ1blNhZ2EiLCJzYWdhIiwicnVuIiwic3RvcFNhZ2EiLCJkaXNwYXRjaCIsIkVORCIsImRvbmUiLCJleGVjU2FnYVRhc2tzIiwiaXNTZXJ2ZXIiLCJ0YXNrcyIsIkdFVF9VU0VSX0JZX1VTRVJOQU1FX1JFUVVFU1QiLCJHRVRfVVNFUl9CWV9VU0VSTkFNRV9TVUNDRVNTIiwiR0VUX1VTRVJfQllfVVNFUk5BTUVfRkFJTFVSRSIsIkpPSU5fQ09NTVVOSVRZX1JFUVVFU1QiLCJKT0lOX0NPTU1VTklUWV9TVUNDRVNTIiwiSk9JTl9DT01NVU5JVFlfRkFJTFVSRSIsIkxFQVZFX0NPTU1VTklUWV9SRVFVRVNUIiwiTEVBVkVfQ09NTVVOSVRZX1NVQ0NFU1MiLCJMRUFWRV9DT01NVU5JVFlfRkFJTFVSRSIsIlNFTkRfU1VHR0VTVF9SRVFVRVNUIiwiU0VORF9TVUdHRVNUX1NVQ0NFU1MiLCJTRU5EX1NVR0dFU1RfRkFJTFVSRSIsImdldFVzZXJQcm9maWxlIiwiZ2V0VXNlckJ5VXNlcm5hbWUiLCJqb2luQ29tbXVuaXR5UmVxdWVzdCIsImxlYXZlQ29tbXVuaXR5UmVxdWVzdCIsInNlbmRTdWdnZXN0UmVxdWVzdCIsImdldFVzZXJCeVVzZXJuYW1lU2FnYSIsImpvaW5Db21tdW5pdHlTYWdhIiwibGVhdmVDb21tdW5pdHlTYWdhIiwic2VuZFN1Z2dlc3RTYWdhIiwicGFnZVByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRDYXRjaCIsInJlbmRlciIsIl9fTl9TU0ciLCJjcmVhdGVVcmwiLCJBcHAiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJwIiwiYmFjayIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJNeUFwcCIsInByb3BzIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsb0JBQW9CLEdBQUcsQ0FBQyxNQUFNO0FBRXZDLFFBQU1DLFVBQVUsR0FBRyxJQUFJQyw4Q0FBSixDQUFZO0FBQzNCQyxlQUFXLEVBQUUsa0NBRGM7QUFFM0JDLG1CQUFlLEVBQUUsSUFGVTtBQUczQkMsOEJBQTBCLEVBQUU7QUFIRCxHQUFaLENBQW5COztBQU1BLFFBQU1DLFdBQVcsR0FBSUMsSUFBRCxJQUFVO0FBQzFCTixjQUFVLENBQUNNLElBQVgsQ0FBZ0JBLElBQWhCO0FBQ0gsR0FGRDs7QUFJQSxRQUFNQyxpQkFBaUIsR0FBSUMsS0FBRCxJQUFXO0FBQ2pDLFVBQU0sSUFBSUMsS0FBSixDQUFVRCxLQUFWLENBQU47QUFDSCxHQUZEOztBQUdBLFNBQU87QUFBRUgsZUFBRjtBQUFlRTtBQUFmLEdBQVA7QUFDSCxDQWhCbUMsR0FBN0I7QUFrQlFSLG1GQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1XLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUVBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUVBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUVBLE1BQU1DLFlBQVksR0FBRyxDQUFDQyxRQUFELEVBQVdDLFFBQVgsTUFBeUI7QUFDakRDLE1BQUksRUFBRWxCLFlBRDJDO0FBRWpEbUIsU0FBTyxFQUFFO0FBQUVILFlBQUY7QUFBWUM7QUFBWjtBQUZ3QyxDQUF6QixDQUFyQjtBQUtBLE1BQU1HLGFBQWEsR0FBSUQsT0FBRCxLQUFjO0FBQ3ZDRCxNQUFJLEVBQUVmLGNBRGlDO0FBRXZDZ0I7QUFGdUMsQ0FBZCxDQUF0QjtBQUtBLE1BQU1FLE1BQU0sR0FBRyxPQUFPO0FBQ3pCSCxNQUFJLEVBQUVaO0FBRG1CLENBQVAsQ0FBZjtBQUlBLE1BQU1nQixvQkFBb0IsR0FBSUMsWUFBRCxLQUFtQjtBQUNuREwsTUFBSSxFQUFFVCx1QkFENkM7QUFFbkRjO0FBRm1ELENBQW5CLENBQTdCO0FBS0EsTUFBTUMsb0JBQW9CLEdBQUlMLE9BQUQsS0FBYztBQUM5Q0QsTUFBSSxFQUFFTixzQkFEd0M7QUFFOUNPO0FBRjhDLENBQWQsQ0FBN0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNQO0FBQ0E7QUFFQSxNQUFNTSxZQUFZLEdBQUc7QUFDakJDLE1BQUksRUFBRTtBQUFFQyxTQUFLLEVBQUVDLGlFQUFnQixDQUFDLE9BQUQsQ0FBekI7QUFBb0NDLFFBQUksRUFBRUQsaUVBQWdCLENBQUMsTUFBRDtBQUExRCxHQURXO0FBRWpCOUIsT0FBSyxFQUFFO0FBRlUsQ0FBckI7QUFLZSx5RUFBVWdDLEtBQUssR0FBR0wsWUFBbEIsRUFBZ0M7QUFBRVAsTUFBRjtBQUFRQztBQUFSLENBQWhDLEVBQW1EO0FBQzlELFVBQVFELElBQVI7QUFDSSxTQUFLbEIscURBQUw7QUFDSSw2Q0FBWThCLEtBQVo7QUFBbUJoQyxhQUFLLEVBQUU7QUFBMUI7O0FBQ0osU0FBS0cscURBQUw7QUFDSSw2Q0FBWTZCLEtBQVo7QUFBbUJKLFlBQUksRUFBRVA7QUFBekI7O0FBQ0osU0FBS2pCLHFEQUFMO0FBQ0ksNkNBQVk0QixLQUFaO0FBQW1CaEMsYUFBSyxFQUFFcUI7QUFBMUI7O0FBQ0o7QUFDSSxhQUFPVyxLQUFQO0FBUlI7QUFVSCxDOzs7Ozs7Ozs7Ozs7QUNuQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVQyxLQUFWLENBQWdCO0FBQUVaO0FBQUYsQ0FBaEIsRUFBNkI7QUFDekIsTUFBSTtBQUNBLFVBQU1hLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsS0FBRCxDQUFUO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUNDLDhDQUFELEVBQU8sWUFBUCxFQUFxQmpCLE9BQXJCLEVBQThCLElBQTlCLENBQTNCO0FBQ0FrQixXQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjs7QUFDQSxRQUFJQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0ssT0FBekIsRUFBa0M7QUFDOUJDLHdFQUFpQixDQUFDLE9BQUQsRUFBVU4sUUFBUSxDQUFDUCxLQUFuQixDQUFqQjtBQUNBYSx3RUFBaUIsQ0FBQyxNQUFELEVBQVNOLFFBQVEsQ0FBQ0wsSUFBbEIsQ0FBakI7QUFDQVksK0RBQVMsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQlAsUUFBUSxDQUFDUCxLQUF6QixFQUFnQztBQUNyQ2UsY0FBTSxFQUFFLEtBQUssR0FBTCxHQUFXLEVBQVgsR0FBZ0IsRUFBaEIsR0FBcUIsRUFEUTtBQUVyQ0MsWUFBSSxFQUFFO0FBRitCLE9BQWhDLENBQVQ7QUFJQSxZQUFNUiwrREFBSSxDQUFDUyxrREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWixDQUFELENBQVY7QUFDQSxZQUFNYiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRWpCLHFEQUFSO0FBQXNCa0IsZUFBTyxFQUFFZTtBQUEvQixPQUFELENBQVQ7QUFDSCxLQVRELE1BU087QUFDSCxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRWhCLHFEQUFSO0FBQXNCaUIsZUFBTyxFQUFFZTtBQUEvQixPQUFELENBQVQsQ0FERyxDQUVIOztBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNEIsZ0VBQWlCQTtBQUF6QixPQUFELENBQVQ7QUFDQSxZQUFNZCw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDSDtBQUNKLEdBbkJELENBbUJFLE9BQU9qRCxLQUFQLEVBQWM7QUFDWixVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVoQixxREFBUjtBQUFzQmlCLGFBQU8sRUFBRXJCO0FBQS9CLEtBQUQsQ0FBVCxDQURZLENBRVo7O0FBQ0EsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFNEIsZ0VBQWlCQTtBQUF6QixLQUFELENBQVQ7QUFDQSxVQUFNZCw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDSDtBQUNKOztBQUVELFVBQVVDLFVBQVYsQ0FBcUI7QUFBRTdCO0FBQUYsQ0FBckIsRUFBa0M7QUFDOUIsUUFBTThCLE1BQU0sR0FBRztBQUFFakMsWUFBUSxFQUFFRyxPQUFPLENBQUNILFFBQXBCO0FBQThCQyxZQUFRLEVBQUVFLE9BQU8sQ0FBQ0Y7QUFBaEQsR0FBZjs7QUFDQSxNQUFJO0FBQ0EsVUFBTWUsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVlLDREQUFZQTtBQUFwQixLQUFELENBQVQ7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2Usc0RBQUQsRUFBZSxrQkFBZixFQUFtQy9CLE9BQW5DLEVBQTRDLEVBQTVDLENBQTNCOztBQUNBLFFBQUllLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUF0QixJQUErQm9DLFFBQVEsQ0FBQ0ssT0FBNUMsRUFBcUQ7QUFDakQsWUFBTVAsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUVkLHVEQUFSO0FBQXdCZSxlQUFPLEVBQUVlO0FBQWpDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUNqQiw2REFBWSxDQUFDa0MsTUFBTSxDQUFDakMsUUFBUixFQUFrQmlDLE1BQU0sQ0FBQ2hDLFFBQXpCLENBQWIsQ0FBVDtBQUNILEtBSEQsTUFHTztBQUNILFVBQUlpQixRQUFRLENBQUNYLFlBQWIsRUFBMkI7QUFDdkIsY0FBTVMsOERBQUcsQ0FBQztBQUFFZCxjQUFJLEVBQUVpQyxnRUFBaUJBO0FBQXpCLFNBQUQsQ0FBVDtBQUNILE9BRkQsTUFFTyxJQUFJakIsUUFBUSxDQUFDbEIsUUFBYixFQUF1QjtBQUMxQixjQUFNZ0IsOERBQUcsQ0FBQztBQUFFZCxjQUFJLEVBQUVrQyxtRUFBb0JBO0FBQTVCLFNBQUQsQ0FBVDtBQUNILE9BRk0sTUFFQTtBQUNIL0QsZ0ZBQW9CLENBQUNNLFdBQXJCLENBQWlDMEQsSUFBSSxDQUFDQyxTQUFMLENBQWVwQixRQUFmLENBQWpDO0FBQ0g7O0FBQ0QsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUViLHVEQUFSO0FBQXdCYyxlQUFPLEVBQUVlO0FBQWpDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNBMUQsOEVBQW9CLENBQUNNLFdBQXJCLENBQWlDMEQsSUFBSSxDQUFDQyxTQUFMLENBQWVwQixRQUFmLENBQWpDO0FBQ0g7QUFDSixHQWxCRCxDQWtCRSxPQUFPcEMsS0FBUCxFQUFjO0FBQ1osVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFYix1REFBUjtBQUF3QmMsYUFBTyxFQUFFckI7QUFBakMsS0FBRCxDQUFUO0FBQ0EsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLEtBQUQsQ0FBVDtBQUNBMUQsNEVBQW9CLENBQUNNLFdBQXJCLENBQWlDMEQsSUFBSSxDQUFDQyxTQUFMLENBQWV4RCxLQUFmLENBQWpDO0FBQ0g7QUFDSjs7QUFFRCxVQUFVeUQsaUJBQVYsQ0FBNEJwQyxPQUE1QixFQUFxQztBQUNqQyxNQUFJO0FBQ0EsVUFBTWEsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVlLDREQUFZQTtBQUFwQixLQUFELENBQVQ7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0MsOENBQUQsRUFBUSxxQ0FBb0NqQixPQUFPLENBQUNJLFlBQWEsRUFBakUsRUFBb0UsRUFBcEUsRUFBd0UsRUFBeEUsQ0FBM0I7O0FBQ0EsUUFBSVcsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQXRCLElBQStCb0MsUUFBUSxDQUFDc0IsTUFBNUMsRUFBb0Q7QUFDaEQsWUFBTXhCLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFUixnRUFBUjtBQUFpQ1MsZUFBTyxFQUFFZTtBQUExQyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDQVUsMERBQUssQ0FBQ2xCLE9BQU4sQ0FBYywwQkFBZDtBQUNBLFlBQU1KLCtEQUFJLENBQUNTLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxnQkFBWixDQUFELENBQVY7QUFDSCxLQUxELE1BS087QUFDSCxZQUFNYiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRVAsZ0VBQVI7QUFBaUNRLGVBQU8sRUFBRWU7QUFBMUMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0g7QUFDSixHQVpELENBWUUsT0FBT2pELEtBQVAsRUFBYztBQUNaLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRVAsZ0VBQVI7QUFBaUNRLGFBQU8sRUFBRXJCO0FBQTFDLEtBQUQsQ0FBVDtBQUNBLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDSDtBQUNKOztBQUVELFVBQVVXLGlCQUFWLENBQTRCO0FBQUV2QztBQUFGLENBQTVCLEVBQXlDO0FBQ3JDLE1BQUk7QUFDQSxVQUFNYSw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRWUsNERBQVlBO0FBQXBCLEtBQUQsQ0FBVDtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDQyw4Q0FBRCxFQUFPLHFCQUFQLEVBQThCakIsT0FBOUIsRUFBdUMsRUFBdkMsQ0FBM0I7O0FBQ0EsUUFBSWUsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQXRCLElBQStCb0MsUUFBUSxDQUFDc0IsTUFBNUMsRUFBb0Q7QUFDaEQsWUFBTXhCLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFTCwrREFBUjtBQUFnQ00sZUFBTyxFQUFFZTtBQUF6QyxPQUFELENBQVQ7QUFDQXVCLDBEQUFLLENBQUNsQixPQUFOLENBQWMsOEJBQWQ7QUFDQSxZQUFNUCw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDQSxZQUFNWiwrREFBSSxDQUFDUyxrREFBTSxDQUFDQyxJQUFQLENBQVksWUFBWixDQUFELENBQVY7QUFDSCxLQUxELE1BS087QUFDSCxZQUFNYiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRUosK0RBQVI7QUFBZ0NLLGVBQU8sRUFBRWU7QUFBekMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0g7QUFDSixHQVpELENBWUUsT0FBT2pELEtBQVAsRUFBYztBQUNaLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRUosK0RBQVI7QUFBZ0NLLGFBQU8sRUFBRXJCO0FBQXpDLEtBQUQsQ0FBVDtBQUNBLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDSDtBQUNKOztBQUVELFVBQVVZLFVBQVYsR0FBdUI7QUFDbkIsTUFBSTtBQUNBLFVBQU0zQiw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRVgsdURBQWNBO0FBQXRCLEtBQUQsQ0FBVDtBQUNBcUQsdUVBQWtCLENBQUMsT0FBRCxDQUFsQjtBQUNBQSx1RUFBa0IsQ0FBQyxNQUFELENBQWxCO0FBQ0FDLGdCQUFZLENBQUNDLEtBQWI7QUFDQUMsa0JBQWMsQ0FBQ0QsS0FBZjtBQUNBRSxpRUFBYSxDQUFDLElBQUQsRUFBTyxPQUFQLENBQWI7QUFDQSxVQUFNaEMsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUU7QUFBUixLQUFELENBQVQ7QUFDQSxVQUFNaUIsK0RBQUksQ0FBQ1Msa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFlBQVosQ0FBRCxDQUFWO0FBQ0gsR0FURCxDQVNFLE9BQU8vQyxLQUFQLEVBQWM7QUFDWixVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVWLHVEQUFjQTtBQUF0QixLQUFELENBQVQ7QUFDSDtBQUNKOztBQUVjLFVBQVV5RCxJQUFWLEdBQWlCO0FBQzVCLFFBQU1DLHFFQUFVLENBQUNsRSxxREFBRCxFQUFlK0IsS0FBZixDQUFoQjtBQUNBLFFBQU1tQyxxRUFBVSxDQUFDL0QsdURBQUQsRUFBaUI2QyxVQUFqQixDQUFoQjtBQUNBLFFBQU1rQixxRUFBVSxDQUFDNUQsdURBQUQsRUFBaUJxRCxVQUFqQixDQUFoQjtBQUNBLFFBQU1PLHFFQUFVLENBQUN6RCxnRUFBRCxFQUEwQjhDLGlCQUExQixDQUFoQjtBQUNBLFFBQU1XLHFFQUFVLENBQUN0RCwrREFBRCxFQUF5QjhDLGlCQUF6QixDQUFoQjtBQUNILEM7Ozs7Ozs7Ozs7OztBQ2xJRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNUyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFFQSxNQUFNQyw0QkFBNEIsR0FBRyw4QkFBckM7QUFDQSxNQUFNQyw0QkFBNEIsR0FBRyw4QkFBckM7QUFDQSxNQUFNQyw0QkFBNEIsR0FBRyw4QkFBckM7QUFFQSxNQUFNQyxvQkFBb0IsR0FBR3RELE9BQU8sSUFBSTtBQUM3QyxTQUFRO0FBQ05ELFFBQUksRUFBRWlELHNCQURBO0FBRU5oRDtBQUZNLEdBQVI7QUFLRCxDQU5NO0FBT0EsTUFBTXVELHdCQUF3QixHQUFHdkQsT0FBTyxLQUFLO0FBQ2xERCxNQUFJLEVBQUVvRCw0QkFENEM7QUFFbERuRDtBQUZrRCxDQUFMLENBQXhDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZQO0FBQ0E7QUFFQSxNQUFNTSxZQUFZLEdBQUc7QUFDakJDLE1BQUksRUFBRSxJQURXO0FBRWpCNUIsT0FBSyxFQUFFO0FBRlUsQ0FBckI7QUFLZSx5RUFBVWdDLEtBQUssR0FBR0wsWUFBbEIsRUFBZ0M7QUFBRVAsTUFBRjtBQUFRQztBQUFSLENBQWhDLEVBQW1EO0FBQzlELFVBQVFELElBQVI7QUFDSSxTQUFLb0QscUVBQUw7QUFDSSw2Q0FBWXhDLEtBQVo7QUFBbUJoQyxhQUFLLEVBQUU7QUFBMUI7O0FBQ0osU0FBS3lFLHFFQUFMO0FBQ0ksNkNBQVl6QyxLQUFaO0FBQW1CSixZQUFJLEVBQUVQO0FBQXpCOztBQUNKLFNBQUtxRCxxRUFBTDtBQUNJLDZDQUFZMUMsS0FBWjtBQUFtQmhDLGFBQUssRUFBRXFCO0FBQTFCOztBQUNKLFNBQUt3RCw0RUFBTDtBQUNJLDZDQUFZN0MsS0FBWjtBQUFtQmhDLGFBQUssRUFBRTtBQUExQjs7QUFDSixTQUFLOEUsNEVBQUw7QUFDSSw2Q0FBWTlDLEtBQVo7QUFBbUJKLFlBQUksRUFBRVA7QUFBekI7O0FBQ0osU0FBSzBELDRFQUFMO0FBQ0ksNkNBQVkvQyxLQUFaO0FBQW1CaEMsYUFBSyxFQUFFcUI7QUFBMUI7O0FBQ0o7QUFDSSxhQUFPVyxLQUFQO0FBZFI7QUFnQkgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkQ7QUFFQSxNQUFNTCxZQUFZLEdBQUc7QUFDbkJDLE1BQUksRUFBRSxJQURhO0FBRW5CNUIsT0FBSyxFQUFFO0FBRlksQ0FBckI7QUFLZSx5RUFBVWdDLEtBQUssR0FBR0wsWUFBbEIsRUFBZ0M7QUFBRVAsTUFBRjtBQUFRQztBQUFSLENBQWhDLEVBQW1EO0FBQ2hFLFVBQVFELElBQVI7QUFDRSxTQUFLaUQsK0RBQUw7QUFDRSw2Q0FBWXJDLEtBQVo7QUFBbUJoQyxhQUFLLEVBQUU7QUFBMUI7O0FBQ0YsU0FBS3NFLCtEQUFMO0FBQ0UsNkNBQVl0QyxLQUFaO0FBQW1CSixZQUFJLEVBQUVQO0FBQXpCOztBQUNGLFNBQUtrRCwrREFBTDtBQUNFLDZDQUFZdkMsS0FBWjtBQUFtQmhDLGFBQUssRUFBRXFCO0FBQTFCOztBQUNGO0FBQ0UsYUFBT1csS0FBUDtBQVJKO0FBVUQsQzs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7O0FBRUEsVUFBVWdELGlCQUFWLENBQTRCO0FBQUUzRDtBQUFGLENBQTVCLEVBQXlDO0FBQ3ZDa0IsU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7O0FBQ0EsTUFBSTtBQUNGLFVBQU1OLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsS0FBRCxDQUFUO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUM0Qyw2Q0FBRCxFQUFNLGtCQUFOLEVBQTBCLEVBQTFCLEVBQThCLEVBQTlCLEVBQWtDLEtBQWxDLENBQTNCOztBQUNBLFFBQUk3QyxRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDcEMsS0FBMUIsRUFBaUM7QUFDL0IsWUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFa0QsK0RBQVI7QUFBZ0NqRCxlQUFPLEVBQUVlO0FBQXpDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNELEtBSEQsTUFHTztBQUNMLFlBQU1mLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFbUQsK0RBQVI7QUFBZ0NsRCxlQUFPLEVBQUVlO0FBQXpDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FWRCxDQVVFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVtRCwrREFBUjtBQUFnQ2xELGFBQU8sRUFBRXJCO0FBQXpDLEtBQUQsQ0FBVDtBQUNBLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDRDtBQUNGOztBQUVELFVBQVVpQyxxQkFBVixDQUFnQztBQUFFN0Q7QUFBRixDQUFoQyxFQUE2QztBQUMzQyxNQUFJO0FBQ0YsVUFBTThELEdBQUcsR0FBSSxpQ0FBZ0M5RCxPQUFPLENBQUMrRCxJQUFLLEVBQTFEO0FBQ0EsVUFBTWxELDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsS0FBRCxDQUFUO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUM0Qyw2Q0FBRCxFQUFNRSxHQUFOLEVBQVcsRUFBWCxFQUFlLEVBQWYsRUFBbUIsS0FBbkIsQ0FBM0I7O0FBQ0EsUUFBSS9DLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUExQixFQUFpQztBQUMvQixZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUVxRCxxRUFBUjtBQUFzQ3BELGVBQU8sRUFBRWU7QUFBL0MsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsWUFBTWYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUVzRCxxRUFBUjtBQUFzQ3JELGVBQU8sRUFBRWU7QUFBL0MsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0Q7QUFDRixHQVhELENBV0UsT0FBT2pELEtBQVAsRUFBYztBQUNkLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRXNELHFFQUFSO0FBQXNDckQsYUFBTyxFQUFFckI7QUFBL0MsS0FBRCxDQUFUO0FBQ0EsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLEtBQUQsQ0FBVDtBQUNEO0FBQ0Y7O0FBR2MsVUFBVWtCLElBQVYsR0FBaUI7QUFDOUIsUUFBTUMscUVBQVUsQ0FBQ0MsK0RBQUQsRUFBeUJXLGlCQUF6QixDQUFoQjtBQUNBLFFBQU1aLHFFQUFVLENBQUNJLHFFQUFELEVBQStCVSxxQkFBL0IsQ0FBaEI7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNoREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1HLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUVBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUVBLE1BQU1DLGdDQUFnQyxHQUFHLGtDQUF6QztBQUNBLE1BQU1DLGdDQUFnQyxHQUFHLGtDQUF6QztBQUNBLE1BQU1DLGdDQUFnQyxHQUFHLGtDQUF6QztBQUVBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUVBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUVBLE1BQU1DLDhCQUE4QixHQUFHLGdDQUF2QztBQUNBLE1BQU1DLDhCQUE4QixHQUFHLGdDQUF2QztBQUNBLE1BQU1DLDhCQUE4QixHQUFHLGdDQUF2QztBQUVBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUVBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUVBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUVBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUVBLE1BQU1DLG9CQUFvQixHQUFHOUYsT0FBTyxLQUFLO0FBQzlDRCxNQUFJLEVBQUVpRSxzQkFEd0M7QUFFOUNoRTtBQUY4QyxDQUFMLENBQXBDO0FBS0EsTUFBTStGLGtCQUFrQixHQUFHL0YsT0FBTyxLQUFLO0FBQzVDRCxNQUFJLEVBQUUwRSxvQkFEc0M7QUFFNUN6RTtBQUY0QyxDQUFMLENBQWxDO0FBS0EsTUFBTWdHLG9CQUFvQixHQUFHaEcsT0FBTyxLQUFLO0FBQzlDRCxNQUFJLEVBQUVvRSxzQkFEd0M7QUFFOUNuRTtBQUY4QyxDQUFMLENBQXBDO0FBS0EsTUFBTWlHLDZCQUE2QixHQUFHakcsT0FBTyxLQUFLO0FBQ3ZERCxNQUFJLEVBQUV1RSxnQ0FEaUQ7QUFFdkR0RTtBQUZ1RCxDQUFMLENBQTdDO0FBS0EsTUFBTWtHLGtCQUFrQixHQUFHbEcsT0FBTyxLQUFLO0FBQzVDRCxNQUFJLEVBQUVtRixvQkFEc0M7QUFFNUNsRjtBQUY0QyxDQUFMLENBQWxDO0FBS0EsTUFBTW1HLG9CQUFvQixHQUFHbkcsT0FBTyxLQUFLO0FBQzlDRCxNQUFJLEVBQUVzRixzQkFEd0M7QUFFOUNyRjtBQUY4QyxDQUFMLENBQXBDO0FBS0EsTUFBTW9HLGtCQUFrQixHQUFHcEcsT0FBTyxLQUFLO0FBQzVDRCxNQUFJLEVBQUU2RSxvQkFEc0M7QUFFNUM1RTtBQUY0QyxDQUFMLENBQWxDO0FBS0EsTUFBTXFHLDJCQUEyQixHQUFHckcsT0FBTyxLQUFLO0FBQ3JERCxNQUFJLEVBQUVnRiw4QkFEK0M7QUFFckQvRTtBQUZxRCxDQUFMLENBQTNDO0FBS0EsTUFBTXNHLGdCQUFnQixHQUFHdEcsT0FBTyxLQUFLO0FBQzFDRCxNQUFJLEVBQUV5RixrQkFEb0M7QUFFMUN4RjtBQUYwQyxDQUFMLENBQWhDO0FBS0EsTUFBTXVHLGtCQUFrQixHQUFHdkcsT0FBTyxLQUFLO0FBQzVDRCxNQUFJLEVBQUU0RixvQkFEc0M7QUFFNUMzRjtBQUY0QyxDQUFMLENBQWxDLEM7Ozs7Ozs7Ozs7OztBQ3JGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVXdHLGlCQUFWLENBQTRCO0FBQUV4RztBQUFGLENBQTVCLEVBQXlDO0FBQ3ZDLE1BQUk7QUFDRixVQUFNYSw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRWUsNERBQVlBO0FBQXBCLEtBQUQsQ0FBVDtBQUNBLFVBQU1KLElBQUksR0FBR0QsaUVBQWdCLENBQUMsTUFBRCxDQUE3QjtBQUNBVCxXQUFPLENBQUN5RyxNQUFSLEdBQWlCL0YsSUFBSSxDQUFDZ0csRUFBdEI7QUFDQSxVQUFNM0YsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUNDLDhDQUFELEVBQVEsZ0JBQVIsRUFBeUJqQixPQUF6QixFQUFrQyxFQUFsQyxFQUFzQyxLQUF0QyxDQUEzQjs7QUFDQSxRQUFJZSxRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDcEMsS0FBMUIsRUFBaUM7QUFDL0IsWUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFa0UsK0RBQVI7QUFBZ0NqRSxlQUFPLEVBQUVlO0FBQXpDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNELEtBSEQsTUFHTztBQUNMLFlBQU1mLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFbUUsK0RBQVI7QUFBZ0NsRSxlQUFPLEVBQUVlO0FBQXpDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FaRCxDQVlFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVtRSwrREFBUjtBQUFnQ2xFLGFBQU8sRUFBRXJCO0FBQXpDLEtBQUQsQ0FBVDtBQUNBLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDRDs7QUFDRCxRQUFNZiw4REFBRyxDQUFDOEYsMkVBQW9CLENBQUM7QUFBRUMsVUFBTSxFQUFHLFdBQVU1RyxPQUFPLENBQUM2RyxNQUFPO0FBQXBDLEdBQUQsQ0FBckIsQ0FBVDtBQUNEOztBQUVELFVBQVVDLGVBQVYsQ0FBMEI7QUFBRTlHO0FBQUYsQ0FBMUIsRUFBdUM7QUFDckMsTUFBSTtBQUNGLFVBQU1hLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsS0FBRCxDQUFUO0FBQ0EsVUFBTUosSUFBSSxHQUFHRCxpRUFBZ0IsQ0FBQyxNQUFELENBQTdCO0FBQ0FULFdBQU8sQ0FBQ3lHLE1BQVIsR0FBaUIvRixJQUFJLENBQUNnRyxFQUF0QjtBQUNBLFVBQU0zRixRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0MsOENBQUQsRUFBUSxvQkFBUixFQUE2QmpCLE9BQTdCLEVBQXNDLEVBQXRDLEVBQTBDLEtBQTFDLENBQTNCOztBQUNBLFFBQUllLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUExQixFQUFpQztBQUMvQixZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUUyRSw2REFBUjtBQUE4QjFFLGVBQU8sRUFBRWU7QUFBdkMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsWUFBTWYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU0RSw2REFBUjtBQUE4QjNFLGVBQU8sRUFBRWU7QUFBdkMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0Q7QUFDRixHQVpELENBWUUsT0FBT2pELEtBQVAsRUFBYztBQUNkLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTRFLDZEQUFSO0FBQThCM0UsYUFBTyxFQUFFckI7QUFBdkMsS0FBRCxDQUFUO0FBQ0EsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLEtBQUQsQ0FBVDtBQUNEOztBQUNELFFBQU1mLDhEQUFHLENBQUM4RiwyRUFBb0IsQ0FBQztBQUFFQyxVQUFNLEVBQUcsV0FBVTVHLE9BQU8sQ0FBQzZHLE1BQU87QUFBcEMsR0FBRCxDQUFyQixDQUFUO0FBQ0Q7O0FBRUQsVUFBVUUsZUFBVixDQUEwQjtBQUFFL0c7QUFBRixDQUExQixFQUF1QztBQUNyQyxNQUFJO0FBQ0YsVUFBTWEsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVlLDREQUFZQTtBQUFwQixLQUFELENBQVQ7QUFDQSxVQUFNSixJQUFJLEdBQUdELGlFQUFnQixDQUFDLE1BQUQsQ0FBN0I7QUFDQVQsV0FBTyxDQUFDeUcsTUFBUixHQUFpQi9GLElBQUksQ0FBQ2dHLEVBQXRCO0FBQ0EsVUFBTTNGLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDQyw4Q0FBRCxFQUFRLDBCQUF5QmpCLE9BQU8sQ0FBQ2dILFNBQVUsRUFBbkQsRUFBc0QsRUFBdEQsRUFBMEQsRUFBMUQsRUFBOEQsS0FBOUQsQ0FBM0I7O0FBQ0EsUUFBSWpHLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUExQixFQUFpQztBQUMvQixZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUVvRiw2REFBUjtBQUE4Qm5GLGVBQU8sRUFBRWU7QUFBdkMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsWUFBTWYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUVxRiw2REFBUjtBQUE4QnBGLGVBQU8sRUFBRWU7QUFBdkMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0Q7QUFDRixHQVpELENBWUUsT0FBT2pELEtBQVAsRUFBYztBQUNkLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRXFGLDZEQUFSO0FBQThCcEYsYUFBTyxFQUFFckI7QUFBdkMsS0FBRCxDQUFUO0FBQ0EsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLEtBQUQsQ0FBVDtBQUNEOztBQUNELFFBQU1mLDhEQUFHLENBQUM4RiwyRUFBb0IsQ0FBQztBQUFFQyxVQUFNLEVBQUcsV0FBVTVHLE9BQU8sQ0FBQzZHLE1BQU87QUFBcEMsR0FBRCxDQUFyQixDQUFUO0FBQ0Q7O0FBRUQsVUFBVUksaUJBQVYsQ0FBNEI7QUFBRWpIO0FBQUYsQ0FBNUIsRUFBeUM7QUFDdkMsTUFBSTtBQUNGLFVBQU1hLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsS0FBRCxDQUFUO0FBQ0EsVUFBTUosSUFBSSxHQUFHRCxpRUFBZ0IsQ0FBQyxNQUFELENBQTdCO0FBQ0FULFdBQU8sQ0FBQ3lHLE1BQVIsR0FBaUIvRixJQUFJLENBQUNnRyxFQUF0QjtBQUNBLFVBQU0zRixRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2tHLGdEQUFELEVBQVUsNEJBQTJCbEgsT0FBTyxDQUFDZ0gsU0FBVSxFQUF2RCxFQUEwRCxFQUExRCxFQUE4RCxFQUE5RCxFQUFrRSxLQUFsRSxDQUEzQjs7QUFDQSxRQUFJakcsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQTFCLEVBQWlDO0FBQy9CLFlBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRXVGLCtEQUFSO0FBQWdDdEYsZUFBTyxFQUFFZTtBQUF6QyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNZiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRXdGLCtEQUFSO0FBQWdDdkYsZUFBTyxFQUFFZTtBQUF6QyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDtBQUNGLEdBWkQsQ0FZRSxPQUFPakQsS0FBUCxFQUFjO0FBQ2QsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFd0YsK0RBQVI7QUFBZ0N2RixhQUFPLEVBQUVyQjtBQUF6QyxLQUFELENBQVQ7QUFDQSxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsS0FBRCxDQUFUO0FBQ0Q7O0FBQ0QsUUFBTWYsOERBQUcsQ0FBQzhGLDJFQUFvQixDQUFDO0FBQUVDLFVBQU0sRUFBRyxXQUFVNUcsT0FBTyxDQUFDNkcsTUFBTztBQUFwQyxHQUFELENBQXJCLENBQVQ7QUFDRDs7QUFFRCxVQUFVTSxpQkFBVixDQUE0QjtBQUFFbkg7QUFBRixDQUE1QixFQUF5QztBQUN2QyxNQUFJO0FBQ0YsVUFBTWEsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVlLDREQUFZQTtBQUFwQixLQUFELENBQVQ7QUFDQSxVQUFNSixJQUFJLEdBQUdELGlFQUFnQixDQUFDLE1BQUQsQ0FBN0I7QUFDQVQsV0FBTyxDQUFDeUcsTUFBUixHQUFpQi9GLElBQUksQ0FBQ2dHLEVBQXRCO0FBQ0EsVUFBTTNGLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDa0csZ0RBQUQsRUFBVSxxQkFBb0JsSCxPQUFPLENBQUNnSCxTQUFVLEVBQWhELEVBQW1ELEVBQW5ELEVBQXVELEVBQXZELEVBQTJELEtBQTNELENBQTNCOztBQUNBLFFBQUlqRyxRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDcEMsS0FBMUIsRUFBaUM7QUFDL0IsWUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFcUUsK0RBQVI7QUFBZ0NwRSxlQUFPLEVBQUVlO0FBQXpDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNELEtBSEQsTUFHTztBQUNMLFlBQU1mLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFc0UsK0RBQVI7QUFBZ0NyRSxlQUFPLEVBQUVlO0FBQXpDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FaRCxDQVlFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVzRSwrREFBUjtBQUFnQ3JFLGFBQU8sRUFBRXJCO0FBQXpDLEtBQUQsQ0FBVDtBQUNBLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDRDs7QUFDRCxRQUFNZiw4REFBRyxDQUFDOEYsMkVBQW9CLENBQUM7QUFBRUMsVUFBTSxFQUFHLFdBQVU1RyxPQUFPLENBQUM2RyxNQUFPO0FBQXBDLEdBQUQsQ0FBckIsQ0FBVDtBQUNEOztBQUVELFVBQVVPLDBCQUFWLENBQXFDO0FBQUVwSDtBQUFGLENBQXJDLEVBQWtEO0FBQ2hELE1BQUk7QUFDRixVQUFNYSw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRWUsNERBQVlBO0FBQXBCLEtBQUQsQ0FBVDtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDa0csZ0RBQUQsRUFBVSwrQkFBOEJsSCxPQUFPLENBQUNnSCxTQUFVLEVBQTFELEVBQTZELEVBQTdELEVBQWlFLEVBQWpFLEVBQXFFLEtBQXJFLENBQTNCOztBQUNBLFFBQUlqRyxRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDcEMsS0FBMUIsRUFBaUM7QUFDL0IsWUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFd0UseUVBQVI7QUFBMEN2RSxlQUFPLEVBQUVlO0FBQW5ELE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNELEtBSEQsTUFHTztBQUNMLFlBQU1mLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFeUUseUVBQVI7QUFBMEN4RSxlQUFPLEVBQUVlO0FBQW5ELE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FWRCxDQVVFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUV5RSx5RUFBUjtBQUEwQ3hFLGFBQU8sRUFBRXJCO0FBQW5ELEtBQUQsQ0FBVDtBQUNBLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDRDs7QUFDRCxRQUFNZiw4REFBRyxDQUFDOEYsMkVBQW9CLENBQUM7QUFBRUMsVUFBTSxFQUFHLFdBQVU1RyxPQUFPLENBQUM2RyxNQUFPO0FBQXBDLEdBQUQsQ0FBckIsQ0FBVDtBQUNEOztBQUVELFVBQVVRLHdCQUFWLENBQW1DO0FBQUVySDtBQUFGLENBQW5DLEVBQWdEO0FBQzlDLE1BQUk7QUFDRixVQUFNYSw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRWUsNERBQVlBO0FBQXBCLEtBQUQsQ0FBVDtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDa0csZ0RBQUQsRUFBVSw2QkFBNEJsSCxPQUFPLENBQUNzSCxPQUFRLEVBQXRELEVBQXlELEVBQXpELEVBQTZELEVBQTdELEVBQWlFLEtBQWpFLENBQTNCOztBQUNBLFFBQUl2RyxRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDcEMsS0FBMUIsRUFBaUM7QUFDL0IsWUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFaUYsdUVBQVI7QUFBd0NoRixlQUFPLEVBQUVlO0FBQWpELE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNELEtBSEQsTUFHTztBQUNMLFlBQU1mLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFa0YsdUVBQVI7QUFBd0NqRixlQUFPLEVBQUVlO0FBQWpELE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FWRCxDQVVFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVrRix1RUFBUjtBQUF3Q2pGLGFBQU8sRUFBRXJCO0FBQWpELEtBQUQsQ0FBVDtBQUNBLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDRDs7QUFDRCxRQUFNZiw4REFBRyxDQUFDOEYsMkVBQW9CLENBQUM7QUFBRUMsVUFBTSxFQUFHLFdBQVU1RyxPQUFPLENBQUM2RyxNQUFPO0FBQXBDLEdBQUQsQ0FBckIsQ0FBVDtBQUNEOztBQUVELFVBQVVVLGVBQVYsQ0FBMEI7QUFBRXZIO0FBQUYsQ0FBMUIsRUFBdUM7QUFDckMsTUFBSTtBQUNGLFVBQU1hLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsS0FBRCxDQUFUO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUNrRyxnREFBRCxFQUFVLG1CQUFrQmxILE9BQU8sQ0FBQ3NILE9BQVEsRUFBNUMsRUFBK0MsRUFBL0MsRUFBbUQsRUFBbkQsRUFBdUQsS0FBdkQsQ0FBM0I7O0FBQ0EsUUFBSXZHLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUExQixFQUFpQztBQUMvQixZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU4RSw2REFBUjtBQUE4QjdFLGVBQU8sRUFBRWU7QUFBdkMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsWUFBTWYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUUrRSw2REFBUjtBQUE4QjlFLGVBQU8sRUFBRWU7QUFBdkMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0Q7QUFDRixHQVZELENBVUUsT0FBT2pELEtBQVAsRUFBYztBQUNkLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRStFLDZEQUFSO0FBQThCOUUsYUFBTyxFQUFFckI7QUFBdkMsS0FBRCxDQUFUO0FBQ0EsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLEtBQUQsQ0FBVDtBQUNEOztBQUNELFFBQU1mLDhEQUFHLENBQUM4RiwyRUFBb0IsQ0FBQztBQUFFQyxVQUFNLEVBQUcsV0FBVTVHLE9BQU8sQ0FBQzZHLE1BQU87QUFBcEMsR0FBRCxDQUFyQixDQUFUO0FBQ0Q7O0FBRUQsVUFBVVcsYUFBVixDQUF3QjtBQUFFeEg7QUFBRixDQUF4QixFQUFxQztBQUNuQyxNQUFJO0FBQ0YsVUFBTWEsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVlLDREQUFZQTtBQUFwQixLQUFELENBQVQ7QUFDQSxVQUFNSixJQUFJLEdBQUdELGlFQUFnQixDQUFDLE1BQUQsQ0FBN0I7QUFDQVQsV0FBTyxDQUFDeUcsTUFBUixHQUFpQi9GLElBQUksQ0FBQ2dHLEVBQXRCO0FBQ0EsVUFBTTNGLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDQyw4Q0FBRCxFQUFRLHNCQUFxQmpCLE9BQU8sQ0FBQ3NILE9BQVEsRUFBN0MsRUFBZ0QsRUFBaEQsRUFBb0QsRUFBcEQsRUFBd0QsS0FBeEQsQ0FBM0I7O0FBQ0EsUUFBSXZHLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUExQixFQUFpQztBQUMvQixZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUUwRiwyREFBUjtBQUE0QnpGLGVBQU8sRUFBRWU7QUFBckMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsWUFBTWYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUUyRiwyREFBUjtBQUE0QjFGLGVBQU8sRUFBRWU7QUFBckMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0Q7QUFDRixHQVpELENBWUUsT0FBT2pELEtBQVAsRUFBYztBQUNkLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTJGLDJEQUFSO0FBQTRCMUYsYUFBTyxFQUFFckI7QUFBckMsS0FBRCxDQUFUO0FBQ0EsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLEtBQUQsQ0FBVDtBQUNEOztBQUNELFFBQU1mLDhEQUFHLENBQUM4RiwyRUFBb0IsQ0FBQztBQUFFQyxVQUFNLEVBQUcsV0FBVTVHLE9BQU8sQ0FBQzZHLE1BQU87QUFBcEMsR0FBRCxDQUFyQixDQUFUO0FBQ0Q7O0FBRUQsVUFBVVksZUFBVixDQUEwQjtBQUFFekg7QUFBRixDQUExQixFQUF1QztBQUNyQyxNQUFJO0FBQ0YsVUFBTWEsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVlLDREQUFZQTtBQUFwQixLQUFELENBQVQ7QUFDQSxVQUFNSixJQUFJLEdBQUdELGlFQUFnQixDQUFDLE1BQUQsQ0FBN0I7QUFDQVQsV0FBTyxDQUFDeUcsTUFBUixHQUFpQi9GLElBQUksQ0FBQ2dHLEVBQXRCO0FBQ0EsVUFBTTNGLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDa0csZ0RBQUQsRUFBVSx3QkFBdUJsSCxPQUFPLENBQUNzSCxPQUFRLEVBQWpELEVBQW9ELEVBQXBELEVBQXdELEVBQXhELEVBQTRELEtBQTVELENBQTNCOztBQUNBLFFBQUl2RyxRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDcEMsS0FBMUIsRUFBaUM7QUFDL0IsWUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkYsNkRBQVI7QUFBOEI1RixlQUFPLEVBQUVlO0FBQXZDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNELEtBSEQsTUFHTztBQUNMLFlBQU1mLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFOEYsNkRBQVI7QUFBOEI3RixlQUFPLEVBQUVlO0FBQXZDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FaRCxDQVlFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUU4Riw2REFBUjtBQUE4QjdGLGFBQU8sRUFBRXJCO0FBQXZDLEtBQUQsQ0FBVDtBQUNBLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDRDs7QUFDRCxRQUFNZiw4REFBRyxDQUFDOEYsMkVBQW9CLENBQUM7QUFBRUMsVUFBTSxFQUFHLFdBQVU1RyxPQUFPLENBQUM2RyxNQUFPO0FBQXBDLEdBQUQsQ0FBckIsQ0FBVDtBQUNEOztBQUdjLFVBQVUvRCxJQUFWLEdBQWlCO0FBQzlCLFFBQU1DLHFFQUFVLENBQUNpQiwrREFBRCxFQUF5QndDLGlCQUF6QixDQUFoQjtBQUNBLFFBQU16RCxxRUFBVSxDQUFDMEIsNkRBQUQsRUFBdUJxQyxlQUF2QixDQUFoQjtBQUNBLFFBQU0vRCxxRUFBVSxDQUFDbUMsNkRBQUQsRUFBdUI2QixlQUF2QixDQUFoQjtBQUNBLFFBQU1oRSxxRUFBVSxDQUFDc0MsK0RBQUQsRUFBeUI0QixpQkFBekIsQ0FBaEI7QUFDQSxRQUFNbEUscUVBQVUsQ0FBQ29CLCtEQUFELEVBQXlCZ0QsaUJBQXpCLENBQWhCO0FBQ0EsUUFBTXBFLHFFQUFVLENBQUN1Qix5RUFBRCxFQUFtQzhDLDBCQUFuQyxDQUFoQjtBQUNBLFFBQU1yRSxxRUFBVSxDQUFDNkIsNkRBQUQsRUFBdUIyQyxlQUF2QixDQUFoQjtBQUNBLFFBQU14RSxxRUFBVSxDQUFDZ0MsdUVBQUQsRUFBaUNzQyx3QkFBakMsQ0FBaEI7QUFDQSxRQUFNdEUscUVBQVUsQ0FBQ3lDLDJEQUFELEVBQXFCZ0MsYUFBckIsQ0FBaEI7QUFDQSxRQUFNekUscUVBQVUsQ0FBQzRDLDZEQUFELEVBQXVCOEIsZUFBdkIsQ0FBaEI7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUM5TkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQyxVQUFVLEdBQUcsWUFBbkI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBR0EsTUFBTUMsaUJBQWlCLEdBQUdoRSxJQUFJLElBQUk7QUFDckMsVUFBUUEsSUFBUjtBQUNJLFNBQUssWUFBTDtBQUNJLGFBQVE7QUFDSmhFLFlBQUksRUFBRTJIO0FBREYsT0FBUjs7QUFHSixTQUFLLGlCQUFMO0FBQ0ksYUFBUTtBQUNKM0gsWUFBSSxFQUFFNEg7QUFERixPQUFSOztBQUdKLFNBQUssZUFBTDtBQUNJLGFBQVE7QUFDSjVILFlBQUksRUFBRThIO0FBREYsT0FBUjs7QUFHSixTQUFLLFlBQUw7QUFDSSxhQUFRO0FBQ0o5SCxZQUFJLEVBQUU2SDtBQURGLE9BQVI7O0FBR0osU0FBSyxnQkFBTDtBQUNJLGFBQVE7QUFDSjdILFlBQUksRUFBRStIO0FBREYsT0FBUjs7QUFHSjtBQUNJO0FBdEJSO0FBd0JILENBekJNLEM7Ozs7Ozs7Ozs7OztBQ1BQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUUsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBRUEsTUFBTWhGLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLE1BQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLE1BQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUVBLE1BQU0rRSw0QkFBNEIsR0FBRyw4QkFBckM7QUFDQSxNQUFNQyw0QkFBNEIsR0FBRyw4QkFBckM7QUFDQSxNQUFNQyw0QkFBNEIsR0FBRyw4QkFBckM7QUFFQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFFQSxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFHQSxNQUFNQyw2QkFBNkIsR0FBR3hKLE9BQU8sS0FBSztBQUN2REQsTUFBSSxFQUFFaUksd0JBRGlEO0FBRXZEaEk7QUFGdUQsQ0FBTCxDQUE3QztBQUtBLE1BQU15SixtQkFBbUIsR0FBR3pKLE9BQU8sS0FBSztBQUM3Q0QsTUFBSSxFQUFFb0kscUJBRHVDO0FBRTdDbkk7QUFGNkMsQ0FBTCxDQUFuQztBQUtBLE1BQU0wSix3QkFBd0IsR0FBRzFKLE9BQU8sS0FBSztBQUNsREQsTUFBSSxFQUFFdUksMkJBRDRDO0FBRWxEdEk7QUFGa0QsQ0FBTCxDQUF4QztBQUtBLE1BQU0ySix5QkFBeUIsR0FBRzNKLE9BQU8sSUFBSTtBQUNsRGtCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQSxTQUFRO0FBQ05wQixRQUFJLEVBQUUwSSw0QkFEQTtBQUVOekk7QUFGTSxHQUFSO0FBSUQsQ0FOTTtBQVFBLE1BQU00SixtQkFBbUIsR0FBRyxPQUFPO0FBQ3hDN0osTUFBSSxFQUFFNkk7QUFEa0MsQ0FBUCxDQUE1QjtBQUlBLE1BQU1pQixzQkFBc0IsR0FBRzdKLE9BQU8sS0FBSztBQUNoREQsTUFBSSxFQUFFZ0osd0JBRDBDO0FBRWhEL0k7QUFGZ0QsQ0FBTCxDQUF0QztBQUtBLE1BQU04SixRQUFRLEdBQUc5SixPQUFPLEtBQUs7QUFDbENELE1BQUksRUFBRW1KLGlCQUQ0QjtBQUVsQ2xKO0FBRmtDLENBQUwsQ0FBeEI7QUFLQSxNQUFNK0osaUJBQWlCLEdBQUcvSixPQUFPLEtBQUs7QUFDM0NELE1BQUksRUFBRXNKLG1CQURxQztBQUUzQ3JKO0FBRjJDLENBQUwsQ0FBakM7QUFLQSxNQUFNZ0ssd0JBQXdCLEdBQUcsT0FBTztBQUM3Q2pLLE1BQUksRUFBRXlEO0FBRHVDLENBQVAsQ0FBakMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRVA7QUFFQSxNQUFNbEQsWUFBWSxHQUFHO0FBQ2pCQyxNQUFJLEVBQUUsSUFEVztBQUVqQjVCLE9BQUssRUFBRTtBQUZVLENBQXJCO0FBS2UseUVBQVVnQyxLQUFLLEdBQUdMLFlBQWxCLEVBQWdDO0FBQUVQLE1BQUY7QUFBUUM7QUFBUixDQUFoQyxFQUFtRDtBQUM5RCxVQUFRRCxJQUFSO0FBQ0ksU0FBS21KLDBEQUFMO0FBQ0ksNkNBQVl2SSxLQUFaO0FBQW1CaEMsYUFBSyxFQUFFO0FBQTFCOztBQUNKLFNBQUt3SywwREFBTDtBQUNJLDZDQUFZeEksS0FBWjtBQUFtQkosWUFBSSxFQUFFUDtBQUF6Qjs7QUFDSixTQUFLb0osMERBQUw7QUFDSSw2Q0FBWXpJLEtBQVo7QUFBbUJoQyxhQUFLLEVBQUVxQjtBQUExQjs7QUFDSjtBQUNJLGFBQU9XLEtBQVA7QUFSUjtBQVVILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJEO0FBRUEsTUFBTUwsWUFBWSxHQUFHO0FBQ2pCQyxNQUFJLEVBQUUsSUFEVztBQUVqQjVCLE9BQUssRUFBRTtBQUZVLENBQXJCO0FBS2UseUVBQVVnQyxLQUFLLEdBQUdMLFlBQWxCLEVBQWdDO0FBQUVQLE1BQUY7QUFBUUM7QUFBUixDQUFoQyxFQUFtRDtBQUM5RCxVQUFRRCxJQUFSO0FBQ0ksU0FBSzZJLDhEQUFMO0FBQ0ksNkNBQVlqSSxLQUFaO0FBQW1CaEMsYUFBSyxFQUFFO0FBQTFCOztBQUNKLFNBQUtrSyw4REFBTDtBQUNJLDZDQUFZbEksS0FBWjtBQUFtQkosWUFBSSxFQUFFUDtBQUF6Qjs7QUFDSixTQUFLOEksOERBQUw7QUFDSSw2Q0FBWW5JLEtBQVo7QUFBbUJoQyxhQUFLLEVBQUVxQjtBQUExQjs7QUFDSjtBQUNJLGFBQU9XLEtBQVA7QUFSUjtBQVVILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJEO0FBRUEsTUFBTUwsWUFBWSxHQUFHO0FBQ25CQyxNQUFJLEVBQUUsSUFEYTtBQUVuQjVCLE9BQUssRUFBRTtBQUZZLENBQXJCO0FBS2UseUVBQVVnQyxLQUFLLEdBQUdMLFlBQWxCLEVBQWdDO0FBQUVQLE1BQUY7QUFBUUM7QUFBUixDQUFoQyxFQUFtRDtBQUNoRSxVQUFRRCxJQUFSO0FBQ0UsU0FBS2lJLGlFQUFMO0FBQ0UsNkNBQVlySCxLQUFaO0FBQW1CaEMsYUFBSyxFQUFFO0FBQTFCOztBQUNGLFNBQUtzSixpRUFBTDtBQUNFLDZDQUFZdEgsS0FBWjtBQUFtQkosWUFBSSxFQUFFUDtBQUF6Qjs7QUFDRixTQUFLa0ksaUVBQUw7QUFDRSw2Q0FBWXZILEtBQVo7QUFBbUJoQyxhQUFLLEVBQUVxQjtBQUExQjs7QUFDRixTQUFLd0Qsa0VBQUw7QUFDRSw2Q0FBWTdDLEtBQVo7QUFBbUJoQyxhQUFLLEVBQUU7QUFBMUI7O0FBQ0YsU0FBSzhFLGtFQUFMO0FBQ0UsNkNBQVk5QyxLQUFaO0FBQW1CSixZQUFJLEVBQUVQO0FBQXpCOztBQUNGLFNBQUswRCxrRUFBTDtBQUNFLDZDQUFZL0MsS0FBWjtBQUFtQmhDLGFBQUssRUFBRXFCO0FBQTFCOztBQUNGO0FBQ0UsYUFBT1csS0FBUDtBQWRKO0FBZ0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJEO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7O0FBRUEsVUFBVXNKLGtCQUFWLENBQTZCO0FBQUVqSztBQUFGLENBQTdCLEVBQTBDO0FBQ3hDLE1BQUk7QUFDRixVQUFNYSw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRWUsNERBQVlBO0FBQXBCLEtBQUQsQ0FBVDtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDNEMsNkNBQUQsRUFBTSx3QkFBTixFQUFnQzVELE9BQWhDLEVBQXlDLEVBQXpDLEVBQTZDLEtBQTdDLENBQTNCOztBQUNBLFFBQUllLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUExQixFQUFpQztBQUMvQixZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUVrSSxpRUFBUjtBQUFrQ2pJLGVBQU8sRUFBRWU7QUFBM0MsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsWUFBTWYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUVtSSxpRUFBUjtBQUFrQ2xJLGVBQU8sRUFBRWU7QUFBM0MsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0Q7QUFDRixHQVZELENBVUUsT0FBT2pELEtBQVAsRUFBYztBQUNkLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRW1JLGlFQUFSO0FBQWtDbEksYUFBTyxFQUFFckI7QUFBM0MsS0FBRCxDQUFUO0FBQ0EsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLEtBQUQsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsVUFBVXNJLGdCQUFWLENBQTJCO0FBQUVsSztBQUFGLENBQTNCLEVBQXdDO0FBQ3RDLE1BQUk7QUFDRixVQUFNOEQsR0FBRyxHQUFJLHNCQUFxQjlELE9BQU8sQ0FBQ21LLElBQUssRUFBL0M7O0FBQ0EsUUFBSW5LLE9BQU8sQ0FBQ29LLFdBQVosRUFBeUI7QUFDdkIsWUFBTXZKLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsT0FBRCxDQUFUO0FBRUQ7O0FBQ0QsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUM0Qyw2Q0FBRCxFQUFNRSxHQUFOLEVBQVcsRUFBWCxFQUFlOUQsT0FBTyxDQUFDUSxLQUF2QixFQUE4QixLQUE5QixDQUEzQjs7QUFDQSxRQUFJTyxRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDcEMsS0FBMUIsRUFBaUM7QUFDL0IsWUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFcUksOERBQVI7QUFBK0JwSSxlQUFPLEVBQUVlO0FBQXhDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNELEtBSEQsTUFHTztBQUNMLFlBQU1mLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFc0ksOERBQVI7QUFBK0JySSxlQUFPLEVBQUVlO0FBQXhDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FkRCxDQWNFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVzSSw4REFBUjtBQUErQnJJLGFBQU8sRUFBRXJCO0FBQXhDLEtBQUQsQ0FBVDtBQUNBLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDRDtBQUNGOztBQUVELFVBQVV5SSxxQkFBVixDQUFnQztBQUFFcks7QUFBRixDQUFoQyxFQUE2QztBQUMzQyxNQUFJO0FBQ0YsVUFBTTtBQUFFc0ssZ0JBQUY7QUFBY0MsY0FBZDtBQUF3QkosVUFBeEI7QUFBOEIzSjtBQUE5QixRQUF3Q1IsT0FBOUM7O0FBQ0EsUUFBSUEsT0FBTyxDQUFDb0ssV0FBWixFQUF5QjtBQUN2QixZQUFNdkosOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUVlLDREQUFZQTtBQUFwQixPQUFELENBQVQ7QUFDRDs7QUFDRCxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQzRDLDZDQUFELEVBQU8sNEJBQTJCdUcsSUFBSyxlQUFjRyxVQUFXLGFBQVlDLFFBQVMsRUFBckYsRUFBd0YsRUFBeEYsRUFBNEYvSixLQUE1RixFQUFtRyxLQUFuRyxDQUEzQjs7QUFDQSxRQUFJTyxRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDcEMsS0FBMUIsRUFBaUM7QUFDL0IsWUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFd0ksb0VBQVI7QUFBcUN2SSxlQUFPLGtDQUFPZSxRQUFQO0FBQWlCeUosaUJBQU8sRUFBRXhLLE9BQU8sQ0FBQ3dLO0FBQWxDO0FBQTVDLE9BQUQsQ0FBVDtBQUNBLFlBQU0zSiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNZiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRXlJLG9FQUFSO0FBQXFDeEksZUFBTyxFQUFFZTtBQUE5QyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDtBQUNGLEdBYkQsQ0FhRSxPQUFPakQsS0FBUCxFQUFjO0FBQ2R1QyxXQUFPLENBQUNDLEdBQVIsQ0FBWXhDLEtBQVo7QUFDQSxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUV5SSxvRUFBUjtBQUFxQ3hJLGFBQU8sRUFBRXJCO0FBQTlDLEtBQUQsQ0FBVDtBQUNBLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDRDtBQUNGOztBQUVELFVBQVU2SSxzQkFBVixDQUFpQztBQUFFeks7QUFBRixDQUFqQyxFQUE4QztBQUM1QyxNQUFJMEsseURBQVEsRUFBWixFQUFnQjtBQUNkLFFBQUk7QUFDRixZQUFNN0osOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUVlLDREQUFZQTtBQUFwQixPQUFELENBQVQ7QUFDQSxZQUFNQyxRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQzRDLDZDQUFELEVBQU8sMkJBQVAsRUFBbUMsRUFBbkMsRUFBdUMsRUFBdkMsRUFBMkMsS0FBM0MsQ0FBM0I7O0FBQ0EsVUFBSTdDLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUExQixFQUFpQztBQUMvQixjQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxjQUFJLEVBQUUySSxxRUFBUjtBQUFzQzFJLGlCQUFPLEVBQUVlO0FBQS9DLFNBQUQsQ0FBVDtBQUNBLGNBQU1GLDhEQUFHLENBQUM7QUFBRWQsY0FBSSxFQUFFNkIsMERBQVVBO0FBQWxCLFNBQUQsQ0FBVDtBQUNELE9BSEQsTUFHTztBQUNMLGNBQU1mLDhEQUFHLENBQUM7QUFBRWQsY0FBSSxFQUFFNEkscUVBQVI7QUFBc0MzSSxpQkFBTyxFQUFFZTtBQUEvQyxTQUFELENBQVQ7QUFDQSxjQUFNRiw4REFBRyxDQUFDO0FBQUVkLGNBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixTQUFELENBQVQ7QUFDRDtBQUNGLEtBVkQsQ0FVRSxPQUFPakQsS0FBUCxFQUFjO0FBQ2QsWUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNEkscUVBQVI7QUFBc0MzSSxlQUFPLEVBQUVyQjtBQUEvQyxPQUFELENBQVQ7QUFDQSxZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFVBQVUrSSxnQkFBVixDQUEyQjtBQUFFM0s7QUFBRixDQUEzQixFQUF3QztBQUN0QyxNQUFJO0FBQ0YsVUFBTWEsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVlLDREQUFZQTtBQUFwQixLQUFELENBQVQ7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQzRDLDZDQUFELEVBQU8seUJBQVAsRUFBaUMsRUFBakMsRUFBcUMsRUFBckMsRUFBeUMsS0FBekMsQ0FBM0I7O0FBQ0EsUUFBSTdDLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUExQixFQUFpQztBQUMvQixZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU4SSw4REFBUjtBQUErQjdJLGVBQU8sRUFBRWU7QUFBeEMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsWUFBTWYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUUrSSw4REFBUjtBQUErQjlJLGVBQU8sRUFBRWU7QUFBeEMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0Q7QUFDRixHQVZELENBVUUsT0FBT2pELEtBQVAsRUFBYztBQUNkLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRStJLDhEQUFSO0FBQStCOUksYUFBTyxFQUFFckI7QUFBeEMsS0FBRCxDQUFUO0FBQ0EsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLEtBQUQsQ0FBVDtBQUNEO0FBQ0Y7O0FBR0QsVUFBVWdKLFlBQVYsQ0FBdUI7QUFBRTVLO0FBQUYsQ0FBdkIsRUFBb0M7QUFDbEMsTUFBSTtBQUNGLFVBQU1hLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsS0FBRCxDQUFUO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUM0Qyw2Q0FBRCxFQUFPLHdCQUF1QjVELE9BQU8sQ0FBQ21LLElBQUssRUFBM0MsRUFBOEMsRUFBOUMsRUFBa0QsRUFBbEQsRUFBc0QsS0FBdEQsQ0FBM0I7O0FBQ0EsUUFBSXBKLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUExQixFQUFpQztBQUMvQixZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUVvSiwwREFBUjtBQUEyQm5KLGVBQU8sRUFBRWU7QUFBcEMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsWUFBTWYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUVxSiwwREFBUjtBQUEyQnBKLGVBQU8sRUFBRWU7QUFBcEMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0Q7QUFDRixHQVZELENBVUUsT0FBT2pELEtBQVAsRUFBYztBQUNkLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRXFKLDBEQUFSO0FBQTJCcEosYUFBTyxFQUFFckI7QUFBcEMsS0FBRCxDQUFUO0FBQ0EsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLEtBQUQsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsVUFBVWlKLGNBQVYsQ0FBeUI7QUFBRTdLO0FBQUYsQ0FBekIsRUFBc0M7QUFDcEMsTUFBSTtBQUNGLFVBQU1hLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsS0FBRCxDQUFUO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUNrRyxnREFBRCxFQUFVLDhCQUFWLEVBQXlDbEgsT0FBekMsRUFBa0QsRUFBbEQsRUFBc0QsS0FBdEQsQ0FBM0I7O0FBQ0EsUUFBSWUsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQTFCLEVBQWlDO0FBQy9CLFlBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRXVKLDREQUFSO0FBQTZCdEosZUFBTyxFQUFFZTtBQUF0QyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNZiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRXdKLDREQUFSO0FBQTZCdkosZUFBTyxFQUFFZTtBQUF0QyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDtBQUNGLEdBVkQsQ0FVRSxPQUFPakQsS0FBUCxFQUFjO0FBQ2QsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFd0osNERBQVI7QUFBNkJ2SixhQUFPLEVBQUVyQjtBQUF0QyxLQUFELENBQVQ7QUFDQSxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsS0FBRCxDQUFUO0FBQ0Q7O0FBQ0QsUUFBTWYsOERBQUcsQ0FBQzRJLG9FQUFtQixDQUFDO0FBQUVVLFFBQUksRUFBRW5LLE9BQU8sQ0FBQ21LO0FBQWhCLEdBQUQsQ0FBcEIsQ0FBVDtBQUNBLFFBQU10Siw4REFBRyxDQUFDaUoseURBQVEsQ0FBQztBQUFFSyxRQUFJLEVBQUVuSyxPQUFPLENBQUNtSztBQUFoQixHQUFELENBQVQsQ0FBVDtBQUNEOztBQUVELFVBQVVXLGVBQVYsQ0FBMEI7QUFBRTlLO0FBQUYsQ0FBMUIsRUFBdUM7QUFDckMsTUFBSTtBQUNGLFVBQU1hLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsS0FBRCxDQUFUO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUMrSixxREFBRCxFQUFlLGtCQUFmLEVBQWtDL0ssT0FBbEMsRUFBMkMsRUFBM0MsQ0FBM0I7O0FBQ0EsUUFBSWUsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQTFCLEVBQWlDO0FBQy9CLFlBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRWlKLGlFQUFSO0FBQWtDaEosZUFBTyxFQUFFZTtBQUEzQyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNZiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRWtKLGlFQUFSO0FBQWtDakosZUFBTyxFQUFFZTtBQUEzQyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDtBQUNGLEdBVkQsQ0FVRSxPQUFPakQsS0FBUCxFQUFjO0FBQ2QsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFa0osaUVBQVI7QUFBa0NqSixhQUFPLEVBQUVyQjtBQUEzQyxLQUFELENBQVQ7QUFDQSxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsS0FBRCxDQUFUO0FBQ0Q7O0FBQ0QsUUFBTWYsOERBQUcsQ0FBQzRJLG9FQUFtQixDQUFDO0FBQUVVLFFBQUksRUFBRW5LLE9BQU8sQ0FBQ21LO0FBQWhCLEdBQUQsQ0FBcEIsQ0FBVDtBQUNEOztBQUVELFVBQVVhLFVBQVYsR0FBdUI7QUFDckIsTUFBSTtBQUNGLFVBQU1uSyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRWUsNERBQVlBO0FBQXBCLEtBQUQsQ0FBVDtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDNEMsNkNBQUQsRUFBTyxtQkFBUCxFQUEyQixFQUEzQixFQUErQixFQUEvQixFQUFtQyxLQUFuQyxDQUEzQjs7QUFDQSxRQUFJN0MsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQTFCLEVBQWlDO0FBQy9CLFlBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTBELGtFQUFSO0FBQW1DekQsZUFBTyxFQUFFZTtBQUE1QyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNZiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTJELGtFQUFSO0FBQW1DMUQsZUFBTyxFQUFFZTtBQUE1QyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDtBQUNGLEdBVkQsQ0FVRSxPQUFPakQsS0FBUCxFQUFjO0FBQ2QsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFMkQsa0VBQVI7QUFBbUMxRCxhQUFPLEVBQUVyQjtBQUE1QyxLQUFELENBQVQ7QUFDQSxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsS0FBRCxDQUFUO0FBQ0Q7QUFDRjs7QUFFYyxVQUFVa0IsSUFBVixHQUFpQjtBQUM5QixRQUFNQyxxRUFBVSxDQUFDaUYsaUVBQUQsRUFBMkJpQyxrQkFBM0IsQ0FBaEI7QUFDQSxRQUFNbEgscUVBQVUsQ0FBQ29GLDhEQUFELEVBQXdCK0IsZ0JBQXhCLENBQWhCO0FBQ0EsUUFBTW5ILHFFQUFVLENBQUMwRixxRUFBRCxFQUErQmdDLHNCQUEvQixDQUFoQjtBQUNBLFFBQU0xSCxxRUFBVSxDQUFDNkYsOERBQUQsRUFBd0IrQixnQkFBeEIsQ0FBaEI7QUFDQSxRQUFNNUgscUVBQVUsQ0FBQ2dHLGlFQUFELEVBQTJCK0IsZUFBM0IsQ0FBaEI7QUFDQSxRQUFNL0gscUVBQVUsQ0FBQ21HLDBEQUFELEVBQW9CMEIsWUFBcEIsQ0FBaEI7QUFDQSxRQUFNN0gscUVBQVUsQ0FBQ3NHLDREQUFELEVBQXNCd0IsY0FBdEIsQ0FBaEI7QUFDQSxRQUFNOUgscUVBQVUsQ0FBQ1Msa0VBQUQsRUFBNEJ3SCxVQUE1QixDQUFoQjtBQUNBLFFBQU1qSSxxRUFBVSxDQUFDdUYsb0VBQUQsRUFBOEIrQixxQkFBOUIsQ0FBaEI7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pNRDtBQUlBO0FBQ0E7QUFDQTtBQUVBLE1BQU0vSixZQUFZLEdBQUc7QUFDakIySyxXQUFTLEVBQUU7QUFBRUMsV0FBTyxFQUFFO0FBQVgsR0FETTtBQUVqQjNLLE1BQUksRUFBRSxJQUZXO0FBR2pCNUIsT0FBSyxFQUFFO0FBSFUsQ0FBckI7QUFNZSx5RUFBVWdDLEtBQUssR0FBR0wsWUFBbEIsRUFBZ0M7QUFBRVAsTUFBRjtBQUFRQztBQUFSLENBQWhDLEVBQW1EO0FBQzlELFVBQVFELElBQVI7QUFDSSxTQUFLb0ksOERBQUw7QUFDSSw2Q0FBWXhILEtBQVo7QUFBbUJoQyxhQUFLLEVBQUU7QUFBMUI7O0FBQ0osU0FBS3lKLDhEQUFMO0FBQ0ksNkNBQVl6SCxLQUFaO0FBQW1CSixZQUFJLEVBQUVQO0FBQXpCOztBQUNKLFNBQUtxSSw4REFBTDtBQUNJLDZDQUFZMUgsS0FBWjtBQUFtQmhDLGFBQUssRUFBRXFCO0FBQTFCOztBQUNKLFNBQUtzSSxvRUFBTDtBQUNJLDZDQUFZM0gsS0FBWjtBQUFtQmhDLGFBQUssRUFBRTtBQUExQjs7QUFDSixTQUFLNEosb0VBQUw7QUFDSSxVQUFJdkksT0FBTyxDQUFDd0ssT0FBWixFQUFxQjtBQUNqQixjQUFNVSxPQUFPLEdBQUdDLCtFQUF3QixDQUFDeEssS0FBSyxDQUFDc0ssU0FBTixDQUFnQkMsT0FBakIsRUFBMEJsTCxPQUFPLENBQUNrTCxPQUFsQyxDQUF4QztBQUNBbEwsZUFBTyxDQUFDa0wsT0FBUixHQUFrQkEsT0FBbEI7QUFDQSwrQ0FBWXZLLEtBQVo7QUFBbUJzSyxtQkFBUyxFQUFFakw7QUFBOUI7QUFDSCxPQUpELE1BSU87QUFDSCxjQUFNb0wsVUFBVSxHQUFHekssS0FBSyxDQUFDc0ssU0FBTixDQUFnQkMsT0FBbkM7QUFDQSxjQUFNRyxTQUFTLEdBQUdELFVBQVUsQ0FBQ0UsTUFBWCxDQUFrQnRMLE9BQU8sQ0FBQ2tMLE9BQTFCLENBQWxCO0FBQ0FsTCxlQUFPLENBQUNrTCxPQUFSLEdBQWtCRyxTQUFsQjtBQUNBLCtDQUFZMUssS0FBWjtBQUFtQnNLLG1CQUFTLEVBQUVqTDtBQUE5QjtBQUNIOztBQUNMLFNBQUt3SSxvRUFBTDtBQUNJLDZDQUFZN0gsS0FBWjtBQUFtQmhDLGFBQUssRUFBRXFCO0FBQTFCOztBQUNKLFNBQUt1TCx1RUFBTDtBQUNJLFlBQU1DLElBQUksR0FBRyxDQUFDLEdBQUc3SyxLQUFLLENBQUNzSyxTQUFOLENBQWdCQyxPQUFwQixDQUFiO0FBQ0EsWUFBTU8sT0FBTyxHQUFHRCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsQ0FBQyxJQUFJQSxDQUFDLENBQUNqRixFQUFGLEtBQVMxRyxPQUFPLENBQUM0TCxXQUFsQyxDQUFoQjtBQUNBNUwsYUFBTyxDQUFDa0wsT0FBUixHQUFrQk8sT0FBbEI7QUFDQSw2Q0FBWTlLLEtBQVo7QUFBbUJzSyxpQkFBUyxFQUFFakw7QUFBOUI7O0FBQ0osU0FBSzJILDhEQUFMO0FBQ0ksWUFBTWtFLFFBQVEsR0FBRztBQUNiWixpQkFBUyxFQUFFO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQURFO0FBRWIzSyxZQUFJLEVBQUUsSUFGTztBQUdiNUIsYUFBSyxFQUFFO0FBSE0sT0FBakI7QUFLQSwrQkFBWWtOLFFBQVo7O0FBQ0o7QUFDSSxhQUFPbEwsS0FBUDtBQW5DUjtBQXFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BERDtBQUVBLE1BQU1MLFlBQVksR0FBRztBQUNqQkMsTUFBSSxFQUFFLElBRFc7QUFFakI1QixPQUFLLEVBQUU7QUFGVSxDQUFyQjtBQUtlLHlFQUFVZ0MsS0FBSyxHQUFHTCxZQUFsQixFQUFnQztBQUFFUCxNQUFGO0FBQVFDO0FBQVIsQ0FBaEMsRUFBbUQ7QUFDOUQsVUFBUUQsSUFBUjtBQUNJLFNBQUswSSxxRUFBTDtBQUNJdkgsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLDZDQUFZUixLQUFaO0FBQW1CaEMsYUFBSyxFQUFFO0FBQTFCOztBQUNKLFNBQUsrSixxRUFBTDtBQUNJLDZDQUFZL0gsS0FBWjtBQUFtQkosWUFBSSxFQUFFUDtBQUF6Qjs7QUFDSixTQUFLMkkscUVBQUw7QUFDSSw2Q0FBWWhJLEtBQVo7QUFBbUJoQyxhQUFLLEVBQUVxQjtBQUExQjs7QUFDSjtBQUNJLGFBQU9XLEtBQVA7QUFUUjtBQVdILEM7Ozs7Ozs7Ozs7OztBQ25CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1tTCx5QkFBeUIsR0FBRywyQkFBbEM7QUFDQSxNQUFNQyx5QkFBeUIsR0FBRywyQkFBbEM7QUFDQSxNQUFNQyx5QkFBeUIsR0FBRywyQkFBbEM7QUFFQSxNQUFNQywrQkFBK0IsR0FBRyxpQ0FBeEM7QUFDQSxNQUFNQywrQkFBK0IsR0FBRyxpQ0FBeEM7QUFDQSxNQUFNQywrQkFBK0IsR0FBRyxpQ0FBeEM7QUFFQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxNQUFNQyx1QkFBdUIsR0FBRyxPQUFPO0FBQzVDeE0sTUFBSSxFQUFFK0w7QUFEc0MsQ0FBUCxDQUFoQztBQUlBLE1BQU1VLDRCQUE0QixHQUFHeE0sT0FBTyxLQUFLO0FBQ3RERCxNQUFJLEVBQUVrTSwrQkFEZ0Q7QUFFdERqTTtBQUZzRCxDQUFMLENBQTVDO0FBS0EsTUFBTXlNLGtCQUFrQixHQUFHek0sT0FBTyxLQUFLO0FBQzVDRCxNQUFJLEVBQUVxTSxvQkFEc0M7QUFFNUNwTTtBQUY0QyxDQUFMLENBQWxDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJQO0FBRUEsTUFBTU0sWUFBWSxHQUFHO0FBQ2pCQyxNQUFJLEVBQUUsSUFEVztBQUVqQjVCLE9BQUssRUFBRTtBQUZVLENBQXJCO0FBS2UseUVBQVVnQyxLQUFLLEdBQUdMLFlBQWxCLEVBQWdDO0FBQUVQLE1BQUY7QUFBUUM7QUFBUixDQUFoQyxFQUFtRDtBQUM5RCxVQUFRRCxJQUFSO0FBQ0ksU0FBS2tNLHdFQUFMO0FBQ0ksNkNBQVl0TCxLQUFaO0FBQW1CaEMsYUFBSyxFQUFFO0FBQTFCOztBQUNKLFNBQUt1Tix3RUFBTDtBQUNJLDZDQUFZdkwsS0FBWjtBQUFtQkosWUFBSSxFQUFFUDtBQUF6Qjs7QUFDSixTQUFLbU0sd0VBQUw7QUFDSSw2Q0FBWXhMLEtBQVo7QUFBbUJoQyxhQUFLLEVBQUVxQjtBQUExQjs7QUFDSjtBQUNJLGFBQU9XLEtBQVA7QUFSUjtBQVVILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJEO0FBRUEsTUFBTUwsWUFBWSxHQUFHO0FBQ25CQyxNQUFJLEVBQUUsSUFEYTtBQUVuQjVCLE9BQUssRUFBRTtBQUZZLENBQXJCO0FBS2UseUVBQVVnQyxLQUFLLEdBQUdMLFlBQWxCLEVBQWdDO0FBQUVQLE1BQUY7QUFBUUM7QUFBUixDQUFoQyxFQUFtRDtBQUNoRSxVQUFRRCxJQUFSO0FBQ0UsU0FBSytMLGtFQUFMO0FBQ0UsNkNBQVluTCxLQUFaO0FBQW1CaEMsYUFBSyxFQUFFO0FBQTFCOztBQUNGLFNBQUtvTixrRUFBTDtBQUNFLDZDQUFZcEwsS0FBWjtBQUFtQkosWUFBSSxFQUFFUDtBQUF6Qjs7QUFDRixTQUFLZ00sa0VBQUw7QUFDRSw2Q0FBWXJMLEtBQVo7QUFBbUJoQyxhQUFLLEVBQUVxQjtBQUExQjs7QUFDRjtBQUNFLGFBQU9XLEtBQVA7QUFSSjtBQVVELEM7Ozs7Ozs7Ozs7OztBQ2xCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7OztBQUNHO0FBQ0g7O0FBRUEsVUFBVStMLG9CQUFWLEdBQWlDO0FBQy9CLE1BQUloQyx5REFBUSxFQUFaLEVBQWdCO0FBQ2QsUUFBSTtBQUNGLFlBQU03Siw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRWUsNERBQVlBO0FBQXBCLE9BQUQsQ0FBVDtBQUNBLFlBQU1DLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDNEMsNkNBQUQsRUFBTyxzQkFBUCxFQUE4QixFQUE5QixFQUFrQyxFQUFsQyxFQUFzQyxLQUF0QyxDQUEzQjs7QUFDQSxVQUFJN0MsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQTFCLEVBQWlDO0FBQy9CLGNBQU1rQyw4REFBRyxDQUFDO0FBQUVkLGNBQUksRUFBRWdNLGtFQUFSO0FBQW1DL0wsaUJBQU8sRUFBRWU7QUFBNUMsU0FBRCxDQUFUO0FBQ0EsY0FBTUYsOERBQUcsQ0FBQztBQUFFZCxjQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsU0FBRCxDQUFUO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsY0FBTWYsOERBQUcsQ0FBQztBQUFFZCxjQUFJLEVBQUVpTSxrRUFBUjtBQUFtQ2hNLGlCQUFPLEVBQUVlO0FBQTVDLFNBQUQsQ0FBVDtBQUNBLGNBQU1GLDhEQUFHLENBQUM7QUFBRWQsY0FBSSxFQUFFNkIsMERBQVVBO0FBQWxCLFNBQUQsQ0FBVDtBQUNEO0FBQ0YsS0FWRCxDQVVFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUVpTSxrRUFBUjtBQUFtQ2hNLGVBQU8sRUFBRXJCO0FBQTVDLE9BQUQsQ0FBVDtBQUNBLFlBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsVUFBVStLLHlCQUFWLENBQW9DO0FBQUUzTTtBQUFGLENBQXBDLEVBQWlEO0FBQy9DLE1BQUk7QUFDRixVQUFNVSxJQUFJLEdBQUdELGlFQUFnQixDQUFDLE1BQUQsQ0FBN0I7QUFDQSxVQUFNSSw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRWUsNERBQVlBO0FBQXBCLEtBQUQsQ0FBVDtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDNEMsNkNBQUQsRUFBTyw2QkFBNEI1RCxPQUFPLENBQUMwRyxFQUFHLEVBQTlDLEVBQWlELEVBQWpELEVBQXFELEVBQXJELEVBQXlELEtBQXpELENBQTNCOztBQUNBLFFBQUkzRixRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDcEMsS0FBMUIsRUFBaUM7QUFDL0IsWUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFbU0sd0VBQVI7QUFBeUNsTSxlQUFPLEVBQUVlO0FBQWxELE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNELEtBSEQsTUFHTztBQUNMLFlBQU1mLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFb00sd0VBQVI7QUFBeUNuTSxlQUFPLEVBQUVlO0FBQWxELE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FYRCxDQVdFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVvTSx3RUFBUjtBQUF5Q25NLGFBQU8sRUFBRXJCO0FBQWxELEtBQUQsQ0FBVDtBQUNBLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDRDtBQUNGOztBQUVELFVBQVVnTCxlQUFWLENBQTBCO0FBQUU1TTtBQUFGLENBQTFCLEVBQXVDO0FBQ3JDLE1BQUk2TSxnQkFBZ0IsR0FBRyxFQUF2Qjs7QUFDQSxNQUFJO0FBQ0YsVUFBTW5NLElBQUksR0FBR0QsaUVBQWdCLENBQUMsTUFBRCxDQUE3QjtBQUNBVCxXQUFPLENBQUM4TSxRQUFSLEdBQW1CcE0sSUFBSSxDQUFDZ0csRUFBeEI7QUFDQSxVQUFNN0YsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVlLDREQUFZQTtBQUFwQixLQUFELENBQVQ7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0MsOENBQUQsRUFBUSxnQkFBUixFQUF5QmpCLE9BQXpCLEVBQWtDLEVBQWxDLEVBQXNDLEtBQXRDLENBQTNCO0FBQ0E2TSxvQkFBZ0IsR0FBRzlMLFFBQW5COztBQUNBLFFBQUlBLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUExQixFQUFpQztBQUMvQixZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUVzTSw2REFBUjtBQUE4QnJNLGVBQU8sRUFBRWU7QUFBdkMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsWUFBTWYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUV1TSw2REFBUjtBQUE4QnRNLGVBQU8sRUFBRWU7QUFBdkMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0Q7QUFDRixHQWJELENBYUUsT0FBT2pELEtBQVAsRUFBYztBQUNkLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRXVNLDZEQUFSO0FBQThCdE0sYUFBTyxFQUFFckI7QUFBdkMsS0FBRCxDQUFUO0FBQ0EsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLEtBQUQsQ0FBVDtBQUNEOztBQUNELFFBQU1mLDhEQUFHLENBQUMyTCw2RUFBNEIsQ0FBQztBQUFFOUYsTUFBRSxFQUFFbUcsZ0JBQWdCLENBQUNFO0FBQXZCLEdBQUQsQ0FBN0IsQ0FBVDs7QUFDQSxNQUFJLENBQUMvTSxPQUFPLENBQUMrTSxjQUFiLEVBQTZCO0FBQzNCLFVBQU1sTSw4REFBRyxDQUFDYSxJQUFJLENBQUMsT0FBRCxDQUFMLENBQVQ7QUFDQSxVQUFNYiw4REFBRyxDQUFDMEwsd0VBQXVCLEVBQXhCLENBQVQ7QUFDRDtBQUNGOztBQUVjLFVBQVV6SixJQUFWLEdBQWlCO0FBQzlCLFFBQU1DLHFFQUFVLENBQUMrSSxrRUFBRCxFQUE0Qlksb0JBQTVCLENBQWhCO0FBQ0EsUUFBTTNKLHFFQUFVLENBQUNrSix3RUFBRCxFQUFrQ1UseUJBQWxDLENBQWhCO0FBQ0EsUUFBTTVKLHFFQUFVLENBQUNxSiw2REFBRCxFQUF1QlEsZUFBdkIsQ0FBaEI7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUM3RUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTWpMLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1LLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUVBLE1BQU0rSyxTQUFTLEdBQUcsV0FBbEI7QUFFQSxNQUFNQyxlQUFlLEdBQUd0TyxLQUFLLEtBQUs7QUFDckNvQixNQUFJLEVBQUVwQixLQUFLLElBQUksVUFBVCxHQUFzQnNELG9CQUF0QixHQUE2Q3RELEtBQUssSUFBSSxPQUFULEdBQW1CcUQsaUJBQW5CLEdBQy9DckQsS0FBSyxJQUFJLE9BQVQsR0FBbUJnRCxpQkFBbkIsR0FBdUNxTDtBQUZOLENBQUwsQ0FBN0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSUDtBQUVBLE1BQU0xTSxZQUFZLEdBQUc7QUFDakI0TSxZQUFVLEVBQUUsS0FESztBQUVqQkMsWUFBVSxFQUFFLEtBRks7QUFHakJDLGVBQWEsRUFBRTtBQUhFLENBQXJCO0FBTWUseUVBQVV6TSxLQUFLLEdBQUdMLFlBQWxCLEVBQWdDO0FBQUVQO0FBQUYsQ0FBaEMsRUFBMEM7QUFDckQsVUFBUUEsSUFBUjtBQUNJLFNBQUs0QiwwREFBTDtBQUNJLDZDQUFZaEIsS0FBWjtBQUFtQnVNLGtCQUFVLEVBQUU7QUFBL0I7O0FBQ0osU0FBS2xMLDBEQUFMO0FBQ0ksNkNBQVlyQixLQUFaO0FBQW1Cd00sa0JBQVUsRUFBRTtBQUEvQjs7QUFDSixTQUFLbEwsNkRBQUw7QUFDSSw2Q0FBWXRCLEtBQVo7QUFBbUJ5TSxxQkFBYSxFQUFFO0FBQWxDOztBQUNKLFNBQUtKLGtEQUFMO0FBQ0ksNkNBQVlyTSxLQUFaO0FBQW1CeU0scUJBQWEsRUFBRSxLQUFsQztBQUF5Q0Ysa0JBQVUsRUFBRSxLQUFyRDtBQUE0REMsa0JBQVUsRUFBRTtBQUF4RTs7QUFDSjtBQUNJLGFBQU94TSxLQUFQO0FBVlI7QUFZSCxDOzs7Ozs7Ozs7Ozs7QUNyQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTStCLFlBQVksR0FBRzJLLE1BQU0sQ0FBQzNLLFlBQVAsSUFBdUIySyxNQUFNLENBQUMzSyxZQUFQLENBQW9CNEssVUFBM0MsR0FDZkQsTUFBTSxDQUFDM0ssWUFEUSxHQUVkLFlBQVk7QUFDWCxNQUFJNkssS0FBSyxHQUFHLEVBQVo7QUFDQSxTQUFPO0FBQ0hDLFdBQU8sQ0FBQ0MsR0FBRCxFQUFNO0FBQ1QsYUFBT0YsS0FBSyxDQUFDRSxHQUFELENBQUwsSUFBYyxJQUFyQjtBQUNILEtBSEU7O0FBSUhDLFdBQU8sQ0FBQ0QsR0FBRCxFQUFNRSxLQUFOLEVBQWE7QUFDaEJKLFdBQUssQ0FBQ0UsR0FBRCxDQUFMLEdBQWFFLEtBQUssQ0FBQ0MsUUFBTixFQUFiO0FBQ0gsS0FORTs7QUFPSGpMLFNBQUssR0FBRztBQUNKNEssV0FBSyxHQUFHLEVBQVI7QUFDSCxLQVRFOztBQVVIRCxjQUFVLENBQUNHLEdBQUQsRUFBTTtBQUNaRixXQUFLLEdBQUdNLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxLQUFaLEVBQ0g3QixNQURHLENBQ0lxQyxDQUFDLElBQUlOLEdBQUcsS0FBS00sQ0FEakIsRUFFSEMsTUFGRyxDQUVJLENBQUNDLFdBQUQsRUFBY0MsV0FBZCxLQUE4QjtBQUNsQ0QsbUJBQVcsQ0FBQ0MsV0FBRCxDQUFYLEdBQTJCWCxLQUFLLENBQUNXLFdBQUQsQ0FBaEM7QUFDQSxlQUFPRCxXQUFQO0FBQ0gsT0FMRyxFQUtELEVBTEMsQ0FBUjtBQU1IOztBQWpCRSxHQUFQO0FBbUJILENBckJFLEVBRlA7QUF5Qk8sTUFBTXhOLGdCQUFnQixHQUFJZ04sR0FBRCxJQUFTO0FBQ3JDLE1BQUlVLEtBQUssQ0FBQ0MsT0FBTixDQUFjWCxHQUFkLENBQUosRUFBd0I7QUFDcEIsV0FBT1ksMkRBQVMsQ0FBQ1osR0FBRyxDQUFDYSxHQUFKLENBQVFQLENBQUMsSUFBSSxDQUFDQSxDQUFELEVBQUlyTCxZQUFZLENBQUM4SyxPQUFiLENBQXFCTyxDQUFyQixLQUEyQjdMLElBQUksQ0FBQ3FNLEtBQUwsQ0FBVzdMLFlBQVksQ0FBQzhLLE9BQWIsQ0FBcUJPLENBQXJCLENBQVgsQ0FBL0IsQ0FBYixDQUFELENBQWhCO0FBQ0g7O0FBQ0QsU0FBT3JMLFlBQVksQ0FBQzhLLE9BQWIsQ0FBcUJDLEdBQXJCLEtBQTZCdkwsSUFBSSxDQUFDcU0sS0FBTCxDQUFXN0wsWUFBWSxDQUFDOEssT0FBYixDQUFxQkMsR0FBckIsQ0FBWCxDQUFwQztBQUNILENBTE07QUFPQSxNQUFNZSxTQUFTLEdBQUlmLEdBQUQsSUFBUztBQUM5QixNQUFJO0FBQ0EsVUFBTWdCLGVBQWUsR0FBRy9MLFlBQVksQ0FBQzhLLE9BQWIsQ0FBcUJDLEdBQXJCLENBQXhCOztBQUNBLFFBQUlnQixlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDMUIsYUFBT0MsU0FBUDtBQUNIOztBQUNELFdBQU94TSxJQUFJLENBQUNxTSxLQUFMLENBQVdFLGVBQVgsQ0FBUDtBQUNILEdBTkQsQ0FNRSxPQUFPRSxHQUFQLEVBQVk7QUFDVixXQUFPRCxTQUFQO0FBQ0g7QUFDSixDQVZNO0FBYUEsTUFBTUUsbUJBQW1CLEdBQUlDLEdBQUQsSUFBUztBQUN4QyxRQUFNQyxPQUFPLEdBQUdDLDREQUFZLENBQUNGLEdBQUQsQ0FBNUI7QUFDQSxTQUFPQyxPQUFPLElBQUlBLE9BQU8sQ0FBQ3RPLEtBQW5CLElBQTRCc08sT0FBTyxDQUFDcE8sSUFBM0M7QUFDSCxDQUhNO0FBTUEsTUFBTVcsaUJBQWlCLEdBQUcsQ0FBQ29NLEdBQUQsRUFBTUUsS0FBTixLQUFnQjtBQUM3QyxRQUFNRyxJQUFJLEdBQUcsT0FBT0wsR0FBUCxLQUFlLFFBQWYsR0FBMEJBLEdBQTFCLEdBQWdDO0FBQUUsS0FBQ0EsR0FBRCxHQUFPRTtBQUFULEdBQTdDO0FBQ0FFLFFBQU0sQ0FBQ21CLE9BQVAsQ0FBZWxCLElBQWYsRUFBcUJRLEdBQXJCLENBQXlCLENBQUMsQ0FBQ1AsQ0FBRCxFQUFJa0IsR0FBSixDQUFELEtBQWN2TSxZQUFZLENBQUNnTCxPQUFiLENBQXFCSyxDQUFyQixFQUF3QjdMLElBQUksQ0FBQ0MsU0FBTCxDQUFlOE0sR0FBZixDQUF4QixDQUF2QztBQUNBLFNBQU9uQixJQUFQO0FBQ0gsQ0FKTTtBQU1BLE1BQU1yTCxrQkFBa0IsR0FBSWdMLEdBQUQsSUFBUztBQUN2QyxRQUFNSyxJQUFJLEdBQUdLLEtBQUssQ0FBQ0MsT0FBTixDQUFjWCxHQUFkLElBQXFCQSxHQUFyQixHQUEyQixDQUFDQSxHQUFELENBQXhDO0FBQ0FLLE1BQUksQ0FBQ29CLE9BQUwsQ0FBYW5CLENBQUMsSUFBSXJMLFlBQVksQ0FBQzRLLFVBQWIsQ0FBd0JTLENBQXhCLENBQWxCO0FBQ0EsU0FBT0QsSUFBUDtBQUNILENBSk07QUFNQSxNQUFNcUIsaUJBQWlCLEdBQUcsTUFBTTtBQUNuQ3pNLGNBQVksQ0FBQ0MsS0FBYjtBQUNILENBRk07QUFJQSxNQUFNeU0sZUFBZSxHQUFHQyxNQUFNLElBQUl4QixNQUFNLENBQUNDLElBQVAsQ0FBWXVCLE1BQVosRUFBb0JmLEdBQXBCLENBQXlCYixHQUFELElBQVM7QUFDdEUsTUFBSSxPQUFRNEIsTUFBTSxDQUFDNUIsR0FBRCxDQUFkLEtBQXlCLFdBQTdCLEVBQTBDO0FBQ3RDLFdBQVEsR0FBRTZCLGtCQUFrQixDQUFDN0IsR0FBRCxDQUFNLElBQUc2QixrQkFBa0IsQ0FBQ0QsTUFBTSxDQUFDNUIsR0FBRCxDQUFQLENBQWxCLEdBQWtDNkIsa0JBQWtCLENBQUNELE1BQU0sQ0FBQzVCLEdBQUQsQ0FBUCxDQUFwRCxHQUFvRSxFQUFHLEVBQTVHO0FBQ0g7QUFDSixDQUp3QyxFQUl0QzhCLElBSnNDLENBSWpDLEdBSmlDLENBQWxDO0FBTUEsTUFBTUMsY0FBYyxHQUFHLE1BQU07QUFDaEMsUUFBTXpMLElBQUksR0FBRzBMLElBQUksQ0FBQ0MsTUFBTCxHQUFjOUIsUUFBZCxDQUF1QixFQUF2QixFQUEyQitCLFNBQTNCLENBQXFDLENBQXJDLEVBQXdDLEVBQXhDLElBQThDRixJQUFJLENBQUNDLE1BQUwsR0FBYzlCLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkIrQixTQUEzQixDQUFxQyxDQUFyQyxFQUF3QyxFQUF4QyxDQUEzRDtBQUNBLFNBQU81TCxJQUFQO0FBQ0gsQ0FITTtBQUtBLE1BQU0yRyxRQUFRLEdBQUcsTUFBTTtBQUMxQixRQUFNbEssS0FBSyxHQUFHQyxnQkFBZ0IsQ0FBQyxPQUFELENBQTlCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHRCxnQkFBZ0IsQ0FBQyxNQUFELENBQTdCO0FBQ0EsU0FBUUQsS0FBSyxJQUFJRSxJQUFqQjtBQUNILENBSk07QUFNQSxNQUFNa1Asa0JBQWtCLEdBQUcsQ0FBQzdMLElBQUQsRUFBT0QsR0FBUCxLQUFlO0FBQzdDLE1BQUksQ0FBQ0EsR0FBTCxFQUFVQSxHQUFHLEdBQUcrTCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQXRCO0FBQ1ZoTSxNQUFJLEdBQUdBLElBQUksQ0FBQ2lNLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLE1BQXhCLENBQVA7QUFDQSxNQUFJQyxLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFXLFNBQVNuTSxJQUFULEdBQWdCLG1CQUEzQixDQUFaO0FBQUEsTUFDSW1ILE9BQU8sR0FBRytFLEtBQUssQ0FBQ0UsSUFBTixDQUFXck0sR0FBWCxDQURkO0FBRUEsTUFBSSxDQUFDb0gsT0FBTCxFQUFjLE9BQU8sSUFBUDtBQUNkLE1BQUksQ0FBQ0EsT0FBTyxDQUFDLENBQUQsQ0FBWixFQUFpQixPQUFPLEVBQVA7QUFDakIsU0FBT2tGLGtCQUFrQixDQUFDbEYsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXOEUsT0FBWCxDQUFtQixLQUFuQixFQUEwQixHQUExQixDQUFELENBQXpCO0FBQ0gsQ0FSTTtBQVVBLE1BQU1LLFVBQVUsR0FBSUMsSUFBRCxJQUFVO0FBQ2hDLE1BQUk5RSxJQUFJLEdBQUcrRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBaEYsTUFBSSxDQUFDaUYsU0FBTCxHQUFpQkgsSUFBakI7QUFDQSxTQUFPOUUsSUFBSSxDQUFDa0YsV0FBTCxJQUFvQmxGLElBQUksQ0FBQ21GLFNBQXpCLElBQXNDLEVBQTdDO0FBQ0gsQ0FKTSxDOzs7Ozs7Ozs7Ozs7QUNqR1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFFQSxNQUFNQyw4QkFBOEIsR0FBRyxnQ0FBdkM7QUFDQSxNQUFNQyw4QkFBOEIsR0FBRyxnQ0FBdkM7QUFDQSxNQUFNQyw4QkFBOEIsR0FBRyxnQ0FBdkM7QUFFQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFFQSxNQUFNQyxtQkFBbUIsR0FBR3JSLE9BQU8sSUFBSTtBQUM1QyxTQUFRO0FBQ05ELFFBQUksRUFBRTZRLHNCQURBO0FBRU41UTtBQUZNLEdBQVI7QUFJRCxDQUxNO0FBT0EsTUFBTXNSLDJCQUEyQixHQUFHdFIsT0FBTyxJQUFJO0FBQ3BELFNBQVE7QUFDTkQsUUFBSSxFQUFFZ1IsOEJBREE7QUFFTi9RO0FBRk0sR0FBUjtBQUlELENBTE07QUFPQSxNQUFNdVIsYUFBYSxHQUFHdlIsT0FBTyxLQUFLO0FBQ3ZDRCxNQUFJLEVBQUVtUixjQURpQztBQUV2Q2xSO0FBRnVDLENBQUwsQ0FBN0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJQO0FBS0E7QUFDQTtBQUVBLE1BQU1NLFlBQVksR0FBRztBQUNuQkMsTUFBSSxFQUFFO0FBQUUySyxXQUFPLEVBQUU7QUFBWCxHQURhO0FBRW5Cdk0sT0FBSyxFQUFFLElBRlk7QUFHbkJpSSxRQUFNLEVBQUU7QUFIVyxDQUFyQjtBQU1PLE1BQU11RSx3QkFBd0IsR0FBRyxDQUFDcUcsVUFBRCxFQUFhQyxhQUFiLEtBQStCO0FBQ3JFLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsVUFBVSxDQUFDRyxNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQyxTQUFLLElBQUkvRixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHOEYsYUFBYSxDQUFDRSxNQUFsQyxFQUEwQ2hHLENBQUMsRUFBM0MsRUFBK0M7QUFDN0MsVUFBSTZGLFVBQVUsQ0FBQ0UsQ0FBRCxDQUFWLENBQWNoTCxFQUFkLElBQW9CK0ssYUFBYSxDQUFDOUYsQ0FBRCxDQUFiLENBQWlCakYsRUFBekMsRUFBNkM7QUFDM0M4SyxrQkFBVSxDQUFDRSxDQUFELENBQVYsR0FBZ0JELGFBQWEsQ0FBQzlGLENBQUQsQ0FBN0I7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0QsU0FBTzZGLFVBQVA7QUFDRCxDQVRNO0FBV1EseUVBQVU3USxLQUFLLEdBQUdMLFlBQWxCLEVBQWdDO0FBQUVQLE1BQUY7QUFBUUM7QUFBUixDQUFoQyxFQUFtRDtBQUNoRSxVQUFRRCxJQUFSO0FBQ0UsU0FBSzZRLCtEQUFMO0FBQ0UsNkNBQVlqUSxLQUFaO0FBQW1CaEMsYUFBSyxFQUFFO0FBQTFCOztBQUNGLFNBQUtrUywrREFBTDtBQUNFLFVBQUk3USxPQUFPLENBQUN3SyxPQUFaLEVBQXFCO0FBQ25CLGNBQU1VLE9BQU8sR0FBR0Msd0JBQXdCLENBQUN4SyxLQUFLLENBQUNKLElBQU4sQ0FBVzJLLE9BQVosRUFBcUJsTCxPQUFPLENBQUNrTCxPQUE3QixDQUF4QztBQUNBbEwsZUFBTyxDQUFDa0wsT0FBUixHQUFrQkEsT0FBbEI7QUFDQSwrQ0FBWXZLLEtBQVo7QUFBbUJKLGNBQUksRUFBRVA7QUFBekI7QUFDRCxPQUpELE1BSU87QUFDTCxjQUFNb0wsVUFBVSxHQUFHekssS0FBSyxDQUFDSixJQUFOLENBQVcySyxPQUE5QjtBQUNBLGNBQU1HLFNBQVMsR0FBR0QsVUFBVSxDQUFDRSxNQUFYLENBQWtCdEwsT0FBTyxDQUFDa0wsT0FBMUIsQ0FBbEI7QUFDQWxMLGVBQU8sQ0FBQ2tMLE9BQVIsR0FBa0JHLFNBQWxCO0FBQ0EsK0NBQVkxSyxLQUFaO0FBQW1CSixjQUFJLEVBQUVQO0FBQXpCO0FBQ0Q7O0FBQ0gsU0FBSzhRLCtEQUFMO0FBQ0UsNkNBQVluUSxLQUFaO0FBQW1CaEMsYUFBSyxFQUFFcUI7QUFBMUI7O0FBQ0YsU0FBSytRLHVFQUFMO0FBQ0UsNkNBQVlwUSxLQUFaO0FBQW1CaEMsYUFBSyxFQUFFO0FBQTFCOztBQUNGLFNBQUtxUyx1RUFBTDtBQUNFLFlBQU1ZLFNBQVMsR0FBR2pSLEtBQUssQ0FBQ0osSUFBTixDQUFXMkssT0FBN0I7QUFDQSxZQUFNMkcsUUFBUSxHQUFHRCxTQUFTLENBQUN0RyxNQUFWLENBQWlCdEwsT0FBTyxDQUFDa0wsT0FBekIsQ0FBakI7QUFDQWxMLGFBQU8sQ0FBQ2tMLE9BQVIsR0FBa0IyRyxRQUFsQjtBQUNBLDZDQUFZbFIsS0FBWjtBQUFtQkosWUFBSSxFQUFFUDtBQUF6Qjs7QUFDRixTQUFLaVIsdUVBQUw7QUFDRSw2Q0FBWXRRLEtBQVo7QUFBbUJoQyxhQUFLLEVBQUVxQjtBQUExQjs7QUFDRixTQUFLa1IsdURBQUw7QUFDRSw2Q0FBWXZRLEtBQVo7QUFBbUJoQyxhQUFLLEVBQUU7QUFBMUI7O0FBQ0YsU0FBS3dTLHVEQUFMO0FBQ0UsNkNBQVl4USxLQUFaO0FBQW1CaUcsY0FBTSxFQUFFNUc7QUFBM0I7O0FBQ0YsU0FBS29SLHVEQUFMO0FBQ0UsNkNBQVl6USxLQUFaO0FBQW1CaEMsYUFBSyxFQUFFcUI7QUFBMUI7O0FBQ0YsU0FBSzBILHlEQUFMO0FBQ0UsWUFBTW9LLE9BQU8sR0FBRztBQUFFNUcsZUFBTyxFQUFFO0FBQVgsT0FBaEI7QUFDQSw2Q0FBWXZLLEtBQVo7QUFBbUJKLFlBQUksRUFBRXVSO0FBQXpCOztBQUNGO0FBQ0UsYUFBT25SLEtBQVA7QUFuQ0o7QUFxQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9ERDtBQUNBO0FBQ0E7QUFLQTs7QUFFQSxVQUFVb1IsZ0JBQVYsQ0FBMkI7QUFBRS9SO0FBQUYsQ0FBM0IsRUFBd0M7QUFDdEMsTUFBSTtBQUNGLFFBQUlBLE9BQU8sQ0FBQ29LLFdBQVosRUFBeUI7QUFDdkIsWUFBTXZKLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsT0FBRCxDQUFUO0FBRUQ7O0FBQ0QsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUM0Qyw2Q0FBRCxFQUFPLG9DQUFtQzVELE9BQU8sQ0FBQ3NLLFVBQVcsYUFBWXRLLE9BQU8sQ0FBQ3VLLFFBQVMsRUFBMUYsRUFBNkYsRUFBN0YsRUFBaUd2SyxPQUFPLENBQUNRLEtBQXpHLEVBQWdILEtBQWhILENBQTNCO0FBQ0FVLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaOztBQUNBLFFBQUlBLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUExQixFQUFpQztBQUMvQixZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU4USwrREFBUjtBQUFnQzdRLGVBQU8sa0NBQU9lLFFBQVA7QUFBaUJ5SixpQkFBTyxFQUFFeEssT0FBTyxDQUFDd0s7QUFBbEM7QUFBdkMsT0FBRCxDQUFUO0FBQ0EsWUFBTTNKLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNELEtBSEQsTUFHTztBQUNMLFlBQU1mLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFK1EsK0RBQVI7QUFBZ0M5USxlQUFPLEVBQUVlO0FBQXpDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FkRCxDQWNFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUUrUSwrREFBUjtBQUFnQzlRLGFBQU8sRUFBRXJCO0FBQXpDLEtBQUQsQ0FBVDtBQUNBLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDRDtBQUNGOztBQUVELFVBQVVvUSx3QkFBVixDQUFtQztBQUFFaFM7QUFBRixDQUFuQyxFQUFnRDtBQUM5QyxNQUFJO0FBQ0YsVUFBTWEsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVDLE9BQU8sQ0FBQ2lTLFVBQVIsR0FBcUJuUiw0REFBckIsR0FBb0NjLDBEQUFVQTtBQUF0RCxLQUFELENBQVQ7QUFDQSxVQUFNYixRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQzRDLDZDQUFELEVBQU8sZ0RBQStDNUQsT0FBTyxDQUFDc0ssVUFBVyxhQUFZdEssT0FBTyxDQUFDdUssUUFBUyxFQUF0RyxFQUF5RyxFQUF6RyxFQUE2RyxFQUE3RyxFQUFpSCxLQUFqSCxDQUEzQjs7QUFDQSxRQUFJeEosUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQTFCLEVBQWlDO0FBQy9CLFlBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRWlSLHVFQUFSO0FBQXdDaFIsZUFBTyxFQUFFZTtBQUFqRCxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNZiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRWtSLHVFQUFSO0FBQXdDalIsZUFBTyxFQUFFZTtBQUFqRCxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDtBQUNGLEdBVkQsQ0FVRSxPQUFPakQsS0FBUCxFQUFjO0FBQ2QsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFa1IsdUVBQVI7QUFBd0NqUixhQUFPLEVBQUVyQjtBQUFqRCxLQUFELENBQVQ7QUFDQSxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsS0FBRCxDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxVQUFVc1EsVUFBVixDQUFxQjtBQUFFbFM7QUFBRixDQUFyQixFQUFrQztBQUNoQyxNQUFJO0FBQ0YsVUFBTWEsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVlLDREQUFZQTtBQUFwQixLQUFELENBQVQ7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQzRDLDZDQUFELEVBQU8seUJBQXdCNUQsT0FBTyxDQUFDbVMsSUFBSyxFQUE1QyxFQUErQyxFQUEvQyxFQUFtRCxFQUFuRCxFQUF1RCxLQUF2RCxDQUEzQjs7QUFDQSxRQUFJcFIsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQTFCLEVBQWlDO0FBQy9CLFlBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRW9SLHVEQUFSO0FBQXdCblIsZUFBTyxFQUFFZTtBQUFqQyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNZiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRXFSLHVEQUFSO0FBQXdCcFIsZUFBTyxFQUFFZTtBQUFqQyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDtBQUNGLEdBVkQsQ0FVRSxPQUFPakQsS0FBUCxFQUFjO0FBQ2QsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFcVIsdURBQVI7QUFBd0JwUixhQUFPLEVBQUVyQjtBQUFqQyxLQUFELENBQVQ7QUFDQSxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsS0FBRCxDQUFUO0FBRUQ7QUFDRjs7QUFHYyxVQUFVa0IsSUFBVixHQUFpQjtBQUM5QixRQUFNQyxxRUFBVSxDQUFDNk4sK0RBQUQsRUFBeUJtQixnQkFBekIsQ0FBaEI7QUFDQSxRQUFNaFAscUVBQVUsQ0FBQ2dPLHVFQUFELEVBQWlDaUIsd0JBQWpDLENBQWhCO0FBQ0EsUUFBTWpQLHFFQUFVLENBQUNtTyx1REFBRCxFQUFpQmdCLFVBQWpCLENBQWhCO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDdEVEO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTXBSLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1jLFVBQVUsR0FBRyxZQUFuQjtBQUVBLE1BQU13USxTQUFTLEdBQUdDLE9BQU8sS0FBSztBQUFFdFMsTUFBSSxFQUFFc1MsT0FBTyxHQUFHdlIsWUFBSCxHQUFrQmM7QUFBakMsQ0FBTCxDQUF6QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBRUEsTUFBTXRCLFlBQVksR0FBRztBQUNqQitSLFNBQU8sRUFBRTtBQURRLENBQXJCO0FBSWUseUVBQVUxUixLQUFLLEdBQUdMLFlBQWxCLEVBQWdDO0FBQUVQO0FBQUYsQ0FBaEMsRUFBMEM7QUFDckQsVUFBUUEsSUFBUjtBQUNJLFNBQUtlLHFEQUFMO0FBQ0ksNkNBQVlILEtBQVo7QUFBbUIwUixlQUFPLEVBQUU7QUFBNUI7O0FBQ0osU0FBS3pRLG1EQUFMO0FBQ0ksNkNBQVlqQixLQUFaO0FBQW1CMFIsZUFBTyxFQUFFO0FBQTVCOztBQUNKO0FBQ0ksYUFBTzFSLEtBQVA7QUFOUjtBQVFILEM7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU0yUixtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFHQSxNQUFNQyxpQkFBaUIsR0FBRyxPQUFPO0FBQ3RDN1MsTUFBSSxFQUFFdVM7QUFEZ0MsQ0FBUCxDQUExQjtBQUlBLE1BQU1PLGlCQUFpQixHQUFHN1MsT0FBTyxLQUFLO0FBQzNDRCxNQUFJLEVBQUUwUyxvQkFEcUM7QUFFM0N6UztBQUYyQyxDQUFMLENBQWpDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYlA7QUFFQSxNQUFNTSxZQUFZLEdBQUc7QUFDbkJ3UyxTQUFPLEVBQUUsSUFEVTtBQUVuQnZTLE1BQUksRUFBRSxJQUZhO0FBR25CNUIsT0FBSyxFQUFFO0FBSFksQ0FBckI7QUFNZSx5RUFBVWdDLEtBQUssR0FBR0wsWUFBbEIsRUFBZ0M7QUFBRVAsTUFBRjtBQUFRQztBQUFSLENBQWhDLEVBQW1EO0FBQ2hFLFVBQVFELElBQVI7QUFDRSxTQUFLdVMsNERBQUw7QUFDRSw2Q0FBWTNSLEtBQVo7QUFBbUJoQyxhQUFLLEVBQUU7QUFBMUI7O0FBQ0YsU0FBSzRULDREQUFMO0FBQ0UsNkNBQVk1UixLQUFaO0FBQW1CbVMsZUFBTyxFQUFFOVM7QUFBNUI7O0FBQ0YsU0FBS3dTLDREQUFMO0FBQ0UsNkNBQVk3UixLQUFaO0FBQW1CaEMsYUFBSyxFQUFFcUI7QUFBMUI7O0FBQ0Y7QUFDRSxhQUFPVyxLQUFQO0FBUko7QUFVRCxDOzs7Ozs7Ozs7Ozs7QUNuQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUEsVUFBVW9TLGNBQVYsR0FBMkI7QUFDekIsTUFBSXJJLHlEQUFRLEVBQVosRUFBZ0I7QUFDZCxRQUFJO0FBQ0YsWUFBTTdKLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsT0FBRCxDQUFUO0FBQ0EsWUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUM0Qyw2Q0FBRCxFQUFPLHNCQUFQLEVBQThCLEVBQTlCLEVBQWtDLEVBQWxDLEVBQXNDLEtBQXRDLENBQTNCOztBQUNBLFVBQUk3QyxRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDcEMsS0FBMUIsRUFBaUM7QUFDL0IsY0FBTWtDLDhEQUFHLENBQUM7QUFBRWQsY0FBSSxFQUFFd1MsNERBQVI7QUFBNkJ2UyxpQkFBTyxFQUFFZSxRQUFRLENBQUNpUztBQUEvQyxTQUFELENBQVQ7QUFDQSxjQUFNblMsOERBQUcsQ0FBQztBQUFFZCxjQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsU0FBRCxDQUFUO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsY0FBTWYsOERBQUcsQ0FBQztBQUFFZCxjQUFJLEVBQUV5Uyw0REFBUjtBQUE2QnhTLGlCQUFPLEVBQUVlO0FBQXRDLFNBQUQsQ0FBVDtBQUNBLGNBQU1GLDhEQUFHLENBQUM7QUFBRWQsY0FBSSxFQUFFNkIsMERBQVVBO0FBQWxCLFNBQUQsQ0FBVDtBQUNEO0FBQ0YsS0FWRCxDQVVFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUV5Uyw0REFBUjtBQUE2QnhTLGVBQU8sRUFBRXJCO0FBQXRDLE9BQUQsQ0FBVDtBQUNBLFlBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsVUFBVXFSLGNBQVYsQ0FBeUI7QUFBRWpUO0FBQUYsQ0FBekIsRUFBc0M7QUFDcEMsTUFBSTtBQUNGLFVBQU1rVCxHQUFHLEdBQUcsQ0FBQyxHQUFHbFQsT0FBTyxDQUFDOEIsTUFBWixDQUFaO0FBQ0EsVUFBTWpCLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsS0FBRCxDQUFUO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUNtUyw2Q0FBRCxFQUFPLHNCQUFQLEVBQThCRCxHQUE5QixFQUFtQyxFQUFuQyxFQUF1QyxLQUF2QyxDQUEzQjs7QUFDQSxRQUFJblMsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQTFCLEVBQWlDO0FBQy9CLFlBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTJTLDZEQUFSO0FBQThCMVMsZUFBTyxFQUFFZTtBQUF2QyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNZiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTRTLDZEQUFSO0FBQThCM1MsZUFBTyxFQUFFZTtBQUF2QyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDtBQUNGLEdBWEQsQ0FXRSxPQUFPakQsS0FBUCxFQUFjO0FBQ2QsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFNFMsNkRBQVI7QUFBOEIzUyxhQUFPLEVBQUVyQjtBQUF2QyxLQUFELENBQVQ7QUFDQSxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsS0FBRCxDQUFUO0FBQ0Q7O0FBQ0QsUUFBTWYsOERBQUcsQ0FBQztBQUFFZCxRQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsR0FBRCxDQUFUO0FBQ0Q7O0FBRWMsVUFBVWtCLElBQVYsR0FBaUI7QUFDOUIsUUFBTUMscUVBQVUsQ0FBQ3VQLDREQUFELEVBQXNCUyxjQUF0QixDQUFoQjtBQUNBLFFBQU1oUSxxRUFBVSxDQUFDMFAsNkRBQUQsRUFBdUJRLGNBQXZCLENBQWhCO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDakREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUcseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsTUFBTWIsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTVksaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcsT0FBTztBQUM1QzNULE1BQUksRUFBRXFUO0FBRHNDLENBQVAsQ0FBaEM7QUFJQSxNQUFNTyxlQUFlLEdBQUcsT0FBTztBQUNwQzVULE1BQUksRUFBRXdUO0FBRDhCLENBQVAsQ0FBeEI7QUFJQSxNQUFNVixpQkFBaUIsR0FBRzdTLE9BQU8sS0FBSztBQUMzQ0QsTUFBSSxFQUFFMFMsb0JBRHFDO0FBRTNDelM7QUFGMkMsQ0FBTCxDQUFqQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCUDtBQUVBLE1BQU1NLFlBQVksR0FBRztBQUNuQkMsTUFBSSxFQUFFLElBRGE7QUFFbkI1QixPQUFLLEVBQUU7QUFGWSxDQUFyQjtBQUtlLHlFQUFVZ0MsS0FBSyxHQUFHTCxZQUFsQixFQUFnQztBQUFFUCxNQUFGO0FBQVFDO0FBQVIsQ0FBaEMsRUFBbUQ7QUFDaEUsVUFBUUQsSUFBUjtBQUNFLFNBQUtxVCxrRUFBTDtBQUNFLDZDQUFZelMsS0FBWjtBQUFtQmhDLGFBQUssRUFBRTtBQUExQjs7QUFDRixTQUFLMFUsa0VBQUw7QUFDRSw2Q0FBWTFTLEtBQVo7QUFBbUJKLFlBQUksRUFBRVA7QUFBekI7O0FBQ0YsU0FBS3NULGtFQUFMO0FBQ0UsNkNBQVkzUyxLQUFaO0FBQW1CaEMsYUFBSyxFQUFFcUI7QUFBMUI7O0FBQ0Y7QUFDRSxhQUFPVyxLQUFQO0FBUko7QUFVRCxDOzs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsVUFBVWlULG9CQUFWLENBQStCO0FBQUU1VDtBQUFGLENBQS9CLEVBQTRDO0FBQzFDLE1BQUkwSyx5REFBUSxFQUFaLEVBQWdCO0FBQ2QsUUFBSTtBQUNGLFlBQU03Siw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRWUsNERBQVlBO0FBQXBCLE9BQUQsQ0FBVDtBQUNBLFlBQU1DLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDNEMsNkNBQUQsRUFBTyx1QkFBUCxFQUErQixFQUEvQixFQUFtQyxFQUFuQyxDQUEzQjs7QUFDQSxVQUFJN0MsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQTFCLEVBQWlDO0FBQy9CLGNBQU1rQyw4REFBRyxDQUFDO0FBQUVkLGNBQUksRUFBRXNULGtFQUFSO0FBQW1DclQsaUJBQU8sRUFBRWU7QUFBNUMsU0FBRCxDQUFUO0FBQ0EsY0FBTUYsOERBQUcsQ0FBQztBQUFFZCxjQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsU0FBRCxDQUFUO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsY0FBTWYsOERBQUcsQ0FBQztBQUFFZCxjQUFJLEVBQUV1VCxrRUFBUjtBQUFtQ3RULGlCQUFPLEVBQUVlO0FBQTVDLFNBQUQsQ0FBVDtBQUNBLGNBQU1GLDhEQUFHLENBQUM7QUFBRWQsY0FBSSxFQUFFNkIsMERBQVVBO0FBQWxCLFNBQUQsQ0FBVDtBQUNEO0FBQ0YsS0FWRCxDQVVFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUV1VCxrRUFBUjtBQUFtQ3RULGVBQU8sRUFBRXJCO0FBQTVDLE9BQUQsQ0FBVDtBQUNBLFlBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDs7QUFDRCxVQUFNZiw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDRDtBQUNGOztBQUVELFVBQVVpUyxZQUFWLEdBQXlCO0FBQ3ZCLE1BQUluSix5REFBUSxFQUFaLEVBQWdCO0FBQ2QsUUFBSTtBQUNGLFlBQU03Siw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRWUsNERBQVlBO0FBQXBCLE9BQUQsQ0FBVDtBQUNBLFlBQU1DLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDNEMsNkNBQUQsRUFBTyx3QkFBUCxFQUFnQyxFQUFoQyxFQUFvQyxFQUFwQyxDQUEzQjs7QUFDQSxVQUFJN0MsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQTFCLEVBQWlDO0FBQy9CLGNBQU1rQyw4REFBRyxDQUFDO0FBQUVkLGNBQUksRUFBRXlULDBEQUFSO0FBQTJCeFQsaUJBQU8sRUFBRWU7QUFBcEMsU0FBRCxDQUFUO0FBQ0EsY0FBTUYsOERBQUcsQ0FBQztBQUFFZCxjQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsU0FBRCxDQUFUO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsY0FBTWYsOERBQUcsQ0FBQztBQUFFZCxjQUFJLEVBQUUwVCwwREFBUjtBQUEyQnpULGlCQUFPLEVBQUVlO0FBQXBDLFNBQUQsQ0FBVDtBQUNBLGNBQU1GLDhEQUFHLENBQUM7QUFBRWQsY0FBSSxFQUFFNkIsMERBQVVBO0FBQWxCLFNBQUQsQ0FBVDtBQUNEO0FBQ0YsS0FWRCxDQVVFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUUwVCwwREFBUjtBQUEyQnpULGVBQU8sRUFBRXJCO0FBQXBDLE9BQUQsQ0FBVDtBQUNBLFlBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDs7QUFDRCxVQUFNZiw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDRDtBQUNGOztBQUVELFVBQVVxUixjQUFWLENBQXlCO0FBQUVqVDtBQUFGLENBQXpCLEVBQXNDO0FBQ3BDLE1BQUkwSyx5REFBUSxFQUFaLEVBQWdCO0FBQ2QsUUFBSTtBQUNGLFlBQU13SSxHQUFHLEdBQUcsQ0FBQyxHQUFHbFQsT0FBTyxDQUFDOEIsTUFBWixDQUFaO0FBQ0EsWUFBTWpCLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsT0FBRCxDQUFUO0FBQ0EsWUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUNtUyw2Q0FBRCxFQUFPLDJCQUFQLEVBQW1DRCxHQUFuQyxFQUF3QyxFQUF4QyxFQUE0QyxLQUE1QyxDQUEzQjs7QUFDQSxVQUFJblMsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQTFCLEVBQWlDO0FBQy9CLGNBQU1rQyw4REFBRyxDQUFDO0FBQUVkLGNBQUksRUFBRTJTLDZEQUFSO0FBQThCMVMsaUJBQU8sRUFBRWU7QUFBdkMsU0FBRCxDQUFUO0FBQ0EsY0FBTUYsOERBQUcsQ0FBQztBQUFFZCxjQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsU0FBRCxDQUFUO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsY0FBTWYsOERBQUcsQ0FBQztBQUFFZCxjQUFJLEVBQUU0Uyw2REFBUjtBQUE4QjNTLGlCQUFPLEVBQUVlO0FBQXZDLFNBQUQsQ0FBVDtBQUNBLGNBQU1GLDhEQUFHLENBQUM7QUFBRWQsY0FBSSxFQUFFNkIsMERBQVVBO0FBQWxCLFNBQUQsQ0FBVDtBQUNEO0FBQ0YsS0FYRCxDQVdFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU0Uyw2REFBUjtBQUE4QjNTLGVBQU8sRUFBRXJCO0FBQXZDLE9BQUQsQ0FBVDtBQUNBLFlBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDs7QUFDRCxVQUFNZiw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDRDtBQUNGOztBQUdjLFVBQVVrQixJQUFWLEdBQWlCO0FBQzlCLFFBQU1DLHFFQUFVLENBQUNxUSxrRUFBRCxFQUE0QlEsb0JBQTVCLENBQWhCO0FBQ0EsUUFBTTdRLHFFQUFVLENBQUMwUCw2REFBRCxFQUF1QlEsY0FBdkIsQ0FBaEI7QUFDQSxRQUFNbFEscUVBQVUsQ0FBQ3dRLDBEQUFELEVBQW9CTSxZQUFwQixDQUFoQjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VEO0FBRUEsTUFBTXZULFlBQVksR0FBRztBQUNqQkMsTUFBSSxFQUFFLElBRFc7QUFFakI1QixPQUFLLEVBQUU7QUFGVSxDQUFyQjtBQUtlLHlFQUFVZ0MsS0FBSyxHQUFHTCxZQUFsQixFQUFnQztBQUFFUCxNQUFGO0FBQVFDO0FBQVIsQ0FBaEMsRUFBbUQ7QUFDOUQsVUFBUUQsSUFBUjtBQUNJLFNBQUt3VCwwREFBTDtBQUNJLDZDQUFZNVMsS0FBWjtBQUFtQmhDLGFBQUssRUFBRTtBQUExQjs7QUFDSixTQUFLNlUsMERBQUw7QUFDSSw2Q0FBWTdTLEtBQVo7QUFBbUJKLFlBQUksRUFBRVA7QUFBekI7O0FBQ0osU0FBS3lULDBEQUFMO0FBQ0ksNkNBQVk5UyxLQUFaO0FBQW1CaEMsYUFBSyxFQUFFcUI7QUFBMUI7O0FBQ0o7QUFDSSxhQUFPVyxLQUFQO0FBUlI7QUFVSCxDOzs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1tVCx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFFQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFFQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxNQUFNekosd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTTBKLHdCQUF3QixHQUFHLDBCQUFqQztBQUVBLE1BQU10TyxvQkFBb0IsR0FBRzNHLE9BQU8sS0FBSztBQUM5Q0QsTUFBSSxFQUFFK1QsdUJBRHdDO0FBRTlDOVQ7QUFGOEMsQ0FBTCxDQUFwQztBQUtBLE1BQU1rVixtQkFBbUIsR0FBR2xWLE9BQU8sS0FBSztBQUM3Q0QsTUFBSSxFQUFFa1Usc0JBRHVDO0FBRTdDalU7QUFGNkMsQ0FBTCxDQUFuQztBQUtBLE1BQU1tVixtQkFBbUIsR0FBR25WLE9BQU8sS0FBSztBQUM3Q0QsTUFBSSxFQUFFcVUsc0JBRHVDO0FBRTdDcFU7QUFGNkMsQ0FBTCxDQUFuQztBQUtBLE1BQU1vVixpQkFBaUIsR0FBR3BWLE9BQU8sS0FBSztBQUMzQ0QsTUFBSSxFQUFFd1UsbUJBRHFDO0FBRTNDdlU7QUFGMkMsQ0FBTCxDQUFqQztBQUtBLE1BQU1xVixlQUFlLEdBQUdyVixPQUFPLEtBQUs7QUFDekNELE1BQUksRUFBRTJVLGlCQURtQztBQUV6QzFVO0FBRnlDLENBQUwsQ0FBL0I7QUFLQSxNQUFNc1YsaUJBQWlCLEdBQUd0VixPQUFPLEtBQUs7QUFDM0NELE1BQUksRUFBRThVLG1CQURxQztBQUUzQzdVO0FBRjJDLENBQUwsQ0FBakM7QUFLQSxNQUFNdVYsc0JBQXNCLEdBQUd2VixPQUFPLEtBQUs7QUFDaERELE1BQUksRUFBRWlWLHdCQUQwQztBQUVoRGhWO0FBRmdELENBQUwsQ0FBdEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRFA7QUFFQSxNQUFNTSxZQUFZLEdBQUc7QUFDakJDLE1BQUksRUFBRSxJQURXO0FBRWpCNUIsT0FBSyxFQUFFO0FBRlUsQ0FBckI7QUFLZSx5RUFBVWdDLEtBQUssR0FBR0wsWUFBbEIsRUFBZ0M7QUFBRVAsTUFBRjtBQUFRQztBQUFSLENBQWhDLEVBQW1EO0FBQzlELFVBQVFELElBQVI7QUFDSSxTQUFLK1QsZ0VBQUw7QUFDSSw2Q0FBWW5ULEtBQVo7QUFBbUJoQyxhQUFLLEVBQUU7QUFBMUI7O0FBQ0osU0FBS29WLGdFQUFMO0FBQ0ksNkNBQVlwVCxLQUFaO0FBQW1CSixZQUFJLEVBQUVQO0FBQXpCOztBQUNKLFNBQUtnVSxnRUFBTDtBQUNJLDZDQUFZclQsS0FBWjtBQUFtQmhDLGFBQUssRUFBRXFCO0FBQTFCOztBQUNKO0FBQ0ksYUFBT1csS0FBUDtBQVJSO0FBVUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFLQSxNQUFNTCxZQUFZLEdBQUc7QUFDbkJDLE1BQUksRUFBRSxJQURhO0FBRW5CNUIsT0FBSyxFQUFFO0FBRlksQ0FBckI7QUFLZSx5RUFBVWdDLEtBQUssR0FBR0wsWUFBbEIsRUFBZ0M7QUFBRVAsTUFBRjtBQUFRQztBQUFSLENBQWhDLEVBQW1EO0FBQ2hFLFVBQVFELElBQVI7QUFDRSxTQUFLa1UsK0RBQUw7QUFDRSw2Q0FBWXRULEtBQVo7QUFBbUJoQyxhQUFLLEVBQUU7QUFBMUI7O0FBQ0YsU0FBS3VWLCtEQUFMO0FBQ0UsNkNBQVl2VCxLQUFaO0FBQW1CSixZQUFJLEVBQUVQO0FBQXpCOztBQUNGLFNBQUttVSwrREFBTDtBQUNFLDZDQUFZeFQsS0FBWjtBQUFtQmhDLGFBQUssRUFBRXFCO0FBQTFCOztBQUNGLFNBQUtvVSwrREFBTDtBQUNFLDZDQUFZelQsS0FBWjtBQUFtQmhDLGFBQUssRUFBRTtBQUExQjs7QUFDRixTQUFLMFYsK0RBQUw7QUFDRSw2Q0FBWTFULEtBQVo7QUFBbUJKLFlBQUksRUFBRVA7QUFBekI7O0FBQ0YsU0FBS3NVLCtEQUFMO0FBQ0UsNkNBQVkzVCxLQUFaO0FBQW1CaEMsYUFBSyxFQUFFcUI7QUFBMUI7O0FBQ0Y7QUFDRSxhQUFPVyxLQUFQO0FBZEo7QUFnQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0c7QUFDSDtBQUNBOztBQUVBLFVBQVU2VSxpQkFBVixDQUE0QjtBQUFFeFY7QUFBRixDQUE1QixFQUF5QztBQUN2QyxNQUFJO0FBQ0YsUUFBSUEsT0FBTyxDQUFDb0ssV0FBWixFQUF5QjtBQUN2QixZQUFNdkosOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUVlLDREQUFZQTtBQUFwQixPQUFELENBQVQ7QUFFRDs7QUFDRCxVQUFNZ0QsR0FBRyxHQUFJLGlCQUFnQjlELE9BQU8sQ0FBQ21LLElBQUssRUFBMUM7QUFDQSxVQUFNcEosUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUM0Qyw2Q0FBRCxFQUFNRSxHQUFOLEVBQVcsRUFBWCxFQUFlOUQsT0FBTyxDQUFDUSxLQUF2QixFQUE4QixLQUE5QixDQUEzQjs7QUFDQSxRQUFJTyxRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDcEMsS0FBMUIsRUFBaUM7QUFDL0IsWUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFZ1UsZ0VBQVI7QUFBaUMvVCxlQUFPLEVBQUVlO0FBQTFDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNELEtBSEQsTUFHTztBQUNMLFlBQU1mLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFaVUsZ0VBQVI7QUFBaUNoVSxlQUFPLEVBQUVlO0FBQTFDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FkRCxDQWNFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVpVSxnRUFBUjtBQUFpQ2hVLGFBQU8sRUFBRXJCO0FBQTFDLEtBQUQsQ0FBVDtBQUNBLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDRDtBQUNGOztBQUVELFVBQVU2VCxnQkFBVixDQUEyQjtBQUFFelY7QUFBRixDQUEzQixFQUF3QztBQUN0QyxNQUFJO0FBQ0YsVUFBTWEsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVlLDREQUFZQTtBQUFwQixLQUFELENBQVQ7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQzRDLDZDQUFELEVBQU8sZ0NBQStCNUQsT0FBTyxDQUFDSCxRQUFTLEVBQXZELEVBQTBELEVBQTFELEVBQThELEVBQTlELEVBQWtFLEtBQWxFLENBQTNCOztBQUNBLFFBQUlrQixRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDcEMsS0FBMUIsRUFBaUM7QUFDL0IsWUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFc1UsK0RBQVI7QUFBZ0NyVSxlQUFPLEVBQUVlO0FBQXpDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNELEtBSEQsTUFHTztBQUNMLFlBQU1mLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFdVUsK0RBQVI7QUFBZ0N0VSxlQUFPLEVBQUVlO0FBQXpDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FWRCxDQVVFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUV1VSwrREFBUjtBQUFnQ3RVLGFBQU8sRUFBRXJCO0FBQXpDLEtBQUQsQ0FBVDtBQUNBLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDRDtBQUNGOztBQUVELFVBQVU4VCxZQUFWLENBQXVCO0FBQUUxVjtBQUFGLENBQXZCLEVBQW9DO0FBQ2xDLFFBQU0yVixhQUFhLEdBQUczVixPQUFPLENBQUNILFFBQTlCOztBQUNBLE1BQUk7QUFDRixVQUFNYSxJQUFJLEdBQUdELGlFQUFnQixDQUFDLE1BQUQsQ0FBN0I7QUFDQSxVQUFNbVYsVUFBVSxHQUFHO0FBQUVqSSxXQUFLLEVBQUUzTixPQUFPLENBQUMyTixLQUFqQjtBQUF3QmxILFlBQU0sRUFBRS9GLElBQUksQ0FBQ2dHLEVBQXJDO0FBQXlDRyxZQUFNLEVBQUU3RyxPQUFPLENBQUM2RztBQUF6RCxLQUFuQjtBQUNBLFVBQU05RixRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0MsOENBQUQsRUFBUSxXQUFSLEVBQW9CMlUsVUFBcEIsRUFBZ0MsRUFBaEMsRUFBb0MsS0FBcEMsQ0FBM0I7O0FBQ0EsUUFBSTdVLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUExQixFQUFpQztBQUMvQixZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU0VSwwREFBUjtBQUEyQjNVLGVBQU8sRUFBRWU7QUFBcEMsT0FBRCxDQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2VSwwREFBUjtBQUEyQjVVLGVBQU8sRUFBRWU7QUFBcEMsT0FBRCxDQUFUO0FBQ0Q7QUFDRixHQVRELENBU0UsT0FBT3BDLEtBQVAsRUFBYztBQUNkLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZVLDBEQUFSO0FBQTJCNVUsYUFBTyxFQUFFckI7QUFBcEMsS0FBRCxDQUFUO0FBQ0Q7O0FBQ0QsTUFBSXFCLE9BQU8sQ0FBQzZWLElBQVIsSUFBZ0IsV0FBcEIsRUFBaUM7QUFDL0IsVUFBTWhWLDhEQUFHLENBQUM2SSxtRkFBd0IsQ0FBQztBQUFFUyxVQUFJLEVBQUVuSyxPQUFPLENBQUM4VixLQUFoQjtBQUF1QnRMLGFBQU8sRUFBRSxJQUFoQztBQUFzQ0YsZ0JBQVUsRUFBRXRLLE9BQU8sQ0FBQ3NLLFVBQTFEO0FBQXNFQyxjQUFRLEVBQUV2SyxPQUFPLENBQUN1SztBQUF4RixLQUFELENBQXpCLENBQVQ7QUFDQSxVQUFNMUosOERBQUcsQ0FBQzRJLDhFQUFtQixDQUFDO0FBQUVVLFVBQUksRUFBRW5LLE9BQU8sQ0FBQzhWO0FBQWhCLEtBQUQsQ0FBcEIsQ0FBVDtBQUNELEdBSEQsTUFHTyxJQUFJOVYsT0FBTyxDQUFDNlYsSUFBUixJQUFnQixNQUFwQixFQUE0QjtBQUNqQyxVQUFNaFYsOERBQUcsQ0FBQ3NVLG9FQUFtQixDQUFDO0FBQUV0VixjQUFRLEVBQUU4VjtBQUFaLEtBQUQsQ0FBcEIsQ0FBVDtBQUNELEdBRk0sTUFFQSxJQUFJM1YsT0FBTyxDQUFDNlYsSUFBUixJQUFnQixhQUFwQixFQUFtQztBQUN4QyxVQUFNaFYsOERBQUcsQ0FBQzhGLHFFQUFvQixDQUFDO0FBQUVDLFlBQU0sRUFBRyxXQUFVNUcsT0FBTyxDQUFDNkcsTUFBTyxFQUFwQztBQUF1Q3VELGlCQUFXLEVBQUU7QUFBcEQsS0FBRCxDQUFyQixDQUFUO0FBQ0QsR0FGTSxNQUVBO0FBQ0wsVUFBTXZKLDhEQUFHLENBQUN3USx5RUFBbUIsQ0FBQztBQUFFakgsaUJBQVcsRUFBRSxLQUFmO0FBQXNCRSxnQkFBVSxFQUFFdEssT0FBTyxDQUFDc0ssVUFBMUM7QUFBc0RDLGNBQVEsRUFBRXZLLE9BQU8sQ0FBQ3VLLFFBQXhFO0FBQWtGQyxhQUFPLEVBQUV4SyxPQUFPLENBQUN3SztBQUFuRyxLQUFELENBQXBCLENBQVQ7QUFDRDtBQUNGOztBQUVELFVBQVV1TCxjQUFWLENBQXlCO0FBQUUvVjtBQUFGLENBQXpCLEVBQXNDO0FBQ3BDLE1BQUk7QUFDRixVQUFNYSw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRWUsNERBQVlBO0FBQXBCLEtBQUQsQ0FBVDtBQUNBLFVBQU1KLElBQUksR0FBR0QsaUVBQWdCLENBQUMsTUFBRCxDQUE3QjtBQUNBLFVBQU1NLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDZSxzREFBRCxFQUFnQixrQkFBaEIsRUFBbUMvQixPQUFuQyxFQUE0QyxFQUE1QyxDQUEzQjs7QUFDQSxRQUFJZSxRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDcEMsS0FBMUIsRUFBaUM7QUFDL0IsWUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFeVUsNERBQVI7QUFBNkJ4VSxlQUFPLEVBQUVlO0FBQXRDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNBLFlBQU1aLCtEQUFJLENBQUNTLGtEQUFNLENBQUNDLElBQVAsQ0FBYSxNQUFLaEIsSUFBSSxDQUFDYixRQUFTLEVBQWhDLENBQUQsQ0FBVjtBQUNELEtBSkQsTUFJTztBQUNMLFlBQU1nQiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTBVLDREQUFSO0FBQTZCelUsZUFBTyxFQUFFZTtBQUF0QyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDtBQUNGLEdBWkQsQ0FZRSxPQUFPakQsS0FBUCxFQUFjO0FBQ2QsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFMFUsNERBQVI7QUFBNkJ6VSxhQUFPLEVBQUVyQjtBQUF0QyxLQUFELENBQVQ7QUFDQSxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsS0FBRCxDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxVQUFVb1UsY0FBVixDQUF5QjtBQUFFaFc7QUFBRixDQUF6QixFQUFzQztBQUNwQyxNQUFJO0FBQ0YsVUFBTWEsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVlLDREQUFZQTtBQUFwQixLQUFELENBQVQ7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2tHLGdEQUFELEVBQVUsa0JBQWlCbEgsT0FBTyxDQUFDMEcsRUFBRyxFQUF0QyxFQUF5QyxFQUF6QyxFQUE2QyxFQUE3QyxDQUEzQjs7QUFDQSxRQUFJM0YsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQTFCLEVBQWlDO0FBQy9CLFlBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRStVLDREQUFSO0FBQTZCOVUsZUFBTyxFQUFFZTtBQUF0QyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNZiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRWdWLDREQUFSO0FBQTZCL1UsZUFBTyxFQUFFZTtBQUF0QyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDtBQUNGLEdBVkQsQ0FVRSxPQUFPakQsS0FBUCxFQUFjO0FBQ2QsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFZ1YsNERBQVI7QUFBNkIvVSxhQUFPLEVBQUVyQjtBQUF0QyxLQUFELENBQVQ7QUFDQSxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsS0FBRCxDQUFUO0FBQ0Q7O0FBQ0QsUUFBTWYsOERBQUcsQ0FBQ29WLCtFQUFzQixDQUFDLEVBQUQsQ0FBdkIsQ0FBVDtBQUNEOztBQUVELFVBQVVDLG1CQUFWLENBQThCO0FBQUVsVztBQUFGLENBQTlCLEVBQTJDO0FBQ3pDLE1BQUk7QUFDRixVQUFNYSw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRWUsNERBQVlBO0FBQXBCLEtBQUQsQ0FBVDtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDa0csZ0RBQUQsRUFBVSx3QkFBVixFQUFtQ2xILE9BQW5DLEVBQTRDLEVBQTVDLEVBQWdELEtBQWhELENBQTNCOztBQUNBLFFBQUllLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUExQixFQUFpQztBQUMvQixZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUV3TCxpRUFBUjtBQUFrQ3ZMLGVBQU8sa0NBQU9lLFFBQVA7QUFBaUI2SyxxQkFBVyxFQUFFNUwsT0FBTyxDQUFDNkc7QUFBdEM7QUFBekMsT0FBRCxDQUFUO0FBQ0EsWUFBTWhHLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNELEtBSEQsTUFHTztBQUNMLFlBQU1mLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFa1YsaUVBQVI7QUFBa0NqVixlQUFPLEVBQUVlO0FBQTNDLE9BQUQsQ0FBVDtBQUNBLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLE9BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FWRCxDQVVFLE9BQU9qRCxLQUFQLEVBQWM7QUFDZCxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVrVixpRUFBUjtBQUFrQ2pWLGFBQU8sRUFBRXJCO0FBQTNDLEtBQUQsQ0FBVDtBQUNBLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixLQUFELENBQVQ7QUFDRDs7QUFDRCxRQUFNZiw4REFBRyxDQUFDNEksOEVBQW1CLENBQUM7QUFBRVUsUUFBSSxFQUFFbkssT0FBTyxDQUFDbUs7QUFBaEIsR0FBRCxDQUFwQixDQUFULENBZnlDLENBZ0J6QztBQUNEOztBQUVjLFVBQVVySCxJQUFWLEdBQWlCO0FBQzlCLFFBQU1DLHFFQUFVLENBQUMrUSxnRUFBRCxFQUEwQjBCLGlCQUExQixDQUFoQjtBQUNBLFFBQU16UyxxRUFBVSxDQUFDcVIsK0RBQUQsRUFBeUJxQixnQkFBekIsQ0FBaEI7QUFDQSxRQUFNMVMscUVBQVUsQ0FBQzJSLDBEQUFELEVBQW9CZ0IsWUFBcEIsQ0FBaEI7QUFDQSxRQUFNM1MscUVBQVUsQ0FBQ3dSLDREQUFELEVBQXNCd0IsY0FBdEIsQ0FBaEI7QUFDQSxRQUFNaFQscUVBQVUsQ0FBQzhSLDREQUFELEVBQXNCbUIsY0FBdEIsQ0FBaEI7QUFDQSxRQUFNalQscUVBQVUsQ0FBQ2lTLGlFQUFELEVBQTJCa0IsbUJBQTNCLENBQWhCO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDMUlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUc1VyxPQUFPLEtBQUs7QUFDOUNELE1BQUksRUFBRW9XLHNCQUR3QztBQUU5Q25XO0FBRjhDLENBQUwsQ0FBcEM7QUFLQSxNQUFNNlcsaUJBQWlCLEdBQUc3VyxPQUFPLEtBQUs7QUFDM0NELE1BQUksRUFBRXVXLG1CQURxQztBQUUzQ3RXO0FBRjJDLENBQUwsQ0FBakM7QUFLQSxNQUFNaVcsc0JBQXNCLEdBQUdqVyxPQUFPLEtBQUs7QUFDaERELE1BQUksRUFBRTBXLHlCQUQwQztBQUVoRHpXO0FBRmdELENBQUwsQ0FBdEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QlA7QUFFQSxNQUFNTSxZQUFZLEdBQUc7QUFDakJDLE1BQUksRUFBRSxJQURXO0FBRWpCNUIsT0FBSyxFQUFFO0FBRlUsQ0FBckI7QUFLZSx5RUFBVWdDLEtBQUssR0FBR0wsWUFBbEIsRUFBZ0M7QUFBRVAsTUFBRjtBQUFRQztBQUFSLENBQWhDLEVBQW1EO0FBQzlELFVBQVFELElBQVI7QUFDSSxTQUFLMFcsa0VBQUw7QUFDSSw2Q0FBWTlWLEtBQVo7QUFBbUJoQyxhQUFLLEVBQUU7QUFBMUI7O0FBQ0osU0FBSytYLGtFQUFMO0FBQ0ksNkNBQVkvVixLQUFaO0FBQW1CSixZQUFJLEVBQUVQO0FBQXpCOztBQUNKLFNBQUsyVyxrRUFBTDtBQUNJLDZDQUFZaFcsS0FBWjtBQUFtQmhDLGFBQUssRUFBRXFCO0FBQTFCOztBQUNKO0FBQ0ksYUFBT1csS0FBUDtBQVJSO0FBVUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFJQSxNQUFNTCxZQUFZLEdBQUc7QUFDbkJDLE1BQUksRUFBRSxJQURhO0FBRW5CNUIsT0FBSyxFQUFFO0FBRlksQ0FBckI7QUFLZSx5RUFBVWdDLEtBQUssR0FBR0wsWUFBbEIsRUFBZ0M7QUFBRVAsTUFBRjtBQUFRQztBQUFSLENBQWhDLEVBQW1EO0FBQ2hFLFVBQVFELElBQVI7QUFDRSxTQUFLdVcsNERBQUw7QUFDRSw2Q0FBWTNWLEtBQVo7QUFBbUJoQyxhQUFLLEVBQUU7QUFBMUI7O0FBQ0YsU0FBSzRYLDREQUFMO0FBQ0UsNkNBQVk1VixLQUFaO0FBQW1CSixZQUFJLEVBQUVQO0FBQXpCOztBQUNGLFNBQUt3Vyw0REFBTDtBQUNFLDZDQUFZN1YsS0FBWjtBQUFtQmhDLGFBQUssRUFBRXFCO0FBQTFCOztBQUNGO0FBQ0UsYUFBT1csS0FBUDtBQVJKO0FBVUQsQzs7Ozs7Ozs7Ozs7O0FDcEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOztBQUVBLFVBQVVtVyxpQkFBVixDQUE0QjtBQUFFOVc7QUFBRixDQUE1QixFQUF5QztBQUN2QyxNQUFJO0FBQ0YsVUFBTWEsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVlLDREQUFZQTtBQUFwQixLQUFELENBQVQ7QUFDQSxVQUFNSixJQUFJLEdBQUdELGlFQUFnQixDQUFDLE1BQUQsQ0FBN0I7QUFDQSxRQUFJLENBQUNULE9BQU8sQ0FBQytXLE1BQWIsRUFBcUIvVyxPQUFPLENBQUMrVyxNQUFSLEdBQWlCclcsSUFBSSxDQUFDcVcsTUFBdEI7QUFDckIsVUFBTWhXLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDK0oscURBQUQsRUFBZSxrQkFBZixFQUFrQy9LLE9BQWxDLEVBQTJDLEVBQTNDLENBQTNCOztBQUNBLFFBQUllLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUExQixFQUFpQztBQUMvQixZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUVxVywrREFBUjtBQUFnQ3BXLGVBQU8sRUFBRWU7QUFBekMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsWUFBTWYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUVzVywrREFBUjtBQUFnQ3JXLGVBQU8sRUFBRWU7QUFBekMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0Q7QUFDRixHQVpELENBWUUsT0FBT2pELEtBQVAsRUFBYztBQUNkLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRXNXLCtEQUFSO0FBQWdDclcsYUFBTyxFQUFFckI7QUFBekMsS0FBRCxDQUFUO0FBQ0EsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLEtBQUQsQ0FBVDtBQUNEOztBQUNELFFBQU1mLDhEQUFHLENBQUNnVyxrRUFBaUIsQ0FBQyxFQUFELENBQWxCLENBQVQ7QUFDQSxRQUFNaFcsOERBQUcsQ0FBQztBQUFFZCxRQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsR0FBRCxDQUFUO0FBQ0Q7O0FBRUQsVUFBVW9WLFlBQVYsQ0FBdUI7QUFBRWhYO0FBQUYsQ0FBdkIsRUFBb0M7QUFDbEMsTUFBSTtBQUNGLFVBQU1hLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsS0FBRCxDQUFUO0FBQ0EsVUFBTUosSUFBSSxHQUFHRCxpRUFBZ0IsQ0FBQyxNQUFELENBQTdCO0FBQ0EsVUFBTU0sUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUM0Qyw2Q0FBRCxFQUFPLGdDQUErQmxELElBQUksQ0FBQ2IsUUFBUyxFQUFwRCxFQUF1REcsT0FBdkQsRUFBZ0UsRUFBaEUsQ0FBM0I7O0FBQ0EsUUFBSWUsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQTFCLEVBQWlDO0FBQy9CLFlBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTJXLGtFQUFSO0FBQW1DMVcsZUFBTyxFQUFFZTtBQUE1QyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNZiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTRXLGtFQUFSO0FBQW1DM1csZUFBTyxFQUFFZTtBQUE1QyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDtBQUNGLEdBWEQsQ0FXRSxPQUFPakQsS0FBUCxFQUFjO0FBQ2QsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFNFcsa0VBQVI7QUFBbUMzVyxhQUFPLEVBQUVyQjtBQUE1QyxLQUFELENBQVQ7QUFDQSxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsS0FBRCxDQUFUO0FBQ0Q7O0FBQ0QsUUFBTWYsOERBQUcsQ0FBQztBQUFFZCxRQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsR0FBRCxDQUFUO0FBQ0Q7O0FBRUQsVUFBVXFWLGNBQVYsQ0FBeUI7QUFBRWpYO0FBQUYsQ0FBekIsRUFBc0M7QUFDcEMsTUFBSTtBQUNGLFVBQU1hLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsS0FBRCxDQUFUO0FBQ0EsVUFBTUosSUFBSSxHQUFHRCxpRUFBZ0IsQ0FBQyxNQUFELENBQTdCO0FBQ0EsVUFBTU0sUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUM0Qyw2Q0FBRCxFQUFPLHFCQUFvQmxELElBQUksQ0FBQ2IsUUFBUyxFQUF6QyxFQUE0QyxFQUE1QyxFQUFnRCxFQUFoRCxDQUEzQjs7QUFDQSxRQUFJa0IsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQTFCLEVBQWlDO0FBQy9CLFlBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRXdXLDREQUFSO0FBQTZCdlcsZUFBTyxFQUFFZTtBQUF0QyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNZiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRXlXLDREQUFSO0FBQTZCeFcsZUFBTyxFQUFFZTtBQUF0QyxPQUFELENBQVQ7QUFDQSxZQUFNRiw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRTZCLDBEQUFVQTtBQUFsQixPQUFELENBQVQ7QUFDRDtBQUNGLEdBWEQsQ0FXRSxPQUFPakQsS0FBUCxFQUFjO0FBQ2QsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFeVcsNERBQVI7QUFBNkJ4VyxhQUFPLEVBQUVyQjtBQUF0QyxLQUFELENBQVQ7QUFDQSxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsS0FBRCxDQUFUO0FBQ0Q7O0FBQ0QsUUFBTWYsOERBQUcsQ0FBQztBQUFFZCxRQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsR0FBRCxDQUFUO0FBQ0Q7O0FBR2MsVUFBVWtCLElBQVYsR0FBaUI7QUFDOUIsUUFBTUMscUVBQVUsQ0FBQ29ULCtEQUFELEVBQXlCVyxpQkFBekIsQ0FBaEI7QUFDQSxRQUFNL1QscUVBQVUsQ0FBQzBULGtFQUFELEVBQTRCTyxZQUE1QixDQUFoQjtBQUNBLFFBQU1qVSxxRUFBVSxDQUFDdVQsNERBQUQsRUFBc0JXLGNBQXRCLENBQWhCO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDMUVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWU7QUFDWHZXLCtEQURXO0FBRVh3VywwRUFGVztBQUdYQyxrRUFIVztBQUlYQyw4REFKVztBQUtYQyw4RUFMVztBQU1YQyw4REFOVztBQU9YQyx3RkFQVztBQVFYQyxnRUFSVztBQVNYQyxzRkFUVztBQVVYQyw0RkFWVztBQVdYQywyRkFYVztBQVlYQyxpRUFaVztBQWFYQyx5RUFiVztBQWNYQywwRkFkVztBQWVYQyxnRkFmVztBQWdCWEMsa0dBaEJXO0FBaUJYQyxpRkFqQlc7QUFrQlhDLGlGQWxCVztBQW1CWEMsNkVBbkJXO0FBb0JYQyw4RUFwQlc7QUFxQlhDLHlFQUFXQTtBQXJCQSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxVQUFVQyxRQUFWLEdBQXFCO0FBQ2hDLE1BQUk7QUFDQSxVQUFNQyw4REFBRyxDQUFDLENBQ043WCw0REFBSSxFQURFLEVBQ0U2VyxnRUFBUyxFQURYLEVBQ2VILDJEQUFJLEVBRG5CLEVBQ3VCb0IsZ0VBQVEsRUFEL0IsRUFDbUNYLCtEQUFVLEVBRDdDLEVBQ2lESSxxRUFBYSxFQUQ5RCxFQUNrRVEsbUVBQVksRUFEOUUsRUFDa0ZDLDhEQUFPLEVBRHpGLEVBQzZGQyw4REFBTyxFQURwRyxFQUN3R0MsNERBQUksRUFENUcsRUFDZ0h0QiwyREFBSSxFQURwSCxDQUFELENBQVQ7QUFHSCxHQUpELENBSUUsT0FBTzNJLEdBQVAsRUFBWTtBQUNWek4sV0FBTyxDQUFDQyxHQUFSLENBQVl3TixHQUFaO0FBQ0g7QUFDSixDOzs7Ozs7Ozs7Ozs7QUNyQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ08sTUFBTWtLLE9BQU8sR0FBRyxzQ0FBaEIsQyxDQUNQOztBQUVBLE1BQU1DLFlBQVksR0FBRztBQUNuQkMsTUFBSSxFQUFFLGlDQURhO0FBRW5CQyxZQUFVLEVBQUUsaURBRk87QUFHbkJDLGFBQVcsRUFBRTtBQUhNLENBQXJCOztBQU1BLE1BQU1oWSxJQUFJLEdBQUcsQ0FBQ2lZLFFBQUQsRUFBV0MsSUFBSSxHQUFHLEVBQWxCLEVBQXNCM1ksS0FBdEIsRUFBNkI0WSxZQUE3QixLQUE4QztBQUN6RCxRQUFNQyxNQUFNLEdBQUksR0FBRVIsT0FBUSxHQUFFSyxRQUFTLEVBQXJDO0FBQ0EsUUFBTUksY0FBYyxHQUFHO0FBQ3JCQyxVQUFNLEVBQUUsTUFEYTtBQUVyQkMsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxnREFERDtBQUVQLHNCQUFnQkwsWUFBWSxHQUFHTixZQUFZLENBQUNFLFVBQWhCLEdBQTZCRixZQUFZLENBQUNDLElBRi9EO0FBR1AsdUJBQWtCLFVBQVN0WSxpRUFBZ0IsQ0FBQyxPQUFELENBQVU7QUFIOUMsS0FGWTtBQU9yQjBZLFFBQUksRUFBRUMsWUFBWSxHQUFHaEssZ0VBQWUsQ0FBQytKLElBQUQsQ0FBbEIsR0FBMkJqWCxJQUFJLENBQUNDLFNBQUwsQ0FBZWdYLElBQWY7QUFQeEIsR0FBdkI7QUFTQSxRQUFNcFksUUFBUSxHQUFHMlksS0FBSyxDQUFDTCxNQUFELEVBQVNDLGNBQVQsQ0FBTCxDQUNkSyxJQURjLENBQ1RDLGFBQWEsSUFBSUEsYUFBYSxDQUFDYixJQUFkLEVBRFIsRUFFZGMsS0FGYyxDQUVSbGIsS0FBSyxJQUFJQSxLQUZELENBQWpCO0FBR0EsU0FBT29DLFFBQVA7QUFDRCxDQWZEOztBQWlCQSxNQUFNZ0IsWUFBWSxHQUFHLENBQUNtWCxRQUFELEVBQVdDLElBQUksR0FBRyxFQUFsQixFQUFzQjNZLEtBQXRCLEtBQWdDO0FBQ25ELFFBQU02WSxNQUFNLEdBQUksR0FBRVIsT0FBUSxHQUFFSyxRQUFTLEVBQXJDO0FBQ0EsUUFBTVksY0FBYyxHQUFHLElBQUlDLFFBQUosRUFBdkI7QUFDQWxNLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZcUwsSUFBWixFQUFrQmpLLE9BQWxCLENBQTBCekIsR0FBRyxJQUFJcU0sY0FBYyxDQUFDRSxNQUFmLENBQXNCdk0sR0FBdEIsRUFBMkIwTCxJQUFJLENBQUMxTCxHQUFELENBQS9CLENBQWpDO0FBQ0EsUUFBTTZMLGNBQWMsR0FBRztBQUNyQkMsVUFBTSxFQUFFLE1BRGE7QUFFckJDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUUsZ0RBREQ7QUFFUCx1QkFBa0IsVUFBU2haLGlFQUFnQixDQUFDLE9BQUQsQ0FBVSxFQUY5QyxDQUdQOztBQUhPLEtBRlk7QUFPckIwWSxRQUFJLEVBQUVXO0FBUGUsR0FBdkI7QUFTQSxRQUFNL1ksUUFBUSxHQUFHMlksS0FBSyxDQUFDTCxNQUFELEVBQVNDLGNBQVQsQ0FBTCxDQUNkSyxJQURjLENBQ1RDLGFBQWEsSUFBSUEsYUFBYSxDQUFDYixJQUFkLEVBRFIsRUFFZGMsS0FGYyxDQUVSbGIsS0FBSyxJQUFJQSxLQUZELENBQWpCO0FBR0EsU0FBT29DLFFBQVA7QUFDRCxDQWpCRDs7QUFtQkEsTUFBTWdLLFdBQVcsR0FBRyxDQUFDbU8sUUFBRCxFQUFXQyxJQUFJLEdBQUcsRUFBbEIsRUFBc0IzWSxLQUF0QixLQUFnQztBQUNsRCxRQUFNNlksTUFBTSxHQUFJLEdBQUVSLE9BQVEsR0FBRUssUUFBUyxFQUFyQztBQUNBLFFBQU1ZLGNBQWMsR0FBRyxJQUFJQyxRQUFKLEVBQXZCO0FBQ0FsTSxRQUFNLENBQUNDLElBQVAsQ0FBWXFMLElBQVosRUFBa0JqSyxPQUFsQixDQUEwQnpCLEdBQUcsSUFBSXFNLGNBQWMsQ0FBQ0UsTUFBZixDQUFzQnZNLEdBQXRCLEVBQTJCMEwsSUFBSSxDQUFDMUwsR0FBRCxDQUEvQixDQUFqQztBQUNBLFFBQU02TCxjQUFjLEdBQUc7QUFDckJDLFVBQU0sRUFBRSxLQURhO0FBRXJCQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLGdEQUREO0FBRVAsdUJBQWtCLFVBQVNoWixpRUFBZ0IsQ0FBQyxPQUFELENBQVUsRUFGOUMsQ0FHUDs7QUFITyxLQUZZO0FBT3JCMFksUUFBSSxFQUFFVztBQVBlLEdBQXZCO0FBVUEsUUFBTS9ZLFFBQVEsR0FBRzJZLEtBQUssQ0FBQ0wsTUFBRCxFQUFTQyxjQUFULENBQUwsQ0FDZEssSUFEYyxDQUNUQyxhQUFhLElBQUlBLGFBQWEsQ0FBQ2IsSUFBZCxFQURSLEVBRWRjLEtBRmMsQ0FFUmxiLEtBQUssSUFBSUEsS0FGRCxDQUFqQjtBQUdBLFNBQU9vQyxRQUFQO0FBQ0QsQ0FsQkQ7O0FBcUJBLE1BQU1tRyxNQUFNLEdBQUcsQ0FBQ2dTLFFBQUQsRUFBV0MsSUFBSSxHQUFHLEVBQWxCLEVBQXNCM1ksS0FBdEIsRUFBNkI0WSxZQUE3QixLQUE4QztBQUMzRCxRQUFNQyxNQUFNLEdBQUksR0FBRVIsT0FBUSxHQUFFSyxRQUFTLEVBQXJDO0FBQ0EsUUFBTUksY0FBYyxHQUFHO0FBQ3JCQyxVQUFNLEVBQUUsUUFEYTtBQUVyQkMsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxnREFERDtBQUVQLHNCQUFnQkwsWUFBWSxHQUFHTixZQUFZLENBQUNFLFVBQWhCLEdBQTZCRixZQUFZLENBQUNDLElBRi9EO0FBR1A7QUFDQSx1QkFBa0IsVUFBU3RZLGlFQUFnQixDQUFDLE9BQUQsQ0FBVTtBQUo5QyxLQUZZO0FBUXJCMFksUUFBSSxFQUFFQyxZQUFZLEdBQUdoSyxnRUFBZSxDQUFDK0osSUFBRCxDQUFsQixHQUEyQmpYLElBQUksQ0FBQ0MsU0FBTCxDQUFlZ1gsSUFBZjtBQVJ4QixHQUF2QjtBQVVBLFFBQU1wWSxRQUFRLEdBQUcyWSxLQUFLLENBQUNMLE1BQUQsRUFBU0MsY0FBVCxDQUFMLENBQ2RLLElBRGMsQ0FDVDVZLFFBQVEsSUFBSUEsUUFBUSxDQUFDZ1ksSUFBVCxFQURILEVBRWRjLEtBRmMsQ0FFUmxiLEtBQUssSUFBSUEsS0FGRCxDQUFqQjtBQUdBLFNBQU9vQyxRQUFQO0FBQ0QsQ0FoQkQ7O0FBa0JBLE1BQU1vUyxHQUFHLEdBQUcsQ0FBQytGLFFBQUQsRUFBV0MsSUFBSSxHQUFHLEVBQWxCLEVBQXNCM1ksS0FBdEIsRUFBNkI0WSxZQUE3QixLQUE4QztBQUN4RCxRQUFNQyxNQUFNLEdBQUksR0FBRVIsT0FBUSxHQUFFSyxRQUFTLEVBQXJDO0FBQ0EsUUFBTUksY0FBYyxHQUFHO0FBQ3JCQyxVQUFNLEVBQUUsS0FEYTtBQUVyQkMsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxnREFERDtBQUVQLHNCQUFnQkwsWUFBWSxHQUFHTixZQUFZLENBQUNFLFVBQWhCLEdBQTZCRixZQUFZLENBQUNDLElBRi9EO0FBR1A7QUFDQSx1QkFBa0IsVUFBU3RZLGlFQUFnQixDQUFDLE9BQUQsQ0FBVTtBQUo5QyxLQUZZO0FBUXJCMFksUUFBSSxFQUFFQyxZQUFZLEdBQUdoSyxnRUFBZSxDQUFDK0osSUFBRCxDQUFsQixHQUEyQmpYLElBQUksQ0FBQ0MsU0FBTCxDQUFlZ1gsSUFBZjtBQVJ4QixHQUF2QjtBQVdBLFFBQU1wWSxRQUFRLEdBQUcyWSxLQUFLLENBQUNMLE1BQUQsRUFBU0MsY0FBVCxDQUFMLENBQ2RLLElBRGMsQ0FDVDVZLFFBQVEsSUFBSUEsUUFBUSxDQUFDZ1ksSUFBVCxFQURILEVBRWRjLEtBRmMsQ0FFUmxiLEtBQUssSUFBSUEsS0FGRCxDQUFqQjtBQUdBLFNBQU9vQyxRQUFQO0FBQ0QsQ0FqQkQ7O0FBbUJBLE1BQU02QyxHQUFHLEdBQUcsQ0FBQ3NWLFFBQUQsRUFBV0MsSUFBSSxHQUFHLEVBQWxCLEVBQXNCM1ksS0FBdEIsRUFBNkI0WSxZQUE3QixLQUE4QztBQUN4RGxZLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCWCxLQUE5QjtBQUNBLFFBQU02WSxNQUFNLEdBQUdELFlBQVksR0FDdEIsR0FBRVAsT0FBUSxHQUFFSyxRQUFTLEdBQUU5SixnRUFBZSxDQUFDK0osSUFBRCxDQUFPLEVBRHZCLEdBRXRCLEdBQUVOLE9BQVEsR0FBRUssUUFBUyxFQUYxQjtBQUdBLFFBQU1JLGNBQWMsR0FBRztBQUNyQkMsVUFBTSxFQUFFLEtBRGE7QUFFckJDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUUsZ0RBREQ7QUFFUCxzQkFBZ0JMLFlBQVksR0FBR04sWUFBWSxDQUFDRSxVQUFoQixHQUE2QkYsWUFBWSxDQUFDQyxJQUYvRDtBQUdQO0FBQ0EsdUJBQWtCLFVBQVN0WSxpRUFBZ0IsQ0FBQyxPQUFELENBQWhCLElBQTZCRCxLQUFNO0FBSnZELEtBRlk7QUFRckJELFFBQUksRUFBRTZZLFlBQVksR0FBR2hLLGdFQUFlLENBQUMrSixJQUFELENBQWxCLEdBQTJCalgsSUFBSSxDQUFDQyxTQUFMLENBQWVnWCxJQUFmO0FBUnhCLEdBQXZCO0FBVUFjLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyw0QkFBWixHQUEyQyxHQUEzQztBQUNBLFFBQU1wWixRQUFRLEdBQUcyWSxLQUFLLENBQUNMLE1BQUQsRUFBU0MsY0FBVCxDQUFMLENBQ2RLLElBRGMsQ0FDVDVZLFFBQVEsSUFBSUEsUUFBUSxDQUFDZ1ksSUFBVCxFQURILEVBRWRjLEtBRmMsQ0FFUmxiLEtBQUssSUFBSUEsS0FGRCxDQUFqQjtBQUdBLFNBQU9vQyxRQUFQO0FBQ0QsQ0FwQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxNQUFNcVosY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR0Msb0ZBQXNCLEVBQS9DOztBQUVBLE1BQU1DLFNBQVMsR0FBSWxhLFlBQUQsSUFBa0I7QUFDbEM7O0FBQ0E7O0FBQ0E7QUFDQSxRQUFNbWEsZ0JBQWdCLEdBQUksTUFBRCxJQUFrRkMsNkNBQTNHO0FBQ0E7O0FBQ0EsUUFBTUMsV0FBVyxHQUFHLENBQUNQLGNBQUQsRUFBaUJFLGdCQUFqQixDQUFwQjtBQUNBLFFBQU0vTSxLQUFLLEdBQUdxTix5REFBVyxDQUN2QkMsNkRBQWUsaUNBQU1DLGlEQUFOO0FBQWdCQyxVQUFNLEVBQUVDLG1FQUFhQTtBQUFyQyxLQURRLEVBRXZCMWEsWUFGdUIsRUFHdkJtYSxnQkFBZ0IsQ0FBQ1EsNkRBQWUsQ0FBQyxHQUFHTixXQUFKLENBQWhCLENBSE8sQ0FBekI7O0FBUUFwTixPQUFLLENBQUMyTixPQUFOLEdBQWdCLE1BQU07QUFDcEI7QUFDQSxRQUFJM04sS0FBSyxDQUFDNE4sSUFBVixFQUFnQjtBQUNoQjVOLFNBQUssQ0FBQzROLElBQU4sR0FBYWYsY0FBYyxDQUFDZ0IsR0FBZixDQUFtQjlDLDhDQUFuQixDQUFiO0FBQ0QsR0FKRDs7QUFNQS9LLE9BQUssQ0FBQzhOLFFBQU4sR0FBaUIsWUFBWTtBQUMzQjtBQUNBLFFBQUksQ0FBQzlOLEtBQUssQ0FBQzROLElBQVgsRUFBaUI7QUFDakI1TixTQUFLLENBQUMrTixRQUFOLENBQWVDLDhDQUFmO0FBQ0EsVUFBTWhPLEtBQUssQ0FBQzROLElBQU4sQ0FBV0ssSUFBakI7QUFDQWpPLFNBQUssQ0FBQzROLElBQU4sR0FBYSxJQUFiO0FBQ0QsR0FORDs7QUFRQTVOLE9BQUssQ0FBQ2tPLGFBQU4sR0FBc0IsT0FBT0MsUUFBUCxFQUFpQkMsS0FBakIsS0FBMkI7QUFDL0M7QUFDQXBPLFNBQUssQ0FBQzJOLE9BQU4sR0FGK0MsQ0FHL0M7O0FBQ0FTLFNBQUssQ0FBQ3BPLEtBQUssQ0FBQytOLFFBQVAsQ0FBTCxDQUorQyxDQUsvQzs7QUFDQSxVQUFNL04sS0FBSyxDQUFDOE4sUUFBTixFQUFOLENBTitDLENBTy9DOztBQUNBLFFBQUksQ0FBQ0ssUUFBTCxFQUFlO0FBQ2JuTyxXQUFLLENBQUMyTixPQUFOO0FBQ0Q7QUFDRixHQVhELENBN0JrQyxDQTBDbEM7OztBQUNBM04sT0FBSyxDQUFDMk4sT0FBTjtBQUVBLFNBQU8zTixLQUFQO0FBQ0QsQ0E5Q0Q7O0FBZ0RlaU4sd0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1sRSxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNb0YsNEJBQTRCLEdBQUcsOEJBQXJDO0FBQ0EsTUFBTUMsNEJBQTRCLEdBQUcsOEJBQXJDO0FBQ0EsTUFBTUMsNEJBQTRCLEdBQUcsOEJBQXJDO0FBRUEsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMsY0FBYyxHQUFHeGMsT0FBTyxLQUFLO0FBQ3hDRCxNQUFJLEVBQUV1VyxtQkFEa0M7QUFFeEN0VztBQUZ3QyxDQUFMLENBQTlCO0FBS0EsTUFBTXljLGlCQUFpQixHQUFHNWMsUUFBUSxLQUFLO0FBQzVDRSxNQUFJLEVBQUU2Yiw0QkFEc0M7QUFFNUMvYjtBQUY0QyxDQUFMLENBQWxDO0FBS0EsTUFBTTZjLG9CQUFvQixHQUFJMWMsT0FBRCxLQUFjO0FBQ2hERCxNQUFJLEVBQUVnYyxzQkFEMEM7QUFFaEQvYjtBQUZnRCxDQUFkLENBQTdCO0FBS0EsTUFBTTJjLHFCQUFxQixHQUFJM2MsT0FBRCxLQUFjO0FBQ2pERCxNQUFJLEVBQUVtYyx1QkFEMkM7QUFFakRsYztBQUZpRCxDQUFkLENBQTlCO0FBS0EsTUFBTTRjLGtCQUFrQixHQUFJNWMsT0FBRCxLQUFjO0FBQzlDRCxNQUFJLEVBQUVzYyxvQkFEd0M7QUFFOUNyYztBQUY4QyxDQUFkLENBQTNCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENQO0FBRUEsTUFBTU0sWUFBWSxHQUFHO0FBQ25CQyxNQUFJLEVBQUUsSUFEYTtBQUVuQjVCLE9BQUssRUFBRTtBQUZZLENBQXJCO0FBS2UseUVBQVVnQyxLQUFLLEdBQUdMLFlBQWxCLEVBQWdDO0FBQUVQLE1BQUY7QUFBUUM7QUFBUixDQUFoQyxFQUFtRDtBQUNoRSxVQUFRRCxJQUFSO0FBQ0UsU0FBS3VXLDREQUFMO0FBQ0UsNkNBQVkzVixLQUFaO0FBQW1CaEMsYUFBSyxFQUFFO0FBQTFCOztBQUNGLFNBQUs0WCw0REFBTDtBQUNFLDZDQUFZNVYsS0FBWjtBQUFtQkosWUFBSSxFQUFFUDtBQUF6Qjs7QUFDRixTQUFLd1csNERBQUw7QUFDRSw2Q0FBWTdWLEtBQVo7QUFBbUJoQyxhQUFLLEVBQUVxQjtBQUExQjs7QUFDRixTQUFLNGIscUVBQUw7QUFDRSw2Q0FBWWpiLEtBQVo7QUFBbUJoQyxhQUFLLEVBQUU7QUFBMUI7O0FBQ0YsU0FBS2tkLHFFQUFMO0FBQ0UsNkNBQVlsYixLQUFaO0FBQW1CSixZQUFJLEVBQUVQO0FBQXpCOztBQUNGLFNBQUs4YixxRUFBTDtBQUNFLDZDQUFZbmIsS0FBWjtBQUFtQmhDLGFBQUssRUFBRXFCO0FBQTFCOztBQUNGO0FBQ0UsYUFBT1csS0FBUDtBQWRKO0FBZ0JELEM7Ozs7Ozs7Ozs7OztBQ3hCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsVUFBVTZiLGNBQVYsQ0FBeUI7QUFBRXhjO0FBQUYsQ0FBekIsRUFBc0M7QUFDcEMsTUFBSTtBQUNGLFVBQU1hLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFZSw0REFBWUE7QUFBcEIsS0FBRCxDQUFUO0FBQ0EsVUFBTUosSUFBSSxHQUFHRCxpRUFBZ0IsQ0FBQyxNQUFELENBQTdCO0FBQ0EsVUFBTU0sUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUM0Qyw2Q0FBRCxFQUFPLDBCQUF5QmxELElBQUksQ0FBQ2dHLEVBQUcsRUFBeEMsRUFBMkMsRUFBM0MsRUFBK0MsRUFBL0MsRUFBbUQsS0FBbkQsQ0FBM0I7O0FBQ0EsUUFBSTNGLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUExQixFQUFpQztBQUMvQixZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUV3Vyw0REFBUjtBQUE2QnZXLGVBQU8sRUFBRWU7QUFBdEMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsWUFBTWYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUV5Vyw0REFBUjtBQUE2QnhXLGVBQU8sRUFBRWU7QUFBdEMsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0Q7QUFDRixHQVhELENBV0UsT0FBT2pELEtBQVAsRUFBYztBQUNkLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRXlXLDREQUFSO0FBQTZCeFcsYUFBTyxFQUFFckI7QUFBdEMsS0FBRCxDQUFUO0FBQ0EsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLEtBQUQsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsVUFBVWliLHFCQUFWLENBQWdDaGQsUUFBaEMsRUFBMEM7QUFDeEMsTUFBSTtBQUNGLFVBQU1nQiw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRWUsNERBQVlBO0FBQXBCLEtBQUQsQ0FBVDtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDNEMsNkNBQUQsRUFBTyxxQkFBb0IvRCxRQUFRLENBQUNBLFFBQVMsRUFBN0MsRUFBZ0QsRUFBaEQsRUFBb0QsRUFBcEQsRUFBd0QsS0FBeEQsQ0FBM0I7O0FBQ0EsUUFBSWtCLFFBQVEsSUFBSSxDQUFDQSxRQUFRLENBQUNwQyxLQUExQixFQUFpQztBQUMvQixZQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU4YixxRUFBUjtBQUFzQzdiLGVBQU8sRUFBRWU7QUFBL0MsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsWUFBTWYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUUrYixxRUFBUjtBQUFzQzliLGVBQU8sRUFBRWU7QUFBL0MsT0FBRCxDQUFUO0FBQ0EsWUFBTUYsOERBQUcsQ0FBQztBQUFFZCxZQUFJLEVBQUU2QiwwREFBVUE7QUFBbEIsT0FBRCxDQUFUO0FBQ0Q7QUFDRixHQVZELENBVUUsT0FBT2pELEtBQVAsRUFBYztBQUNkLFVBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFVBQUksRUFBRStiLHFFQUFSO0FBQXNDOWIsYUFBTyxFQUFFckI7QUFBL0MsS0FBRCxDQUFUO0FBQ0EsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFNkIsMERBQVVBO0FBQWxCLEtBQUQsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsVUFBVWtiLGlCQUFWLENBQTRCO0FBQUU5YztBQUFGLENBQTVCLEVBQXlDO0FBQ3ZDLE1BQUk7QUFDRixVQUFNZSxRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0MsOENBQUQsRUFBUSw0QkFBMkJqQixPQUFPLENBQUNtSyxJQUFLLEVBQWhELEVBQW1ELEVBQW5ELEVBQXVELEVBQXZELEVBQTJELEtBQTNELENBQTNCOztBQUNBLFFBQUlwSixRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDcEMsS0FBMUIsRUFBaUM7QUFDL0IsWUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFaWMsK0RBQVI7QUFBZ0NoYyxlQUFPLEVBQUVlO0FBQXpDLE9BQUQsQ0FBVDtBQUNELEtBRkQsTUFFTztBQUNMLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFa2MsK0RBQVI7QUFBZ0NqYyxlQUFPLEVBQUVlO0FBQXpDLE9BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FQRCxDQU9FLE9BQU9wQyxLQUFQLEVBQWM7QUFDZCxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVrYywrREFBUjtBQUFnQ2pjLGFBQU8sRUFBRXJCO0FBQXpDLEtBQUQsQ0FBVDtBQUNEOztBQUNELFFBQU1rQyw4REFBRyxDQUFDNEksOEVBQW1CLENBQUM7QUFBRVUsUUFBSSxFQUFFbkssT0FBTyxDQUFDbUs7QUFBaEIsR0FBRCxDQUFwQixDQUFUO0FBQ0Q7O0FBRUQsVUFBVTRTLGtCQUFWLENBQTZCO0FBQUUvYztBQUFGLENBQTdCLEVBQTBDO0FBQ3hDLE1BQUk7QUFDRixVQUFNeUcsTUFBTSxHQUFHaEcsaUVBQWdCLENBQUMsTUFBRCxDQUFoQixDQUF5QmlHLEVBQXhDO0FBQ0EsVUFBTTNGLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDa0csZ0RBQUQsRUFBVSxrQ0FBaUNsSCxPQUFPLENBQUNtSyxJQUFLLEVBQXhELEVBQTJELEVBQTNELEVBQStELEVBQS9ELEVBQW1FLEtBQW5FLENBQTNCOztBQUNBLFFBQUlwSixRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDcEMsS0FBMUIsRUFBaUM7QUFDL0IsWUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFb2MsZ0VBQVI7QUFBaUNuYyxlQUFPLEVBQUVlO0FBQTFDLE9BQUQsQ0FBVDtBQUNELEtBRkQsTUFFTztBQUNMLFlBQU1GLDhEQUFHLENBQUM7QUFBRWQsWUFBSSxFQUFFcWMsZ0VBQVI7QUFBaUNwYyxlQUFPLEVBQUVlO0FBQTFDLE9BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FSRCxDQVFFLE9BQU9wQyxLQUFQLEVBQWM7QUFDZCxVQUFNa0MsOERBQUcsQ0FBQztBQUFFZCxVQUFJLEVBQUVxYyxnRUFBUjtBQUFpQ3BjLGFBQU8sRUFBRXJCO0FBQTFDLEtBQUQsQ0FBVDtBQUNEOztBQUNELFFBQU1rQyw4REFBRyxDQUFDNEksOEVBQW1CLENBQUM7QUFBRVUsUUFBSSxFQUFFbkssT0FBTyxDQUFDbUs7QUFBaEIsR0FBRCxDQUFwQixDQUFUO0FBQ0Q7O0FBRUQsVUFBVTZTLGVBQVYsQ0FBMEI7QUFBRWhkO0FBQUYsQ0FBMUIsRUFBdUM7QUFDckMsTUFBSTtBQUNGLFVBQU1lLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDQyw4Q0FBRCxFQUFRLGlCQUFSLEVBQTBCakIsT0FBMUIsRUFBbUMsRUFBbkMsRUFBdUMsS0FBdkMsQ0FBM0I7O0FBQ0EsUUFBSWUsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3BDLEtBQTFCLEVBQWlDO0FBQy9CLFlBQU1rQyw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRXVjLDZEQUFSO0FBQThCdGMsZUFBTyxFQUFFZTtBQUF2QyxPQUFELENBQVQ7QUFDQXVCLDBEQUFLLENBQUNsQixPQUFOLENBQWMsbUNBQWQ7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNUCw4REFBRyxDQUFDO0FBQUVkLFlBQUksRUFBRXdjLDZEQUFSO0FBQThCdmMsZUFBTyxFQUFFZTtBQUF2QyxPQUFELENBQVQ7QUFDRDtBQUNGLEdBUkQsQ0FRRSxPQUFPcEMsS0FBUCxFQUFjO0FBQ2QsVUFBTWtDLDhEQUFHLENBQUM7QUFBRWQsVUFBSSxFQUFFd2MsNkRBQVI7QUFBOEJ2YyxhQUFPLEVBQUVyQjtBQUF2QyxLQUFELENBQVQ7QUFDRDtBQUNGOztBQUdjLFVBQVVtRSxJQUFWLEdBQWlCO0FBQzlCLFFBQU1DLHFFQUFVLENBQUN1VCw0REFBRCxFQUFzQmtHLGNBQXRCLENBQWhCO0FBQ0EsUUFBTXpaLHFFQUFVLENBQUM2WSxxRUFBRCxFQUErQmlCLHFCQUEvQixDQUFoQjtBQUNBLFFBQU05WixxRUFBVSxDQUFDZ1osK0RBQUQsRUFBeUJlLGlCQUF6QixDQUFoQjtBQUNBLFFBQU0vWixxRUFBVSxDQUFDbVosZ0VBQUQsRUFBMEJhLGtCQUExQixDQUFoQjtBQUNBLFFBQU1oYSxxRUFBVSxDQUFDc1osNkRBQUQsRUFBdUJXLGVBQXZCLENBQWhCO0FBRUQsQzs7Ozs7Ozs7Ozs7QUNsR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLGlCQUFpQixtQkFBTyxDQUFDLGlFQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E1Qzs7QUFDQTs7O0FBZUE7Ozs7O0FBSUEsa0NBQWtDO0FBQUE7QUFBbEM7QUFBa0MsQ0FBbEMsRUFHeUM7QUFDdkMsUUFBTUMsU0FBUyxHQUFHLE1BQU0sMkNBQXhCLEdBQXdCLENBQXhCO0FBQ0EsU0FBTztBQUFQO0FBQU8sR0FBUDtBQUdhOztBQUFBLGtCQUEyQ0MsZUFBTUMsU0FBakQsQ0FHYjtBQUlBO0FBQ0E7QUFDQTtBQUNBQyxtQkFBaUIsb0JBQTRDO0FBQzNEO0FBR0ZDOztBQUFBQSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXFELEtBQTNEO0FBR0Esd0JBQ0UscUVBR0k7QUFDQTtBQUNJLE1BQUVDLE9BQU8sSUFBVCxXQUF3QjtBQUFFeFosU0FBRyxFQUFFeVosU0FBUyxDQUF4QyxNQUF3QztBQUFoQixLQUF4QixHQU5WLEVBQ0UsRUFERjtBQWZGOztBQUFBOzs7QUFIbUJDLEcsQ0FJWkMsbUJBSllELEdBSVVFLGtCQUpWRjtBQUFBQSxHLENBS1pHLGVBTFlILEdBS01FLGtCQUxORjtBQStCckI7QUFDQTs7QUFFQSxVQUEyQztBQUN6Q0ksZUFBYSxHQUFHLHFCQUFTLE1BQU07QUFDN0IxYyxXQUFPLENBQVBBO0FBREYwYyxHQUFnQixDQUFoQkE7QUFNQUMsU0FBTyxHQUFHLHFCQUFTLE1BQU07QUFDdkIzYyxXQUFPLENBQVBBO0FBREYyYyxHQUFVLENBQVZBO0FBT0YsQyxDQUFBOzs7QUFDTyxzQkFBMkI7QUFDaEMsWUFBMkNELGFBQWE7QUFDeEQsU0FBT0UsQ0FBQyxDQUFSO0FBR0s7O0FBQUEsMkJBQW1DO0FBQ3hDO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFDQSxTQUFPO0FBQ0wsZ0JBQVk7QUFDVixnQkFBMkNELE9BQU87QUFDbEQ7QUFIRzs7QUFLTCxtQkFBZTtBQUNiLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVBHOztBQVNMLGlCQUFhO0FBQ1gsZ0JBQTJDQSxPQUFPO0FBQ2xEO0FBWEc7O0FBYUxFLFFBQUksRUFBRSxNQUFNO0FBQ1YsZ0JBQTJDRixPQUFPO0FBQ2xEOUMsWUFBTSxDQUFOQTtBQWZHO0FBaUJMclosUUFBSSxFQUFFLGFBQThCO0FBQ2xDLGdCQUEyQ21jLE9BQU87QUFDbEQsYUFBTzlDLE1BQU0sQ0FBTkEsVUFBUCxFQUFPQSxDQUFQO0FBbkJHO0FBcUJMaUQsVUFBTSxFQUFFLGNBQStCO0FBQ3JDLGdCQUEyQ0gsT0FBTztBQUNsRCxZQUFNSSxTQUFTLEdBQUdDLEVBQUUsVUFBcEI7QUFDQSxZQUFNQyxPQUFPLEdBQUdELEVBQUUsSUFBbEI7QUFFQSxhQUFPbkQsTUFBTSxDQUFOQSxnQkFBUCxPQUFPQSxDQUFQO0FBMUJHO0FBNEJML0ssV0FBTyxFQUFFLGFBQThCO0FBQ3JDLGdCQUEyQzZOLE9BQU87QUFDbEQsYUFBTzlDLE1BQU0sQ0FBTkEsYUFBUCxFQUFPQSxDQUFQO0FBOUJHO0FBZ0NMcUQsYUFBUyxFQUFFLGNBQStCO0FBQ3hDLGdCQUEyQ1AsT0FBTztBQUNsRCxZQUFNUSxZQUFZLEdBQUdILEVBQUUsVUFBdkI7QUFDQSxZQUFNSSxVQUFVLEdBQUdKLEVBQUUsSUFBckI7QUFFQSxhQUFPbkQsTUFBTSxDQUFOQSxzQkFBUCxVQUFPQSxDQUFQO0FBckNKO0FBQU8sR0FBUDtBQXdDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTXdELEtBQU4sU0FBb0JmLCtDQUFwQixDQUF3QjtBQUN0QixlQUFhRyxlQUFiLENBQTZCO0FBQUVSLGFBQUY7QUFBYXRPO0FBQWIsR0FBN0IsRUFBaUQ7QUFDL0MsVUFBTW9PLFNBQVMsR0FBR0UsU0FBUyxDQUFDUSxlQUFWLEdBQTRCLE1BQU1SLFNBQVMsQ0FBQ1EsZUFBVixDQUEwQjlPLEdBQTFCLENBQWxDLEdBQW1FLEVBQXJGO0FBQ0EsV0FBTztBQUFFb087QUFBRixLQUFQO0FBQ0Q7O0FBRURJLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUYsZUFBRjtBQUFhRixlQUFiO0FBQXdCMVA7QUFBeEIsUUFBa0MsS0FBS2lSLEtBQTdDO0FBQ0EsV0FDRSxNQUFDLG9EQUFEO0FBQVUsV0FBSyxFQUFFalIsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsU0FBRCxlQUFlMFAsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREYsQ0FERixDQURGO0FBT0Q7O0FBZnFCOztBQWtCVHdCLHdIQUFTLENBQUNqRSxrREFBRCxDQUFULENBQXFCK0QsS0FBckIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJvbGxiYXIgZnJvbSAncm9sbGJhcic7XHJcblxyXG5leHBvcnQgY29uc3QgUm9sbGJhckVycm9yVHJhY2tpbmcgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFJvbGxiYXJPYmogPSBuZXcgUm9sbGJhcih7XHJcbiAgICAgICAgYWNjZXNzVG9rZW46IFwiZThjMDU5NTIzODMxNDllNmFiNmU3N2FlMDdiNjQxYzZcIixcclxuICAgICAgICBjYXB0dXJlVW5jYXVnaHQ6IHRydWUsXHJcbiAgICAgICAgY2FwdHVyZVVuaGFuZGxlZFJlamVjdGlvbnM6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBsb2dFcnJvSW5mbyA9IChpbmZvKSA9PiB7XHJcbiAgICAgICAgUm9sbGJhck9iai5pbmZvKGluZm8pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2dFcnJvckluUm9sbGJhciA9IChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHsgbG9nRXJyb0luZm8sIGxvZ0Vycm9ySW5Sb2xsYmFyIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2xsYmFyRXJyb3JUcmFja2luZzsiLCJleHBvcnQgY29uc3QgQVVUSF9SRVFVRVNUID0gJ0FVVEhfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBVVRIX1NVQ0NFU1MgPSAnQVVUSF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFVVEhfRkFJTFVSRSA9ICdBVVRIX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05VUF9SRVFVRVNUID0gJ1NJR05VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9TVUNDRVNTID0gJ1NJR05VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9GQUlMVVJFID0gJ1NJR05VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dPVVRfUkVRVUVTVCA9ICdMT0dPVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dPVVRfU1VDQ0VTUyA9ICdMT0dPVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dPVVRfRkFJTFVSRSA9ICdMT0dPVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0VORF9SRVNFVF9DT0RFX1JFUVVFU1QgPSAnU0VORF9SRVNFVF9DT0RFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0VORF9SRVNFVF9DT0RFX1NVQ0NFU1MgPSAnU0VORF9SRVNFVF9DT0RFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0VORF9SRVNFVF9DT0RFX0ZBSUxVUkUgPSAnU0VORF9SRVNFVF9DT0RFX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFU0VUX1BBU1NXT1JEX1JFUVVFU1QgPSAnUkVTRVRfUEFTU1dPUkRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRVNFVF9QQVNTV09SRF9TVUNDRVNTID0gJ1JFU0VUX1BBU1NXT1JEX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVTRVRfUEFTU1dPUkRfRkFJTFVSRSA9ICdSRVNFVF9QQVNTV09SRF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3QgPSAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiAoe1xyXG4gICAgdHlwZTogQVVUSF9SRVFVRVNULFxyXG4gICAgcGF5bG9hZDogeyB1c2VybmFtZSwgcGFzc3dvcmQgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwUmVxdWVzdCA9IChwYXlsb2FkKSA9PiAoe1xyXG4gICAgdHlwZTogU0lHTlVQX1JFUVVFU1QsXHJcbiAgICBwYXlsb2FkXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ091dCA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dPVVRfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZFJlc2V0Q29kZVJlcXVlc3QgPSAoZW1haWxBZGRyZXNzKSA9PiAoe1xyXG4gICAgdHlwZTogU0VORF9SRVNFVF9DT0RFX1JFUVVFU1QsXHJcbiAgICBlbWFpbEFkZHJlc3NcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRQYXNzd29yZFJlcXVlc3QgPSAocGF5bG9hZCkgPT4gKHtcclxuICAgIHR5cGU6IFJFU0VUX1BBU1NXT1JEX1JFUVVFU1QsXHJcbiAgICBwYXlsb2FkXHJcbn0pOyIsImltcG9ydCB7IEFVVEhfUkVRVUVTVCwgQVVUSF9TVUNDRVNTLCBBVVRIX0ZBSUxVUkUgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyByZWFkTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBkYXRhOiB7IHRva2VuOiByZWFkTG9jYWxTdG9yYWdlKCd0b2tlbicpLCB1c2VyOiByZWFkTG9jYWxTdG9yYWdlKCd1c2VyJykgfSxcclxuICAgIGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBVVRIX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogJycgfTtcclxuICAgICAgICBjYXNlIEFVVEhfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IHBheWxvYWQgfTtcclxuICAgICAgICBjYXNlIEFVVEhfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBwYXlsb2FkIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBBVVRIX1JFUVVFU1QsIEFVVEhfRkFJTFVSRSwgQVVUSF9TVUNDRVNTLCBTSUdOVVBfUkVRVUVTVCwgU0lHTlVQX1NVQ0NFU1MsIFNJR05VUF9GQUlMVVJFLFxyXG4gICAgbG9naW5SZXF1ZXN0LCBMT0dPVVRfUkVRVUVTVCwgTE9HT1VUX1NVQ0NFU1MsIExPR09VVF9GQUlMVVJFLFxyXG4gICAgU0VORF9SRVNFVF9DT0RFX1JFUVVFU1QsIFNFTkRfUkVTRVRfQ09ERV9TVUNDRVNTLCBTRU5EX1JFU0VUX0NPREVfRkFJTFVSRSxcclxuICAgIFJFU0VUX1BBU1NXT1JEX0ZBSUxVUkUsIFJFU0VUX1BBU1NXT1JEX1JFUVVFU1QsIFJFU0VUX1BBU1NXT1JEX1NVQ0NFU1NcclxufSBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgUG9zdCwgUG9zdEZvcm1EYXRhIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IExPQURFUl9TVEFSVCwgTE9BREVSX0VORCB9IGZyb20gXCIuLi9sb2FkZXIvYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyB3cml0ZUxvY2FsU3RvcmFnZSwgcmVtb3ZlTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgTE9HSU5fRVJST1JfU1RBUlQsIEVNQUlMX0VSUk9SX1NUQVJULCBVU0VSTkFNRV9FUlJPUl9TVEFSVCB9IGZyb20gXCIuLi9lcnJvci9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBSb2xsYmFyRXJyb3JUcmFja2luZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Sb2xsYmFyRXJyb3JUcmFja2luZ1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBzZXRDb29raWUsIGRlc3Ryb3lDb29raWUgfSBmcm9tIFwibm9va2llc1wiO1xyXG5cclxuZnVuY3Rpb24qIGxvZ2luKHsgcGF5bG9hZCB9KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUG9zdCwgXCJhdXRoL2xvZ2luXCIsIHBheWxvYWQsIHRydWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB3cml0ZUxvY2FsU3RvcmFnZSgndG9rZW4nLCByZXNwb25zZS50b2tlbik7XHJcbiAgICAgICAgICAgIHdyaXRlTG9jYWxTdG9yYWdlKCd1c2VyJywgcmVzcG9uc2UudXNlcik7XHJcbiAgICAgICAgICAgIHNldENvb2tpZShudWxsLCAndG9rZW4nLCByZXNwb25zZS50b2tlbiwge1xyXG4gICAgICAgICAgICAgICAgbWF4QWdlOiAxMCAqIDM2NSAqIDI0ICogNjAgKiA2MCxcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgeWllbGQgY2FsbChSb3V0ZXIucHVzaCgnLycpKVxyXG4gICAgICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBBVVRIX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEFVVEhfRkFJTFVSRSwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgICAgICAgIC8vUm9sbGJhckVycm9yVHJhY2tpbmcubG9nRXJyb0luZm8oSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKVxyXG4gICAgICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0dJTl9FUlJPUl9TVEFSVCB9KTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEFVVEhfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICAgICAgLy8gIFJvbGxiYXJFcnJvclRyYWNraW5nLmxvZ0Vycm9JbmZvKEpTT04uc3RyaW5naWZ5KGVycm9yKSlcclxuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0dJTl9FUlJPUl9TVEFSVCB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwU2FnYSh7IHBheWxvYWQgfSkge1xyXG4gICAgY29uc3QgdmFsdWVzID0geyB1c2VybmFtZTogcGF5bG9hZC51c2VybmFtZSwgcGFzc3dvcmQ6IHBheWxvYWQucGFzc3dvcmQgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX1NUQVJUIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChQb3N0Rm9ybURhdGEsIFwidXNlci9jcmVhdGUtdXNlclwiLCBwYXlsb2FkLCB7fSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlICYmICFyZXNwb25zZS5lcnJvciAmJiByZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IFNJR05VUF9TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KGxvZ2luUmVxdWVzdCh2YWx1ZXMudXNlcm5hbWUsIHZhbHVlcy5wYXNzd29yZCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5lbWFpbEFkZHJlc3MpIHtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEVNQUlMX0VSUk9SX1NUQVJUIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UudXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IFVTRVJOQU1FX0VSUk9SX1NUQVJUIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgUm9sbGJhckVycm9yVHJhY2tpbmcubG9nRXJyb0luZm8oSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IFNJR05VUF9GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgICAgICAgICAgUm9sbGJhckVycm9yVHJhY2tpbmcubG9nRXJyb0luZm8oSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogU0lHTlVQX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICAgICAgUm9sbGJhckVycm9yVHJhY2tpbmcubG9nRXJyb0luZm8oSlNPTi5zdHJpbmdpZnkoZXJyb3IpKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2VuZFJlc2V0Q29kZVNhZ2EocGF5bG9hZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfU1RBUlQgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFBvc3QsIGBhdXRoL3NlbmQtcmVzZXQtY29kZT9lbWFpbEFkZHJlc3M9JHtwYXlsb2FkLmVtYWlsQWRkcmVzc31gLCB7fSwge30pO1xyXG4gICAgICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IgJiYgcmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IFNFTkRfUkVTRVRfQ09ERV9TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIkUtcG9zdGFuxLF6xLEga29udHJvbCBlZGluXCIpXHJcbiAgICAgICAgICAgIHlpZWxkIGNhbGwoUm91dGVyLnB1c2goJy9zaWZyZS1zaWZpcmxhJykpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogU0VORF9SRVNFVF9DT0RFX0ZBSUxVUkUsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogU0VORF9SRVNFVF9DT0RFX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZXNldFBhc3N3b3JkU2FnYSh7IHBheWxvYWQgfSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfU1RBUlQgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFBvc3QsIFwiYXV0aC9yZXNldC1wYXNzd29yZFwiLCBwYXlsb2FkLCB7fSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlICYmICFyZXNwb25zZS5lcnJvciAmJiByZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogUkVTRVRfUEFTU1dPUkRfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCLFnmlmcmUgYmHFn2FyxLF5bGEgZGXEn2nFn3RpcmlsZGlcIilcclxuICAgICAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgICAgICAgICAgeWllbGQgY2FsbChSb3V0ZXIucHVzaCgnL2dpcmlzLXlhcCcpKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IFJFU0VUX1BBU1NXT1JEX0ZBSUxVUkUsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogUkVTRVRfUEFTU1dPUkRfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dFNhZ2EoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPR09VVF9TVUNDRVNTIH0pO1xyXG4gICAgICAgIHJlbW92ZUxvY2FsU3RvcmFnZShcInRva2VuXCIpO1xyXG4gICAgICAgIHJlbW92ZUxvY2FsU3RvcmFnZShcInVzZXJcIik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICBkZXN0cm95Q29va2llKG51bGwsICd0b2tlbicpXHJcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogXCJSRVNFVFwiIH0pO1xyXG4gICAgICAgIHlpZWxkIGNhbGwoUm91dGVyLnB1c2goJy9naXJpcy15YXAnKSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9HT1VUX0ZBSUxVUkUgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBTYWdhKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBVVRIX1JFUVVFU1QsIGxvZ2luKTtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTlVQX1JFUVVFU1QsIHNpZ25VcFNhZ2EpO1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dPVVRfUkVRVUVTVCwgbG9nT3V0U2FnYSk7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNFTkRfUkVTRVRfQ09ERV9SRVFVRVNULCBzZW5kUmVzZXRDb2RlU2FnYSk7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFU0VUX1BBU1NXT1JEX1JFUVVFU1QsIHJlc2V0UGFzc3dvcmRTYWdhKTtcclxufSIsImV4cG9ydCBjb25zdCBHRVRfQ0FURUdPUklFU19SRVFVRVNUID0gJ0dFVF9DQVRFR09SSUVTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX0NBVEVHT1JJRVNfU1VDQ0VTUyA9ICdHRVRfQ0FURUdPUklFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9DQVRFR09SSUVTX0ZBSUxVUkUgPSAnR0VUX0NBVEVHT1JJRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0NPTVNfQllfQ0FURUdPUllfUkVRVUVTVCA9ICdHRVRfQ09NU19CWV9DQVRFR09SWV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9DT01TX0JZX0NBVEVHT1JZX1NVQ0NFU1MgPSAnR0VUX0NPTVNfQllfQ0FURUdPUllfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ09NU19CWV9DQVRFR09SWV9GQUlMVVJFID0gJ0dFVF9DT01TX0JZX0NBVEVHT1JZX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3JpZXNSZXF1ZXN0ID0gcGF5bG9hZCA9PiB7XHJcbiAgcmV0dXJuICh7XHJcbiAgICB0eXBlOiBHRVRfQ0FURUdPUklFU19SRVFVRVNULFxyXG4gICAgcGF5bG9hZCxcclxuICB9KTtcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldENvbXNCeUNhdGVnb3J5UmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBHRVRfQ09NU19CWV9DQVRFR09SWV9SRVFVRVNULFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuXHJcbiIsImltcG9ydCB7IEdFVF9DT01TX0JZX0NBVEVHT1JZX0ZBSUxVUkUsIEdFVF9DT01TX0JZX0NBVEVHT1JZX1JFUVVFU1QsIEdFVF9DT01TX0JZX0NBVEVHT1JZX1NVQ0NFU1MgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBHRVRfQUxMX0NPTU1VTklUWV9SRVFVRVNULCBHRVRfQUxMX0NPTU1VTklUWV9TVUNDRVNTLCBHRVRfQUxMX0NPTU1VTklUWV9GQUlMVVJFIH0gZnJvbSAnLi4vY29tbXVuaXR5L2FjdGlvbnMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBHRVRfQ09NU19CWV9DQVRFR09SWV9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6ICcnIH07XHJcbiAgICAgICAgY2FzZSBHRVRfQ09NU19CWV9DQVRFR09SWV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogcGF5bG9hZCB9O1xyXG4gICAgICAgIGNhc2UgR0VUX0NPTVNfQllfQ0FURUdPUllfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBwYXlsb2FkIH07XHJcbiAgICAgICAgY2FzZSBHRVRfQUxMX0NPTU1VTklUWV9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6ICcnIH07XHJcbiAgICAgICAgY2FzZSBHRVRfQUxMX0NPTU1VTklUWV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogcGF5bG9hZCB9O1xyXG4gICAgICAgIGNhc2UgR0VUX0FMTF9DT01NVU5JVFlfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBwYXlsb2FkIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdFVF9DQVRFR09SSUVTX0ZBSUxVUkUsIEdFVF9DQVRFR09SSUVTX1JFUVVFU1QsIEdFVF9DQVRFR09SSUVTX1NVQ0NFU1MgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGRhdGE6IG51bGwsXHJcbiAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KSB7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIEdFVF9DQVRFR09SSUVTX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogJycgfTtcclxuICAgIGNhc2UgR0VUX0NBVEVHT1JJRVNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IHBheWxvYWQgfTtcclxuICAgIGNhc2UgR0VUX0NBVEVHT1JJRVNfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBwYXlsb2FkIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdldCwgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gIEdFVF9DQVRFR09SSUVTX0ZBSUxVUkUsIEdFVF9DQVRFR09SSUVTX1JFUVVFU1QsIEdFVF9DQVRFR09SSUVTX1NVQ0NFU1MsIEdFVF9DT01TX0JZX0NBVEVHT1JZX0ZBSUxVUkUsXHJcbiAgR0VUX0NPTVNfQllfQ0FURUdPUllfUkVRVUVTVCwgR0VUX0NPTVNfQllfQ0FURUdPUllfU1VDQ0VTU1xyXG59IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgTE9BREVSX1NUQVJULCBMT0FERVJfRU5EIH0gZnJvbSBcIi4uL2xvYWRlci9hY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiogZ2V0Q2F0ZWdvcmllc1NhZ2EoeyBwYXlsb2FkIH0pIHtcclxuICBjb25zb2xlLmxvZygna2F0ZWdvcmkgc2FnYSBkYScpXHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChHZXQsIFwiY2F0ZWdvcnkvZ2V0LWFsbFwiLCB7fSwge30sIGZhbHNlKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX0NBVEVHT1JJRVNfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfQ0FURUdPUklFU19GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX0NBVEVHT1JJRVNfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldENvbXNCeUNhdGVnb3J5U2FnYSh7IHBheWxvYWQgfSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cmwgPSBgY2F0ZWdvcnkvZ2V0LWNvbW11bml0aWVzP25hbWU9JHtwYXlsb2FkLm5hbWV9YDtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChHZXQsIHVybCwge30sIHt9LCBmYWxzZSk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9DT01TX0JZX0NBVEVHT1JZX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX0NPTVNfQllfQ0FURUdPUllfRkFJTFVSRSwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9DT01TX0JZX0NBVEVHT1JZX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yIH0pO1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogU2FnYSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9DQVRFR09SSUVTX1JFUVVFU1QsIGdldENhdGVnb3JpZXNTYWdhKTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9DT01TX0JZX0NBVEVHT1JZX1JFUVVFU1QsIGdldENvbXNCeUNhdGVnb3J5U2FnYSk7XHJcbn0iLCJleHBvcnQgY29uc3QgQ1JFQVRFX0NPTU1FTlRfUkVRVUVTVCA9ICdDUkVBVEVfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENSRUFURV9DT01NRU5UX1NVQ0NFU1MgPSAnQ1JFQVRFX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfQ09NTUVOVF9GQUlMVVJFID0gJ0NSRUFURV9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9DT01NRU5UX1JFUVVFU1QgPSAnREVMRVRFX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09NTUVOVF9TVUNDRVNTID0gJ0RFTEVURV9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0NPTU1FTlRfRkFJTFVSRSA9ICdERUxFVEVfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09NTUVOVF9NT0RFUkFUT1JfUkVRVUVTVCA9ICdERUxFVEVfQ09NTUVOVF9NT0RFUkFUT1JfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09NTUVOVF9NT0RFUkFUT1JfU1VDQ0VTUyA9ICdERUxFVEVfQ09NTUVOVF9NT0RFUkFUT1JfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09NTUVOVF9NT0RFUkFUT1JfRkFJTFVSRSA9ICdERUxFVEVfQ09NTUVOVF9NT0RFUkFUT1JfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1JFUExZX1JFUVVFU1QgPSAnQ1JFQVRFX1JFUExZX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1JFUExZX1NVQ0NFU1MgPSAnQ1JFQVRFX1JFUExZX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1JFUExZX0ZBSUxVUkUgPSAnQ1JFQVRFX1JFUExZX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9SRVBMWV9SRVFVRVNUID0gJ0RFTEVURV9SRVBMWV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9SRVBMWV9TVUNDRVNTID0gJ0RFTEVURV9SRVBMWV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9SRVBMWV9GQUlMVVJFID0gJ0RFTEVURV9SRVBMWV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUkVQTFlfTU9ERVJBVE9SX1JFUVVFU1QgPSAnREVMRVRFX1JFUExZX01PREVSQVRPUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9SRVBMWV9NT0RFUkFUT1JfU1VDQ0VTUyA9ICdERUxFVEVfUkVQTFlfTU9ERVJBVE9SX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1JFUExZX01PREVSQVRPUl9GQUlMVVJFID0gJ0RFTEVURV9SRVBMWV9NT0RFUkFUT1JfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9DT01NRU5UX1JFUVVFU1QgPSAnTElLRV9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9DT01NRU5UX1NVQ0NFU1MgPSAnTElLRV9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9DT01NRU5UX0ZBSUxVUkUgPSAnTElLRV9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9DT01NRU5UX1JFUVVFU1QgPSAnVU5MSUtFX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfQ09NTUVOVF9TVUNDRVNTID0gJ1VOTElLRV9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX0NPTU1FTlRfRkFJTFVSRSA9ICdVTkxJS0VfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1JFUExZX1JFUVVFU1QgPSAnTElLRV9SRVBMWV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUkVQTFlfU1VDQ0VTUyA9ICdMSUtFX1JFUExZX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9SRVBMWV9GQUlMVVJFID0gJ0xJS0VfUkVQTFlfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1JFUExZX1JFUVVFU1QgPSAnVU5MSUtFX1JFUExZX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1JFUExZX1NVQ0NFU1MgPSAnVU5MSUtFX1JFUExZX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1JFUExZX0ZBSUxVUkUgPSAnVU5MSUtFX1JFUExZX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbW1lbnRSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IENSRUFURV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUmVwbHlSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IENSRUFURV9SRVBMWV9SRVFVRVNULFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbW1lbnRSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IERFTEVURV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ29tbWVudE1vZGVyYXRvclJlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogREVMRVRFX0NPTU1FTlRfTU9ERVJBVE9SX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbGlrZUNvbW1lbnRSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IExJS0VfQ09NTUVOVF9SRVFVRVNULFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVubGlrZUNvbW1lbnRSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IFVOTElLRV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUmVwbHlSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IERFTEVURV9SRVBMWV9SRVFVRVNULFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVJlcGx5TW9kZXJhdG9yUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBERUxFVEVfUkVQTFlfTU9ERVJBVE9SX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbGlrZVJlcGx5UmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBMSUtFX1JFUExZX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdW5saWtlUmVwbHlSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IFVOTElLRV9SRVBMWV9SRVFVRVNULFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBHZXQsIFBvc3QsIERlbGV0ZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7XHJcbiAgQ1JFQVRFX0NPTU1FTlRfRkFJTFVSRSwgQ1JFQVRFX0NPTU1FTlRfUkVRVUVTVCwgQ1JFQVRFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBDUkVBVEVfUkVQTFlfRkFJTFVSRSwgQ1JFQVRFX1JFUExZX1JFUVVFU1QsIENSRUFURV9SRVBMWV9TVUNDRVNTLCBMSUtFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBMSUtFX0NPTU1FTlRfRkFJTFVSRSwgTElLRV9DT01NRU5UX1JFUVVFU1QsIFVOTElLRV9DT01NRU5UX1NVQ0NFU1MsIFVOTElLRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX0NPTU1FTlRfUkVRVUVTVCwgREVMRVRFX0NPTU1FTlRfU1VDQ0VTUywgREVMRVRFX0NPTU1FTlRfRkFJTFVSRSwgREVMRVRFX0NPTU1FTlRfUkVRVUVTVCxcclxuICBERUxFVEVfQ09NTUVOVF9NT0RFUkFUT1JfU1VDQ0VTUywgREVMRVRFX0NPTU1FTlRfTU9ERVJBVE9SX0ZBSUxVUkUsIERFTEVURV9DT01NRU5UX01PREVSQVRPUl9SRVFVRVNULFxyXG4gIERFTEVURV9SRVBMWV9NT0RFUkFUT1JfU1VDQ0VTUywgREVMRVRFX1JFUExZX01PREVSQVRPUl9GQUlMVVJFLCBERUxFVEVfUkVQTFlfTU9ERVJBVE9SX1JFUVVFU1QsXHJcbiAgREVMRVRFX1JFUExZX1NVQ0NFU1MsIERFTEVURV9SRVBMWV9GQUlMVVJFLCBERUxFVEVfUkVQTFlfUkVRVUVTVCwgTElLRV9SRVBMWV9TVUNDRVNTLCBMSUtFX1JFUExZX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX1JFUExZX1NVQ0NFU1MsIFVOTElLRV9SRVBMWV9GQUlMVVJFLCBMSUtFX1JFUExZX1JFUVVFU1QsIHVubGlrZVJlcGx5UmVxdWVzdCwgVU5MSUtFX1JFUExZX1JFUVVFU1RcclxufSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyByZWFkTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgZ2V0UG9zdERldGFpbFJlcXVlc3QgfSBmcm9tIFwiLi4vcG9zdHMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBMT0FERVJfU1RBUlQsIExPQURFUl9FTkQgfSBmcm9tIFwiLi4vbG9hZGVyL2FjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uKiBjcmVhdGVDb21tZW50U2FnYSh7IHBheWxvYWQgfSkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfU1RBUlQgfSk7XHJcbiAgICBjb25zdCB1c2VyID0gcmVhZExvY2FsU3RvcmFnZSgndXNlcicpO1xyXG4gICAgcGF5bG9hZC51c2VySWQgPSB1c2VyLmlkO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFBvc3QsIGBjb21tZW50L2NyZWF0ZWAsIHBheWxvYWQsIHt9LCBmYWxzZSk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IENSRUFURV9DT01NRU5UX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogQ1JFQVRFX0NPTU1FTlRfRkFJTFVSRSwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IENSRUFURV9DT01NRU5UX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yIH0pO1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICB9XHJcbiAgeWllbGQgcHV0KGdldFBvc3REZXRhaWxSZXF1ZXN0KHsgc2VhcmNoOiBgP3N0YXR1cz0ke3BheWxvYWQucG9zdElkfWAgfSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY3JlYXRlUmVwbHlTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgIGNvbnN0IHVzZXIgPSByZWFkTG9jYWxTdG9yYWdlKCd1c2VyJyk7XHJcbiAgICBwYXlsb2FkLnVzZXJJZCA9IHVzZXIuaWQ7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUG9zdCwgYHJlcGx5L2NyZWF0ZS1yZXBseWAsIHBheWxvYWQsIHt9LCBmYWxzZSk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IENSRUFURV9SRVBMWV9TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IENSRUFURV9SRVBMWV9GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogQ1JFQVRFX1JFUExZX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yIH0pO1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICB9XHJcbiAgeWllbGQgcHV0KGdldFBvc3REZXRhaWxSZXF1ZXN0KHsgc2VhcmNoOiBgP3N0YXR1cz0ke3BheWxvYWQucG9zdElkfWAgfSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZUNvbW1lbnRTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgIGNvbnN0IHVzZXIgPSByZWFkTG9jYWxTdG9yYWdlKCd1c2VyJyk7XHJcbiAgICBwYXlsb2FkLnVzZXJJZCA9IHVzZXIuaWQ7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUG9zdCwgYGNvbW1lbnQvbGlrZT9jb21tZW50SWQ9JHtwYXlsb2FkLmNvbW1lbnRJZH1gLCB7fSwge30sIGZhbHNlKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTElLRV9DT01NRU5UX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTElLRV9DT01NRU5UX0ZBSUxVUkUsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMSUtFX0NPTU1FTlRfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gIH1cclxuICB5aWVsZCBwdXQoZ2V0UG9zdERldGFpbFJlcXVlc3QoeyBzZWFyY2g6IGA/c3RhdHVzPSR7cGF5bG9hZC5wb3N0SWR9YCB9KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VDb21tZW50U2FnYSh7IHBheWxvYWQgfSkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfU1RBUlQgfSk7XHJcbiAgICBjb25zdCB1c2VyID0gcmVhZExvY2FsU3RvcmFnZSgndXNlcicpO1xyXG4gICAgcGF5bG9hZC51c2VySWQgPSB1c2VyLmlkO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKERlbGV0ZSwgYGNvbW1lbnQvdW5saWtlP2NvbW1lbnRJZD0ke3BheWxvYWQuY29tbWVudElkfWAsIHt9LCB7fSwgZmFsc2UpO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBVTkxJS0VfQ09NTUVOVF9TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IFVOTElLRV9DT01NRU5UX0ZBSUxVUkUsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBVTkxJS0VfQ09NTUVOVF9GQUlMVVJFLCBwYXlsb2FkOiBlcnJvciB9KTtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgfVxyXG4gIHlpZWxkIHB1dChnZXRQb3N0RGV0YWlsUmVxdWVzdCh7IHNlYXJjaDogYD9zdGF0dXM9JHtwYXlsb2FkLnBvc3RJZH1gIH0pKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGRlbGV0ZUNvbW1lbnRTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgIGNvbnN0IHVzZXIgPSByZWFkTG9jYWxTdG9yYWdlKCd1c2VyJyk7XHJcbiAgICBwYXlsb2FkLnVzZXJJZCA9IHVzZXIuaWQ7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoRGVsZXRlLCBgY29tbWVudC9kZWxldGU/aWQ9JHtwYXlsb2FkLmNvbW1lbnRJZH1gLCB7fSwge30sIGZhbHNlKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogREVMRVRFX0NPTU1FTlRfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBERUxFVEVfQ09NTUVOVF9GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogREVMRVRFX0NPTU1FTlRfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gIH1cclxuICB5aWVsZCBwdXQoZ2V0UG9zdERldGFpbFJlcXVlc3QoeyBzZWFyY2g6IGA/c3RhdHVzPSR7cGF5bG9hZC5wb3N0SWR9YCB9KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBkZWxldGVDb21tZW50TW9kZXJhdG9yU2FnYSh7IHBheWxvYWQgfSkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfU1RBUlQgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoRGVsZXRlLCBgY29tbWVudC9tb2RlcmF0b3ItZGVsZXRlP2lkPSR7cGF5bG9hZC5jb21tZW50SWR9YCwge30sIHt9LCBmYWxzZSk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9DT01NRU5UX01PREVSQVRPUl9TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9DT01NRU5UX01PREVSQVRPUl9GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogREVMRVRFX0NPTU1FTlRfTU9ERVJBVE9SX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yIH0pO1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICB9XHJcbiAgeWllbGQgcHV0KGdldFBvc3REZXRhaWxSZXF1ZXN0KHsgc2VhcmNoOiBgP3N0YXR1cz0ke3BheWxvYWQucG9zdElkfWAgfSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZGVsZXRlUmVwbHlNb2RlcmF0b3JTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChEZWxldGUsIGByZXBseS9tb2RlcmF0b3ItZGVsZXRlP2lkPSR7cGF5bG9hZC5yZXBseUlkfWAsIHt9LCB7fSwgZmFsc2UpO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBERUxFVEVfUkVQTFlfTU9ERVJBVE9SX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogREVMRVRFX1JFUExZX01PREVSQVRPUl9GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogREVMRVRFX1JFUExZX01PREVSQVRPUl9GQUlMVVJFLCBwYXlsb2FkOiBlcnJvciB9KTtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgfVxyXG4gIHlpZWxkIHB1dChnZXRQb3N0RGV0YWlsUmVxdWVzdCh7IHNlYXJjaDogYD9zdGF0dXM9JHtwYXlsb2FkLnBvc3RJZH1gIH0pKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGRlbGV0ZVJlcGx5U2FnYSh7IHBheWxvYWQgfSkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfU1RBUlQgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoRGVsZXRlLCBgcmVwbHkvZGVsZXRlP2lkPSR7cGF5bG9hZC5yZXBseUlkfWAsIHt9LCB7fSwgZmFsc2UpO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBERUxFVEVfUkVQTFlfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBERUxFVEVfUkVQTFlfRkFJTFVSRSwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9SRVBMWV9GQUlMVVJFLCBwYXlsb2FkOiBlcnJvciB9KTtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgfVxyXG4gIHlpZWxkIHB1dChnZXRQb3N0RGV0YWlsUmVxdWVzdCh7IHNlYXJjaDogYD9zdGF0dXM9JHtwYXlsb2FkLnBvc3RJZH1gIH0pKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VSZXBseVNhZ2EoeyBwYXlsb2FkIH0pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX1NUQVJUIH0pO1xyXG4gICAgY29uc3QgdXNlciA9IHJlYWRMb2NhbFN0b3JhZ2UoJ3VzZXInKTtcclxuICAgIHBheWxvYWQudXNlcklkID0gdXNlci5pZDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChQb3N0LCBgcmVwbHkvbGlrZT9yZXBseUlkPSR7cGF5bG9hZC5yZXBseUlkfWAsIHt9LCB7fSwgZmFsc2UpO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMSUtFX1JFUExZX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTElLRV9SRVBMWV9GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTElLRV9SRVBMWV9GQUlMVVJFLCBwYXlsb2FkOiBlcnJvciB9KTtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgfVxyXG4gIHlpZWxkIHB1dChnZXRQb3N0RGV0YWlsUmVxdWVzdCh7IHNlYXJjaDogYD9zdGF0dXM9JHtwYXlsb2FkLnBvc3RJZH1gIH0pKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVJlcGx5U2FnYSh7IHBheWxvYWQgfSkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfU1RBUlQgfSk7XHJcbiAgICBjb25zdCB1c2VyID0gcmVhZExvY2FsU3RvcmFnZSgndXNlcicpO1xyXG4gICAgcGF5bG9hZC51c2VySWQgPSB1c2VyLmlkO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKERlbGV0ZSwgYHJlcGx5L3VubGlrZT9yZXBseUlkPSR7cGF5bG9hZC5yZXBseUlkfWAsIHt9LCB7fSwgZmFsc2UpO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBVTkxJS0VfUkVQTFlfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBVTkxJS0VfUkVQTFlfRkFJTFVSRSwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IFVOTElLRV9SRVBMWV9GQUlMVVJFLCBwYXlsb2FkOiBlcnJvciB9KTtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgfVxyXG4gIHlpZWxkIHB1dChnZXRQb3N0RGV0YWlsUmVxdWVzdCh7IHNlYXJjaDogYD9zdGF0dXM9JHtwYXlsb2FkLnBvc3RJZH1gIH0pKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBTYWdhKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ1JFQVRFX0NPTU1FTlRfUkVRVUVTVCwgY3JlYXRlQ29tbWVudFNhZ2EpO1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ1JFQVRFX1JFUExZX1JFUVVFU1QsIGNyZWF0ZVJlcGx5U2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX0NPTU1FTlRfUkVRVUVTVCwgbGlrZUNvbW1lbnRTYWdhKTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9DT01NRU5UX1JFUVVFU1QsIHVubGlrZUNvbW1lbnRTYWdhKTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KERFTEVURV9DT01NRU5UX1JFUVVFU1QsIGRlbGV0ZUNvbW1lbnRTYWdhKTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KERFTEVURV9DT01NRU5UX01PREVSQVRPUl9SRVFVRVNULCBkZWxldGVDb21tZW50TW9kZXJhdG9yU2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChERUxFVEVfUkVQTFlfUkVRVUVTVCwgZGVsZXRlUmVwbHlTYWdhKTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KERFTEVURV9SRVBMWV9NT0RFUkFUT1JfUkVRVUVTVCwgZGVsZXRlUmVwbHlNb2RlcmF0b3JTYWdhKTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUkVQTFlfUkVRVUVTVCwgbGlrZVJlcGx5U2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUkVQTFlfUkVRVUVTVCwgdW5saWtlUmVwbHlTYWdhKTtcclxufSIsImV4cG9ydCBjb25zdCBDTEVBUl9IT01FID0gJ0NMRUFSX0hPTUUnO1xyXG5leHBvcnQgY29uc3QgQ0xFQVJfQ09NTVVOSVRZID0gJ0NMRUFSX0NPTU1VTklUWSc7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9VU0VSID0gJ0NMRUFSX1VTRVInO1xyXG5leHBvcnQgY29uc3QgQ0xFQVJfUFJPRklMRSA9ICdDTEVBUl9QUk9GSUxFJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX0NPTU1VTklUWV9QQUdFID0gJ0NMRUFSX0NPTU1VTklUWV9QQUdFJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJTdG9yZVJlcXVlc3QgPSBuYW1lID0+IHtcclxuICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgIGNhc2UgXCJob21lX3Bvc3RzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQ0xFQVJfSE9NRSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBcImNvbW11bml0eV9wb3N0c1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IENMRUFSX0NPTU1VTklUWSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBcInByb2ZpbGVfcG9zdHNcIjpcclxuICAgICAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBDTEVBUl9QUk9GSUxFLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlIFwidXNlcl9wb3N0c1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IENMRUFSX1VTRVIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgXCJjb21tdW5pdHlfb2FnZVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IENMRUFSX0NPTU1VTklUWV9QQUdFLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBHRVRfUE9QVUxBUl9MSVNUX1JFUVVFU1QgPSAnR0VUX1BPUFVMQVJfTElTVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9QT1BVTEFSX0xJU1RfU1VDQ0VTUyA9ICdHRVRfUE9QVUxBUl9MSVNUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX1BPUFVMQVJfTElTVF9GQUlMVVJFID0gJ0dFVF9QT1BVTEFSX0xJU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0NPTU1VTklUWV9SRVFVRVNUID0gJ0dFVF9DT01NVU5JVFlfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ09NTVVOSVRZX1NVQ0NFU1MgPSAnR0VUX0NPTU1VTklUWV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9DT01NVU5JVFlfRkFJTFVSRSA9ICdHRVRfQ09NTVVOSVRZX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9DT01NVU5JVFlfUE9TVFNfUkVRVUVTVCA9ICdHRVRfQ09NTVVOSVRZX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX0NPTU1VTklUWV9QT1NUU19TVUNDRVNTID0gJ0dFVF9DT01NVU5JVFlfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ09NTVVOSVRZX1BPU1RTX0ZBSUxVUkUgPSAnR0VUX0NPTU1VTklUWV9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX0NPTU1VTklUWV9SRVFVRVNUID0gJ0dFVF9BTExfQ09NTVVOSVRZX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX0FMTF9DT01NVU5JVFlfU1VDQ0VTUyA9ICdHRVRfQUxMX0NPTU1VTklUWV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfQ09NTVVOSVRZX0ZBSUxVUkUgPSAnR0VUX0FMTF9DT01NVU5JVFlfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfQ09NTVVOSVRJRVNfUkVRVUVTVCA9ICdHRVRfVVNFUl9DT01NVU5JVElFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0NPTU1VTklUSUVTX1NVQ0NFU1MgPSAnR0VUX1VTRVJfQ09NTVVOSVRJRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9DT01NVU5JVElFU19GQUlMVVJFID0gJ0dFVF9VU0VSX0NPTU1VTklUSUVTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9GX01PREVSQVRPUlNfUkVRVUVTVCA9ICdPRl9NT0RFUkFUT1JTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgT0ZfTU9ERVJBVE9SU19TVUNDRVNTID0gJ09GX01PREVSQVRPUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBPRl9NT0RFUkFUT1JTX0ZBSUxVUkUgPSAnT0ZfTU9ERVJBVE9SU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQ09NTVVOSVRZX1JFUVVFU1QgPSAnVVBEQVRFX0NPTU1VTklUWV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9DT01NVU5JVFlfU1VDQ0VTUyA9ICdVUERBVEVfQ09NTVVOSVRZX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0NPTU1VTklUWV9GQUlMVVJFID0gJ1VQREFURV9DT01NVU5JVFlfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJTX1JFUVVFU1QgPSAnR0VUX1VTRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJTX1NVQ0NFU1MgPSAnR0VUX1VTRVJTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJTX0ZBSUxVUkUgPSAnR0VUX1VTRVJTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX1JFUVVFU1QgPSAnREVMRVRFX1VTRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9TVUNDRVNTID0gJ0RFTEVURV9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfRkFJTFVSRSA9ICdERUxFVEVfVVNFUl9GQUlMVVJFJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UG9wdWxhckNvbW1uaXR5TGlzdFJlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogR0VUX1BPUFVMQVJfTElTVF9SRVFVRVNULFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbW11bml0eVJlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogR0VUX0NPTU1VTklUWV9SRVFVRVNULFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbW11bml0eVBvc3RzUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBHRVRfQ09NTVVOSVRZX1BPU1RTX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckNvbW11bml0aWVzUmVxdWVzdCA9IHBheWxvYWQgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdhY3Rpb24nKVxyXG4gIHJldHVybiAoe1xyXG4gICAgdHlwZTogR0VUX1VTRVJfQ09NTVVOSVRJRVNfUkVRVUVTVCxcclxuICAgIHBheWxvYWQsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvZk1vZGVyYXRvcnNSZXF1ZXN0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBPRl9NT0RFUkFUT1JTX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNvbW11bml0eVJlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogVVBEQVRFX0NPTU1VTklUWV9SRVFVRVNULFxyXG4gIHBheWxvYWRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlcnMgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogR0VUX1VTRVJTX1JFUVVFU1QsXHJcbiAgcGF5bG9hZFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBERUxFVEVfVVNFUl9SRVFVRVNULFxyXG4gIHBheWxvYWRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsQ29tbXVuaXRpZXNSZXF1ZXN0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBHRVRfQUxMX0NPTU1VTklUWV9SRVFVRVNULFxyXG59KTsiLCJpbXBvcnQgeyBHRVRfVVNFUlNfRkFJTFVSRSwgR0VUX1VTRVJTX1JFUVVFU1QsIEdFVF9VU0VSU19TVUNDRVNTIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgR0VUX1VTRVJTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogJycgfTtcclxuICAgICAgICBjYXNlIEdFVF9VU0VSU19TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogcGF5bG9hZCB9O1xyXG4gICAgICAgIGNhc2UgR0VUX1VTRVJTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogcGF5bG9hZCB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBPRl9NT0RFUkFUT1JTX0ZBSUxVUkUsIE9GX01PREVSQVRPUlNfUkVRVUVTVCwgT0ZfTU9ERVJBVE9SU19TVUNDRVNTIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgT0ZfTU9ERVJBVE9SU19SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6ICcnIH07XHJcbiAgICAgICAgY2FzZSBPRl9NT0RFUkFUT1JTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhOiBwYXlsb2FkIH07XHJcbiAgICAgICAgY2FzZSBPRl9NT0RFUkFUT1JTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogcGF5bG9hZCB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHRVRfUE9QVUxBUl9MSVNUX1JFUVVFU1QsIEdFVF9QT1BVTEFSX0xJU1RfU1VDQ0VTUywgR0VUX1BPUFVMQVJfTElTVF9GQUlMVVJFLCBHRVRfVVNFUl9DT01NVU5JVElFU19SRVFVRVNULCBHRVRfVVNFUl9DT01NVU5JVElFU19TVUNDRVNTLCBHRVRfVVNFUl9DT01NVU5JVElFU19GQUlMVVJFLCBHRVRfQUxMX0NPTU1VTklUWV9SRVFVRVNULCBHRVRfQUxMX0NPTU1VTklUWV9TVUNDRVNTLCBHRVRfQUxMX0NPTU1VTklUWV9GQUlMVVJFIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBkYXRhOiBudWxsLFxyXG4gIGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBHRVRfUE9QVUxBUl9MSVNUX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogJycgfTtcclxuICAgIGNhc2UgR0VUX1BPUFVMQVJfTElTVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogcGF5bG9hZCB9O1xyXG4gICAgY2FzZSBHRVRfUE9QVUxBUl9MSVNUX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogcGF5bG9hZCB9O1xyXG4gICAgY2FzZSBHRVRfQUxMX0NPTU1VTklUWV9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6ICcnIH07XHJcbiAgICBjYXNlIEdFVF9BTExfQ09NTVVOSVRZX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhOiBwYXlsb2FkIH07XHJcbiAgICBjYXNlIEdFVF9BTExfQ09NTVVOSVRZX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogcGF5bG9hZCB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHZXQsIFBvc3QsIFB1dEZvcm1EYXRhLCBEZWxldGUgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gIEdFVF9QT1BVTEFSX0xJU1RfU1VDQ0VTUywgR0VUX1BPUFVMQVJfTElTVF9GQUlMVVJFLCBHRVRfUE9QVUxBUl9MSVNUX1JFUVVFU1QsXHJcbiAgR0VUX0NPTU1VTklUWV9GQUlMVVJFLCBHRVRfQ09NTVVOSVRZX1JFUVVFU1QsIEdFVF9DT01NVU5JVFlfU1VDQ0VTUyxcclxuICBHRVRfVVNFUl9DT01NVU5JVElFU19SRVFVRVNULCBHRVRfVVNFUl9DT01NVU5JVElFU19TVUNDRVNTLCBHRVRfVVNFUl9DT01NVU5JVElFU19GQUlMVVJFLFxyXG4gIE9GX01PREVSQVRPUlNfRkFJTFVSRSwgT0ZfTU9ERVJBVE9SU19SRVFVRVNULCBPRl9NT0RFUkFUT1JTX1NVQ0NFU1MsIFVQREFURV9DT01NVU5JVFlfU1VDQ0VTUyxcclxuICBVUERBVEVfQ09NTVVOSVRZX0ZBSUxVUkUsIFVQREFURV9DT01NVU5JVFlfUkVRVUVTVCwgZ2V0Q29tbXVuaXR5UmVxdWVzdCxcclxuICBHRVRfVVNFUlNfRkFJTFVSRSwgR0VUX1VTRVJTX1JFUVVFU1QsIEdFVF9VU0VSU19TVUNDRVNTLCBERUxFVEVfVVNFUl9TVUNDRVNTLFxyXG4gIERFTEVURV9VU0VSX0ZBSUxVUkUsIERFTEVURV9VU0VSX1JFUVVFU1QsIGdldFVzZXJzLFxyXG4gIEdFVF9BTExfQ09NTVVOSVRZX1JFUVVFU1QsIEdFVF9BTExfQ09NTVVOSVRZX1NVQ0NFU1MsIEdFVF9BTExfQ09NTVVOSVRZX0ZBSUxVUkUsXHJcbiAgR0VUX0NPTU1VTklUWV9QT1NUU19GQUlMVVJFLCBHRVRfQ09NTVVOSVRZX1BPU1RTX1JFUVVFU1QsIEdFVF9DT01NVU5JVFlfUE9TVFNfU1VDQ0VTU1xyXG59IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgcmVhZExvY2FsU3RvcmFnZSwgaXNMb2dnZWQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBMT0FERVJfU1RBUlQsIExPQURFUl9FTkQgfSBmcm9tIFwiLi4vbG9hZGVyL2FjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uKiBnZXRQb3B1bGFyTGlzdFNhZ2EoeyBwYXlsb2FkIH0pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX1NUQVJUIH0pO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEdldCwgXCJjb21tdW5pdHkvZ2V0LXBvcHVsYXJzXCIsIHBheWxvYWQsIHt9LCBmYWxzZSk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9QT1BVTEFSX0xJU1RfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfUE9QVUxBUl9MSVNUX0ZBSUxVUkUsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfUE9QVUxBUl9MSVNUX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yIH0pO1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRDb21tdW5pdHlTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVybCA9IGBjb21tdW5pdHkvZ2V0P3NsdWc9JHtwYXlsb2FkLnNsdWd9YFxyXG4gICAgaWYgKHBheWxvYWQubG9hZGVyU3RhcnQpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX1NUQVJUIH0pO1xyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChHZXQsIHVybCwge30sIHBheWxvYWQudG9rZW4sIGZhbHNlKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX0NPTU1VTklUWV9TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9DT01NVU5JVFlfRkFJTFVSRSwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9DT01NVU5JVFlfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldENvbW11bml0eVBvc3RzU2FnYSh7IHBheWxvYWQgfSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHBhZ2VOdW1iZXIsIHBhZ2VTaXplLCBzbHVnLCB0b2tlbiB9ID0gcGF5bG9hZDtcclxuICAgIGlmIChwYXlsb2FkLmxvYWRlclN0YXJ0KSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChHZXQsIGBjb21tdW5pdHkvZ2V0LXBvc3RzP3NsdWc9JHtzbHVnfSZQYWdlTnVtYmVyPSR7cGFnZU51bWJlcn0mUGFnZVNpemU9JHtwYWdlU2l6ZX1gLCB7fSwgdG9rZW4sIGZhbHNlKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX0NPTU1VTklUWV9QT1NUU19TVUNDRVNTLCBwYXlsb2FkOiB7IC4uLnJlc3BvbnNlLCBpc1ZvdGVkOiBwYXlsb2FkLmlzVm90ZWQgfSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9DT01NVU5JVFlfUE9TVFNfRkFJTFVSRSwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9DT01NVU5JVFlfUE9TVFNfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldFVzZXJDb21tdW5pdGllc1NhZ2EoeyBwYXlsb2FkIH0pIHtcclxuICBpZiAoaXNMb2dnZWQoKSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX1NUQVJUIH0pO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoR2V0LCBgdXNlci9nZXQtdXNlci1jb21tdW5pdGllc2AsIHt9LCB7fSwgZmFsc2UpO1xyXG4gICAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX1VTRVJfQ09NTVVOSVRJRVNfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfVVNFUl9DT01NVU5JVElFU19GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfVVNFUl9DT01NVU5JVElFU19GQUlMVVJFLCBwYXlsb2FkOiBlcnJvciB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBvZk1vZGVyYXRvcnNTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChHZXQsIGBjb21tdW5pdHkvb2YtbW9kZXJhdG9yc2AsIHt9LCB7fSwgZmFsc2UpO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBPRl9NT0RFUkFUT1JTX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogT0ZfTU9ERVJBVE9SU19GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogT0ZfTU9ERVJBVE9SU19GQUlMVVJFLCBwYXlsb2FkOiBlcnJvciB9KTtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIGdldFVzZXJzU2FnYSh7IHBheWxvYWQgfSkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfU1RBUlQgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoR2V0LCBgY29tbXVuaXR5L3VzZXJzP3NsdWc9JHtwYXlsb2FkLnNsdWd9YCwge30sIHt9LCBmYWxzZSk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9VU0VSU19TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9VU0VSU19GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX1VTRVJTX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yIH0pO1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBkZWxldGVVc2VyU2FnYSh7IHBheWxvYWQgfSkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfU1RBUlQgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoRGVsZXRlLCBgdXNlci9tb2RlcmF0b3ItcmVqZWN0ZWQtam9pbmAsIHBheWxvYWQsIHt9LCBmYWxzZSk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9VU0VSX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogREVMRVRFX1VTRVJfRkFJTFVSRSwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9VU0VSX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yIH0pO1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICB9XHJcbiAgeWllbGQgcHV0KGdldENvbW11bml0eVJlcXVlc3QoeyBzbHVnOiBwYXlsb2FkLnNsdWcgfSkpO1xyXG4gIHlpZWxkIHB1dChnZXRVc2Vycyh7IHNsdWc6IHBheWxvYWQuc2x1ZyB9KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGRhdGVDb21tdW5pdHkoeyBwYXlsb2FkIH0pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX1NUQVJUIH0pO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFB1dEZvcm1EYXRhLCBgY29tbXVuaXR5L3VwZGF0ZWAsIHBheWxvYWQsIHt9KTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogVVBEQVRFX0NPTU1VTklUWV9TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IFVQREFURV9DT01NVU5JVFlfRkFJTFVSRSwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IFVQREFURV9DT01NVU5JVFlfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gIH1cclxuICB5aWVsZCBwdXQoZ2V0Q29tbXVuaXR5UmVxdWVzdCh7IHNsdWc6IHBheWxvYWQuc2x1ZyB9KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRBbGxTYWdhKCkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfU1RBUlQgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoR2V0LCBgY29tbXVuaXR5L2dldC1hbGxgLCB7fSwge30sIGZhbHNlKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX0FMTF9DT01NVU5JVFlfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfQUxMX0NPTU1VTklUWV9GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX0FMTF9DT01NVU5JVFlfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIFNhZ2EoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChHRVRfUE9QVUxBUl9MSVNUX1JFUVVFU1QsIGdldFBvcHVsYXJMaXN0U2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChHRVRfQ09NTVVOSVRZX1JFUVVFU1QsIGdldENvbW11bml0eVNhZ2EpO1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoR0VUX1VTRVJfQ09NTVVOSVRJRVNfUkVRVUVTVCwgZ2V0VXNlckNvbW11bml0aWVzU2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChPRl9NT0RFUkFUT1JTX1JFUVVFU1QsIG9mTW9kZXJhdG9yc1NhZ2EpO1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBEQVRFX0NPTU1VTklUWV9SRVFVRVNULCB1cGRhdGVDb21tdW5pdHkpO1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoR0VUX1VTRVJTX1JFUVVFU1QsIGdldFVzZXJzU2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChERUxFVEVfVVNFUl9SRVFVRVNULCBkZWxldGVVc2VyU2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChHRVRfQUxMX0NPTU1VTklUWV9SRVFVRVNULCBnZXRBbGxTYWdhKTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9DT01NVU5JVFlfUE9TVFNfUkVRVUVTVCwgZ2V0Q29tbXVuaXR5UG9zdHNTYWdhKTtcclxufSIsImltcG9ydCB7XHJcbiAgICBHRVRfQ09NTVVOSVRZX0ZBSUxVUkUsIEdFVF9DT01NVU5JVFlfUkVRVUVTVCwgR0VUX0NPTU1VTklUWV9TVUNDRVNTLFxyXG4gICAgR0VUX0NPTU1VTklUWV9QT1NUU19GQUlMVVJFLCBHRVRfQ09NTVVOSVRZX1BPU1RTX1JFUVVFU1QsIEdFVF9DT01NVU5JVFlfUE9TVFNfU1VDQ0VTU1xyXG59IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IENMRUFSX0NPTU1VTklUWSB9IGZyb20gJy4uL2NvbW1vbkFjdGlvbnMnO1xyXG5pbXBvcnQgeyBoYW5kbGVOb25QYWdpbmF0ZWRSZXN1bHQgfSBmcm9tICcuLi9ob21lL3JlZHVjZXJzJztcclxuaW1wb3J0IHsgREVMRVRFX01PREVSQVRPUl9TVUNDRVNTIH0gZnJvbSAnLi4vcG9zdHMvYWN0aW9ucyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBwYWdlZERhdGE6IHsgcmVzdWx0czogW10gfSxcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgR0VUX0NPTU1VTklUWV9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6ICcnIH07XHJcbiAgICAgICAgY2FzZSBHRVRfQ09NTVVOSVRZX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhOiBwYXlsb2FkIH07XHJcbiAgICAgICAgY2FzZSBHRVRfQ09NTVVOSVRZX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogcGF5bG9hZCB9O1xyXG4gICAgICAgIGNhc2UgR0VUX0NPTU1VTklUWV9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6ICcnIH07XHJcbiAgICAgICAgY2FzZSBHRVRfQ09NTVVOSVRZX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmlzVm90ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBoYW5kbGVOb25QYWdpbmF0ZWRSZXN1bHQoc3RhdGUucGFnZWREYXRhLnJlc3VsdHMsIHBheWxvYWQucmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkLnJlc3VsdHMgPSByZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBhZ2VkRGF0YTogcGF5bG9hZCB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldlBvc3RzMSA9IHN0YXRlLnBhZ2VkRGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UG9zdHMxID0gcHJldlBvc3RzMS5jb25jYXQocGF5bG9hZC5yZXN1bHRzKTtcclxuICAgICAgICAgICAgICAgIHBheWxvYWQucmVzdWx0cyA9IG5ld1Bvc3RzMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwYWdlZERhdGE6IHBheWxvYWQgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgR0VUX0NPTU1VTklUWV9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IHBheWxvYWQgfTtcclxuICAgICAgICBjYXNlIERFTEVURV9NT0RFUkFUT1JfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IFsuLi5zdGF0ZS5wYWdlZERhdGEucmVzdWx0c107XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RlbXAgPSB0ZW1wLmZpbHRlcih4ID0+IHguaWQgIT09IHBheWxvYWQuZGVsZXRlZFBvc3QpXHJcbiAgICAgICAgICAgIHBheWxvYWQucmVzdWx0cyA9IG5ld1RlbXA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwYWdlZERhdGE6IHBheWxvYWQgfVxyXG4gICAgICAgIGNhc2UgQ0xFQVJfQ09NTVVOSVRZOlxyXG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIHBhZ2VkRGF0YTogeyByZXN1bHRzOiBbXSB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLm5ld1N0YXRlIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdFVF9VU0VSX0NPTU1VTklUSUVTX1JFUVVFU1QsIEdFVF9VU0VSX0NPTU1VTklUSUVTX1NVQ0NFU1MsIEdFVF9VU0VSX0NPTU1VTklUSUVTX0ZBSUxVUkUgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBHRVRfVVNFUl9DT01NVU5JVElFU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdXhlZXInKVxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6ICcnIH07XHJcbiAgICAgICAgY2FzZSBHRVRfVVNFUl9DT01NVU5JVElFU19TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogcGF5bG9hZCB9O1xyXG4gICAgICAgIGNhc2UgR0VUX1VTRVJfQ09NTVVOSVRJRVNfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBwYXlsb2FkIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBHRVRfQ09OVkVSU0FUSU9OU19SRVFVRVNUID0gJ0dFVF9DT05WRVJTQVRJT05TX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX0NPTlZFUlNBVElPTlNfU1VDQ0VTUyA9ICdHRVRfQ09OVkVSU0FUSU9OU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9DT05WRVJTQVRJT05TX0ZBSUxVUkUgPSAnR0VUX0NPTlZFUlNBVElPTlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0NPTlZFUlNBVElPTl9ERVRBSUxfUkVRVUVTVCA9ICdHRVRfQ09OVkVSU0FUSU9OX0RFVEFJTF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9DT05WRVJTQVRJT05fREVUQUlMX1NVQ0NFU1MgPSAnR0VUX0NPTlZFUlNBVElPTl9ERVRBSUxfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ09OVkVSU0FUSU9OX0RFVEFJTF9GQUlMVVJFID0gJ0dFVF9DT05WRVJTQVRJT05fREVUQUlMX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFTkRfTUVTU0FHRV9SRVFVRVNUID0gJ1NFTkRfTUVTU0FHRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNFTkRfTUVTU0FHRV9TVUNDRVNTID0gJ1NFTkRfTUVTU0FHRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNFTkRfTUVTU0FHRV9GQUlMVVJFID0gJ1NFTkRfTUVTU0FHRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb252ZXJzYXRpb25zUmVxdWVzdCA9ICgpID0+ICh7XHJcbiAgdHlwZTogR0VUX0NPTlZFUlNBVElPTlNfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29udmVyc2F0aW9uRGV0YWlsUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBHRVRfQ09OVkVSU0FUSU9OX0RFVEFJTF9SRVFVRVNULFxyXG4gIHBheWxvYWRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZE1lc3NhZ2VSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IFNFTkRfTUVTU0FHRV9SRVFVRVNULFxyXG4gIHBheWxvYWRcclxufSk7XHJcblxyXG4iLCJpbXBvcnQgeyBHRVRfQ09OVkVSU0FUSU9OX0RFVEFJTF9GQUlMVVJFLCBHRVRfQ09OVkVSU0FUSU9OX0RFVEFJTF9SRVFVRVNULCBHRVRfQ09OVkVSU0FUSU9OX0RFVEFJTF9TVUNDRVNTIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgR0VUX0NPTlZFUlNBVElPTl9ERVRBSUxfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiAnJyB9O1xyXG4gICAgICAgIGNhc2UgR0VUX0NPTlZFUlNBVElPTl9ERVRBSUxfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IHBheWxvYWQgfTtcclxuICAgICAgICBjYXNlIEdFVF9DT05WRVJTQVRJT05fREVUQUlMX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogcGF5bG9hZCB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHRVRfQ09OVkVSU0FUSU9OU19GQUlMVVJFLCBHRVRfQ09OVkVSU0FUSU9OU19SRVFVRVNULCBHRVRfQ09OVkVSU0FUSU9OU19TVUNDRVNTIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBkYXRhOiBudWxsLFxyXG4gIGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBHRVRfQ09OVkVSU0FUSU9OU19SRVFVRVNUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6ICcnIH07XHJcbiAgICBjYXNlIEdFVF9DT05WRVJTQVRJT05TX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhOiBwYXlsb2FkIH07XHJcbiAgICBjYXNlIEdFVF9DT05WRVJTQVRJT05TX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogcGF5bG9hZCB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHZXQsIFBvc3QsIFB1dEZvcm1EYXRhLCBEZWxldGUgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gIEdFVF9DT05WRVJTQVRJT05fREVUQUlMX0ZBSUxVUkUsIEdFVF9DT05WRVJTQVRJT05fREVUQUlMX1JFUVVFU1QsIEdFVF9DT05WRVJTQVRJT05fREVUQUlMX1NVQ0NFU1MsXHJcbiAgR0VUX0NPTlZFUlNBVElPTlNfRkFJTFVSRSwgR0VUX0NPTlZFUlNBVElPTlNfUkVRVUVTVCwgR0VUX0NPTlZFUlNBVElPTlNfU1VDQ0VTUywgU0VORF9NRVNTQUdFX1NVQ0NFU1MsIFNFTkRfTUVTU0FHRV9GQUlMVVJFLCBTRU5EX01FU1NBR0VfUkVRVUVTVCwgZ2V0Q29udmVyc2F0aW9uRGV0YWlsUmVxdWVzdCwgZ2V0Q29udmVyc2F0aW9uc1JlcXVlc3RcclxufSBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcbi8qIGltcG9ydCB7IHB1c2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG4gKi9pbXBvcnQgeyByZWFkTG9jYWxTdG9yYWdlLCBpc0xvZ2dlZCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IExPQURFUl9TVEFSVCwgTE9BREVSX0VORCB9IGZyb20gXCIuLi9sb2FkZXIvYWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24qIGdldENvbnZlcnNhdGlvbnNTYWdhKCkge1xyXG4gIGlmIChpc0xvZ2dlZCgpKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfU1RBUlQgfSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChHZXQsIGBjb252ZXJzYXRpb24vZ2V0LWFsbGAsIHt9LCB7fSwgZmFsc2UpO1xyXG4gICAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX0NPTlZFUlNBVElPTlNfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfQ09OVkVSU0FUSU9OU19GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfQ09OVkVSU0FUSU9OU19GQUlMVVJFLCBwYXlsb2FkOiBlcnJvciB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRDb252ZXJzYXRpb25EZXRhaWxTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXIgPSByZWFkTG9jYWxTdG9yYWdlKCd1c2VyJyk7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfU1RBUlQgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoR2V0LCBgY29udmVyc2F0aW9uL2dldC9ieS1pZD9pZD0ke3BheWxvYWQuaWR9YCwge30sIHt9LCBmYWxzZSk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9DT05WRVJTQVRJT05fREVUQUlMX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX0NPTlZFUlNBVElPTl9ERVRBSUxfRkFJTFVSRSwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9DT05WRVJTQVRJT05fREVUQUlMX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yIH0pO1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzZW5kTWVzc2FnZVNhZ2EoeyBwYXlsb2FkIH0pIHtcclxuICBsZXQgdGVtcFJlc3BvbnNlRGF0YSA9IHt9XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXIgPSByZWFkTG9jYWxTdG9yYWdlKCd1c2VyJyk7XHJcbiAgICBwYXlsb2FkLnNlbmRlcklkID0gdXNlci5pZDtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChQb3N0LCBgbWVzc2FnZS9jcmVhdGVgLCBwYXlsb2FkLCB7fSwgZmFsc2UpO1xyXG4gICAgdGVtcFJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBTRU5EX01FU1NBR0VfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBTRU5EX01FU1NBR0VfRkFJTFVSRSwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IFNFTkRfTUVTU0FHRV9GQUlMVVJFLCBwYXlsb2FkOiBlcnJvciB9KTtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgfVxyXG4gIHlpZWxkIHB1dChnZXRDb252ZXJzYXRpb25EZXRhaWxSZXF1ZXN0KHsgaWQ6IHRlbXBSZXNwb25zZURhdGEuY29udmVyc2F0aW9uSWQgfSkpO1xyXG4gIGlmICghcGF5bG9hZC5jb252ZXJzYXRpb25JZCkge1xyXG4gICAgeWllbGQgcHV0KHB1c2goJy9jaGF0JykpO1xyXG4gICAgeWllbGQgcHV0KGdldENvbnZlcnNhdGlvbnNSZXF1ZXN0KCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIFNhZ2EoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChHRVRfQ09OVkVSU0FUSU9OU19SRVFVRVNULCBnZXRDb252ZXJzYXRpb25zU2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChHRVRfQ09OVkVSU0FUSU9OX0RFVEFJTF9SRVFVRVNULCBnZXRDb252ZXJzYXRpb25EZXRhaWxTYWdhKTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNFTkRfTUVTU0FHRV9SRVFVRVNULCBzZW5kTWVzc2FnZVNhZ2EpO1xyXG59IiwiZXhwb3J0IGNvbnN0IExPR0lOX0VSUk9SX1NUQVJUID0gJ0xPR0lOX0VSUk9SX1NUQVJUJztcclxuXHJcbmV4cG9ydCBjb25zdCBFTUFJTF9FUlJPUl9TVEFSVCA9ICdFTUFJTF9FUlJPUl9TVEFSVCc7XHJcblxyXG5leHBvcnQgY29uc3QgVVNFUk5BTUVfRVJST1JfU1RBUlQgPSAnVVNFUk5BTUVfRVJST1JfU1RBUlQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVORF9FUlJPUiA9IFwiRU5EX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0RXJyb3JSZXF1ZXN0ID0gZXJyb3IgPT4gKHtcclxuICAgIHR5cGU6IGVycm9yID09IFwidXNlcm5hbWVcIiA/IFVTRVJOQU1FX0VSUk9SX1NUQVJUIDogZXJyb3IgPT0gXCJlbWFpbFwiID8gRU1BSUxfRVJST1JfU1RBUlQgOlxyXG4gICAgICAgIGVycm9yID09IFwibG9naW5cIiA/IExPR0lOX0VSUk9SX1NUQVJUIDogRU5EX0VSUk9SXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBMT0dJTl9FUlJPUl9TVEFSVCwgRU1BSUxfRVJST1JfU1RBUlQsIFVTRVJOQU1FX0VSUk9SX1NUQVJULCBFTkRfRVJST1IgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9naW5FcnJvcjogZmFsc2UsXHJcbiAgICBlbWFpbEVycm9yOiBmYWxzZSxcclxuICAgIHVzZXJuYW1lRXJyb3I6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHsgdHlwZSB9KSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIExPR0lOX0VSUk9SX1NUQVJUOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9naW5FcnJvcjogdHJ1ZSB9O1xyXG4gICAgICAgIGNhc2UgRU1BSUxfRVJST1JfU1RBUlQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlbWFpbEVycm9yOiB0cnVlIH07XHJcbiAgICAgICAgY2FzZSBVU0VSTkFNRV9FUlJPUl9TVEFSVDpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXJuYW1lRXJyb3I6IHRydWUgfTtcclxuICAgICAgICBjYXNlIEVORF9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXJuYW1lRXJyb3I6IGZhbHNlLCBsb2dpbkVycm9yOiBmYWxzZSwgZW1haWxFcnJvcjogZmFsc2UgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZnJvbVBhaXJzIH0gZnJvbSAnbG9kYXNoL2ZwJztcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcyc7XHJcblxyXG5jb25zdCBsb2NhbFN0b3JhZ2UgPSBnbG9iYWwubG9jYWxTdG9yYWdlICYmIGdsb2JhbC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbVxyXG4gICAgPyBnbG9iYWwubG9jYWxTdG9yYWdlXHJcbiAgICA6IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHN0b3JlID0ge307XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ2V0SXRlbShrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZVtrZXldIHx8IG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldEl0ZW0oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmVba2V5XSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsZWFyKCkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmUgPSB7fTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVtb3ZlSXRlbShrZXkpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JlID0gT2JqZWN0LmtleXMoc3RvcmUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihrID0+IGtleSAhPT0gaylcclxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjdW11bGF0b3JbY3VycmVudEl0ZW1dID0gc3RvcmVbY3VycmVudEl0ZW1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9KCkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlYWRMb2NhbFN0b3JhZ2UgPSAoa2V5KSA9PiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShrZXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZyb21QYWlycyhrZXkubWFwKGsgPT4gW2ssIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGspICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaykpXSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkU3RhdGUgPSAoa2V5KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRTdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWRTdGF0ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXJpYWxpemVkU3RhdGUpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaXNMb2dnZWRXaXRoQ29va2llcyA9IChjdHgpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoY3R4KVxyXG4gICAgcmV0dXJuIGNvb2tpZXMgJiYgY29va2llcy50b2tlbiAmJiBjb29raWVzLnVzZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgd3JpdGVMb2NhbFN0b3JhZ2UgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qga2V5cyA9IHR5cGVvZiBrZXkgPT09ICdvYmplY3QnID8ga2V5IDogeyBba2V5XTogdmFsdWUgfTtcclxuICAgIE9iamVjdC5lbnRyaWVzKGtleXMpLm1hcCgoW2ssIHZhbF0pID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKGssIEpTT04uc3RyaW5naWZ5KHZhbCkpKTtcclxuICAgIHJldHVybiBrZXlzO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcclxuICAgIGNvbnN0IGtleXMgPSBBcnJheS5pc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XTtcclxuICAgIGtleXMuZm9yRWFjaChrID0+IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGspKTtcclxuICAgIHJldHVybiBrZXlzO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VhcmNoUGFyYW1zID0gcGFyYW1zID0+IE9iamVjdC5rZXlzKHBhcmFtcykubWFwKChrZXkpID0+IHtcclxuICAgIGlmICh0eXBlb2YgKHBhcmFtc1trZXldKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA/IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkgOiAnJ31gO1xyXG4gICAgfVxyXG59KS5qb2luKCcmJyk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVTdHJpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSk7XHJcbiAgICByZXR1cm4gbmFtZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzTG9nZ2VkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSByZWFkTG9jYWxTdG9yYWdlKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyID0gcmVhZExvY2FsU3RvcmFnZShcInVzZXJcIik7XHJcbiAgICByZXR1cm4gKHRva2VuICYmIHVzZXIpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UGFyYW1ldGVyQnlOYW1lID0gKG5hbWUsIHVybCkgPT4ge1xyXG4gICAgaWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpO1xyXG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyksXHJcbiAgICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcclxuICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBodG1sVG9UZXh0ID0gKGh0bWwpID0+IHtcclxuICAgIHZhciB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRlbXAuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIHJldHVybiB0ZW1wLnRleHRDb250ZW50IHx8IHRlbXAuaW5uZXJUZXh0IHx8IFwiXCI7XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjb25zdCBHRVRfSE9NRV9QT1NUU19SRVFVRVNUID0gJ0dFVF9IT01FX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfUE9TVFNfU1VDQ0VTUyA9ICdHRVRfSE9NRV9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9IT01FX1BPU1RTX0ZBSUxVUkUgPSAnR0VUX0hPTUVfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1VOQVVUSE9SSVpFRF9QT1NUU19SRVFVRVNUID0gJ0dFVF9VTkFVVEhPUklaRURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfVU5BVVRIT1JJWkVEX1BPU1RTX1NVQ0NFU1MgPSAnR0VUX1VOQVVUSE9SSVpFRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9VTkFVVEhPUklaRURfUE9TVFNfRkFJTFVSRSA9ICdHRVRfVU5BVVRIT1JJWkVEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9SRVFVRVNUID0gJ1NFQVJDSF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9TVUNDRVNTID0gJ1NFQVJDSF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9GQUlMVVJFID0gJ1NFQVJDSF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRIb21lUG9zdHNSZXF1ZXN0ID0gcGF5bG9hZCA9PiB7XHJcbiAgcmV0dXJuICh7XHJcbiAgICB0eXBlOiBHRVRfSE9NRV9QT1NUU19SRVFVRVNULFxyXG4gICAgcGF5bG9hZCxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVuYXV0aG9yaXplZFBvc3RzUmVxdWVzdCA9IHBheWxvYWQgPT4ge1xyXG4gIHJldHVybiAoe1xyXG4gICAgdHlwZTogR0VUX1VOQVVUSE9SSVpFRF9QT1NUU19SRVFVRVNULFxyXG4gICAgcGF5bG9hZCxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaFJlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogU0VBUkNIX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5cclxuIiwiaW1wb3J0IHtcclxuICBHRVRfSE9NRV9QT1NUU19SRVFVRVNULCBHRVRfSE9NRV9QT1NUU19GQUlMVVJFLCBHRVRfSE9NRV9QT1NUU19TVUNDRVNTLFxyXG4gIEdFVF9VTkFVVEhPUklaRURfUE9TVFNfRkFJTFVSRSwgR0VUX1VOQVVUSE9SSVpFRF9QT1NUU19SRVFVRVNULCBHRVRfVU5BVVRIT1JJWkVEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgU0VBUkNIX0ZBSUxVUkUsIFNFQVJDSF9SRVFVRVNULCBTRUFSQ0hfU1VDQ0VTU1xyXG59IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IENMRUFSX0hPTUUgfSBmcm9tICcuLi9jb21tb25BY3Rpb25zJztcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgZGF0YTogeyByZXN1bHRzOiBbXSB9LFxyXG4gIGVycm9yOiBudWxsLFxyXG4gIHNlYXJjaDogbnVsbFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZU5vblBhZ2luYXRlZFJlc3VsdCA9IChzdGF0ZUFycmF5LCByZXNwb25zZUFycmF5KSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHJlc3BvbnNlQXJyYXkubGVuZ3RoOyB4KyspIHtcclxuICAgICAgaWYgKHN0YXRlQXJyYXlbaV0uaWQgPT0gcmVzcG9uc2VBcnJheVt4XS5pZCkge1xyXG4gICAgICAgIHN0YXRlQXJyYXlbaV0gPSByZXNwb25zZUFycmF5W3hdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHN0YXRlQXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgR0VUX0hPTUVfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiAnJyB9O1xyXG4gICAgY2FzZSBHRVRfSE9NRV9QT1NUU19TVUNDRVNTOlxyXG4gICAgICBpZiAocGF5bG9hZC5pc1ZvdGVkKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGhhbmRsZU5vblBhZ2luYXRlZFJlc3VsdChzdGF0ZS5kYXRhLnJlc3VsdHMsIHBheWxvYWQucmVzdWx0cyk7XHJcbiAgICAgICAgcGF5bG9hZC5yZXN1bHRzID0gcmVzdWx0cztcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogcGF5bG9hZCB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHByZXZQb3N0czEgPSBzdGF0ZS5kYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgY29uc3QgbmV3UG9zdHMxID0gcHJldlBvc3RzMS5jb25jYXQocGF5bG9hZC5yZXN1bHRzKTtcclxuICAgICAgICBwYXlsb2FkLnJlc3VsdHMgPSBuZXdQb3N0czE7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IHBheWxvYWQgfTtcclxuICAgICAgfVxyXG4gICAgY2FzZSBHRVRfSE9NRV9QT1NUU19GQUlMVVJFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IHBheWxvYWQgfTtcclxuICAgIGNhc2UgR0VUX1VOQVVUSE9SSVpFRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6ICcnIH07XHJcbiAgICBjYXNlIEdFVF9VTkFVVEhPUklaRURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgY29uc3QgcHJldlBvc3RzID0gc3RhdGUuZGF0YS5yZXN1bHRzO1xyXG4gICAgICBjb25zdCBuZXdQb3N0cyA9IHByZXZQb3N0cy5jb25jYXQocGF5bG9hZC5yZXN1bHRzKTtcclxuICAgICAgcGF5bG9hZC5yZXN1bHRzID0gbmV3UG9zdHM7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhOiBwYXlsb2FkIH07XHJcbiAgICBjYXNlIEdFVF9VTkFVVEhPUklaRURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBwYXlsb2FkIH07XHJcbiAgICBjYXNlIFNFQVJDSF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6ICcnIH07XHJcbiAgICBjYXNlIFNFQVJDSF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VhcmNoOiBwYXlsb2FkIH07XHJcbiAgICBjYXNlIFNFQVJDSF9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IHBheWxvYWQgfTtcclxuICAgIGNhc2UgQ0xFQVJfSE9NRTpcclxuICAgICAgY29uc3QgbmV3RGF0YSA9IHsgcmVzdWx0czogW10gfVxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogbmV3RGF0YSB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHZXQsIFBvc3QgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gIEdFVF9IT01FX1BPU1RTX1JFUVVFU1QsIEdFVF9IT01FX1BPU1RTX0ZBSUxVUkUsIEdFVF9IT01FX1BPU1RTX1NVQ0NFU1MsXHJcbiAgR0VUX1VOQVVUSE9SSVpFRF9QT1NUU19GQUlMVVJFLCBHRVRfVU5BVVRIT1JJWkVEX1BPU1RTX1JFUVVFU1QsIEdFVF9VTkFVVEhPUklaRURfUE9TVFNfU1VDQ0VTUyxcclxuICBTRUFSQ0hfRkFJTFVSRSwgU0VBUkNIX1JFUVVFU1QsIFNFQVJDSF9TVUNDRVNTXHJcbn0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgTE9BREVSX1NUQVJULCBMT0FERVJfRU5EIH0gZnJvbSBcIi4uL2xvYWRlci9hY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiogZ2V0SG9tZVBvc3RzU2FnYSh7IHBheWxvYWQgfSkge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAocGF5bG9hZC5sb2FkZXJTdGFydCkge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfU1RBUlQgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEdldCwgYHBvc3QvcGFnZWQtaG9tZS1wb3N0cz9QYWdlTnVtYmVyPSR7cGF5bG9hZC5wYWdlTnVtYmVyfSZQYWdlU2l6ZT0ke3BheWxvYWQucGFnZVNpemV9YCwge30sIHBheWxvYWQudG9rZW4sIGZhbHNlKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX0hPTUVfUE9TVFNfU1VDQ0VTUywgcGF5bG9hZDogeyAuLi5yZXNwb25zZSwgaXNWb3RlZDogcGF5bG9hZC5pc1ZvdGVkIH0gfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfSE9NRV9QT1NUU19GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX0hPTUVfUE9TVFNfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldFVuYXV0aG9yaXplZFBvc3RzU2FnYSh7IHBheWxvYWQgfSkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBwYXlsb2FkLmxvZGVyU3RhcnQgPyBMT0FERVJfU1RBUlQgOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEdldCwgYHBvc3QvcGFnZWQtdW5hdXRob3JpemVkLWhvbWUtcG9zdD9QYWdlTnVtYmVyPSR7cGF5bG9hZC5wYWdlTnVtYmVyfSZQYWdlU2l6ZT0ke3BheWxvYWQucGFnZVNpemV9YCwge30sIHt9LCBmYWxzZSk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9VTkFVVEhPUklaRURfUE9TVFNfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfVU5BVVRIT1JJWkVEX1BPU1RTX0ZBSUxVUkUsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfVU5BVVRIT1JJWkVEX1BPU1RTX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yIH0pO1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzZWFyY2hTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChHZXQsIGBjb21tdW5pdHkvc2VhcmNoP3RleHQ9JHtwYXlsb2FkLnRleHR9YCwge30sIHt9LCBmYWxzZSk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IFNFQVJDSF9TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IFNFQVJDSF9GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogU0VBUkNIX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yIH0pO1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIFNhZ2EoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChHRVRfSE9NRV9QT1NUU19SRVFVRVNULCBnZXRIb21lUG9zdHNTYWdhKTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9VTkFVVEhPUklaRURfUE9TVFNfUkVRVUVTVCwgZ2V0VW5hdXRob3JpemVkUG9zdHNTYWdhKTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNFQVJDSF9SRVFVRVNULCBzZWFyY2hTYWdhKTtcclxufSIsImV4cG9ydCBjb25zdCBMT0FERVJfU1RBUlQgPSAnTE9BREVSX1NUQVJUJztcclxuZXhwb3J0IGNvbnN0IExPQURFUl9FTkQgPSAnTE9BREVSX0VORCc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TG9hZGVyID0gbG9hZGluZyA9PiAoeyB0eXBlOiBsb2FkaW5nID8gTE9BREVSX1NUQVJUIDogTE9BREVSX0VORCB9KTtcclxuIiwiaW1wb3J0IHsgTE9BREVSX1NUQVJULCBMT0FERVJfRU5EIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7IHR5cGUgfSkge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMT0FERVJfU1RBUlQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH07XHJcbiAgICAgICAgY2FzZSBMT0FERVJfRU5EOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEdFVF9VTlJFQURTX1JFUVVFU1QgPSAnR0VUX1VOUkVBRFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfVU5SRUFEU19TVUNDRVNTID0gJ0dFVF9VTlJFQURTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX1VOUkVBRFNfRkFJTFVSRSA9ICdHRVRfVU5SRUFEU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBNQVJLX0FTX1JFQURfUkVRVUVTVCA9ICdNQVJLX0FTX1JFQURfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQVJLX0FTX1JFQURfU1VDQ0VTUyA9ICdNQVJLX0FTX1JFQURfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQVJLX0FTX1JFQURfRkFJTFVSRSA9ICdNQVJLX0FTX1JFQURfRkFJTFVSRSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVucmVhZHNSZXF1ZXN0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBHRVRfVU5SRUFEU19SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXJrQXNSZWFkUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBNQVJLX0FTX1JFQURfUkVRVUVTVCxcclxuICBwYXlsb2FkXHJcbn0pO1xyXG5cclxuXHJcbiIsImltcG9ydCB7IEdFVF9VTlJFQURTX0ZBSUxVUkUsIEdFVF9VTlJFQURTX1JFUVVFU1QsIEdFVF9VTlJFQURTX1NVQ0NFU1MgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVucmVhZHM6IG51bGwsXHJcbiAgZGF0YTogbnVsbCxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgR0VUX1VOUkVBRFNfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiAnJyB9O1xyXG4gICAgY2FzZSBHRVRfVU5SRUFEU19TVUNDRVNTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdW5yZWFkczogcGF5bG9hZCB9O1xyXG4gICAgY2FzZSBHRVRfVU5SRUFEU19GQUlMVVJFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IHBheWxvYWQgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2V0LCBQdXQgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gIEdFVF9VTlJFQURTX0ZBSUxVUkUsIEdFVF9VTlJFQURTX1JFUVVFU1QsIEdFVF9VTlJFQURTX1NVQ0NFU1MsIE1BUktfQVNfUkVBRF9GQUlMVVJFLCBNQVJLX0FTX1JFQURfUkVRVUVTVCwgTUFSS19BU19SRUFEX1NVQ0NFU1NcclxufSBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IHJlYWRMb2NhbFN0b3JhZ2UsIGlzTG9nZ2VkIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgTE9BREVSX1NUQVJULCBMT0FERVJfRU5EIH0gZnJvbSBcIi4uL2xvYWRlci9hY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiogZ2V0VW5yZWFkc1NhZ2EoKSB7XHJcbiAgaWYgKGlzTG9nZ2VkKCkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEdldCwgYG1lc3NhZ2UvZ2V0LXVuLXJlYWRzYCwge30sIHt9LCBmYWxzZSk7XHJcbiAgICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfVU5SRUFEU19TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZS5jb3VudCB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9VTlJFQURTX0ZBSUxVUkUsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9VTlJFQURTX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIG1hcmtBc1JlYWRTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGlkcyA9IFsuLi5wYXlsb2FkLnZhbHVlc107XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfU1RBUlQgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUHV0LCBgbWVzc2FnZS9tYXJrLWFzLXJlYWRgLCBpZHMsIHt9LCBmYWxzZSk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IE1BUktfQVNfUkVBRF9TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IE1BUktfQVNfUkVBRF9GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTUFSS19BU19SRUFEX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yIH0pO1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICB9XHJcbiAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIFNhZ2EoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChHRVRfVU5SRUFEU19SRVFVRVNULCBnZXRVbnJlYWRzU2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChNQVJLX0FTX1JFQURfUkVRVUVTVCwgbWFya0FzUmVhZFNhZ2EpO1xyXG59IiwiZXhwb3J0IGNvbnN0IEdFVF9OT1RJRklDQVRJT05TX1JFUVVFU1QgPSAnR0VUX05PVElGSUNBVElPTlNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfTk9USUZJQ0FUSU9OU19TVUNDRVNTID0gJ0dFVF9OT1RJRklDQVRJT05TX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX05PVElGSUNBVElPTlNfRkFJTFVSRSA9ICdHRVRfTk9USUZJQ0FUSU9OU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBNQVJLX0FTX1JFQURfUkVRVUVTVCA9ICdNQVJLX0FTX1JFQURfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQVJLX0FTX1JFQURfU1VDQ0VTUyA9ICdNQVJLX0FTX1JFQURfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQVJLX0FTX1JFQURfRkFJTFVSRSA9ICdNQVJLX0FTX1JFQURfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0NPVU5UX1JFUVVFU1QgPSAnR0VUX0NPVU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX0NPVU5UX1NVQ0NFU1MgPSAnR0VUX0NPVU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX0NPVU5UX0ZBSUxVUkUgPSAnR0VUX0NPVU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE5vdGlmaWNhdGlvbnNSZXF1ZXN0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBHRVRfTk9USUZJQ0FUSU9OU19SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb3VudFJlcXVlc3QgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IEdFVF9DT1VOVF9SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXJrQXNSZWFkUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBNQVJLX0FTX1JFQURfUkVRVUVTVCxcclxuICBwYXlsb2FkXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBHRVRfTk9USUZJQ0FUSU9OU19GQUlMVVJFLCBHRVRfTk9USUZJQ0FUSU9OU19SRVFVRVNULCBHRVRfTk9USUZJQ0FUSU9OU19TVUNDRVNTIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBkYXRhOiBudWxsLFxyXG4gIGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBHRVRfTk9USUZJQ0FUSU9OU19SRVFVRVNUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6ICcnIH07XHJcbiAgICBjYXNlIEdFVF9OT1RJRklDQVRJT05TX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhOiBwYXlsb2FkIH07XHJcbiAgICBjYXNlIEdFVF9OT1RJRklDQVRJT05TX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogcGF5bG9hZCB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHZXQsIFB1dCB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IGV2ZW50Q2hhbm5lbCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgeyBHRVRfTk9USUZJQ0FUSU9OU19GQUlMVVJFLCBHRVRfTk9USUZJQ0FUSU9OU19SRVFVRVNULCBHRVRfTk9USUZJQ0FUSU9OU19TVUNDRVNTLCBNQVJLX0FTX1JFQURfU1VDQ0VTUywgTUFSS19BU19SRUFEX0ZBSUxVUkUsIE1BUktfQVNfUkVBRF9SRVFVRVNULCBHRVRfQ09VTlRfU1VDQ0VTUywgR0VUX0NPVU5UX0ZBSUxVUkUsIEdFVF9DT1VOVF9SRVFVRVNUIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgcmVhZExvY2FsU3RvcmFnZSwgaXNMb2dnZWQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgTE9BREVSX0VORCwgTE9BREVSX1NUQVJUIH0gZnJvbSBcIi4uL2xvYWRlci9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5cclxuZnVuY3Rpb24qIGdldE5vdGlmaWNhdGlvbnNTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgaWYgKGlzTG9nZ2VkKCkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEdldCwgYG5vdGlmaWNhdGlvbi9nZXQtdXNlcmAsIHt9LCB7fSk7XHJcbiAgICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfTk9USUZJQ0FUSU9OU19TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9OT1RJRklDQVRJT05TX0ZBSUxVUkUsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9OT1RJRklDQVRJT05TX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfVxyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRDb3VudFNhZ2EoKSB7XHJcbiAgaWYgKGlzTG9nZ2VkKCkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEdldCwgYG5vdGlmaWNhdGlvbi9nZXQtY291bnRgLCB7fSwge30pO1xyXG4gICAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX0NPVU5UX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX0NPVU5UX0ZBSUxVUkUsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9DT1VOVF9GQUlMVVJFLCBwYXlsb2FkOiBlcnJvciB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbWFya0FzUmVhZFNhZ2EoeyBwYXlsb2FkIH0pIHtcclxuICBpZiAoaXNMb2dnZWQoKSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWRzID0gWy4uLnBheWxvYWQudmFsdWVzXTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX1NUQVJUIH0pO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUHV0LCBgbm90aWZpY2F0aW9uL21hcmstYXMtcmVhZGAsIGlkcywge30sIGZhbHNlKTtcclxuICAgICAgaWYgKHJlc3BvbnNlICYmICFyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IE1BUktfQVNfUkVBRF9TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IE1BUktfQVNfUkVBRF9GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBNQVJLX0FTX1JFQURfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBTYWdhKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoR0VUX05PVElGSUNBVElPTlNfUkVRVUVTVCwgZ2V0Tm90aWZpY2F0aW9uc1NhZ2EpO1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTUFSS19BU19SRUFEX1JFUVVFU1QsIG1hcmtBc1JlYWRTYWdhKTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9DT1VOVF9SRVFVRVNULCBnZXRDb3VudFNhZ2EpO1xyXG59IiwiaW1wb3J0IHsgR0VUX0NPVU5UX0ZBSUxVUkUsIEdFVF9DT1VOVF9SRVFVRVNULCBHRVRfQ09VTlRfU1VDQ0VTUyB9IGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBkYXRhOiBudWxsLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIEdFVF9DT1VOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6ICcnIH07XHJcbiAgICAgICAgY2FzZSBHRVRfQ09VTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IHBheWxvYWQgfTtcclxuICAgICAgICBjYXNlIEdFVF9DT1VOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IHBheWxvYWQgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEdFVF9QT1NUX0RFVEFJTF9SRVFVRVNUID0gJ0dFVF9QT1NUX0RFVEFJTF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX0RFVEFJTF9TVUNDRVNTID0gJ0dFVF9QT1NUX0RFVEFJTF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX0RFVEFJTF9GQUlMVVJFID0gJ0dFVF9QT1NUX0RFVEFJTF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFJTl9QT1NUU19SRVFVRVNUID0gJ0dFVF9NQUlOX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX01BSU5fUE9TVFNfU1VDQ0VTUyA9ICdHRVRfTUFJTl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9NQUlOX1BPU1RTX0ZBSUxVUkUgPSAnR0VUX01BSU5fUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfUE9TVFNfUkVRVUVTVCA9ICdHRVRfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSAnR0VUX1VTRVJfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0dFVF9VU0VSX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUX1JFUVVFU1QgPSAnQ1JFQVRFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TVF9TVUNDRVNTID0gJ0NSRUFURV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1RfRkFJTFVSRSA9ICdDUkVBVEVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBWT1RFX1BPU1RfUkVRVUVTVCA9ICdWT1RFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBWT1RFX1BPU1RfU1VDQ0VTUyA9ICdWT1RFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBWT1RFX1BPU1RfRkFJTFVSRSA9ICdWT1RFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfUkVRVUVTVCA9ICdERUxFVEVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUX1NVQ0NFU1MgPSAnREVMRVRFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9GQUlMVVJFID0gJ0RFTEVURV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9NT0RFUkFUT1JfUkVRVUVTVCA9ICdERUxFVEVfTU9ERVJBVE9SX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX01PREVSQVRPUl9TVUNDRVNTID0gJ0RFTEVURV9NT0RFUkFUT1JfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfTU9ERVJBVE9SX0ZBSUxVUkUgPSAnREVMRVRFX01PREVSQVRPUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0RGV0YWlsUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBHRVRfUE9TVF9ERVRBSUxfUkVRVUVTVCxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNYWluUG9zdHNSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IEdFVF9NQUlOX1BPU1RTX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlclBvc3RzUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBHRVRfVVNFUl9QT1NUU19SRVFVRVNULFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3RSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IENSRUFURV9QT1NUX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgdm90ZVBvc3RSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IFZPVEVfUE9TVF9SRVFVRVNULFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBvc3RSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IERFTEVURV9QT1NUX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlTW9kZXJhdG9yUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBERUxFVEVfTU9ERVJBVE9SX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7IiwiaW1wb3J0IHsgR0VUX1BPU1RfREVUQUlMX0ZBSUxVUkUsIEdFVF9QT1NUX0RFVEFJTF9SRVFVRVNULCBHRVRfUE9TVF9ERVRBSUxfU1VDQ0VTUyB9IGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBkYXRhOiBudWxsLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIEdFVF9QT1NUX0RFVEFJTF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6ICcnIH07XHJcbiAgICAgICAgY2FzZSBHRVRfUE9TVF9ERVRBSUxfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IHBheWxvYWQgfTtcclxuICAgICAgICBjYXNlIEdFVF9QT1NUX0RFVEFJTF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IHBheWxvYWQgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBHRVRfTUFJTl9QT1NUU19SRVFVRVNULCBHRVRfTUFJTl9QT1NUU19TVUNDRVNTLCBHRVRfTUFJTl9QT1NUU19GQUlMVVJFLFxyXG4gIEdFVF9VU0VSX1BPU1RTX1JFUVVFU1QsIEdFVF9VU0VSX1BPU1RTX1NVQ0NFU1MsIEdFVF9VU0VSX1BPU1RTX0ZBSUxVUkUsIERFTEVURV9NT0RFUkFUT1JfU1VDQ0VTU1xyXG59IGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgZGF0YTogbnVsbCxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgR0VUX01BSU5fUE9TVFNfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiAnJyB9O1xyXG4gICAgY2FzZSBHRVRfTUFJTl9QT1NUU19TVUNDRVNTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogcGF5bG9hZCB9O1xyXG4gICAgY2FzZSBHRVRfTUFJTl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IHBheWxvYWQgfTtcclxuICAgIGNhc2UgR0VUX1VTRVJfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiAnJyB9O1xyXG4gICAgY2FzZSBHRVRfVVNFUl9QT1NUU19TVUNDRVNTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogcGF5bG9hZCB9O1xyXG4gICAgY2FzZSBHRVRfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IHBheWxvYWQgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2V0LCBQb3N0LCBEZWxldGUsIFBvc3RGb3JtRGF0YSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEdFVF9QT1NUX0RFVEFJTF9GQUlMVVJFLCBHRVRfUE9TVF9ERVRBSUxfUkVRVUVTVCwgR0VUX1BPU1RfREVUQUlMX1NVQ0NFU1MsIEdFVF9VU0VSX1BPU1RTX1JFUVVFU1QsIEdFVF9VU0VSX1BPU1RTX1NVQ0NFU1MsIEdFVF9VU0VSX1BPU1RTX0ZBSUxVUkUsIExJS0VfUE9TVF9SRVFVRVNULCBMSUtFX1BPU1RfU1VDQ0VTUywgTElLRV9QT1NUX0ZBSUxVUkUsIGdldFBvc3REZXRhaWxSZXF1ZXN0LCBDT05WRVJUX0xJS0VfUE9TVF9TVUNDRVNTLCBDT05WRVJUX0xJS0VfUE9TVF9GQUlMVVJFLCBDT05WRVJUX0xJS0VfUE9TVF9SRVFVRVNULCBDUkVBVEVfUE9TVF9TVUNDRVNTLCBDUkVBVEVfUE9TVF9GQUlMVVJFLCBDUkVBVEVfUE9TVF9SRVFVRVNULCBWT1RFX1BPU1RfU1VDQ0VTUywgVk9URV9QT1NUX0ZBSUxVUkUsIFZPVEVfUE9TVF9SRVFVRVNULCBERUxFVEVfUE9TVF9TVUNDRVNTLCBERUxFVEVfUE9TVF9GQUlMVVJFLCBnZXRVc2VyUG9zdHNSZXF1ZXN0LCBERUxFVEVfUE9TVF9SRVFVRVNULCBERUxFVEVfTU9ERVJBVE9SX0ZBSUxVUkUsIERFTEVURV9NT0RFUkFUT1JfU1VDQ0VTUywgREVMRVRFX01PREVSQVRPUl9SRVFVRVNUIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgcmVhZExvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IGdldEhvbWVQb3N0c1JlcXVlc3QgfSBmcm9tIFwiLi4vaG9tZS9hY3Rpb25zXCI7XHJcbi8qIGltcG9ydCB7IHB1c2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLXJlZHV4XCI7XHJcbiAqL2ltcG9ydCB7IExPQURFUl9TVEFSVCwgTE9BREVSX0VORCB9IGZyb20gXCIuLi9sb2FkZXIvYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBnZXRDb21tdW5pdHlSZXF1ZXN0LCBnZXRDb21tdW5pdHlQb3N0c1JlcXVlc3QgfSBmcm9tIFwiLi4vY29tbXVuaXR5L2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgZ2V0UHJvZmlsZVBvc3RzUmVxdWVzdCB9IGZyb20gXCIuLi9wcm9maWxlL2FjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uKiBnZXRQb3N0RGV0YWlsU2FnYSh7IHBheWxvYWQgfSkge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAocGF5bG9hZC5sb2FkZXJTdGFydCkge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfU1RBUlQgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgdXJsID0gYHBvc3QvZ2V0P3NsdWc9JHtwYXlsb2FkLnNsdWd9YDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChHZXQsIHVybCwge30sIHBheWxvYWQudG9rZW4sIGZhbHNlKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX1BPU1RfREVUQUlMX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX1BPU1RfREVUQUlMX0ZBSUxVUkUsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfUE9TVF9ERVRBSUxfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldFVzZXJQb3N0c1NhZ2EoeyBwYXlsb2FkIH0pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX1NUQVJUIH0pO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEdldCwgYHBvc3QvZ2V0LXVzZXItcG9zdHM/dXNlcm5hbWU9JHtwYXlsb2FkLnVzZXJuYW1lfWAsIHt9LCB7fSwgZmFsc2UpO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfVVNFUl9QT1NUU19TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9VU0VSX1BPU1RTX0ZBSUxVUkUsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfVVNFUl9QT1NUU19GQUlMVVJFLCBwYXlsb2FkOiBlcnJvciB9KTtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogdm90ZVBvc3RTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgY29uc3Qgdm90ZWRVc2VybmFtZSA9IHBheWxvYWQudXNlcm5hbWU7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXIgPSByZWFkTG9jYWxTdG9yYWdlKCd1c2VyJylcclxuICAgIGNvbnN0IG5ld1BheWxvYWQgPSB7IHZhbHVlOiBwYXlsb2FkLnZhbHVlLCB1c2VySWQ6IHVzZXIuaWQsIHBvc3RJZDogcGF5bG9hZC5wb3N0SWQgfVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFBvc3QsIGBwb3N0L3ZvdGVgLCBuZXdQYXlsb2FkLCB7fSwgZmFsc2UpO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBWT1RFX1BPU1RfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBWT1RFX1BPU1RfRkFJTFVSRSwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IFZPVEVfUE9TVF9GQUlMVVJFLCBwYXlsb2FkOiBlcnJvciB9KTtcclxuICB9XHJcbiAgaWYgKHBheWxvYWQucGFnZSA9PSBcImNvbW11bml0eVwiKSB7XHJcbiAgICB5aWVsZCBwdXQoZ2V0Q29tbXVuaXR5UG9zdHNSZXF1ZXN0KHsgc2x1ZzogcGF5bG9hZC5jU2x1ZywgaXNWb3RlZDogdHJ1ZSwgcGFnZU51bWJlcjogcGF5bG9hZC5wYWdlTnVtYmVyLCBwYWdlU2l6ZTogcGF5bG9hZC5wYWdlU2l6ZSwgfSkpO1xyXG4gICAgeWllbGQgcHV0KGdldENvbW11bml0eVJlcXVlc3QoeyBzbHVnOiBwYXlsb2FkLmNTbHVnIH0pKVxyXG4gIH0gZWxzZSBpZiAocGF5bG9hZC5wYWdlID09IFwidXNlclwiKSB7XHJcbiAgICB5aWVsZCBwdXQoZ2V0VXNlclBvc3RzUmVxdWVzdCh7IHVzZXJuYW1lOiB2b3RlZFVzZXJuYW1lIH0pKVxyXG4gIH0gZWxzZSBpZiAocGF5bG9hZC5wYWdlID09IFwicG9zdF9kZXRhaWxcIikge1xyXG4gICAgeWllbGQgcHV0KGdldFBvc3REZXRhaWxSZXF1ZXN0KHsgc2VhcmNoOiBgP3N0YXR1cz0ke3BheWxvYWQucG9zdElkfWAsIGxvYWRlclN0YXJ0OiBmYWxzZSB9KSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHlpZWxkIHB1dChnZXRIb21lUG9zdHNSZXF1ZXN0KHsgbG9hZGVyU3RhcnQ6IGZhbHNlLCBwYWdlTnVtYmVyOiBwYXlsb2FkLnBhZ2VOdW1iZXIsIHBhZ2VTaXplOiBwYXlsb2FkLnBhZ2VTaXplLCBpc1ZvdGVkOiBwYXlsb2FkLmlzVm90ZWQgfSkpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGNyZWF0ZVBvc3RTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgIGNvbnN0IHVzZXIgPSByZWFkTG9jYWxTdG9yYWdlKCd1c2VyJyk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUG9zdEZvcm1EYXRhLCBgcG9zdC9jcmVhdGUtcG9zdGAsIHBheWxvYWQsIHt9KTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogQ1JFQVRFX1BPU1RfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICAgIHlpZWxkIGNhbGwoUm91dGVyLnB1c2goYC9wLyR7dXNlci51c2VybmFtZX1gKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IENSRUFURV9QT1NUX0ZBSUxVUkUsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBDUkVBVEVfUE9TVF9GQUlMVVJFLCBwYXlsb2FkOiBlcnJvciB9KTtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogZGVsZXRlUG9zdFNhZ2EoeyBwYXlsb2FkIH0pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX1NUQVJUIH0pO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKERlbGV0ZSwgYHBvc3QvZGVsZXRlP2lkPSR7cGF5bG9hZC5pZH1gLCB7fSwge30pO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBERUxFVEVfUE9TVF9TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9QT1NUX0ZBSUxVUkUsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBERUxFVEVfUE9TVF9GQUlMVVJFLCBwYXlsb2FkOiBlcnJvciB9KTtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgfVxyXG4gIHlpZWxkIHB1dChnZXRQcm9maWxlUG9zdHNSZXF1ZXN0KHt9KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBkZWxldGVNb2RlcmF0b3JTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChEZWxldGUsIGAvcG9zdC9tb2RlcmF0b3ItZGVsZXRlYCwgcGF5bG9hZCwge30sIGZhbHNlKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogREVMRVRFX01PREVSQVRPUl9TVUNDRVNTLCBwYXlsb2FkOiB7IC4uLnJlc3BvbnNlLCBkZWxldGVkUG9zdDogcGF5bG9hZC5wb3N0SWQgfSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9NT0RFUkFUT1JfRkFJTFVSRSwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9NT0RFUkFUT1JfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gIH1cclxuICB5aWVsZCBwdXQoZ2V0Q29tbXVuaXR5UmVxdWVzdCh7IHNsdWc6IHBheWxvYWQuc2x1ZyB9KSk7XHJcbiAgLy95aWVsZCBwdXQoZ2V0Q29tbXVuaXR5UG9zdHNSZXF1ZXN0KHsgc2x1ZzogcGF5bG9hZC5zbHVnLCBwYWdlTnVtYmVyOiBwYXlsb2FkLnBhZ2VOdW1iZXIsIHBhZ2VTaXplOiBwYXlsb2FkLnBhZ2VTaXplLCB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBTYWdhKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoR0VUX1BPU1RfREVUQUlMX1JFUVVFU1QsIGdldFBvc3REZXRhaWxTYWdhKTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9VU0VSX1BPU1RTX1JFUVVFU1QsIGdldFVzZXJQb3N0c1NhZ2EpO1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVk9URV9QT1NUX1JFUVVFU1QsIHZvdGVQb3N0U2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDUkVBVEVfUE9TVF9SRVFVRVNULCBjcmVhdGVQb3N0U2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChERUxFVEVfUE9TVF9SRVFVRVNULCBkZWxldGVQb3N0U2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChERUxFVEVfTU9ERVJBVE9SX1JFUVVFU1QsIGRlbGV0ZU1vZGVyYXRvclNhZ2EpO1xyXG59IiwiZXhwb3J0IGNvbnN0IFVQREFURV9QUk9GSUxFX1JFUVVFU1QgPSAnVVBEQVRFX1BST0ZJTEVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUFJPRklMRV9TVUNDRVNTID0gJ1VQREFURV9QUk9GSUxFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1BST0ZJTEVfRkFJTFVSRSA9ICdVUERBVEVfUFJPRklMRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRV9SRVFVRVNUID0gJ0dFVF9QUk9GSUxFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfU1VDQ0VTUyA9ICdHRVRfUFJPRklMRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFX0ZBSUxVUkUgPSAnR0VUX1BST0ZJTEVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfUE9TVFNfUkVRVUVTVCA9ICdHRVRfUFJPRklMRV9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFX1BPU1RTX1NVQ0NFU1MgPSAnR0VUX1BST0ZJTEVfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRV9QT1NUU19GQUlMVVJFID0gJ0dFVF9QUk9GSUxFX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2ZpbGVSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IFVQREFURV9QUk9GSUxFX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZmlsZVJlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogR0VUX1BST0ZJTEVfUkVRVUVTVCxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9maWxlUG9zdHNSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IEdFVF9QUk9GSUxFX1BPU1RTX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG4iLCJpbXBvcnQgeyBHRVRfUFJPRklMRV9QT1NUU19GQUlMVVJFLCBHRVRfUFJPRklMRV9QT1NUU19SRVFVRVNULCBHRVRfUFJPRklMRV9QT1NUU19TVUNDRVNTIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgR0VUX1BST0ZJTEVfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiAnJyB9O1xyXG4gICAgICAgIGNhc2UgR0VUX1BST0ZJTEVfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IHBheWxvYWQgfTtcclxuICAgICAgICBjYXNlIEdFVF9QUk9GSUxFX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogcGF5bG9hZCB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEdFVF9QUk9GSUxFX0ZBSUxVUkUsIEdFVF9QUk9GSUxFX1JFUVVFU1QsIEdFVF9QUk9GSUxFX1NVQ0NFU1NcclxufSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGRhdGE6IG51bGwsXHJcbiAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KSB7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIEdFVF9QUk9GSUxFX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogJycgfTtcclxuICAgIGNhc2UgR0VUX1BST0ZJTEVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IHBheWxvYWQgfTtcclxuICAgIGNhc2UgR0VUX1BST0ZJTEVfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBwYXlsb2FkIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdldCwgUG9zdCwgUHV0Rm9ybURhdGEgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gIFVQREFURV9QUk9GSUxFX0ZBSUxVUkUsIFVQREFURV9QUk9GSUxFX1JFUVVFU1QsIFVQREFURV9QUk9GSUxFX1NVQ0NFU1MsXHJcbiAgR0VUX1BST0ZJTEVfUE9TVFNfRkFJTFVSRSwgR0VUX1BST0ZJTEVfUE9TVFNfUkVRVUVTVCwgR0VUX1BST0ZJTEVfUE9TVFNfU1VDQ0VTUyxcclxuICBHRVRfUFJPRklMRV9GQUlMVVJFLCBHRVRfUFJPRklMRV9SRVFVRVNULCBHRVRfUFJPRklMRV9TVUNDRVNTLCBnZXRQcm9maWxlUmVxdWVzdFxyXG59IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHJlYWRMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgTE9BREVSX0VORCwgTE9BREVSX1NUQVJUIH0gZnJvbSBcIi4uL2xvYWRlci9hY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiogdXBkYXRlUHJvZmlsZVNhZ2EoeyBwYXlsb2FkIH0pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX1NUQVJUIH0pO1xyXG4gICAgY29uc3QgdXNlciA9IHJlYWRMb2NhbFN0b3JhZ2UoXCJ1c2VyXCIpO1xyXG4gICAgaWYgKCFwYXlsb2FkLmdlbmRlcikgcGF5bG9hZC5nZW5kZXIgPSB1c2VyLmdlbmRlclxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFB1dEZvcm1EYXRhLCBgdXNlci91cGRhdGUtdXNlcmAsIHBheWxvYWQsIHt9KTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogVVBEQVRFX1BST0ZJTEVfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBVUERBVEVfUFJPRklMRV9GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogVVBEQVRFX1BST0ZJTEVfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gIH1cclxuICB5aWVsZCBwdXQoZ2V0UHJvZmlsZVJlcXVlc3Qoe30pKTtcclxuICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0UG9zdHNTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgIGNvbnN0IHVzZXIgPSByZWFkTG9jYWxTdG9yYWdlKFwidXNlclwiKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChHZXQsIGBwb3N0L2dldC11c2VyLXBvc3RzP3VzZXJuYW1lPSR7dXNlci51c2VybmFtZX1gLCBwYXlsb2FkLCB7fSk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9QUk9GSUxFX1BPU1RTX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX1BST0ZJTEVfUE9TVFNfRkFJTFVSRSwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEdFVF9QUk9GSUxFX1BPU1RTX0ZBSUxVUkUsIHBheWxvYWQ6IGVycm9yIH0pO1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICB9XHJcbiAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGdldFByb2ZpbGVTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgIGNvbnN0IHVzZXIgPSByZWFkTG9jYWxTdG9yYWdlKFwidXNlclwiKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChHZXQsIGB1c2VyL2dldD91c2VybmFtZT0ke3VzZXIudXNlcm5hbWV9YCwge30sIHt9KTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX1BST0ZJTEVfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfUFJPRklMRV9GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX1BST0ZJTEVfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gIH1cclxuICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIFNhZ2EoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUERBVEVfUFJPRklMRV9SRVFVRVNULCB1cGRhdGVQcm9maWxlU2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChHRVRfUFJPRklMRV9QT1NUU19SRVFVRVNULCBnZXRQb3N0c1NhZ2EpO1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoR0VUX1BST0ZJTEVfUkVRVUVTVCwgZ2V0UHJvZmlsZVNhZ2EpO1xyXG59IiwiaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlcnMvcmVkdWNlcnNcIjtcclxuaW1wb3J0IGNvbW11bml0aWVzIGZyb20gXCIuL2NvbW11bml0eS9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgbG9hZGVyIGZyb20gXCIuL2xvYWRlci9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgYXV0aCBmcm9tIFwiLi9hdXRoL3JlZHVjZXJzXCI7XHJcbmltcG9ydCBwb3N0RGV0YWlsIGZyb20gXCIuL3Bvc3RzL3Bvc3REZXRhaWxSZWR1Y2VyXCI7XHJcbmltcG9ydCBob21lIGZyb20gXCIuL2hvbWUvcmVkdWNlcnNcIjtcclxuaW1wb3J0IGNvbW11bml0eSBmcm9tIFwiLi9jb21tdW5pdHkvc2VsZWN0ZWRDb21tdW5pdHlSZWR1Y2VyXCI7XHJcbmltcG9ydCBwb3N0cyBmcm9tIFwiLi9wb3N0cy9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgb2ZNb2RlcmF0b3JzIGZyb20gXCIuL2NvbW11bml0eS9vZk1vZGVyYXRvcnNSZWR1Y2VyXCI7XHJcbmltcG9ydCB1c2VyQ29tbXVuaXRpZXMgZnJvbSBcIi4vY29tbXVuaXR5L3VzZXJDb21tdW5pdGllc1JlZHVjZXJcIjtcclxuaW1wb3J0IGNvbW11bml0eVVzZXJzIGZyb20gXCIuL2NvbW11bml0eS9jb21tdW5pdHlVc2Vyc1JlZHVjZXJcIjtcclxuaW1wb3J0IGVycm9ycyBmcm9tIFwiLi9lcnJvci9yZWR1Y2VyXCI7XHJcbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gXCIuL2NhdGVnb3J5L3JlZHVjZXJzXCI7XHJcbmltcG9ydCBjb21zQnlDYXRlZ29yeSBmcm9tIFwiLi9jYXRlZ29yeS9jb21zQnlDYXRlZ29yeVJlZHVjZXJcIjtcclxuaW1wb3J0IGNvbnZlcnNhdGlvbnMgZnJvbSBcIi4vY29udmVyc2F0aW9uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCBzZWxlY3RlZENvbnZlcnNhdGlvbiBmcm9tIFwiLi9jb252ZXJzYXRpb24vY29udmVyc2F0aW9uUmVkdWNlclwiO1xyXG5pbXBvcnQgbm90aWZpY2F0aW9ucyBmcm9tIFwiLi9ub3RpZmljYXRpb25zL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB1blJlYWRzIGZyb20gXCIuL25vdGlmaWNhdGlvbnMvdW5SZWFkc1JlZHVjZXJcIjtcclxuaW1wb3J0IHVuUmVhZE1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzL3JlZHVjZXJzXCI7XHJcbmltcG9ydCBwcm9maWxlUG9zdHMgZnJvbSBcIi4vcHJvZmlsZS9wb3N0c1JlZHVjZXJcIjtcclxuaW1wb3J0IHByb2ZpbGVEYXRhIGZyb20gXCIuL3Byb2ZpbGUvcmVkdWNlcnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHVzZXIsXHJcbiAgICBjb21tdW5pdGllcyxcclxuICAgIGxvYWRlcixcclxuICAgIGF1dGgsXHJcbiAgICBwb3N0RGV0YWlsLFxyXG4gICAgaG9tZSxcclxuICAgIGNvbW11bml0eSxcclxuICAgIHBvc3RzLFxyXG4gICAgb2ZNb2RlcmF0b3JzLFxyXG4gICAgdXNlckNvbW11bml0aWVzLFxyXG4gICAgY29tbXVuaXR5VXNlcnMsXHJcbiAgICBlcnJvcnMsXHJcbiAgICBjYXRlZ29yaWVzLFxyXG4gICAgY29tc0J5Q2F0ZWdvcnksXHJcbiAgICBjb252ZXJzYXRpb25zLFxyXG4gICAgc2VsZWN0ZWRDb252ZXJzYXRpb24sXHJcbiAgICBub3RpZmljYXRpb25zLFxyXG4gICAgdW5SZWFkcyxcclxuICAgIHVuUmVhZE1lc3NhZ2VzLFxyXG4gICAgcHJvZmlsZVBvc3RzLFxyXG4gICAgcHJvZmlsZURhdGFcclxufTtcclxuIiwiaW1wb3J0IHsgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlcnMvc2FnYXNcIjtcclxuaW1wb3J0IGNvbW11bml0eSBmcm9tIFwiLi9jb21tdW5pdHkvc2FnYXNcIjtcclxuaW1wb3J0IGF1dGggZnJvbSBcIi4vYXV0aC9zYWdhc1wiO1xyXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0cy9zYWdhc1wiO1xyXG5pbXBvcnQgcHJvZmlsZSBmcm9tIFwiLi9wcm9maWxlL3NhZ2FzXCI7XHJcbmltcG9ydCBob21lIGZyb20gXCIuL2hvbWUvc2FnYXNcIjtcclxuaW1wb3J0IGNvbW1lbnQgZnJvbSBcIi4vY29tbWVudC9zYWdhc1wiO1xyXG5pbXBvcnQgY2F0ZWdvcmllcyBmcm9tIFwiLi9jYXRlZ29yeS9zYWdhc1wiO1xyXG5pbXBvcnQgY29udmVyc2F0aW9uIGZyb20gXCIuL2NvbnZlcnNhdGlvbi9zYWdhc1wiO1xyXG5pbXBvcnQgbm90aWZpY2F0aW9ucyBmcm9tIFwiLi9ub3RpZmljYXRpb25zL3NhZ2FzXCI7XHJcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlcy9zYWdhc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgICAgICB1c2VyKCksIGNvbW11bml0eSgpLCBhdXRoKCksIG1lc3NhZ2VzKCksIGNhdGVnb3JpZXMoKSwgbm90aWZpY2F0aW9ucygpLCBjb252ZXJzYXRpb24oKSwgY29tbWVudCgpLCBwcm9maWxlKCksIHBvc3QoKSwgaG9tZSgpXHJcbiAgICAgICAgXSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdldFNlYXJjaFBhcmFtcywgcmVhZExvY2FsU3RvcmFnZSB9IGZyb20gJy4vaGVscGVycyc7XHJcblxyXG4vL2V4cG9ydCBjb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vbG9jYWxob3N0OjQ0MzE1L2FwaS8nO1xyXG5leHBvcnQgY29uc3QgQVBJX1VSTCA9ICdodHRwczovL3NhYWxsYS5yYWRpbnlhemlsaW0uY29tL2FwaS8nXHJcbi8vZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9zYWFsbGFhcGkuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpLydcclxuXHJcbmNvbnN0IGNvbnRlbnRUeXBlcyA9IHtcclxuICBqc29uOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXHJcbiAgdXJsRW5jb2RlZDogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JyxcclxuICBpc011bHRpUGFydDogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxyXG59O1xyXG5cclxuY29uc3QgUG9zdCA9IChlbmRwb2ludCwgYm9keSA9IHt9LCB0b2tlbiwgaXNVcmxFbmNvZGVkKSA9PiB7XHJcbiAgY29uc3QgYXBpVXJsID0gYCR7QVBJX1VSTH0ke2VuZHBvaW50fWA7XHJcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMScsXHJcbiAgICAgICdDb250ZW50LVR5cGUnOiBpc1VybEVuY29kZWQgPyBjb250ZW50VHlwZXMudXJsRW5jb2RlZCA6IGNvbnRlbnRUeXBlcy5qc29uLFxyXG4gICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtyZWFkTG9jYWxTdG9yYWdlKCd0b2tlbicpfWBcclxuICAgIH0sXHJcbiAgICBib2R5OiBpc1VybEVuY29kZWQgPyBnZXRTZWFyY2hQYXJhbXMoYm9keSkgOiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICB9O1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2goYXBpVXJsLCByZXF1ZXN0T3B0aW9ucylcclxuICAgIC50aGVuKGZldGNoUmVzcG9uc2UgPT4gZmV0Y2hSZXNwb25zZS5qc29uKCkpXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gZXJyb3IpO1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuXHJcbmNvbnN0IFBvc3RGb3JtRGF0YSA9IChlbmRwb2ludCwgYm9keSA9IHt9LCB0b2tlbikgPT4ge1xyXG4gIGNvbnN0IGFwaVVybCA9IGAke0FQSV9VUkx9JHtlbmRwb2ludH1gO1xyXG4gIGNvbnN0IGJvZHlBc0Zvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgT2JqZWN0LmtleXMoYm9keSkuZm9yRWFjaChrZXkgPT4gYm9keUFzRm9ybURhdGEuYXBwZW5kKGtleSwgYm9keVtrZXldKSk7XHJcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMScsXHJcbiAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3JlYWRMb2NhbFN0b3JhZ2UoJ3Rva2VuJyl9YFxyXG4gICAgICAvL3Rva2VuLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IGJvZHlBc0Zvcm1EYXRhLFxyXG4gIH07XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaChhcGlVcmwsIHJlcXVlc3RPcHRpb25zKVxyXG4gICAgLnRoZW4oZmV0Y2hSZXNwb25zZSA9PiBmZXRjaFJlc3BvbnNlLmpzb24oKSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBlcnJvcik7XHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59O1xyXG5cclxuY29uc3QgUHV0Rm9ybURhdGEgPSAoZW5kcG9pbnQsIGJvZHkgPSB7fSwgdG9rZW4pID0+IHtcclxuICBjb25zdCBhcGlVcmwgPSBgJHtBUElfVVJMfSR7ZW5kcG9pbnR9YDtcclxuICBjb25zdCBib2R5QXNGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIE9iamVjdC5rZXlzKGJvZHkpLmZvckVhY2goa2V5ID0+IGJvZHlBc0Zvcm1EYXRhLmFwcGVuZChrZXksIGJvZHlba2V5XSkpO1xyXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiAnUFVUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMScsXHJcbiAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3JlYWRMb2NhbFN0b3JhZ2UoJ3Rva2VuJyl9YFxyXG4gICAgICAvLyB0b2tlbixcclxuICAgIH0sXHJcbiAgICBib2R5OiBib2R5QXNGb3JtRGF0YSxcclxuXHJcbiAgfTtcclxuICBjb25zdCByZXNwb25zZSA9IGZldGNoKGFwaVVybCwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAudGhlbihmZXRjaFJlc3BvbnNlID0+IGZldGNoUmVzcG9uc2UuanNvbigpKVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGVycm9yKTtcclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn07XHJcblxyXG5cclxuY29uc3QgRGVsZXRlID0gKGVuZHBvaW50LCBib2R5ID0ge30sIHRva2VuLCBpc1VybEVuY29kZWQpID0+IHtcclxuICBjb25zdCBhcGlVcmwgPSBgJHtBUElfVVJMfSR7ZW5kcG9pbnR9YDtcclxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKi8qOyBxPTAuMDEnLFxyXG4gICAgICAnQ29udGVudC1UeXBlJzogaXNVcmxFbmNvZGVkID8gY29udGVudFR5cGVzLnVybEVuY29kZWQgOiBjb250ZW50VHlwZXMuanNvbixcclxuICAgICAgLy90b2tlbixcclxuICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7cmVhZExvY2FsU3RvcmFnZSgndG9rZW4nKX1gXHJcbiAgICB9LFxyXG4gICAgYm9keTogaXNVcmxFbmNvZGVkID8gZ2V0U2VhcmNoUGFyYW1zKGJvZHkpIDogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgfTtcclxuICBjb25zdCByZXNwb25zZSA9IGZldGNoKGFwaVVybCwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gZXJyb3IpO1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuXHJcbmNvbnN0IFB1dCA9IChlbmRwb2ludCwgYm9keSA9IHt9LCB0b2tlbiwgaXNVcmxFbmNvZGVkKSA9PiB7XHJcbiAgY29uc3QgYXBpVXJsID0gYCR7QVBJX1VSTH0ke2VuZHBvaW50fWA7XHJcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxJyxcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6IGlzVXJsRW5jb2RlZCA/IGNvbnRlbnRUeXBlcy51cmxFbmNvZGVkIDogY29udGVudFR5cGVzLmpzb24sXHJcbiAgICAgIC8vdG9rZW4sXHJcbiAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3JlYWRMb2NhbFN0b3JhZ2UoJ3Rva2VuJyl9YFxyXG4gICAgfSxcclxuICAgIGJvZHk6IGlzVXJsRW5jb2RlZCA/IGdldFNlYXJjaFBhcmFtcyhib2R5KSA6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG5cclxuICB9O1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2goYXBpVXJsLCByZXF1ZXN0T3B0aW9ucylcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBlcnJvcik7XHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59O1xyXG5cclxuY29uc3QgR2V0ID0gKGVuZHBvaW50LCBib2R5ID0ge30sIHRva2VuLCBpc1VybEVuY29kZWQpID0+IHtcclxuICBjb25zb2xlLmxvZygnZ2V0IGRla2kgdG9rZW4nLCB0b2tlbilcclxuICBjb25zdCBhcGlVcmwgPSBpc1VybEVuY29kZWRcclxuICAgID8gYCR7QVBJX1VSTH0ke2VuZHBvaW50fSR7Z2V0U2VhcmNoUGFyYW1zKGJvZHkpfWBcclxuICAgIDogYCR7QVBJX1VSTH0ke2VuZHBvaW50fWA7XHJcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxJyxcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6IGlzVXJsRW5jb2RlZCA/IGNvbnRlbnRUeXBlcy51cmxFbmNvZGVkIDogY29udGVudFR5cGVzLmpzb24sXHJcbiAgICAgIC8vdG9rZW46IHJlYWRMb2NhbFN0b3JhZ2UoJ3Rva2VuJyksXHJcbiAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3JlYWRMb2NhbFN0b3JhZ2UoJ3Rva2VuJykgfHwgdG9rZW59YFxyXG4gICAgfSxcclxuICAgIGRhdGE6IGlzVXJsRW5jb2RlZCA/IGdldFNlYXJjaFBhcmFtcyhib2R5KSA6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gIH07XHJcbiAgcHJvY2Vzcy5lbnYuTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCA9IFwiMFwiO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2goYXBpVXJsLCByZXF1ZXN0T3B0aW9ucylcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBlcnJvcik7XHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgUG9zdCwgR2V0LCBQdXQsIERlbGV0ZSxcclxuICBQb3N0Rm9ybURhdGEsXHJcbiAgUHV0Rm9ybURhdGFcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICBjcmVhdGVTdG9yZSxcclxuICBhcHBseU1pZGRsZXdhcmUsXHJcbiAgY29tYmluZVJlZHVjZXJzLFxyXG4gIGNvbXBvc2UsXHJcbn0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUsIHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIsIGNyZWF0ZVJvdXRlck1pZGRsZXdhcmUsIGluaXRpYWxSb3V0ZXJTdGF0ZSB9IGZyb20gJ2Nvbm5lY3RlZC1uZXh0LXJvdXRlcidcclxuXHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4vc2FnYXMnO1xyXG5cclxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG5jb25zdCByb3V0ZXJNaWRkbGV3YXJlID0gY3JlYXRlUm91dGVyTWlkZGxld2FyZSgpO1xyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKGluaXRpYWxTdGF0ZSkgPT4ge1xyXG4gIC8vIE1ha2UgZXhjZXB0aW9uIGZvciByZWR1eCBkZXYgdG9vbHNcclxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xyXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgY29uc3QgY29tcG9zZUVuaGFuY2VycyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fKSB8fCBjb21wb3NlO1xyXG4gIC8qIGVzbGludC1lbmFibGUgKi9cclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgcm91dGVyTWlkZGxld2FyZV07XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICAgIGNvbWJpbmVSZWR1Y2Vycyh7IC4uLnJlZHVjZXJzLCByb3V0ZXI6IHJvdXRlclJlZHVjZXIgfSksXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpLFxyXG4gICk7XHJcblxyXG5cclxuXHJcbiAgc3RvcmUucnVuU2FnYSA9ICgpID0+IHtcclxuICAgIC8vIEF2b2lkIHJ1bm5pbmcgdHdpY2VcclxuICAgIGlmIChzdG9yZS5zYWdhKSByZXR1cm47XHJcbiAgICBzdG9yZS5zYWdhID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICB9O1xyXG5cclxuICBzdG9yZS5zdG9wU2FnYSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIEF2b2lkIHJ1bm5pbmcgdHdpY2VcclxuICAgIGlmICghc3RvcmUuc2FnYSkgcmV0dXJuO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgIGF3YWl0IHN0b3JlLnNhZ2EuZG9uZTtcclxuICAgIHN0b3JlLnNhZ2EgPSBudWxsO1xyXG4gIH07XHJcblxyXG4gIHN0b3JlLmV4ZWNTYWdhVGFza3MgPSBhc3luYyAoaXNTZXJ2ZXIsIHRhc2tzKSA9PiB7XHJcbiAgICAvLyBydW4gc2FnYVxyXG4gICAgc3RvcmUucnVuU2FnYSgpO1xyXG4gICAgLy8gZGlzcGF0Y2ggc2FnYSB0YXNrc1xyXG4gICAgdGFza3Moc3RvcmUuZGlzcGF0Y2gpO1xyXG4gICAgLy8gU3RvcCBydW5uaW5nIGFuZCB3YWl0IGZvciB0aGUgdGFza3MgdG8gYmUgZG9uZVxyXG4gICAgYXdhaXQgc3RvcmUuc3RvcFNhZ2EoKTtcclxuICAgIC8vIFJlLXJ1biBvbiBjbGllbnQgc2lkZVxyXG4gICAgaWYgKCFpc1NlcnZlcikge1xyXG4gICAgICBzdG9yZS5ydW5TYWdhKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gSW5pdGlhbCBydW5cclxuICBzdG9yZS5ydW5TYWdhKCk7XHJcblxyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VTdG9yZTtcclxuIiwiZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFX1JFUVVFU1QgPSAnR0VUX1BST0ZJTEVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRV9TVUNDRVNTID0gJ0dFVF9QUk9GSUxFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfRkFJTFVSRSA9ICdHRVRfUFJPRklMRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9CWV9VU0VSTkFNRV9SRVFVRVNUID0gJ0dFVF9VU0VSX0JZX1VTRVJOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfQllfVVNFUk5BTUVfU1VDQ0VTUyA9ICdHRVRfVVNFUl9CWV9VU0VSTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0JZX1VTRVJOQU1FX0ZBSUxVUkUgPSAnR0VUX1VTRVJfQllfVVNFUk5BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgSk9JTl9DT01NVU5JVFlfUkVRVUVTVCA9ICdKT0lOX0NPTU1VTklUWV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEpPSU5fQ09NTVVOSVRZX1NVQ0NFU1MgPSAnSk9JTl9DT01NVU5JVFlfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBKT0lOX0NPTU1VTklUWV9GQUlMVVJFID0gJ0pPSU5fQ09NTVVOSVRZX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExFQVZFX0NPTU1VTklUWV9SRVFVRVNUID0gJ0xFQVZFX0NPTU1VTklUWV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExFQVZFX0NPTU1VTklUWV9TVUNDRVNTID0gJ0xFQVZFX0NPTU1VTklUWV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExFQVZFX0NPTU1VTklUWV9GQUlMVVJFID0gJ0xFQVZFX0NPTU1VTklUWV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRU5EX1NVR0dFU1RfUkVRVUVTVCA9ICdTRU5EX1NVR0dFU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTRU5EX1NVR0dFU1RfU1VDQ0VTUyA9ICdTRU5EX1NVR0dFU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTRU5EX1NVR0dFU1RfRkFJTFVSRSA9ICdTRU5EX1NVR0dFU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlclByb2ZpbGUgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogR0VUX1BST0ZJTEVfUkVRVUVTVCxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQnlVc2VybmFtZSA9IHVzZXJuYW1lID0+ICh7XHJcbiAgdHlwZTogR0VUX1VTRVJfQllfVVNFUk5BTUVfUkVRVUVTVCxcclxuICB1c2VybmFtZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgam9pbkNvbW11bml0eVJlcXVlc3QgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBKT0lOX0NPTU1VTklUWV9SRVFVRVNULFxyXG4gIHBheWxvYWRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbGVhdmVDb21tdW5pdHlSZXF1ZXN0ID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogTEVBVkVfQ09NTVVOSVRZX1JFUVVFU1QsXHJcbiAgcGF5bG9hZFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kU3VnZ2VzdFJlcXVlc3QgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBTRU5EX1NVR0dFU1RfUkVRVUVTVCxcclxuICBwYXlsb2FkXHJcbn0pOyIsImltcG9ydCB7IEdFVF9QUk9GSUxFX0ZBSUxVUkUsIEdFVF9QUk9GSUxFX1JFUVVFU1QsIEdFVF9QUk9GSUxFX1NVQ0NFU1MsIEdFVF9VU0VSX0JZX1VTRVJOQU1FX0ZBSUxVUkUsIEdFVF9VU0VSX0JZX1VTRVJOQU1FX1JFUVVFU1QsIEdFVF9VU0VSX0JZX1VTRVJOQU1FX1NVQ0NFU1MgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGRhdGE6IG51bGwsXHJcbiAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KSB7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIEdFVF9QUk9GSUxFX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogJycgfTtcclxuICAgIGNhc2UgR0VUX1BST0ZJTEVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IHBheWxvYWQgfTtcclxuICAgIGNhc2UgR0VUX1BST0ZJTEVfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBwYXlsb2FkIH07XHJcbiAgICBjYXNlIEdFVF9VU0VSX0JZX1VTRVJOQU1FX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogJycgfTtcclxuICAgIGNhc2UgR0VUX1VTRVJfQllfVVNFUk5BTUVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGE6IHBheWxvYWQgfTtcclxuICAgIGNhc2UgR0VUX1VTRVJfQllfVVNFUk5BTUVfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBwYXlsb2FkIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdldCwgUG9zdCwgRGVsZXRlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHtcclxuICBHRVRfUFJPRklMRV9GQUlMVVJFLCBHRVRfUFJPRklMRV9SRVFVRVNULCBHRVRfUFJPRklMRV9TVUNDRVNTLCBKT0lOX0NPTU1VTklUWV9SRVFVRVNULCBKT0lOX0NPTU1VTklUWV9GQUlMVVJFLCBKT0lOX0NPTU1VTklUWV9TVUNDRVNTLFxyXG4gIEdFVF9VU0VSX0JZX1VTRVJOQU1FX0ZBSUxVUkUsIEdFVF9VU0VSX0JZX1VTRVJOQU1FX1JFUVVFU1QsIEdFVF9VU0VSX0JZX1VTRVJOQU1FX1NVQ0NFU1MsIExFQVZFX0NPTU1VTklUWV9TVUNDRVNTLCBMRUFWRV9DT01NVU5JVFlfRkFJTFVSRSwgTEVBVkVfQ09NTVVOSVRZX1JFUVVFU1QsIFNFTkRfU1VHR0VTVF9TVUNDRVNTLCBTRU5EX1NVR0dFU1RfRkFJTFVSRSwgU0VORF9TVUdHRVNUX1JFUVVFU1RcclxufSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyByZWFkTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IGdldENvbW11bml0eVJlcXVlc3QgfSBmcm9tIFwiLi4vY29tbXVuaXR5L2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgTE9BREVSX1NUQVJULCBMT0FERVJfRU5EIH0gZnJvbSBcIi4uL2xvYWRlci9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5cclxuZnVuY3Rpb24qIGdldFVzZXJQcm9maWxlKHsgcGF5bG9hZCB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9TVEFSVCB9KTtcclxuICAgIGNvbnN0IHVzZXIgPSByZWFkTG9jYWxTdG9yYWdlKFwidXNlclwiKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChHZXQsIGB1c2VyL2dldC11c2VyL2J5LWlkP2lkPSR7dXNlci5pZH1gLCB7fSwge30sIGZhbHNlKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX1BST0ZJTEVfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfUFJPRklMRV9GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX1BST0ZJTEVfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldFVzZXJCeVVzZXJuYW1lU2FnYSh1c2VybmFtZSkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfU1RBUlQgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoR2V0LCBgdXNlci9nZXQ/dXNlcm5hbWU9JHt1c2VybmFtZS51c2VybmFtZX1gLCB7fSwge30sIGZhbHNlKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX1VTRVJfQllfVVNFUk5BTUVfU1VDQ0VTUywgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURFUl9FTkQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBHRVRfVVNFUl9CWV9VU0VSTkFNRV9GQUlMVVJFLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTE9BREVSX0VORCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogR0VUX1VTRVJfQllfVVNFUk5BTUVfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FERVJfRU5EIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGpvaW5Db21tdW5pdHlTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChQb3N0LCBgdXNlci9qb2luLWNvbW11bml0eT9zbHVnPSR7cGF5bG9hZC5zbHVnfWAsIHt9LCB7fSwgZmFsc2UpO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBKT0lOX0NPTU1VTklUWV9TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IEpPSU5fQ09NTVVOSVRZX0ZBSUxVUkUsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBKT0lOX0NPTU1VTklUWV9GQUlMVVJFLCBwYXlsb2FkOiBlcnJvciB9KTtcclxuICB9XHJcbiAgeWllbGQgcHV0KGdldENvbW11bml0eVJlcXVlc3QoeyBzbHVnOiBwYXlsb2FkLnNsdWcgfSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGVhdmVDb21tdW5pdHlTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHJlYWRMb2NhbFN0b3JhZ2UoJ3VzZXInKS5pZFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKERlbGV0ZSwgYHVzZXIvbGVhdmUtZnJvbS1jb21tdW5pdHk/c2x1Zz0ke3BheWxvYWQuc2x1Z31gLCB7fSwge30sIGZhbHNlKTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTEVBVkVfQ09NTVVOSVRZX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogTEVBVkVfQ09NTVVOSVRZX0ZBSUxVUkUsIHBheWxvYWQ6IHJlc3BvbnNlIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMRUFWRV9DT01NVU5JVFlfRkFJTFVSRSwgcGF5bG9hZDogZXJyb3IgfSk7XHJcbiAgfVxyXG4gIHlpZWxkIHB1dChnZXRDb21tdW5pdHlSZXF1ZXN0KHsgc2x1ZzogcGF5bG9hZC5zbHVnIH0pKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNlbmRTdWdnZXN0U2FnYSh7IHBheWxvYWQgfSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUG9zdCwgYHVzZXIvc3VnZ2VzdGlvbmAsIHBheWxvYWQsIHt9LCBmYWxzZSk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IFNFTkRfU1VHR0VTVF9TVUNDRVNTLCBwYXlsb2FkOiByZXNwb25zZSB9KTtcclxuICAgICAgdG9hc3Quc3VjY2VzcygnVGXFn2Vra8O8cmxlci7Dlm5lcmluaSBpbmNlbGV5ZWNlxJ9peicpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBTRU5EX1NVR0dFU1RfRkFJTFVSRSwgcGF5bG9hZDogcmVzcG9uc2UgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IFNFTkRfU1VHR0VTVF9GQUlMVVJFLCBwYXlsb2FkOiBlcnJvciB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogU2FnYSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9QUk9GSUxFX1JFUVVFU1QsIGdldFVzZXJQcm9maWxlKTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9VU0VSX0JZX1VTRVJOQU1FX1JFUVVFU1QsIGdldFVzZXJCeVVzZXJuYW1lU2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChKT0lOX0NPTU1VTklUWV9SRVFVRVNULCBqb2luQ29tbXVuaXR5U2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMRUFWRV9DT01NVU5JVFlfUkVRVUVTVCwgbGVhdmVDb21tdW5pdHlTYWdhKTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNFTkRfU1VHR0VTVF9SRVFVRVNULCBzZW5kU3VnZ2VzdFNhZ2EpO1xyXG5cclxufSIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDb25uZWN0ZWRSb3V0ZXIgfSBmcm9tICdjb25uZWN0ZWQtbmV4dC1yb3V0ZXInXHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IG1ha2VTdG9yZSBmcm9tICcuLi9saWIvc3RvcmUnO1xyXG5cclxuaW1wb3J0IFwicmVhY3QtaW1hZ2UtbGlnaHRib3gvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvU2hhcmVCdXR0b24vaW5kZXguY3NzJ1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvU29jaWFsQ2FyZC9pbmRleC5jc3MnXHJcbmltcG9ydCAnbWRicmVhY3QvZGlzdC9jc3MvbWRiLmNzcyc7XHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcclxuaW1wb3J0ICdib290c3RyYXAtY3NzLW9ubHkvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4vY3VzdG9tLmNzcyc7XHJcbmltcG9ydCAnLi9wcm9maWxlLmNzcydcclxuaW1wb3J0ICcuL2NhbmRsZXMuc2NzcydcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL0NvbXBvc2UvQ29tcG9zZS5jc3MnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uTGlzdC9Db252ZXJzYXRpb25MaXN0LmNzcyc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9Db252ZXJzYXRpb25MaXN0SXRlbS9Db252ZXJzYXRpb25MaXN0SXRlbS5jc3MnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uU2VhcmNoL0NvbnZlcnNhdGlvblNlYXJjaC5jc3MnXHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9NZXNzYWdlL01lc3NhZ2UuY3NzJ1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvTWVzc2FnZUxpc3QvTWVzc2FnZUxpc3QuY3NzJ1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvTWVzc2VuZ2VyL01lc3Nlbmdlci5jc3MnXHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9Ub29sYmFyL1Rvb2xiYXIuY3NzJ1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvVG9vbGJhckJ1dHRvbi9Ub29sYmFyQnV0dG9uLmNzcydcclxuXHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pIHtcclxuICAgIGNvbnN0IHBhZ2VQcm9wcyA9IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkgOiB7fTtcclxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8Q29ubmVjdGVkUm91dGVyPlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvQ29ubmVjdGVkUm91dGVyPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChtYWtlU3RvcmUpKE15QXBwKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29ubmVjdGVkLW5leHQtcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9mcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyb2xsYmFyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
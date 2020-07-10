module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/ActionButton.jsx":
/*!*************************************!*\
  !*** ./components/ActionButton.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_users_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/users/actions */ "./lib/users/actions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\ActionButton.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function ActionButton(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    isJoined,
    joinCommunity,
    leaveCommunity,
    slug,
    isLogged
  } = props;

  if (!isLogged) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "join_button",
      variant: "contained",
      color: "primary",
      onClick: () => router.push("/giris-yap"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, "Kat\u0131l"));
  } else {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: isJoined ? "join_button_checked" : "join_button",
      variant: "contained",
      color: isJoined ? "default" : "primary",
      onClick: isJoined ? () => leaveCommunity({
        slug
      }) : () => joinCommunity({
        slug
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, isJoined ? "Üyesin" : "Katıl"));
  }
}

const mapDispatchToProps = dispatch => ({
  joinCommunity: payload => dispatch(Object(_lib_users_actions__WEBPACK_IMPORTED_MODULE_3__["joinCommunityRequest"])(payload)),
  leaveCommunity: payload => dispatch(Object(_lib_users_actions__WEBPACK_IMPORTED_MODULE_3__["leaveCommunityRequest"])(payload))
});

const mapStateToProps = state => ({
  community: state.community.data //auth: state.auth.data,

});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ActionButton));

/***/ }),

/***/ "./components/AutoComplete/index.jsx":
/*!*******************************************!*\
  !*** ./components/AutoComplete/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ComboBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\AutoComplete\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    display: "flex",
    paddingTop: "20px"
  },
  avatarImg: {
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    borderRadius: "24px",
    boxSizing: "border-box",
    flex: "none",
    height: "32px",
    width: "32px",
    margin: "0 8px"
  },
  community_title: {
    fontFamily: "inherit",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "18px",
    color: "black"
  },
  com_cont: {
    padding: "1rem 1rem 0 0",
    display: "flex"
  },
  member_count: {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px",
    paddingBottom: "4px"
  }
}));
function ComboBox({
  options,
  labelField,
  onChange,
  placeholder,
  user,
  className,
  defaultValue,
  style,
  onSearch
}) {
  const classes = useStyles();

  const renderOption = (option, classes) => {
    return __jsx("div", {
      className: classes.com_cont,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      style: {
        display: "flex",
        paddingLeft: "0px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }
    }, __jsx("img", {
      className: classes.avatarImg,
      src: option.logoPath,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }), __jsx("div", {
      style: {
        display: "grid"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }, __jsx("code", {
      className: classes.community_title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, option.name), option.type !== "user" && __jsx("span", {
      className: classes.member_count,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, option.memberCount, " \xFCye"))));
  };

  const renderUserOption = (option, classes) => {
    return __jsx("div", {
      className: classes.com_cont,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      style: {
        display: "flex",
        paddingLeft: "0px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, __jsx("img", {
      className: classes.avatarImg,
      src: option.profileImg,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }), __jsx("div", {
      style: {
        display: "grid"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }, __jsx("code", {
      className: classes.community_title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, option.username))));
  };

  return __jsx(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: className,
    defaultValue: defaultValue,
    onChange: (event, newValue) => {
      onChange(newValue);
    },
    options: options,
    renderOption: option => user ? renderUserOption(option, classes) : renderOption(option, classes),
    getOptionLabel: option => option[labelField],
    noOptionsText: "Sonu\xE7 yok",
    style: style,
    renderInput: params => __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
      onChange: onSearch
    }, params, {
      label: placeholder,
      variant: "outlined",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  });
}

/***/ }),

/***/ "./components/CommentList/components/deleteCommentPop.jsx":
/*!****************************************************************!*\
  !*** ./components/CommentList/components/deleteCommentPop.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteCommentPop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Popover */ "@material-ui/core/Popover");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\CommentList\\components\\deleteCommentPop.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  typography: {
    padding: theme.spacing(2)
  },
  button_root: {
    margin: "5px",
    textAlign: "center"
  },
  buttons: {
    padding: "2px !important",
    margin: "2px"
  }
}));
function DeleteCommentPop(props) {
  const {
    anchorEl,
    onClose,
    onSubmit
  } = props;
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return __jsx(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: onClose,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.typography,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Silmek istedi\u011Finize eminmisiniz ?"), __jsx("div", {
    className: classes.button_root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: onClose,
    className: classes.buttons,
    variant: "outlined",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Bo\u015Fver"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: onSubmit,
    className: classes.buttons,
    variant: "outlined",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Sil")));
}

/***/ }),

/***/ "./components/CreatePostTab/index.jsx":
/*!********************************************!*\
  !*** ./components/CreatePostTab/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreatePostTab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdbreact */ "mdbreact");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/helpers */ "./lib/helpers.js");
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\CreatePostTab\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function CreatePostTab(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    user,
    slug
  } = props;
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "post_bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, user && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
    style: {
      marginRight: "1rem"
    },
    src: props.user.profileImagePath,
    className: "header_avatar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("input", {
    onClick: () => {
      const token = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_5__["readLocalStorage"])("token");
      token ? router.push(`/salla?is=${slug ? slug : ""}`) : router.push("/giris-yap");
    },
    placeholder: "Salla Bi\u015Filer",
    className: "post_bar_input",
    type: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBIcon"], {
    onClick: () => {
      const token = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_5__["readLocalStorage"])("token");
      token ? router.push(`/salla?is=${slug ? slug : ""}`) : router.push("/giris-yap");
    },
    far: true,
    icon: "image",
    size: "2x",
    className: "post_bar_icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBIcon"], {
    onClick: () => {
      const token = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_5__["readLocalStorage"])("token");
      token ? router.push(`/salla?is=${slug ? slug : ""}`) : router.push("/giris-yap");
    },
    icon: "link",
    size: "2x",
    className: "post_bar_icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./components/Drawer/index.jsx":
/*!*************************************!*\
  !*** ./components/Drawer/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainDrawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../logo.png */ "./components/logo.png");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_logo_png__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\Drawer\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const drawerWidth = 240;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: _objectSpread(_objectSpread({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1)
  }, theme.mixins.toolbar), {}, {
    justifyContent: "flex-end"
  }),
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  avatarImg: {
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    borderRadius: "24px",
    boxSizing: "border-box",
    flex: "none",
    height: "32px",
    width: "32px",
    margin: "0 8px"
  }
}));
function MainDrawer(props) {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  const {
    userCommunities,
    ofModerators
  } = props;
  return __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.drawer,
    variant: "persistent",
    anchor: "left",
    open: props.open,
    classes: {
      paper: classes.drawerPaper
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.drawerHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("img", {
    style: {
      width: "7rem",
      marginRight: "1rem"
    },
    src: _logo_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onClick: props.onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, theme.direction === "ltr" ? __jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["ListItem"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default.a, {
    primary: "Ana Sayfa",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, __jsx("b", {
    style: {
      marginLeft: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, "Topluluklar\u0131n"), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      marginTop: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }), userCommunities && userCommunities.length > 0 && userCommunities.map((item, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/t/${item.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["ListItem"], {
    button: true,
    key: item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, __jsx("img", {
    className: classes.avatarImg,
    src: item.logoPath,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default.a, {
    primary: item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx("b", {
    style: {
      marginLeft: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, "Y\xF6netti\u011Fin Topluluklar"), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      marginTop: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }), ofModerators && ofModerators.length > 0 && ofModerators.map((item, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/moderator/${item.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["ListItem"], {
    button: true,
    key: item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, __jsx("img", {
    className: classes.avatarImg,
    src: item.logoPath,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default.a, {
    primary: item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }))))));
}

/***/ }),

/***/ "./components/Header/index.jsx":
/*!*************************************!*\
  !*** ./components/Header/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_NotificationImportant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/NotificationImportant */ "@material-ui/icons/NotificationImportant");
/* harmony import */ var _material_ui_icons_NotificationImportant__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NotificationImportant__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "@material-ui/icons/ExitToApp");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _lib_auth_actions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../lib/auth/actions */ "./lib/auth/actions.js");
/* harmony import */ var _AutoComplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../AutoComplete */ "./components/AutoComplete/index.jsx");
/* harmony import */ var _lib_community_actions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../lib/community/actions */ "./lib/community/actions.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../Drawer */ "./components/Drawer/index.jsx");
/* harmony import */ var _lib_notifications_actions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../lib/notifications/actions */ "./lib/notifications/actions.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _ProfileCard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../ProfileCard */ "./components/ProfileCard/index.jsx");
/* harmony import */ var _lib_messages_actions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../lib/messages/actions */ "./lib/messages/actions.js");
/* harmony import */ var _lib_home_actions__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../lib/home/actions */ "./lib/home/actions.js");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../logo.png */ "./components/logo.png");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_logo_png__WEBPACK_IMPORTED_MODULE_32__);
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\Header\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


































const drawerWidth = 240;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    display: "flex"
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    width: "7rem"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: _objectSpread(_objectSpread({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1)
  }, theme.mixins.toolbar), {}, {
    justifyContent: "flex-end"
  }),
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#a3989826",
    "&:hover": {
      backgroundColor: "#59535326"
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

function PrimarySearchAppBar(props) {
  const {
    unReads,
    unReadMessages
  } = props;
  const classes = useStyles();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [auth, setAuth] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    data: {
      token: null,
      user: null
    },
    error: null
  });
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [userQuery, setUserQuery] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const user = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["readLocalStorage"])("user");
    const token = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_21__["readLocalStorage"])("token");

    if (user) {
      setUser(user);
    }

    if (user && token) {
      const payload = {
        data: {
          user,
          token
        },
        error: null
      };
      setAuth(payload);
    }

    const {
      getUserCommunities,
      getUnReads,
      ofModerators,
      getUnReadMessages
    } = props;
    getUserCommunities();
    getUnReads();
    getUnReadMessages();
    user && user.isModerator && ofModerators();
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSelectChange = community => {
    community && router.push(`/t/${community.slug}`);
  };

  const handleSearchChange = values => {
    if (values) {
      values.type === "community" ? router.push(`/t/${values.name}`) : router.push(`/${values.name}`);
    } else {
      return;
    }
  };

  const delayedQuery = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(lodash__WEBPACK_IMPORTED_MODULE_4___default.a.debounce(q => props.search({
    text: q
  }), 500)).current;

  const onSearch = e => {
    setUserQuery(e.target.value);
    delayedQuery(e.target.value);
  };

  const menuId = "primary-search-account-menu";

  const renderMenu = __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12___default.a, {
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    id: menuId,
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: isMenuOpen,
    onClose: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18___default.a, {
    onClick: () => router.push(`/p/${user.username}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 7
    }
  }, "Profil"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18___default.a, {
    onClick: props.logOut,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 7
    }
  }, "\xC7\u0131k\u0131\u015F"));

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12___default.a, {
    anchorEl: mobileMoreAnchorEl,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    id: mobileMenuId,
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: isMobileMenuOpen,
    onClose: handleMobileMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 5
    }
  }, auth.data.token ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }
  }, " ", __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18___default.a, {
    onClick: () => router.push("/chat"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    "aria-label": "show 4 new mails",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_19___default.a, {
    badgeContent: unReadMessages,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_27___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 17
    }
  }))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }, "Mesajlar")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18___default.a, {
    onClick: () => router.push(`/bildirimler`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    "aria-label": "show 11 new notifications",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_19___default.a, {
    badgeContent: unReads && unReads.count,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 17
    }
  }))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 13
    }
  }, "Bildirimler")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18___default.a, {
    onClick: () => router.push(`/p/${user.username}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    "aria-label": "account of current user",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["Avatar"], {
    className: "header_avatar",
    src: Object(_ProfileCard__WEBPACK_IMPORTED_MODULE_29__["renderImage"])(user.profileImagePath, user.gender),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 15
    }
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 13
    }
  }, "Profil")), " ", __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18___default.a, {
    onClick: props.logOut,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 15
    }
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 13
    }
  }, "\xC7\u0131k\u0131\u015F"))) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18___default.a, {
    onClick: () => router.push("/giris-yap"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    "aria-label": "account of current user",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 15
    }
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 13
    }
  }, "Giri\u015F Yap")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18___default.a, {
    onClick: () => router.push("/kaydol"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    "aria-label": "account of current user",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 15
    }
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 13
    }
  }, "Kaydol"))));

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7___default.a, {
    position: "fixed",
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.appBar, {
      [classes.appBarShift]: open
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen,
    edge: "start",
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.menuButton, open && classes.hide),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 13
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: classes.title,
    src: _logo_png__WEBPACK_IMPORTED_MODULE_32___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: classes.search,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.searchIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 15
    }
  })), __jsx(_AutoComplete__WEBPACK_IMPORTED_MODULE_23__["default"], {
    style: {
      width: "100%"
    },
    onSearch: onSearch,
    onChange: handleSearchChange,
    placeholder: "ara",
    options: props.searchData || [],
    labelField: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 13
    }
  })), auth.data.token && __jsx(_AutoComplete__WEBPACK_IMPORTED_MODULE_23__["default"], {
    style: {
      width: "50%"
    },
    onChange: handleSelectChange,
    placeholder: "Topluluklar\u0131n",
    options: props.userCommunities || [],
    labelField: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: classes.sectionDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 11
    }
  }, auth.data.token ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClick: () => router.push("/chat"),
    "aria-label": "show 4 new mails",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_19___default.a, {
    badgeContent: unReadMessages,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 19
    }
  }, __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_27___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 21
    }
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClick: () => router.push("/bildirimler"),
    "aria-label": "show 17 new notifications",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_19___default.a, {
    badgeContent: unReads && unReads.count,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 19
    }
  }, __jsx(_material_ui_icons_NotificationImportant__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 21
    }
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    edge: "end",
    "aria-label": "account of current user",
    "aria-controls": menuId,
    "aria-haspopup": "true",
    onClick: handleProfileMenuOpen,
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["Avatar"], {
    className: "header_avatar",
    src: user.profileImagePath,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 19
    }
  })), " ") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["Button"], {
    style: {
      marginRight: "0.5rem"
    },
    onClick: () => router.push("/kaydol"),
    variant: "contained",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 17
    }
  }, "Kaydol"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["Button"], {
    onClick: () => router.push("/giris-yap"),
    variant: "contained",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 17
    }
  }, "Giri\u015F yap"))), __jsx("div", {
    className: classes.sectionMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    "aria-label": "show more",
    "aria-controls": mobileMenuId,
    "aria-haspopup": "true",
    onClick: handleMobileMenuOpen,
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_19___default.a, {
    badgeContent: unReads && unReadMessages + unReads.count,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 17
    }
  })))))), renderMobileMenu, renderMenu, __jsx(_Drawer__WEBPACK_IMPORTED_MODULE_25__["default"], {
    userCommunities: props.userCommunities,
    ofModerators: props.ownCommunities,
    open: open,
    onClose: handleDrawerClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 7
    }
  }));
}

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(Object(_lib_auth_actions__WEBPACK_IMPORTED_MODULE_22__["logOut"])()),
  getUserCommunities: () => dispatch(Object(_lib_community_actions__WEBPACK_IMPORTED_MODULE_24__["getUserCommunitiesRequest"])()),
  ofModerators: () => dispatch(Object(_lib_community_actions__WEBPACK_IMPORTED_MODULE_24__["ofModeratorsRequest"])()),
  getUnReads: () => dispatch(Object(_lib_notifications_actions__WEBPACK_IMPORTED_MODULE_26__["getCountRequest"])()),
  getUnReadMessages: () => dispatch(Object(_lib_messages_actions__WEBPACK_IMPORTED_MODULE_30__["getUnreadsRequest"])()),
  search: payload => dispatch(Object(_lib_home_actions__WEBPACK_IMPORTED_MODULE_31__["searchRequest"])(payload))
});

const mapStateToProps = state => ({
  //auth: state.auth,
  userCommunities: state.userCommunities.data,
  ownCommunities: state.ofModerators.data,
  unReads: state.unReads.data,
  unReadMessages: state.unReadMessages.unreads,
  searchData: state.home.search
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_28__["connect"])(mapStateToProps, mapDispatchToProps)(PrimarySearchAppBar));

/***/ }),

/***/ "./components/ImageModal/index.jsx":
/*!*****************************************!*\
  !*** ./components/ImageModal/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-lightbox */ "react-image-lightbox");
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\ImageModal\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ImageModal({
  imageUrl,
  onClose
}) {
  return __jsx(react_image_lightbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
    mainSrc: imageUrl,
    nextSrc: "",
    prevSrc: "",
    onCloseRequest: onClose,
    onMovePrevRequest: () => {},
    onMoveNextRequest: () => {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  });
}

/***/ }),

/***/ "./components/InfoCard.jsx":
/*!*********************************!*\
  !*** ./components/InfoCard.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\InfoCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    display: "flex",
    paddingTop: "20px"
  },
  tag_card: {
    width: "100%",
    padding: "0 1rem",
    flexWrap: "wrap"
  }
}));
function InfoCard(props) {
  const classes = useStyles();
  const {
    description,
    moderators
  } = props;
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.tag_card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "com_desc_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("b", {
    className: "info_card_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Hakkinda")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "com_desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, description)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "com_desc_container",
    style: {
      display: "grid"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("b", {
    className: "info_card_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Moderatorler")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    style: {
      padding: "1rem",
      display: "grid"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, moderators && moderators.map(m => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, __jsx("code", {
      className: classes.community_title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/${m.username}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, __jsx("a", {
      style: {
        color: "blue"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 23
      }
    }, `u/${m.username}`))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
      style: {
        margin: "4px 0 4px 0"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }
    }));
  }))));
}

/***/ }),

/***/ "./components/LinkPreview/index.jsx":
/*!******************************************!*\
  !*** ./components/LinkPreview/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkPreview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cheerio */ "cheerio");
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "@material-ui/lab/Skeleton");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\LinkPreview\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  rootLink: {
    width: "100%",
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12) !important"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9

  },
  title: {
    fontSize: "1rem !important"
  },
  description: {
    marginRight: "0px !important",
    marginLeft: "0px !important"
  }
});
const CORS_PROXY = "https://tranquil-crag-40722.herokuapp.com/";

const getPreviewData = tags => {
  const result = tags.reduce((previewData, item) => {
    switch (item.tag) {
      case "og:title":
        previewData.title = item.value;
        break;

      case "og:url":
        previewData.link = item.value;
        break;

      case "og:description":
        previewData.description = item.value;
        break;

      case "og:site_name":
        previewData.site = item.value;
        break;

      case "og:image":
        previewData.image = item.value;
        break;

      default:
        break;
    }

    return previewData;
  }, {});
  return Promise.resolve(result);
};

const parseHTML = html => {
  const $ = cheerio__WEBPACK_IMPORTED_MODULE_2___default.a.load(html);
  const meta = [];
  $("head meta").map((i, item) => {
    if (!item.attribs) return null;
    const property = item.attribs.property || null;
    const content = item.attribs.content || null;
    if (!property || !content) return null;
    meta.push({
      tag: property,
      value: content
    });
    return null;
  });
  return Promise.resolve(meta);
};

const fetchUrl = url => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default()(CORS_PROXY + url).then(response => response.data);
};

const getUrl = text => {
  if (!text) return null;
  const a = document.createElement("a");
  a.href = text;
  const {
    protocol,
    host,
    pathname,
    search,
    hash
  } = a;
  const url = `${protocol}//${host}${pathname}${search}${hash}`;
  const isSameHost = host === window.location.host;
  if (isSameHost) return null;
  return url;
};

function LinkPreview(props) {
  const {
    0: previewData,
    1: setPreviewData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchUrl(props.url).then(parseHTML).then(getPreviewData).then(setPreviewData);
  }, []);
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.rootLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: previewData && previewData.link,
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, !previewData ? __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    animation: "wave",
    variant: "rect",
    className: classes.media,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.media,
    image: previewData.image,
    title: previewData.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.title,
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, previewData && previewData.site), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.title,
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, previewData && previewData.title), !previewData ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    animation: "wave",
    height: 10,
    style: {
      marginBottom: 6
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }), __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    animation: "wave",
    height: 10,
    width: "80%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  })) : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.description,
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, previewData.description)))));
}

/***/ }),

/***/ "./components/Loader/index.jsx":
/*!*************************************!*\
  !*** ./components/Loader/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\Loader\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Loader({
  overlay = true
}) {
  return __jsx("div", {
    id: overlay && "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "sk-circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "sk-circle1 sk-child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "sk-circle2 sk-child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "sk-circle3 sk-child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "sk-circle4 sk-child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "sk-circle5 sk-child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "sk-circle6 sk-child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "sk-circle7 sk-child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "sk-circle8 sk-child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "sk-circle9 sk-child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "sk-circle10 sk-child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "sk-circle11 sk-child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "sk-circle12 sk-child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./components/ProfileCard/images/girl.png":
/*!************************************************!*\
  !*** ./components/ProfileCard/images/girl.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/ProfileCard/images/man.png":
/*!***********************************************!*\
  !*** ./components/ProfileCard/images/man.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/man-871f0e5ac57dbb35c11f27daf8523cad.png";

/***/ }),

/***/ "./components/ProfileCard/images/user.png":
/*!************************************************!*\
  !*** ./components/ProfileCard/images/user.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/ProfileCard/index.jsx":
/*!******************************************!*\
  !*** ./components/ProfileCard/index.jsx ***!
  \******************************************/
/*! exports provided: renderImage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderImage", function() { return renderImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/CheckCircleOutline */ "@material-ui/icons/CheckCircleOutline");
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/HighlightOff */ "@material-ui/icons/HighlightOff");
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/user.png */ "./components/ProfileCard/images/user.png");
/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_user_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_girl_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/girl.png */ "./components/ProfileCard/images/girl.png");
/* harmony import */ var _images_girl_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_girl_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_man_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/man.png */ "./components/ProfileCard/images/man.png");
/* harmony import */ var _images_man_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_man_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\ProfileCard\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const renderImage = (image, gender) => {
  if (!image) {
    switch (gender) {
      case "E":
        return _images_man_png__WEBPACK_IMPORTED_MODULE_7___default.a;

      case "K":
        return _images_girl_png__WEBPACK_IMPORTED_MODULE_6___default.a;

      default:
        return _images_user_png__WEBPACK_IMPORTED_MODULE_5___default.a;
    }
  } else {
    return image;
  }
};

function ProfileCard({
  img,
  username,
  gender,
  bio,
  onSubmit,
  previewLogoUrl
}) {
  const {
    0: isEdit,
    1: setEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    profileImage: "",
    bio: ""
  });

  const handleChange = (event, input) => {
    event.preventDefault();
    let imageFile = event.target.files[0];
    const newValues = {};
    newValues.profileImage = imageFile;
    onSubmit(newValues);
  };

  const handleBioChange = e => {
    const newValues = _objectSpread({}, values);

    newValues.bio = e.target.value;
    setValues(newValues);
  };

  const handleBioSubmit = () => {
    const bio = values.bio;
    onSubmit({
      bio
    });
    setEdit(false);
  };

  return __jsx("aside", {
    class: "profile-card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("div", {
    class: "mask-shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: renderImage(img, gender),
    alt: "preview",
    className: "preview-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "edit_icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "myInput",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "profile_edit_icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  })), __jsx("input", {
    id: "myInput",
    style: {
      display: "none"
    },
    type: "file",
    onChange: event => handleChange(event, {
      name: "file"
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }))), __jsx("h1", {
    style: {
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, username)), __jsx("div", {
    class: "profile-bio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, isEdit ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    style: {
      width: "100%"
    },
    id: "outlined-multiline-static",
    label: "bio",
    multiline: true,
    onChange: handleBioChange,
    name: "bio",
    rows: 6,
    rowsMax: 6,
    defaultValue: bio,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: () => setEdit(!isEdit),
    className: "close_icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }), __jsx(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleBioSubmit,
    className: "check_icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }))) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "\"", bio, "\""), __jsx("div", {
    className: "edit_icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: () => setEdit(!isEdit),
    className: "profile_edit_icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProfileCard);

/***/ }),

/***/ "./components/ShareButton/index.jsx":
/*!******************************************!*\
  !*** ./components/ShareButton/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\ShareButton\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ShareButton() {
  return __jsx("div", {
    className: "share-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "share-button__back",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "share__link",
    target: "_blank",
    href: "https://twitter.com/home",
    title: "twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("svg", {
    className: "share__icon share__icon--twitter",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "49.652px",
    height: "49.652px",
    viewBox: "0 0 49.652 49.652",
    style: {
      enableBackground: "new 0 0 49.652 49.652"
    },
    xmlSpace: "preserve",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826    C49.652,11.137,38.516,0,24.826,0z M35.901,19.144c0.011,0.246,0.017,0.494,0.017,0.742c0,7.551-5.746,16.255-16.259,16.255    c-3.227,0-6.231-0.943-8.759-2.565c0.447,0.053,0.902,0.08,1.363,0.08c2.678,0,5.141-0.914,7.097-2.446    c-2.5-0.046-4.611-1.698-5.338-3.969c0.348,0.066,0.707,0.103,1.074,0.103c0.521,0,1.027-0.068,1.506-0.199    c-2.614-0.524-4.583-2.833-4.583-5.603c0-0.024,0-0.049,0.001-0.072c0.77,0.427,1.651,0.685,2.587,0.714    c-1.532-1.023-2.541-2.773-2.541-4.755c0-1.048,0.281-2.03,0.773-2.874c2.817,3.458,7.029,5.732,11.777,5.972    c-0.098-0.419-0.147-0.854-0.147-1.303c0-3.155,2.558-5.714,5.713-5.714c1.644,0,3.127,0.694,4.171,1.804    c1.303-0.256,2.523-0.73,3.63-1.387c-0.43,1.335-1.333,2.454-2.516,3.162c1.157-0.138,2.261-0.444,3.282-0.899    C37.987,17.334,37.018,18.341,35.901,19.144z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }))))), __jsx("a", {
    className: "share__link ",
    target: "_blank",
    href: "https://www.facebook.com/",
    title: "facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("svg", {
    className: "share__icon share__icon--facebook",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "49.652px",
    height: "49.652px",
    viewBox: "0 0 49.652 49.652",
    style: {
      enableBackground: "new 0 0 49.652 49.652"
    },
    xmlSpace: "preserve",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826    C49.652,11.137,38.516,0,24.826,0z M31,25.7h-4.039c0,6.453,0,14.396,0,14.396h-5.985c0,0,0-7.866,0-14.396h-2.845v-5.088h2.845    v-3.291c0-2.357,1.12-6.04,6.04-6.04l4.435,0.017v4.939c0,0-2.695,0-3.219,0c-0.524,0-1.269,0.262-1.269,1.386v2.99h4.56L31,25.7z    ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }))))), __jsx("a", {
    className: "share__link",
    href: "https://www.google.com",
    target: "_blank",
    title: "google plus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("svg", {
    className: "share__icon share__icon--google",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "49.652px",
    height: "49.652px",
    viewBox: "0 0 49.652 49.652",
    style: {
      enableBackground: "new 0 0 49.652 49.652"
    },
    xmlSpace: "preserve",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M21.5,28.94c-0.161-0.107-0.326-0.223-0.499-0.34c-0.503-0.154-1.037-0.234-1.584-0.241h-0.066     c-2.514,0-4.718,1.521-4.718,3.257c0,1.89,1.889,3.367,4.299,3.367c3.179,0,4.79-1.098,4.79-3.258     c0-0.204-0.024-0.416-0.075-0.629C23.432,30.258,22.663,29.735,21.5,28.94z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "M19.719,22.352c0.002,0,0.002,0,0.002,0c0.601,0,1.108-0.237,1.501-0.687c0.616-0.702,0.889-1.854,0.727-3.077     c-0.285-2.186-1.848-4.006-3.479-4.053l-0.065-0.002c-0.577,0-1.092,0.238-1.483,0.686c-0.607,0.693-0.864,1.791-0.705,3.012     c0.286,2.184,1.882,4.071,3.479,4.121H19.719L19.719,22.352z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826     C49.652,11.137,38.516,0,24.826,0z M21.964,36.915c-0.938,0.271-1.953,0.408-3.018,0.408c-1.186,0-2.326-0.136-3.389-0.405     c-2.057-0.519-3.577-1.503-4.287-2.771c-0.306-0.548-0.461-1.132-0.461-1.737c0-0.623,0.149-1.255,0.443-1.881     c1.127-2.402,4.098-4.018,7.389-4.018c0.033,0,0.064,0,0.094,0c-0.267-0.471-0.396-0.959-0.396-1.472     c0-0.255,0.034-0.515,0.102-0.78c-3.452-0.078-6.035-2.606-6.035-5.939c0-2.353,1.881-4.646,4.571-5.572     c0.805-0.278,1.626-0.42,2.433-0.42h7.382c0.251,0,0.474,0.163,0.552,0.402c0.078,0.238-0.008,0.5-0.211,0.647l-1.651,1.195     c-0.099,0.07-0.218,0.108-0.341,0.108H24.55c0.763,0.915,1.21,2.22,1.21,3.685c0,1.617-0.818,3.146-2.307,4.311     c-1.15,0.896-1.195,1.143-1.195,1.654c0.014,0.281,0.815,1.198,1.699,1.823c2.059,1.456,2.825,2.885,2.825,5.269     C26.781,33.913,24.89,36.065,21.964,36.915z M38.635,24.253c0,0.32-0.261,0.58-0.58,0.58H33.86v4.197     c0,0.32-0.261,0.58-0.578,0.58h-1.195c-0.322,0-0.582-0.26-0.582-0.58v-4.197h-4.192c-0.32,0-0.58-0.258-0.58-0.58V23.06     c0-0.32,0.26-0.582,0.58-0.582h4.192v-4.193c0-0.321,0.26-0.58,0.582-0.58h1.195c0.317,0,0.578,0.259,0.578,0.58v4.193h4.194     c0.319,0,0.58,0.26,0.58,0.58V24.253z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }))))))), __jsx("div", {
    className: "share-button__front",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "share-button__text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, "Payla\u015F")));
}

/***/ }),

/***/ "./components/SocialCard/index.jsx":
/*!*****************************************!*\
  !*** ./components/SocialCard/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "@material-ui/core/CardHeader");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment_locale_tr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment/locale/tr */ "moment/locale/tr");
/* harmony import */ var moment_locale_tr__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment_locale_tr__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mdbreact */ "mdbreact");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "@material-ui/lab/Skeleton");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _LinkPreview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../LinkPreview */ "./components/LinkPreview/index.jsx");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _postMenu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../postMenu */ "./components/postMenu.jsx");
/* harmony import */ var _lib_posts_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../lib/posts/actions */ "./lib/posts/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _CommentList_components_deleteCommentPop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../CommentList/components/deleteCommentPop */ "./components/CommentList/components/deleteCommentPop.jsx");
/* harmony import */ var _ImageModal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../ImageModal */ "./components/ImageModal/index.jsx");
/* harmony import */ var _ShareButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../ShareButton */ "./components/ShareButton/index.jsx");
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\SocialCard\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

























const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    display: "flex"
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    // 16:9
    backgroundSize: "contain"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  postImage: {
    borderRadius: "20px",
    maxHeight: "512px",
    maxWidth: "100%"
  },
  leftSide: {
    width: "48px",
    backgroundColor: "#edebebcc"
  }
}));

function SocialCard(props) {
  const classes = useStyles();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [popupAnchor, setPopupAnchor] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  moment__WEBPACK_IMPORTED_MODULE_10___default.a.locale();
  const {
    id,
    img,
    createdDate,
    content,
    pSlug,
    contentType,
    community,
    comments,
    user,
    linkUrl,
    voteCount,
    userPostVote,
    onVote,
    profilePosts,
    isModerator,
    auth,
    pageNumber
  } = props;

  const handleVote = value => {
    const values = {
      postId: id,
      value,
      pageNumber
    };
    onVote(values);
  };

  const renderMedia = () => {
    if (contentType == 50) {
      return __jsx("div", {
        className: "linkPreview_container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 9
        }
      }, __jsx(_LinkPreview__WEBPACK_IMPORTED_MODULE_17__["default"], {
        url: linkUrl,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }
      }));
    }

    if (contentType == 20) {
      return __jsx("div", {
        className: "player-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }
      }, __jsx(react_player__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: "react-player",
        controls: true,
        url: img,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }
      }));
    } else {
      return __jsx("div", {
        className: "imgContainer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }
      }, __jsx("img", {
        onClick: () => setOpen(true),
        className: classes.postImage,
        src: img,
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }
      }), isOpen && __jsx(_ImageModal__WEBPACK_IMPORTED_MODULE_23__["default"], {
        imageUrl: img,
        onClose: () => setOpen(false),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }
      }));
    }
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClosePopup = () => {
    setPopupAnchor(null);
  };

  const onDeleteClick = event => {
    setPopupAnchor(event.currentTarget);
  };

  const onDeletePost = () => {
    const {
      deletePost
    } = props;
    deletePost({
      id
    });
    setPopupAnchor(false);
  };

  const onDeleteModerator = () => {
    const {
      moderatorDelete,
      pageDto
    } = props;
    const payload = {
      slug: community.slug,
      postId: id,
      pageNumber: pageDto.pageNumber,
      pageSize: pageDto.pageSize
    };
    moderatorDelete(payload);
    setPopupAnchor(null);
    setAnchorEl(null);
  };

  const menuItems = [!profilePosts && {
    title: "Şikayet Et",
    onClick: handleClose
  }, profilePosts ? {
    title: "Sil",
    onClick: onDeleteClick
  } : null];
  const moderatorItems = [{
    title: "Şikayet Et",
    onClick: handleClose
  }, {
    title: "Sil",
    onClick: onDeleteClick
  }];

  const calculateSallamaCount = comments => {
    let count = 0;

    if (comments && comments.length > 0) {
      comments.map(x => count += x.replyCount);
      count += comments.length;
    }

    return count;
  };

  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "post_card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.leftSide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "vote_cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_15__["MDBIcon"], {
    className: userPostVote && userPostVote.value == 1 ? "angle-double-up_checked" : "angle-double-up",
    icon: "angle-double-up",
    onClick: () => {
      const token = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_18__["readLocalStorage"])("token");
      token ? handleVote(userPostVote && userPostVote.value == 1 ? 0 : 1) : router.push("/giris-yap");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "vote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  }, voteCount), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_15__["MDBIcon"], {
    className: userPostVote && userPostVote.value == -1 ? "angle-double-down_checked" : "angle-double-down",
    icon: "angle-double-down",
    onClick: () => handleVote(userPostVote && userPostVote.value == -1 ? 0 : -1),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  }))), __jsx("div", {
    style: {
      width: "100%",
      overflow: "hidden"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "post_card_header",
    style: {
      padding: "16px 16px 0 16px"
    },
    avatar: !id ? __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_16___default.a, {
      animation: "wave",
      variant: "circle",
      width: 40,
      height: 40,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 15
      }
    }) : __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
      "aria-label": "recipe",
      src: community.logoPath,
      className: classes.avatar,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 15
      }
    }),
    action: __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
      "aria-controls": "simple-menu",
      "aria-haspopup": "true",
      onClick: handleClick,
      "aria-label": "settings",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 17
      }
    })), __jsx(_postMenu__WEBPACK_IMPORTED_MODULE_19__["default"], {
      open: Boolean(anchorEl),
      onClose: handleClose,
      anchorEl: anchorEl,
      onClose: handleClose,
      menuItems: isModerator ? moderatorItems : menuItems,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 15
      }
    }), __jsx(_CommentList_components_deleteCommentPop__WEBPACK_IMPORTED_MODULE_22__["default"], {
      onSubmit: isModerator ? onDeleteModerator : onDeletePost,
      onClose: handleClosePopup,
      anchorEl: popupAnchor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 15
      }
    })),
    title: !id ? __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_16___default.a, {
      animation: "wave",
      height: 10,
      width: "80%",
      style: {
        marginBottom: 6
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 15
      }
    }) : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
      href: "/t/[community]",
      as: `/t/${community.slug}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 17
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 19
      }
    }, community.name)), __jsx("small", {
      style: {
        margin: "4px",
        fontWeight: 600,
        fontSize: "92%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 17
      }
    }, "/"), user && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
      as: auth && auth.user && auth.user.username == user.userName ? `/p/${user.userName}` : `u/${user.userName}`,
      href: auth && auth.user && auth.user.username == user.userName ? `/p/[username]` : `u/[username]`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "posted_by",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 23
      }
    }, "u/" + user.userName + " " + "tarafından")))),
    subheader: createdDate && moment__WEBPACK_IMPORTED_MODULE_10___default()(createdDate).fromNow(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    as: `/${community.slug}/${pSlug}`,
    href: "/[community]/[post]",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "content_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "post_content_area",
    style: {
      padding: "5px 16px 16px 25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }
  }, !id ? __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_16___default.a, {
    animation: "wave",
    variant: "rect",
    className: classes.media,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 17
    }
  }) : __jsx("div", {
    className: "card_post_content",
    dangerouslySetInnerHTML: {
      __html: content
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 17
    }
  })), renderMedia())), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Divider"], {
    style: {
      margin: "15px 0px 0px 0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      padding: "0px",
      paddingLeft: "3.5rem"
    },
    disableSpacing: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 9
    }
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_15__["MDBIcon"], {
    style: {
      margin: "0.5rem"
    },
    size: "lg",
    far: true,
    icon: "comment-dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 11
    }
  }), __jsx("small", {
    style: {
      marginLeft: "-5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 11
    }
  }, comments && calculateSallamaCount(comments), " sallama"), __jsx(_ShareButton__WEBPACK_IMPORTED_MODULE_24__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 11
    }
  }))));
}

const mapDispatchToProps = dispatch => ({
  deletePost: payload => dispatch(Object(_lib_posts_actions__WEBPACK_IMPORTED_MODULE_20__["deletePostRequest"])(payload)),
  moderatorDelete: payload => dispatch(Object(_lib_posts_actions__WEBPACK_IMPORTED_MODULE_20__["deleteModeratorRequest"])(payload))
});

const mapStateToProps = state => ({
  auth: state.auth && state.auth.data
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_21__["connect"])(mapStateToProps, mapDispatchToProps)(SocialCard));

/***/ }),

/***/ "./components/logo.png":
/*!*****************************!*\
  !*** ./components/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/mainLayout.jsx":
/*!***********************************!*\
  !*** ./components/mainLayout.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Email */ "@material-ui/icons/Email");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loader */ "./components/Loader/index.jsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Header/index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sendSuggestionModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sendSuggestionModal */ "./components/sendSuggestionModal.jsx");
/* harmony import */ var _lib_users_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/users/actions */ "./lib/users/actions.js");
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\mainLayout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function MainLayout(props) {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    loader
  } = props;

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      content: text,
      email
    };
    props.sendSuggest(payload);
    setOpen(false);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Hep Beraber Sall\u0131yoruz | Saalla"), __jsx("meta", {
    name: "description",
    content: "Saalla, insanlar\u0131n ilgi alanlar\u0131na g\xF6re sallayabildikleri topluluk a\u011F\u0131d\u0131r. \u0130lgilendi\u011Finiz topluluklar\u0131 bulun ve \xE7evrimi\xE7i bir toplulu\u011Fun par\xE7as\u0131 olun!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("meta", {
    charSet: "utf-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), loader.loading && __jsx(_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 26
    }
  }), props.children, __jsx("div", {
    className: "icon-bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("a", {
    onClick: () => setOpen(!open),
    className: "facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }))), __jsx(_sendSuggestionModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: handleChange,
    onChangeEmail: handleChangeEmail,
    onSubmit: handleSubmit,
    text: text,
    open: open,
    onClose: () => setOpen(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }));
}

const mapStateToProps = state => ({
  loader: state.loader
});

const mapDispatchToProps = dispatch => ({
  sendSuggest: payload => dispatch(Object(_lib_users_actions__WEBPACK_IMPORTED_MODULE_7__["sendSuggestRequest"])(payload))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(MainLayout));

/***/ }),

/***/ "./components/postMenu.jsx":
/*!*********************************!*\
  !*** ./components/postMenu.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\postMenu.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function PostMenu(props) {
  const {
    menuItems
  } = props;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "simple-menu",
    anchorEl: props.anchorEl,
    keepMounted: true,
    open: Boolean(props.anchorEl),
    onClose: props.onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, menuItems && menuItems.length > 0 && menuItems.map((item, index) => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: index,
    onClick: item && item.onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, item && item.title))));
}

/***/ }),

/***/ "./components/sendSuggestionModal.jsx":
/*!********************************************!*\
  !*** ./components/sendSuggestionModal.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SendSuggestionModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Modal */ "@material-ui/core/Modal");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Image */ "@material-ui/icons/Image");
/* harmony import */ var _material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\sendSuggestionModal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  button: {
    textTransform: "none",
    boxShadow: "none",
    padding: "0",
    float: "right",
    marginTop: "10px"
  }
}));
function SendSuggestionModal(props) {
  const {
    open,
    onClose,
    onSubmit,
    text,
    onChange,
    onChangeEmail
  } = props;
  const classes = useStyles();
  const [modalStyle] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(getModalStyle);

  const body = __jsx("div", {
    style: modalStyle,
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "Beta s\xFCr\xFCm\xFC hakk\u0131nda ne d\xFC\u015F\xFCn\xFCyorsun ? Teklif ve \xF6nerilerini bizimle payla\u015F"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    onChange: onChange,
    style: {
      width: "100%"
    },
    id: "standard-textarea",
    label: "neyi de\u011Fi\u015Ftirsek ?",
    multiline: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    onChange: onChangeEmail,
    style: {
      width: "100%"
    },
    id: "standard-textarea",
    label: "e-posta - iste\u011Fe ba\u011Fl\u0131",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    disabled: !text,
    onClick: onSubmit,
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, "G\xF6nder")));

  return __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
    open: open,
    onClose: onClose,
    "aria-labelledby": "simple-modal-title",
    "aria-describedby": "simple-modal-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, body);
}

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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/t/[community].jsx":
/*!*********************************!*\
  !*** ./pages/t/[community].jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-infinite-scroll-component */ "react-infinite-scroll-component");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_InfoCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/InfoCard */ "./components/InfoCard.jsx");
/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/mainLayout */ "./components/mainLayout.jsx");
/* harmony import */ var _lib_community_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/community/actions */ "./lib/community/actions.js");
/* harmony import */ var _lib_users_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/users/actions */ "./lib/users/actions.js");
/* harmony import */ var _components_ActionButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ActionButton */ "./components/ActionButton.jsx");
/* harmony import */ var _lib_posts_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/posts/actions */ "./lib/posts/actions.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Loader */ "./components/Loader/index.jsx");
/* harmony import */ var _lib_commonActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/commonActions */ "./lib/commonActions.js");
/* harmony import */ var _components_CreatePostTab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/CreatePostTab */ "./components/CreatePostTab/index.jsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_SocialCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/SocialCard */ "./components/SocialCard/index.jsx");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../lib/helpers */ "./lib/helpers.js");
var _jsxFileName = "D:\\repos\\saalla-next.js\\pages\\t\\[community].jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




















function CommunityPage(props) {
  const {
    0: pageNumber,
    1: setNumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    return () => {
      props.clearStore("community_posts");
    };
  }, []);

  const element = () => {
    const {
      community
    } = props;
    const token = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_18__["readLocalStorage"])("token");
    const user = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_18__["readLocalStorage"])("user");
    if (!token) return __jsx(_components_ActionButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      isLogged: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 24
      }
    });
    let isJoined = false;
    community && community.members && community.members.length > 0 && community.members.map(member => {
      if (member.username == user.username) {
        isJoined = true;
      }
    });
    return __jsx(_components_ActionButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      isLogged: true,
      isJoined: isJoined,
      slug: community.slug,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    });
  };

  const onVote = values => {
    const {
      votePost,
      community
    } = props;
    values.page = "community";
    values.cSlug = community.slug;
    values.communityId = community.id;
    values.pageSize = 6;
    values.loaderStart = false;
    votePost(values);
  };

  const fetchMoreData = () => {
    const newNumber = pageNumber + 1;
    const {
      getPosts
    } = props;
    getPosts({
      pageNumber: newNumber,
      pageSize: 6,
      slug: community.slug,
      loaderStart: false
    });
    setNumber(newNumber);
  };

  const {
    community,
    posts
  } = props;
  return community && __jsx(_components_mainLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, community.name + " topluluğu | Saalla "), __jsx("meta", {
    name: "description",
    content: community.description !== "" && community.description !== null && community.description.slice(0, 100),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      marginTop: "4rem",
      height: "240px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "com_cover_image",
    src: community.coverImagePath,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: "com_bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "com_bar_info",
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "profile_img",
    src: community.logoPath,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "com_name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "com_bar_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "com_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }
  }, community.name), __jsx("small", {
    className: "com_member_count",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, "t/", community.slug + " |"), __jsx("small", {
    className: "com_member_count",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, community && community.members && community.members.length, "\xDCye")), __jsx("div", {
    className: "join_button_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, element()))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    style: {
      marginTop: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx(_components_CreatePostTab__WEBPACK_IMPORTED_MODULE_14__["default"], {
    slug: community.slug,
    user: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_18__["readLocalStorage"])("user"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      marginTop: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    style: {
      paddingBottom: "10px",
      paddingTop: "20px"
    },
    xs: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
    dataLength: posts && posts.results && posts.results.length,
    next: fetchMoreData,
    hasMore: posts && posts.hasNext,
    loader: __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_12__["default"], {
      overlay: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 25
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, posts && posts.results && posts.results.length > 0 && posts.results.map(item => __jsx(_components_SocialCard__WEBPACK_IMPORTED_MODULE_16__["default"], {
    pageNumber: item.pageNumber,
    key: item.id,
    id: item.id,
    pSlug: item.slug,
    img: item.mediaContentPath,
    createdDate: item.createdDateTime,
    content: item.content,
    contentType: item.contentType,
    community: {
      name: community.name,
      slug: community.slug,
      logoPath: community.logoPath
    },
    comments: item.comments,
    user: item.user,
    linkUrl: item.linkUrl,
    voteCount: item.voteCount,
    userPostVote: item.userPostVote,
    onVote: onVote,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    style: {
      paddingBottom: "10px"
    },
    xs: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "com_right_bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 15
    }
  }, __jsx(_components_InfoCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    moderators: community.moderators,
    description: community.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }))))));
}

CommunityPage.getInitialProps = async ctx => {
  await ctx.store.execSagaTasks(ctx.isServer, dispatch => {
    const {
      community
    } = ctx.query;
    dispatch(Object(_lib_community_actions__WEBPACK_IMPORTED_MODULE_8__["getCommunityRequest"])({
      slug: community,
      loaderStart: true,
      token: Object(nookies__WEBPACK_IMPORTED_MODULE_17__["parseCookies"])(ctx).token
    }));
    dispatch(Object(_lib_community_actions__WEBPACK_IMPORTED_MODULE_8__["getCommunityPostsRequest"])({
      pageNumber: 1,
      pageSize: 6,
      slug: community,
      loaderStart: true,
      token: Object(nookies__WEBPACK_IMPORTED_MODULE_17__["parseCookies"])(ctx).token
    }));
  });
  return {};
};

const mapDispatchToProps = dispatch => ({
  getCommunity: payload => dispatch(Object(_lib_community_actions__WEBPACK_IMPORTED_MODULE_8__["getCommunityRequest"])(payload)),
  joinCommunity: payload => dispatch(Object(_lib_users_actions__WEBPACK_IMPORTED_MODULE_9__["joinCommunityRequest"])(payload)),
  votePost: payload => dispatch(Object(_lib_posts_actions__WEBPACK_IMPORTED_MODULE_11__["votePostRequest"])(payload)),
  getPosts: payload => dispatch(Object(_lib_community_actions__WEBPACK_IMPORTED_MODULE_8__["getCommunityPostsRequest"])(payload)),
  clearStore: name => dispatch(Object(_lib_commonActions__WEBPACK_IMPORTED_MODULE_13__["clearStoreRequest"])(name))
});

const mapStateToProps = state => ({
  community: state.community.data,
  posts: state.community.pagedData //auth: state.auth.data,

});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(CommunityPage));

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** multi ./pages/t/[community].jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\repos\saalla-next.js\pages\t\[community].jsx */"./pages/t/[community].jsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardHeader":
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Modal":
/*!******************************************!*\
  !*** external "@material-ui/core/Modal" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Modal");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Popover":
/*!********************************************!*\
  !*** external "@material-ui/core/Popover" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/CheckCircleOutline":
/*!********************************************************!*\
  !*** external "@material-ui/icons/CheckCircleOutline" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircleOutline");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "@material-ui/icons/Email":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Email" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),

/***/ "@material-ui/icons/ExitToApp":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ExitToApp" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "@material-ui/icons/HighlightOff":
/*!**************************************************!*\
  !*** external "@material-ui/icons/HighlightOff" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/HighlightOff");

/***/ }),

/***/ "@material-ui/icons/Image":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Image" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Image");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "@material-ui/icons/NotificationImportant":
/*!***********************************************************!*\
  !*** external "@material-ui/icons/NotificationImportant" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NotificationImportant");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/lab/Autocomplete":
/*!************************************************!*\
  !*** external "@material-ui/lab/Autocomplete" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Autocomplete");

/***/ }),

/***/ "@material-ui/lab/Skeleton":
/*!********************************************!*\
  !*** external "@material-ui/lab/Skeleton" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Skeleton");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/fp":
/*!****************************!*\
  !*** external "lodash/fp" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/fp");

/***/ }),

/***/ "mdbreact":
/*!***************************!*\
  !*** external "mdbreact" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mdbreact");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "moment/locale/tr":
/*!***********************************!*\
  !*** external "moment/locale/tr" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment/locale/tr");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-image-lightbox":
/*!***************************************!*\
  !*** external "react-image-lightbox" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image-lightbox");

/***/ }),

/***/ "react-infinite-scroll-component":
/*!**************************************************!*\
  !*** external "react-infinite-scroll-component" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FjdGlvbkJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdXRvQ29tcGxldGUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbWVudExpc3QvY29tcG9uZW50cy9kZWxldGVDb21tZW50UG9wLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZVBvc3RUYWIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRHJhd2VyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbWFnZU1vZGFsL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZm9DYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpbmtQcmV2aWV3L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlQ2FyZC9pbWFnZXMvZ2lybC5wbmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlQ2FyZC9pbWFnZXMvbWFuLnBuZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGVDYXJkL2ltYWdlcy91c2VyLnBuZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGVDYXJkL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NoYXJlQnV0dG9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvY2lhbENhcmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYWluTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RNZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbmRTdWdnZXN0aW9uTW9kYWwuanN4Iiwid2VicGFjazovLy8uL2xpYi9hdXRoL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbW1vbkFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbW11bml0eS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL2xpYi9ob21lL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL21lc3NhZ2VzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL25vdGlmaWNhdGlvbnMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcG9zdHMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXNlcnMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdC9bY29tbXVuaXR5XS5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tDaXJjbGVPdXRsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FZGl0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9IaWdobGlnaHRPZmZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW1hZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbkltcG9ydGFudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hlZXJpb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsc3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvZnBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtZGJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudC9sb2NhbGUvdHJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW1hZ2UtbGlnaHRib3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wbGF5ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIkFjdGlvbkJ1dHRvbiIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNKb2luZWQiLCJqb2luQ29tbXVuaXR5IiwibGVhdmVDb21tdW5pdHkiLCJzbHVnIiwiaXNMb2dnZWQiLCJwdXNoIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwYXlsb2FkIiwiam9pbkNvbW11bml0eVJlcXVlc3QiLCJsZWF2ZUNvbW11bml0eVJlcXVlc3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbW11bml0eSIsImRhdGEiLCJjb25uZWN0IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJwYWRkaW5nVG9wIiwiYXZhdGFySW1nIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyUmFkaXVzIiwiYm94U2l6aW5nIiwiZmxleCIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwiY29tbXVuaXR5X3RpdGxlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJjb2xvciIsImNvbV9jb250IiwicGFkZGluZyIsIm1lbWJlcl9jb3VudCIsInBhZGRpbmdCb3R0b20iLCJDb21ib0JveCIsIm9wdGlvbnMiLCJsYWJlbEZpZWxkIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInVzZXIiLCJjbGFzc05hbWUiLCJkZWZhdWx0VmFsdWUiLCJzdHlsZSIsIm9uU2VhcmNoIiwiY2xhc3NlcyIsInJlbmRlck9wdGlvbiIsIm9wdGlvbiIsInBhZGRpbmdMZWZ0IiwibG9nb1BhdGgiLCJuYW1lIiwidHlwZSIsIm1lbWJlckNvdW50IiwicmVuZGVyVXNlck9wdGlvbiIsInByb2ZpbGVJbWciLCJ1c2VybmFtZSIsImV2ZW50IiwibmV3VmFsdWUiLCJwYXJhbXMiLCJ0eXBvZ3JhcGh5Iiwic3BhY2luZyIsImJ1dHRvbl9yb290IiwidGV4dEFsaWduIiwiYnV0dG9ucyIsIkRlbGV0ZUNvbW1lbnRQb3AiLCJhbmNob3JFbCIsIm9uQ2xvc2UiLCJvblN1Ym1pdCIsIm9wZW4iLCJCb29sZWFuIiwiaWQiLCJ1bmRlZmluZWQiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJDcmVhdGVQb3N0VGFiIiwibWFyZ2luUmlnaHQiLCJwcm9maWxlSW1hZ2VQYXRoIiwidG9rZW4iLCJyZWFkTG9jYWxTdG9yYWdlIiwiZHJhd2VyV2lkdGgiLCJhcHBCYXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsImFwcEJhclNoaWZ0IiwibWFyZ2luTGVmdCIsImVhc2VPdXQiLCJlbnRlcmluZ1NjcmVlbiIsIm1lbnVCdXR0b24iLCJoaWRlIiwiZHJhd2VyIiwiZmxleFNocmluayIsImRyYXdlclBhcGVyIiwiZHJhd2VySGVhZGVyIiwiYWxpZ25JdGVtcyIsIm1peGlucyIsInRvb2xiYXIiLCJqdXN0aWZ5Q29udGVudCIsImNvbnRlbnQiLCJmbGV4R3JvdyIsImNvbnRlbnRTaGlmdCIsIk1haW5EcmF3ZXIiLCJ1c2VUaGVtZSIsInVzZXJDb21tdW5pdGllcyIsIm9mTW9kZXJhdG9ycyIsInBhcGVyIiwibG9nbyIsImRpcmVjdGlvbiIsIm1hcmdpblRvcCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImdyb3ciLCJ0aXRsZSIsImJyZWFrcG9pbnRzIiwidXAiLCJzZWFyY2giLCJwb3NpdGlvbiIsInNoYXBlIiwiYmFja2dyb3VuZENvbG9yIiwic2VhcmNoSWNvbiIsInBvaW50ZXJFdmVudHMiLCJpbnB1dFJvb3QiLCJpbnB1dElucHV0Iiwic2VjdGlvbkRlc2t0b3AiLCJzZWN0aW9uTW9iaWxlIiwiUHJpbWFyeVNlYXJjaEFwcEJhciIsInVuUmVhZHMiLCJ1blJlYWRNZXNzYWdlcyIsInNldE9wZW4iLCJSZWFjdCIsInVzZVN0YXRlIiwiYXV0aCIsInNldEF1dGgiLCJlcnJvciIsInNldEFuY2hvckVsIiwibW9iaWxlTW9yZUFuY2hvckVsIiwic2V0TW9iaWxlTW9yZUFuY2hvckVsIiwic2V0VXNlciIsInVzZXJRdWVyeSIsInNldFVzZXJRdWVyeSIsInVzZUVmZmVjdCIsImdldFVzZXJDb21tdW5pdGllcyIsImdldFVuUmVhZHMiLCJnZXRVblJlYWRNZXNzYWdlcyIsImlzTW9kZXJhdG9yIiwiaGFuZGxlRHJhd2VyT3BlbiIsImhhbmRsZURyYXdlckNsb3NlIiwiaXNNZW51T3BlbiIsImlzTW9iaWxlTWVudU9wZW4iLCJoYW5kbGVQcm9maWxlTWVudU9wZW4iLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlTW9iaWxlTWVudUNsb3NlIiwiaGFuZGxlTWVudUNsb3NlIiwiaGFuZGxlTW9iaWxlTWVudU9wZW4iLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJ2YWx1ZXMiLCJkZWxheWVkUXVlcnkiLCJ1c2VSZWYiLCJfIiwiZGVib3VuY2UiLCJxIiwidGV4dCIsImN1cnJlbnQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtZW51SWQiLCJyZW5kZXJNZW51IiwibG9nT3V0IiwibW9iaWxlTWVudUlkIiwicmVuZGVyTW9iaWxlTWVudSIsImNvdW50IiwicmVuZGVySW1hZ2UiLCJnZW5kZXIiLCJjbHN4Iiwic2VhcmNoRGF0YSIsIm93bkNvbW11bml0aWVzIiwiZ2V0VXNlckNvbW11bml0aWVzUmVxdWVzdCIsIm9mTW9kZXJhdG9yc1JlcXVlc3QiLCJnZXRDb3VudFJlcXVlc3QiLCJnZXRVbnJlYWRzUmVxdWVzdCIsInNlYXJjaFJlcXVlc3QiLCJ1bnJlYWRzIiwiaG9tZSIsIkltYWdlTW9kYWwiLCJpbWFnZVVybCIsInRhZ19jYXJkIiwiZmxleFdyYXAiLCJJbmZvQ2FyZCIsImRlc2NyaXB0aW9uIiwibW9kZXJhdG9ycyIsIm0iLCJyb290TGluayIsImJveFNoYWRvdyIsIm1lZGlhIiwiQ09SU19QUk9YWSIsImdldFByZXZpZXdEYXRhIiwidGFncyIsInJlc3VsdCIsInJlZHVjZSIsInByZXZpZXdEYXRhIiwidGFnIiwibGluayIsInNpdGUiLCJpbWFnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicGFyc2VIVE1MIiwiaHRtbCIsIiQiLCJjaGVlcmlvIiwibG9hZCIsIm1ldGEiLCJpIiwiYXR0cmlicyIsInByb3BlcnR5IiwiZmV0Y2hVcmwiLCJ1cmwiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImdldFVybCIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwicHJvdG9jb2wiLCJob3N0IiwicGF0aG5hbWUiLCJoYXNoIiwiaXNTYW1lSG9zdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiTGlua1ByZXZpZXciLCJzZXRQcmV2aWV3RGF0YSIsIm1hcmdpbkJvdHRvbSIsIkxvYWRlciIsIm92ZXJsYXkiLCJtYW5JY29uIiwiZ2lybEljb24iLCJ1c2VySWNvbiIsIlByb2ZpbGVDYXJkIiwiaW1nIiwiYmlvIiwicHJldmlld0xvZ29VcmwiLCJpc0VkaXQiLCJzZXRFZGl0Iiwic2V0VmFsdWVzIiwicHJvZmlsZUltYWdlIiwiaGFuZGxlQ2hhbmdlIiwiaW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsImltYWdlRmlsZSIsImZpbGVzIiwibmV3VmFsdWVzIiwiaGFuZGxlQmlvQ2hhbmdlIiwiaGFuZGxlQmlvU3VibWl0IiwiU2hhcmVCdXR0b24iLCJlbmFibGVCYWNrZ3JvdW5kIiwiZXhwYW5kIiwidHJhbnNmb3JtIiwic2hvcnRlc3QiLCJleHBhbmRPcGVuIiwicG9zdEltYWdlIiwibWF4SGVpZ2h0IiwibWF4V2lkdGgiLCJsZWZ0U2lkZSIsIlNvY2lhbENhcmQiLCJwb3B1cEFuY2hvciIsInNldFBvcHVwQW5jaG9yIiwiaXNPcGVuIiwibW9tZW50IiwibG9jYWxlIiwiY3JlYXRlZERhdGUiLCJwU2x1ZyIsImNvbnRlbnRUeXBlIiwiY29tbWVudHMiLCJsaW5rVXJsIiwidm90ZUNvdW50IiwidXNlclBvc3RWb3RlIiwib25Wb3RlIiwicHJvZmlsZVBvc3RzIiwicGFnZU51bWJlciIsImhhbmRsZVZvdGUiLCJwb3N0SWQiLCJyZW5kZXJNZWRpYSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbG9zZVBvcHVwIiwib25EZWxldGVDbGljayIsIm9uRGVsZXRlUG9zdCIsImRlbGV0ZVBvc3QiLCJvbkRlbGV0ZU1vZGVyYXRvciIsIm1vZGVyYXRvckRlbGV0ZSIsInBhZ2VEdG8iLCJwYWdlU2l6ZSIsIm1lbnVJdGVtcyIsIm9uQ2xpY2siLCJtb2RlcmF0b3JJdGVtcyIsImNhbGN1bGF0ZVNhbGxhbWFDb3VudCIsIngiLCJyZXBseUNvdW50Iiwib3ZlcmZsb3ciLCJhdmF0YXIiLCJ1c2VyTmFtZSIsImZyb21Ob3ciLCJfX2h0bWwiLCJkZWxldGVQb3N0UmVxdWVzdCIsImRlbGV0ZU1vZGVyYXRvclJlcXVlc3QiLCJNYWluTGF5b3V0Iiwic2V0VGV4dCIsImVtYWlsIiwic2V0RW1haWwiLCJsb2FkZXIiLCJoYW5kbGVDaGFuZ2VFbWFpbCIsImhhbmRsZVN1Ym1pdCIsInNlbmRTdWdnZXN0IiwibG9hZGluZyIsImNoaWxkcmVuIiwic2VuZFN1Z2dlc3RSZXF1ZXN0IiwiUG9zdE1lbnUiLCJyYW5kIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiZ2V0TW9kYWxTdHlsZSIsInRvcCIsImxlZnQiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsImJvcmRlciIsInNoYWRvd3MiLCJidXR0b24iLCJ0ZXh0VHJhbnNmb3JtIiwiZmxvYXQiLCJTZW5kU3VnZ2VzdGlvbk1vZGFsIiwib25DaGFuZ2VFbWFpbCIsIm1vZGFsU3R5bGUiLCJib2R5IiwiQVVUSF9SRVFVRVNUIiwiQVVUSF9TVUNDRVNTIiwiQVVUSF9GQUlMVVJFIiwiU0lHTlVQX1JFUVVFU1QiLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9GQUlMVVJFIiwiTE9HT1VUX1JFUVVFU1QiLCJMT0dPVVRfU1VDQ0VTUyIsIkxPR09VVF9GQUlMVVJFIiwiU0VORF9SRVNFVF9DT0RFX1JFUVVFU1QiLCJTRU5EX1JFU0VUX0NPREVfU1VDQ0VTUyIsIlNFTkRfUkVTRVRfQ09ERV9GQUlMVVJFIiwiUkVTRVRfUEFTU1dPUkRfUkVRVUVTVCIsIlJFU0VUX1BBU1NXT1JEX1NVQ0NFU1MiLCJSRVNFVF9QQVNTV09SRF9GQUlMVVJFIiwibG9naW5SZXF1ZXN0IiwicGFzc3dvcmQiLCJzaWduVXBSZXF1ZXN0Iiwic2VuZFJlc2V0Q29kZVJlcXVlc3QiLCJlbWFpbEFkZHJlc3MiLCJyZXNldFBhc3N3b3JkUmVxdWVzdCIsIkNMRUFSX0hPTUUiLCJDTEVBUl9DT01NVU5JVFkiLCJDTEVBUl9VU0VSIiwiQ0xFQVJfUFJPRklMRSIsIkNMRUFSX0NPTU1VTklUWV9QQUdFIiwiY2xlYXJTdG9yZVJlcXVlc3QiLCJHRVRfUE9QVUxBUl9MSVNUX1JFUVVFU1QiLCJHRVRfUE9QVUxBUl9MSVNUX1NVQ0NFU1MiLCJHRVRfUE9QVUxBUl9MSVNUX0ZBSUxVUkUiLCJHRVRfQ09NTVVOSVRZX1JFUVVFU1QiLCJHRVRfQ09NTVVOSVRZX1NVQ0NFU1MiLCJHRVRfQ09NTVVOSVRZX0ZBSUxVUkUiLCJHRVRfQ09NTVVOSVRZX1BPU1RTX1JFUVVFU1QiLCJHRVRfQ09NTVVOSVRZX1BPU1RTX1NVQ0NFU1MiLCJHRVRfQ09NTVVOSVRZX1BPU1RTX0ZBSUxVUkUiLCJHRVRfQUxMX0NPTU1VTklUWV9SRVFVRVNUIiwiR0VUX0FMTF9DT01NVU5JVFlfU1VDQ0VTUyIsIkdFVF9BTExfQ09NTVVOSVRZX0ZBSUxVUkUiLCJHRVRfVVNFUl9DT01NVU5JVElFU19SRVFVRVNUIiwiR0VUX1VTRVJfQ09NTVVOSVRJRVNfU1VDQ0VTUyIsIkdFVF9VU0VSX0NPTU1VTklUSUVTX0ZBSUxVUkUiLCJPRl9NT0RFUkFUT1JTX1JFUVVFU1QiLCJPRl9NT0RFUkFUT1JTX1NVQ0NFU1MiLCJPRl9NT0RFUkFUT1JTX0ZBSUxVUkUiLCJVUERBVEVfQ09NTVVOSVRZX1JFUVVFU1QiLCJVUERBVEVfQ09NTVVOSVRZX1NVQ0NFU1MiLCJVUERBVEVfQ09NTVVOSVRZX0ZBSUxVUkUiLCJHRVRfVVNFUlNfUkVRVUVTVCIsIkdFVF9VU0VSU19TVUNDRVNTIiwiR0VUX1VTRVJTX0ZBSUxVUkUiLCJERUxFVEVfVVNFUl9SRVFVRVNUIiwiREVMRVRFX1VTRVJfU1VDQ0VTUyIsIkRFTEVURV9VU0VSX0ZBSUxVUkUiLCJnZXRQb3B1bGFyQ29tbW5pdHlMaXN0UmVxdWVzdCIsImdldENvbW11bml0eVJlcXVlc3QiLCJnZXRDb21tdW5pdHlQb3N0c1JlcXVlc3QiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlQ29tbXVuaXR5UmVxdWVzdCIsImdldFVzZXJzIiwiZGVsZXRlVXNlclJlcXVlc3QiLCJnZXRBbGxDb21tdW5pdGllc1JlcXVlc3QiLCJsb2NhbFN0b3JhZ2UiLCJnbG9iYWwiLCJyZW1vdmVJdGVtIiwic3RvcmUiLCJnZXRJdGVtIiwia2V5Iiwic2V0SXRlbSIsInRvU3RyaW5nIiwiY2xlYXIiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwiayIsImFjY3VtdWxhdG9yIiwiY3VycmVudEl0ZW0iLCJBcnJheSIsImlzQXJyYXkiLCJmcm9tUGFpcnMiLCJKU09OIiwicGFyc2UiLCJsb2FkU3RhdGUiLCJzZXJpYWxpemVkU3RhdGUiLCJlcnIiLCJpc0xvZ2dlZFdpdGhDb29raWVzIiwiY3R4IiwiY29va2llcyIsInBhcnNlQ29va2llcyIsIndyaXRlTG9jYWxTdG9yYWdlIiwiZW50cmllcyIsInZhbCIsInN0cmluZ2lmeSIsInJlbW92ZUxvY2FsU3RvcmFnZSIsImZvckVhY2giLCJjbGVhckxvY2FsU3RvcmFnZSIsImdldFNlYXJjaFBhcmFtcyIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJnZW5lcmF0ZVN0cmluZyIsInN1YnN0cmluZyIsImdldFBhcmFtZXRlckJ5TmFtZSIsInJlcGxhY2UiLCJyZWdleCIsIlJlZ0V4cCIsInJlc3VsdHMiLCJleGVjIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiaHRtbFRvVGV4dCIsInRlbXAiLCJpbm5lckhUTUwiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsIkdFVF9IT01FX1BPU1RTX1JFUVVFU1QiLCJHRVRfSE9NRV9QT1NUU19TVUNDRVNTIiwiR0VUX0hPTUVfUE9TVFNfRkFJTFVSRSIsIkdFVF9VTkFVVEhPUklaRURfUE9TVFNfUkVRVUVTVCIsIkdFVF9VTkFVVEhPUklaRURfUE9TVFNfU1VDQ0VTUyIsIkdFVF9VTkFVVEhPUklaRURfUE9TVFNfRkFJTFVSRSIsIlNFQVJDSF9SRVFVRVNUIiwiU0VBUkNIX1NVQ0NFU1MiLCJTRUFSQ0hfRkFJTFVSRSIsImdldEhvbWVQb3N0c1JlcXVlc3QiLCJnZXRVbmF1dGhvcml6ZWRQb3N0c1JlcXVlc3QiLCJHRVRfVU5SRUFEU19SRVFVRVNUIiwiR0VUX1VOUkVBRFNfU1VDQ0VTUyIsIkdFVF9VTlJFQURTX0ZBSUxVUkUiLCJNQVJLX0FTX1JFQURfUkVRVUVTVCIsIk1BUktfQVNfUkVBRF9TVUNDRVNTIiwiTUFSS19BU19SRUFEX0ZBSUxVUkUiLCJtYXJrQXNSZWFkUmVxdWVzdCIsIkdFVF9OT1RJRklDQVRJT05TX1JFUVVFU1QiLCJHRVRfTk9USUZJQ0FUSU9OU19TVUNDRVNTIiwiR0VUX05PVElGSUNBVElPTlNfRkFJTFVSRSIsIkdFVF9DT1VOVF9SRVFVRVNUIiwiR0VUX0NPVU5UX1NVQ0NFU1MiLCJHRVRfQ09VTlRfRkFJTFVSRSIsImdldE5vdGlmaWNhdGlvbnNSZXF1ZXN0IiwiR0VUX1BPU1RfREVUQUlMX1JFUVVFU1QiLCJHRVRfUE9TVF9ERVRBSUxfU1VDQ0VTUyIsIkdFVF9QT1NUX0RFVEFJTF9GQUlMVVJFIiwiR0VUX01BSU5fUE9TVFNfUkVRVUVTVCIsIkdFVF9NQUlOX1BPU1RTX1NVQ0NFU1MiLCJHRVRfTUFJTl9QT1NUU19GQUlMVVJFIiwiR0VUX1VTRVJfUE9TVFNfUkVRVUVTVCIsIkdFVF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJHRVRfVVNFUl9QT1NUU19GQUlMVVJFIiwiQ1JFQVRFX1BPU1RfUkVRVUVTVCIsIkNSRUFURV9QT1NUX1NVQ0NFU1MiLCJDUkVBVEVfUE9TVF9GQUlMVVJFIiwiVk9URV9QT1NUX1JFUVVFU1QiLCJWT1RFX1BPU1RfU1VDQ0VTUyIsIlZPVEVfUE9TVF9GQUlMVVJFIiwiREVMRVRFX1BPU1RfUkVRVUVTVCIsIkRFTEVURV9QT1NUX1NVQ0NFU1MiLCJERUxFVEVfUE9TVF9GQUlMVVJFIiwiREVMRVRFX01PREVSQVRPUl9SRVFVRVNUIiwiREVMRVRFX01PREVSQVRPUl9TVUNDRVNTIiwiREVMRVRFX01PREVSQVRPUl9GQUlMVVJFIiwiZ2V0UG9zdERldGFpbFJlcXVlc3QiLCJnZXRNYWluUG9zdHNSZXF1ZXN0IiwiZ2V0VXNlclBvc3RzUmVxdWVzdCIsImNyZWF0ZVBvc3RSZXF1ZXN0Iiwidm90ZVBvc3RSZXF1ZXN0IiwiR0VUX1BST0ZJTEVfUkVRVUVTVCIsIkdFVF9QUk9GSUxFX1NVQ0NFU1MiLCJHRVRfUFJPRklMRV9GQUlMVVJFIiwiR0VUX1VTRVJfQllfVVNFUk5BTUVfUkVRVUVTVCIsIkdFVF9VU0VSX0JZX1VTRVJOQU1FX1NVQ0NFU1MiLCJHRVRfVVNFUl9CWV9VU0VSTkFNRV9GQUlMVVJFIiwiSk9JTl9DT01NVU5JVFlfUkVRVUVTVCIsIkpPSU5fQ09NTVVOSVRZX1NVQ0NFU1MiLCJKT0lOX0NPTU1VTklUWV9GQUlMVVJFIiwiTEVBVkVfQ09NTVVOSVRZX1JFUVVFU1QiLCJMRUFWRV9DT01NVU5JVFlfU1VDQ0VTUyIsIkxFQVZFX0NPTU1VTklUWV9GQUlMVVJFIiwiU0VORF9TVUdHRVNUX1JFUVVFU1QiLCJTRU5EX1NVR0dFU1RfU1VDQ0VTUyIsIlNFTkRfU1VHR0VTVF9GQUlMVVJFIiwiZ2V0VXNlclByb2ZpbGUiLCJnZXRVc2VyQnlVc2VybmFtZSIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwibm9kZU5hbWUiLCJpc0xvY2FsIiwic2Nyb2xsIiwiUm91dGVyIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwicmVuZGVyIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJwcm9jZXNzIiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJwYXNzSHJlZiIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwYXRoIiwicHJlcGFyZVJvdXRlIiwidG9Sb3V0ZSIsImF0dGVtcHRzIiwiaXNTZXJ2ZXJSZW5kZXIiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsInJlcyIsImdldFJlc3BvbnNlIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJjaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkNvbW11bml0eVBhZ2UiLCJzZXROdW1iZXIiLCJjbGVhclN0b3JlIiwiZWxlbWVudCIsIm1lbWJlcnMiLCJtZW1iZXIiLCJ2b3RlUG9zdCIsImNTbHVnIiwiY29tbXVuaXR5SWQiLCJsb2FkZXJTdGFydCIsImZldGNoTW9yZURhdGEiLCJuZXdOdW1iZXIiLCJnZXRQb3N0cyIsInBvc3RzIiwic2xpY2UiLCJjb3ZlckltYWdlUGF0aCIsImhhc05leHQiLCJtZWRpYUNvbnRlbnRQYXRoIiwiY3JlYXRlZERhdGVUaW1lIiwiZXhlY1NhZ2FUYXNrcyIsImlzU2VydmVyIiwiZ2V0Q29tbXVuaXR5IiwicGFnZWREYXRhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0IsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRUMsWUFBRjtBQUFZQyxpQkFBWjtBQUEyQkMsa0JBQTNCO0FBQTJDQyxRQUEzQztBQUFpREM7QUFBakQsTUFBOERQLEtBQXBFOztBQUNBLE1BQUksQ0FBQ08sUUFBTCxFQUFlO0FBQ2IsV0FDRSxNQUFDLHdEQUFEO0FBQ0UsZUFBUyxFQUFDLGFBRFo7QUFFRSxhQUFPLEVBQUMsV0FGVjtBQUdFLFdBQUssRUFBQyxTQUhSO0FBSUUsYUFBTyxFQUFFLE1BQU1OLE1BQU0sQ0FBQ08sSUFBUCxDQUFZLFlBQVosQ0FKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkYsQ0FERjtBQVVELEdBWEQsTUFXTztBQUNMLFdBQ0UsTUFBQyx3REFBRDtBQUNFLGVBQVMsRUFBRUwsUUFBUSxHQUFHLHFCQUFILEdBQTJCLGFBRGhEO0FBRUUsYUFBTyxFQUFDLFdBRlY7QUFHRSxXQUFLLEVBQUVBLFFBQVEsR0FBRyxTQUFILEdBQWUsU0FIaEM7QUFJRSxhQUFPLEVBQ0xBLFFBQVEsR0FDSixNQUFNRSxjQUFjLENBQUM7QUFBRUM7QUFBRixPQUFELENBRGhCLEdBRUosTUFBTUYsYUFBYSxDQUFDO0FBQUVFO0FBQUYsT0FBRCxDQVAzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPSCxRQUFRLEdBQUcsUUFBSCxHQUFjLE9BQTdCLENBVkYsQ0FERjtBQWNEO0FBQ0Y7O0FBRUQsTUFBTU0sa0JBQWtCLEdBQUlDLFFBQUQsS0FBZTtBQUN4Q04sZUFBYSxFQUFHTyxPQUFELElBQWFELFFBQVEsQ0FBQ0UsK0VBQW9CLENBQUNELE9BQUQsQ0FBckIsQ0FESTtBQUV4Q04sZ0JBQWMsRUFBR00sT0FBRCxJQUFhRCxRQUFRLENBQUNHLGdGQUFxQixDQUFDRixPQUFELENBQXRCO0FBRkcsQ0FBZixDQUEzQjs7QUFLQSxNQUFNRyxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ0MsV0FBUyxFQUFFRCxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLElBRE8sQ0FFbEM7O0FBRmtDLENBQVosQ0FBeEI7O0FBS2VDLDBIQUFPLENBQUNKLGVBQUQsRUFBa0JMLGtCQUFsQixDQUFQLENBQTZDVixZQUE3QyxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNb0IsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDdkNDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUUsTUFETDtBQUVKQyxjQUFVLEVBQUU7QUFGUixHQURpQztBQUt2Q0MsV0FBUyxFQUFFO0FBQ1RDLHNCQUFrQixFQUFFLEtBRFg7QUFFVEMsb0JBQWdCLEVBQUUsV0FGVDtBQUdUQyxrQkFBYyxFQUFFLE1BSFA7QUFJVEMsZ0JBQVksRUFBRSxNQUpMO0FBS1RDLGFBQVMsRUFBRSxZQUxGO0FBTVRDLFFBQUksRUFBRSxNQU5HO0FBT1RDLFVBQU0sRUFBRSxNQVBDO0FBUVRDLFNBQUssRUFBRSxNQVJFO0FBU1RDLFVBQU0sRUFBRTtBQVRDLEdBTDRCO0FBZ0J2Q0MsaUJBQWUsRUFBRTtBQUNmQyxjQUFVLEVBQUUsU0FERztBQUVmQyxZQUFRLEVBQUUsTUFGSztBQUdmQyxjQUFVLEVBQUUsR0FIRztBQUlmQyxjQUFVLEVBQUUsTUFKRztBQUtmQyxTQUFLLEVBQUU7QUFMUSxHQWhCc0I7QUF1QnZDQyxVQUFRLEVBQUU7QUFDUkMsV0FBTyxFQUFFLGVBREQ7QUFFUm5CLFdBQU8sRUFBRTtBQUZELEdBdkI2QjtBQTJCdkNvQixjQUFZLEVBQUU7QUFDWk4sWUFBUSxFQUFFLE1BREU7QUFFWkMsY0FBVSxFQUFFLEtBRkE7QUFHWkMsY0FBVSxFQUFFLE1BSEE7QUFJWkssaUJBQWEsRUFBRTtBQUpIO0FBM0J5QixDQUFaLENBQUQsQ0FBNUI7QUFtQ2UsU0FBU0MsUUFBVCxDQUFrQjtBQUMvQkMsU0FEK0I7QUFFL0JDLFlBRitCO0FBRy9CQyxVQUgrQjtBQUkvQkMsYUFKK0I7QUFLL0JDLE1BTCtCO0FBTS9CQyxXQU4rQjtBQU8vQkMsY0FQK0I7QUFRL0JDLE9BUitCO0FBUy9CQztBQVQrQixDQUFsQixFQVVaO0FBQ0QsUUFBTUMsT0FBTyxHQUFHcEMsU0FBUyxFQUF6Qjs7QUFFQSxRQUFNcUMsWUFBWSxHQUFHLENBQUNDLE1BQUQsRUFBU0YsT0FBVCxLQUFxQjtBQUN4QyxXQUNFO0FBQUssZUFBUyxFQUFFQSxPQUFPLENBQUNkLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG1EQUFEO0FBQUssV0FBSyxFQUFFO0FBQUVsQixlQUFPLEVBQUUsTUFBWDtBQUFtQm1DLG1CQUFXLEVBQUU7QUFBaEMsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUVILE9BQU8sQ0FBQzlCLFNBQXhCO0FBQW1DLFNBQUcsRUFBRWdDLE1BQU0sQ0FBQ0UsUUFBL0M7QUFBeUQsU0FBRyxFQUFDLEVBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUssV0FBSyxFQUFFO0FBQUVwQyxlQUFPLEVBQUU7QUFBWCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBRWdDLE9BQU8sQ0FBQ3BCLGVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMkNzQixNQUFNLENBQUNHLElBQWxELENBREYsRUFFR0gsTUFBTSxDQUFDSSxJQUFQLEtBQWdCLE1BQWhCLElBQ0M7QUFBTSxlQUFTLEVBQUVOLE9BQU8sQ0FBQ1osWUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHYyxNQUFNLENBQUNLLFdBRFYsWUFISixDQUZGLENBREYsQ0FERjtBQWVELEdBaEJEOztBQWtCQSxRQUFNQyxnQkFBZ0IsR0FBRyxDQUFDTixNQUFELEVBQVNGLE9BQVQsS0FBcUI7QUFDNUMsV0FDRTtBQUFLLGVBQVMsRUFBRUEsT0FBTyxDQUFDZCxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxtREFBRDtBQUFLLFdBQUssRUFBRTtBQUFFbEIsZUFBTyxFQUFFLE1BQVg7QUFBbUJtQyxtQkFBVyxFQUFFO0FBQWhDLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFSCxPQUFPLENBQUM5QixTQUF4QjtBQUFtQyxTQUFHLEVBQUVnQyxNQUFNLENBQUNPLFVBQS9DO0FBQTJELFNBQUcsRUFBQyxFQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFLLFdBQUssRUFBRTtBQUFFekMsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUVnQyxPQUFPLENBQUNwQixlQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTJDc0IsTUFBTSxDQUFDUSxRQUFsRCxDQURGLENBRkYsQ0FERixDQURGO0FBVUQsR0FYRDs7QUFhQSxTQUNFLE1BQUMsb0VBQUQ7QUFDRSxhQUFTLEVBQUVkLFNBRGI7QUFFRSxnQkFBWSxFQUFFQyxZQUZoQjtBQUdFLFlBQVEsRUFBRSxDQUFDYyxLQUFELEVBQVFDLFFBQVIsS0FBcUI7QUFDN0JuQixjQUFRLENBQUNtQixRQUFELENBQVI7QUFDRCxLQUxIO0FBTUUsV0FBTyxFQUFFckIsT0FOWDtBQU9FLGdCQUFZLEVBQUdXLE1BQUQsSUFDWlAsSUFBSSxHQUFHYSxnQkFBZ0IsQ0FBQ04sTUFBRCxFQUFTRixPQUFULENBQW5CLEdBQXVDQyxZQUFZLENBQUNDLE1BQUQsRUFBU0YsT0FBVCxDQVIzRDtBQVVFLGtCQUFjLEVBQUdFLE1BQUQsSUFBWUEsTUFBTSxDQUFDVixVQUFELENBVnBDO0FBV0UsaUJBQWEsRUFBQyxjQVhoQjtBQVlFLFNBQUssRUFBRU0sS0FaVDtBQWFFLGVBQVcsRUFBR2UsTUFBRCxJQUNYLE1BQUMsa0VBQUQ7QUFDRSxjQUFRLEVBQUVkO0FBRFosT0FFTWMsTUFGTjtBQUdFLFdBQUssRUFBRW5CLFdBSFQ7QUFJRSxhQUFPLEVBQUMsVUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBd0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0dEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNOUIsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDdkNnRCxZQUFVLEVBQUU7QUFDVjNCLFdBQU8sRUFBRXJCLEtBQUssQ0FBQ2lELE9BQU4sQ0FBYyxDQUFkO0FBREMsR0FEMkI7QUFJdkNDLGFBQVcsRUFBRTtBQUNYckMsVUFBTSxFQUFFLEtBREc7QUFFWHNDLGFBQVMsRUFBRTtBQUZBLEdBSjBCO0FBUXZDQyxTQUFPLEVBQUU7QUFDUC9CLFdBQU8sRUFBRSxnQkFERjtBQUVQUixVQUFNLEVBQUU7QUFGRDtBQVI4QixDQUFaLENBQUQsQ0FBNUI7QUFjZSxTQUFTd0MsZ0JBQVQsQ0FBMEIxRSxLQUExQixFQUFpQztBQUM5QyxRQUFNO0FBQUUyRSxZQUFGO0FBQVlDLFdBQVo7QUFBcUJDO0FBQXJCLE1BQWtDN0UsS0FBeEM7QUFFQSxRQUFNdUQsT0FBTyxHQUFHcEMsU0FBUyxFQUF6QjtBQUVBLFFBQU0yRCxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0osUUFBRCxDQUFwQjtBQUNBLFFBQU1LLEVBQUUsR0FBR0YsSUFBSSxHQUFHLGdCQUFILEdBQXNCRyxTQUFyQztBQUVBLFNBQ0UsTUFBQyxnRUFBRDtBQUNFLE1BQUUsRUFBRUQsRUFETjtBQUVFLFFBQUksRUFBRUYsSUFGUjtBQUdFLFlBQVEsRUFBRUgsUUFIWjtBQUlFLFdBQU8sRUFBRUMsT0FKWDtBQUtFLGdCQUFZLEVBQUU7QUFDWk0sY0FBUSxFQUFFLFFBREU7QUFFWkMsZ0JBQVUsRUFBRTtBQUZBLEtBTGhCO0FBU0UsbUJBQWUsRUFBRTtBQUNmRCxjQUFRLEVBQUUsS0FESztBQUVmQyxnQkFBVSxFQUFFO0FBRkcsS0FUbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWNFLE1BQUMsbUVBQUQ7QUFBWSxhQUFTLEVBQUU1QixPQUFPLENBQUNjLFVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBZEYsRUFpQkU7QUFBSyxhQUFTLEVBQUVkLE9BQU8sQ0FBQ2dCLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQ0UsV0FBTyxFQUFFSyxPQURYO0FBRUUsYUFBUyxFQUFFckIsT0FBTyxDQUFDa0IsT0FGckI7QUFHRSxXQUFPLEVBQUMsVUFIVjtBQUlFLFNBQUssRUFBQyxTQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFTRSxNQUFDLCtEQUFEO0FBQ0UsV0FBTyxFQUFFSSxRQURYO0FBRUUsYUFBUyxFQUFFdEIsT0FBTyxDQUFDa0IsT0FGckI7QUFHRSxXQUFPLEVBQUMsVUFIVjtBQUlFLFNBQUssRUFBQyxXQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FURixDQWpCRixDQURGO0FBc0NELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTVyxhQUFULENBQXVCcEYsS0FBdkIsRUFBOEI7QUFDM0MsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRWdELFFBQUY7QUFBUTVDO0FBQVIsTUFBaUJOLEtBQXZCO0FBQ0EsU0FDRSxNQUFDLDhEQUFEO0FBQU8sYUFBUyxFQUFDLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2tELElBQUksSUFDSCxNQUFDLHdEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVtQyxpQkFBVyxFQUFFO0FBQWYsS0FEVDtBQUVFLE9BQUcsRUFBRXJGLEtBQUssQ0FBQ2tELElBQU4sQ0FBV29DLGdCQUZsQjtBQUdFLGFBQVMsRUFBQyxlQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQVFFO0FBQ0UsV0FBTyxFQUFFLE1BQU07QUFDYixZQUFNQyxLQUFLLEdBQUdDLHFFQUFnQixDQUFDLE9BQUQsQ0FBOUI7QUFDQUQsV0FBSyxHQUNEdEYsTUFBTSxDQUFDTyxJQUFQLENBQWEsYUFBWUYsSUFBSSxHQUFHQSxJQUFILEdBQVUsRUFBRyxFQUExQyxDQURDLEdBRURMLE1BQU0sQ0FBQ08sSUFBUCxDQUFZLFlBQVosQ0FGSjtBQUdELEtBTkg7QUFPRSxlQUFXLEVBQUMsb0JBUGQ7QUFRRSxhQUFTLEVBQUMsZ0JBUlo7QUFTRSxRQUFJLEVBQUMsTUFUUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFtQkUsTUFBQyxnREFBRDtBQUNFLFdBQU8sRUFBRSxNQUFNO0FBQ2IsWUFBTStFLEtBQUssR0FBR0MscUVBQWdCLENBQUMsT0FBRCxDQUE5QjtBQUNBRCxXQUFLLEdBQ0R0RixNQUFNLENBQUNPLElBQVAsQ0FBYSxhQUFZRixJQUFJLEdBQUdBLElBQUgsR0FBVSxFQUFHLEVBQTFDLENBREMsR0FFREwsTUFBTSxDQUFDTyxJQUFQLENBQVksWUFBWixDQUZKO0FBR0QsS0FOSDtBQU9FLE9BQUcsTUFQTDtBQVFFLFFBQUksRUFBQyxPQVJQO0FBU0UsUUFBSSxFQUFDLElBVFA7QUFVRSxhQUFTLEVBQUMsZUFWWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJGLEVBK0JFLE1BQUMsZ0RBQUQ7QUFDRSxXQUFPLEVBQUUsTUFBTTtBQUNiLFlBQU0rRSxLQUFLLEdBQUdDLHFFQUFnQixDQUFDLE9BQUQsQ0FBOUI7QUFDQUQsV0FBSyxHQUNEdEYsTUFBTSxDQUFDTyxJQUFQLENBQWEsYUFBWUYsSUFBSSxHQUFHQSxJQUFILEdBQVUsRUFBRyxFQUExQyxDQURDLEdBRURMLE1BQU0sQ0FBQ08sSUFBUCxDQUFZLFlBQVosQ0FGSjtBQUdELEtBTkg7QUFPRSxRQUFJLEVBQUMsTUFQUDtBQVFFLFFBQUksRUFBQyxJQVJQO0FBU0UsYUFBUyxFQUFDLGVBVFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9CRixDQURGO0FBNkNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1pRixXQUFXLEdBQUcsR0FBcEI7QUFFQSxNQUFNdEUsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDdkNDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUU7QUFETCxHQURpQztBQUl2Q21FLFFBQU0sRUFBRTtBQUNOQyxjQUFVLEVBQUV0RSxLQUFLLENBQUN1RSxXQUFOLENBQWtCQyxNQUFsQixDQUF5QixDQUFDLFFBQUQsRUFBVyxPQUFYLENBQXpCLEVBQThDO0FBQ3hEQyxZQUFNLEVBQUV6RSxLQUFLLENBQUN1RSxXQUFOLENBQWtCRSxNQUFsQixDQUF5QkMsS0FEdUI7QUFFeERDLGNBQVEsRUFBRTNFLEtBQUssQ0FBQ3VFLFdBQU4sQ0FBa0JJLFFBQWxCLENBQTJCQztBQUZtQixLQUE5QztBQUROLEdBSitCO0FBVXZDQyxhQUFXLEVBQUU7QUFDWGpFLFNBQUssRUFBRyxlQUFjd0QsV0FBWSxLQUR2QjtBQUVYVSxjQUFVLEVBQUVWLFdBRkQ7QUFHWEUsY0FBVSxFQUFFdEUsS0FBSyxDQUFDdUUsV0FBTixDQUFrQkMsTUFBbEIsQ0FBeUIsQ0FBQyxRQUFELEVBQVcsT0FBWCxDQUF6QixFQUE4QztBQUN4REMsWUFBTSxFQUFFekUsS0FBSyxDQUFDdUUsV0FBTixDQUFrQkUsTUFBbEIsQ0FBeUJNLE9BRHVCO0FBRXhESixjQUFRLEVBQUUzRSxLQUFLLENBQUN1RSxXQUFOLENBQWtCSSxRQUFsQixDQUEyQks7QUFGbUIsS0FBOUM7QUFIRCxHQVYwQjtBQWtCdkNDLFlBQVUsRUFBRTtBQUNWakIsZUFBVyxFQUFFaEUsS0FBSyxDQUFDaUQsT0FBTixDQUFjLENBQWQ7QUFESCxHQWxCMkI7QUFxQnZDaUMsTUFBSSxFQUFFO0FBQ0poRixXQUFPLEVBQUU7QUFETCxHQXJCaUM7QUF3QnZDaUYsUUFBTSxFQUFFO0FBQ052RSxTQUFLLEVBQUV3RCxXQUREO0FBRU5nQixjQUFVLEVBQUU7QUFGTixHQXhCK0I7QUE0QnZDQyxhQUFXLEVBQUU7QUFDWHpFLFNBQUssRUFBRXdEO0FBREksR0E1QjBCO0FBK0J2Q2tCLGNBQVk7QUFDVnBGLFdBQU8sRUFBRSxNQURDO0FBRVZxRixjQUFVLEVBQUUsUUFGRjtBQUdWbEUsV0FBTyxFQUFFckIsS0FBSyxDQUFDaUQsT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakI7QUFIQyxLQUtQakQsS0FBSyxDQUFDd0YsTUFBTixDQUFhQyxPQUxOO0FBTVZDLGtCQUFjLEVBQUU7QUFOTixJQS9CMkI7QUF1Q3ZDQyxTQUFPLEVBQUU7QUFDUEMsWUFBUSxFQUFFLENBREg7QUFFUHZFLFdBQU8sRUFBRXJCLEtBQUssQ0FBQ2lELE9BQU4sQ0FBYyxDQUFkLENBRkY7QUFHUHFCLGNBQVUsRUFBRXRFLEtBQUssQ0FBQ3VFLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLFFBQXpCLEVBQW1DO0FBQzdDQyxZQUFNLEVBQUV6RSxLQUFLLENBQUN1RSxXQUFOLENBQWtCRSxNQUFsQixDQUF5QkMsS0FEWTtBQUU3Q0MsY0FBUSxFQUFFM0UsS0FBSyxDQUFDdUUsV0FBTixDQUFrQkksUUFBbEIsQ0FBMkJDO0FBRlEsS0FBbkMsQ0FITDtBQU9QRSxjQUFVLEVBQUUsQ0FBQ1Y7QUFQTixHQXZDOEI7QUFnRHZDeUIsY0FBWSxFQUFFO0FBQ1p2QixjQUFVLEVBQUV0RSxLQUFLLENBQUN1RSxXQUFOLENBQWtCQyxNQUFsQixDQUF5QixRQUF6QixFQUFtQztBQUM3Q0MsWUFBTSxFQUFFekUsS0FBSyxDQUFDdUUsV0FBTixDQUFrQkUsTUFBbEIsQ0FBeUJNLE9BRFk7QUFFN0NKLGNBQVEsRUFBRTNFLEtBQUssQ0FBQ3VFLFdBQU4sQ0FBa0JJLFFBQWxCLENBQTJCSztBQUZRLEtBQW5DLENBREE7QUFLWkYsY0FBVSxFQUFFO0FBTEEsR0FoRHlCO0FBdUR2QzFFLFdBQVMsRUFBRTtBQUNUQyxzQkFBa0IsRUFBRSxLQURYO0FBRVRDLG9CQUFnQixFQUFFLFdBRlQ7QUFHVEMsa0JBQWMsRUFBRSxNQUhQO0FBSVRDLGdCQUFZLEVBQUUsTUFKTDtBQUtUQyxhQUFTLEVBQUUsWUFMRjtBQU1UQyxRQUFJLEVBQUUsTUFORztBQU9UQyxVQUFNLEVBQUUsTUFQQztBQVFUQyxTQUFLLEVBQUUsTUFSRTtBQVNUQyxVQUFNLEVBQUU7QUFUQztBQXZENEIsQ0FBWixDQUFELENBQTVCO0FBb0VlLFNBQVNpRixVQUFULENBQW9CbkgsS0FBcEIsRUFBMkI7QUFDeEMsUUFBTXVELE9BQU8sR0FBR3BDLFNBQVMsRUFBekI7QUFDQSxRQUFNRSxLQUFLLEdBQUcrRix5RUFBUSxFQUF0QjtBQUNBLFFBQU07QUFBRUMsbUJBQUY7QUFBbUJDO0FBQW5CLE1BQW9DdEgsS0FBMUM7QUFDQSxTQUNFLE1BQUMsK0RBQUQ7QUFDRSxhQUFTLEVBQUV1RCxPQUFPLENBQUNpRCxNQURyQjtBQUVFLFdBQU8sRUFBQyxZQUZWO0FBR0UsVUFBTSxFQUFDLE1BSFQ7QUFJRSxRQUFJLEVBQUV4RyxLQUFLLENBQUM4RSxJQUpkO0FBS0UsV0FBTyxFQUFFO0FBQ1B5QyxXQUFLLEVBQUVoRSxPQUFPLENBQUNtRDtBQURSLEtBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFO0FBQUssYUFBUyxFQUFFbkQsT0FBTyxDQUFDb0QsWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUUxRSxXQUFLLEVBQUUsTUFBVDtBQUFpQm9ELGlCQUFXLEVBQUU7QUFBOUIsS0FBWjtBQUFvRCxPQUFHLEVBQUVtQyxpREFBekQ7QUFBK0QsT0FBRyxFQUFDLEVBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsbUVBQUQ7QUFBWSxXQUFPLEVBQUV4SCxLQUFLLENBQUM0RSxPQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d2RCxLQUFLLENBQUNvRyxTQUFOLEtBQW9CLEtBQXBCLEdBQ0MsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsR0FHQyxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQUZGLENBVEYsRUFtQkUsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJGLEVBb0JFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFVLFVBQU0sTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFBYyxXQUFPLEVBQUMsV0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FwQkYsRUF5QkUsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekJGLEVBMEJFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsU0FBSyxFQUFFO0FBQUV0QixnQkFBVSxFQUFFO0FBQWQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLEVBRUUsTUFBQyxnRUFBRDtBQUFTLFNBQUssRUFBRTtBQUFFdUIsZUFBUyxFQUFFO0FBQWIsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0dMLGVBQWUsSUFDZEEsZUFBZSxDQUFDTSxNQUFoQixHQUF5QixDQUQxQixJQUVDTixlQUFlLENBQUNPLEdBQWhCLENBQW9CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxLQUNsQixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFHLE1BQUtELElBQUksQ0FBQ3ZILElBQUssRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBVSxVQUFNLE1BQWhCO0FBQWlCLE9BQUcsRUFBRXVILElBQUksQ0FBQ2pFLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUwsT0FBTyxDQUFDOUIsU0FBeEI7QUFBbUMsT0FBRyxFQUFFb0csSUFBSSxDQUFDbEUsUUFBN0M7QUFBdUQsT0FBRyxFQUFDLEVBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMscUVBQUQ7QUFBYyxXQUFPLEVBQUVrRSxJQUFJLENBQUNqRSxJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLENBTEosQ0ExQkYsRUF3Q0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeENGLEVBeUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsU0FBSyxFQUFFO0FBQUV1QyxnQkFBVSxFQUFFO0FBQWQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURGLEVBRUUsTUFBQyxnRUFBRDtBQUFTLFNBQUssRUFBRTtBQUFFdUIsZUFBUyxFQUFFO0FBQWIsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0dKLFlBQVksSUFDWEEsWUFBWSxDQUFDSyxNQUFiLEdBQXNCLENBRHZCLElBRUNMLFlBQVksQ0FBQ00sR0FBYixDQUFpQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FDZixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFHLGNBQWFELElBQUksQ0FBQ3ZILElBQUssRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBVSxVQUFNLE1BQWhCO0FBQWlCLE9BQUcsRUFBRXVILElBQUksQ0FBQ2pFLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUwsT0FBTyxDQUFDOUIsU0FBeEI7QUFBbUMsT0FBRyxFQUFFb0csSUFBSSxDQUFDbEUsUUFBN0M7QUFBdUQsT0FBRyxFQUFDLEVBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMscUVBQUQ7QUFBYyxXQUFPLEVBQUVrRSxJQUFJLENBQUNqRSxJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLENBTEosQ0F6Q0YsQ0FERjtBQTBERCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU02QixXQUFXLEdBQUcsR0FBcEI7QUFFQSxNQUFNdEUsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDdkNDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUU7QUFETCxHQURpQztBQUl2Q3dHLE1BQUksRUFBRTtBQUNKZCxZQUFRLEVBQUU7QUFETixHQUppQztBQU92Q2UsT0FBSyxFQUFFO0FBQ0x6RyxXQUFPLEVBQUUsTUFESjtBQUVMLEtBQUNGLEtBQUssQ0FBQzRHLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDNUIzRyxhQUFPLEVBQUU7QUFEbUIsS0FGekI7QUFLTFUsU0FBSyxFQUFFO0FBTEYsR0FQZ0M7QUFjdkNxRSxZQUFVLEVBQUU7QUFDVmpCLGVBQVcsRUFBRWhFLEtBQUssQ0FBQ2lELE9BQU4sQ0FBYyxDQUFkO0FBREgsR0FkMkI7QUFpQnZDb0IsUUFBTSxFQUFFO0FBQ05DLGNBQVUsRUFBRXRFLEtBQUssQ0FBQ3VFLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLENBQUMsUUFBRCxFQUFXLE9BQVgsQ0FBekIsRUFBOEM7QUFDeERDLFlBQU0sRUFBRXpFLEtBQUssQ0FBQ3VFLFdBQU4sQ0FBa0JFLE1BQWxCLENBQXlCQyxLQUR1QjtBQUV4REMsY0FBUSxFQUFFM0UsS0FBSyxDQUFDdUUsV0FBTixDQUFrQkksUUFBbEIsQ0FBMkJDO0FBRm1CLEtBQTlDO0FBRE4sR0FqQitCO0FBdUJ2Q0MsYUFBVyxFQUFFO0FBQ1hqRSxTQUFLLEVBQUcsZUFBY3dELFdBQVksS0FEdkI7QUFFWFUsY0FBVSxFQUFFVixXQUZEO0FBR1hFLGNBQVUsRUFBRXRFLEtBQUssQ0FBQ3VFLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLENBQUMsUUFBRCxFQUFXLE9BQVgsQ0FBekIsRUFBOEM7QUFDeERDLFlBQU0sRUFBRXpFLEtBQUssQ0FBQ3VFLFdBQU4sQ0FBa0JFLE1BQWxCLENBQXlCTSxPQUR1QjtBQUV4REosY0FBUSxFQUFFM0UsS0FBSyxDQUFDdUUsV0FBTixDQUFrQkksUUFBbEIsQ0FBMkJLO0FBRm1CLEtBQTlDO0FBSEQsR0F2QjBCO0FBK0J2Q0MsWUFBVSxFQUFFO0FBQ1ZqQixlQUFXLEVBQUVoRSxLQUFLLENBQUNpRCxPQUFOLENBQWMsQ0FBZDtBQURILEdBL0IyQjtBQWtDdkNpQyxNQUFJLEVBQUU7QUFDSmhGLFdBQU8sRUFBRTtBQURMLEdBbENpQztBQXFDdkNpRixRQUFNLEVBQUU7QUFDTnZFLFNBQUssRUFBRXdELFdBREQ7QUFFTmdCLGNBQVUsRUFBRTtBQUZOLEdBckMrQjtBQXlDdkNDLGFBQVcsRUFBRTtBQUNYekUsU0FBSyxFQUFFd0Q7QUFESSxHQXpDMEI7QUE0Q3ZDa0IsY0FBWTtBQUNWcEYsV0FBTyxFQUFFLE1BREM7QUFFVnFGLGNBQVUsRUFBRSxRQUZGO0FBR1ZsRSxXQUFPLEVBQUVyQixLQUFLLENBQUNpRCxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQjtBQUhDLEtBS1BqRCxLQUFLLENBQUN3RixNQUFOLENBQWFDLE9BTE47QUFNVkMsa0JBQWMsRUFBRTtBQU5OLElBNUMyQjtBQW9EdkNDLFNBQU8sRUFBRTtBQUNQQyxZQUFRLEVBQUUsQ0FESDtBQUVQdkUsV0FBTyxFQUFFckIsS0FBSyxDQUFDaUQsT0FBTixDQUFjLENBQWQsQ0FGRjtBQUdQcUIsY0FBVSxFQUFFdEUsS0FBSyxDQUFDdUUsV0FBTixDQUFrQkMsTUFBbEIsQ0FBeUIsUUFBekIsRUFBbUM7QUFDN0NDLFlBQU0sRUFBRXpFLEtBQUssQ0FBQ3VFLFdBQU4sQ0FBa0JFLE1BQWxCLENBQXlCQyxLQURZO0FBRTdDQyxjQUFRLEVBQUUzRSxLQUFLLENBQUN1RSxXQUFOLENBQWtCSSxRQUFsQixDQUEyQkM7QUFGUSxLQUFuQyxDQUhMO0FBT1BFLGNBQVUsRUFBRSxDQUFDVjtBQVBOLEdBcEQ4QjtBQTZEdkN5QixjQUFZLEVBQUU7QUFDWnZCLGNBQVUsRUFBRXRFLEtBQUssQ0FBQ3VFLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLFFBQXpCLEVBQW1DO0FBQzdDQyxZQUFNLEVBQUV6RSxLQUFLLENBQUN1RSxXQUFOLENBQWtCRSxNQUFsQixDQUF5Qk0sT0FEWTtBQUU3Q0osY0FBUSxFQUFFM0UsS0FBSyxDQUFDdUUsV0FBTixDQUFrQkksUUFBbEIsQ0FBMkJLO0FBRlEsS0FBbkMsQ0FEQTtBQUtaRixjQUFVLEVBQUU7QUFMQSxHQTdEeUI7QUFvRXZDZ0MsUUFBTSxFQUFFO0FBQ05DLFlBQVEsRUFBRSxVQURKO0FBRU52RyxnQkFBWSxFQUFFUixLQUFLLENBQUNnSCxLQUFOLENBQVl4RyxZQUZwQjtBQUdOeUcsbUJBQWUsRUFBRSxXQUhYO0FBSU4sZUFBVztBQUNUQSxxQkFBZSxFQUFFO0FBRFIsS0FKTDtBQU9OakQsZUFBVyxFQUFFaEUsS0FBSyxDQUFDaUQsT0FBTixDQUFjLENBQWQsQ0FQUDtBQVFONkIsY0FBVSxFQUFFLENBUk47QUFTTmxFLFNBQUssRUFBRSxNQVREO0FBVU4sS0FBQ1osS0FBSyxDQUFDNEcsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUM1Qi9CLGdCQUFVLEVBQUU5RSxLQUFLLENBQUNpRCxPQUFOLENBQWMsQ0FBZCxDQURnQjtBQUU1QnJDLFdBQUssRUFBRTtBQUZxQjtBQVZ4QixHQXBFK0I7QUFtRnZDc0csWUFBVSxFQUFFO0FBQ1Y3RixXQUFPLEVBQUVyQixLQUFLLENBQUNpRCxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixDQURDO0FBRVZ0QyxVQUFNLEVBQUUsTUFGRTtBQUdWb0csWUFBUSxFQUFFLFVBSEE7QUFJVkksaUJBQWEsRUFBRSxNQUpMO0FBS1ZqSCxXQUFPLEVBQUUsTUFMQztBQU1WcUYsY0FBVSxFQUFFLFFBTkY7QUFPVkcsa0JBQWMsRUFBRTtBQVBOLEdBbkYyQjtBQTRGdkMwQixXQUFTLEVBQUU7QUFDVGpHLFNBQUssRUFBRTtBQURFLEdBNUY0QjtBQStGdkNrRyxZQUFVLEVBQUU7QUFDVmhHLFdBQU8sRUFBRXJCLEtBQUssQ0FBQ2lELE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREM7QUFFVjtBQUNBWixlQUFXLEVBQUcsY0FBYXJDLEtBQUssQ0FBQ2lELE9BQU4sQ0FBYyxDQUFkLENBQWlCLEtBSGxDO0FBSVZxQixjQUFVLEVBQUV0RSxLQUFLLENBQUN1RSxXQUFOLENBQWtCQyxNQUFsQixDQUF5QixPQUF6QixDQUpGO0FBS1Y1RCxTQUFLLEVBQUUsTUFMRztBQU1WLEtBQUNaLEtBQUssQ0FBQzRHLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDNUJqRyxXQUFLLEVBQUU7QUFEcUI7QUFOcEIsR0EvRjJCO0FBeUd2QzBHLGdCQUFjLEVBQUU7QUFDZHBILFdBQU8sRUFBRSxNQURLO0FBRWQsS0FBQ0YsS0FBSyxDQUFDNEcsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUM1QjNHLGFBQU8sRUFBRTtBQURtQjtBQUZoQixHQXpHdUI7QUErR3ZDcUgsZUFBYSxFQUFFO0FBQ2JySCxXQUFPLEVBQUUsTUFESTtBQUViLEtBQUNGLEtBQUssQ0FBQzRHLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDNUIzRyxhQUFPLEVBQUU7QUFEbUI7QUFGakI7QUEvR3dCLENBQVosQ0FBRCxDQUE1Qjs7QUF1SEEsU0FBU3NILG1CQUFULENBQTZCN0ksS0FBN0IsRUFBb0M7QUFDbEMsUUFBTTtBQUFFOEksV0FBRjtBQUFXQztBQUFYLE1BQThCL0ksS0FBcEM7QUFFQSxRQUFNdUQsT0FBTyxHQUFHcEMsU0FBUyxFQUF6QjtBQUNBLFFBQU1sQixNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTSxDQUFDNEUsSUFBRCxFQUFPa0UsT0FBUCxJQUFrQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBeEI7QUFDQSxRQUFNLENBQUNDLElBQUQsRUFBT0MsT0FBUCxJQUFrQkgsNENBQUssQ0FBQ0MsUUFBTixDQUFlO0FBQ3JDakksUUFBSSxFQUFFO0FBQUVzRSxXQUFLLEVBQUUsSUFBVDtBQUFlckMsVUFBSSxFQUFFO0FBQXJCLEtBRCtCO0FBRXJDbUcsU0FBSyxFQUFFO0FBRjhCLEdBQWYsQ0FBeEI7QUFJQSxRQUFNLENBQUMxRSxRQUFELEVBQVcyRSxXQUFYLElBQTBCTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUFoQztBQUNBLFFBQU0sQ0FBQ0ssa0JBQUQsRUFBcUJDLHFCQUFyQixJQUE4Q1AsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FBcEQ7QUFDQSxRQUFNLENBQUNoRyxJQUFELEVBQU91RyxPQUFQLElBQWtCUiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUF4QjtBQUNBLFFBQU0sQ0FBQ1EsU0FBRCxFQUFZQyxZQUFaLElBQTRCViw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUFsQztBQUVBVSx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNMUcsSUFBSSxHQUFHc0Msc0VBQWdCLENBQUMsTUFBRCxDQUE3QjtBQUNBLFVBQU1ELEtBQUssR0FBR0Msc0VBQWdCLENBQUMsT0FBRCxDQUE5Qjs7QUFDQSxRQUFJdEMsSUFBSixFQUFVO0FBQ1J1RyxhQUFPLENBQUN2RyxJQUFELENBQVA7QUFDRDs7QUFDRCxRQUFJQSxJQUFJLElBQUlxQyxLQUFaLEVBQW1CO0FBQ2pCLFlBQU01RSxPQUFPLEdBQUc7QUFBRU0sWUFBSSxFQUFFO0FBQUVpQyxjQUFGO0FBQVFxQztBQUFSLFNBQVI7QUFBeUI4RCxhQUFLLEVBQUU7QUFBaEMsT0FBaEI7QUFDQUQsYUFBTyxDQUFDekksT0FBRCxDQUFQO0FBQ0Q7O0FBQ0QsVUFBTTtBQUNKa0osd0JBREk7QUFFSkMsZ0JBRkk7QUFHSnhDLGtCQUhJO0FBSUp5QztBQUpJLFFBS0YvSixLQUxKO0FBTUE2SixzQkFBa0I7QUFDbEJDLGNBQVU7QUFDVkMscUJBQWlCO0FBQ2pCN0csUUFBSSxJQUFJQSxJQUFJLENBQUM4RyxXQUFiLElBQTRCMUMsWUFBWSxFQUF4QztBQUNELEdBcEJRLEVBb0JOLEVBcEJNLENBQVQ7O0FBc0JBLFFBQU0yQyxnQkFBZ0IsR0FBRyxNQUFNO0FBQzdCakIsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsUUFBTWtCLGlCQUFpQixHQUFHLE1BQU07QUFDOUJsQixXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxRQUFNbUIsVUFBVSxHQUFHcEYsT0FBTyxDQUFDSixRQUFELENBQTFCO0FBQ0EsUUFBTXlGLGdCQUFnQixHQUFHckYsT0FBTyxDQUFDd0Usa0JBQUQsQ0FBaEM7O0FBRUEsUUFBTWMscUJBQXFCLEdBQUluRyxLQUFELElBQVc7QUFDdkNvRixlQUFXLENBQUNwRixLQUFLLENBQUNvRyxhQUFQLENBQVg7QUFDRCxHQUZEOztBQUlBLFFBQU1DLHFCQUFxQixHQUFHLE1BQU07QUFDbENmLHlCQUFxQixDQUFDLElBQUQsQ0FBckI7QUFDRCxHQUZEOztBQUlBLFFBQU1nQixlQUFlLEdBQUcsTUFBTTtBQUM1QmxCLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDQWlCLHlCQUFxQjtBQUN0QixHQUhEOztBQUtBLFFBQU1FLG9CQUFvQixHQUFJdkcsS0FBRCxJQUFXO0FBQ3RDc0YseUJBQXFCLENBQUN0RixLQUFLLENBQUNvRyxhQUFQLENBQXJCO0FBQ0QsR0FGRDs7QUFJQSxRQUFNSSxrQkFBa0IsR0FBSTFKLFNBQUQsSUFBZTtBQUN4Q0EsYUFBUyxJQUFJZixNQUFNLENBQUNPLElBQVAsQ0FBYSxNQUFLUSxTQUFTLENBQUNWLElBQUssRUFBakMsQ0FBYjtBQUNELEdBRkQ7O0FBSUEsUUFBTXFLLGtCQUFrQixHQUFJQyxNQUFELElBQVk7QUFDckMsUUFBSUEsTUFBSixFQUFZO0FBQ1ZBLFlBQU0sQ0FBQy9HLElBQVAsS0FBZ0IsV0FBaEIsR0FDSTVELE1BQU0sQ0FBQ08sSUFBUCxDQUFhLE1BQUtvSyxNQUFNLENBQUNoSCxJQUFLLEVBQTlCLENBREosR0FFSTNELE1BQU0sQ0FBQ08sSUFBUCxDQUFhLElBQUdvSyxNQUFNLENBQUNoSCxJQUFLLEVBQTVCLENBRko7QUFHRCxLQUpELE1BSU87QUFDTDtBQUNEO0FBQ0YsR0FSRDs7QUFVQSxRQUFNaUgsWUFBWSxHQUFHQyxvREFBTSxDQUFDQyw2Q0FBQyxDQUFDQyxRQUFGLENBQVlDLENBQUQsSUFBT2pMLEtBQUssQ0FBQ21JLE1BQU4sQ0FBYTtBQUFFK0MsUUFBSSxFQUFFRDtBQUFSLEdBQWIsQ0FBbEIsRUFBNkMsR0FBN0MsQ0FBRCxDQUFOLENBQ2xCRSxPQURIOztBQUVBLFFBQU03SCxRQUFRLEdBQUk4SCxDQUFELElBQU87QUFDdEJ6QixnQkFBWSxDQUFDeUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWjtBQUNBVCxnQkFBWSxDQUFDTyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFaO0FBQ0QsR0FIRDs7QUFLQSxRQUFNQyxNQUFNLEdBQUcsNkJBQWY7O0FBQ0EsUUFBTUMsVUFBVSxHQUNkLE1BQUMsOERBQUQ7QUFDRSxZQUFRLEVBQUU3RyxRQURaO0FBRUUsZ0JBQVksRUFBRTtBQUFFTyxjQUFRLEVBQUUsS0FBWjtBQUFtQkMsZ0JBQVUsRUFBRTtBQUEvQixLQUZoQjtBQUdFLE1BQUUsRUFBRW9HLE1BSE47QUFJRSxlQUFXLE1BSmI7QUFLRSxtQkFBZSxFQUFFO0FBQUVyRyxjQUFRLEVBQUUsS0FBWjtBQUFtQkMsZ0JBQVUsRUFBRTtBQUEvQixLQUxuQjtBQU1FLFFBQUksRUFBRWdGLFVBTlI7QUFPRSxXQUFPLEVBQUVLLGVBUFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFLE1BQUMsa0VBQUQ7QUFBVSxXQUFPLEVBQUUsTUFBTXZLLE1BQU0sQ0FBQ08sSUFBUCxDQUFhLE1BQUswQyxJQUFJLENBQUNlLFFBQVMsRUFBaEMsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLEVBWUUsTUFBQyxrRUFBRDtBQUFVLFdBQU8sRUFBRWpFLEtBQUssQ0FBQ3lMLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBWkYsQ0FERjs7QUFpQkEsUUFBTUMsWUFBWSxHQUFHLG9DQUFyQjs7QUFDQSxRQUFNQyxnQkFBZ0IsR0FDcEIsTUFBQyw4REFBRDtBQUNFLFlBQVEsRUFBRXBDLGtCQURaO0FBRUUsZ0JBQVksRUFBRTtBQUFFckUsY0FBUSxFQUFFLEtBQVo7QUFBbUJDLGdCQUFVLEVBQUU7QUFBL0IsS0FGaEI7QUFHRSxNQUFFLEVBQUV1RyxZQUhOO0FBSUUsZUFBVyxNQUpiO0FBS0UsbUJBQWUsRUFBRTtBQUFFeEcsY0FBUSxFQUFFLEtBQVo7QUFBbUJDLGdCQUFVLEVBQUU7QUFBL0IsS0FMbkI7QUFNRSxRQUFJLEVBQUVpRixnQkFOUjtBQU9FLFdBQU8sRUFBRUcscUJBUFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNHcEIsSUFBSSxDQUFDbEksSUFBTCxDQUFVc0UsS0FBVixHQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxHQURILEVBRUUsTUFBQyxrRUFBRDtBQUFVLFdBQU8sRUFBRSxNQUFNdEYsTUFBTSxDQUFDTyxJQUFQLENBQVksT0FBWixDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFZLGtCQUFXLGtCQUF2QjtBQUEwQyxTQUFLLEVBQUMsU0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBTyxnQkFBWSxFQUFFdUksY0FBckI7QUFBcUMsU0FBSyxFQUFDLFdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLENBRkYsRUFVRSxNQUFDLGtFQUFEO0FBQVUsV0FBTyxFQUFFLE1BQU05SSxNQUFNLENBQUNPLElBQVAsQ0FBYSxjQUFiLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQVksa0JBQVcsMkJBQXZCO0FBQW1ELFNBQUssRUFBQyxTQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFPLGdCQUFZLEVBQUVzSSxPQUFPLElBQUlBLE9BQU8sQ0FBQzhDLEtBQXhDO0FBQStDLFNBQUssRUFBQyxXQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixDQVZGLEVBa0JFLE1BQUMsa0VBQUQ7QUFBVSxXQUFPLEVBQUUsTUFBTTNMLE1BQU0sQ0FBQ08sSUFBUCxDQUFhLE1BQUswQyxJQUFJLENBQUNlLFFBQVMsRUFBaEMsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxrQkFBVyx5QkFEYjtBQUVFLHFCQUFjLDZCQUZoQjtBQUdFLHFCQUFjLE1BSGhCO0FBSUUsU0FBSyxFQUFDLFNBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMseURBQUQ7QUFDRSxhQUFTLEVBQUMsZUFEWjtBQUVFLE9BQUcsRUFBRTRILGlFQUFXLENBQUMzSSxJQUFJLENBQUNvQyxnQkFBTixFQUF3QnBDLElBQUksQ0FBQzRJLE1BQTdCLENBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLENBbEJGLEVBK0JjLEdBL0JkLEVBZ0NFLE1BQUMsa0VBQUQ7QUFBVSxXQUFPLEVBQUU5TCxLQUFLLENBQUN5TCxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFZLFNBQUssRUFBQyxTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBSkYsQ0FoQ0YsQ0FERCxHQXlDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFVLFdBQU8sRUFBRSxNQUFNeEwsTUFBTSxDQUFDTyxJQUFQLENBQVksWUFBWixDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLGtCQUFXLHlCQURiO0FBRUUscUJBQWMsNkJBRmhCO0FBR0UscUJBQWMsTUFIaEI7QUFJRSxTQUFLLEVBQUMsU0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVEYsQ0FERixFQVlFLE1BQUMsa0VBQUQ7QUFBVSxXQUFPLEVBQUUsTUFBTVAsTUFBTSxDQUFDTyxJQUFQLENBQVksU0FBWixDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLGtCQUFXLHlCQURiO0FBRUUscUJBQWMsNkJBRmhCO0FBR0UscUJBQWMsTUFIaEI7QUFJRSxTQUFLLEVBQUMsU0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixDQVpGLENBbERKLENBREY7O0FBOEVBLFNBQ0U7QUFBSyxhQUFTLEVBQUUrQyxPQUFPLENBQUNqQyxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLCtEQUFEO0FBQ0UsWUFBUSxFQUFDLE9BRFg7QUFFRSxhQUFTLEVBQUV5SywyQ0FBSSxDQUFDeEksT0FBTyxDQUFDbUMsTUFBVCxFQUFpQjtBQUM5QixPQUFDbkMsT0FBTyxDQUFDMkMsV0FBVCxHQUF1QnBCO0FBRE8sS0FBakIsQ0FGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxTQUFLLEVBQUMsU0FEUjtBQUVFLGtCQUFXLGFBRmI7QUFHRSxXQUFPLEVBQUVtRixnQkFIWDtBQUlFLFFBQUksRUFBQyxPQUpQO0FBS0UsYUFBUyxFQUFFOEIsMkNBQUksQ0FBQ3hJLE9BQU8sQ0FBQytDLFVBQVQsRUFBcUJ4QixJQUFJLElBQUl2QixPQUFPLENBQUNnRCxJQUFyQyxDQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERixFQVVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVoRCxPQUFPLENBQUN5RSxLQUF4QjtBQUErQixPQUFHLEVBQUVSLGlEQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FWRixFQWFFO0FBQUssYUFBUyxFQUFFakUsT0FBTyxDQUFDNEUsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFNUUsT0FBTyxDQUFDZ0YsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLHNEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUV0RyxXQUFLLEVBQUU7QUFBVCxLQURUO0FBRUUsWUFBUSxFQUFFcUIsUUFGWjtBQUdFLFlBQVEsRUFBRXFILGtCQUhaO0FBSUUsZUFBVyxFQUFDLEtBSmQ7QUFLRSxXQUFPLEVBQUUzSyxLQUFLLENBQUNnTSxVQUFOLElBQW9CLEVBTC9CO0FBTUUsY0FBVSxFQUFDLE1BTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBYkYsRUEwQkc3QyxJQUFJLENBQUNsSSxJQUFMLENBQVVzRSxLQUFWLElBQ0MsTUFBQyxzREFBRDtBQUNFLFNBQUssRUFBRTtBQUFFdEQsV0FBSyxFQUFFO0FBQVQsS0FEVDtBQUVFLFlBQVEsRUFBRXlJLGtCQUZaO0FBR0UsZUFBVyxFQUFDLG9CQUhkO0FBSUUsV0FBTyxFQUFFMUssS0FBSyxDQUFDcUgsZUFBTixJQUF5QixFQUpwQztBQUtFLGNBQVUsRUFBQyxNQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkosRUFtQ0U7QUFBSyxhQUFTLEVBQUU5RCxPQUFPLENBQUN3RSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkNGLEVBcUNFO0FBQUssYUFBUyxFQUFFeEUsT0FBTyxDQUFDb0YsY0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUSxJQUFJLENBQUNsSSxJQUFMLENBQVVzRSxLQUFWLEdBQ0MsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxXQUFPLEVBQUUsTUFBTXRGLE1BQU0sQ0FBQ08sSUFBUCxDQUFZLE9BQVosQ0FEakI7QUFFRSxrQkFBVyxrQkFGYjtBQUdFLFNBQUssRUFBQyxTQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLCtEQUFEO0FBQU8sZ0JBQVksRUFBRXVJLGNBQXJCO0FBQXFDLFNBQUssRUFBQyxXQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixDQURGLEVBVUUsTUFBQyxvRUFBRDtBQUNFLFdBQU8sRUFBRSxNQUFNOUksTUFBTSxDQUFDTyxJQUFQLENBQVksY0FBWixDQURqQjtBQUVFLGtCQUFXLDJCQUZiO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsK0RBQUQ7QUFDRSxnQkFBWSxFQUFFc0ksT0FBTyxJQUFJQSxPQUFPLENBQUM4QyxLQURuQztBQUVFLFNBQUssRUFBQyxXQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQUxGLENBVkYsRUFzQkUsTUFBQyxvRUFBRDtBQUNFLFFBQUksRUFBQyxLQURQO0FBRUUsa0JBQVcseUJBRmI7QUFHRSxxQkFBZUwsTUFIakI7QUFJRSxxQkFBYyxNQUpoQjtBQUtFLFdBQU8sRUFBRWxCLHFCQUxYO0FBTUUsU0FBSyxFQUFDLFNBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMseURBQUQ7QUFDRSxhQUFTLEVBQUMsZUFEWjtBQUVFLE9BQUcsRUFBRW5ILElBQUksQ0FBQ29DLGdCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQXRCRixFQWtDZ0IsR0FsQ2hCLENBREQsR0FzQ0MsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBRUQsaUJBQVcsRUFBRTtBQUFmLEtBRFQ7QUFFRSxXQUFPLEVBQUUsTUFBTXBGLE1BQU0sQ0FBQ08sSUFBUCxDQUFZLFNBQVosQ0FGakI7QUFHRSxXQUFPLEVBQUMsV0FIVjtBQUlFLFNBQUssRUFBQyxXQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQVNFLE1BQUMseURBQUQ7QUFDRSxXQUFPLEVBQUUsTUFBTVAsTUFBTSxDQUFDTyxJQUFQLENBQVksWUFBWixDQURqQjtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFURixDQXZDSixDQXJDRixFQStGRTtBQUFLLGFBQVMsRUFBRStDLE9BQU8sQ0FBQ3FGLGFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0Usa0JBQVcsV0FEYjtBQUVFLHFCQUFlOEMsWUFGakI7QUFHRSxxQkFBYyxNQUhoQjtBQUlFLFdBQU8sRUFBRWpCLG9CQUpYO0FBS0UsU0FBSyxFQUFDLFNBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsK0RBQUQ7QUFDRSxnQkFBWSxFQUFFM0IsT0FBTyxJQUFJQyxjQUFjLEdBQUdELE9BQU8sQ0FBQzhDLEtBRHBEO0FBRUUsU0FBSyxFQUFDLFdBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBUEYsQ0FERixDQS9GRixDQU5GLENBRkYsRUF5SEdELGdCQXpISCxFQTBIR0gsVUExSEgsRUEySEUsTUFBQyxnREFBRDtBQUNFLG1CQUFlLEVBQUV4TCxLQUFLLENBQUNxSCxlQUR6QjtBQUVFLGdCQUFZLEVBQUVySCxLQUFLLENBQUNpTSxjQUZ0QjtBQUdFLFFBQUksRUFBRW5ILElBSFI7QUFJRSxXQUFPLEVBQUVvRixpQkFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0hGLENBREY7QUFvSUQ7O0FBRUQsTUFBTXpKLGtCQUFrQixHQUFJQyxRQUFELEtBQWU7QUFDeEMrSyxRQUFNLEVBQUUsTUFBTS9LLFFBQVEsQ0FBQytLLGlFQUFNLEVBQVAsQ0FEa0I7QUFFeEM1QixvQkFBa0IsRUFBRSxNQUFNbkosUUFBUSxDQUFDd0wseUZBQXlCLEVBQTFCLENBRk07QUFHeEM1RSxjQUFZLEVBQUUsTUFBTTVHLFFBQVEsQ0FBQ3lMLG1GQUFtQixFQUFwQixDQUhZO0FBSXhDckMsWUFBVSxFQUFFLE1BQU1wSixRQUFRLENBQUMwTCxtRkFBZSxFQUFoQixDQUpjO0FBS3hDckMsbUJBQWlCLEVBQUUsTUFBTXJKLFFBQVEsQ0FBQzJMLGdGQUFpQixFQUFsQixDQUxPO0FBTXhDbEUsUUFBTSxFQUFHeEgsT0FBRCxJQUFhRCxRQUFRLENBQUM0TCx3RUFBYSxDQUFDM0wsT0FBRCxDQUFkO0FBTlcsQ0FBZixDQUEzQjs7QUFTQSxNQUFNRyxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQztBQUNBc0csaUJBQWUsRUFBRXRHLEtBQUssQ0FBQ3NHLGVBQU4sQ0FBc0JwRyxJQUZMO0FBR2xDZ0wsZ0JBQWMsRUFBRWxMLEtBQUssQ0FBQ3VHLFlBQU4sQ0FBbUJyRyxJQUhEO0FBSWxDNkgsU0FBTyxFQUFFL0gsS0FBSyxDQUFDK0gsT0FBTixDQUFjN0gsSUFKVztBQUtsQzhILGdCQUFjLEVBQUVoSSxLQUFLLENBQUNnSSxjQUFOLENBQXFCd0QsT0FMSDtBQU1sQ1AsWUFBVSxFQUFFakwsS0FBSyxDQUFDeUwsSUFBTixDQUFXckU7QUFOVyxDQUFaLENBQXhCOztBQVNlakgsMkhBQU8sQ0FDcEJKLGVBRG9CLEVBRXBCTCxrQkFGb0IsQ0FBUCxDQUdib0ksbUJBSGEsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdlQTtBQUNBO0FBRWUsU0FBUzRELFVBQVQsQ0FBb0I7QUFBRUMsVUFBRjtBQUFZOUg7QUFBWixDQUFwQixFQUEyQztBQUN4RCxTQUNFLE1BQUMsMkRBQUQ7QUFDRSxXQUFPLEVBQUU4SCxRQURYO0FBRUUsV0FBTyxFQUFFLEVBRlg7QUFHRSxXQUFPLEVBQUUsRUFIWDtBQUlFLGtCQUFjLEVBQUU5SCxPQUpsQjtBQUtFLHFCQUFpQixFQUFFLE1BQU0sQ0FBRSxDQUw3QjtBQU1FLHFCQUFpQixFQUFFLE1BQU0sQ0FBRSxDQU43QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFVRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTXpELFNBQVMsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ3ZDQyxNQUFJLEVBQUU7QUFDSkMsV0FBTyxFQUFFLE1BREw7QUFFSkMsY0FBVSxFQUFFO0FBRlIsR0FEaUM7QUFLdkNtTCxVQUFRLEVBQUU7QUFDUjFLLFNBQUssRUFBRSxNQURDO0FBRVJTLFdBQU8sRUFBRSxRQUZEO0FBR1JrSyxZQUFRLEVBQUU7QUFIRjtBQUw2QixDQUFaLENBQUQsQ0FBNUI7QUFZZSxTQUFTQyxRQUFULENBQWtCN00sS0FBbEIsRUFBeUI7QUFDdEMsUUFBTXVELE9BQU8sR0FBR3BDLFNBQVMsRUFBekI7QUFDQSxRQUFNO0FBQUUyTCxlQUFGO0FBQWVDO0FBQWYsTUFBOEIvTSxLQUFwQztBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUV1RCxPQUFPLENBQUNqQyxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFPLGFBQVMsRUFBRWlDLE9BQU8sQ0FBQ29KLFFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBREYsRUFJRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUJHLFdBQXpCLENBREYsQ0FKRixFQU9FLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBb0MsU0FBSyxFQUFFO0FBQUV2TCxhQUFPLEVBQUU7QUFBWCxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQVBGLEVBVUUsTUFBQyxtREFBRDtBQUFLLFNBQUssRUFBRTtBQUFFbUIsYUFBTyxFQUFFLE1BQVg7QUFBbUJuQixhQUFPLEVBQUU7QUFBNUIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d3TCxVQUFVLElBQ1RBLFVBQVUsQ0FBQ25GLEdBQVgsQ0FBZ0JvRixDQUFELElBQU87QUFDcEIsV0FDRSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUV6SixPQUFPLENBQUNwQixlQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRyxJQUFHNkssQ0FBQyxDQUFDL0ksUUFBUyxFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxXQUFLLEVBQUU7QUFBRXpCLGFBQUssRUFBRTtBQUFULE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQixLQUFJd0ssQ0FBQyxDQUFDL0ksUUFBUyxFQUE5QyxDQURGLENBREYsQ0FERixFQU1FLE1BQUMseURBQUQ7QUFBUyxXQUFLLEVBQUU7QUFBRS9CLGNBQU0sRUFBRTtBQUFWLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFORixDQURGO0FBVUQsR0FYRCxDQUZKLENBVkYsQ0FERixDQURGO0FBOEJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1mLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQjZMLFVBQVEsRUFBRTtBQUNSaEwsU0FBSyxFQUFFLE1BREM7QUFFUmlMLGFBQVMsRUFDUDtBQUhNLEdBRGlCO0FBTTNCQyxPQUFLLEVBQUU7QUFDTG5MLFVBQU0sRUFBRSxDQURIO0FBRUxSLGNBQVUsRUFBRSxRQUZQLENBRWlCOztBQUZqQixHQU5vQjtBQVUzQndHLE9BQUssRUFBRTtBQUNMM0YsWUFBUSxFQUFFO0FBREwsR0FWb0I7QUFhM0J5SyxhQUFXLEVBQUU7QUFDWHpILGVBQVcsRUFBRSxnQkFERjtBQUVYYyxjQUFVLEVBQUU7QUFGRDtBQWJjLENBQUQsQ0FBNUI7QUFtQkEsTUFBTWlILFVBQVUsR0FBRyw0Q0FBbkI7O0FBRUEsTUFBTUMsY0FBYyxHQUFJQyxJQUFELElBQVU7QUFDL0IsUUFBTUMsTUFBTSxHQUFHRCxJQUFJLENBQUNFLE1BQUwsQ0FBWSxDQUFDQyxXQUFELEVBQWM1RixJQUFkLEtBQXVCO0FBQ2hELFlBQVFBLElBQUksQ0FBQzZGLEdBQWI7QUFDRSxXQUFLLFVBQUw7QUFDRUQsbUJBQVcsQ0FBQ3pGLEtBQVosR0FBb0JILElBQUksQ0FBQ3lELEtBQXpCO0FBQ0E7O0FBQ0YsV0FBSyxRQUFMO0FBQ0VtQyxtQkFBVyxDQUFDRSxJQUFaLEdBQW1COUYsSUFBSSxDQUFDeUQsS0FBeEI7QUFDQTs7QUFDRixXQUFLLGdCQUFMO0FBQ0VtQyxtQkFBVyxDQUFDWCxXQUFaLEdBQTBCakYsSUFBSSxDQUFDeUQsS0FBL0I7QUFDQTs7QUFDRixXQUFLLGNBQUw7QUFDRW1DLG1CQUFXLENBQUNHLElBQVosR0FBbUIvRixJQUFJLENBQUN5RCxLQUF4QjtBQUNBOztBQUNGLFdBQUssVUFBTDtBQUNFbUMsbUJBQVcsQ0FBQ0ksS0FBWixHQUFvQmhHLElBQUksQ0FBQ3lELEtBQXpCO0FBQ0E7O0FBQ0Y7QUFDRTtBQWpCSjs7QUFtQkEsV0FBT21DLFdBQVA7QUFDRCxHQXJCYyxFQXFCWixFQXJCWSxDQUFmO0FBdUJBLFNBQU9LLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQlIsTUFBaEIsQ0FBUDtBQUNELENBekJEOztBQTJCQSxNQUFNUyxTQUFTLEdBQUlDLElBQUQsSUFBVTtBQUMxQixRQUFNQyxDQUFDLEdBQUdDLDhDQUFPLENBQUNDLElBQVIsQ0FBYUgsSUFBYixDQUFWO0FBRUEsUUFBTUksSUFBSSxHQUFHLEVBQWI7QUFDQUgsR0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFldEcsR0FBZixDQUFtQixDQUFDMEcsQ0FBRCxFQUFJekcsSUFBSixLQUFhO0FBQzlCLFFBQUksQ0FBQ0EsSUFBSSxDQUFDMEcsT0FBVixFQUFtQixPQUFPLElBQVA7QUFFbkIsVUFBTUMsUUFBUSxHQUFHM0csSUFBSSxDQUFDMEcsT0FBTCxDQUFhQyxRQUFiLElBQXlCLElBQTFDO0FBQ0EsVUFBTXhILE9BQU8sR0FBR2EsSUFBSSxDQUFDMEcsT0FBTCxDQUFhdkgsT0FBYixJQUF3QixJQUF4QztBQUVBLFFBQUksQ0FBQ3dILFFBQUQsSUFBYSxDQUFDeEgsT0FBbEIsRUFBMkIsT0FBTyxJQUFQO0FBRTNCcUgsUUFBSSxDQUFDN04sSUFBTCxDQUFVO0FBQUVrTixTQUFHLEVBQUVjLFFBQVA7QUFBaUJsRCxXQUFLLEVBQUV0RTtBQUF4QixLQUFWO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FWRDtBQVlBLFNBQU84RyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JNLElBQWhCLENBQVA7QUFDRCxDQWpCRDs7QUFtQkEsTUFBTUksUUFBUSxHQUFJQyxHQUFELElBQVM7QUFDeEIsU0FBT0MsNENBQUssQ0FBQ3ZCLFVBQVUsR0FBR3NCLEdBQWQsQ0FBTCxDQUF3QkUsSUFBeEIsQ0FBOEJDLFFBQUQsSUFBY0EsUUFBUSxDQUFDNU4sSUFBcEQsQ0FBUDtBQUNELENBRkQ7O0FBSUEsTUFBTTZOLE1BQU0sR0FBSTVELElBQUQsSUFBVTtBQUN2QixNQUFJLENBQUNBLElBQUwsRUFBVyxPQUFPLElBQVA7QUFFWCxRQUFNNkQsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBVjtBQUNBRixHQUFDLENBQUNHLElBQUYsR0FBU2hFLElBQVQ7QUFFQSxRQUFNO0FBQUVpRSxZQUFGO0FBQVlDLFFBQVo7QUFBa0JDLFlBQWxCO0FBQTRCbEgsVUFBNUI7QUFBb0NtSDtBQUFwQyxNQUE2Q1AsQ0FBbkQ7QUFFQSxRQUFNTCxHQUFHLEdBQUksR0FBRVMsUUFBUyxLQUFJQyxJQUFLLEdBQUVDLFFBQVMsR0FBRWxILE1BQU8sR0FBRW1ILElBQUssRUFBNUQ7QUFFQSxRQUFNQyxVQUFVLEdBQUdILElBQUksS0FBS0ksTUFBTSxDQUFDQyxRQUFQLENBQWdCTCxJQUE1QztBQUVBLE1BQUlHLFVBQUosRUFBZ0IsT0FBTyxJQUFQO0FBRWhCLFNBQU9iLEdBQVA7QUFDRCxDQWZEOztBQWlCZSxTQUFTZ0IsV0FBVCxDQUFxQjFQLEtBQXJCLEVBQTRCO0FBQ3pDLFFBQU07QUFBQSxPQUFDeU4sV0FBRDtBQUFBLE9BQWNrQztBQUFkLE1BQWdDekcsc0RBQVEsQ0FBQyxJQUFELENBQTlDO0FBQ0EsUUFBTTNGLE9BQU8sR0FBR3BDLFNBQVMsRUFBekI7QUFFQXlJLHlEQUFTLENBQUMsTUFBTTtBQUNkNkUsWUFBUSxDQUFDek8sS0FBSyxDQUFDME8sR0FBUCxDQUFSLENBQ0dFLElBREgsQ0FDUVosU0FEUixFQUVHWSxJQUZILENBRVF2QixjQUZSLEVBR0d1QixJQUhILENBR1FlLGNBSFI7QUFJRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0EsU0FDRSxNQUFDLDZEQUFEO0FBQU0sYUFBUyxFQUFFcE0sT0FBTyxDQUFDMEosUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFFUSxXQUFXLElBQUlBLFdBQVcsQ0FBQ0UsSUFBcEM7QUFBMEMsVUFBTSxFQUFDLFFBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDRixXQUFELEdBQ0MsTUFBQyxnRUFBRDtBQUNFLGFBQVMsRUFBQyxNQURaO0FBRUUsV0FBTyxFQUFDLE1BRlY7QUFHRSxhQUFTLEVBQUVsSyxPQUFPLENBQUM0SixLQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsR0FPQyxNQUFDLGtFQUFEO0FBQ0UsYUFBUyxFQUFFNUosT0FBTyxDQUFDNEosS0FEckI7QUFFRSxTQUFLLEVBQUVNLFdBQVcsQ0FBQ0ksS0FGckI7QUFHRSxTQUFLLEVBQUVKLFdBQVcsQ0FBQ3pGLEtBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQWNFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFDRSxhQUFTLEVBQUV6RSxPQUFPLENBQUN5RSxLQURyQjtBQUVFLGdCQUFZLE1BRmQ7QUFHRSxXQUFPLEVBQUMsSUFIVjtBQUlFLGFBQVMsRUFBQyxJQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR3lGLFdBQVcsSUFBSUEsV0FBVyxDQUFDRyxJQU45QixDQURGLEVBU0UsTUFBQyxtRUFBRDtBQUNFLGFBQVMsRUFBRXJLLE9BQU8sQ0FBQ3lFLEtBRHJCO0FBRUUsZ0JBQVksTUFGZDtBQUdFLFdBQU8sRUFBQyxJQUhWO0FBSUUsYUFBUyxFQUFDLElBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HeUYsV0FBVyxJQUFJQSxXQUFXLENBQUN6RixLQU45QixDQVRGLEVBaUJHLENBQUN5RixXQUFELEdBQ0MsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLFVBQU0sRUFBRSxFQUZWO0FBR0UsU0FBSyxFQUFFO0FBQUVtQyxrQkFBWSxFQUFFO0FBQWhCLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUUsTUFBQyxnRUFBRDtBQUFVLGFBQVMsRUFBQyxNQUFwQjtBQUEyQixVQUFNLEVBQUUsRUFBbkM7QUFBdUMsU0FBSyxFQUFDLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURELEdBVUMsTUFBQyxtRUFBRDtBQUNFLGFBQVMsRUFBRXJNLE9BQU8sQ0FBQ3VKLFdBRHJCO0FBRUUsV0FBTyxFQUFDLE9BRlY7QUFHRSxTQUFLLEVBQUMsZUFIUjtBQUlFLGFBQVMsRUFBQyxHQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR1csV0FBVyxDQUFDWCxXQU5mLENBM0JKLENBZEYsQ0FERixDQURGLENBREY7QUEwREQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEtEO0FBRWUsU0FBUytDLE1BQVQsQ0FBZ0I7QUFBRUMsU0FBTyxHQUFHO0FBQVosQ0FBaEIsRUFBb0M7QUFDakQsU0FDRTtBQUFLLE1BQUUsRUFBRUEsT0FBTyxJQUFJLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFXRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFZRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtB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QSwwRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdFxcW2NvbW11bml0eV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIGpvaW5Db21tdW5pdHlSZXF1ZXN0LFxyXG4gIGxlYXZlQ29tbXVuaXR5UmVxdWVzdCxcclxufSBmcm9tIFwiLi4vbGliL3VzZXJzL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBBY3Rpb25CdXR0b24ocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlzSm9pbmVkLCBqb2luQ29tbXVuaXR5LCBsZWF2ZUNvbW11bml0eSwgc2x1ZywgaXNMb2dnZWQgfSA9IHByb3BzO1xyXG4gIGlmICghaXNMb2dnZWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJqb2luX2J1dHRvblwiXHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9naXJpcy15YXBcIil9XHJcbiAgICAgID5cclxuICAgICAgICA8c3Bhbj5LYXTEsWw8L3NwYW4+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17aXNKb2luZWQgPyBcImpvaW5fYnV0dG9uX2NoZWNrZWRcIiA6IFwiam9pbl9idXR0b25cIn1cclxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICBjb2xvcj17aXNKb2luZWQgPyBcImRlZmF1bHRcIiA6IFwicHJpbWFyeVwifVxyXG4gICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgaXNKb2luZWRcclxuICAgICAgICAgICAgPyAoKSA9PiBsZWF2ZUNvbW11bml0eSh7IHNsdWcgfSlcclxuICAgICAgICAgICAgOiAoKSA9PiBqb2luQ29tbXVuaXR5KHsgc2x1ZyB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuPntpc0pvaW5lZCA/IFwiw5x5ZXNpblwiIDogXCJLYXTEsWxcIn08L3NwYW4+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBqb2luQ29tbXVuaXR5OiAocGF5bG9hZCkgPT4gZGlzcGF0Y2goam9pbkNvbW11bml0eVJlcXVlc3QocGF5bG9hZCkpLFxyXG4gIGxlYXZlQ29tbXVuaXR5OiAocGF5bG9hZCkgPT4gZGlzcGF0Y2gobGVhdmVDb21tdW5pdHlSZXF1ZXN0KHBheWxvYWQpKSxcclxufSk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgY29tbXVuaXR5OiBzdGF0ZS5jb21tdW5pdHkuZGF0YSxcclxuICAvL2F1dGg6IHN0YXRlLmF1dGguZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBY3Rpb25CdXR0b24pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgeyBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIHBhZGRpbmdUb3A6IFwiMjBweFwiLFxyXG4gIH0sXHJcbiAgYXZhdGFySW1nOiB7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiNTAlXCIsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgYmFja2dyb3VuZFNpemU6IFwiMTAwJVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjI0cHhcIixcclxuICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICBmbGV4OiBcIm5vbmVcIixcclxuICAgIGhlaWdodDogXCIzMnB4XCIsXHJcbiAgICB3aWR0aDogXCIzMnB4XCIsXHJcbiAgICBtYXJnaW46IFwiMCA4cHhcIixcclxuICB9LFxyXG4gIGNvbW11bml0eV90aXRsZToge1xyXG4gICAgZm9udEZhbWlseTogXCJpbmhlcml0XCIsXHJcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjE4cHhcIixcclxuICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgfSxcclxuICBjb21fY29udDoge1xyXG4gICAgcGFkZGluZzogXCIxcmVtIDFyZW0gMCAwXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIG1lbWJlcl9jb3VudDoge1xyXG4gICAgZm9udFNpemU6IFwiMTJweFwiLFxyXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMTZweFwiLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogXCI0cHhcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21ib0JveCh7XHJcbiAgb3B0aW9ucyxcclxuICBsYWJlbEZpZWxkLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIHBsYWNlaG9sZGVyLFxyXG4gIHVzZXIsXHJcbiAgY2xhc3NOYW1lLFxyXG4gIGRlZmF1bHRWYWx1ZSxcclxuICBzdHlsZSxcclxuICBvblNlYXJjaCxcclxufSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyT3B0aW9uID0gKG9wdGlvbiwgY2xhc3NlcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29tX2NvbnR9PlxyXG4gICAgICAgIDxDb2wgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmdMZWZ0OiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFySW1nfSBzcmM9e29wdGlvbi5sb2dvUGF0aH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIgfX0+XHJcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21tdW5pdHlfdGl0bGV9PntvcHRpb24ubmFtZX08L2NvZGU+XHJcbiAgICAgICAgICAgIHtvcHRpb24udHlwZSAhPT0gXCJ1c2VyXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW1iZXJfY291bnR9PlxyXG4gICAgICAgICAgICAgICAge29wdGlvbi5tZW1iZXJDb3VudH0gw7x5ZVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVXNlck9wdGlvbiA9IChvcHRpb24sIGNsYXNzZXMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbV9jb250fT5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nTGVmdDogXCIwcHhcIiB9fT5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhckltZ30gc3JjPXtvcHRpb24ucHJvZmlsZUltZ30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIgfX0+XHJcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21tdW5pdHlfdGl0bGV9PntvcHRpb24udXNlcm5hbWV9PC9jb2RlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XHJcbiAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2UobmV3VmFsdWUpO1xyXG4gICAgICB9fVxyXG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+XHJcbiAgICAgICAgdXNlciA/IHJlbmRlclVzZXJPcHRpb24ob3B0aW9uLCBjbGFzc2VzKSA6IHJlbmRlck9wdGlvbihvcHRpb24sIGNsYXNzZXMpXHJcbiAgICAgIH1cclxuICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbltsYWJlbEZpZWxkXX1cclxuICAgICAgbm9PcHRpb25zVGV4dD1cIlNvbnXDpyB5b2tcIlxyXG4gICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uU2VhcmNofVxyXG4gICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgIGxhYmVsPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIGJ1dHRvbl9yb290OiB7XHJcbiAgICBtYXJnaW46IFwiNXB4XCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBidXR0b25zOiB7XHJcbiAgICBwYWRkaW5nOiBcIjJweCAhaW1wb3J0YW50XCIsXHJcbiAgICBtYXJnaW46IFwiMnB4XCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlQ29tbWVudFBvcChwcm9wcykge1xyXG4gIGNvbnN0IHsgYW5jaG9yRWwsIG9uQ2xvc2UsIG9uU3VibWl0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgY29uc3QgaWQgPSBvcGVuID8gXCJzaW1wbGUtcG9wb3ZlclwiIDogdW5kZWZpbmVkO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBvcG92ZXJcclxuICAgICAgaWQ9e2lkfVxyXG4gICAgICBvcGVuPXtvcGVufVxyXG4gICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgIHZlcnRpY2FsOiBcImJvdHRvbVwiLFxyXG4gICAgICAgIGhvcml6b250YWw6IFwiY2VudGVyXCIsXHJcbiAgICAgIH19XHJcbiAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xyXG4gICAgICAgIHZlcnRpY2FsOiBcInRvcFwiLFxyXG4gICAgICAgIGhvcml6b250YWw6IFwiY2VudGVyXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvZ3JhcGh5fT5cclxuICAgICAgICBTaWxtZWsgaXN0ZWRpxJ9pbml6ZSBlbWlubWlzaW5peiA/XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uX3Jvb3R9PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uc31cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEJvxZ92ZXJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtvblN1Ym1pdH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25zfVxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBTaWxcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1BvcG92ZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IE1EQkljb24gfSBmcm9tIFwibWRicmVhY3RcIjtcclxuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHJlYWRMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vbGliL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVBvc3RUYWIocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHVzZXIsIHNsdWcgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXIgY2xhc3NOYW1lPVwicG9zdF9iYXJcIj5cclxuICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjFyZW1cIiB9fVxyXG4gICAgICAgICAgc3JjPXtwcm9wcy51c2VyLnByb2ZpbGVJbWFnZVBhdGh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJfYXZhdGFyXCJcclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlYWRMb2NhbFN0b3JhZ2UoXCJ0b2tlblwiKTtcclxuICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICAgID8gcm91dGVyLnB1c2goYC9zYWxsYT9pcz0ke3NsdWcgPyBzbHVnIDogXCJcIn1gKVxyXG4gICAgICAgICAgICA6IHJvdXRlci5wdXNoKFwiL2dpcmlzLXlhcFwiKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2FsbGEgQmnFn2lsZXJcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInBvc3RfYmFyX2lucHV0XCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxNREJJY29uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdG9rZW4gPSByZWFkTG9jYWxTdG9yYWdlKFwidG9rZW5cIik7XHJcbiAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgICA/IHJvdXRlci5wdXNoKGAvc2FsbGE/aXM9JHtzbHVnID8gc2x1ZyA6IFwiXCJ9YClcclxuICAgICAgICAgICAgOiByb3V0ZXIucHVzaChcIi9naXJpcy15YXBcIik7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBmYXJcclxuICAgICAgICBpY29uPVwiaW1hZ2VcIlxyXG4gICAgICAgIHNpemU9XCIyeFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicG9zdF9iYXJfaWNvblwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxNREJJY29uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdG9rZW4gPSByZWFkTG9jYWxTdG9yYWdlKFwidG9rZW5cIik7XHJcbiAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgICA/IHJvdXRlci5wdXNoKGAvc2FsbGE/aXM9JHtzbHVnID8gc2x1ZyA6IFwiXCJ9YClcclxuICAgICAgICAgICAgOiByb3V0ZXIucHVzaChcIi9naXJpcy15YXBcIik7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBpY29uPVwibGlua1wiXHJcbiAgICAgICAgc2l6ZT1cIjJ4XCJcclxuICAgICAgICBjbGFzc05hbWU9XCJwb3N0X2Jhcl9pY29uXCJcclxuICAgICAgLz5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnRcIjtcclxuaW1wb3J0IENoZXZyb25SaWdodEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHRcIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCIuLi9sb2dvLnBuZ1wiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIGFwcEJhcjoge1xyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFtcIm1hcmdpblwiLCBcIndpZHRoXCJdLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgYXBwQmFyU2hpZnQ6IHtcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoW1wibWFyZ2luXCIsIFwid2lkdGhcIl0sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIGhpZGU6IHtcclxuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gIH0sXHJcbiAgZHJhd2VyOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gIH0sXHJcbiAgZHJhd2VyUGFwZXI6IHtcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICB9LFxyXG4gIGRyYXdlckhlYWRlcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICAgIC8vIG5lY2Vzc2FyeSBmb3IgY29udGVudCB0byBiZSBiZWxvdyBhcHAgYmFyXHJcbiAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhcixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJtYXJnaW5cIiwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICAgIG1hcmdpbkxlZnQ6IC1kcmF3ZXJXaWR0aCxcclxuICB9LFxyXG4gIGNvbnRlbnRTaGlmdDoge1xyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwibWFyZ2luXCIsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gIH0sXHJcbiAgYXZhdGFySW1nOiB7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiNTAlXCIsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgYmFja2dyb3VuZFNpemU6IFwiMTAwJVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjI0cHhcIixcclxuICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICBmbGV4OiBcIm5vbmVcIixcclxuICAgIGhlaWdodDogXCIzMnB4XCIsXHJcbiAgICB3aWR0aDogXCIzMnB4XCIsXHJcbiAgICBtYXJnaW46IFwiMCA4cHhcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluRHJhd2VyKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCB7IHVzZXJDb21tdW5pdGllcywgb2ZNb2RlcmF0b3JzIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlclxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyfVxyXG4gICAgICB2YXJpYW50PVwicGVyc2lzdGVudFwiXHJcbiAgICAgIGFuY2hvcj1cImxlZnRcIlxyXG4gICAgICBvcGVuPXtwcm9wcy5vcGVufVxyXG4gICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgcGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0+XHJcbiAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogXCI3cmVtXCIsIG1hcmdpblJpZ2h0OiBcIjFyZW1cIiB9fSBzcmM9e2xvZ299IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17cHJvcHMub25DbG9zZX0+XHJcbiAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSBcImx0clwiID8gKFxyXG4gICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8Q2hldnJvblJpZ2h0SWNvbiAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJBbmEgU2F5ZmFcIiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAgPGIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxcmVtXCIgfX0+VG9wbHVsdWtsYXLEsW48L2I+XHJcbiAgICAgICAgPERpdmlkZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fSAvPlxyXG4gICAgICAgIHt1c2VyQ29tbXVuaXRpZXMgJiZcclxuICAgICAgICAgIHVzZXJDb21tdW5pdGllcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICB1c2VyQ29tbXVuaXRpZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3QvJHtpdGVtLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9e2l0ZW0ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJJbWd9IHNyYz17aXRlbS5sb2dvUGF0aH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aXRlbS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIDxiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMXJlbVwiIH19PlnDtm5ldHRpxJ9pbiBUb3BsdWx1a2xhcjwvYj5cclxuICAgICAgICA8RGl2aWRlciBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19IC8+XHJcbiAgICAgICAge29mTW9kZXJhdG9ycyAmJlxyXG4gICAgICAgICAgb2ZNb2RlcmF0b3JzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIG9mTW9kZXJhdG9ycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbW9kZXJhdG9yLyR7aXRlbS5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFySW1nfSBzcmM9e2l0ZW0ubG9nb1BhdGh9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2l0ZW0ubmFtZX0gLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9EcmF3ZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uSW1wb3J0YW50SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbkltcG9ydGFudFwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCI7XHJcbmltcG9ydCBFeGl0VG9BcHBJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhpdFRvQXBwXCI7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZVwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCBNb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEF2YXRhciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyByZWFkTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL2xpYi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IGxvZ091dCB9IGZyb20gXCIuLi8uLi9saWIvYXV0aC9hY3Rpb25zXCI7XHJcbmltcG9ydCBDb21ib0JveCBmcm9tIFwiLi4vQXV0b0NvbXBsZXRlXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0VXNlckNvbW11bml0aWVzUmVxdWVzdCxcclxuICBvZk1vZGVyYXRvcnNSZXF1ZXN0LFxyXG59IGZyb20gXCIuLi8uLi9saWIvY29tbXVuaXR5L2FjdGlvbnNcIjtcclxuaW1wb3J0IE1haW5EcmF3ZXIgZnJvbSBcIi4uL0RyYXdlclwiO1xyXG5pbXBvcnQgeyBnZXRDb3VudFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vbGliL25vdGlmaWNhdGlvbnMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgcmVuZGVySW1hZ2UgfSBmcm9tIFwiLi4vUHJvZmlsZUNhcmRcIjtcclxuaW1wb3J0IHsgZ2V0VW5yZWFkc1JlcXVlc3QgfSBmcm9tIFwiLi4vLi4vbGliL21lc3NhZ2VzL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgc2VhcmNoUmVxdWVzdCB9IGZyb20gXCIuLi8uLi9saWIvaG9tZS9hY3Rpb25zXCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCIuLi9sb2dvLnBuZ1wiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIGdyb3c6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgIH0sXHJcbiAgICB3aWR0aDogXCI3cmVtXCIsXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIGFwcEJhcjoge1xyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFtcIm1hcmdpblwiLCBcIndpZHRoXCJdLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgYXBwQmFyU2hpZnQ6IHtcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoW1wibWFyZ2luXCIsIFwid2lkdGhcIl0sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIGhpZGU6IHtcclxuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gIH0sXHJcbiAgZHJhd2VyOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gIH0sXHJcbiAgZHJhd2VyUGFwZXI6IHtcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICB9LFxyXG4gIGRyYXdlckhlYWRlcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICAgIC8vIG5lY2Vzc2FyeSBmb3IgY29udGVudCB0byBiZSBiZWxvdyBhcHAgYmFyXHJcbiAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhcixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJtYXJnaW5cIiwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICAgIG1hcmdpbkxlZnQ6IC1kcmF3ZXJXaWR0aCxcclxuICB9LFxyXG4gIGNvbnRlbnRTaGlmdDoge1xyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwibWFyZ2luXCIsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gIH0sXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2EzOTg5ODI2XCIsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzU5NTM1MzI2XCIsXHJcbiAgICB9LFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWFyY2hJY29uOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgaW5wdXRSb290OiB7XHJcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgfSxcclxuICBpbnB1dElucHV0OiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDApLFxyXG4gICAgLy8gdmVydGljYWwgcGFkZGluZyArIGZvbnQgc2l6ZSBmcm9tIHNlYXJjaEljb25cclxuICAgIHBhZGRpbmdMZWZ0OiBgY2FsYygxZW0gKyAke3RoZW1lLnNwYWNpbmcoNCl9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIndpZHRoXCIpLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIHdpZHRoOiBcIjIwY2hcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWN0aW9uRGVza3RvcDoge1xyXG4gICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbk1vYmlsZToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFByaW1hcnlTZWFyY2hBcHBCYXIocHJvcHMpIHtcclxuICBjb25zdCB7IHVuUmVhZHMsIHVuUmVhZE1lc3NhZ2VzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBkYXRhOiB7IHRva2VuOiBudWxsLCB1c2VyOiBudWxsIH0sXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttb2JpbGVNb3JlQW5jaG9yRWwsIHNldE1vYmlsZU1vcmVBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXJRdWVyeSwgc2V0VXNlclF1ZXJ5XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHJlYWRMb2NhbFN0b3JhZ2UoXCJ1c2VyXCIpO1xyXG4gICAgY29uc3QgdG9rZW4gPSByZWFkTG9jYWxTdG9yYWdlKFwidG9rZW5cIik7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHVzZXIgJiYgdG9rZW4pIHtcclxuICAgICAgY29uc3QgcGF5bG9hZCA9IHsgZGF0YTogeyB1c2VyLCB0b2tlbiB9LCBlcnJvcjogbnVsbCB9O1xyXG4gICAgICBzZXRBdXRoKHBheWxvYWQpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qge1xyXG4gICAgICBnZXRVc2VyQ29tbXVuaXRpZXMsXHJcbiAgICAgIGdldFVuUmVhZHMsXHJcbiAgICAgIG9mTW9kZXJhdG9ycyxcclxuICAgICAgZ2V0VW5SZWFkTWVzc2FnZXMsXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBnZXRVc2VyQ29tbXVuaXRpZXMoKTtcclxuICAgIGdldFVuUmVhZHMoKTtcclxuICAgIGdldFVuUmVhZE1lc3NhZ2VzKCk7XHJcbiAgICB1c2VyICYmIHVzZXIuaXNNb2RlcmF0b3IgJiYgb2ZNb2RlcmF0b3JzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmF3ZXJPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmF3ZXJDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzTWVudU9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICBjb25zdCBpc01vYmlsZU1lbnVPcGVuID0gQm9vbGVhbihtb2JpbGVNb3JlQW5jaG9yRWwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlTWVudU9wZW4gPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE1vYmlsZU1vcmVBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNZW51Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICAgIGhhbmRsZU1vYmlsZU1lbnVDbG9zZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVPcGVuID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gKGNvbW11bml0eSkgPT4ge1xyXG4gICAgY29tbXVuaXR5ICYmIHJvdXRlci5wdXNoKGAvdC8ke2NvbW11bml0eS5zbHVnfWApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGlmICh2YWx1ZXMpIHtcclxuICAgICAgdmFsdWVzLnR5cGUgPT09IFwiY29tbXVuaXR5XCJcclxuICAgICAgICA/IHJvdXRlci5wdXNoKGAvdC8ke3ZhbHVlcy5uYW1lfWApXHJcbiAgICAgICAgOiByb3V0ZXIucHVzaChgLyR7dmFsdWVzLm5hbWV9YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsYXllZFF1ZXJ5ID0gdXNlUmVmKF8uZGVib3VuY2UoKHEpID0+IHByb3BzLnNlYXJjaCh7IHRleHQ6IHEgfSksIDUwMCkpXHJcbiAgICAuY3VycmVudDtcclxuICBjb25zdCBvblNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICBzZXRVc2VyUXVlcnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgZGVsYXllZFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtZW51SWQgPSBcInByaW1hcnktc2VhcmNoLWFjY291bnQtbWVudVwiO1xyXG4gIGNvbnN0IHJlbmRlck1lbnUgPSAoXHJcbiAgICA8TWVudVxyXG4gICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogXCJ0b3BcIiwgaG9yaXpvbnRhbDogXCJyaWdodFwiIH19XHJcbiAgICAgIGlkPXttZW51SWR9XHJcbiAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgIHRyYW5zZm9ybU9yaWdpbj17eyB2ZXJ0aWNhbDogXCJ0b3BcIiwgaG9yaXpvbnRhbDogXCJyaWdodFwiIH19XHJcbiAgICAgIG9wZW49e2lzTWVudU9wZW59XHJcbiAgICAgIG9uQ2xvc2U9e2hhbmRsZU1lbnVDbG9zZX1cclxuICAgID5cclxuICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcC8ke3VzZXIudXNlcm5hbWV9YCl9PlxyXG4gICAgICAgIFByb2ZpbFxyXG4gICAgICA8L01lbnVJdGVtPlxyXG4gICAgICA8TWVudUl0ZW0gb25DbGljaz17cHJvcHMubG9nT3V0fT7Dh8Sxa8SxxZ88L01lbnVJdGVtPlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG1vYmlsZU1lbnVJZCA9IFwicHJpbWFyeS1zZWFyY2gtYWNjb3VudC1tZW51LW1vYmlsZVwiO1xyXG4gIGNvbnN0IHJlbmRlck1vYmlsZU1lbnUgPSAoXHJcbiAgICA8TWVudVxyXG4gICAgICBhbmNob3JFbD17bW9iaWxlTW9yZUFuY2hvckVsfVxyXG4gICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwicmlnaHRcIiB9fVxyXG4gICAgICBpZD17bW9iaWxlTWVudUlkfVxyXG4gICAgICBrZWVwTW91bnRlZFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW49e3sgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwicmlnaHRcIiB9fVxyXG4gICAgICBvcGVuPXtpc01vYmlsZU1lbnVPcGVufVxyXG4gICAgICBvbkNsb3NlPXtoYW5kbGVNb2JpbGVNZW51Q2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIHthdXRoLmRhdGEudG9rZW4gPyAoXHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvY2hhdFwiKX0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93IDQgbmV3IG1haWxzXCIgY29sb3I9XCJpbmhlcml0XCI+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17dW5SZWFkTWVzc2FnZXN9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8TWFpbEljb24gLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxwPk1lc2FqbGFyPC9wPlxyXG4gICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL2JpbGRpcmltbGVyYCl9PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvdyAxMSBuZXcgbm90aWZpY2F0aW9uc1wiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9e3VuUmVhZHMgJiYgdW5SZWFkcy5jb3VudH0gY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPHA+QmlsZGlyaW1sZXI8L3A+XHJcbiAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcC8ke3VzZXIudXNlcm5hbWV9YCl9PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXHJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInByaW1hcnktc2VhcmNoLWFjY291bnQtbWVudVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJfYXZhdGFyXCJcclxuICAgICAgICAgICAgICAgIHNyYz17cmVuZGVySW1hZ2UodXNlci5wcm9maWxlSW1hZ2VQYXRoLCB1c2VyLmdlbmRlcil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8cD5Qcm9maWw8L3A+XHJcbiAgICAgICAgICA8L01lbnVJdGVtPntcIiBcIn1cclxuICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtwcm9wcy5sb2dPdXR9PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICA8RXhpdFRvQXBwSWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxwPsOHxLFrxLHFnzwvcD5cclxuICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2dpcmlzLXlhcFwiKX0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImFjY291bnQgb2YgY3VycmVudCB1c2VyXCJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicHJpbWFyeS1zZWFyY2gtYWNjb3VudC1tZW51XCJcclxuICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxBY2NvdW50Q2lyY2xlIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPHA+R2lyacWfIFlhcDwvcD5cclxuICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIva2F5ZG9sXCIpfT5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiYWNjb3VudCBvZiBjdXJyZW50IHVzZXJcIlxyXG4gICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwcmltYXJ5LXNlYXJjaC1hY2NvdW50LW1lbnVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEFjY291bnRDaXJjbGUgLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8cD5LYXlkb2w8L3A+XHJcbiAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKX1cclxuICAgIDwvTWVudT5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxBcHBCYXJcclxuICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5hcHBCYXIsIHtcclxuICAgICAgICAgIFtjbGFzc2VzLmFwcEJhclNoaWZ0XTogb3BlbixcclxuICAgICAgICB9KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubWVudUJ1dHRvbiwgb3BlbiAmJiBjbGFzc2VzLmhpZGUpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSBzcmM9e2xvZ299IC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJY29ufT5cclxuICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPENvbWJvQm94XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhcmFcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLnNlYXJjaERhdGEgfHwgW119XHJcbiAgICAgICAgICAgICAgbGFiZWxGaWVsZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7YXV0aC5kYXRhLnRva2VuICYmIChcclxuICAgICAgICAgICAgPENvbWJvQm94XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIgfX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVG9wbHVsdWtsYXLEsW5cIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLnVzZXJDb21tdW5pdGllcyB8fCBbXX1cclxuICAgICAgICAgICAgICBsYWJlbEZpZWxkPVwibmFtZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3Jvd30gLz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uRGVza3RvcH0+XHJcbiAgICAgICAgICAgIHthdXRoLmRhdGEudG9rZW4gPyAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvY2hhdFwiKX1cclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3cgNCBuZXcgbWFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXt1blJlYWRNZXNzYWdlc30gY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpbEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2JpbGRpcmltbGVyXCIpfVxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2hvdyAxNyBuZXcgbm90aWZpY2F0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgICAgIGJhZGdlQ29udGVudD17dW5SZWFkcyAmJiB1blJlYWRzLmNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25JbXBvcnRhbnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImFjY291bnQgb2YgY3VycmVudCB1c2VyXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17bWVudUlkfVxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByb2ZpbGVNZW51T3Blbn1cclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl9hdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dXNlci5wcm9maWxlSW1hZ2VQYXRofVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPntcIiBcIn1cclxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIva2F5ZG9sXCIpfVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBLYXlkb2xcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9naXJpcy15YXBcIil9XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBHaXJpxZ8geWFwXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uTW9iaWxlfT5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2hvdyBtb3JlXCJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXttb2JpbGVNZW51SWR9XHJcbiAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1vYmlsZU1lbnVPcGVufVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QmFkZ2VcclxuICAgICAgICAgICAgICAgIGJhZGdlQ29udGVudD17dW5SZWFkcyAmJiB1blJlYWRNZXNzYWdlcyArIHVuUmVhZHMuY291bnR9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1vcmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAge3JlbmRlck1vYmlsZU1lbnV9XHJcbiAgICAgIHtyZW5kZXJNZW51fVxyXG4gICAgICA8TWFpbkRyYXdlclxyXG4gICAgICAgIHVzZXJDb21tdW5pdGllcz17cHJvcHMudXNlckNvbW11bml0aWVzfVxyXG4gICAgICAgIG9mTW9kZXJhdG9ycz17cHJvcHMub3duQ29tbXVuaXRpZXN9XHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVEcmF3ZXJDbG9zZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBsb2dPdXQ6ICgpID0+IGRpc3BhdGNoKGxvZ091dCgpKSxcclxuICBnZXRVc2VyQ29tbXVuaXRpZXM6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJDb21tdW5pdGllc1JlcXVlc3QoKSksXHJcbiAgb2ZNb2RlcmF0b3JzOiAoKSA9PiBkaXNwYXRjaChvZk1vZGVyYXRvcnNSZXF1ZXN0KCkpLFxyXG4gIGdldFVuUmVhZHM6ICgpID0+IGRpc3BhdGNoKGdldENvdW50UmVxdWVzdCgpKSxcclxuICBnZXRVblJlYWRNZXNzYWdlczogKCkgPT4gZGlzcGF0Y2goZ2V0VW5yZWFkc1JlcXVlc3QoKSksXHJcbiAgc2VhcmNoOiAocGF5bG9hZCkgPT4gZGlzcGF0Y2goc2VhcmNoUmVxdWVzdChwYXlsb2FkKSksXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIC8vYXV0aDogc3RhdGUuYXV0aCxcclxuICB1c2VyQ29tbXVuaXRpZXM6IHN0YXRlLnVzZXJDb21tdW5pdGllcy5kYXRhLFxyXG4gIG93bkNvbW11bml0aWVzOiBzdGF0ZS5vZk1vZGVyYXRvcnMuZGF0YSxcclxuICB1blJlYWRzOiBzdGF0ZS51blJlYWRzLmRhdGEsXHJcbiAgdW5SZWFkTWVzc2FnZXM6IHN0YXRlLnVuUmVhZE1lc3NhZ2VzLnVucmVhZHMsXHJcbiAgc2VhcmNoRGF0YTogc3RhdGUuaG9tZS5zZWFyY2gsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoUHJpbWFyeVNlYXJjaEFwcEJhcik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpZ2h0Ym94IGZyb20gXCJyZWFjdC1pbWFnZS1saWdodGJveFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VNb2RhbCh7IGltYWdlVXJsLCBvbkNsb3NlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpZ2h0Ym94XHJcbiAgICAgIG1haW5TcmM9e2ltYWdlVXJsfVxyXG4gICAgICBuZXh0U3JjPXtcIlwifVxyXG4gICAgICBwcmV2U3JjPXtcIlwifVxyXG4gICAgICBvbkNsb3NlUmVxdWVzdD17b25DbG9zZX1cclxuICAgICAgb25Nb3ZlUHJldlJlcXVlc3Q9eygpID0+IHt9fVxyXG4gICAgICBvbk1vdmVOZXh0UmVxdWVzdD17KCkgPT4ge319XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgeyBEaXZpZGVyLCBJY29uLCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgcGFkZGluZ1RvcDogXCIyMHB4XCIsXHJcbiAgfSxcclxuICB0YWdfY2FyZDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgcGFkZGluZzogXCIwIDFyZW1cIixcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvQ2FyZChwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGRlc2NyaXB0aW9uLCBtb2RlcmF0b3JzIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMudGFnX2NhcmR9PlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiY29tX2Rlc2NfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8YiBjbGFzc05hbWU9XCJpbmZvX2NhcmRfdGl0bGVcIj5IYWtraW5kYTwvYj5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29tX2Rlc2NcIj57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiY29tX2Rlc2NfY29udGFpbmVyXCIgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIgfX0+XHJcbiAgICAgICAgICA8YiBjbGFzc05hbWU9XCJpbmZvX2NhcmRfdGl0bGVcIj5Nb2RlcmF0b3JsZXI8L2I+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdyBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiwgZGlzcGxheTogXCJncmlkXCIgfX0+XHJcbiAgICAgICAgICB7bW9kZXJhdG9ycyAmJlxyXG4gICAgICAgICAgICBtb2RlcmF0b3JzLm1hcCgobSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21tdW5pdHlfdGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHttLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19PntgdS8ke20udXNlcm5hbWV9YH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHN0eWxlPXt7IG1hcmdpbjogXCI0cHggMCA0cHggMFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBjaGVlcmlvIGZyb20gXCJjaGVlcmlvXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCI7XHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWFcIjtcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uXCI7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIjtcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290TGluazoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjBweCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4xMikgIWltcG9ydGFudFwiLFxyXG4gIH0sXHJcbiAgbWVkaWE6IHtcclxuICAgIGhlaWdodDogMCxcclxuICAgIHBhZGRpbmdUb3A6IFwiNTYuMjUlXCIsIC8vIDE2OjlcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogXCIxcmVtICFpbXBvcnRhbnRcIixcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogXCIwcHggIWltcG9ydGFudFwiLFxyXG4gICAgbWFyZ2luTGVmdDogXCIwcHggIWltcG9ydGFudFwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgQ09SU19QUk9YWSA9IFwiaHR0cHM6Ly90cmFucXVpbC1jcmFnLTQwNzIyLmhlcm9rdWFwcC5jb20vXCI7XHJcblxyXG5jb25zdCBnZXRQcmV2aWV3RGF0YSA9ICh0YWdzKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gdGFncy5yZWR1Y2UoKHByZXZpZXdEYXRhLCBpdGVtKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGl0ZW0udGFnKSB7XHJcbiAgICAgIGNhc2UgXCJvZzp0aXRsZVwiOlxyXG4gICAgICAgIHByZXZpZXdEYXRhLnRpdGxlID0gaXRlbS52YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm9nOnVybFwiOlxyXG4gICAgICAgIHByZXZpZXdEYXRhLmxpbmsgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwib2c6ZGVzY3JpcHRpb25cIjpcclxuICAgICAgICBwcmV2aWV3RGF0YS5kZXNjcmlwdGlvbiA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJvZzpzaXRlX25hbWVcIjpcclxuICAgICAgICBwcmV2aWV3RGF0YS5zaXRlID0gaXRlbS52YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm9nOmltYWdlXCI6XHJcbiAgICAgICAgcHJldmlld0RhdGEuaW1hZ2UgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByZXZpZXdEYXRhO1xyXG4gIH0sIHt9KTtcclxuXHJcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xyXG59O1xyXG5cclxuY29uc3QgcGFyc2VIVE1MID0gKGh0bWwpID0+IHtcclxuICBjb25zdCAkID0gY2hlZXJpby5sb2FkKGh0bWwpO1xyXG5cclxuICBjb25zdCBtZXRhID0gW107XHJcbiAgJChcImhlYWQgbWV0YVwiKS5tYXAoKGksIGl0ZW0pID0+IHtcclxuICAgIGlmICghaXRlbS5hdHRyaWJzKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGl0ZW0uYXR0cmlicy5wcm9wZXJ0eSB8fCBudWxsO1xyXG4gICAgY29uc3QgY29udGVudCA9IGl0ZW0uYXR0cmlicy5jb250ZW50IHx8IG51bGw7XHJcblxyXG4gICAgaWYgKCFwcm9wZXJ0eSB8fCAhY29udGVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgbWV0YS5wdXNoKHsgdGFnOiBwcm9wZXJ0eSwgdmFsdWU6IGNvbnRlbnQgfSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtZXRhKTtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoVXJsID0gKHVybCkgPT4ge1xyXG4gIHJldHVybiBheGlvcyhDT1JTX1BST1hZICsgdXJsKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuZGF0YSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVcmwgPSAodGV4dCkgPT4ge1xyXG4gIGlmICghdGV4dCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBhLmhyZWYgPSB0ZXh0O1xyXG5cclxuICBjb25zdCB7IHByb3RvY29sLCBob3N0LCBwYXRobmFtZSwgc2VhcmNoLCBoYXNoIH0gPSBhO1xyXG5cclxuICBjb25zdCB1cmwgPSBgJHtwcm90b2NvbH0vLyR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO1xyXG5cclxuICBjb25zdCBpc1NhbWVIb3N0ID0gaG9zdCA9PT0gd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcblxyXG4gIGlmIChpc1NhbWVIb3N0KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIHVybDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmtQcmV2aWV3KHByb3BzKSB7XHJcbiAgY29uc3QgW3ByZXZpZXdEYXRhLCBzZXRQcmV2aWV3RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFVybChwcm9wcy51cmwpXHJcbiAgICAgIC50aGVuKHBhcnNlSFRNTClcclxuICAgICAgLnRoZW4oZ2V0UHJldmlld0RhdGEpXHJcbiAgICAgIC50aGVuKHNldFByZXZpZXdEYXRhKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdExpbmt9PlxyXG4gICAgICA8YSBocmVmPXtwcmV2aWV3RGF0YSAmJiBwcmV2aWV3RGF0YS5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICB7IXByZXZpZXdEYXRhID8gKFxyXG4gICAgICAgICAgICA8U2tlbGV0b25cclxuICAgICAgICAgICAgICBhbmltYXRpb249XCJ3YXZlXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwicmVjdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgICBpbWFnZT17cHJldmlld0RhdGEuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3ByZXZpZXdEYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cHJldmlld0RhdGEgJiYgcHJldmlld0RhdGEuc2l0ZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtwcmV2aWV3RGF0YSAmJiBwcmV2aWV3RGF0YS50aXRsZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICB7IXByZXZpZXdEYXRhID8gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxTa2VsZXRvblxyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb249XCJ3YXZlXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA2IH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIGFuaW1hdGlvbj1cIndhdmVcIiBoZWlnaHQ9ezEwfSB3aWR0aD1cIjgwJVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJldmlld0RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkZXIoeyBvdmVybGF5ID0gdHJ1ZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9e292ZXJsYXkgJiYgXCJvdmVybGF5XCJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlMSBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlMiBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlMyBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlNCBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlNSBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlNiBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlNyBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlOCBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlOSBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlMTAgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTExIHNrLWNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGUxMiBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT0VBQUFEaENBTUFBQUFKYlNKSUFBQUJvVkJNVkVYL2tXYi8vLzlXSXdmL3hwVjBNZ3IvQUFBeWdhRHlsVlZCbU1Rek16SC9sV24veUpmL2tHVXhtTW4valdEL3lwZzZqclQvaUZmL3padEhGd0QxbFZIRmxubE1Hd0JHRmdBdm5jcFdJUURSUmxyUFBVOVBIZ0JMR2dELzlQQnhMZ0QvMjgvLzZ1UC9uM3Y3dVlYeG1sai9xb3RzTGdscElnQllHUUQvMWNmL3VxTC90SnJ1aGwxSEpBZi94YkwvcFlQL3pieGhLQWhHQ0FEK0d3K1VUUy9HYlVsOFBTRzRaRUplSndocU5BcktiMHNmSnlyWWVGTC82K1QveUxiL3ZxZHFNUmVjVWpOcElBYUZSaUJEQUFEdHRZZlNEd1BtRUFOUEpBZW9XanFJU2liSGptVFduWEd3ZGsrZWJVdXhqRzFCUFRlRFV6YlRwbjhTSUNab054ei9nbUwvVzBUL1RUci91NDFDWG13NGRJeEhVMXhVS2hqZDA4LzJjMEw5TEJuYzR1TnlrcWIrd3IvK21wWCtoSUI2SGdhNkZBU2ZHUVcwSWdmL2NsRGNaVVdKSFFZL0pRaWJLUWhnTlF1Qkx3bGdVa1Z2WFV5U2RsNTdUREdHYlZqMnBtMy9VajYyaEY2T1Z6RHF3cDVnbjcrRmQzRGJmMEJMYllkU01TVk9QVG11bVpKclFDN0xhR0t6dWJ5THFiWldnNXVMc3N6RjFOLytQVGlzdnREK1pWK29JS2FNQUFBVTdFbEVRVlI0bk0yZC9VTVRWOWJISnduRWRpWmtUS0xKWmpjRWlGSUNSRURrYlVVRmxTQ3ZTZ1ZCMlZxcnRWcTMrMko5cVR6YnAzYjc5RVczZi9Vekw1bkp6SDA3NTg3Y3dmMyswdFlhY2orY2M4ODU5OXc3ZDdSVThxcGZIaHlkV2hvZkg1NXNOSFJOYnpRbWg4ZkhsNlpHQnkvWGorSGJ0VVIvK3REbzByQ3VGUXA1UnpsTG1xYlovM0Qvb0ZEUTlPR2wwYUZFeDVBVVlYM295ckNMNWxEeDVMQmFvTU5YaHBLeVp5S0VnMk9OdkFVblFpTkFMY3g4WTJ3d2ljRW9KeHlhbUpTQ0MyTk9UZ3lwSHBCYXdzRXh5eFpSNkxxVWhieGlVeW9rSEJ6UHhjUHpJWFBqQ2lGVkVkWW5kQlY0UHFRK29TcnlxQ0VjSEZhSDUwTU9xekdrQ3NJcHl6dVY0cm15dkhWS3dlaGlFOWJIb2tWT2pLem9PaGJiV1dNUzFzZFZ1eWZKV0JpUHlSaUwwT1pMRU05VlhNWVloTWZDRjU4eE91SEVNZkc1akZlT25YQlFPejQraDFHTG1qdWlFZFliaFNUakMwdTVRaU9hcTBZaW5EaDJQcGR4NHBnSWgvVGpkZEN1OHZyUWNSQXVmUkFEdXNvVmxoSW52Tno0VUFaMGxXOWNUcFp3NmdNYTBGV3VJRm1zeWhGT0ZqNHduNjNDWkdLRVE4ZWNBM25LYTBQSkVINTREL1VrNWFsNHd2SC9CZy8xVkJoWFQvaUJZeWlwZkVNeFlUMVdsdGZaaW9lb0k0czRIT0ZReEdXdUE1SnJYWnBkdnpvek43ZnNhczdTelByODdLVldLdzVvTGora2puQXdTb3l4aHQ2NnVENnozRjhwbGNybG1xVjBSL2EvMThyOXBWS2xzakMzUHR2S1JjUE1GVkRMRFF6aHFIU01zVVo4YVg0dVhlb3YrMWdjMVdyOXBkcnkxZGxXRk1yQ3FCckNLVWxBWFcvTno1VkxJRnlRczcreWNQVmlUaG9Ta3pWZ1FqbEFHMjlaaXM2bkxKWG41bHVTa0FoRWtGQUtVTmRtNXlwbGVUcmZsS1c1aTNLTU1DSkVLRE1IOWRaNnJUK0M5Y0tRdGZXV0RDTTRGd0hDUVR5ZzNwb3J4Y1J6VlM3TnlEQkNFVlZNaUFmVVd4c1ZKWHkyYXBVNUNVWUFVVWg0R1F1bzU2NnFzVjhreG9Kd1VTd2lyR01yR1gwKzd2UmpNVjdWa0l5NXZLaUFFeEhxT0VCN0Fxcm1jeGhyczFoRVBScmhKSzdZMXVmVk9taEFhRmZOQzViOWZNSnhGS0N1SldOQVY3VXkwb3g1L25xUlM0aExoSG9yblpRQlhWVm1VSVNDdE1nakhNSUJ6bFlTNWJOVVhzQjVhbUZJa2xERFJCbDlIUXU0c0hEKy9QbFBBckwrYzJFQnlYZ0pnNWpqa3JEL0dCVmw5Qmw0Q2k3WVlEMWNXYWd3WjJVZWc4aUxObXpDS3hnZjFlZjZBVG9SVzRqelBJQzRqa0hrRk9GTVFsUXRvOCtGRnhGcmhPMlFkRDZseUphbHF5aEVabTNESk1Ta2VuMkdXQ1ZkdTNHdWF6dzVPaGl5TklOQVpDZCtGdUVZWWhMcU00U0xucnZSKzVWcnh2T1I4RnhHcnJ1aUVQTmpPRUpNb3REWGlTQno3a2x2NzZwdHhHam02NHJIV01MTVJWYktZQkFpZkZTL1NLU0p0YTk2TFRWajh3a1lNUkdWNWFjMDRRVHNvM3FMeW9NMllPK1RQeXNBNURKV0VIa3hUMitFVTRSMVRCd2xROExmVmgzQ1hoVW10TVdPT2YySTZxWkFMYVFvd2diQ1IrZUlXblR0cVF2WSs3VWlJM0xNdUFELzduUFVmZ1pKaU9oYjZMTkVsRm03MWdIc3ZhQ01zS2VIUVZpYlF4aVI3R21RaElndzB5SnJOU3RSZVBxN09rS1dHVXR3dEtHQ0RVRjRCUkZtU0IrMUU0V25Hd3FOMlBNSmpWaUJwMkwraW9nUUVXYXNKVDNobzkvMEJ2UlBoWVFzeEdYcFlCTW1SRlF6T2FxbEhRVHNYVlZwUkFaaVA1ejRpY29tUklneDRRemhvMTZpU01TSURNUlNTOUtJSVVKRWE0Yk05WDZpOEtRcTYzc2lDUkh4Tk55MENSS0tUT2p0VEMrSFRkaE5GTDRVRTFKV3JGd0VFVU5HREJJS1RLaS9mM0J3c1AvczJWK2J6YlZ6bHRZczJWOFhTQlNlMUdWOURtSWFBZ3diTVVBb25JWFB1Z2dYYnF5dVB2bjY2VGRmTmRmKzlvUUNWSnIxSFpGNXNRd0htNkFSQTRUQ1FLby9vRm1zeU1uNlE1VlozeEZacEZaZ0k0NHhDWVc3RlBvekZneFRTck8rSXpMWWdEMk5YSjVGT0NVT3BQb0ZOS0xhaE5GRFQ4VitNR1BrcHhpRXdtYzlwWXlvTnV2Yk9pOXRSSTBtQkJjVkVrWlVEVWo1YVFteVlXQ0o0Uk1PUTlsZXdvaXFzejdscDNBNHpRK1RoSmlDRFc5RTVZUlV5b0NOV0NjSTRlNk1Qa3NXYUs3b25OL2IrMVJWTzZNckl0YUF1MjUreDhZamhGZSsrdHdhQzNEMUh6My8vUHZYcXpkQ0JsYWZNRWdqZ3Fzb2Z5WGNJVVQwU0Z1VnRhOXB3QXVPdGY1czZaTWdxUEtzVHhxeGNna2FyOWM3MVJEMWpHdkMrWEthWWNSdmdvT3dRWHUrZWZwazlVYmlScXlCUFhDdnJ1a1F3dHVGK3JLMWtxREtVRmJVL01RQlZTOGluRUlEOWxLaWhuWlN1M2xSSmFOTUVpUThoWTNZRHk2aU9tNnFTVGhwdU9sa1MzbDlKbFRZVGNHVmNNZE5OVXpGcHZrZHRtWUlVUFZTRUZCNGpZRjFVdzNwcEpyYllUdTMrcUY4dEljc2JPQ1U2THFwaGt6M0Z6dmJoY0d1eGZIeTljaTc2WVJQT0FrNzZkVk9meVpneEtkY0V3NWNIMGlFTUJ4cndJVndidEluUk5Ta3k5N1A5WTNJWFNNTkRMUXpHeU5KRUJKdUNrZFRqM0FRMFVUMDk3UTlJMTdnbFo0RFBXM1RNSTRTUVpSTitvTWRRa1N1dU9nVHVydTlSREVUME1oR3hzeGtqT0tiYXdrUWh0MTBBWlV2YkVKNHk5Q2ZobW12Z2NoYkFvNXNtMGJHVm5GclFQMWtETHRwQldwbU9KdUptbjFRRmdJTVRNUE9UZ3d2VVZ6YkxHWTZNdHNKVE1ZUVlSbmNhN09QMW1xNGJCanM1ZHRHWkJjejFoVDBBUzFQTmJlVkk0YVNQandSN1l5b29mWU1Md1YzMUN3anNoUEZ5RkhHeUFTbDNsUERibG9HYlhqRklRUTdOSjJpdEd2RUorY1lYejR3c2xrTUExcWVtbEVjVXlVbm90MnQwVkFySjJKTGJTMU5mL2ZJOWFDSCtwNWEzQnhSYXNiUU9NREN6UzVOTmJsODM5RUMrY1VEZmd3bHBkaU1zaFBSSmtRRW1sd1ZJR1FiMERPanl0a1l6b2hndDhZS05SclV6YmRGSFlFS0Uxb3owRFI1Z0k0WnQ1VzVLbEc0UVNQUGoxcUVVaFVOZzNCZzVJaHZRTStNN2V1S1hEVk1XSUw2VWZrbGl4Q3hzSmduVHlkMENRZEdybTlSSVpSaFJsTlZ4QW1OQTN4WXdWcGVhSmhPS1hrNm9VdG84NGtjVkwycmhzWUJidEhrZElzUTNjRUl5dm15Z1pFZThRUWtYWFZEQVdNNG1FS3I0Rnd1cFdFMkxPaUhSaHkrRGF6OWZNYXQ2N0VadzhFVXJHb0tkVTIyS25VMU1ES3czVWJNUDVMUmpNMFlKZ1JQMXhTR05NenlseUtzYkc2Wm5Bd1AyekdlcjhvRzAwRnRWTEx1ZGxTVk4xK1E4U2dHbzJURExUK3F3UWxmbnlYVFllMVRJQUZDak8yYmtSbkRoRFZvcXpRL3BTM0pyaXpzK1gwekZxSER1TjBURVRKTUNGV20rU1VOUHN1bXI1T3h0UCtOVkF4bE1wckcxc2ExS0l6aG9VRHBJaitPSWFRU2ZtVXIralNNYmNqd1VLQ2ozeGJoY0lTRVA3MFYyNFlkUm1OcmUwUVNNandVNkZSR2JoaERTSzRPMDlOdEZUWjBaQmJOTGR1U2VFckNuWUNFYUJIQ2hiZVdKS0VEYWJTM3I2Tk5TZGdRU0lpNVNRM3hmQVVKbUM1blZCSm03TGhUYkc4NWxEQm1lQ2hRYXovWDBCQ1BIMUJsYVZVMW9RMXBGRTJMOHFobkJPQWtmdGxBejlRbUJBRTErbG5ZQkFoZFN0UEczTnplR0xqbWdIYlVZMi8zMkxKZG1TQ0VVcjZPOEZLNkxFMkswTVUwemFJMU0yM1E3ZTJqbzQyTmpldTJObzZPdHQ5c2JoMFJEZ1d0RUMwYi90Y1Jkamd0VU5ObURjais3NXRFZlFVVk5SWWhIRXVwcDRDQWVXakZSa051NFJnQU00c1owWWRwUXFDb3NXSXBuQS9wcFVWTlFHZ2F0NTd2N0R5L1pVUXhzNWw1WVgzNDI5UGNwVXZ4SmhuMmdJWWlLdVBUaEJWK1BqVGJIeTkrYkdseHB5MXZSdlAyb3ZQaDNlZThMeWgrU3JXTVFFS3dMdFZwUW43R045ck9FQjFHNmJMQXZMM3JmWGlINHlVMFlWcE1pS204OVV2VXhRTFQzTXE3K1B4alg5L0tMckdNN21jWFg3QS9UQlBXeEtPM0NNSDFJWU93c3NueFFLTzkyeDNscnFRUnpkT0wzUTkvelA0NzhvUkw4QnFmNGFYOU56bUU1cTNBSUJkUHk4MUU4MFhndzd1M21iK2U0a3VTc0N3dXZhMDFQdHluWWNSU1hoY2pOTWpGVzNLRXhXOERKbHk4emZ5d3VVZHVFZ0ZQSnVSSEViMDJPaCttRjNpRXQySVFtcStDSDJiYjBDQUJRY0pCUkwrVVVkT3NjRUtkY1Z2VlBGeGtmb09SV1NHSEFuUk1DME9JbmplRGtKc3V6SjN1SUo5TEprUWoweVZjZk1YMEVtTnJXcGF3anRpM1lCQnlnMmtncGNtYTBEWmkxd1BZVG1KdVVtTVJFOXI3RnZEZUU0T1EzMDYwRU4yYWhoTXFoQ3JlMmhVWFJGUlpDclV4bkwwbnNQUm1FRmIzdU1NMzJ5OTJkbmQzWG1TaTFON0Y5cXVkM2NYbnQzaDFiNUVLcFVBYnc5ay9CUGVBR1lUcGFYN3RiZGdiYmhGM05lenVXenZEM2JFejJ2UlF4RzJNL0JocUg1OXhIUlMvYm5OR0VtZjVLUGd3STlCQWhGT29zeGlNUzJWajkvVWppVEVOQVVMbkxBWjhub2J5ZlhzbVJpSTBncEwvdU1rWUNVRG9uQmlDMGtXT2RWbE1sSmFwa1hsOXRxc3owcTBRaytHa1lzTE9tU2p3WEJ1TE1NTG1qSEhtUkZpeWlDd25UZmVMYmg3cW5HdUR6aWJTWGYyME1GOXdBVStkSUJIbGZrQ0dOVjFLUXNJcnFQT2wraHpqQjh1N3FmR2FCRHp4V3VwSHNDSXBrQTg3NTB1aE04S013eWEyZDhoR1U0TUNQSEZXaXBCZUc0S0VuVFBDMERsdmV2L1E5VlBKYVJTWDBHaFQ2d3FIVUZDMWVlZThvYW9tZUl3OTZLYTg2cHMzd3JQeHZKUVpaOFNFL2xsOVlCR3Nyek4vZEhWUHprM3BTSFBxakFTaDBXYk5RdkVLMkgvZUFzajU5RWtGVnl1U0hWRXkxSnlTTkNIN0xsRlJuNmFBZk82SlBtM2lxdlpTTnRhOFB0RTE0NmtUTWhia21qQmQ0NDg5OE55VCtOazFSanZSbFh6Q3lKenhKVm1lODB3bzZpWUdubDBETWlMZGJPdjhjUG1EUTFITFVxNEpSVDN2d1BPSFFHbktXaUE2V2xGeTZnUWpSamUvSS82K1JTNkhmdzZZUnloZnVrVVVzK1oyeGQ5N0NqMEhMSFpUblh2bDgzVDh3MUVZR2NZeXF5UzFKZGcvREQzTExYNnFST2ZmNzF2QkZUYjhrOFFHcHQxUmZNTzlONXkvQnh4K0hoKzRJNHBabURvcVk0S05ZVFlhQnB2UnpEUW1RVGNRaEJuQlBqNXhwNExRVFRtRnFTUEVBVERqcm4yTDFsMldyVXpkK2o4SDBFOG83dkcvbjM4V2c3Z1hROWcxcFE4bkJ0UVArbW54Ty91UnpBZXNwNkx1T28rajNoRWpDbnhVOER3Q2ViZUpNT256eWpiWFRjREtwdWcrVnNzd29tUEMzdDd2aEQ5QkVFZlRnaVlHZFQrTjhFWkJYbEhqYUJwYUtCWWY4Q3hWM0hmK3o3N29CeGdaNGVzbHVNdEQ2bzRoNGJzQ3VDbmZSUVNtWW9lRGR0T09rL2JtUko4dmZpcDhReGF2cVUvZkV5Vzg2NnNsZmtYQXRIaVJZVFpja0Rza29qdEJPVUhJK3p0dlJEN0t2M2FBY2RlWEtDWG1oRitTcmxiRkpialp1WGlvRVVZczNuSC8rRURncE9ZV2MyRWYrRzdPaUJuM3RZbTYrOHh1VzBDMVBmRWhxUTVLcjlZOTdXU1lwbmM3MnFUZytKRWdFN3JpRkczTU8vY0U5eWFLRXFLajhrdmhXcUhvWFN2NWZ0SXNtcVo5QkRIajM0MG1pRE5HdThxcjFyemZMYnRvWTkrYktLaHJoQW5SVWY5TFVmWGxoUlQ3c29uOU80M0p4cDJEN2g4SWRyRXlnbFRmSVdRWGJma2xKaUUvWVFnVFlnZFI2S2hlc0dHSUgyWXNRUEJyT1UrVWNPNHY1ZDlCeXpoU1E2a3NSQ3p5RU84S2F2S1h3RnRlMHJ3andydzdhQVZHRkNmRXpxK3pLa29heGJ1c0sxNFArRHZGUmdZQnlDbHB1UGNJQzR5SWVldFJ0YndsaXZ0K1JQWDFvTUYvUUF6am9tbE90NVIvRnpUZmlGQzY2R2psamVpWk50TzRFN1RqUVVOd1V0Wm9nMEhHRWJOYktyalBtMnRFd1FveHBPbWJvcWRtclNSeFY3K3pmL0RndTJkM0doblJNV0t6alh6Wkdlc1pVdEdkN0Z3and1bkMrNTN1aVo5Y3QxT2hlMlJibUQrM3lrQWU5TVJLK0huUnZmcTh2VVJlVTVoV2RmcE54R01ZM2Q5Q2NST3FaRHl4MHFINDNRamNsVEFpWFhpYWZnbGRRQUFBbWpleGdLeDBDTDNmZ3JmRWFFbTg1TGNXeTR6RjloN1dYNWdyZlBBZEpaek5SRUc3amFIS0h1YWVCYVlCaTI5a1hrbExiM0hENzVuaEJCdHNNTzJvdXZJeXdyUHN0Z0Zmb2ozVStWVlN5UUx4cmlCMnh3WWRURDNWcGorVlpqUk1LUU9tR2F0RHpQdWUyTUVHSDB4OWxhZHZ5akVXdC9ha0RKaW1rd1h1blYzczNpbmpLRFNvL3BXak5qYm1HT2IvdkZwcElyT2dKeXBaSU4rN3hsNG95aEpXbTgzUDdwM3MrOWR0ekVhaFlXNTkzOWQzOHQ3YnBoUWsyUTdHdmp1UDZhZkl5dFNYamZlUnBiN1RwMTZmQVhZTERlUE0yZi85dnMvKzZ5ZnZmZGJFZndseG93TCsvWWVzZDFpQ2pRd0M4TjVIcml6Q0U2Zk9DaUFOKzdTYjlYZE85M1UrY1ErUFNEUkxKZDVobVpxaUVCSEwvQkRoRHdGQ1o5Zit0YjJ2YlpCMFJ1YU1lMzZoUy9nRG5yQVM4aldaOTVBeStzT1laWDVYVlpMUWhYUk1hVkY1Kzl4blh2dG5iSUkyUkUvRmF0Qko1ZDRseStpZUFsM2hNRjluRW9ZSVhaQ3pGcVp6WHVGMThHQkdrTkNlaWpqR1VLTk45bjNBZE1wQTEyMDJYemJMSVhScDZEOEtFbWF6OTlaUWpLRzZXL3FkenRSN3ViR2hwcG0yK01TRUxJVUlMVWFvVVdvcjJLU1JmeTgzdGQ3SGhacHE4eS9ackFMQ2JQWXZzQmtEVldtVWQ2dVQwUVlWYXBwdkQ3T0tDTE9IWUdhcytyR0NGMlVBUWpMeGcvMjJhdk5lTnF1TUVEYWpYNVd5VXoyQ3NCN2F5UUNybXVyYVlWWXBZZlpRT0J2OXFqU1hwNVpNU01Kd1FJVkNUZlBIYkZZeFlUYjdvOEJUL1g0M040ekNoS0dlQmhCcUFoNnFrTkR5Vk80M2VqVWIxYmVRSVF3aGlrSk50WG1ZVFlRd3l5OXhLaWhBaURCVW9mS3JtbXFWQUZSSG1EM2tJYnFCaHA4SWtZUUJSSDZ2cHZwWmxwUTZ3dXhobW9ub0JocE91UzFEMkVYazltcXFieWxBbFlRY1JDZlF3SUFJUXI5KzQrVjhGcUJTd214MmpZRm9CeHJRUlhHRWZyaGg5MnFZZ0lvSldZaGxPTWlnQ1MzRUhEZm5NK1pnQW9TTTNMK3Nvd0J4aEtuTFRuWERlclNrV21VQ3FpYTBJaXJ4eGJXckdyTnBFWkV3VmRmejdLWXBtUWVUSXFRUXAyZEZwWm84WVNyVnlMTzI4NXMvc01lam5qQWI3bEQxLzRRZE9Kb3dOVjZnMS9uZWF2QTRDRU1GM01vcjlManhoRlppSkNkaTlVZmVhSklnekw3MW9rMTE1ZC80WVVzUXBvYTA4T1hzbkRDYUdHRzJFMURMemZzU281WWh0SmI5b1pPQ3ZDaVRHS0ViYmFaL1FzYVlLSVNwZjY5MDh4S3hYb0lJQTQ5eG55WC9BRWxvVDBVcEQ0MUFtTHEvNE8yQUNTWmhtTkFtS0JRKy8zeC9mLy9nZ2FNTEhkbi9mbkN3di8vNTU0VUNpakQ3ZGpvdDQ2RlJDRk9wNzEwelZ0ZEVJL0VKLy9CL0Q1aHY5S2IweHo5Z0NBL3hNVFE2WWVwK2N4cVloRUhDUDZINHNJVHY1SWNiZ2RDWmpkVWRJV0F5aEw5RUdXd2t3dFQ5bjFiRWdJa1FmaEZwck5FSVU2bWZqNTN3NTRnampVcVlTdjF5cklTUkhEUW1ZZXFMaDhkRytEQ2FnOFlsRkRLcUpJekRGNU5Rd0tpT01CNWZiRUl1b3lyQ3VId0tDQzFHVnN4UlFuajRTMncrSllTVzN2MmFBT0d2VWZORFdHb0lhVVBHSlZSaVBrZXFDQzI5ZTZpTThHR0UrcE1uaFlTcFZQM25oN0VKKzA0Ky9GbHFoUXRKS2FHbCtydGZmbzFNMk5mMzBXOEtyZWRLTmFHdEx5eFRudXlUSlB5VFJmY2ZWWE12cUNRSWJYM3g3cmQvOVZrMlFSSytmL3dvQ1RwYlNSRTZ1di91UDcvOUVXTDcvY3RIUTBrT0lsRkNSL1g2NEtOSFh6NSsvUHQ3dXo5ak1ka05tdmUvUDM3ODVhTkhnM1dsUVlXcC93Zk93K3lHR2NENGR3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbWFuLTg3MWYwZTVhYzU3ZGJiMzVjMTFmMjdkYWY4NTIzY2FkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9FQUFBRGhDQU1BQUFBSmJTSklBQUFBOEZCTVZFVng0dkQvLy84NHh0azJaNVpVaUtnU0VVbkMrLzlEZFo1bDRPOXQ0ZkE0eXR3MFpaVjA1UEZ5NXZNM2FaZ1FDVVVuUlhOVGhhYmkvZjgyWVpLZDYvUVBCRU1rdzlkYjF1Ylk5dnBkcGI3Si8vODNocXRHZUo4UUFFSTJYNUhMN3ZRUEFEMGhOMmNtV282NHpObXg3dmFGNXZKSmtMTWZWM3VJdk5IdCsvM3Ardnk3OFBjM3I4aERmcUtVNlBOdDErYzNrck0zbnJ4a3VzOW16TjlZbHJNNHU5R0sydVkzcThaYW03ZGt2ZEo4MXVNbWRwUXJqcWdWSmxhbDR1c3ZvTGdqYW9wS29idVR5ZGtxaUtNY1NXNFdLVmNaUEdVVEdFNTZvNzBhUVdnbmZab05BRGdqYTRvcFY0QWdYSDZiMytteGFZRHJBQUFQY0VsRVFWUjRuTlhkZTNmYU9CWUFjR0VuaXcwMlRERVlzZ21QbVlWMGVRUVRDQ0hOWk5MSnRKMXVwOTNwOS84Mks1dVhEWHJjSzhta2UvL2EwejFuMnQrNWtxNGtTNElVY28vaHFOVWQ5K3Yxd1dEZ2VSN3hQUG8vcHZWK2Y5eHRqWWI1Ly9Va3ovLzRxTnVmRG9oRHc2VkIwaEgvUWZ4L2tFRzkzeDNsK1kvSVN6anExZ2VKak1naWtRN3EzYnpTbVlkd05KN1N4TWx0R2FmamVQVnhIa3Jqd2xiZGcyU09xMnlaVmhvVkRydFRiTzRZeW9IWlZCb1U2dk0yNFRqVHJybC9saWxoclc2SWx3VE5aTDFtNkY5bVJqZ2VHT1J0a1FNemlUUWdIUFZwV2NzakhLZHZvRWRxQzBkVDQrbmJoK3RNdFJ1cnBqQlgzOW80YUwyaWNHUysrekhDR1dqTjZqU0V3N3p6dHpkT05mcWp1ckIrS2grSjIycjk1TUt4NHN4TTJlaU9UeXBza1h6cWd5Z2NUNjA3S2duclNqN1A4M2RCRjhJS1JxV21xaUJzb1J0b1RIT2p4YnY1L09MaTRmcmg1V0sraU56RWlRdlhWYWdjZUNFMmdiNVBGdk9MdXplYktBWTBPcDJPWGJ5K1dIaFlwRUlhc2NJV1FTWFE5NlA1QTNXZDdhSm9iNkpjcHRETGVZUkQ0dE9JRlBZeENmUjhkMzZYNGFXRmEyYlF1Wm03S0tUVHoxRTRIQ0NBbnIrNE9OQWRDMk5rSjdoZVlJek9BRlgvTVVMTUVFTjlkOGM4bGpCdXI1MGJqQkhYVWhIQ01TS0JQQjlUbUNTU0d1SC9lVXhMaFF1bmNLQWZQWEI4UEdGc3ZJN2dSbWRxWGppQXQxQi96dlh4aGJZZGxPZHdvdXRCT3lOUU9JSVhDVC9pTlZDSjBMWTdONGcwdXNCSkhFellRclRRT1dNQUJRcnBtUE1PMFZKaDR3MUlDQjlqUEhJaDlFbUV0djNMQTRJSTJxcUNDT0ZBU1FzRkNHbExoVS9LSGNpS0NpQ0V6MlA4aGJpRlFvUjJ1UWp2akpDcUlSZWlnRElmUUVnN1l3VFBvcHdvRlpyTklFUklpUXVEUkprUTBRZEJRSWd3emlLOG9jcjZva1NJR0VVamlBOG10TXMyb3FGS2lHSmhGMTRISTVBUEtLVERqUXNuaW91R1VJZ3A5SGRHaFhiNUJ2NTNpMHUvU0RoRUFHV0ZIaXUwT3pNRVVUU0JFd25CZndQeDMwR0JZS0hkbVNCV2EycEMrR29DT3NxZ2hMWnRnZjhCN2tCRldFY3NsNlJ6TlJWaCtiSUVKL0wzNExoQ3hJcGV1QjdVeUdGbkJjOGl2MmJ3aEloaGxDRGFLRXBJMnltQ3lCdFFPY0loWWxjVVBvNWloY0dzaE9pTG5FVS9SNGpZcy9BZzgyM0ZISGFXOEN6eVJodTJFTFB4aXhsbXNFSTYyTUNKbkVrNFU0anBoTWdVNG9SSkV1RkVabGRrQ3VFK2RBcVJ3aVNKOEw0SUZTSXFJVHFGU09FNmlWQWlzeW95aEpnMlN2d0hIQkFyTE05S0NDS3JuVEtFQ0IreUZpb0k3WXBsSVlnc3p0R2Y5REVmQ0ZIVEdTVWhuZGdnaUl4MmVpUWNvVDd4Z3BlRnlzTDFXQU1tSGkra2pvUUREQkRmU05GQ3UyTlpHT0pSM1Q4VUl2WXRpRW9qeFF1REZZcDROQVUvRk9LT1dmajhyMmpHaEp2UkZFeDB4VUxVTUVNOEYrdFRFTnJGblJCRWRQc2lJV0puSmhGaXk3MlNjRjMwNFVSbktCQmlaak5FcVJzcUNQY2RFVVowcDN3aHJsTEVLME0wVUVXNDc0Z3dZclppWklSVDVIRXVIdzlVRUpadjBrSUFNWnZFdEJDYlFvL2dHNm1DMEs1a2hBQmlKb2xwSVRhRkN2VmVTUmhZRm82WVNXSktpRTJoMGxDcUpGeGlpZWtrcG9USWdSUzEwNjBsN0V4S1NHSjZBcjRYSW1zaFVTc1dTamxjV1ljaEk2WnE0bDZJbTg0a1F0UTJvb2J3OWpDSFVtSnFZck1YNGs4MnY2WlFSblNPaGJoRnhlc0xKY1Q5WjlPZEVMY3VQS213ekJSS2lJTkRJYnBVbkZESXpxR0V1Q3NZV3lGK25IbDlvWkM0RzJ1MlFwVWJNQ2VyRmp5aG1KZ1ZvdlpJVHk0OHJvY0E0bmJ2bENqT1p4TGhxODFwSU1UdHZJYW9Ga1B5aXZOU0lERXRWQ2lHY2J6UzJnSkkzRFRUdFJDOWJ0ckVxNndQb2NSTk15WEtJeWs1MlJyL1VpemtFL2RDcFpHVXFCVkVCZUZNSXVRUjE4MlVxSmI3UkhpYXZUYkJVQ29rcm90K0lsUzQ3WmpFYWZaTHhRT05pRGpZQ3ZGcjMxMkFEczFxQ292U0ZQS0l5VHFZcU5jS292QUZXT1hMakxRYmNvbkpFb3FvVG1qV1F2eXNCdjkxVGQ0TmVjU2tYaENOYmtoTzh2MHdnQUdaUkc4dDFPaUc2TE1tR3QrQVZZaHhSeVRxMVRBUm9wc3AranMrc0pFeWlYRkZKT3JWTUFrMzk3TVljT0F4TWE2SVZEalZBT0tuTlVnaGYvVUxJazRUb2Q0REY5aXhCaXZFK0JqRVdLZ3owQkI4U2NRSmdjV1FTNlJERGRFYWFFamVaeE9GaTE4QWtRNDFwRERXZklZRm1VU1VNSUNYQ2piUkhWT2grb3htSFppckNHZ2hQb1ZaSXAzVkVKWE43bXprZTg1Ymt6aWdRbzA1MnlaUU5SRWpSTlZDTnRHalF2M1hrRkFURzh4OWk0a2lNRVYwQzBTeldLeUppQk9LcURzenlzSWQwUm1TbW9rWG4zSzU5MVJSOSsySlRvMW9sc04xNUhKM1RXa2NQU1E2TGRJMThpcFpEdmNQY1JOU0h0SHRFdDJDdnlWQ0Y0cEFvVkt0WnhEZE1kRmFPNlhqek9CTlo3c00ybjRDRU4wKzBaM1NiTU1EWG5XRzNlWFdHMlZTUkxkdVRBaWR2WUh1NHhzQ3hzUTYwVnIvWmdMMGFBVG9UWVhLMGtRYlRjS1pFdTFwYVlvWUFmb2k0RjJNb21VTWFGa0RrMElRVVNvTWl1WjROSnBHaGNSejlOK25NVkFtY2hSUzRvdmVHMFA2aGY0Z1NvYUZkSm8wMFhrbnFvTFlIWDB0SVhFczViZStna3ZEdkh5RXhDbXRCR2tVdk5kbUcwK2daYjRmcm9tVzljSTE4b1JCTUROWkpQSVZVbUpweWJzUnhYczM4ZEpjbGM5RVpIQk9rd3JYU293c0pFdFlEdkx5eFVKajg5Sk0wSVpLalMrSHo3TXloT1Z5cHpMTHpXZFpqemtKRXlMdFY1UDRpZDAzZkdFUTJKZXJVbjQreTdvM3R6NWtFUzM2ajUrOG5NWElONGZDY2hBRXhkbkV5dFZuaGQ5TnJmRjV4RVM1bkx6Y25hMmZnajRyQmpHdEUxUnVacXRsS1Y5ZUxId202Z2N4d01RWVNTbkw1V1QxOG5JN3U3MWRUWlpXL3JpMWNHeG1yMDFLM0VDMzJKUGcxc0l1VVRuQ3JrdzhmWVF0STN2ZVB6QXhIQkxjSXhIL2Q4VFF5TGVuSDVwSWhibE0yMzRZWWtTRmVaWDhINElZM2h2NGp2OURFOE5uL2JNWThTODhzTVBaUmpPVVI0a1R1c0t1Z2ZNMDdzdjFKdTR1MHZGSHJiV0w3ajdHZFdiTUw5UHg5OXROL0tvNU9Ramo4elJhNWNJbkwwRlEza1JRUER0N3M0dWJmeFZZVWZzSEkvNzU3MS9LKzdCL2JyUzMwZEEwcnMrMXFSK2c5ZWQyVUU2dDlZcnBkUktieUJKU1lHcEZWZm01Y2I2UFJ2V0RSbHVORXFIcVVPUDU3NHFkZytXc25NZ1Fpb0EwZXIrOVZ5V0czM1hPbC9yUlphZHMyMWppc1ZBQ1BEK3Y5ajRxYmdMUWdVYjVqTERudnh6N0lNUWpvUlJJbzkzN1ZhbXBodXN6d2twWGdCZkZnT0VERUErRkVHRGNIVCtwYkthV05pZlowYk1hejM5Z0poQkNyQ2tCYVZQOStnMU5wRE9hdFJEYkVmMklsMEFBc2FZR1ZFcGp1TDF2Z2J4ZjZjOERiZ0xseEpvcWtCSWJUemhpdUwwemcrcUlIcm5tdDFBQXNhWU1wTkY3aTZyL2NUZEUzMTJUdEZBNXNhWUJwSVBxYjRpNkVWZkRqUkMrVitPL2t5WlFRcXpwQU9QYUNDLy80ZjcrSVhocTZsL0FnQUppVFF0STQrdXZZR0poTHdSdTdmdVhIUzRKU3F4cEFtbG4vQWlyL2ttdDJBcEI5Y0lqTjRBdUtDUFdkSUcwTS80SmE2VGRsQkRTVEdGampKUlkwd1pDeDV1d2tCYkttNmtmVllCZFVFeXM2UU1wOFRPQStKZ1JTcHVwSDlsWUlKdFlNd0NrUTJwRFN0dzAwdDNiSmxKZ0dROWtFbXNtZ0pUWWxrN2hDbG1odU9nclpaQk5yQmtCeGtSeEZ0ZmxQaVVVTGhMOVNESVRSUkJyWm9CU1luajR4cEJvYnVyaEJ4aytjV2dJU0lubkl1S2ljQ2pranpXZXF3RThKTDc1anlrZ1hXdDhsbzh6NmZmYXVFQlMxQUVlRXRNbkZmU0E0dEpmT0JieWZuYkZ2OFlWZWdueHloeVFadkV0cDUyR3p3d2g3d0tVOXc0K0dRVVE5MEo5NERsM29SR3kzazNrRmd6L1dxK1Zab2s3b1FGZ201dkMrd0pMeUMwWUxuVEpCQ0Z1aFFhQTV6M2V4YUZVQ2pOdjBQSW1wLzVjdTUzdWlWY0dnUjk0S1h3c3NJWGNKUG8zMmtuY0VhK01BZHRmZU9VdzVMMGp6RTJpRittMzB5M3h5aFNRMzBhdGRBcXpRbjRTRGJUVERmSEtHSkM3dFJqeTMvUG16Ny8xaStLV2VHVUl5QjFITXdQcGtWQ3dONncxYzBzUnI4cEdnRlgrakMwVXZhdlAvejA1YjJHZ0s4YkVLeVBBOHg1M2ViaGJOckdGL1BORFJyb2lKVjRaQVg0VjdPOFh4RUwrRXNPL00wR3MvTlEyQUd6OHpnV0doNys3ZXZ3N005ekZ2by9hVE9RS3EvcEFmaVcwck9ZaDZFZ29XdXhyTHFOTUNkdWZ1TDZEU3NFVUNuNDN6MVBkclRFcnJGYjU5OWdQaHhtbVVIQlkwWSswMjZtK1VMekxkc3hoQ0FWZm92eUY3bWlqTCt5dCtNQVE5cnRyb3Q5MzFDWnFDMFZmMXc1bU0zeWhhTi9OMTF6eDZ3ckZudzlaR0taUU5KNXFFdldFNHUranJEYksreDFTMFNVTWY2RXozR2dKcTIxQkgwenZQc21Gd205Ui9rTHBHNGErc0NIK1ZoR3hLYnhmUEJhZGIvZWJGZVUwYWdqYm44UmZLamdTbmxENEhjTnJYcWtTMVlXOUx5SWVweE1LaE9LSGFiM21USEc4VVJaKzVVKzJFeUQ2ZDdrbHYzcnNPYmRxNjBWRllaVy9aN0VHc2lxaFRDZytPK3cxbDBxcmZqVmgrN1A0ZTJqSUdXVWtRdkZ0R3E5cFhTcDhWVlFTeWc5N0NSUWk0VkFrcE1UU0NsODJGSVR0dHV6QVhzajVXWFdwVUhJYWpHYlJZaHlFTmkyVUo1QTdqTXFGa2lNYWxFalRpS3NiV0tFOGdjZjdGaGdoZ0loTUkwNVk3ZjB0UFc0cEFjcUVjcUpWbWh6ZVNUQWxyUFkraWVhaEd5QjdOZ29YU3A2a1Q0aWwyd3A0VkVVSUcrZFA4aU42VXFCY0NDRFNoblJyQTdzaldOaG8vd1U0RHl3SEFvUVFZbXlFemNaaHdtcWpDdkVKNW1vb0lhQXZib3lBTVFjaWJQUisrd0E2enkwYlpNQkNHSkgyeDlWTlI5WWg1Y0wyMXkvdmdVZGtJVUNZa001dXhIUFU3ZDlaV3M0a2c0NUUyTzVWZjE4Q0x3QWRiLzVxQ0F0RC9tWi9oa2diVjVKSXJsSWtiRGUrZm55Q1h6Y1FUZFh3UXJyU0VLOFhVMzh6UlY3YUhjNjR3eE5XMjczMjJ5ZjRReWZoMGZjSmJhRmt2ZGpNL1AwbGF6S3JkQUpHZzJVSnEyMDZ0bng3ajNuSEpYUGF3cFJRUE40Y0VPTUhQcGFyV2JGOHlNd0txMjJLYS8vNTdRbjVqZ3VnREtvSUN5TlAwQmtQaVd1bVJaazNsZmc5bXFDYzNCZTJmMnBYazF1K2pVYXYxLzc4OGR2VHhNTGUyUTR0NFdKQ1ExZ28xQVZwWkJFMzJiU1drOVh0N2V6eTh1YXErTjgvdjN6OCtQZTN2ejQ4dlY4dWxlNmppeGIwMmtMaC9JWkhUSmlXc2J2Mm1CYXFJQ3lNQm55amlHZ3FjQzFVUlNnNHJuRUtvbUJQelp4UWxNYWNpYUVGbXFkcEMrTWIvTHhCTlZjaTR4TjJYc0xDa0R2RHlZOFlObUh6VUROQ1d2NDlqakVuWW1nQmxvSkdoZnltbWdjeFZHdWdtc0o0cHNvMG1pZUdqOEIxaEdsaFlWaG5HZzBUdzBpdEE1b1E4b3dtaWVHamxrOWJXSWhQM1I2UE9hYUlvYmJQaEpDT09lUW9rVWFJZEh6UjZIL2JNQ0drdFdONmFOUW1obUZUdFQ1a3c0eVFkc2l4bDBYcUVjUHdIanZENW9VcElZMWFQNE5VSjlMZXB6RC81SVZCWVNGR3BycWtFakUweXl1WUZ0SVlqUWZPUm9rbWhtSHAzaXl2a0lNd2psWi80RHAwVW9jZzB0eFpqOC9hcFlFUnVRamphSTNyWHZ5Z0lNUVdodEgzYmg2Nk9ISVRKakhxZm0rdUNjZlN6UjgzNzU5end5V1JyekNKWWF2YmZmNStmLzhZTmRlYlQ2VlNNM3E4Ly80ODdvNE1WSFJaL0E4aTNYNXExOHloVEFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FZGl0XCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVPdXRsaW5lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlT3V0bGluZVwiO1xyXG5pbXBvcnQgSGlnaGxpZ2h0T2ZmSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hpZ2hsaWdodE9mZlwiO1xyXG5pbXBvcnQgdXNlckljb24gZnJvbSBcIi4vaW1hZ2VzL3VzZXIucG5nXCI7XHJcbmltcG9ydCBnaXJsSWNvbiBmcm9tIFwiLi9pbWFnZXMvZ2lybC5wbmdcIjtcclxuaW1wb3J0IG1hbkljb24gZnJvbSBcIi4vaW1hZ2VzL21hbi5wbmdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJJbWFnZSA9IChpbWFnZSwgZ2VuZGVyKSA9PiB7XHJcbiAgaWYgKCFpbWFnZSkge1xyXG4gICAgc3dpdGNoIChnZW5kZXIpIHtcclxuICAgICAgY2FzZSBcIkVcIjpcclxuICAgICAgICByZXR1cm4gbWFuSWNvbjtcclxuICAgICAgY2FzZSBcIktcIjpcclxuICAgICAgICByZXR1cm4gZ2lybEljb247XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHVzZXJJY29uO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gaW1hZ2U7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZUNhcmQoeyBpbWcsIHVzZXJuYW1lLCBnZW5kZXIsIGJpbywgb25TdWJtaXQsIHByZXZpZXdMb2dvVXJsIH0pIHtcclxuICBjb25zdCBbaXNFZGl0LCBzZXRFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoeyBwcm9maWxlSW1hZ2U6IFwiXCIsIGJpbzogXCJcIiB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBpbnB1dCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBpbWFnZUZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zdCBuZXdWYWx1ZXMgPSB7fTtcclxuICAgIG5ld1ZhbHVlcy5wcm9maWxlSW1hZ2UgPSBpbWFnZUZpbGU7XHJcbiAgICBvblN1Ym1pdChuZXdWYWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJpb0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdWYWx1ZXMgPSB7IC4uLnZhbHVlcyB9O1xyXG4gICAgbmV3VmFsdWVzLmJpbyA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0VmFsdWVzKG5ld1ZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmlvU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYmlvID0gdmFsdWVzLmJpbztcclxuICAgIG9uU3VibWl0KHsgYmlvIH0pO1xyXG4gICAgc2V0RWRpdChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhc2lkZSBjbGFzcz1cInByb2ZpbGUtY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWFzay1zaGFkb3dcIj48L2Rpdj5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e3JlbmRlckltYWdlKGltZywgZ2VuZGVyKX1cclxuICAgICAgICAgICAgYWx0PVwicHJldmlld1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2VcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfaWNvblwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm15SW5wdXRcIj5cclxuICAgICAgICAgICAgICA8RWRpdEljb24gY2xhc3NOYW1lPVwicHJvZmlsZV9lZGl0X2ljb25cIiAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cIm15SW5wdXRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgdHlwZT17XCJmaWxlXCJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCB7IG5hbWU6IFwiZmlsZVwiIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19Pnt1c2VybmFtZX08L2gxPlxyXG4gICAgICAgIHsvKiAgPGgyPldFQiBERVNJR05FUjwvaDI+ICovfVxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9maWxlLWJpb1wiPlxyXG4gICAgICAgIHtpc0VkaXQgPyAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1tdWx0aWxpbmUtc3RhdGljXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cImJpb1wiXHJcbiAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUJpb0NoYW5nZX1cclxuICAgICAgICAgICAgICBuYW1lPVwiYmlvXCJcclxuICAgICAgICAgICAgICByb3dzPXs2fVxyXG4gICAgICAgICAgICAgIHJvd3NNYXg9ezZ9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtiaW99XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEhpZ2hsaWdodE9mZkljb25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEVkaXQoIWlzRWRpdCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZV9pY29uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxDaGVja0NpcmNsZU91dGxpbmVJY29uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCaW9TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja19pY29uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD5cIntiaW99XCI8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9pY29uXCI+XHJcbiAgICAgICAgICAgICAgPEVkaXRJY29uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KCFpc0VkaXQpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZmlsZV9lZGl0X2ljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FzaWRlPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGFyZUJ1dHRvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZS1idXR0b25cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZS1idXR0b25fX2JhY2tcIj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2hhcmVfX2xpbmtcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2hvbWVcIlxyXG4gICAgICAgICAgdGl0bGU9XCJ0d2l0dGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYXJlX19pY29uIHNoYXJlX19pY29uLS10d2l0dGVyXCJcclxuICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbiAgICAgICAgICAgIHg9XCIwcHhcIlxyXG4gICAgICAgICAgICB5PVwiMHB4XCJcclxuICAgICAgICAgICAgd2lkdGg9XCI0OS42NTJweFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjQ5LjY1MnB4XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0OS42NTIgNDkuNjUyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZW5hYmxlQmFja2dyb3VuZDogXCJuZXcgMCAwIDQ5LjY1MiA0OS42NTJcIiB9fVxyXG4gICAgICAgICAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI0LjgyNiwwQzExLjEzNywwLDAsMTEuMTM3LDAsMjQuODI2YzAsMTMuNjg4LDExLjEzNywyNC44MjYsMjQuODI2LDI0LjgyNmMxMy42ODgsMCwyNC44MjYtMTEuMTM4LDI0LjgyNi0yNC44MjYgICAgQzQ5LjY1MiwxMS4xMzcsMzguNTE2LDAsMjQuODI2LDB6IE0zNS45MDEsMTkuMTQ0YzAuMDExLDAuMjQ2LDAuMDE3LDAuNDk0LDAuMDE3LDAuNzQyYzAsNy41NTEtNS43NDYsMTYuMjU1LTE2LjI1OSwxNi4yNTUgICAgYy0zLjIyNywwLTYuMjMxLTAuOTQzLTguNzU5LTIuNTY1YzAuNDQ3LDAuMDUzLDAuOTAyLDAuMDgsMS4zNjMsMC4wOGMyLjY3OCwwLDUuMTQxLTAuOTE0LDcuMDk3LTIuNDQ2ICAgIGMtMi41LTAuMDQ2LTQuNjExLTEuNjk4LTUuMzM4LTMuOTY5YzAuMzQ4LDAuMDY2LDAuNzA3LDAuMTAzLDEuMDc0LDAuMTAzYzAuNTIxLDAsMS4wMjctMC4wNjgsMS41MDYtMC4xOTkgICAgYy0yLjYxNC0wLjUyNC00LjU4My0yLjgzMy00LjU4My01LjYwM2MwLTAuMDI0LDAtMC4wNDksMC4wMDEtMC4wNzJjMC43NywwLjQyNywxLjY1MSwwLjY4NSwyLjU4NywwLjcxNCAgICBjLTEuNTMyLTEuMDIzLTIuNTQxLTIuNzczLTIuNTQxLTQuNzU1YzAtMS4wNDgsMC4yODEtMi4wMywwLjc3My0yLjg3NGMyLjgxNywzLjQ1OCw3LjAyOSw1LjczMiwxMS43NzcsNS45NzIgICAgYy0wLjA5OC0wLjQxOS0wLjE0Ny0wLjg1NC0wLjE0Ny0xLjMwM2MwLTMuMTU1LDIuNTU4LTUuNzE0LDUuNzEzLTUuNzE0YzEuNjQ0LDAsMy4xMjcsMC42OTQsNC4xNzEsMS44MDQgICAgYzEuMzAzLTAuMjU2LDIuNTIzLTAuNzMsMy42My0xLjM4N2MtMC40MywxLjMzNS0xLjMzMywyLjQ1NC0yLjUxNiwzLjE2MmMxLjE1Ny0wLjEzOCwyLjI2MS0wLjQ0NCwzLjI4Mi0wLjg5OSAgICBDMzcuOTg3LDE3LjMzNCwzNy4wMTgsMTguMzQxLDM1LjkwMSwxOS4xNDR6XCIgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2hhcmVfX2xpbmsgXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1wiXHJcbiAgICAgICAgICB0aXRsZT1cImZhY2Vib29rXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYXJlX19pY29uIHNoYXJlX19pY29uLS1mYWNlYm9va1wiXHJcbiAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG4gICAgICAgICAgICB4PVwiMHB4XCJcclxuICAgICAgICAgICAgeT1cIjBweFwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNDkuNjUycHhcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI0OS42NTJweFwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDkuNjUyIDQ5LjY1MlwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGVuYWJsZUJhY2tncm91bmQ6IFwibmV3IDAgMCA0OS42NTIgNDkuNjUyXCIgfX1cclxuICAgICAgICAgICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNC44MjYsMEMxMS4xMzcsMCwwLDExLjEzNywwLDI0LjgyNmMwLDEzLjY4OCwxMS4xMzcsMjQuODI2LDI0LjgyNiwyNC44MjZjMTMuNjg4LDAsMjQuODI2LTExLjEzOCwyNC44MjYtMjQuODI2ICAgIEM0OS42NTIsMTEuMTM3LDM4LjUxNiwwLDI0LjgyNiwweiBNMzEsMjUuN2gtNC4wMzljMCw2LjQ1MywwLDE0LjM5NiwwLDE0LjM5NmgtNS45ODVjMCwwLDAtNy44NjYsMC0xNC4zOTZoLTIuODQ1di01LjA4OGgyLjg0NSAgICB2LTMuMjkxYzAtMi4zNTcsMS4xMi02LjA0LDYuMDQtNi4wNGw0LjQzNSwwLjAxN3Y0LjkzOWMwLDAtMi42OTUsMC0zLjIxOSwwYy0wLjUyNCwwLTEuMjY5LDAuMjYyLTEuMjY5LDEuMzg2djIuOTloNC41NkwzMSwyNS43eiAgICBcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaGFyZV9fbGlua1wiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbVwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgdGl0bGU9XCJnb29nbGUgcGx1c1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFyZV9faWNvbiBzaGFyZV9faWNvbi0tZ29vZ2xlXCJcclxuICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbiAgICAgICAgICAgIHg9XCIwcHhcIlxyXG4gICAgICAgICAgICB5PVwiMHB4XCJcclxuICAgICAgICAgICAgd2lkdGg9XCI0OS42NTJweFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjQ5LjY1MnB4XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0OS42NTIgNDkuNjUyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZW5hYmxlQmFja2dyb3VuZDogXCJuZXcgMCAwIDQ5LjY1MiA0OS42NTJcIiB9fVxyXG4gICAgICAgICAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMS41LDI4Ljk0Yy0wLjE2MS0wLjEwNy0wLjMyNi0wLjIyMy0wLjQ5OS0wLjM0Yy0wLjUwMy0wLjE1NC0xLjAzNy0wLjIzNC0xLjU4NC0wLjI0MWgtMC4wNjYgICAgIGMtMi41MTQsMC00LjcxOCwxLjUyMS00LjcxOCwzLjI1N2MwLDEuODksMS44ODksMy4zNjcsNC4yOTksMy4zNjdjMy4xNzksMCw0Ljc5LTEuMDk4LDQuNzktMy4yNTggICAgIGMwLTAuMjA0LTAuMDI0LTAuNDE2LTAuMDc1LTAuNjI5QzIzLjQzMiwzMC4yNTgsMjIuNjYzLDI5LjczNSwyMS41LDI4Ljk0elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTkuNzE5LDIyLjM1MmMwLjAwMiwwLDAuMDAyLDAsMC4wMDIsMGMwLjYwMSwwLDEuMTA4LTAuMjM3LDEuNTAxLTAuNjg3YzAuNjE2LTAuNzAyLDAuODg5LTEuODU0LDAuNzI3LTMuMDc3ICAgICBjLTAuMjg1LTIuMTg2LTEuODQ4LTQuMDA2LTMuNDc5LTQuMDUzbC0wLjA2NS0wLjAwMmMtMC41NzcsMC0xLjA5MiwwLjIzOC0xLjQ4MywwLjY4NmMtMC42MDcsMC42OTMtMC44NjQsMS43OTEtMC43MDUsMy4wMTIgICAgIGMwLjI4NiwyLjE4NCwxLjg4Miw0LjA3MSwzLjQ3OSw0LjEyMUgxOS43MTlMMTkuNzE5LDIyLjM1MnpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI0LjgyNiwwQzExLjEzNywwLDAsMTEuMTM3LDAsMjQuODI2YzAsMTMuNjg4LDExLjEzNywyNC44MjYsMjQuODI2LDI0LjgyNmMxMy42ODgsMCwyNC44MjYtMTEuMTM4LDI0LjgyNi0yNC44MjYgICAgIEM0OS42NTIsMTEuMTM3LDM4LjUxNiwwLDI0LjgyNiwweiBNMjEuOTY0LDM2LjkxNWMtMC45MzgsMC4yNzEtMS45NTMsMC40MDgtMy4wMTgsMC40MDhjLTEuMTg2LDAtMi4zMjYtMC4xMzYtMy4zODktMC40MDUgICAgIGMtMi4wNTctMC41MTktMy41NzctMS41MDMtNC4yODctMi43NzFjLTAuMzA2LTAuNTQ4LTAuNDYxLTEuMTMyLTAuNDYxLTEuNzM3YzAtMC42MjMsMC4xNDktMS4yNTUsMC40NDMtMS44ODEgICAgIGMxLjEyNy0yLjQwMiw0LjA5OC00LjAxOCw3LjM4OS00LjAxOGMwLjAzMywwLDAuMDY0LDAsMC4wOTQsMGMtMC4yNjctMC40NzEtMC4zOTYtMC45NTktMC4zOTYtMS40NzIgICAgIGMwLTAuMjU1LDAuMDM0LTAuNTE1LDAuMTAyLTAuNzhjLTMuNDUyLTAuMDc4LTYuMDM1LTIuNjA2LTYuMDM1LTUuOTM5YzAtMi4zNTMsMS44ODEtNC42NDYsNC41NzEtNS41NzIgICAgIGMwLjgwNS0wLjI3OCwxLjYyNi0wLjQyLDIuNDMzLTAuNDJoNy4zODJjMC4yNTEsMCwwLjQ3NCwwLjE2MywwLjU1MiwwLjQwMmMwLjA3OCwwLjIzOC0wLjAwOCwwLjUtMC4yMTEsMC42NDdsLTEuNjUxLDEuMTk1ICAgICBjLTAuMDk5LDAuMDctMC4yMTgsMC4xMDgtMC4zNDEsMC4xMDhIMjQuNTVjMC43NjMsMC45MTUsMS4yMSwyLjIyLDEuMjEsMy42ODVjMCwxLjYxNy0wLjgxOCwzLjE0Ni0yLjMwNyw0LjMxMSAgICAgYy0xLjE1LDAuODk2LTEuMTk1LDEuMTQzLTEuMTk1LDEuNjU0YzAuMDE0LDAuMjgxLDAuODE1LDEuMTk4LDEuNjk5LDEuODIzYzIuMDU5LDEuNDU2LDIuODI1LDIuODg1LDIuODI1LDUuMjY5ICAgICBDMjYuNzgxLDMzLjkxMywyNC44OSwzNi4wNjUsMjEuOTY0LDM2LjkxNXogTTM4LjYzNSwyNC4yNTNjMCwwLjMyLTAuMjYxLDAuNTgtMC41OCwwLjU4SDMzLjg2djQuMTk3ICAgICBjMCwwLjMyLTAuMjYxLDAuNTgtMC41NzgsMC41OGgtMS4xOTVjLTAuMzIyLDAtMC41ODItMC4yNi0wLjU4Mi0wLjU4di00LjE5N2gtNC4xOTJjLTAuMzIsMC0wLjU4LTAuMjU4LTAuNTgtMC41OFYyMy4wNiAgICAgYzAtMC4zMiwwLjI2LTAuNTgyLDAuNTgtMC41ODJoNC4xOTJ2LTQuMTkzYzAtMC4zMjEsMC4yNi0wLjU4LDAuNTgyLTAuNThoMS4xOTVjMC4zMTcsMCwwLjU3OCwwLjI1OSwwLjU3OCwwLjU4djQuMTkzaDQuMTk0ICAgICBjMC4zMTksMCwwLjU4LDAuMjYsMC41OCwwLjU4VjI0LjI1M3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZS1idXR0b25fX2Zyb250XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic2hhcmUtYnV0dG9uX190ZXh0XCI+UGF5bGHFnzwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXJcIjtcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSBcInJlYWN0LXBsYXllclwiO1xyXG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBcIm1vbWVudC9sb2NhbGUvdHJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBNREJJY29uIH0gZnJvbSBcIm1kYnJlYWN0XCI7XHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvblwiO1xyXG5pbXBvcnQgTGlua1ByZXZpZXcgZnJvbSBcIi4uL0xpbmtQcmV2aWV3XCI7XHJcbmltcG9ydCB7IHJlYWRMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vbGliL2hlbHBlcnNcIjtcclxuaW1wb3J0IFBvc3RNZW51IGZyb20gXCIuLi9wb3N0TWVudVwiO1xyXG5pbXBvcnQge1xyXG4gIGRlbGV0ZVBvc3RSZXF1ZXN0LFxyXG4gIGRlbGV0ZU1vZGVyYXRvclJlcXVlc3QsXHJcbn0gZnJvbSBcIi4uLy4uL2xpYi9wb3N0cy9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IERlbGV0ZUNvbW1lbnRQb3AgZnJvbSBcIi4uL0NvbW1lbnRMaXN0L2NvbXBvbmVudHMvZGVsZXRlQ29tbWVudFBvcFwiO1xyXG5pbXBvcnQgSW1hZ2VNb2RhbCBmcm9tIFwiLi4vSW1hZ2VNb2RhbFwiO1xyXG5pbXBvcnQgU2hhcmVCdXR0b24gZnJvbSBcIi4uL1NoYXJlQnV0dG9uXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIG1lZGlhOiB7XHJcbiAgICBoZWlnaHQ6IDAsXHJcbiAgICBwYWRkaW5nVG9wOiBcIjU2LjI1JVwiLCAvLyAxNjo5XHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb250YWluXCIsXHJcbiAgfSxcclxuICBleHBhbmQ6IHtcclxuICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMGRlZylcIixcclxuICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwidHJhbnNmb3JtXCIsIHtcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXN0LFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBleHBhbmRPcGVuOiB7XHJcbiAgICB0cmFuc2Zvcm06IFwicm90YXRlKDE4MGRlZylcIixcclxuICB9LFxyXG4gIHBvc3RJbWFnZToge1xyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcclxuICAgIG1heEhlaWdodDogXCI1MTJweFwiLFxyXG4gICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgbGVmdFNpZGU6IHtcclxuICAgIHdpZHRoOiBcIjQ4cHhcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZWRlYmViY2NcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBTb2NpYWxDYXJkKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BvcHVwQW5jaG9yLCBzZXRQb3B1cEFuY2hvcl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgbW9tZW50LmxvY2FsZSgpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBpZCxcclxuICAgIGltZyxcclxuICAgIGNyZWF0ZWREYXRlLFxyXG4gICAgY29udGVudCxcclxuICAgIHBTbHVnLFxyXG4gICAgY29udGVudFR5cGUsXHJcbiAgICBjb21tdW5pdHksXHJcbiAgICBjb21tZW50cyxcclxuICAgIHVzZXIsXHJcbiAgICBsaW5rVXJsLFxyXG4gICAgdm90ZUNvdW50LFxyXG4gICAgdXNlclBvc3RWb3RlLFxyXG4gICAgb25Wb3RlLFxyXG4gICAgcHJvZmlsZVBvc3RzLFxyXG4gICAgaXNNb2RlcmF0b3IsXHJcbiAgICBhdXRoLFxyXG4gICAgcGFnZU51bWJlcixcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVZvdGUgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlcyA9IHsgcG9zdElkOiBpZCwgdmFsdWUsIHBhZ2VOdW1iZXIgfTtcclxuICAgIG9uVm90ZSh2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlck1lZGlhID0gKCkgPT4ge1xyXG4gICAgaWYgKGNvbnRlbnRUeXBlID09IDUwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rUHJldmlld19jb250YWluZXJcIj5cclxuICAgICAgICAgIDxMaW5rUHJldmlldyB1cmw9e2xpbmtVcmx9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29udGVudFR5cGUgPT0gMjApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllci13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8UmVhY3RQbGF5ZXIgY2xhc3NOYW1lPVwicmVhY3QtcGxheWVyXCIgY29udHJvbHMgdXJsPXtpbWd9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N0SW1hZ2V9XHJcbiAgICAgICAgICAgIHNyYz17aW1nfVxyXG4gICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgICAgICA8SW1hZ2VNb2RhbCBpbWFnZVVybD17aW1nfSBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VQb3B1cCA9ICgpID0+IHtcclxuICAgIHNldFBvcHVwQW5jaG9yKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFBvcHVwQW5jaG9yKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlUG9zdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGVsZXRlUG9zdCB9ID0gcHJvcHM7XHJcbiAgICBkZWxldGVQb3N0KHsgaWQgfSk7XHJcbiAgICBzZXRQb3B1cEFuY2hvcihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EZWxldGVNb2RlcmF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG1vZGVyYXRvckRlbGV0ZSwgcGFnZUR0byB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICBzbHVnOiBjb21tdW5pdHkuc2x1ZyxcclxuICAgICAgcG9zdElkOiBpZCxcclxuICAgICAgcGFnZU51bWJlcjogcGFnZUR0by5wYWdlTnVtYmVyLFxyXG4gICAgICBwYWdlU2l6ZTogcGFnZUR0by5wYWdlU2l6ZSxcclxuICAgIH07XHJcbiAgICBtb2RlcmF0b3JEZWxldGUocGF5bG9hZCk7XHJcbiAgICBzZXRQb3B1cEFuY2hvcihudWxsKTtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICAgICFwcm9maWxlUG9zdHMgJiYgeyB0aXRsZTogXCLFnmlrYXlldCBFdFwiLCBvbkNsaWNrOiBoYW5kbGVDbG9zZSB9LFxyXG4gICAgcHJvZmlsZVBvc3RzID8geyB0aXRsZTogXCJTaWxcIiwgb25DbGljazogb25EZWxldGVDbGljayB9IDogbnVsbCxcclxuICBdO1xyXG5cclxuICBjb25zdCBtb2RlcmF0b3JJdGVtcyA9IFtcclxuICAgIHsgdGl0bGU6IFwixZ5pa2F5ZXQgRXRcIiwgb25DbGljazogaGFuZGxlQ2xvc2UgfSxcclxuICAgIHsgdGl0bGU6IFwiU2lsXCIsIG9uQ2xpY2s6IG9uRGVsZXRlQ2xpY2sgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBjYWxjdWxhdGVTYWxsYW1hQ291bnQgPSAoY29tbWVudHMpID0+IHtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBpZiAoY29tbWVudHMgJiYgY29tbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb21tZW50cy5tYXAoKHgpID0+IChjb3VudCArPSB4LnJlcGx5Q291bnQpKTtcclxuICAgICAgY291bnQgKz0gY29tbWVudHMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJwb3N0X2NhcmRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGVmdFNpZGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZV9jb250XCI+XHJcbiAgICAgICAgICA8TURCSWNvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIHVzZXJQb3N0Vm90ZSAmJiB1c2VyUG9zdFZvdGUudmFsdWUgPT0gMVxyXG4gICAgICAgICAgICAgICAgPyBcImFuZ2xlLWRvdWJsZS11cF9jaGVja2VkXCJcclxuICAgICAgICAgICAgICAgIDogXCJhbmdsZS1kb3VibGUtdXBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGljb249XCJhbmdsZS1kb3VibGUtdXBcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZWFkTG9jYWxTdG9yYWdlKFwidG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgICAgID8gaGFuZGxlVm90ZSh1c2VyUG9zdFZvdGUgJiYgdXNlclBvc3RWb3RlLnZhbHVlID09IDEgPyAwIDogMSlcclxuICAgICAgICAgICAgICAgIDogcm91dGVyLnB1c2goXCIvZ2lyaXMteWFwXCIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZvdGVcIj57dm90ZUNvdW50fTwvcD5cclxuICAgICAgICAgIDxNREJJY29uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgdXNlclBvc3RWb3RlICYmIHVzZXJQb3N0Vm90ZS52YWx1ZSA9PSAtMVxyXG4gICAgICAgICAgICAgICAgPyBcImFuZ2xlLWRvdWJsZS1kb3duX2NoZWNrZWRcIlxyXG4gICAgICAgICAgICAgICAgOiBcImFuZ2xlLWRvdWJsZS1kb3duXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpY29uPVwiYW5nbGUtZG91YmxlLWRvd25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgIGhhbmRsZVZvdGUodXNlclBvc3RWb3RlICYmIHVzZXJQb3N0Vm90ZS52YWx1ZSA9PSAtMSA/IDAgOiAtMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cclxuICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicG9zdF9jYXJkX2hlYWRlclwiXHJcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjE2cHggMTZweCAwIDE2cHhcIiB9fVxyXG4gICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgIWlkID8gKFxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvblxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwid2F2ZVwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwicmVjaXBlXCJcclxuICAgICAgICAgICAgICAgIHNyYz17Y29tbXVuaXR5LmxvZ29QYXRofVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn1cclxuICAgICAgICAgICAgICA+PC9BdmF0YXI+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJzaW1wbGUtbWVudVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1vcmVWZXJ0SWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UG9zdE1lbnVcclxuICAgICAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtcz17aXNNb2RlcmF0b3IgPyBtb2RlcmF0b3JJdGVtcyA6IG1lbnVJdGVtc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEZWxldGVDb21tZW50UG9wXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17aXNNb2RlcmF0b3IgPyBvbkRlbGV0ZU1vZGVyYXRvciA6IG9uRGVsZXRlUG9zdH1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlUG9wdXB9XHJcbiAgICAgICAgICAgICAgICBhbmNob3JFbD17cG9wdXBBbmNob3J9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICFpZCA/IChcclxuICAgICAgICAgICAgICA8U2tlbGV0b25cclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cIndhdmVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsxMH1cclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiODAlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3QvW2NvbW11bml0eV1cIn0gYXM9e2AvdC8ke2NvbW11bml0eS5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YT57Y29tbXVuaXR5Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCI0cHhcIiwgZm9udFdlaWdodDogNjAwLCBmb250U2l6ZTogXCI5MiVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAvXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dGggJiYgYXV0aC51c2VyICYmIGF1dGgudXNlci51c2VybmFtZSA9PSB1c2VyLnVzZXJOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYC9wLyR7dXNlci51c2VyTmFtZX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYHUvJHt1c2VyLnVzZXJOYW1lfWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRoICYmIGF1dGgudXNlciAmJiBhdXRoLnVzZXIudXNlcm5hbWUgPT0gdXNlci51c2VyTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGAvcC9bdXNlcm5hbWVdYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGB1L1t1c2VybmFtZV1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0ZWRfYnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1widS9cIiArIHVzZXIudXNlck5hbWUgKyBcIiBcIiArIFwidGFyYWbEsW5kYW5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN1YmhlYWRlcj17Y3JlYXRlZERhdGUgJiYgbW9tZW50KGNyZWF0ZWREYXRlKS5mcm9tTm93KCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TGluayBhcz17YC8ke2NvbW11bml0eS5zbHVnfS8ke3BTbHVnfWB9IGhyZWY9e1wiL1tjb21tdW5pdHldL1twb3N0XVwifT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPENhcmRDb250ZW50XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdF9jb250ZW50X2FyZWFcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4IDE2cHggMTZweCAyNXB4XCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHshaWQgPyAoXHJcbiAgICAgICAgICAgICAgICA8U2tlbGV0b25cclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwid2F2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJyZWN0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkX3Bvc3RfY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudCB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICB7cmVuZGVyTWVkaWEoKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8RGl2aWRlciBzdHlsZT17eyBtYXJnaW46IFwiMTVweCAwcHggMHB4IDBweFwiIH19IC8+XHJcblxyXG4gICAgICAgIDxDYXJkQWN0aW9uc1xyXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiwgcGFkZGluZ0xlZnQ6IFwiMy41cmVtXCIgfX1cclxuICAgICAgICAgIGRpc2FibGVTcGFjaW5nXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE1EQkljb25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjAuNXJlbVwiIH19XHJcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgIGZhclxyXG4gICAgICAgICAgICBpY29uPVwiY29tbWVudC1kb3RzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c21hbGwgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCItNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtjb21tZW50cyAmJiBjYWxjdWxhdGVTYWxsYW1hQ291bnQoY29tbWVudHMpfSBzYWxsYW1hXHJcbiAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgPFNoYXJlQnV0dG9uIC8+XHJcbiAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGRlbGV0ZVBvc3Q6IChwYXlsb2FkKSA9PiBkaXNwYXRjaChkZWxldGVQb3N0UmVxdWVzdChwYXlsb2FkKSksXHJcbiAgbW9kZXJhdG9yRGVsZXRlOiAocGF5bG9hZCkgPT4gZGlzcGF0Y2goZGVsZXRlTW9kZXJhdG9yUmVxdWVzdChwYXlsb2FkKSksXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGF1dGg6IHN0YXRlLmF1dGggJiYgc3RhdGUuYXV0aC5kYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNvY2lhbENhcmQpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFia0FBQUN4Q0FZQUFBQlpjTVB4QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFEQjBSVmgwUVV4VVZHRm5BRk1nYkc5bmJ5QmhibVFnYzNsdFltOXNjeUIwWlcxd2JHRjBaU0IyWldOMGIzSWdhV052Ym5NS2NpbHNVd0FBQURscFZGaDBSR1Z6WTNKcGNIUnBiMjRBQUFBQUFGTWdiRzluYnlCaGJtUWdjM2x0WW05c2N5QjBaVzF3YkdGMFpTQjJaV04wYjNJZ2FXTnZibk1LdFRNaTlBQUFGYVpKUkVGVWVOcnNuVitJWE5kOXg0KzJWbHFwVUEyc2FKTlF4V1BqV2ltVnlTdzBwU2dQbXNWNjZZT3QxWXZWUW9wbStwYTRkSGV4UysxQ3U2djJvWUZHN0NyVUx0U1FIYVUyUktiTnJ1U0grc0ZtUjRYSWJRM1JDTmNQVWtWMkhBZGlna1RHb2wybE1hRTl2enZucnU3Y3VYZm16c3o5ZCs1OFBuRFpuZDM1YytZM3YvbDl6KytjM3psSEtRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFESUNmc3dBUUQ0ZWV6OGU5VVVYNjUxKzdrbk9tTzJzNlIvVk5KcXFHNW5FKyt3aTRjd0FRQUVzSjNpYTgzcmExenhxS1RjVmhJRHk1akJCQUFBZ01nQkFBQWdjZ0FBQUlnY0FBQUFJZ2NBQUlESUFRQUFJSElBQUlESUFRQUFJSElBQUFDSUhBQUFBQ0lIQUFDQXlBRUFBQ0J5QUFDQXlBRUFBQ0J5QUFBQWlCd0FBQUFpQndBQWdNZ0JBQUFnY2dBQU1NMDhoQW1LeFdQbjN5dnBIeFZ6czJ5dUlKcWUzMXUzbjN1aWcvV0cybGJzV2pJM3F5RjNhNXRMNkdpN3RyQWNaQndIdkw4UGlnTnQ3YTl0UkE3eUZuUWwySDdCT0hGbGhJZXYrSjdMRVRzVG9HK1kzNXZUS0g0bVFGU05QVStZbjZVeG44c1JPMlBQbG10YnhBOWlqZ091cjVZSGRNQ2l4Z0czbzNiVjlWdWJ4UStSQys2bGp4TFVwUGZUU0RINEx1anJsSEhrVXN3djRYNVpGanl2MlRLOXZZdEZEc3ptOHovckViYzRjVVd6Nm5tOWpySHJaWDF0a1VuRGlQN3FqUVBsbUorKzdCZEwvWHB0MTErMXIyN1paS3Q5OU5JSER1bEZRYktkK1lUYlhEVUJ1SmF4K2NUUnhjRXZGR0ZZdy9pQzJIUXhnVUF4S2xzbWdEUnlZcHYvUy9IbDV2WDdiazd3M2RoT3E2RzZuZnN5L0V6S0p2TmFTS0NET3dvZFR4eklmY2QzS2pJNVR6QTdOV0lxbjNXN2E1N3NJZy9JbDJ4Skx0MDJDVXJueGcxT0dkczFMOEhDaTdSbFFiZHRUWUtIdnRiSjdzQWo1Q3M1aWdOdVBLMlprWjRMZWVtY1RaM0k1U2dER3FmZGF5citZYk00a1RaV2pkZ3QyOUNqTTUyZEplV2JoOGdaSmRPK1JkMWVDUjZyaFBtcEZiZUtpUU41N3BoTEd6ZDBXOFZuNjNuczlENkVjK1F1Q0c4b3o1eVlCWWlOcit1MnI1dk1ycE5UMjlhTVQ1UXNzYXNqZHJyZFovTWFQQ0RST0xCaU9tUzJVTmJYdG03N2x1bjB0dlBTc0ptaU9ZY1o3cmx1b2NDSnNPMVlKbkJlbG96WVZYUG9FOXVtODFDeTBLNXU4Rmd6d1ErS0xYQlZFNytXTEgwTEN5WU81Q2FPelJUSU9TUjcyN2JOT1V3UWxnQzhhV2tRRGdySVN6a0tHRHUyZFhnR2RDSzJ6WHdpRkZQZ1ZrME1zLzB6bGppMmFlSWFJaGRqRmlUT1ViR3MzV1hUN2xyQnZxOXJXVHU0RWRydEFuUWN2RlJNTDdtaW9Famk1bzQyckJUc3JVbGh5bmJXSXhBekJYQ1FtbzFaa0FsVTEyMFQ1aEVkZkNNajI4cnJyaFhVcmlXVDBTRjBCUkU0MHhtckZ2UXRWbzIvWmhhZlp5eDNFQkc0RFF2YlhTbGdscEVMb1RPdlZ5dTRYUkc2WWdpY2ZINDdCZTdvZWtjZ01oTzZHWXNkWkFHQnMwYm8xbEt5N1RRSW5GL295c2lGdFFJM1RYR2drbFc4bnJIVVFjb0luRlVzbWF3YmdZdGY2RGFwdXJRdURyaExoYWJ0YzFzd3hUV0lYQVNzY3hEajJKdFQ2Tmd1YTBsbEhhYklwRGFsZHBXTzA0b0NtN0N1U0M1R1Z0SmVabVNkeUJrRFZTMzhjRVdZeTFQOHhTNGxrWDE3ZG9lWlpwYnl0ajRSUXYwMTd6c1pwUklMMHh4OXNER1RXN1RRc1NYVFdPQXI3bXdEdGhDalhSTVJUbHN6WlV4Z1JRZDlDVXZzN1lHTHlJVUV0UVhMMml3ZktNTkp5UVRqbFNuUGpyMVVrcDczaE1rekdFendJRmxKSzV1ekxaT3JXdmhoU2lDbU1NRFRpNHNqR0p2T0E3M2lmbCtEZkhaMlYrbVE5VkJLNi90cm04alp1S01KdmV1QVhod0JQYkVPUkJVejVDNE9sSlNGMHl5V3hJSENpZHdKZXRhRm9ETEpRbVk2RHdNNWl3bHl4NUppTkNjd20wdGppTjAya2JNbTNmY2MxQXJ4QjJONnhlSFVXRGRIeDhNaVRpRnlsb29jQWplVUtyYk5wVzBoM3M3dWdtSXViaEJEQ3dscnRWcEpYMk4vNTJjc2NoYmIxcGFjeWtrN212cHE2T3VjdWVSUXd6eWM0bDBaWjNHNENScDV5RlRheHJhdVhkZk43VHhnMjdBK21Vcnl0TXgzUDI5eFFBMmFSeGFCVTkzRjh4djY5N0dxVTIwNkdkeWFJUmd6WEpSbGI3cnRPbkxZU2QyZWVhM0ZERzFiTVcyMUtZQkxoK0dDdG10cmlCQXZadWdEWkhKazFXNGN1Q0ErT3lBT3VGV09XY2FCYWxBSFVZdWFmeHRFU2VpdU5qUkZGVG1iVXY0c3M4NXoycUZYaDkzSkhFKy9xcDFjSEdZem96WlhUSS9TQnR1S3FKMDJkaHRtVzNsUFcyWVRnTFVwOHovbzdVaG1GYmZXVFN6b0RQSFZqb2tEY24vSmxMSlloL3lGQUlGek4rRDNDNjlrZEIydGM1SGpoazF6Y25rUXVZN3FIYUtTNjJKT2VtL1N0dmtvQWhjZ2R2TVpEVjJNazVWbFlWdnBDYzlGRVRpZmJTVncxRE1Lc0FqZDlIWjI2OXIzbG9jSm5GL3M5SFhhakZSa0d0dk4vTnVnZlg0M1RKWlh1RXd1UzVxbVY5U01lUCtITTJqajZSSGExK2ZnT2lpSzBPMm9IQThMWnhTNG05bytZd3VWZm13am8xMXZxTENjVHBFVGNXdE00SzkxOHoyclpHRW5NKzlXaStEYm0vcStjenFqR3lya05tVnlEMmYwdXV2Nmc1OGZVVURLR2JTeE9ja1RtRjdmY3NydEhqVXJTenR3aTAxT1Qvb2tKcnR1NTl5MkVEK0hNdWlRcmNjaGxHa2J5bFJRYnFyb2xkTVNZN2ROWVVwaFJLNmN3V3VLMHl4YllKc0xjVHlKNlFGMmN2dysweGE1eGloRFBtbDhSa0FtTjRCek1jVUI2VENuTm4zeFN6KzdwMzc2cVVNeWlyUXdobjJIem5uUDRJZUpPRTJhdmVqbXFITkZROWpLOGVlUmR0QzRQQ1YyQmZ2cFREcWE0K05pR28zKzVaLytXRlZ1ZjBzTDNjZmpkbUJsQ20rdEtDSlhUZm4xMmpFN1RXTHRqUG41cmhJdjlvaXROMnM2SW0xTUNubjMxWVNlcjQ5Zis4bjc2b252djY0ZSt2bi9UdnBVUzRNV2kxc2hjbGtWSE5qU2c4dTVhQUsyQmN0SXVvUC8yVHZmVTcveHd6Y2pDZHpzN09Fb1R5a1ZsMVdiTTdrczluNjdrZWRla0lkcEtoVlBlNzZRTW55d2hiSXREWDFjaTl1alA5cU9kTi9ubi85VDlUZGYrNXBhdi9BTmRlVElrV0YzM3d4YVdtQ0x5R1d4UUhFU29Vb3pHRmVuYUVQZXROZnlJWEpnUzZlc1BNNDJlV2tpV1pzTVQvN3FUOTZQZFAralI0K3F4L1VsSER4NFVEMm5CVTkrRHFCa01ycVNWU0tYNFdHREhZdStURFhpU1NKdzJnRk13bzJVWHkrM1IzdEpnWWtJM0tILytURFMvV1dJOHRkOW1WdEVvWE8zQXJORDVNeFpRNWw4Y0lQMkpveEEyc1ViSzNudnhWbWF5WlZOSnd2QWhvNXlMWTg3M2JnQ0p6K2paRzkvOFpjcnpoRGxtVE8vMy9kL0diS3MxWWZ1elZEeGJ1YWNTNUdUNFRjVFhEWXlha0k3NDhlUGlyTURRTkdITGMyYXRiUnR1NUxHd1k1QXB5d210dk1rZEZKQk9mZGYveGlwd09UNDhTODVtZHF3dWJkS1pVNEwzUjhORlh6TmFxNUV6Z2liekMvSm1vZWRqRlB2bG9YT0xZNjlNK2pZQ2dMSDJHeUlYM0lZS1l6WUtXdG04TElsSTNSTFdiLy96LzM0SGFlQ01ncVN3VVhJMER5Q2VOd1J4V0VkVkZHNjFQZXVOTDJNdFlBQW5hY0FjbU5DNTI3cDk5bko0RDI1RGk1Zkx0bGhvem5naUEwUlF6bnJha0hmNXhHTFlvY01CV2RSaUNSQlE0YUR4SzViWWNQWlp0all0ZTJOVVRmTWhzTFJWT212OFpVNElKMnlzeVlPRERweXEyTGFKL2RkamtPWUpXdVQ2c21vQlNiQ1UwODkzWE43ZDNkWHZYN3BrcnAyN2J0N1dkNHpaODcwek1lSktNcjlXcTNyZzU1NkxZc05tck0rYXkycVkwNks3SEJSeTZqOVZkZkcyb2tsR0hkODlyZTVhbkJMWlhOOGpXczdHV0ZZTVoyWTFwRE8yZzBGMDg3bERPT2QrT09HR1lsb3EvNmgvdGpiNVZaUVJwbC9jNUVpRTdlSzB1WHZYMzVKM2J4NWMrKzJpTjJISC83QW1hL3pJa0ozL3V0MzlQOUNDMXBLYk92VlQxemI0MXpPeWZ1cGVFU3Zhcm5BdVR1SDVPRkU0NUxQcmxYRnp2OFEzQ25MQStVQWY0MFZFYmE1MjkvcUViZ25UNTVVVHozOTlNQjV0c09IWjN0dWkyQjVCYzc3OTF1K3YwdG05OVZuLzNoZ3hTVWlsNUJUbW9NejI1Z3pFZGpzR0d6cWxEV0wvajVsYVlCa2NMLzRzM3Q3ZnhOeGt3cEpHWXIwRnBSSTVqWkk5Tzd2N283MDJyT3pzNDZZaGlVdGlGeXlHUmpCT0xtT1NBY3pnQ1djSy9LYkM5dUQ4dWpqUjNzeUxoRTZFU05aSGlERGprRkxCQnpST2h5K2pkZUJrSXh0TjFnWVpjUm5IcEh6cWI3SndPS2lRVEJPcEhmY29RTUJGdmxyczZqWm5CU1loRlZRdnZYV1d6MjNSZWk4d3VabVgvNzV0TERNVElwUHZCbWdPM3o1dG42ZHQzMnZaZXc5MzJnMFdwd01ubURtWlU3Y2xsN2NHcWFOSFRrY1VpckN5cGdDTE1ubXFrVjVNNUsxaWJqTjNyc2RlaCtwZXJ4MjdacFQ3aCtFTzc4bVdaai9maUtHc3F6ZzJuZXZPYmNyYzNOOXo5UFkrR1pZd1luV3RzYmVlZ1F5dWY3TUsrNWUzTHJLUjZGRUViTzVaU3dCRm1WemhUaFQwSzJnSENSd0xxOWYrbmJnVU9MZHUzZlZ5eSsvdEhmN2pTdFgrdTRuaTc2Lyt1eXp6dVVYT0JISUVJRmI5Z29jSXVmTERHSStmTlJMSGZNbUVqaTJGSWVSZ2oxSUhMQjYra0lxSjMvNzVpdVJsd2c4b3pPeW9NcEhHWklVRVhzZ2VuZlUrYS8vYmRqY1dnOXluNDJOdnMyd3hLNTFMWERyL244Z2NnOE1sTmprc0ZrNFROYVJYT0JvWXdhd1pQVEIyZzZ2Wkc2akhuSjY4T0NCMFAvSkdqZXYwRWxtSmtJM1lNM2IzbjFFRkgzeFcrYmZHa0dQUWVTNm5BdmJFU0JHQjVjZVJnTlRKeEk0VGlzS2ZNQ2UwUWZycWkybGd2STNQN2c4OGluZU1nd3BRNU55TlhUMjVjL1VST2o4eFNSLy9WZm5IQ0dUWWhJWmxuU0xTMTUrNlNYbmZ6NFJsQVJpVGdwTXd0cEE0VWwzeTV2MWxCeThicmJSNFp5eW1ETmxiVmZKbERld0JsamdyNnZhWHg5V2xoeVJKWWVjanJKRmx3eFBpbkRkdVhQWEVhUVhYL2l6UG1IejNsY1djNHQ0ZVFWUUZvTUhMUWozeDI3VkhhSWMyTUdkZHBGclp6QjhNSys2NXgwaGRQRUdqb1lPSEFxaEEwdjh0Vzc4TmJkQ0oxbWJaRzlSejRDVG9VZi83aWJkRE82YmU0SWwyM01kT0hpZ1p5bUJ6TS9KR3Jxb2MzS0doci9BSkl4cEhxNTBocm1TSHFZTWNPNk9FVG9xTGhNUU9rV1JEMWdrZENxblV4aTFXcTBjOVpEVGJqYldyWUwwNzJUaUNwanNjdUlpUTQreVpNQ0xQTzZaa01YaEFkU2pDdHcwaTV3ak5CTWVqRHFSME9sclRqRkhsNVRRelN2bTZNQWVvVnZQVTV1MHdNa28wL1dvRlpRaVl0NENrc0FzYjY1MzRFcXlPLzgrbExKTVFETEJZWWxKV0lFSklwY1RnUXR3Y0tvdTQ3ZHJrMndaTFBMWFpaV1Q1UVZ5L3BycVRxZEUybXg4Mk9iTGdneEJ2dVBMM0FSWkorZXZwUFJ1QmVhanJib1ZsQ012R1pvMmtXdm5SZUE4RHI1dUFuS2JyM3VzZG0wWnU2NWpEYkJvQkNLejJIUnM1NThXVlhkT081TEF5VERsazAvMmI3LzF4aHRYZXJiWmV2dnR0d0xuMnVSdlVqSHAvZCtkdTNlRFhtcG9CU1VpMTBWNkFITjVFamhmNWpGSFFJN2RyaDNUUzZZVEFWWjB6TXcwUnVwTERLU0NzdlRmSDR4MEdMRU1VZm9YZWt2eGlDd2JjTE03RVRBUlBFY1FUNTdzRzlaMEY0R0xNRjY2OUcxbmh4UWZEWlBCalozbFRrTjFwYlBRTzYxbEFwTUVaUDFqK2JIejc4a3BDSEl5WUpXdmZYeWRDRzFYK1hiSjZkNkxpblBmSU4vK0trc01KTGpMbnJjTFNiN1dPSWVjdXN6NnpvRzdaY3IrWmM5Sjl4QlVFUzhST2psMXdCVStFYjFMSGpHVEljdVFCZURyV3R3bW5zNHBlaVluanZKSTNnWE9INUQxTlcreWp5WmYrVml6dWxYeEI4WHBFSkIvZjIzcjYzU1NjVUNFYlZ5QkMrTG1yVzRoaVp3ZjE4M1M3anFDNWo4L2JzRFpiMTdxY1FoY2tVWE9GYmQ2MmtzRUVoSTc5bWVNVit6cVJ1eGtXS2lOVmNDQ09EQVhaK2NzYm9Gek1qc3RaajFaM0pVcnpzL2pYK3JkWEhuSVdyaUJXM1NObGEwV3lCOWtydTJpT0lLdHdoYm01TktUZSt6OGV6TEVWdFBYS2NWUVppeGlwMzlJWmlkRFEyTFBzOGF1WmF3RE9mUlhpVzkxczdQUGdva0RZdzFseWhaZFlXZkFqUlJ3cjEvZnk5b2NNVHQrM0JFNU40dVRoZCtTdFhudjR6eXUxUm9Vdyt2akZwZ1VVZVJhNXJvcUlwRGdDUUo1Q3NveTdMcHVCRThDOGduVjNUa2xUdEZycTRLZlpCeldrWkRmemJaclh0dkdLWG9YamIrbVFYUEN4NmZwQTIzOGRhUTQwRENYK091QzhkTVRVZUtBSEhMNjJUdmZpNXlabmRRaUpVT05rcDFKQm5icjFrMHRiaTNuckRoM0xzMDdGQ21MdjRVREJ3Nm85UXZmQ0R5QjRCMHRmaUh4ZktJQ2t6RDJwZjBobVY3emRrVG5iWHNNOExINTJURkJDWHJ0S281ZThqajZ3ME1DdE5qMkEyTlBxanJEN1ZyeWlKMWNoOVR3TGRsY0lkdktZelV2Rk5wZlhUOTE0NEVUQi9iLy9IN3BrUjlkcmJoN1VJcjR5QjZTQnc4Y2RFN3dGdEh5SXFkd1AzUG1US0JJdVptYUxPaDJpMHFpNGk4Nk1UUkcyY0VrOXlJSEFBRHBVYXZWU3NxM1g2NXN3ZVV0NS9mdTd1OGVWaG9GV2VmbUN1WXdaQ3N2RVViL2lJRVd1TlVrMy84djRBSUFBSVVWdUlvUnVNOTcvMzdpUkZYTkhuNnduK1FYdi9nNzZ0MTMzMVgzNysrcXhhWGwwQXpPejI4ZE82WmVlKzFWL2RqL1VKLzU5R2Q2bnJNMzY5dFFiNzc1TDk0L3k3RGtWNElPT1VYa0FBQWdpc0RKZk4ybXZqN2QvOTk5cWpMM0lKUGJ2MysvVXpSeTcrTjdXZ0JQOUFuVUs2LzhnNU9KaVFpNnhTWHU0MzdsMENIMXIxZXZPditYWWMrUFB2cEk3ZXg4MzVtL2s4WGQzL25PUHp0Lzh3bWN6TCs5bVlZZEdLNEVBQ2lld05YVWtHT241TGliUVd2V1pMN3R6MTk4b2Eva1gvYXI5RlpNeXYrWEZ2OGthdE5ramxvMldXNm5aUXRPQmdjQUtKYkFiYWdJNXlwS0FjaTFnSTJUWFdSVDVhQTFiZDU5S1FYM2tOUUlORTBHMTA3VEhwd01EZ0JRSElGenE0RWpJY09KSWxCQklyVjdmemMwdzVOaFRIZTVnQ3QwUTBpMGdwSk1EZ0JnQ2pEcnpHUTdzRWpyelVTd1pJUGt1d0c3LzNzUE92Vm5ibDZCYzU5bkFNdFpDUndpQndCUVBLRnJxKzUyZ0pIb0hubnpkMzFDSlR1WUJHVjQvaE84NVhFaEd5eTdoNXhtdWc2WDZrb0FnSUxSYXJVK3FsUXFzdGxEcEsyLzd0Mjc1MVJFeWlKd0w3SzBZUCtuOWpzVmlrZU9mRTU5K2N0LzJGT1ZLY2pTQS85aWN2V2dncktadFMyb3JnUUFLQ2kxV20xVmRZL3Vpb1NJWEpTRjNkNHNMcUFDTTdFdHVzamtBQURBbTlFMWRVWlhWaEdMVVdUWVVlYmNIbjMwMFVnQ0Z6Q2ZKeWVtbk02THdKSEpBUUJNUjBaM1hZMVFkZW5mOXNzdmJuS1NnRlJtK2pLNFJwWUZKbUd3aEFBQW9QaElJY3AyVktHVFhVNmVlLzV3WCtISml5KzhvRE8zTzBFUHFjZDVCbHljVUYwSkFGQnd6UENoWkZrakxTMFlzalJBcVFRT09ZMGI1dVFBQUtZQVUzSDU3NnA3K1BKUVB2bmtFL1grKy8rcGpoMTd3cm45MnF1dk92dFJlbWpyNi9lMHZ2MWJudDgzYzNJQUFGTkVsSDB0bzJpbXlsRUZKWmtjQUFDNEdWMUxaM1N5L2Rmdmp2a1VEWDM5Z1EwQ1J5WUhBREM5R1oxa2M3VVJINWI0SWFkeFErRUpBTUIwc3F5Nnc0NVJxZHNtY0dSeUFBRFRuYzNKc09XT3Zrb0Q3dVpXVUxac2ZJOWtjZ0FBVTRxWlY1dFg0VXNMV2pZTEhKa2NBQUJJUmljYk9XK0dDRnpINXZlR3lBRUFnSDlwUVM2MzZBSUFBSmhFNkRiMHRZUWxBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBNHVUL0JSZ0FzZkZObWtRd2NSa0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuaW1wb3J0IEVtYWlsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vTG9hZGVyXCI7XHJcbmltcG9ydCBQcmltYXJ5U2VhcmNoQXBwQmFyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBTZW5kU3VnZ2VzdGlvbk1vZGFsIGZyb20gXCIuL3NlbmRTdWdnZXN0aW9uTW9kYWxcIjtcclxuaW1wb3J0IHsgc2VuZFN1Z2dlc3RSZXF1ZXN0IH0gZnJvbSBcIi4uL2xpYi91c2Vycy9hY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBNYWluTGF5b3V0KHByb3BzKSB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgeyBsb2FkZXIgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRW1haWwgPSAoZSkgPT4ge1xyXG4gICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7IGNvbnRlbnQ6IHRleHQsIGVtYWlsIH07XHJcbiAgICBwcm9wcy5zZW5kU3VnZ2VzdChwYXlsb2FkKTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SGVwIEJlcmFiZXIgU2FsbMSxeW9ydXogfCBTYWFsbGE8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIlNhYWxsYSwgaW5zYW5sYXLEsW4gaWxnaSBhbGFubGFyxLFuYSBnw7ZyZSBzYWxsYXlhYmlsZGlrbGVyaSB0b3BsdWx1ayBhxJ/EsWTEsXIuIMSwbGdpbGVuZGnEn2luaXogdG9wbHVsdWtsYXLEsSBidWx1biB2ZSDDp2V2cmltacOnaSBiaXIgdG9wbHVsdcSfdW4gcGFyw6dhc8SxIG9sdW4hXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxQcmltYXJ5U2VhcmNoQXBwQmFyIC8+XHJcbiAgICAgIHtsb2FkZXIubG9hZGluZyAmJiA8TG9hZGVyIC8+fVxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj5cclxuICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0gY2xhc3NOYW1lPVwiZmFjZWJvb2tcIj5cclxuICAgICAgICAgIDxFbWFpbEljb24gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U2VuZFN1Z2dlc3Rpb25Nb2RhbFxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgb25DaGFuZ2VFbWFpbD17aGFuZGxlQ2hhbmdlRW1haWx9XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICB0ZXh0PXt0ZXh0fVxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgbG9hZGVyOiBzdGF0ZS5sb2FkZXIsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNlbmRTdWdnZXN0OiAocGF5bG9hZCkgPT4gZGlzcGF0Y2goc2VuZFN1Z2dlc3RSZXF1ZXN0KHBheWxvYWQpKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluTGF5b3V0KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0TWVudShwcm9wcykge1xyXG4gIGNvbnN0IHsgbWVudUl0ZW1zIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1lbnVcclxuICAgICAgICBpZD1cInNpbXBsZS1tZW51XCJcclxuICAgICAgICBhbmNob3JFbD17cHJvcHMuYW5jaG9yRWx9XHJcbiAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICBvcGVuPXtCb29sZWFuKHByb3BzLmFuY2hvckVsKX1cclxuICAgICAgICBvbkNsb3NlPXtwcm9wcy5vbkNsb3NlfVxyXG4gICAgICA+XHJcbiAgICAgICAge21lbnVJdGVtcyAmJlxyXG4gICAgICAgICAgbWVudUl0ZW1zLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIG1lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2luZGV4fSBvbkNsaWNrPXtpdGVtICYmIGl0ZW0ub25DbGlja30+XHJcbiAgICAgICAgICAgICAge2l0ZW0gJiYgaXRlbS50aXRsZX1cclxuICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiO1xyXG5pbXBvcnQgSW1hZ2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW1hZ2VcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmZ1bmN0aW9uIHJhbmQoKSB7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDIwKSAtIDEwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNb2RhbFN0eWxlKCkge1xyXG4gIGNvbnN0IHRvcCA9IDUwO1xyXG4gIGNvbnN0IGxlZnQgPSA1MDtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRvcDogYCR7dG9wfSVgLFxyXG4gICAgbGVmdDogYCR7bGVmdH0lYCxcclxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtJHt0b3B9JSwgLSR7bGVmdH0lKWAsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcGFwZXI6IHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICB3aWR0aDogNDAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICBib3JkZXI6IFwiMnB4IHNvbGlkICMwMDBcIixcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIHBhZGRpbmc6IFwiMFwiLFxyXG4gICAgZmxvYXQ6IFwicmlnaHRcIixcclxuICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VuZFN1Z2dlc3Rpb25Nb2RhbChwcm9wcykge1xyXG4gIGNvbnN0IHsgb3Blbiwgb25DbG9zZSwgb25TdWJtaXQsIHRleHQsIG9uQ2hhbmdlLCBvbkNoYW5nZUVtYWlsIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBbbW9kYWxTdHlsZV0gPSBSZWFjdC51c2VTdGF0ZShnZXRNb2RhbFN0eWxlKTtcclxuXHJcbiAgY29uc3QgYm9keSA9IChcclxuICAgIDxkaXYgc3R5bGU9e21vZGFsU3R5bGV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEJldGEgc8O8csO8bcO8IGhha2vEsW5kYSBuZSBkw7zFn8O8bsO8eW9yc3VuID8gVGVrbGlmIHZlIMO2bmVyaWxlcmluaSBiaXppbWxlXHJcbiAgICAgICAgcGF5bGHFn1xyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICBpZD1cInN0YW5kYXJkLXRleHRhcmVhXCJcclxuICAgICAgICAgIGxhYmVsPVwibmV5aSBkZcSfacWfdGlyc2VrID9cIlxyXG4gICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICBsYWJlbD1cImUtcG9zdGEgLSBpc3RlxJ9lIGJhxJ9sxLFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyF0ZXh0fVxyXG4gICAgICAgICAgb25DbGljaz17b25TdWJtaXR9XHJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEfDtm5kZXJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIG9wZW49e29wZW59XHJcbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1tb2RhbC10aXRsZVwiXHJcbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzaW1wbGUtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgPlxyXG4gICAgICB7Ym9keX1cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgQVVUSF9SRVFVRVNUID0gJ0FVVEhfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBVVRIX1NVQ0NFU1MgPSAnQVVUSF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFVVEhfRkFJTFVSRSA9ICdBVVRIX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05VUF9SRVFVRVNUID0gJ1NJR05VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9TVUNDRVNTID0gJ1NJR05VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9GQUlMVVJFID0gJ1NJR05VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dPVVRfUkVRVUVTVCA9ICdMT0dPVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dPVVRfU1VDQ0VTUyA9ICdMT0dPVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dPVVRfRkFJTFVSRSA9ICdMT0dPVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0VORF9SRVNFVF9DT0RFX1JFUVVFU1QgPSAnU0VORF9SRVNFVF9DT0RFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0VORF9SRVNFVF9DT0RFX1NVQ0NFU1MgPSAnU0VORF9SRVNFVF9DT0RFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0VORF9SRVNFVF9DT0RFX0ZBSUxVUkUgPSAnU0VORF9SRVNFVF9DT0RFX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFU0VUX1BBU1NXT1JEX1JFUVVFU1QgPSAnUkVTRVRfUEFTU1dPUkRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRVNFVF9QQVNTV09SRF9TVUNDRVNTID0gJ1JFU0VUX1BBU1NXT1JEX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVTRVRfUEFTU1dPUkRfRkFJTFVSRSA9ICdSRVNFVF9QQVNTV09SRF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3QgPSAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiAoe1xyXG4gICAgdHlwZTogQVVUSF9SRVFVRVNULFxyXG4gICAgcGF5bG9hZDogeyB1c2VybmFtZSwgcGFzc3dvcmQgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwUmVxdWVzdCA9IChwYXlsb2FkKSA9PiAoe1xyXG4gICAgdHlwZTogU0lHTlVQX1JFUVVFU1QsXHJcbiAgICBwYXlsb2FkXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ091dCA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dPVVRfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZFJlc2V0Q29kZVJlcXVlc3QgPSAoZW1haWxBZGRyZXNzKSA9PiAoe1xyXG4gICAgdHlwZTogU0VORF9SRVNFVF9DT0RFX1JFUVVFU1QsXHJcbiAgICBlbWFpbEFkZHJlc3NcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRQYXNzd29yZFJlcXVlc3QgPSAocGF5bG9hZCkgPT4gKHtcclxuICAgIHR5cGU6IFJFU0VUX1BBU1NXT1JEX1JFUVVFU1QsXHJcbiAgICBwYXlsb2FkXHJcbn0pOyIsImV4cG9ydCBjb25zdCBDTEVBUl9IT01FID0gJ0NMRUFSX0hPTUUnO1xyXG5leHBvcnQgY29uc3QgQ0xFQVJfQ09NTVVOSVRZID0gJ0NMRUFSX0NPTU1VTklUWSc7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9VU0VSID0gJ0NMRUFSX1VTRVInO1xyXG5leHBvcnQgY29uc3QgQ0xFQVJfUFJPRklMRSA9ICdDTEVBUl9QUk9GSUxFJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX0NPTU1VTklUWV9QQUdFID0gJ0NMRUFSX0NPTU1VTklUWV9QQUdFJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJTdG9yZVJlcXVlc3QgPSBuYW1lID0+IHtcclxuICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgIGNhc2UgXCJob21lX3Bvc3RzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQ0xFQVJfSE9NRSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBcImNvbW11bml0eV9wb3N0c1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IENMRUFSX0NPTU1VTklUWSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBcInByb2ZpbGVfcG9zdHNcIjpcclxuICAgICAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBDTEVBUl9QUk9GSUxFLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlIFwidXNlcl9wb3N0c1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IENMRUFSX1VTRVIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgXCJjb21tdW5pdHlfb2FnZVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IENMRUFSX0NPTU1VTklUWV9QQUdFLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBHRVRfUE9QVUxBUl9MSVNUX1JFUVVFU1QgPSAnR0VUX1BPUFVMQVJfTElTVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9QT1BVTEFSX0xJU1RfU1VDQ0VTUyA9ICdHRVRfUE9QVUxBUl9MSVNUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX1BPUFVMQVJfTElTVF9GQUlMVVJFID0gJ0dFVF9QT1BVTEFSX0xJU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0NPTU1VTklUWV9SRVFVRVNUID0gJ0dFVF9DT01NVU5JVFlfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ09NTVVOSVRZX1NVQ0NFU1MgPSAnR0VUX0NPTU1VTklUWV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9DT01NVU5JVFlfRkFJTFVSRSA9ICdHRVRfQ09NTVVOSVRZX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9DT01NVU5JVFlfUE9TVFNfUkVRVUVTVCA9ICdHRVRfQ09NTVVOSVRZX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX0NPTU1VTklUWV9QT1NUU19TVUNDRVNTID0gJ0dFVF9DT01NVU5JVFlfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ09NTVVOSVRZX1BPU1RTX0ZBSUxVUkUgPSAnR0VUX0NPTU1VTklUWV9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX0NPTU1VTklUWV9SRVFVRVNUID0gJ0dFVF9BTExfQ09NTVVOSVRZX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX0FMTF9DT01NVU5JVFlfU1VDQ0VTUyA9ICdHRVRfQUxMX0NPTU1VTklUWV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfQ09NTVVOSVRZX0ZBSUxVUkUgPSAnR0VUX0FMTF9DT01NVU5JVFlfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfQ09NTVVOSVRJRVNfUkVRVUVTVCA9ICdHRVRfVVNFUl9DT01NVU5JVElFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0NPTU1VTklUSUVTX1NVQ0NFU1MgPSAnR0VUX1VTRVJfQ09NTVVOSVRJRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9DT01NVU5JVElFU19GQUlMVVJFID0gJ0dFVF9VU0VSX0NPTU1VTklUSUVTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9GX01PREVSQVRPUlNfUkVRVUVTVCA9ICdPRl9NT0RFUkFUT1JTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgT0ZfTU9ERVJBVE9SU19TVUNDRVNTID0gJ09GX01PREVSQVRPUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBPRl9NT0RFUkFUT1JTX0ZBSUxVUkUgPSAnT0ZfTU9ERVJBVE9SU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQ09NTVVOSVRZX1JFUVVFU1QgPSAnVVBEQVRFX0NPTU1VTklUWV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9DT01NVU5JVFlfU1VDQ0VTUyA9ICdVUERBVEVfQ09NTVVOSVRZX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0NPTU1VTklUWV9GQUlMVVJFID0gJ1VQREFURV9DT01NVU5JVFlfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJTX1JFUVVFU1QgPSAnR0VUX1VTRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJTX1NVQ0NFU1MgPSAnR0VUX1VTRVJTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJTX0ZBSUxVUkUgPSAnR0VUX1VTRVJTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX1JFUVVFU1QgPSAnREVMRVRFX1VTRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9TVUNDRVNTID0gJ0RFTEVURV9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfRkFJTFVSRSA9ICdERUxFVEVfVVNFUl9GQUlMVVJFJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UG9wdWxhckNvbW1uaXR5TGlzdFJlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogR0VUX1BPUFVMQVJfTElTVF9SRVFVRVNULFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbW11bml0eVJlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogR0VUX0NPTU1VTklUWV9SRVFVRVNULFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbW11bml0eVBvc3RzUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBHRVRfQ09NTVVOSVRZX1BPU1RTX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckNvbW11bml0aWVzUmVxdWVzdCA9IHBheWxvYWQgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdhY3Rpb24nKVxyXG4gIHJldHVybiAoe1xyXG4gICAgdHlwZTogR0VUX1VTRVJfQ09NTVVOSVRJRVNfUkVRVUVTVCxcclxuICAgIHBheWxvYWQsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvZk1vZGVyYXRvcnNSZXF1ZXN0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBPRl9NT0RFUkFUT1JTX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNvbW11bml0eVJlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogVVBEQVRFX0NPTU1VTklUWV9SRVFVRVNULFxyXG4gIHBheWxvYWRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlcnMgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogR0VUX1VTRVJTX1JFUVVFU1QsXHJcbiAgcGF5bG9hZFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBERUxFVEVfVVNFUl9SRVFVRVNULFxyXG4gIHBheWxvYWRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsQ29tbXVuaXRpZXNSZXF1ZXN0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBHRVRfQUxMX0NPTU1VTklUWV9SRVFVRVNULFxyXG59KTsiLCJpbXBvcnQgeyBmcm9tUGFpcnMgfSBmcm9tICdsb2Rhc2gvZnAnO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tICdub29raWVzJztcclxuXHJcbmNvbnN0IGxvY2FsU3RvcmFnZSA9IGdsb2JhbC5sb2NhbFN0b3JhZ2UgJiYgZ2xvYmFsLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtXHJcbiAgICA/IGdsb2JhbC5sb2NhbFN0b3JhZ2VcclxuICAgIDogKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgc3RvcmUgPSB7fTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBnZXRJdGVtKGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlW2tleV0gfHwgbnVsbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0SXRlbShrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yZVtrZXldID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xlYXIoKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yZSA9IHt9O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZW1vdmVJdGVtKGtleSkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmUgPSBPYmplY3Qua2V5cyhzdG9yZSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGsgPT4ga2V5ICE9PSBrKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2N1bXVsYXRvcltjdXJyZW50SXRlbV0gPSBzdG9yZVtjdXJyZW50SXRlbV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcclxuICAgICAgICAgICAgICAgICAgICB9LCB7fSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH0oKSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVhZExvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcclxuICAgICAgICByZXR1cm4gZnJvbVBhaXJzKGtleS5tYXAoayA9PiBbaywgbG9jYWxTdG9yYWdlLmdldEl0ZW0oaykgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrKSldKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSAmJiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRTdGF0ZSA9IChrZXkpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZFN0YXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICBpZiAoc2VyaWFsaXplZFN0YXRlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHNlcmlhbGl6ZWRTdGF0ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpc0xvZ2dlZFdpdGhDb29raWVzID0gKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhjdHgpXHJcbiAgICByZXR1cm4gY29va2llcyAmJiBjb29raWVzLnRva2VuICYmIGNvb2tpZXMudXNlcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB3cml0ZUxvY2FsU3RvcmFnZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBrZXlzID0gdHlwZW9mIGtleSA9PT0gJ29iamVjdCcgPyBrZXkgOiB7IFtrZXldOiB2YWx1ZSB9O1xyXG4gICAgT2JqZWN0LmVudHJpZXMoa2V5cykubWFwKChbaywgdmFsXSkgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oaywgSlNPTi5zdHJpbmdpZnkodmFsKSkpO1xyXG4gICAgcmV0dXJuIGtleXM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xyXG4gICAgY29uc3Qga2V5cyA9IEFycmF5LmlzQXJyYXkoa2V5KSA/IGtleSA6IFtrZXldO1xyXG4gICAga2V5cy5mb3JFYWNoKGsgPT4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaykpO1xyXG4gICAgcmV0dXJuIGtleXM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hQYXJhbXMgPSBwYXJhbXMgPT4gT2JqZWN0LmtleXMocGFyYW1zKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiAocGFyYW1zW2tleV0pICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA6ICcnfWA7XHJcbiAgICB9XHJcbn0pLmpvaW4oJyYnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVN0cmluZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KTtcclxuICAgIHJldHVybiBuYW1lO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaXNMb2dnZWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHJlYWRMb2NhbFN0b3JhZ2UoXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IHVzZXIgPSByZWFkTG9jYWxTdG9yYWdlKFwidXNlclwiKTtcclxuICAgIHJldHVybiAodG9rZW4gJiYgdXNlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQYXJhbWV0ZXJCeU5hbWUgPSAobmFtZSwgdXJsKSA9PiB7XHJcbiAgICBpZiAoIXVybCkgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCAnXFxcXCQmJyk7XHJcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdbPyZdJyArIG5hbWUgKyAnKD0oW14mI10qKXwmfCN8JCknKSxcclxuICAgICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xyXG4gICAgaWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICghcmVzdWx0c1syXSkgcmV0dXJuICcnO1xyXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGh0bWxUb1RleHQgPSAoaHRtbCkgPT4ge1xyXG4gICAgdmFyIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGVtcC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgcmV0dXJuIHRlbXAudGV4dENvbnRlbnQgfHwgdGVtcC5pbm5lclRleHQgfHwgXCJcIjtcclxufVxyXG5cclxuIiwiZXhwb3J0IGNvbnN0IEdFVF9IT01FX1BPU1RTX1JFUVVFU1QgPSAnR0VUX0hPTUVfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfSE9NRV9QT1NUU19TVUNDRVNTID0gJ0dFVF9IT01FX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfUE9TVFNfRkFJTFVSRSA9ICdHRVRfSE9NRV9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfVU5BVVRIT1JJWkVEX1BPU1RTX1JFUVVFU1QgPSAnR0VUX1VOQVVUSE9SSVpFRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9VTkFVVEhPUklaRURfUE9TVFNfU1VDQ0VTUyA9ICdHRVRfVU5BVVRIT1JJWkVEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX1VOQVVUSE9SSVpFRF9QT1NUU19GQUlMVVJFID0gJ0dFVF9VTkFVVEhPUklaRURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0VBUkNIX1JFUVVFU1QgPSAnU0VBUkNIX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1NVQ0NFU1MgPSAnU0VBUkNIX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX0ZBSUxVUkUgPSAnU0VBUkNIX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEhvbWVQb3N0c1JlcXVlc3QgPSBwYXlsb2FkID0+IHtcclxuICByZXR1cm4gKHtcclxuICAgIHR5cGU6IEdFVF9IT01FX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBwYXlsb2FkLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VW5hdXRob3JpemVkUG9zdHNSZXF1ZXN0ID0gcGF5bG9hZCA9PiB7XHJcbiAgcmV0dXJuICh7XHJcbiAgICB0eXBlOiBHRVRfVU5BVVRIT1JJWkVEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBwYXlsb2FkLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2VhcmNoUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBTRUFSQ0hfUkVRVUVTVCxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcblxyXG4iLCJleHBvcnQgY29uc3QgR0VUX1VOUkVBRFNfUkVRVUVTVCA9ICdHRVRfVU5SRUFEU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9VTlJFQURTX1NVQ0NFU1MgPSAnR0VUX1VOUkVBRFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfVU5SRUFEU19GQUlMVVJFID0gJ0dFVF9VTlJFQURTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BUktfQVNfUkVBRF9SRVFVRVNUID0gJ01BUktfQVNfUkVBRF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IE1BUktfQVNfUkVBRF9TVUNDRVNTID0gJ01BUktfQVNfUkVBRF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE1BUktfQVNfUkVBRF9GQUlMVVJFID0gJ01BUktfQVNfUkVBRF9GQUlMVVJFJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VW5yZWFkc1JlcXVlc3QgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IEdFVF9VTlJFQURTX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmtBc1JlYWRSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IE1BUktfQVNfUkVBRF9SRVFVRVNULFxyXG4gIHBheWxvYWRcclxufSk7XHJcblxyXG5cclxuIiwiZXhwb3J0IGNvbnN0IEdFVF9OT1RJRklDQVRJT05TX1JFUVVFU1QgPSAnR0VUX05PVElGSUNBVElPTlNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfTk9USUZJQ0FUSU9OU19TVUNDRVNTID0gJ0dFVF9OT1RJRklDQVRJT05TX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX05PVElGSUNBVElPTlNfRkFJTFVSRSA9ICdHRVRfTk9USUZJQ0FUSU9OU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBNQVJLX0FTX1JFQURfUkVRVUVTVCA9ICdNQVJLX0FTX1JFQURfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQVJLX0FTX1JFQURfU1VDQ0VTUyA9ICdNQVJLX0FTX1JFQURfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQVJLX0FTX1JFQURfRkFJTFVSRSA9ICdNQVJLX0FTX1JFQURfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0NPVU5UX1JFUVVFU1QgPSAnR0VUX0NPVU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX0NPVU5UX1NVQ0NFU1MgPSAnR0VUX0NPVU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX0NPVU5UX0ZBSUxVUkUgPSAnR0VUX0NPVU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE5vdGlmaWNhdGlvbnNSZXF1ZXN0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBHRVRfTk9USUZJQ0FUSU9OU19SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb3VudFJlcXVlc3QgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IEdFVF9DT1VOVF9SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXJrQXNSZWFkUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBNQVJLX0FTX1JFQURfUkVRVUVTVCxcclxuICBwYXlsb2FkXHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgR0VUX1BPU1RfREVUQUlMX1JFUVVFU1QgPSAnR0VUX1BPU1RfREVUQUlMX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfREVUQUlMX1NVQ0NFU1MgPSAnR0VUX1BPU1RfREVUQUlMX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfREVUQUlMX0ZBSUxVUkUgPSAnR0VUX1BPU1RfREVUQUlMX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQUlOX1BPU1RTX1JFUVVFU1QgPSAnR0VUX01BSU5fUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfTUFJTl9QT1NUU19TVUNDRVNTID0gJ0dFVF9NQUlOX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX01BSU5fUE9TVFNfRkFJTFVSRSA9ICdHRVRfTUFJTl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0dFVF9VU0VSX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfUE9TVFNfU1VDQ0VTUyA9ICdHRVRfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSAnR0VUX1VTRVJfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1RfUkVRVUVTVCA9ICdDUkVBVEVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUX1NVQ0NFU1MgPSAnQ1JFQVRFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TVF9GQUlMVVJFID0gJ0NSRUFURV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFZPVEVfUE9TVF9SRVFVRVNUID0gJ1ZPVEVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFZPVEVfUE9TVF9TVUNDRVNTID0gJ1ZPVEVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFZPVEVfUE9TVF9GQUlMVVJFID0gJ1ZPVEVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9SRVFVRVNUID0gJ0RFTEVURV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfU1VDQ0VTUyA9ICdERUxFVEVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUX0ZBSUxVUkUgPSAnREVMRVRFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX01PREVSQVRPUl9SRVFVRVNUID0gJ0RFTEVURV9NT0RFUkFUT1JfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfTU9ERVJBVE9SX1NVQ0NFU1MgPSAnREVMRVRFX01PREVSQVRPUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9NT0RFUkFUT1JfRkFJTFVSRSA9ICdERUxFVEVfTU9ERVJBVE9SX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3REZXRhaWxSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IEdFVF9QT1NUX0RFVEFJTF9SRVFVRVNULFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1haW5Qb3N0c1JlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogR0VUX01BSU5fUE9TVFNfUkVRVUVTVCxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyUG9zdHNSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IEdFVF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdFJlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogQ1JFQVRFX1BPU1RfUkVRVUVTVCxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB2b3RlUG9zdFJlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogVk9URV9QT1NUX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUG9zdFJlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogREVMRVRFX1BPU1RfUkVRVUVTVCxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVNb2RlcmF0b3JSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IERFTEVURV9NT0RFUkFUT1JfUkVRVUVTVCxcclxuICBwYXlsb2FkLFxyXG59KTsiLCJleHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfUkVRVUVTVCA9ICdHRVRfUFJPRklMRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFX1NVQ0NFU1MgPSAnR0VUX1BST0ZJTEVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRV9GQUlMVVJFID0gJ0dFVF9QUk9GSUxFX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0JZX1VTRVJOQU1FX1JFUVVFU1QgPSAnR0VUX1VTRVJfQllfVVNFUk5BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9CWV9VU0VSTkFNRV9TVUNDRVNTID0gJ0dFVF9VU0VSX0JZX1VTRVJOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfQllfVVNFUk5BTUVfRkFJTFVSRSA9ICdHRVRfVVNFUl9CWV9VU0VSTkFNRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBKT0lOX0NPTU1VTklUWV9SRVFVRVNUID0gJ0pPSU5fQ09NTVVOSVRZX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgSk9JTl9DT01NVU5JVFlfU1VDQ0VTUyA9ICdKT0lOX0NPTU1VTklUWV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEpPSU5fQ09NTVVOSVRZX0ZBSUxVUkUgPSAnSk9JTl9DT01NVU5JVFlfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTEVBVkVfQ09NTVVOSVRZX1JFUVVFU1QgPSAnTEVBVkVfQ09NTVVOSVRZX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTEVBVkVfQ09NTVVOSVRZX1NVQ0NFU1MgPSAnTEVBVkVfQ09NTVVOSVRZX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTEVBVkVfQ09NTVVOSVRZX0ZBSUxVUkUgPSAnTEVBVkVfQ09NTVVOSVRZX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFTkRfU1VHR0VTVF9SRVFVRVNUID0gJ1NFTkRfU1VHR0VTVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNFTkRfU1VHR0VTVF9TVUNDRVNTID0gJ1NFTkRfU1VHR0VTVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNFTkRfU1VHR0VTVF9GQUlMVVJFID0gJ1NFTkRfU1VHR0VTVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyUHJvZmlsZSA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBHRVRfUFJPRklMRV9SRVFVRVNULFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJCeVVzZXJuYW1lID0gdXNlcm5hbWUgPT4gKHtcclxuICB0eXBlOiBHRVRfVVNFUl9CWV9VU0VSTkFNRV9SRVFVRVNULFxyXG4gIHVzZXJuYW1lLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBqb2luQ29tbXVuaXR5UmVxdWVzdCA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IEpPSU5fQ09NTVVOSVRZX1JFUVVFU1QsXHJcbiAgcGF5bG9hZFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsZWF2ZUNvbW11bml0eVJlcXVlc3QgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBMRUFWRV9DT01NVU5JVFlfUkVRVUVTVCxcclxuICBwYXlsb2FkXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRTdWdnZXN0UmVxdWVzdCA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IFNFTkRfU1VHR0VTVF9SRVFVRVNULFxyXG4gIHBheWxvYWRcclxufSk7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUGFwZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEluZm9DYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0luZm9DYXJkXCI7XHJcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21haW5MYXlvdXRcIjtcclxuaW1wb3J0IHtcclxuICBnZXRDb21tdW5pdHlSZXF1ZXN0LFxyXG4gIGdldENvbW11bml0eVBvc3RzUmVxdWVzdCxcclxufSBmcm9tIFwiLi4vLi4vbGliL2NvbW11bml0eS9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IGpvaW5Db21tdW5pdHlSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL2xpYi91c2Vycy9hY3Rpb25zXCI7XHJcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWN0aW9uQnV0dG9uXCI7XHJcbmltcG9ydCB7IHZvdGVQb3N0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi9saWIvcG9zdHMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRlclwiO1xyXG5pbXBvcnQgeyBjbGVhclN0b3JlUmVxdWVzdCB9IGZyb20gXCIuLi8uLi9saWIvY29tbW9uQWN0aW9uc1wiO1xyXG5pbXBvcnQgQ3JlYXRlUG9zdFRhYiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DcmVhdGVQb3N0VGFiXCI7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcclxuaW1wb3J0IFNvY2lhbENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU29jaWFsQ2FyZFwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgeyByZWFkTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL2xpYi9oZWxwZXJzXCI7XHJcblxyXG5mdW5jdGlvbiBDb21tdW5pdHlQYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgW3BhZ2VOdW1iZXIsIHNldE51bWJlcl0gPSB1c2VTdGF0ZSgxKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcHJvcHMuY2xlYXJTdG9yZShcImNvbW11bml0eV9wb3N0c1wiKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBlbGVtZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBjb21tdW5pdHkgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgdG9rZW4gPSByZWFkTG9jYWxTdG9yYWdlKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyID0gcmVhZExvY2FsU3RvcmFnZShcInVzZXJcIik7XHJcbiAgICBpZiAoIXRva2VuKSByZXR1cm4gPEFjdGlvbkJ1dHRvbiBpc0xvZ2dlZD17ZmFsc2V9IC8+O1xyXG4gICAgbGV0IGlzSm9pbmVkID0gZmFsc2U7XHJcbiAgICBjb21tdW5pdHkgJiZcclxuICAgICAgY29tbXVuaXR5Lm1lbWJlcnMgJiZcclxuICAgICAgY29tbXVuaXR5Lm1lbWJlcnMubGVuZ3RoID4gMCAmJlxyXG4gICAgICBjb21tdW5pdHkubWVtYmVycy5tYXAoKG1lbWJlcikgPT4ge1xyXG4gICAgICAgIGlmIChtZW1iZXIudXNlcm5hbWUgPT0gdXNlci51c2VybmFtZSkge1xyXG4gICAgICAgICAgaXNKb2luZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QWN0aW9uQnV0dG9uIGlzTG9nZ2VkPXt0cnVlfSBpc0pvaW5lZD17aXNKb2luZWR9IHNsdWc9e2NvbW11bml0eS5zbHVnfSAvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblZvdGUgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zdCB7IHZvdGVQb3N0LCBjb21tdW5pdHkgfSA9IHByb3BzO1xyXG4gICAgdmFsdWVzLnBhZ2UgPSBcImNvbW11bml0eVwiO1xyXG4gICAgdmFsdWVzLmNTbHVnID0gY29tbXVuaXR5LnNsdWc7XHJcbiAgICB2YWx1ZXMuY29tbXVuaXR5SWQgPSBjb21tdW5pdHkuaWQ7XHJcbiAgICB2YWx1ZXMucGFnZVNpemUgPSA2O1xyXG4gICAgdmFsdWVzLmxvYWRlclN0YXJ0ID0gZmFsc2U7XHJcbiAgICB2b3RlUG9zdCh2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoTW9yZURhdGEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdOdW1iZXIgPSBwYWdlTnVtYmVyICsgMTtcclxuICAgIGNvbnN0IHsgZ2V0UG9zdHMgfSA9IHByb3BzO1xyXG4gICAgZ2V0UG9zdHMoe1xyXG4gICAgICBwYWdlTnVtYmVyOiBuZXdOdW1iZXIsXHJcbiAgICAgIHBhZ2VTaXplOiA2LFxyXG4gICAgICBzbHVnOiBjb21tdW5pdHkuc2x1ZyxcclxuICAgICAgbG9hZGVyU3RhcnQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBzZXROdW1iZXIobmV3TnVtYmVyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB7IGNvbW11bml0eSwgcG9zdHMgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICBjb21tdW5pdHkgJiYgKFxyXG4gICAgICA8TWFpbkxheW91dD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT57Y29tbXVuaXR5Lm5hbWUgKyBcIiB0b3BsdWx1xJ91IHwgU2FhbGxhIFwifTwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgICBjb21tdW5pdHkuZGVzY3JpcHRpb24gIT09IFwiXCIgJiZcclxuICAgICAgICAgICAgICBjb21tdW5pdHkuZGVzY3JpcHRpb24gIT09IG51bGwgJiZcclxuICAgICAgICAgICAgICBjb21tdW5pdHkuZGVzY3JpcHRpb24uc2xpY2UoMCwgMTAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Um93IHN0eWxlPXt7IG1hcmdpblRvcDogXCI0cmVtXCIsIGhlaWdodDogXCIyNDBweFwiIH19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb21fY292ZXJfaW1hZ2VcIlxyXG4gICAgICAgICAgICBzcmM9e2NvbW11bml0eS5jb3ZlckltYWdlUGF0aH1cclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9XCJjb21fYmFyXCI+XHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29tX2Jhcl9pbmZvXCIgbWQ9ezh9PlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZmlsZV9pbWdcIiBzcmM9e2NvbW11bml0eS5sb2dvUGF0aH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbV9uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbV9iYXJfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvbV90aXRsZVwiPntjb21tdW5pdHkubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiY29tX21lbWJlcl9jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHQve2NvbW11bml0eS5zbHVnICsgXCIgfFwifVxyXG4gICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiY29tX21lbWJlcl9jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21tdW5pdHkgJiYgY29tbXVuaXR5Lm1lbWJlcnMgJiYgY29tbXVuaXR5Lm1lbWJlcnMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgIMOceWVcclxuICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2luX2J1dHRvbl9jb250YWluZXJcIj57ZWxlbWVudCgpfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgPENyZWF0ZVBvc3RUYWJcclxuICAgICAgICAgICAgICAgIHNsdWc9e2NvbW11bml0eS5zbHVnfVxyXG4gICAgICAgICAgICAgICAgdXNlcj17cmVhZExvY2FsU3RvcmFnZShcInVzZXJcIil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMTBweFwiLCBwYWRkaW5nVG9wOiBcIjIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICBtZD17OH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbFxyXG4gICAgICAgICAgICAgICAgZGF0YUxlbmd0aD17cG9zdHMgJiYgcG9zdHMucmVzdWx0cyAmJiBwb3N0cy5yZXN1bHRzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIG5leHQ9e2ZldGNoTW9yZURhdGF9XHJcbiAgICAgICAgICAgICAgICBoYXNNb3JlPXtwb3N0cyAmJiBwb3N0cy5oYXNOZXh0fVxyXG4gICAgICAgICAgICAgICAgbG9hZGVyPXs8TG9hZGVyIG92ZXJsYXk9e2ZhbHNlfSAvPn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cG9zdHMgJiZcclxuICAgICAgICAgICAgICAgICAgcG9zdHMucmVzdWx0cyAmJlxyXG4gICAgICAgICAgICAgICAgICBwb3N0cy5yZXN1bHRzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgcG9zdHMucmVzdWx0cy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFnZU51bWJlcj17aXRlbS5wYWdlTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwU2x1Zz17aXRlbS5zbHVnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW1nPXtpdGVtLm1lZGlhQ29udGVudFBhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkRGF0ZT17aXRlbS5jcmVhdGVkRGF0ZVRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZT17aXRlbS5jb250ZW50VHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbW11bml0eT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjb21tdW5pdHkubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1ZzogY29tbXVuaXR5LnNsdWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ29QYXRoOiBjb21tdW5pdHkubG9nb1BhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudHM9e2l0ZW0uY29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyPXtpdGVtLnVzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5rVXJsPXtpdGVtLmxpbmtVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2b3RlQ291bnQ9e2l0ZW0udm90ZUNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlclBvc3RWb3RlPXtpdGVtLnVzZXJQb3N0Vm90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uVm90ZT17b25Wb3RlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvSW5maW5pdGVTY3JvbGw+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMTBweFwiIH19IHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tX3JpZ2h0X2JhclwiPlxyXG4gICAgICAgICAgICAgICAgPEluZm9DYXJkXHJcbiAgICAgICAgICAgICAgICAgIG1vZGVyYXRvcnM9e2NvbW11bml0eS5tb2RlcmF0b3JzfVxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17Y29tbXVuaXR5LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgKVxyXG4gICk7XHJcbn1cclxuXHJcbkNvbW11bml0eVBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGF3YWl0IGN0eC5zdG9yZS5leGVjU2FnYVRhc2tzKGN0eC5pc1NlcnZlciwgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbW11bml0eSB9ID0gY3R4LnF1ZXJ5O1xyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIGdldENvbW11bml0eVJlcXVlc3Qoe1xyXG4gICAgICAgIHNsdWc6IGNvbW11bml0eSxcclxuICAgICAgICBsb2FkZXJTdGFydDogdHJ1ZSxcclxuICAgICAgICB0b2tlbjogcGFyc2VDb29raWVzKGN0eCkudG9rZW4sXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIGdldENvbW11bml0eVBvc3RzUmVxdWVzdCh7XHJcbiAgICAgICAgcGFnZU51bWJlcjogMSxcclxuICAgICAgICBwYWdlU2l6ZTogNixcclxuICAgICAgICBzbHVnOiBjb21tdW5pdHksXHJcbiAgICAgICAgbG9hZGVyU3RhcnQ6IHRydWUsXHJcbiAgICAgICAgdG9rZW46IHBhcnNlQ29va2llcyhjdHgpLnRva2VuLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9KTtcclxuICByZXR1cm4ge307XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgZ2V0Q29tbXVuaXR5OiAocGF5bG9hZCkgPT4gZGlzcGF0Y2goZ2V0Q29tbXVuaXR5UmVxdWVzdChwYXlsb2FkKSksXHJcbiAgam9pbkNvbW11bml0eTogKHBheWxvYWQpID0+IGRpc3BhdGNoKGpvaW5Db21tdW5pdHlSZXF1ZXN0KHBheWxvYWQpKSxcclxuICB2b3RlUG9zdDogKHBheWxvYWQpID0+IGRpc3BhdGNoKHZvdGVQb3N0UmVxdWVzdChwYXlsb2FkKSksXHJcbiAgZ2V0UG9zdHM6IChwYXlsb2FkKSA9PiBkaXNwYXRjaChnZXRDb21tdW5pdHlQb3N0c1JlcXVlc3QocGF5bG9hZCkpLFxyXG4gIGNsZWFyU3RvcmU6IChuYW1lKSA9PiBkaXNwYXRjaChjbGVhclN0b3JlUmVxdWVzdChuYW1lKSksXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNvbW11bml0eTogc3RhdGUuY29tbXVuaXR5LmRhdGEsXHJcbiAgcG9zdHM6IHN0YXRlLmNvbW11bml0eS5wYWdlZERhdGEsXHJcbiAgLy9hdXRoOiBzdGF0ZS5hdXRoLmRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ29tbXVuaXR5UGFnZSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlT3V0bGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRW1haWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGlnaGxpZ2h0T2ZmXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbWFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbkltcG9ydGFudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWIvU2tlbGV0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hlZXJpb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbHN4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvZnBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudC9sb2NhbGUvdHJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW1hZ2UtbGlnaHRib3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wbGF5ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
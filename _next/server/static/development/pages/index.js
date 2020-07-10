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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./components/Layout/index.jsx":
/*!*************************************!*\
  !*** ./components/Layout/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_community_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/community/actions */ "./lib/community/actions.js");
/* harmony import */ var _lib_home_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/home/actions */ "./lib/home/actions.js");
/* harmony import */ var _lib_posts_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/posts/actions */ "./lib/posts/actions.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Loader */ "./components/Loader/index.jsx");
/* harmony import */ var _lib_commonActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/commonActions */ "./lib/commonActions.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-infinite-scroll-component */ "react-infinite-scroll-component");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _SocialCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../SocialCard */ "./components/SocialCard/index.jsx");
/* harmony import */ var _PopularTags__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../PopularTags */ "./components/PopularTags/index.jsx");
/* harmony import */ var _CreatePostTab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../CreatePostTab */ "./components/CreatePostTab/index.jsx");
/* harmony import */ var _Snackbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Snackbar */ "./components/Snackbar/index.jsx");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\Layout\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















function Home(props) {
  const {
    0: pageNumber,
    1: setNumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const [auth, setAuth] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    data: {
      token: null,
      user: null
    },
    error: null
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const user = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_16__["readLocalStorage"])("user");
    const token = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_16__["readLocalStorage"])("token");

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
      getHomePosts,
      getUnauthorizedPosts
    } = props;

    if (token) {
      getHomePosts({
        pageNumber: 1,
        pageSize: 6,
        loderStart: true
      });
    } else {
      getUnauthorizedPosts({
        pageNumber: 1,
        pageSize: 6,
        loderStart: true
      });
    }

    return () => {
      props.clearStore("home_posts");
    };
  }, []);

  const onVote = values => {
    const {
      votePost
    } = props;

    const payload = _objectSpread(_objectSpread({}, values), {}, {
      pageSize: 6,
      isVoted: true
    });

    votePost(payload);
  };

  const fetchMoreData = () => {
    const newNumber = pageNumber + 1;
    const {
      getUnauthorizedPosts,
      getHomePosts
    } = props;
    auth.token ? getHomePosts({
      pageNumber: newNumber,
      pageSize: 6,
      loderStart: false,
      token: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_16__["readLocalStorage"])("token")
    }) : getUnauthorizedPosts({
      pageNumber: newNumber,
      pageSize: 6,
      loderStart: false
    });
    setNumber(newNumber);
  };

  const {
    home,
    userCommunities
  } = props;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, "Hep Beraber Sall\u0131yoruz | Saalla"), __jsx("meta", {
    name: "description",
    content: "Saalla, insanlar\u0131n ilgi alanlar\u0131na g\xF6re sallayabildikleri topluluk a\u011F\u0131d\u0131r. \u0130lgilendi\u011Finiz topluluklar\u0131 bulun ve \xE7evrimi\xE7i bir toplulu\u011Fun par\xE7as\u0131 olun!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), __jsx("meta", {
    charSet: "utf-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    style: {
      marginTop: "6rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(_CreatePostTab__WEBPACK_IMPORTED_MODULE_14__["default"], {
    user: auth.user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    style: {
      paddingBottom: "4px",
      paddingTop: "20px"
    },
    xs: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "Populer Sallamalar"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: {
      flexWrap: "wrap-reverse"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    style: {
      paddingBottom: "10px",
      paddingTop: "20px"
    },
    xs: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, userCommunities && userCommunities.length <= 0 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/kesfet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, __jsx(_Snackbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
    message: "Topluluklari Kesfet - Hi\xE7bir toplulu\u011Fa \xFCye de\u011Filsin \u015Eimdi tam zaman\u0131",
    type: "warning",
    style: {
      cursor: "pointer"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  })), __jsx(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_11___default.a, {
    dataLength: home && home.results && home.results.length,
    next: fetchMoreData,
    hasMore: home && home.hasNext,
    loader: __jsx(_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      overlay: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 23
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, home.results.map(item => __jsx(_SocialCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
    key: item.id,
    pSlug: item.slug,
    id: item.id,
    img: item.mediaContentPath,
    createdDate: item.createdDateTime,
    content: item.content,
    contentType: item.contentType,
    community: item.community,
    pageNumber: item.pageNumber,
    comments: item.comments,
    user: item.user,
    linkUrl: item.linkUrl,
    voteCount: item.voteCount,
    userPostVote: item.userPostVote,
    onVote: onVote,
    profilePosts: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    style: {
      paddingBottom: "10px"
    },
    xs: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      position: "-webkit-sticky",
      position: "sticky",
      top: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, __jsx(_PopularTags__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }))))));
}

const mapDispatchToProps = dispatch => ({
  getPopularsCommunity: () => dispatch(Object(_lib_community_actions__WEBPACK_IMPORTED_MODULE_5__["getPopularCommnityListRequest"])({})),
  clearStore: name => dispatch(Object(_lib_commonActions__WEBPACK_IMPORTED_MODULE_9__["clearStoreRequest"])(name)),
  getHomePosts: payload => dispatch(Object(_lib_home_actions__WEBPACK_IMPORTED_MODULE_6__["getHomePostsRequest"])(payload)),
  getUnauthorizedPosts: payload => dispatch(Object(_lib_home_actions__WEBPACK_IMPORTED_MODULE_6__["getUnauthorizedPostsRequest"])(payload)),
  votePost: payload => dispatch(Object(_lib_posts_actions__WEBPACK_IMPORTED_MODULE_7__["votePostRequest"])(payload))
});

const mapStateToProps = state => ({
  home: state.home.data,
  userCommunities: state.userCommunities.data
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

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

/***/ "./components/PopularTags/index.jsx":
/*!******************************************!*\
  !*** ./components/PopularTags/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowDropUp */ "@material-ui/icons/ArrowDropUp");
/* harmony import */ var _material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_community_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/community/actions */ "./lib/community/actions.js");
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\PopularTags\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    display: "flex",
    paddingTop: "20px"
  },
  tag_card: {
    width: "100%",
    padding: "1rem",
    flexWrap: "wrap"
  },
  tagText: {
    textDecorationLine: "underline",
    marginLeft: "1rem"
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
    objectFit: "contain",
    margin: "0 8px"
  },
  community_title: {
    fontFamily: "inherit",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "18px",
    overflow: "hidden",
    textOverflow: "ellipsis",
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
  },
  button: {
    textTransform: "none",
    boxShadow: "none",
    padding: "0"
  },
  join_button: {
    width: "100%",
    textAlign: "right"
  }
}));

const renderBars = (classes, slug, name, memberCount, logoPath) => {
  return __jsx("div", {
    key: slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.com_cont,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    style: {
      display: "flex",
      paddingLeft: "0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "large",
    style: {
      color: "#40eb3d"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }), __jsx("img", {
    className: classes.avatarImg,
    src: logoPath,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      display: "grid"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: classes.community_title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/t/[community]",
    as: `/t/${slug}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      color: "black"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, name))), __jsx("span", {
    className: classes.member_count,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, memberCount, " \xFCye")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }));
};

function PopularTags(props) {
  const classes = useStyles();
  const {
    communities
  } = props;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      getPopularsCom
    } = props;
    getPopularsCom();
  }, []);
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.tag_card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx("b", {
    style: {
      marginLeft: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, "Pop\xFCler Topluluklar")), communities && communities.length > 0 && communities.map(x => renderBars(classes, x.slug, x.name, x.memberCount, x.logoPath)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    style: {
      marginTop: "16px",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/kesfet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, "Ke\u015Ffet")))));
}

const mapDispatchToProps = dispatch => ({
  getPopularsCom: () => dispatch(Object(_lib_community_actions__WEBPACK_IMPORTED_MODULE_8__["getPopularCommnityListRequest"])({}))
});

const mapStateToProps = state => ({
  communities: state.communities.data
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(PopularTags));

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

/***/ "./components/Snackbar/index.jsx":
/*!***************************************!*\
  !*** ./components/Snackbar/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedSnackbars; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\repos\\saalla-next.js\\components\\Snackbar\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function Snackbar(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }));
}

function CustomizedSnackbars(props) {
  return __jsx(Snackbar, {
    style: props.style,
    onClick: props.onClick,
    severity: props.type,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, props.message);
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_category_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/category/actions */ "./lib/category/actions.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.jsx");
/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/mainLayout */ "./components/mainLayout.jsx");
var _jsxFileName = "D:\\repos\\saalla-next.js\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(Object(_lib_category_actions__WEBPACK_IMPORTED_MODULE_2__["getCategoriesRequest"])())
});

class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async getInitialProps(ctx) {
    const cookies = ctx.req && ctx.req.headers && ctx.req.headers.cookie;
    return {
      cookies
    };
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }, __jsx(_components_mainLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Index));

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\repos\saalla-next.js\pages\index.js */"./pages/index.js");


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

/***/ "@material-ui/icons/ArrowDropUp":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ArrowDropUp" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDropUp");

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

/***/ "@material-ui/lab/Alert":
/*!*****************************************!*\
  !*** external "@material-ui/lab/Alert" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dG9Db21wbGV0ZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21tZW50TGlzdC9jb21wb25lbnRzL2RlbGV0ZUNvbW1lbnRQb3AuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3JlYXRlUG9zdFRhYi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EcmF3ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ltYWdlTW9kYWwvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpbmtQcmV2aWV3L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3B1bGFyVGFncy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlQ2FyZC9pbWFnZXMvZ2lybC5wbmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlQ2FyZC9pbWFnZXMvbWFuLnBuZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGVDYXJkL2ltYWdlcy91c2VyLnBuZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGVDYXJkL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NoYXJlQnV0dG9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NuYWNrYmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvY2lhbENhcmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYWluTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RNZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbmRTdWdnZXN0aW9uTW9kYWwuanN4Iiwid2VicGFjazovLy8uL2xpYi9hdXRoL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NhdGVnb3J5L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbW1vbkFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbW11bml0eS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL2xpYi9ob21lL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL21lc3NhZ2VzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL25vdGlmaWNhdGlvbnMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcG9zdHMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXNlcnMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEcm9wVXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tDaXJjbGVPdXRsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FZGl0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9IaWdobGlnaHRPZmZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW1hZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbkltcG9ydGFudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9sYWIvQWxlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9sYWIvU2tlbGV0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoZWVyaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2ZwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWRicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnQvbG9jYWxlL3RyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWltYWdlLWxpZ2h0Ym94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcGxheWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsInBhZGRpbmdUb3AiLCJhdmF0YXJJbWciLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJib3JkZXJSYWRpdXMiLCJib3hTaXppbmciLCJmbGV4IiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJjb21tdW5pdHlfdGl0bGUiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsImNvbG9yIiwiY29tX2NvbnQiLCJwYWRkaW5nIiwibWVtYmVyX2NvdW50IiwicGFkZGluZ0JvdHRvbSIsIkNvbWJvQm94Iiwib3B0aW9ucyIsImxhYmVsRmllbGQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidXNlciIsImNsYXNzTmFtZSIsImRlZmF1bHRWYWx1ZSIsInN0eWxlIiwib25TZWFyY2giLCJjbGFzc2VzIiwicmVuZGVyT3B0aW9uIiwib3B0aW9uIiwicGFkZGluZ0xlZnQiLCJsb2dvUGF0aCIsIm5hbWUiLCJ0eXBlIiwibWVtYmVyQ291bnQiLCJyZW5kZXJVc2VyT3B0aW9uIiwicHJvZmlsZUltZyIsInVzZXJuYW1lIiwiZXZlbnQiLCJuZXdWYWx1ZSIsInBhcmFtcyIsInR5cG9ncmFwaHkiLCJzcGFjaW5nIiwiYnV0dG9uX3Jvb3QiLCJ0ZXh0QWxpZ24iLCJidXR0b25zIiwiRGVsZXRlQ29tbWVudFBvcCIsInByb3BzIiwiYW5jaG9yRWwiLCJvbkNsb3NlIiwib25TdWJtaXQiLCJvcGVuIiwiQm9vbGVhbiIsImlkIiwidW5kZWZpbmVkIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiQ3JlYXRlUG9zdFRhYiIsInJvdXRlciIsInVzZVJvdXRlciIsInNsdWciLCJtYXJnaW5SaWdodCIsInByb2ZpbGVJbWFnZVBhdGgiLCJ0b2tlbiIsInJlYWRMb2NhbFN0b3JhZ2UiLCJwdXNoIiwiZHJhd2VyV2lkdGgiLCJhcHBCYXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsImFwcEJhclNoaWZ0IiwibWFyZ2luTGVmdCIsImVhc2VPdXQiLCJlbnRlcmluZ1NjcmVlbiIsIm1lbnVCdXR0b24iLCJoaWRlIiwiZHJhd2VyIiwiZmxleFNocmluayIsImRyYXdlclBhcGVyIiwiZHJhd2VySGVhZGVyIiwiYWxpZ25JdGVtcyIsIm1peGlucyIsInRvb2xiYXIiLCJqdXN0aWZ5Q29udGVudCIsImNvbnRlbnQiLCJmbGV4R3JvdyIsImNvbnRlbnRTaGlmdCIsIk1haW5EcmF3ZXIiLCJ1c2VUaGVtZSIsInVzZXJDb21tdW5pdGllcyIsIm9mTW9kZXJhdG9ycyIsInBhcGVyIiwibG9nbyIsImRpcmVjdGlvbiIsIm1hcmdpblRvcCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImdyb3ciLCJ0aXRsZSIsImJyZWFrcG9pbnRzIiwidXAiLCJzZWFyY2giLCJwb3NpdGlvbiIsInNoYXBlIiwiYmFja2dyb3VuZENvbG9yIiwic2VhcmNoSWNvbiIsInBvaW50ZXJFdmVudHMiLCJpbnB1dFJvb3QiLCJpbnB1dElucHV0Iiwic2VjdGlvbkRlc2t0b3AiLCJzZWN0aW9uTW9iaWxlIiwiUHJpbWFyeVNlYXJjaEFwcEJhciIsInVuUmVhZHMiLCJ1blJlYWRNZXNzYWdlcyIsInNldE9wZW4iLCJSZWFjdCIsInVzZVN0YXRlIiwiYXV0aCIsInNldEF1dGgiLCJkYXRhIiwiZXJyb3IiLCJzZXRBbmNob3JFbCIsIm1vYmlsZU1vcmVBbmNob3JFbCIsInNldE1vYmlsZU1vcmVBbmNob3JFbCIsInNldFVzZXIiLCJ1c2VyUXVlcnkiLCJzZXRVc2VyUXVlcnkiLCJ1c2VFZmZlY3QiLCJwYXlsb2FkIiwiZ2V0VXNlckNvbW11bml0aWVzIiwiZ2V0VW5SZWFkcyIsImdldFVuUmVhZE1lc3NhZ2VzIiwiaXNNb2RlcmF0b3IiLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJpc01lbnVPcGVuIiwiaXNNb2JpbGVNZW51T3BlbiIsImhhbmRsZVByb2ZpbGVNZW51T3BlbiIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVNb2JpbGVNZW51Q2xvc2UiLCJoYW5kbGVNZW51Q2xvc2UiLCJoYW5kbGVNb2JpbGVNZW51T3BlbiIsImhhbmRsZVNlbGVjdENoYW5nZSIsImNvbW11bml0eSIsImhhbmRsZVNlYXJjaENoYW5nZSIsInZhbHVlcyIsImRlbGF5ZWRRdWVyeSIsInVzZVJlZiIsIl8iLCJkZWJvdW5jZSIsInEiLCJ0ZXh0IiwiY3VycmVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1lbnVJZCIsInJlbmRlck1lbnUiLCJsb2dPdXQiLCJtb2JpbGVNZW51SWQiLCJyZW5kZXJNb2JpbGVNZW51IiwiY291bnQiLCJyZW5kZXJJbWFnZSIsImdlbmRlciIsImNsc3giLCJzZWFyY2hEYXRhIiwib3duQ29tbXVuaXRpZXMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImdldFVzZXJDb21tdW5pdGllc1JlcXVlc3QiLCJvZk1vZGVyYXRvcnNSZXF1ZXN0IiwiZ2V0Q291bnRSZXF1ZXN0IiwiZ2V0VW5yZWFkc1JlcXVlc3QiLCJzZWFyY2hSZXF1ZXN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1bnJlYWRzIiwiaG9tZSIsImNvbm5lY3QiLCJJbWFnZU1vZGFsIiwiaW1hZ2VVcmwiLCJIb21lIiwicGFnZU51bWJlciIsInNldE51bWJlciIsImdldEhvbWVQb3N0cyIsImdldFVuYXV0aG9yaXplZFBvc3RzIiwicGFnZVNpemUiLCJsb2RlclN0YXJ0IiwiY2xlYXJTdG9yZSIsIm9uVm90ZSIsInZvdGVQb3N0IiwiaXNWb3RlZCIsImZldGNoTW9yZURhdGEiLCJuZXdOdW1iZXIiLCJmbGV4V3JhcCIsImN1cnNvciIsInJlc3VsdHMiLCJoYXNOZXh0IiwibWVkaWFDb250ZW50UGF0aCIsImNyZWF0ZWREYXRlVGltZSIsImNvbnRlbnRUeXBlIiwiY29tbWVudHMiLCJsaW5rVXJsIiwidm90ZUNvdW50IiwidXNlclBvc3RWb3RlIiwidG9wIiwiZ2V0UG9wdWxhcnNDb21tdW5pdHkiLCJnZXRQb3B1bGFyQ29tbW5pdHlMaXN0UmVxdWVzdCIsImNsZWFyU3RvcmVSZXF1ZXN0IiwiZ2V0SG9tZVBvc3RzUmVxdWVzdCIsImdldFVuYXV0aG9yaXplZFBvc3RzUmVxdWVzdCIsInZvdGVQb3N0UmVxdWVzdCIsInJvb3RMaW5rIiwiYm94U2hhZG93IiwibWVkaWEiLCJkZXNjcmlwdGlvbiIsIkNPUlNfUFJPWFkiLCJnZXRQcmV2aWV3RGF0YSIsInRhZ3MiLCJyZXN1bHQiLCJyZWR1Y2UiLCJwcmV2aWV3RGF0YSIsInRhZyIsImxpbmsiLCJzaXRlIiwiaW1hZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInBhcnNlSFRNTCIsImh0bWwiLCIkIiwiY2hlZXJpbyIsImxvYWQiLCJtZXRhIiwiaSIsImF0dHJpYnMiLCJwcm9wZXJ0eSIsImZldGNoVXJsIiwidXJsIiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJnZXRVcmwiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInByb3RvY29sIiwiaG9zdCIsInBhdGhuYW1lIiwiaGFzaCIsImlzU2FtZUhvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIkxpbmtQcmV2aWV3Iiwic2V0UHJldmlld0RhdGEiLCJtYXJnaW5Cb3R0b20iLCJMb2FkZXIiLCJvdmVybGF5IiwidGFnX2NhcmQiLCJ0YWdUZXh0IiwidGV4dERlY29yYXRpb25MaW5lIiwib2JqZWN0Rml0Iiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJidXR0b24iLCJ0ZXh0VHJhbnNmb3JtIiwiam9pbl9idXR0b24iLCJyZW5kZXJCYXJzIiwiUG9wdWxhclRhZ3MiLCJjb21tdW5pdGllcyIsImdldFBvcHVsYXJzQ29tIiwieCIsIm1hbkljb24iLCJnaXJsSWNvbiIsInVzZXJJY29uIiwiUHJvZmlsZUNhcmQiLCJpbWciLCJiaW8iLCJwcmV2aWV3TG9nb1VybCIsImlzRWRpdCIsInNldEVkaXQiLCJzZXRWYWx1ZXMiLCJwcm9maWxlSW1hZ2UiLCJoYW5kbGVDaGFuZ2UiLCJpbnB1dCIsInByZXZlbnREZWZhdWx0IiwiaW1hZ2VGaWxlIiwiZmlsZXMiLCJuZXdWYWx1ZXMiLCJoYW5kbGVCaW9DaGFuZ2UiLCJoYW5kbGVCaW9TdWJtaXQiLCJTaGFyZUJ1dHRvbiIsImVuYWJsZUJhY2tncm91bmQiLCJTbmFja2JhciIsIkN1c3RvbWl6ZWRTbmFja2JhcnMiLCJvbkNsaWNrIiwibWVzc2FnZSIsImV4cGFuZCIsInRyYW5zZm9ybSIsInNob3J0ZXN0IiwiZXhwYW5kT3BlbiIsInBvc3RJbWFnZSIsIm1heEhlaWdodCIsIm1heFdpZHRoIiwibGVmdFNpZGUiLCJTb2NpYWxDYXJkIiwicG9wdXBBbmNob3IiLCJzZXRQb3B1cEFuY2hvciIsImlzT3BlbiIsIm1vbWVudCIsImxvY2FsZSIsImNyZWF0ZWREYXRlIiwicFNsdWciLCJwcm9maWxlUG9zdHMiLCJoYW5kbGVWb3RlIiwicG9zdElkIiwicmVuZGVyTWVkaWEiLCJoYW5kbGVDbGljayIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2xvc2VQb3B1cCIsIm9uRGVsZXRlQ2xpY2siLCJvbkRlbGV0ZVBvc3QiLCJkZWxldGVQb3N0Iiwib25EZWxldGVNb2RlcmF0b3IiLCJtb2RlcmF0b3JEZWxldGUiLCJwYWdlRHRvIiwibWVudUl0ZW1zIiwibW9kZXJhdG9ySXRlbXMiLCJjYWxjdWxhdGVTYWxsYW1hQ291bnQiLCJyZXBseUNvdW50IiwiYXZhdGFyIiwidXNlck5hbWUiLCJmcm9tTm93IiwiX19odG1sIiwiZGVsZXRlUG9zdFJlcXVlc3QiLCJkZWxldGVNb2RlcmF0b3JSZXF1ZXN0IiwiTWFpbkxheW91dCIsInNldFRleHQiLCJlbWFpbCIsInNldEVtYWlsIiwibG9hZGVyIiwiaGFuZGxlQ2hhbmdlRW1haWwiLCJoYW5kbGVTdWJtaXQiLCJzZW5kU3VnZ2VzdCIsImxvYWRpbmciLCJjaGlsZHJlbiIsInNlbmRTdWdnZXN0UmVxdWVzdCIsIlBvc3RNZW51IiwicmFuZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImdldE1vZGFsU3R5bGUiLCJsZWZ0IiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJib3JkZXIiLCJzaGFkb3dzIiwiZmxvYXQiLCJTZW5kU3VnZ2VzdGlvbk1vZGFsIiwib25DaGFuZ2VFbWFpbCIsIm1vZGFsU3R5bGUiLCJib2R5IiwiQVVUSF9SRVFVRVNUIiwiQVVUSF9TVUNDRVNTIiwiQVVUSF9GQUlMVVJFIiwiU0lHTlVQX1JFUVVFU1QiLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9GQUlMVVJFIiwiTE9HT1VUX1JFUVVFU1QiLCJMT0dPVVRfU1VDQ0VTUyIsIkxPR09VVF9GQUlMVVJFIiwiU0VORF9SRVNFVF9DT0RFX1JFUVVFU1QiLCJTRU5EX1JFU0VUX0NPREVfU1VDQ0VTUyIsIlNFTkRfUkVTRVRfQ09ERV9GQUlMVVJFIiwiUkVTRVRfUEFTU1dPUkRfUkVRVUVTVCIsIlJFU0VUX1BBU1NXT1JEX1NVQ0NFU1MiLCJSRVNFVF9QQVNTV09SRF9GQUlMVVJFIiwibG9naW5SZXF1ZXN0IiwicGFzc3dvcmQiLCJzaWduVXBSZXF1ZXN0Iiwic2VuZFJlc2V0Q29kZVJlcXVlc3QiLCJlbWFpbEFkZHJlc3MiLCJyZXNldFBhc3N3b3JkUmVxdWVzdCIsIkdFVF9DQVRFR09SSUVTX1JFUVVFU1QiLCJHRVRfQ0FURUdPUklFU19TVUNDRVNTIiwiR0VUX0NBVEVHT1JJRVNfRkFJTFVSRSIsIkdFVF9DT01TX0JZX0NBVEVHT1JZX1JFUVVFU1QiLCJHRVRfQ09NU19CWV9DQVRFR09SWV9TVUNDRVNTIiwiR0VUX0NPTVNfQllfQ0FURUdPUllfRkFJTFVSRSIsImdldENhdGVnb3JpZXNSZXF1ZXN0IiwiZ2V0Q29tc0J5Q2F0ZWdvcnlSZXF1ZXN0IiwiQ0xFQVJfSE9NRSIsIkNMRUFSX0NPTU1VTklUWSIsIkNMRUFSX1VTRVIiLCJDTEVBUl9QUk9GSUxFIiwiQ0xFQVJfQ09NTVVOSVRZX1BBR0UiLCJHRVRfUE9QVUxBUl9MSVNUX1JFUVVFU1QiLCJHRVRfUE9QVUxBUl9MSVNUX1NVQ0NFU1MiLCJHRVRfUE9QVUxBUl9MSVNUX0ZBSUxVUkUiLCJHRVRfQ09NTVVOSVRZX1JFUVVFU1QiLCJHRVRfQ09NTVVOSVRZX1NVQ0NFU1MiLCJHRVRfQ09NTVVOSVRZX0ZBSUxVUkUiLCJHRVRfQ09NTVVOSVRZX1BPU1RTX1JFUVVFU1QiLCJHRVRfQ09NTVVOSVRZX1BPU1RTX1NVQ0NFU1MiLCJHRVRfQ09NTVVOSVRZX1BPU1RTX0ZBSUxVUkUiLCJHRVRfQUxMX0NPTU1VTklUWV9SRVFVRVNUIiwiR0VUX0FMTF9DT01NVU5JVFlfU1VDQ0VTUyIsIkdFVF9BTExfQ09NTVVOSVRZX0ZBSUxVUkUiLCJHRVRfVVNFUl9DT01NVU5JVElFU19SRVFVRVNUIiwiR0VUX1VTRVJfQ09NTVVOSVRJRVNfU1VDQ0VTUyIsIkdFVF9VU0VSX0NPTU1VTklUSUVTX0ZBSUxVUkUiLCJPRl9NT0RFUkFUT1JTX1JFUVVFU1QiLCJPRl9NT0RFUkFUT1JTX1NVQ0NFU1MiLCJPRl9NT0RFUkFUT1JTX0ZBSUxVUkUiLCJVUERBVEVfQ09NTVVOSVRZX1JFUVVFU1QiLCJVUERBVEVfQ09NTVVOSVRZX1NVQ0NFU1MiLCJVUERBVEVfQ09NTVVOSVRZX0ZBSUxVUkUiLCJHRVRfVVNFUlNfUkVRVUVTVCIsIkdFVF9VU0VSU19TVUNDRVNTIiwiR0VUX1VTRVJTX0ZBSUxVUkUiLCJERUxFVEVfVVNFUl9SRVFVRVNUIiwiREVMRVRFX1VTRVJfU1VDQ0VTUyIsIkRFTEVURV9VU0VSX0ZBSUxVUkUiLCJnZXRDb21tdW5pdHlSZXF1ZXN0IiwiZ2V0Q29tbXVuaXR5UG9zdHNSZXF1ZXN0IiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUNvbW11bml0eVJlcXVlc3QiLCJnZXRVc2VycyIsImRlbGV0ZVVzZXJSZXF1ZXN0IiwiZ2V0QWxsQ29tbXVuaXRpZXNSZXF1ZXN0IiwibG9jYWxTdG9yYWdlIiwiZ2xvYmFsIiwicmVtb3ZlSXRlbSIsInN0b3JlIiwiZ2V0SXRlbSIsImtleSIsInNldEl0ZW0iLCJ0b1N0cmluZyIsImNsZWFyIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImsiLCJhY2N1bXVsYXRvciIsImN1cnJlbnRJdGVtIiwiQXJyYXkiLCJpc0FycmF5IiwiZnJvbVBhaXJzIiwiSlNPTiIsInBhcnNlIiwibG9hZFN0YXRlIiwic2VyaWFsaXplZFN0YXRlIiwiZXJyIiwiaXNMb2dnZWRXaXRoQ29va2llcyIsImN0eCIsImNvb2tpZXMiLCJwYXJzZUNvb2tpZXMiLCJ3cml0ZUxvY2FsU3RvcmFnZSIsImVudHJpZXMiLCJ2YWwiLCJzdHJpbmdpZnkiLCJyZW1vdmVMb2NhbFN0b3JhZ2UiLCJmb3JFYWNoIiwiY2xlYXJMb2NhbFN0b3JhZ2UiLCJnZXRTZWFyY2hQYXJhbXMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwiZ2VuZXJhdGVTdHJpbmciLCJzdWJzdHJpbmciLCJpc0xvZ2dlZCIsImdldFBhcmFtZXRlckJ5TmFtZSIsInJlcGxhY2UiLCJyZWdleCIsIlJlZ0V4cCIsImV4ZWMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJodG1sVG9UZXh0IiwidGVtcCIsImlubmVySFRNTCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0IiwiR0VUX0hPTUVfUE9TVFNfUkVRVUVTVCIsIkdFVF9IT01FX1BPU1RTX1NVQ0NFU1MiLCJHRVRfSE9NRV9QT1NUU19GQUlMVVJFIiwiR0VUX1VOQVVUSE9SSVpFRF9QT1NUU19SRVFVRVNUIiwiR0VUX1VOQVVUSE9SSVpFRF9QT1NUU19TVUNDRVNTIiwiR0VUX1VOQVVUSE9SSVpFRF9QT1NUU19GQUlMVVJFIiwiU0VBUkNIX1JFUVVFU1QiLCJTRUFSQ0hfU1VDQ0VTUyIsIlNFQVJDSF9GQUlMVVJFIiwiR0VUX1VOUkVBRFNfUkVRVUVTVCIsIkdFVF9VTlJFQURTX1NVQ0NFU1MiLCJHRVRfVU5SRUFEU19GQUlMVVJFIiwiTUFSS19BU19SRUFEX1JFUVVFU1QiLCJNQVJLX0FTX1JFQURfU1VDQ0VTUyIsIk1BUktfQVNfUkVBRF9GQUlMVVJFIiwibWFya0FzUmVhZFJlcXVlc3QiLCJHRVRfTk9USUZJQ0FUSU9OU19SRVFVRVNUIiwiR0VUX05PVElGSUNBVElPTlNfU1VDQ0VTUyIsIkdFVF9OT1RJRklDQVRJT05TX0ZBSUxVUkUiLCJHRVRfQ09VTlRfUkVRVUVTVCIsIkdFVF9DT1VOVF9TVUNDRVNTIiwiR0VUX0NPVU5UX0ZBSUxVUkUiLCJnZXROb3RpZmljYXRpb25zUmVxdWVzdCIsIkdFVF9QT1NUX0RFVEFJTF9SRVFVRVNUIiwiR0VUX1BPU1RfREVUQUlMX1NVQ0NFU1MiLCJHRVRfUE9TVF9ERVRBSUxfRkFJTFVSRSIsIkdFVF9NQUlOX1BPU1RTX1JFUVVFU1QiLCJHRVRfTUFJTl9QT1NUU19TVUNDRVNTIiwiR0VUX01BSU5fUE9TVFNfRkFJTFVSRSIsIkdFVF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJHRVRfVVNFUl9QT1NUU19TVUNDRVNTIiwiR0VUX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkNSRUFURV9QT1NUX1JFUVVFU1QiLCJDUkVBVEVfUE9TVF9TVUNDRVNTIiwiQ1JFQVRFX1BPU1RfRkFJTFVSRSIsIlZPVEVfUE9TVF9SRVFVRVNUIiwiVk9URV9QT1NUX1NVQ0NFU1MiLCJWT1RFX1BPU1RfRkFJTFVSRSIsIkRFTEVURV9QT1NUX1JFUVVFU1QiLCJERUxFVEVfUE9TVF9TVUNDRVNTIiwiREVMRVRFX1BPU1RfRkFJTFVSRSIsIkRFTEVURV9NT0RFUkFUT1JfUkVRVUVTVCIsIkRFTEVURV9NT0RFUkFUT1JfU1VDQ0VTUyIsIkRFTEVURV9NT0RFUkFUT1JfRkFJTFVSRSIsImdldFBvc3REZXRhaWxSZXF1ZXN0IiwiZ2V0TWFpblBvc3RzUmVxdWVzdCIsImdldFVzZXJQb3N0c1JlcXVlc3QiLCJjcmVhdGVQb3N0UmVxdWVzdCIsIkdFVF9QUk9GSUxFX1JFUVVFU1QiLCJHRVRfUFJPRklMRV9TVUNDRVNTIiwiR0VUX1BST0ZJTEVfRkFJTFVSRSIsIkdFVF9VU0VSX0JZX1VTRVJOQU1FX1JFUVVFU1QiLCJHRVRfVVNFUl9CWV9VU0VSTkFNRV9TVUNDRVNTIiwiR0VUX1VTRVJfQllfVVNFUk5BTUVfRkFJTFVSRSIsIkpPSU5fQ09NTVVOSVRZX1JFUVVFU1QiLCJKT0lOX0NPTU1VTklUWV9TVUNDRVNTIiwiSk9JTl9DT01NVU5JVFlfRkFJTFVSRSIsIkxFQVZFX0NPTU1VTklUWV9SRVFVRVNUIiwiTEVBVkVfQ09NTVVOSVRZX1NVQ0NFU1MiLCJMRUFWRV9DT01NVU5JVFlfRkFJTFVSRSIsIlNFTkRfU1VHR0VTVF9SRVFVRVNUIiwiU0VORF9TVUdHRVNUX1NVQ0NFU1MiLCJTRU5EX1NVR0dFU1RfRkFJTFVSRSIsImdldFVzZXJQcm9maWxlIiwiZ2V0VXNlckJ5VXNlcm5hbWUiLCJqb2luQ29tbXVuaXR5UmVxdWVzdCIsImxlYXZlQ29tbXVuaXR5UmVxdWVzdCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwibm9kZU5hbWUiLCJpc0xvY2FsIiwic2Nyb2xsIiwiUm91dGVyIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwicmVuZGVyIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJwcm9jZXNzIiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJwYXNzSHJlZiIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsImFkZEJhc2VQYXRoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJkZWxCYXNlUGF0aCIsImNyZWRlbnRpYWxzIiwicmVzIiwiZ2V0UmVzcG9uc2UiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsImNhdGVnb3JpZXMiLCJnZXRBbGwiLCJJbmRleCIsInJlcSIsImhlYWRlcnMiLCJjb29raWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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QUFFLEVBQUVBLE9BQU8sSUFBSSxTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUU7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUU7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUU7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFPO0FBQUVsUjtBQUFGLEtBQVA7QUFDRDs7QUFDRGlJLFFBQU0sR0FBRztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsQ0FERjtBQU9EOztBQWJpQzs7QUFnQnJCelosMEhBQU8sQ0FBQ0osZUFBRCxFQUFrQlAsa0JBQWxCLENBQVAsQ0FBNkNrakIsS0FBN0MsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IHsgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBwYWRkaW5nVG9wOiBcIjIwcHhcIixcclxuICB9LFxyXG4gIGF2YXRhckltZzoge1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjUwJVwiLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgIGJhY2tncm91bmRTaXplOiBcIjEwMCVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIyNHB4XCIsXHJcbiAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgZmxleDogXCJub25lXCIsXHJcbiAgICBoZWlnaHQ6IFwiMzJweFwiLFxyXG4gICAgd2lkdGg6IFwiMzJweFwiLFxyXG4gICAgbWFyZ2luOiBcIjAgOHB4XCIsXHJcbiAgfSxcclxuICBjb21tdW5pdHlfdGl0bGU6IHtcclxuICAgIGZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgbGluZUhlaWdodDogXCIxOHB4XCIsXHJcbiAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gIH0sXHJcbiAgY29tX2NvbnQ6IHtcclxuICAgIHBhZGRpbmc6IFwiMXJlbSAxcmVtIDAgMFwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgfSxcclxuICBtZW1iZXJfY291bnQ6IHtcclxuICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjE2cHhcIixcclxuICAgIHBhZGRpbmdCb3R0b206IFwiNHB4XCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tYm9Cb3goe1xyXG4gIG9wdGlvbnMsXHJcbiAgbGFiZWxGaWVsZCxcclxuICBvbkNoYW5nZSxcclxuICBwbGFjZWhvbGRlcixcclxuICB1c2VyLFxyXG4gIGNsYXNzTmFtZSxcclxuICBkZWZhdWx0VmFsdWUsXHJcbiAgc3R5bGUsXHJcbiAgb25TZWFyY2gsXHJcbn0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHJlbmRlck9wdGlvbiA9IChvcHRpb24sIGNsYXNzZXMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbV9jb250fT5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nTGVmdDogXCIwcHhcIiB9fT5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhckltZ30gc3JjPXtvcHRpb24ubG9nb1BhdGh9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiIH19PlxyXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9e2NsYXNzZXMuY29tbXVuaXR5X3RpdGxlfT57b3B0aW9uLm5hbWV9PC9jb2RlPlxyXG4gICAgICAgICAgICB7b3B0aW9uLnR5cGUgIT09IFwidXNlclwiICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMubWVtYmVyX2NvdW50fT5cclxuICAgICAgICAgICAgICAgIHtvcHRpb24ubWVtYmVyQ291bnR9IMO8eWVcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclVzZXJPcHRpb24gPSAob3B0aW9uLCBjbGFzc2VzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21fY29udH0+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZ0xlZnQ6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJJbWd9IHNyYz17b3B0aW9uLnByb2ZpbGVJbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiIH19PlxyXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9e2NsYXNzZXMuY29tbXVuaXR5X3RpdGxlfT57b3B0aW9uLnVzZXJuYW1lfTwvY29kZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxyXG4gICAgICBvbkNoYW5nZT17KGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlKTtcclxuICAgICAgfX1cclxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PlxyXG4gICAgICAgIHVzZXIgPyByZW5kZXJVc2VyT3B0aW9uKG9wdGlvbiwgY2xhc3NlcykgOiByZW5kZXJPcHRpb24ob3B0aW9uLCBjbGFzc2VzKVxyXG4gICAgICB9XHJcbiAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb25bbGFiZWxGaWVsZF19XHJcbiAgICAgIG5vT3B0aW9uc1RleHQ9XCJTb251w6cgeW9rXCJcclxuICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNlYXJjaH1cclxuICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICBsYWJlbD17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUG9wb3ZlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHR5cG9ncmFwaHk6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBidXR0b25fcm9vdDoge1xyXG4gICAgbWFyZ2luOiBcIjVweFwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgYnV0dG9uczoge1xyXG4gICAgcGFkZGluZzogXCIycHggIWltcG9ydGFudFwiLFxyXG4gICAgbWFyZ2luOiBcIjJweFwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZUNvbW1lbnRQb3AocHJvcHMpIHtcclxuICBjb25zdCB7IGFuY2hvckVsLCBvbkNsb3NlLCBvblN1Ym1pdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xyXG4gIGNvbnN0IGlkID0gb3BlbiA/IFwic2ltcGxlLXBvcG92ZXJcIiA6IHVuZGVmaW5lZDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQb3BvdmVyXHJcbiAgICAgIGlkPXtpZH1cclxuICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICB2ZXJ0aWNhbDogXCJib3R0b21cIixcclxuICAgICAgICBob3Jpem9udGFsOiBcImNlbnRlclwiLFxyXG4gICAgICB9fVxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcclxuICAgICAgICB2ZXJ0aWNhbDogXCJ0b3BcIixcclxuICAgICAgICBob3Jpem9udGFsOiBcImNlbnRlclwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb2dyYXBoeX0+XHJcbiAgICAgICAgU2lsbWVrIGlzdGVkacSfaW5pemUgZW1pbm1pc2luaXogP1xyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbl9yb290fT5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbnN9XHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBCb8WfdmVyXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17b25TdWJtaXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uc31cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU2lsXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Qb3BvdmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyBNREJJY29uIH0gZnJvbSBcIm1kYnJlYWN0XCI7XHJcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyByZWFkTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL2xpYi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVQb3N0VGFiKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyB1c2VyLCBzbHVnIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyIGNsYXNzTmFtZT1cInBvc3RfYmFyXCI+XHJcbiAgICAgIHt1c2VyICYmIChcclxuICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxcmVtXCIgfX1cclxuICAgICAgICAgIHNyYz17cHJvcHMudXNlci5wcm9maWxlSW1hZ2VQYXRofVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX2F2YXRhclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdG9rZW4gPSByZWFkTG9jYWxTdG9yYWdlKFwidG9rZW5cIik7XHJcbiAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgICA/IHJvdXRlci5wdXNoKGAvc2FsbGE/aXM9JHtzbHVnID8gc2x1ZyA6IFwiXCJ9YClcclxuICAgICAgICAgICAgOiByb3V0ZXIucHVzaChcIi9naXJpcy15YXBcIik7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNhbGxhIEJpxZ9pbGVyXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJwb3N0X2Jhcl9pbnB1dFwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8TURCSWNvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVhZExvY2FsU3RvcmFnZShcInRva2VuXCIpO1xyXG4gICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgPyByb3V0ZXIucHVzaChgL3NhbGxhP2lzPSR7c2x1ZyA/IHNsdWcgOiBcIlwifWApXHJcbiAgICAgICAgICAgIDogcm91dGVyLnB1c2goXCIvZ2lyaXMteWFwXCIpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgZmFyXHJcbiAgICAgICAgaWNvbj1cImltYWdlXCJcclxuICAgICAgICBzaXplPVwiMnhcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInBvc3RfYmFyX2ljb25cIlxyXG4gICAgICAvPlxyXG4gICAgICA8TURCSWNvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVhZExvY2FsU3RvcmFnZShcInRva2VuXCIpO1xyXG4gICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgPyByb3V0ZXIucHVzaChgL3NhbGxhP2lzPSR7c2x1ZyA/IHNsdWcgOiBcIlwifWApXHJcbiAgICAgICAgICAgIDogcm91dGVyLnB1c2goXCIvZ2lyaXMteWFwXCIpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgaWNvbj1cImxpbmtcIlxyXG4gICAgICAgIHNpemU9XCIyeFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicG9zdF9iYXJfaWNvblwiXHJcbiAgICAgIC8+XHJcbiAgICA8L1BhcGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0XCI7XHJcbmltcG9ydCBDaGV2cm9uUmlnaHRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvblJpZ2h0XCI7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vbG9nby5wbmdcIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgfSxcclxuICBhcHBCYXI6IHtcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbXCJtYXJnaW5cIiwgXCJ3aWR0aFwiXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIGFwcEJhclNoaWZ0OiB7XHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFtcIm1hcmdpblwiLCBcIndpZHRoXCJdLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXQsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBoaWRlOiB7XHJcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICB9LFxyXG4gIGRyYXdlcjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICB9LFxyXG4gIGRyYXdlclBhcGVyOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgfSxcclxuICBkcmF3ZXJIZWFkZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgICAvLyBuZWNlc3NhcnkgZm9yIGNvbnRlbnQgdG8gYmUgYmVsb3cgYXBwIGJhclxyXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwibWFyZ2luXCIsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgICBtYXJnaW5MZWZ0OiAtZHJhd2VyV2lkdGgsXHJcbiAgfSxcclxuICBjb250ZW50U2hpZnQ6IHtcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIm1hcmdpblwiLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXQsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICB9LFxyXG4gIGF2YXRhckltZzoge1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjUwJVwiLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgIGJhY2tncm91bmRTaXplOiBcIjEwMCVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIyNHB4XCIsXHJcbiAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgZmxleDogXCJub25lXCIsXHJcbiAgICBoZWlnaHQ6IFwiMzJweFwiLFxyXG4gICAgd2lkdGg6IFwiMzJweFwiLFxyXG4gICAgbWFyZ2luOiBcIjAgOHB4XCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbkRyYXdlcihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgeyB1c2VyQ29tbXVuaXRpZXMsIG9mTW9kZXJhdG9ycyB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cclxuICAgICAgdmFyaWFudD1cInBlcnNpc3RlbnRcIlxyXG4gICAgICBhbmNob3I9XCJsZWZ0XCJcclxuICAgICAgb3Blbj17cHJvcHMub3Blbn1cclxuICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiN3JlbVwiLCBtYXJnaW5SaWdodDogXCIxcmVtXCIgfX0gc3JjPXtsb2dvfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xvc2V9PlxyXG4gICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gXCJsdHJcIiA/IChcclxuICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPENoZXZyb25SaWdodEljb24gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQW5hIFNheWZhXCIgLz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIDxiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMXJlbVwiIH19PlRvcGx1bHVrbGFyxLFuPC9iPlxyXG4gICAgICAgIDxEaXZpZGVyIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxcmVtXCIgfX0gLz5cclxuICAgICAgICB7dXNlckNvbW11bml0aWVzICYmXHJcbiAgICAgICAgICB1c2VyQ29tbXVuaXRpZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgdXNlckNvbW11bml0aWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC90LyR7aXRlbS5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFySW1nfSBzcmM9e2l0ZW0ubG9nb1BhdGh9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2l0ZW0ubmFtZX0gLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9MaXN0PlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICA8YiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjFyZW1cIiB9fT5Zw7ZuZXR0acSfaW4gVG9wbHVsdWtsYXI8L2I+XHJcbiAgICAgICAgPERpdmlkZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fSAvPlxyXG4gICAgICAgIHtvZk1vZGVyYXRvcnMgJiZcclxuICAgICAgICAgIG9mTW9kZXJhdG9ycy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBvZk1vZGVyYXRvcnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL21vZGVyYXRvci8ke2l0ZW0uc2x1Z31gfT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT17aXRlbS5uYW1lfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhckltZ30gc3JjPXtpdGVtLmxvZ29QYXRofSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpdGVtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcclxuaW1wb3J0IE5vdGlmaWNhdGlvbkltcG9ydGFudEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25JbXBvcnRhbnRcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiO1xyXG5pbXBvcnQgRXhpdFRvQXBwSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcFwiO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIjtcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgTW9yZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XHJcbmltcG9ydCBCYWRnZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2VcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBBdmF0YXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgcmVhZExvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi8uLi9saWIvaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBsb2dPdXQgfSBmcm9tIFwiLi4vLi4vbGliL2F1dGgvYWN0aW9uc1wiO1xyXG5pbXBvcnQgQ29tYm9Cb3ggZnJvbSBcIi4uL0F1dG9Db21wbGV0ZVwiO1xyXG5pbXBvcnQge1xyXG4gIGdldFVzZXJDb21tdW5pdGllc1JlcXVlc3QsXHJcbiAgb2ZNb2RlcmF0b3JzUmVxdWVzdCxcclxufSBmcm9tIFwiLi4vLi4vbGliL2NvbW11bml0eS9hY3Rpb25zXCI7XHJcbmltcG9ydCBNYWluRHJhd2VyIGZyb20gXCIuLi9EcmF3ZXJcIjtcclxuaW1wb3J0IHsgZ2V0Q291bnRSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL2xpYi9ub3RpZmljYXRpb25zL2FjdGlvbnNcIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHJlbmRlckltYWdlIH0gZnJvbSBcIi4uL1Byb2ZpbGVDYXJkXCI7XHJcbmltcG9ydCB7IGdldFVucmVhZHNSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL2xpYi9tZXNzYWdlcy9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IHNlYXJjaFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vbGliL2hvbWUvYWN0aW9uc1wiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vbG9nby5wbmdcIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgfSxcclxuICBncm93OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICB9LFxyXG4gICAgd2lkdGg6IFwiN3JlbVwiLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBhcHBCYXI6IHtcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbXCJtYXJnaW5cIiwgXCJ3aWR0aFwiXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIGFwcEJhclNoaWZ0OiB7XHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFtcIm1hcmdpblwiLCBcIndpZHRoXCJdLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXQsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBoaWRlOiB7XHJcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICB9LFxyXG4gIGRyYXdlcjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICB9LFxyXG4gIGRyYXdlclBhcGVyOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgfSxcclxuICBkcmF3ZXJIZWFkZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgICAvLyBuZWNlc3NhcnkgZm9yIGNvbnRlbnQgdG8gYmUgYmVsb3cgYXBwIGJhclxyXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwibWFyZ2luXCIsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgICBtYXJnaW5MZWZ0OiAtZHJhd2VyV2lkdGgsXHJcbiAgfSxcclxuICBjb250ZW50U2hpZnQ6IHtcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIm1hcmdpblwiLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXQsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICB9LFxyXG4gIHNlYXJjaDoge1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNhMzk4OTgyNlwiLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM1OTUzNTMyNlwiLFxyXG4gICAgfSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoSWNvbjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICB9LFxyXG4gIGlucHV0Um9vdDoge1xyXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxyXG4gIH0sXHJcbiAgaW5wdXRJbnB1dDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCAwKSxcclxuICAgIC8vIHZlcnRpY2FsIHBhZGRpbmcgKyBmb250IHNpemUgZnJvbSBzZWFyY2hJY29uXHJcbiAgICBwYWRkaW5nTGVmdDogYGNhbGMoMWVtICsgJHt0aGVtZS5zcGFjaW5nKDQpfXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiKSxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICB3aWR0aDogXCIyMGNoXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbkRlc2t0b3A6IHtcclxuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25Nb2JpbGU6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBQcmltYXJ5U2VhcmNoQXBwQmFyKHByb3BzKSB7XHJcbiAgY29uc3QgeyB1blJlYWRzLCB1blJlYWRNZXNzYWdlcyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgZGF0YTogeyB0b2tlbjogbnVsbCwgdXNlcjogbnVsbCB9LFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbW9iaWxlTW9yZUFuY2hvckVsLCBzZXRNb2JpbGVNb3JlQW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VyUXVlcnksIHNldFVzZXJRdWVyeV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSByZWFkTG9jYWxTdG9yYWdlKFwidXNlclwiKTtcclxuICAgIGNvbnN0IHRva2VuID0gcmVhZExvY2FsU3RvcmFnZShcInRva2VuXCIpO1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgIH1cclxuICAgIGlmICh1c2VyICYmIHRva2VuKSB7XHJcbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7IGRhdGE6IHsgdXNlciwgdG9rZW4gfSwgZXJyb3I6IG51bGwgfTtcclxuICAgICAgc2V0QXV0aChwYXlsb2FkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHtcclxuICAgICAgZ2V0VXNlckNvbW11bml0aWVzLFxyXG4gICAgICBnZXRVblJlYWRzLFxyXG4gICAgICBvZk1vZGVyYXRvcnMsXHJcbiAgICAgIGdldFVuUmVhZE1lc3NhZ2VzLFxyXG4gICAgfSA9IHByb3BzO1xyXG4gICAgZ2V0VXNlckNvbW11bml0aWVzKCk7XHJcbiAgICBnZXRVblJlYWRzKCk7XHJcbiAgICBnZXRVblJlYWRNZXNzYWdlcygpO1xyXG4gICAgdXNlciAmJiB1c2VyLmlzTW9kZXJhdG9yICYmIG9mTW9kZXJhdG9ycygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhd2VyT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhd2VyQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc01lbnVPcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgY29uc3QgaXNNb2JpbGVNZW51T3BlbiA9IEJvb2xlYW4obW9iaWxlTW9yZUFuY2hvckVsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZU1lbnVPcGVuID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgICBoYW5kbGVNb2JpbGVNZW51Q2xvc2UoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51T3BlbiA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TW9iaWxlTW9yZUFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdENoYW5nZSA9IChjb21tdW5pdHkpID0+IHtcclxuICAgIGNvbW11bml0eSAmJiByb3V0ZXIucHVzaChgL3QvJHtjb21tdW5pdHkuc2x1Z31gKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBpZiAodmFsdWVzKSB7XHJcbiAgICAgIHZhbHVlcy50eXBlID09PSBcImNvbW11bml0eVwiXHJcbiAgICAgICAgPyByb3V0ZXIucHVzaChgL3QvJHt2YWx1ZXMubmFtZX1gKVxyXG4gICAgICAgIDogcm91dGVyLnB1c2goYC8ke3ZhbHVlcy5uYW1lfWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGF5ZWRRdWVyeSA9IHVzZVJlZihfLmRlYm91bmNlKChxKSA9PiBwcm9wcy5zZWFyY2goeyB0ZXh0OiBxIH0pLCA1MDApKVxyXG4gICAgLmN1cnJlbnQ7XHJcbiAgY29uc3Qgb25TZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgc2V0VXNlclF1ZXJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGRlbGF5ZWRRdWVyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWVudUlkID0gXCJwcmltYXJ5LXNlYXJjaC1hY2NvdW50LW1lbnVcIjtcclxuICBjb25zdCByZW5kZXJNZW51ID0gKFxyXG4gICAgPE1lbnVcclxuICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwicmlnaHRcIiB9fVxyXG4gICAgICBpZD17bWVudUlkfVxyXG4gICAgICBrZWVwTW91bnRlZFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW49e3sgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwicmlnaHRcIiB9fVxyXG4gICAgICBvcGVuPXtpc01lbnVPcGVufVxyXG4gICAgICBvbkNsb3NlPXtoYW5kbGVNZW51Q2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3AvJHt1c2VyLnVzZXJuYW1lfWApfT5cclxuICAgICAgICBQcm9maWxcclxuICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e3Byb3BzLmxvZ091dH0+w4fEsWvEscWfPC9NZW51SXRlbT5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG5cclxuICBjb25zdCBtb2JpbGVNZW51SWQgPSBcInByaW1hcnktc2VhcmNoLWFjY291bnQtbWVudS1tb2JpbGVcIjtcclxuICBjb25zdCByZW5kZXJNb2JpbGVNZW51ID0gKFxyXG4gICAgPE1lbnVcclxuICAgICAgYW5jaG9yRWw9e21vYmlsZU1vcmVBbmNob3JFbH1cclxuICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiBcInRvcFwiLCBob3Jpem9udGFsOiBcInJpZ2h0XCIgfX1cclxuICAgICAgaWQ9e21vYmlsZU1lbnVJZH1cclxuICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7IHZlcnRpY2FsOiBcInRvcFwiLCBob3Jpem9udGFsOiBcInJpZ2h0XCIgfX1cclxuICAgICAgb3Blbj17aXNNb2JpbGVNZW51T3Blbn1cclxuICAgICAgb25DbG9zZT17aGFuZGxlTW9iaWxlTWVudUNsb3NlfVxyXG4gICAgPlxyXG4gICAgICB7YXV0aC5kYXRhLnRva2VuID8gKFxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2NoYXRcIil9PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvdyA0IG5ldyBtYWlsc1wiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9e3VuUmVhZE1lc3NhZ2VzfSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPE1haWxJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8cD5NZXNhamxhcjwvcD5cclxuICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9iaWxkaXJpbWxlcmApfT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3cgMTEgbmV3IG5vdGlmaWNhdGlvbnNcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXt1blJlYWRzICYmIHVuUmVhZHMuY291bnR9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uc0ljb24gLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxwPkJpbGRpcmltbGVyPC9wPlxyXG4gICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3AvJHt1c2VyLnVzZXJuYW1lfWApfT5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiYWNjb3VudCBvZiBjdXJyZW50IHVzZXJcIlxyXG4gICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwcmltYXJ5LXNlYXJjaC1hY2NvdW50LW1lbnVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX2F2YXRhclwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e3JlbmRlckltYWdlKHVzZXIucHJvZmlsZUltYWdlUGF0aCwgdXNlci5nZW5kZXIpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPHA+UHJvZmlsPC9wPlxyXG4gICAgICAgICAgPC9NZW51SXRlbT57XCIgXCJ9XHJcbiAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17cHJvcHMubG9nT3V0fT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCI+XHJcbiAgICAgICAgICAgICAgPEV4aXRUb0FwcEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8cD7Dh8Sxa8SxxZ88L3A+XHJcbiAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9naXJpcy15YXBcIil9PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXHJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInByaW1hcnktc2VhcmNoLWFjY291bnQtbWVudVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QWNjb3VudENpcmNsZSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxwPkdpcmnFnyBZYXA8L3A+XHJcbiAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2theWRvbFwiKX0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImFjY291bnQgb2YgY3VycmVudCB1c2VyXCJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicHJpbWFyeS1zZWFyY2gtYWNjb3VudC1tZW51XCJcclxuICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxBY2NvdW50Q2lyY2xlIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPHA+S2F5ZG9sPC9wPlxyXG4gICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICl9XHJcbiAgICA8L01lbnU+XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8QXBwQmFyXHJcbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuYXBwQmFyLCB7XHJcbiAgICAgICAgICBbY2xhc3Nlcy5hcHBCYXJTaGlmdF06IG9wZW4sXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLm1lbnVCdXR0b24sIG9wZW4gJiYgY2xhc3Nlcy5oaWRlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gc3JjPXtsb2dvfSAvPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDb21ib0JveFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYXJhXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5zZWFyY2hEYXRhIHx8IFtdfVxyXG4gICAgICAgICAgICAgIGxhYmVsRmllbGQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2F1dGguZGF0YS50b2tlbiAmJiAoXHJcbiAgICAgICAgICAgIDxDb21ib0JveFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiIH19XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdENoYW5nZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRvcGx1bHVrbGFyxLFuXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtwcm9wcy51c2VyQ29tbXVuaXRpZXMgfHwgW119XHJcbiAgICAgICAgICAgICAgbGFiZWxGaWVsZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9IC8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbkRlc2t0b3B9PlxyXG4gICAgICAgICAgICB7YXV0aC5kYXRhLnRva2VuID8gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2NoYXRcIil9XHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IDQgbmV3IG1haWxzXCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17dW5SZWFkTWVzc2FnZXN9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haWxJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9iaWxkaXJpbWxlclwiKX1cclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3cgMTcgbmV3IG5vdGlmaWNhdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8QmFkZ2VcclxuICAgICAgICAgICAgICAgICAgICBiYWRnZUNvbnRlbnQ9e3VuUmVhZHMgJiYgdW5SZWFkcy5jb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uSW1wb3J0YW50SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e21lbnVJZH1cclxuICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcm9maWxlTWVudU9wZW59XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJfYXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3VzZXIucHJvZmlsZUltYWdlUGF0aH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjAuNXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2theWRvbFwiKX1cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgS2F5ZG9sXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvZ2lyaXMteWFwXCIpfVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgR2lyacWfIHlhcFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk1vYmlsZX0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3cgbW9yZVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17bW9iaWxlTWVudUlkfVxyXG4gICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51T3Blbn1cclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEJhZGdlXHJcbiAgICAgICAgICAgICAgICBiYWRnZUNvbnRlbnQ9e3VuUmVhZHMgJiYgdW5SZWFkTWVzc2FnZXMgKyB1blJlYWRzLmNvdW50fVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNb3JlSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIHtyZW5kZXJNb2JpbGVNZW51fVxyXG4gICAgICB7cmVuZGVyTWVudX1cclxuICAgICAgPE1haW5EcmF3ZXJcclxuICAgICAgICB1c2VyQ29tbXVuaXRpZXM9e3Byb3BzLnVzZXJDb21tdW5pdGllc31cclxuICAgICAgICBvZk1vZGVyYXRvcnM9e3Byb3BzLm93bkNvbW11bml0aWVzfVxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgbG9nT3V0OiAoKSA9PiBkaXNwYXRjaChsb2dPdXQoKSksXHJcbiAgZ2V0VXNlckNvbW11bml0aWVzOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyQ29tbXVuaXRpZXNSZXF1ZXN0KCkpLFxyXG4gIG9mTW9kZXJhdG9yczogKCkgPT4gZGlzcGF0Y2gob2ZNb2RlcmF0b3JzUmVxdWVzdCgpKSxcclxuICBnZXRVblJlYWRzOiAoKSA9PiBkaXNwYXRjaChnZXRDb3VudFJlcXVlc3QoKSksXHJcbiAgZ2V0VW5SZWFkTWVzc2FnZXM6ICgpID0+IGRpc3BhdGNoKGdldFVucmVhZHNSZXF1ZXN0KCkpLFxyXG4gIHNlYXJjaDogKHBheWxvYWQpID0+IGRpc3BhdGNoKHNlYXJjaFJlcXVlc3QocGF5bG9hZCkpLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICAvL2F1dGg6IHN0YXRlLmF1dGgsXHJcbiAgdXNlckNvbW11bml0aWVzOiBzdGF0ZS51c2VyQ29tbXVuaXRpZXMuZGF0YSxcclxuICBvd25Db21tdW5pdGllczogc3RhdGUub2ZNb2RlcmF0b3JzLmRhdGEsXHJcbiAgdW5SZWFkczogc3RhdGUudW5SZWFkcy5kYXRhLFxyXG4gIHVuUmVhZE1lc3NhZ2VzOiBzdGF0ZS51blJlYWRNZXNzYWdlcy51bnJlYWRzLFxyXG4gIHNlYXJjaERhdGE6IHN0YXRlLmhvbWUuc2VhcmNoLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFByaW1hcnlTZWFyY2hBcHBCYXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaWdodGJveCBmcm9tIFwicmVhY3QtaW1hZ2UtbGlnaHRib3hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlTW9kYWwoeyBpbWFnZVVybCwgb25DbG9zZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaWdodGJveFxyXG4gICAgICBtYWluU3JjPXtpbWFnZVVybH1cclxuICAgICAgbmV4dFNyYz17XCJcIn1cclxuICAgICAgcHJldlNyYz17XCJcIn1cclxuICAgICAgb25DbG9zZVJlcXVlc3Q9e29uQ2xvc2V9XHJcbiAgICAgIG9uTW92ZVByZXZSZXF1ZXN0PXsoKSA9PiB7fX1cclxuICAgICAgb25Nb3ZlTmV4dFJlcXVlc3Q9eygpID0+IHt9fVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGdldFBvcHVsYXJDb21tbml0eUxpc3RSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL2xpYi9jb21tdW5pdHkvYWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldEhvbWVQb3N0c1JlcXVlc3QsXHJcbiAgZ2V0VW5hdXRob3JpemVkUG9zdHNSZXF1ZXN0LFxyXG59IGZyb20gXCIuLi8uLi9saWIvaG9tZS9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IHZvdGVQb3N0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi9saWIvcG9zdHMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9Mb2FkZXJcIjtcclxuaW1wb3J0IHsgY2xlYXJTdG9yZVJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vbGliL2NvbW1vbkFjdGlvbnNcIjtcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xyXG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSBcInJlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnRcIjtcclxuaW1wb3J0IFNvY2lhbENhcmQgZnJvbSBcIi4uL1NvY2lhbENhcmRcIjtcclxuaW1wb3J0IFBvcHVsYXJUYWdzIGZyb20gXCIuLi9Qb3B1bGFyVGFnc1wiO1xyXG5pbXBvcnQgQ3JlYXRlUG9zdFRhYiBmcm9tIFwiLi4vQ3JlYXRlUG9zdFRhYlwiO1xyXG5pbXBvcnQgQ3VzdG9taXplZFNuYWNrYmFycyBmcm9tIFwiLi4vU25hY2tiYXJcIjtcclxuaW1wb3J0IHsgcmVhZExvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi8uLi9saWIvaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5cclxuZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgZGF0YTogeyB0b2tlbjogbnVsbCwgdXNlcjogbnVsbCB9LFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgfSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSByZWFkTG9jYWxTdG9yYWdlKFwidXNlclwiKTtcclxuICAgIGNvbnN0IHRva2VuID0gcmVhZExvY2FsU3RvcmFnZShcInRva2VuXCIpO1xyXG4gICAgaWYgKHVzZXIgJiYgdG9rZW4pIHtcclxuICAgICAgY29uc3QgcGF5bG9hZCA9IHsgZGF0YTogeyB1c2VyLCB0b2tlbiB9LCBlcnJvcjogbnVsbCB9O1xyXG4gICAgICBzZXRBdXRoKHBheWxvYWQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBnZXRIb21lUG9zdHMsIGdldFVuYXV0aG9yaXplZFBvc3RzIH0gPSBwcm9wcztcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBnZXRIb21lUG9zdHMoeyBwYWdlTnVtYmVyOiAxLCBwYWdlU2l6ZTogNiwgbG9kZXJTdGFydDogdHJ1ZSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdldFVuYXV0aG9yaXplZFBvc3RzKHsgcGFnZU51bWJlcjogMSwgcGFnZVNpemU6IDYsIGxvZGVyU3RhcnQ6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBwcm9wcy5jbGVhclN0b3JlKFwiaG9tZV9wb3N0c1wiKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblZvdGUgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zdCB7IHZvdGVQb3N0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7IC4uLnZhbHVlcywgcGFnZVNpemU6IDYsIGlzVm90ZWQ6IHRydWUgfTtcclxuICAgIHZvdGVQb3N0KHBheWxvYWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoTW9yZURhdGEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdOdW1iZXIgPSBwYWdlTnVtYmVyICsgMTtcclxuICAgIGNvbnN0IHsgZ2V0VW5hdXRob3JpemVkUG9zdHMsIGdldEhvbWVQb3N0cyB9ID0gcHJvcHM7XHJcbiAgICBhdXRoLnRva2VuXHJcbiAgICAgID8gZ2V0SG9tZVBvc3RzKHtcclxuICAgICAgICAgIHBhZ2VOdW1iZXI6IG5ld051bWJlcixcclxuICAgICAgICAgIHBhZ2VTaXplOiA2LFxyXG4gICAgICAgICAgbG9kZXJTdGFydDogZmFsc2UsXHJcbiAgICAgICAgICB0b2tlbjogcmVhZExvY2FsU3RvcmFnZShcInRva2VuXCIpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIDogZ2V0VW5hdXRob3JpemVkUG9zdHMoe1xyXG4gICAgICAgICAgcGFnZU51bWJlcjogbmV3TnVtYmVyLFxyXG4gICAgICAgICAgcGFnZVNpemU6IDYsXHJcbiAgICAgICAgICBsb2RlclN0YXJ0OiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIHNldE51bWJlcihuZXdOdW1iZXIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgaG9tZSwgdXNlckNvbW11bml0aWVzIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkhlcCBCZXJhYmVyIFNhbGzEsXlvcnV6IHwgU2FhbGxhPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJTYWFsbGEsIGluc2FubGFyxLFuIGlsZ2kgYWxhbmxhcsSxbmEgZ8O2cmUgc2FsbGF5YWJpbGRpa2xlcmkgdG9wbHVsdWsgYcSfxLFkxLFyLiDEsGxnaWxlbmRpxJ9pbml6IHRvcGx1bHVrbGFyxLEgYnVsdW4gdmUgw6dldnJpbWnDp2kgYmlyIHRvcGx1bHXEn3VuIHBhcsOnYXPEsSBvbHVuIVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29udGFpbmVyIHN0eWxlPXt7IG1hcmdpblRvcDogXCI2cmVtXCIgfX0+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICA8Q3JlYXRlUG9zdFRhYiB1c2VyPXthdXRoLnVzZXJ9IC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgbWQ9ezh9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxiPlBvcHVsZXIgU2FsbGFtYWxhcjwvYj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3cgc3R5bGU9e3sgZmxleFdyYXA6IFwid3JhcC1yZXZlcnNlXCIgfX0+XHJcbiAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgbWQ9ezh9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt1c2VyQ29tbXVuaXRpZXMgJiYgdXNlckNvbW11bml0aWVzLmxlbmd0aCA8PSAwICYmIChcclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2tlc2ZldFwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbWl6ZWRTbmFja2JhcnNcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZT1cIlRvcGx1bHVrbGFyaSBLZXNmZXQgLSBIacOnYmlyIHRvcGx1bHXEn2Egw7x5ZSBkZcSfaWxzaW4gxZ5pbWRpIHRhbSB6YW1hbsSxXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPEluZmluaXRlU2Nyb2xsXHJcbiAgICAgICAgICAgICAgZGF0YUxlbmd0aD17aG9tZSAmJiBob21lLnJlc3VsdHMgJiYgaG9tZS5yZXN1bHRzLmxlbmd0aH1cclxuICAgICAgICAgICAgICBuZXh0PXtmZXRjaE1vcmVEYXRhfVxyXG4gICAgICAgICAgICAgIGhhc01vcmU9e2hvbWUgJiYgaG9tZS5oYXNOZXh0fVxyXG4gICAgICAgICAgICAgIGxvYWRlcj17PExvYWRlciBvdmVybGF5PXtmYWxzZX0gLz59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aG9tZS5yZXN1bHRzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFNvY2lhbENhcmRcclxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICBwU2x1Zz17aXRlbS5zbHVnfVxyXG4gICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgaW1nPXtpdGVtLm1lZGlhQ29udGVudFBhdGh9XHJcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZWREYXRlPXtpdGVtLmNyZWF0ZWREYXRlVGltZX1cclxuICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50VHlwZT17aXRlbS5jb250ZW50VHlwZX1cclxuICAgICAgICAgICAgICAgICAgY29tbXVuaXR5PXtpdGVtLmNvbW11bml0eX1cclxuICAgICAgICAgICAgICAgICAgcGFnZU51bWJlcj17aXRlbS5wYWdlTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICBjb21tZW50cz17aXRlbS5jb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgdXNlcj17aXRlbS51c2VyfVxyXG4gICAgICAgICAgICAgICAgICBsaW5rVXJsPXtpdGVtLmxpbmtVcmx9XHJcbiAgICAgICAgICAgICAgICAgIHZvdGVDb3VudD17aXRlbS52b3RlQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgIHVzZXJQb3N0Vm90ZT17aXRlbS51c2VyUG9zdFZvdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uVm90ZT17b25Wb3RlfVxyXG4gICAgICAgICAgICAgICAgICBwcm9maWxlUG9zdHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9JbmZpbml0ZVNjcm9sbD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIiB9fSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcIi13ZWJraXQtc3RpY2t5XCIsIHBvc2l0aW9uOiBcInN0aWNreVwiLCB0b3A6IDAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxQb3B1bGFyVGFncyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBnZXRQb3B1bGFyc0NvbW11bml0eTogKCkgPT4gZGlzcGF0Y2goZ2V0UG9wdWxhckNvbW1uaXR5TGlzdFJlcXVlc3Qoe30pKSxcclxuICBjbGVhclN0b3JlOiAobmFtZSkgPT4gZGlzcGF0Y2goY2xlYXJTdG9yZVJlcXVlc3QobmFtZSkpLFxyXG4gIGdldEhvbWVQb3N0czogKHBheWxvYWQpID0+IGRpc3BhdGNoKGdldEhvbWVQb3N0c1JlcXVlc3QocGF5bG9hZCkpLFxyXG4gIGdldFVuYXV0aG9yaXplZFBvc3RzOiAocGF5bG9hZCkgPT5cclxuICAgIGRpc3BhdGNoKGdldFVuYXV0aG9yaXplZFBvc3RzUmVxdWVzdChwYXlsb2FkKSksXHJcbiAgdm90ZVBvc3Q6IChwYXlsb2FkKSA9PiBkaXNwYXRjaCh2b3RlUG9zdFJlcXVlc3QocGF5bG9hZCkpLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBob21lOiBzdGF0ZS5ob21lLmRhdGEsXHJcbiAgdXNlckNvbW11bml0aWVzOiBzdGF0ZS51c2VyQ29tbXVuaXRpZXMuZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY2hlZXJpbyBmcm9tIFwiY2hlZXJpb1wiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhXCI7XHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvblwiO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCI7XHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdExpbms6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMTIpICFpbXBvcnRhbnRcIixcclxuICB9LFxyXG4gIG1lZGlhOiB7XHJcbiAgICBoZWlnaHQ6IDAsXHJcbiAgICBwYWRkaW5nVG9wOiBcIjU2LjI1JVwiLCAvLyAxNjo5XHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6IFwiMXJlbSAhaW1wb3J0YW50XCIsXHJcbiAgfSxcclxuICBkZXNjcmlwdGlvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IFwiMHB4ICFpbXBvcnRhbnRcIixcclxuICAgIG1hcmdpbkxlZnQ6IFwiMHB4ICFpbXBvcnRhbnRcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IENPUlNfUFJPWFkgPSBcImh0dHBzOi8vdHJhbnF1aWwtY3JhZy00MDcyMi5oZXJva3VhcHAuY29tL1wiO1xyXG5cclxuY29uc3QgZ2V0UHJldmlld0RhdGEgPSAodGFncykgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHRhZ3MucmVkdWNlKChwcmV2aWV3RGF0YSwgaXRlbSkgPT4ge1xyXG4gICAgc3dpdGNoIChpdGVtLnRhZykge1xyXG4gICAgICBjYXNlIFwib2c6dGl0bGVcIjpcclxuICAgICAgICBwcmV2aWV3RGF0YS50aXRsZSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJvZzp1cmxcIjpcclxuICAgICAgICBwcmV2aWV3RGF0YS5saW5rID0gaXRlbS52YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm9nOmRlc2NyaXB0aW9uXCI6XHJcbiAgICAgICAgcHJldmlld0RhdGEuZGVzY3JpcHRpb24gPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwib2c6c2l0ZV9uYW1lXCI6XHJcbiAgICAgICAgcHJldmlld0RhdGEuc2l0ZSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJvZzppbWFnZVwiOlxyXG4gICAgICAgIHByZXZpZXdEYXRhLmltYWdlID0gaXRlbS52YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBwcmV2aWV3RGF0YTtcclxuICB9LCB7fSk7XHJcblxyXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcclxufTtcclxuXHJcbmNvbnN0IHBhcnNlSFRNTCA9IChodG1sKSA9PiB7XHJcbiAgY29uc3QgJCA9IGNoZWVyaW8ubG9hZChodG1sKTtcclxuXHJcbiAgY29uc3QgbWV0YSA9IFtdO1xyXG4gICQoXCJoZWFkIG1ldGFcIikubWFwKChpLCBpdGVtKSA9PiB7XHJcbiAgICBpZiAoIWl0ZW0uYXR0cmlicykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgcHJvcGVydHkgPSBpdGVtLmF0dHJpYnMucHJvcGVydHkgfHwgbnVsbDtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBpdGVtLmF0dHJpYnMuY29udGVudCB8fCBudWxsO1xyXG5cclxuICAgIGlmICghcHJvcGVydHkgfHwgIWNvbnRlbnQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIG1ldGEucHVzaCh7IHRhZzogcHJvcGVydHksIHZhbHVlOiBjb250ZW50IH0pO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUobWV0YSk7XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaFVybCA9ICh1cmwpID0+IHtcclxuICByZXR1cm4gYXhpb3MoQ09SU19QUk9YWSArIHVybCkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VXJsID0gKHRleHQpID0+IHtcclxuICBpZiAoIXRleHQpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYS5ocmVmID0gdGV4dDtcclxuXHJcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdCwgcGF0aG5hbWUsIHNlYXJjaCwgaGFzaCB9ID0gYTtcclxuXHJcbiAgY29uc3QgdXJsID0gYCR7cHJvdG9jb2x9Ly8ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDtcclxuXHJcbiAgY29uc3QgaXNTYW1lSG9zdCA9IGhvc3QgPT09IHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG5cclxuICBpZiAoaXNTYW1lSG9zdCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiB1cmw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rUHJldmlldyhwcm9wcykge1xyXG4gIGNvbnN0IFtwcmV2aWV3RGF0YSwgc2V0UHJldmlld0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hVcmwocHJvcHMudXJsKVxyXG4gICAgICAudGhlbihwYXJzZUhUTUwpXHJcbiAgICAgIC50aGVuKGdldFByZXZpZXdEYXRhKVxyXG4gICAgICAudGhlbihzZXRQcmV2aWV3RGF0YSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3RMaW5rfT5cclxuICAgICAgPGEgaHJlZj17cHJldmlld0RhdGEgJiYgcHJldmlld0RhdGEubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgeyFwcmV2aWV3RGF0YSA/IChcclxuICAgICAgICAgICAgPFNrZWxldG9uXHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uPVwid2F2ZVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInJlY3RcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcbiAgICAgICAgICAgICAgaW1hZ2U9e3ByZXZpZXdEYXRhLmltYWdlfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtwcmV2aWV3RGF0YS50aXRsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3ByZXZpZXdEYXRhICYmIHByZXZpZXdEYXRhLnNpdGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cHJldmlld0RhdGEgJiYgcHJldmlld0RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgeyFwcmV2aWV3RGF0YSA/IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8U2tlbGV0b25cclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwid2F2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiBhbmltYXRpb249XCJ3YXZlXCIgaGVpZ2h0PXsxMH0gd2lkdGg9XCI4MCVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3ByZXZpZXdEYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgPC9hPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGVyKHsgb3ZlcmxheSA9IHRydWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPXtvdmVybGF5ICYmIFwib3ZlcmxheVwifT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTEgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTIgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTMgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTQgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTUgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTYgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTcgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTggc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTkgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTEwIHNrLWNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGUxMSBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlMTIgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBBcnJvd0Ryb3BVcEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Ryb3BVcFwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyLCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgZ2V0UG9wdWxhckNvbW1uaXR5TGlzdFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vbGliL2NvbW11bml0eS9hY3Rpb25zXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIHBhZGRpbmdUb3A6IFwiMjBweFwiLFxyXG4gIH0sXHJcbiAgdGFnX2NhcmQ6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gIH0sXHJcbiAgdGFnVGV4dDoge1xyXG4gICAgdGV4dERlY29yYXRpb25MaW5lOiBcInVuZGVybGluZVwiLFxyXG4gICAgbWFyZ2luTGVmdDogXCIxcmVtXCIsXHJcbiAgfSxcclxuICBhdmF0YXJJbWc6IHtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCI1MCVcIixcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCIxMDAlXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMjRweFwiLFxyXG4gICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgIGZsZXg6IFwibm9uZVwiLFxyXG4gICAgaGVpZ2h0OiBcIjMycHhcIixcclxuICAgIHdpZHRoOiBcIjMycHhcIixcclxuICAgIG9iamVjdEZpdDogXCJjb250YWluXCIsXHJcbiAgICBtYXJnaW46IFwiMCA4cHhcIixcclxuICB9LFxyXG4gIGNvbW11bml0eV90aXRsZToge1xyXG4gICAgZm9udEZhbWlseTogXCJpbmhlcml0XCIsXHJcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjE4cHhcIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsXHJcbiAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gIH0sXHJcbiAgY29tX2NvbnQ6IHtcclxuICAgIHBhZGRpbmc6IFwiMXJlbSAxcmVtIDAgMFwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgfSxcclxuICBtZW1iZXJfY291bnQ6IHtcclxuICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjE2cHhcIixcclxuICAgIHBhZGRpbmdCb3R0b206IFwiNHB4XCIsXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIHBhZGRpbmc6IFwiMFwiLFxyXG4gIH0sXHJcbiAgam9pbl9idXR0b246IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHJlbmRlckJhcnMgPSAoY2xhc3Nlcywgc2x1ZywgbmFtZSwgbWVtYmVyQ291bnQsIGxvZ29QYXRoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYga2V5PXtzbHVnfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29tX2NvbnR9PlxyXG4gICAgICAgIDxDb2wgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmdMZWZ0OiBcIjBweFwiIH19PlxyXG4gICAgICAgICAgPEFycm93RHJvcFVwSWNvbiBmb250U2l6ZT1cImxhcmdlXCIgc3R5bGU9e3sgY29sb3I6IFwiIzQwZWIzZFwiIH19IC8+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJJbWd9IHNyYz17bG9nb1BhdGh9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiIH19PlxyXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9e2NsYXNzZXMuY29tbXVuaXR5X3RpdGxlfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi90L1tjb21tdW5pdHldXCJ9IGFzPXtgL3QvJHtzbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT57bmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW1iZXJfY291bnR9PnttZW1iZXJDb3VudH0gw7x5ZTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBQb3B1bGFyVGFncyhwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGNvbW11bml0aWVzIH0gPSBwcm9wcztcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBnZXRQb3B1bGFyc0NvbSB9ID0gcHJvcHM7XHJcbiAgICBnZXRQb3B1bGFyc0NvbSgpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMudGFnX2NhcmR9PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8YiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjFyZW1cIiB9fT5Qb3DDvGxlciBUb3BsdWx1a2xhcjwvYj5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICB7Y29tbXVuaXRpZXMgJiZcclxuICAgICAgICAgIGNvbW11bml0aWVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIGNvbW11bml0aWVzLm1hcCgoeCkgPT5cclxuICAgICAgICAgICAgcmVuZGVyQmFycyhjbGFzc2VzLCB4LnNsdWcsIHgubmFtZSwgeC5tZW1iZXJDb3VudCwgeC5sb2dvUGF0aClcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPFJvdyBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTZweFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIva2VzZmV0XCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBLZcWfZmV0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGdldFBvcHVsYXJzQ29tOiAoKSA9PiBkaXNwYXRjaChnZXRQb3B1bGFyQ29tbW5pdHlMaXN0UmVxdWVzdCh7fSkpLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjb21tdW5pdGllczogc3RhdGUuY29tbXVuaXRpZXMuZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQb3B1bGFyVGFncyk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9FQUFBRGhDQU1BQUFBSmJTSklBQUFCb1ZCTVZFWC9rV2IvLy85V0l3Zi94cFYwTWdyL0FBQXlnYUR5bFZWQm1NUXpNekgvbFduL3lKZi9rR1V4bU1uL2pXRC95cGc2anJUL2lGZi96WnRIRndEMWxWSEZsbmxNR3dCR0ZnQXZuY3BXSVFEUlJsclBQVTlQSGdCTEdnRC85UEJ4TGdELzI4Ly82dVAvbjN2N3VZWHhtbGovcW90c0xnbHBJZ0JZR1FELzFjZi91cUwvdEpydWhsMUhKQWYveGJML3BZUC96YnhoS0FoR0NBRCtHdytVVFMvR2JVbDhQU0c0WkVKZUp3aHFOQXJLYjBzZkp5clllRkwvNitUL3lMYi92cWRxTVJlY1VqTnBJQWFGUmlCREFBRHR0WWZTRHdQbUVBTlBKQWVvV2pxSVNpYkhqbVRXblhHd2RrK2ViVXV4akcxQlBUZURVemJUcG44U0lDWm9OeHovZ21ML1cwVC9UVHIvdTQxQ1htdzRkSXhIVTF4VUtoamQwOC8yYzBMOUxCbmM0dU55a3FiK3dyLyttcFgraElCNkhnYTZGQVNmR1FXMElnZi9jbERjWlVXSkhRWS9KUWliS1FoZ05RdUJMd2xnVWtWdlhVeVNkbDU3VERHR2JWajJwbTMvVWo2MmhGNk9WekRxd3A1Z243K0ZkM0RiZjBCTGJZZFNNU1ZPUFRtdW1aSnJRQzdMYUdLenVieUxxYlpXZzV1THNzekYxTi8rUFRpc3Z0RCtaVitvSUthTUFBQVU3RWxFUVZSNG5NMmQvVU1UVjliSEp3bkVkaVprVEtMSlpqY0VpRklDUkVEa2JVVUZsU0N2U2dWQjJWcXJ0VnEzKzJKOXFUemJwM2I3OUVXM2YvVXpMNW5KekgwNzU4N2N3ZjMrMHRZYWNqK2NjODg1OTl3N2Q3UlU4cXBmSGh5ZFdob2ZINTVzTkhSTmJ6UW1oOGZIbDZaR0J5L1hqK0hidFVSLyt0RG8wckN1RlFwNVJ6bExtcWJaLzNEL29GRFE5T0dsMGFGRXg1QVVZWDNveXJDTDVsRHg1TEJhb01OWGhwS3laeUtFZzJPTnZBVW5RaU5BTGN4OFkyd3dpY0VvSnh5YW1KU0NDMk5PVGd5cEhwQmF3c0V4eXhaUjZMcVVoYnhpVXlva0hCelB4Y1B6SVhQakNpRlZFZFluZEJWNFBxUStvU3J5cUNFY0hGYUg1ME1PcXpHa0NzSXB5enVWNHJteXZIVkt3ZWhpRTliSG9rVk9qS3pvT2hiYldXTVMxc2RWdXlmSldCaVB5UmlMME9aTEVNOVZYTVlZaE1mQ0Y1OHhPdUhFTWZHNWpGZU9uWEJRT3o0K2gxR0xtanVpRWRZYmhTVGpDMHU1UWlPYXEwWWluRGgyUHBkeDRwZ0loL1RqZGRDdTh2clFjUkF1ZlJBRHVzb1ZsaEludk56NFVBWjBsVzljVHBadzZnTWEwRld1SUZtc3loRk9GajR3bjYzQ1pHS0VROGVjQTNuS2EwUEpFSDU0RC9VazVhbDR3dkgvQmcvMVZCaFhUL2lCWXlpcGZFTXhZVDFXbHRmWmlvZW9JNHM0SE9GUXhHV3VBNUpyWFpwZHZ6b3pON2ZzYXM3U3pQcjg3S1ZXS3c1b0xqK2tqbkF3U295eGh0NjZ1RDZ6M0Y4cGxjcmxtcVYwUi9hLzE4cjlwVktsc2pDM1B0dktSY1BNRlZETERRemhxSFNNc1VaOGFYNHVYZW92KzFnYzFXcjlwZHJ5MWRsV0ZNckNxQnJDS1VsQVhXL056NVZMSUZ5UXM3K3ljUFZpVGhvU2t6VmdRamxBRzI5WmlzNm5MSlhuNWx1U2tBaEVrRkFLVU5kbTV5cGxlVHJmbEtXNWkzS01NQ0pFS0RNSDlkWjZyVCtDOWNLUXRmV1dEQ000RndIQ1FUeWczcG9yeGNSelZTN055REJDRVZWTWlBZlVXeHNWSlh5MmFwVTVDVVlBVVVoNEdRdW81NjZxc1Y4a3hvSndVU3dpckdNckdYMCs3dlJqTVY3VmtJeTV2S2lBRXhIcU9FQjdBcXJtY3hocnMxaEVQUnJoSks3WTF1ZlZPbWhBYUZmTkM1YjlmTUp4RktDdUpXTkFWN1V5MG94NS9ucVJTNGhMaEhvcm5aUUJYVlZtVUlTQ3RNZ2pITUlCemxZUzViTlVYc0I1YW1GSWtsRERSQmw5SFF1NHNIRCsvUGxQQXJMK2MyRUJ5WGdKZzVqamtyRC9HQlZsOUJsNENpN1lZRDFjV2Fnd1oyVWVnOGlMTm16Q0t4Z2YxZWY2QVRvUlc0anpQSUM0amtIa0ZPRk1RbFF0bzgrRkZ4RnJoTzJRZEQ2bHlKYWxxeWhFWm0zREpNU2tlbjJHV0NWZHUzR3Vhenc1T2hpeU5JTkFaQ2QrRnVFWVloTHFNNFNMbnJ2Uis1VnJ4dk9SOEZ4R3JydWlFUE5qT0VKTW90RFhpU0J6N2tsdjc2cHR4R2ptNjRySFdNTE1SVmJLWUJBaWZGUy9TS1NKdGE5NkxUVmo4d2tZTVJHVjVhYzA0UVRzbzNxTHlvTTJZTytUUHlzQTVESldFSGt4VDIrRVU0UjFUQndsUThMZlZoM0NYaFVtdE1XT09mMkk2cVpBTGFRb3dnYkNSK2VJV25UdHFRdlkrN1VpSTNMTXVBRC83blBVZmdaSmlPaGI2TE5FbEZtNzFnSHN2YUNNc0tlSFFWaWJReGlSN0dtUWhJZ3cweUpyTlN0UmVQcTdPa0tXR1V0d3RLR0NEVUY0QlJGbVNCKzFFNFduR3dxTjJQTUpqVmlCcDJMK2lvZ1FFV2FzSlQzaG85LzBCdlJQaFlRc3hHWHBZQk1tUkZRek9hcWxIUVRzWFZWcFJBWmlQNXo0aWNvbVJJZ3g0UXpobzE2aVNNU0lETVJTUzlLSUlVSkVhNGJNOVg2aThLUXE2M3NpQ1JIeE5OeTBDUktLVE9qdFRDK0hUZGhORkw0VUUxSldyRndFRVVOR0RCSUtUS2kvZjNCd3NQL3MyVitiemJWemx0WXMyVjhYU0JTZTFHVjlEbUlhQWd3Yk1VQW9uSVhQdWdnWGJxeXVQdm42NlRkZk5kZis5b1FDVkpyMUhaRjVzUXdIbTZBUkE0VENRS28vb0Ztc3lNbjZRNVZaM3hGWnBGWmdJNDR4Q1lXN0ZQb3pGZ3hUU3JPK0l6TFlnRDJOWEo1Rk9DVU9wUG9GTktMYWhORkRUOFYrTUdQa3B4aUV3bWM5cFl5b051dmJPaTl0UkkwbUJCY1ZFa1pVRFVqNWFRbXlZV0NKNFJNT1E5bGV3b2lxc3o3bHAzQTR6UStUaEppQ0RXOUU1WVJVeW9DTldDY0k0ZTZNUGtzV2FLN29uTi9iKzFSVk82TXJJdGFBdTI1K3g4WWpoRmUrK3R3YUMzRDFIejMvL1B2WHF6ZENCbGFmTUVnamdxc29meVhjSVVUMFNGdVZ0YTlwd0F1T3RmNXM2Wk1ncVBLc1R4cXhjZ2thcjljNzFSRDFqR3ZDK1hLYVljUnZnb093UVh1K2VmcGs5VWJpUnF5QlBYQ3ZydWtRd3R1RitySzFrcURLVUZiVS9NUUJWUzhpbkVJRDlsS2loblpTdTNsUkphTk1FaVE4aFkzWUR5NmlPbTZxU1RocHVPbGtTM2w5SmxUWVRjR1ZjTWROTlV6RnB2a2R0bVlJVVBWU0VGQjRqWUYxVXczcHBKcmJZVHUzK3FGOHRJY3NiT0NVNkxxcGhrejNGenZiaGNHdXhmSHk5Y2k3NllSUE9Bazc2ZFZPZnlaZ3hLZGNFdzVjSDBpRU1CeHJ3SVZ3YnRJblJOU2t5OTdQOVkzSVhTTU5ETFF6R3lOSkVCSnVDa2RUajNBUTBVVDA5N1E5STE3Z2xaNERQVzNUTUk0U1FaUk4rb01kUWtTdXVPZ1R1cnU5UkRFVDBNaEd4c3hrak9LYmF3a1FodDEwQVpVdmJFSjR5OUNmaG1tdmdjaGJBbzVzbTBiR1ZuRnJRUDFrREx0cEJXcG1PSnVKbW4xUUZnSU1UTVBPVGd3dlVWemJMR1k2TXRzSlRNWVFZUm5jYTdPUDFtcTRiQmpzNWR0R1pCY3oxaFQwQVMxUE5iZVZJNGFTUGp3UjdZeW9vZllNTHdWMzFDd2pzaFBGeUZIR3lBU2wzbFBEYmxvR2JYakZJUVE3TkoyaXRHdkVKK2NZWHo0d3Nsa01BMXFlbWxFY1V5VW5vdDJ0MFZBckoySkxiUzFOZi9mSTlhQ0grcDVhM0J4UmFzYlFPTURDelM1Tk5ibDgzOUVDK2NVRGZnd2xwZGlNc2hQUkprUUVtbHdWSUdRYjBET2p5dGtZem9oZ3Q4WUtOUnJVemJkRkhZRUtFMW96MERSNWdJNFp0NVc1S2xHNFFTUFBqMXFFVWhVTmczQmc1SWh2UU0rTTdldUtYRFZNV0lMNlVma2xpeEN4c0pnblR5ZDBDUWRHcm05UklaUmhSbE5WeEFtTkEzeFl3VnBlYUpoT0tYazZvVXRvODRrY1ZMMnJoc1lCYnRIa2RJc1EzY0VJeXZteWdaRWU4UVFrWFhWREFXTTRtRUtyNEZ3dXBXRTJMT2lIUmh5K0RhejlmTWF0NjdFWnc4RVVyR29LZFUyMktuVTFNREt3M1ViTVA1TFJqTTBZSmdSUDF4U0dOTXp5bHlLc2JHNlpuQXdQMnpHZXI4b0cwMEZ0VkxMdWRsU1ZOMStROFNnR28yVERMVCtxd1FsZm55WFRZZTFUSUFGQ2pPMmJrUm5EaERWb3F6US9wUzNKcml6cytYMHpGcUhEdU4wVEVUSk1DRldtK1NVTlBzdW1yNU94dFArTlZBeGxNcHJHMXNhMUtJemhvVURwSWorT0lhUVNmbVVyK2pTTWJjandVS0NqM3hiaGNJU0VQNzBWMjRZZFJtTnJlMFFTTWp3VTZGUkdiaGhEU0s0TzA5TnRGVFowWkJiTkxkdVNlRXJDbllDRWFCSENoYmVXSktFRGFiUzNyNk5OU2RnUVNJaTVTUTN4ZkFVSm1DNW5WQkptN0xoVGJHODVsREJtZUNoUWF6L1gwQkNQSDFCbGFWVTFvUTFwRkUyTDhxaG5CT0FrZnRsQXo5UW1CQUUxK2xuWUJBaGRTdFBHM056ZUdMam1nSGJVWTIvMzJMSmRtU0NFVXI2TzhGSzZMRTJLME1VMHphSTFNMjNRN2Uyam80Mk5qZXUyTm82T3R0OXNiaDBSRGdXdEVDMGIvdGNSZGpndFVOTm1EY2orNzV0RWZRVVZOUlloSEV1cHA0Q0FlV2pGUmtOdTRSZ0FNNHNaMFlkcFFxQ29zV0lwbkEvcHBVVk5RR2dhdDU3djdEeS9aVVF4czVsNVlYMzQyOVBjcFV2eEpobjJnSVlpS3VQVGhCVitQalRiSHk5K2JHbHhweTF2UnZQMm92UGgzZWU4THloK1NyV01RRUt3THRWcFFuN0dOOXJPRUIxRzZiTEF2TDNyZlhpSDR5VTBZVnBNaUttODlVdlV4UUxUM01xNytQeGpYOS9LTHJHTTdtY1hYN0EvVEJQV3hLTzNDTUgxSVlPd3NzbnhRS085MngzbHJxUVJ6ZE9MM1E5L3pQNDc4b1JMOEJxZjRhWDlOem1FNXEzQUlCZFB5ODFFODBYZ3c3dTNtYitlNGt1U3NDd3V2YTAxUHR5blljUlNYaGNqTk1qRlczS0V4VzhESmx5OHpmeXd1VWR1RWdGUEp1UkhFYjAyT2grbUYzaUV0MklRbXErQ0gyYmIwQ0FCUWNKQlJMK1VVZE9zY0VLZGNWdlZQRnhrZm9PUldTR0hBblJNQzBPSW5qZURrSnN1ekozdUlKOUxKa1FqMHlWY2ZNWDBFbU5yV3Bhd2p0aTNZQkJ5ZzJrZ3BjbWEwRFppMXdQWVRtSnVVbU1SRTlyN0Z2RGVFNE9RMzA2MEVOMmFoaE1xaENyZTJoVVhSRlJaQ3JVeG5MMG5zUFJtRUZiM3VNTTMyeTkyZG5kM1htU2kxTjdGOXF1ZDNjWG50M2gxYjVFS3BVQWJ3OWsvQlBlQUdZVHBhWDd0YmRnYmJoRjNOZXp1V3p2RDNiRXoydlJReEcyTS9CaHFINTl4SFJTL2JuTkdFbWY1S1Bnd0k5QkFoRk9vc3hpTVMyVmo5L1VqaVRFTkFVTG5MQVo4bm9ieWZYc21SaUkwZ3BML3VNa1lDVURvbkJpQzBrV09kVmxNbEphcGtYbDl0cXN6MHEwUWsrR2tZc0xPbVNqd1hCdUxNTUxtakhIbVJGaXlpQ3duVGZlTGJoN3FuR3VEemliU1hmMjBNRjl3QVUrZElCSGxma0NHTlYxS1FzSXJxUE9sK2h6akI4dTdxZkdhQkR6eFd1cEhzQ0lwa0E4NzUwdWhNOEtNd3lhMmQ4aEdVNE1DUEhGV2lwQmVHNEtFblRQQzBEbHZldi9ROVZQSmFSU1gwR2hUNndxSFVGQzFlZWU4b2FvbWVJdzk2S2E4NnBzM3dyUHh2SlFaWjhTRS9sbDlZQkdzcnpOL2RIVlB6azNwU0hQcWpBU2gwV2JOUXZFSzJIL2VBc2o1OUVrRlZ5dVNIVkV5MUp5U05DSDdMbEZSbjZhQWZPNkpQbTNpcXZaU050YThQdEUxNDZrVE1oYmttakJkNDQ4OThOeVQrTmsxUmp2UmxYekN5Snp4SlZtZTgwd282aVlHbmwwRE1pTGRiT3Y4Y1BtRFExSExVcTRKUlQzdndQT0hRR25LV2lBNldsRnk2Z1FqUmplL0kvNitSUzZIZnc2WVJ5aGZ1a1VVcytaMnhkOTdDajBITEhaVG5Ydmw4M1Q4dzFFWUdjWXlxeVMxSmRnL0REM0xMWDZxUk9mZjcxdkJGVGI4azhRR3B0MVJmTU85TjV5L0J4eCtIaCs0STRwWm1Eb3FZNEtOWVRZYUJwdlJ6RFFtUVRjUWhCbkJQajV4cDRMUVRUbUZxU1BFQVREanJuMkwxbDJXclV6ZCtqOEgwRThvN3ZHL24zOFdnN2dYUTlnMXBROG5CdFFQK21ueE8vdVJ6QWVzcDZMdU9vK2ozaEVqQ254VThEd0NlYmVKTU9uenlqYlhUY0RLcHVnK1Zzc3dvbVBDM3Q3dmhEOUJFRWZUZ2lZR2RUK044RVpCWGxIamFCcGFLQllmOEN4VjNIZit6NzdvQnhnWjRlc2x1TXRENm80aDRic0N1Q25mUlFTbVlvZURkdE9Pay9ibVJKOHZmaXA4UXhhdnFVL2ZFeVc4NjZzbGZrWEF0SGlSWVRaY2tEc2tvanRCT1VISSt6dHZSRDdLdjNhQWNkZVhLQ1htaEYrU3JsYkZKYmpadVhpb0VVWXMzbkgvK0VEZ3BPWVdjMkVmK0c3T2lCbjN0WW02Kzh4dVcwQzFQZkVocVE1S3I5WTk3V1NZcG5jNzJxVGcrSkVnRTdyaUZHM01PL2NFOXlhS0VxS2o4a3ZoV3FIb1hTdjVmdElzbXFaOUJESGozNDBtaUROR3U4cXIxcnpmTGJ0b1k5K2JLS2hyaEFuUlVmOUxVZlhsaFJUN3NvbjlPNDNKeHAyRDdoOElkckV5Z2xUZklXUVhiZmtsSmlFL1lRZ1RZZ2RSNktoZXNHR0lIMllzUVBCck9VK1VjTzR2NWQ5Qnl6aFNRNmtzUkN6eUVPOEthdktYd0Z0ZTByd2p3cnc3YUFWR0ZDZkV6cSt6S2tvYXhidXNLMTRQK0R2RlJnWUJ5Q2xwdVBjSUM0eUllZXRSdGJ3bGl2dCtSUFgxb01GL1FBempvbWxPdDVSL0Z6VGZpRkM2NkdqbGplaVpOdE80RTdUalFVTndVdFpvZzBIR0ViTmJLcmpQbTJ0RXdRb3hwT21ib3FkbXJTUnhWNyt6Zi9EZ3UyZDNHaG5STVdLempYelpHZXNaVXRHZDdGd2p3dW5DKzUzdWlaOWN0MU9oZTJSYm1EKzN5a0FlOU1SSytIblJ2ZnE4dlVSZVU1aFdkZnBOeEdNWTNkOUNjUk9xWkR5eDBxSDQzUWpjbFRBaVhYaWFmZ2xkUUFBQW1qZXhnS3gwQ0wzZmdyZkVhRW04NUxjV3k0ekY5aDdXWDVncmZQQWRKWnpOUkVHN2phSEtIdWFlQmFZQmkyOWtYa2xMYjNIRDc1bmhCQnRzTU8yb3V2SXl3clBzdGdGZm9qM1UrVlZTeVFMeHJpQjJ4d1lkVEQzVnBqK1ZaalJNS1FPbUdhdER6UHVlMk1FR0gweDlsYWR2eWpFV3QvYWtESmlta3dYdW5WM3MzaW5qS0RTby9wV2pOamJtR09iL3ZGcHBJck9nSnlwWklOKzd4bDRveWhKV204M1A3cDNzKzlkdHpFYWhZVzU5MzlkMzh0N2JwaFFrMlE3R3ZqdVA2YWZJeXRTWGpmZVJwYjdUcDE2ZkFYWUxEZVBNMmYvOXZzLys2eWZ2ZmRiRWZ3bHhvd0wrL1llc2QxaUNqUXdDOE41SHJpekNFNmZPQ2lBTis3U2I5WGRPOTNVK2NRK1BTRFJMSmQ1aG1acWlFQkhML0JEaER3RkNaOWYrdGIydmJaQjBSdWFNZTM2aFMvZ0RuckFTOGpXWjk1QXkrc09ZWlg1WFZaTFFoWFJNYVZGNSs5eG5YdnRuYklJMlJFL0ZhdEJKNWQ0bHkraWVBbDNoTUY5bkVvWUlYWkN6RnFaelh1RjE4R0JHa05DZWlqakdVS05OOW4zQWRNcEExMjAyWHpiTElYUnA2RDhLRW1hejk5WlFqS0c2Vy9xZHp0Ujd1YkdocHBtMitNU0VMSVVJTFVhb1VXb3IyS1NSZnk4M3RkN0hoWnBxOHkvWnJBTENiUFl2c0JrRFZXbVVkNnVUMFFZVmFwcHZEN09LQ0xPSFlHYXMrckdDRjJVQVFqTHhnLzIyYXZOZU5xdU1FRGFqWDVXeVV6MkNzQjdheVFDcm11cmFZVllwWWZaUU9CdjlxalNYcDVaTVNNSndRSVZDVGZQSGJGWXhZVGI3bzhCVC9YNDNONHpDaEtHZUJoQnFBaDZxa05EeVZPNDNlalViMWJlUUlRd2hpa0pOdFhtWVRZUXd5eTl4S2loQWlEQlVvZktybW1xVkFGUkhtRDNrSWJxQmhwOElrWVFCUkg2dnB2cFpscFE2d3V4aG1vbm9CaHBPdVMxRDJFWGs5bXFxYnlsQWxZUWNSQ2ZRd0lBSVFyOSs0K1Y4RnFCU3dteDJqWUZvQnhyUVJYR0VmcmhoOTJxWWdJb0pXWWhsT01pZ0NTM0VIRGZuTStaZ0FvU00zTCtzb3dCeGhLbkxUblhEZXJTa1dtVUNxaWEwSWlyeHhiV3JHck5wRVpFd1ZkZno3S1lwbVFlVElxUVFwMmRGcFpvOFlTclZ5TE8yODVzL3NNZWpuakFiN2xEMS80UWRPSm93TlY2ZzEvbmVhdkE0Q0VNRjNNb3I5TGp4aEZaaUpDZGk5VWZlYUpJZ3pMNzFvazExNWQvNFlVc1Fwb2EwOE9Yc25EQ2FHR0cyRTFETHpmc1NvNVlodEpiOW9aT0N2Q2lUR0tFYmJhWi9Rc2FZS0lTcGY2OTA4eEt4WG9JSUE0OXhueVgvQUVsb1QwVXBENDFBbUxxLzRPMkFDU1pobU5BbUtCUSsvM3gvZi8vZ2dhTUxIZG4vZm5Dd3YvLzU1NFVDaWpEN2Rqb3Q0NkZSQ0ZPcDcxMHpWdGRFSS9FSi8vQi9ENWh2OUtiMHh6OWdDQS94TVRRNlllcCtjeHFZaEVIQ1A2SDRzSVR2NUljYmdkQ1pqZFVkSVdBeWhMOUVHV3drd3RUOW4xYkVnSWtRZmhGcHJORUlVNm1majUzdzU0Z2pqVXFZU3YxeXJJU1JIRFFtWWVxTGg4ZEcrRENhZzhZbEZES3FKSXpERjVOUXdLaU9NQjVmYkVJdW95ckN1SHdLQ0MxR1ZzeFJRbmo0UzJ3K0pZU1czdjJhQU9HdlVmTkRXR29JYVVQR0pWUmlQa2VxQ0MyOWU2aU04R0dFK3BNbmhZU3BWUDNuaDdFSiswNCsvRmxxaFF0SkthR2wrcnRmZm8xTTJOZjMwVzhLcmVkS05hR3RMeXhUbnV5VEpQeVRSZmNmVlhNdnFDUUliWDN4N3JkLzlWazJRUksrZi93b0NUcGJTUkU2dXYvdVA3LzlFV0w3L2N0SFEwa09JbEZDUi9YNjRLTkhYejUrL1B0N3V6OWpNZGtObXZlL1AzNzg1YU5IZzNXbFFZV3Avd2ZPdyt5R0djRDRkd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21hbi04NzFmMGU1YWM1N2RiYjM1YzExZjI3ZGFmODUyM2NhZC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPRUFBQURoQ0FNQUFBQUpiU0pJQUFBQThGQk1WRVZ4NHZELy8vODR4dGsyWjVaVWlLZ1NFVW5DKy85RGRaNWw0Tzl0NGZBNHl0dzBaWlYwNVBGeTV2TTNhWmdRQ1VVblJYTlRoYWJpL2Y4MllaS2Q2L1FQQkVNa3c5ZGIxdWJZOXZwZHBiN0ovLzgzaHF0R2VKOFFBRUkyWDVITDd2UVBBRDBoTjJjbVdvNjR6Tm14N3ZhRjV2SkprTE1mVjN1SXZOSHQrLzNwK3Z5NzhQYzNyOGhEZnFLVTZQTnQxK2Mza3JNM25yeGt1czltek45WWxyTTR1OUdLMnVZM3E4WmFtN2RrdmRKODF1TW1kcFFyanFnVkpsYWw0dXN2b0xnamFvcEtvYnVUeWRrcWlLTWNTVzRXS1ZjWlBHVVRHRTU2bzcwYVFXZ25mWm9OQURnamE0b3BWNEFnWEg2YjMrbXhhWURyQUFBUGNFbEVRVlI0bk5YZGUzZmFPQllBY0dFbml3MDJUREVZc2dtUG1ZVjBlUVFUQ0NITlpOTEp0SjF1cDkzcDkvODJLNXVYRFhyY0s4bWtlLy9hMHoxbjJ0KzVrcTRrUzRJVWNvL2hxTlVkOSt2MXdXRGdlUjd4UFBvL3B2VitmOXh0alliNS8vVWt6Ly80cU51ZkRvaER3NlZCMGhIL1FmeC9rRUc5M3gzbCtZL0lTempxMWdlSmpNZ2lrUTdxM2J6U21ZZHdOSjdTeE1sdEdhZmplUFZ4SGtyandsYmRnMlNPcTJ5WlZob1ZEcnRUYk80WXlvSFpWQm9VNnZNMjRUalRycmwvbGlsaHJXNklsd1ROWkwxbTZGOW1SamdlR09SdGtRTXppVFFnSFBWcFdjc2pIS2R2b0VkcUMwZFQ0K25iaCt0TXRSdXJwakJYMzlvNGFMMmljR1MrK3pIQ0dXak42alNFdzd6enR6ZE9OZnFqdXJCK0toK0oyMnI5NU1LeDRzeE0yZWlPVHlwc2tYenFneWdjVDYwN0tnbnJTajdQODNkQkY4SUtScVdtcWlCc29SdG9USE9qeGJ2NS9PTGk0ZnJoNVdLK2lOekVpUXZYVmFnY2VDRTJnYjVQRnZPTHV6ZWJLQVkwT3AyT1hieStXSGhZcEVJYXNjSVdRU1hROTZQNUEzV2Q3YUpvYjZKY3B0RExlWVJENHRPSUZQWXhDZlI4ZDM2WDRhV0ZhMmJRdVptN0tLVFR6MUU0SENDQW5yKzRPTkFkQzJOa0o3aGVZSXpPQUZYL01VTE1FRU45ZDhjOGxqQnVyNTBiakJIWFVoSENNU0tCUEI5VG1DU1NHdUgvZVV4TGhRdW5jS0FmUFhCOFBHRnN2STdnUm1kcVhqaUF0MUIvenZYeGhiWWRsT2R3b3V0Qk95TlFPSUlYQ1QvaU5WQ0owTFk3TjRnMHVzQkpIRXpZUXJUUU9XTUFCUXJwbVBNTzBWSmg0dzFJQ0I5alBISWg5RW1FdHYzTEE0SUkycXFDQ09GQVNRc0ZDR2xMaFUvS0hjaUtDaUNFejJQOGhiaUZRb1IydVFqdmpKQ3FJUmVpZ0RJZlFFZzdZd1RQb3B3b0Zack5JRVJJaVF1RFJKa1EwUWRCUUlnd3ppSzhvY3I2b2tTSUdFVWppQThtdE1zMm9xRktpR0poRjE0SEk1QVBLS1REalFzbmlvdUdVSWdwOUhkR2hYYjVCdjUzaTB1L1NEaEVBR1dGSGl1ME96TUVVVFNCRXduQmZ3UHgzMEdCWUtIZG1TQldhMnBDK0dvQ09zcWdoTFp0Z2Y4QjdrQkZXRWNzbDZSek5SVmgrYklFSi9MMzRMaEN4SXBldUI3VXlHRm5CYzhpdjJid2hJaGhsQ0RhS0VwSTJ5bUN5QnRRT2NJaFlsY1VQbzVpaGNHc2hPaUxuRVUvUjRqWXMvQWc4MjNGSEhhVzhDenlSaHUyRUxQeGl4bG1zRUk2Mk1DSm5FazRVNGpwaE1nVTRvUkpFdUZFWmxka0N1RStkQXFSd2lTSjhMNElGU0lxSVRxRlNPRTZpVkFpc3lveWhKZzJTdndISEJBckxNOUtDQ0tyblRLRUNCK3lGaW9JN1lwbElZZ3N6dEdmOURFZkNGSFRHU1VobmRnZ2lJeDJlaVFjb1Q3eGdwZUZ5c0wxV0FNbUhpK2tqb1FEREJEZlNORkN1Mk5aR09KUjNUOFVJdll0aUVvanhRdURGWXA0TkFVL0ZPS09XZmo4cjJqR2hKdlJGRXgweFVMVU1FTThGK3RURU5yRm5SQkVkUHNpSVdKbkpoRml5NzJTY0YzMDRVUm5LQkJpWmpORXFSc3FDUGNkRVVaMHAzd2hybExFSzBNMFVFVzQ3NGd3WXJaaVpJUlQ1SEV1SHc5VUVKWnYwa0lBTVp2RXRCQ2JRby9nRzZtQzBLNWtoQUJpSm9scElUYUZDdlZlU1JoWUZvNllTV0pLaUUyaDBsQ3FKRnhpaWVra3BvVElnUlMxMDYwbDdFeEtTR0o2QXI0WEltc2hVU3NXU2psY1dZY2hJNlpxNGw2SW04NGtRdFEyb29idzlqQ0hVbUpxWXJNWDRrODJ2NlpRUm5TT2hiaEZ4ZXNMSmNUOVo5T2RFTGN1UEttd3pCUktpSU5ESWJwVW5GREl6cUdFdUNzWVd5RituSGw5b1pDNEcydTJRcFViTUNlckZqeWhtSmdWb3ZaSVR5NDhyb2NBNG5idmxDak9aeExocTgxcElNVHR2SWFvRmtQeWl2TlNJREV0VkNpR2NielMyZ0pJM0RUVHRSQzlidHJFcTZ3UG9jUk5NeVhLSXlrNTJSci9VaXprRS9kQ3BaR1VxQlZFQmVGTUl1UVIxODJVcUpiN1JIaWF2VGJCVUNva3JvdCtJbFM0N1pqRWFmWkx4UU9OaURqWUN2RnIzMTJBRHMxcUNvdlNGUEtJeVRxWXFOY0tvdkFGV09YTGpMUWJjb25KRW9xb1RtaldRdnlzQnY5MVRkNE5lY1NrWGhDTmJraE84djB3Z0FHWlJHOHQxT2lHNkxNbUd0K0FWWWh4UnlUcTFUQVJvcHNwK2pzK3NKRXlpWEZGSk9yVk1BazM5N01ZY09BeE1hNklWRGpWQU9Lbk5VZ2hmL1VMSWs0VG9kNERGOWl4Qml2RStCakVXS2d6MEJCOFNjUUpnY1dRUzZSRERkRWFhRWplWnhPRmkxOEFrUTQxcEREV2ZJWUZtVVNVTUlDWENqYlJIVk9oK294bUhaaXJDR2doUG9WWklwM1ZFSlhON216a2U4NWJremlnUW8wNTJ5WlFOUkVqUk5WQ050R2pRdjNYa0ZBVEc4eDlpNGtpTUVWMEMwU3pXS3lKaUJPS3FEc3p5c0lkMFJtU21va1huM0s1OTFSUjkrMkpUbzFvbHNOMTVISjNUV2tjUFNRNkxkSTE4aXBaRHZjUGNSTlNIdEh0RXQyQ3Z5VkNGNHBBb1ZLdFp4RGRNZEZhTzZYanpPQk5aN3NNMm40Q0VOMCswWjNTYk1NRFhuV0czZVhXRzJWU1JMZHVUQWlkdllIdTR4c0N4c1E2MFZyL1pnTDBhQVRvVFlYSzBrUWJUY0taRXUxcGFZb1lBZm9pNEYyTW9tVU1hRmtEazBJUVVTb01pdVo0TkpwR2hjUno5TituTVZBbWNoUlM0b3ZlRzBQNmhmNGdTb2FGZEpvMDBYa25xb0xZSFgwdElYRXM1YmUrZ2t2RHZIeUV4Q210QkdrVXZOZG1HMCtnWmI0ZnJvbVc5Y0kxOG9SQk1ETlpKUElWVW1KcHlic1J4WHMzOGRKY2xjOUVaSEJPa3dyWFNvd3NKRXRZRHZMeXhVSmo4OUpNMElaS2pTK0h6N015aE9WeXB6TEx6V2RaanprSkV5THRWNVA0aWQwM2ZHRVEySmVyVW40K3k3bzN0ejVrRVMzNmo1KzhuTVhJTjRmQ2NoQUV4ZG5FeXRWbmhkOU5yZkY1eEVTNW5MemNuYTJmZ2o0ckJqR3RFMVJ1WnF0bEtWOWVMSHdtNmdjeHdNUVlTU25MNVdUMThuSTd1NzFkVFpaVy9yaTFjR3htcjAxSzNFQzMySlBnMXNJdVVUbkNya3c4ZllRdEkzdmVQekF4SEJMY0l4SC9kOFRReUxlbkg1cEloYmxNMjM0WVlrU0ZlWlg4SDRJWTNodjRqdjlERThObi9iTVk4Uzg4c01QWlJqT1VSNGtUdXNLdWdmTTA3c3YxSnU0dTB2RkhyYldMN2o3R2RXYk1MOVB4OTl0Ti9LbzVPUWpqOHpSYTVjSW5MMEZRM2tSUVBEdDdzNHViZnhWWVVmc0hJLzc1NzEvSys3Qi9iclMzMGRBMHJzKzFxUitnOWVkMlVFNnQ5WXJwZFJLYnlCSlNZR3BGVmZtNWNiNlBSdldEUmx1TkVxSHFVT1A1NzRxZGcrV3NuTWdRaW9BMGVyKzlWeVdHMzNYT2wvclJaYWRzMjFqaXNWQUNQRCt2OWo0cWJnTFFnVWI1akxEbnZ4ejdJTVFqb1JSSW85MzdWYW1waHVzendrcFhnQmZGZ09FREVBK0ZFR0RjSFQrcGJLYVdOaWZaMGJNYXozOWdKaEJDckNrQmFWUDkrZzFOcERPYXRSRGJFZjJJbDBBQXNhWUdWRXBqdUwxdmdieGY2YzhEYmdMbHhKb3FrQkliVHpoaXVMMHpnK3FJSHJubXQxQUFzYVlNcE5GN2k2ci9jVGRFMzEyVHRGQTVzYVlCcElQcWI0aTZFVmZEalJDK1YrTy9reVpRUXF6cEFPUGFDQy8vNGY3K0lYaHE2bC9BZ0FKaVRRdEk0K3V2WUdKaEx3UnU3ZnVYSFM0SlNxeHBBbWxuL0Fpci9rbXQyQXBCOWNJak40QXVLQ1BXZElHME0vNEphNlRkbEJEU1RHRmpqSlJZMHdaQ3g1dXdrQmJLbTZrZlZZQmRVRXlzNlFNcDhUT0ErSmdSU3B1cEg5bFlJSnRZTXdDa1EycERTdHcwMHQzYkpsSmdHUTlrRW1zbWdKVFlsazdoQ2xtaHVPZ3JaWkJOckJrQnhrUnhGdGZsUGlVVUxoTDlTRElUUlJCclpvQlNZbmo0eHBCb2J1cmhCeGsrY1dnSVNJbm5JdUtpY0Nqa2p6V2Vxd0U4Skw3NWp5a2dYV3Q4bG84ejZmZmF1RUJTMUFFZUV0TW5GZlNBNHRKZk9CYnlmbmJGdjhZVmVnbnh5aHlRWnZFdHA1Mkd6d3doN3dLVTl3NCtHUVVROTBKOTREbDNvUkd5M2sza0Znei9XcStWWm9rN29RRmdtNXZDK3dKTHlDMFlMblRKQkNGdWhRYUE1ejNleGFGVUNqTnYwUEltcC81Y3U1M3VpVmNHZ1I5NEtYd3NzSVhjSlBvMzJrbmNFYStNQWR0ZmVPVXc1TDBqekUyaUYrbTMweTN4eWhTUTMwYXRkQXF6UW40U0RiVFREZkhLR0pDN3RSankzL1BtejcvMWkrS1dlR1VJeUIxSE13UHBrVkN3TjZ3MWMwc1JyOHBHZ0ZYK2pDMFV2YXZQL3owNWIyR2dLOGJFS3lQQTh4NTNlYmhiTnJHRi9QTkRScm9pSlY0WkFYNFY3TzhYeEVMK0VzTy9NMEdzL05RMkFHejh6Z1dHaDcrN2V2dzdNOXpGdm8vYVRPUUtxL3BBZmlXMHJPWWg2RWdvV3V4ckxxTk1DZHVmdUw2RFNzRVVDbjQzejFQZHJURXJyRmI1OTlnUGh4bW1VSEJZMFkrMDI2bStVTHpMZHN4aENBVmZvdnlGN21pakwreXQrTUFROXJ0cm90OTMxQ1pxQzBWZjF3NW1NM3loYU4vTjExeng2d3JGbnc5WkdLWlFOSjVxRXZXRTR1K2pyRGJLK3gxUzBTVU1mNkV6M0dnSnEyMUJIMHp2UHNtRndtOVIva0xwRzRhK3NDSCtWaEd4S2J4ZlBCYWRiL2ViRmVVMGFnamJuOFJmS2pnU25sRDRIY05yWHFrUzFZVzlMeUllcHhNS2hPS0hhYjNtVEhHOFVSWis1VSsyRXlENmQ3a2x2M3JzT2JkcTYwVkZZWlcvWjdFR3NpcWhUQ2crTyt3MWwwcXJmalZoKzdQNGUyaklHV1VrUXZGdEdxOXBYU3A4VlZRU3lnOTdDUlFpNFZBa3BNVFNDbDgyRklUdHR1ekFYc2o1V1hXcFVISWFqR2JSWWh5RU5pMlVKNUE3ak1xRmtpTWFsRWpUaUtzYldLRThnY2Y3RmhnaGdJaE1JMDVZN2YwdFBXNHBBY3FFY3FKVm1oemVTVEFsclBZK2llYWhHeUI3TmdvWFNwNmtUNGlsMndwNFZFVUlHK2RQOGlONlVxQmNDQ0RTaG5SckE3c2pXTmhvL3dVNER5d0hBb1FRWW15RXpjWmh3bXFqQ3ZFSjVtb29JYUF2Ym95QU1RY2liUFIrK3dBNnp5MGJaTUJDR0pIMng5Vk5SOVloNWNMMjF5L3ZnVWRrSVVDWWtNNXV4SFBVN2Q5WldzNGtnNDVFMk81VmYxOENMd0FkYi81cUNBdEQvbVovaGtnYlY1SklybElrYkRlK2ZueUNYemNRVGRYd1FyclNFSzhYVTM4elJWN2FIYzY0d3hOVzI3MzIyeWY0UXlmaDBmY0piYUZrdmRqTS9QMGxhektyZEFKR2cyVUpxMjA2dG54N2ozbkhKWFBhd3BSUVBONGNFT01IUHBhcldiRjh5TXdLcTIyS2EvLzU3UW41amd1Z0RLb0lDeU5QMEJrUGlXdW1SWmszbGZnOW1xQ2MzQmUyZjJwWGsxdStqVWF2MS83ODhkdlR4TUxlMlE0dDRXSkNRMWdvMUFWcFpCRTMyYlNXazlYdDdlenk4dWFxK044L3YzejgrUGUzdno0OHZWOHVsZTZqaXhiMDJrTGgvSVpIVEppV3NidjJtQmFxSUN5TUJueWppR2dxY0MxVVJTZzRybkVLb21CUHpaeFFsTWFjaWFFRm1xZHBDK01iL0x4Qk5WY2k0eE4yWHNMQ2tEdkR5WThZTm1IelVETkNXdjQ5ampFblltZ0Jsb0pHaGZ5bW1nY3hWR3VnbXNKNHBzbzBtaWVHajhCMWhHbGhZVmhuR2cwVHcwaXRBNW9ROG93bWllR2psazliV0loUDNSNlBPYWFJb2JiUGhKQ09PZVFva1VhSWRIelI2SC9iTUNHa3RXTjZhTlFtaG1GVHRUNWt3NHlRZHNpeGwwWHFFY1B3SGp2RDVvVXBJWTFhUDROVUo5TGVwekQvNUlWQllTRkdwcnFrRWpFMHl5dVlGdElZalFmT1Jva21obUhwM2l5dmtJTXdqbFovNERwMFVvY2cwdHhaajgvYXBZRVJ1UWpqYUkzclh2eWdJTVFXaHRIM2JoNjZPSElUSmpIcWZtK3VDY2ZTelI4Mzc1OXp3eVdScnpDSllhdmJmZjUrZi84WU5kZWJUNlZTTTNxOC8vNDg3bzRNVkhSWi9BOGkzWDVxMTh5aFRBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdFwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IENoZWNrQ2lyY2xlT3V0bGluZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZU91dGxpbmVcIjtcclxuaW1wb3J0IEhpZ2hsaWdodE9mZkljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9IaWdobGlnaHRPZmZcIjtcclxuaW1wb3J0IHVzZXJJY29uIGZyb20gXCIuL2ltYWdlcy91c2VyLnBuZ1wiO1xyXG5pbXBvcnQgZ2lybEljb24gZnJvbSBcIi4vaW1hZ2VzL2dpcmwucG5nXCI7XHJcbmltcG9ydCBtYW5JY29uIGZyb20gXCIuL2ltYWdlcy9tYW4ucG5nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVySW1hZ2UgPSAoaW1hZ2UsIGdlbmRlcikgPT4ge1xyXG4gIGlmICghaW1hZ2UpIHtcclxuICAgIHN3aXRjaCAoZ2VuZGVyKSB7XHJcbiAgICAgIGNhc2UgXCJFXCI6XHJcbiAgICAgICAgcmV0dXJuIG1hbkljb247XHJcbiAgICAgIGNhc2UgXCJLXCI6XHJcbiAgICAgICAgcmV0dXJuIGdpcmxJY29uO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB1c2VySWNvbjtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGltYWdlO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGVDYXJkKHsgaW1nLCB1c2VybmFtZSwgZ2VuZGVyLCBiaW8sIG9uU3VibWl0LCBwcmV2aWV3TG9nb1VybCB9KSB7XHJcbiAgY29uc3QgW2lzRWRpdCwgc2V0RWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHsgcHJvZmlsZUltYWdlOiBcIlwiLCBiaW86IFwiXCIgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgaW5wdXQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgaW1hZ2VGaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgY29uc3QgbmV3VmFsdWVzID0ge307XHJcbiAgICBuZXdWYWx1ZXMucHJvZmlsZUltYWdlID0gaW1hZ2VGaWxlO1xyXG4gICAgb25TdWJtaXQobmV3VmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCaW9DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3VmFsdWVzID0geyAuLi52YWx1ZXMgfTtcclxuICAgIG5ld1ZhbHVlcy5iaW8gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldFZhbHVlcyhuZXdWYWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJpb1N1Ym1pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJpbyA9IHZhbHVlcy5iaW87XHJcbiAgICBvblN1Ym1pdCh7IGJpbyB9KTtcclxuICAgIHNldEVkaXQoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXNpZGUgY2xhc3M9XCJwcm9maWxlLWNhcmRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1hc2stc2hhZG93XCI+PC9kaXY+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtyZW5kZXJJbWFnZShpbWcsIGdlbmRlcil9XHJcbiAgICAgICAgICAgIGFsdD1cInByZXZpZXdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlXCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X2ljb25cIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJteUlucHV0XCI+XHJcbiAgICAgICAgICAgICAgPEVkaXRJY29uIGNsYXNzTmFtZT1cInByb2ZpbGVfZWRpdF9pY29uXCIgLz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJteUlucHV0XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgIHR5cGU9e1wiZmlsZVwifVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgeyBuYW1lOiBcImZpbGVcIiB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT57dXNlcm5hbWV9PC9oMT5cclxuICAgICAgICB7LyogIDxoMj5XRUIgREVTSUdORVI8L2gyPiAqL31cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZmlsZS1iaW9cIj5cclxuICAgICAgICB7aXNFZGl0ID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtbXVsdGlsaW5lLXN0YXRpY1wiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJiaW9cIlxyXG4gICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVCaW9DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgbmFtZT1cImJpb1wiXHJcbiAgICAgICAgICAgICAgcm93cz17Nn1cclxuICAgICAgICAgICAgICByb3dzTWF4PXs2fVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YmlvfVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxIaWdobGlnaHRPZmZJY29uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KCFpc0VkaXQpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VfaWNvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGVPdXRsaW5lSWNvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQmlvU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tfaWNvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+XCJ7YmlvfVwiPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfaWNvblwiPlxyXG4gICAgICAgICAgICAgIDxFZGl0SWNvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdCghaXNFZGl0KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2ZpbGVfZWRpdF9pY29uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hc2lkZT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hhcmVCdXR0b24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmUtYnV0dG9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmUtYnV0dG9uX19iYWNrXCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNoYXJlX19saW5rXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9ob21lXCJcclxuICAgICAgICAgIHRpdGxlPVwidHdpdHRlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFyZV9faWNvbiBzaGFyZV9faWNvbi0tdHdpdHRlclwiXHJcbiAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG4gICAgICAgICAgICB4PVwiMHB4XCJcclxuICAgICAgICAgICAgeT1cIjBweFwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNDkuNjUycHhcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI0OS42NTJweFwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDkuNjUyIDQ5LjY1MlwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGVuYWJsZUJhY2tncm91bmQ6IFwibmV3IDAgMCA0OS42NTIgNDkuNjUyXCIgfX1cclxuICAgICAgICAgICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNC44MjYsMEMxMS4xMzcsMCwwLDExLjEzNywwLDI0LjgyNmMwLDEzLjY4OCwxMS4xMzcsMjQuODI2LDI0LjgyNiwyNC44MjZjMTMuNjg4LDAsMjQuODI2LTExLjEzOCwyNC44MjYtMjQuODI2ICAgIEM0OS42NTIsMTEuMTM3LDM4LjUxNiwwLDI0LjgyNiwweiBNMzUuOTAxLDE5LjE0NGMwLjAxMSwwLjI0NiwwLjAxNywwLjQ5NCwwLjAxNywwLjc0MmMwLDcuNTUxLTUuNzQ2LDE2LjI1NS0xNi4yNTksMTYuMjU1ICAgIGMtMy4yMjcsMC02LjIzMS0wLjk0My04Ljc1OS0yLjU2NWMwLjQ0NywwLjA1MywwLjkwMiwwLjA4LDEuMzYzLDAuMDhjMi42NzgsMCw1LjE0MS0wLjkxNCw3LjA5Ny0yLjQ0NiAgICBjLTIuNS0wLjA0Ni00LjYxMS0xLjY5OC01LjMzOC0zLjk2OWMwLjM0OCwwLjA2NiwwLjcwNywwLjEwMywxLjA3NCwwLjEwM2MwLjUyMSwwLDEuMDI3LTAuMDY4LDEuNTA2LTAuMTk5ICAgIGMtMi42MTQtMC41MjQtNC41ODMtMi44MzMtNC41ODMtNS42MDNjMC0wLjAyNCwwLTAuMDQ5LDAuMDAxLTAuMDcyYzAuNzcsMC40MjcsMS42NTEsMC42ODUsMi41ODcsMC43MTQgICAgYy0xLjUzMi0xLjAyMy0yLjU0MS0yLjc3My0yLjU0MS00Ljc1NWMwLTEuMDQ4LDAuMjgxLTIuMDMsMC43NzMtMi44NzRjMi44MTcsMy40NTgsNy4wMjksNS43MzIsMTEuNzc3LDUuOTcyICAgIGMtMC4wOTgtMC40MTktMC4xNDctMC44NTQtMC4xNDctMS4zMDNjMC0zLjE1NSwyLjU1OC01LjcxNCw1LjcxMy01LjcxNGMxLjY0NCwwLDMuMTI3LDAuNjk0LDQuMTcxLDEuODA0ICAgIGMxLjMwMy0wLjI1NiwyLjUyMy0wLjczLDMuNjMtMS4zODdjLTAuNDMsMS4zMzUtMS4zMzMsMi40NTQtMi41MTYsMy4xNjJjMS4xNTctMC4xMzgsMi4yNjEtMC40NDQsMy4yODItMC44OTkgICAgQzM3Ljk4NywxNy4zMzQsMzcuMDE4LDE4LjM0MSwzNS45MDEsMTkuMTQ0elwiIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNoYXJlX19saW5rIFwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9cIlxyXG4gICAgICAgICAgdGl0bGU9XCJmYWNlYm9va1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFyZV9faWNvbiBzaGFyZV9faWNvbi0tZmFjZWJvb2tcIlxyXG4gICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxuICAgICAgICAgICAgeD1cIjBweFwiXHJcbiAgICAgICAgICAgIHk9XCIwcHhcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjQ5LjY1MnB4XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNDkuNjUycHhcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ5LjY1MiA0OS42NTJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBlbmFibGVCYWNrZ3JvdW5kOiBcIm5ldyAwIDAgNDkuNjUyIDQ5LjY1MlwiIH19XHJcbiAgICAgICAgICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjQuODI2LDBDMTEuMTM3LDAsMCwxMS4xMzcsMCwyNC44MjZjMCwxMy42ODgsMTEuMTM3LDI0LjgyNiwyNC44MjYsMjQuODI2YzEzLjY4OCwwLDI0LjgyNi0xMS4xMzgsMjQuODI2LTI0LjgyNiAgICBDNDkuNjUyLDExLjEzNywzOC41MTYsMCwyNC44MjYsMHogTTMxLDI1LjdoLTQuMDM5YzAsNi40NTMsMCwxNC4zOTYsMCwxNC4zOTZoLTUuOTg1YzAsMCwwLTcuODY2LDAtMTQuMzk2aC0yLjg0NXYtNS4wODhoMi44NDUgICAgdi0zLjI5MWMwLTIuMzU3LDEuMTItNi4wNCw2LjA0LTYuMDRsNC40MzUsMC4wMTd2NC45MzljMCwwLTIuNjk1LDAtMy4yMTksMGMtMC41MjQsMC0xLjI2OSwwLjI2Mi0xLjI2OSwxLjM4NnYyLjk5aDQuNTZMMzEsMjUuN3ogICAgXCIgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2hhcmVfX2xpbmtcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb21cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHRpdGxlPVwiZ29vZ2xlIHBsdXNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhcmVfX2ljb24gc2hhcmVfX2ljb24tLWdvb2dsZVwiXHJcbiAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG4gICAgICAgICAgICB4PVwiMHB4XCJcclxuICAgICAgICAgICAgeT1cIjBweFwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNDkuNjUycHhcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI0OS42NTJweFwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDkuNjUyIDQ5LjY1MlwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGVuYWJsZUJhY2tncm91bmQ6IFwibmV3IDAgMCA0OS42NTIgNDkuNjUyXCIgfX1cclxuICAgICAgICAgICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEuNSwyOC45NGMtMC4xNjEtMC4xMDctMC4zMjYtMC4yMjMtMC40OTktMC4zNGMtMC41MDMtMC4xNTQtMS4wMzctMC4yMzQtMS41ODQtMC4yNDFoLTAuMDY2ICAgICBjLTIuNTE0LDAtNC43MTgsMS41MjEtNC43MTgsMy4yNTdjMCwxLjg5LDEuODg5LDMuMzY3LDQuMjk5LDMuMzY3YzMuMTc5LDAsNC43OS0xLjA5OCw0Ljc5LTMuMjU4ICAgICBjMC0wLjIwNC0wLjAyNC0wLjQxNi0wLjA3NS0wLjYyOUMyMy40MzIsMzAuMjU4LDIyLjY2MywyOS43MzUsMjEuNSwyOC45NHpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE5LjcxOSwyMi4zNTJjMC4wMDIsMCwwLjAwMiwwLDAuMDAyLDBjMC42MDEsMCwxLjEwOC0wLjIzNywxLjUwMS0wLjY4N2MwLjYxNi0wLjcwMiwwLjg4OS0xLjg1NCwwLjcyNy0zLjA3NyAgICAgYy0wLjI4NS0yLjE4Ni0xLjg0OC00LjAwNi0zLjQ3OS00LjA1M2wtMC4wNjUtMC4wMDJjLTAuNTc3LDAtMS4wOTIsMC4yMzgtMS40ODMsMC42ODZjLTAuNjA3LDAuNjkzLTAuODY0LDEuNzkxLTAuNzA1LDMuMDEyICAgICBjMC4yODYsMi4xODQsMS44ODIsNC4wNzEsMy40NzksNC4xMjFIMTkuNzE5TDE5LjcxOSwyMi4zNTJ6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNC44MjYsMEMxMS4xMzcsMCwwLDExLjEzNywwLDI0LjgyNmMwLDEzLjY4OCwxMS4xMzcsMjQuODI2LDI0LjgyNiwyNC44MjZjMTMuNjg4LDAsMjQuODI2LTExLjEzOCwyNC44MjYtMjQuODI2ICAgICBDNDkuNjUyLDExLjEzNywzOC41MTYsMCwyNC44MjYsMHogTTIxLjk2NCwzNi45MTVjLTAuOTM4LDAuMjcxLTEuOTUzLDAuNDA4LTMuMDE4LDAuNDA4Yy0xLjE4NiwwLTIuMzI2LTAuMTM2LTMuMzg5LTAuNDA1ICAgICBjLTIuMDU3LTAuNTE5LTMuNTc3LTEuNTAzLTQuMjg3LTIuNzcxYy0wLjMwNi0wLjU0OC0wLjQ2MS0xLjEzMi0wLjQ2MS0xLjczN2MwLTAuNjIzLDAuMTQ5LTEuMjU1LDAuNDQzLTEuODgxICAgICBjMS4xMjctMi40MDIsNC4wOTgtNC4wMTgsNy4zODktNC4wMThjMC4wMzMsMCwwLjA2NCwwLDAuMDk0LDBjLTAuMjY3LTAuNDcxLTAuMzk2LTAuOTU5LTAuMzk2LTEuNDcyICAgICBjMC0wLjI1NSwwLjAzNC0wLjUxNSwwLjEwMi0wLjc4Yy0zLjQ1Mi0wLjA3OC02LjAzNS0yLjYwNi02LjAzNS01LjkzOWMwLTIuMzUzLDEuODgxLTQuNjQ2LDQuNTcxLTUuNTcyICAgICBjMC44MDUtMC4yNzgsMS42MjYtMC40MiwyLjQzMy0wLjQyaDcuMzgyYzAuMjUxLDAsMC40NzQsMC4xNjMsMC41NTIsMC40MDJjMC4wNzgsMC4yMzgtMC4wMDgsMC41LTAuMjExLDAuNjQ3bC0xLjY1MSwxLjE5NSAgICAgYy0wLjA5OSwwLjA3LTAuMjE4LDAuMTA4LTAuMzQxLDAuMTA4SDI0LjU1YzAuNzYzLDAuOTE1LDEuMjEsMi4yMiwxLjIxLDMuNjg1YzAsMS42MTctMC44MTgsMy4xNDYtMi4zMDcsNC4zMTEgICAgIGMtMS4xNSwwLjg5Ni0xLjE5NSwxLjE0My0xLjE5NSwxLjY1NGMwLjAxNCwwLjI4MSwwLjgxNSwxLjE5OCwxLjY5OSwxLjgyM2MyLjA1OSwxLjQ1NiwyLjgyNSwyLjg4NSwyLjgyNSw1LjI2OSAgICAgQzI2Ljc4MSwzMy45MTMsMjQuODksMzYuMDY1LDIxLjk2NCwzNi45MTV6IE0zOC42MzUsMjQuMjUzYzAsMC4zMi0wLjI2MSwwLjU4LTAuNTgsMC41OEgzMy44NnY0LjE5NyAgICAgYzAsMC4zMi0wLjI2MSwwLjU4LTAuNTc4LDAuNThoLTEuMTk1Yy0wLjMyMiwwLTAuNTgyLTAuMjYtMC41ODItMC41OHYtNC4xOTdoLTQuMTkyYy0wLjMyLDAtMC41OC0wLjI1OC0wLjU4LTAuNThWMjMuMDYgICAgIGMwLTAuMzIsMC4yNi0wLjU4MiwwLjU4LTAuNTgyaDQuMTkydi00LjE5M2MwLTAuMzIxLDAuMjYtMC41OCwwLjU4Mi0wLjU4aDEuMTk1YzAuMzE3LDAsMC41NzgsMC4yNTksMC41NzgsMC41OHY0LjE5M2g0LjE5NCAgICAgYzAuMzE5LDAsMC41OCwwLjI2LDAuNTgsMC41OFYyNC4yNTN6XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmUtYnV0dG9uX19mcm9udFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInNoYXJlLWJ1dHRvbl9fdGV4dFwiPlBheWxhxZ88L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNdWlBbGVydCBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiO1xyXG5cclxuZnVuY3Rpb24gU25hY2tiYXIocHJvcHMpIHtcclxuICByZXR1cm4gPE11aUFsZXJ0IGVsZXZhdGlvbj17Nn0gdmFyaWFudD1cImZpbGxlZFwiIHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZWRTbmFja2JhcnMocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNuYWNrYmFyIHN0eWxlPXtwcm9wcy5zdHlsZX0gb25DbGljaz17cHJvcHMub25DbGlja30gc2V2ZXJpdHk9e3Byb3BzLnR5cGV9PlxyXG4gICAgICB7cHJvcHMubWVzc2FnZX1cclxuICAgIDwvU25hY2tiYXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCI7XHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyXCI7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIjtcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXJcIjtcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgXCJtb21lbnQvbG9jYWxlL3RyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgTURCSWNvbiB9IGZyb20gXCJtZGJyZWFjdFwiO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvU2tlbGV0b25cIjtcclxuaW1wb3J0IExpbmtQcmV2aWV3IGZyb20gXCIuLi9MaW5rUHJldmlld1wiO1xyXG5pbXBvcnQgeyByZWFkTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL2xpYi9oZWxwZXJzXCI7XHJcbmltcG9ydCBQb3N0TWVudSBmcm9tIFwiLi4vcG9zdE1lbnVcIjtcclxuaW1wb3J0IHtcclxuICBkZWxldGVQb3N0UmVxdWVzdCxcclxuICBkZWxldGVNb2RlcmF0b3JSZXF1ZXN0LFxyXG59IGZyb20gXCIuLi8uLi9saWIvcG9zdHMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBEZWxldGVDb21tZW50UG9wIGZyb20gXCIuLi9Db21tZW50TGlzdC9jb21wb25lbnRzL2RlbGV0ZUNvbW1lbnRQb3BcIjtcclxuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSBcIi4uL0ltYWdlTW9kYWxcIjtcclxuaW1wb3J0IFNoYXJlQnV0dG9uIGZyb20gXCIuLi9TaGFyZUJ1dHRvblwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgfSxcclxuICBtZWRpYToge1xyXG4gICAgaGVpZ2h0OiAwLFxyXG4gICAgcGFkZGluZ1RvcDogXCI1Ni4yNSVcIiwgLy8gMTY6OVxyXG4gICAgYmFja2dyb3VuZFNpemU6IFwiY29udGFpblwiLFxyXG4gIH0sXHJcbiAgZXhwYW5kOiB7XHJcbiAgICB0cmFuc2Zvcm06IFwicm90YXRlKDBkZWcpXCIsXHJcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcInRyYW5zZm9ybVwiLCB7XHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVzdCxcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgZXhwYW5kT3Blbjoge1xyXG4gICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgxODBkZWcpXCIsXHJcbiAgfSxcclxuICBwb3N0SW1hZ2U6IHtcclxuICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcbiAgICBtYXhIZWlnaHQ6IFwiNTEycHhcIixcclxuICAgIG1heFdpZHRoOiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGxlZnRTaWRlOiB7XHJcbiAgICB3aWR0aDogXCI0OHB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VkZWJlYmNjXCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gU29jaWFsQ2FyZChwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwb3B1cEFuY2hvciwgc2V0UG9wdXBBbmNob3JdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIG1vbWVudC5sb2NhbGUoKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaWQsXHJcbiAgICBpbWcsXHJcbiAgICBjcmVhdGVkRGF0ZSxcclxuICAgIGNvbnRlbnQsXHJcbiAgICBwU2x1ZyxcclxuICAgIGNvbnRlbnRUeXBlLFxyXG4gICAgY29tbXVuaXR5LFxyXG4gICAgY29tbWVudHMsXHJcbiAgICB1c2VyLFxyXG4gICAgbGlua1VybCxcclxuICAgIHZvdGVDb3VudCxcclxuICAgIHVzZXJQb3N0Vm90ZSxcclxuICAgIG9uVm90ZSxcclxuICAgIHByb2ZpbGVQb3N0cyxcclxuICAgIGlzTW9kZXJhdG9yLFxyXG4gICAgYXV0aCxcclxuICAgIHBhZ2VOdW1iZXIsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBoYW5kbGVWb3RlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSB7IHBvc3RJZDogaWQsIHZhbHVlLCBwYWdlTnVtYmVyIH07XHJcbiAgICBvblZvdGUodmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJNZWRpYSA9ICgpID0+IHtcclxuICAgIGlmIChjb250ZW50VHlwZSA9PSA1MCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua1ByZXZpZXdfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8TGlua1ByZXZpZXcgdXJsPXtsaW5rVXJsfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbnRlbnRUeXBlID09IDIwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgPFJlYWN0UGxheWVyIGNsYXNzTmFtZT1cInJlYWN0LXBsYXllclwiIGNvbnRyb2xzIHVybD17aW1nfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucG9zdEltYWdlfVxyXG4gICAgICAgICAgICBzcmM9e2ltZ31cclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICAgICAgPEltYWdlTW9kYWwgaW1hZ2VVcmw9e2ltZ30gb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlUG9wdXAgPSAoKSA9PiB7XHJcbiAgICBzZXRQb3B1cEFuY2hvcihudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRQb3B1cEFuY2hvcihldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZVBvc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRlbGV0ZVBvc3QgfSA9IHByb3BzO1xyXG4gICAgZGVsZXRlUG9zdCh7IGlkIH0pO1xyXG4gICAgc2V0UG9wdXBBbmNob3IoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlTW9kZXJhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBtb2RlcmF0b3JEZWxldGUsIHBhZ2VEdG8gfSA9IHByb3BzO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgc2x1ZzogY29tbXVuaXR5LnNsdWcsXHJcbiAgICAgIHBvc3RJZDogaWQsXHJcbiAgICAgIHBhZ2VOdW1iZXI6IHBhZ2VEdG8ucGFnZU51bWJlcixcclxuICAgICAgcGFnZVNpemU6IHBhZ2VEdG8ucGFnZVNpemUsXHJcbiAgICB9O1xyXG4gICAgbW9kZXJhdG9yRGVsZXRlKHBheWxvYWQpO1xyXG4gICAgc2V0UG9wdXBBbmNob3IobnVsbCk7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtZW51SXRlbXMgPSBbXHJcbiAgICAhcHJvZmlsZVBvc3RzICYmIHsgdGl0bGU6IFwixZ5pa2F5ZXQgRXRcIiwgb25DbGljazogaGFuZGxlQ2xvc2UgfSxcclxuICAgIHByb2ZpbGVQb3N0cyA/IHsgdGl0bGU6IFwiU2lsXCIsIG9uQ2xpY2s6IG9uRGVsZXRlQ2xpY2sgfSA6IG51bGwsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgbW9kZXJhdG9ySXRlbXMgPSBbXHJcbiAgICB7IHRpdGxlOiBcIsWeaWtheWV0IEV0XCIsIG9uQ2xpY2s6IGhhbmRsZUNsb3NlIH0sXHJcbiAgICB7IHRpdGxlOiBcIlNpbFwiLCBvbkNsaWNrOiBvbkRlbGV0ZUNsaWNrIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgY2FsY3VsYXRlU2FsbGFtYUNvdW50ID0gKGNvbW1lbnRzKSA9PiB7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgaWYgKGNvbW1lbnRzICYmIGNvbW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29tbWVudHMubWFwKCh4KSA9PiAoY291bnQgKz0geC5yZXBseUNvdW50KSk7XHJcbiAgICAgIGNvdW50ICs9IGNvbW1lbnRzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHJldHVybiBjb3VudDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwicG9zdF9jYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnRTaWRlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGVfY29udFwiPlxyXG4gICAgICAgICAgPE1EQkljb25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICB1c2VyUG9zdFZvdGUgJiYgdXNlclBvc3RWb3RlLnZhbHVlID09IDFcclxuICAgICAgICAgICAgICAgID8gXCJhbmdsZS1kb3VibGUtdXBfY2hlY2tlZFwiXHJcbiAgICAgICAgICAgICAgICA6IFwiYW5nbGUtZG91YmxlLXVwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpY29uPVwiYW5nbGUtZG91YmxlLXVwXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVhZExvY2FsU3RvcmFnZShcInRva2VuXCIpO1xyXG4gICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICAgICAgICA/IGhhbmRsZVZvdGUodXNlclBvc3RWb3RlICYmIHVzZXJQb3N0Vm90ZS52YWx1ZSA9PSAxID8gMCA6IDEpXHJcbiAgICAgICAgICAgICAgICA6IHJvdXRlci5wdXNoKFwiL2dpcmlzLXlhcFwiKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2b3RlXCI+e3ZvdGVDb3VudH08L3A+XHJcbiAgICAgICAgICA8TURCSWNvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIHVzZXJQb3N0Vm90ZSAmJiB1c2VyUG9zdFZvdGUudmFsdWUgPT0gLTFcclxuICAgICAgICAgICAgICAgID8gXCJhbmdsZS1kb3VibGUtZG93bl9jaGVja2VkXCJcclxuICAgICAgICAgICAgICAgIDogXCJhbmdsZS1kb3VibGUtZG93blwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWNvbj1cImFuZ2xlLWRvdWJsZS1kb3duXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICBoYW5kbGVWb3RlKHVzZXJQb3N0Vm90ZSAmJiB1c2VyUG9zdFZvdGUudmFsdWUgPT0gLTEgPyAwIDogLTEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XHJcbiAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3RfY2FyZF9oZWFkZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCIxNnB4IDE2cHggMCAxNnB4XCIgfX1cclxuICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICFpZCA/IChcclxuICAgICAgICAgICAgICA8U2tlbGV0b25cclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cIndhdmVcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInJlY2lwZVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2NvbW11bml0eS5sb2dvUGF0aH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgPjwvQXZhdGFyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhY3Rpb249e1xyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwic2ltcGxlLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2V0dGluZ3NcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFBvc3RNZW51XHJcbiAgICAgICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbXM9e2lzTW9kZXJhdG9yID8gbW9kZXJhdG9ySXRlbXMgOiBtZW51SXRlbXN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGVsZXRlQ29tbWVudFBvcFxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2lzTW9kZXJhdG9yID8gb25EZWxldGVNb2RlcmF0b3IgOiBvbkRlbGV0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVBvcHVwfVxyXG4gICAgICAgICAgICAgICAgYW5jaG9yRWw9e3BvcHVwQW5jaG9yfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAhaWQgPyAoXHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb249XCJ3YXZlXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17MTB9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjgwJVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDYgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi90L1tjb21tdW5pdHldXCJ9IGFzPXtgL3QvJHtjb21tdW5pdHkuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+e2NvbW11bml0eS5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxzbWFsbFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiNHB4XCIsIGZvbnRXZWlnaHQ6IDYwMCwgZm9udFNpemU6IFwiOTIlXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgL1xyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIHt1c2VyICYmIChcclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBhcz17XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRoICYmIGF1dGgudXNlciAmJiBhdXRoLnVzZXIudXNlcm5hbWUgPT0gdXNlci51c2VyTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGAvcC8ke3VzZXIudXNlck5hbWV9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGB1LyR7dXNlci51c2VyTmFtZX1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0aCAmJiBhdXRoLnVzZXIgJiYgYXV0aC51c2VyLnVzZXJuYW1lID09IHVzZXIudXNlck5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgL3AvW3VzZXJuYW1lXWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgdS9bdXNlcm5hbWVdYFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdGVkX2J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInUvXCIgKyB1c2VyLnVzZXJOYW1lICsgXCIgXCIgKyBcInRhcmFmxLFuZGFuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdWJoZWFkZXI9e2NyZWF0ZWREYXRlICYmIG1vbWVudChjcmVhdGVkRGF0ZSkuZnJvbU5vdygpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPExpbmsgYXM9e2AvJHtjb21tdW5pdHkuc2x1Z30vJHtwU2x1Z31gfSBocmVmPXtcIi9bY29tbXVuaXR5XS9bcG9zdF1cIn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3RfY29udGVudF9hcmVhXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjVweCAxNnB4IDE2cHggMjVweFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7IWlkID8gKFxyXG4gICAgICAgICAgICAgICAgPFNrZWxldG9uXHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cIndhdmVcIlxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwicmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZF9wb3N0X2NvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnQgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAge3JlbmRlck1lZGlhKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPERpdmlkZXIgc3R5bGU9e3sgbWFyZ2luOiBcIjE1cHggMHB4IDBweCAwcHhcIiB9fSAvPlxyXG5cclxuICAgICAgICA8Q2FyZEFjdGlvbnNcclxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIsIHBhZGRpbmdMZWZ0OiBcIjMuNXJlbVwiIH19XHJcbiAgICAgICAgICBkaXNhYmxlU3BhY2luZ1xyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNREJJY29uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIwLjVyZW1cIiB9fVxyXG4gICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICBmYXJcclxuICAgICAgICAgICAgaWNvbj1cImNvbW1lbnQtZG90c1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiLTVweFwiIH19PlxyXG4gICAgICAgICAgICB7Y29tbWVudHMgJiYgY2FsY3VsYXRlU2FsbGFtYUNvdW50KGNvbW1lbnRzKX0gc2FsbGFtYVxyXG4gICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgIDxTaGFyZUJ1dHRvbiAvPlxyXG4gICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBkZWxldGVQb3N0OiAocGF5bG9hZCkgPT4gZGlzcGF0Y2goZGVsZXRlUG9zdFJlcXVlc3QocGF5bG9hZCkpLFxyXG4gIG1vZGVyYXRvckRlbGV0ZTogKHBheWxvYWQpID0+IGRpc3BhdGNoKGRlbGV0ZU1vZGVyYXRvclJlcXVlc3QocGF5bG9hZCkpLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBhdXRoOiBzdGF0ZS5hdXRoICYmIHN0YXRlLmF1dGguZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTb2NpYWxDYXJkKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBYmtBQUFDeENBWUFBQUJaY01QeEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBREIwUlZoMFFVeFVWR0ZuQUZNZ2JHOW5ieUJoYm1RZ2MzbHRZbTlzY3lCMFpXMXdiR0YwWlNCMlpXTjBiM0lnYVdOdmJuTUtjaWxzVXdBQUFEbHBWRmgwUkdWelkzSnBjSFJwYjI0QUFBQUFBRk1nYkc5bmJ5QmhibVFnYzNsdFltOXNjeUIwWlcxd2JHRjBaU0IyWldOMGIzSWdhV052Ym5NS3RUTWk5QUFBRmFaSlJFRlVlTnJzblYrSVhOZDl4NCsyVmxxcFVBMnNhSk5ReFdQaldpbVZ5U3cwcFNnUG1zVjY2WU90MVl2VlFvcG0rcGE0ZEhleFMrMUN1NnYyb1lGRzdDclVMdFNRSGFVMlJLYk5ydVNIK3NGbVI0WEliUTNSQ05jUFVrVjJIQWRpZ2tUR29sMmxNYUU5dnp2bnJ1N2N1WGZtenN6OWQrNThQbkRabmQzNWMrWTN2L2w5eisrYzN6bEhLUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRElDZnN3QVFENGVlejhlOVVVWDY1MSs3a25PbU8yczZSL1ZOSnFxRzVuRSsrd2k0Y3dBUUFFc0ozaWE4M3JhMXp4cUtUY1ZoSUR5NWpCQkFBQWdNZ0JBQUFnY2dBQUFJZ2NBQUFBSWdjQUFJRElBUUFBSUhJQUFJRElBUUFBSUhJQUFBQ0lIQUFBQUNJSEFBQ0F5QUVBQUNCeUFBQ0F5QUVBQUNCeUFBQUFpQndBQUFBaUJ3QUFnTWdCQUFBZ2NnQUFNTTA4aEFtS3hXUG4zeXZwSHhWenMyeXVJSnFlMzF1M24zdWlnL1dHMmxic1dqSTNxeUYzYTV0TDZHaTd0ckFjWkJ3SHZMOFBpZ050N2E5dFJBN3lGblFsMkg3Qk9IRmxoSWV2K0o3TEVUc1RvRytZMzV2VEtING1RRlNOUFUrWW42VXhuOHNSTzJQUGxtdGJ4QTlpamdPdXI1WUhkTUNpeGdHM28zYlY5VnVieFErUkMrNmxqeExVcFBmVFNESDRMdWpybEhIa1Vzd3Y0WDVaRmp5djJUSzl2WXRGRHN6bTh6L3JFYmM0Y1VXejZubTlqckhyWlgxdGtVbkRpUDdxalFQbG1KKys3QmRML1hwdDExKzFyMjdaWkt0OTlOSUhEdWxGUWJLZCtZVGJYRFVCdUpheCtjVFJ4Y0V2RkdGWXcvaUMySFF4Z1VBeEtsc21nRFJ5WXB2L1MvSGw1dlg3Yms3dzNkaE9xNkc2bmZzeS9FektKdk5hU0tDRE93b2RUeHpJZmNkM0tqSTVUekE3TldJcW4zVzdhNTdzSWcvSWwyeEpMdDAyQ1VybnhnMU9HZHMxTDhIQ2k3UmxRYmR0VFlLSHZ0Yko3c0FqNUNzNWlnTnVQSzJaa1o0TGVlbWNUWjNJNVNnREdxZmRheXIrWWJNNGtUWldqZGd0MjlDak01MmRKZVdiaDhnWkpkTytSZDFlQ1I2cmhQbXBGYmVLaVFONTdwaExHemQwVzhWbjYzbnM5RDZFYytRdUNHOG96NXlZQllpTnIrdTJyNXZNcnBOVDI5YU1UNVFzc2FzamRycmRaL01hUENEUk9MQmlPbVMyVU5iWHRtNzdsdW4wdHZQU3NKbWlPWWNaN3JsdW9jQ0pzTzFZSm5CZWxvellWWFBvRTl1bTgxQ3kwSzV1OEZnendRK0tMWEJWRTcrV0xIMExDeVlPNUNhT3pSVElPU1I3MjdiTk9Vd1FsZ0M4YVdrUURncklTemtLR0R1MmRYZ0dkQ0syelh3aUZGUGdWazBNcy8wemxqaTJhZUlhSWhkakZpVE9VYkdzM1dYVDdsckJ2cTlyV1R1NEVkcnRBblFjdkZSTUw3bWlvRWppNW80MnJCVHNyVWxoeW5iV0l4QXpCWENRbW8xWmtBbFUxMjBUNWhFZGZDTWoyOHJycmhYVXJpV1QwU0YwQlJFNDB4bXJGdlF0Vm8yL1poYWZaeXgzRUJHNERRdmJYU2xnbHBFTG9UT3ZWeXU0WFJHNllnaWNmSDQ3QmU3b2VrY2dNaE82R1lzZFpBR0JzMGJvMWxLeTdUUUluRi9veXNpRnRRSTNUWEdna2xXOG5ySFVRY29JbkZVc21hd2JnWXRmNkRhcHVyUXVEcmhMaGFidGMxc3d4VFdJWEFTc2N4RGoySnRUNk5ndWEwbGxIYWJJcERhbGRwV08wNG9DbTdDdVNDNUdWdEplWm1TZHlCa0RWUzM4Y0VXWXkxUDh4UzRsa1gxN2RvZVpacGJ5dGo0UlF2MDE3enNacFJJTDB4eDlzREdUVzdUUXNTWFRXT0FyN213RHRoQ2pYUk1SVGxzelpVeGdSUWQ5Q1V2czdZR0x5SVVFdFFYTDJpd2ZLTU5KeVFUamxTblBqcjFVa3A3M2hNa3pHRXp3SUZsSks1dXpMWk9yV3ZoaFNpQ21NTURUaTRzakdKdk9BNzNpZmwrRGZIWjJWK21ROVZCSzYvdHJtOGpadUtNSnZldUFYaHdCUGJFT1JCVXo1QzRPbEpTRjB5eVd4SUhDaWR3SmV0YUZvRExKUW1ZNkR3TTVpd2x5eDVKaU5DY3dtMHRqaU4wMmtiTW0zZmNjMUFyeEIyTjZ4ZUhVV0RkSHg4TWlUaUZ5bG9vY0FqZVVLcmJOcFcwaDNzN3VnbUl1YmhCREN3bHJ0VnBKWDJOLzUyY3NjaGJiMXBhY3lrazdtdnBxNk91Y3VlUlF3enljNGwwWlozRzRDUnA1eUZUYXhyYXVYZGZON1R4ZzI3QSttVXJ5dE14M1AyOXhRQTJhUnhhQlU5M0Y4eHY2OTdHcVUyMDZHZHlhSVJnelhKUmxiN3J0T25MWVNkMmVlYTNGREcxYk1XMjFLWUJMaCtHQ3RtdHJpQkF2WnVnRFpISmsxVzRjdUNBK095QU91RldPV2NhQmFsQUhVWXVhZnh0RVNlaXVOalJGRlRtYlV2NHNzODV6MnFGWGg5M0pIRSsvcXAxY0hHWXpvelpYVEkvU0J0dUtxSjAyZGh0bVczbFBXMllUZ0xVcDh6L283VWhtRmJmV1RTem9EUEhWam9rRGNuL0psTEpZaC95RkFJRnpOK0QzQzY5a2RCMnRjNUhqaGsxemNua1F1WTdxSGFLUzYySk9lbS9TdHZrb0FoY2dkdk1aRFYyTWs1VmxZVnZwQ2M5RkVUaWZiU1Z3MURNS3NBamQ5SFoyNjlyM2xvY0puRi9zOUhYYWpGUmtHdHZOL051Z2ZYNDNUSlpYdUV3dVM1cW1WOVNNZVArSE0yamo2UkhhMStmZ09paUswTzJvSEE4TFp4UzRtOW8rWXd1VmZtd2pvMTF2cUxDY1RwRVRjV3RNNEs5MTh6MnJaR0VuTSs5V2krRGJtL3ErY3pxakd5cmtObVZ5RDJmMHV1djZnNThmVVVES0diU3hPY2tUbUY3ZmNzcnRIalVyU3p0d2kwMU9UL29rSnJ0dTU5eTJFRCtITXVpUXJjY2hsR2tieWxSUWJxcm9sZE1TWTdkTllVcGhSSzZjd1d1SzB5eGJZSnNMY1R5SjZRRjJjdncrMHhhNXhpaERQbWw4UmtBbU40QnpNY1VCNlRDbk5uM3hTeis3cDM3NnFVTXlpclF3aG4ySHpublA0SWVKT0UyYXZlam1xSE5GUTlqSzhlZVJkdEM0UENWMkJmdnBURHFhNCtOaUdvMys1Wi8rV0ZWdWYwc0wzY2ZqZG1CbENtK3RLQ0pYVGZuMTJqRTdUV0x0alBuNXJoSXY5b2l0TjJzNkltMU1Dbm4zMVlTZXI0OWYrOG43Nm9udnY2NGUrdm4vVHZwVVM0TVdpMXNoY2xrVkhOalNnOHU1YUFLMkJjdEl1b1AvMlR2ZlU3L3h3emNqQ2R6czdPRW9UeWtWbDFXYk03a3M5bjY3a2VkZWtJZHBLaFZQZTc2UU1ueXdoYkl0RFgxY2k5dWpQOXFPZE4vbm4vOVQ5VGRmKzVwYXYvQU5kZVRJa1dGMzN3eGFXbUNMeUdXeFFIRVNvVW96R0ZlbmFFUGV0TmZ5SVhKZ1M2ZXNQTTQyZVdraVdac01ULzdxVDk2UGRQK2pSNCtxeC9VbEhEeDRVRDJuQlU5K0RxQmtNcnFTVlNLWDRXR0RIWXUrVERYaVNTSncyZ0ZNd28yVVh5KzNSM3RKZ1lrSTNLSC8rVERTL1dXSTh0ZDltVnRFb1hPM0FyTkQ1TXhaUTVsOGNJUDJKb3hBMnNVYkszbnZ4Vm1heVpWTkp3dkFobzV5TFk4NzNiZ0NKeitqWkc5LzhaY3J6aERsbVRPLzMvZC9HYktzMVlmdXpWRHhidWFjUzVHVDRUY1RYRFl5YWtJNzQ4ZVBpck1EUU5HSExjMmF0YlJ0dTVMR3dZNUFweXdtdHZNa2RGSkJPZmRmL3hpcHdPVDQ4Uzg1bWRxd3ViZEtaVTRMM1I4TkZYek5hcTVFemdpYnpDL0ptb2VkakZQdmxvWE9MWTY5TStqWUNnTEgyR3lJWDNJWUtZellLV3RtOExJbEkzUkxXYi8vei8zNEhhZUNNZ3FTd1VYSTBEeUNlTndSeFdFZFZGRzYxUGV1TkwyTXRZQUFuYWNBY21OQzUyN3A5OW5KNEQyNURpNWZMdGxob3puZ2lBMFJRem5yYWtIZjV4R0xZb2NNQldkUmlDUkJRNGFEeEs1YlljUFpadGpZdGUyTlVUZk1oc0xSVk9tdjhaVTRJSjJ5c3lZT0REcHlxMkxhSi9kZGprT1lKV3VUNnNtb0JTYkNVMDg5M1hON2QzZFh2WDdwa3JwMjdidDdXZDR6Wjg3MHpNZUpLTXI5V3Ezcmc1NTZMWXNObXJNK2F5MnFZMDZLN0hCUnk2ajlWZGZHMm9rbEdIZDg5cmU1YW5CTFpYTjhqV3M3R1dGWU1aMlkxcERPMmcwRjA4N2xET09kK09PR0dZbG9xLzZoL3RqYjVWWlFScGwvYzVFaUU3ZUswdVh2WDM1SjNieDVjKysyaU4ySEgvN0FtYS96SWtKMy91dDM5UDlDQzFwS2JPdlZUMXpiNDF6T3lmdXBlRVN2YXJuQXVUdUg1T0ZFNDVMUHJsWEZ6djhRM0NuTEErVUFmNDBWRWJhNTI5L3FFYmduVDU1VVR6Mzk5TUI1dHNPSFozdHVpMkI1QmM3NzkxdSt2MHRtOTlWbi8zaGd4U1VpbDVCVG1vTXoyNWd6RWRqc0dHenFsRFdML2o1bGFZQmtjTC80czN0N2Z4Tnhrd3BKR1lyMEZwUkk1alpJOU83djdvNzAyck96czQ2WWhpVXRpRnl5R1JqQk9MbU9TQWN6Z0NXY0svS2JDOXVEOHVqalIzc3lMaEU2RVNOWkhpRERqa0ZMQkJ6Uk9oeStqZGVCa0l4dE4xZ1laY1JuSHBIenFiN0p3T0tpUVRCT3BIZmNvUU1CRnZscnM2alpuQlNZaEZWUXZ2WFdXejIzUmVpOHd1Wm1YLzc1dExETVRJcFB2Qm1nTzN6NXRuNmR0MzJ2WmV3OTMyZzBXcHdNbm1EbVpVN2NsbDdjR3FhTkhUa2NVaXJDeXBnQ0xNbm1xa1Y1TTVLMWliak4zcnNkZWgrcGVyeDI3WnBUN2grRU83OG1XWmovZmlLR3NxemcybmV2T2JjcmMzTjl6OVBZK0daWXdZbld0c2JlZWdReXVmN01LKzVlM0xyS1I2RkVFYk81WlN3QkZtVnpoVGhUMEsyZ0hDUndMcTlmK25iZ1VPTGR1M2ZWeXkrL3RIZjdqU3RYK3U0bmk3Ni8rdXl6enVVWE9CSElFSUZiOWdvY0l1ZkxER0krZk5STEhmTW1FamkyRkllUmdqMUlITEI2K2tJcUozLzc1aXVSbHdnOG96T3lvTXBIR1pJVUVYc2dlbmZVK2EvL2JkamNXZzl5bjQyTnZzMnd4SzUxTFhEci9uOGdjZzhNbE5qa3NGazRUTmFSWE9Cb1l3YXdaUFRCMmc2dlpHNmpIbko2OE9DQjBQL0pHamV2MEVsbUprSTNZTTNiM24xRUZIM3hXK2JmR2tHUFFlUzZuQXZiRVNCR0I1Y2VSZ05USnhJNFRpc0tmTUNlMFFmcnFpMmxndkkzUDdnODhpbmVNZ3dwUTVOeU5YVDI1Yy9VUk9qOHhTUi8vVmZuSENHVFloSVpsblNMUzE1KzZTWG5mejRSbEFSaVRncE13dHBBNFVsM3k1djFsQnk4YnJiUjRaeXltRE5sYlZmSmxEZXdCbGpncjZ2YVh4OVdsaHlSSlllY2pySkZsd3hQaW5EZHVYUFhFYVFYWC9pelBtSHozbGNXYzR0NGVRVlFGb01ITFFqM3gyN1ZIYUljMk1HZGRwRnJaekI4TUsrNjV4MGhkUEVHam9ZT0hBcWhBMHY4dFc3OE5iZENKMW1iWkc5Uno0Q1RvVWYvN2liZERPNmJlNElsMjNNZE9IaWdaeW1Cek0vSkdycW9jM0tHaHIvQUpJeHBIcTUwaHJtU0hxWU1jTzZPRVRvcUxoTVFPa1dSRDFna2RDcW5VeGkxV3EwYzlaRFRiamJXcllMMDcyVGlDcGpzY3VJaVE0K3laTUNMUE82WmtNWGhBZFNqQ3R3MGk1d2pOQk1lakRxUjBPbHJUakZIbDVUUXpTdm02TUFlb1Z2UFU1dTB3TWtvMC9Xb0ZaUWlZdDRDa3NBc2I2NTM0RXF5Ty84K2xMSk1RRExCWVlsSldJRUpJcGNUZ1F0d2NLb3U0N2RyazJ3WkxQTFhaWldUNVFWeS9wcnFUcWRFMm14ODJPYkxnZ3hCdnVQTDNBUlpKK2V2cFBSdUJlYWpyYm9WbENNdkdabzJrV3ZuUmVBOERyNXVBbkticjN1c2RtMFp1NjVqRGJCb0JDS3oySFJzNTU4V1ZYZE9PNUxBeVREbGswLzJiNy8xeGh0WGVyYlpldnZ0dHdMbjJ1UnZVakhwL2QrZHUzZURYbXBvQlNVaTEwVjZBSE41RWpoZjVqRkhRSTdkcmgzVFM2WVRBVlowek13MFJ1cExES1NDc3ZUZkg0eDBHTEVNVWZvWGVrdnhpQ3diY0xNN0VUQVJQRWNRVDU3c0c5WjBGNEdMTUY2NjlHMW5oeFFmRFpQQmpaM2xUa04xcGJQUU82MWxBcE1FWlAxaitiSHo3OGtwQ0hJeVlKV3ZmWHlkQ0cxWCtYYko2ZDZMaW5QZklOLytLa3NNSkxqTG5yY0xTYjdXT0llY3VzejZ6b0c3WmNyK1pjOUo5eEJVRVM4Uk9qbDF3QlUrRWIxTEhqR1RJY3VRQmVEcld0d21uczRwZWlZbmp2SkkzZ1hPSDVEMU5XK3lqeVpmK1ZpenVsWHhCOFhwRUpCL2YyM3I2M1NTY1VDRWJWeUJDK0xtclc0aGlad2YxODNTN2pxQzVqOC9ic0RaYjE3cWNRaGNrVVhPRmJkNjJrc0VFaEk3OW1lTVYrenFSdXhrV0tpTlZjQ0NPREFYWitjc2JvRnpNanN0WmoxWjNKVXJ6cy9qWCtyZFhIbklXcmlCVzNTTmxhMFd5QjlrcnUyaU9JS3R3aGJtNU5LVGUrejhlekxFVnRQWEtjVlFaaXhpcDM5SVppZERRMkxQczhhdVphd0RPZlJYaVc5MXM3UFBnb2tEWXcxbHloWmRZV2ZBalJSd3IxL2Z5OW9jTVR0KzNCRTVONHVUaGQrU3RYbnY0enl1MVJvVXcrdmpGcGdVVWVSYTVyb3FJcERnQ1FKNUNzb3k3THB1QkU4QzhnblYzVGtsVHRGcnE0S2ZaQnpXa1pEZnpiWnJYdHZHS1hvWGpiK21RWFBDeDZmcEEyMzhkYVE0MERDWCtPdUM4ZE1UVWVLQUhITDYyVHZmaTV5Wm5kUWlKVU9Oa3AxSkJuYnIxazB0YmkzbnJEaDNMczA3RkNtTHY0VURCdzZvOVF2ZkNEeUI0QjB0ZmlIeGZLSUNrekQycGYwaG1WN3pka1RuYlhzTThMSDUyVEZCQ1hydEtvNWU4amo2dzBNQ3ROajJBMk5QcWpyRDdWcnlpSjFjaDlUd0xkbGNJZHZLWXpVdkZOcGZYVDkxNDRFVEIvYi8vSDdwa1I5ZHJiaDdVSXI0eUI2U0J3OGNkRTd3RnRIeUlxZHdQM1BtVEtCSXVabWFMT2gyaTBxaTRpODZNVFJHMmNFazl5SUhBQURwVWF2VlNzcTNYNjVzd2VVdDUvZnU3dThlVmhvRldlZm1DdVl3WkNzdkVVYi9pSUVXdU5VazMvOHY0QUlBQUlVVnVJb1J1TTk3LzM3aVJGWE5IbjZ3bitRWHYvZzc2dDEzMzFYMzcrK3F4YVhsMEF6T3oyOGRPNlplZSsxVi9kai9VSi81OUdkNm5yTTM2OXRRYjc3NUw5NC95N0RrVjRJT09VWGtBQUFnaXNESmZOMm12ajdkLzk5OXFqTDNJSlBidjMrL1V6Unk3K043V2dCUDlBblVLNi84ZzVPSmlRaTZ4U1h1NDM3bDBDSDFyMWV2T3YrWFljK1BQdnBJN2V4ODM1bS9rOFhkMy9uT1B6dC84d21jekwrOW1ZWWRHSzRFQUNpZXdOWFVrR09uNUxpYlFXdldaTDd0ejE5OG9hL2tYL2FyOUZaTXl2K1hGdjhrYXROa2psbzJXVzZuWlF0T0JnY0FLSmJBYmFnSTV5cEtBY2kxZ0kyVFhXUlQ1YUExYmQ1OUtRWDNrTlFJTkUwRzEwN1RIcHdNRGdCUUhJRnpxNEVqSWNPSklsQkJJclY3ZnpjMHc1TmhUSGU1Z0N0MFEwaTBncEpNRGdCZ0NqRHJ6R1E3c0VqcnpVU3daSVBrdXdHNy8zc1BPdlZuYmw2QmM1OW5BTXRaQ1J3aUJ3QlFQS0ZycSs1MmdKSG9Ibm56ZDMxQ0pUdVlCR1Y0L2hPODVYRWhHeXk3aDV4bXVnNlg2a29BZ0lMUmFyVStxbFFxc3RsRHBLMi83dDI3NTFSRXlpSndMN0swWVArbjlqc1Zpa2VPZkU1OStjdC8yRk9WS2NqU0EvOWljdldnZ3JLWnRTMm9yZ1FBS0NpMVdtMVZkWS91aW9TSVhKU0YzZDRzTHFBQ003RXR1c2prQUFEQW05RTFkVVpYVmhHTFVXVFlVZWJjSG4zMDBVZ0NGekNmSnllbW5NNkx3SkhKQVFCTVIwWjNYWTFRZGVuZjlzc3ZibktTZ0ZSbStqSzRScFlGSm1Hd2hBQUFvUGhJSWNwMlZLR1RYVTZlZS81d1grSEppeSs4b0RPM08wRVBxY2Q1Qmx5Y1VGMEpBRkJ3elBDaFpGa2pMUzBZc2pSQXFRUU9PWTBiNXVRQUFLWUFVM0g1NzZwNytQSlFQdm5rRS9YKysvK3BqaDE3d3JuOTJxdXZPdnRSZW1qcjYvZTB2djFibnQ4M2MzSUFBRk5FbEgwdG8yaW15bEVGSlprY0FBQzRHVjFMWjNTeS9kZnZqdmtVRFgzOWdRMENSeVlIQURDOUdaMWtjN1VSSDViNElhZHhRK0VKQU1CMHNxeTZ3NDVScWRzbWNHUnlBQURUbmMzSnNPV092a29EN3VaV1VMWnNmSTlrY2dBQVU0cVpWNXRYNFVzTFdqWUxISmtjQUFCSVJpY2JPVytHQ0Z6SDV2ZUd5QUVBZ0g5cFFTNjM2QUlBQUpoRTZEYjB0WVFsQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQTR1VC9CUmdBc2ZGTm1rUXdjUmtBQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmltcG9ydCBFbWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FbWFpbFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL0xvYWRlclwiO1xyXG5pbXBvcnQgUHJpbWFyeVNlYXJjaEFwcEJhciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgU2VuZFN1Z2dlc3Rpb25Nb2RhbCBmcm9tIFwiLi9zZW5kU3VnZ2VzdGlvbk1vZGFsXCI7XHJcbmltcG9ydCB7IHNlbmRTdWdnZXN0UmVxdWVzdCB9IGZyb20gXCIuLi9saWIvdXNlcnMvYWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gTWFpbkxheW91dChwcm9wcykge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHsgbG9hZGVyIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUVtYWlsID0gKGUpID0+IHtcclxuICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0geyBjb250ZW50OiB0ZXh0LCBlbWFpbCB9O1xyXG4gICAgcHJvcHMuc2VuZFN1Z2dlc3QocGF5bG9hZCk7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkhlcCBCZXJhYmVyIFNhbGzEsXlvcnV6IHwgU2FhbGxhPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJTYWFsbGEsIGluc2FubGFyxLFuIGlsZ2kgYWxhbmxhcsSxbmEgZ8O2cmUgc2FsbGF5YWJpbGRpa2xlcmkgdG9wbHVsdWsgYcSfxLFkxLFyLiDEsGxnaWxlbmRpxJ9pbml6IHRvcGx1bHVrbGFyxLEgYnVsdW4gdmUgw6dldnJpbWnDp2kgYmlyIHRvcGx1bHXEn3VuIHBhcsOnYXPEsSBvbHVuIVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8UHJpbWFyeVNlYXJjaEFwcEJhciAvPlxyXG4gICAgICB7bG9hZGVyLmxvYWRpbmcgJiYgPExvYWRlciAvPn1cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYmFyXCI+XHJcbiAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9IGNsYXNzTmFtZT1cImZhY2Vib29rXCI+XHJcbiAgICAgICAgICA8RW1haWxJY29uIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFNlbmRTdWdnZXN0aW9uTW9kYWxcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIG9uQ2hhbmdlRW1haWw9e2hhbmRsZUNoYW5nZUVtYWlsfVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgdGV4dD17dGV4dH1cclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGxvYWRlcjogc3RhdGUubG9hZGVyLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZW5kU3VnZ2VzdDogKHBheWxvYWQpID0+IGRpc3BhdGNoKHNlbmRTdWdnZXN0UmVxdWVzdChwYXlsb2FkKSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFpbkxheW91dCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdE1lbnUocHJvcHMpIHtcclxuICBjb25zdCB7IG1lbnVJdGVtcyB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgaWQ9XCJzaW1wbGUtbWVudVwiXHJcbiAgICAgICAgYW5jaG9yRWw9e3Byb3BzLmFuY2hvckVsfVxyXG4gICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgb3Blbj17Qm9vbGVhbihwcm9wcy5hbmNob3JFbCl9XHJcbiAgICAgICAgb25DbG9zZT17cHJvcHMub25DbG9zZX1cclxuICAgICAgPlxyXG4gICAgICAgIHttZW51SXRlbXMgJiZcclxuICAgICAgICAgIG1lbnVJdGVtcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBtZW51SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpbmRleH0gb25DbGljaz17aXRlbSAmJiBpdGVtLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgIHtpdGVtICYmIGl0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9NZW51PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWxcIjtcclxuaW1wb3J0IEltYWdlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ltYWdlXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5mdW5jdGlvbiByYW5kKCkge1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMCkgLSAxMDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TW9kYWxTdHlsZSgpIHtcclxuICBjb25zdCB0b3AgPSA1MDtcclxuICBjb25zdCBsZWZ0ID0gNTA7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0b3A6IGAke3RvcH0lYCxcclxuICAgIGxlZnQ6IGAke2xlZnR9JWAsXHJcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLSR7dG9wfSUsIC0ke2xlZnR9JSlgLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgd2lkdGg6IDQwMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDAwXCIsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbmRTdWdnZXN0aW9uTW9kYWwocHJvcHMpIHtcclxuICBjb25zdCB7IG9wZW4sIG9uQ2xvc2UsIG9uU3VibWl0LCB0ZXh0LCBvbkNoYW5nZSwgb25DaGFuZ2VFbWFpbCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgW21vZGFsU3R5bGVdID0gUmVhY3QudXNlU3RhdGUoZ2V0TW9kYWxTdHlsZSk7XHJcblxyXG4gIGNvbnN0IGJvZHkgPSAoXHJcbiAgICA8ZGl2IHN0eWxlPXttb2RhbFN0eWxlfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICA8cD5cclxuICAgICAgICBCZXRhIHPDvHLDvG3DvCBoYWtrxLFuZGEgbmUgZMO8xZ/DvG7DvHlvcnN1biA/IFRla2xpZiB2ZSDDtm5lcmlsZXJpbmkgYml6aW1sZVxyXG4gICAgICAgIHBheWxhxZ9cclxuICAgICAgPC9wPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgaWQ9XCJzdGFuZGFyZC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICBsYWJlbD1cIm5leWkgZGXEn2nFn3RpcnNlayA/XCJcclxuICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgIGlkPVwic3RhbmRhcmQtdGV4dGFyZWFcIlxyXG4gICAgICAgICAgbGFiZWw9XCJlLXBvc3RhIC0gaXN0ZcSfZSBiYcSfbMSxXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGRpc2FibGVkPXshdGV4dH1cclxuICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0fVxyXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBHw7ZuZGVyXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICBvcGVuPXtvcGVufVxyXG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtbW9kYWwtdGl0bGVcIlxyXG4gICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgID5cclxuICAgICAge2JvZHl9XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEFVVEhfUkVRVUVTVCA9ICdBVVRIX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQVVUSF9TVUNDRVNTID0gJ0FVVEhfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBVVRIX0ZBSUxVUkUgPSAnQVVUSF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfUkVRVUVTVCA9ICdTSUdOVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfU1VDQ0VTUyA9ICdTSUdOVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfRkFJTFVSRSA9ICdTSUdOVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HT1VUX1JFUVVFU1QgPSAnTE9HT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HT1VUX1NVQ0NFU1MgPSAnTE9HT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HT1VUX0ZBSUxVUkUgPSAnTE9HT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFTkRfUkVTRVRfQ09ERV9SRVFVRVNUID0gJ1NFTkRfUkVTRVRfQ09ERV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNFTkRfUkVTRVRfQ09ERV9TVUNDRVNTID0gJ1NFTkRfUkVTRVRfQ09ERV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNFTkRfUkVTRVRfQ09ERV9GQUlMVVJFID0gJ1NFTkRfUkVTRVRfQ09ERV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRVNFVF9QQVNTV09SRF9SRVFVRVNUID0gJ1JFU0VUX1BBU1NXT1JEX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVTRVRfUEFTU1dPUkRfU1VDQ0VTUyA9ICdSRVNFVF9QQVNTV09SRF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFU0VUX1BBU1NXT1JEX0ZBSUxVUkUgPSAnUkVTRVRfUEFTU1dPUkRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0ID0gKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4gKHtcclxuICAgIHR5cGU6IEFVVEhfUkVRVUVTVCxcclxuICAgIHBheWxvYWQ6IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcFJlcXVlc3QgPSAocGF5bG9hZCkgPT4gKHtcclxuICAgIHR5cGU6IFNJR05VUF9SRVFVRVNULFxyXG4gICAgcGF5bG9hZFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dPdXQgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRSZXNldENvZGVSZXF1ZXN0ID0gKGVtYWlsQWRkcmVzcykgPT4gKHtcclxuICAgIHR5cGU6IFNFTkRfUkVTRVRfQ09ERV9SRVFVRVNULFxyXG4gICAgZW1haWxBZGRyZXNzXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0UGFzc3dvcmRSZXF1ZXN0ID0gKHBheWxvYWQpID0+ICh7XHJcbiAgICB0eXBlOiBSRVNFVF9QQVNTV09SRF9SRVFVRVNULFxyXG4gICAgcGF5bG9hZFxyXG59KTsiLCJleHBvcnQgY29uc3QgR0VUX0NBVEVHT1JJRVNfUkVRVUVTVCA9ICdHRVRfQ0FURUdPUklFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9DQVRFR09SSUVTX1NVQ0NFU1MgPSAnR0VUX0NBVEVHT1JJRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0FURUdPUklFU19GQUlMVVJFID0gJ0dFVF9DQVRFR09SSUVTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9DT01TX0JZX0NBVEVHT1JZX1JFUVVFU1QgPSAnR0VUX0NPTVNfQllfQ0FURUdPUllfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ09NU19CWV9DQVRFR09SWV9TVUNDRVNTID0gJ0dFVF9DT01TX0JZX0NBVEVHT1JZX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX0NPTVNfQllfQ0FURUdPUllfRkFJTFVSRSA9ICdHRVRfQ09NU19CWV9DQVRFR09SWV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yaWVzUmVxdWVzdCA9IHBheWxvYWQgPT4ge1xyXG4gIHJldHVybiAoe1xyXG4gICAgdHlwZTogR0VUX0NBVEVHT1JJRVNfUkVRVUVTVCxcclxuICAgIHBheWxvYWQsXHJcbiAgfSk7XHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRDb21zQnlDYXRlZ29yeVJlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogR0VUX0NPTVNfQllfQ0FURUdPUllfUkVRVUVTVCxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcblxyXG4iLCJleHBvcnQgY29uc3QgQ0xFQVJfSE9NRSA9ICdDTEVBUl9IT01FJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX0NPTU1VTklUWSA9ICdDTEVBUl9DT01NVU5JVFknO1xyXG5leHBvcnQgY29uc3QgQ0xFQVJfVVNFUiA9ICdDTEVBUl9VU0VSJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX1BST0ZJTEUgPSAnQ0xFQVJfUFJPRklMRSc7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9DT01NVU5JVFlfUEFHRSA9ICdDTEVBUl9DT01NVU5JVFlfUEFHRSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyU3RvcmVSZXF1ZXN0ID0gbmFtZSA9PiB7XHJcbiAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICBjYXNlIFwiaG9tZV9wb3N0c1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IENMRUFSX0hPTUUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgXCJjb21tdW5pdHlfcG9zdHNcIjpcclxuICAgICAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBDTEVBUl9DT01NVU5JVFksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgXCJwcm9maWxlX3Bvc3RzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQ0xFQVJfUFJPRklMRSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBcInVzZXJfcG9zdHNcIjpcclxuICAgICAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBDTEVBUl9VU0VSLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlIFwiY29tbXVuaXR5X29hZ2VcIjpcclxuICAgICAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBDTEVBUl9DT01NVU5JVFlfUEFHRSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgR0VUX1BPUFVMQVJfTElTVF9SRVFVRVNUID0gJ0dFVF9QT1BVTEFSX0xJU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfUE9QVUxBUl9MSVNUX1NVQ0NFU1MgPSAnR0VUX1BPUFVMQVJfTElTVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9QT1BVTEFSX0xJU1RfRkFJTFVSRSA9ICdHRVRfUE9QVUxBUl9MSVNUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9DT01NVU5JVFlfUkVRVUVTVCA9ICdHRVRfQ09NTVVOSVRZX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX0NPTU1VTklUWV9TVUNDRVNTID0gJ0dFVF9DT01NVU5JVFlfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ09NTVVOSVRZX0ZBSUxVUkUgPSAnR0VUX0NPTU1VTklUWV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQ09NTVVOSVRZX1BPU1RTX1JFUVVFU1QgPSAnR0VUX0NPTU1VTklUWV9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9DT01NVU5JVFlfUE9TVFNfU1VDQ0VTUyA9ICdHRVRfQ09NTVVOSVRZX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX0NPTU1VTklUWV9QT1NUU19GQUlMVVJFID0gJ0dFVF9DT01NVU5JVFlfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0FMTF9DT01NVU5JVFlfUkVRVUVTVCA9ICdHRVRfQUxMX0NPTU1VTklUWV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfQ09NTVVOSVRZX1NVQ0NFU1MgPSAnR0VUX0FMTF9DT01NVU5JVFlfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX0NPTU1VTklUWV9GQUlMVVJFID0gJ0dFVF9BTExfQ09NTVVOSVRZX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0NPTU1VTklUSUVTX1JFUVVFU1QgPSAnR0VUX1VTRVJfQ09NTVVOSVRJRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9DT01NVU5JVElFU19TVUNDRVNTID0gJ0dFVF9VU0VSX0NPTU1VTklUSUVTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfQ09NTVVOSVRJRVNfRkFJTFVSRSA9ICdHRVRfVVNFUl9DT01NVU5JVElFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBPRl9NT0RFUkFUT1JTX1JFUVVFU1QgPSAnT0ZfTU9ERVJBVE9SU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IE9GX01PREVSQVRPUlNfU1VDQ0VTUyA9ICdPRl9NT0RFUkFUT1JTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgT0ZfTU9ERVJBVE9SU19GQUlMVVJFID0gJ09GX01PREVSQVRPUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX0NPTU1VTklUWV9SRVFVRVNUID0gJ1VQREFURV9DT01NVU5JVFlfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQ09NTVVOSVRZX1NVQ0NFU1MgPSAnVVBEQVRFX0NPTU1VTklUWV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9DT01NVU5JVFlfRkFJTFVSRSA9ICdVUERBVEVfQ09NTVVOSVRZX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSU19SRVFVRVNUID0gJ0dFVF9VU0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSU19TVUNDRVNTID0gJ0dFVF9VU0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSU19GQUlMVVJFID0gJ0dFVF9VU0VSU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9SRVFVRVNUID0gJ0RFTEVURV9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfU1VDQ0VTUyA9ICdERUxFVEVfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX0ZBSUxVUkUgPSAnREVMRVRFX1VTRVJfRkFJTFVSRSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvcHVsYXJDb21tbml0eUxpc3RSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IEdFVF9QT1BVTEFSX0xJU1RfUkVRVUVTVCxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb21tdW5pdHlSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IEdFVF9DT01NVU5JVFlfUkVRVUVTVCxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb21tdW5pdHlQb3N0c1JlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogR0VUX0NPTU1VTklUWV9QT1NUU19SRVFVRVNULFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJDb21tdW5pdGllc1JlcXVlc3QgPSBwYXlsb2FkID0+IHtcclxuICBjb25zb2xlLmxvZygnYWN0aW9uJylcclxuICByZXR1cm4gKHtcclxuICAgIHR5cGU6IEdFVF9VU0VSX0NPTU1VTklUSUVTX1JFUVVFU1QsXHJcbiAgICBwYXlsb2FkLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgb2ZNb2RlcmF0b3JzUmVxdWVzdCA9ICgpID0+ICh7XHJcbiAgdHlwZTogT0ZfTU9ERVJBVE9SU19SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVDb21tdW5pdHlSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IFVQREFURV9DT01NVU5JVFlfUkVRVUVTVCxcclxuICBwYXlsb2FkXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJzID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IEdFVF9VU0VSU19SRVFVRVNULFxyXG4gIHBheWxvYWRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlVXNlclJlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogREVMRVRFX1VTRVJfUkVRVUVTVCxcclxuICBwYXlsb2FkXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbENvbW11bml0aWVzUmVxdWVzdCA9ICgpID0+ICh7XHJcbiAgdHlwZTogR0VUX0FMTF9DT01NVU5JVFlfUkVRVUVTVCxcclxufSk7IiwiaW1wb3J0IHsgZnJvbVBhaXJzIH0gZnJvbSAnbG9kYXNoL2ZwJztcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcyc7XHJcblxyXG5jb25zdCBsb2NhbFN0b3JhZ2UgPSBnbG9iYWwubG9jYWxTdG9yYWdlICYmIGdsb2JhbC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbVxyXG4gICAgPyBnbG9iYWwubG9jYWxTdG9yYWdlXHJcbiAgICA6IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHN0b3JlID0ge307XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ2V0SXRlbShrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZVtrZXldIHx8IG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldEl0ZW0oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmVba2V5XSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsZWFyKCkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmUgPSB7fTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVtb3ZlSXRlbShrZXkpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JlID0gT2JqZWN0LmtleXMoc3RvcmUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihrID0+IGtleSAhPT0gaylcclxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjdW11bGF0b3JbY3VycmVudEl0ZW1dID0gc3RvcmVbY3VycmVudEl0ZW1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9KCkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlYWRMb2NhbFN0b3JhZ2UgPSAoa2V5KSA9PiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShrZXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZyb21QYWlycyhrZXkubWFwKGsgPT4gW2ssIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGspICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaykpXSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkU3RhdGUgPSAoa2V5KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRTdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWRTdGF0ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXJpYWxpemVkU3RhdGUpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaXNMb2dnZWRXaXRoQ29va2llcyA9IChjdHgpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoY3R4KVxyXG4gICAgcmV0dXJuIGNvb2tpZXMgJiYgY29va2llcy50b2tlbiAmJiBjb29raWVzLnVzZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgd3JpdGVMb2NhbFN0b3JhZ2UgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qga2V5cyA9IHR5cGVvZiBrZXkgPT09ICdvYmplY3QnID8ga2V5IDogeyBba2V5XTogdmFsdWUgfTtcclxuICAgIE9iamVjdC5lbnRyaWVzKGtleXMpLm1hcCgoW2ssIHZhbF0pID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKGssIEpTT04uc3RyaW5naWZ5KHZhbCkpKTtcclxuICAgIHJldHVybiBrZXlzO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcclxuICAgIGNvbnN0IGtleXMgPSBBcnJheS5pc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XTtcclxuICAgIGtleXMuZm9yRWFjaChrID0+IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGspKTtcclxuICAgIHJldHVybiBrZXlzO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VhcmNoUGFyYW1zID0gcGFyYW1zID0+IE9iamVjdC5rZXlzKHBhcmFtcykubWFwKChrZXkpID0+IHtcclxuICAgIGlmICh0eXBlb2YgKHBhcmFtc1trZXldKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA/IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkgOiAnJ31gO1xyXG4gICAgfVxyXG59KS5qb2luKCcmJyk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVTdHJpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSk7XHJcbiAgICByZXR1cm4gbmFtZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzTG9nZ2VkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSByZWFkTG9jYWxTdG9yYWdlKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyID0gcmVhZExvY2FsU3RvcmFnZShcInVzZXJcIik7XHJcbiAgICByZXR1cm4gKHRva2VuICYmIHVzZXIpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UGFyYW1ldGVyQnlOYW1lID0gKG5hbWUsIHVybCkgPT4ge1xyXG4gICAgaWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpO1xyXG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyksXHJcbiAgICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcclxuICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBodG1sVG9UZXh0ID0gKGh0bWwpID0+IHtcclxuICAgIHZhciB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRlbXAuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIHJldHVybiB0ZW1wLnRleHRDb250ZW50IHx8IHRlbXAuaW5uZXJUZXh0IHx8IFwiXCI7XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjb25zdCBHRVRfSE9NRV9QT1NUU19SRVFVRVNUID0gJ0dFVF9IT01FX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfUE9TVFNfU1VDQ0VTUyA9ICdHRVRfSE9NRV9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9IT01FX1BPU1RTX0ZBSUxVUkUgPSAnR0VUX0hPTUVfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1VOQVVUSE9SSVpFRF9QT1NUU19SRVFVRVNUID0gJ0dFVF9VTkFVVEhPUklaRURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfVU5BVVRIT1JJWkVEX1BPU1RTX1NVQ0NFU1MgPSAnR0VUX1VOQVVUSE9SSVpFRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9VTkFVVEhPUklaRURfUE9TVFNfRkFJTFVSRSA9ICdHRVRfVU5BVVRIT1JJWkVEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9SRVFVRVNUID0gJ1NFQVJDSF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9TVUNDRVNTID0gJ1NFQVJDSF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9GQUlMVVJFID0gJ1NFQVJDSF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRIb21lUG9zdHNSZXF1ZXN0ID0gcGF5bG9hZCA9PiB7XHJcbiAgcmV0dXJuICh7XHJcbiAgICB0eXBlOiBHRVRfSE9NRV9QT1NUU19SRVFVRVNULFxyXG4gICAgcGF5bG9hZCxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVuYXV0aG9yaXplZFBvc3RzUmVxdWVzdCA9IHBheWxvYWQgPT4ge1xyXG4gIHJldHVybiAoe1xyXG4gICAgdHlwZTogR0VUX1VOQVVUSE9SSVpFRF9QT1NUU19SRVFVRVNULFxyXG4gICAgcGF5bG9hZCxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaFJlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogU0VBUkNIX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5cclxuIiwiZXhwb3J0IGNvbnN0IEdFVF9VTlJFQURTX1JFUVVFU1QgPSAnR0VUX1VOUkVBRFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfVU5SRUFEU19TVUNDRVNTID0gJ0dFVF9VTlJFQURTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX1VOUkVBRFNfRkFJTFVSRSA9ICdHRVRfVU5SRUFEU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBNQVJLX0FTX1JFQURfUkVRVUVTVCA9ICdNQVJLX0FTX1JFQURfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNQVJLX0FTX1JFQURfU1VDQ0VTUyA9ICdNQVJLX0FTX1JFQURfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNQVJLX0FTX1JFQURfRkFJTFVSRSA9ICdNQVJLX0FTX1JFQURfRkFJTFVSRSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVucmVhZHNSZXF1ZXN0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBHRVRfVU5SRUFEU19SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXJrQXNSZWFkUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBNQVJLX0FTX1JFQURfUkVRVUVTVCxcclxuICBwYXlsb2FkXHJcbn0pO1xyXG5cclxuXHJcbiIsImV4cG9ydCBjb25zdCBHRVRfTk9USUZJQ0FUSU9OU19SRVFVRVNUID0gJ0dFVF9OT1RJRklDQVRJT05TX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX05PVElGSUNBVElPTlNfU1VDQ0VTUyA9ICdHRVRfTk9USUZJQ0FUSU9OU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9OT1RJRklDQVRJT05TX0ZBSUxVUkUgPSAnR0VUX05PVElGSUNBVElPTlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTUFSS19BU19SRUFEX1JFUVVFU1QgPSAnTUFSS19BU19SRUFEX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTUFSS19BU19SRUFEX1NVQ0NFU1MgPSAnTUFSS19BU19SRUFEX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTUFSS19BU19SRUFEX0ZBSUxVUkUgPSAnTUFSS19BU19SRUFEX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9DT1VOVF9SRVFVRVNUID0gJ0dFVF9DT1VOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9DT1VOVF9TVUNDRVNTID0gJ0dFVF9DT1VOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9DT1VOVF9GQUlMVVJFID0gJ0dFVF9DT1VOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXROb3RpZmljYXRpb25zUmVxdWVzdCA9ICgpID0+ICh7XHJcbiAgdHlwZTogR0VUX05PVElGSUNBVElPTlNfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q291bnRSZXF1ZXN0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBHRVRfQ09VTlRfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbWFya0FzUmVhZFJlcXVlc3QgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogTUFSS19BU19SRUFEX1JFUVVFU1QsXHJcbiAgcGF5bG9hZFxyXG59KTtcclxuIiwiZXhwb3J0IGNvbnN0IEdFVF9QT1NUX0RFVEFJTF9SRVFVRVNUID0gJ0dFVF9QT1NUX0RFVEFJTF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX0RFVEFJTF9TVUNDRVNTID0gJ0dFVF9QT1NUX0RFVEFJTF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX0RFVEFJTF9GQUlMVVJFID0gJ0dFVF9QT1NUX0RFVEFJTF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFJTl9QT1NUU19SRVFVRVNUID0gJ0dFVF9NQUlOX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX01BSU5fUE9TVFNfU1VDQ0VTUyA9ICdHRVRfTUFJTl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9NQUlOX1BPU1RTX0ZBSUxVUkUgPSAnR0VUX01BSU5fUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfUE9TVFNfUkVRVUVTVCA9ICdHRVRfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSAnR0VUX1VTRVJfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0dFVF9VU0VSX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUX1JFUVVFU1QgPSAnQ1JFQVRFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TVF9TVUNDRVNTID0gJ0NSRUFURV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1RfRkFJTFVSRSA9ICdDUkVBVEVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBWT1RFX1BPU1RfUkVRVUVTVCA9ICdWT1RFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBWT1RFX1BPU1RfU1VDQ0VTUyA9ICdWT1RFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBWT1RFX1BPU1RfRkFJTFVSRSA9ICdWT1RFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfUkVRVUVTVCA9ICdERUxFVEVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUX1NVQ0NFU1MgPSAnREVMRVRFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9GQUlMVVJFID0gJ0RFTEVURV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9NT0RFUkFUT1JfUkVRVUVTVCA9ICdERUxFVEVfTU9ERVJBVE9SX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX01PREVSQVRPUl9TVUNDRVNTID0gJ0RFTEVURV9NT0RFUkFUT1JfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfTU9ERVJBVE9SX0ZBSUxVUkUgPSAnREVMRVRFX01PREVSQVRPUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0RGV0YWlsUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBHRVRfUE9TVF9ERVRBSUxfUkVRVUVTVCxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNYWluUG9zdHNSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IEdFVF9NQUlOX1BPU1RTX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlclBvc3RzUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBHRVRfVVNFUl9QT1NUU19SRVFVRVNULFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3RSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IENSRUFURV9QT1NUX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgdm90ZVBvc3RSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IFZPVEVfUE9TVF9SRVFVRVNULFxyXG4gIHBheWxvYWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBvc3RSZXF1ZXN0ID0gcGF5bG9hZCA9PiAoe1xyXG4gIHR5cGU6IERFTEVURV9QT1NUX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlTW9kZXJhdG9yUmVxdWVzdCA9IHBheWxvYWQgPT4gKHtcclxuICB0eXBlOiBERUxFVEVfTU9ERVJBVE9SX1JFUVVFU1QsXHJcbiAgcGF5bG9hZCxcclxufSk7IiwiZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFX1JFUVVFU1QgPSAnR0VUX1BST0ZJTEVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRV9TVUNDRVNTID0gJ0dFVF9QUk9GSUxFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfRkFJTFVSRSA9ICdHRVRfUFJPRklMRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9CWV9VU0VSTkFNRV9SRVFVRVNUID0gJ0dFVF9VU0VSX0JZX1VTRVJOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfQllfVVNFUk5BTUVfU1VDQ0VTUyA9ICdHRVRfVVNFUl9CWV9VU0VSTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0JZX1VTRVJOQU1FX0ZBSUxVUkUgPSAnR0VUX1VTRVJfQllfVVNFUk5BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgSk9JTl9DT01NVU5JVFlfUkVRVUVTVCA9ICdKT0lOX0NPTU1VTklUWV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEpPSU5fQ09NTVVOSVRZX1NVQ0NFU1MgPSAnSk9JTl9DT01NVU5JVFlfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBKT0lOX0NPTU1VTklUWV9GQUlMVVJFID0gJ0pPSU5fQ09NTVVOSVRZX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExFQVZFX0NPTU1VTklUWV9SRVFVRVNUID0gJ0xFQVZFX0NPTU1VTklUWV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExFQVZFX0NPTU1VTklUWV9TVUNDRVNTID0gJ0xFQVZFX0NPTU1VTklUWV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExFQVZFX0NPTU1VTklUWV9GQUlMVVJFID0gJ0xFQVZFX0NPTU1VTklUWV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRU5EX1NVR0dFU1RfUkVRVUVTVCA9ICdTRU5EX1NVR0dFU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTRU5EX1NVR0dFU1RfU1VDQ0VTUyA9ICdTRU5EX1NVR0dFU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTRU5EX1NVR0dFU1RfRkFJTFVSRSA9ICdTRU5EX1NVR0dFU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlclByb2ZpbGUgPSBwYXlsb2FkID0+ICh7XHJcbiAgdHlwZTogR0VUX1BST0ZJTEVfUkVRVUVTVCxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQnlVc2VybmFtZSA9IHVzZXJuYW1lID0+ICh7XHJcbiAgdHlwZTogR0VUX1VTRVJfQllfVVNFUk5BTUVfUkVRVUVTVCxcclxuICB1c2VybmFtZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgam9pbkNvbW11bml0eVJlcXVlc3QgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBKT0lOX0NPTU1VTklUWV9SRVFVRVNULFxyXG4gIHBheWxvYWRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbGVhdmVDb21tdW5pdHlSZXF1ZXN0ID0gKHBheWxvYWQpID0+ICh7XHJcbiAgdHlwZTogTEVBVkVfQ09NTVVOSVRZX1JFUVVFU1QsXHJcbiAgcGF5bG9hZFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kU3VnZ2VzdFJlcXVlc3QgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBTRU5EX1NVR0dFU1RfUkVRVUVTVCxcclxuICBwYXlsb2FkXHJcbn0pOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzUmVxdWVzdCB9IGZyb20gJy4uL2xpYi9jYXRlZ29yeS9hY3Rpb25zJztcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFpbkxheW91dFwiO1xyXG5cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgY2F0ZWdvcmllczogc3RhdGUuY2F0ZWdvcmllcyxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gIGdldEFsbDogKCkgPT4gZGlzcGF0Y2goZ2V0Q2F0ZWdvcmllc1JlcXVlc3QoKSksXHJcbn0pO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XHJcbiAgICBjb25zdCBjb29raWVzID0gY3R4LnJlcSAmJiBjdHgucmVxLmhlYWRlcnMgJiYgY3R4LnJlcS5oZWFkZXJzLmNvb2tpZTtcclxuICAgIHJldHVybiB7IGNvb2tpZXMgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TWFpbkxheW91dD5cclxuICAgICAgICAgIDxIb21lIC8+XHJcbiAgICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbmRleCk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RHJvcFVwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZU91dGxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0VtYWlsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0hpZ2hsaWdodE9mZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW1hZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25JbXBvcnRhbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWIvU2tlbGV0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hlZXJpb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbHN4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvZnBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudC9sb2NhbGUvdHJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW1hZ2UtbGlnaHRib3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wbGF5ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
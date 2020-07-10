webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PopularTags/index.jsx":
/*!******************************************!*\
  !*** ./components/PopularTags/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowDropUp */ "./node_modules/@material-ui/icons/ArrowDropUp.js");
/* harmony import */ var _material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _lib_community_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/community/actions */ "./lib/community/actions.js");
var _this = undefined,
    _jsxFileName = "D:\\repos\\saalla-next.js\\components\\PopularTags\\index.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
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
  };
});

var renderBars = function renderBars(classes, slug, name, memberCount, logoPath) {
  return __jsx("div", {
    key: slug,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.com_cont,
    __self: _this,
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
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }), __jsx("img", {
    className: classes.avatarImg,
    src: logoPath,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      display: "grid"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: classes.community_title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/t/[community]",
    as: "/t/".concat(slug),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      color: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, name))), __jsx("span", {
    className: classes.member_count,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, memberCount, " \xFCye")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }));
};

function PopularTags(props) {
  _s();

  var classes = useStyles();
  var communities = props.communities;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var getPopularsCom = props.getPopularsCom;
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
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }, "Pop\xFCler Topluluklar")), communities && communities.length > 0 && communities.map(function (x) {
    return renderBars(classes, x.slug, x.name, x.memberCount, x.logoPath);
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
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

_s(PopularTags, "OAQf9SHEQQsOOZKjohcuI3tGtQ0=", false, function () {
  return [useStyles];
});

_c = PopularTags;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getPopularsCom: function getPopularsCom() {
      return dispatch(Object(_lib_community_actions__WEBPACK_IMPORTED_MODULE_8__["getPopularCommnityListRequest"])({}));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    communities: state.communities.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(PopularTags));

var _c;

$RefreshReg$(_c, "PopularTags");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvcHVsYXJUYWdzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsInBhZGRpbmdUb3AiLCJ0YWdfY2FyZCIsIndpZHRoIiwicGFkZGluZyIsImZsZXhXcmFwIiwidGFnVGV4dCIsInRleHREZWNvcmF0aW9uTGluZSIsIm1hcmdpbkxlZnQiLCJhdmF0YXJJbWciLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJib3JkZXJSYWRpdXMiLCJib3hTaXppbmciLCJmbGV4IiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwibWFyZ2luIiwiY29tbXVuaXR5X3RpdGxlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsImNvbG9yIiwiY29tX2NvbnQiLCJtZW1iZXJfY291bnQiLCJwYWRkaW5nQm90dG9tIiwiYnV0dG9uIiwidGV4dFRyYW5zZm9ybSIsImJveFNoYWRvdyIsImpvaW5fYnV0dG9uIiwidGV4dEFsaWduIiwicmVuZGVyQmFycyIsImNsYXNzZXMiLCJzbHVnIiwibmFtZSIsIm1lbWJlckNvdW50IiwibG9nb1BhdGgiLCJwYWRkaW5nTGVmdCIsIlBvcHVsYXJUYWdzIiwicHJvcHMiLCJjb21tdW5pdGllcyIsInVzZUVmZmVjdCIsImdldFBvcHVsYXJzQ29tIiwibGVuZ3RoIiwibWFwIiwieCIsIm1hcmdpblRvcCIsImp1c3RpZnlDb250ZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJnZXRQb3B1bGFyQ29tbW5pdHlMaXN0UmVxdWVzdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZGF0YSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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WixlQUFXLEVBQUVZLEtBQUssQ0FBQ1osV0FBTixDQUFrQmE7QUFERyxHQUFaO0FBQUEsQ0FBeEI7O0FBSWVDLDBIQUFPLENBQUNILGVBQUQsRUFBa0JILGtCQUFsQixDQUFQLENBQTZDVixXQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy44MWQ0NWYwNzVkMDYxOWVmNWE1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IEFycm93RHJvcFVwSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RHJvcFVwXCI7XHJcbmltcG9ydCB7IERpdmlkZXIsIEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRQb3B1bGFyQ29tbW5pdHlMaXN0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi9saWIvY29tbXVuaXR5L2FjdGlvbnNcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgcGFkZGluZ1RvcDogXCIyMHB4XCIsXHJcbiAgfSxcclxuICB0YWdfY2FyZDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgcGFkZGluZzogXCIxcmVtXCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgfSxcclxuICB0YWdUZXh0OiB7XHJcbiAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6IFwidW5kZXJsaW5lXCIsXHJcbiAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIixcclxuICB9LFxyXG4gIGF2YXRhckltZzoge1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjUwJVwiLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgIGJhY2tncm91bmRTaXplOiBcIjEwMCVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIyNHB4XCIsXHJcbiAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgZmxleDogXCJub25lXCIsXHJcbiAgICBoZWlnaHQ6IFwiMzJweFwiLFxyXG4gICAgd2lkdGg6IFwiMzJweFwiLFxyXG4gICAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcclxuICAgIG1hcmdpbjogXCIwIDhweFwiLFxyXG4gIH0sXHJcbiAgY29tbXVuaXR5X3RpdGxlOiB7XHJcbiAgICBmb250RmFtaWx5OiBcImluaGVyaXRcIixcclxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgIGxpbmVIZWlnaHQ6IFwiMThweFwiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcclxuICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgfSxcclxuICBjb21fY29udDoge1xyXG4gICAgcGFkZGluZzogXCIxcmVtIDFyZW0gMCAwXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIG1lbWJlcl9jb3VudDoge1xyXG4gICAgZm9udFNpemU6IFwiMTJweFwiLFxyXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMTZweFwiLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogXCI0cHhcIixcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXHJcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgcGFkZGluZzogXCIwXCIsXHJcbiAgfSxcclxuICBqb2luX2J1dHRvbjoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgcmVuZGVyQmFycyA9IChjbGFzc2VzLCBzbHVnLCBuYW1lLCBtZW1iZXJDb3VudCwgbG9nb1BhdGgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBrZXk9e3NsdWd9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21fY29udH0+XHJcbiAgICAgICAgPENvbCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZ0xlZnQ6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICA8QXJyb3dEcm9wVXBJY29uIGZvbnRTaXplPVwibGFyZ2VcIiBzdHlsZT17eyBjb2xvcjogXCIjNDBlYjNkXCIgfX0gLz5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhckltZ30gc3JjPXtsb2dvUGF0aH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIgfX0+XHJcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21tdW5pdHlfdGl0bGV9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3QvW2NvbW11bml0eV1cIn0gYXM9e2AvdC8ke3NsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PntuYW1lfTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvY29kZT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1lbWJlcl9jb3VudH0+e21lbWJlckNvdW50fSDDvHllPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIFBvcHVsYXJUYWdzKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgY29tbXVuaXRpZXMgfSA9IHByb3BzO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IGdldFBvcHVsYXJzQ29tIH0gPSBwcm9wcztcclxuICAgIGdldFBvcHVsYXJzQ29tKCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWdfY2FyZH0+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMXJlbVwiIH19PlBvcMO8bGVyIFRvcGx1bHVrbGFyPC9iPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIHtjb21tdW5pdGllcyAmJlxyXG4gICAgICAgICAgY29tbXVuaXRpZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgY29tbXVuaXRpZXMubWFwKCh4KSA9PlxyXG4gICAgICAgICAgICByZW5kZXJCYXJzKGNsYXNzZXMsIHguc2x1ZywgeC5uYW1lLCB4Lm1lbWJlckNvdW50LCB4LmxvZ29QYXRoKVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Um93IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxNnB4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9rZXNmZXRcIj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEtlxZ9mZXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgZ2V0UG9wdWxhcnNDb206ICgpID0+IGRpc3BhdGNoKGdldFBvcHVsYXJDb21tbml0eUxpc3RSZXF1ZXN0KHt9KSksXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNvbW11bml0aWVzOiBzdGF0ZS5jb21tdW5pdGllcy5kYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBvcHVsYXJUYWdzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
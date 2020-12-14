webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Index-page/Features/FeatureCard/index.jsx":
/*!**************************************************************!*\
  !*** ./components/Index-page/Features/FeatureCard/index.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FeatureCard; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"../node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _FeatureCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeatureCard.module.css */ \"./components/Index-page/Features/FeatureCard/FeatureCard.module.css\");\n/* harmony import */ var _FeatureCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FeatureCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/brandon/workspace/atomic-labs/frontend/components/Index-page/Features/FeatureCard/index.jsx\";\n\n\nfunction FeatureCard(_ref) {\n  var _this = this;\n\n  var _ref$img = _ref.img,\n      img = _ref$img === void 0 ? \"\".concat(\"\", \"/assets/img/feature_1.png\") : _ref$img,\n      _ref$items = _ref.items,\n      items = _ref$items === void 0 ? [\"item1\", \"item2\"] : _ref$items;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _FeatureCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_FeatureCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card__image),\n      style: {\n        backgroundImage: \"url(\".concat(\"\").concat(img, \")\")\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: _FeatureCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card__list,\n      children: items.map(function (item, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          className: _FeatureCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card__list__item,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            alt: \"Marca de verificaci\\xF3n\",\n            src: \"\".concat(\"\", \"/assets/img/ic_check_tiny.png\"),\n            className: _FeatureCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card__list__image\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 13\n          }, _this), item]\n        }, \"\".concat(item, \"-\").concat(index), true, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n_c = FeatureCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"FeatureCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmRleC1wYWdlL0ZlYXR1cmVzL0ZlYXR1cmVDYXJkL2luZGV4LmpzeD8wOTgxIl0sIm5hbWVzIjpbIkZlYXR1cmVDYXJkIiwiaW1nIiwicHJvY2VzcyIsIml0ZW1zIiwic3R5bGVzIiwiY2FyZCIsImNsc3giLCJjYXJkX19pbWFnZSIsImJhY2tncm91bmRJbWFnZSIsImNhcmRfX2xpc3QiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJjYXJkX19saXN0X19pdGVtIiwiY2FyZF9fbGlzdF9faW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULE9BR1o7QUFBQTs7QUFBQSxzQkFGREMsR0FFQztBQUFBLE1BRkRBLEdBRUMsbUNBRlFDLEVBRVI7QUFBQSx3QkFEREMsS0FDQztBQUFBLE1BRERBLEtBQ0MsMkJBRE8sQ0FBQyxPQUFELEVBQVUsT0FBVixDQUNQO0FBQ0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLElBQXZCO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUVDLG9EQUFJLENBQUNGLDhEQUFNLENBQUNHLFdBQVIsQ0FEakI7QUFFRSxXQUFLLEVBQUU7QUFBRUMsdUJBQWUsZ0JBQVNOLEVBQVQsU0FBb0NELEdBQXBDO0FBQWpCO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBSSxlQUFTLEVBQUVHLDhEQUFNLENBQUNLLFVBQXRCO0FBQUEsZ0JBQ0dOLEtBQUssQ0FBQ08sR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNUO0FBQTZCLG1CQUFTLEVBQUVSLDhEQUFNLENBQUNTLGdCQUEvQztBQUFBLGtDQUNFO0FBQ0UsZUFBRyxFQUFDLDBCQUROO0FBRUUsZUFBRyxZQUFLWCxFQUFMLGtDQUZMO0FBR0UscUJBQVMsRUFBRUUsOERBQU0sQ0FBQ1U7QUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQU1HSCxJQU5IO0FBQUEscUJBQVlBLElBQVosY0FBb0JDLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEO0tBeEJ1QlosVyIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW5kZXgtcGFnZS9GZWF0dXJlcy9GZWF0dXJlQ2FyZC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9GZWF0dXJlQ2FyZC5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVDYXJkKHtcbiAgaW1nID0gYCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9hc3NldHMvaW1nL2ZlYXR1cmVfMS5wbmdgLFxuICBpdGVtcyA9IFtcIml0ZW0xXCIsIFwiaXRlbTJcIl0sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5jYXJkX19pbWFnZSl9XG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0ke2ltZ30pYCB9fVxuICAgICAgLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX19saXN0fT5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtgJHtpdGVtfS0ke2luZGV4fWB9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfX2xpc3RfX2l0ZW19PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBhbHQ9XCJNYXJjYSBkZSB2ZXJpZmljYWNpw7NuXCJcbiAgICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2Fzc2V0cy9pbWcvaWNfY2hlY2tfdGlueS5wbmdgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX19saXN0X19pbWFnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Index-page/Features/FeatureCard/index.jsx\n");

/***/ })

})
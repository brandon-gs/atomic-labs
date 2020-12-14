webpackHotUpdate_N_E("pages/solicitud/paso/[step]",{

/***/ "./components/Request-page/FormStep2/index.jsx":
/*!*****************************************************!*\
  !*** ./components/Request-page/FormStep2/index.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormStep2; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./components/index.js\");\n/* harmony import */ var _FormTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormTitle */ \"./components/Request-page/FormTitle/index.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"../node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _FormPhone_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormPhone/validate */ \"./components/Request-page/FormPhone/validate.js\");\n/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! context */ \"./context/index.js\");\n\n\nvar _jsxFileName = \"/home/brandon/workspace/atomic-labs/frontend/components/Request-page/FormStep2/index.jsx\",\n    _s = $RefreshSig$();\n\n// Components\n\n // Hooks\n\n\n\n // Form validation\n\n // Context\n\n\nfunction FormStep2() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(context__WEBPACK_IMPORTED_MODULE_7__[\"Context\"]),\n      phone = _useContext.state.phone,\n      dispatch = _useContext.dispatch;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  var INITIAL_STATE = {\n    phone: phone\n  };\n\n  var customSubmit = function customSubmit() {\n    dispatch({\n      type: \"UPDATE_PHONE\",\n      payload: values.phone\n    });\n    router.push(\"/solicitud/paso/2/completado\");\n  };\n\n  var _useFormValidation = Object(hooks__WEBPACK_IMPORTED_MODULE_4__[\"useFormValidation\"])(INITIAL_STATE, _FormPhone_validate__WEBPACK_IMPORTED_MODULE_6__[\"default\"], customSubmit),\n      handleSubmit = _useFormValidation.handleSubmit,\n      handleChange = _useFormValidation.handleChange,\n      handleBlur = _useFormValidation.handleBlur,\n      values = _useFormValidation.values,\n      errors = _useFormValidation.errors,\n      blurs = _useFormValidation.blurs;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    onSubmit: handleSubmit,\n    className: \"form\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      normalText: \"valida tu\",\n      featuredText: \"celular\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      className: \"form__subtitle\",\n      children: \"Necesitamos validar tu n\\xFAmero para continuar\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      className: \"form__subtitle__2\",\n      children: \"Ingresa tu n\\xFAmero a 10 d\\xEDgitos y te enviaremos un c\\xF3digo SMS.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components__WEBPACK_IMPORTED_MODULE_1__[\"InputField\"], {\n      label: \"N\\xFAmero de celular\",\n      name: \"phone\",\n      type: \"text\",\n      onChange: handleChange,\n      onBlur: handleBlur,\n      value: values.phone,\n      error: errors.phone,\n      blur: blurs.phone\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"form__button\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components__WEBPACK_IMPORTED_MODULE_1__[\"ButtonSubmit\"], {\n        text: \"Continuar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, this);\n}\n\n_s(FormStep2, \"zIOE9MrQjAN1g8iiqpieon9QLow=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"], hooks__WEBPACK_IMPORTED_MODULE_4__[\"useFormValidation\"]];\n});\n\n_c = FormStep2;\n\nvar _c;\n\n$RefreshReg$(_c, \"FormStep2\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0LXBhZ2UvRm9ybVN0ZXAyL2luZGV4LmpzeD8zZjA0Il0sIm5hbWVzIjpbIkZvcm1TdGVwMiIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwicGhvbmUiLCJzdGF0ZSIsImRpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwiSU5JVElBTF9TVEFURSIsImN1c3RvbVN1Ym1pdCIsInR5cGUiLCJwYXlsb2FkIiwidmFsdWVzIiwicHVzaCIsInVzZUZvcm1WYWxpZGF0aW9uIiwidmFsaWRhdGUiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiZXJyb3JzIiwiYmx1cnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7O0NBRUE7O0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsb0JBSTlCQyx3REFBVSxDQUFDQywrQ0FBRCxDQUpvQjtBQUFBLE1BRXZCQyxLQUZ1QixlQUVoQ0MsS0FGZ0MsQ0FFdkJELEtBRnVCO0FBQUEsTUFHaENFLFFBSGdDLGVBR2hDQSxRQUhnQzs7QUFLbEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQU1DLGFBQWEsR0FBRztBQUNwQkwsU0FBSyxFQUFFQTtBQURhLEdBQXRCOztBQUlBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJKLFlBQVEsQ0FBQztBQUNQSyxVQUFJLEVBQUUsY0FEQztBQUVQQyxhQUFPLEVBQUVDLE1BQU0sQ0FBQ1Q7QUFGVCxLQUFELENBQVI7QUFJQUcsVUFBTSxDQUFDTyxJQUFQLENBQVksOEJBQVo7QUFDRCxHQU5EOztBQVhrQywyQkEwQjlCQywrREFBaUIsQ0FBQ04sYUFBRCxFQUFnQk8sMkRBQWhCLEVBQTBCTixZQUExQixDQTFCYTtBQUFBLE1Bb0JoQ08sWUFwQmdDLHNCQW9CaENBLFlBcEJnQztBQUFBLE1BcUJoQ0MsWUFyQmdDLHNCQXFCaENBLFlBckJnQztBQUFBLE1Bc0JoQ0MsVUF0QmdDLHNCQXNCaENBLFVBdEJnQztBQUFBLE1BdUJoQ04sTUF2QmdDLHNCQXVCaENBLE1BdkJnQztBQUFBLE1Bd0JoQ08sTUF4QmdDLHNCQXdCaENBLE1BeEJnQztBQUFBLE1BeUJoQ0MsS0F6QmdDLHNCQXlCaENBLEtBekJnQzs7QUE0QmxDLHNCQUNFO0FBQU0sWUFBUSxFQUFFSixZQUFoQjtBQUE4QixhQUFTLEVBQUMsTUFBeEM7QUFBQSw0QkFDRSxxRUFBQyxrREFBRDtBQUFXLGdCQUFVLEVBQUMsV0FBdEI7QUFBa0Msa0JBQVksRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFJLGVBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBS0U7QUFBSSxlQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQVFFLHFFQUFDLHFEQUFEO0FBQ0UsV0FBSyxFQUFDLHNCQURSO0FBRUUsVUFBSSxFQUFDLE9BRlA7QUFHRSxVQUFJLEVBQUMsTUFIUDtBQUlFLGNBQVEsRUFBRUMsWUFKWjtBQUtFLFlBQU0sRUFBRUMsVUFMVjtBQU1FLFdBQUssRUFBRU4sTUFBTSxDQUFDVCxLQU5oQjtBQU9FLFdBQUssRUFBRWdCLE1BQU0sQ0FBQ2hCLEtBUGhCO0FBUUUsVUFBSSxFQUFFaUIsS0FBSyxDQUFDakI7QUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFrQkU7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDZCQUNFLHFFQUFDLHVEQUFEO0FBQWMsWUFBSSxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEOztHQXBEdUJILFM7VUFLUE8scUQsRUFxQlhPLHVEOzs7S0ExQmtCZCxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXF1ZXN0LXBhZ2UvRm9ybVN0ZXAyL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbXBvbmVudHNcbmltcG9ydCB7IEJ1dHRvblN1Ym1pdCwgSW5wdXRGaWVsZCB9IGZyb20gXCJjb21wb25lbnRzXCI7XG5pbXBvcnQgRm9ybVRpdGxlIGZyb20gXCIuLi9Gb3JtVGl0bGVcIjtcbi8vIEhvb2tzXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtVmFsaWRhdGlvbiB9IGZyb20gXCJob29rc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG4vLyBGb3JtIHZhbGlkYXRpb25cbmltcG9ydCB2YWxpZGF0ZSBmcm9tIFwiLi4vRm9ybVBob25lL3ZhbGlkYXRlXCI7XG4vLyBDb250ZXh0XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcImNvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybVN0ZXAyKCkge1xuICBjb25zdCB7XG4gICAgc3RhdGU6IHsgcGhvbmUgfSxcbiAgICBkaXNwYXRjaCxcbiAgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gICAgcGhvbmU6IHBob25lLFxuICB9O1xuXG4gIGNvbnN0IGN1c3RvbVN1Ym1pdCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcIlVQREFURV9QSE9ORVwiLFxuICAgICAgcGF5bG9hZDogdmFsdWVzLnBob25lLFxuICAgIH0pO1xuICAgIHJvdXRlci5wdXNoKFwiL3NvbGljaXR1ZC9wYXNvLzIvY29tcGxldGFkb1wiKTtcbiAgfTtcblxuICBjb25zdCB7XG4gICAgaGFuZGxlU3VibWl0LFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBoYW5kbGVCbHVyLFxuICAgIHZhbHVlcyxcbiAgICBlcnJvcnMsXG4gICAgYmx1cnMsXG4gIH0gPSB1c2VGb3JtVmFsaWRhdGlvbihJTklUSUFMX1NUQVRFLCB2YWxpZGF0ZSwgY3VzdG9tU3VibWl0KTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgIDxGb3JtVGl0bGUgbm9ybWFsVGV4dD1cInZhbGlkYSB0dVwiIGZlYXR1cmVkVGV4dD1cImNlbHVsYXJcIiAvPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImZvcm1fX3N1YnRpdGxlXCI+XG4gICAgICAgIE5lY2VzaXRhbW9zIHZhbGlkYXIgdHUgbsO6bWVybyBwYXJhIGNvbnRpbnVhclxuICAgICAgPC9oMz5cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJmb3JtX19zdWJ0aXRsZV9fMlwiPlxuICAgICAgICBJbmdyZXNhIHR1IG7Dum1lcm8gYSAxMCBkw61naXRvcyB5IHRlIGVudmlhcmVtb3MgdW4gY8OzZGlnbyBTTVMuXG4gICAgICA8L2g0PlxuICAgICAgPElucHV0RmllbGRcbiAgICAgICAgbGFiZWw9XCJOw7ptZXJvIGRlIGNlbHVsYXJcIlxuICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgdmFsdWU9e3ZhbHVlcy5waG9uZX1cbiAgICAgICAgZXJyb3I9e2Vycm9ycy5waG9uZX1cbiAgICAgICAgYmx1cj17Ymx1cnMucGhvbmV9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19idXR0b25cIj5cbiAgICAgICAgPEJ1dHRvblN1Ym1pdCB0ZXh0PVwiQ29udGludWFyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Request-page/FormStep2/index.jsx\n");

/***/ })

})
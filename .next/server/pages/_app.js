/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/MemberContext.jsx":
/*!***************************************!*\
  !*** ./src/context/MemberContext.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MemberProvider: () => (/* binding */ MemberProvider),\n/* harmony export */   useMember: () => (/* binding */ useMember)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// global context accessible by every child in the component tree\n// updated in 'search' onMouseEnter, used for image display\nconst MemberContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst MemberProvider = ({ children })=>{\n    // note: member.item is not a list, it is an object\n    const [memberItem, setMemberItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"select profile.\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MemberContext.Provider, {\n        value: {\n            memberItem,\n            setMemberItem\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/Yash/Code/ece_webring/src/context/MemberContext.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\nconst useMember = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MemberContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9NZW1iZXJDb250ZXh0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTREO0FBRTVELGlFQUFpRTtBQUNqRSwyREFBMkQ7QUFDM0QsTUFBTUcsOEJBQWdCSCxvREFBYUEsQ0FBQyxDQUFDO0FBRTlCLE1BQU1JLGlCQUFpQixDQUFDLEVBQUNDLFFBQVEsRUFBQztJQUN2QyxtREFBbUQ7SUFDbkQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDO1FBQUNNLE1BQU07SUFBaUI7SUFFckUscUJBQ0UsOERBQUNMLGNBQWNNLFFBQVE7UUFBQ0MsT0FBTztZQUFFSjtZQUFZQztRQUFjO2tCQUN4REY7Ozs7OztBQUdQLEVBQUM7QUFFTSxNQUFNTSxZQUFZLElBQU1WLGlEQUFVQSxDQUFDRSxlQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNlX3dlYnJpbmcvLi9zcmMvY29udGV4dC9NZW1iZXJDb250ZXh0LmpzeD81NjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG4vLyBnbG9iYWwgY29udGV4dCBhY2Nlc3NpYmxlIGJ5IGV2ZXJ5IGNoaWxkIGluIHRoZSBjb21wb25lbnQgdHJlZVxuLy8gdXBkYXRlZCBpbiAnc2VhcmNoJyBvbk1vdXNlRW50ZXIsIHVzZWQgZm9yIGltYWdlIGRpc3BsYXlcbmNvbnN0IE1lbWJlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuZXhwb3J0IGNvbnN0IE1lbWJlclByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgLy8gbm90ZTogbWVtYmVyLml0ZW0gaXMgbm90IGEgbGlzdCwgaXQgaXMgYW4gb2JqZWN0XG4gIGNvbnN0IFttZW1iZXJJdGVtLCBzZXRNZW1iZXJJdGVtXSA9IHVzZVN0YXRlKHtuYW1lOiAnc2VsZWN0IHByb2ZpbGUuJ30pO1xuICBcbiAgcmV0dXJuIChcbiAgICA8TWVtYmVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBtZW1iZXJJdGVtLCBzZXRNZW1iZXJJdGVtIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTWVtYmVyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlTWVtYmVyID0gKCkgPT4gdXNlQ29udGV4dChNZW1iZXJDb250ZXh0KSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiTWVtYmVyQ29udGV4dCIsIk1lbWJlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJtZW1iZXJJdGVtIiwic2V0TWVtYmVySXRlbSIsIm5hbWUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlTWVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/MemberContext.jsx\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_MemberContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/MemberContext */ \"./src/context/MemberContext.jsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_MemberContext__WEBPACK_IMPORTED_MODULE_2__.MemberProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/Yash/Code/ece_webring/src/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Yash/Code/ece_webring/src/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBQzJCO0FBRTFDLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNILGtFQUFjQTtrQkFDYiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VjZV93ZWJyaW5nLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgTWVtYmVyUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L01lbWJlckNvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxNZW1iZXJQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L01lbWJlclByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk1lbWJlclByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
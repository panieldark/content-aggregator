"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = (param)=>{\n    let {} = param;\n    _s();\n    const [{ data , fetching  }] = (0,_generated_graphql__WEBPACK_IMPORTED_MODULE_2__.useMeQuery)();\n    console.log(\"data\", data);\n    let body = null;\n    if (fetching) {} else if (!(data === null || data === void 0 ? void 0 : data.me)) {\n        body = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/login\",\n                    legacyBehavior: true,\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                        mr: 2,\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/daniel.park/Dev/content-aggregator/web/src/components/Navbar.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/daniel.park/Dev/content-aggregator/web/src/components/Navbar.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/register\",\n                    legacyBehavior: true,\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"/Users/daniel.park/Dev/content-aggregator/web/src/components/Navbar.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/daniel.park/Dev/content-aggregator/web/src/components/Navbar.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true);\n    } else {\n        var _data_me, _data_me_user;\n        body = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    mr: 2,\n                    children: (_data_me = data.me) === null || _data_me === void 0 ? void 0 : (_data_me_user = _data_me.user) === null || _data_me_user === void 0 ? void 0 : _data_me_user.username\n                }, void 0, false, {\n                    fileName: \"/Users/daniel.park/Dev/content-aggregator/web/src/components/Navbar.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    variant: \"link\",\n                    children: \"Log out\"\n                }, void 0, false, {\n                    fileName: \"/Users/daniel.park/Dev/content-aggregator/web/src/components/Navbar.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/daniel.park/Dev/content-aggregator/web/src/components/Navbar.tsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        bg: \"tan\",\n        p: 4,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            ml: \"auto\",\n            children: body\n        }, void 0, false, {\n            fileName: \"/Users/daniel.park/Dev/content-aggregator/web/src/components/Navbar.tsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/daniel.park/Dev/content-aggregator/web/src/components/Navbar.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navbar, \"H1Wfqb60MqX/sOezV5W25yEXSqQ=\", false, function() {\n    return [\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_2__.useMeQuery\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUQ7QUFDeEI7QUFDZTtBQUV6QyxNQUFNTSxTQUF1QixTQUFRO1FBQVAsRUFBRTs7SUFDbkMsTUFBTSxDQUFDLEVBQUNDLEtBQUksRUFBRUMsU0FBUSxFQUFDLENBQUMsR0FBR0gsOERBQVVBO0lBQ3JDSSxRQUFRQyxHQUFHLENBQUMsUUFBUUg7SUFDcEIsSUFBSUksT0FBTyxJQUFJO0lBQ2YsSUFBSUgsVUFBVSxDQUFDLE9BQ1YsSUFBSSxDQUFDRCxDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1LLEVBQUUsR0FBRTtRQUNoQkQscUJBQVE7OzhCQUNKLDhEQUFDUCxrREFBUUE7b0JBQUNTLE1BQU07b0JBQVVDLGNBQWM7b0JBQUNDLFFBQVE7OEJBQzdDLDRFQUFDWixrREFBSUE7d0JBQUNhLElBQUk7a0NBQUc7Ozs7Ozs7Ozs7OzhCQUVqQiw4REFBQ1osa0RBQVFBO29CQUFDUyxNQUFNO29CQUFhQyxjQUFjO29CQUFDQyxRQUFROzhCQUNoRCw0RUFBQ1osa0RBQUlBO2tDQUFDOzs7Ozs7Ozs7Ozs7O0lBR2xCLE9BQU87WUFJVUk7UUFIYkkscUJBQ0ksOERBQUNULGtEQUFJQTs7OEJBQ0QsOERBQUNGLGlEQUFHQTtvQkFBQ2dCLElBQUk7OEJBQ0pULENBQUFBLFdBQUFBLEtBQUtLLEVBQUUsY0FBUEwsc0JBQUFBLEtBQUFBLElBQUFBLGlCQUFBQSxTQUFTVSw2Q0FBVFYsS0FBQUEsa0JBQWVXLFFBQUY7Ozs7Ozs4QkFFbEIsOERBQUNqQixvREFBTUE7b0JBQUNrQixTQUFTOzhCQUFROzs7Ozs7Ozs7Ozs7SUFHckMsQ0FBQztJQUNELHFCQUNJLDhEQUFDakIsa0RBQUlBO1FBQUNrQixJQUFJO1FBQU9DLEdBQUc7a0JBQ2hCLDRFQUFDckIsaURBQUdBO1lBQUNzQixJQUFJO3NCQUNKWDs7Ozs7Ozs7Ozs7QUFJakIsRUFBQztHQS9CWUw7O1FBQ2tCRCwwREFBVUE7OztLQUQ1QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnRzeD85YTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Qm94LCBCdXR0b24sIEZsZXgsIExpbmt9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHt1c2VNZVF1ZXJ5fSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcblxuZXhwb3J0IGNvbnN0IE5hdmJhcjogUmVhY3QuRkM8e30+ID0gKHt9KSA9PiB7XG4gICAgY29uc3QgW3tkYXRhLCBmZXRjaGluZ31dID0gdXNlTWVRdWVyeSgpXG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpXG4gICAgbGV0IGJvZHkgPSBudWxsO1xuICAgIGlmIChmZXRjaGluZykge31cbiAgICBlbHNlIGlmICghZGF0YT8ubWUpIHtcbiAgICAgICAgYm9keSA9ICg8PlxuICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9e1wiL2xvZ2luXCJ9IGxlZ2FjeUJlaGF2aW9yIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgIDxMaW5rIG1yPXsyfT5Mb2dpbjwvTGluaz5cbiAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgICA8TmV4dExpbmsgaHJlZj17XCIvcmVnaXN0ZXJcIn0gbGVnYWN5QmVoYXZpb3IgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgPExpbms+UmVnaXN0ZXI8L0xpbms+XG4gICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICA8Lz4pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYm9keSA9IChcbiAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgIDxCb3ggbXI9ezJ9PlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tZT8udXNlcj8udXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PXtcImxpbmtcIn0+TG9nIG91dDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxGbGV4IGJnPXsndGFuJ30gcD17NH0+XG4gICAgICAgICAgICA8Qm94IG1sPXsnYXV0byd9PlxuICAgICAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD5cbiAgICApXG59Il0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIkZsZXgiLCJMaW5rIiwiTmV4dExpbmsiLCJ1c2VNZVF1ZXJ5IiwiTmF2YmFyIiwiZGF0YSIsImZldGNoaW5nIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJtZSIsImhyZWYiLCJsZWdhY3lCZWhhdmlvciIsInBhc3NIcmVmIiwibXIiLCJ1c2VyIiwidXNlcm5hbWUiLCJ2YXJpYW50IiwiYmciLCJwIiwibWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navbar.tsx\n"));

/***/ })

});
webpackHotUpdate("static\\development\\pages\\script-page.js",{

/***/ "./pages/script-page.js":
/*!******************************!*\
  !*** ./pages/script-page.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");


var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    scriptTags(first: 5) {\n      edges {\n        node {\n          id\n          src\n          displayScope\n        }\n      }\n    }\n  }  \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation scriptTagCreate($input: ScriptTagInput!) {\n    scriptTagCreate(input: $input) {\n      scriptTag {\n        id\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable react/jsx-filename-extension */


var CREATE_SCRIPT_TAG = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var QUERY_SCRIPTTAGS = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());

function ScriptPage() {
  _s();

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(QUERY_SCRIPTTAGS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("div", null, "Loading...");
  if (error) return __jsx("div", null, error.message);
  return __jsx("div", null, __jsx("h1", null, "Here are the script tags atm: "), data.scriptTags.edges.map(function (item) {
    return __jsx("div", {
      key: item.node.id
    }, __jsx("p", null, item.node.id));
  }));
}

_s(ScriptPage, "OQZiY3KqWoytFPIJWw/H9Hrmbok=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c = ScriptPage;
/* harmony default export */ __webpack_exports__["default"] = (ScriptPage);
/* "gid://shopify/ScriptTag/137436889246"

            "id": "gid://shopify/ScriptTag/137436922014",

            "id": "gid://shopify/ScriptTag/137436954782", */

var _c;

$RefreshReg$(_c, "ScriptPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zY3JpcHQtcGFnZS5qcyJdLCJuYW1lcyI6WyJDUkVBVEVfU0NSSVBUX1RBRyIsImdxbCIsIlFVRVJZX1NDUklQVFRBR1MiLCJTY3JpcHRQYWdlIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwibWVzc2FnZSIsInNjcmlwdFRhZ3MiLCJlZGdlcyIsIm1hcCIsIml0ZW0iLCJub2RlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLGtEQUFILG1CQUF2QjtBQWNBLElBQU1DLGdCQUFnQixHQUFHRCxrREFBSCxvQkFBdEI7O0FBY0EsU0FBU0UsVUFBVCxHQUFzQjtBQUFBOztBQUFBLGtCQUNhQyxvRUFBUSxDQUFDRixnQkFBRCxDQURyQjtBQUFBLE1BQ1pHLE9BRFksYUFDWkEsT0FEWTtBQUFBLE1BQ0hDLEtBREcsYUFDSEEsS0FERztBQUFBLE1BQ0lDLElBREosYUFDSUEsSUFESjs7QUFHcEIsTUFBSUYsT0FBSixFQUFhLE9BQU8sZ0NBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsT0FBTyxtQkFBTUEsS0FBSyxDQUFDRSxPQUFaLENBQVA7QUFFWCxTQUNFLG1CQUNFLG1EQURGLEVBRUdELElBQUksQ0FBQ0UsVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0JDLEdBQXRCLENBQTBCLFVBQUNDLElBQUQ7QUFBQSxXQUN6QjtBQUFLLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxJQUFMLENBQVVDO0FBQXBCLE9BQ0UsaUJBQUlGLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxFQUFkLENBREYsQ0FEeUI7QUFBQSxHQUExQixDQUZILENBREY7QUFVRDs7R0FoQlFYLFU7VUFDMEJDLDREOzs7S0FEMUJELFU7QUFrQk1BLHlFQUFmO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNjcmlwdC1wYWdlLmpzLmE4ZDI2ZThlZGU5NWMxZmJlMDkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZWFjdC1pbi1qc3gtc2NvcGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlUXVlcnksIHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcblxyXG5jb25zdCBDUkVBVEVfU0NSSVBUX1RBRyA9IGdxbGBcclxuICBtdXRhdGlvbiBzY3JpcHRUYWdDcmVhdGUoJGlucHV0OiBTY3JpcHRUYWdJbnB1dCEpIHtcclxuICAgIHNjcmlwdFRhZ0NyZWF0ZShpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIHNjcmlwdFRhZyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgICB1c2VyRXJyb3JzIHtcclxuICAgICAgICBmaWVsZFxyXG4gICAgICAgIG1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFFVRVJZX1NDUklQVFRBR1MgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgc2NyaXB0VGFncyhmaXJzdDogNSkge1xyXG4gICAgICBlZGdlcyB7XHJcbiAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc3JjXHJcbiAgICAgICAgICBkaXNwbGF5U2NvcGVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9ICBcclxuYDtcclxuXHJcbmZ1bmN0aW9uIFNjcmlwdFBhZ2UoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoUVVFUllfU0NSSVBUVEFHUyk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkhlcmUgYXJlIHRoZSBzY3JpcHQgdGFncyBhdG06IDwvaDE+XHJcbiAgICAgIHtkYXRhLnNjcmlwdFRhZ3MuZWRnZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2l0ZW0ubm9kZS5pZH0+XHJcbiAgICAgICAgICA8cD57aXRlbS5ub2RlLmlkfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRQYWdlO1xyXG5cclxuLyogXCJnaWQ6Ly9zaG9waWZ5L1NjcmlwdFRhZy8xMzc0MzY4ODkyNDZcIlxyXG5cclxuICAgICAgICAgICAgXCJpZFwiOiBcImdpZDovL3Nob3BpZnkvU2NyaXB0VGFnLzEzNzQzNjkyMjAxNFwiLFxyXG5cclxuICAgICAgICAgICAgXCJpZFwiOiBcImdpZDovL3Nob3BpZnkvU2NyaXB0VGFnLzEzNzQzNjk1NDc4MlwiLCAqL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
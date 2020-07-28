webpackHotUpdate("static\\development\\pages\\script-page.js",{

/***/ "./pages/script-page.js":
/*!******************************!*\
  !*** ./pages/script-page.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");



var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation scriptTagDelete($id: ID!) {\n    scriptTagDelete(id: $id) {\n      deletedScriptTagId\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query {\n    scriptTags(first: 5) {\n      edges {\n        node {\n          id\n          src\n          displayScope\n        }\n      }\n    }\n  }  \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation scriptTagCreate($input: ScriptTagInput!) {\n    scriptTagCreate(input: $input) {\n      scriptTag {\n        id\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable react/jsx-filename-extension */


var CREATE_SCRIPT_TAG = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var QUERY_SCRIPTTAGS = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());
var DELETE_SCRIPT_TAG = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject3());

function ScriptPage() {
  _s();

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(CREATE_SCRIPT_TAG),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 1),
      createScripts = _useMutation2[0];

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(DELETE_SCRIPT_TAG),
      _useMutation4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation3, 1),
      deleteScripts = _useMutation4[0];

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(QUERY_SCRIPTTAGS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("div", null, "Loading...");
  if (error) return __jsx("div", null, error.message);
  return __jsx("div", null, __jsx("h1", null, "Here are the script tags atm: "), __jsx("button", {
    type: "submit",
    onClick: function onClick() {
      createScripts({
        variables: {
          input: {
            src: 'https://c773267e9881.ngrok.io/test-script.js',
            displayScope: 'ALL'
          },
          refetchQueries: [{
            query: QUERY_SCRIPTTAGS
          }]
        }
      });
    }
  }, "create script tag"), data.scriptTags.edges.map(function (item) {
    return __jsx("div", {
      key: item.node.id
    }, __jsx("p", null, item.node.id), __jsx("button", {
      type: "submit",
      onClick: function onClick() {
        deleteScripts({
          variables: {
            id: item.node.id
          },
          refetchQueries: [{
            query: QUERY_SCRIPTTAGS
          }]
        });
      }
    }, "Delete Script"));
  }));
}

_s(ScriptPage, "oFMv2X7K+OIhMiy0V8t2RQEah2A=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
});

_c = ScriptPage;
/* harmony default export */ __webpack_exports__["default"] = (ScriptPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zY3JpcHQtcGFnZS5qcyJdLCJuYW1lcyI6WyJDUkVBVEVfU0NSSVBUX1RBRyIsImdxbCIsIlFVRVJZX1NDUklQVFRBR1MiLCJERUxFVEVfU0NSSVBUX1RBRyIsIlNjcmlwdFBhZ2UiLCJ1c2VNdXRhdGlvbiIsImNyZWF0ZVNjcmlwdHMiLCJkZWxldGVTY3JpcHRzIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwibWVzc2FnZSIsInZhcmlhYmxlcyIsImlucHV0Iiwic3JjIiwiZGlzcGxheVNjb3BlIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsInNjcmlwdFRhZ3MiLCJlZGdlcyIsIm1hcCIsIml0ZW0iLCJub2RlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLGtEQUFILG1CQUF2QjtBQWNBLElBQU1DLGdCQUFnQixHQUFHRCxrREFBSCxvQkFBdEI7QUFjQSxJQUFNRSxpQkFBaUIsR0FBR0Ysa0RBQUgsb0JBQXZCOztBQVlBLFNBQVNHLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSxxQkFDSUMsdUVBQVcsQ0FBQ0wsaUJBQUQsQ0FEZjtBQUFBO0FBQUEsTUFDYk0sYUFEYTs7QUFBQSxzQkFFSUQsdUVBQVcsQ0FBQ0YsaUJBQUQsQ0FGZjtBQUFBO0FBQUEsTUFFYkksYUFGYTs7QUFBQSxrQkFHYUMsb0VBQVEsQ0FBQ04sZ0JBQUQsQ0FIckI7QUFBQSxNQUdaTyxPQUhZLGFBR1pBLE9BSFk7QUFBQSxNQUdIQyxLQUhHLGFBR0hBLEtBSEc7QUFBQSxNQUdJQyxJQUhKLGFBR0lBLElBSEo7O0FBS3BCLE1BQUlGLE9BQUosRUFBYSxPQUFPLGdDQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLE9BQU8sbUJBQU1BLEtBQUssQ0FBQ0UsT0FBWixDQUFQO0FBRVgsU0FDRSxtQkFDRSxtREFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxXQUFPLEVBQUUsbUJBQU07QUFDYk4sbUJBQWEsQ0FBQztBQUNaTyxpQkFBUyxFQUFFO0FBQ1RDLGVBQUssRUFBRTtBQUNMQyxlQUFHLEVBQUUsOENBREE7QUFFTEMsd0JBQVksRUFBRTtBQUZULFdBREU7QUFLVEMsd0JBQWMsRUFBRSxDQUFDO0FBQUVDLGlCQUFLLEVBQUVoQjtBQUFULFdBQUQ7QUFMUDtBQURDLE9BQUQsQ0FBYjtBQVNEO0FBWkgseUJBRkYsRUFrQkdTLElBQUksQ0FBQ1EsVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0JDLEdBQXRCLENBQTBCLFVBQUNDLElBQUQ7QUFBQSxXQUN6QjtBQUFLLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxJQUFMLENBQVVDO0FBQXBCLE9BQ0UsaUJBQUlGLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxFQUFkLENBREYsRUFFRTtBQUNFLFVBQUksRUFBQyxRQURQO0FBRUUsYUFBTyxFQUFFLG1CQUFNO0FBQ2JqQixxQkFBYSxDQUFDO0FBQ1pNLG1CQUFTLEVBQUU7QUFDVFcsY0FBRSxFQUFFRixJQUFJLENBQUNDLElBQUwsQ0FBVUM7QUFETCxXQURDO0FBSVpQLHdCQUFjLEVBQUUsQ0FBQztBQUFFQyxpQkFBSyxFQUFFaEI7QUFBVCxXQUFEO0FBSkosU0FBRCxDQUFiO0FBTUQ7QUFUSCx1QkFGRixDQUR5QjtBQUFBLEdBQTFCLENBbEJILENBREY7QUF1Q0Q7O0dBL0NRRSxVO1VBQ2lCQywrRCxFQUNBQSwrRCxFQUNTRyw0RDs7O0tBSDFCSixVO0FBaURNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2NyaXB0LXBhZ2UuanMuMjZmYTNmM2JkNDMwYmIyODdlMjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3JlYWN0LWluLWpzeC1zY29wZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuXHJcbmNvbnN0IENSRUFURV9TQ1JJUFRfVEFHID0gZ3FsYFxyXG4gIG11dGF0aW9uIHNjcmlwdFRhZ0NyZWF0ZSgkaW5wdXQ6IFNjcmlwdFRhZ0lucHV0ISkge1xyXG4gICAgc2NyaXB0VGFnQ3JlYXRlKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgc2NyaXB0VGFnIHtcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICAgIGZpZWxkXHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUVVFUllfU0NSSVBUVEFHUyA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBzY3JpcHRUYWdzKGZpcnN0OiA1KSB7XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzcmNcclxuICAgICAgICAgIGRpc3BsYXlTY29wZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gIFxyXG5gO1xyXG5cclxuY29uc3QgREVMRVRFX1NDUklQVF9UQUcgPSBncWxgXHJcbiAgbXV0YXRpb24gc2NyaXB0VGFnRGVsZXRlKCRpZDogSUQhKSB7XHJcbiAgICBzY3JpcHRUYWdEZWxldGUoaWQ6ICRpZCkge1xyXG4gICAgICBkZWxldGVkU2NyaXB0VGFnSWRcclxuICAgICAgdXNlckVycm9ycyB7XHJcbiAgICAgICAgZmllbGRcclxuICAgICAgICBtZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBTY3JpcHRQYWdlKCkge1xyXG4gIGNvbnN0IFtjcmVhdGVTY3JpcHRzXSA9IHVzZU11dGF0aW9uKENSRUFURV9TQ1JJUFRfVEFHKTtcclxuICBjb25zdCBbZGVsZXRlU2NyaXB0c10gPSB1c2VNdXRhdGlvbihERUxFVEVfU0NSSVBUX1RBRyk7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoUVVFUllfU0NSSVBUVEFHUyk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkhlcmUgYXJlIHRoZSBzY3JpcHQgdGFncyBhdG06IDwvaDE+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBjcmVhdGVTY3JpcHRzKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYzc3MzI2N2U5ODgxLm5ncm9rLmlvL3Rlc3Qtc2NyaXB0LmpzJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlTY29wZTogJ0FMTCcsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IFFVRVJZX1NDUklQVFRBR1MgfV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgY3JlYXRlIHNjcmlwdCB0YWdcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtkYXRhLnNjcmlwdFRhZ3MuZWRnZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2l0ZW0ubm9kZS5pZH0+XHJcbiAgICAgICAgICA8cD57aXRlbS5ub2RlLmlkfTwvcD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBkZWxldGVTY3JpcHRzKHtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICBpZDogaXRlbS5ub2RlLmlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogUVVFUllfU0NSSVBUVEFHUyB9XSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVsZXRlIFNjcmlwdFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2NyaXB0UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
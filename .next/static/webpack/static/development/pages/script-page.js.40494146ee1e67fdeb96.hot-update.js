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
var DELETE_SCRIPTTAG = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject3());

function ScriptPage() {
  _s();

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(CREATE_SCRIPT_TAG),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 1),
      createScripts = _useMutation2[0];

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
    }, __jsx("p", null, item.node.id));
  }));
}

_s(ScriptPage, "mAYzbnNvHtrFLdqam2qduvY2wxc=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zY3JpcHQtcGFnZS5qcyJdLCJuYW1lcyI6WyJDUkVBVEVfU0NSSVBUX1RBRyIsImdxbCIsIlFVRVJZX1NDUklQVFRBR1MiLCJERUxFVEVfU0NSSVBUVEFHIiwiU2NyaXB0UGFnZSIsInVzZU11dGF0aW9uIiwiY3JlYXRlU2NyaXB0cyIsInVzZVF1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsIm1lc3NhZ2UiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInNyYyIsImRpc3BsYXlTY29wZSIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJzY3JpcHRUYWdzIiwiZWRnZXMiLCJtYXAiLCJpdGVtIiwibm9kZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHQyxrREFBSCxtQkFBdkI7QUFjQSxJQUFNQyxnQkFBZ0IsR0FBR0Qsa0RBQUgsb0JBQXRCO0FBY0EsSUFBTUUsZ0JBQWdCLEdBQUdGLGtEQUFILG9CQUF0Qjs7QUFZQSxTQUFTRyxVQUFULEdBQXNCO0FBQUE7O0FBQUEscUJBQ0lDLHVFQUFXLENBQUNMLGlCQUFELENBRGY7QUFBQTtBQUFBLE1BQ2JNLGFBRGE7O0FBQUEsa0JBRWFDLG9FQUFRLENBQUNMLGdCQUFELENBRnJCO0FBQUEsTUFFWk0sT0FGWSxhQUVaQSxPQUZZO0FBQUEsTUFFSEMsS0FGRyxhQUVIQSxLQUZHO0FBQUEsTUFFSUMsSUFGSixhQUVJQSxJQUZKOztBQUlwQixNQUFJRixPQUFKLEVBQWEsT0FBTyxnQ0FBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxPQUFPLG1CQUFNQSxLQUFLLENBQUNFLE9BQVosQ0FBUDtBQUVYLFNBQ0UsbUJBQ0UsbURBREYsRUFFRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2JMLG1CQUFhLENBQUM7QUFDWk0saUJBQVMsRUFBRTtBQUNUQyxlQUFLLEVBQUU7QUFDTEMsZUFBRyxFQUFFLDhDQURBO0FBRUxDLHdCQUFZLEVBQUU7QUFGVCxXQURFO0FBS1RDLHdCQUFjLEVBQUUsQ0FBQztBQUFFQyxpQkFBSyxFQUFFZjtBQUFULFdBQUQ7QUFMUDtBQURDLE9BQUQsQ0FBYjtBQVNEO0FBWkgseUJBRkYsRUFrQkdRLElBQUksQ0FBQ1EsVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0JDLEdBQXRCLENBQTBCLFVBQUNDLElBQUQ7QUFBQSxXQUN6QjtBQUFLLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxJQUFMLENBQVVDO0FBQXBCLE9BQ0UsaUJBQUlGLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxFQUFkLENBREYsQ0FEeUI7QUFBQSxHQUExQixDQWxCSCxDQURGO0FBMEJEOztHQWpDUW5CLFU7VUFDaUJDLCtELEVBQ1NFLDREOzs7S0FGMUJILFU7QUFtQ01BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzY3JpcHQtcGFnZS5qcy40MDQ5NDE0NmVlMWU2N2ZkZWI5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcmVhY3QtaW4tanN4LXNjb3BlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5cclxuY29uc3QgQ1JFQVRFX1NDUklQVF9UQUcgPSBncWxgXHJcbiAgbXV0YXRpb24gc2NyaXB0VGFnQ3JlYXRlKCRpbnB1dDogU2NyaXB0VGFnSW5wdXQhKSB7XHJcbiAgICBzY3JpcHRUYWdDcmVhdGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBzY3JpcHRUYWcge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgICAgdXNlckVycm9ycyB7XHJcbiAgICAgICAgZmllbGRcclxuICAgICAgICBtZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBRVUVSWV9TQ1JJUFRUQUdTID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIHNjcmlwdFRhZ3MoZmlyc3Q6IDUpIHtcclxuICAgICAgZWRnZXMge1xyXG4gICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHNyY1xyXG4gICAgICAgICAgZGlzcGxheVNjb3BlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSAgXHJcbmA7XHJcblxyXG5jb25zdCBERUxFVEVfU0NSSVBUVEFHID0gZ3FsYFxyXG4gIG11dGF0aW9uIHNjcmlwdFRhZ0RlbGV0ZSgkaWQ6IElEISkge1xyXG4gICAgc2NyaXB0VGFnRGVsZXRlKGlkOiAkaWQpIHtcclxuICAgICAgZGVsZXRlZFNjcmlwdFRhZ0lkXHJcbiAgICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICAgIGZpZWxkXHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gU2NyaXB0UGFnZSgpIHtcclxuICBjb25zdCBbY3JlYXRlU2NyaXB0c10gPSB1c2VNdXRhdGlvbihDUkVBVEVfU0NSSVBUX1RBRyk7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoUVVFUllfU0NSSVBUVEFHUyk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkhlcmUgYXJlIHRoZSBzY3JpcHQgdGFncyBhdG06IDwvaDE+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBjcmVhdGVTY3JpcHRzKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYzc3MzI2N2U5ODgxLm5ncm9rLmlvL3Rlc3Qtc2NyaXB0LmpzJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlTY29wZTogJ0FMTCcsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IFFVRVJZX1NDUklQVFRBR1MgfV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgY3JlYXRlIHNjcmlwdCB0YWdcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtkYXRhLnNjcmlwdFRhZ3MuZWRnZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2l0ZW0ubm9kZS5pZH0+XHJcbiAgICAgICAgICA8cD57aXRlbS5ub2RlLmlkfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
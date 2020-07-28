webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/index.es.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductList */ "./components/ProductList.js");
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/jsx-filename-extension */

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/react-in-jsx-scope */






function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    open: false
  }),
      modal = _useState[0],
      setModal = _useState[1];

  var emptyState = !store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids');

  function handleSelection(resources) {
    var ids = resources.selection.map(function (product) {
      return product.id;
    });
    setModal({
      open: false
    });
    store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set('ids', ids);
    console.log('some ids ', store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids'));
  }

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["ResourcePicker"], {
    resourceType: "Product",
    showVariants: true,
    open: modal.open,
    onSelection: function onSelection(resources) {
      return handleSelection(resources);
    },
    onCancel: function onCancel() {
      return setModal({
        open: false
      });
    }
  }), emptyState ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], {
    heading: "Manage your inventory transfers",
    action: {
      content: 'Add transfer',
      onAction: function onAction() {
        return setModal({
          open: true
        });
      }
    },
    secondaryAction: {
      content: 'Learn more',
      url: 'https://help.shopify.com'
    },
    image: "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
  }, __jsx("p", null, "Select products"))) : __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], {
    heading: "Manage your inventory transfers",
    action: {
      content: 'Add transfer',
      onAction: function onAction() {
        return setModal({
          open: true
        });
      }
    },
    secondaryAction: {
      content: 'Learn more',
      url: 'https://help.shopify.com'
    },
    image: "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
  }, __jsx("p", null, "Select products")), __jsx(_components_ProductList__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
}

_s(Index, "984GhQRaQw7ep3dbd1OWuI8Jcrc=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwib3BlbiIsIm1vZGFsIiwic2V0TW9kYWwiLCJlbXB0eVN0YXRlIiwic3RvcmUiLCJnZXQiLCJoYW5kbGVTZWxlY3Rpb24iLCJyZXNvdXJjZXMiLCJpZHMiLCJzZWxlY3Rpb24iLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsIm9uQWN0aW9uIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUM7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBRCxDQURuQjtBQUFBLE1BQ1JDLEtBRFE7QUFBQSxNQUNEQyxRQURDOztBQUVmLE1BQU1DLFVBQVUsR0FBRyxDQUFDQywrQ0FBSyxDQUFDQyxHQUFOLENBQVUsS0FBVixDQUFwQjs7QUFFQSxXQUFTQyxlQUFULENBQXlCQyxTQUF6QixFQUFvQztBQUNsQyxRQUFNQyxHQUFHLEdBQUdELFNBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsT0FBRDtBQUFBLGFBQWFBLE9BQU8sQ0FBQ0MsRUFBckI7QUFBQSxLQUF4QixDQUFaO0FBQ0FWLFlBQVEsQ0FBQztBQUFFRixVQUFJLEVBQUU7QUFBUixLQUFELENBQVI7QUFDQUksbURBQUssQ0FBQ1MsR0FBTixDQUFVLEtBQVYsRUFBaUJMLEdBQWpCO0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJYLCtDQUFLLENBQUNDLEdBQU4sQ0FBVSxLQUFWLENBQXpCO0FBQ0Q7O0FBRUQsU0FDRSxNQUFDLHFEQUFELFFBQ0UsTUFBQyx3RUFBRDtBQUNFLGdCQUFZLEVBQUMsU0FEZjtBQUVFLGdCQUFZLE1BRmQ7QUFHRSxRQUFJLEVBQUVKLEtBQUssQ0FBQ0QsSUFIZDtBQUlFLGVBQVcsRUFBRSxxQkFBQ08sU0FBRDtBQUFBLGFBQWVELGVBQWUsQ0FBQ0MsU0FBRCxDQUE5QjtBQUFBLEtBSmY7QUFLRSxZQUFRLEVBQUU7QUFBQSxhQUFNTCxRQUFRLENBQUM7QUFBRUYsWUFBSSxFQUFFO0FBQVIsT0FBRCxDQUFkO0FBQUE7QUFMWixJQURGLEVBU0dHLFVBQVUsR0FDVCxNQUFDLHVEQUFELFFBQ0UsTUFBQywyREFBRDtBQUNFLFdBQU8sRUFBQyxpQ0FEVjtBQUVFLFVBQU0sRUFBRTtBQUNOYSxhQUFPLEVBQUUsY0FESDtBQUVOQyxjQUFRLEVBQUU7QUFBQSxlQUFNZixRQUFRLENBQUM7QUFBRUYsY0FBSSxFQUFFO0FBQVIsU0FBRCxDQUFkO0FBQUE7QUFGSixLQUZWO0FBTUUsbUJBQWUsRUFBRTtBQUNmZ0IsYUFBTyxFQUFFLFlBRE07QUFFZkUsU0FBRyxFQUFFO0FBRlUsS0FObkI7QUFVRSxTQUFLLEVBQUM7QUFWUixLQVlFLG1DQVpGLENBREYsQ0FEUyxHQWtCVCxNQUFDLHVEQUFELFFBQ0UsTUFBQywyREFBRDtBQUNFLFdBQU8sRUFBQyxpQ0FEVjtBQUVFLFVBQU0sRUFBRTtBQUNORixhQUFPLEVBQUUsY0FESDtBQUVOQyxjQUFRLEVBQUU7QUFBQSxlQUFNZixRQUFRLENBQUM7QUFBRUYsY0FBSSxFQUFFO0FBQVIsU0FBRCxDQUFkO0FBQUE7QUFGSixLQUZWO0FBTUUsbUJBQWUsRUFBRTtBQUNmZ0IsYUFBTyxFQUFFLFlBRE07QUFFZkUsU0FBRyxFQUFFO0FBRlUsS0FObkI7QUFVRSxTQUFLLEVBQUM7QUFWUixLQVlFLG1DQVpGLENBREYsRUFlRSxNQUFDLCtEQUFELE9BZkYsQ0EzQkosQ0FERjtBQWdERDs7R0EzRFFwQixLOztLQUFBQSxLO0FBNkRNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzJkZjViMmFhZWU2ZjgzOGU2ZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3JlYWN0LWluLWpzeC1zY29wZSAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRW1wdHlTdGF0ZSwgTGF5b3V0LCBQYWdlIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgeyBSZXNvdXJjZVBpY2tlciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0JztcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgY29uc3QgZW1wdHlTdGF0ZSA9ICFzdG9yZS5nZXQoJ2lkcycpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpIHtcbiAgICBjb25zdCBpZHMgPSByZXNvdXJjZXMuc2VsZWN0aW9uLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCk7XG4gICAgc2V0TW9kYWwoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICBzdG9yZS5zZXQoJ2lkcycsIGlkcyk7XG4gICAgY29uc29sZS5sb2coJ3NvbWUgaWRzICcsIHN0b3JlLmdldCgnaWRzJykpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZT5cbiAgICAgIDxSZXNvdXJjZVBpY2tlclxuICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcbiAgICAgICAgc2hvd1ZhcmlhbnRzXG4gICAgICAgIG9wZW49e21vZGFsLm9wZW59XG4gICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiBoYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKX1cbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE1vZGFsKHsgb3BlbjogZmFsc2UgfSl9XG4gICAgICAvPlxuXG4gICAgICB7ZW1wdHlTdGF0ZSA/IChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8RW1wdHlTdGF0ZVxuICAgICAgICAgICAgaGVhZGluZz1cIk1hbmFnZSB5b3VyIGludmVudG9yeSB0cmFuc2ZlcnNcIlxuICAgICAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICdBZGQgdHJhbnNmZXInLFxuICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gc2V0TW9kYWwoeyBvcGVuOiB0cnVlIH0pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNlY29uZGFyeUFjdGlvbj17e1xuICAgICAgICAgICAgICBjb250ZW50OiAnTGVhcm4gbW9yZScsXG4gICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vaGVscC5zaG9waWZ5LmNvbScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Z1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHA+U2VsZWN0IHByb2R1Y3RzPC9wPlxuICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICApIDogKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxFbXB0eVN0YXRlXG4gICAgICAgICAgICBoZWFkaW5nPVwiTWFuYWdlIHlvdXIgaW52ZW50b3J5IHRyYW5zZmVyc1wiXG4gICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgY29udGVudDogJ0FkZCB0cmFuc2ZlcicsXG4gICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiBzZXRNb2RhbCh7IG9wZW46IHRydWUgfSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2Vjb25kYXJ5QWN0aW9uPXt7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICdMZWFybiBtb3JlJyxcbiAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9oZWxwLnNob3BpZnkuY29tJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cD5TZWxlY3QgcHJvZHVjdHM8L3A+XG4gICAgICAgICAgPC9FbXB0eVN0YXRlPlxuICAgICAgICAgIDxQcm9kdWN0TGlzdCAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICl9XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=
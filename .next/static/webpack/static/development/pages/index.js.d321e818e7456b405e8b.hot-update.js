webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductList */ "./components/ProductList.js");
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable react/jsx-filename-extension */

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/react-in-jsx-scope */






function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    open: false
  }),
      modal = _useState[0],
      setModal = _useState[1];

  var emptyState = !store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids');

  function handleSelection(resources) {
    var idsFromResources = resources.selection.map(function (product) {
      return product.id;
    });
    setModal({
      open: false
    });
    store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set('ids', idsFromResources);
    console.log('this is product ids ', store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids'));
  }

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Page"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["ResourcePicker"], {
    resourceType: "Product",
    showVariants: false,
    open: modal.open,
    onCancel: function onCancel() {
      return setModal({
        open: false
      });
    },
    onSelection: function onSelection(resources) {
      return handleSelection(resources);
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Layout"], null, emptyState ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["EmptyState"], {
    heading: "Manage your inventory transfers",
    action: {
      content: 'Select Products',
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
  }, __jsx("p", null, "Select Products")) : __jsx(_components_ProductList__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwib3BlbiIsIm1vZGFsIiwic2V0TW9kYWwiLCJlbXB0eVN0YXRlIiwic3RvcmUiLCJnZXQiLCJoYW5kbGVTZWxlY3Rpb24iLCJyZXNvdXJjZXMiLCJpZHNGcm9tUmVzb3VyY2VzIiwic2VsZWN0aW9uIiwibWFwIiwicHJvZHVjdCIsImlkIiwic2V0IiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJvbkFjdGlvbiIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQUQsQ0FEbkI7QUFBQSxNQUNSQyxLQURRO0FBQUEsTUFDREMsUUFEQzs7QUFFZixNQUFNQyxVQUFVLEdBQUcsQ0FBQ0MsK0NBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVYsQ0FBcEI7O0FBRUEsV0FBU0MsZUFBVCxDQUF5QkMsU0FBekIsRUFBb0M7QUFDbEMsUUFBTUMsZ0JBQWdCLEdBQUdELFNBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsT0FBRDtBQUFBLGFBQWFBLE9BQU8sQ0FBQ0MsRUFBckI7QUFBQSxLQUF4QixDQUF6QjtBQUNBVixZQUFRLENBQUM7QUFBRUYsVUFBSSxFQUFFO0FBQVIsS0FBRCxDQUFSO0FBQ0FJLG1EQUFLLENBQUNTLEdBQU4sQ0FBVSxLQUFWLEVBQWlCTCxnQkFBakI7QUFDQU0sV0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBb0NYLCtDQUFLLENBQUNDLEdBQU4sQ0FBVSxLQUFWLENBQXBDO0FBQ0Q7O0FBRUQsU0FDRSxNQUFDLHFEQUFELFFBQ0UsTUFBQyx3RUFBRDtBQUNFLGdCQUFZLEVBQUMsU0FEZjtBQUVFLGdCQUFZLEVBQUUsS0FGaEI7QUFHRSxRQUFJLEVBQUVKLEtBQUssQ0FBQ0QsSUFIZDtBQUlFLFlBQVEsRUFBRTtBQUFBLGFBQU1FLFFBQVEsQ0FBQztBQUFFRixZQUFJLEVBQUU7QUFBUixPQUFELENBQWQ7QUFBQSxLQUpaO0FBS0UsZUFBVyxFQUFFLHFCQUFDTyxTQUFEO0FBQUEsYUFBZUQsZUFBZSxDQUFDQyxTQUFELENBQTlCO0FBQUE7QUFMZixJQURGLEVBUUUsTUFBQyx1REFBRCxRQUNHSixVQUFVLEdBRVAsTUFBQywyREFBRDtBQUNFLFdBQU8sRUFBQyxpQ0FEVjtBQUVFLFVBQU0sRUFBRTtBQUNOYSxhQUFPLEVBQUUsaUJBREg7QUFFTkMsY0FBUSxFQUFFO0FBQUEsZUFBTWYsUUFBUSxDQUFDO0FBQUVGLGNBQUksRUFBRTtBQUFSLFNBQUQsQ0FBZDtBQUFBO0FBRkosS0FGVjtBQU1FLG1CQUFlLEVBQUU7QUFBRWdCLGFBQU8sRUFBRSxZQUFYO0FBQXlCRSxTQUFHLEVBQUU7QUFBOUIsS0FObkI7QUFPRSxTQUFLLEVBQUM7QUFQUixLQVNFLG1DQVRGLENBRk8sR0FjUCxNQUFDLCtEQUFELE9BZk4sQ0FSRixDQURGO0FBNEJEOztHQXZDUXBCLEs7O0tBQUFBLEs7QUF5Q01BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kMzIxZTgxOGU3NDU2YjQwNWU4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcmVhY3QtaW4tanN4LXNjb3BlICovXG5pbXBvcnQgeyBFbXB0eVN0YXRlLCBMYXlvdXQsIFBhZ2UgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlc291cmNlUGlja2VyIH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdExpc3QnO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICBjb25zdCBlbXB0eVN0YXRlID0gIXN0b3JlLmdldCgnaWRzJyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0aW9uKHJlc291cmNlcykge1xuICAgIGNvbnN0IGlkc0Zyb21SZXNvdXJjZXMgPSByZXNvdXJjZXMuc2VsZWN0aW9uLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCk7XG4gICAgc2V0TW9kYWwoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICBzdG9yZS5zZXQoJ2lkcycsIGlkc0Zyb21SZXNvdXJjZXMpO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHByb2R1Y3QgaWRzICcsIHN0b3JlLmdldCgnaWRzJykpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZT5cbiAgICAgIDxSZXNvdXJjZVBpY2tlclxuICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcbiAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cbiAgICAgICAgb3Blbj17bW9kYWwub3Blbn1cbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE1vZGFsKHsgb3BlbjogZmFsc2UgfSl9XG4gICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiBoYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKX1cbiAgICAgIC8+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7ZW1wdHlTdGF0ZVxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgPEVtcHR5U3RhdGVcbiAgICAgICAgICAgICAgaGVhZGluZz1cIk1hbmFnZSB5b3VyIGludmVudG9yeSB0cmFuc2ZlcnNcIlxuICAgICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IFByb2R1Y3RzJyxcbiAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gc2V0TW9kYWwoeyBvcGVuOiB0cnVlIH0pLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb249e3sgY29udGVudDogJ0xlYXJuIG1vcmUnLCB1cmw6ICdodHRwczovL2hlbHAuc2hvcGlmeS5jb20nIH19XG4gICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cD5TZWxlY3QgUHJvZHVjdHM8L3A+XG4gICAgICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICAgICAgKVxuICAgICAgICAgIDogPFByb2R1Y3RMaXN0IC8+fVxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=
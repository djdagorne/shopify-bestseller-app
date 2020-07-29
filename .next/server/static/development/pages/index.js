module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/react-in-jsx-scope */




const GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;

function ProductList() {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_PRODUCTS_BY_ID, {
    variables: {
      ids: store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get('ids')
    }
  });
  if (loading) return __jsx("div", null, "Loading...");
  if (error) return __jsx("div", null, error.message);
  console.log(data);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"], {
    showHeader: true,
    resourceName: {
      singular: 'Product',
      plural: 'Products'
    },
    items: data.nodes,
    renderItem: item => {
      const media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Thumbnail"], {
        source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : '',
        alt: item.images.edges[0] ? item.images.edges[0].altText : ''
      });

      const {
        price
      } = item.variants.edges[0].node;
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"].Item, {
        id: item.id,
        media: media,
        accessibilityLabel: `View details for ${item.title}`
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, {
        fill: true
      }, __jsx("h3", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextStyle"], {
        variation: "strong"
      }, item.title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, null, __jsx("p", null, "$", price))));
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProductList */ "./components/ProductList.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/jsx-filename-extension */

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/react-in-jsx-scope */







function Index() {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    open: false
  });
  const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids');

  async function makeApiCall(products) {
    const url = '/api/products';
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(url, products).then(result => console.log(result)).catch(error => console.log(error));
  }

  function deleteApiData() {
    const url = '/api/products';
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.delete(url);
  }

  function handleSelection(resources) {
    const ids = resources.selection.map(product => product.id);
    setModal({
      open: false
    });
    store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set('ids', ids);
    const selectedProducts = resources.selection;
    deleteApiData();
    selectedProducts.map(product => makeApiCall(product));
  }

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["TitleBar"], {
    primaryAction: {
      content: 'Select New Products',
      onAction: () => setModal({
        open: true
      })
    }
  }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["ResourcePicker"], {
    resourceType: "Product",
    showVariants: true,
    open: modal.open,
    onSelection: resources => handleSelection(resources),
    onCancel: () => setModal({
      open: false
    })
  }), emptyState ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], {
    heading: "Manage your inventory transfers",
    action: {
      content: 'Add transfer',
      onAction: () => setModal({
        open: true
      })
    },
    secondaryAction: {
      content: 'Learn more',
      url: 'https://help.shopify.com'
    },
    image: "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
  }, __jsx("p", null, "Select products"))) : __jsx(_components_ProductList__WEBPACK_IMPORTED_MODULE_5__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! Z:\Documents\Projects\sample-shopify-app\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("store-js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlByb2R1Y3RMaXN0IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaWRzIiwic3RvcmUiLCJnZXQiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInNpbmd1bGFyIiwicGx1cmFsIiwibm9kZXMiLCJpdGVtIiwibWVkaWEiLCJpbWFnZXMiLCJlZGdlcyIsIm5vZGUiLCJvcmlnaW5hbFNyYyIsImFsdFRleHQiLCJwcmljZSIsInZhcmlhbnRzIiwiaWQiLCJ0aXRsZSIsIkluZGV4IiwibW9kYWwiLCJzZXRNb2RhbCIsInVzZVN0YXRlIiwib3BlbiIsImVtcHR5U3RhdGUiLCJtYWtlQXBpQ2FsbCIsInByb2R1Y3RzIiwidXJsIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3VsdCIsImNhdGNoIiwiZGVsZXRlQXBpRGF0YSIsImRlbGV0ZSIsImhhbmRsZVNlbGVjdGlvbiIsInJlc291cmNlcyIsInNlbGVjdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJzZXQiLCJzZWxlY3RlZFBy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QSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZWFjdC1pbi1qc3gtc2NvcGUgKi9cclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCwgUmVzb3VyY2VMaXN0LCBTdGFjaywgVGV4dFN0eWxlLCBUaHVtYm5haWwsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcblxyXG5jb25zdCBHRVRfUFJPRFVDVFNfQllfSUQgPSBncWxgXHJcbiAgcXVlcnkgZ2V0UHJvZHVjdHMoJGlkczogW0lEIV0hKSB7XHJcbiAgICBub2RlcyhpZHM6ICRpZHMpIHtcclxuICAgICAgLi4uIG9uIFByb2R1Y3Qge1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgaGFuZGxlXHJcbiAgICAgICAgZGVzY3JpcHRpb25IdG1sXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpbWFnZXMoZmlyc3Q6IDEpIHtcclxuICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyaWFudHMoZmlyc3Q6IDEpIHtcclxuICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdExpc3QoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1BST0RVQ1RTX0JZX0lELCB7IHZhcmlhYmxlczogeyBpZHM6IHN0b3JlLmdldCgnaWRzJykgfSB9KTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxSZXNvdXJjZUxpc3RcclxuICAgICAgICBzaG93SGVhZGVyXHJcbiAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnUHJvZHVjdCcsIHBsdXJhbDogJ1Byb2R1Y3RzJyB9fVxyXG4gICAgICAgIGl0ZW1zPXtkYXRhLm5vZGVzfVxyXG4gICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBtZWRpYSA9IChcclxuICAgICAgICAgICAgPFRodW1ibmFpbFxyXG4gICAgICAgICAgICAgIHNvdXJjZT17XHJcbiAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5lZGdlc1swXSA/IGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdLm5vZGUub3JpZ2luYWxTcmMgOiAnJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhbHQ9e1xyXG4gICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF0gPyBpdGVtLmltYWdlcy5lZGdlc1swXS5hbHRUZXh0IDogJydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgeyBwcmljZSB9ID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgbWVkaWE9e21lZGlhfVxyXG4gICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YFZpZXcgZGV0YWlscyBmb3IgJHtpdGVtLnRpdGxlfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICRcclxuICAgICAgICAgICAgICAgICAgICB7cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZWFjdC1pbi1qc3gtc2NvcGUgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEVtcHR5U3RhdGUsIExheW91dCwgUGFnZSxcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgeyBUaXRsZUJhciwgUmVzb3VyY2VQaWNrZXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdExpc3QnO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICBjb25zdCBlbXB0eVN0YXRlID0gIXN0b3JlLmdldCgnaWRzJyk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gbWFrZUFwaUNhbGwocHJvZHVjdHMpIHtcbiAgICBjb25zdCB1cmwgPSAnL2FwaS9wcm9kdWN0cyc7XG4gICAgYXhpb3MucG9zdCh1cmwsIHByb2R1Y3RzKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVBcGlEYXRhKCkge1xuICAgIGNvbnN0IHVybCA9ICcvYXBpL3Byb2R1Y3RzJztcblxuICAgIGF4aW9zLmRlbGV0ZSh1cmwpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0aW9uKHJlc291cmNlcykge1xuICAgIGNvbnN0IGlkcyA9IHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkKTtcbiAgICBzZXRNb2RhbCh7IG9wZW46IGZhbHNlIH0pO1xuICAgIHN0b3JlLnNldCgnaWRzJywgaWRzKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkUHJvZHVjdHMgPSByZXNvdXJjZXMuc2VsZWN0aW9uO1xuICAgIGRlbGV0ZUFwaURhdGEoKTtcbiAgICBzZWxlY3RlZFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gbWFrZUFwaUNhbGwocHJvZHVjdCkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZT5cbiAgICAgIDxUaXRsZUJhclxuICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgICAgY29udGVudDogJ1NlbGVjdCBOZXcgUHJvZHVjdHMnLFxuICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiBzZXRNb2RhbCh7IG9wZW46IHRydWUgfSksXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPFJlc291cmNlUGlja2VyXG4gICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxuICAgICAgICBzaG93VmFyaWFudHNcbiAgICAgICAgb3Blbj17bW9kYWwub3Blbn1cbiAgICAgICAgb25TZWxlY3Rpb249eyhyZXNvdXJjZXMpID0+IGhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0TW9kYWwoeyBvcGVuOiBmYWxzZSB9KX1cbiAgICAgIC8+XG5cbiAgICAgIHtlbXB0eVN0YXRlID8gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxFbXB0eVN0YXRlXG4gICAgICAgICAgICBoZWFkaW5nPVwiTWFuYWdlIHlvdXIgaW52ZW50b3J5IHRyYW5zZmVyc1wiXG4gICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgY29udGVudDogJ0FkZCB0cmFuc2ZlcicsXG4gICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiBzZXRNb2RhbCh7IG9wZW46IHRydWUgfSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2Vjb25kYXJ5QWN0aW9uPXt7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICdMZWFybiBtb3JlJyxcbiAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9oZWxwLnNob3BpZnkuY29tJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cD5TZWxlY3QgcHJvZHVjdHM8L3A+XG4gICAgICAgICAgPC9FbXB0eVN0YXRlPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxQcm9kdWN0TGlzdCAvPlxuICAgICAgKX1cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RvcmUtanNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
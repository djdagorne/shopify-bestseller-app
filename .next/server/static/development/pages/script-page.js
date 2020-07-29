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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/script-page.js":
/*!******************************!*\
  !*** ./pages/script-page.js ***!
  \******************************/
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable react/jsx-filename-extension */



const CREATE_SCRIPT_TAG = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  mutation scriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;
const QUERY_SCRIPT_TAGS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query {
    scriptTags(first: 5) {
      edges {
        node {
          id
          src
          displayScope
        }
      }
    }
  }  
`;
const DELETE_SCRIPT_TAG = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  mutation scriptTagDelete($id: ID!) {
    scriptTagDelete(id: $id) {
      deletedScriptTagId
      userErrors {
        field
        message
      }
    }
  }
`;

function ScriptPage() {
  const [createScripts] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(CREATE_SCRIPT_TAG);
  const [deleteScripts] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(DELETE_SCRIPT_TAG);
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(QUERY_SCRIPT_TAGS);
  if (loading) return __jsx("div", null, "Loading...");
  if (error) return __jsx("div", null, error.message);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Layout"].Section, {
    primary: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    title: "These are current script tags: ",
    sectioned: true
  }, __jsx("p", null, " Create or Delete A Script Tag"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Layout"].Section, {
    secondary: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    title: "Delete Tag ",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    primary: true,
    size: "slim",
    type: "submit",
    onClick: () => {
      createScripts({
        variables: {
          input: {
            src: 'https://adf7e9d013ed.ngrok.io/test-script.js',
            displayScope: 'ALL'
          }
        },
        refetchQueries: [{
          query: QUERY_SCRIPT_TAGS
        }]
      });
    }
  }, "Create Script Tag"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"], {
    showHeader: true,
    resourceName: {
      singular: 'Script',
      plural: 'Scripts'
    },
    items: data.scriptTags.edges,
    renderItem: item => __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"].Item, {
      id: item.id
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, null, __jsx("p", null, item.node.id)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      type: "submit",
      onClick: () => {
        deleteScripts({
          variables: {
            id: item.node.id
          },
          refetchQueries: [{
            query: QUERY_SCRIPT_TAGS
          }]
        });
      }
    }, "Delete Script Tag"))))
  }, "test")))));
}

/* harmony default export */ __webpack_exports__["default"] = (ScriptPage);

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./pages/script-page.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! Z:\Documents\Projects\sample-shopify-app\pages\script-page.js */"./pages/script-page.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2NyaXB0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiQ1JFQVRFX1NDUklQVF9UQUciLCJncWwiLCJRVUVSWV9TQ1JJUFRfVEFHUyIsIkRFTEVURV9TQ1JJUFRfVEFHIiwiU2NyaXB0UGFnZSIsImNyZWF0ZVNjcmlwdHMiLCJ1c2VNdXRhdGlvbiIsImRlbGV0ZVNjcmlwdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJtZXNzYWdlIiwidmFyaWFibGVzIiwiaW5wdXQiLCJzcmMiLCJkaXNwbGF5U2NvcGUiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5Iiwic2luZ3VsYXIiLCJwbHVyYWwiLCJzY3JpcHRUYWdzIiwiZWRnZXMiLCJpdGVtIiwiaWQiLCJub2RlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QkFERixDQUpGLENBSEY7QUFMSixZQURGLENBREYsQ0E1QkYsQ0FERixDQURGO0FBc0VEOztBQUVjRSx5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hJQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2NyaXB0LXBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZWFjdC1pbi1qc3gtc2NvcGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlUXVlcnksIHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLCBDYXJkLCBMYXlvdXQsIFBhZ2UsIFJlc291cmNlTGlzdCwgU3RhY2ssXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcblxyXG5jb25zdCBDUkVBVEVfU0NSSVBUX1RBRyA9IGdxbGBcclxuICBtdXRhdGlvbiBzY3JpcHRUYWdDcmVhdGUoJGlucHV0OiBTY3JpcHRUYWdJbnB1dCEpIHtcclxuICAgIHNjcmlwdFRhZ0NyZWF0ZShpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIHNjcmlwdFRhZyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgICB1c2VyRXJyb3JzIHtcclxuICAgICAgICBmaWVsZFxyXG4gICAgICAgIG1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFFVRVJZX1NDUklQVF9UQUdTID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIHNjcmlwdFRhZ3MoZmlyc3Q6IDUpIHtcclxuICAgICAgZWRnZXMge1xyXG4gICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHNyY1xyXG4gICAgICAgICAgZGlzcGxheVNjb3BlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSAgXHJcbmA7XHJcblxyXG5jb25zdCBERUxFVEVfU0NSSVBUX1RBRyA9IGdxbGBcclxuICBtdXRhdGlvbiBzY3JpcHRUYWdEZWxldGUoJGlkOiBJRCEpIHtcclxuICAgIHNjcmlwdFRhZ0RlbGV0ZShpZDogJGlkKSB7XHJcbiAgICAgIGRlbGV0ZWRTY3JpcHRUYWdJZFxyXG4gICAgICB1c2VyRXJyb3JzIHtcclxuICAgICAgICBmaWVsZFxyXG4gICAgICAgIG1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFNjcmlwdFBhZ2UoKSB7XHJcbiAgY29uc3QgW2NyZWF0ZVNjcmlwdHNdID0gdXNlTXV0YXRpb24oQ1JFQVRFX1NDUklQVF9UQUcpO1xyXG4gIGNvbnN0IFtkZWxldGVTY3JpcHRzXSA9IHVzZU11dGF0aW9uKERFTEVURV9TQ1JJUFRfVEFHKTtcclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShRVUVSWV9TQ1JJUFRfVEFHUyk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2U+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPExheW91dC5TZWN0aW9uIHByaW1hcnk+XHJcbiAgICAgICAgICA8Q2FyZCB0aXRsZT1cIlRoZXNlIGFyZSBjdXJyZW50IHNjcmlwdCB0YWdzOiBcIiBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgIDxwPiBDcmVhdGUgb3IgRGVsZXRlIEEgU2NyaXB0IFRhZzwvcD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgIDxMYXlvdXQuU2VjdGlvbiBzZWNvbmRhcnk+XHJcbiAgICAgICAgICA8Q2FyZCB0aXRsZT1cIkRlbGV0ZSBUYWcgXCIgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbGltXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVTY3JpcHRzKHtcclxuICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYWRmN2U5ZDAxM2VkLm5ncm9rLmlvL3Rlc3Qtc2NyaXB0LmpzJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTY29wZTogJ0FMTCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBRVUVSWV9TQ1JJUFRfVEFHUyB9XSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDcmVhdGUgU2NyaXB0IFRhZ1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8UmVzb3VyY2VMaXN0XHJcbiAgICAgICAgICAgICAgc2hvd0hlYWRlclxyXG4gICAgICAgICAgICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogJ1NjcmlwdCcsIHBsdXJhbDogJ1NjcmlwdHMnIH19XHJcbiAgICAgICAgICAgICAgaXRlbXM9e2RhdGEuc2NyaXB0VGFncy5lZGdlc31cclxuICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5ub2RlLmlkfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlU2NyaXB0cyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0ubm9kZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IFFVRVJZX1NDUklQVF9UQUdTIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEZWxldGUgU2NyaXB0IFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgPC9SZXNvdXJjZUxpc3QuSXRlbT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgdGVzdFxyXG4gICAgICAgICAgICA8L1Jlc291cmNlTGlzdD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRQYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
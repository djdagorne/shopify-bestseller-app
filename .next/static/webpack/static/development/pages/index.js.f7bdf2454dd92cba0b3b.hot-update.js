webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
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
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/index.es.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_5__);


var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query getProducts($ids: [ID!]!) {\n    nodes(ids: $ids) {\n      ... on Product {\n        title\n        handle\n        descriptionHtml\n        id\n        images(first: 1) {\n          edges {\n            node {\n              originalSrc\n              altText\n            }\n          }\n        }\n        variants(first: 1) {\n          edges {\n            node {\n              price\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

function ProductList() {
  _s();

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_PRODUCTS_BY_ID, {
    variables: {
      ids: store_js__WEBPACK_IMPORTED_MODULE_5___default.a.get('ids')
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("div", null, "Loading...");
  if (error) return __jsx("div", null, error.message);
  console.log(data);
  return __jsx("div", null, __jsx("h1", null, "Hello from ProductList"));
}

_s(ProductList, "OQZiY3KqWoytFPIJWw/H9Hrmbok=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c = ProductList;
/* harmony default export */ __webpack_exports__["default"] = (ProductList);

var _c;

$RefreshReg$(_c, "ProductList");

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

/***/ }),

/***/ "./node_modules/@apollo/client/ApolloClient.js":
/*!*****************************************************!*\
  !*** ./node_modules/@apollo/client/ApolloClient.js ***!
  \*****************************************************/
/*! exports provided: ApolloClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return ApolloClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _link_core_ApolloLink_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link/core/ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");
/* harmony import */ var _link_core_execute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link/core/execute.js */ "./node_modules/@apollo/client/link/core/execute.js");
/* harmony import */ var _core_LocalState_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/LocalState.js */ "./node_modules/@apollo/client/core/LocalState.js");
/* harmony import */ var _core_QueryManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/QueryManager.js */ "./node_modules/@apollo/client/core/QueryManager.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./version.js */ "./node_modules/@apollo/client/version.js");
/* harmony import */ var _link_http_HttpLink_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link/http/HttpLink.js */ "./node_modules/@apollo/client/link/http/HttpLink.js");









var hasSuggestedDevtools = false;
var ApolloClient = (function () {
    function ApolloClient(options) {
        var _this = this;
        this.defaultOptions = {};
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, connectToDevTools = options.connectToDevTools, _c = options.queryDeduplication, queryDeduplication = _c === void 0 ? true : _c, defaultOptions = options.defaultOptions, _d = options.assumeImmutableResults, assumeImmutableResults = _d === void 0 ? false : _d, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link = options.link;
        if (!link) {
            link = uri
                ? new _link_http_HttpLink_js__WEBPACK_IMPORTED_MODULE_7__["HttpLink"]({ uri: uri, credentials: credentials, headers: headers })
                : _link_core_ApolloLink_js__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"].empty();
        }
        if (!cache) {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("To initialize Apollo Client, you must specify a 'cache' property " +
                "in the options object. \n" +
                "For more information, please visit: https://go.apollo.dev/c/docs");
        }
        this.link = link;
        this.cache = cache;
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions || {};
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        var defaultConnectToDevTools =  true &&
            typeof window !== 'undefined' &&
            !window.__APOLLO_CLIENT__;
        if (typeof connectToDevTools === 'undefined'
            ? defaultConnectToDevTools
            : connectToDevTools && typeof window !== 'undefined') {
            window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && "development" !== 'production') {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' &&
                window.document &&
                window.top === window.self) {
                if (typeof window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
                    if (window.navigator &&
                        window.navigator.userAgent &&
                        window.navigator.userAgent.indexOf('Chrome') > -1) {
                        console.debug('Download the Apollo DevTools ' +
                            'for a better development experience: ' +
                            'https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm');
                    }
                }
            }
        }
        this.version = _version_js__WEBPACK_IMPORTED_MODULE_6__["version"];
        this.localState = new _core_LocalState_js__WEBPACK_IMPORTED_MODULE_4__["LocalState"]({
            cache: cache,
            client: this,
            resolvers: resolvers,
            fragmentMatcher: fragmentMatcher,
        });
        this.queryManager = new _core_QueryManager_js__WEBPACK_IMPORTED_MODULE_5__["QueryManager"]({
            cache: this.cache,
            link: this.link,
            queryDeduplication: queryDeduplication,
            ssrMode: ssrMode,
            clientAwareness: {
                name: clientAwarenessName,
                version: clientAwarenessVersion,
            },
            localState: this.localState,
            assumeImmutableResults: assumeImmutableResults,
            onBroadcast: function () {
                if (_this.devToolsHookCb) {
                    _this.devToolsHookCb({
                        action: {},
                        state: {
                            queries: _this.queryManager.getQueryStore(),
                            mutations: _this.queryManager.mutationStore.getStore(),
                        },
                        dataWithOptimisticResults: _this.cache.extract(true),
                    });
                }
            },
        });
    }
    ApolloClient.prototype.stop = function () {
        this.queryManager.stop();
    };
    ApolloClient.prototype.watchQuery = function (options) {
        if (this.defaultOptions.watchQuery) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultOptions.watchQuery), options);
        }
        if (this.disableNetworkFetches &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.watchQuery(options);
    };
    ApolloClient.prototype.query = function (options) {
        if (this.defaultOptions.query) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultOptions.query), options);
        }
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(options.fetchPolicy !== 'cache-and-network', 'The cache-and-network fetchPolicy does not work with client.query, because ' +
            'client.query can only return a single result. Please use client.watchQuery ' +
            'to receive multiple results from the cache and the network, or consider ' +
            'using a different fetchPolicy, such as cache-first or network-only.');
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.query(options);
    };
    ApolloClient.prototype.mutate = function (options) {
        if (this.defaultOptions.mutate) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultOptions.mutate), options);
        }
        return this.queryManager.mutate(options);
    };
    ApolloClient.prototype.subscribe = function (options) {
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readQuery(options, optimistic);
    };
    ApolloClient.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readFragment(options, optimistic);
    };
    ApolloClient.prototype.writeQuery = function (options) {
        this.cache.writeQuery(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient.prototype.writeFragment = function (options) {
        this.cache.writeFragment(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.__requestRaw = function (payload) {
        return Object(_link_core_execute_js__WEBPACK_IMPORTED_MODULE_3__["execute"])(this.link, payload);
    };
    ApolloClient.prototype.resetStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore(); })
            .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); })
            .then(function () { return _this.reFetchObservableQueries(); });
    };
    ApolloClient.prototype.clearStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore(); })
            .then(function () { return Promise.all(_this.clearStoreCallbacks.map(function (fn) { return fn(); })); });
    };
    ApolloClient.prototype.onResetStore = function (cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.onClearStore = function (cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function () {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient.prototype.extract = function (optimistic) {
        return this.cache.extract(optimistic);
    };
    ApolloClient.prototype.restore = function (serializedState) {
        return this.cache.restore(serializedState);
    };
    ApolloClient.prototype.addResolvers = function (resolvers) {
        this.localState.addResolvers(resolvers);
    };
    ApolloClient.prototype.setResolvers = function (resolvers) {
        this.localState.setResolvers(resolvers);
    };
    ApolloClient.prototype.getResolvers = function () {
        return this.localState.getResolvers();
    };
    ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient.prototype.setLink = function (newLink) {
        this.link = this.queryManager.link = newLink;
    };
    return ApolloClient;
}());


//# sourceMappingURL=ApolloClient.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/cache/core/cache.js":
/*!*********************************************************!*\
  !*** ./node_modules/@apollo/client/cache/core/cache.js ***!
  \*********************************************************/
/*! exports provided: ApolloCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloCache", function() { return ApolloCache; });
/* harmony import */ var _utilities_graphql_fragments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/graphql/fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");



var ApolloCache = (function () {
    function ApolloCache() {
        this.getFragmentDoc = Object(optimism__WEBPACK_IMPORTED_MODULE_1__["wrap"])(_utilities_graphql_fragments_js__WEBPACK_IMPORTED_MODULE_0__["getFragmentQueryDocument"]);
    }
    ApolloCache.prototype.recordOptimisticTransaction = function (transaction, optimisticId) {
        this.performTransaction(transaction, optimisticId);
    };
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    ApolloCache.prototype.identify = function (object) {
        return;
    };
    ApolloCache.prototype.gc = function () {
        return [];
    };
    ApolloCache.prototype.modify = function (options) {
        return false;
    };
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            rootId: options.id || 'ROOT_QUERY',
            query: options.query,
            variables: options.variables,
            optimistic: optimistic,
        });
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: this.getFragmentDoc(options.fragment, options.fragmentName),
            variables: options.variables,
            rootId: options.id,
            optimistic: optimistic,
        });
    };
    ApolloCache.prototype.writeQuery = function (options) {
        return this.write({
            dataId: options.id || 'ROOT_QUERY',
            result: options.data,
            query: options.query,
            variables: options.variables,
            broadcast: options.broadcast,
        });
    };
    ApolloCache.prototype.writeFragment = function (options) {
        return this.write({
            dataId: options.id,
            result: options.data,
            variables: options.variables,
            query: this.getFragmentDoc(options.fragment, options.fragmentName),
            broadcast: options.broadcast,
        });
    };
    return ApolloCache;
}());


//# sourceMappingURL=cache.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/cache/core/types/Cache.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/core/types/Cache.js ***!
  \***************************************************************/
/*! exports provided: Cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
var Cache;
(function (Cache) {
})(Cache || (Cache = {}));


//# sourceMappingURL=Cache.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/cache/core/types/common.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/core/types/common.js ***!
  \****************************************************************/
/*! exports provided: MissingFieldError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingFieldError", function() { return MissingFieldError; });
var MissingFieldError = (function () {
    function MissingFieldError(message, path, query, variables) {
        this.message = message;
        this.path = path;
        this.query = query;
        this.variables = variables;
    }
    return MissingFieldError;
}());


//# sourceMappingURL=common.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/entityStore.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/entityStore.js ***!
  \*******************************************************************/
/*! exports provided: EntityStore, supportsResultCaching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityStore", function() { return EntityStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsResultCaching", function() { return supportsResultCaching; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/graphql/storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _utilities_common_canUse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/common/canUse.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony import */ var _utilities_common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/common/mergeDeep.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _utilities_common_maybeDeepFreeze_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/common/maybeDeepFreeze.js */ "./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");









var DELETE = Object.create(null);
var delModifier = function () { return DELETE; };
var EntityStore = (function () {
    function EntityStore(policies, group) {
        var _this = this;
        this.policies = policies;
        this.group = group;
        this.data = Object.create(null);
        this.rootIds = Object.create(null);
        this.refs = Object.create(null);
        this.getFieldValue = function (objectOrReference, storeFieldName) { return Object(_utilities_common_maybeDeepFreeze_js__WEBPACK_IMPORTED_MODULE_6__["maybeDeepFreeze"])(Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__["isReference"])(objectOrReference)
            ? _this.get(objectOrReference.__ref, storeFieldName)
            : objectOrReference && objectOrReference[storeFieldName]); };
        this.canRead = function (objOrRef) {
            return Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__["isReference"])(objOrRef)
                ? _this.has(objOrRef.__ref)
                : typeof objOrRef === "object";
        };
        this.toReference = function (objOrIdOrRef, mergeIntoStore) {
            if (typeof objOrIdOrRef === "string") {
                return Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__["makeReference"])(objOrIdOrRef);
            }
            if (Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__["isReference"])(objOrIdOrRef)) {
                return objOrIdOrRef;
            }
            var id = _this.policies.identify(objOrIdOrRef)[0];
            if (id) {
                var ref = Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__["makeReference"])(id);
                if (mergeIntoStore) {
                    _this.merge(id, objOrIdOrRef);
                }
                return ref;
            }
        };
    }
    EntityStore.prototype.toObject = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.data);
    };
    EntityStore.prototype.has = function (dataId) {
        return this.lookup(dataId, true) !== void 0;
    };
    EntityStore.prototype.get = function (dataId, fieldName) {
        this.group.depend(dataId, fieldName);
        if (_helpers_js__WEBPACK_IMPORTED_MODULE_7__["hasOwn"].call(this.data, dataId)) {
            var storeObject = this.data[dataId];
            if (storeObject && _helpers_js__WEBPACK_IMPORTED_MODULE_7__["hasOwn"].call(storeObject, fieldName)) {
                return storeObject[fieldName];
            }
        }
        if (fieldName === "__typename" &&
            _helpers_js__WEBPACK_IMPORTED_MODULE_7__["hasOwn"].call(this.policies.rootTypenamesById, dataId)) {
            return this.policies.rootTypenamesById[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.get(dataId, fieldName);
        }
    };
    EntityStore.prototype.lookup = function (dataId, dependOnExistence) {
        if (dependOnExistence)
            this.group.depend(dataId, "__exists");
        return _helpers_js__WEBPACK_IMPORTED_MODULE_7__["hasOwn"].call(this.data, dataId) ? this.data[dataId] :
            this instanceof Layer ? this.parent.lookup(dataId, dependOnExistence) : void 0;
    };
    EntityStore.prototype.merge = function (dataId, incoming) {
        var _this = this;
        var existing = this.lookup(dataId);
        var merged = new _utilities_common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_4__["DeepMerger"](storeObjectReconciler).merge(existing, incoming);
        this.data[dataId] = merged;
        if (merged !== existing) {
            delete this.refs[dataId];
            if (this.group.caching) {
                var fieldsToDirty_1 = Object.create(null);
                if (!existing)
                    fieldsToDirty_1.__exists = 1;
                Object.keys(incoming).forEach(function (storeFieldName) {
                    if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
                        fieldsToDirty_1[Object(_helpers_js__WEBPACK_IMPORTED_MODULE_7__["fieldNameFromStoreName"])(storeFieldName)] = 1;
                        if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                            delete merged[storeFieldName];
                        }
                    }
                });
                Object.keys(fieldsToDirty_1).forEach(function (fieldName) { return _this.group.dirty(dataId, fieldName); });
            }
        }
    };
    EntityStore.prototype.modify = function (dataId, fields) {
        var _this = this;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var changedFields_1 = Object.create(null);
            var needToMerge_1 = false;
            var allDeleted_1 = true;
            var readField_1 = function (fieldNameOrOptions, from) { return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
                fieldName: fieldNameOrOptions,
                from: from || Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__["makeReference"])(dataId),
            } : fieldNameOrOptions, { store: _this }); };
            Object.keys(storeObject).forEach(function (storeFieldName) {
                var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_7__["fieldNameFromStoreName"])(storeFieldName);
                var fieldValue = storeObject[storeFieldName];
                if (fieldValue === void 0)
                    return;
                var modify = typeof fields === "function"
                    ? fields
                    : fields[storeFieldName] || fields[fieldName];
                if (modify) {
                    var newValue = modify === delModifier ? DELETE :
                        modify(Object(_utilities_common_maybeDeepFreeze_js__WEBPACK_IMPORTED_MODULE_6__["maybeDeepFreeze"])(fieldValue), {
                            DELETE: DELETE,
                            fieldName: fieldName,
                            storeFieldName: storeFieldName,
                            isReference: _utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__["isReference"],
                            toReference: _this.toReference,
                            canRead: _this.canRead,
                            readField: readField_1,
                        });
                    if (newValue === DELETE)
                        newValue = void 0;
                    if (newValue !== fieldValue) {
                        changedFields_1[storeFieldName] = newValue;
                        needToMerge_1 = true;
                        fieldValue = newValue;
                    }
                }
                if (fieldValue !== void 0) {
                    allDeleted_1 = false;
                }
            });
            if (needToMerge_1) {
                this.merge(dataId, changedFields_1);
                if (allDeleted_1) {
                    if (this instanceof Layer) {
                        this.data[dataId] = void 0;
                    }
                    else {
                        delete this.data[dataId];
                    }
                    this.group.dirty(dataId, "__exists");
                }
                return true;
            }
        }
        return false;
    };
    EntityStore.prototype.delete = function (dataId, fieldName, args) {
        var _a;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var typename = this.getFieldValue(storeObject, "__typename");
            var storeFieldName = fieldName && args
                ? this.policies.getStoreFieldName({ typename: typename, fieldName: fieldName, args: args })
                : fieldName;
            return this.modify(dataId, storeFieldName ? (_a = {},
                _a[storeFieldName] = delModifier,
                _a) : delModifier);
        }
        return false;
    };
    EntityStore.prototype.evict = function (options) {
        var evicted = false;
        if (options.id) {
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_7__["hasOwn"].call(this.data, options.id)) {
                evicted = this.delete(options.id, options.fieldName, options.args);
            }
            if (this instanceof Layer) {
                evicted = this.parent.evict(options) || evicted;
            }
            if (options.fieldName || evicted) {
                this.group.dirty(options.id, options.fieldName || "__exists");
            }
        }
        return evicted;
    };
    EntityStore.prototype.clear = function () {
        this.replace(null);
    };
    EntityStore.prototype.replace = function (newData) {
        var _this = this;
        Object.keys(this.data).forEach(function (dataId) {
            if (!(newData && _helpers_js__WEBPACK_IMPORTED_MODULE_7__["hasOwn"].call(newData, dataId))) {
                _this.delete(dataId);
            }
        });
        if (newData) {
            Object.keys(newData).forEach(function (dataId) {
                _this.merge(dataId, newData[dataId]);
            });
        }
    };
    EntityStore.prototype.retain = function (rootId) {
        return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    };
    EntityStore.prototype.release = function (rootId) {
        if (this.rootIds[rootId] > 0) {
            var count = --this.rootIds[rootId];
            if (!count)
                delete this.rootIds[rootId];
            return count;
        }
        return 0;
    };
    EntityStore.prototype.getRootIdSet = function (ids) {
        if (ids === void 0) { ids = new Set(); }
        Object.keys(this.rootIds).forEach(ids.add, ids);
        if (this instanceof Layer) {
            this.parent.getRootIdSet(ids);
        }
        return ids;
    };
    EntityStore.prototype.gc = function () {
        var _this = this;
        var ids = this.getRootIdSet();
        var snapshot = this.toObject();
        ids.forEach(function (id) {
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_7__["hasOwn"].call(snapshot, id)) {
                Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
                delete snapshot[id];
            }
        });
        var idsToRemove = Object.keys(snapshot);
        if (idsToRemove.length) {
            var root_1 = this;
            while (root_1 instanceof Layer)
                root_1 = root_1.parent;
            idsToRemove.forEach(function (id) { return root_1.delete(id); });
        }
        return idsToRemove;
    };
    EntityStore.prototype.findChildRefIds = function (dataId) {
        if (!_helpers_js__WEBPACK_IMPORTED_MODULE_7__["hasOwn"].call(this.refs, dataId)) {
            var found_1 = this.refs[dataId] = Object.create(null);
            var workSet_1 = new Set([this.data[dataId]]);
            var canTraverse_1 = function (obj) { return obj !== null && typeof obj === 'object'; };
            workSet_1.forEach(function (obj) {
                if (Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__["isReference"])(obj)) {
                    found_1[obj.__ref] = true;
                }
                else if (canTraverse_1(obj)) {
                    Object.values(obj)
                        .filter(canTraverse_1)
                        .forEach(workSet_1.add, workSet_1);
                }
            });
        }
        return this.refs[dataId];
    };
    EntityStore.prototype.makeCacheKey = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.group.keyMaker.lookupArray(args);
    };
    return EntityStore;
}());
var CacheGroup = (function () {
    function CacheGroup(caching) {
        this.caching = caching;
        this.d = null;
        this.keyMaker = new optimism__WEBPACK_IMPORTED_MODULE_5__["KeyTrie"](_utilities_common_canUse_js__WEBPACK_IMPORTED_MODULE_3__["canUseWeakMap"]);
        this.d = caching ? Object(optimism__WEBPACK_IMPORTED_MODULE_5__["dep"])() : null;
    }
    CacheGroup.prototype.depend = function (dataId, storeFieldName) {
        if (this.d) {
            this.d(makeDepKey(dataId, storeFieldName));
        }
    };
    CacheGroup.prototype.dirty = function (dataId, storeFieldName) {
        if (this.d) {
            this.d.dirty(makeDepKey(dataId, storeFieldName));
        }
    };
    return CacheGroup;
}());
function makeDepKey(dataId, storeFieldName) {
    return Object(_helpers_js__WEBPACK_IMPORTED_MODULE_7__["fieldNameFromStoreName"])(storeFieldName) + '#' + dataId;
}
(function (EntityStore) {
    var Root = (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Root, _super);
        function Root(_a) {
            var policies = _a.policies, _b = _a.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a.seed;
            var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
            _this.sharedLayerGroup = new CacheGroup(resultCaching);
            if (seed)
                _this.replace(seed);
            return _this;
        }
        Root.prototype.addLayer = function (layerId, replay) {
            return new Layer(layerId, this, replay, this.sharedLayerGroup);
        };
        Root.prototype.removeLayer = function () {
            return this;
        };
        return Root;
    }(EntityStore));
    EntityStore.Root = Root;
})(EntityStore || (EntityStore = {}));
var Layer = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Layer, _super);
    function Layer(id, parent, replay, group) {
        var _this = _super.call(this, parent.policies, group) || this;
        _this.id = id;
        _this.parent = parent;
        _this.replay = replay;
        _this.group = group;
        replay(_this);
        return _this;
    }
    Layer.prototype.addLayer = function (layerId, replay) {
        return new Layer(layerId, this, replay, this.group);
    };
    Layer.prototype.removeLayer = function (layerId) {
        var _this = this;
        var parent = this.parent.removeLayer(layerId);
        if (layerId === this.id) {
            if (this.group.caching) {
                Object.keys(this.data).forEach(function (dataId) {
                    if (_this.data[dataId] !== parent.lookup(dataId)) {
                        _this.delete(dataId);
                    }
                });
            }
            return parent;
        }
        if (parent === this.parent)
            return this;
        return parent.addLayer(this.id, this.replay);
    };
    Layer.prototype.toObject = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.parent.toObject()), this.data);
    };
    Layer.prototype.findChildRefIds = function (dataId) {
        var fromParent = this.parent.findChildRefIds(dataId);
        return _helpers_js__WEBPACK_IMPORTED_MODULE_7__["hasOwn"].call(this.data, dataId) ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    return Layer;
}(EntityStore));
function storeObjectReconciler(existingObject, incomingObject, property) {
    var existingValue = existingObject[property];
    var incomingValue = incomingObject[property];
    return Object(_wry_equality__WEBPACK_IMPORTED_MODULE_2__["equal"])(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
    return !!(store instanceof EntityStore && store.group.caching);
}


//# sourceMappingURL=entityStore.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/helpers.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/helpers.js ***!
  \***************************************************************/
/*! exports provided: fieldNameFromStoreName, getTypenameFromStoreObject, hasOwn, isFieldValueToBeMerged, makeProcessedFieldsMerger, storeValueIsStoreObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldNameFromStoreName", function() { return fieldNameFromStoreName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypenameFromStoreObject", function() { return getTypenameFromStoreObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFieldValueToBeMerged", function() { return isFieldValueToBeMerged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeProcessedFieldsMerger", function() { return makeProcessedFieldsMerger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeValueIsStoreObject", function() { return storeValueIsStoreObject; });
/* harmony import */ var _utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/graphql/storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/common/mergeDeep.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");



var hasOwn = Object.prototype.hasOwnProperty;
function getTypenameFromStoreObject(store, objectOrReference) {
    return Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_0__["isReference"])(objectOrReference)
        ? store.get(objectOrReference.__ref, "__typename")
        : objectOrReference && objectOrReference.__typename;
}
var FieldNamePattern = /^[_A-Za-z0-9]+/;
function fieldNameFromStoreName(storeFieldName) {
    var match = storeFieldName.match(FieldNamePattern);
    return match ? match[0] : storeFieldName;
}
function storeValueIsStoreObject(value) {
    return value !== null &&
        typeof value === "object" &&
        !Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_0__["isReference"])(value) &&
        !Array.isArray(value);
}
function isFieldValueToBeMerged(value) {
    var field = value && value.__field;
    return field && Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_0__["isField"])(field);
}
function makeProcessedFieldsMerger() {
    return new _utilities_common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_1__["DeepMerger"](reconcileProcessedFields);
}
var reconcileProcessedFields = function (existingObject, incomingObject, property) {
    var existing = existingObject[property];
    var incoming = incomingObject[property];
    if (isFieldValueToBeMerged(existing)) {
        existing.__value = this.merge(existing.__value, isFieldValueToBeMerged(incoming)
            ? incoming.__value
            : incoming);
        return existing;
    }
    if (isFieldValueToBeMerged(incoming)) {
        incoming.__value = this.merge(existing, incoming.__value);
        return incoming;
    }
    return this.merge(existing, incoming);
};


//# sourceMappingURL=helpers.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js ***!
  \*********************************************************************/
/*! exports provided: InMemoryCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return InMemoryCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/graphql/storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_graphql_transform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/graphql/transform.js */ "./node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _reactiveVars_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactiveVars.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");
/* harmony import */ var _core_cache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/cache.js */ "./node_modules/@apollo/client/cache/core/cache.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _entityStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entityStore.js */ "./node_modules/@apollo/client/cache/inmemory/entityStore.js");
/* harmony import */ var _readFromStore_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./readFromStore.js */ "./node_modules/@apollo/client/cache/inmemory/readFromStore.js");
/* harmony import */ var _writeToStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./writeToStore.js */ "./node_modules/@apollo/client/cache/inmemory/writeToStore.js");
/* harmony import */ var _policies_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./policies.js */ "./node_modules/@apollo/client/cache/inmemory/policies.js");












var defaultConfig = {
    dataIdFromObject: _policies_js__WEBPACK_IMPORTED_MODULE_10__["defaultDataIdFromObject"],
    addTypename: true,
    resultCaching: true,
    typePolicies: {},
};
var InMemoryCache = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InMemoryCache, _super);
    function InMemoryCache(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.watches = new Set();
        _this.typenameDocumentCache = new Map();
        _this.makeVar = _reactiveVars_js__WEBPACK_IMPORTED_MODULE_4__["makeVar"];
        _this.txCount = 0;
        _this.maybeBroadcastWatch = Object(optimism__WEBPACK_IMPORTED_MODULE_3__["wrap"])(function (c) {
            return _this.broadcastWatch.call(_this, c);
        }, {
            makeCacheKey: function (c) {
                var store = c.optimistic ? _this.optimisticData : _this.data;
                if (Object(_entityStore_js__WEBPACK_IMPORTED_MODULE_7__["supportsResultCaching"])(store)) {
                    var optimistic = c.optimistic, rootId = c.rootId, variables = c.variables;
                    return store.makeCacheKey(c.query, c.callback, JSON.stringify({ optimistic: optimistic, rootId: rootId, variables: variables }));
                }
            }
        });
        _this.watchDep = Object(optimism__WEBPACK_IMPORTED_MODULE_3__["dep"])();
        _this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultConfig), config);
        _this.addTypename = !!_this.config.addTypename;
        _this.policies = new _policies_js__WEBPACK_IMPORTED_MODULE_10__["Policies"]({
            cache: _this,
            dataIdFromObject: _this.config.dataIdFromObject,
            possibleTypes: _this.config.possibleTypes,
            typePolicies: _this.config.typePolicies,
        });
        _this.data = new _entityStore_js__WEBPACK_IMPORTED_MODULE_7__["EntityStore"].Root({
            policies: _this.policies,
            resultCaching: _this.config.resultCaching,
        });
        _this.optimisticData = _this.data;
        _this.storeWriter = new _writeToStore_js__WEBPACK_IMPORTED_MODULE_9__["StoreWriter"](_this, _this.storeReader = new _readFromStore_js__WEBPACK_IMPORTED_MODULE_8__["StoreReader"]({
            cache: _this,
            addTypename: _this.addTypename,
        }));
        return _this;
    }
    InMemoryCache.prototype.restore = function (data) {
        if (data)
            this.data.replace(data);
        return this;
    };
    InMemoryCache.prototype.extract = function (optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return (optimistic ? this.optimisticData : this.data).toObject();
    };
    InMemoryCache.prototype.read = function (options) {
        var store = options.optimistic ? this.optimisticData : this.data;
        if (typeof options.rootId === 'string' && !store.has(options.rootId)) {
            return null;
        }
        return this.storeReader.readQueryFromStore({
            store: store,
            query: options.query,
            variables: options.variables,
            rootId: options.rootId,
            config: this.config,
        }) || null;
    };
    InMemoryCache.prototype.write = function (options) {
        try {
            ++this.txCount;
            return this.storeWriter.writeToStore({
                store: this.data,
                query: options.query,
                result: options.result,
                dataId: options.dataId,
                variables: options.variables,
            });
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.modify = function (options) {
        if (_helpers_js__WEBPACK_IMPORTED_MODULE_6__["hasOwn"].call(options, "id") && !options.id) {
            return false;
        }
        var store = options.optimistic
            ? this.optimisticData
            : this.data;
        try {
            ++this.txCount;
            return store.modify(options.id || "ROOT_QUERY", options.fields);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.diff = function (options) {
        return this.storeReader.diffQueryAgainstStore({
            store: options.optimistic ? this.optimisticData : this.data,
            rootId: options.id || "ROOT_QUERY",
            query: options.query,
            variables: options.variables,
            returnPartialData: options.returnPartialData,
            config: this.config,
        });
    };
    InMemoryCache.prototype.watch = function (watch) {
        var _this = this;
        this.watches.add(watch);
        if (watch.immediate) {
            this.maybeBroadcastWatch(watch);
        }
        return function () {
            _this.watches.delete(watch);
        };
    };
    InMemoryCache.prototype.gc = function () {
        return this.optimisticData.gc();
    };
    InMemoryCache.prototype.retain = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    InMemoryCache.prototype.release = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    InMemoryCache.prototype.identify = function (object) {
        return Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__["isReference"])(object) ? object.__ref :
            this.policies.identify(object)[0];
    };
    InMemoryCache.prototype.evict = function (options) {
        if (!options.id) {
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_6__["hasOwn"].call(options, "id")) {
                return false;
            }
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { id: "ROOT_QUERY" });
        }
        try {
            ++this.txCount;
            return this.optimisticData.evict(options);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.reset = function () {
        this.data.clear();
        this.optimisticData = this.data;
        this.broadcastWatches();
        return Promise.resolve();
    };
    InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
        var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
        if (newOptimisticData !== this.optimisticData) {
            this.optimisticData = newOptimisticData;
            this.broadcastWatches();
        }
    };
    InMemoryCache.prototype.performTransaction = function (transaction, optimisticId) {
        var _this = this;
        var perform = function (layer) {
            var _a = _this, data = _a.data, optimisticData = _a.optimisticData;
            ++_this.txCount;
            if (layer) {
                _this.data = _this.optimisticData = layer;
            }
            try {
                transaction(_this);
            }
            finally {
                --_this.txCount;
                _this.data = data;
                _this.optimisticData = optimisticData;
            }
        };
        if (typeof optimisticId === 'string') {
            this.optimisticData = this.optimisticData.addLayer(optimisticId, perform);
        }
        else if (optimisticId === null) {
            perform(this.data);
        }
        else {
            perform();
        }
        this.broadcastWatches();
    };
    InMemoryCache.prototype.transformDocument = function (document) {
        if (this.addTypename) {
            var result = this.typenameDocumentCache.get(document);
            if (!result) {
                result = Object(_utilities_graphql_transform_js__WEBPACK_IMPORTED_MODULE_2__["addTypenameToDocument"])(document);
                this.typenameDocumentCache.set(document, result);
                this.typenameDocumentCache.set(result, result);
            }
            return result;
        }
        return document;
    };
    InMemoryCache.prototype.broadcastWatches = function () {
        var _this = this;
        if (!this.txCount) {
            this.watches.forEach(function (c) { return _this.maybeBroadcastWatch(c); });
        }
    };
    InMemoryCache.prototype.broadcastWatch = function (c) {
        this.watchDep.dirty(c);
        this.watchDep(c);
        c.callback(this.diff({
            query: c.query,
            variables: c.variables,
            optimistic: c.optimistic,
        }));
    };
    return InMemoryCache;
}(_core_cache_js__WEBPACK_IMPORTED_MODULE_5__["ApolloCache"]));


//# sourceMappingURL=inMemoryCache.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/policies.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/policies.js ***!
  \****************************************************************/
/*! exports provided: Policies, defaultDataIdFromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Policies", function() { return Policies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return defaultDataIdFromObject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _utilities_graphql_fragments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/graphql/fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony import */ var _utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/graphql/storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_common_canUse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/common/canUse.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _reactiveVars_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reactiveVars.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");









function argsFromFieldSpecifier(spec) {
    return spec.args !== void 0 ? spec.args :
        spec.field ? Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["argumentsObjectFromField"])(spec.field, spec.variables) : null;
}
var defaultDataIdFromObject = function (_a, context) {
    var __typename = _a.__typename, id = _a.id, _id = _a._id;
    if (typeof __typename === "string") {
        if (context) {
            context.keyObject =
                id !== void 0 ? { id: id } :
                    _id !== void 0 ? { _id: _id } :
                        void 0;
        }
        var idValue = id || _id;
        if (idValue !== void 0) {
            return __typename + ":" + ((typeof idValue === "number" ||
                typeof idValue === "string") ? idValue : JSON.stringify(idValue));
        }
    }
};
var nullKeyFieldsFn = function () { return void 0; };
var simpleKeyArgsFn = function (_args, context) { return context.fieldName; };
var Policies = (function () {
    function Policies(config) {
        this.config = config;
        this.typePolicies = Object.create(null);
        this.rootIdsByTypename = Object.create(null);
        this.rootTypenamesById = Object.create(null);
        this.usingPossibleTypes = false;
        this.storageTrie = new optimism__WEBPACK_IMPORTED_MODULE_5__["KeyTrie"](true);
        this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ dataIdFromObject: defaultDataIdFromObject }, config);
        this.cache = this.config.cache;
        this.setRootTypename("Query");
        this.setRootTypename("Mutation");
        this.setRootTypename("Subscription");
        if (config.possibleTypes) {
            this.addPossibleTypes(config.possibleTypes);
        }
        if (config.typePolicies) {
            this.addTypePolicies(config.typePolicies);
        }
    }
    Policies.prototype.identify = function (object, selectionSet, fragmentMap) {
        var typename = selectionSet && fragmentMap
            ? Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["getTypenameFromResult"])(object, selectionSet, fragmentMap)
            : object.__typename;
        if (typename) {
            var rootId = this.rootIdsByTypename[typename];
            if ("string" === typeof rootId)
                return [rootId];
        }
        var context = {
            typename: typename,
            selectionSet: selectionSet,
            fragmentMap: fragmentMap,
        };
        var id;
        var policy = this.getTypePolicy(typename, false);
        var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
        while (keyFn) {
            var specifierOrId = keyFn(object, context);
            if (Array.isArray(specifierOrId)) {
                keyFn = keyFieldsFnFromSpecifier(specifierOrId);
            }
            else {
                id = specifierOrId;
                break;
            }
        }
        id = id && String(id);
        return context.keyObject ? [id, context.keyObject] : [id];
    };
    Policies.prototype.addTypePolicies = function (typePolicies) {
        var _this = this;
        Object.keys(typePolicies).forEach(function (typename) {
            var existing = _this.getTypePolicy(typename, true);
            var incoming = typePolicies[typename];
            var keyFields = incoming.keyFields, fields = incoming.fields;
            if (incoming.queryType)
                _this.setRootTypename("Query", typename);
            if (incoming.mutationType)
                _this.setRootTypename("Mutation", typename);
            if (incoming.subscriptionType)
                _this.setRootTypename("Subscription", typename);
            existing.keyFn =
                keyFields === false ? nullKeyFieldsFn :
                    Array.isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) :
                        typeof keyFields === "function" ? keyFields :
                            existing.keyFn;
            if (fields) {
                Object.keys(fields).forEach(function (fieldName) {
                    var existing = _this.getFieldPolicy(typename, fieldName, true);
                    var incoming = fields[fieldName];
                    if (typeof incoming === "function") {
                        existing.read = incoming;
                    }
                    else {
                        var keyArgs = incoming.keyArgs, read = incoming.read, merge = incoming.merge;
                        existing.keyFn =
                            keyArgs === false ? simpleKeyArgsFn :
                                Array.isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) :
                                    typeof keyArgs === "function" ? keyArgs :
                                        existing.keyFn;
                        if (typeof read === "function")
                            existing.read = read;
                        if (typeof merge === "function")
                            existing.merge = merge;
                    }
                    if (existing.read && existing.merge) {
                        existing.keyFn = existing.keyFn || simpleKeyArgsFn;
                    }
                });
            }
        });
    };
    Policies.prototype.setRootTypename = function (which, typename) {
        if (typename === void 0) { typename = which; }
        var rootId = "ROOT_" + which.toUpperCase();
        var old = this.rootTypenamesById[rootId];
        if (typename !== old) {
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!old || old === which, "Cannot change root " + which + " __typename more than once");
            this.rootIdsByTypename[typename] = rootId;
            this.rootTypenamesById[rootId] = typename;
        }
    };
    Policies.prototype.addPossibleTypes = function (possibleTypes) {
        var _this = this;
        this.usingPossibleTypes = true;
        Object.keys(possibleTypes).forEach(function (supertype) {
            var subtypeSet = _this.getSubtypeSet(supertype, true);
            possibleTypes[supertype].forEach(subtypeSet.add, subtypeSet);
        });
    };
    Policies.prototype.getTypePolicy = function (typename, createIfMissing) {
        if (typename) {
            return this.typePolicies[typename] || (createIfMissing && (this.typePolicies[typename] = Object.create(null)));
        }
    };
    Policies.prototype.getSubtypeSet = function (supertype, createIfMissing) {
        var policy = this.getTypePolicy(supertype, createIfMissing);
        if (policy) {
            return policy.subtypes || (createIfMissing ? policy.subtypes = new Set() : void 0);
        }
    };
    Policies.prototype.getFieldPolicy = function (typename, fieldName, createIfMissing) {
        var typePolicy = this.getTypePolicy(typename, createIfMissing);
        if (typePolicy) {
            var fieldPolicies = typePolicy.fields || (createIfMissing && (typePolicy.fields = Object.create(null)));
            if (fieldPolicies) {
                return fieldPolicies[fieldName] || (createIfMissing && (fieldPolicies[fieldName] = Object.create(null)));
            }
        }
    };
    Policies.prototype.fragmentMatches = function (fragment, typename) {
        var _this = this;
        if (!fragment.typeCondition)
            return true;
        if (!typename)
            return false;
        var supertype = fragment.typeCondition.name.value;
        if (typename === supertype)
            return true;
        if (this.usingPossibleTypes) {
            var workQueue_1 = [this.getSubtypeSet(supertype, false)];
            for (var i = 0; i < workQueue_1.length; ++i) {
                var subtypes = workQueue_1[i];
                if (subtypes) {
                    if (subtypes.has(typename))
                        return true;
                    subtypes.forEach(function (subtype) {
                        var subsubtypes = _this.getSubtypeSet(subtype, false);
                        if (subsubtypes && workQueue_1.indexOf(subsubtypes) < 0) {
                            workQueue_1.push(subsubtypes);
                        }
                    });
                }
            }
        }
        return false;
    };
    Policies.prototype.getStoreFieldName = function (fieldSpec) {
        var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
        var policy = this.getFieldPolicy(typename, fieldName, false);
        var storeFieldName;
        var keyFn = policy && policy.keyFn;
        if (keyFn && typename) {
            var context = {
                typename: typename,
                fieldName: fieldName,
                field: fieldSpec.field || null,
            };
            var args = argsFromFieldSpecifier(fieldSpec);
            while (keyFn) {
                var specifierOrString = keyFn(args, context);
                if (Array.isArray(specifierOrString)) {
                    keyFn = keyArgsFnFromSpecifier(specifierOrString);
                }
                else {
                    storeFieldName = specifierOrString || fieldName;
                    break;
                }
            }
        }
        if (storeFieldName === void 0) {
            storeFieldName = fieldSpec.field
                ? Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["storeKeyNameFromField"])(fieldSpec.field, fieldSpec.variables)
                : Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["getStoreKeyName"])(fieldName, argsFromFieldSpecifier(fieldSpec));
        }
        return fieldName === Object(_helpers_js__WEBPACK_IMPORTED_MODULE_7__["fieldNameFromStoreName"])(storeFieldName)
            ? storeFieldName
            : fieldName + ":" + storeFieldName;
    };
    Policies.prototype.readField = function (options, context) {
        var objectOrReference = options.from;
        if (!objectOrReference)
            return;
        var nameOrField = options.field || options.fieldName;
        if (!nameOrField)
            return;
        if (options.typename === void 0) {
            var typename = context.store.getFieldValue(objectOrReference, "__typename");
            if (typename)
                options.typename = typename;
        }
        var storeFieldName = this.getStoreFieldName(options);
        var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_7__["fieldNameFromStoreName"])(storeFieldName);
        var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
        var policy = this.getFieldPolicy(options.typename, fieldName, false);
        var read = policy && policy.read;
        if (read) {
            var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, this.storageTrie.lookup(Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(objectOrReference)
                ? objectOrReference.__ref
                : objectOrReference, storeFieldName));
            return _reactiveVars_js__WEBPACK_IMPORTED_MODULE_6__["cacheSlot"].withValue(this.cache, read, [existing, readOptions]);
        }
        return existing;
    };
    Policies.prototype.hasMergeFunction = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return !!(policy && policy.merge);
    };
    Policies.prototype.applyMerges = function (existing, incoming, context, storageKeys) {
        var _this = this;
        if (Object(_helpers_js__WEBPACK_IMPORTED_MODULE_7__["isFieldValueToBeMerged"])(incoming)) {
            var field = incoming.__field;
            var fieldName = field.name.value;
            var merge = this.getFieldPolicy(incoming.__typename, fieldName, false).merge;
            var storage = storageKeys
                ? this.storageTrie.lookupArray(storageKeys)
                : null;
            incoming = merge(existing, incoming.__value, makeFieldFunctionOptions(this, void 0, { typename: incoming.__typename, fieldName: fieldName,
                field: field, variables: context.variables }, context, storage));
        }
        if (Array.isArray(incoming)) {
            return incoming.map(function (item) { return _this.applyMerges(void 0, item, context); });
        }
        if (Object(_helpers_js__WEBPACK_IMPORTED_MODULE_7__["storeValueIsStoreObject"])(incoming)) {
            var e_1 = existing;
            var i_1 = incoming;
            var firstStorageKey_1 = Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(e_1)
                ? e_1.__ref
                : typeof e_1 === "object" && e_1;
            var newFields_1;
            Object.keys(i_1).forEach(function (storeFieldName) {
                var incomingValue = i_1[storeFieldName];
                var appliedValue = _this.applyMerges(context.store.getFieldValue(e_1, storeFieldName), incomingValue, context, firstStorageKey_1 ? [firstStorageKey_1, storeFieldName] : void 0);
                if (appliedValue !== incomingValue) {
                    newFields_1 = newFields_1 || Object.create(null);
                    newFields_1[storeFieldName] = appliedValue;
                }
            });
            if (newFields_1) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, i_1), newFields_1);
            }
        }
        return incoming;
    };
    return Policies;
}());
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
    var storeFieldName = policies.getStoreFieldName(fieldSpec);
    var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_7__["fieldNameFromStoreName"])(storeFieldName);
    var variables = fieldSpec.variables || context.variables;
    var _a = context.store, getFieldValue = _a.getFieldValue, toReference = _a.toReference, canRead = _a.canRead;
    return {
        args: argsFromFieldSpecifier(fieldSpec),
        field: fieldSpec.field || null,
        fieldName: fieldName,
        storeFieldName: storeFieldName,
        variables: variables,
        isReference: _utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isReference"],
        toReference: toReference,
        storage: storage,
        cache: policies.cache,
        canRead: canRead,
        readField: function (fieldNameOrOptions, from) {
            var options = typeof fieldNameOrOptions === "string" ? {
                fieldName: fieldNameOrOptions,
                from: from,
            } : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fieldNameOrOptions);
            if (void 0 === options.from) {
                options.from = objectOrReference;
            }
            if (void 0 === options.variables) {
                options.variables = variables;
            }
            return policies.readField(options, context);
        },
        mergeObjects: function (existing, incoming) {
            if (Array.isArray(existing) || Array.isArray(incoming)) {
                throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Cannot automatically merge arrays");
            }
            if (existing && typeof existing === "object" &&
                incoming && typeof incoming === "object") {
                var eType = getFieldValue(existing, "__typename");
                var iType = getFieldValue(incoming, "__typename");
                var typesDiffer = eType && iType && eType !== iType;
                var applied = policies.applyMerges(typesDiffer ? void 0 : existing, incoming, context);
                if (typesDiffer ||
                    !Object(_helpers_js__WEBPACK_IMPORTED_MODULE_7__["storeValueIsStoreObject"])(existing) ||
                    !Object(_helpers_js__WEBPACK_IMPORTED_MODULE_7__["storeValueIsStoreObject"])(applied)) {
                    return applied;
                }
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, existing), applied);
            }
            return incoming;
        }
    };
}
function keyArgsFnFromSpecifier(specifier) {
    return function (args, context) {
        return args ? context.fieldName + ":" + JSON.stringify(computeKeyObject(args, specifier)) : context.fieldName;
    };
}
function keyFieldsFnFromSpecifier(specifier) {
    var trie = new optimism__WEBPACK_IMPORTED_MODULE_5__["KeyTrie"](_utilities_common_canUse_js__WEBPACK_IMPORTED_MODULE_4__["canUseWeakMap"]);
    return function (object, context) {
        var aliasMap;
        if (context.selectionSet && context.fragmentMap) {
            var info = trie.lookupArray([
                context.selectionSet,
                context.fragmentMap,
            ]);
            aliasMap = info.aliasMap || (info.aliasMap = makeAliasMap(context.selectionSet, context.fragmentMap));
        }
        var keyObject = context.keyObject =
            computeKeyObject(object, specifier, aliasMap);
        return context.typename + ":" + JSON.stringify(keyObject);
    };
}
function makeAliasMap(selectionSet, fragmentMap) {
    var map = Object.create(null);
    var workQueue = new Set([selectionSet]);
    workQueue.forEach(function (selectionSet) {
        selectionSet.selections.forEach(function (selection) {
            if (Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection)) {
                if (selection.alias) {
                    var responseKey = selection.alias.value;
                    var storeKey = selection.name.value;
                    if (storeKey !== responseKey) {
                        var aliases = map.aliases || (map.aliases = Object.create(null));
                        aliases[storeKey] = responseKey;
                    }
                }
                if (selection.selectionSet) {
                    var subsets = map.subsets || (map.subsets = Object.create(null));
                    subsets[selection.name.value] =
                        makeAliasMap(selection.selectionSet, fragmentMap);
                }
            }
            else {
                var fragment = Object(_utilities_graphql_fragments_js__WEBPACK_IMPORTED_MODULE_2__["getFragmentFromSelection"])(selection, fragmentMap);
                if (fragment) {
                    workQueue.add(fragment.selectionSet);
                }
            }
        });
    });
    return map;
}
function computeKeyObject(response, specifier, aliasMap) {
    var keyObj = Object.create(null);
    var prevKey;
    specifier.forEach(function (s) {
        if (Array.isArray(s)) {
            if (typeof prevKey === "string") {
                var subsets = aliasMap && aliasMap.subsets;
                var subset = subsets && subsets[prevKey];
                keyObj[prevKey] = computeKeyObject(response[prevKey], s, subset);
            }
        }
        else {
            var aliases = aliasMap && aliasMap.aliases;
            var responseName = aliases && aliases[s] || s;
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(_helpers_js__WEBPACK_IMPORTED_MODULE_7__["hasOwn"].call(response, responseName), "Missing field '" + responseName + "' while computing key fields");
            keyObj[prevKey = s] = response[responseName];
        }
    });
    return keyObj;
}


//# sourceMappingURL=policies.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/reactiveVars.js ***!
  \********************************************************************/
/*! exports provided: cacheSlot, makeVar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheSlot", function() { return cacheSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeVar", function() { return makeVar; });
/* harmony import */ var _wry_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/context */ "./node_modules/@wry/context/lib/context.esm.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");



var varDep = Object(optimism__WEBPACK_IMPORTED_MODULE_1__["dep"])();
var cacheSlot = new _wry_context__WEBPACK_IMPORTED_MODULE_0__["Slot"]();
function makeVar(value) {
    var caches = new Set();
    return function rv(newValue) {
        if (arguments.length > 0) {
            if (value !== newValue) {
                value = newValue;
                varDep.dirty(rv);
                caches.forEach(broadcast);
            }
        }
        else {
            var cache = cacheSlot.getValue();
            if (cache)
                caches.add(cache);
            varDep(rv);
        }
        return value;
    };
}
function broadcast(cache) {
    if (cache.broadcastWatches) {
        cache.broadcastWatches();
    }
}


//# sourceMappingURL=reactiveVars.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/readFromStore.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/readFromStore.js ***!
  \*********************************************************************/
/*! exports provided: StoreReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreReader", function() { return StoreReader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _utilities_graphql_fragments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/graphql/fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony import */ var _utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/graphql/storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/graphql/getFromAST.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _utilities_graphql_directives_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/graphql/directives.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony import */ var _utilities_graphql_transform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/graphql/transform.js */ "./node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony import */ var _utilities_common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/common/mergeDeep.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _core_types_common_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/types/common.js */ "./node_modules/@apollo/client/cache/core/types/common.js");
/* harmony import */ var _utilities_common_maybeDeepFreeze_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/common/maybeDeepFreeze.js */ "./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _entityStore_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./entityStore.js */ "./node_modules/@apollo/client/cache/inmemory/entityStore.js");














function missingFromInvariant(err, context) {
    return new _core_types_common_js__WEBPACK_IMPORTED_MODULE_9__["MissingFieldError"](err.message, context.path.slice(), context.query, context.variables);
}
var StoreReader = (function () {
    function StoreReader(config) {
        var _this = this;
        this.config = config;
        this.executeSelectionSet = Object(optimism__WEBPACK_IMPORTED_MODULE_8__["wrap"])(function (options) { return _this.execSelectionSetImpl(options); }, {
            keyArgs: function (options) {
                return [
                    options.selectionSet,
                    options.objectOrReference,
                    options.context,
                ];
            },
            makeCacheKey: function (selectionSet, parent, context) {
                if (Object(_entityStore_js__WEBPACK_IMPORTED_MODULE_12__["supportsResultCaching"])(context.store)) {
                    return context.store.makeCacheKey(selectionSet, Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(parent) ? parent.__ref : parent, context.varString);
                }
            }
        });
        this.knownResults = new WeakMap();
        this.executeSubSelectedArray = Object(optimism__WEBPACK_IMPORTED_MODULE_8__["wrap"])(function (options) {
            return _this.execSubSelectedArrayImpl(options);
        }, {
            makeCacheKey: function (_a) {
                var field = _a.field, array = _a.array, context = _a.context;
                if (Object(_entityStore_js__WEBPACK_IMPORTED_MODULE_12__["supportsResultCaching"])(context.store)) {
                    return context.store.makeCacheKey(field, array, context.varString);
                }
            }
        });
        this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ addTypename: true }, config);
    }
    StoreReader.prototype.readQueryFromStore = function (options) {
        return this.diffQueryAgainstStore(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { returnPartialData: false })).result;
    };
    StoreReader.prototype.diffQueryAgainstStore = function (_a) {
        var store = _a.store, query = _a.query, _b = _a.rootId, rootId = _b === void 0 ? 'ROOT_QUERY' : _b, variables = _a.variables, _c = _a.returnPartialData, returnPartialData = _c === void 0 ? true : _c;
        var policies = this.config.cache.policies;
        variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(_utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getDefaultValues"])(Object(_utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getQueryDefinition"])(query))), variables);
        var execResult = this.executeSelectionSet({
            selectionSet: Object(_utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getMainDefinition"])(query).selectionSet,
            objectOrReference: Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["makeReference"])(rootId),
            context: {
                store: store,
                query: query,
                policies: policies,
                variables: variables,
                varString: JSON.stringify(variables),
                fragmentMap: Object(_utilities_graphql_fragments_js__WEBPACK_IMPORTED_MODULE_2__["createFragmentMap"])(Object(_utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getFragmentDefinitions"])(query)),
                path: [],
            },
        });
        var hasMissingFields = execResult.missing && execResult.missing.length > 0;
        if (hasMissingFields && !returnPartialData) {
            throw execResult.missing[0];
        }
        return {
            result: execResult.result,
            missing: execResult.missing,
            complete: !hasMissingFields,
        };
    };
    StoreReader.prototype.isFresh = function (result, parent, selectionSet, context) {
        if (Object(_entityStore_js__WEBPACK_IMPORTED_MODULE_12__["supportsResultCaching"])(context.store) &&
            this.knownResults.get(result) === selectionSet) {
            var latest = this.executeSelectionSet.peek(selectionSet, parent, context);
            if (latest && result === latest.result) {
                return true;
            }
        }
        return false;
    };
    StoreReader.prototype.execSelectionSetImpl = function (_a) {
        var _this = this;
        var selectionSet = _a.selectionSet, objectOrReference = _a.objectOrReference, context = _a.context;
        if (Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(objectOrReference) &&
            !context.policies.rootTypenamesById[objectOrReference.__ref] &&
            !context.store.has(objectOrReference.__ref)) {
            return {
                result: {},
                missing: [missingFromInvariant( false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Dangling reference to missing " + objectOrReference.__ref + " object"), context)],
            };
        }
        var fragmentMap = context.fragmentMap, variables = context.variables, policies = context.policies, store = context.store;
        var objectsToMerge = [];
        var finalResult = { result: null };
        var typename = store.getFieldValue(objectOrReference, "__typename");
        if (this.config.addTypename &&
            typeof typename === "string" &&
            !policies.rootIdsByTypename[typename]) {
            objectsToMerge.push({ __typename: typename });
        }
        function getMissing() {
            return finalResult.missing || (finalResult.missing = []);
        }
        function handleMissing(result) {
            var _a;
            if (result.missing)
                (_a = getMissing()).push.apply(_a, result.missing);
            return result.result;
        }
        var workSet = new Set(selectionSet.selections);
        workSet.forEach(function (selection) {
            var _a;
            if (!Object(_utilities_graphql_directives_js__WEBPACK_IMPORTED_MODULE_5__["shouldInclude"])(selection, variables))
                return;
            if (Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection)) {
                var fieldValue = policies.readField({
                    fieldName: selection.name.value,
                    field: selection,
                    variables: context.variables,
                    from: objectOrReference,
                }, context);
                var resultName = Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["resultKeyNameFromField"])(selection);
                context.path.push(resultName);
                if (fieldValue === void 0) {
                    if (!_utilities_graphql_transform_js__WEBPACK_IMPORTED_MODULE_6__["addTypenameToDocument"].added(selection)) {
                        getMissing().push(missingFromInvariant( false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Can't find field '" + selection.name.value + "' on " + (Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(objectOrReference)
                            ? objectOrReference.__ref + " object"
                            : "object " + JSON.stringify(objectOrReference, null, 2))), context));
                    }
                }
                else if (Array.isArray(fieldValue)) {
                    fieldValue = handleMissing(_this.executeSubSelectedArray({
                        field: selection,
                        array: fieldValue,
                        context: context,
                    }));
                }
                else if (!selection.selectionSet) {
                    if (true) {
                        assertSelectionSetForIdValue(context.store, selection, fieldValue);
                        Object(_utilities_common_maybeDeepFreeze_js__WEBPACK_IMPORTED_MODULE_10__["maybeDeepFreeze"])(fieldValue);
                    }
                }
                else if (fieldValue != null) {
                    fieldValue = handleMissing(_this.executeSelectionSet({
                        selectionSet: selection.selectionSet,
                        objectOrReference: fieldValue,
                        context: context,
                    }));
                }
                if (fieldValue !== void 0) {
                    objectsToMerge.push((_a = {}, _a[resultName] = fieldValue, _a));
                }
                Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(context.path.pop() === resultName);
            }
            else {
                var fragment = void 0;
                if (Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isInlineFragment"])(selection)) {
                    fragment = selection;
                }
                else {
                     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragment = fragmentMap[selection.name.value], "No fragment named " + selection.name.value);
                }
                if (policies.fragmentMatches(fragment, typename)) {
                    fragment.selectionSet.selections.forEach(workSet.add, workSet);
                }
            }
        });
        finalResult.result = Object(_utilities_common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_7__["mergeDeepArray"])(objectsToMerge);
        if (true) {
            Object.freeze(finalResult.result);
        }
        this.knownResults.set(finalResult.result, selectionSet);
        return finalResult;
    };
    StoreReader.prototype.execSubSelectedArrayImpl = function (_a) {
        var _this = this;
        var field = _a.field, array = _a.array, context = _a.context;
        var missing;
        function handleMissing(childResult, i) {
            if (childResult.missing) {
                missing = missing || [];
                missing.push.apply(missing, childResult.missing);
            }
            Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(context.path.pop() === i);
            return childResult.result;
        }
        if (field.selectionSet) {
            array = array.filter(context.store.canRead);
        }
        array = array.map(function (item, i) {
            if (item === null) {
                return null;
            }
            context.path.push(i);
            if (Array.isArray(item)) {
                return handleMissing(_this.executeSubSelectedArray({
                    field: field,
                    array: item,
                    context: context,
                }), i);
            }
            if (field.selectionSet) {
                return handleMissing(_this.executeSelectionSet({
                    selectionSet: field.selectionSet,
                    objectOrReference: item,
                    context: context,
                }), i);
            }
            if (true) {
                assertSelectionSetForIdValue(context.store, field, item);
            }
            Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(context.path.pop() === i);
            return item;
        });
        if (true) {
            Object.freeze(array);
        }
        return { result: array, missing: missing };
    };
    return StoreReader;
}());
function assertSelectionSetForIdValue(store, field, fieldValue) {
    if (!field.selectionSet) {
        var workSet_1 = new Set([fieldValue]);
        workSet_1.forEach(function (value) {
            if (value && typeof value === "object") {
                 false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(value), "Missing selection set for object of type " + Object(_helpers_js__WEBPACK_IMPORTED_MODULE_11__["getTypenameFromStoreObject"])(store, value) + " returned for query field " + field.name.value);
                Object.values(value).forEach(workSet_1.add, workSet_1);
            }
        });
    }
}


//# sourceMappingURL=readFromStore.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/writeToStore.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/writeToStore.js ***!
  \********************************************************************/
/*! exports provided: StoreWriter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreWriter", function() { return StoreWriter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _utilities_graphql_fragments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/graphql/fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony import */ var _utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/graphql/storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/graphql/getFromAST.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _utilities_graphql_directives_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/graphql/directives.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony import */ var _utilities_common_cloneDeep_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/common/cloneDeep.js */ "./node_modules/@apollo/client/utilities/common/cloneDeep.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");










var StoreWriter = (function () {
    function StoreWriter(cache, reader) {
        this.cache = cache;
        this.reader = reader;
    }
    StoreWriter.prototype.writeToStore = function (_a) {
        var query = _a.query, result = _a.result, dataId = _a.dataId, store = _a.store, variables = _a.variables;
        var operationDefinition = Object(_utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getOperationDefinition"])(query);
        var merger = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_8__["makeProcessedFieldsMerger"])();
        variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(_utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getDefaultValues"])(operationDefinition)), variables);
        var objOrRef = this.processSelectionSet({
            result: result || Object.create(null),
            dataId: dataId,
            selectionSet: operationDefinition.selectionSet,
            context: {
                store: store,
                written: Object.create(null),
                merge: function (existing, incoming) {
                    return merger.merge(existing, incoming);
                },
                variables: variables,
                varString: JSON.stringify(variables),
                fragmentMap: Object(_utilities_graphql_fragments_js__WEBPACK_IMPORTED_MODULE_2__["createFragmentMap"])(Object(_utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getFragmentDefinitions"])(query)),
            },
        });
        var ref = Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(objOrRef) ? objOrRef :
            dataId && Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["makeReference"])(dataId) || void 0;
        if (ref) {
            store.retain(ref.__ref);
        }
        return ref;
    };
    StoreWriter.prototype.processSelectionSet = function (_a) {
        var _this = this;
        var dataId = _a.dataId, result = _a.result, selectionSet = _a.selectionSet, context = _a.context, _b = _a.out, out = _b === void 0 ? {
            shouldApplyMerges: false,
        } : _b;
        var policies = this.cache.policies;
        var _c = policies.identify(result, selectionSet, context.fragmentMap), id = _c[0], keyObject = _c[1];
        dataId = dataId || id;
        if ("string" === typeof dataId) {
            var sets = context.written[dataId] || (context.written[dataId] = []);
            var ref = Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["makeReference"])(dataId);
            if (sets.indexOf(selectionSet) >= 0)
                return ref;
            sets.push(selectionSet);
            if (this.reader && this.reader.isFresh(result, ref, selectionSet, context)) {
                return ref;
            }
        }
        var mergedFields = Object.create(null);
        if (keyObject) {
            mergedFields = context.merge(mergedFields, keyObject);
        }
        var typename = (dataId && policies.rootTypenamesById[dataId]) ||
            Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["getTypenameFromResult"])(result, selectionSet, context.fragmentMap) ||
            (dataId && context.store.get(dataId, "__typename"));
        if ("string" === typeof typename) {
            mergedFields.__typename = typename;
        }
        var workSet = new Set(selectionSet.selections);
        workSet.forEach(function (selection) {
            var _a;
            if (!Object(_utilities_graphql_directives_js__WEBPACK_IMPORTED_MODULE_6__["shouldInclude"])(selection, context.variables))
                return;
            if (Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection)) {
                var resultFieldKey = Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["resultKeyNameFromField"])(selection);
                var value = result[resultFieldKey];
                if (typeof value !== 'undefined') {
                    var storeFieldName = policies.getStoreFieldName({
                        typename: typename,
                        fieldName: selection.name.value,
                        field: selection,
                        variables: context.variables,
                    });
                    var incomingValue = _this.processFieldValue(value, selection, context, out);
                    if (policies.hasMergeFunction(typename, selection.name.value)) {
                        incomingValue = {
                            __field: selection,
                            __typename: typename,
                            __value: incomingValue,
                        };
                        out.shouldApplyMerges = true;
                    }
                    mergedFields = context.merge(mergedFields, (_a = {},
                        _a[storeFieldName] = incomingValue,
                        _a));
                }
                else if (policies.usingPossibleTypes &&
                    !Object(_utilities_graphql_directives_js__WEBPACK_IMPORTED_MODULE_6__["hasDirectives"])(["defer", "client"], selection)) {
                    throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Missing field '" + resultFieldKey + "' in " + JSON.stringify(result, null, 2).substring(0, 100));
                }
            }
            else {
                var fragment = Object(_utilities_graphql_fragments_js__WEBPACK_IMPORTED_MODULE_2__["getFragmentFromSelection"])(selection, context.fragmentMap);
                if (fragment && policies.fragmentMatches(fragment, typename)) {
                    fragment.selectionSet.selections.forEach(workSet.add, workSet);
                }
            }
        });
        if ("string" === typeof dataId) {
            var entityRef_1 = Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["makeReference"])(dataId);
            if (out.shouldApplyMerges) {
                mergedFields = policies.applyMerges(entityRef_1, mergedFields, context);
            }
            if (true) {
                Object.keys(mergedFields).forEach(function (storeFieldName) {
                    var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_8__["fieldNameFromStoreName"])(storeFieldName);
                    if (!policies.hasMergeFunction(typename, fieldName)) {
                        warnAboutDataLoss(entityRef_1, mergedFields, storeFieldName, context.store);
                    }
                });
            }
            context.store.merge(dataId, mergedFields);
            return entityRef_1;
        }
        return mergedFields;
    };
    StoreWriter.prototype.processFieldValue = function (value, field, context, out) {
        var _this = this;
        if (!field.selectionSet || value === null) {
            return  false ? undefined : Object(_utilities_common_cloneDeep_js__WEBPACK_IMPORTED_MODULE_7__["cloneDeep"])(value);
        }
        if (Array.isArray(value)) {
            return value.map(function (item) { return _this.processFieldValue(item, field, context, out); });
        }
        return this.processSelectionSet({
            result: value,
            selectionSet: field.selectionSet,
            context: context,
            out: out,
        });
    };
    return StoreWriter;
}());
var warnings = new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
    var getChild = function (objOrRef) {
        var child = store.getFieldValue(objOrRef, storeFieldName);
        return typeof child === "object" && child;
    };
    var existing = getChild(existingRef);
    if (!existing)
        return;
    var incoming = getChild(incomingObj);
    if (!incoming)
        return;
    if (Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(existing))
        return;
    if (Object(_wry_equality__WEBPACK_IMPORTED_MODULE_5__["equal"])(existing, incoming))
        return;
    if (Object.keys(existing).every(function (key) { return store.getFieldValue(incoming, key) !== void 0; })) {
        return;
    }
    var parentType = store.getFieldValue(existingRef, "__typename") ||
        store.getFieldValue(incomingObj, "__typename");
    var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_8__["fieldNameFromStoreName"])(storeFieldName);
    var typeDotName = parentType + "." + fieldName;
    if (warnings.has(typeDotName))
        return;
    warnings.add(typeDotName);
    var childTypenames = [];
    if (!Array.isArray(existing) &&
        !Array.isArray(incoming)) {
        [existing, incoming].forEach(function (child) {
            var typename = store.getFieldValue(child, "__typename");
            if (typeof typename === "string" &&
                !childTypenames.includes(typename)) {
                childTypenames.push(typename);
            }
        });
    }
     false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Cache data may be lost when replacing the " + fieldName + " field of a " + parentType + " object.\n\nTo address this problem (which is not a bug in Apollo Client), " + (childTypenames.length
        ? "either ensure all objects of type " +
            childTypenames.join(" and ") + " have IDs, or "
        : "") + "define a custom merge function for the " + typeDotName + " field, so InMemoryCache can safely merge these objects:\n\n  existing: " + JSON.stringify(existing).slice(0, 1000) + "\n  incoming: " + JSON.stringify(incoming).slice(0, 1000) + "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n");
}


//# sourceMappingURL=writeToStore.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/core/LocalState.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/core/LocalState.js ***!
  \********************************************************/
/*! exports provided: LocalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalState", function() { return LocalState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _utilities_graphql_fragments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/graphql/fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony import */ var _utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/graphql/storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/graphql/getFromAST.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var graphql_language_visitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql/language/visitor */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _utilities_graphql_directives_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/graphql/directives.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony import */ var _utilities_graphql_transform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/graphql/transform.js */ "./node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony import */ var _utilities_common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/common/mergeDeep.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");
/* harmony import */ var _cache_inmemory_reactiveVars_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cache/inmemory/reactiveVars.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");











var LocalState = (function () {
    function LocalState(_a) {
        var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
        this.cache = cache;
        if (client) {
            this.client = client;
        }
        if (resolvers) {
            this.addResolvers(resolvers);
        }
        if (fragmentMatcher) {
            this.setFragmentMatcher(fragmentMatcher);
        }
    }
    LocalState.prototype.addResolvers = function (resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) {
            resolvers.forEach(function (resolverGroup) {
                _this.resolvers = Object(_utilities_common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_8__["mergeDeep"])(_this.resolvers, resolverGroup);
            });
        }
        else {
            this.resolvers = Object(_utilities_common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_8__["mergeDeep"])(this.resolvers, resolvers);
        }
    };
    LocalState.prototype.setResolvers = function (resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
    };
    LocalState.prototype.getResolvers = function () {
        return this.resolvers || {};
    };
    LocalState.prototype.runResolvers = function (_a) {
        var document = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                if (document) {
                    return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, remoteResult), { data: localResult.result })); })];
                }
                return [2, remoteResult];
            });
        });
    };
    LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
    };
    LocalState.prototype.clientQuery = function (document) {
        if (Object(_utilities_graphql_directives_js__WEBPACK_IMPORTED_MODULE_6__["hasDirectives"])(['client'], document)) {
            if (this.resolvers) {
                return document;
            }
        }
        return null;
    };
    LocalState.prototype.serverQuery = function (document) {
        return Object(_utilities_graphql_transform_js__WEBPACK_IMPORTED_MODULE_7__["removeClientSetsFromDocument"])(document);
    };
    LocalState.prototype.prepareContext = function (context) {
        var cache = this.cache;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { cache: cache,
            getCacheKey: function (obj) {
                return cache.identify(obj);
            } });
    };
    LocalState.prototype.addExportedVariables = function (document, variables, context) {
        if (variables === void 0) { variables = {}; }
        if (context === void 0) { context = {}; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (document) {
                    return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, variables), data.exportedVariables)); })];
                }
                return [2, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, variables)];
            });
        });
    };
    LocalState.prototype.shouldForceResolvers = function (document) {
        var forceResolvers = false;
        Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_5__["visit"])(document, {
            Directive: {
                enter: function (node) {
                    if (node.name.value === 'client' && node.arguments) {
                        forceResolvers = node.arguments.some(function (arg) {
                            return arg.name.value === 'always' &&
                                arg.value.kind === 'BooleanValue' &&
                                arg.value.value === true;
                        });
                        if (forceResolvers) {
                            return graphql_language_visitor__WEBPACK_IMPORTED_MODULE_5__["BREAK"];
                        }
                    }
                },
            },
        });
        return forceResolvers;
    };
    LocalState.prototype.buildRootValueFromCache = function (document, variables) {
        return this.cache.diff({
            query: Object(_utilities_graphql_transform_js__WEBPACK_IMPORTED_MODULE_7__["buildQueryFromSelectionSet"])(document),
            variables: variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
    };
    LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) { context = {}; }
        if (variables === void 0) { variables = {}; }
        if (fragmentMatcher === void 0) { fragmentMatcher = function () { return true; }; }
        if (onlyRunForcedResolvers === void 0) { onlyRunForcedResolvers = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a, cache, client, execContext;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                mainDefinition = Object(_utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getMainDefinition"])(document);
                fragments = Object(_utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getFragmentDefinitions"])(document);
                fragmentMap = Object(_utilities_graphql_fragments_js__WEBPACK_IMPORTED_MODULE_2__["createFragmentMap"])(fragments);
                definitionOperation = mainDefinition
                    .operation;
                defaultOperationType = definitionOperation
                    ? definitionOperation.charAt(0).toUpperCase() +
                        definitionOperation.slice(1)
                    : 'Query';
                _a = this, cache = _a.cache, client = _a.client;
                execContext = {
                    fragmentMap: fragmentMap,
                    context: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { cache: cache,
                        client: client }),
                    variables: variables,
                    fragmentMatcher: fragmentMatcher,
                    defaultOperationType: defaultOperationType,
                    exportedVariables: {},
                    onlyRunForcedResolvers: onlyRunForcedResolvers,
                };
                return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function (result) { return ({
                        result: result,
                        exportedVariables: execContext.exportedVariables,
                    }); })];
            });
        });
    };
    LocalState.prototype.resolveSelectionSet = function (selectionSet, rootValue, execContext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var fragmentMap, context, variables, resultsToMerge, execute;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [rootValue];
                execute = function (selection) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var fragment, typeCondition;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        if (!Object(_utilities_graphql_directives_js__WEBPACK_IMPORTED_MODULE_6__["shouldInclude"])(selection, variables)) {
                            return [2];
                        }
                        if (Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection)) {
                            return [2, this.resolveField(selection, rootValue, execContext).then(function (fieldResult) {
                                    var _a;
                                    if (typeof fieldResult !== 'undefined') {
                                        resultsToMerge.push((_a = {},
                                            _a[Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["resultKeyNameFromField"])(selection)] = fieldResult,
                                            _a));
                                    }
                                })];
                        }
                        if (Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isInlineFragment"])(selection)) {
                            fragment = selection;
                        }
                        else {
                            fragment = fragmentMap[selection.name.value];
                             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragment, "No fragment named " + selection.name.value);
                        }
                        if (fragment && fragment.typeCondition) {
                            typeCondition = fragment.typeCondition.name.value;
                            if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                                return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function (fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })];
                            }
                        }
                        return [2];
                    });
                }); };
                return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
                        return Object(_utilities_common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_8__["mergeDeepArray"])(resultsToMerge);
                    })];
            });
        });
    };
    LocalState.prototype.resolveField = function (field, rootValue, execContext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["resultKeyNameFromField"])(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                if (!execContext.onlyRunForcedResolvers ||
                    this.shouldForceResolvers(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) {
                            resultPromise = Promise.resolve(_cache_inmemory_reactiveVars_js__WEBPACK_IMPORTED_MODULE_9__["cacheSlot"].withValue(this.cache, resolve, [
                                rootValue,
                                Object(_utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["argumentsObjectFromField"])(field, variables),
                                execContext.context,
                                { field: field, fragmentMap: execContext.fragmentMap },
                            ]));
                        }
                    }
                }
                return [2, resultPromise.then(function (result) {
                        if (result === void 0) { result = defaultResult; }
                        if (field.directives) {
                            field.directives.forEach(function (directive) {
                                if (directive.name.value === 'export' && directive.arguments) {
                                    directive.arguments.forEach(function (arg) {
                                        if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
                                            execContext.exportedVariables[arg.value.value] = result;
                                        }
                                    });
                                }
                            });
                        }
                        if (!field.selectionSet) {
                            return result;
                        }
                        if (result == null) {
                            return result;
                        }
                        if (Array.isArray(result)) {
                            return _this.resolveSubSelectedArray(field, result, execContext);
                        }
                        if (field.selectionSet) {
                            return _this.resolveSelectionSet(field.selectionSet, result, execContext);
                        }
                    })];
            });
        });
    };
    LocalState.prototype.resolveSubSelectedArray = function (field, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function (item) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return _this.resolveSubSelectedArray(field, item, execContext);
            }
            if (field.selectionSet) {
                return _this.resolveSelectionSet(field.selectionSet, item, execContext);
            }
        }));
    };
    return LocalState;
}());


//# sourceMappingURL=LocalState.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/core/ObservableQuery.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/core/ObservableQuery.js ***!
  \*************************************************************/
/*! exports provided: ObservableQuery, hasError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return ObservableQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasError", function() { return hasError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");
/* harmony import */ var _utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/graphql/getFromAST.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _utilities_common_arrays_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/common/arrays.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony import */ var _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../errors/ApolloError.js */ "./node_modules/@apollo/client/errors/ApolloError.js");
/* harmony import */ var _utilities_common_cloneDeep_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/common/cloneDeep.js */ "./node_modules/@apollo/client/utilities/common/cloneDeep.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _utilities_observables_iteration_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/observables/iteration.js */ "./node_modules/@apollo/client/utilities/observables/iteration.js");
/* harmony import */ var _Reobserver_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Reobserver.js */ "./node_modules/@apollo/client/core/Reobserver.js");













var hasError = function (storeValue, policy) {
    if (policy === void 0) { policy = 'none'; }
    return storeValue && (storeValue.networkError ||
        (policy === 'none' && Object(_utilities_common_arrays_js__WEBPACK_IMPORTED_MODULE_6__["isNonEmptyArray"])(storeValue.graphQLErrors)));
};
var warnedAboutUpdateQuery = false;
var ObservableQuery = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var queryManager = _a.queryManager, options = _a.options;
        var _this = _super.call(this, function (observer) {
            return _this.onSubscribe(observer);
        }) || this;
        _this.observers = new Set();
        _this.subscriptions = new Set();
        _this.observer = {
            next: function (result) {
                if (_this.lastError || _this.isDifferentFromLastResult(result)) {
                    _this.updateLastResult(result);
                    Object(_utilities_observables_iteration_js__WEBPACK_IMPORTED_MODULE_10__["iterateObserversSafely"])(_this.observers, 'next', result);
                }
            },
            error: function (error) {
                _this.updateLastResult(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.lastResult), { errors: error.graphQLErrors, networkStatus: _networkStatus_js__WEBPACK_IMPORTED_MODULE_9__["NetworkStatus"].error, loading: false }));
                Object(_utilities_observables_iteration_js__WEBPACK_IMPORTED_MODULE_10__["iterateObserversSafely"])(_this.observers, 'error', _this.lastError = error);
            },
        };
        _this.isTornDown = false;
        _this.options = options;
        _this.queryId = queryManager.generateQueryId();
        var opDef = Object(_utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getOperationDefinition"])(options.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        _this.queryManager = queryManager;
        return _this;
    }
    Object.defineProperty(ObservableQuery.prototype, "variables", {
        get: function () {
            return this.options.variables;
        },
        enumerable: false,
        configurable: true
    });
    ObservableQuery.prototype.result = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var observer = {
                next: function (result) {
                    resolve(result);
                    _this.observers.delete(observer);
                    if (!_this.observers.size) {
                        _this.queryManager.removeQuery(_this.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: reject,
            };
            var subscription = _this.subscribe(observer);
        });
    };
    ObservableQuery.prototype.getCurrentResult = function () {
        var _a = this, lastResult = _a.lastResult, lastError = _a.lastError, fetchPolicy = _a.options.fetchPolicy;
        var isNetworkFetchPolicy = fetchPolicy === 'network-only' ||
            fetchPolicy === 'no-cache';
        var networkStatus = lastError ? _networkStatus_js__WEBPACK_IMPORTED_MODULE_9__["NetworkStatus"].error :
            lastResult ? lastResult.networkStatus :
                isNetworkFetchPolicy ? _networkStatus_js__WEBPACK_IMPORTED_MODULE_9__["NetworkStatus"].loading :
                    _networkStatus_js__WEBPACK_IMPORTED_MODULE_9__["NetworkStatus"].ready;
        var result = {
            data: !lastError && lastResult && lastResult.data || void 0,
            error: lastError,
            loading: Object(_networkStatus_js__WEBPACK_IMPORTED_MODULE_9__["isNetworkRequestInFlight"])(networkStatus),
            networkStatus: networkStatus,
        };
        if (this.isTornDown) {
            return result;
        }
        var _b = this.getCurrentQueryResult(), data = _b.data, partial = _b.partial;
        Object.assign(result, { data: data, partial: partial });
        var queryStoreValue = this.queryManager.getQueryStoreValue(this.queryId);
        if (queryStoreValue) {
            var networkStatus_1 = queryStoreValue.networkStatus;
            if (hasError(queryStoreValue, this.options.errorPolicy)) {
                return Object.assign(result, {
                    data: void 0,
                    networkStatus: networkStatus_1,
                    error: new _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_7__["ApolloError"]({
                        graphQLErrors: queryStoreValue.graphQLErrors,
                        networkError: queryStoreValue.networkError,
                    }),
                });
            }
            if (queryStoreValue.variables) {
                this.options.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options.variables), queryStoreValue.variables);
            }
            Object.assign(result, {
                loading: Object(_networkStatus_js__WEBPACK_IMPORTED_MODULE_9__["isNetworkRequestInFlight"])(networkStatus_1),
                networkStatus: networkStatus_1,
            });
            if (queryStoreValue.graphQLErrors && this.options.errorPolicy === 'all') {
                result.errors = queryStoreValue.graphQLErrors;
            }
        }
        if (partial) {
            this.resetLastResults();
        }
        else {
            this.updateLastResult(result);
        }
        return result;
    };
    ObservableQuery.prototype.isDifferentFromLastResult = function (newResult) {
        return !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_5__["equal"])(this.lastResultSnapshot, newResult);
    };
    ObservableQuery.prototype.getLastResult = function () {
        return this.lastResult;
    };
    ObservableQuery.prototype.getLastError = function () {
        return this.lastError;
    };
    ObservableQuery.prototype.resetLastResults = function () {
        delete this.lastResult;
        delete this.lastResultSnapshot;
        delete this.lastError;
        this.isTornDown = false;
    };
    ObservableQuery.prototype.resetQueryStoreErrors = function () {
        var queryStore = this.queryManager.getQueryStoreValue(this.queryId);
        if (queryStore) {
            queryStore.networkError = undefined;
            queryStore.graphQLErrors = [];
        }
    };
    ObservableQuery.prototype.refetch = function (variables) {
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === 'cache-only') {
            return Promise.reject( false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('cache-only fetchPolicy option should not be used together with query refetch.'));
        }
        if (fetchPolicy !== 'no-cache' &&
            fetchPolicy !== 'cache-and-network') {
            fetchPolicy = 'network-only';
        }
        if (variables && !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_5__["equal"])(this.options.variables, variables)) {
            this.options.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options.variables), variables);
        }
        return this.newReobserver(false).reobserve({
            fetchPolicy: fetchPolicy,
            variables: this.options.variables,
            pollInterval: 0,
        }, _networkStatus_js__WEBPACK_IMPORTED_MODULE_9__["NetworkStatus"].refetch);
    };
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
        var combinedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (fetchMoreOptions.query ? fetchMoreOptions : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options), fetchMoreOptions), { variables: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options.variables), fetchMoreOptions.variables) }))), { fetchPolicy: "no-cache" });
        var qid = this.queryManager.generateQueryId();
        if (combinedOptions.notifyOnNetworkStatusChange) {
            var currentResult = this.getCurrentResult();
            var queryInfo = this.queryManager.getQueryStoreValue(this.queryId);
            if (queryInfo) {
                queryInfo.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_9__["NetworkStatus"].fetchMore;
            }
            this.observer.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, currentResult), { loading: true, networkStatus: _networkStatus_js__WEBPACK_IMPORTED_MODULE_9__["NetworkStatus"].fetchMore }));
        }
        return this.queryManager.fetchQuery(qid, combinedOptions, _networkStatus_js__WEBPACK_IMPORTED_MODULE_9__["NetworkStatus"].fetchMore).then(function (fetchMoreResult) {
            var data = fetchMoreResult.data;
            var updateQuery = fetchMoreOptions.updateQuery;
            if (updateQuery) {
                if ( true &&
                    !warnedAboutUpdateQuery) {
                     false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("The updateQuery callback for fetchMore is deprecated, and will be removed\nin the next major version of Apollo Client.\n\nPlease convert updateQuery functions to field policies with appropriate\nread and merge functions, or use/adapt a helper function (such as\nconcatPagination, offsetLimitPagination, or relayStylePagination) from\n@apollo/client/utilities.\n\nThe field policy system handles pagination more effectively than a\nhand-written updateQuery function, and you only need to define the policy\nonce, rather than every time you call fetchMore.");
                    warnedAboutUpdateQuery = true;
                }
                _this.updateQuery(function (previous) { return updateQuery(previous, {
                    fetchMoreResult: data,
                    variables: combinedOptions.variables,
                }); });
            }
            else {
                _this.queryManager.cache.writeQuery({
                    query: combinedOptions.query,
                    variables: combinedOptions.variables,
                    data: data,
                });
            }
            return fetchMoreResult;
        }).finally(function () {
            _this.queryManager.stopQuery(qid);
            _this.reobserve();
        });
    };
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var subscription = this.queryManager
            .startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
            context: options.context,
        })
            .subscribe({
            next: function (subscriptionData) {
                var updateQuery = options.updateQuery;
                if (updateQuery) {
                    _this.updateQuery(function (previous, _a) {
                        var variables = _a.variables;
                        return updateQuery(previous, {
                            subscriptionData: subscriptionData,
                            variables: variables,
                        });
                    });
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].error('Unhandled GraphQL subscription error', err);
            },
        });
        this.subscriptions.add(subscription);
        return function () {
            if (_this.subscriptions.delete(subscription)) {
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (newOptions) {
        return this.reobserve(newOptions);
    };
    ObservableQuery.prototype.setVariables = function (variables) {
        if (Object(_wry_equality__WEBPACK_IMPORTED_MODULE_5__["equal"])(this.variables, variables)) {
            return this.observers.size
                ? this.result()
                : Promise.resolve();
        }
        this.options.variables = variables;
        if (!this.observers.size) {
            return Promise.resolve();
        }
        var _a = this.options.fetchPolicy, fetchPolicy = _a === void 0 ? 'cache-first' : _a;
        if (fetchPolicy !== 'cache-first' &&
            fetchPolicy !== 'no-cache' &&
            fetchPolicy !== 'network-only') {
            fetchPolicy = 'cache-and-network';
        }
        return this.reobserve({
            fetchPolicy: fetchPolicy,
            variables: variables,
        }, _networkStatus_js__WEBPACK_IMPORTED_MODULE_9__["NetworkStatus"].setVariables);
    };
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var queryManager = this.queryManager;
        var previousResult = this.getCurrentQueryResult(false).data;
        var newResult = mapFn(previousResult, {
            variables: this.variables,
        });
        if (newResult) {
            queryManager.cache.writeQuery({
                query: this.options.query,
                data: newResult,
                variables: this.variables,
            });
            queryManager.broadcastQueries();
        }
    };
    ObservableQuery.prototype.getCurrentQueryResult = function (optimistic) {
        var _a, _b;
        if (optimistic === void 0) { optimistic = true; }
        var fetchPolicy = this.options.fetchPolicy;
        var lastData = (_a = this.lastResult) === null || _a === void 0 ? void 0 : _a.data;
        if (fetchPolicy === 'no-cache' ||
            fetchPolicy === 'network-only') {
            return {
                data: lastData,
                partial: false,
            };
        }
        var _c = this.queryManager.cache.diff({
            query: this.options.query,
            variables: this.variables,
            previousResult: (_b = this.lastResult) === null || _b === void 0 ? void 0 : _b.data,
            returnPartialData: true,
            optimistic: optimistic,
        }), result = _c.result, complete = _c.complete;
        if (lastData &&
            !this.lastError &&
            this.queryManager.transform(this.options.query).hasForcedResolvers) {
            result = lastData;
        }
        return {
            data: (complete || this.options.returnPartialData) ? result : void 0,
            partial: !complete,
        };
    };
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        this.getReobserver().updateOptions({ pollInterval: pollInterval });
    };
    ObservableQuery.prototype.stopPolling = function () {
        if (this.reobserver) {
            this.reobserver.updateOptions({ pollInterval: 0 });
        }
    };
    ObservableQuery.prototype.updateLastResult = function (newResult) {
        var previousResult = this.lastResult;
        this.lastResult = newResult;
        this.lastResultSnapshot = this.queryManager.assumeImmutableResults
            ? newResult
            : Object(_utilities_common_cloneDeep_js__WEBPACK_IMPORTED_MODULE_8__["cloneDeep"])(newResult);
        if (!Object(_utilities_common_arrays_js__WEBPACK_IMPORTED_MODULE_6__["isNonEmptyArray"])(newResult.errors)) {
            delete this.lastError;
        }
        return previousResult;
    };
    ObservableQuery.prototype.onSubscribe = function (observer) {
        var _this = this;
        if (observer === this.observer) {
            return function () { };
        }
        try {
            var subObserver = observer._subscription._observer;
            if (subObserver && !subObserver.error) {
                subObserver.error = defaultSubscriptionObserverErrorCallback;
            }
        }
        catch (_a) { }
        var first = !this.observers.size;
        this.observers.add(observer);
        if (this.lastError) {
            observer.error && observer.error(this.lastError);
        }
        else if (this.lastResult) {
            observer.next && observer.next(this.lastResult);
        }
        if (first) {
            this.reobserve().catch(function (_) {
            });
        }
        return function () {
            if (_this.observers.delete(observer) && !_this.observers.size) {
                _this.tearDownQuery();
            }
        };
    };
    ObservableQuery.prototype.getReobserver = function () {
        return this.reobserver || (this.reobserver = this.newReobserver(true));
    };
    ObservableQuery.prototype.newReobserver = function (shareOptions) {
        var _this = this;
        var _a = this, queryManager = _a.queryManager, queryId = _a.queryId;
        queryManager.setObservableQuery(this);
        return new _Reobserver_js__WEBPACK_IMPORTED_MODULE_11__["Reobserver"](this.observer, shareOptions ? this.options : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options), function (currentOptions, newNetworkStatus) {
            queryManager.setObservableQuery(_this);
            return queryManager.fetchQueryObservable(queryId, currentOptions, newNetworkStatus);
        }, !queryManager.ssrMode && (function () { return !queryManager.checkInFlight(queryId); }));
    };
    ObservableQuery.prototype.reobserve = function (newOptions, newNetworkStatus) {
        this.isTornDown = false;
        return this.getReobserver().reobserve(newOptions, newNetworkStatus);
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        var queryManager = this.queryManager;
        if (this.reobserver) {
            this.reobserver.stop();
            delete this.reobserver;
        }
        this.isTornDown = true;
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptions.clear();
        queryManager.stopQuery(this.queryId);
        this.observers.clear();
    };
    return ObservableQuery;
}(zen_observable__WEBPACK_IMPORTED_MODULE_2___default.a));
function defaultSubscriptionObserverErrorCallback(error) {
     false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].error('Unhandled error', error.message, error.stack);
}


//# sourceMappingURL=ObservableQuery.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/core/QueryInfo.js":
/*!*******************************************************!*\
  !*** ./node_modules/@apollo/client/core/QueryInfo.js ***!
  \*******************************************************/
/*! exports provided: QueryInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryInfo", function() { return QueryInfo; });
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _utilities_common_errorHandling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/common/errorHandling.js */ "./node_modules/@apollo/client/utilities/common/errorHandling.js");
/* harmony import */ var _utilities_common_arrays_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/common/arrays.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");





var QueryInfo = (function () {
    function QueryInfo(cache) {
        this.cache = cache;
        this.listeners = new Set();
        this.document = null;
        this.lastRequestId = 1;
        this.subscriptions = new Set();
        this.dirty = false;
        this.diff = null;
        this.observableQuery = null;
    }
    QueryInfo.prototype.init = function (query) {
        var networkStatus = query.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading;
        if (this.variables &&
            this.networkStatus !== _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading &&
            !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_0__["equal"])(this.variables, query.variables)) {
            networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].setVariables;
        }
        Object.assign(this, {
            document: query.document,
            variables: query.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: networkStatus,
        });
        if (query.observableQuery) {
            this.setObservableQuery(query.observableQuery);
        }
        if (query.lastRequestId) {
            this.lastRequestId = query.lastRequestId;
        }
        return this;
    };
    QueryInfo.prototype.setDirty = function () {
        var _this = this;
        if (!this.dirty) {
            this.dirty = true;
            if (!this.notifyTimeout) {
                this.notifyTimeout = setTimeout(function () { return _this.notify(); }, 0);
            }
        }
        return this;
    };
    QueryInfo.prototype.setDiff = function (diff) {
        var oldDiff = this.diff;
        this.diff = diff;
        if (!this.dirty && (diff === null || diff === void 0 ? void 0 : diff.result) !== (oldDiff === null || oldDiff === void 0 ? void 0 : oldDiff.result)) {
            this.setDirty();
        }
    };
    QueryInfo.prototype.setObservableQuery = function (oq) {
        if (oq === this.observableQuery)
            return;
        if (this.oqListener) {
            this.listeners.delete(this.oqListener);
        }
        this.observableQuery = oq;
        if (oq) {
            this.listeners.add(this.oqListener = function () { return oq.reobserve(); });
        }
        else {
            delete this.oqListener;
        }
    };
    QueryInfo.prototype.notify = function () {
        var _this = this;
        if (this.notifyTimeout) {
            clearTimeout(this.notifyTimeout);
            this.notifyTimeout = void 0;
        }
        if (this.shouldNotify()) {
            this.listeners.forEach(function (listener) { return listener(_this); });
        }
        this.dirty = false;
    };
    QueryInfo.prototype.shouldNotify = function () {
        if (!this.dirty || !this.listeners.size) {
            return false;
        }
        if (Object(_networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["isNetworkRequestInFlight"])(this.networkStatus) &&
            this.observableQuery) {
            var fetchPolicy = this.observableQuery.options.fetchPolicy;
            if (fetchPolicy !== "cache-only" &&
                fetchPolicy !== "cache-and-network") {
                return false;
            }
        }
        return true;
    };
    QueryInfo.prototype.stop = function () {
        this.cancel();
        delete this.cancel;
        this.variables =
            this.networkStatus =
                this.networkError =
                    this.graphQLErrors =
                        this.lastWatch =
                            this.lastWrittenResult =
                                this.lastWrittenVars = void 0;
        var oq = this.observableQuery;
        if (oq)
            oq.stopPolling();
    };
    QueryInfo.prototype.cancel = function () { };
    QueryInfo.prototype.updateWatch = function (variables) {
        var _this = this;
        if (!this.lastWatch ||
            this.lastWatch.query !== this.document ||
            !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_0__["equal"])(variables, this.lastWatch.variables)) {
            this.cancel();
            this.cancel = this.cache.watch(this.lastWatch = {
                query: this.document,
                variables: variables,
                optimistic: true,
                callback: function (diff) { return _this.setDiff(diff); },
            });
        }
        return this;
    };
    QueryInfo.prototype.markResult = function (result, options, allowCacheWrite) {
        var _this = this;
        this.graphQLErrors = Object(_utilities_common_arrays_js__WEBPACK_IMPORTED_MODULE_2__["isNonEmptyArray"])(result.errors) ? result.errors : [];
        if (options.fetchPolicy === 'no-cache') {
            this.diff = { result: result.data, complete: true };
        }
        else if (allowCacheWrite) {
            var ignoreErrors = options.errorPolicy === 'ignore' ||
                options.errorPolicy === 'all';
            var writeWithErrors = !Object(_utilities_common_errorHandling_js__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(result);
            if (!writeWithErrors && ignoreErrors && result.data) {
                writeWithErrors = true;
            }
            if (writeWithErrors) {
                this.cache.performTransaction(function (cache) {
                    if (Object(_wry_equality__WEBPACK_IMPORTED_MODULE_0__["equal"])(result, _this.lastWrittenResult) &&
                        Object(_wry_equality__WEBPACK_IMPORTED_MODULE_0__["equal"])(options.variables, _this.lastWrittenVars)) {
                        if (_this.diff && _this.diff.complete) {
                            result.data = _this.diff.result;
                            return;
                        }
                    }
                    else {
                        cache.writeQuery({
                            query: _this.document,
                            data: result.data,
                            variables: options.variables,
                        });
                        _this.lastWrittenResult = result;
                        _this.lastWrittenVars = options.variables;
                    }
                    var diff = cache.diff({
                        query: _this.document,
                        variables: options.variables,
                        returnPartialData: true,
                        optimistic: true,
                    });
                    _this.diff = diff;
                    if (diff.complete) {
                        result.data = diff.result;
                    }
                });
            }
            else {
                this.lastWrittenResult = this.lastWrittenVars = void 0;
            }
        }
    };
    QueryInfo.prototype.markReady = function () {
        this.networkError = null;
        return this.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].ready;
    };
    QueryInfo.prototype.markError = function (error) {
        this.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].error;
        this.lastWrittenResult = this.lastWrittenVars = void 0;
        if (error.graphQLErrors) {
            this.graphQLErrors = error.graphQLErrors;
        }
        if (error.networkError) {
            this.networkError = error.networkError;
        }
        return error;
    };
    return QueryInfo;
}());


//# sourceMappingURL=QueryInfo.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/core/QueryManager.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/core/QueryManager.js ***!
  \**********************************************************/
/*! exports provided: QueryManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryManager", function() { return QueryManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");
/* harmony import */ var _utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/graphql/getFromAST.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _link_core_execute_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../link/core/execute.js */ "./node_modules/@apollo/client/link/core/execute.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _utilities_graphql_directives_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/graphql/directives.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony import */ var _utilities_common_errorHandling_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/common/errorHandling.js */ "./node_modules/@apollo/client/utilities/common/errorHandling.js");
/* harmony import */ var _utilities_graphql_transform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/graphql/transform.js */ "./node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony import */ var _utilities_common_canUse_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/common/canUse.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony import */ var _utilities_common_arrays_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utilities/common/arrays.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony import */ var _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../errors/ApolloError.js */ "./node_modules/@apollo/client/errors/ApolloError.js");
/* harmony import */ var _data_mutations_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../data/mutations.js */ "./node_modules/@apollo/client/data/mutations.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ObservableQuery.js */ "./node_modules/@apollo/client/core/ObservableQuery.js");
/* harmony import */ var _LocalState_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LocalState.js */ "./node_modules/@apollo/client/core/LocalState.js");
/* harmony import */ var _utilities_observables_asyncMap_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utilities/observables/asyncMap.js */ "./node_modules/@apollo/client/utilities/observables/asyncMap.js");
/* harmony import */ var _utilities_observables_Concast_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utilities/observables/Concast.js */ "./node_modules/@apollo/client/utilities/observables/Concast.js");
/* harmony import */ var _QueryInfo_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./QueryInfo.js */ "./node_modules/@apollo/client/core/QueryInfo.js");





















var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = (function () {
    function QueryManager(_a) {
        var cache = _a.cache, link = _a.link, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, _c = _a.onBroadcast, onBroadcast = _c === void 0 ? function () { return undefined; } : _c, _d = _a.ssrMode, ssrMode = _d === void 0 ? false : _d, _e = _a.clientAwareness, clientAwareness = _e === void 0 ? {} : _e, localState = _a.localState, assumeImmutableResults = _a.assumeImmutableResults;
        this.mutationStore = new _data_mutations_js__WEBPACK_IMPORTED_MODULE_13__["MutationStore"]();
        this.clientAwareness = {};
        this.queries = new Map();
        this.fetchCancelFns = new Map();
        this.transformCache = new (_utilities_common_canUse_js__WEBPACK_IMPORTED_MODULE_10__["canUseWeakMap"] ? WeakMap : Map)();
        this.queryIdCounter = 1;
        this.requestIdCounter = 1;
        this.mutationIdCounter = 1;
        this.inFlightLinkObservables = new Map();
        this.cache = cache;
        this.link = link;
        this.queryDeduplication = queryDeduplication;
        this.onBroadcast = onBroadcast;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new _LocalState_js__WEBPACK_IMPORTED_MODULE_16__["LocalState"]({ cache: cache });
        this.ssrMode = ssrMode;
        this.assumeImmutableResults = !!assumeImmutableResults;
    }
    QueryManager.prototype.stop = function () {
        var _this = this;
        this.queries.forEach(function (_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.cancelPendingFetches( false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('QueryManager stopped while query was in flight'));
    };
    QueryManager.prototype.cancelPendingFetches = function (error) {
        this.fetchCancelFns.forEach(function (cancel) { return cancel(error); });
        this.fetchCancelFns.clear();
    };
    QueryManager.prototype.mutate = function (_a) {
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueriesByName = _a.updateQueries, _b = _a.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, updateWithProxyFn = _a.update, _d = _a.errorPolicy, errorPolicy = _d === void 0 ? 'none' : _d, fetchPolicy = _a.fetchPolicy, _e = _a.context, context = _e === void 0 ? {} : _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var mutationId, generateUpdateQueriesInfo, optimistic_1, self;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_f) {
                switch (_f.label) {
                    case 0:
                         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.');
                         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!fetchPolicy || fetchPolicy === 'no-cache', "Mutations only support a 'no-cache' fetchPolicy. If you don't want to disable the cache, remove your fetchPolicy setting to proceed with the default mutation behavior.");
                        mutationId = this.generateMutationId();
                        mutation = this.transform(mutation).document;
                        variables = this.getVariables(mutation, variables);
                        if (!this.transform(mutation).hasClientExports) return [3, 2];
                        return [4, this.localState.addExportedVariables(mutation, variables, context)];
                    case 1:
                        variables = _f.sent();
                        _f.label = 2;
                    case 2:
                        generateUpdateQueriesInfo = function () {
                            var ret = {};
                            if (updateQueriesByName) {
                                _this.queries.forEach(function (_a, queryId) {
                                    var observableQuery = _a.observableQuery;
                                    if (observableQuery) {
                                        var queryName = observableQuery.queryName;
                                        if (queryName &&
                                            hasOwnProperty.call(updateQueriesByName, queryName)) {
                                            ret[queryId] = {
                                                updater: updateQueriesByName[queryName],
                                                queryInfo: _this.queries.get(queryId),
                                            };
                                        }
                                    }
                                });
                            }
                            return ret;
                        };
                        this.mutationStore.initMutation(mutationId, mutation, variables);
                        if (optimisticResponse) {
                            optimistic_1 = typeof optimisticResponse === 'function'
                                ? optimisticResponse(variables)
                                : optimisticResponse;
                            this.cache.recordOptimisticTransaction(function (cache) {
                                try {
                                    markMutationResult({
                                        mutationId: mutationId,
                                        result: { data: optimistic_1 },
                                        document: mutation,
                                        variables: variables,
                                        queryUpdatersById: generateUpdateQueriesInfo(),
                                        update: updateWithProxyFn,
                                    }, cache);
                                }
                                catch (error) {
                                     false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].error(error);
                                }
                            }, mutationId);
                        }
                        this.broadcastQueries();
                        self = this;
                        return [2, new Promise(function (resolve, reject) {
                                var storeResult;
                                var error;
                                self.getObservableFromLink(mutation, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { optimisticResponse: optimisticResponse }), variables, false).subscribe({
                                    next: function (result) {
                                        if (Object(_utilities_common_errorHandling_js__WEBPACK_IMPORTED_MODULE_8__["graphQLResultHasError"])(result) && errorPolicy === 'none') {
                                            error = new _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_12__["ApolloError"]({
                                                graphQLErrors: result.errors,
                                            });
                                            return;
                                        }
                                        self.mutationStore.markMutationResult(mutationId);
                                        if (fetchPolicy !== 'no-cache') {
                                            try {
                                                markMutationResult({
                                                    mutationId: mutationId,
                                                    result: result,
                                                    document: mutation,
                                                    variables: variables,
                                                    queryUpdatersById: generateUpdateQueriesInfo(),
                                                    update: updateWithProxyFn,
                                                }, self.cache);
                                            }
                                            catch (e) {
                                                error = new _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_12__["ApolloError"]({
                                                    networkError: e,
                                                });
                                                return;
                                            }
                                        }
                                        storeResult = result;
                                    },
                                    error: function (err) {
                                        self.mutationStore.markMutationError(mutationId, err);
                                        if (optimisticResponse) {
                                            self.cache.removeOptimistic(mutationId);
                                        }
                                        self.broadcastQueries();
                                        reject(new _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_12__["ApolloError"]({
                                            networkError: err,
                                        }));
                                    },
                                    complete: function () {
                                        if (error) {
                                            self.mutationStore.markMutationError(mutationId, error);
                                        }
                                        if (optimisticResponse) {
                                            self.cache.removeOptimistic(mutationId);
                                        }
                                        self.broadcastQueries();
                                        if (error) {
                                            reject(error);
                                            return;
                                        }
                                        if (typeof refetchQueries === 'function') {
                                            refetchQueries = refetchQueries(storeResult);
                                        }
                                        var refetchQueryPromises = [];
                                        if (Object(_utilities_common_arrays_js__WEBPACK_IMPORTED_MODULE_11__["isNonEmptyArray"])(refetchQueries)) {
                                            refetchQueries.forEach(function (refetchQuery) {
                                                if (typeof refetchQuery === 'string') {
                                                    self.queries.forEach(function (_a) {
                                                        var observableQuery = _a.observableQuery;
                                                        if (observableQuery &&
                                                            observableQuery.queryName === refetchQuery) {
                                                            refetchQueryPromises.push(observableQuery.refetch());
                                                        }
                                                    });
                                                }
                                                else {
                                                    var queryOptions = {
                                                        query: refetchQuery.query,
                                                        variables: refetchQuery.variables,
                                                        fetchPolicy: 'network-only',
                                                    };
                                                    if (refetchQuery.context) {
                                                        queryOptions.context = refetchQuery.context;
                                                    }
                                                    refetchQueryPromises.push(self.query(queryOptions));
                                                }
                                            });
                                        }
                                        Promise.all(awaitRefetchQueries ? refetchQueryPromises : []).then(function () {
                                            if (errorPolicy === 'ignore' &&
                                                storeResult &&
                                                Object(_utilities_common_errorHandling_js__WEBPACK_IMPORTED_MODULE_8__["graphQLResultHasError"])(storeResult)) {
                                                delete storeResult.errors;
                                            }
                                            resolve(storeResult);
                                        });
                                    },
                                });
                            })];
                }
            });
        });
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, networkStatus) {
        return this.fetchQueryObservable(queryId, options, networkStatus).promise;
    };
    QueryManager.prototype.getQueryStore = function () {
        var store = Object.create(null);
        this.queries.forEach(function (info, queryId) {
            store[queryId] = {
                variables: info.variables,
                networkStatus: info.networkStatus,
                networkError: info.networkError,
                graphQLErrors: info.graphQLErrors,
            };
        });
        return store;
    };
    QueryManager.prototype.getQueryStoreValue = function (queryId) {
        return queryId ? this.queries.get(queryId) : undefined;
    };
    QueryManager.prototype.transform = function (document) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document)) {
            var transformed = this.cache.transformDocument(document);
            var forLink = Object(_utilities_graphql_transform_js__WEBPACK_IMPORTED_MODULE_9__["removeConnectionDirectiveFromDocument"])(this.cache.transformForLink(transformed));
            var clientQuery = this.localState.clientQuery(transformed);
            var serverQuery = forLink && this.localState.serverQuery(forLink);
            var cacheEntry_1 = {
                document: transformed,
                hasClientExports: Object(_utilities_graphql_directives_js__WEBPACK_IMPORTED_MODULE_7__["hasClientExports"])(transformed),
                hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
                clientQuery: clientQuery,
                serverQuery: serverQuery,
                defaultVars: Object(_utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getDefaultValues"])(Object(_utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getOperationDefinition"])(transformed)),
            };
            var add = function (doc) {
                if (doc && !transformCache.has(doc)) {
                    transformCache.set(doc, cacheEntry_1);
                }
            };
            add(document);
            add(transformed);
            add(clientQuery);
            add(serverQuery);
        }
        return transformCache.get(document);
    };
    QueryManager.prototype.getVariables = function (document, variables) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.transform(document).defaultVars), variables);
    };
    QueryManager.prototype.watchQuery = function (options) {
        options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { variables: this.getVariables(options.query, options.variables) });
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
            options.notifyOnNetworkStatusChange = false;
        }
        var observable = new _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_15__["ObservableQuery"]({
            queryManager: this,
            options: options,
        });
        this.getQuery(observable.queryId).init({
            document: options.query,
            observableQuery: observable,
            variables: options.variables,
        });
        return observable;
    };
    QueryManager.prototype.query = function (options) {
        var _this = this;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(options.query, 'query option is required. You must specify your GraphQL document ' +
            'in the query option.');
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.');
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.');
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!options.pollInterval, 'pollInterval option only supported on watchQuery.');
        var queryId = this.generateQueryId();
        return this.fetchQuery(queryId, options).finally(function () { return _this.stopQuery(queryId); });
    };
    QueryManager.prototype.generateQueryId = function () {
        return String(this.queryIdCounter++);
    };
    QueryManager.prototype.generateRequestId = function () {
        return this.requestIdCounter++;
    };
    QueryManager.prototype.generateMutationId = function () {
        return String(this.mutationIdCounter++);
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo)
            queryInfo.stop();
    };
    QueryManager.prototype.addQueryListener = function (queryId, listener) {
        this.getQuery(queryId).listeners.add(listener);
    };
    QueryManager.prototype.clearStore = function () {
        this.cancelPendingFetches( false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('Store reset while query was in flight (not completed in link chain)'));
        this.queries.forEach(function (queryInfo) {
            if (queryInfo.observableQuery) {
                queryInfo.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_14__["NetworkStatus"].loading;
            }
            else {
                queryInfo.stop();
            }
        });
        this.mutationStore.reset();
        return this.cache.reset();
    };
    QueryManager.prototype.resetStore = function () {
        var _this = this;
        return this.clearStore().then(function () {
            return _this.reFetchObservableQueries();
        });
    };
    QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
        var _this = this;
        if (includeStandby === void 0) { includeStandby = false; }
        var observableQueryPromises = [];
        this.queries.forEach(function (_a, queryId) {
            var observableQuery = _a.observableQuery;
            if (observableQuery) {
                var fetchPolicy = observableQuery.options.fetchPolicy;
                observableQuery.resetLastResults();
                if (fetchPolicy !== 'cache-only' &&
                    (includeStandby || fetchPolicy !== 'standby')) {
                    observableQueryPromises.push(observableQuery.refetch());
                }
                _this.getQuery(queryId).setDiff(null);
            }
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.setObservableQuery = function (observableQuery) {
        this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
    };
    QueryManager.prototype.startGraphQLSubscription = function (_a) {
        var _this = this;
        var query = _a.query, fetchPolicy = _a.fetchPolicy, variables = _a.variables, _b = _a.context, context = _b === void 0 ? {} : _b;
        query = this.transform(query).document;
        variables = this.getVariables(query, variables);
        var makeObservable = function (variables) {
            return _this.getObservableFromLink(query, context, variables, false).map(function (result) {
                if (!fetchPolicy || fetchPolicy !== 'no-cache') {
                    if (!Object(_utilities_common_errorHandling_js__WEBPACK_IMPORTED_MODULE_8__["graphQLResultHasError"])(result)) {
                        _this.cache.write({
                            query: query,
                            result: result.data,
                            dataId: 'ROOT_SUBSCRIPTION',
                            variables: variables,
                        });
                    }
                    _this.broadcastQueries();
                }
                if (Object(_utilities_common_errorHandling_js__WEBPACK_IMPORTED_MODULE_8__["graphQLResultHasError"])(result)) {
                    throw new _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_12__["ApolloError"]({
                        graphQLErrors: result.errors,
                    });
                }
                return result;
            });
        };
        if (this.transform(query).hasClientExports) {
            var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
            return new zen_observable__WEBPACK_IMPORTED_MODULE_2___default.a(function (observer) {
                var sub = null;
                observablePromise_1.then(function (observable) { return sub = observable.subscribe(observer); }, observer.error);
                return function () { return sub && sub.unsubscribe(); };
            });
        }
        return makeObservable(variables);
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        this.fetchCancelFns.delete(queryId);
        this.getQuery(queryId).subscriptions.forEach(function (x) { return x.unsubscribe(); });
        this.queries.delete(queryId);
    };
    QueryManager.prototype.broadcastQueries = function () {
        this.onBroadcast();
        this.queries.forEach(function (info) { return info.notify(); });
    };
    QueryManager.prototype.getLocalState = function () {
        return this.localState;
    };
    QueryManager.prototype.getObservableFromLink = function (query, context, variables, deduplication) {
        var _this = this;
        if (deduplication === void 0) { deduplication = this.queryDeduplication; }
        var observable;
        var serverQuery = this.transform(query).serverQuery;
        if (serverQuery) {
            var _a = this, inFlightLinkObservables_1 = _a.inFlightLinkObservables, link = _a.link;
            var operation = {
                query: serverQuery,
                variables: variables,
                operationName: Object(_utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getOperationName"])(serverQuery) || void 0,
                context: this.prepareContext(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { forceFetch: !deduplication })),
            };
            context = operation.context;
            if (deduplication) {
                var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
                inFlightLinkObservables_1.set(serverQuery, byVariables_1);
                var varJson_1 = JSON.stringify(variables);
                observable = byVariables_1.get(varJson_1);
                if (!observable) {
                    var concast = new _utilities_observables_Concast_js__WEBPACK_IMPORTED_MODULE_18__["Concast"]([
                        Object(_link_core_execute_js__WEBPACK_IMPORTED_MODULE_5__["execute"])(link, operation)
                    ]);
                    byVariables_1.set(varJson_1, observable = concast);
                    concast.cleanup(function () {
                        if (byVariables_1.delete(varJson_1) &&
                            byVariables_1.size < 1) {
                            inFlightLinkObservables_1.delete(serverQuery);
                        }
                    });
                }
            }
            else {
                observable = new _utilities_observables_Concast_js__WEBPACK_IMPORTED_MODULE_18__["Concast"]([
                    Object(_link_core_execute_js__WEBPACK_IMPORTED_MODULE_5__["execute"])(link, operation)
                ]);
            }
        }
        else {
            observable = new _utilities_observables_Concast_js__WEBPACK_IMPORTED_MODULE_18__["Concast"]([
                zen_observable__WEBPACK_IMPORTED_MODULE_2___default.a.of({ data: {} })
            ]);
            context = this.prepareContext(context);
        }
        var clientQuery = this.transform(query).clientQuery;
        if (clientQuery) {
            observable = Object(_utilities_observables_asyncMap_js__WEBPACK_IMPORTED_MODULE_17__["asyncMap"])(observable, function (result) {
                return _this.localState.runResolvers({
                    document: clientQuery,
                    remoteResult: result,
                    context: context,
                    variables: variables,
                });
            });
        }
        return observable;
    };
    QueryManager.prototype.getResultsFromLink = function (queryInfo, allowCacheWrite, options) {
        var lastRequestId = queryInfo.lastRequestId;
        return Object(_utilities_observables_asyncMap_js__WEBPACK_IMPORTED_MODULE_17__["asyncMap"])(this.getObservableFromLink(queryInfo.document, options.context, options.variables), function (result) {
            var hasErrors = Object(_utilities_common_arrays_js__WEBPACK_IMPORTED_MODULE_11__["isNonEmptyArray"])(result.errors);
            if (lastRequestId >= queryInfo.lastRequestId) {
                if (hasErrors && options.errorPolicy === "none") {
                    throw queryInfo.markError(new _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_12__["ApolloError"]({
                        graphQLErrors: result.errors,
                    }));
                }
                queryInfo.markResult(result, options, allowCacheWrite);
                queryInfo.markReady();
            }
            var aqr = {
                data: result.data,
                loading: false,
                networkStatus: queryInfo.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_14__["NetworkStatus"].ready,
            };
            if (hasErrors && options.errorPolicy !== "ignore") {
                aqr.errors = result.errors;
            }
            return aqr;
        }, function (networkError) {
            var error = Object(_errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_12__["isApolloError"])(networkError)
                ? networkError
                : new _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_12__["ApolloError"]({ networkError: networkError });
            if (lastRequestId >= queryInfo.lastRequestId) {
                queryInfo.markError(error);
            }
            throw error;
        });
    };
    QueryManager.prototype.fetchQueryObservable = function (queryId, options, networkStatus) {
        var _this = this;
        if (networkStatus === void 0) { networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_14__["NetworkStatus"].loading; }
        var query = this.transform(options.query).document;
        var variables = this.getVariables(query, options.variables);
        var queryInfo = this.getQuery(queryId);
        var oldNetworkStatus = queryInfo.networkStatus;
        var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, _b = options.errorPolicy, errorPolicy = _b === void 0 ? "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
        if (fetchPolicy === "cache-and-network" ||
            fetchPolicy === "network-only") {
            options.fetchPolicy = "cache-first";
        }
        var mightUseNetwork = fetchPolicy === "cache-first" ||
            fetchPolicy === "cache-and-network" ||
            fetchPolicy === "network-only" ||
            fetchPolicy === "no-cache";
        if (mightUseNetwork &&
            notifyOnNetworkStatusChange &&
            typeof oldNetworkStatus === "number" &&
            oldNetworkStatus !== networkStatus &&
            Object(_networkStatus_js__WEBPACK_IMPORTED_MODULE_14__["isNetworkRequestInFlight"])(networkStatus)) {
            if (fetchPolicy !== "cache-first") {
                fetchPolicy = "cache-and-network";
            }
            returnPartialData = true;
        }
        var normalized = Object.assign({}, options, {
            query: query,
            variables: variables,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
            returnPartialData: returnPartialData,
            notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
            context: context,
        });
        var fromVariables = function (variables) {
            normalized.variables = variables;
            return _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
        };
        this.fetchCancelFns.set(queryId, function (reason) {
            Promise.resolve().then(function () { return concast.cancel(reason); });
        });
        var concast = new _utilities_observables_Concast_js__WEBPACK_IMPORTED_MODULE_18__["Concast"](this.transform(normalized.query).hasClientExports
            ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables)
            : fromVariables(normalized.variables));
        concast.cleanup(function () { return _this.fetchCancelFns.delete(queryId); });
        return concast;
    };
    QueryManager.prototype.fetchQueryByPolicy = function (queryInfo, options, networkStatus) {
        var _this = this;
        var query = options.query, variables = options.variables, fetchPolicy = options.fetchPolicy, errorPolicy = options.errorPolicy, returnPartialData = options.returnPartialData, context = options.context;
        queryInfo.init({
            document: query,
            variables: variables,
            lastRequestId: this.generateRequestId(),
            networkStatus: networkStatus,
        }).updateWatch(variables);
        var readCache = function () { return _this.cache.diff({
            query: query,
            variables: variables,
            returnPartialData: true,
            optimistic: true,
        }); };
        var resultsFromCache = function (diff, networkStatus) {
            if (networkStatus === void 0) { networkStatus = queryInfo.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_14__["NetworkStatus"].loading; }
            var data = diff.result;
            if ( true &&
                Object(_utilities_common_arrays_js__WEBPACK_IMPORTED_MODULE_11__["isNonEmptyArray"])(diff.missing) &&
                !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_6__["equal"])(data, {})) {
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Missing cache result fields: " + diff.missing.map(function (m) { return m.path.join('.'); }).join(', '), diff.missing);
            }
            var fromData = function (data) { return zen_observable__WEBPACK_IMPORTED_MODULE_2___default.a.of({
                data: data,
                loading: Object(_networkStatus_js__WEBPACK_IMPORTED_MODULE_14__["isNetworkRequestInFlight"])(networkStatus),
                networkStatus: networkStatus,
            }); };
            if (_this.transform(query).hasForcedResolvers) {
                return _this.localState.runResolvers({
                    document: query,
                    remoteResult: { data: data },
                    context: context,
                    variables: variables,
                    onlyRunForcedResolvers: true,
                }).then(function (resolved) { return fromData(resolved.data); });
            }
            return fromData(data);
        };
        var resultsFromLink = function (allowCacheWrite) {
            return _this.getResultsFromLink(queryInfo, allowCacheWrite, {
                variables: variables,
                context: context,
                fetchPolicy: fetchPolicy,
                errorPolicy: errorPolicy,
            });
        };
        switch (fetchPolicy) {
            default:
            case "cache-first": {
                var diff = readCache();
                if (diff.complete) {
                    return [
                        resultsFromCache(diff, queryInfo.markReady()),
                    ];
                }
                if (returnPartialData) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(true),
                    ];
                }
                return [
                    resultsFromLink(true),
                ];
            }
            case "cache-and-network": {
                var diff = readCache();
                if (diff.complete || returnPartialData) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(true),
                    ];
                }
                return [
                    resultsFromLink(true),
                ];
            }
            case "cache-only":
                return [
                    resultsFromCache(readCache(), queryInfo.markReady()),
                ];
            case "network-only":
                return [resultsFromLink(true)];
            case "no-cache":
                return [resultsFromLink(false)];
            case "standby":
                return [];
        }
    };
    QueryManager.prototype.getQuery = function (queryId) {
        if (queryId && !this.queries.has(queryId)) {
            this.queries.set(queryId, new _QueryInfo_js__WEBPACK_IMPORTED_MODULE_19__["QueryInfo"](this.cache));
        }
        return this.queries.get(queryId);
    };
    QueryManager.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var newContext = this.localState.prepareContext(context);
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, newContext), { clientAwareness: this.clientAwareness });
    };
    QueryManager.prototype.checkInFlight = function (queryId) {
        var query = this.getQueryStoreValue(queryId);
        return (!!query &&
            !!query.networkStatus &&
            query.networkStatus !== _networkStatus_js__WEBPACK_IMPORTED_MODULE_14__["NetworkStatus"].ready &&
            query.networkStatus !== _networkStatus_js__WEBPACK_IMPORTED_MODULE_14__["NetworkStatus"].error);
    };
    return QueryManager;
}());
function markMutationResult(mutation, cache) {
    if (!Object(_utilities_common_errorHandling_js__WEBPACK_IMPORTED_MODULE_8__["graphQLResultHasError"])(mutation.result)) {
        var cacheWrites_1 = [{
                result: mutation.result.data,
                dataId: 'ROOT_MUTATION',
                query: mutation.document,
                variables: mutation.variables,
            }];
        var queryUpdatersById_1 = mutation.queryUpdatersById;
        if (queryUpdatersById_1) {
            Object.keys(queryUpdatersById_1).forEach(function (id) {
                var _a = queryUpdatersById_1[id], updater = _a.updater, _b = _a.queryInfo, document = _b.document, variables = _b.variables;
                var _c = cache.diff({
                    query: document,
                    variables: variables,
                    returnPartialData: true,
                    optimistic: false,
                }), currentQueryResult = _c.result, complete = _c.complete;
                if (complete && currentQueryResult) {
                    var nextQueryResult = updater(currentQueryResult, {
                        mutationResult: mutation.result,
                        queryName: Object(_utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getOperationName"])(document) || undefined,
                        queryVariables: variables,
                    });
                    if (nextQueryResult) {
                        cacheWrites_1.push({
                            result: nextQueryResult,
                            dataId: 'ROOT_QUERY',
                            query: document,
                            variables: variables,
                        });
                    }
                }
            });
        }
        cache.performTransaction(function (c) {
            cacheWrites_1.forEach(function (write) { return c.write(write); });
            var update = mutation.update;
            if (update) {
                update(c, mutation.result);
            }
        }, null);
    }
}


//# sourceMappingURL=QueryManager.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/core/Reobserver.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/core/Reobserver.js ***!
  \********************************************************/
/*! exports provided: Reobserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reobserver", function() { return Reobserver; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");



var Reobserver = (function () {
    function Reobserver(observer, options, fetch, shouldFetch) {
        this.observer = observer;
        this.options = options;
        this.fetch = fetch;
        this.shouldFetch = shouldFetch;
    }
    Reobserver.prototype.reobserve = function (newOptions, newNetworkStatus) {
        if (newOptions) {
            this.updateOptions(newOptions);
        }
        else {
            this.updatePolling();
        }
        var concast = this.fetch(this.options, newNetworkStatus);
        if (this.concast) {
            this.concast.removeObserver(this.observer, true);
        }
        concast.addObserver(this.observer);
        return (this.concast = concast).promise;
    };
    Reobserver.prototype.updateOptions = function (newOptions) {
        var _this = this;
        Object.keys(newOptions).forEach(function (key) {
            var value = newOptions[key];
            if (value !== void 0) {
                _this.options[key] = value;
            }
        });
        this.updatePolling();
        return this;
    };
    Reobserver.prototype.stop = function () {
        if (this.concast) {
            this.concast.removeObserver(this.observer);
            delete this.concast;
        }
        if (this.pollingInfo) {
            clearTimeout(this.pollingInfo.timeout);
            this.options.pollInterval = 0;
            this.updatePolling();
        }
    };
    Reobserver.prototype.updatePolling = function () {
        var _this = this;
        var _a = this, pollingInfo = _a.pollingInfo, pollInterval = _a.options.pollInterval;
        if (!pollInterval) {
            if (pollingInfo) {
                clearTimeout(pollingInfo.timeout);
                delete this.pollingInfo;
            }
            return;
        }
        if (pollingInfo &&
            pollingInfo.interval === pollInterval) {
            return;
        }
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(pollInterval, 'Attempted to start a polling query without a polling interval.');
        if (this.shouldFetch === false) {
            return;
        }
        var info = pollingInfo || (this.pollingInfo = {});
        info.interval = pollInterval;
        var maybeFetch = function () {
            if (_this.pollingInfo) {
                if (_this.shouldFetch && _this.shouldFetch()) {
                    _this.reobserve({
                        fetchPolicy: "network-only",
                    }, _networkStatus_js__WEBPACK_IMPORTED_MODULE_1__["NetworkStatus"].poll).then(poll, poll);
                }
                else {
                    poll();
                }
            }
        };
        var poll = function () {
            var info = _this.pollingInfo;
            if (info) {
                clearTimeout(info.timeout);
                info.timeout = setTimeout(maybeFetch, info.interval);
            }
        };
        poll();
    };
    return Reobserver;
}());


//# sourceMappingURL=Reobserver.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/core/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@apollo/client/core/index.js ***!
  \***************************************************/
/*! exports provided: Observable, isReference, makeReference, ApolloLink, execute, ApolloError, isApolloError, NetworkStatus, ObservableQuery, makeVar, serializeFetchParameter, selectURI, throwServerError, parseAndCheckHttpResponse, checkFetcher, fallbackHttpConfig, selectHttpOptionsAndBody, createSignalIfSupported, rewriteURIForGET, fromError, createHttpLink, HttpLink, ApolloClient, ApolloCache, Cache, MissingFieldError, defaultDataIdFromObject, InMemoryCache, empty, from, split, concat, toPromise, fromPromise, gql, disableExperimentalFragmentVariables, disableFragmentWarnings, enableExperimentalFragmentVariables, resetCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableExperimentalFragmentVariables", function() { return disableExperimentalFragmentVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableFragmentWarnings", function() { return disableFragmentWarnings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableExperimentalFragmentVariables", function() { return enableExperimentalFragmentVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCaches", function() { return resetCaches; });
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return zen_observable__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");
/* harmony import */ var _utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/graphql/storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReference", function() { return _utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_2__["isReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeReference", function() { return _utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_2__["makeReference"]; });

/* harmony import */ var _link_core_ApolloLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../link/core/ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return _link_core_ApolloLink_js__WEBPACK_IMPORTED_MODULE_3__["ApolloLink"]; });

/* harmony import */ var _link_core_execute_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../link/core/execute.js */ "./node_modules/@apollo/client/link/core/execute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return _link_core_execute_js__WEBPACK_IMPORTED_MODULE_4__["execute"]; });

/* harmony import */ var _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../errors/ApolloError.js */ "./node_modules/@apollo/client/errors/ApolloError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_5__["isApolloError"]; });

/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return _networkStatus_js__WEBPACK_IMPORTED_MODULE_6__["NetworkStatus"]; });

/* harmony import */ var _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ObservableQuery.js */ "./node_modules/@apollo/client/core/ObservableQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_7__["ObservableQuery"]; });

/* harmony import */ var _cache_inmemory_reactiveVars_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cache/inmemory/reactiveVars.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeVar", function() { return _cache_inmemory_reactiveVars_js__WEBPACK_IMPORTED_MODULE_8__["makeVar"]; });

/* harmony import */ var _link_http_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../link/http/serializeFetchParameter.js */ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeFetchParameter", function() { return _link_http_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_9__["serializeFetchParameter"]; });

/* harmony import */ var _link_http_selectURI_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../link/http/selectURI.js */ "./node_modules/@apollo/client/link/http/selectURI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectURI", function() { return _link_http_selectURI_js__WEBPACK_IMPORTED_MODULE_10__["selectURI"]; });

/* harmony import */ var _link_utils_throwServerError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../link/utils/throwServerError.js */ "./node_modules/@apollo/client/link/utils/throwServerError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwServerError", function() { return _link_utils_throwServerError_js__WEBPACK_IMPORTED_MODULE_11__["throwServerError"]; });

/* harmony import */ var _link_http_parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../link/http/parseAndCheckHttpResponse.js */ "./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAndCheckHttpResponse", function() { return _link_http_parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_12__["parseAndCheckHttpResponse"]; });

/* harmony import */ var _link_http_checkFetcher_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../link/http/checkFetcher.js */ "./node_modules/@apollo/client/link/http/checkFetcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkFetcher", function() { return _link_http_checkFetcher_js__WEBPACK_IMPORTED_MODULE_13__["checkFetcher"]; });

/* harmony import */ var _link_http_selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../link/http/selectHttpOptionsAndBody.js */ "./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fallbackHttpConfig", function() { return _link_http_selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_14__["fallbackHttpConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHttpOptionsAndBody", function() { return _link_http_selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_14__["selectHttpOptionsAndBody"]; });

/* harmony import */ var _link_http_createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../link/http/createSignalIfSupported.js */ "./node_modules/@apollo/client/link/http/createSignalIfSupported.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSignalIfSupported", function() { return _link_http_createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_15__["createSignalIfSupported"]; });

/* harmony import */ var _link_http_rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../link/http/rewriteURIForGET.js */ "./node_modules/@apollo/client/link/http/rewriteURIForGET.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rewriteURIForGET", function() { return _link_http_rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_16__["rewriteURIForGET"]; });

/* harmony import */ var _link_utils_fromError_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../link/utils/fromError.js */ "./node_modules/@apollo/client/link/utils/fromError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return _link_utils_fromError_js__WEBPACK_IMPORTED_MODULE_17__["fromError"]; });

/* harmony import */ var _link_http_createHttpLink_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../link/http/createHttpLink.js */ "./node_modules/@apollo/client/link/http/createHttpLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHttpLink", function() { return _link_http_createHttpLink_js__WEBPACK_IMPORTED_MODULE_18__["createHttpLink"]; });

/* harmony import */ var _link_http_HttpLink_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../link/http/HttpLink.js */ "./node_modules/@apollo/client/link/http/HttpLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return _link_http_HttpLink_js__WEBPACK_IMPORTED_MODULE_19__["HttpLink"]; });

/* harmony import */ var _ApolloClient_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../ApolloClient.js */ "./node_modules/@apollo/client/ApolloClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return _ApolloClient_js__WEBPACK_IMPORTED_MODULE_20__["ApolloClient"]; });

/* harmony import */ var _cache_core_cache_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../cache/core/cache.js */ "./node_modules/@apollo/client/cache/core/cache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloCache", function() { return _cache_core_cache_js__WEBPACK_IMPORTED_MODULE_21__["ApolloCache"]; });

/* harmony import */ var _cache_core_types_Cache_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../cache/core/types/Cache.js */ "./node_modules/@apollo/client/cache/core/types/Cache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return _cache_core_types_Cache_js__WEBPACK_IMPORTED_MODULE_22__["Cache"]; });

/* harmony import */ var _cache_core_types_common_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../cache/core/types/common.js */ "./node_modules/@apollo/client/cache/core/types/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingFieldError", function() { return _cache_core_types_common_js__WEBPACK_IMPORTED_MODULE_23__["MissingFieldError"]; });

/* harmony import */ var _cache_inmemory_policies_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../cache/inmemory/policies.js */ "./node_modules/@apollo/client/cache/inmemory/policies.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return _cache_inmemory_policies_js__WEBPACK_IMPORTED_MODULE_24__["defaultDataIdFromObject"]; });

/* harmony import */ var _cache_inmemory_inMemoryCache_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../cache/inmemory/inMemoryCache.js */ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return _cache_inmemory_inMemoryCache_js__WEBPACK_IMPORTED_MODULE_25__["InMemoryCache"]; });

/* harmony import */ var _link_core_empty_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../link/core/empty.js */ "./node_modules/@apollo/client/link/core/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _link_core_empty_js__WEBPACK_IMPORTED_MODULE_26__["empty"]; });

/* harmony import */ var _link_core_from_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../link/core/from.js */ "./node_modules/@apollo/client/link/core/from.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _link_core_from_js__WEBPACK_IMPORTED_MODULE_27__["from"]; });

/* harmony import */ var _link_core_split_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../link/core/split.js */ "./node_modules/@apollo/client/link/core/split.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return _link_core_split_js__WEBPACK_IMPORTED_MODULE_28__["split"]; });

/* harmony import */ var _link_core_concat_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../link/core/concat.js */ "./node_modules/@apollo/client/link/core/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _link_core_concat_js__WEBPACK_IMPORTED_MODULE_29__["concat"]; });

/* harmony import */ var _link_utils_toPromise_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../link/utils/toPromise.js */ "./node_modules/@apollo/client/link/utils/toPromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return _link_utils_toPromise_js__WEBPACK_IMPORTED_MODULE_30__["toPromise"]; });

/* harmony import */ var _link_utils_fromPromise_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../link/utils/fromPromise.js */ "./node_modules/@apollo/client/link/utils/fromPromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return _link_utils_fromPromise_js__WEBPACK_IMPORTED_MODULE_31__["fromPromise"]; });

/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_32__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "gql", function() { return graphql_tag__WEBPACK_IMPORTED_MODULE_32___default.a; });



































var resetCaches = graphql_tag__WEBPACK_IMPORTED_MODULE_32___default.a.resetCaches, disableFragmentWarnings = graphql_tag__WEBPACK_IMPORTED_MODULE_32___default.a.disableFragmentWarnings, enableExperimentalFragmentVariables = graphql_tag__WEBPACK_IMPORTED_MODULE_32___default.a.enableExperimentalFragmentVariables, disableExperimentalFragmentVariables = graphql_tag__WEBPACK_IMPORTED_MODULE_32___default.a.disableExperimentalFragmentVariables;


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/core/networkStatus.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/core/networkStatus.js ***!
  \***********************************************************/
/*! exports provided: NetworkStatus, isNetworkRequestInFlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return NetworkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNetworkRequestInFlight", function() { return isNetworkRequestInFlight; });
var NetworkStatus;
(function (NetworkStatus) {
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus ? networkStatus < 7 : false;
}


//# sourceMappingURL=networkStatus.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/data/mutations.js":
/*!*******************************************************!*\
  !*** ./node_modules/@apollo/client/data/mutations.js ***!
  \*******************************************************/
/*! exports provided: MutationStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationStore", function() { return MutationStore; });
var MutationStore = (function () {
    function MutationStore() {
        this.store = {};
    }
    MutationStore.prototype.getStore = function () {
        return this.store;
    };
    MutationStore.prototype.get = function (mutationId) {
        return this.store[mutationId];
    };
    MutationStore.prototype.initMutation = function (mutationId, mutation, variables) {
        this.store[mutationId] = {
            mutation: mutation,
            variables: variables || {},
            loading: true,
            error: null,
        };
    };
    MutationStore.prototype.markMutationError = function (mutationId, error) {
        var mutation = this.store[mutationId];
        if (mutation) {
            mutation.loading = false;
            mutation.error = error;
        }
    };
    MutationStore.prototype.markMutationResult = function (mutationId) {
        var mutation = this.store[mutationId];
        if (mutation) {
            mutation.loading = false;
            mutation.error = null;
        }
    };
    MutationStore.prototype.reset = function () {
        this.store = {};
    };
    return MutationStore;
}());


//# sourceMappingURL=mutations.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/errors/ApolloError.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/errors/ApolloError.js ***!
  \***********************************************************/
/*! exports provided: ApolloError, isApolloError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return ApolloError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return isApolloError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_common_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/common/arrays.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");



function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function (err) {
    var message = '';
    if (Object(_utilities_common_arrays_js__WEBPACK_IMPORTED_MODULE_1__["isNonEmptyArray"])(err.graphQLErrors)) {
        err.graphQLErrors.forEach(function (graphQLError) {
            var errorMessage = graphQLError
                ? graphQLError.message
                : 'Error message not found.';
            message += errorMessage + "\n";
        });
    }
    if (err.networkError) {
        message += err.networkError.message + "\n";
    }
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApolloError, _super);
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.networkError = networkError || null;
        _this.message = errorMessage || generateErrorMessage(_this);
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError.prototype;
        return _this;
    }
    return ApolloError;
}(Error));


//# sourceMappingURL=ApolloError.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@apollo/client/index.js ***!
  \**********************************************/
/*! exports provided: Observable, isReference, makeReference, ApolloLink, execute, ApolloError, isApolloError, NetworkStatus, ObservableQuery, makeVar, serializeFetchParameter, selectURI, throwServerError, parseAndCheckHttpResponse, checkFetcher, fallbackHttpConfig, selectHttpOptionsAndBody, createSignalIfSupported, rewriteURIForGET, fromError, createHttpLink, HttpLink, ApolloClient, ApolloCache, Cache, MissingFieldError, defaultDataIdFromObject, InMemoryCache, empty, from, split, concat, toPromise, fromPromise, gql, disableExperimentalFragmentVariables, disableFragmentWarnings, enableExperimentalFragmentVariables, resetCaches, getApolloContext, resetApolloContext, ApolloProvider, ApolloConsumer, DocumentType, operationName, parser, useQuery, useLazyQuery, useMutation, useSubscription, useApolloClient, RenderPromises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return zen_observable__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/graphql/storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReference", function() { return _utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__["isReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeReference", function() { return _utilities_graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__["makeReference"]; });

/* harmony import */ var _link_core_ApolloLink_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link/core/ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return _link_core_ApolloLink_js__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"]; });

/* harmony import */ var _link_core_execute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link/core/execute.js */ "./node_modules/@apollo/client/link/core/execute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return _link_core_execute_js__WEBPACK_IMPORTED_MODULE_3__["execute"]; });

/* harmony import */ var _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errors/ApolloError.js */ "./node_modules/@apollo/client/errors/ApolloError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_4__["ApolloError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_4__["isApolloError"]; });

/* harmony import */ var _core_networkStatus_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return _core_networkStatus_js__WEBPACK_IMPORTED_MODULE_5__["NetworkStatus"]; });

/* harmony import */ var _core_ObservableQuery_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/ObservableQuery.js */ "./node_modules/@apollo/client/core/ObservableQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return _core_ObservableQuery_js__WEBPACK_IMPORTED_MODULE_6__["ObservableQuery"]; });

/* harmony import */ var _cache_inmemory_reactiveVars_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cache/inmemory/reactiveVars.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeVar", function() { return _cache_inmemory_reactiveVars_js__WEBPACK_IMPORTED_MODULE_7__["makeVar"]; });

/* harmony import */ var _link_http_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./link/http/serializeFetchParameter.js */ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeFetchParameter", function() { return _link_http_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_8__["serializeFetchParameter"]; });

/* harmony import */ var _link_http_selectURI_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./link/http/selectURI.js */ "./node_modules/@apollo/client/link/http/selectURI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectURI", function() { return _link_http_selectURI_js__WEBPACK_IMPORTED_MODULE_9__["selectURI"]; });

/* harmony import */ var _link_utils_throwServerError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./link/utils/throwServerError.js */ "./node_modules/@apollo/client/link/utils/throwServerError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwServerError", function() { return _link_utils_throwServerError_js__WEBPACK_IMPORTED_MODULE_10__["throwServerError"]; });

/* harmony import */ var _link_http_parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./link/http/parseAndCheckHttpResponse.js */ "./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAndCheckHttpResponse", function() { return _link_http_parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_11__["parseAndCheckHttpResponse"]; });

/* harmony import */ var _link_http_checkFetcher_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./link/http/checkFetcher.js */ "./node_modules/@apollo/client/link/http/checkFetcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkFetcher", function() { return _link_http_checkFetcher_js__WEBPACK_IMPORTED_MODULE_12__["checkFetcher"]; });

/* harmony import */ var _link_http_selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./link/http/selectHttpOptionsAndBody.js */ "./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fallbackHttpConfig", function() { return _link_http_selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_13__["fallbackHttpConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHttpOptionsAndBody", function() { return _link_http_selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_13__["selectHttpOptionsAndBody"]; });

/* harmony import */ var _link_http_createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./link/http/createSignalIfSupported.js */ "./node_modules/@apollo/client/link/http/createSignalIfSupported.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSignalIfSupported", function() { return _link_http_createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_14__["createSignalIfSupported"]; });

/* harmony import */ var _link_http_rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./link/http/rewriteURIForGET.js */ "./node_modules/@apollo/client/link/http/rewriteURIForGET.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rewriteURIForGET", function() { return _link_http_rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_15__["rewriteURIForGET"]; });

/* harmony import */ var _link_utils_fromError_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./link/utils/fromError.js */ "./node_modules/@apollo/client/link/utils/fromError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return _link_utils_fromError_js__WEBPACK_IMPORTED_MODULE_16__["fromError"]; });

/* harmony import */ var _link_http_createHttpLink_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./link/http/createHttpLink.js */ "./node_modules/@apollo/client/link/http/createHttpLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHttpLink", function() { return _link_http_createHttpLink_js__WEBPACK_IMPORTED_MODULE_17__["createHttpLink"]; });

/* harmony import */ var _link_http_HttpLink_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./link/http/HttpLink.js */ "./node_modules/@apollo/client/link/http/HttpLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return _link_http_HttpLink_js__WEBPACK_IMPORTED_MODULE_18__["HttpLink"]; });

/* harmony import */ var _ApolloClient_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ApolloClient.js */ "./node_modules/@apollo/client/ApolloClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return _ApolloClient_js__WEBPACK_IMPORTED_MODULE_19__["ApolloClient"]; });

/* harmony import */ var _cache_core_cache_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cache/core/cache.js */ "./node_modules/@apollo/client/cache/core/cache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloCache", function() { return _cache_core_cache_js__WEBPACK_IMPORTED_MODULE_20__["ApolloCache"]; });

/* harmony import */ var _cache_core_types_Cache_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cache/core/types/Cache.js */ "./node_modules/@apollo/client/cache/core/types/Cache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return _cache_core_types_Cache_js__WEBPACK_IMPORTED_MODULE_21__["Cache"]; });

/* harmony import */ var _cache_core_types_common_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cache/core/types/common.js */ "./node_modules/@apollo/client/cache/core/types/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingFieldError", function() { return _cache_core_types_common_js__WEBPACK_IMPORTED_MODULE_22__["MissingFieldError"]; });

/* harmony import */ var _cache_inmemory_policies_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cache/inmemory/policies.js */ "./node_modules/@apollo/client/cache/inmemory/policies.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return _cache_inmemory_policies_js__WEBPACK_IMPORTED_MODULE_23__["defaultDataIdFromObject"]; });

/* harmony import */ var _cache_inmemory_inMemoryCache_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cache/inmemory/inMemoryCache.js */ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return _cache_inmemory_inMemoryCache_js__WEBPACK_IMPORTED_MODULE_24__["InMemoryCache"]; });

/* harmony import */ var _link_core_empty_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./link/core/empty.js */ "./node_modules/@apollo/client/link/core/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _link_core_empty_js__WEBPACK_IMPORTED_MODULE_25__["empty"]; });

/* harmony import */ var _link_core_from_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./link/core/from.js */ "./node_modules/@apollo/client/link/core/from.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _link_core_from_js__WEBPACK_IMPORTED_MODULE_26__["from"]; });

/* harmony import */ var _link_core_split_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./link/core/split.js */ "./node_modules/@apollo/client/link/core/split.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return _link_core_split_js__WEBPACK_IMPORTED_MODULE_27__["split"]; });

/* harmony import */ var _link_core_concat_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./link/core/concat.js */ "./node_modules/@apollo/client/link/core/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _link_core_concat_js__WEBPACK_IMPORTED_MODULE_28__["concat"]; });

/* harmony import */ var _link_utils_toPromise_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./link/utils/toPromise.js */ "./node_modules/@apollo/client/link/utils/toPromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return _link_utils_toPromise_js__WEBPACK_IMPORTED_MODULE_29__["toPromise"]; });

/* harmony import */ var _link_utils_fromPromise_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./link/utils/fromPromise.js */ "./node_modules/@apollo/client/link/utils/fromPromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return _link_utils_fromPromise_js__WEBPACK_IMPORTED_MODULE_30__["fromPromise"]; });

/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_31__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "gql", function() { return graphql_tag__WEBPACK_IMPORTED_MODULE_31___default.a; });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./core/index.js */ "./node_modules/@apollo/client/core/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableExperimentalFragmentVariables", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_32__["disableExperimentalFragmentVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableFragmentWarnings", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_32__["disableFragmentWarnings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableExperimentalFragmentVariables", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_32__["enableExperimentalFragmentVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetCaches", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_32__["resetCaches"]; });

/* harmony import */ var _react_context_ApolloContext_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./react/context/ApolloContext.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _react_context_ApolloContext_js__WEBPACK_IMPORTED_MODULE_33__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _react_context_ApolloContext_js__WEBPACK_IMPORTED_MODULE_33__["resetApolloContext"]; });

/* harmony import */ var _react_context_ApolloProvider_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./react/context/ApolloProvider.js */ "./node_modules/@apollo/client/react/context/ApolloProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _react_context_ApolloProvider_js__WEBPACK_IMPORTED_MODULE_34__["ApolloProvider"]; });

/* harmony import */ var _react_context_ApolloConsumer_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./react/context/ApolloConsumer.js */ "./node_modules/@apollo/client/react/context/ApolloConsumer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _react_context_ApolloConsumer_js__WEBPACK_IMPORTED_MODULE_35__["ApolloConsumer"]; });

/* harmony import */ var _react_parser_parser_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./react/parser/parser.js */ "./node_modules/@apollo/client/react/parser/parser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return _react_parser_parser_js__WEBPACK_IMPORTED_MODULE_36__["DocumentType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "operationName", function() { return _react_parser_parser_js__WEBPACK_IMPORTED_MODULE_36__["operationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return _react_parser_parser_js__WEBPACK_IMPORTED_MODULE_36__["parser"]; });

/* harmony import */ var _react_hooks_useQuery_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./react/hooks/useQuery.js */ "./node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _react_hooks_useQuery_js__WEBPACK_IMPORTED_MODULE_37__["useQuery"]; });

/* harmony import */ var _react_hooks_useLazyQuery_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./react/hooks/useLazyQuery.js */ "./node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLazyQuery", function() { return _react_hooks_useLazyQuery_js__WEBPACK_IMPORTED_MODULE_38__["useLazyQuery"]; });

/* harmony import */ var _react_hooks_useMutation_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./react/hooks/useMutation.js */ "./node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return _react_hooks_useMutation_js__WEBPACK_IMPORTED_MODULE_39__["useMutation"]; });

/* harmony import */ var _react_hooks_useSubscription_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./react/hooks/useSubscription.js */ "./node_modules/@apollo/client/react/hooks/useSubscription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return _react_hooks_useSubscription_js__WEBPACK_IMPORTED_MODULE_40__["useSubscription"]; });

/* harmony import */ var _react_hooks_useApolloClient_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./react/hooks/useApolloClient.js */ "./node_modules/@apollo/client/react/hooks/useApolloClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return _react_hooks_useApolloClient_js__WEBPACK_IMPORTED_MODULE_41__["useApolloClient"]; });

/* harmony import */ var _react_ssr_RenderPromises_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./react/ssr/RenderPromises.js */ "./node_modules/@apollo/client/react/ssr/RenderPromises.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderPromises", function() { return _react_ssr_RenderPromises_js__WEBPACK_IMPORTED_MODULE_42__["RenderPromises"]; });












































//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/core/ApolloLink.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/ApolloLink.js ***!
  \*************************************************************/
/*! exports provided: ApolloLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return ApolloLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");
/* harmony import */ var _utils_validateOperation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/validateOperation.js */ "./node_modules/@apollo/client/link/utils/validateOperation.js");
/* harmony import */ var _utils_createOperation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/createOperation.js */ "./node_modules/@apollo/client/link/utils/createOperation.js");
/* harmony import */ var _utils_transformOperation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/transformOperation.js */ "./node_modules/@apollo/client/link/utils/transformOperation.js");








function passthrough(op, forward) {
    return (forward ? forward(op) : zen_observable__WEBPACK_IMPORTED_MODULE_2___default.a.of());
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
    return link.request.length <= 1;
}
var LinkError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.empty = function () {
        return new ApolloLink(function () { return zen_observable__WEBPACK_IMPORTED_MODULE_2___default.a.of(); });
    };
    ApolloLink.from = function (links) {
        if (links.length === 0)
            return ApolloLink.empty();
        return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
    };
    ApolloLink.split = function (test, left, right) {
        var leftLink = toLink(left);
        var rightLink = toLink(right || new ApolloLink(passthrough));
        if (isTerminating(leftLink) && isTerminating(rightLink)) {
            return new ApolloLink(function (operation) {
                return test(operation)
                    ? leftLink.request(operation) || zen_observable__WEBPACK_IMPORTED_MODULE_2___default.a.of()
                    : rightLink.request(operation) || zen_observable__WEBPACK_IMPORTED_MODULE_2___default.a.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return test(operation)
                    ? leftLink.request(operation, forward) || zen_observable__WEBPACK_IMPORTED_MODULE_2___default.a.of()
                    : rightLink.request(operation, forward) || zen_observable__WEBPACK_IMPORTED_MODULE_2___default.a.of();
            });
        }
    };
    ApolloLink.execute = function (link, operation) {
        return (link.request(Object(_utils_createOperation_js__WEBPACK_IMPORTED_MODULE_5__["createOperation"])(operation.context, Object(_utils_transformOperation_js__WEBPACK_IMPORTED_MODULE_6__["transformOperation"])(Object(_utils_validateOperation_js__WEBPACK_IMPORTED_MODULE_4__["validateOperation"])(operation)))) || zen_observable__WEBPACK_IMPORTED_MODULE_2___default.a.of());
    };
    ApolloLink.concat = function (first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
             false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
            return firstLink;
        }
        var nextLink = toLink(second);
        if (isTerminating(nextLink)) {
            return new ApolloLink(function (operation) {
                return firstLink.request(operation, function (op) { return nextLink.request(op) || zen_observable__WEBPACK_IMPORTED_MODULE_2___default.a.of(); }) || zen_observable__WEBPACK_IMPORTED_MODULE_2___default.a.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return (firstLink.request(operation, function (op) {
                    return nextLink.request(op, forward) || zen_observable__WEBPACK_IMPORTED_MODULE_2___default.a.of();
                }) || zen_observable__WEBPACK_IMPORTED_MODULE_2___default.a.of());
            });
        }
    };
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(ApolloLink.split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return ApolloLink.concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('request is not implemented');
    };
    ApolloLink.prototype.onError = function (reason) {
        throw reason;
    };
    ApolloLink.prototype.setOnError = function (fn) {
        this.onError = fn;
        return this;
    };
    return ApolloLink;
}());


//# sourceMappingURL=ApolloLink.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/core/concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/concat.js ***!
  \*********************************************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");


var concat = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].concat;


//# sourceMappingURL=concat.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/core/empty.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/empty.js ***!
  \********************************************************/
/*! exports provided: empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");


var empty = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].empty;


//# sourceMappingURL=empty.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/core/execute.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/execute.js ***!
  \**********************************************************/
/*! exports provided: execute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");


var execute = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].execute;


//# sourceMappingURL=execute.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/core/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/from.js ***!
  \*******************************************************/
/*! exports provided: from */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");


var from = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].from;


//# sourceMappingURL=from.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/core/split.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/split.js ***!
  \********************************************************/
/*! exports provided: split */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");


var split = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].split;


//# sourceMappingURL=split.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/http/HttpLink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/HttpLink.js ***!
  \***********************************************************/
/*! exports provided: HttpLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return HttpLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_ApolloLink_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");
/* harmony import */ var _createHttpLink_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createHttpLink.js */ "./node_modules/@apollo/client/link/http/createHttpLink.js");




var HttpLink = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpLink, _super);
    function HttpLink(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, Object(_createHttpLink_js__WEBPACK_IMPORTED_MODULE_2__["createHttpLink"])(options).request) || this;
        _this.options = options;
        return _this;
    }
    return HttpLink;
}(_core_ApolloLink_js__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]));


//# sourceMappingURL=HttpLink.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/http/checkFetcher.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/checkFetcher.js ***!
  \***************************************************************/
/*! exports provided: checkFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFetcher", function() { return checkFetcher; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");


var checkFetcher = function (fetcher) {
    if (!fetcher && typeof fetch === 'undefined') {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ");
    }
};


//# sourceMappingURL=checkFetcher.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/http/createHttpLink.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/createHttpLink.js ***!
  \*****************************************************************/
/*! exports provided: createHttpLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHttpLink", function() { return createHttpLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");
/* harmony import */ var _core_ApolloLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");
/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serializeFetchParameter.js */ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js");
/* harmony import */ var _selectURI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectURI.js */ "./node_modules/@apollo/client/link/http/selectURI.js");
/* harmony import */ var _parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parseAndCheckHttpResponse.js */ "./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js");
/* harmony import */ var _checkFetcher_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkFetcher.js */ "./node_modules/@apollo/client/link/http/checkFetcher.js");
/* harmony import */ var _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selectHttpOptionsAndBody.js */ "./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js");
/* harmony import */ var _createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createSignalIfSupported.js */ "./node_modules/@apollo/client/link/http/createSignalIfSupported.js");
/* harmony import */ var _rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rewriteURIForGET.js */ "./node_modules/@apollo/client/link/http/rewriteURIForGET.js");
/* harmony import */ var _utils_fromError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/fromError.js */ "./node_modules/@apollo/client/link/utils/fromError.js");













var createHttpLink = function (linkOptions) {
    if (linkOptions === void 0) { linkOptions = {}; }
    var _a = linkOptions.uri, uri = _a === void 0 ? '/graphql' : _a, fetcher = linkOptions.fetch, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, requestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(linkOptions, ["uri", "fetch", "includeExtensions", "useGETForQueries"]);
    Object(_checkFetcher_js__WEBPACK_IMPORTED_MODULE_7__["checkFetcher"])(fetcher);
    if (!fetcher) {
        fetcher = fetch;
    }
    var linkConfig = {
        http: { includeExtensions: includeExtensions },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers,
    };
    return new _core_ApolloLink_js__WEBPACK_IMPORTED_MODULE_3__["ApolloLink"](function (operation) {
        var chosenURI = Object(_selectURI_js__WEBPACK_IMPORTED_MODULE_5__["selectURI"])(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
            var _a = context.clientAwareness, name_1 = _a.name, version = _a.version;
            if (name_1) {
                clientAwarenessHeaders['apollographql-client-name'] = name_1;
            }
            if (version) {
                clientAwarenessHeaders['apollographql-client-version'] = version;
            }
        }
        var contextHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, clientAwarenessHeaders), context.headers);
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: contextHeaders,
        };
        var _b = Object(_selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_8__["selectHttpOptionsAndBody"])(operation, _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_8__["fallbackHttpConfig"], linkConfig, contextConfig), options = _b.options, body = _b.body;
        var controller;
        if (!options.signal) {
            var _c = Object(_createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_9__["createSignalIfSupported"])(), _controller = _c.controller, signal = _c.signal;
            controller = _controller;
            if (controller)
                options.signal = signal;
        }
        var definitionIsMutation = function (d) {
            return d.kind === 'OperationDefinition' && d.operation === 'mutation';
        };
        if (useGETForQueries &&
            !operation.query.definitions.some(definitionIsMutation)) {
            options.method = 'GET';
        }
        if (options.method === 'GET') {
            var _d = Object(_rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_10__["rewriteURIForGET"])(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
            if (parseError) {
                return Object(_utils_fromError_js__WEBPACK_IMPORTED_MODULE_11__["fromError"])(parseError);
            }
            chosenURI = newURI;
        }
        else {
            try {
                options.body = Object(_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_4__["serializeFetchParameter"])(body, 'Payload');
            }
            catch (parseError) {
                return Object(_utils_fromError_js__WEBPACK_IMPORTED_MODULE_11__["fromError"])(parseError);
            }
        }
        return new zen_observable__WEBPACK_IMPORTED_MODULE_1___default.a(function (observer) {
            fetcher(chosenURI, options)
                .then(function (response) {
                operation.setContext({ response: response });
                return response;
            })
                .then(Object(_parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_6__["parseAndCheckHttpResponse"])(operation))
                .then(function (result) {
                observer.next(result);
                observer.complete();
                return result;
            })
                .catch(function (err) {
                if (err.name === 'AbortError')
                    return;
                if (err.result && err.result.errors && err.result.data) {
                    observer.next(err.result);
                }
                observer.error(err);
            });
            return function () {
                if (controller)
                    controller.abort();
            };
        });
    });
};


//# sourceMappingURL=createHttpLink.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/http/createSignalIfSupported.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/createSignalIfSupported.js ***!
  \**************************************************************************/
/*! exports provided: createSignalIfSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSignalIfSupported", function() { return createSignalIfSupported; });
var createSignalIfSupported = function () {
    if (typeof AbortController === 'undefined')
        return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller: controller, signal: signal };
};


//# sourceMappingURL=createSignalIfSupported.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js ***!
  \****************************************************************************/
/*! exports provided: parseAndCheckHttpResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAndCheckHttpResponse", function() { return parseAndCheckHttpResponse; });
/* harmony import */ var _utils_throwServerError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/throwServerError.js */ "./node_modules/@apollo/client/link/utils/throwServerError.js");


var hasOwnProperty = Object.prototype.hasOwnProperty;
function parseAndCheckHttpResponse(operations) {
    return function (response) { return response
        .text()
        .then(function (bodyText) {
        try {
            return JSON.parse(bodyText);
        }
        catch (err) {
            var parseError = err;
            parseError.name = 'ServerParseError';
            parseError.response = response;
            parseError.statusCode = response.status;
            parseError.bodyText = bodyText;
            throw parseError;
        }
    })
        .then(function (result) {
        if (response.status >= 300) {
            Object(_utils_throwServerError_js__WEBPACK_IMPORTED_MODULE_0__["throwServerError"])(response, result, "Response not successful: Received status code " + response.status);
        }
        if (!Array.isArray(result) &&
            !hasOwnProperty.call(result, 'data') &&
            !hasOwnProperty.call(result, 'errors')) {
            Object(_utils_throwServerError_js__WEBPACK_IMPORTED_MODULE_0__["throwServerError"])(response, result, "Server response was missing for query '" + (Array.isArray(operations)
                ? operations.map(function (op) { return op.operationName; })
                : operations.operationName) + "'.");
        }
        return result;
    }); };
}


//# sourceMappingURL=parseAndCheckHttpResponse.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/http/rewriteURIForGET.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/rewriteURIForGET.js ***!
  \*******************************************************************/
/*! exports provided: rewriteURIForGET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rewriteURIForGET", function() { return rewriteURIForGET; });
/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serializeFetchParameter.js */ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js");


function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function (key, value) {
        queryParams.push(key + "=" + encodeURIComponent(value));
    };
    if ('query' in body) {
        addQueryParam('query', body.query);
    }
    if (body.operationName) {
        addQueryParam('operationName', body.operationName);
    }
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = Object(_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__["serializeFetchParameter"])(body.variables, 'Variables map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('variables', serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = Object(_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__["serializeFetchParameter"])(body.extensions, 'Extensions map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('extensions', serializedExtensions);
    }
    var fragment = '', preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf('#');
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
    var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
    return { newURI: newURI };
}


//# sourceMappingURL=rewriteURIForGET.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js ***!
  \***************************************************************************/
/*! exports provided: fallbackHttpConfig, selectHttpOptionsAndBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackHttpConfig", function() { return fallbackHttpConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHttpOptionsAndBody", function() { return selectHttpOptionsAndBody; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql/language/printer */ "./node_modules/graphql/language/printer.mjs");



var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json',
};
var defaultOptions = {
    method: 'POST',
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions,
};
var selectHttpOptionsAndBody = function (operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fallbackConfig.options), { headers: fallbackConfig.headers, credentials: fallbackConfig.credentials });
    var http = fallbackConfig.http || {};
    configs.forEach(function (config) {
        options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), config.options), { headers: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.headers), config.headers) });
        if (config.credentials)
            options.credentials = config.credentials;
        http = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, http), config.http);
    });
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName: operationName, variables: variables };
    if (http.includeExtensions)
        body.extensions = extensions;
    if (http.includeQuery)
        body.query = Object(graphql_language_printer__WEBPACK_IMPORTED_MODULE_1__["print"])(query);
    return {
        options: options,
        body: body,
    };
};


//# sourceMappingURL=selectHttpOptionsAndBody.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/http/selectURI.js":
/*!************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/selectURI.js ***!
  \************************************************************/
/*! exports provided: selectURI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectURI", function() { return selectURI; });
var selectURI = function (operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) {
        return contextURI;
    }
    else if (typeof fallbackURI === 'function') {
        return fallbackURI(operation);
    }
    else {
        return fallbackURI || '/graphql';
    }
};


//# sourceMappingURL=selectURI.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/serializeFetchParameter.js ***!
  \**************************************************************************/
/*! exports provided: serializeFetchParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeFetchParameter", function() { return serializeFetchParameter; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");


var serializeFetchParameter = function (p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    }
    catch (e) {
        var parseError =  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]("Network request failed. " + label + " is not serializable: " + e.message);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};


//# sourceMappingURL=serializeFetchParameter.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/createOperation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/createOperation.js ***!
  \*******************************************************************/
/*! exports provided: createOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return createOperation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


function createOperation(starting, operation) {
    var context = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), next(context));
        }
        else {
            context = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), next);
        }
    };
    var getContext = function () { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    return operation;
}


//# sourceMappingURL=createOperation.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/fromError.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/fromError.js ***!
  \*************************************************************/
/*! exports provided: fromError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return fromError; });
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");



function fromError(errorValue) {
    return new zen_observable__WEBPACK_IMPORTED_MODULE_0___default.a(function (observer) {
        observer.error(errorValue);
    });
}


//# sourceMappingURL=fromError.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/fromPromise.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/fromPromise.js ***!
  \***************************************************************/
/*! exports provided: fromPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise; });
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");



function fromPromise(promise) {
    return new zen_observable__WEBPACK_IMPORTED_MODULE_0___default.a(function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}


//# sourceMappingURL=fromPromise.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/throwServerError.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/throwServerError.js ***!
  \********************************************************************/
/*! exports provided: throwServerError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwServerError", function() { return throwServerError; });
var throwServerError = function (response, result, message) {
    var error = new Error(message);
    error.name = 'ServerError';
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};


//# sourceMappingURL=throwServerError.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/toPromise.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/toPromise.js ***!
  \*************************************************************/
/*! exports provided: toPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return toPromise; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");


function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                     false || ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"].warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}


//# sourceMappingURL=toPromise.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/transformOperation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/transformOperation.js ***!
  \**********************************************************************/
/*! exports provided: transformOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformOperation", function() { return transformOperation; });
/* harmony import */ var _utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/graphql/getFromAST.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");


function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? Object(_utilities_graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_0__["getOperationName"])(transformedOperation.query) || undefined
                : '';
    }
    return transformedOperation;
}


//# sourceMappingURL=transformOperation.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/validateOperation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/validateOperation.js ***!
  \*********************************************************************/
/*! exports provided: validateOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateOperation", function() { return validateOperation; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");


function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]("illegal argument: " + key);
        }
    }
    return operation;
}


//# sourceMappingURL=validateOperation.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/context/ApolloConsumer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/ApolloConsumer.js ***!
  \*********************************************************************/
/*! exports provided: ApolloConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return ApolloConsumer; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApolloContext.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");




var ApolloConsumer = function (props) {
    var ApolloContext = Object(_ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__["getApolloContext"])();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ApolloContext.Consumer, null, function (context) {
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(context && context.client, 'Could not find "client" in the context of ApolloConsumer. ' +
            'Wrap the root component in an <ApolloProvider>.');
        return props.children(context.client);
    });
};


//# sourceMappingURL=ApolloConsumer.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/context/ApolloContext.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/ApolloContext.js ***!
  \********************************************************************/
/*! exports provided: getApolloContext, resetApolloContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return getApolloContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return resetApolloContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var contextSymbol = typeof Symbol === 'function' && Symbol.for ?
    Symbol.for('__APOLLO_CONTEXT__') :
    '__APOLLO_CONTEXT__';
function resetApolloContext() {
    Object.defineProperty(react__WEBPACK_IMPORTED_MODULE_0___default.a, contextSymbol, {
        value: react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({}),
        enumerable: false,
        configurable: true,
        writable: false,
    });
}
function getApolloContext() {
    if (!react__WEBPACK_IMPORTED_MODULE_0___default.a[contextSymbol]) {
        resetApolloContext();
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a[contextSymbol];
}


//# sourceMappingURL=ApolloContext.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/context/ApolloProvider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/ApolloProvider.js ***!
  \*********************************************************************/
/*! exports provided: ApolloProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return ApolloProvider; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApolloContext.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");




var ApolloProvider = function (_a) {
    var client = _a.client, children = _a.children;
    var ApolloContext = Object(_ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__["getApolloContext"])();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ApolloContext.Consumer, null, function (context) {
        if (context === void 0) { context = {}; }
        if (client && context.client !== client) {
            context = Object.assign({}, context, { client: client });
        }
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(context.client, 'ApolloProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.');
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ApolloContext.Provider, { value: context }, children));
    });
};


//# sourceMappingURL=ApolloProvider.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/data/MutationData.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/data/MutationData.js ***!
  \****************************************************************/
/*! exports provided: MutationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationData", function() { return MutationData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors/ApolloError.js */ "./node_modules/@apollo/client/errors/ApolloError.js");
/* harmony import */ var _parser_parser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parser/parser.js */ "./node_modules/@apollo/client/react/parser/parser.js");
/* harmony import */ var _OperationData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OperationData.js */ "./node_modules/@apollo/client/react/data/OperationData.js");






var MutationData = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MutationData, _super);
    function MutationData(_a) {
        var options = _a.options, context = _a.context, result = _a.result, setResult = _a.setResult;
        var _this = _super.call(this, options, context) || this;
        _this.runMutation = function (mutationFunctionOptions) {
            if (mutationFunctionOptions === void 0) { mutationFunctionOptions = {}; }
            _this.onMutationStart();
            var mutationId = _this.generateNewMutationId();
            return _this.mutate(mutationFunctionOptions)
                .then(function (response) {
                _this.onMutationCompleted(response, mutationId);
                return response;
            })
                .catch(function (error) {
                _this.onMutationError(error, mutationId);
                if (!_this.getOptions().onError)
                    throw error;
            });
        };
        _this.verifyDocumentType(options.mutation, _parser_parser_js__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].Mutation);
        _this.result = result;
        _this.setResult = setResult;
        _this.mostRecentMutationId = 0;
        return _this;
    }
    MutationData.prototype.execute = function (result) {
        this.isMounted = true;
        this.verifyDocumentType(this.getOptions().mutation, _parser_parser_js__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].Mutation);
        return [
            this.runMutation,
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), { client: this.refreshClient().client })
        ];
    };
    MutationData.prototype.afterExecute = function () {
        this.isMounted = true;
        return this.unmount.bind(this);
    };
    MutationData.prototype.cleanup = function () {
    };
    MutationData.prototype.mutate = function (mutationFunctionOptions) {
        return this.refreshClient().client.mutate(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (this.getOptions() || {})), (mutationFunctionOptions || {})));
    };
    MutationData.prototype.onMutationStart = function () {
        if (!this.result.loading && !this.getOptions().ignoreResults) {
            this.updateResult({
                loading: true,
                error: undefined,
                data: undefined,
                called: true
            });
        }
    };
    MutationData.prototype.onMutationCompleted = function (response, mutationId) {
        var _a = this.getOptions(), onCompleted = _a.onCompleted, ignoreResults = _a.ignoreResults;
        var data = response.data, errors = response.errors;
        var error = errors && errors.length > 0
            ? new _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_2__["ApolloError"]({ graphQLErrors: errors })
            : undefined;
        var callOncomplete = function () {
            return onCompleted ? onCompleted(data) : null;
        };
        if (this.isMostRecentMutation(mutationId) && !ignoreResults) {
            this.updateResult({
                called: true,
                loading: false,
                data: data,
                error: error
            });
        }
        callOncomplete();
    };
    MutationData.prototype.onMutationError = function (error, mutationId) {
        var onError = this.getOptions().onError;
        if (this.isMostRecentMutation(mutationId)) {
            this.updateResult({
                loading: false,
                error: error,
                data: undefined,
                called: true
            });
        }
        if (onError) {
            onError(error);
        }
    };
    MutationData.prototype.generateNewMutationId = function () {
        return ++this.mostRecentMutationId;
    };
    MutationData.prototype.isMostRecentMutation = function (mutationId) {
        return this.mostRecentMutationId === mutationId;
    };
    MutationData.prototype.updateResult = function (result) {
        if (this.isMounted &&
            (!this.previousResult || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(this.previousResult, result))) {
            this.setResult(result);
            this.previousResult = result;
        }
    };
    return MutationData;
}(_OperationData_js__WEBPACK_IMPORTED_MODULE_4__["OperationData"]));


//# sourceMappingURL=MutationData.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/data/OperationData.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/data/OperationData.js ***!
  \*****************************************************************/
/*! exports provided: OperationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationData", function() { return OperationData; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _parser_parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parser/parser.js */ "./node_modules/@apollo/client/react/parser/parser.js");




var OperationData = (function () {
    function OperationData(options, context) {
        this.isMounted = false;
        this.previousOptions = {};
        this.context = {};
        this.options = {};
        this.options = options || {};
        this.context = context || {};
    }
    OperationData.prototype.getOptions = function () {
        return this.options;
    };
    OperationData.prototype.setOptions = function (newOptions, storePrevious) {
        if (storePrevious === void 0) { storePrevious = false; }
        if (storePrevious && !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(this.options, newOptions)) {
            this.previousOptions = this.options;
        }
        this.options = newOptions;
    };
    OperationData.prototype.unmount = function () {
        this.isMounted = false;
    };
    OperationData.prototype.refreshClient = function () {
        var client = (this.options && this.options.client) ||
            (this.context && this.context.client);
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(!!client, 'Could not find "client" in the context or passed in as an option. ' +
            'Wrap the root component in an <ApolloProvider>, or pass an ' +
            'ApolloClient instance in via options.');
        var isNew = false;
        if (client !== this.client) {
            isNew = true;
            this.client = client;
            this.cleanup();
        }
        return {
            client: this.client,
            isNew: isNew
        };
    };
    OperationData.prototype.verifyDocumentType = function (document, type) {
        var operation = Object(_parser_parser_js__WEBPACK_IMPORTED_MODULE_2__["parser"])(document);
        var requiredOperationName = Object(_parser_parser_js__WEBPACK_IMPORTED_MODULE_2__["operationName"])(type);
        var usedOperationName = Object(_parser_parser_js__WEBPACK_IMPORTED_MODULE_2__["operationName"])(operation.type);
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(operation.type === type, "Running a " + requiredOperationName + " requires a graphql " +
            (requiredOperationName + ", but a " + usedOperationName + " was used instead."));
    };
    return OperationData;
}());


//# sourceMappingURL=OperationData.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/data/QueryData.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/react/data/QueryData.js ***!
  \*************************************************************/
/*! exports provided: QueryData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryData", function() { return QueryData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors/ApolloError.js */ "./node_modules/@apollo/client/errors/ApolloError.js");
/* harmony import */ var _core_networkStatus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _parser_parser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parser/parser.js */ "./node_modules/@apollo/client/react/parser/parser.js");
/* harmony import */ var _OperationData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OperationData.js */ "./node_modules/@apollo/client/react/data/OperationData.js");







var QueryData = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QueryData, _super);
    function QueryData(_a) {
        var options = _a.options, context = _a.context, onNewData = _a.onNewData;
        var _this = _super.call(this, options, context) || this;
        _this.previousData = {};
        _this.runLazy = false;
        _this.runLazyQuery = function (options) {
            _this.cleanup();
            _this.runLazy = true;
            _this.lazyOptions = options;
            _this.onNewData();
        };
        _this.getQueryResult = function () {
            var result = _this.observableQueryFields();
            var options = _this.getOptions();
            if (options.skip) {
                result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), { data: undefined, error: undefined, loading: false, called: true });
            }
            else if (_this.currentObservable) {
                var currentResult = _this.currentObservable.getCurrentResult();
                var data = currentResult.data, loading = currentResult.loading, partial = currentResult.partial, networkStatus = currentResult.networkStatus, errors = currentResult.errors;
                var error = currentResult.error;
                if (errors && errors.length > 0) {
                    error = new _errors_ApolloError_js__WEBPACK_IMPORTED_MODULE_2__["ApolloError"]({ graphQLErrors: errors });
                }
                result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), { data: data,
                    loading: loading,
                    networkStatus: networkStatus,
                    error: error, called: true });
                if (loading) ;
                else if (error) {
                    Object.assign(result, {
                        data: (_this.currentObservable.getLastResult() || {})
                            .data
                    });
                }
                else {
                    var fetchPolicy = _this.currentObservable.options.fetchPolicy;
                    var partialRefetch = options.partialRefetch;
                    if (partialRefetch &&
                        partial &&
                        (!data || Object.keys(data).length === 0) &&
                        fetchPolicy !== 'cache-only') {
                        Object.assign(result, {
                            loading: true,
                            networkStatus: _core_networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading
                        });
                        result.refetch();
                        return result;
                    }
                }
            }
            result.client = _this.client;
            _this.setOptions(options, true);
            _this.previousData.loading =
                _this.previousData.result && _this.previousData.result.loading || false;
            _this.previousData.result = result;
            _this.currentObservable && _this.currentObservable.resetQueryStoreErrors();
            return result;
        };
        _this.obsRefetch = function (variables) {
            return _this.currentObservable.refetch(variables);
        };
        _this.obsFetchMore = function (fetchMoreOptions) { return _this.currentObservable.fetchMore(fetchMoreOptions); };
        _this.obsUpdateQuery = function (mapFn) { return _this.currentObservable.updateQuery(mapFn); };
        _this.obsStartPolling = function (pollInterval) {
            var _a;
            (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.startPolling(pollInterval);
        };
        _this.obsStopPolling = function () {
            var _a;
            (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.stopPolling();
        };
        _this.obsSubscribeToMore = function (options) { return _this.currentObservable.subscribeToMore(options); };
        _this.onNewData = onNewData;
        return _this;
    }
    QueryData.prototype.execute = function () {
        this.refreshClient();
        var _a = this.getOptions(), skip = _a.skip, query = _a.query;
        if (skip || query !== this.previousData.query) {
            this.removeQuerySubscription();
            this.previousData.query = query;
        }
        this.updateObservableQuery();
        if (this.isMounted)
            this.startQuerySubscription();
        return this.getExecuteSsrResult() || this.getExecuteResult();
    };
    QueryData.prototype.executeLazy = function () {
        return !this.runLazy
            ? [
                this.runLazyQuery,
                {
                    loading: false,
                    networkStatus: _core_networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].ready,
                    called: false,
                    data: undefined
                }
            ]
            : [this.runLazyQuery, this.execute()];
    };
    QueryData.prototype.fetchData = function () {
        var _this = this;
        var options = this.getOptions();
        if (options.skip || options.ssr === false)
            return false;
        return new Promise(function (resolve) { return _this.startQuerySubscription(resolve); });
    };
    QueryData.prototype.afterExecute = function (_a) {
        var _b = (_a === void 0 ? {} : _a).lazy, lazy = _b === void 0 ? false : _b;
        this.isMounted = true;
        if (!lazy || this.runLazy) {
            this.handleErrorOrCompleted();
        }
        this.previousOptions = this.getOptions();
        return this.unmount.bind(this);
    };
    QueryData.prototype.cleanup = function () {
        this.removeQuerySubscription();
        delete this.currentObservable;
        delete this.previousData.result;
    };
    QueryData.prototype.getOptions = function () {
        var options = _super.prototype.getOptions.call(this);
        if (this.lazyOptions) {
            options.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.variables), this.lazyOptions.variables);
            options.context = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.context), this.lazyOptions.context);
        }
        if (this.runLazy) {
            delete options.skip;
        }
        return options;
    };
    QueryData.prototype.ssrInitiated = function () {
        return this.context && this.context.renderPromises;
    };
    QueryData.prototype.getExecuteResult = function () {
        var result = this.getQueryResult();
        this.startQuerySubscription();
        return result;
    };
    QueryData.prototype.getExecuteSsrResult = function () {
        var ssrDisabled = this.getOptions().ssr === false;
        var fetchDisabled = this.refreshClient().client.disableNetworkFetches;
        var ssrLoading = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ loading: true, networkStatus: _core_networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading, called: true, data: undefined, stale: false, client: this.client }, this.observableQueryFields());
        if (ssrDisabled && (this.ssrInitiated() || fetchDisabled)) {
            this.previousData.result = ssrLoading;
            return ssrLoading;
        }
        var result;
        if (this.ssrInitiated()) {
            result =
                this.context.renderPromises.addQueryPromise(this, this.getQueryResult) || ssrLoading;
        }
        return result;
    };
    QueryData.prototype.prepareObservableQueryOptions = function () {
        var options = this.getOptions();
        this.verifyDocumentType(options.query, _parser_parser_js__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].Query);
        var displayName = options.displayName || 'Query';
        if (this.ssrInitiated() &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options.fetchPolicy = 'cache-first';
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { displayName: displayName, context: options.context });
    };
    QueryData.prototype.initializeObservableQuery = function () {
        if (this.ssrInitiated()) {
            this.currentObservable = this.context.renderPromises.getSSRObservable(this.getOptions());
        }
        if (!this.currentObservable) {
            var observableQueryOptions = this.prepareObservableQueryOptions();
            this.previousData.observableQueryOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, observableQueryOptions), { children: null });
            this.currentObservable = this.refreshClient().client.watchQuery(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, observableQueryOptions));
            if (this.ssrInitiated()) {
                this.context.renderPromises.registerSSRObservable(this.currentObservable, observableQueryOptions);
            }
        }
    };
    QueryData.prototype.updateObservableQuery = function () {
        if (!this.currentObservable) {
            this.initializeObservableQuery();
            return;
        }
        var newObservableQueryOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.prepareObservableQueryOptions()), { children: null });
        if (!Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(newObservableQueryOptions, this.previousData.observableQueryOptions)) {
            this.previousData.observableQueryOptions = newObservableQueryOptions;
            this.currentObservable
                .setOptions(newObservableQueryOptions)
                .catch(function () { });
        }
    };
    QueryData.prototype.startQuerySubscription = function (onNewData) {
        var _this = this;
        if (onNewData === void 0) { onNewData = this.onNewData; }
        if (this.currentSubscription || this.getOptions().skip)
            return;
        this.currentSubscription = this.currentObservable.subscribe({
            next: function (_a) {
                var loading = _a.loading, networkStatus = _a.networkStatus, data = _a.data;
                var previousResult = _this.previousData.result;
                if (previousResult &&
                    previousResult.loading === loading &&
                    previousResult.networkStatus === networkStatus &&
                    Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(previousResult.data, data)) {
                    return;
                }
                onNewData();
            },
            error: function (error) {
                _this.resubscribeToQuery();
                if (!error.hasOwnProperty('graphQLErrors'))
                    throw error;
                var previousResult = _this.previousData.result;
                if ((previousResult && previousResult.loading) ||
                    !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(error, _this.previousData.error)) {
                    _this.previousData.error = error;
                    onNewData();
                }
            }
        });
    };
    QueryData.prototype.resubscribeToQuery = function () {
        this.removeQuerySubscription();
        var currentObservable = this.currentObservable;
        if (currentObservable) {
            var lastError = currentObservable.getLastError();
            var lastResult = currentObservable.getLastResult();
            currentObservable.resetLastResults();
            this.startQuerySubscription();
            Object.assign(currentObservable, {
                lastError: lastError,
                lastResult: lastResult
            });
        }
    };
    QueryData.prototype.handleErrorOrCompleted = function () {
        if (!this.currentObservable || !this.previousData.result)
            return;
        var _a = this.previousData.result, data = _a.data, loading = _a.loading, error = _a.error;
        if (!loading) {
            var _b = this.getOptions(), query = _b.query, variables = _b.variables, onCompleted = _b.onCompleted, onError = _b.onError, skip = _b.skip;
            if (this.previousOptions &&
                !this.previousData.loading &&
                Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(this.previousOptions.query, query) &&
                Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(this.previousOptions.variables, variables)) {
                return;
            }
            if (onCompleted && !error && !skip) {
                onCompleted(data);
            }
            else if (onError && error) {
                onError(error);
            }
        }
    };
    QueryData.prototype.removeQuerySubscription = function () {
        if (this.currentSubscription) {
            this.currentSubscription.unsubscribe();
            delete this.currentSubscription;
        }
    };
    QueryData.prototype.observableQueryFields = function () {
        var _a;
        return {
            variables: (_a = this.currentObservable) === null || _a === void 0 ? void 0 : _a.variables,
            refetch: this.obsRefetch,
            fetchMore: this.obsFetchMore,
            updateQuery: this.obsUpdateQuery,
            startPolling: this.obsStartPolling,
            stopPolling: this.obsStopPolling,
            subscribeToMore: this.obsSubscribeToMore
        };
    };
    return QueryData;
}(_OperationData_js__WEBPACK_IMPORTED_MODULE_5__["OperationData"]));


//# sourceMappingURL=QueryData.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/data/SubscriptionData.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/data/SubscriptionData.js ***!
  \********************************************************************/
/*! exports provided: SubscriptionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionData", function() { return SubscriptionData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _OperationData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperationData.js */ "./node_modules/@apollo/client/react/data/OperationData.js");




var SubscriptionData = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SubscriptionData, _super);
    function SubscriptionData(_a) {
        var options = _a.options, context = _a.context, setResult = _a.setResult;
        var _this = _super.call(this, options, context) || this;
        _this.currentObservable = {};
        _this.setResult = setResult;
        _this.initialize(options);
        return _this;
    }
    SubscriptionData.prototype.execute = function (result) {
        if (this.getOptions().skip === true) {
            this.cleanup();
            return {
                loading: false,
                error: undefined,
                data: undefined,
                variables: this.getOptions().variables
            };
        }
        var currentResult = result;
        if (this.refreshClient().isNew) {
            currentResult = this.getLoadingResult();
        }
        var shouldResubscribe = this.getOptions().shouldResubscribe;
        if (typeof shouldResubscribe === 'function') {
            shouldResubscribe = !!shouldResubscribe(this.getOptions());
        }
        if (shouldResubscribe !== false &&
            this.previousOptions &&
            Object.keys(this.previousOptions).length > 0 &&
            (this.previousOptions.subscription !== this.getOptions().subscription ||
                !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(this.previousOptions.variables, this.getOptions().variables) ||
                this.previousOptions.skip !== this.getOptions().skip)) {
            this.cleanup();
            currentResult = this.getLoadingResult();
        }
        this.initialize(this.getOptions());
        this.startSubscription();
        this.previousOptions = this.getOptions();
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, currentResult), { variables: this.getOptions().variables });
    };
    SubscriptionData.prototype.afterExecute = function () {
        this.isMounted = true;
    };
    SubscriptionData.prototype.cleanup = function () {
        this.endSubscription();
        delete this.currentObservable.query;
    };
    SubscriptionData.prototype.initialize = function (options) {
        if (this.currentObservable.query || this.getOptions().skip === true)
            return;
        this.currentObservable.query = this.refreshClient().client.subscribe({
            query: options.subscription,
            variables: options.variables,
            fetchPolicy: options.fetchPolicy
        });
    };
    SubscriptionData.prototype.startSubscription = function () {
        if (this.currentObservable.subscription)
            return;
        this.currentObservable.subscription = this.currentObservable.query.subscribe({
            next: this.updateCurrentData.bind(this),
            error: this.updateError.bind(this),
            complete: this.completeSubscription.bind(this)
        });
    };
    SubscriptionData.prototype.getLoadingResult = function () {
        return {
            loading: true,
            error: undefined,
            data: undefined
        };
    };
    SubscriptionData.prototype.updateResult = function (result) {
        if (this.isMounted) {
            this.setResult(result);
        }
    };
    SubscriptionData.prototype.updateCurrentData = function (result) {
        var onSubscriptionData = this.getOptions().onSubscriptionData;
        this.updateResult({
            data: result.data,
            loading: false,
            error: undefined
        });
        if (onSubscriptionData) {
            onSubscriptionData({
                client: this.refreshClient().client,
                subscriptionData: result
            });
        }
    };
    SubscriptionData.prototype.updateError = function (error) {
        this.updateResult({
            error: error,
            loading: false
        });
    };
    SubscriptionData.prototype.completeSubscription = function () {
        var onSubscriptionComplete = this.getOptions().onSubscriptionComplete;
        if (onSubscriptionComplete)
            onSubscriptionComplete();
        this.endSubscription();
    };
    SubscriptionData.prototype.endSubscription = function () {
        if (this.currentObservable.subscription) {
            this.currentObservable.subscription.unsubscribe();
            delete this.currentObservable.subscription;
        }
    };
    return SubscriptionData;
}(_OperationData_js__WEBPACK_IMPORTED_MODULE_2__["OperationData"]));


//# sourceMappingURL=SubscriptionData.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useApolloClient.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useApolloClient.js ***!
  \********************************************************************/
/*! exports provided: useApolloClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return useApolloClient; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ApolloContext.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");




function useApolloClient() {
    var client = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(Object(_context_ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__["getApolloContext"])()).client;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(client, 'No Apollo Client instance can be found. Please ensure that you ' +
        'have called `ApolloProvider` higher up in your tree.');
    return client;
}


//# sourceMappingURL=useApolloClient.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useLazyQuery.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useLazyQuery.js ***!
  \*****************************************************************/
/*! exports provided: useLazyQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLazyQuery", function() { return useLazyQuery; });
/* harmony import */ var _utils_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/useBaseQuery.js */ "./node_modules/@apollo/client/react/hooks/utils/useBaseQuery.js");


function useLazyQuery(query, options) {
    return Object(_utils_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__["useBaseQuery"])(query, options, true);
}


//# sourceMappingURL=useLazyQuery.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useMutation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useMutation.js ***!
  \****************************************************************/
/*! exports provided: useMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return useMutation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ApolloContext.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");
/* harmony import */ var _data_MutationData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/MutationData.js */ "./node_modules/@apollo/client/react/data/MutationData.js");





function useMutation(mutation, options) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Object(_context_ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__["getApolloContext"])());
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({ called: false, loading: false }), result = _a[0], setResult = _a[1];
    var updatedOptions = options ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { mutation: mutation }) : { mutation: mutation };
    var mutationDataRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
    function getMutationDataRef() {
        if (!mutationDataRef.current) {
            mutationDataRef.current = new _data_MutationData_js__WEBPACK_IMPORTED_MODULE_3__["MutationData"]({
                options: updatedOptions,
                context: context,
                result: result,
                setResult: setResult
            });
        }
        return mutationDataRef.current;
    }
    var mutationData = getMutationDataRef();
    mutationData.setOptions(updatedOptions);
    mutationData.context = context;
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return mutationData.afterExecute(); });
    return mutationData.execute(result);
}


//# sourceMappingURL=useMutation.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useQuery.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useQuery.js ***!
  \*************************************************************/
/*! exports provided: useQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return useQuery; });
/* harmony import */ var _utils_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/useBaseQuery.js */ "./node_modules/@apollo/client/react/hooks/utils/useBaseQuery.js");


function useQuery(query, options) {
    return Object(_utils_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__["useBaseQuery"])(query, options, false);
}


//# sourceMappingURL=useQuery.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useSubscription.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useSubscription.js ***!
  \********************************************************************/
/*! exports provided: useSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return useSubscription; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ApolloContext.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");
/* harmony import */ var _data_SubscriptionData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/SubscriptionData.js */ "./node_modules/@apollo/client/react/data/SubscriptionData.js");





function useSubscription(subscription, options) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Object(_context_ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__["getApolloContext"])());
    var updatedOptions = options
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { subscription: subscription }) : { subscription: subscription };
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
        loading: !updatedOptions.skip,
        error: undefined,
        data: undefined
    }), result = _a[0], setResult = _a[1];
    var subscriptionDataRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
    function getSubscriptionDataRef() {
        if (!subscriptionDataRef.current) {
            subscriptionDataRef.current = new _data_SubscriptionData_js__WEBPACK_IMPORTED_MODULE_3__["SubscriptionData"]({
                options: updatedOptions,
                context: context,
                setResult: setResult
            });
        }
        return subscriptionDataRef.current;
    }
    var subscriptionData = getSubscriptionDataRef();
    subscriptionData.setOptions(updatedOptions, true);
    subscriptionData.context = context;
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return subscriptionData.afterExecute(); });
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return subscriptionData.cleanup.bind(subscriptionData); }, []);
    return subscriptionData.execute(result);
}


//# sourceMappingURL=useSubscription.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/utils/useBaseQuery.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/utils/useBaseQuery.js ***!
  \***********************************************************************/
/*! exports provided: useBaseQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBaseQuery", function() { return useBaseQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/ApolloContext.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");
/* harmony import */ var _data_QueryData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/QueryData.js */ "./node_modules/@apollo/client/react/data/QueryData.js");
/* harmony import */ var _useDeepMemo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useDeepMemo.js */ "./node_modules/@apollo/client/react/hooks/utils/useDeepMemo.js");






function useBaseQuery(query, options, lazy) {
    if (lazy === void 0) { lazy = false; }
    var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Object(_context_ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__["getApolloContext"])());
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(function (x) { return x + 1; }, 0), tick = _a[0], forceUpdate = _a[1];
    var updatedOptions = options ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { query: query }) : { query: query };
    var queryDataRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
    var queryData = queryDataRef.current ||
        new _data_QueryData_js__WEBPACK_IMPORTED_MODULE_3__["QueryData"]({
            options: updatedOptions,
            context: context,
            onNewData: function () {
                if (!queryData.ssrInitiated()) {
                    Promise.resolve().then(forceUpdate);
                }
                else {
                    forceUpdate();
                }
            }
        });
    queryData.setOptions(updatedOptions);
    queryData.context = context;
    if (queryData.ssrInitiated() && !queryDataRef.current) {
        queryDataRef.current = queryData;
    }
    var memo = {
        options: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, updatedOptions), { onError: undefined, onCompleted: undefined }),
        context: context,
        tick: tick
    };
    var result = Object(_useDeepMemo_js__WEBPACK_IMPORTED_MODULE_4__["useDeepMemo"])(function () { return (lazy ? queryData.executeLazy() : queryData.execute()); }, memo);
    var queryResult = lazy
        ? result[1]
        : result;
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (!queryDataRef.current) {
            queryDataRef.current = queryData;
        }
        return function () { return queryData.cleanup(); };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return queryData.afterExecute({ lazy: lazy }); }, [
        queryResult.loading,
        queryResult.networkStatus,
        queryResult.error,
        queryResult.data,
    ]);
    return result;
}


//# sourceMappingURL=useBaseQuery.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/utils/useDeepMemo.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/utils/useDeepMemo.js ***!
  \**********************************************************************/
/*! exports provided: useDeepMemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeepMemo", function() { return useDeepMemo; });
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function useDeepMemo(memoFn, key) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
    if (!ref.current || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_0__["equal"])(key, ref.current.key)) {
        ref.current = { key: key, value: memoFn() };
    }
    return ref.current.value;
}


//# sourceMappingURL=useDeepMemo.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/parser/parser.js":
/*!************************************************************!*\
  !*** ./node_modules/@apollo/client/react/parser/parser.js ***!
  \************************************************************/
/*! exports provided: DocumentType, operationName, parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return DocumentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationName", function() { return operationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return parser; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");


var DocumentType;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
var cache = new Map();
function operationName(type) {
    var name;
    switch (type) {
        case DocumentType.Query:
            name = 'Query';
            break;
        case DocumentType.Mutation:
            name = 'Mutation';
            break;
        case DocumentType.Subscription:
            name = 'Subscription';
            break;
    }
    return name;
}
function parser(document) {
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(!!document && !!document.kind, "Argument of " + document + " passed to parser was not a valid GraphQL " +
        "DocumentNode. You may need to use 'graphql-tag' or another method " +
        "to convert your operation into a document");
    var fragments = document.definitions.filter(function (x) { return x.kind === 'FragmentDefinition'; });
    var queries = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'query';
    });
    var mutations = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'mutation';
    });
    var subscriptions = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'subscription';
    });
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
        "You must include a query, subscription or mutation as well");
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
        (document + " had " + queries.length + " queries, " + subscriptions.length + " ") +
        ("subscriptions and " + mutations.length + " mutations. ") +
        "You can use 'compose' to join multiple operation types to a component");
    type = queries.length ? DocumentType.Query : DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = DocumentType.Subscription;
    var definitions = queries.length
        ? queries
        : mutations.length
            ? mutations
            : subscriptions;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(definitions.length === 1, "react-apollo only supports one definition per HOC. " + document + " had " +
        (definitions.length + " definitions. ") +
        "You can use 'compose' to join multiple operation types to a component");
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') {
        name = definition.name.value;
    }
    else {
        name = 'data';
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}


//# sourceMappingURL=parser.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/ssr/RenderPromises.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/ssr/RenderPromises.js ***!
  \*****************************************************************/
/*! exports provided: RenderPromises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPromises", function() { return RenderPromises; });
function makeDefaultQueryInfo() {
    return {
        seen: false,
        observable: null
    };
}
var RenderPromises = (function () {
    function RenderPromises() {
        this.queryPromises = new Map();
        this.queryInfoTrie = new Map();
    }
    RenderPromises.prototype.registerSSRObservable = function (observable, props) {
        this.lookupQueryInfo(props).observable = observable;
    };
    RenderPromises.prototype.getSSRObservable = function (props) {
        return this.lookupQueryInfo(props).observable;
    };
    RenderPromises.prototype.addQueryPromise = function (queryInstance, finish) {
        var info = this.lookupQueryInfo(queryInstance.getOptions());
        if (!info.seen) {
            this.queryPromises.set(queryInstance.getOptions(), new Promise(function (resolve) {
                resolve(queryInstance.fetchData());
            }));
            return null;
        }
        return finish();
    };
    RenderPromises.prototype.hasPromises = function () {
        return this.queryPromises.size > 0;
    };
    RenderPromises.prototype.consumeAndAwaitPromises = function () {
        var _this = this;
        var promises = [];
        this.queryPromises.forEach(function (promise, queryInstance) {
            _this.lookupQueryInfo(queryInstance).seen = true;
            promises.push(promise);
        });
        this.queryPromises.clear();
        return Promise.all(promises);
    };
    RenderPromises.prototype.lookupQueryInfo = function (props) {
        var queryInfoTrie = this.queryInfoTrie;
        var query = props.query, variables = props.variables;
        var varMap = queryInfoTrie.get(query) || new Map();
        if (!queryInfoTrie.has(query))
            queryInfoTrie.set(query, varMap);
        var variablesString = JSON.stringify(variables);
        var info = varMap.get(variablesString) || makeDefaultQueryInfo();
        if (!varMap.has(variablesString))
            varMap.set(variablesString, info);
        return info;
    };
    return RenderPromises;
}());


//# sourceMappingURL=RenderPromises.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/arrays.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/arrays.js ***!
  \****************************************************************/
/*! exports provided: isNonEmptyArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyArray", function() { return isNonEmptyArray; });
function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}


//# sourceMappingURL=arrays.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/canUse.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/canUse.js ***!
  \****************************************************************/
/*! exports provided: canUseWeakMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseWeakMap", function() { return canUseWeakMap; });
var canUseWeakMap = typeof WeakMap === 'function' && !(typeof navigator === 'object' &&
    navigator.product === 'ReactNative');


//# sourceMappingURL=canUse.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/cloneDeep.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/cloneDeep.js ***!
  \*******************************************************************/
/*! exports provided: cloneDeep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return cloneDeep; });
var toString = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
        case "[object Array]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function (child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        }
        case "[object Object]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function (key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        }
        default:
            return val;
    }
}


//# sourceMappingURL=cloneDeep.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/environment.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/environment.js ***!
  \*********************************************************************/
/*! exports provided: getEnv, isDevelopment, isEnv, isTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnv", function() { return getEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevelopment", function() { return isDevelopment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnv", function() { return isEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTest", function() { return isTest; });
function getEnv() {
    if (typeof process !== 'undefined' && "development") {
        return "development";
    }
    return 'development';
}
function isEnv(env) {
    return getEnv() === env;
}
function isDevelopment() {
    return isEnv('development') === true;
}
function isTest() {
    return isEnv('test') === true;
}


//# sourceMappingURL=environment.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/errorHandling.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/errorHandling.js ***!
  \***********************************************************************/
/*! exports provided: graphQLResultHasError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphQLResultHasError", function() { return graphQLResultHasError; });
function graphQLResultHasError(result) {
    return (result.errors && result.errors.length > 0) || false;
}


//# sourceMappingURL=errorHandling.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/filterInPlace.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/filterInPlace.js ***!
  \***********************************************************************/
/*! exports provided: filterInPlace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterInPlace", function() { return filterInPlace; });
function filterInPlace(array, test, context) {
    var target = 0;
    array.forEach(function (elem, i) {
        if (test.call(this, elem, i, array)) {
            array[target++] = elem;
        }
    }, context);
    array.length = target;
    return array;
}


//# sourceMappingURL=filterInPlace.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js ***!
  \*************************************************************************/
/*! exports provided: maybeDeepFreeze */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeDeepFreeze", function() { return maybeDeepFreeze; });
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment.js */ "./node_modules/@apollo/client/utilities/common/environment.js");


function isObject(value) {
    return value !== null && typeof value === "object";
}
function deepFreeze(value) {
    var workSet = new Set([value]);
    workSet.forEach(function (obj) {
        if (isObject(obj)) {
            if (!Object.isFrozen(obj))
                Object.freeze(obj);
            Object.getOwnPropertyNames(obj).forEach(function (name) {
                if (isObject(obj[name]))
                    workSet.add(obj[name]);
            });
        }
    });
    return value;
}
function maybeDeepFreeze(obj) {
    if ( true && (Object(_environment_js__WEBPACK_IMPORTED_MODULE_0__["isDevelopment"])() || Object(_environment_js__WEBPACK_IMPORTED_MODULE_0__["isTest"])())) {
        deepFreeze(obj);
    }
    return obj;
}


//# sourceMappingURL=maybeDeepFreeze.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/mergeDeep.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/mergeDeep.js ***!
  \*******************************************************************/
/*! exports provided: DeepMerger, mergeDeep, mergeDeepArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeepMerger", function() { return DeepMerger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepArray", function() { return mergeDeepArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var merger = new DeepMerger();
        for (var i = 1; i < count; ++i) {
            target = merger.merge(target, sources[i]);
        }
    }
    return target;
}
function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}
var defaultReconciler = function (target, source, property) {
    return this.merge(target[property], source[property]);
};
var DeepMerger = (function () {
    function DeepMerger(reconciler) {
        if (reconciler === void 0) { reconciler = defaultReconciler; }
        this.reconciler = reconciler;
        this.isObject = isObject;
        this.pastCopies = new Set();
    }
    DeepMerger.prototype.merge = function (target, source) {
        var _this = this;
        var context = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            context[_i - 2] = arguments[_i];
        }
        if (isObject(source) && isObject(target)) {
            Object.keys(source).forEach(function (sourceKey) {
                if (hasOwnProperty.call(target, sourceKey)) {
                    var targetValue = target[sourceKey];
                    if (source[sourceKey] !== targetValue) {
                        var result = _this.reconciler.apply(_this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([target, source, sourceKey], context));
                        if (result !== targetValue) {
                            target = _this.shallowCopyForMerge(target);
                            target[sourceKey] = result;
                        }
                    }
                }
                else {
                    target = _this.shallowCopyForMerge(target);
                    target[sourceKey] = source[sourceKey];
                }
            });
            return target;
        }
        return source;
    };
    DeepMerger.prototype.shallowCopyForMerge = function (value) {
        if (isObject(value) && !this.pastCopies.has(value)) {
            if (Array.isArray(value)) {
                value = value.slice(0);
            }
            else {
                value = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ __proto__: Object.getPrototypeOf(value) }, value);
            }
            this.pastCopies.add(value);
        }
        return value;
    };
    return DeepMerger;
}());


//# sourceMappingURL=mergeDeep.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/directives.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/directives.js ***!
  \*********************************************************************/
/*! exports provided: getDirectiveNames, getInclusionDirectives, hasClientExports, hasDirectives, shouldInclude */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveNames", function() { return getDirectiveNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInclusionDirectives", function() { return getInclusionDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClientExports", function() { return hasClientExports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasDirectives", function() { return hasDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldInclude", function() { return shouldInclude; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var graphql_language_visitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql/language/visitor */ "./node_modules/graphql/language/visitor.mjs");



function shouldInclude(_a, variables) {
    var directives = _a.directives;
    if (!directives || !directives.length) {
        return true;
    }
    return getInclusionDirectives(directives).every(function (_a) {
        var directive = _a.directive, ifArgument = _a.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === 'Variable') {
            evaledValue = variables && variables[ifArgument.value.name.value];
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(evaledValue !== void 0, "Invalid variable referenced in @" + directive.name.value + " directive.");
        }
        else {
            evaledValue = ifArgument.value.value;
        }
        return directive.name.value === 'skip' ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames(root) {
    var names = [];
    Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visit"])(root, {
        Directive: function (node) {
            names.push(node.name.value);
        },
    });
    return names;
}
function hasDirectives(names, root) {
    return getDirectiveNames(root).some(function (name) { return names.indexOf(name) > -1; });
}
function hasClientExports(document) {
    return (document &&
        hasDirectives(['client'], document) &&
        hasDirectives(['export'], document));
}
function isInclusionDirective(_a) {
    var value = _a.name.value;
    return value === 'skip' || value === 'include';
}
function getInclusionDirectives(directives) {
    var result = [];
    if (directives && directives.length) {
        directives.forEach(function (directive) {
            if (!isInclusionDirective(directive))
                return;
            var directiveArguments = directive.arguments;
            var directiveName = directive.name.value;
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @" + directiveName + " directive.");
            var ifArgument = directiveArguments[0];
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @" + directiveName + " directive.");
            var ifValue = ifArgument.value;
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @" + directiveName + " directive must be a variable or a boolean value.");
            result.push({ directive: directive, ifArgument: ifArgument });
        });
    }
    return result;
}


//# sourceMappingURL=directives.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/fragments.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/fragments.js ***!
  \********************************************************************/
/*! exports provided: createFragmentMap, getFragmentFromSelection, getFragmentQueryDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragmentMap", function() { return createFragmentMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentFromSelection", function() { return getFragmentFromSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentQueryDocument", function() { return getFragmentQueryDocument; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");



function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.');
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragments.length === 1, "Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
        actualFragmentName = fragments[0].name.value;
    }
    var query = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, document), { definitions: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ], document.definitions) });
    return query;
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
    switch (selection.kind) {
        case 'InlineFragment':
            return selection;
        case 'FragmentSpread': {
            var fragment = fragmentMap && fragmentMap[selection.name.value];
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragment, "No fragment named " + selection.name.value + ".");
            return fragment;
        }
        default:
            return null;
    }
}


//# sourceMappingURL=fragments.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/getFromAST.js ***!
  \*********************************************************************/
/*! exports provided: checkDocument, getDefaultValues, getFragmentDefinition, getFragmentDefinitions, getMainDefinition, getOperationDefinition, getOperationName, getQueryDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDocument", function() { return checkDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultValues", function() { return getDefaultValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinition", function() { return getFragmentDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinitions", function() { return getFragmentDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainDefinition", function() { return getMainDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinition", function() { return getOperationDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return getOperationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryDefinition", function() { return getQueryDefinition; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _storeUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");



function checkDocument(doc) {
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"");
        }
        return definition;
    });
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(operations.length <= 1, "Ambiguous GraphQL document: contains " + operations.length + " operations");
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(queryDef && queryDef.operation === 'query', 'Must contain a query definition.');
    return queryDef;
}
function getFragmentDefinition(doc) {
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(doc.definitions.length <= 1, 'Fragment must have exactly one definition.');
    var fragmentDef = doc.definitions[0];
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.');
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.');
}
function getDefaultValues(definition) {
    var defaultValues = Object.create(null);
    var defs = definition && definition.variableDefinitions;
    if (defs && defs.length) {
        defs.forEach(function (def) {
            if (def.defaultValue) {
                Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__["valueToObjectRepresentation"])(defaultValues, def.variable.name, def.defaultValue);
            }
        });
    }
    return defaultValues;
}


//# sourceMappingURL=getFromAST.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/storeUtils.js ***!
  \*********************************************************************/
/*! exports provided: argumentsObjectFromField, getStoreKeyName, getTypenameFromResult, isField, isInlineFragment, isReference, makeReference, resultKeyNameFromField, storeKeyNameFromField, valueToObjectRepresentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argumentsObjectFromField", function() { return argumentsObjectFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreKeyName", function() { return getStoreKeyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypenameFromResult", function() { return getTypenameFromResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isField", function() { return isField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInlineFragment", function() { return isInlineFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReference", function() { return isReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeReference", function() { return makeReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultKeyNameFromField", function() { return resultKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeKeyNameFromField", function() { return storeKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueToObjectRepresentation", function() { return valueToObjectRepresentation; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-json-stable-stringify */ "./node_modules/fast-json-stable-stringify/index.js");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fragments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");




function makeReference(id) {
    return { __ref: String(id) };
}
function isReference(obj) {
    return Boolean(obj && typeof obj === 'object' && typeof obj.__ref === 'string');
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isNullValue(value)) {
        argObj[name.value] = null;
    }
    else {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" +
            'is not supported. Use variables instead of inline arguments to ' +
            'overcome this limitation.');
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export',
];
function getStoreKeyName(fieldName, args, directives) {
    if (args &&
        directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = args[key];
            });
            return directives['connection']['key'] + "(" + JSON.stringify(filteredArgs_1) + ")";
        }
        else {
            return directives['connection']['key'];
        }
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default()(args);
        completeFieldName += "(" + stringifiedArgs + ")";
    }
    if (directives) {
        Object.keys(directives).forEach(function (key) {
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += "@" + key + "(" + JSON.stringify(directives[key]) + ")";
            }
            else {
                completeFieldName += "@" + key;
            }
        });
    }
    return completeFieldName;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
    if (typeof result.__typename === 'string') {
        return result.__typename;
    }
    for (var _i = 0, _a = selectionSet.selections; _i < _a.length; _i++) {
        var selection = _a[_i];
        if (isField(selection)) {
            if (selection.name.value === '__typename') {
                return result[resultKeyNameFromField(selection)];
            }
        }
        else {
            var typename = getTypenameFromResult(result, Object(_fragments_js__WEBPACK_IMPORTED_MODULE_2__["getFragmentFromSelection"])(selection, fragmentMap).selectionSet, fragmentMap);
            if (typeof typename === 'string') {
                return typename;
            }
        }
    }
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}


//# sourceMappingURL=storeUtils.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/transform.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/transform.js ***!
  \********************************************************************/
/*! exports provided: addTypenameToDocument, buildQueryFromSelectionSet, removeArgumentsFromDocument, removeClientSetsFromDocument, removeConnectionDirectiveFromDocument, removeDirectivesFromDocument, removeFragmentSpreadFromDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTypenameToDocument", function() { return addTypenameToDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildQueryFromSelectionSet", function() { return buildQueryFromSelectionSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeArgumentsFromDocument", function() { return removeArgumentsFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClientSetsFromDocument", function() { return removeClientSetsFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeConnectionDirectiveFromDocument", function() { return removeConnectionDirectiveFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDirectivesFromDocument", function() { return removeDirectivesFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFragmentSpreadFromDocument", function() { return removeFragmentSpreadFromDocument; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _fragments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony import */ var _storeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _getFromAST_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getFromAST.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var graphql_language_visitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql/language/visitor */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _common_filterInPlace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/filterInPlace.js */ "./node_modules/@apollo/client/utilities/common/filterInPlace.js");








var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename',
    },
};
function isEmpty(op, fragments) {
    return op.selectionSet.selections.every(function (selection) {
        return selection.kind === 'FragmentSpread' &&
            isEmpty(fragments[selection.name.value], fragments);
    });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty(Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getOperationDefinition"])(doc) || Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getFragmentDefinition"])(doc), Object(_fragments_js__WEBPACK_IMPORTED_MODULE_2__["createFragmentMap"])(Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getFragmentDefinitions"])(doc)))
        ? null
        : doc;
}
function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function (dir) {
            return (dir.name && dir.name === directive.name.value) ||
                (dir.test && dir.test(directive));
        });
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var variablesInUse = Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_5__["visit"])(doc, {
        Variable: {
            enter: function (node, _key, parent) {
                if (parent.kind !== 'VariableDefinition') {
                    variablesInUse[node.name.value] = true;
                }
            },
        },
        Field: {
            enter: function (node) {
                if (directives && node.directives) {
                    var shouldRemoveField = directives.some(function (directive) { return directive.remove; });
                    if (shouldRemoveField &&
                        node.directives &&
                        node.directives.some(getDirectiveMatcher(directives))) {
                        if (node.arguments) {
                            node.arguments.forEach(function (arg) {
                                if (arg.value.kind === 'Variable') {
                                    variablesToRemove.push({
                                        name: arg.value.name.value,
                                    });
                                }
                            });
                        }
                        if (node.selectionSet) {
                            getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
                                fragmentSpreadsToRemove.push({
                                    name: frag.name.value,
                                });
                            });
                        }
                        return null;
                    }
                }
            },
        },
        FragmentSpread: {
            enter: function (node) {
                fragmentSpreadsInUse[node.name.value] = true;
            },
        },
        Directive: {
            enter: function (node) {
                if (getDirectiveMatcher(directives)(node)) {
                    return null;
                }
            },
        },
    }));
    if (modifiedDoc &&
        Object(_common_filterInPlace_js__WEBPACK_IMPORTED_MODULE_6__["filterInPlace"])(variablesToRemove, function (v) { return !!v.name && !variablesInUse[v.name]; }).length) {
        modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
    }
    if (modifiedDoc &&
        Object(_common_filterInPlace_js__WEBPACK_IMPORTED_MODULE_6__["filterInPlace"])(fragmentSpreadsToRemove, function (fs) { return !!fs.name && !fragmentSpreadsInUse[fs.name]; })
            .length) {
        modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
    }
    return modifiedDoc;
}
function addTypenameToDocument(doc) {
    return Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_5__["visit"])(Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["checkDocument"])(doc), {
        SelectionSet: {
            enter: function (node, _key, parent) {
                if (parent &&
                    parent.kind === 'OperationDefinition') {
                    return;
                }
                var selections = node.selections;
                if (!selections) {
                    return;
                }
                var skip = selections.some(function (selection) {
                    return (Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection) &&
                        (selection.name.value === '__typename' ||
                            selection.name.value.lastIndexOf('__', 0) === 0));
                });
                if (skip) {
                    return;
                }
                var field = parent;
                if (Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(field) &&
                    field.directives &&
                    field.directives.some(function (d) { return d.name.value === 'export'; })) {
                    return;
                }
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, node), { selections: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(selections, [TYPENAME_FIELD]) });
            },
        },
    });
}
addTypenameToDocument.added = function (field) {
    return field === TYPENAME_FIELD;
};
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([connectionRemoveConfig], Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["checkDocument"])(doc));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function (aConfig) {
            return argument.value &&
                argument.value.kind === 'Variable' &&
                argument.value.name &&
                (aConfig.name === argument.value.name.value ||
                    (aConfig.test && aConfig.test(argument)));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_5__["visit"])(doc, {
        OperationDefinition: {
            enter: function (node) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, node), { variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function (varDef) {
                        return !config.some(function (arg) { return arg.name === varDef.variable.name.value; });
                    }) : [] });
            },
        },
        Field: {
            enter: function (node) {
                var shouldRemoveField = config.some(function (argConfig) { return argConfig.remove; });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    if (node.arguments) {
                        node.arguments.forEach(function (arg) {
                            if (argMatcher(arg)) {
                                argMatchCount_1 += 1;
                            }
                        });
                    }
                    if (argMatchCount_1 === 1) {
                        return null;
                    }
                }
            },
        },
        Argument: {
            enter: function (node) {
                if (argMatcher(node)) {
                    return null;
                }
            },
        },
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function (def) { return def.name === node.name.value; })) {
            return null;
        }
    }
    return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_5__["visit"])(doc, {
        FragmentSpread: { enter: enter },
        FragmentDefinition: { enter: enter },
    }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function (selection) {
        if ((Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection) || Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isInlineFragment"])(selection)) &&
            selection.selectionSet) {
            getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) { return allFragments.push(frag); });
        }
        else if (selection.kind === 'FragmentSpread') {
            allFragments.push(selection);
        }
    });
    return allFragments;
}
function buildQueryFromSelectionSet(document) {
    var definition = Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["getMainDefinition"])(document);
    var definitionOperation = definition.operation;
    if (definitionOperation === 'query') {
        return document;
    }
    var modifiedDoc = Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_5__["visit"])(document, {
        OperationDefinition: {
            enter: function (node) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, node), { operation: 'query' });
            },
        },
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
    Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__["checkDocument"])(document);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function (directive) { return directive.name.value === 'client'; },
            remove: true,
        },
    ], document);
    if (modifiedDoc) {
        modifiedDoc = Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_5__["visit"])(modifiedDoc, {
            FragmentDefinition: {
                enter: function (node) {
                    if (node.selectionSet) {
                        var isTypenameOnly = node.selectionSet.selections.every(function (selection) {
                            return Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection) && selection.name.value === '__typename';
                        });
                        if (isTypenameOnly) {
                            return null;
                        }
                    }
                },
            },
        });
    }
    return modifiedDoc;
}


//# sourceMappingURL=transform.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/Concast.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/Concast.js ***!
  \**********************************************************************/
/*! exports provided: Concast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Concast", function() { return Concast; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");
/* harmony import */ var _iteration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iteration.js */ "./node_modules/@apollo/client/utilities/observables/iteration.js");





function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
var Concast = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Concast, _super);
    function Concast(sources) {
        var _this = _super.call(this, function (observer) {
            _this.addObserver(observer);
            return function () { return _this.removeObserver(observer); };
        }) || this;
        _this.observers = new Set();
        _this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        _this.handlers = {
            next: function (result) {
                if (_this.sub !== null) {
                    _this.latest = ["next", result];
                    Object(_iteration_js__WEBPACK_IMPORTED_MODULE_3__["iterateObserversSafely"])(_this.observers, "next", result);
                }
            },
            error: function (error) {
                if (_this.sub !== null) {
                    if (_this.sub)
                        _this.sub.unsubscribe();
                    _this.sub = null;
                    _this.latest = ["error", error];
                    _this.reject(error);
                    Object(_iteration_js__WEBPACK_IMPORTED_MODULE_3__["iterateObserversSafely"])(_this.observers, "error", error);
                }
            },
            complete: function () {
                if (_this.sub !== null) {
                    var value = _this.sources.shift();
                    if (!value) {
                        _this.sub = null;
                        if (_this.latest &&
                            _this.latest[0] === "next") {
                            _this.resolve(_this.latest[1]);
                        }
                        else {
                            _this.resolve();
                        }
                        Object(_iteration_js__WEBPACK_IMPORTED_MODULE_3__["iterateObserversSafely"])(_this.observers, "complete");
                    }
                    else if (isPromiseLike(value)) {
                        value.then(function (obs) { return _this.sub = obs.subscribe(_this.handlers); });
                    }
                    else {
                        _this.sub = value.subscribe(_this.handlers);
                    }
                }
            },
        };
        _this.cancel = function (reason) {
            _this.reject(reason);
            _this.sources = [];
            _this.handlers.complete();
        };
        _this.promise.catch(function (_) { });
        if (isPromiseLike(sources)) {
            sources.then(function (iterable) { return _this.start(iterable); }, _this.handlers.error);
        }
        else {
            _this.start(sources);
        }
        return _this;
    }
    Concast.prototype.start = function (sources) {
        if (this.sub !== void 0)
            return;
        this.sources = Array.from(sources);
        this.handlers.complete();
    };
    Concast.prototype.addObserver = function (observer) {
        if (!this.observers.has(observer)) {
            if (this.latest) {
                var nextOrError = this.latest[0];
                var method = observer[nextOrError];
                if (method) {
                    method.call(observer, this.latest[1]);
                }
                if (this.sub === null &&
                    nextOrError === "next" &&
                    observer.complete) {
                    observer.complete();
                }
            }
            this.observers.add(observer);
        }
    };
    Concast.prototype.removeObserver = function (observer, quietly) {
        if (this.observers.delete(observer) &&
            this.observers.size < 1) {
            if (quietly)
                return;
            if (this.sub) {
                this.sub.unsubscribe();
                this.reject(new Error("Observable cancelled prematurely"));
            }
            this.sub = null;
        }
    };
    Concast.prototype.cleanup = function (callback) {
        var _this = this;
        var called = false;
        var once = function () {
            if (!called) {
                called = true;
                _this.observers.delete(observer);
                callback();
            }
        };
        var observer = {
            next: once,
            error: once,
            complete: once,
        };
        this.addObserver(observer);
    };
    return Concast;
}(zen_observable__WEBPACK_IMPORTED_MODULE_1___default.a));
if (typeof Symbol === "function" && Symbol.species) {
    Object.defineProperty(Concast, Symbol.species, {
        value: zen_observable__WEBPACK_IMPORTED_MODULE_1___default.a,
    });
}


//# sourceMappingURL=Concast.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/asyncMap.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/asyncMap.js ***!
  \***********************************************************************/
/*! exports provided: asyncMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncMap", function() { return asyncMap; });
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");



function asyncMap(observable, mapFn, catchFn) {
    return new zen_observable__WEBPACK_IMPORTED_MODULE_0___default.a(function (observer) {
        var next = observer.next, error = observer.error, complete = observer.complete;
        var activeCallbackCount = 0;
        var completed = false;
        function makeCallback(examiner, delegate) {
            if (examiner) {
                return function (arg) {
                    ++activeCallbackCount;
                    new Promise(function (resolve) { return resolve(examiner(arg)); }).then(function (result) {
                        --activeCallbackCount;
                        next && next.call(observer, result);
                        if (completed) {
                            handler.complete();
                        }
                    }, function (e) {
                        --activeCallbackCount;
                        error && error.call(observer, e);
                    });
                };
            }
            else {
                return function (arg) { return delegate && delegate.call(observer, arg); };
            }
        }
        var handler = {
            next: makeCallback(mapFn, next),
            error: makeCallback(catchFn, error),
            complete: function () {
                completed = true;
                if (!activeCallbackCount) {
                    complete && complete.call(observer);
                }
            },
        };
        var sub = observable.subscribe(handler);
        return function () { return sub.unsubscribe(); };
    });
}


//# sourceMappingURL=asyncMap.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/iteration.js":
/*!************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/iteration.js ***!
  \************************************************************************/
/*! exports provided: iterateObserversSafely */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateObserversSafely", function() { return iterateObserversSafely; });
function iterateObserversSafely(observers, method, argument) {
    var observersWithMethod = [];
    observers.forEach(function (obs) { return obs[method] && observersWithMethod.push(obs); });
    observersWithMethod.forEach(function (obs) { return obs[method](argument); });
}


//# sourceMappingURL=iteration.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/version.js":
/*!************************************************!*\
  !*** ./node_modules/@apollo/client/version.js ***!
  \************************************************/
/*! exports provided: version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
var version = 'local';


//# sourceMappingURL=version.js.map


/***/ }),

/***/ "./node_modules/@apollo/react-common/lib/react-common.esm.js":
false,

/***/ "./node_modules/@apollo/react-components/lib/react-components.esm.js":
false,

/***/ "./node_modules/@apollo/react-components/node_modules/@apollo/react-hooks/lib/react-hooks.esm.js":
false,

/***/ "./node_modules/@apollo/react-hoc/lib/react-hoc.esm.js":
false,

/***/ "./node_modules/@apollo/react-hooks/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@apollo/react-hooks/index.esm.js ***!
  \*******************************************************/
/*! exports provided: Observable, isReference, makeReference, ApolloLink, execute, ApolloError, isApolloError, NetworkStatus, ObservableQuery, makeVar, serializeFetchParameter, selectURI, throwServerError, parseAndCheckHttpResponse, checkFetcher, fallbackHttpConfig, selectHttpOptionsAndBody, createSignalIfSupported, rewriteURIForGET, fromError, createHttpLink, HttpLink, ApolloClient, ApolloCache, Cache, MissingFieldError, defaultDataIdFromObject, InMemoryCache, empty, from, split, concat, toPromise, fromPromise, gql, disableExperimentalFragmentVariables, disableFragmentWarnings, enableExperimentalFragmentVariables, resetCaches, getApolloContext, resetApolloContext, ApolloProvider, ApolloConsumer, DocumentType, operationName, parser, useQuery, useLazyQuery, useMutation, useSubscription, useApolloClient, RenderPromises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReference", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["isReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeReference", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["makeReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["execute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["isApolloError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["NetworkStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ObservableQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeVar", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["makeVar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeFetchParameter", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["serializeFetchParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectURI", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["selectURI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwServerError", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["throwServerError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAndCheckHttpResponse", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["parseAndCheckHttpResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkFetcher", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["checkFetcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fallbackHttpConfig", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["fallbackHttpConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHttpOptionsAndBody", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["selectHttpOptionsAndBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSignalIfSupported", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["createSignalIfSupported"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rewriteURIForGET", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["rewriteURIForGET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["fromError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHttpLink", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["createHttpLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["HttpLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloCache", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["Cache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingFieldError", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["MissingFieldError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["defaultDataIdFromObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["from"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["split"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["toPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["fromPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gql", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableExperimentalFragmentVariables", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["disableExperimentalFragmentVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableFragmentWarnings", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["disableFragmentWarnings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableExperimentalFragmentVariables", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["enableExperimentalFragmentVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetCaches", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["resetCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["resetApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["DocumentType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "operationName", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["operationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["parser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLazyQuery", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useSubscription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useApolloClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderPromises", function() { return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["RenderPromises"]; });




/***/ }),

/***/ "./node_modules/@apollo/react-ssr/lib/react-ssr.esm.js":
false,

/***/ "./node_modules/@apollo/react-ssr/node_modules/@apollo/react-hooks/lib/react-hooks.esm.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
false,

/***/ "./node_modules/@wry/context/lib/context.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@wry/context/lib/context.esm.js ***!
  \******************************************************/
/*! exports provided: Slot, asyncFromGen, bind, noContext, setTimeout, wrapYieldingFiberMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slot", function() { return Slot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncFromGen", function() { return asyncFromGen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noContext", function() { return noContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTimeout", function() { return setTimeoutWithContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapYieldingFiberMethods", function() { return wrapYieldingFiberMethods; });
// This currentContext variable will only be used if the makeSlotClass
// function is called, which happens only if this is the first copy of the
// @wry/context package to be imported.
var currentContext = null;
// This unique internal object is used to denote the absence of a value
// for a given Slot, and is never exposed to outside code.
var MISSING_VALUE = {};
var idCounter = 1;
// Although we can't do anything about the cost of duplicated code from
// accidentally bundling multiple copies of the @wry/context package, we can
// avoid creating the Slot class more than once using makeSlotClass.
var makeSlotClass = function () { return /** @class */ (function () {
    function Slot() {
        // If you have a Slot object, you can find out its slot.id, but you cannot
        // guess the slot.id of a Slot you don't have access to, thanks to the
        // randomized suffix.
        this.id = [
            "slot",
            idCounter++,
            Date.now(),
            Math.random().toString(36).slice(2),
        ].join(":");
    }
    Slot.prototype.hasValue = function () {
        for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
            // We use the Slot object iself as a key to its value, which means the
            // value cannot be obtained without a reference to the Slot object.
            if (this.id in context_1.slots) {
                var value = context_1.slots[this.id];
                if (value === MISSING_VALUE)
                    break;
                if (context_1 !== currentContext) {
                    // Cache the value in currentContext.slots so the next lookup will
                    // be faster. This caching is safe because the tree of contexts and
                    // the values of the slots are logically immutable.
                    currentContext.slots[this.id] = value;
                }
                return true;
            }
        }
        if (currentContext) {
            // If a value was not found for this Slot, it's never going to be found
            // no matter how many times we look it up, so we might as well cache
            // the absence of the value, too.
            currentContext.slots[this.id] = MISSING_VALUE;
        }
        return false;
    };
    Slot.prototype.getValue = function () {
        if (this.hasValue()) {
            return currentContext.slots[this.id];
        }
    };
    Slot.prototype.withValue = function (value, callback, 
    // Given the prevalence of arrow functions, specifying arguments is likely
    // to be much more common than specifying `this`, hence this ordering:
    args, thisArg) {
        var _a;
        var slots = (_a = {
                __proto__: null
            },
            _a[this.id] = value,
            _a);
        var parent = currentContext;
        currentContext = { parent: parent, slots: slots };
        try {
            // Function.prototype.apply allows the arguments array argument to be
            // omitted or undefined, so args! is fine here.
            return callback.apply(thisArg, args);
        }
        finally {
            currentContext = parent;
        }
    };
    // Capture the current context and wrap a callback function so that it
    // reestablishes the captured context when called.
    Slot.bind = function (callback) {
        var context = currentContext;
        return function () {
            var saved = currentContext;
            try {
                currentContext = context;
                return callback.apply(this, arguments);
            }
            finally {
                currentContext = saved;
            }
        };
    };
    // Immediately run a callback function without any captured context.
    Slot.noContext = function (callback, 
    // Given the prevalence of arrow functions, specifying arguments is likely
    // to be much more common than specifying `this`, hence this ordering:
    args, thisArg) {
        if (currentContext) {
            var saved = currentContext;
            try {
                currentContext = null;
                // Function.prototype.apply allows the arguments array argument to be
                // omitted or undefined, so args! is fine here.
                return callback.apply(thisArg, args);
            }
            finally {
                currentContext = saved;
            }
        }
        else {
            return callback.apply(thisArg, args);
        }
    };
    return Slot;
}()); };
// We store a single global implementation of the Slot class as a permanent
// non-enumerable symbol property of the Array constructor. This obfuscation
// does nothing to prevent access to the Slot class, but at least it ensures
// the implementation (i.e. currentContext) cannot be tampered with, and all
// copies of the @wry/context package (hopefully just one) will share the
// same Slot implementation. Since the first copy of the @wry/context package
// to be imported wins, this technique imposes a very high cost for any
// future breaking changes to the Slot class.
var globalKey = "@wry/context:Slot";
var host = Array;
var Slot = host[globalKey] || function () {
    var Slot = makeSlotClass();
    try {
        Object.defineProperty(host, globalKey, {
            value: host[globalKey] = Slot,
            enumerable: false,
            writable: false,
            configurable: false,
        });
    }
    finally {
        return Slot;
    }
}();

var bind = Slot.bind, noContext = Slot.noContext;
function setTimeoutWithContext(callback, delay) {
    return setTimeout(bind(callback), delay);
}
// Turn any generator function into an async function (using yield instead
// of await), with context automatically preserved across yields.
function asyncFromGen(genFn) {
    return function () {
        var gen = genFn.apply(this, arguments);
        var boundNext = bind(gen.next);
        var boundThrow = bind(gen.throw);
        return new Promise(function (resolve, reject) {
            function invoke(method, argument) {
                try {
                    var result = method.call(gen, argument);
                }
                catch (error) {
                    return reject(error);
                }
                var next = result.done ? resolve : invokeNext;
                if (isPromiseLike(result.value)) {
                    result.value.then(next, result.done ? reject : invokeThrow);
                }
                else {
                    next(result.value);
                }
            }
            var invokeNext = function (value) { return invoke(boundNext, value); };
            var invokeThrow = function (error) { return invoke(boundThrow, error); };
            invokeNext();
        });
    };
}
function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
// If you use the fibers npm package to implement coroutines in Node.js,
// you should call this function at least once to ensure context management
// remains coherent across any yields.
var wrappedFibers = [];
function wrapYieldingFiberMethods(Fiber) {
    // There can be only one implementation of Fiber per process, so this array
    // should never grow longer than one element.
    if (wrappedFibers.indexOf(Fiber) < 0) {
        var wrap = function (obj, method) {
            var fn = obj[method];
            obj[method] = function () {
                return noContext(fn, arguments, this);
            };
        };
        // These methods can yield, according to
        // https://github.com/laverdet/node-fibers/blob/ddebed9b8ae3883e57f822e2108e6943e5c8d2a8/fibers.js#L97-L100
        wrap(Fiber, "yield");
        wrap(Fiber.prototype, "run");
        wrap(Fiber.prototype, "throwInto");
        wrappedFibers.push(Fiber);
    }
    return Fiber;
}


//# sourceMappingURL=context.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-client/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-utilities/lib/bundle.esm.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/optimism/lib/bundle.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/optimism/lib/bundle.esm.js ***!
  \*************************************************/
/*! exports provided: asyncFromGen, bindContext, noContext, setTimeout, KeyTrie, defaultMakeCacheKey, dep, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyTrie", function() { return KeyTrie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMakeCacheKey", function() { return defaultMakeCacheKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dep", function() { return dep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony import */ var _wry_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/context */ "./node_modules/@wry/context/lib/context.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncFromGen", function() { return _wry_context__WEBPACK_IMPORTED_MODULE_0__["asyncFromGen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindContext", function() { return _wry_context__WEBPACK_IMPORTED_MODULE_0__["bind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noContext", function() { return _wry_context__WEBPACK_IMPORTED_MODULE_0__["noContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTimeout", function() { return _wry_context__WEBPACK_IMPORTED_MODULE_0__["setTimeout"]; });




function defaultDispose() { }
var Cache = /** @class */ (function () {
    function Cache(max, dispose) {
        if (max === void 0) { max = Infinity; }
        if (dispose === void 0) { dispose = defaultDispose; }
        this.max = max;
        this.dispose = dispose;
        this.map = new Map();
        this.newest = null;
        this.oldest = null;
    }
    Cache.prototype.has = function (key) {
        return this.map.has(key);
    };
    Cache.prototype.get = function (key) {
        var entry = this.getEntry(key);
        return entry && entry.value;
    };
    Cache.prototype.getEntry = function (key) {
        var entry = this.map.get(key);
        if (entry && entry !== this.newest) {
            var older = entry.older, newer = entry.newer;
            if (newer) {
                newer.older = older;
            }
            if (older) {
                older.newer = newer;
            }
            entry.older = this.newest;
            entry.older.newer = entry;
            entry.newer = null;
            this.newest = entry;
            if (entry === this.oldest) {
                this.oldest = newer;
            }
        }
        return entry;
    };
    Cache.prototype.set = function (key, value) {
        var entry = this.getEntry(key);
        if (entry) {
            return entry.value = value;
        }
        entry = {
            key: key,
            value: value,
            newer: null,
            older: this.newest
        };
        if (this.newest) {
            this.newest.newer = entry;
        }
        this.newest = entry;
        this.oldest = this.oldest || entry;
        this.map.set(key, entry);
        return entry.value;
    };
    Cache.prototype.clean = function () {
        while (this.oldest && this.map.size > this.max) {
            this.delete(this.oldest.key);
        }
    };
    Cache.prototype.delete = function (key) {
        var entry = this.map.get(key);
        if (entry) {
            if (entry === this.newest) {
                this.newest = entry.older;
            }
            if (entry === this.oldest) {
                this.oldest = entry.newer;
            }
            if (entry.newer) {
                entry.newer.older = entry.older;
            }
            if (entry.older) {
                entry.older.newer = entry.newer;
            }
            this.map.delete(key);
            this.dispose(entry.value, key);
            return true;
        }
        return false;
    };
    return Cache;
}());

var parentEntrySlot = new _wry_context__WEBPACK_IMPORTED_MODULE_0__["Slot"]();

function maybeUnsubscribe(entryOrDep) {
    var unsubscribe = entryOrDep.unsubscribe;
    if (typeof unsubscribe === "function") {
        entryOrDep.unsubscribe = void 0;
        unsubscribe();
    }
}

var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
// Since this package might be used browsers, we should avoid using the
// Node built-in assert module.
function assert(condition, optionalMessage) {
    if (!condition) {
        throw new Error(optionalMessage || "assertion failure");
    }
}
function valueIs(a, b) {
    var len = a.length;
    return (
    // Unknown values are not equal to each other.
    len > 0 &&
        // Both values must be ordinary (or both exceptional) to be equal.
        len === b.length &&
        // The underlying value or exception must be the same.
        a[len - 1] === b[len - 1]);
}
function valueGet(value) {
    switch (value.length) {
        case 0: throw new Error("unknown value");
        case 1: return value[0];
        case 2: throw value[1];
    }
}
function valueCopy(value) {
    return value.slice(0);
}
var Entry = /** @class */ (function () {
    function Entry(fn, args) {
        this.fn = fn;
        this.args = args;
        this.parents = new Set();
        this.childValues = new Map();
        // When this Entry has children that are dirty, this property becomes
        // a Set containing other Entry objects, borrowed from emptySetPool.
        // When the set becomes empty, it gets recycled back to emptySetPool.
        this.dirtyChildren = null;
        this.dirty = true;
        this.recomputing = false;
        this.value = [];
        this.deps = null;
        ++Entry.count;
    }
    Entry.prototype.peek = function () {
        if (this.value.length === 1 && !mightBeDirty(this)) {
            return this.value[0];
        }
    };
    // This is the most important method of the Entry API, because it
    // determines whether the cached this.value can be returned immediately,
    // or must be recomputed. The overall performance of the caching system
    // depends on the truth of the following observations: (1) this.dirty is
    // usually false, (2) this.dirtyChildren is usually null/empty, and thus
    // (3) valueGet(this.value) is usually returned without recomputation.
    Entry.prototype.recompute = function () {
        assert(!this.recomputing, "already recomputing");
        rememberParent(this);
        return mightBeDirty(this)
            ? reallyRecompute(this)
            : valueGet(this.value);
    };
    Entry.prototype.setDirty = function () {
        if (this.dirty)
            return;
        this.dirty = true;
        this.value.length = 0;
        reportDirty(this);
        forgetChildren(this);
        // We can go ahead and unsubscribe here, since any further dirty
        // notifications we receive will be redundant, and unsubscribing may
        // free up some resources, e.g. file watchers.
        maybeUnsubscribe(this);
    };
    Entry.prototype.dispose = function () {
        var _this = this;
        forgetChildren(this);
        maybeUnsubscribe(this);
        // Because this entry has been kicked out of the cache (in index.js),
        // we've lost the ability to find out if/when this entry becomes dirty,
        // whether that happens through a subscription, because of a direct call
        // to entry.setDirty(), or because one of its children becomes dirty.
        // Because of this loss of future information, we have to assume the
        // worst (that this entry might have become dirty very soon), so we must
        // immediately mark this entry's parents as dirty. Normally we could
        // just call entry.setDirty() rather than calling parent.setDirty() for
        // each parent, but that would leave this entry in parent.childValues
        // and parent.dirtyChildren, which would prevent the child from being
        // truly forgotten.
        this.parents.forEach(function (parent) {
            parent.setDirty();
            forgetChild(parent, _this);
        });
    };
    Entry.prototype.dependOn = function (dep) {
        dep.add(this);
        if (!this.deps) {
            this.deps = emptySetPool.pop() || new Set();
        }
        this.deps.add(dep);
    };
    Entry.prototype.forgetDeps = function () {
        var _this = this;
        if (this.deps) {
            this.deps.forEach(function (dep) { return dep.delete(_this); });
            this.deps.clear();
            emptySetPool.push(this.deps);
            this.deps = null;
        }
    };
    Entry.count = 0;
    return Entry;
}());
function rememberParent(child) {
    var parent = parentEntrySlot.getValue();
    if (parent) {
        child.parents.add(parent);
        if (!parent.childValues.has(child)) {
            parent.childValues.set(child, []);
        }
        if (mightBeDirty(child)) {
            reportDirtyChild(parent, child);
        }
        else {
            reportCleanChild(parent, child);
        }
        return parent;
    }
}
function reallyRecompute(entry) {
    forgetChildren(entry);
    // Set entry as the parent entry while calling recomputeNewValue(entry).
    parentEntrySlot.withValue(entry, recomputeNewValue, [entry]);
    if (maybeSubscribe(entry)) {
        // If we successfully recomputed entry.value and did not fail to
        // (re)subscribe, then this Entry is no longer explicitly dirty.
        setClean(entry);
    }
    return valueGet(entry.value);
}
function recomputeNewValue(entry) {
    entry.recomputing = true;
    // Set entry.value as unknown.
    entry.value.length = 0;
    try {
        // If entry.fn succeeds, entry.value will become a normal Value.
        entry.value[0] = entry.fn.apply(null, entry.args);
    }
    catch (e) {
        // If entry.fn throws, entry.value will become exceptional.
        entry.value[1] = e;
    }
    // Either way, this line is always reached.
    entry.recomputing = false;
}
function mightBeDirty(entry) {
    return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
    entry.dirty = false;
    if (mightBeDirty(entry)) {
        // This Entry may still have dirty children, in which case we can't
        // let our parents know we're clean just yet.
        return;
    }
    reportClean(entry);
}
function reportDirty(child) {
    child.parents.forEach(function (parent) { return reportDirtyChild(parent, child); });
}
function reportClean(child) {
    child.parents.forEach(function (parent) { return reportCleanChild(parent, child); });
}
// Let a parent Entry know that one of its children may be dirty.
function reportDirtyChild(parent, child) {
    // Must have called rememberParent(child) before calling
    // reportDirtyChild(parent, child).
    assert(parent.childValues.has(child));
    assert(mightBeDirty(child));
    if (!parent.dirtyChildren) {
        parent.dirtyChildren = emptySetPool.pop() || new Set;
    }
    else if (parent.dirtyChildren.has(child)) {
        // If we already know this child is dirty, then we must have already
        // informed our own parents that we are dirty, so we can terminate
        // the recursion early.
        return;
    }
    parent.dirtyChildren.add(child);
    reportDirty(parent);
}
// Let a parent Entry know that one of its children is no longer dirty.
function reportCleanChild(parent, child) {
    // Must have called rememberChild(child) before calling
    // reportCleanChild(parent, child).
    assert(parent.childValues.has(child));
    assert(!mightBeDirty(child));
    var childValue = parent.childValues.get(child);
    if (childValue.length === 0) {
        parent.childValues.set(child, valueCopy(child.value));
    }
    else if (!valueIs(childValue, child.value)) {
        parent.setDirty();
    }
    removeDirtyChild(parent, child);
    if (mightBeDirty(parent)) {
        return;
    }
    reportClean(parent);
}
function removeDirtyChild(parent, child) {
    var dc = parent.dirtyChildren;
    if (dc) {
        dc.delete(child);
        if (dc.size === 0) {
            if (emptySetPool.length < POOL_TARGET_SIZE) {
                emptySetPool.push(dc);
            }
            parent.dirtyChildren = null;
        }
    }
}
// Removes all children from this entry and returns an array of the
// removed children.
function forgetChildren(parent) {
    if (parent.childValues.size > 0) {
        parent.childValues.forEach(function (_value, child) {
            forgetChild(parent, child);
        });
    }
    // Remove this parent Entry from any sets to which it was added by the
    // addToSet method.
    parent.forgetDeps();
    // After we forget all our children, this.dirtyChildren must be empty
    // and therefore must have been reset to null.
    assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
    child.parents.delete(parent);
    parent.childValues.delete(child);
    removeDirtyChild(parent, child);
}
function maybeSubscribe(entry) {
    if (typeof entry.subscribe === "function") {
        try {
            maybeUnsubscribe(entry); // Prevent double subscriptions.
            entry.unsubscribe = entry.subscribe.apply(null, entry.args);
        }
        catch (e) {
            // If this Entry has a subscribe function and it threw an exception
            // (or an unsubscribe function it previously returned now throws),
            // return false to indicate that we were not able to subscribe (or
            // unsubscribe), and this Entry should remain dirty.
            entry.setDirty();
            return false;
        }
    }
    // Returning true indicates either that there was no entry.subscribe
    // function or that it succeeded.
    return true;
}

// A trie data structure that holds object keys weakly, yet can also hold
// non-object keys, unlike the native `WeakMap`.
// If no makeData function is supplied, the looked-up data will be an empty,
// no-prototype Object.
var defaultMakeData = function () { return Object.create(null); };
var KeyTrie = /** @class */ (function () {
    function KeyTrie(weakness, makeData) {
        if (makeData === void 0) { makeData = defaultMakeData; }
        this.weakness = weakness;
        this.makeData = makeData;
    }
    KeyTrie.prototype.lookup = function () {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i] = arguments[_i];
        }
        return this.lookupArray(array);
    };
    KeyTrie.prototype.lookupArray = function (array) {
        var node = this;
        array.forEach(function (key) { return node = node.getChildTrie(key); });
        return node.data || (node.data = this.makeData(array.slice(0)));
    };
    KeyTrie.prototype.getChildTrie = function (key) {
        var map = this.weakness && isObjRef(key)
            ? this.weak || (this.weak = new WeakMap())
            : this.strong || (this.strong = new Map());
        var child = map.get(key);
        if (!child)
            map.set(key, child = new KeyTrie(this.weakness, this.makeData));
        return child;
    };
    return KeyTrie;
}());
function isObjRef(value) {
    switch (typeof value) {
        case "object":
            if (value === null)
                break;
        // Fall through to return true...
        case "function":
            return true;
    }
    return false;
}

function dep(options) {
    var depsByKey = new Map();
    var subscribe = options && options.subscribe;
    function depend(key) {
        var parent = parentEntrySlot.getValue();
        if (parent) {
            var dep_1 = depsByKey.get(key);
            if (!dep_1) {
                depsByKey.set(key, dep_1 = new Set);
            }
            parent.dependOn(dep_1);
            if (typeof subscribe === "function") {
                maybeUnsubscribe(dep_1);
                dep_1.unsubscribe = subscribe(key);
            }
        }
    }
    depend.dirty = function dirty(key) {
        var dep = depsByKey.get(key);
        if (dep) {
            dep.forEach(function (entry) { return entry.setDirty(); });
            depsByKey.delete(key);
            maybeUnsubscribe(dep);
        }
    };
    return depend;
}

// The defaultMakeCacheKey function is remarkably powerful, because it gives
// a unique object for any shallow-identical list of arguments. If you need
// to implement a custom makeCacheKey function, you may find it helpful to
// delegate the final work to defaultMakeCacheKey, which is why we export it
// here. However, you may want to avoid defaultMakeCacheKey if your runtime
// does not support WeakMap, or you have the ability to return a string key.
// In those cases, just write your own custom makeCacheKey functions.
var keyTrie = new KeyTrie(typeof WeakMap === "function");
function defaultMakeCacheKey() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return keyTrie.lookupArray(args);
}
var caches = new Set();
function wrap(originalFunction, options) {
    if (options === void 0) { options = Object.create(null); }
    var cache = new Cache(options.max || Math.pow(2, 16), function (entry) { return entry.dispose(); });
    var keyArgs = options.keyArgs || (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args;
    });
    var makeCacheKey = options.makeCacheKey || defaultMakeCacheKey;
    function optimistic() {
        var key = makeCacheKey.apply(null, keyArgs.apply(null, arguments));
        if (key === void 0) {
            return originalFunction.apply(null, arguments);
        }
        var args = Array.prototype.slice.call(arguments);
        var entry = cache.get(key);
        if (entry) {
            entry.args = args;
        }
        else {
            entry = new Entry(originalFunction, args);
            cache.set(key, entry);
            entry.subscribe = options.subscribe;
        }
        var value = entry.recompute();
        // Move this entry to the front of the least-recently used queue,
        // since we just finished computing its value.
        cache.set(key, entry);
        caches.add(cache);
        // Clean up any excess entries in the cache, but only if there is no
        // active parent entry, meaning we're not in the middle of a larger
        // computation that might be flummoxed by the cleaning.
        if (!parentEntrySlot.hasValue()) {
            caches.forEach(function (cache) { return cache.clean(); });
            caches.clear();
        }
        return value;
    }
    function lookup() {
        var key = makeCacheKey.apply(null, arguments);
        if (key !== void 0) {
            return cache.get(key);
        }
    }
    optimistic.dirty = function () {
        var entry = lookup.apply(null, arguments);
        if (entry) {
            entry.setDirty();
        }
    };
    optimistic.peek = function () {
        var entry = lookup.apply(null, arguments);
        if (entry) {
            return entry.peek();
        }
    };
    return optimistic;
}


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/react-apollo/lib/react-apollo.esm.js":
false,

/***/ "./node_modules/react-apollo/node_modules/@apollo/react-hooks/lib/react-hooks.esm.js":
false,

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
false,

/***/ "./node_modules/react-dom/server.browser.js":
false,

/***/ "./node_modules/zen-observable-ts/lib/bundle.esm.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9BcG9sbG9DbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2NhY2hlL2NvcmUvY2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2NhY2hlL2NvcmUvdHlwZXMvQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2NhY2hlL2NvcmUvdHlwZXMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9jYWNoZS9pbm1lbW9yeS9lbnRpdHlTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvY2FjaGUvaW5tZW1vcnkvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvY2FjaGUvaW5tZW1vcnkvaW5NZW1vcnlDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvY2FjaGUvaW5tZW1vcnkvcG9saWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2NhY2hlL2lubWVtb3J5L3JlYWN0aXZlVmFycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvY2FjaGUvaW5tZW1vcnkvcmVhZEZyb21TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvY2FjaGUvaW5tZW1vcnkvd3JpdGVUb1N0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9jb3JlL0xvY2FsU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2NvcmUvT2JzZXJ2YWJsZVF1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9jb3JlL1F1ZXJ5SW5mby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvY29yZS9RdWVyeU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2NvcmUvUmVvYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvY29yZS9uZXR3b3JrU3RhdHVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9kYXRhL211dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvZXJyb3JzL0Fwb2xsb0Vycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbGluay9jb3JlL0Fwb2xsb0xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvY29yZS9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvY29yZS9lbXB0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbGluay9jb3JlL2V4ZWN1dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvY29yZS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9saW5rL2NvcmUvc3BsaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvaHR0cC9IdHRwTGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbGluay9odHRwL2NoZWNrRmV0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbGluay9odHRwL2NyZWF0ZUh0dHBMaW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9saW5rL2h0dHAvY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvaHR0cC9wYXJzZUFuZENoZWNrSHR0cFJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9saW5rL2h0dHAvcmV3cml0ZVVSSUZvckdFVC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbGluay9odHRwL3NlbGVjdEh0dHBPcHRpb25zQW5kQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbGluay9odHRwL3NlbGVjdFVSSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbGluay9odHRwL3NlcmlhbGl6ZUZldGNoUGFyYW1ldGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9saW5rL3V0aWxzL2NyZWF0ZU9wZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbGluay91dGlscy9mcm9tRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvdXRpbHMvZnJvbVByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvdXRpbHMvdGhyb3dTZXJ2ZXJFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbGluay91dGlscy90b1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvdXRpbHMvdHJhbnNmb3JtT3BlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9saW5rL3V0aWxzL3ZhbGlkYXRlT3BlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9jb250ZXh0L0Fwb2xsb0NvbnN1bWVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9jb250ZXh0L0Fwb2xsb0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3JlYWN0L2NvbnRleHQvQXBvbGxvUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3JlYWN0L2RhdGEvTXV0YXRpb25EYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9kYXRhL09wZXJhdGlvbkRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3JlYWN0L2RhdGEvUXVlcnlEYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9kYXRhL1N1YnNjcmlwdGlvbkRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3JlYWN0L2hvb2tzL3VzZUFwb2xsb0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3QvaG9va3MvdXNlTGF6eVF1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9ob29rcy91c2VNdXRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3QvaG9va3MvdXNlUXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3JlYWN0L2hvb2tzL3VzZVN1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3QvaG9va3MvdXRpbHMvdXNlQmFzZVF1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9ob29rcy91dGlscy91c2VEZWVwTWVtby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3QvcGFyc2VyL3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyL1JlbmRlclByb21pc2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC91dGlsaXRpZXMvY29tbW9uL2FycmF5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzL2NvbW1vbi9jYW5Vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3V0aWxpdGllcy9jb21tb24vY2xvbmVEZWVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC91dGlsaXRpZXMvY29tbW9uL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC91dGlsaXRpZXMvY29tbW9uL2Vycm9ySGFuZGxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3V0aWxpdGllcy9jb21tb24vZmlsdGVySW5QbGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzL2NvbW1vbi9tYXliZURlZXBGcmVlemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3V0aWxpdGllcy9jb21tb24vbWVyZ2VEZWVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC91dGlsaXRpZXMvZ3JhcGhxbC9kaXJlY3RpdmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC91dGlsaXRpZXMvZ3JhcGhxbC9mcmFnbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3V0aWxpdGllcy9ncmFwaHFsL2dldEZyb21BU1QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3V0aWxpdGllcy9ncmFwaHFsL3N0b3JlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3V0aWxpdGllcy9ncmFwaHFsL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzL29ic2VydmFibGVzL0NvbmNhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3V0aWxpdGllcy9vYnNlcnZhYmxlcy9hc3luY01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzL29ic2VydmFibGVzL2l0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9yZWFjdC1ob29rcy9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3cnkvY29udGV4dC9saWIvY29udGV4dC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29wdGltaXNtL2xpYi9idW5kbGUuZXNtLmpzIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlByb2R1Y3RMaXN0IiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJpZHMiLCJzdG9yZSIsImdldCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFILG1CQUF4Qjs7QUE2QkEsU0FBU0MsV0FBVCxHQUF1QjtBQUFBOztBQUFBLGtCQUNZQyxvRUFBUSxDQUFDSCxrQkFBRCxFQUFxQjtBQUFFSSxhQUFTLEVBQUU7QUFBRUMsU0FBRyxFQUFFQywrQ0FBSyxDQUFDQyxHQUFOLENBQVUsS0FBVjtBQUFQO0FBQWIsR0FBckIsQ0FEcEI7QUFBQSxNQUNiQyxPQURhLGFBQ2JBLE9BRGE7QUFBQSxNQUNKQyxLQURJLGFBQ0pBLEtBREk7QUFBQSxNQUNHQyxJQURILGFBQ0dBLElBREg7O0FBR3JCLE1BQUlGLE9BQUosRUFBYSxPQUFPLGdDQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLE9BQU8sbUJBQU1BLEtBQUssQ0FBQ0UsT0FBWixDQUFQO0FBRVhDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBRUEsU0FDRSxtQkFDRSwyQ0FERixDQURGO0FBS0Q7O0dBYlFSLFc7VUFDMEJDLDREOzs7S0FEMUJELFc7QUFlTUEsMEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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bkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLE1BQXFDLEdBQUcsU0FBMkIsR0FBRyw4REFBUztBQUN2RjtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEVBQUUsK0RBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVxQjtBQUN0Qjs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUQ7QUFDNUI7QUFDcUQ7QUFDeEI7QUFDTjtBQUNvQjtBQUNuQjtBQUNJO0FBQ0s7QUFDc0I7QUFDNUI7QUFDZTtBQUNpQjtBQUMxQjtBQUM0QztBQUN0QjtBQUNkO0FBQ2I7QUFDUztBQUNaO0FBQ0Y7QUFDRztBQUNBO0FBQ2E7QUFDTTtBQUNMO0FBQ3JCO0FBQ0Y7QUFDRTtBQUNFO0FBQ087QUFDSTtBQUM3QjtBQUNlOztBQUU3QyxrQkFBa0IsbURBQUcsd0NBQXdDLG1EQUFHLGdFQUFnRSxtREFBRyw2RUFBNkUsbURBQUc7O0FBRXhGO0FBQzNIOzs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFbUQ7QUFDbkQ7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUV3QjtBQUN6Qjs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQzhCOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRkFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRXFDO0FBQ3RDOzs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVEO0FBQ3dC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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUk7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQ0FBaUM7QUFDaEYsZ0RBQWdELGtDQUFrQztBQUNsRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOEc7QUFDOUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUNvRDs7QUFFeEYsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSw2QkFBNkIsZ0JBQWdCO0FBQzdDLGlDQUFpQywwQkFBMEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDBCQUEwQixpREFBSTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsMEJBQTBCLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsd0NBQXdDLEVBQUU7QUFDdkY7QUFDQTtBQUNBLDZDQUE2Qyx3Q0FBd0MsRUFBRTtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw0QkFBNEI7QUFDL0Q7QUFDQTtBQUNBLGtDQUFrQyw0QkFBNEI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNDQUFzQyxFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMseUJBQXlCLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsK0JBQStCO0FBQzVELDRFQUE0RSx3QkFBd0IsRUFBRTtBQUN0RztBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsc0JBQXNCLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVtRDtBQUNuRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZjdiZGYyNDU0ZGQ5MmNiYTBiM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsIFJlc291cmNlTGlzdCwgU3RhY2ssIFRleHRTdHlsZSwgVGh1bWJuYWlsLFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG5cclxuY29uc3QgR0VUX1BST0RVQ1RTX0JZX0lEID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFByb2R1Y3RzKCRpZHM6IFtJRCFdISkge1xyXG4gICAgbm9kZXMoaWRzOiAkaWRzKSB7XHJcbiAgICAgIC4uLiBvbiBQcm9kdWN0IHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGhhbmRsZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uSHRtbFxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIG9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhcmlhbnRzKGZpcnN0OiAxKSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RMaXN0KCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9QUk9EVUNUU19CWV9JRCwgeyB2YXJpYWJsZXM6IHsgaWRzOiBzdG9yZS5nZXQoJ2lkcycpIH0gfSk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG5cclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5IZWxsbyBmcm9tIFByb2R1Y3RMaXN0PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xyXG4iLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gJ3RzbGliJztcbmltcG9ydCB7IGludmFyaWFudCwgSW52YXJpYW50RXJyb3IgfSBmcm9tICd0cy1pbnZhcmlhbnQnO1xuaW1wb3J0IHsgQXBvbGxvTGluayB9IGZyb20gJy4vbGluay9jb3JlL0Fwb2xsb0xpbmsuanMnO1xuaW1wb3J0IHsgZXhlY3V0ZSB9IGZyb20gJy4vbGluay9jb3JlL2V4ZWN1dGUuanMnO1xuaW1wb3J0IHsgTG9jYWxTdGF0ZSB9IGZyb20gJy4vY29yZS9Mb2NhbFN0YXRlLmpzJztcbmltcG9ydCB7IFF1ZXJ5TWFuYWdlciB9IGZyb20gJy4vY29yZS9RdWVyeU1hbmFnZXIuanMnO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbi5qcyc7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJy4vbGluay9odHRwL0h0dHBMaW5rLmpzJztcblxudmFyIGhhc1N1Z2dlc3RlZERldnRvb2xzID0gZmFsc2U7XG52YXIgQXBvbGxvQ2xpZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcG9sbG9DbGllbnQob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMucmVzZXRTdG9yZUNhbGxiYWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmNsZWFyU3RvcmVDYWxsYmFja3MgPSBbXTtcbiAgICAgICAgdmFyIHVyaSA9IG9wdGlvbnMudXJpLCBjcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMsIGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMsIGNhY2hlID0gb3B0aW9ucy5jYWNoZSwgX2EgPSBvcHRpb25zLnNzck1vZGUsIHNzck1vZGUgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnNzckZvcmNlRmV0Y2hEZWxheSwgc3NyRm9yY2VGZXRjaERlbGF5ID0gX2IgPT09IHZvaWQgMCA/IDAgOiBfYiwgY29ubmVjdFRvRGV2VG9vbHMgPSBvcHRpb25zLmNvbm5lY3RUb0RldlRvb2xzLCBfYyA9IG9wdGlvbnMucXVlcnlEZWR1cGxpY2F0aW9uLCBxdWVyeURlZHVwbGljYXRpb24gPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBkZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsIF9kID0gb3B0aW9ucy5hc3N1bWVJbW11dGFibGVSZXN1bHRzLCBhc3N1bWVJbW11dGFibGVSZXN1bHRzID0gX2QgPT09IHZvaWQgMCA/IGZhbHNlIDogX2QsIHJlc29sdmVycyA9IG9wdGlvbnMucmVzb2x2ZXJzLCB0eXBlRGVmcyA9IG9wdGlvbnMudHlwZURlZnMsIGZyYWdtZW50TWF0Y2hlciA9IG9wdGlvbnMuZnJhZ21lbnRNYXRjaGVyLCBjbGllbnRBd2FyZW5lc3NOYW1lID0gb3B0aW9ucy5uYW1lLCBjbGllbnRBd2FyZW5lc3NWZXJzaW9uID0gb3B0aW9ucy52ZXJzaW9uO1xuICAgICAgICB2YXIgbGluayA9IG9wdGlvbnMubGluaztcbiAgICAgICAgaWYgKCFsaW5rKSB7XG4gICAgICAgICAgICBsaW5rID0gdXJpXG4gICAgICAgICAgICAgICAgPyBuZXcgSHR0cExpbmsoeyB1cmk6IHVyaSwgY3JlZGVudGlhbHM6IGNyZWRlbnRpYWxzLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICAgICAgOiBBcG9sbG9MaW5rLmVtcHR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYWNoZSkge1xuICAgICAgICAgICAgdGhyb3cgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gbmV3IEludmFyaWFudEVycm9yKDEpIDogbmV3IEludmFyaWFudEVycm9yKFwiVG8gaW5pdGlhbGl6ZSBBcG9sbG8gQ2xpZW50LCB5b3UgbXVzdCBzcGVjaWZ5IGEgJ2NhY2hlJyBwcm9wZXJ0eSBcIiArXG4gICAgICAgICAgICAgICAgXCJpbiB0aGUgb3B0aW9ucyBvYmplY3QuIFxcblwiICtcbiAgICAgICAgICAgICAgICBcIkZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlzaXQ6IGh0dHBzOi8vZ28uYXBvbGxvLmRldi9jL2RvY3NcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saW5rID0gbGluaztcbiAgICAgICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICAgICAgICB0aGlzLmRpc2FibGVOZXR3b3JrRmV0Y2hlcyA9IHNzck1vZGUgfHwgc3NyRm9yY2VGZXRjaERlbGF5ID4gMDtcbiAgICAgICAgdGhpcy5xdWVyeURlZHVwbGljYXRpb24gPSBxdWVyeURlZHVwbGljYXRpb247XG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy50eXBlRGVmcyA9IHR5cGVEZWZzO1xuICAgICAgICBpZiAoc3NyRm9yY2VGZXRjaERlbGF5KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIChfdGhpcy5kaXNhYmxlTmV0d29ya0ZldGNoZXMgPSBmYWxzZSk7IH0sIHNzckZvcmNlRmV0Y2hEZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53YXRjaFF1ZXJ5ID0gdGhpcy53YXRjaFF1ZXJ5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubXV0YXRlID0gdGhpcy5tdXRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXNldFN0b3JlID0gdGhpcy5yZXNldFN0b3JlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVGZXRjaE9ic2VydmFibGVRdWVyaWVzID0gdGhpcy5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdmFyIGRlZmF1bHRDb25uZWN0VG9EZXZUb29scyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAhd2luZG93Ll9fQVBPTExPX0NMSUVOVF9fO1xuICAgICAgICBpZiAodHlwZW9mIGNvbm5lY3RUb0RldlRvb2xzID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBkZWZhdWx0Q29ubmVjdFRvRGV2VG9vbHNcbiAgICAgICAgICAgIDogY29ubmVjdFRvRGV2VG9vbHMgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5fX0FQT0xMT19DTElFTlRfXyA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYXNTdWdnZXN0ZWREZXZ0b29scyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBoYXNTdWdnZXN0ZWREZXZ0b29scyA9IHRydWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQgJiZcbiAgICAgICAgICAgICAgICB3aW5kb3cudG9wID09PSB3aW5kb3cuc2VsZikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Ll9fQVBPTExPX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnRG93bmxvYWQgdGhlIEFwb2xsbyBEZXZUb29scyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZm9yIGEgYmV0dGVyIGRldmVsb3BtZW50IGV4cGVyaWVuY2U6ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9hcG9sbG8tY2xpZW50LWRldmVsb3Blci10L2pka2tua2tiZWJiYXBpbGdvZWNjY2lnbGtmYm1ibmZtJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy5sb2NhbFN0YXRlID0gbmV3IExvY2FsU3RhdGUoe1xuICAgICAgICAgICAgY2FjaGU6IGNhY2hlLFxuICAgICAgICAgICAgY2xpZW50OiB0aGlzLFxuICAgICAgICAgICAgcmVzb2x2ZXJzOiByZXNvbHZlcnMsXG4gICAgICAgICAgICBmcmFnbWVudE1hdGNoZXI6IGZyYWdtZW50TWF0Y2hlcixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyID0gbmV3IFF1ZXJ5TWFuYWdlcih7XG4gICAgICAgICAgICBjYWNoZTogdGhpcy5jYWNoZSxcbiAgICAgICAgICAgIGxpbms6IHRoaXMubGluayxcbiAgICAgICAgICAgIHF1ZXJ5RGVkdXBsaWNhdGlvbjogcXVlcnlEZWR1cGxpY2F0aW9uLFxuICAgICAgICAgICAgc3NyTW9kZTogc3NyTW9kZSxcbiAgICAgICAgICAgIGNsaWVudEF3YXJlbmVzczoge1xuICAgICAgICAgICAgICAgIG5hbWU6IGNsaWVudEF3YXJlbmVzc05hbWUsXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogY2xpZW50QXdhcmVuZXNzVmVyc2lvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2NhbFN0YXRlOiB0aGlzLmxvY2FsU3RhdGUsXG4gICAgICAgICAgICBhc3N1bWVJbW11dGFibGVSZXN1bHRzOiBhc3N1bWVJbW11dGFibGVSZXN1bHRzLFxuICAgICAgICAgICAgb25Ccm9hZGNhc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZGV2VG9vbHNIb29rQ2IpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGV2VG9vbHNIb29rQ2Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcmllczogX3RoaXMucXVlcnlNYW5hZ2VyLmdldFF1ZXJ5U3RvcmUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbnM6IF90aGlzLnF1ZXJ5TWFuYWdlci5tdXRhdGlvblN0b3JlLmdldFN0b3JlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVdpdGhPcHRpbWlzdGljUmVzdWx0czogX3RoaXMuY2FjaGUuZXh0cmFjdCh0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIuc3RvcCgpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS53YXRjaFF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdE9wdGlvbnMud2F0Y2hRdWVyeSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLndhdGNoUXVlcnkpLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlTmV0d29ya0ZldGNoZXMgJiZcbiAgICAgICAgICAgIChvcHRpb25zLmZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5JyB8fFxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICdjYWNoZS1hbmQtbmV0d29yaycpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGZldGNoUG9saWN5OiAnY2FjaGUtZmlyc3QnIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci53YXRjaFF1ZXJ5KG9wdGlvbnMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRPcHRpb25zLnF1ZXJ5KSB7XG4gICAgICAgICAgICBvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMucXVlcnkpLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQob3B0aW9ucy5mZXRjaFBvbGljeSAhPT0gJ2NhY2hlLWFuZC1uZXR3b3JrJywgMikgOiBpbnZhcmlhbnQob3B0aW9ucy5mZXRjaFBvbGljeSAhPT0gJ2NhY2hlLWFuZC1uZXR3b3JrJywgJ1RoZSBjYWNoZS1hbmQtbmV0d29yayBmZXRjaFBvbGljeSBkb2VzIG5vdCB3b3JrIHdpdGggY2xpZW50LnF1ZXJ5LCBiZWNhdXNlICcgK1xuICAgICAgICAgICAgJ2NsaWVudC5xdWVyeSBjYW4gb25seSByZXR1cm4gYSBzaW5nbGUgcmVzdWx0LiBQbGVhc2UgdXNlIGNsaWVudC53YXRjaFF1ZXJ5ICcgK1xuICAgICAgICAgICAgJ3RvIHJlY2VpdmUgbXVsdGlwbGUgcmVzdWx0cyBmcm9tIHRoZSBjYWNoZSBhbmQgdGhlIG5ldHdvcmssIG9yIGNvbnNpZGVyICcgK1xuICAgICAgICAgICAgJ3VzaW5nIGEgZGlmZmVyZW50IGZldGNoUG9saWN5LCBzdWNoIGFzIGNhY2hlLWZpcnN0IG9yIG5ldHdvcmstb25seS4nKTtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZU5ldHdvcmtGZXRjaGVzICYmIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGZldGNoUG9saWN5OiAnY2FjaGUtZmlyc3QnIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5xdWVyeShvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUubXV0YXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdE9wdGlvbnMubXV0YXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMubXV0YXRlKSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLm11dGF0ZShvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLnN0YXJ0R3JhcGhRTFN1YnNjcmlwdGlvbihvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucmVhZFF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUucmVhZFF1ZXJ5KG9wdGlvbnMsIG9wdGltaXN0aWMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZWFkRnJhZ21lbnQgPSBmdW5jdGlvbiAob3B0aW9ucywgb3B0aW1pc3RpYykge1xuICAgICAgICBpZiAob3B0aW1pc3RpYyA9PT0gdm9pZCAwKSB7IG9wdGltaXN0aWMgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5yZWFkRnJhZ21lbnQob3B0aW9ucywgb3B0aW1pc3RpYyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLndyaXRlUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNhY2hlLndyaXRlUXVlcnkob3B0aW9ucyk7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUud3JpdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2FjaGUud3JpdGVGcmFnbWVudChvcHRpb25zKTtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5fX2FjdGlvbkhvb2tGb3JEZXZUb29scyA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB0aGlzLmRldlRvb2xzSG9va0NiID0gY2I7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLl9fcmVxdWVzdFJhdyA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiBleGVjdXRlKHRoaXMubGluaywgcGF5bG9hZCk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnJlc2V0U3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucXVlcnlNYW5hZ2VyLmNsZWFyU3RvcmUoKTsgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UuYWxsKF90aGlzLnJlc2V0U3RvcmVDYWxsYmFja3MubWFwKGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4oKTsgfSkpOyB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmVGZXRjaE9ic2VydmFibGVRdWVyaWVzKCk7IH0pO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5jbGVhclN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnF1ZXJ5TWFuYWdlci5jbGVhclN0b3JlKCk7IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLmFsbChfdGhpcy5jbGVhclN0b3JlQ2FsbGJhY2tzLm1hcChmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGZuKCk7IH0pKTsgfSk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLm9uUmVzZXRTdG9yZSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnJlc2V0U3RvcmVDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5yZXNldFN0b3JlQ2FsbGJhY2tzID0gX3RoaXMucmVzZXRTdG9yZUNhbGxiYWNrcy5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09IGNiOyB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUub25DbGVhclN0b3JlID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2xlYXJTdG9yZUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmNsZWFyU3RvcmVDYWxsYmFja3MgPSBfdGhpcy5jbGVhclN0b3JlQ2FsbGJhY2tzLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gY2I7IH0pO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMgPSBmdW5jdGlvbiAoaW5jbHVkZVN0YW5kYnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcyhpbmNsdWRlU3RhbmRieSk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLmV4dHJhY3QgPSBmdW5jdGlvbiAob3B0aW1pc3RpYykge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5leHRyYWN0KG9wdGltaXN0aWMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZXN0b3JlID0gZnVuY3Rpb24gKHNlcmlhbGl6ZWRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5yZXN0b3JlKHNlcmlhbGl6ZWRTdGF0ZSk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLmFkZFJlc29sdmVycyA9IGZ1bmN0aW9uIChyZXNvbHZlcnMpIHtcbiAgICAgICAgdGhpcy5sb2NhbFN0YXRlLmFkZFJlc29sdmVycyhyZXNvbHZlcnMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5zZXRSZXNvbHZlcnMgPSBmdW5jdGlvbiAocmVzb2x2ZXJzKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdGF0ZS5zZXRSZXNvbHZlcnMocmVzb2x2ZXJzKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuZ2V0UmVzb2x2ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbFN0YXRlLmdldFJlc29sdmVycygpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5zZXRMb2NhbFN0YXRlRnJhZ21lbnRNYXRjaGVyID0gZnVuY3Rpb24gKGZyYWdtZW50TWF0Y2hlcikge1xuICAgICAgICB0aGlzLmxvY2FsU3RhdGUuc2V0RnJhZ21lbnRNYXRjaGVyKGZyYWdtZW50TWF0Y2hlcik7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnNldExpbmsgPSBmdW5jdGlvbiAobmV3TGluaykge1xuICAgICAgICB0aGlzLmxpbmsgPSB0aGlzLnF1ZXJ5TWFuYWdlci5saW5rID0gbmV3TGluaztcbiAgICB9O1xuICAgIHJldHVybiBBcG9sbG9DbGllbnQ7XG59KCkpO1xuXG5leHBvcnQgeyBBcG9sbG9DbGllbnQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFwb2xsb0NsaWVudC5qcy5tYXBcbiIsImltcG9ydCB7IGdldEZyYWdtZW50UXVlcnlEb2N1bWVudCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9ncmFwaHFsL2ZyYWdtZW50cy5qcyc7XG5pbXBvcnQgeyB3cmFwIH0gZnJvbSAnb3B0aW1pc20nO1xuXG52YXIgQXBvbGxvQ2FjaGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFwb2xsb0NhY2hlKCkge1xuICAgICAgICB0aGlzLmdldEZyYWdtZW50RG9jID0gd3JhcChnZXRGcmFnbWVudFF1ZXJ5RG9jdW1lbnQpO1xuICAgIH1cbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUucmVjb3JkT3B0aW1pc3RpY1RyYW5zYWN0aW9uID0gZnVuY3Rpb24gKHRyYW5zYWN0aW9uLCBvcHRpbWlzdGljSWQpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24sIG9wdGltaXN0aWNJZCk7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUudHJhbnNmb3JtRG9jdW1lbnQgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUuZ2MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS5tb2RpZnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUudHJhbnNmb3JtRm9yTGluayA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUucmVhZFF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZCh7XG4gICAgICAgICAgICByb290SWQ6IG9wdGlvbnMuaWQgfHwgJ1JPT1RfUVVFUlknLFxuICAgICAgICAgICAgcXVlcnk6IG9wdGlvbnMucXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgb3B0aW1pc3RpYzogb3B0aW1pc3RpYyxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUucmVhZEZyYWdtZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZCh7XG4gICAgICAgICAgICBxdWVyeTogdGhpcy5nZXRGcmFnbWVudERvYyhvcHRpb25zLmZyYWdtZW50LCBvcHRpb25zLmZyYWdtZW50TmFtZSksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgcm9vdElkOiBvcHRpb25zLmlkLFxuICAgICAgICAgICAgb3B0aW1pc3RpYzogb3B0aW1pc3RpYyxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUud3JpdGVRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlKHtcbiAgICAgICAgICAgIGRhdGFJZDogb3B0aW9ucy5pZCB8fCAnUk9PVF9RVUVSWScsXG4gICAgICAgICAgICByZXN1bHQ6IG9wdGlvbnMuZGF0YSxcbiAgICAgICAgICAgIHF1ZXJ5OiBvcHRpb25zLnF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIGJyb2FkY2FzdDogb3B0aW9ucy5icm9hZGNhc3QsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLndyaXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy53cml0ZSh7XG4gICAgICAgICAgICBkYXRhSWQ6IG9wdGlvbnMuaWQsXG4gICAgICAgICAgICByZXN1bHQ6IG9wdGlvbnMuZGF0YSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICBxdWVyeTogdGhpcy5nZXRGcmFnbWVudERvYyhvcHRpb25zLmZyYWdtZW50LCBvcHRpb25zLmZyYWdtZW50TmFtZSksXG4gICAgICAgICAgICBicm9hZGNhc3Q6IG9wdGlvbnMuYnJvYWRjYXN0LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBBcG9sbG9DYWNoZTtcbn0oKSk7XG5cbmV4cG9ydCB7IEFwb2xsb0NhY2hlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWNoZS5qcy5tYXBcbiIsInZhciBDYWNoZTtcbihmdW5jdGlvbiAoQ2FjaGUpIHtcbn0pKENhY2hlIHx8IChDYWNoZSA9IHt9KSk7XG5cbmV4cG9ydCB7IENhY2hlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DYWNoZS5qcy5tYXBcbiIsInZhciBNaXNzaW5nRmllbGRFcnJvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWlzc2luZ0ZpZWxkRXJyb3IobWVzc2FnZSwgcGF0aCwgcXVlcnksIHZhcmlhYmxlcykge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIH1cbiAgICByZXR1cm4gTWlzc2luZ0ZpZWxkRXJyb3I7XG59KCkpO1xuXG5leHBvcnQgeyBNaXNzaW5nRmllbGRFcnJvciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbW9uLmpzLm1hcFxuIiwiaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gJ3RzbGliJztcbmltcG9ydCB7IGlzUmVmZXJlbmNlLCBtYWtlUmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dyYXBocWwvc3RvcmVVdGlscy5qcyc7XG5pbXBvcnQgeyBlcXVhbCB9IGZyb20gJ0B3cnkvZXF1YWxpdHknO1xuaW1wb3J0IHsgY2FuVXNlV2Vha01hcCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jb21tb24vY2FuVXNlLmpzJztcbmltcG9ydCB7IERlZXBNZXJnZXIgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvY29tbW9uL21lcmdlRGVlcC5qcyc7XG5pbXBvcnQgeyBLZXlUcmllLCBkZXAgfSBmcm9tICdvcHRpbWlzbSc7XG5pbXBvcnQgeyBtYXliZURlZXBGcmVlemUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvY29tbW9uL21heWJlRGVlcEZyZWV6ZS5qcyc7XG5pbXBvcnQgeyBoYXNPd24sIGZpZWxkTmFtZUZyb21TdG9yZU5hbWUgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG52YXIgREVMRVRFID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbnZhciBkZWxNb2RpZmllciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIERFTEVURTsgfTtcbnZhciBFbnRpdHlTdG9yZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRW50aXR5U3RvcmUocG9saWNpZXMsIGdyb3VwKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucG9saWNpZXMgPSBwb2xpY2llcztcbiAgICAgICAgdGhpcy5ncm91cCA9IGdyb3VwO1xuICAgICAgICB0aGlzLmRhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnJvb3RJZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnJlZnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLmdldEZpZWxkVmFsdWUgPSBmdW5jdGlvbiAob2JqZWN0T3JSZWZlcmVuY2UsIHN0b3JlRmllbGROYW1lKSB7IHJldHVybiBtYXliZURlZXBGcmVlemUoaXNSZWZlcmVuY2Uob2JqZWN0T3JSZWZlcmVuY2UpXG4gICAgICAgICAgICA/IF90aGlzLmdldChvYmplY3RPclJlZmVyZW5jZS5fX3JlZiwgc3RvcmVGaWVsZE5hbWUpXG4gICAgICAgICAgICA6IG9iamVjdE9yUmVmZXJlbmNlICYmIG9iamVjdE9yUmVmZXJlbmNlW3N0b3JlRmllbGROYW1lXSk7IH07XG4gICAgICAgIHRoaXMuY2FuUmVhZCA9IGZ1bmN0aW9uIChvYmpPclJlZikge1xuICAgICAgICAgICAgcmV0dXJuIGlzUmVmZXJlbmNlKG9iak9yUmVmKVxuICAgICAgICAgICAgICAgID8gX3RoaXMuaGFzKG9iak9yUmVmLl9fcmVmKVxuICAgICAgICAgICAgICAgIDogdHlwZW9mIG9iak9yUmVmID09PSBcIm9iamVjdFwiO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRvUmVmZXJlbmNlID0gZnVuY3Rpb24gKG9iak9ySWRPclJlZiwgbWVyZ2VJbnRvU3RvcmUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqT3JJZE9yUmVmID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VSZWZlcmVuY2Uob2JqT3JJZE9yUmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1JlZmVyZW5jZShvYmpPcklkT3JSZWYpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iak9ySWRPclJlZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpZCA9IF90aGlzLnBvbGljaWVzLmlkZW50aWZ5KG9iak9ySWRPclJlZilbMF07XG4gICAgICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmID0gbWFrZVJlZmVyZW5jZShpZCk7XG4gICAgICAgICAgICAgICAgaWYgKG1lcmdlSW50b1N0b3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1lcmdlKGlkLCBvYmpPcklkT3JSZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgdGhpcy5kYXRhKTtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvb2t1cChkYXRhSWQsIHRydWUpICE9PSB2b2lkIDA7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGRhdGFJZCwgZmllbGROYW1lKSB7XG4gICAgICAgIHRoaXMuZ3JvdXAuZGVwZW5kKGRhdGFJZCwgZmllbGROYW1lKTtcbiAgICAgICAgaWYgKGhhc093bi5jYWxsKHRoaXMuZGF0YSwgZGF0YUlkKSkge1xuICAgICAgICAgICAgdmFyIHN0b3JlT2JqZWN0ID0gdGhpcy5kYXRhW2RhdGFJZF07XG4gICAgICAgICAgICBpZiAoc3RvcmVPYmplY3QgJiYgaGFzT3duLmNhbGwoc3RvcmVPYmplY3QsIGZpZWxkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmVPYmplY3RbZmllbGROYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcIl9fdHlwZW5hbWVcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcy5wb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZCwgZGF0YUlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWRbZGF0YUlkXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIExheWVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KGRhdGFJZCwgZmllbGROYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmxvb2t1cCA9IGZ1bmN0aW9uIChkYXRhSWQsIGRlcGVuZE9uRXhpc3RlbmNlKSB7XG4gICAgICAgIGlmIChkZXBlbmRPbkV4aXN0ZW5jZSlcbiAgICAgICAgICAgIHRoaXMuZ3JvdXAuZGVwZW5kKGRhdGFJZCwgXCJfX2V4aXN0c1wiKTtcbiAgICAgICAgcmV0dXJuIGhhc093bi5jYWxsKHRoaXMuZGF0YSwgZGF0YUlkKSA/IHRoaXMuZGF0YVtkYXRhSWRdIDpcbiAgICAgICAgICAgIHRoaXMgaW5zdGFuY2VvZiBMYXllciA/IHRoaXMucGFyZW50Lmxvb2t1cChkYXRhSWQsIGRlcGVuZE9uRXhpc3RlbmNlKSA6IHZvaWQgMDtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIChkYXRhSWQsIGluY29taW5nKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBleGlzdGluZyA9IHRoaXMubG9va3VwKGRhdGFJZCk7XG4gICAgICAgIHZhciBtZXJnZWQgPSBuZXcgRGVlcE1lcmdlcihzdG9yZU9iamVjdFJlY29uY2lsZXIpLm1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZyk7XG4gICAgICAgIHRoaXMuZGF0YVtkYXRhSWRdID0gbWVyZ2VkO1xuICAgICAgICBpZiAobWVyZ2VkICE9PSBleGlzdGluZykge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVmc1tkYXRhSWRdO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXAuY2FjaGluZykge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZHNUb0RpcnR5XzEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgICAgIGlmICghZXhpc3RpbmcpXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc1RvRGlydHlfMS5fX2V4aXN0cyA9IDE7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5jb21pbmcpLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhpc3RpbmcgfHwgZXhpc3Rpbmdbc3RvcmVGaWVsZE5hbWVdICE9PSBtZXJnZWRbc3RvcmVGaWVsZE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNUb0RpcnR5XzFbZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSldID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXJnZWRbc3RvcmVGaWVsZE5hbWVdID09PSB2b2lkIDAgJiYgIShfdGhpcyBpbnN0YW5jZW9mIExheWVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXJnZWRbc3RvcmVGaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZmllbGRzVG9EaXJ0eV8xKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZE5hbWUpIHsgcmV0dXJuIF90aGlzLmdyb3VwLmRpcnR5KGRhdGFJZCwgZmllbGROYW1lKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5tb2RpZnkgPSBmdW5jdGlvbiAoZGF0YUlkLCBmaWVsZHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0b3JlT2JqZWN0ID0gdGhpcy5sb29rdXAoZGF0YUlkKTtcbiAgICAgICAgaWYgKHN0b3JlT2JqZWN0KSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlZEZpZWxkc18xID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIHZhciBuZWVkVG9NZXJnZV8xID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgYWxsRGVsZXRlZF8xID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciByZWFkRmllbGRfMSA9IGZ1bmN0aW9uIChmaWVsZE5hbWVPck9wdGlvbnMsIGZyb20pIHsgcmV0dXJuIF90aGlzLnBvbGljaWVzLnJlYWRGaWVsZCh0eXBlb2YgZmllbGROYW1lT3JPcHRpb25zID09PSBcInN0cmluZ1wiID8ge1xuICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGROYW1lT3JPcHRpb25zLFxuICAgICAgICAgICAgICAgIGZyb206IGZyb20gfHwgbWFrZVJlZmVyZW5jZShkYXRhSWQpLFxuICAgICAgICAgICAgfSA6IGZpZWxkTmFtZU9yT3B0aW9ucywgeyBzdG9yZTogX3RoaXMgfSk7IH07XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdG9yZU9iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkVmFsdWUgPSBzdG9yZU9iamVjdFtzdG9yZUZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgPT09IHZvaWQgMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHZhciBtb2RpZnkgPSB0eXBlb2YgZmllbGRzID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPyBmaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgOiBmaWVsZHNbc3RvcmVGaWVsZE5hbWVdIHx8IGZpZWxkc1tmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChtb2RpZnkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gbW9kaWZ5ID09PSBkZWxNb2RpZmllciA/IERFTEVURSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnkobWF5YmVEZWVwRnJlZXplKGZpZWxkVmFsdWUpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgREVMRVRFOiBERUxFVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVGaWVsZE5hbWU6IHN0b3JlRmllbGROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVmZXJlbmNlOiBpc1JlZmVyZW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b1JlZmVyZW5jZTogX3RoaXMudG9SZWZlcmVuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuUmVhZDogX3RoaXMuY2FuUmVhZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkRmllbGQ6IHJlYWRGaWVsZF8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gREVMRVRFKVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZmllbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZEZpZWxkc18xW3N0b3JlRmllbGROYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmVlZFRvTWVyZ2VfMSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBhbGxEZWxldGVkXzEgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChuZWVkVG9NZXJnZV8xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXJnZShkYXRhSWQsIGNoYW5nZWRGaWVsZHNfMSk7XG4gICAgICAgICAgICAgICAgaWYgKGFsbERlbGV0ZWRfMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIExheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFbZGF0YUlkXSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbZGF0YUlkXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLmRpcnR5KGRhdGFJZCwgXCJfX2V4aXN0c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChkYXRhSWQsIGZpZWxkTmFtZSwgYXJncykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBzdG9yZU9iamVjdCA9IHRoaXMubG9va3VwKGRhdGFJZCk7XG4gICAgICAgIGlmIChzdG9yZU9iamVjdCkge1xuICAgICAgICAgICAgdmFyIHR5cGVuYW1lID0gdGhpcy5nZXRGaWVsZFZhbHVlKHN0b3JlT2JqZWN0LCBcIl9fdHlwZW5hbWVcIik7XG4gICAgICAgICAgICB2YXIgc3RvcmVGaWVsZE5hbWUgPSBmaWVsZE5hbWUgJiYgYXJnc1xuICAgICAgICAgICAgICAgID8gdGhpcy5wb2xpY2llcy5nZXRTdG9yZUZpZWxkTmFtZSh7IHR5cGVuYW1lOiB0eXBlbmFtZSwgZmllbGROYW1lOiBmaWVsZE5hbWUsIGFyZ3M6IGFyZ3MgfSlcbiAgICAgICAgICAgICAgICA6IGZpZWxkTmFtZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGlmeShkYXRhSWQsIHN0b3JlRmllbGROYW1lID8gKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2Fbc3RvcmVGaWVsZE5hbWVdID0gZGVsTW9kaWZpZXIsXG4gICAgICAgICAgICAgICAgX2EpIDogZGVsTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5ldmljdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBldmljdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChvcHRpb25zLmlkKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwodGhpcy5kYXRhLCBvcHRpb25zLmlkKSkge1xuICAgICAgICAgICAgICAgIGV2aWN0ZWQgPSB0aGlzLmRlbGV0ZShvcHRpb25zLmlkLCBvcHRpb25zLmZpZWxkTmFtZSwgb3B0aW9ucy5hcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBldmljdGVkID0gdGhpcy5wYXJlbnQuZXZpY3Qob3B0aW9ucykgfHwgZXZpY3RlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZpZWxkTmFtZSB8fCBldmljdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cC5kaXJ0eShvcHRpb25zLmlkLCBvcHRpb25zLmZpZWxkTmFtZSB8fCBcIl9fZXhpc3RzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmljdGVkO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlcGxhY2UobnVsbCk7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIChuZXdEYXRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgICAgICBpZiAoIShuZXdEYXRhICYmIGhhc093bi5jYWxsKG5ld0RhdGEsIGRhdGFJZCkpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGVsZXRlKGRhdGFJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobmV3RGF0YSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMobmV3RGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubWVyZ2UoZGF0YUlkLCBuZXdEYXRhW2RhdGFJZF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5yZXRhaW4gPSBmdW5jdGlvbiAocm9vdElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3RJZHNbcm9vdElkXSA9ICh0aGlzLnJvb3RJZHNbcm9vdElkXSB8fCAwKSArIDE7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uIChyb290SWQpIHtcbiAgICAgICAgaWYgKHRoaXMucm9vdElkc1tyb290SWRdID4gMCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gLS10aGlzLnJvb3RJZHNbcm9vdElkXTtcbiAgICAgICAgICAgIGlmICghY291bnQpXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucm9vdElkc1tyb290SWRdO1xuICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmdldFJvb3RJZFNldCA9IGZ1bmN0aW9uIChpZHMpIHtcbiAgICAgICAgaWYgKGlkcyA9PT0gdm9pZCAwKSB7IGlkcyA9IG5ldyBTZXQoKTsgfVxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJvb3RJZHMpLmZvckVhY2goaWRzLmFkZCwgaWRzKTtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBMYXllcikge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZ2V0Um9vdElkU2V0KGlkcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkcztcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5nYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGlkcyA9IHRoaXMuZ2V0Um9vdElkU2V0KCk7XG4gICAgICAgIHZhciBzbmFwc2hvdCA9IHRoaXMudG9PYmplY3QoKTtcbiAgICAgICAgaWRzLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoc25hcHNob3QsIGlkKSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKF90aGlzLmZpbmRDaGlsZFJlZklkcyhpZCkpLmZvckVhY2goaWRzLmFkZCwgaWRzKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgc25hcHNob3RbaWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGlkc1RvUmVtb3ZlID0gT2JqZWN0LmtleXMoc25hcHNob3QpO1xuICAgICAgICBpZiAoaWRzVG9SZW1vdmUubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgcm9vdF8xID0gdGhpcztcbiAgICAgICAgICAgIHdoaWxlIChyb290XzEgaW5zdGFuY2VvZiBMYXllcilcbiAgICAgICAgICAgICAgICByb290XzEgPSByb290XzEucGFyZW50O1xuICAgICAgICAgICAgaWRzVG9SZW1vdmUuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIHJvb3RfMS5kZWxldGUoaWQpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWRzVG9SZW1vdmU7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuZmluZENoaWxkUmVmSWRzID0gZnVuY3Rpb24gKGRhdGFJZCkge1xuICAgICAgICBpZiAoIWhhc093bi5jYWxsKHRoaXMucmVmcywgZGF0YUlkKSkge1xuICAgICAgICAgICAgdmFyIGZvdW5kXzEgPSB0aGlzLnJlZnNbZGF0YUlkXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICB2YXIgd29ya1NldF8xID0gbmV3IFNldChbdGhpcy5kYXRhW2RhdGFJZF1dKTtcbiAgICAgICAgICAgIHZhciBjYW5UcmF2ZXJzZV8xID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnOyB9O1xuICAgICAgICAgICAgd29ya1NldF8xLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIGlmIChpc1JlZmVyZW5jZShvYmopKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kXzFbb2JqLl9fcmVmXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNhblRyYXZlcnNlXzEob2JqKSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKG9iailcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoY2FuVHJhdmVyc2VfMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKHdvcmtTZXRfMS5hZGQsIHdvcmtTZXRfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVmc1tkYXRhSWRdO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLm1ha2VDYWNoZUtleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cC5rZXlNYWtlci5sb29rdXBBcnJheShhcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiBFbnRpdHlTdG9yZTtcbn0oKSk7XG52YXIgQ2FjaGVHcm91cCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FjaGVHcm91cChjYWNoaW5nKSB7XG4gICAgICAgIHRoaXMuY2FjaGluZyA9IGNhY2hpbmc7XG4gICAgICAgIHRoaXMuZCA9IG51bGw7XG4gICAgICAgIHRoaXMua2V5TWFrZXIgPSBuZXcgS2V5VHJpZShjYW5Vc2VXZWFrTWFwKTtcbiAgICAgICAgdGhpcy5kID0gY2FjaGluZyA/IGRlcCgpIDogbnVsbDtcbiAgICB9XG4gICAgQ2FjaGVHcm91cC5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZCkge1xuICAgICAgICAgICAgdGhpcy5kKG1ha2VEZXBLZXkoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDYWNoZUdyb3VwLnByb3RvdHlwZS5kaXJ0eSA9IGZ1bmN0aW9uIChkYXRhSWQsIHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmQpIHtcbiAgICAgICAgICAgIHRoaXMuZC5kaXJ0eShtYWtlRGVwS2V5KGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENhY2hlR3JvdXA7XG59KCkpO1xuZnVuY3Rpb24gbWFrZURlcEtleShkYXRhSWQsIHN0b3JlRmllbGROYW1lKSB7XG4gICAgcmV0dXJuIGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpICsgJyMnICsgZGF0YUlkO1xufVxuKGZ1bmN0aW9uIChFbnRpdHlTdG9yZSkge1xuICAgIHZhciBSb290ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKFJvb3QsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIFJvb3QoX2EpIHtcbiAgICAgICAgICAgIHZhciBwb2xpY2llcyA9IF9hLnBvbGljaWVzLCBfYiA9IF9hLnJlc3VsdENhY2hpbmcsIHJlc3VsdENhY2hpbmcgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBzZWVkID0gX2Euc2VlZDtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHBvbGljaWVzLCBuZXcgQ2FjaGVHcm91cChyZXN1bHRDYWNoaW5nKSkgfHwgdGhpcztcbiAgICAgICAgICAgIF90aGlzLnNoYXJlZExheWVyR3JvdXAgPSBuZXcgQ2FjaGVHcm91cChyZXN1bHRDYWNoaW5nKTtcbiAgICAgICAgICAgIGlmIChzZWVkKVxuICAgICAgICAgICAgICAgIF90aGlzLnJlcGxhY2Uoc2VlZCk7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgUm9vdC5wcm90b3R5cGUuYWRkTGF5ZXIgPSBmdW5jdGlvbiAobGF5ZXJJZCwgcmVwbGF5KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IExheWVyKGxheWVySWQsIHRoaXMsIHJlcGxheSwgdGhpcy5zaGFyZWRMYXllckdyb3VwKTtcbiAgICAgICAgfTtcbiAgICAgICAgUm9vdC5wcm90b3R5cGUucmVtb3ZlTGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFJvb3Q7XG4gICAgfShFbnRpdHlTdG9yZSkpO1xuICAgIEVudGl0eVN0b3JlLlJvb3QgPSBSb290O1xufSkoRW50aXR5U3RvcmUgfHwgKEVudGl0eVN0b3JlID0ge30pKTtcbnZhciBMYXllciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExheWVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExheWVyKGlkLCBwYXJlbnQsIHJlcGxheSwgZ3JvdXApIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcGFyZW50LnBvbGljaWVzLCBncm91cCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaWQgPSBpZDtcbiAgICAgICAgX3RoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBfdGhpcy5yZXBsYXkgPSByZXBsYXk7XG4gICAgICAgIF90aGlzLmdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHJlcGxheShfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTGF5ZXIucHJvdG90eXBlLmFkZExheWVyID0gZnVuY3Rpb24gKGxheWVySWQsIHJlcGxheSkge1xuICAgICAgICByZXR1cm4gbmV3IExheWVyKGxheWVySWQsIHRoaXMsIHJlcGxheSwgdGhpcy5ncm91cCk7XG4gICAgfTtcbiAgICBMYXllci5wcm90b3R5cGUucmVtb3ZlTGF5ZXIgPSBmdW5jdGlvbiAobGF5ZXJJZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQucmVtb3ZlTGF5ZXIobGF5ZXJJZCk7XG4gICAgICAgIGlmIChsYXllcklkID09PSB0aGlzLmlkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncm91cC5jYWNoaW5nKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmRhdGFbZGF0YUlkXSAhPT0gcGFyZW50Lmxvb2t1cChkYXRhSWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZWxldGUoZGF0YUlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50ID09PSB0aGlzLnBhcmVudClcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICByZXR1cm4gcGFyZW50LmFkZExheWVyKHRoaXMuaWQsIHRoaXMucmVwbGF5KTtcbiAgICB9O1xuICAgIExheWVyLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLnBhcmVudC50b09iamVjdCgpKSwgdGhpcy5kYXRhKTtcbiAgICB9O1xuICAgIExheWVyLnByb3RvdHlwZS5maW5kQ2hpbGRSZWZJZHMgPSBmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgIHZhciBmcm9tUGFyZW50ID0gdGhpcy5wYXJlbnQuZmluZENoaWxkUmVmSWRzKGRhdGFJZCk7XG4gICAgICAgIHJldHVybiBoYXNPd24uY2FsbCh0aGlzLmRhdGEsIGRhdGFJZCkgPyBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZnJvbVBhcmVudCksIF9zdXBlci5wcm90b3R5cGUuZmluZENoaWxkUmVmSWRzLmNhbGwodGhpcywgZGF0YUlkKSkgOiBmcm9tUGFyZW50O1xuICAgIH07XG4gICAgcmV0dXJuIExheWVyO1xufShFbnRpdHlTdG9yZSkpO1xuZnVuY3Rpb24gc3RvcmVPYmplY3RSZWNvbmNpbGVyKGV4aXN0aW5nT2JqZWN0LCBpbmNvbWluZ09iamVjdCwgcHJvcGVydHkpIHtcbiAgICB2YXIgZXhpc3RpbmdWYWx1ZSA9IGV4aXN0aW5nT2JqZWN0W3Byb3BlcnR5XTtcbiAgICB2YXIgaW5jb21pbmdWYWx1ZSA9IGluY29taW5nT2JqZWN0W3Byb3BlcnR5XTtcbiAgICByZXR1cm4gZXF1YWwoZXhpc3RpbmdWYWx1ZSwgaW5jb21pbmdWYWx1ZSkgPyBleGlzdGluZ1ZhbHVlIDogaW5jb21pbmdWYWx1ZTtcbn1cbmZ1bmN0aW9uIHN1cHBvcnRzUmVzdWx0Q2FjaGluZyhzdG9yZSkge1xuICAgIHJldHVybiAhIShzdG9yZSBpbnN0YW5jZW9mIEVudGl0eVN0b3JlICYmIHN0b3JlLmdyb3VwLmNhY2hpbmcpO1xufVxuXG5leHBvcnQgeyBFbnRpdHlTdG9yZSwgc3VwcG9ydHNSZXN1bHRDYWNoaW5nIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbnRpdHlTdG9yZS5qcy5tYXBcbiIsImltcG9ydCB7IGlzUmVmZXJlbmNlLCBpc0ZpZWxkIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dyYXBocWwvc3RvcmVVdGlscy5qcyc7XG5pbXBvcnQgeyBEZWVwTWVyZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2NvbW1vbi9tZXJnZURlZXAuanMnO1xuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGdldFR5cGVuYW1lRnJvbVN0b3JlT2JqZWN0KHN0b3JlLCBvYmplY3RPclJlZmVyZW5jZSkge1xuICAgIHJldHVybiBpc1JlZmVyZW5jZShvYmplY3RPclJlZmVyZW5jZSlcbiAgICAgICAgPyBzdG9yZS5nZXQob2JqZWN0T3JSZWZlcmVuY2UuX19yZWYsIFwiX190eXBlbmFtZVwiKVxuICAgICAgICA6IG9iamVjdE9yUmVmZXJlbmNlICYmIG9iamVjdE9yUmVmZXJlbmNlLl9fdHlwZW5hbWU7XG59XG52YXIgRmllbGROYW1lUGF0dGVybiA9IC9eW19BLVphLXowLTldKy87XG5mdW5jdGlvbiBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKSB7XG4gICAgdmFyIG1hdGNoID0gc3RvcmVGaWVsZE5hbWUubWF0Y2goRmllbGROYW1lUGF0dGVybik7XG4gICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMF0gOiBzdG9yZUZpZWxkTmFtZTtcbn1cbmZ1bmN0aW9uIHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmXG4gICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAhaXNSZWZlcmVuY2UodmFsdWUpICYmXG4gICAgICAgICFBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGlzRmllbGRWYWx1ZVRvQmVNZXJnZWQodmFsdWUpIHtcbiAgICB2YXIgZmllbGQgPSB2YWx1ZSAmJiB2YWx1ZS5fX2ZpZWxkO1xuICAgIHJldHVybiBmaWVsZCAmJiBpc0ZpZWxkKGZpZWxkKTtcbn1cbmZ1bmN0aW9uIG1ha2VQcm9jZXNzZWRGaWVsZHNNZXJnZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBEZWVwTWVyZ2VyKHJlY29uY2lsZVByb2Nlc3NlZEZpZWxkcyk7XG59XG52YXIgcmVjb25jaWxlUHJvY2Vzc2VkRmllbGRzID0gZnVuY3Rpb24gKGV4aXN0aW5nT2JqZWN0LCBpbmNvbWluZ09iamVjdCwgcHJvcGVydHkpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBleGlzdGluZ09iamVjdFtwcm9wZXJ0eV07XG4gICAgdmFyIGluY29taW5nID0gaW5jb21pbmdPYmplY3RbcHJvcGVydHldO1xuICAgIGlmIChpc0ZpZWxkVmFsdWVUb0JlTWVyZ2VkKGV4aXN0aW5nKSkge1xuICAgICAgICBleGlzdGluZy5fX3ZhbHVlID0gdGhpcy5tZXJnZShleGlzdGluZy5fX3ZhbHVlLCBpc0ZpZWxkVmFsdWVUb0JlTWVyZ2VkKGluY29taW5nKVxuICAgICAgICAgICAgPyBpbmNvbWluZy5fX3ZhbHVlXG4gICAgICAgICAgICA6IGluY29taW5nKTtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgIH1cbiAgICBpZiAoaXNGaWVsZFZhbHVlVG9CZU1lcmdlZChpbmNvbWluZykpIHtcbiAgICAgICAgaW5jb21pbmcuX192YWx1ZSA9IHRoaXMubWVyZ2UoZXhpc3RpbmcsIGluY29taW5nLl9fdmFsdWUpO1xuICAgICAgICByZXR1cm4gaW5jb21pbmc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZyk7XG59O1xuXG5leHBvcnQgeyBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lLCBnZXRUeXBlbmFtZUZyb21TdG9yZU9iamVjdCwgaGFzT3duLCBpc0ZpZWxkVmFsdWVUb0JlTWVyZ2VkLCBtYWtlUHJvY2Vzc2VkRmllbGRzTWVyZ2VyLCBzdG9yZVZhbHVlSXNTdG9yZU9iamVjdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVscGVycy5qcy5tYXBcbiIsImltcG9ydCB7IF9fZXh0ZW5kcywgX19hc3NpZ24gfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgeyBpc1JlZmVyZW5jZSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9ncmFwaHFsL3N0b3JlVXRpbHMuanMnO1xuaW1wb3J0IHsgYWRkVHlwZW5hbWVUb0RvY3VtZW50IH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dyYXBocWwvdHJhbnNmb3JtLmpzJztcbmltcG9ydCB7IHdyYXAsIGRlcCB9IGZyb20gJ29wdGltaXNtJztcbmltcG9ydCB7IG1ha2VWYXIgfSBmcm9tICcuL3JlYWN0aXZlVmFycy5qcyc7XG5pbXBvcnQgeyBBcG9sbG9DYWNoZSB9IGZyb20gJy4uL2NvcmUvY2FjaGUuanMnO1xuaW1wb3J0IHsgaGFzT3duIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCB7IHN1cHBvcnRzUmVzdWx0Q2FjaGluZywgRW50aXR5U3RvcmUgfSBmcm9tICcuL2VudGl0eVN0b3JlLmpzJztcbmltcG9ydCB7IFN0b3JlUmVhZGVyIH0gZnJvbSAnLi9yZWFkRnJvbVN0b3JlLmpzJztcbmltcG9ydCB7IFN0b3JlV3JpdGVyIH0gZnJvbSAnLi93cml0ZVRvU3RvcmUuanMnO1xuaW1wb3J0IHsgUG9saWNpZXMsIGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0IH0gZnJvbSAnLi9wb2xpY2llcy5qcyc7XG5cbnZhciBkZWZhdWx0Q29uZmlnID0ge1xuICAgIGRhdGFJZEZyb21PYmplY3Q6IGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0LFxuICAgIGFkZFR5cGVuYW1lOiB0cnVlLFxuICAgIHJlc3VsdENhY2hpbmc6IHRydWUsXG4gICAgdHlwZVBvbGljaWVzOiB7fSxcbn07XG52YXIgSW5NZW1vcnlDYWNoZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEluTWVtb3J5Q2FjaGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW5NZW1vcnlDYWNoZShjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLndhdGNoZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIF90aGlzLnR5cGVuYW1lRG9jdW1lbnRDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgX3RoaXMubWFrZVZhciA9IG1ha2VWYXI7XG4gICAgICAgIF90aGlzLnR4Q291bnQgPSAwO1xuICAgICAgICBfdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoID0gd3JhcChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmJyb2FkY2FzdFdhdGNoLmNhbGwoX3RoaXMsIGMpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtYWtlQ2FjaGVLZXk6IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gYy5vcHRpbWlzdGljID8gX3RoaXMub3B0aW1pc3RpY0RhdGEgOiBfdGhpcy5kYXRhO1xuICAgICAgICAgICAgICAgIGlmIChzdXBwb3J0c1Jlc3VsdENhY2hpbmcoc3RvcmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpbWlzdGljID0gYy5vcHRpbWlzdGljLCByb290SWQgPSBjLnJvb3RJZCwgdmFyaWFibGVzID0gYy52YXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZS5tYWtlQ2FjaGVLZXkoYy5xdWVyeSwgYy5jYWxsYmFjaywgSlNPTi5zdHJpbmdpZnkoeyBvcHRpbWlzdGljOiBvcHRpbWlzdGljLCByb290SWQ6IHJvb3RJZCwgdmFyaWFibGVzOiB2YXJpYWJsZXMgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLndhdGNoRGVwID0gZGVwKCk7XG4gICAgICAgIF90aGlzLmNvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnKSwgY29uZmlnKTtcbiAgICAgICAgX3RoaXMuYWRkVHlwZW5hbWUgPSAhIV90aGlzLmNvbmZpZy5hZGRUeXBlbmFtZTtcbiAgICAgICAgX3RoaXMucG9saWNpZXMgPSBuZXcgUG9saWNpZXMoe1xuICAgICAgICAgICAgY2FjaGU6IF90aGlzLFxuICAgICAgICAgICAgZGF0YUlkRnJvbU9iamVjdDogX3RoaXMuY29uZmlnLmRhdGFJZEZyb21PYmplY3QsXG4gICAgICAgICAgICBwb3NzaWJsZVR5cGVzOiBfdGhpcy5jb25maWcucG9zc2libGVUeXBlcyxcbiAgICAgICAgICAgIHR5cGVQb2xpY2llczogX3RoaXMuY29uZmlnLnR5cGVQb2xpY2llcyxcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLmRhdGEgPSBuZXcgRW50aXR5U3RvcmUuUm9vdCh7XG4gICAgICAgICAgICBwb2xpY2llczogX3RoaXMucG9saWNpZXMsXG4gICAgICAgICAgICByZXN1bHRDYWNoaW5nOiBfdGhpcy5jb25maWcucmVzdWx0Q2FjaGluZyxcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLm9wdGltaXN0aWNEYXRhID0gX3RoaXMuZGF0YTtcbiAgICAgICAgX3RoaXMuc3RvcmVXcml0ZXIgPSBuZXcgU3RvcmVXcml0ZXIoX3RoaXMsIF90aGlzLnN0b3JlUmVhZGVyID0gbmV3IFN0b3JlUmVhZGVyKHtcbiAgICAgICAgICAgIGNhY2hlOiBfdGhpcyxcbiAgICAgICAgICAgIGFkZFR5cGVuYW1lOiBfdGhpcy5hZGRUeXBlbmFtZSxcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJlc3RvcmUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSlcbiAgICAgICAgICAgIHRoaXMuZGF0YS5yZXBsYWNlKGRhdGEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmV4dHJhY3QgPSBmdW5jdGlvbiAob3B0aW1pc3RpYykge1xuICAgICAgICBpZiAob3B0aW1pc3RpYyA9PT0gdm9pZCAwKSB7IG9wdGltaXN0aWMgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gKG9wdGltaXN0aWMgPyB0aGlzLm9wdGltaXN0aWNEYXRhIDogdGhpcy5kYXRhKS50b09iamVjdCgpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBzdG9yZSA9IG9wdGlvbnMub3B0aW1pc3RpYyA/IHRoaXMub3B0aW1pc3RpY0RhdGEgOiB0aGlzLmRhdGE7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5yb290SWQgPT09ICdzdHJpbmcnICYmICFzdG9yZS5oYXMob3B0aW9ucy5yb290SWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVJlYWRlci5yZWFkUXVlcnlGcm9tU3RvcmUoe1xuICAgICAgICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgICAgICAgcXVlcnk6IG9wdGlvbnMucXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgcm9vdElkOiBvcHRpb25zLnJvb3RJZCxcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICAgIH0pIHx8IG51bGw7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICArK3RoaXMudHhDb3VudDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlV3JpdGVyLndyaXRlVG9TdG9yZSh7XG4gICAgICAgICAgICAgICAgc3RvcmU6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgICAgICBxdWVyeTogb3B0aW9ucy5xdWVyeSxcbiAgICAgICAgICAgICAgICByZXN1bHQ6IG9wdGlvbnMucmVzdWx0LFxuICAgICAgICAgICAgICAgIGRhdGFJZDogb3B0aW9ucy5kYXRhSWQsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKCEtLXRoaXMudHhDb3VudCAmJiBvcHRpb25zLmJyb2FkY2FzdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUubW9kaWZ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGhhc093bi5jYWxsKG9wdGlvbnMsIFwiaWRcIikgJiYgIW9wdGlvbnMuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RvcmUgPSBvcHRpb25zLm9wdGltaXN0aWNcbiAgICAgICAgICAgID8gdGhpcy5vcHRpbWlzdGljRGF0YVxuICAgICAgICAgICAgOiB0aGlzLmRhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICArK3RoaXMudHhDb3VudDtcbiAgICAgICAgICAgIHJldHVybiBzdG9yZS5tb2RpZnkob3B0aW9ucy5pZCB8fCBcIlJPT1RfUVVFUllcIiwgb3B0aW9ucy5maWVsZHMpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKCEtLXRoaXMudHhDb3VudCAmJiBvcHRpb25zLmJyb2FkY2FzdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuZGlmZiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlUmVhZGVyLmRpZmZRdWVyeUFnYWluc3RTdG9yZSh7XG4gICAgICAgICAgICBzdG9yZTogb3B0aW9ucy5vcHRpbWlzdGljID8gdGhpcy5vcHRpbWlzdGljRGF0YSA6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgIHJvb3RJZDogb3B0aW9ucy5pZCB8fCBcIlJPT1RfUVVFUllcIixcbiAgICAgICAgICAgIHF1ZXJ5OiBvcHRpb25zLnF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIHJldHVyblBhcnRpYWxEYXRhOiBvcHRpb25zLnJldHVyblBhcnRpYWxEYXRhLFxuICAgICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uICh3YXRjaCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLndhdGNoZXMuYWRkKHdhdGNoKTtcbiAgICAgICAgaWYgKHdhdGNoLmltbWVkaWF0ZSkge1xuICAgICAgICAgICAgdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoKHdhdGNoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMud2F0Y2hlcy5kZWxldGUod2F0Y2gpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuZ2MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGltaXN0aWNEYXRhLmdjKCk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZXRhaW4gPSBmdW5jdGlvbiAocm9vdElkLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIHJldHVybiAob3B0aW1pc3RpYyA/IHRoaXMub3B0aW1pc3RpY0RhdGEgOiB0aGlzLmRhdGEpLnJldGFpbihyb290SWQpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uIChyb290SWQsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgcmV0dXJuIChvcHRpbWlzdGljID8gdGhpcy5vcHRpbWlzdGljRGF0YSA6IHRoaXMuZGF0YSkucmVsZWFzZShyb290SWQpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBpc1JlZmVyZW5jZShvYmplY3QpID8gb2JqZWN0Ll9fcmVmIDpcbiAgICAgICAgICAgIHRoaXMucG9saWNpZXMuaWRlbnRpZnkob2JqZWN0KVswXTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmV2aWN0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLmlkKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwob3B0aW9ucywgXCJpZFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgaWQ6IFwiUk9PVF9RVUVSWVwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICArK3RoaXMudHhDb3VudDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGltaXN0aWNEYXRhLmV2aWN0KG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKCEtLXRoaXMudHhDb3VudCAmJiBvcHRpb25zLmJyb2FkY2FzdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGF0YS5jbGVhcigpO1xuICAgICAgICB0aGlzLm9wdGltaXN0aWNEYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVtb3ZlT3B0aW1pc3RpYyA9IGZ1bmN0aW9uIChpZFRvUmVtb3ZlKSB7XG4gICAgICAgIHZhciBuZXdPcHRpbWlzdGljRGF0YSA9IHRoaXMub3B0aW1pc3RpY0RhdGEucmVtb3ZlTGF5ZXIoaWRUb1JlbW92ZSk7XG4gICAgICAgIGlmIChuZXdPcHRpbWlzdGljRGF0YSAhPT0gdGhpcy5vcHRpbWlzdGljRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpbWlzdGljRGF0YSA9IG5ld09wdGltaXN0aWNEYXRhO1xuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RXYXRjaGVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnBlcmZvcm1UcmFuc2FjdGlvbiA9IGZ1bmN0aW9uICh0cmFuc2FjdGlvbiwgb3B0aW1pc3RpY0lkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwZXJmb3JtID0gZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcywgZGF0YSA9IF9hLmRhdGEsIG9wdGltaXN0aWNEYXRhID0gX2Eub3B0aW1pc3RpY0RhdGE7XG4gICAgICAgICAgICArK190aGlzLnR4Q291bnQ7XG4gICAgICAgICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5kYXRhID0gX3RoaXMub3B0aW1pc3RpY0RhdGEgPSBsYXllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24oX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgLS1fdGhpcy50eENvdW50O1xuICAgICAgICAgICAgICAgIF90aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgIF90aGlzLm9wdGltaXN0aWNEYXRhID0gb3B0aW1pc3RpY0RhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW1pc3RpY0lkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpbWlzdGljRGF0YSA9IHRoaXMub3B0aW1pc3RpY0RhdGEuYWRkTGF5ZXIob3B0aW1pc3RpY0lkLCBwZXJmb3JtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpbWlzdGljSWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHBlcmZvcm0odGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBlcmZvcm0oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnRyYW5zZm9ybURvY3VtZW50ID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmFkZFR5cGVuYW1lKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy50eXBlbmFtZURvY3VtZW50Q2FjaGUuZ2V0KGRvY3VtZW50KTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYWRkVHlwZW5hbWVUb0RvY3VtZW50KGRvY3VtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVuYW1lRG9jdW1lbnRDYWNoZS5zZXQoZG9jdW1lbnQsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlbmFtZURvY3VtZW50Q2FjaGUuc2V0KHJlc3VsdCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuYnJvYWRjYXN0V2F0Y2hlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLnR4Q291bnQpIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBfdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoKGMpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuYnJvYWRjYXN0V2F0Y2ggPSBmdW5jdGlvbiAoYykge1xuICAgICAgICB0aGlzLndhdGNoRGVwLmRpcnR5KGMpO1xuICAgICAgICB0aGlzLndhdGNoRGVwKGMpO1xuICAgICAgICBjLmNhbGxiYWNrKHRoaXMuZGlmZih7XG4gICAgICAgICAgICBxdWVyeTogYy5xdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogYy52YXJpYWJsZXMsXG4gICAgICAgICAgICBvcHRpbWlzdGljOiBjLm9wdGltaXN0aWMsXG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIHJldHVybiBJbk1lbW9yeUNhY2hlO1xufShBcG9sbG9DYWNoZSkpO1xuXG5leHBvcnQgeyBJbk1lbW9yeUNhY2hlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbk1lbW9yeUNhY2hlLmpzLm1hcFxuIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgeyBpbnZhcmlhbnQsIEludmFyaWFudEVycm9yIH0gZnJvbSAndHMtaW52YXJpYW50JztcbmltcG9ydCB7IGdldEZyYWdtZW50RnJvbVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9ncmFwaHFsL2ZyYWdtZW50cy5qcyc7XG5pbXBvcnQgeyBnZXRUeXBlbmFtZUZyb21SZXN1bHQsIGFyZ3VtZW50c09iamVjdEZyb21GaWVsZCwgc3RvcmVLZXlOYW1lRnJvbUZpZWxkLCBnZXRTdG9yZUtleU5hbWUsIGlzUmVmZXJlbmNlLCBpc0ZpZWxkIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dyYXBocWwvc3RvcmVVdGlscy5qcyc7XG5pbXBvcnQgeyBjYW5Vc2VXZWFrTWFwIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2NvbW1vbi9jYW5Vc2UuanMnO1xuaW1wb3J0IHsgS2V5VHJpZSB9IGZyb20gJ29wdGltaXNtJztcbmltcG9ydCB7IGNhY2hlU2xvdCB9IGZyb20gJy4vcmVhY3RpdmVWYXJzLmpzJztcbmltcG9ydCB7IGZpZWxkTmFtZUZyb21TdG9yZU5hbWUsIHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0LCBpc0ZpZWxkVmFsdWVUb0JlTWVyZ2VkLCBoYXNPd24gfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5mdW5jdGlvbiBhcmdzRnJvbUZpZWxkU3BlY2lmaWVyKHNwZWMpIHtcbiAgICByZXR1cm4gc3BlYy5hcmdzICE9PSB2b2lkIDAgPyBzcGVjLmFyZ3MgOlxuICAgICAgICBzcGVjLmZpZWxkID8gYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkKHNwZWMuZmllbGQsIHNwZWMudmFyaWFibGVzKSA6IG51bGw7XG59XG52YXIgZGVmYXVsdERhdGFJZEZyb21PYmplY3QgPSBmdW5jdGlvbiAoX2EsIGNvbnRleHQpIHtcbiAgICB2YXIgX190eXBlbmFtZSA9IF9hLl9fdHlwZW5hbWUsIGlkID0gX2EuaWQsIF9pZCA9IF9hLl9pZDtcbiAgICBpZiAodHlwZW9mIF9fdHlwZW5hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQua2V5T2JqZWN0ID1cbiAgICAgICAgICAgICAgICBpZCAhPT0gdm9pZCAwID8geyBpZDogaWQgfSA6XG4gICAgICAgICAgICAgICAgICAgIF9pZCAhPT0gdm9pZCAwID8geyBfaWQ6IF9pZCB9IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaWRWYWx1ZSA9IGlkIHx8IF9pZDtcbiAgICAgICAgaWYgKGlkVmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fdHlwZW5hbWUgKyBcIjpcIiArICgodHlwZW9mIGlkVmFsdWUgPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgaWRWYWx1ZSA9PT0gXCJzdHJpbmdcIikgPyBpZFZhbHVlIDogSlNPTi5zdHJpbmdpZnkoaWRWYWx1ZSkpO1xuICAgICAgICB9XG4gICAgfVxufTtcbnZhciBudWxsS2V5RmllbGRzRm4gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB2b2lkIDA7IH07XG52YXIgc2ltcGxlS2V5QXJnc0ZuID0gZnVuY3Rpb24gKF9hcmdzLCBjb250ZXh0KSB7IHJldHVybiBjb250ZXh0LmZpZWxkTmFtZTsgfTtcbnZhciBQb2xpY2llcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUG9saWNpZXMoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLnR5cGVQb2xpY2llcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMucm9vdElkc0J5VHlwZW5hbWUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnJvb3RUeXBlbmFtZXNCeUlkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy51c2luZ1Bvc3NpYmxlVHlwZXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdG9yYWdlVHJpZSA9IG5ldyBLZXlUcmllKHRydWUpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IF9fYXNzaWduKHsgZGF0YUlkRnJvbU9iamVjdDogZGVmYXVsdERhdGFJZEZyb21PYmplY3QgfSwgY29uZmlnKTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IHRoaXMuY29uZmlnLmNhY2hlO1xuICAgICAgICB0aGlzLnNldFJvb3RUeXBlbmFtZShcIlF1ZXJ5XCIpO1xuICAgICAgICB0aGlzLnNldFJvb3RUeXBlbmFtZShcIk11dGF0aW9uXCIpO1xuICAgICAgICB0aGlzLnNldFJvb3RUeXBlbmFtZShcIlN1YnNjcmlwdGlvblwiKTtcbiAgICAgICAgaWYgKGNvbmZpZy5wb3NzaWJsZVR5cGVzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFBvc3NpYmxlVHlwZXMoY29uZmlnLnBvc3NpYmxlVHlwZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcudHlwZVBvbGljaWVzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFR5cGVQb2xpY2llcyhjb25maWcudHlwZVBvbGljaWVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2xpY2llcy5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbiAob2JqZWN0LCBzZWxlY3Rpb25TZXQsIGZyYWdtZW50TWFwKSB7XG4gICAgICAgIHZhciB0eXBlbmFtZSA9IHNlbGVjdGlvblNldCAmJiBmcmFnbWVudE1hcFxuICAgICAgICAgICAgPyBnZXRUeXBlbmFtZUZyb21SZXN1bHQob2JqZWN0LCBzZWxlY3Rpb25TZXQsIGZyYWdtZW50TWFwKVxuICAgICAgICAgICAgOiBvYmplY3QuX190eXBlbmFtZTtcbiAgICAgICAgaWYgKHR5cGVuYW1lKSB7XG4gICAgICAgICAgICB2YXIgcm9vdElkID0gdGhpcy5yb290SWRzQnlUeXBlbmFtZVt0eXBlbmFtZV07XG4gICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHJvb3RJZClcbiAgICAgICAgICAgICAgICByZXR1cm4gW3Jvb3RJZF07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0eXBlbmFtZTogdHlwZW5hbWUsXG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHNlbGVjdGlvblNldCxcbiAgICAgICAgICAgIGZyYWdtZW50TWFwOiBmcmFnbWVudE1hcCxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGlkO1xuICAgICAgICB2YXIgcG9saWN5ID0gdGhpcy5nZXRUeXBlUG9saWN5KHR5cGVuYW1lLCBmYWxzZSk7XG4gICAgICAgIHZhciBrZXlGbiA9IHBvbGljeSAmJiBwb2xpY3kua2V5Rm4gfHwgdGhpcy5jb25maWcuZGF0YUlkRnJvbU9iamVjdDtcbiAgICAgICAgd2hpbGUgKGtleUZuKSB7XG4gICAgICAgICAgICB2YXIgc3BlY2lmaWVyT3JJZCA9IGtleUZuKG9iamVjdCwgY29udGV4dCk7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcGVjaWZpZXJPcklkKSkge1xuICAgICAgICAgICAgICAgIGtleUZuID0ga2V5RmllbGRzRm5Gcm9tU3BlY2lmaWVyKHNwZWNpZmllck9ySWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWQgPSBzcGVjaWZpZXJPcklkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlkID0gaWQgJiYgU3RyaW5nKGlkKTtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQua2V5T2JqZWN0ID8gW2lkLCBjb250ZXh0LmtleU9iamVjdF0gOiBbaWRdO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmFkZFR5cGVQb2xpY2llcyA9IGZ1bmN0aW9uICh0eXBlUG9saWNpZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgT2JqZWN0LmtleXModHlwZVBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlbmFtZSkge1xuICAgICAgICAgICAgdmFyIGV4aXN0aW5nID0gX3RoaXMuZ2V0VHlwZVBvbGljeSh0eXBlbmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgaW5jb21pbmcgPSB0eXBlUG9saWNpZXNbdHlwZW5hbWVdO1xuICAgICAgICAgICAgdmFyIGtleUZpZWxkcyA9IGluY29taW5nLmtleUZpZWxkcywgZmllbGRzID0gaW5jb21pbmcuZmllbGRzO1xuICAgICAgICAgICAgaWYgKGluY29taW5nLnF1ZXJ5VHlwZSlcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRSb290VHlwZW5hbWUoXCJRdWVyeVwiLCB0eXBlbmFtZSk7XG4gICAgICAgICAgICBpZiAoaW5jb21pbmcubXV0YXRpb25UeXBlKVxuICAgICAgICAgICAgICAgIF90aGlzLnNldFJvb3RUeXBlbmFtZShcIk11dGF0aW9uXCIsIHR5cGVuYW1lKTtcbiAgICAgICAgICAgIGlmIChpbmNvbWluZy5zdWJzY3JpcHRpb25UeXBlKVxuICAgICAgICAgICAgICAgIF90aGlzLnNldFJvb3RUeXBlbmFtZShcIlN1YnNjcmlwdGlvblwiLCB0eXBlbmFtZSk7XG4gICAgICAgICAgICBleGlzdGluZy5rZXlGbiA9XG4gICAgICAgICAgICAgICAga2V5RmllbGRzID09PSBmYWxzZSA/IG51bGxLZXlGaWVsZHNGbiA6XG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkoa2V5RmllbGRzKSA/IGtleUZpZWxkc0ZuRnJvbVNwZWNpZmllcihrZXlGaWVsZHMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBrZXlGaWVsZHMgPT09IFwiZnVuY3Rpb25cIiA/IGtleUZpZWxkcyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmcua2V5Rm47XG4gICAgICAgICAgICBpZiAoZmllbGRzKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nID0gX3RoaXMuZ2V0RmllbGRQb2xpY3kodHlwZW5hbWUsIGZpZWxkTmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmNvbWluZyA9IGZpZWxkc1tmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluY29taW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnJlYWQgPSBpbmNvbWluZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXlBcmdzID0gaW5jb21pbmcua2V5QXJncywgcmVhZCA9IGluY29taW5nLnJlYWQsIG1lcmdlID0gaW5jb21pbmcubWVyZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5rZXlGbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5QXJncyA9PT0gZmFsc2UgPyBzaW1wbGVLZXlBcmdzRm4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KGtleUFyZ3MpID8ga2V5QXJnc0ZuRnJvbVNwZWNpZmllcihrZXlBcmdzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2Yga2V5QXJncyA9PT0gXCJmdW5jdGlvblwiID8ga2V5QXJncyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmcua2V5Rm47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlYWQgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5yZWFkID0gcmVhZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVyZ2UgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5tZXJnZSA9IG1lcmdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZy5yZWFkICYmIGV4aXN0aW5nLm1lcmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5rZXlGbiA9IGV4aXN0aW5nLmtleUZuIHx8IHNpbXBsZUtleUFyZ3NGbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5zZXRSb290VHlwZW5hbWUgPSBmdW5jdGlvbiAod2hpY2gsIHR5cGVuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlbmFtZSA9PT0gdm9pZCAwKSB7IHR5cGVuYW1lID0gd2hpY2g7IH1cbiAgICAgICAgdmFyIHJvb3RJZCA9IFwiUk9PVF9cIiArIHdoaWNoLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHZhciBvbGQgPSB0aGlzLnJvb3RUeXBlbmFtZXNCeUlkW3Jvb3RJZF07XG4gICAgICAgIGlmICh0eXBlbmFtZSAhPT0gb2xkKSB7XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoIW9sZCB8fCBvbGQgPT09IHdoaWNoLCAzMSkgOiBpbnZhcmlhbnQoIW9sZCB8fCBvbGQgPT09IHdoaWNoLCBcIkNhbm5vdCBjaGFuZ2Ugcm9vdCBcIiArIHdoaWNoICsgXCIgX190eXBlbmFtZSBtb3JlIHRoYW4gb25jZVwiKTtcbiAgICAgICAgICAgIHRoaXMucm9vdElkc0J5VHlwZW5hbWVbdHlwZW5hbWVdID0gcm9vdElkO1xuICAgICAgICAgICAgdGhpcy5yb290VHlwZW5hbWVzQnlJZFtyb290SWRdID0gdHlwZW5hbWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5hZGRQb3NzaWJsZVR5cGVzID0gZnVuY3Rpb24gKHBvc3NpYmxlVHlwZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy51c2luZ1Bvc3NpYmxlVHlwZXMgPSB0cnVlO1xuICAgICAgICBPYmplY3Qua2V5cyhwb3NzaWJsZVR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChzdXBlcnR5cGUpIHtcbiAgICAgICAgICAgIHZhciBzdWJ0eXBlU2V0ID0gX3RoaXMuZ2V0U3VidHlwZVNldChzdXBlcnR5cGUsIHRydWUpO1xuICAgICAgICAgICAgcG9zc2libGVUeXBlc1tzdXBlcnR5cGVdLmZvckVhY2goc3VidHlwZVNldC5hZGQsIHN1YnR5cGVTZXQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5nZXRUeXBlUG9saWN5ID0gZnVuY3Rpb24gKHR5cGVuYW1lLCBjcmVhdGVJZk1pc3NpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlUG9saWNpZXNbdHlwZW5hbWVdIHx8IChjcmVhdGVJZk1pc3NpbmcgJiYgKHRoaXMudHlwZVBvbGljaWVzW3R5cGVuYW1lXSA9IE9iamVjdC5jcmVhdGUobnVsbCkpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmdldFN1YnR5cGVTZXQgPSBmdW5jdGlvbiAoc3VwZXJ0eXBlLCBjcmVhdGVJZk1pc3NpbmcpIHtcbiAgICAgICAgdmFyIHBvbGljeSA9IHRoaXMuZ2V0VHlwZVBvbGljeShzdXBlcnR5cGUsIGNyZWF0ZUlmTWlzc2luZyk7XG4gICAgICAgIGlmIChwb2xpY3kpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2xpY3kuc3VidHlwZXMgfHwgKGNyZWF0ZUlmTWlzc2luZyA/IHBvbGljeS5zdWJ0eXBlcyA9IG5ldyBTZXQoKSA6IHZvaWQgMCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5nZXRGaWVsZFBvbGljeSA9IGZ1bmN0aW9uICh0eXBlbmFtZSwgZmllbGROYW1lLCBjcmVhdGVJZk1pc3NpbmcpIHtcbiAgICAgICAgdmFyIHR5cGVQb2xpY3kgPSB0aGlzLmdldFR5cGVQb2xpY3kodHlwZW5hbWUsIGNyZWF0ZUlmTWlzc2luZyk7XG4gICAgICAgIGlmICh0eXBlUG9saWN5KSB7XG4gICAgICAgICAgICB2YXIgZmllbGRQb2xpY2llcyA9IHR5cGVQb2xpY3kuZmllbGRzIHx8IChjcmVhdGVJZk1pc3NpbmcgJiYgKHR5cGVQb2xpY3kuZmllbGRzID0gT2JqZWN0LmNyZWF0ZShudWxsKSkpO1xuICAgICAgICAgICAgaWYgKGZpZWxkUG9saWNpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmllbGRQb2xpY2llc1tmaWVsZE5hbWVdIHx8IChjcmVhdGVJZk1pc3NpbmcgJiYgKGZpZWxkUG9saWNpZXNbZmllbGROYW1lXSA9IE9iamVjdC5jcmVhdGUobnVsbCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmZyYWdtZW50TWF0Y2hlcyA9IGZ1bmN0aW9uIChmcmFnbWVudCwgdHlwZW5hbWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFmcmFnbWVudC50eXBlQ29uZGl0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICghdHlwZW5hbWUpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBzdXBlcnR5cGUgPSBmcmFnbWVudC50eXBlQ29uZGl0aW9uLm5hbWUudmFsdWU7XG4gICAgICAgIGlmICh0eXBlbmFtZSA9PT0gc3VwZXJ0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh0aGlzLnVzaW5nUG9zc2libGVUeXBlcykge1xuICAgICAgICAgICAgdmFyIHdvcmtRdWV1ZV8xID0gW3RoaXMuZ2V0U3VidHlwZVNldChzdXBlcnR5cGUsIGZhbHNlKV07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdvcmtRdWV1ZV8xLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1YnR5cGVzID0gd29ya1F1ZXVlXzFbaV07XG4gICAgICAgICAgICAgICAgaWYgKHN1YnR5cGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJ0eXBlcy5oYXModHlwZW5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHN1YnR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHN1YnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdWJzdWJ0eXBlcyA9IF90aGlzLmdldFN1YnR5cGVTZXQoc3VidHlwZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1YnN1YnR5cGVzICYmIHdvcmtRdWV1ZV8xLmluZGV4T2Yoc3Vic3VidHlwZXMpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtRdWV1ZV8xLnB1c2goc3Vic3VidHlwZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmdldFN0b3JlRmllbGROYW1lID0gZnVuY3Rpb24gKGZpZWxkU3BlYykge1xuICAgICAgICB2YXIgdHlwZW5hbWUgPSBmaWVsZFNwZWMudHlwZW5hbWUsIGZpZWxkTmFtZSA9IGZpZWxkU3BlYy5maWVsZE5hbWU7XG4gICAgICAgIHZhciBwb2xpY3kgPSB0aGlzLmdldEZpZWxkUG9saWN5KHR5cGVuYW1lLCBmaWVsZE5hbWUsIGZhbHNlKTtcbiAgICAgICAgdmFyIHN0b3JlRmllbGROYW1lO1xuICAgICAgICB2YXIga2V5Rm4gPSBwb2xpY3kgJiYgcG9saWN5LmtleUZuO1xuICAgICAgICBpZiAoa2V5Rm4gJiYgdHlwZW5hbWUpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIHR5cGVuYW1lOiB0eXBlbmFtZSxcbiAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTmFtZSxcbiAgICAgICAgICAgICAgICBmaWVsZDogZmllbGRTcGVjLmZpZWxkIHx8IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmdzRnJvbUZpZWxkU3BlY2lmaWVyKGZpZWxkU3BlYyk7XG4gICAgICAgICAgICB3aGlsZSAoa2V5Rm4pIHtcbiAgICAgICAgICAgICAgICB2YXIgc3BlY2lmaWVyT3JTdHJpbmcgPSBrZXlGbihhcmdzLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcGVjaWZpZXJPclN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5Rm4gPSBrZXlBcmdzRm5Gcm9tU3BlY2lmaWVyKHNwZWNpZmllck9yU3RyaW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlRmllbGROYW1lID0gc3BlY2lmaWVyT3JTdHJpbmcgfHwgZmllbGROYW1lO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0b3JlRmllbGROYW1lID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHN0b3JlRmllbGROYW1lID0gZmllbGRTcGVjLmZpZWxkXG4gICAgICAgICAgICAgICAgPyBzdG9yZUtleU5hbWVGcm9tRmllbGQoZmllbGRTcGVjLmZpZWxkLCBmaWVsZFNwZWMudmFyaWFibGVzKVxuICAgICAgICAgICAgICAgIDogZ2V0U3RvcmVLZXlOYW1lKGZpZWxkTmFtZSwgYXJnc0Zyb21GaWVsZFNwZWNpZmllcihmaWVsZFNwZWMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGROYW1lID09PSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKVxuICAgICAgICAgICAgPyBzdG9yZUZpZWxkTmFtZVxuICAgICAgICAgICAgOiBmaWVsZE5hbWUgKyBcIjpcIiArIHN0b3JlRmllbGROYW1lO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLnJlYWRGaWVsZCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBvYmplY3RPclJlZmVyZW5jZSA9IG9wdGlvbnMuZnJvbTtcbiAgICAgICAgaWYgKCFvYmplY3RPclJlZmVyZW5jZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIG5hbWVPckZpZWxkID0gb3B0aW9ucy5maWVsZCB8fCBvcHRpb25zLmZpZWxkTmFtZTtcbiAgICAgICAgaWYgKCFuYW1lT3JGaWVsZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKG9wdGlvbnMudHlwZW5hbWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgdmFyIHR5cGVuYW1lID0gY29udGV4dC5zdG9yZS5nZXRGaWVsZFZhbHVlKG9iamVjdE9yUmVmZXJlbmNlLCBcIl9fdHlwZW5hbWVcIik7XG4gICAgICAgICAgICBpZiAodHlwZW5hbWUpXG4gICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlbmFtZSA9IHR5cGVuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdG9yZUZpZWxkTmFtZSA9IHRoaXMuZ2V0U3RvcmVGaWVsZE5hbWUob3B0aW9ucyk7XG4gICAgICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgdmFyIGV4aXN0aW5nID0gY29udGV4dC5zdG9yZS5nZXRGaWVsZFZhbHVlKG9iamVjdE9yUmVmZXJlbmNlLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgIHZhciBwb2xpY3kgPSB0aGlzLmdldEZpZWxkUG9saWN5KG9wdGlvbnMudHlwZW5hbWUsIGZpZWxkTmFtZSwgZmFsc2UpO1xuICAgICAgICB2YXIgcmVhZCA9IHBvbGljeSAmJiBwb2xpY3kucmVhZDtcbiAgICAgICAgaWYgKHJlYWQpIHtcbiAgICAgICAgICAgIHZhciByZWFkT3B0aW9ucyA9IG1ha2VGaWVsZEZ1bmN0aW9uT3B0aW9ucyh0aGlzLCBvYmplY3RPclJlZmVyZW5jZSwgb3B0aW9ucywgY29udGV4dCwgdGhpcy5zdG9yYWdlVHJpZS5sb29rdXAoaXNSZWZlcmVuY2Uob2JqZWN0T3JSZWZlcmVuY2UpXG4gICAgICAgICAgICAgICAgPyBvYmplY3RPclJlZmVyZW5jZS5fX3JlZlxuICAgICAgICAgICAgICAgIDogb2JqZWN0T3JSZWZlcmVuY2UsIHN0b3JlRmllbGROYW1lKSk7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVTbG90LndpdGhWYWx1ZSh0aGlzLmNhY2hlLCByZWFkLCBbZXhpc3RpbmcsIHJlYWRPcHRpb25zXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmhhc01lcmdlRnVuY3Rpb24gPSBmdW5jdGlvbiAodHlwZW5hbWUsIGZpZWxkTmFtZSkge1xuICAgICAgICB2YXIgcG9saWN5ID0gdGhpcy5nZXRGaWVsZFBvbGljeSh0eXBlbmFtZSwgZmllbGROYW1lLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiAhIShwb2xpY3kgJiYgcG9saWN5Lm1lcmdlKTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5hcHBseU1lcmdlcyA9IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcsIGNvbnRleHQsIHN0b3JhZ2VLZXlzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChpc0ZpZWxkVmFsdWVUb0JlTWVyZ2VkKGluY29taW5nKSkge1xuICAgICAgICAgICAgdmFyIGZpZWxkID0gaW5jb21pbmcuX19maWVsZDtcbiAgICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZC5uYW1lLnZhbHVlO1xuICAgICAgICAgICAgdmFyIG1lcmdlID0gdGhpcy5nZXRGaWVsZFBvbGljeShpbmNvbWluZy5fX3R5cGVuYW1lLCBmaWVsZE5hbWUsIGZhbHNlKS5tZXJnZTtcbiAgICAgICAgICAgIHZhciBzdG9yYWdlID0gc3RvcmFnZUtleXNcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RvcmFnZVRyaWUubG9va3VwQXJyYXkoc3RvcmFnZUtleXMpXG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgaW5jb21pbmcgPSBtZXJnZShleGlzdGluZywgaW5jb21pbmcuX192YWx1ZSwgbWFrZUZpZWxkRnVuY3Rpb25PcHRpb25zKHRoaXMsIHZvaWQgMCwgeyB0eXBlbmFtZTogaW5jb21pbmcuX190eXBlbmFtZSwgZmllbGROYW1lOiBmaWVsZE5hbWUsXG4gICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLCB2YXJpYWJsZXM6IGNvbnRleHQudmFyaWFibGVzIH0sIGNvbnRleHQsIHN0b3JhZ2UpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpbmNvbWluZykpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmNvbWluZy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIF90aGlzLmFwcGx5TWVyZ2VzKHZvaWQgMCwgaXRlbSwgY29udGV4dCk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdG9yZVZhbHVlSXNTdG9yZU9iamVjdChpbmNvbWluZykpIHtcbiAgICAgICAgICAgIHZhciBlXzEgPSBleGlzdGluZztcbiAgICAgICAgICAgIHZhciBpXzEgPSBpbmNvbWluZztcbiAgICAgICAgICAgIHZhciBmaXJzdFN0b3JhZ2VLZXlfMSA9IGlzUmVmZXJlbmNlKGVfMSlcbiAgICAgICAgICAgICAgICA/IGVfMS5fX3JlZlxuICAgICAgICAgICAgICAgIDogdHlwZW9mIGVfMSA9PT0gXCJvYmplY3RcIiAmJiBlXzE7XG4gICAgICAgICAgICB2YXIgbmV3RmllbGRzXzE7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhpXzEpLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluY29taW5nVmFsdWUgPSBpXzFbc3RvcmVGaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBhcHBsaWVkVmFsdWUgPSBfdGhpcy5hcHBseU1lcmdlcyhjb250ZXh0LnN0b3JlLmdldEZpZWxkVmFsdWUoZV8xLCBzdG9yZUZpZWxkTmFtZSksIGluY29taW5nVmFsdWUsIGNvbnRleHQsIGZpcnN0U3RvcmFnZUtleV8xID8gW2ZpcnN0U3RvcmFnZUtleV8xLCBzdG9yZUZpZWxkTmFtZV0gOiB2b2lkIDApO1xuICAgICAgICAgICAgICAgIGlmIChhcHBsaWVkVmFsdWUgIT09IGluY29taW5nVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RmllbGRzXzEgPSBuZXdGaWVsZHNfMSB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBuZXdGaWVsZHNfMVtzdG9yZUZpZWxkTmFtZV0gPSBhcHBsaWVkVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobmV3RmllbGRzXzEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGlfMSksIG5ld0ZpZWxkc18xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5jb21pbmc7XG4gICAgfTtcbiAgICByZXR1cm4gUG9saWNpZXM7XG59KCkpO1xuZnVuY3Rpb24gbWFrZUZpZWxkRnVuY3Rpb25PcHRpb25zKHBvbGljaWVzLCBvYmplY3RPclJlZmVyZW5jZSwgZmllbGRTcGVjLCBjb250ZXh0LCBzdG9yYWdlKSB7XG4gICAgdmFyIHN0b3JlRmllbGROYW1lID0gcG9saWNpZXMuZ2V0U3RvcmVGaWVsZE5hbWUoZmllbGRTcGVjKTtcbiAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSk7XG4gICAgdmFyIHZhcmlhYmxlcyA9IGZpZWxkU3BlYy52YXJpYWJsZXMgfHwgY29udGV4dC52YXJpYWJsZXM7XG4gICAgdmFyIF9hID0gY29udGV4dC5zdG9yZSwgZ2V0RmllbGRWYWx1ZSA9IF9hLmdldEZpZWxkVmFsdWUsIHRvUmVmZXJlbmNlID0gX2EudG9SZWZlcmVuY2UsIGNhblJlYWQgPSBfYS5jYW5SZWFkO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFyZ3M6IGFyZ3NGcm9tRmllbGRTcGVjaWZpZXIoZmllbGRTcGVjKSxcbiAgICAgICAgZmllbGQ6IGZpZWxkU3BlYy5maWVsZCB8fCBudWxsLFxuICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTmFtZSxcbiAgICAgICAgc3RvcmVGaWVsZE5hbWU6IHN0b3JlRmllbGROYW1lLFxuICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgaXNSZWZlcmVuY2U6IGlzUmVmZXJlbmNlLFxuICAgICAgICB0b1JlZmVyZW5jZTogdG9SZWZlcmVuY2UsXG4gICAgICAgIHN0b3JhZ2U6IHN0b3JhZ2UsXG4gICAgICAgIGNhY2hlOiBwb2xpY2llcy5jYWNoZSxcbiAgICAgICAgY2FuUmVhZDogY2FuUmVhZCxcbiAgICAgICAgcmVhZEZpZWxkOiBmdW5jdGlvbiAoZmllbGROYW1lT3JPcHRpb25zLCBmcm9tKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBmaWVsZE5hbWVPck9wdGlvbnMgPT09IFwic3RyaW5nXCIgPyB7XG4gICAgICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZE5hbWVPck9wdGlvbnMsXG4gICAgICAgICAgICAgICAgZnJvbTogZnJvbSxcbiAgICAgICAgICAgIH0gOiBfX2Fzc2lnbih7fSwgZmllbGROYW1lT3JPcHRpb25zKTtcbiAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IG9wdGlvbnMuZnJvbSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZnJvbSA9IG9iamVjdE9yUmVmZXJlbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gb3B0aW9ucy52YXJpYWJsZXMpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwb2xpY2llcy5yZWFkRmllbGQob3B0aW9ucywgY29udGV4dCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1lcmdlT2JqZWN0czogZnVuY3Rpb24gKGV4aXN0aW5nLCBpbmNvbWluZykge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpIHx8IEFycmF5LmlzQXJyYXkoaW5jb21pbmcpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gbmV3IEludmFyaWFudEVycm9yKDMyKSA6IG5ldyBJbnZhcmlhbnRFcnJvcihcIkNhbm5vdCBhdXRvbWF0aWNhbGx5IG1lcmdlIGFycmF5c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChleGlzdGluZyAmJiB0eXBlb2YgZXhpc3RpbmcgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgICBpbmNvbWluZyAmJiB0eXBlb2YgaW5jb21pbmcgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZVR5cGUgPSBnZXRGaWVsZFZhbHVlKGV4aXN0aW5nLCBcIl9fdHlwZW5hbWVcIik7XG4gICAgICAgICAgICAgICAgdmFyIGlUeXBlID0gZ2V0RmllbGRWYWx1ZShpbmNvbWluZywgXCJfX3R5cGVuYW1lXCIpO1xuICAgICAgICAgICAgICAgIHZhciB0eXBlc0RpZmZlciA9IGVUeXBlICYmIGlUeXBlICYmIGVUeXBlICE9PSBpVHlwZTtcbiAgICAgICAgICAgICAgICB2YXIgYXBwbGllZCA9IHBvbGljaWVzLmFwcGx5TWVyZ2VzKHR5cGVzRGlmZmVyID8gdm9pZCAwIDogZXhpc3RpbmcsIGluY29taW5nLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZXNEaWZmZXIgfHxcbiAgICAgICAgICAgICAgICAgICAgIXN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KGV4aXN0aW5nKSB8fFxuICAgICAgICAgICAgICAgICAgICAhc3RvcmVWYWx1ZUlzU3RvcmVPYmplY3QoYXBwbGllZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFwcGxpZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZXhpc3RpbmcpLCBhcHBsaWVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmNvbWluZztcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBrZXlBcmdzRm5Gcm9tU3BlY2lmaWVyKHNwZWNpZmllcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJncywgY29udGV4dCkge1xuICAgICAgICByZXR1cm4gYXJncyA/IGNvbnRleHQuZmllbGROYW1lICsgXCI6XCIgKyBKU09OLnN0cmluZ2lmeShjb21wdXRlS2V5T2JqZWN0KGFyZ3MsIHNwZWNpZmllcikpIDogY29udGV4dC5maWVsZE5hbWU7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGtleUZpZWxkc0ZuRnJvbVNwZWNpZmllcihzcGVjaWZpZXIpIHtcbiAgICB2YXIgdHJpZSA9IG5ldyBLZXlUcmllKGNhblVzZVdlYWtNYXApO1xuICAgIHJldHVybiBmdW5jdGlvbiAob2JqZWN0LCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBhbGlhc01hcDtcbiAgICAgICAgaWYgKGNvbnRleHQuc2VsZWN0aW9uU2V0ICYmIGNvbnRleHQuZnJhZ21lbnRNYXApIHtcbiAgICAgICAgICAgIHZhciBpbmZvID0gdHJpZS5sb29rdXBBcnJheShbXG4gICAgICAgICAgICAgICAgY29udGV4dC5zZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICAgICAgY29udGV4dC5mcmFnbWVudE1hcCxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgYWxpYXNNYXAgPSBpbmZvLmFsaWFzTWFwIHx8IChpbmZvLmFsaWFzTWFwID0gbWFrZUFsaWFzTWFwKGNvbnRleHQuc2VsZWN0aW9uU2V0LCBjb250ZXh0LmZyYWdtZW50TWFwKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGtleU9iamVjdCA9IGNvbnRleHQua2V5T2JqZWN0ID1cbiAgICAgICAgICAgIGNvbXB1dGVLZXlPYmplY3Qob2JqZWN0LCBzcGVjaWZpZXIsIGFsaWFzTWFwKTtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQudHlwZW5hbWUgKyBcIjpcIiArIEpTT04uc3RyaW5naWZ5KGtleU9iamVjdCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG1ha2VBbGlhc01hcChzZWxlY3Rpb25TZXQsIGZyYWdtZW50TWFwKSB7XG4gICAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIHdvcmtRdWV1ZSA9IG5ldyBTZXQoW3NlbGVjdGlvblNldF0pO1xuICAgIHdvcmtRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoaXNGaWVsZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5hbGlhcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2VLZXkgPSBzZWxlY3Rpb24uYWxpYXMudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZUtleSA9IHNlbGVjdGlvbi5uYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcmVLZXkgIT09IHJlc3BvbnNlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWxpYXNlcyA9IG1hcC5hbGlhc2VzIHx8IChtYXAuYWxpYXNlcyA9IE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXNlc1tzdG9yZUtleV0gPSByZXNwb25zZUtleTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3Vic2V0cyA9IG1hcC5zdWJzZXRzIHx8IChtYXAuc3Vic2V0cyA9IE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzZXRzW3NlbGVjdGlvbi5uYW1lLnZhbHVlXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWtlQWxpYXNNYXAoc2VsZWN0aW9uLnNlbGVjdGlvblNldCwgZnJhZ21lbnRNYXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGdldEZyYWdtZW50RnJvbVNlbGVjdGlvbihzZWxlY3Rpb24sIGZyYWdtZW50TWFwKTtcbiAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd29ya1F1ZXVlLmFkZChmcmFnbWVudC5zZWxlY3Rpb25TZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVLZXlPYmplY3QocmVzcG9uc2UsIHNwZWNpZmllciwgYWxpYXNNYXApIHtcbiAgICB2YXIga2V5T2JqID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgcHJldktleTtcbiAgICBzcGVjaWZpZXIuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcmV2S2V5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1YnNldHMgPSBhbGlhc01hcCAmJiBhbGlhc01hcC5zdWJzZXRzO1xuICAgICAgICAgICAgICAgIHZhciBzdWJzZXQgPSBzdWJzZXRzICYmIHN1YnNldHNbcHJldktleV07XG4gICAgICAgICAgICAgICAga2V5T2JqW3ByZXZLZXldID0gY29tcHV0ZUtleU9iamVjdChyZXNwb25zZVtwcmV2S2V5XSwgcywgc3Vic2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhbGlhc2VzID0gYWxpYXNNYXAgJiYgYWxpYXNNYXAuYWxpYXNlcztcbiAgICAgICAgICAgIHZhciByZXNwb25zZU5hbWUgPSBhbGlhc2VzICYmIGFsaWFzZXNbc10gfHwgcztcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChoYXNPd24uY2FsbChyZXNwb25zZSwgcmVzcG9uc2VOYW1lKSwgMzMpIDogaW52YXJpYW50KGhhc093bi5jYWxsKHJlc3BvbnNlLCByZXNwb25zZU5hbWUpLCBcIk1pc3NpbmcgZmllbGQgJ1wiICsgcmVzcG9uc2VOYW1lICsgXCInIHdoaWxlIGNvbXB1dGluZyBrZXkgZmllbGRzXCIpO1xuICAgICAgICAgICAga2V5T2JqW3ByZXZLZXkgPSBzXSA9IHJlc3BvbnNlW3Jlc3BvbnNlTmFtZV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ga2V5T2JqO1xufVxuXG5leHBvcnQgeyBQb2xpY2llcywgZGVmYXVsdERhdGFJZEZyb21PYmplY3QgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbGljaWVzLmpzLm1hcFxuIiwiaW1wb3J0IHsgU2xvdCB9IGZyb20gJ0B3cnkvY29udGV4dCc7XG5pbXBvcnQgeyBkZXAgfSBmcm9tICdvcHRpbWlzbSc7XG5cbnZhciB2YXJEZXAgPSBkZXAoKTtcbnZhciBjYWNoZVNsb3QgPSBuZXcgU2xvdCgpO1xuZnVuY3Rpb24gbWFrZVZhcih2YWx1ZSkge1xuICAgIHZhciBjYWNoZXMgPSBuZXcgU2V0KCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJ2KG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyRGVwLmRpcnR5KHJ2KTtcbiAgICAgICAgICAgICAgICBjYWNoZXMuZm9yRWFjaChicm9hZGNhc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNhY2hlID0gY2FjaGVTbG90LmdldFZhbHVlKCk7XG4gICAgICAgICAgICBpZiAoY2FjaGUpXG4gICAgICAgICAgICAgICAgY2FjaGVzLmFkZChjYWNoZSk7XG4gICAgICAgICAgICB2YXJEZXAocnYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYnJvYWRjYXN0KGNhY2hlKSB7XG4gICAgaWYgKGNhY2hlLmJyb2FkY2FzdFdhdGNoZXMpIHtcbiAgICAgICAgY2FjaGUuYnJvYWRjYXN0V2F0Y2hlcygpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgY2FjaGVTbG90LCBtYWtlVmFyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdGl2ZVZhcnMuanMubWFwXG4iLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gJ3RzbGliJztcbmltcG9ydCB7IEludmFyaWFudEVycm9yLCBpbnZhcmlhbnQgfSBmcm9tICd0cy1pbnZhcmlhbnQnO1xuaW1wb3J0IHsgY3JlYXRlRnJhZ21lbnRNYXAgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ3JhcGhxbC9mcmFnbWVudHMuanMnO1xuaW1wb3J0IHsgaXNSZWZlcmVuY2UsIG1ha2VSZWZlcmVuY2UsIGlzRmllbGQsIHJlc3VsdEtleU5hbWVGcm9tRmllbGQsIGlzSW5saW5lRnJhZ21lbnQgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ3JhcGhxbC9zdG9yZVV0aWxzLmpzJztcbmltcG9ydCB7IGdldERlZmF1bHRWYWx1ZXMsIGdldFF1ZXJ5RGVmaW5pdGlvbiwgZ2V0TWFpbkRlZmluaXRpb24sIGdldEZyYWdtZW50RGVmaW5pdGlvbnMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ3JhcGhxbC9nZXRGcm9tQVNULmpzJztcbmltcG9ydCB7IHNob3VsZEluY2x1ZGUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ3JhcGhxbC9kaXJlY3RpdmVzLmpzJztcbmltcG9ydCB7IGFkZFR5cGVuYW1lVG9Eb2N1bWVudCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9ncmFwaHFsL3RyYW5zZm9ybS5qcyc7XG5pbXBvcnQgeyBtZXJnZURlZXBBcnJheSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jb21tb24vbWVyZ2VEZWVwLmpzJztcbmltcG9ydCB7IHdyYXAgfSBmcm9tICdvcHRpbWlzbSc7XG5pbXBvcnQgeyBNaXNzaW5nRmllbGRFcnJvciB9IGZyb20gJy4uL2NvcmUvdHlwZXMvY29tbW9uLmpzJztcbmltcG9ydCB7IG1heWJlRGVlcEZyZWV6ZSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jb21tb24vbWF5YmVEZWVwRnJlZXplLmpzJztcbmltcG9ydCB7IGdldFR5cGVuYW1lRnJvbVN0b3JlT2JqZWN0IH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCB7IHN1cHBvcnRzUmVzdWx0Q2FjaGluZyB9IGZyb20gJy4vZW50aXR5U3RvcmUuanMnO1xuXG5mdW5jdGlvbiBtaXNzaW5nRnJvbUludmFyaWFudChlcnIsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IE1pc3NpbmdGaWVsZEVycm9yKGVyci5tZXNzYWdlLCBjb250ZXh0LnBhdGguc2xpY2UoKSwgY29udGV4dC5xdWVyeSwgY29udGV4dC52YXJpYWJsZXMpO1xufVxudmFyIFN0b3JlUmVhZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdG9yZVJlYWRlcihjb25maWcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuZXhlY3V0ZVNlbGVjdGlvblNldCA9IHdyYXAoZnVuY3Rpb24gKG9wdGlvbnMpIHsgcmV0dXJuIF90aGlzLmV4ZWNTZWxlY3Rpb25TZXRJbXBsKG9wdGlvbnMpOyB9LCB7XG4gICAgICAgICAgICBrZXlBcmdzOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9iamVjdE9yUmVmZXJlbmNlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYWtlQ2FjaGVLZXk6IGZ1bmN0aW9uIChzZWxlY3Rpb25TZXQsIHBhcmVudCwgY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGlmIChzdXBwb3J0c1Jlc3VsdENhY2hpbmcoY29udGV4dC5zdG9yZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuc3RvcmUubWFrZUNhY2hlS2V5KHNlbGVjdGlvblNldCwgaXNSZWZlcmVuY2UocGFyZW50KSA/IHBhcmVudC5fX3JlZiA6IHBhcmVudCwgY29udGV4dC52YXJTdHJpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMua25vd25SZXN1bHRzID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGhpcy5leGVjdXRlU3ViU2VsZWN0ZWRBcnJheSA9IHdyYXAoZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5leGVjU3ViU2VsZWN0ZWRBcnJheUltcGwob3B0aW9ucyk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1ha2VDYWNoZUtleTogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkID0gX2EuZmllbGQsIGFycmF5ID0gX2EuYXJyYXksIGNvbnRleHQgPSBfYS5jb250ZXh0O1xuICAgICAgICAgICAgICAgIGlmIChzdXBwb3J0c1Jlc3VsdENhY2hpbmcoY29udGV4dC5zdG9yZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuc3RvcmUubWFrZUNhY2hlS2V5KGZpZWxkLCBhcnJheSwgY29udGV4dC52YXJTdHJpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gX19hc3NpZ24oeyBhZGRUeXBlbmFtZTogdHJ1ZSB9LCBjb25maWcpO1xuICAgIH1cbiAgICBTdG9yZVJlYWRlci5wcm90b3R5cGUucmVhZFF1ZXJ5RnJvbVN0b3JlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlmZlF1ZXJ5QWdhaW5zdFN0b3JlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyByZXR1cm5QYXJ0aWFsRGF0YTogZmFsc2UgfSkpLnJlc3VsdDtcbiAgICB9O1xuICAgIFN0b3JlUmVhZGVyLnByb3RvdHlwZS5kaWZmUXVlcnlBZ2FpbnN0U3RvcmUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHN0b3JlID0gX2Euc3RvcmUsIHF1ZXJ5ID0gX2EucXVlcnksIF9iID0gX2Eucm9vdElkLCByb290SWQgPSBfYiA9PT0gdm9pZCAwID8gJ1JPT1RfUVVFUlknIDogX2IsIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgX2MgPSBfYS5yZXR1cm5QYXJ0aWFsRGF0YSwgcmV0dXJuUGFydGlhbERhdGEgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jO1xuICAgICAgICB2YXIgcG9saWNpZXMgPSB0aGlzLmNvbmZpZy5jYWNoZS5wb2xpY2llcztcbiAgICAgICAgdmFyaWFibGVzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGdldERlZmF1bHRWYWx1ZXMoZ2V0UXVlcnlEZWZpbml0aW9uKHF1ZXJ5KSkpLCB2YXJpYWJsZXMpO1xuICAgICAgICB2YXIgZXhlY1Jlc3VsdCA9IHRoaXMuZXhlY3V0ZVNlbGVjdGlvblNldCh7XG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IGdldE1haW5EZWZpbml0aW9uKHF1ZXJ5KS5zZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICBvYmplY3RPclJlZmVyZW5jZTogbWFrZVJlZmVyZW5jZShyb290SWQpLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHN0b3JlOiBzdG9yZSxcbiAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgICAgICAgcG9saWNpZXM6IHBvbGljaWVzLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIHZhclN0cmluZzogSlNPTi5zdHJpbmdpZnkodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICBmcmFnbWVudE1hcDogY3JlYXRlRnJhZ21lbnRNYXAoZ2V0RnJhZ21lbnREZWZpbml0aW9ucyhxdWVyeSkpLFxuICAgICAgICAgICAgICAgIHBhdGg6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBoYXNNaXNzaW5nRmllbGRzID0gZXhlY1Jlc3VsdC5taXNzaW5nICYmIGV4ZWNSZXN1bHQubWlzc2luZy5sZW5ndGggPiAwO1xuICAgICAgICBpZiAoaGFzTWlzc2luZ0ZpZWxkcyAmJiAhcmV0dXJuUGFydGlhbERhdGEpIHtcbiAgICAgICAgICAgIHRocm93IGV4ZWNSZXN1bHQubWlzc2luZ1swXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdWx0OiBleGVjUmVzdWx0LnJlc3VsdCxcbiAgICAgICAgICAgIG1pc3Npbmc6IGV4ZWNSZXN1bHQubWlzc2luZyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAhaGFzTWlzc2luZ0ZpZWxkcyxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFN0b3JlUmVhZGVyLnByb3RvdHlwZS5pc0ZyZXNoID0gZnVuY3Rpb24gKHJlc3VsdCwgcGFyZW50LCBzZWxlY3Rpb25TZXQsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHN1cHBvcnRzUmVzdWx0Q2FjaGluZyhjb250ZXh0LnN0b3JlKSAmJlxuICAgICAgICAgICAgdGhpcy5rbm93blJlc3VsdHMuZ2V0KHJlc3VsdCkgPT09IHNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgdmFyIGxhdGVzdCA9IHRoaXMuZXhlY3V0ZVNlbGVjdGlvblNldC5wZWVrKHNlbGVjdGlvblNldCwgcGFyZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChsYXRlc3QgJiYgcmVzdWx0ID09PSBsYXRlc3QucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgU3RvcmVSZWFkZXIucHJvdG90eXBlLmV4ZWNTZWxlY3Rpb25TZXRJbXBsID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzZWxlY3Rpb25TZXQgPSBfYS5zZWxlY3Rpb25TZXQsIG9iamVjdE9yUmVmZXJlbmNlID0gX2Eub2JqZWN0T3JSZWZlcmVuY2UsIGNvbnRleHQgPSBfYS5jb250ZXh0O1xuICAgICAgICBpZiAoaXNSZWZlcmVuY2Uob2JqZWN0T3JSZWZlcmVuY2UpICYmXG4gICAgICAgICAgICAhY29udGV4dC5wb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZFtvYmplY3RPclJlZmVyZW5jZS5fX3JlZl0gJiZcbiAgICAgICAgICAgICFjb250ZXh0LnN0b3JlLmhhcyhvYmplY3RPclJlZmVyZW5jZS5fX3JlZikpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0OiB7fSxcbiAgICAgICAgICAgICAgICBtaXNzaW5nOiBbbWlzc2luZ0Zyb21JbnZhcmlhbnQocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gbmV3IEludmFyaWFudEVycm9yKDQ2KSA6IG5ldyBJbnZhcmlhbnRFcnJvcihcIkRhbmdsaW5nIHJlZmVyZW5jZSB0byBtaXNzaW5nIFwiICsgb2JqZWN0T3JSZWZlcmVuY2UuX19yZWYgKyBcIiBvYmplY3RcIiksIGNvbnRleHQpXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZyYWdtZW50TWFwID0gY29udGV4dC5mcmFnbWVudE1hcCwgdmFyaWFibGVzID0gY29udGV4dC52YXJpYWJsZXMsIHBvbGljaWVzID0gY29udGV4dC5wb2xpY2llcywgc3RvcmUgPSBjb250ZXh0LnN0b3JlO1xuICAgICAgICB2YXIgb2JqZWN0c1RvTWVyZ2UgPSBbXTtcbiAgICAgICAgdmFyIGZpbmFsUmVzdWx0ID0geyByZXN1bHQ6IG51bGwgfTtcbiAgICAgICAgdmFyIHR5cGVuYW1lID0gc3RvcmUuZ2V0RmllbGRWYWx1ZShvYmplY3RPclJlZmVyZW5jZSwgXCJfX3R5cGVuYW1lXCIpO1xuICAgICAgICBpZiAodGhpcy5jb25maWcuYWRkVHlwZW5hbWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB0eXBlbmFtZSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgIXBvbGljaWVzLnJvb3RJZHNCeVR5cGVuYW1lW3R5cGVuYW1lXSkge1xuICAgICAgICAgICAgb2JqZWN0c1RvTWVyZ2UucHVzaCh7IF9fdHlwZW5hbWU6IHR5cGVuYW1lIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldE1pc3NpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxSZXN1bHQubWlzc2luZyB8fCAoZmluYWxSZXN1bHQubWlzc2luZyA9IFtdKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVNaXNzaW5nKHJlc3VsdCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5taXNzaW5nKVxuICAgICAgICAgICAgICAgIChfYSA9IGdldE1pc3NpbmcoKSkucHVzaC5hcHBseShfYSwgcmVzdWx0Lm1pc3NpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdvcmtTZXQgPSBuZXcgU2V0KHNlbGVjdGlvblNldC5zZWxlY3Rpb25zKTtcbiAgICAgICAgd29ya1NldC5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmICghc2hvdWxkSW5jbHVkZShzZWxlY3Rpb24sIHZhcmlhYmxlcykpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGlzRmllbGQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZFZhbHVlID0gcG9saWNpZXMucmVhZEZpZWxkKHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiBzZWxlY3Rpb24ubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IHNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBjb250ZXh0LnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogb2JqZWN0T3JSZWZlcmVuY2UsXG4gICAgICAgICAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdE5hbWUgPSByZXN1bHRLZXlOYW1lRnJvbUZpZWxkKHNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgY29udGV4dC5wYXRoLnB1c2gocmVzdWx0TmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFkZFR5cGVuYW1lVG9Eb2N1bWVudC5hZGRlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRNaXNzaW5nKCkucHVzaChtaXNzaW5nRnJvbUludmFyaWFudChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBuZXcgSW52YXJpYW50RXJyb3IoNDcpIDogbmV3IEludmFyaWFudEVycm9yKFwiQ2FuJ3QgZmluZCBmaWVsZCAnXCIgKyBzZWxlY3Rpb24ubmFtZS52YWx1ZSArIFwiJyBvbiBcIiArIChpc1JlZmVyZW5jZShvYmplY3RPclJlZmVyZW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG9iamVjdE9yUmVmZXJlbmNlLl9fcmVmICsgXCIgb2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwib2JqZWN0IFwiICsgSlNPTi5zdHJpbmdpZnkob2JqZWN0T3JSZWZlcmVuY2UsIG51bGwsIDIpKSksIGNvbnRleHQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGZpZWxkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPSBoYW5kbGVNaXNzaW5nKF90aGlzLmV4ZWN1dGVTdWJTZWxlY3RlZEFycmF5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBzZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheTogZmllbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXNlbGVjdGlvbi5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VydFNlbGVjdGlvblNldEZvcklkVmFsdWUoY29udGV4dC5zdG9yZSwgc2VsZWN0aW9uLCBmaWVsZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlRGVlcEZyZWV6ZShmaWVsZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWVsZFZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRWYWx1ZSA9IGhhbmRsZU1pc3NpbmcoX3RoaXMuZXhlY3V0ZVNlbGVjdGlvblNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHNlbGVjdGlvbi5zZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RPclJlZmVyZW5jZTogZmllbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RzVG9NZXJnZS5wdXNoKChfYSA9IHt9LCBfYVtyZXN1bHROYW1lXSA9IGZpZWxkVmFsdWUsIF9hKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGludmFyaWFudChjb250ZXh0LnBhdGgucG9wKCkgPT09IHJlc3VsdE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGlmIChpc0lubGluZUZyYWdtZW50KHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgPSBzZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZnJhZ21lbnQgPSBmcmFnbWVudE1hcFtzZWxlY3Rpb24ubmFtZS52YWx1ZV0sIDQ4KSA6IGludmFyaWFudChmcmFnbWVudCA9IGZyYWdtZW50TWFwW3NlbGVjdGlvbi5uYW1lLnZhbHVlXSwgXCJObyBmcmFnbWVudCBuYW1lZCBcIiArIHNlbGVjdGlvbi5uYW1lLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBvbGljaWVzLmZyYWdtZW50TWF0Y2hlcyhmcmFnbWVudCwgdHlwZW5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50LnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmZvckVhY2god29ya1NldC5hZGQsIHdvcmtTZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGZpbmFsUmVzdWx0LnJlc3VsdCA9IG1lcmdlRGVlcEFycmF5KG9iamVjdHNUb01lcmdlKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIE9iamVjdC5mcmVlemUoZmluYWxSZXN1bHQucmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtub3duUmVzdWx0cy5zZXQoZmluYWxSZXN1bHQucmVzdWx0LCBzZWxlY3Rpb25TZXQpO1xuICAgICAgICByZXR1cm4gZmluYWxSZXN1bHQ7XG4gICAgfTtcbiAgICBTdG9yZVJlYWRlci5wcm90b3R5cGUuZXhlY1N1YlNlbGVjdGVkQXJyYXlJbXBsID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBmaWVsZCA9IF9hLmZpZWxkLCBhcnJheSA9IF9hLmFycmF5LCBjb250ZXh0ID0gX2EuY29udGV4dDtcbiAgICAgICAgdmFyIG1pc3Npbmc7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1pc3NpbmcoY2hpbGRSZXN1bHQsIGkpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZFJlc3VsdC5taXNzaW5nKSB7XG4gICAgICAgICAgICAgICAgbWlzc2luZyA9IG1pc3NpbmcgfHwgW107XG4gICAgICAgICAgICAgICAgbWlzc2luZy5wdXNoLmFwcGx5KG1pc3NpbmcsIGNoaWxkUmVzdWx0Lm1pc3NpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW52YXJpYW50KGNvbnRleHQucGF0aC5wb3AoKSA9PT0gaSk7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRSZXN1bHQucmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgIGFycmF5ID0gYXJyYXkuZmlsdGVyKGNvbnRleHQuc3RvcmUuY2FuUmVhZCk7XG4gICAgICAgIH1cbiAgICAgICAgYXJyYXkgPSBhcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LnBhdGgucHVzaChpKTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZU1pc3NpbmcoX3RoaXMuZXhlY3V0ZVN1YlNlbGVjdGVkQXJyYXkoe1xuICAgICAgICAgICAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgICAgICAgICAgIGFycmF5OiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIH0pLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlTWlzc2luZyhfdGhpcy5leGVjdXRlU2VsZWN0aW9uU2V0KHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiBmaWVsZC5zZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdE9yUmVmZXJlbmNlOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIH0pLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0U2VsZWN0aW9uU2V0Rm9ySWRWYWx1ZShjb250ZXh0LnN0b3JlLCBmaWVsZCwgaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnZhcmlhbnQoY29udGV4dC5wYXRoLnBvcCgpID09PSBpKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIE9iamVjdC5mcmVlemUoYXJyYXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogYXJyYXksIG1pc3Npbmc6IG1pc3NpbmcgfTtcbiAgICB9O1xuICAgIHJldHVybiBTdG9yZVJlYWRlcjtcbn0oKSk7XG5mdW5jdGlvbiBhc3NlcnRTZWxlY3Rpb25TZXRGb3JJZFZhbHVlKHN0b3JlLCBmaWVsZCwgZmllbGRWYWx1ZSkge1xuICAgIGlmICghZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgIHZhciB3b3JrU2V0XzEgPSBuZXcgU2V0KFtmaWVsZFZhbHVlXSk7XG4gICAgICAgIHdvcmtTZXRfMS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudCghaXNSZWZlcmVuY2UodmFsdWUpLCA0OSkgOiBpbnZhcmlhbnQoIWlzUmVmZXJlbmNlKHZhbHVlKSwgXCJNaXNzaW5nIHNlbGVjdGlvbiBzZXQgZm9yIG9iamVjdCBvZiB0eXBlIFwiICsgZ2V0VHlwZW5hbWVGcm9tU3RvcmVPYmplY3Qoc3RvcmUsIHZhbHVlKSArIFwiIHJldHVybmVkIGZvciBxdWVyeSBmaWVsZCBcIiArIGZpZWxkLm5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXModmFsdWUpLmZvckVhY2god29ya1NldF8xLmFkZCwgd29ya1NldF8xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBTdG9yZVJlYWRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhZEZyb21TdG9yZS5qcy5tYXBcbiIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgSW52YXJpYW50RXJyb3IsIGludmFyaWFudCB9IGZyb20gJ3RzLWludmFyaWFudCc7XG5pbXBvcnQgeyBjcmVhdGVGcmFnbWVudE1hcCwgZ2V0RnJhZ21lbnRGcm9tU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dyYXBocWwvZnJhZ21lbnRzLmpzJztcbmltcG9ydCB7IGlzUmVmZXJlbmNlLCBtYWtlUmVmZXJlbmNlLCBnZXRUeXBlbmFtZUZyb21SZXN1bHQsIGlzRmllbGQsIHJlc3VsdEtleU5hbWVGcm9tRmllbGQgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ3JhcGhxbC9zdG9yZVV0aWxzLmpzJztcbmltcG9ydCB7IGdldE9wZXJhdGlvbkRlZmluaXRpb24sIGdldERlZmF1bHRWYWx1ZXMsIGdldEZyYWdtZW50RGVmaW5pdGlvbnMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ3JhcGhxbC9nZXRGcm9tQVNULmpzJztcbmltcG9ydCB7IGVxdWFsIH0gZnJvbSAnQHdyeS9lcXVhbGl0eSc7XG5pbXBvcnQgeyBzaG91bGRJbmNsdWRlLCBoYXNEaXJlY3RpdmVzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dyYXBocWwvZGlyZWN0aXZlcy5qcyc7XG5pbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvY29tbW9uL2Nsb25lRGVlcC5qcyc7XG5pbXBvcnQgeyBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lLCBtYWtlUHJvY2Vzc2VkRmllbGRzTWVyZ2VyIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxudmFyIFN0b3JlV3JpdGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdG9yZVdyaXRlcihjYWNoZSwgcmVhZGVyKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgICAgICAgdGhpcy5yZWFkZXIgPSByZWFkZXI7XG4gICAgfVxuICAgIFN0b3JlV3JpdGVyLnByb3RvdHlwZS53cml0ZVRvU3RvcmUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gX2EucXVlcnksIHJlc3VsdCA9IF9hLnJlc3VsdCwgZGF0YUlkID0gX2EuZGF0YUlkLCBzdG9yZSA9IF9hLnN0b3JlLCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXM7XG4gICAgICAgIHZhciBvcGVyYXRpb25EZWZpbml0aW9uID0gZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihxdWVyeSk7XG4gICAgICAgIHZhciBtZXJnZXIgPSBtYWtlUHJvY2Vzc2VkRmllbGRzTWVyZ2VyKCk7XG4gICAgICAgIHZhcmlhYmxlcyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBnZXREZWZhdWx0VmFsdWVzKG9wZXJhdGlvbkRlZmluaXRpb24pKSwgdmFyaWFibGVzKTtcbiAgICAgICAgdmFyIG9iak9yUmVmID0gdGhpcy5wcm9jZXNzU2VsZWN0aW9uU2V0KHtcbiAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0IHx8IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBkYXRhSWQ6IGRhdGFJZCxcbiAgICAgICAgICAgIHNlbGVjdGlvblNldDogb3BlcmF0aW9uRGVmaW5pdGlvbi5zZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgICAgICAgICAgIHdyaXR0ZW46IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICAgICAgbWVyZ2U6IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lcmdlci5tZXJnZShleGlzdGluZywgaW5jb21pbmcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgdmFyU3RyaW5nOiBKU09OLnN0cmluZ2lmeSh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgIGZyYWdtZW50TWFwOiBjcmVhdGVGcmFnbWVudE1hcChnZXRGcmFnbWVudERlZmluaXRpb25zKHF1ZXJ5KSksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlZiA9IGlzUmVmZXJlbmNlKG9iak9yUmVmKSA/IG9iak9yUmVmIDpcbiAgICAgICAgICAgIGRhdGFJZCAmJiBtYWtlUmVmZXJlbmNlKGRhdGFJZCkgfHwgdm9pZCAwO1xuICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgICBzdG9yZS5yZXRhaW4ocmVmLl9fcmVmKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVmO1xuICAgIH07XG4gICAgU3RvcmVXcml0ZXIucHJvdG90eXBlLnByb2Nlc3NTZWxlY3Rpb25TZXQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRhdGFJZCA9IF9hLmRhdGFJZCwgcmVzdWx0ID0gX2EucmVzdWx0LCBzZWxlY3Rpb25TZXQgPSBfYS5zZWxlY3Rpb25TZXQsIGNvbnRleHQgPSBfYS5jb250ZXh0LCBfYiA9IF9hLm91dCwgb3V0ID0gX2IgPT09IHZvaWQgMCA/IHtcbiAgICAgICAgICAgIHNob3VsZEFwcGx5TWVyZ2VzOiBmYWxzZSxcbiAgICAgICAgfSA6IF9iO1xuICAgICAgICB2YXIgcG9saWNpZXMgPSB0aGlzLmNhY2hlLnBvbGljaWVzO1xuICAgICAgICB2YXIgX2MgPSBwb2xpY2llcy5pZGVudGlmeShyZXN1bHQsIHNlbGVjdGlvblNldCwgY29udGV4dC5mcmFnbWVudE1hcCksIGlkID0gX2NbMF0sIGtleU9iamVjdCA9IF9jWzFdO1xuICAgICAgICBkYXRhSWQgPSBkYXRhSWQgfHwgaWQ7XG4gICAgICAgIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgZGF0YUlkKSB7XG4gICAgICAgICAgICB2YXIgc2V0cyA9IGNvbnRleHQud3JpdHRlbltkYXRhSWRdIHx8IChjb250ZXh0LndyaXR0ZW5bZGF0YUlkXSA9IFtdKTtcbiAgICAgICAgICAgIHZhciByZWYgPSBtYWtlUmVmZXJlbmNlKGRhdGFJZCk7XG4gICAgICAgICAgICBpZiAoc2V0cy5pbmRleE9mKHNlbGVjdGlvblNldCkgPj0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmO1xuICAgICAgICAgICAgc2V0cy5wdXNoKHNlbGVjdGlvblNldCk7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkZXIgJiYgdGhpcy5yZWFkZXIuaXNGcmVzaChyZXN1bHQsIHJlZiwgc2VsZWN0aW9uU2V0LCBjb250ZXh0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1lcmdlZEZpZWxkcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGlmIChrZXlPYmplY3QpIHtcbiAgICAgICAgICAgIG1lcmdlZEZpZWxkcyA9IGNvbnRleHQubWVyZ2UobWVyZ2VkRmllbGRzLCBrZXlPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0eXBlbmFtZSA9IChkYXRhSWQgJiYgcG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWRbZGF0YUlkXSkgfHxcbiAgICAgICAgICAgIGdldFR5cGVuYW1lRnJvbVJlc3VsdChyZXN1bHQsIHNlbGVjdGlvblNldCwgY29udGV4dC5mcmFnbWVudE1hcCkgfHxcbiAgICAgICAgICAgIChkYXRhSWQgJiYgY29udGV4dC5zdG9yZS5nZXQoZGF0YUlkLCBcIl9fdHlwZW5hbWVcIikpO1xuICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHR5cGVuYW1lKSB7XG4gICAgICAgICAgICBtZXJnZWRGaWVsZHMuX190eXBlbmFtZSA9IHR5cGVuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3b3JrU2V0ID0gbmV3IFNldChzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucyk7XG4gICAgICAgIHdvcmtTZXQuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoIXNob3VsZEluY2x1ZGUoc2VsZWN0aW9uLCBjb250ZXh0LnZhcmlhYmxlcykpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGlzRmllbGQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHRGaWVsZEtleSA9IHJlc3VsdEtleU5hbWVGcm9tRmllbGQoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHRbcmVzdWx0RmllbGRLZXldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZUZpZWxkTmFtZSA9IHBvbGljaWVzLmdldFN0b3JlRmllbGROYW1lKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVuYW1lOiB0eXBlbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogc2VsZWN0aW9uLm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBjb250ZXh0LnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmNvbWluZ1ZhbHVlID0gX3RoaXMucHJvY2Vzc0ZpZWxkVmFsdWUodmFsdWUsIHNlbGVjdGlvbiwgY29udGV4dCwgb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvbGljaWVzLmhhc01lcmdlRnVuY3Rpb24odHlwZW5hbWUsIHNlbGVjdGlvbi5uYW1lLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5jb21pbmdWYWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2ZpZWxkOiBzZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX190eXBlbmFtZTogdHlwZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX192YWx1ZTogaW5jb21pbmdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQuc2hvdWxkQXBwbHlNZXJnZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1lcmdlZEZpZWxkcyA9IGNvbnRleHQubWVyZ2UobWVyZ2VkRmllbGRzLCAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hW3N0b3JlRmllbGROYW1lXSA9IGluY29taW5nVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfYSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwb2xpY2llcy51c2luZ1Bvc3NpYmxlVHlwZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgIWhhc0RpcmVjdGl2ZXMoW1wiZGVmZXJcIiwgXCJjbGllbnRcIl0sIHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gbmV3IEludmFyaWFudEVycm9yKDUwKSA6IG5ldyBJbnZhcmlhbnRFcnJvcihcIk1pc3NpbmcgZmllbGQgJ1wiICsgcmVzdWx0RmllbGRLZXkgKyBcIicgaW4gXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpLnN1YnN0cmluZygwLCAxMDApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBnZXRGcmFnbWVudEZyb21TZWxlY3Rpb24oc2VsZWN0aW9uLCBjb250ZXh0LmZyYWdtZW50TWFwKTtcbiAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnQgJiYgcG9saWNpZXMuZnJhZ21lbnRNYXRjaGVzKGZyYWdtZW50LCB0eXBlbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQuc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZm9yRWFjaCh3b3JrU2V0LmFkZCwgd29ya1NldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKFwic3RyaW5nXCIgPT09IHR5cGVvZiBkYXRhSWQpIHtcbiAgICAgICAgICAgIHZhciBlbnRpdHlSZWZfMSA9IG1ha2VSZWZlcmVuY2UoZGF0YUlkKTtcbiAgICAgICAgICAgIGlmIChvdXQuc2hvdWxkQXBwbHlNZXJnZXMpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRGaWVsZHMgPSBwb2xpY2llcy5hcHBseU1lcmdlcyhlbnRpdHlSZWZfMSwgbWVyZ2VkRmllbGRzLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhtZXJnZWRGaWVsZHMpLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwb2xpY2llcy5oYXNNZXJnZUZ1bmN0aW9uKHR5cGVuYW1lLCBmaWVsZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuQWJvdXREYXRhTG9zcyhlbnRpdHlSZWZfMSwgbWVyZ2VkRmllbGRzLCBzdG9yZUZpZWxkTmFtZSwgY29udGV4dC5zdG9yZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuc3RvcmUubWVyZ2UoZGF0YUlkLCBtZXJnZWRGaWVsZHMpO1xuICAgICAgICAgICAgcmV0dXJuIGVudGl0eVJlZl8xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXJnZWRGaWVsZHM7XG4gICAgfTtcbiAgICBTdG9yZVdyaXRlci5wcm90b3R5cGUucHJvY2Vzc0ZpZWxkVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZpZWxkLCBjb250ZXh0LCBvdXQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFmaWVsZC5zZWxlY3Rpb25TZXQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gdmFsdWUgOiBjbG9uZURlZXAodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gX3RoaXMucHJvY2Vzc0ZpZWxkVmFsdWUoaXRlbSwgZmllbGQsIGNvbnRleHQsIG91dCk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTZWxlY3Rpb25TZXQoe1xuICAgICAgICAgICAgcmVzdWx0OiB2YWx1ZSxcbiAgICAgICAgICAgIHNlbGVjdGlvblNldDogZmllbGQuc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIG91dDogb3V0LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTdG9yZVdyaXRlcjtcbn0oKSk7XG52YXIgd2FybmluZ3MgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiB3YXJuQWJvdXREYXRhTG9zcyhleGlzdGluZ1JlZiwgaW5jb21pbmdPYmosIHN0b3JlRmllbGROYW1lLCBzdG9yZSkge1xuICAgIHZhciBnZXRDaGlsZCA9IGZ1bmN0aW9uIChvYmpPclJlZikge1xuICAgICAgICB2YXIgY2hpbGQgPSBzdG9yZS5nZXRGaWVsZFZhbHVlKG9iak9yUmVmLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgIHJldHVybiB0eXBlb2YgY2hpbGQgPT09IFwib2JqZWN0XCIgJiYgY2hpbGQ7XG4gICAgfTtcbiAgICB2YXIgZXhpc3RpbmcgPSBnZXRDaGlsZChleGlzdGluZ1JlZik7XG4gICAgaWYgKCFleGlzdGluZylcbiAgICAgICAgcmV0dXJuO1xuICAgIHZhciBpbmNvbWluZyA9IGdldENoaWxkKGluY29taW5nT2JqKTtcbiAgICBpZiAoIWluY29taW5nKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKGlzUmVmZXJlbmNlKGV4aXN0aW5nKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChlcXVhbChleGlzdGluZywgaW5jb21pbmcpKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKE9iamVjdC5rZXlzKGV4aXN0aW5nKS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBzdG9yZS5nZXRGaWVsZFZhbHVlKGluY29taW5nLCBrZXkpICE9PSB2b2lkIDA7IH0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHBhcmVudFR5cGUgPSBzdG9yZS5nZXRGaWVsZFZhbHVlKGV4aXN0aW5nUmVmLCBcIl9fdHlwZW5hbWVcIikgfHxcbiAgICAgICAgc3RvcmUuZ2V0RmllbGRWYWx1ZShpbmNvbWluZ09iaiwgXCJfX3R5cGVuYW1lXCIpO1xuICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKTtcbiAgICB2YXIgdHlwZURvdE5hbWUgPSBwYXJlbnRUeXBlICsgXCIuXCIgKyBmaWVsZE5hbWU7XG4gICAgaWYgKHdhcm5pbmdzLmhhcyh0eXBlRG90TmFtZSkpXG4gICAgICAgIHJldHVybjtcbiAgICB3YXJuaW5ncy5hZGQodHlwZURvdE5hbWUpO1xuICAgIHZhciBjaGlsZFR5cGVuYW1lcyA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleGlzdGluZykgJiZcbiAgICAgICAgIUFycmF5LmlzQXJyYXkoaW5jb21pbmcpKSB7XG4gICAgICAgIFtleGlzdGluZywgaW5jb21pbmddLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICB2YXIgdHlwZW5hbWUgPSBzdG9yZS5nZXRGaWVsZFZhbHVlKGNoaWxkLCBcIl9fdHlwZW5hbWVcIik7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHR5cGVuYW1lID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgIWNoaWxkVHlwZW5hbWVzLmluY2x1ZGVzKHR5cGVuYW1lKSkge1xuICAgICAgICAgICAgICAgIGNoaWxkVHlwZW5hbWVzLnB1c2godHlwZW5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiIHx8IGludmFyaWFudC53YXJuKFwiQ2FjaGUgZGF0YSBtYXkgYmUgbG9zdCB3aGVuIHJlcGxhY2luZyB0aGUgXCIgKyBmaWVsZE5hbWUgKyBcIiBmaWVsZCBvZiBhIFwiICsgcGFyZW50VHlwZSArIFwiIG9iamVjdC5cXG5cXG5UbyBhZGRyZXNzIHRoaXMgcHJvYmxlbSAod2hpY2ggaXMgbm90IGEgYnVnIGluIEFwb2xsbyBDbGllbnQpLCBcIiArIChjaGlsZFR5cGVuYW1lcy5sZW5ndGhcbiAgICAgICAgPyBcImVpdGhlciBlbnN1cmUgYWxsIG9iamVjdHMgb2YgdHlwZSBcIiArXG4gICAgICAgICAgICBjaGlsZFR5cGVuYW1lcy5qb2luKFwiIGFuZCBcIikgKyBcIiBoYXZlIElEcywgb3IgXCJcbiAgICAgICAgOiBcIlwiKSArIFwiZGVmaW5lIGEgY3VzdG9tIG1lcmdlIGZ1bmN0aW9uIGZvciB0aGUgXCIgKyB0eXBlRG90TmFtZSArIFwiIGZpZWxkLCBzbyBJbk1lbW9yeUNhY2hlIGNhbiBzYWZlbHkgbWVyZ2UgdGhlc2Ugb2JqZWN0czpcXG5cXG4gIGV4aXN0aW5nOiBcIiArIEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nKS5zbGljZSgwLCAxMDAwKSArIFwiXFxuICBpbmNvbWluZzogXCIgKyBKU09OLnN0cmluZ2lmeShpbmNvbWluZykuc2xpY2UoMCwgMTAwMCkgKyBcIlxcblxcbkZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZXNlIG9wdGlvbnMsIHBsZWFzZSByZWZlciB0byB0aGUgZG9jdW1lbnRhdGlvbjpcXG5cXG4gICogRW5zdXJpbmcgZW50aXR5IG9iamVjdHMgaGF2ZSBJRHM6IGh0dHBzOi8vZ28uYXBvbGxvLmRldi9jL2dlbmVyYXRpbmctdW5pcXVlLWlkZW50aWZpZXJzXFxuICAqIERlZmluaW5nIGN1c3RvbSBtZXJnZSBmdW5jdGlvbnM6IGh0dHBzOi8vZ28uYXBvbGxvLmRldi9jL21lcmdpbmctbm9uLW5vcm1hbGl6ZWQtb2JqZWN0c1xcblwiKTtcbn1cblxuZXhwb3J0IHsgU3RvcmVXcml0ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlVG9TdG9yZS5qcy5tYXBcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IsIF9fYXNzaWduIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgaW52YXJpYW50IH0gZnJvbSAndHMtaW52YXJpYW50JztcbmltcG9ydCB7IGNyZWF0ZUZyYWdtZW50TWFwIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2dyYXBocWwvZnJhZ21lbnRzLmpzJztcbmltcG9ydCB7IHJlc3VsdEtleU5hbWVGcm9tRmllbGQsIGFyZ3VtZW50c09iamVjdEZyb21GaWVsZCwgaXNGaWVsZCwgaXNJbmxpbmVGcmFnbWVudCB9IGZyb20gJy4uL3V0aWxpdGllcy9ncmFwaHFsL3N0b3JlVXRpbHMuanMnO1xuaW1wb3J0IHsgZ2V0TWFpbkRlZmluaXRpb24sIGdldEZyYWdtZW50RGVmaW5pdGlvbnMgfSBmcm9tICcuLi91dGlsaXRpZXMvZ3JhcGhxbC9nZXRGcm9tQVNULmpzJztcbmltcG9ydCB7IHZpc2l0LCBCUkVBSyB9IGZyb20gJ2dyYXBocWwvbGFuZ3VhZ2UvdmlzaXRvcic7XG5pbXBvcnQgeyBoYXNEaXJlY3RpdmVzLCBzaG91bGRJbmNsdWRlIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2dyYXBocWwvZGlyZWN0aXZlcy5qcyc7XG5pbXBvcnQgeyByZW1vdmVDbGllbnRTZXRzRnJvbURvY3VtZW50LCBidWlsZFF1ZXJ5RnJvbVNlbGVjdGlvblNldCB9IGZyb20gJy4uL3V0aWxpdGllcy9ncmFwaHFsL3RyYW5zZm9ybS5qcyc7XG5pbXBvcnQgeyBtZXJnZURlZXAsIG1lcmdlRGVlcEFycmF5IH0gZnJvbSAnLi4vdXRpbGl0aWVzL2NvbW1vbi9tZXJnZURlZXAuanMnO1xuaW1wb3J0IHsgY2FjaGVTbG90IH0gZnJvbSAnLi4vY2FjaGUvaW5tZW1vcnkvcmVhY3RpdmVWYXJzLmpzJztcblxudmFyIExvY2FsU3RhdGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExvY2FsU3RhdGUoX2EpIHtcbiAgICAgICAgdmFyIGNhY2hlID0gX2EuY2FjaGUsIGNsaWVudCA9IF9hLmNsaWVudCwgcmVzb2x2ZXJzID0gX2EucmVzb2x2ZXJzLCBmcmFnbWVudE1hdGNoZXIgPSBfYS5mcmFnbWVudE1hdGNoZXI7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgICAgICAgaWYgKGNsaWVudCkge1xuICAgICAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc29sdmVycykge1xuICAgICAgICAgICAgdGhpcy5hZGRSZXNvbHZlcnMocmVzb2x2ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJhZ21lbnRNYXRjaGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldEZyYWdtZW50TWF0Y2hlcihmcmFnbWVudE1hdGNoZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmFkZFJlc29sdmVycyA9IGZ1bmN0aW9uIChyZXNvbHZlcnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSB0aGlzLnJlc29sdmVycyB8fCB7fTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzb2x2ZXJzKSkge1xuICAgICAgICAgICAgcmVzb2x2ZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlc29sdmVyR3JvdXApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlcnMgPSBtZXJnZURlZXAoX3RoaXMucmVzb2x2ZXJzLCByZXNvbHZlckdyb3VwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSBtZXJnZURlZXAodGhpcy5yZXNvbHZlcnMsIHJlc29sdmVycyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnNldFJlc29sdmVycyA9IGZ1bmN0aW9uIChyZXNvbHZlcnMpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5hZGRSZXNvbHZlcnMocmVzb2x2ZXJzKTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmdldFJlc29sdmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZXJzIHx8IHt9O1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucnVuUmVzb2x2ZXJzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBkb2N1bWVudCA9IF9hLmRvY3VtZW50LCByZW1vdGVSZXN1bHQgPSBfYS5yZW1vdGVSZXN1bHQsIGNvbnRleHQgPSBfYS5jb250ZXh0LCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIF9iID0gX2Eub25seVJ1bkZvcmNlZFJlc29sdmVycywgb25seVJ1bkZvcmNlZFJlc29sdmVycyA9IF9iID09PSB2b2lkIDAgPyBmYWxzZSA6IF9iO1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZXNvbHZlRG9jdW1lbnQoZG9jdW1lbnQsIHJlbW90ZVJlc3VsdC5kYXRhLCBjb250ZXh0LCB2YXJpYWJsZXMsIHRoaXMuZnJhZ21lbnRNYXRjaGVyLCBvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzKS50aGVuKGZ1bmN0aW9uIChsb2NhbFJlc3VsdCkgeyByZXR1cm4gKF9fYXNzaWduKF9fYXNzaWduKHt9LCByZW1vdGVSZXN1bHQpLCB7IGRhdGE6IGxvY2FsUmVzdWx0LnJlc3VsdCB9KSk7IH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCByZW1vdGVSZXN1bHRdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuc2V0RnJhZ21lbnRNYXRjaGVyID0gZnVuY3Rpb24gKGZyYWdtZW50TWF0Y2hlcikge1xuICAgICAgICB0aGlzLmZyYWdtZW50TWF0Y2hlciA9IGZyYWdtZW50TWF0Y2hlcjtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmdldEZyYWdtZW50TWF0Y2hlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJhZ21lbnRNYXRjaGVyO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuY2xpZW50UXVlcnkgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgaWYgKGhhc0RpcmVjdGl2ZXMoWydjbGllbnQnXSwgZG9jdW1lbnQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5zZXJ2ZXJRdWVyeSA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlQ2xpZW50U2V0c0Zyb21Eb2N1bWVudChkb2N1bWVudCk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5wcmVwYXJlQ29udGV4dCA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGU7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29udGV4dCksIHsgY2FjaGU6IGNhY2hlLFxuICAgICAgICAgICAgZ2V0Q2FjaGVLZXk6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGUuaWRlbnRpZnkob2JqKTtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5hZGRFeHBvcnRlZFZhcmlhYmxlcyA9IGZ1bmN0aW9uIChkb2N1bWVudCwgdmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICh2YXJpYWJsZXMgPT09IHZvaWQgMCkgeyB2YXJpYWJsZXMgPSB7fTsgfVxuICAgICAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB7fTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZXNvbHZlRG9jdW1lbnQoZG9jdW1lbnQsIHRoaXMuYnVpbGRSb290VmFsdWVGcm9tQ2FjaGUoZG9jdW1lbnQsIHZhcmlhYmxlcykgfHwge30sIHRoaXMucHJlcGFyZUNvbnRleHQoY29udGV4dCksIHZhcmlhYmxlcykudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gKF9fYXNzaWduKF9fYXNzaWduKHt9LCB2YXJpYWJsZXMpLCBkYXRhLmV4cG9ydGVkVmFyaWFibGVzKSk7IH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBfX2Fzc2lnbih7fSwgdmFyaWFibGVzKV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5zaG91bGRGb3JjZVJlc29sdmVycyA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICB2YXIgZm9yY2VSZXNvbHZlcnMgPSBmYWxzZTtcbiAgICAgICAgdmlzaXQoZG9jdW1lbnQsIHtcbiAgICAgICAgICAgIERpcmVjdGl2ZToge1xuICAgICAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5uYW1lLnZhbHVlID09PSAnY2xpZW50JyAmJiBub2RlLmFyZ3VtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VSZXNvbHZlcnMgPSBub2RlLmFyZ3VtZW50cy5zb21lKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnLm5hbWUudmFsdWUgPT09ICdhbHdheXMnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZy52YWx1ZS5raW5kID09PSAnQm9vbGVhblZhbHVlJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmcudmFsdWUudmFsdWUgPT09IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JjZVJlc29sdmVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBCUkVBSztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvcmNlUmVzb2x2ZXJzO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuYnVpbGRSb290VmFsdWVGcm9tQ2FjaGUgPSBmdW5jdGlvbiAoZG9jdW1lbnQsIHZhcmlhYmxlcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5kaWZmKHtcbiAgICAgICAgICAgIHF1ZXJ5OiBidWlsZFF1ZXJ5RnJvbVNlbGVjdGlvblNldChkb2N1bWVudCksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgIHJldHVyblBhcnRpYWxEYXRhOiB0cnVlLFxuICAgICAgICAgICAgb3B0aW1pc3RpYzogZmFsc2UsXG4gICAgICAgIH0pLnJlc3VsdDtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnJlc29sdmVEb2N1bWVudCA9IGZ1bmN0aW9uIChkb2N1bWVudCwgcm9vdFZhbHVlLCBjb250ZXh0LCB2YXJpYWJsZXMsIGZyYWdtZW50TWF0Y2hlciwgb25seVJ1bkZvcmNlZFJlc29sdmVycykge1xuICAgICAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB7fTsgfVxuICAgICAgICBpZiAodmFyaWFibGVzID09PSB2b2lkIDApIHsgdmFyaWFibGVzID0ge307IH1cbiAgICAgICAgaWYgKGZyYWdtZW50TWF0Y2hlciA9PT0gdm9pZCAwKSB7IGZyYWdtZW50TWF0Y2hlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH07IH1cbiAgICAgICAgaWYgKG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMgPT09IHZvaWQgMCkgeyBvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1haW5EZWZpbml0aW9uLCBmcmFnbWVudHMsIGZyYWdtZW50TWFwLCBkZWZpbml0aW9uT3BlcmF0aW9uLCBkZWZhdWx0T3BlcmF0aW9uVHlwZSwgX2EsIGNhY2hlLCBjbGllbnQsIGV4ZWNDb250ZXh0O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIG1haW5EZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24oZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgIGZyYWdtZW50cyA9IGdldEZyYWdtZW50RGVmaW5pdGlvbnMoZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgIGZyYWdtZW50TWFwID0gY3JlYXRlRnJhZ21lbnRNYXAoZnJhZ21lbnRzKTtcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uT3BlcmF0aW9uID0gbWFpbkRlZmluaXRpb25cbiAgICAgICAgICAgICAgICAgICAgLm9wZXJhdGlvbjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0T3BlcmF0aW9uVHlwZSA9IGRlZmluaXRpb25PcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgPyBkZWZpbml0aW9uT3BlcmF0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25PcGVyYXRpb24uc2xpY2UoMSlcbiAgICAgICAgICAgICAgICAgICAgOiAnUXVlcnknO1xuICAgICAgICAgICAgICAgIF9hID0gdGhpcywgY2FjaGUgPSBfYS5jYWNoZSwgY2xpZW50ID0gX2EuY2xpZW50O1xuICAgICAgICAgICAgICAgIGV4ZWNDb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudE1hcDogZnJhZ21lbnRNYXAsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb250ZXh0KSwgeyBjYWNoZTogY2FjaGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnQ6IGNsaWVudCB9KSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50TWF0Y2hlcjogZnJhZ21lbnRNYXRjaGVyLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0T3BlcmF0aW9uVHlwZTogZGVmYXVsdE9wZXJhdGlvblR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydGVkVmFyaWFibGVzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgb25seVJ1bkZvcmNlZFJlc29sdmVyczogb25seVJ1bkZvcmNlZFJlc29sdmVycyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZXNvbHZlU2VsZWN0aW9uU2V0KG1haW5EZWZpbml0aW9uLnNlbGVjdGlvblNldCwgcm9vdFZhbHVlLCBleGVjQ29udGV4dCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7IHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRlZFZhcmlhYmxlczogZXhlY0NvbnRleHQuZXhwb3J0ZWRWYXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pOyB9KV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5yZXNvbHZlU2VsZWN0aW9uU2V0ID0gZnVuY3Rpb24gKHNlbGVjdGlvblNldCwgcm9vdFZhbHVlLCBleGVjQ29udGV4dCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnRNYXAsIGNvbnRleHQsIHZhcmlhYmxlcywgcmVzdWx0c1RvTWVyZ2UsIGV4ZWN1dGU7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50TWFwID0gZXhlY0NvbnRleHQuZnJhZ21lbnRNYXAsIGNvbnRleHQgPSBleGVjQ29udGV4dC5jb250ZXh0LCB2YXJpYWJsZXMgPSBleGVjQ29udGV4dC52YXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgcmVzdWx0c1RvTWVyZ2UgPSBbcm9vdFZhbHVlXTtcbiAgICAgICAgICAgICAgICBleGVjdXRlID0gZnVuY3Rpb24gKHNlbGVjdGlvbikgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZnJhZ21lbnQsIHR5cGVDb25kaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2hvdWxkSW5jbHVkZShzZWxlY3Rpb24sIHZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRmllbGQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZXNvbHZlRmllbGQoc2VsZWN0aW9uLCByb290VmFsdWUsIGV4ZWNDb250ZXh0KS50aGVuKGZ1bmN0aW9uIChmaWVsZFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmaWVsZFJlc3VsdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzVG9NZXJnZS5wdXNoKChfYSA9IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYVtyZXN1bHRLZXlOYW1lRnJvbUZpZWxkKHNlbGVjdGlvbildID0gZmllbGRSZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0lubGluZUZyYWdtZW50KHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCA9IHNlbGVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gZnJhZ21lbnRNYXBbc2VsZWN0aW9uLm5hbWUudmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmcmFnbWVudCwgMTkpIDogaW52YXJpYW50KGZyYWdtZW50LCBcIk5vIGZyYWdtZW50IG5hbWVkIFwiICsgc2VsZWN0aW9uLm5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyYWdtZW50ICYmIGZyYWdtZW50LnR5cGVDb25kaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlQ29uZGl0aW9uID0gZnJhZ21lbnQudHlwZUNvbmRpdGlvbi5uYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGVjQ29udGV4dC5mcmFnbWVudE1hdGNoZXIocm9vdFZhbHVlLCB0eXBlQ29uZGl0aW9uLCBjb250ZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVzb2x2ZVNlbGVjdGlvblNldChmcmFnbWVudC5zZWxlY3Rpb25TZXQsIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpLnRoZW4oZnVuY3Rpb24gKGZyYWdtZW50UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1RvTWVyZ2UucHVzaChmcmFnbWVudFJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7IH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBQcm9taXNlLmFsbChzZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5tYXAoZXhlY3V0ZSkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lcmdlRGVlcEFycmF5KHJlc3VsdHNUb01lcmdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucmVzb2x2ZUZpZWxkID0gZnVuY3Rpb24gKGZpZWxkLCByb290VmFsdWUsIGV4ZWNDb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2YXJpYWJsZXMsIGZpZWxkTmFtZSwgYWxpYXNlZEZpZWxkTmFtZSwgYWxpYXNVc2VkLCBkZWZhdWx0UmVzdWx0LCByZXN1bHRQcm9taXNlLCByZXNvbHZlclR5cGUsIHJlc29sdmVyTWFwLCByZXNvbHZlO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMgPSBleGVjQ29udGV4dC52YXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgZmllbGROYW1lID0gZmllbGQubmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBhbGlhc2VkRmllbGROYW1lID0gcmVzdWx0S2V5TmFtZUZyb21GaWVsZChmaWVsZCk7XG4gICAgICAgICAgICAgICAgYWxpYXNVc2VkID0gZmllbGROYW1lICE9PSBhbGlhc2VkRmllbGROYW1lO1xuICAgICAgICAgICAgICAgIGRlZmF1bHRSZXN1bHQgPSByb290VmFsdWVbYWxpYXNlZEZpZWxkTmFtZV0gfHwgcm9vdFZhbHVlW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgcmVzdWx0UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShkZWZhdWx0UmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAoIWV4ZWNDb250ZXh0Lm9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG91bGRGb3JjZVJlc29sdmVycyhmaWVsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXJUeXBlID0gcm9vdFZhbHVlLl9fdHlwZW5hbWUgfHwgZXhlY0NvbnRleHQuZGVmYXVsdE9wZXJhdGlvblR5cGU7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVyTWFwID0gdGhpcy5yZXNvbHZlcnMgJiYgdGhpcy5yZXNvbHZlcnNbcmVzb2x2ZXJUeXBlXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc29sdmVyTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gcmVzb2x2ZXJNYXBbYWxpYXNVc2VkID8gZmllbGROYW1lIDogYWxpYXNlZEZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY2FjaGVTbG90LndpdGhWYWx1ZSh0aGlzLmNhY2hlLCByZXNvbHZlLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkKGZpZWxkLCB2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjQ29udGV4dC5jb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGZpZWxkOiBmaWVsZCwgZnJhZ21lbnRNYXA6IGV4ZWNDb250ZXh0LmZyYWdtZW50TWFwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgcmVzdWx0UHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgeyByZXN1bHQgPSBkZWZhdWx0UmVzdWx0OyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuZGlyZWN0aXZlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRpcmVjdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3RpdmUubmFtZS52YWx1ZSA9PT0gJ2V4cG9ydCcgJiYgZGlyZWN0aXZlLmFyZ3VtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlLmFyZ3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJnLm5hbWUudmFsdWUgPT09ICdhcycgJiYgYXJnLnZhbHVlLmtpbmQgPT09ICdTdHJpbmdWYWx1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY0NvbnRleHQuZXhwb3J0ZWRWYXJpYWJsZXNbYXJnLnZhbHVlLnZhbHVlXSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVzb2x2ZVN1YlNlbGVjdGVkQXJyYXkoZmllbGQsIHJlc3VsdCwgZXhlY0NvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlU2VsZWN0aW9uU2V0KGZpZWxkLnNlbGVjdGlvblNldCwgcmVzdWx0LCBleGVjQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnJlc29sdmVTdWJTZWxlY3RlZEFycmF5ID0gZnVuY3Rpb24gKGZpZWxkLCByZXN1bHQsIGV4ZWNDb250ZXh0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXN1bHQubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVzb2x2ZVN1YlNlbGVjdGVkQXJyYXkoZmllbGQsIGl0ZW0sIGV4ZWNDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVzb2x2ZVNlbGVjdGlvblNldChmaWVsZC5zZWxlY3Rpb25TZXQsIGl0ZW0sIGV4ZWNDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgcmV0dXJuIExvY2FsU3RhdGU7XG59KCkpO1xuXG5leHBvcnQgeyBMb2NhbFN0YXRlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Mb2NhbFN0YXRlLmpzLm1hcFxuIiwiaW1wb3J0IHsgX19leHRlbmRzLCBfX2Fzc2lnbiB9IGZyb20gJ3RzbGliJztcbmltcG9ydCB7IEludmFyaWFudEVycm9yLCBpbnZhcmlhbnQgfSBmcm9tICd0cy1pbnZhcmlhbnQnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnemVuLW9ic2VydmFibGUnO1xuaW1wb3J0ICdzeW1ib2wtb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBnZXRPcGVyYXRpb25EZWZpbml0aW9uIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2dyYXBocWwvZ2V0RnJvbUFTVC5qcyc7XG5pbXBvcnQgeyBlcXVhbCB9IGZyb20gJ0B3cnkvZXF1YWxpdHknO1xuaW1wb3J0IHsgaXNOb25FbXB0eUFycmF5IH0gZnJvbSAnLi4vdXRpbGl0aWVzL2NvbW1vbi9hcnJheXMuanMnO1xuaW1wb3J0IHsgQXBvbGxvRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvQXBvbGxvRXJyb3IuanMnO1xuaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2NvbW1vbi9jbG9uZURlZXAuanMnO1xuaW1wb3J0IHsgTmV0d29ya1N0YXR1cywgaXNOZXR3b3JrUmVxdWVzdEluRmxpZ2h0IH0gZnJvbSAnLi9uZXR3b3JrU3RhdHVzLmpzJztcbmltcG9ydCB7IGl0ZXJhdGVPYnNlcnZlcnNTYWZlbHkgfSBmcm9tICcuLi91dGlsaXRpZXMvb2JzZXJ2YWJsZXMvaXRlcmF0aW9uLmpzJztcbmltcG9ydCB7IFJlb2JzZXJ2ZXIgfSBmcm9tICcuL1Jlb2JzZXJ2ZXIuanMnO1xuXG52YXIgaGFzRXJyb3IgPSBmdW5jdGlvbiAoc3RvcmVWYWx1ZSwgcG9saWN5KSB7XG4gICAgaWYgKHBvbGljeSA9PT0gdm9pZCAwKSB7IHBvbGljeSA9ICdub25lJzsgfVxuICAgIHJldHVybiBzdG9yZVZhbHVlICYmIChzdG9yZVZhbHVlLm5ldHdvcmtFcnJvciB8fFxuICAgICAgICAocG9saWN5ID09PSAnbm9uZScgJiYgaXNOb25FbXB0eUFycmF5KHN0b3JlVmFsdWUuZ3JhcGhRTEVycm9ycykpKTtcbn07XG52YXIgd2FybmVkQWJvdXRVcGRhdGVRdWVyeSA9IGZhbHNlO1xudmFyIE9ic2VydmFibGVRdWVyeSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE9ic2VydmFibGVRdWVyeSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlUXVlcnkoX2EpIHtcbiAgICAgICAgdmFyIHF1ZXJ5TWFuYWdlciA9IF9hLnF1ZXJ5TWFuYWdlciwgb3B0aW9ucyA9IF9hLm9wdGlvbnM7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm9uU3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgICAgICAgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuICAgICAgICBfdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IFNldCgpO1xuICAgICAgICBfdGhpcy5vYnNlcnZlciA9IHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMubGFzdEVycm9yIHx8IF90aGlzLmlzRGlmZmVyZW50RnJvbUxhc3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVMYXN0UmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVPYnNlcnZlcnNTYWZlbHkoX3RoaXMub2JzZXJ2ZXJzLCAnbmV4dCcsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVMYXN0UmVzdWx0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5sYXN0UmVzdWx0KSwgeyBlcnJvcnM6IGVycm9yLmdyYXBoUUxFcnJvcnMsIG5ldHdvcmtTdGF0dXM6IE5ldHdvcmtTdGF0dXMuZXJyb3IsIGxvYWRpbmc6IGZhbHNlIH0pKTtcbiAgICAgICAgICAgICAgICBpdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5KF90aGlzLm9ic2VydmVycywgJ2Vycm9yJywgX3RoaXMubGFzdEVycm9yID0gZXJyb3IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaXNUb3JuRG93biA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMucXVlcnlJZCA9IHF1ZXJ5TWFuYWdlci5nZW5lcmF0ZVF1ZXJ5SWQoKTtcbiAgICAgICAgdmFyIG9wRGVmID0gZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihvcHRpb25zLnF1ZXJ5KTtcbiAgICAgICAgX3RoaXMucXVlcnlOYW1lID0gb3BEZWYgJiYgb3BEZWYubmFtZSAmJiBvcERlZi5uYW1lLnZhbHVlO1xuICAgICAgICBfdGhpcy5xdWVyeU1hbmFnZXIgPSBxdWVyeU1hbmFnZXI7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUsIFwidmFyaWFibGVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZhcmlhYmxlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUucmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmVyID0ge1xuICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vYnNlcnZlcnMuZGVsZXRlKG9ic2VydmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5vYnNlcnZlcnMuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucXVlcnlNYW5hZ2VyLnJlbW92ZVF1ZXJ5KF90aGlzLnF1ZXJ5SWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gX3RoaXMuc3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmdldEN1cnJlbnRSZXN1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIGxhc3RSZXN1bHQgPSBfYS5sYXN0UmVzdWx0LCBsYXN0RXJyb3IgPSBfYS5sYXN0RXJyb3IsIGZldGNoUG9saWN5ID0gX2Eub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgdmFyIGlzTmV0d29ya0ZldGNoUG9saWN5ID0gZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknIHx8XG4gICAgICAgICAgICBmZXRjaFBvbGljeSA9PT0gJ25vLWNhY2hlJztcbiAgICAgICAgdmFyIG5ldHdvcmtTdGF0dXMgPSBsYXN0RXJyb3IgPyBOZXR3b3JrU3RhdHVzLmVycm9yIDpcbiAgICAgICAgICAgIGxhc3RSZXN1bHQgPyBsYXN0UmVzdWx0Lm5ldHdvcmtTdGF0dXMgOlxuICAgICAgICAgICAgICAgIGlzTmV0d29ya0ZldGNoUG9saWN5ID8gTmV0d29ya1N0YXR1cy5sb2FkaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgTmV0d29ya1N0YXR1cy5yZWFkeTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgICAgIGRhdGE6ICFsYXN0RXJyb3IgJiYgbGFzdFJlc3VsdCAmJiBsYXN0UmVzdWx0LmRhdGEgfHwgdm9pZCAwLFxuICAgICAgICAgICAgZXJyb3I6IGxhc3RFcnJvcixcbiAgICAgICAgICAgIGxvYWRpbmc6IGlzTmV0d29ya1JlcXVlc3RJbkZsaWdodChuZXR3b3JrU3RhdHVzKSxcbiAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IG5ldHdvcmtTdGF0dXMsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLmlzVG9ybkRvd24pIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9iID0gdGhpcy5nZXRDdXJyZW50UXVlcnlSZXN1bHQoKSwgZGF0YSA9IF9iLmRhdGEsIHBhcnRpYWwgPSBfYi5wYXJ0aWFsO1xuICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwgeyBkYXRhOiBkYXRhLCBwYXJ0aWFsOiBwYXJ0aWFsIH0pO1xuICAgICAgICB2YXIgcXVlcnlTdG9yZVZhbHVlID0gdGhpcy5xdWVyeU1hbmFnZXIuZ2V0UXVlcnlTdG9yZVZhbHVlKHRoaXMucXVlcnlJZCk7XG4gICAgICAgIGlmIChxdWVyeVN0b3JlVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBuZXR3b3JrU3RhdHVzXzEgPSBxdWVyeVN0b3JlVmFsdWUubmV0d29ya1N0YXR1cztcbiAgICAgICAgICAgIGlmIChoYXNFcnJvcihxdWVyeVN0b3JlVmFsdWUsIHRoaXMub3B0aW9ucy5lcnJvclBvbGljeSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBuZXR3b3JrU3RhdHVzXzEsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBuZXcgQXBvbGxvRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogcXVlcnlTdG9yZVZhbHVlLmdyYXBoUUxFcnJvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3I6IHF1ZXJ5U3RvcmVWYWx1ZS5uZXR3b3JrRXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHF1ZXJ5U3RvcmVWYWx1ZS52YXJpYWJsZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudmFyaWFibGVzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucy52YXJpYWJsZXMpLCBxdWVyeVN0b3JlVmFsdWUudmFyaWFibGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogaXNOZXR3b3JrUmVxdWVzdEluRmxpZ2h0KG5ldHdvcmtTdGF0dXNfMSksXG4gICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1czogbmV0d29ya1N0YXR1c18xLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocXVlcnlTdG9yZVZhbHVlLmdyYXBoUUxFcnJvcnMgJiYgdGhpcy5vcHRpb25zLmVycm9yUG9saWN5ID09PSAnYWxsJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lcnJvcnMgPSBxdWVyeVN0b3JlVmFsdWUuZ3JhcGhRTEVycm9ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydGlhbCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldExhc3RSZXN1bHRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxhc3RSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5pc0RpZmZlcmVudEZyb21MYXN0UmVzdWx0ID0gZnVuY3Rpb24gKG5ld1Jlc3VsdCkge1xuICAgICAgICByZXR1cm4gIWVxdWFsKHRoaXMubGFzdFJlc3VsdFNuYXBzaG90LCBuZXdSZXN1bHQpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5nZXRMYXN0UmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXN0UmVzdWx0O1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5nZXRMYXN0RXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RFcnJvcjtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUucmVzZXRMYXN0UmVzdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubGFzdFJlc3VsdDtcbiAgICAgICAgZGVsZXRlIHRoaXMubGFzdFJlc3VsdFNuYXBzaG90O1xuICAgICAgICBkZWxldGUgdGhpcy5sYXN0RXJyb3I7XG4gICAgICAgIHRoaXMuaXNUb3JuRG93biA9IGZhbHNlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5yZXNldFF1ZXJ5U3RvcmVFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBxdWVyeVN0b3JlID0gdGhpcy5xdWVyeU1hbmFnZXIuZ2V0UXVlcnlTdG9yZVZhbHVlKHRoaXMucXVlcnlJZCk7XG4gICAgICAgIGlmIChxdWVyeVN0b3JlKSB7XG4gICAgICAgICAgICBxdWVyeVN0b3JlLm5ldHdvcmtFcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHF1ZXJ5U3RvcmUuZ3JhcGhRTEVycm9ycyA9IFtdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlZmV0Y2ggPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBmZXRjaFBvbGljeSA9IHRoaXMub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgaWYgKGZldGNoUG9saWN5ID09PSAnY2FjaGUtb25seScpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBuZXcgSW52YXJpYW50RXJyb3IoMykgOiBuZXcgSW52YXJpYW50RXJyb3IoJ2NhY2hlLW9ubHkgZmV0Y2hQb2xpY3kgb3B0aW9uIHNob3VsZCBub3QgYmUgdXNlZCB0b2dldGhlciB3aXRoIHF1ZXJ5IHJlZmV0Y2guJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmZXRjaFBvbGljeSAhPT0gJ25vLWNhY2hlJyAmJlxuICAgICAgICAgICAgZmV0Y2hQb2xpY3kgIT09ICdjYWNoZS1hbmQtbmV0d29yaycpIHtcbiAgICAgICAgICAgIGZldGNoUG9saWN5ID0gJ25ldHdvcmstb25seSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhcmlhYmxlcyAmJiAhZXF1YWwodGhpcy5vcHRpb25zLnZhcmlhYmxlcywgdmFyaWFibGVzKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnZhcmlhYmxlcyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMudmFyaWFibGVzKSwgdmFyaWFibGVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXdSZW9ic2VydmVyKGZhbHNlKS5yZW9ic2VydmUoe1xuICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IGZldGNoUG9saWN5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB0aGlzLm9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgcG9sbEludGVydmFsOiAwLFxuICAgICAgICB9LCBOZXR3b3JrU3RhdHVzLnJlZmV0Y2gpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5mZXRjaE1vcmUgPSBmdW5jdGlvbiAoZmV0Y2hNb3JlT3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY29tYmluZWRPcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIChmZXRjaE1vcmVPcHRpb25zLnF1ZXJ5ID8gZmV0Y2hNb3JlT3B0aW9ucyA6IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMpLCBmZXRjaE1vcmVPcHRpb25zKSwgeyB2YXJpYWJsZXM6IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMudmFyaWFibGVzKSwgZmV0Y2hNb3JlT3B0aW9ucy52YXJpYWJsZXMpIH0pKSksIHsgZmV0Y2hQb2xpY3k6IFwibm8tY2FjaGVcIiB9KTtcbiAgICAgICAgdmFyIHFpZCA9IHRoaXMucXVlcnlNYW5hZ2VyLmdlbmVyYXRlUXVlcnlJZCgpO1xuICAgICAgICBpZiAoY29tYmluZWRPcHRpb25zLm5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRSZXN1bHQgPSB0aGlzLmdldEN1cnJlbnRSZXN1bHQoKTtcbiAgICAgICAgICAgIHZhciBxdWVyeUluZm8gPSB0aGlzLnF1ZXJ5TWFuYWdlci5nZXRRdWVyeVN0b3JlVmFsdWUodGhpcy5xdWVyeUlkKTtcbiAgICAgICAgICAgIGlmIChxdWVyeUluZm8pIHtcbiAgICAgICAgICAgICAgICBxdWVyeUluZm8ubmV0d29ya1N0YXR1cyA9IE5ldHdvcmtTdGF0dXMuZmV0Y2hNb3JlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5uZXh0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBjdXJyZW50UmVzdWx0KSwgeyBsb2FkaW5nOiB0cnVlLCBuZXR3b3JrU3RhdHVzOiBOZXR3b3JrU3RhdHVzLmZldGNoTW9yZSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLmZldGNoUXVlcnkocWlkLCBjb21iaW5lZE9wdGlvbnMsIE5ldHdvcmtTdGF0dXMuZmV0Y2hNb3JlKS50aGVuKGZ1bmN0aW9uIChmZXRjaE1vcmVSZXN1bHQpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gZmV0Y2hNb3JlUmVzdWx0LmRhdGE7XG4gICAgICAgICAgICB2YXIgdXBkYXRlUXVlcnkgPSBmZXRjaE1vcmVPcHRpb25zLnVwZGF0ZVF1ZXJ5O1xuICAgICAgICAgICAgaWYgKHVwZGF0ZVF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgICAgICAhd2FybmVkQWJvdXRVcGRhdGVRdWVyeSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgfHwgaW52YXJpYW50Lndhcm4oXCJUaGUgdXBkYXRlUXVlcnkgY2FsbGJhY2sgZm9yIGZldGNoTW9yZSBpcyBkZXByZWNhdGVkLCBhbmQgd2lsbCBiZSByZW1vdmVkXFxuaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBBcG9sbG8gQ2xpZW50LlxcblxcblBsZWFzZSBjb252ZXJ0IHVwZGF0ZVF1ZXJ5IGZ1bmN0aW9ucyB0byBmaWVsZCBwb2xpY2llcyB3aXRoIGFwcHJvcHJpYXRlXFxucmVhZCBhbmQgbWVyZ2UgZnVuY3Rpb25zLCBvciB1c2UvYWRhcHQgYSBoZWxwZXIgZnVuY3Rpb24gKHN1Y2ggYXNcXG5jb25jYXRQYWdpbmF0aW9uLCBvZmZzZXRMaW1pdFBhZ2luYXRpb24sIG9yIHJlbGF5U3R5bGVQYWdpbmF0aW9uKSBmcm9tXFxuQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzLlxcblxcblRoZSBmaWVsZCBwb2xpY3kgc3lzdGVtIGhhbmRsZXMgcGFnaW5hdGlvbiBtb3JlIGVmZmVjdGl2ZWx5IHRoYW4gYVxcbmhhbmQtd3JpdHRlbiB1cGRhdGVRdWVyeSBmdW5jdGlvbiwgYW5kIHlvdSBvbmx5IG5lZWQgdG8gZGVmaW5lIHRoZSBwb2xpY3lcXG5vbmNlLCByYXRoZXIgdGhhbiBldmVyeSB0aW1lIHlvdSBjYWxsIGZldGNoTW9yZS5cIik7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5lZEFib3V0VXBkYXRlUXVlcnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShmdW5jdGlvbiAocHJldmlvdXMpIHsgcmV0dXJuIHVwZGF0ZVF1ZXJ5KHByZXZpb3VzLCB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoTW9yZVJlc3VsdDogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBjb21iaW5lZE9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnF1ZXJ5TWFuYWdlci5jYWNoZS53cml0ZVF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGNvbWJpbmVkT3B0aW9ucy5xdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBjb21iaW5lZE9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZldGNoTW9yZVJlc3VsdDtcbiAgICAgICAgfSkuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5xdWVyeU1hbmFnZXIuc3RvcFF1ZXJ5KHFpZCk7XG4gICAgICAgICAgICBfdGhpcy5yZW9ic2VydmUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnN1YnNjcmliZVRvTW9yZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLnF1ZXJ5TWFuYWdlclxuICAgICAgICAgICAgLnN0YXJ0R3JhcGhRTFN1YnNjcmlwdGlvbih7XG4gICAgICAgICAgICBxdWVyeTogb3B0aW9ucy5kb2N1bWVudCxcbiAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICBjb250ZXh0OiBvcHRpb25zLmNvbnRleHQsXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChzdWJzY3JpcHRpb25EYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVwZGF0ZVF1ZXJ5ID0gb3B0aW9ucy51cGRhdGVRdWVyeTtcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlUXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlUXVlcnkoZnVuY3Rpb24gKHByZXZpb3VzLCBfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVRdWVyeShwcmV2aW91cywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbkRhdGE6IHN1YnNjcmlwdGlvbkRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMub25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgfHwgaW52YXJpYW50LmVycm9yKCdVbmhhbmRsZWQgR3JhcGhRTCBzdWJzY3JpcHRpb24gZXJyb3InLCBlcnIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5zdWJzY3JpcHRpb25zLmRlbGV0ZShzdWJzY3JpcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAobmV3T3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW9ic2VydmUobmV3T3B0aW9ucyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnNldFZhcmlhYmxlcyA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgaWYgKGVxdWFsKHRoaXMudmFyaWFibGVzLCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlcnMuc2l6ZVxuICAgICAgICAgICAgICAgID8gdGhpcy5yZXN1bHQoKVxuICAgICAgICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICAgICAgaWYgKCF0aGlzLm9ic2VydmVycy5zaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gdGhpcy5vcHRpb25zLmZldGNoUG9saWN5LCBmZXRjaFBvbGljeSA9IF9hID09PSB2b2lkIDAgPyAnY2FjaGUtZmlyc3QnIDogX2E7XG4gICAgICAgIGlmIChmZXRjaFBvbGljeSAhPT0gJ2NhY2hlLWZpcnN0JyAmJlxuICAgICAgICAgICAgZmV0Y2hQb2xpY3kgIT09ICduby1jYWNoZScgJiZcbiAgICAgICAgICAgIGZldGNoUG9saWN5ICE9PSAnbmV0d29yay1vbmx5Jykge1xuICAgICAgICAgICAgZmV0Y2hQb2xpY3kgPSAnY2FjaGUtYW5kLW5ldHdvcmsnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlb2JzZXJ2ZSh7XG4gICAgICAgICAgICBmZXRjaFBvbGljeTogZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgfSwgTmV0d29ya1N0YXR1cy5zZXRWYXJpYWJsZXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS51cGRhdGVRdWVyeSA9IGZ1bmN0aW9uIChtYXBGbikge1xuICAgICAgICB2YXIgcXVlcnlNYW5hZ2VyID0gdGhpcy5xdWVyeU1hbmFnZXI7XG4gICAgICAgIHZhciBwcmV2aW91c1Jlc3VsdCA9IHRoaXMuZ2V0Q3VycmVudFF1ZXJ5UmVzdWx0KGZhbHNlKS5kYXRhO1xuICAgICAgICB2YXIgbmV3UmVzdWx0ID0gbWFwRm4ocHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIHZhcmlhYmxlczogdGhpcy52YXJpYWJsZXMsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobmV3UmVzdWx0KSB7XG4gICAgICAgICAgICBxdWVyeU1hbmFnZXIuY2FjaGUud3JpdGVRdWVyeSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMub3B0aW9ucy5xdWVyeSxcbiAgICAgICAgICAgICAgICBkYXRhOiBuZXdSZXN1bHQsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB0aGlzLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcXVlcnlNYW5hZ2VyLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5nZXRDdXJyZW50UXVlcnlSZXN1bHQgPSBmdW5jdGlvbiAob3B0aW1pc3RpYykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAob3B0aW1pc3RpYyA9PT0gdm9pZCAwKSB7IG9wdGltaXN0aWMgPSB0cnVlOyB9XG4gICAgICAgIHZhciBmZXRjaFBvbGljeSA9IHRoaXMub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgdmFyIGxhc3REYXRhID0gKF9hID0gdGhpcy5sYXN0UmVzdWx0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZGF0YTtcbiAgICAgICAgaWYgKGZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnIHx8XG4gICAgICAgICAgICBmZXRjaFBvbGljeSA9PT0gJ25ldHdvcmstb25seScpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YTogbGFzdERhdGEsXG4gICAgICAgICAgICAgICAgcGFydGlhbDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYyA9IHRoaXMucXVlcnlNYW5hZ2VyLmNhY2hlLmRpZmYoe1xuICAgICAgICAgICAgcXVlcnk6IHRoaXMub3B0aW9ucy5xdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdGhpcy52YXJpYWJsZXMsXG4gICAgICAgICAgICBwcmV2aW91c1Jlc3VsdDogKF9iID0gdGhpcy5sYXN0UmVzdWx0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZGF0YSxcbiAgICAgICAgICAgIHJldHVyblBhcnRpYWxEYXRhOiB0cnVlLFxuICAgICAgICAgICAgb3B0aW1pc3RpYzogb3B0aW1pc3RpYyxcbiAgICAgICAgfSksIHJlc3VsdCA9IF9jLnJlc3VsdCwgY29tcGxldGUgPSBfYy5jb21wbGV0ZTtcbiAgICAgICAgaWYgKGxhc3REYXRhICYmXG4gICAgICAgICAgICAhdGhpcy5sYXN0RXJyb3IgJiZcbiAgICAgICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLnRyYW5zZm9ybSh0aGlzLm9wdGlvbnMucXVlcnkpLmhhc0ZvcmNlZFJlc29sdmVycykge1xuICAgICAgICAgICAgcmVzdWx0ID0gbGFzdERhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IChjb21wbGV0ZSB8fCB0aGlzLm9wdGlvbnMucmV0dXJuUGFydGlhbERhdGEpID8gcmVzdWx0IDogdm9pZCAwLFxuICAgICAgICAgICAgcGFydGlhbDogIWNvbXBsZXRlLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5zdGFydFBvbGxpbmcgPSBmdW5jdGlvbiAocG9sbEludGVydmFsKSB7XG4gICAgICAgIHRoaXMuZ2V0UmVvYnNlcnZlcigpLnVwZGF0ZU9wdGlvbnMoeyBwb2xsSW50ZXJ2YWw6IHBvbGxJbnRlcnZhbCB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc3RvcFBvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlb2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVvYnNlcnZlci51cGRhdGVPcHRpb25zKHsgcG9sbEludGVydmFsOiAwIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnVwZGF0ZUxhc3RSZXN1bHQgPSBmdW5jdGlvbiAobmV3UmVzdWx0KSB7XG4gICAgICAgIHZhciBwcmV2aW91c1Jlc3VsdCA9IHRoaXMubGFzdFJlc3VsdDtcbiAgICAgICAgdGhpcy5sYXN0UmVzdWx0ID0gbmV3UmVzdWx0O1xuICAgICAgICB0aGlzLmxhc3RSZXN1bHRTbmFwc2hvdCA9IHRoaXMucXVlcnlNYW5hZ2VyLmFzc3VtZUltbXV0YWJsZVJlc3VsdHNcbiAgICAgICAgICAgID8gbmV3UmVzdWx0XG4gICAgICAgICAgICA6IGNsb25lRGVlcChuZXdSZXN1bHQpO1xuICAgICAgICBpZiAoIWlzTm9uRW1wdHlBcnJheShuZXdSZXN1bHQuZXJyb3JzKSkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGFzdEVycm9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmV2aW91c1Jlc3VsdDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUub25TdWJzY3JpYmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG9ic2VydmVyID09PSB0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgc3ViT2JzZXJ2ZXIgPSBvYnNlcnZlci5fc3Vic2NyaXB0aW9uLl9vYnNlcnZlcjtcbiAgICAgICAgICAgIGlmIChzdWJPYnNlcnZlciAmJiAhc3ViT2JzZXJ2ZXIuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzdWJPYnNlcnZlci5lcnJvciA9IGRlZmF1bHRTdWJzY3JpcHRpb25PYnNlcnZlckVycm9yQ2FsbGJhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7IH1cbiAgICAgICAgdmFyIGZpcnN0ID0gIXRoaXMub2JzZXJ2ZXJzLnNpemU7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmFkZChvYnNlcnZlcik7XG4gICAgICAgIGlmICh0aGlzLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IgJiYgb2JzZXJ2ZXIuZXJyb3IodGhpcy5sYXN0RXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubGFzdFJlc3VsdCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCAmJiBvYnNlcnZlci5uZXh0KHRoaXMubGFzdFJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICB0aGlzLnJlb2JzZXJ2ZSgpLmNhdGNoKGZ1bmN0aW9uIChfKSB7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLm9ic2VydmVycy5kZWxldGUob2JzZXJ2ZXIpICYmICFfdGhpcy5vYnNlcnZlcnMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnRlYXJEb3duUXVlcnkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuZ2V0UmVvYnNlcnZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVvYnNlcnZlciB8fCAodGhpcy5yZW9ic2VydmVyID0gdGhpcy5uZXdSZW9ic2VydmVyKHRydWUpKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUubmV3UmVvYnNlcnZlciA9IGZ1bmN0aW9uIChzaGFyZU9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gdGhpcywgcXVlcnlNYW5hZ2VyID0gX2EucXVlcnlNYW5hZ2VyLCBxdWVyeUlkID0gX2EucXVlcnlJZDtcbiAgICAgICAgcXVlcnlNYW5hZ2VyLnNldE9ic2VydmFibGVRdWVyeSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZW9ic2VydmVyKHRoaXMub2JzZXJ2ZXIsIHNoYXJlT3B0aW9ucyA/IHRoaXMub3B0aW9ucyA6IF9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMpLCBmdW5jdGlvbiAoY3VycmVudE9wdGlvbnMsIG5ld05ldHdvcmtTdGF0dXMpIHtcbiAgICAgICAgICAgIHF1ZXJ5TWFuYWdlci5zZXRPYnNlcnZhYmxlUXVlcnkoX3RoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5TWFuYWdlci5mZXRjaFF1ZXJ5T2JzZXJ2YWJsZShxdWVyeUlkLCBjdXJyZW50T3B0aW9ucywgbmV3TmV0d29ya1N0YXR1cyk7XG4gICAgICAgIH0sICFxdWVyeU1hbmFnZXIuc3NyTW9kZSAmJiAoZnVuY3Rpb24gKCkgeyByZXR1cm4gIXF1ZXJ5TWFuYWdlci5jaGVja0luRmxpZ2h0KHF1ZXJ5SWQpOyB9KSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlb2JzZXJ2ZSA9IGZ1bmN0aW9uIChuZXdPcHRpb25zLCBuZXdOZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIHRoaXMuaXNUb3JuRG93biA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSZW9ic2VydmVyKCkucmVvYnNlcnZlKG5ld09wdGlvbnMsIG5ld05ldHdvcmtTdGF0dXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS50ZWFyRG93blF1ZXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcXVlcnlNYW5hZ2VyID0gdGhpcy5xdWVyeU1hbmFnZXI7XG4gICAgICAgIGlmICh0aGlzLnJlb2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVvYnNlcnZlci5zdG9wKCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yZW9ic2VydmVyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNUb3JuRG93biA9IHRydWU7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1Yi51bnN1YnNjcmliZSgpOyB9KTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmNsZWFyKCk7XG4gICAgICAgIHF1ZXJ5TWFuYWdlci5zdG9wUXVlcnkodGhpcy5xdWVyeUlkKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuY2xlYXIoKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlUXVlcnk7XG59KE9ic2VydmFibGUpKTtcbmZ1bmN0aW9uIGRlZmF1bHRTdWJzY3JpcHRpb25PYnNlcnZlckVycm9yQ2FsbGJhY2soZXJyb3IpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgfHwgaW52YXJpYW50LmVycm9yKCdVbmhhbmRsZWQgZXJyb3InLCBlcnJvci5tZXNzYWdlLCBlcnJvci5zdGFjayk7XG59XG5cbmV4cG9ydCB7IE9ic2VydmFibGVRdWVyeSwgaGFzRXJyb3IgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9ic2VydmFibGVRdWVyeS5qcy5tYXBcbiIsImltcG9ydCB7IGVxdWFsIH0gZnJvbSAnQHdyeS9lcXVhbGl0eSc7XG5pbXBvcnQgeyBncmFwaFFMUmVzdWx0SGFzRXJyb3IgfSBmcm9tICcuLi91dGlsaXRpZXMvY29tbW9uL2Vycm9ySGFuZGxpbmcuanMnO1xuaW1wb3J0IHsgaXNOb25FbXB0eUFycmF5IH0gZnJvbSAnLi4vdXRpbGl0aWVzL2NvbW1vbi9hcnJheXMuanMnO1xuaW1wb3J0IHsgTmV0d29ya1N0YXR1cywgaXNOZXR3b3JrUmVxdWVzdEluRmxpZ2h0IH0gZnJvbSAnLi9uZXR3b3JrU3RhdHVzLmpzJztcblxudmFyIFF1ZXJ5SW5mbyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUXVlcnlJbmZvKGNhY2hlKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuZG9jdW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RSZXF1ZXN0SWQgPSAxO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaWZmID0gbnVsbDtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlUXVlcnkgPSBudWxsO1xuICAgIH1cbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgdmFyIG5ldHdvcmtTdGF0dXMgPSBxdWVyeS5uZXR3b3JrU3RhdHVzIHx8IE5ldHdvcmtTdGF0dXMubG9hZGluZztcbiAgICAgICAgaWYgKHRoaXMudmFyaWFibGVzICYmXG4gICAgICAgICAgICB0aGlzLm5ldHdvcmtTdGF0dXMgIT09IE5ldHdvcmtTdGF0dXMubG9hZGluZyAmJlxuICAgICAgICAgICAgIWVxdWFsKHRoaXMudmFyaWFibGVzLCBxdWVyeS52YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICBuZXR3b3JrU3RhdHVzID0gTmV0d29ya1N0YXR1cy5zZXRWYXJpYWJsZXM7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICAgICAgICBkb2N1bWVudDogcXVlcnkuZG9jdW1lbnQsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHF1ZXJ5LnZhcmlhYmxlcyxcbiAgICAgICAgICAgIG5ldHdvcmtFcnJvcjogbnVsbCxcbiAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IHRoaXMuZ3JhcGhRTEVycm9ycyB8fCBbXSxcbiAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IG5ldHdvcmtTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocXVlcnkub2JzZXJ2YWJsZVF1ZXJ5KSB7XG4gICAgICAgICAgICB0aGlzLnNldE9ic2VydmFibGVRdWVyeShxdWVyeS5vYnNlcnZhYmxlUXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChxdWVyeS5sYXN0UmVxdWVzdElkKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RSZXF1ZXN0SWQgPSBxdWVyeS5sYXN0UmVxdWVzdElkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5zZXREaXJ0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmRpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub3RpZnlUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5ub3RpZnkoKTsgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnNldERpZmYgPSBmdW5jdGlvbiAoZGlmZikge1xuICAgICAgICB2YXIgb2xkRGlmZiA9IHRoaXMuZGlmZjtcbiAgICAgICAgdGhpcy5kaWZmID0gZGlmZjtcbiAgICAgICAgaWYgKCF0aGlzLmRpcnR5ICYmIChkaWZmID09PSBudWxsIHx8IGRpZmYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpZmYucmVzdWx0KSAhPT0gKG9sZERpZmYgPT09IG51bGwgfHwgb2xkRGlmZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogb2xkRGlmZi5yZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldERpcnR5KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuc2V0T2JzZXJ2YWJsZVF1ZXJ5ID0gZnVuY3Rpb24gKG9xKSB7XG4gICAgICAgIGlmIChvcSA9PT0gdGhpcy5vYnNlcnZhYmxlUXVlcnkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLm9xTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmRlbGV0ZSh0aGlzLm9xTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZVF1ZXJ5ID0gb3E7XG4gICAgICAgIGlmIChvcSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuYWRkKHRoaXMub3FMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9xLnJlb2JzZXJ2ZSgpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9xTGlzdGVuZXI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5ub3RpZnlUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5ub3RpZnlUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5VGltZW91dCA9IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaG91bGROb3RpZnkoKSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKF90aGlzKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5zaG91bGROb3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5kaXJ0eSB8fCAhdGhpcy5saXN0ZW5lcnMuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05ldHdvcmtSZXF1ZXN0SW5GbGlnaHQodGhpcy5uZXR3b3JrU3RhdHVzKSAmJlxuICAgICAgICAgICAgdGhpcy5vYnNlcnZhYmxlUXVlcnkpIHtcbiAgICAgICAgICAgIHZhciBmZXRjaFBvbGljeSA9IHRoaXMub2JzZXJ2YWJsZVF1ZXJ5Lm9wdGlvbnMuZmV0Y2hQb2xpY3k7XG4gICAgICAgICAgICBpZiAoZmV0Y2hQb2xpY3kgIT09IFwiY2FjaGUtb25seVwiICYmXG4gICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3kgIT09IFwiY2FjaGUtYW5kLW5ldHdvcmtcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY2FuY2VsO1xuICAgICAgICB0aGlzLnZhcmlhYmxlcyA9XG4gICAgICAgICAgICB0aGlzLm5ldHdvcmtTdGF0dXMgPVxuICAgICAgICAgICAgICAgIHRoaXMubmV0d29ya0Vycm9yID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaFFMRXJyb3JzID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFdhdGNoID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RXcml0dGVuUmVzdWx0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0V3JpdHRlblZhcnMgPSB2b2lkIDA7XG4gICAgICAgIHZhciBvcSA9IHRoaXMub2JzZXJ2YWJsZVF1ZXJ5O1xuICAgICAgICBpZiAob3EpXG4gICAgICAgICAgICBvcS5zdG9wUG9sbGluZygpO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS51cGRhdGVXYXRjaCA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RXYXRjaCB8fFxuICAgICAgICAgICAgdGhpcy5sYXN0V2F0Y2gucXVlcnkgIT09IHRoaXMuZG9jdW1lbnQgfHxcbiAgICAgICAgICAgICFlcXVhbCh2YXJpYWJsZXMsIHRoaXMubGFzdFdhdGNoLnZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbCA9IHRoaXMuY2FjaGUud2F0Y2godGhpcy5sYXN0V2F0Y2ggPSB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMuZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgb3B0aW1pc3RpYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKGRpZmYpIHsgcmV0dXJuIF90aGlzLnNldERpZmYoZGlmZik7IH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUubWFya1Jlc3VsdCA9IGZ1bmN0aW9uIChyZXN1bHQsIG9wdGlvbnMsIGFsbG93Q2FjaGVXcml0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmdyYXBoUUxFcnJvcnMgPSBpc05vbkVtcHR5QXJyYXkocmVzdWx0LmVycm9ycykgPyByZXN1bHQuZXJyb3JzIDogW107XG4gICAgICAgIGlmIChvcHRpb25zLmZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnKSB7XG4gICAgICAgICAgICB0aGlzLmRpZmYgPSB7IHJlc3VsdDogcmVzdWx0LmRhdGEsIGNvbXBsZXRlOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWxsb3dDYWNoZVdyaXRlKSB7XG4gICAgICAgICAgICB2YXIgaWdub3JlRXJyb3JzID0gb3B0aW9ucy5lcnJvclBvbGljeSA9PT0gJ2lnbm9yZScgfHxcbiAgICAgICAgICAgICAgICBvcHRpb25zLmVycm9yUG9saWN5ID09PSAnYWxsJztcbiAgICAgICAgICAgIHZhciB3cml0ZVdpdGhFcnJvcnMgPSAhZ3JhcGhRTFJlc3VsdEhhc0Vycm9yKHJlc3VsdCk7XG4gICAgICAgICAgICBpZiAoIXdyaXRlV2l0aEVycm9ycyAmJiBpZ25vcmVFcnJvcnMgJiYgcmVzdWx0LmRhdGEpIHtcbiAgICAgICAgICAgICAgICB3cml0ZVdpdGhFcnJvcnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdyaXRlV2l0aEVycm9ycykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucGVyZm9ybVRyYW5zYWN0aW9uKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXF1YWwocmVzdWx0LCBfdGhpcy5sYXN0V3JpdHRlblJlc3VsdCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGVxdWFsKG9wdGlvbnMudmFyaWFibGVzLCBfdGhpcy5sYXN0V3JpdHRlblZhcnMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZGlmZiAmJiBfdGhpcy5kaWZmLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSBfdGhpcy5kaWZmLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS53cml0ZVF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogX3RoaXMuZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubGFzdFdyaXR0ZW5SZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXN0V3JpdHRlblZhcnMgPSBvcHRpb25zLnZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IGNhY2hlLmRpZmYoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IF90aGlzLmRvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblBhcnRpYWxEYXRhOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW1pc3RpYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRpZmYgPSBkaWZmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZi5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSBkaWZmLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0V3JpdHRlblJlc3VsdCA9IHRoaXMubGFzdFdyaXR0ZW5WYXJzID0gdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLm1hcmtSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5uZXR3b3JrRXJyb3IgPSBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrU3RhdHVzID0gTmV0d29ya1N0YXR1cy5yZWFkeTtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUubWFya0Vycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMubmV0d29ya1N0YXR1cyA9IE5ldHdvcmtTdGF0dXMuZXJyb3I7XG4gICAgICAgIHRoaXMubGFzdFdyaXR0ZW5SZXN1bHQgPSB0aGlzLmxhc3RXcml0dGVuVmFycyA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGVycm9yLmdyYXBoUUxFcnJvcnMpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhRTEVycm9ycyA9IGVycm9yLmdyYXBoUUxFcnJvcnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yLm5ldHdvcmtFcnJvcikge1xuICAgICAgICAgICAgdGhpcy5uZXR3b3JrRXJyb3IgPSBlcnJvci5uZXR3b3JrRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH07XG4gICAgcmV0dXJuIFF1ZXJ5SW5mbztcbn0oKSk7XG5cbmV4cG9ydCB7IFF1ZXJ5SW5mbyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UXVlcnlJbmZvLmpzLm1hcFxuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciwgX19hc3NpZ24gfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgeyBJbnZhcmlhbnRFcnJvciwgaW52YXJpYW50IH0gZnJvbSAndHMtaW52YXJpYW50JztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJ3plbi1vYnNlcnZhYmxlJztcbmltcG9ydCAnc3ltYm9sLW9ic2VydmFibGUnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFZhbHVlcywgZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbiwgZ2V0T3BlcmF0aW9uTmFtZSB9IGZyb20gJy4uL3V0aWxpdGllcy9ncmFwaHFsL2dldEZyb21BU1QuanMnO1xuaW1wb3J0IHsgZXhlY3V0ZSB9IGZyb20gJy4uL2xpbmsvY29yZS9leGVjdXRlLmpzJztcbmltcG9ydCB7IGVxdWFsIH0gZnJvbSAnQHdyeS9lcXVhbGl0eSc7XG5pbXBvcnQgeyBoYXNDbGllbnRFeHBvcnRzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2dyYXBocWwvZGlyZWN0aXZlcy5qcyc7XG5pbXBvcnQgeyBncmFwaFFMUmVzdWx0SGFzRXJyb3IgfSBmcm9tICcuLi91dGlsaXRpZXMvY29tbW9uL2Vycm9ySGFuZGxpbmcuanMnO1xuaW1wb3J0IHsgcmVtb3ZlQ29ubmVjdGlvbkRpcmVjdGl2ZUZyb21Eb2N1bWVudCB9IGZyb20gJy4uL3V0aWxpdGllcy9ncmFwaHFsL3RyYW5zZm9ybS5qcyc7XG5pbXBvcnQgeyBjYW5Vc2VXZWFrTWFwIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2NvbW1vbi9jYW5Vc2UuanMnO1xuaW1wb3J0IHsgaXNOb25FbXB0eUFycmF5IH0gZnJvbSAnLi4vdXRpbGl0aWVzL2NvbW1vbi9hcnJheXMuanMnO1xuaW1wb3J0IHsgQXBvbGxvRXJyb3IsIGlzQXBvbGxvRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvQXBvbGxvRXJyb3IuanMnO1xuaW1wb3J0IHsgTXV0YXRpb25TdG9yZSB9IGZyb20gJy4uL2RhdGEvbXV0YXRpb25zLmpzJztcbmltcG9ydCB7IE5ldHdvcmtTdGF0dXMsIGlzTmV0d29ya1JlcXVlc3RJbkZsaWdodCB9IGZyb20gJy4vbmV0d29ya1N0YXR1cy5qcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlUXVlcnkgfSBmcm9tICcuL09ic2VydmFibGVRdWVyeS5qcyc7XG5pbXBvcnQgeyBMb2NhbFN0YXRlIH0gZnJvbSAnLi9Mb2NhbFN0YXRlLmpzJztcbmltcG9ydCB7IGFzeW5jTWFwIH0gZnJvbSAnLi4vdXRpbGl0aWVzL29ic2VydmFibGVzL2FzeW5jTWFwLmpzJztcbmltcG9ydCB7IENvbmNhc3QgfSBmcm9tICcuLi91dGlsaXRpZXMvb2JzZXJ2YWJsZXMvQ29uY2FzdC5qcyc7XG5pbXBvcnQgeyBRdWVyeUluZm8gfSBmcm9tICcuL1F1ZXJ5SW5mby5qcyc7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUXVlcnlNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRdWVyeU1hbmFnZXIoX2EpIHtcbiAgICAgICAgdmFyIGNhY2hlID0gX2EuY2FjaGUsIGxpbmsgPSBfYS5saW5rLCBfYiA9IF9hLnF1ZXJ5RGVkdXBsaWNhdGlvbiwgcXVlcnlEZWR1cGxpY2F0aW9uID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2IsIF9jID0gX2Eub25Ccm9hZGNhc3QsIG9uQnJvYWRjYXN0ID0gX2MgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSA6IF9jLCBfZCA9IF9hLnNzck1vZGUsIHNzck1vZGUgPSBfZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZCwgX2UgPSBfYS5jbGllbnRBd2FyZW5lc3MsIGNsaWVudEF3YXJlbmVzcyA9IF9lID09PSB2b2lkIDAgPyB7fSA6IF9lLCBsb2NhbFN0YXRlID0gX2EubG9jYWxTdGF0ZSwgYXNzdW1lSW1tdXRhYmxlUmVzdWx0cyA9IF9hLmFzc3VtZUltbXV0YWJsZVJlc3VsdHM7XG4gICAgICAgIHRoaXMubXV0YXRpb25TdG9yZSA9IG5ldyBNdXRhdGlvblN0b3JlKCk7XG4gICAgICAgIHRoaXMuY2xpZW50QXdhcmVuZXNzID0ge307XG4gICAgICAgIHRoaXMucXVlcmllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5mZXRjaENhbmNlbEZucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1DYWNoZSA9IG5ldyAoY2FuVXNlV2Vha01hcCA/IFdlYWtNYXAgOiBNYXApKCk7XG4gICAgICAgIHRoaXMucXVlcnlJZENvdW50ZXIgPSAxO1xuICAgICAgICB0aGlzLnJlcXVlc3RJZENvdW50ZXIgPSAxO1xuICAgICAgICB0aGlzLm11dGF0aW9uSWRDb3VudGVyID0gMTtcbiAgICAgICAgdGhpcy5pbkZsaWdodExpbmtPYnNlcnZhYmxlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICAgICAgICB0aGlzLmxpbmsgPSBsaW5rO1xuICAgICAgICB0aGlzLnF1ZXJ5RGVkdXBsaWNhdGlvbiA9IHF1ZXJ5RGVkdXBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5vbkJyb2FkY2FzdCA9IG9uQnJvYWRjYXN0O1xuICAgICAgICB0aGlzLmNsaWVudEF3YXJlbmVzcyA9IGNsaWVudEF3YXJlbmVzcztcbiAgICAgICAgdGhpcy5sb2NhbFN0YXRlID0gbG9jYWxTdGF0ZSB8fCBuZXcgTG9jYWxTdGF0ZSh7IGNhY2hlOiBjYWNoZSB9KTtcbiAgICAgICAgdGhpcy5zc3JNb2RlID0gc3NyTW9kZTtcbiAgICAgICAgdGhpcy5hc3N1bWVJbW11dGFibGVSZXN1bHRzID0gISFhc3N1bWVJbW11dGFibGVSZXN1bHRzO1xuICAgIH1cbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChfaW5mbywgcXVlcnlJZCkge1xuICAgICAgICAgICAgX3RoaXMuc3RvcFF1ZXJ5Tm9Ccm9hZGNhc3QocXVlcnlJZCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbmNlbFBlbmRpbmdGZXRjaGVzKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IG5ldyBJbnZhcmlhbnRFcnJvcigxMSkgOiBuZXcgSW52YXJpYW50RXJyb3IoJ1F1ZXJ5TWFuYWdlciBzdG9wcGVkIHdoaWxlIHF1ZXJ5IHdhcyBpbiBmbGlnaHQnKSk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmNhbmNlbFBlbmRpbmdGZXRjaGVzID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hDYW5jZWxGbnMuZm9yRWFjaChmdW5jdGlvbiAoY2FuY2VsKSB7IHJldHVybiBjYW5jZWwoZXJyb3IpOyB9KTtcbiAgICAgICAgdGhpcy5mZXRjaENhbmNlbEZucy5jbGVhcigpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5tdXRhdGUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIG11dGF0aW9uID0gX2EubXV0YXRpb24sIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgb3B0aW1pc3RpY1Jlc3BvbnNlID0gX2Eub3B0aW1pc3RpY1Jlc3BvbnNlLCB1cGRhdGVRdWVyaWVzQnlOYW1lID0gX2EudXBkYXRlUXVlcmllcywgX2IgPSBfYS5yZWZldGNoUXVlcmllcywgcmVmZXRjaFF1ZXJpZXMgPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYiwgX2MgPSBfYS5hd2FpdFJlZmV0Y2hRdWVyaWVzLCBhd2FpdFJlZmV0Y2hRdWVyaWVzID0gX2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX2MsIHVwZGF0ZVdpdGhQcm94eUZuID0gX2EudXBkYXRlLCBfZCA9IF9hLmVycm9yUG9saWN5LCBlcnJvclBvbGljeSA9IF9kID09PSB2b2lkIDAgPyAnbm9uZScgOiBfZCwgZmV0Y2hQb2xpY3kgPSBfYS5mZXRjaFBvbGljeSwgX2UgPSBfYS5jb250ZXh0LCBjb250ZXh0ID0gX2UgPT09IHZvaWQgMCA/IHt9IDogX2U7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtdXRhdGlvbklkLCBnZW5lcmF0ZVVwZGF0ZVF1ZXJpZXNJbmZvLCBvcHRpbWlzdGljXzEsIHNlbGY7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2YubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KG11dGF0aW9uLCAxMikgOiBpbnZhcmlhbnQobXV0YXRpb24sICdtdXRhdGlvbiBvcHRpb24gaXMgcmVxdWlyZWQuIFlvdSBtdXN0IHNwZWNpZnkgeW91ciBHcmFwaFFMIGRvY3VtZW50IGluIHRoZSBtdXRhdGlvbiBvcHRpb24uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoIWZldGNoUG9saWN5IHx8IGZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnLCAxMykgOiBpbnZhcmlhbnQoIWZldGNoUG9saWN5IHx8IGZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnLCBcIk11dGF0aW9ucyBvbmx5IHN1cHBvcnQgYSAnbm8tY2FjaGUnIGZldGNoUG9saWN5LiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBkaXNhYmxlIHRoZSBjYWNoZSwgcmVtb3ZlIHlvdXIgZmV0Y2hQb2xpY3kgc2V0dGluZyB0byBwcm9jZWVkIHdpdGggdGhlIGRlZmF1bHQgbXV0YXRpb24gYmVoYXZpb3IuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25JZCA9IHRoaXMuZ2VuZXJhdGVNdXRhdGlvbklkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbiA9IHRoaXMudHJhbnNmb3JtKG11dGF0aW9uKS5kb2N1bWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKG11dGF0aW9uLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRyYW5zZm9ybShtdXRhdGlvbikuaGFzQ2xpZW50RXhwb3J0cykgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5sb2NhbFN0YXRlLmFkZEV4cG9ydGVkVmFyaWFibGVzKG11dGF0aW9uLCB2YXJpYWJsZXMsIGNvbnRleHQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzID0gX2Yuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2YubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVVwZGF0ZVF1ZXJpZXNJbmZvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlUXVlcmllc0J5TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKF9hLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZVF1ZXJ5ID0gX2Eub2JzZXJ2YWJsZVF1ZXJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ic2VydmFibGVRdWVyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBxdWVyeU5hbWUgPSBvYnNlcnZhYmxlUXVlcnkucXVlcnlOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeU5hbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzT3duUHJvcGVydHkuY2FsbCh1cGRhdGVRdWVyaWVzQnlOYW1lLCBxdWVyeU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldFtxdWVyeUlkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZXI6IHVwZGF0ZVF1ZXJpZXNCeU5hbWVbcXVlcnlOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5SW5mbzogX3RoaXMucXVlcmllcy5nZXQocXVlcnlJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11dGF0aW9uU3RvcmUuaW5pdE11dGF0aW9uKG11dGF0aW9uSWQsIG11dGF0aW9uLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGltaXN0aWNSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGltaXN0aWNfMSA9IHR5cGVvZiBvcHRpbWlzdGljUmVzcG9uc2UgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvcHRpbWlzdGljUmVzcG9uc2UodmFyaWFibGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9wdGltaXN0aWNSZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnJlY29yZE9wdGltaXN0aWNUcmFuc2FjdGlvbihmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtNdXRhdGlvblJlc3VsdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25JZDogbXV0YXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHsgZGF0YTogb3B0aW1pc3RpY18xIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IG11dGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5VXBkYXRlcnNCeUlkOiBnZW5lcmF0ZVVwZGF0ZVF1ZXJpZXNJbmZvKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGVXaXRoUHJveHlGbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiB8fCBpbnZhcmlhbnQuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbXV0YXRpb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZVJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdldE9ic2VydmFibGVGcm9tTGluayhtdXRhdGlvbiwgX19hc3NpZ24oX19hc3NpZ24oe30sIGNvbnRleHQpLCB7IG9wdGltaXN0aWNSZXNwb25zZTogb3B0aW1pc3RpY1Jlc3BvbnNlIH0pLCB2YXJpYWJsZXMsIGZhbHNlKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmFwaFFMUmVzdWx0SGFzRXJyb3IocmVzdWx0KSAmJiBlcnJvclBvbGljeSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IEFwb2xsb0Vycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IHJlc3VsdC5lcnJvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubXV0YXRpb25TdG9yZS5tYXJrTXV0YXRpb25SZXN1bHQobXV0YXRpb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZldGNoUG9saWN5ICE9PSAnbm8tY2FjaGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrTXV0YXRpb25SZXN1bHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uSWQ6IG11dGF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IG11dGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5VXBkYXRlcnNCeUlkOiBnZW5lcmF0ZVVwZGF0ZVF1ZXJpZXNJbmZvKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGVXaXRoUHJveHlGbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHNlbGYuY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBBcG9sbG9FcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm11dGF0aW9uU3RvcmUubWFya011dGF0aW9uRXJyb3IobXV0YXRpb25JZCwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW1pc3RpY1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FjaGUucmVtb3ZlT3B0aW1pc3RpYyhtdXRhdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBBcG9sbG9FcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtFcnJvcjogZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm11dGF0aW9uU3RvcmUubWFya011dGF0aW9uRXJyb3IobXV0YXRpb25JZCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW1pc3RpY1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FjaGUucmVtb3ZlT3B0aW1pc3RpYyhtdXRhdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZWZldGNoUXVlcmllcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllcyA9IHJlZmV0Y2hRdWVyaWVzKHN0b3JlUmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZmV0Y2hRdWVyeVByb21pc2VzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTm9uRW1wdHlBcnJheShyZWZldGNoUXVlcmllcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocmVmZXRjaFF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlZmV0Y2hRdWVyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9ic2VydmFibGVRdWVyeSA9IF9hLm9ic2VydmFibGVRdWVyeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ic2VydmFibGVRdWVyeSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZVF1ZXJ5LnF1ZXJ5TmFtZSA9PT0gcmVmZXRjaFF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcnlQcm9taXNlcy5wdXNoKG9ic2VydmFibGVRdWVyeS5yZWZldGNoKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnlPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogcmVmZXRjaFF1ZXJ5LnF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHJlZmV0Y2hRdWVyeS52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWZldGNoUXVlcnkuY29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeU9wdGlvbnMuY29udGV4dCA9IHJlZmV0Y2hRdWVyeS5jb250ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcnlQcm9taXNlcy5wdXNoKHNlbGYucXVlcnkocXVlcnlPcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChhd2FpdFJlZmV0Y2hRdWVyaWVzID8gcmVmZXRjaFF1ZXJ5UHJvbWlzZXMgOiBbXSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvclBvbGljeSA9PT0gJ2lnbm9yZScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlUmVzdWx0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwaFFMUmVzdWx0SGFzRXJyb3Ioc3RvcmVSZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RvcmVSZXN1bHQuZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc3RvcmVSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZmV0Y2hRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeUlkLCBvcHRpb25zLCBuZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoUXVlcnlPYnNlcnZhYmxlKHF1ZXJ5SWQsIG9wdGlvbnMsIG5ldHdvcmtTdGF0dXMpLnByb21pc2U7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldFF1ZXJ5U3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdG9yZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmZvLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICBzdG9yZVtxdWVyeUlkXSA9IHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IGluZm8udmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IGluZm8ubmV0d29ya1N0YXR1cyxcbiAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3I6IGluZm8ubmV0d29ya0Vycm9yLFxuICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IGluZm8uZ3JhcGhRTEVycm9ycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldFF1ZXJ5U3RvcmVWYWx1ZSA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIHJldHVybiBxdWVyeUlkID8gdGhpcy5xdWVyaWVzLmdldChxdWVyeUlkKSA6IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIHZhciB0cmFuc2Zvcm1DYWNoZSA9IHRoaXMudHJhbnNmb3JtQ2FjaGU7XG4gICAgICAgIGlmICghdHJhbnNmb3JtQ2FjaGUuaGFzKGRvY3VtZW50KSkge1xuICAgICAgICAgICAgdmFyIHRyYW5zZm9ybWVkID0gdGhpcy5jYWNoZS50cmFuc2Zvcm1Eb2N1bWVudChkb2N1bWVudCk7XG4gICAgICAgICAgICB2YXIgZm9yTGluayA9IHJlbW92ZUNvbm5lY3Rpb25EaXJlY3RpdmVGcm9tRG9jdW1lbnQodGhpcy5jYWNoZS50cmFuc2Zvcm1Gb3JMaW5rKHRyYW5zZm9ybWVkKSk7XG4gICAgICAgICAgICB2YXIgY2xpZW50UXVlcnkgPSB0aGlzLmxvY2FsU3RhdGUuY2xpZW50UXVlcnkodHJhbnNmb3JtZWQpO1xuICAgICAgICAgICAgdmFyIHNlcnZlclF1ZXJ5ID0gZm9yTGluayAmJiB0aGlzLmxvY2FsU3RhdGUuc2VydmVyUXVlcnkoZm9yTGluayk7XG4gICAgICAgICAgICB2YXIgY2FjaGVFbnRyeV8xID0ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50OiB0cmFuc2Zvcm1lZCxcbiAgICAgICAgICAgICAgICBoYXNDbGllbnRFeHBvcnRzOiBoYXNDbGllbnRFeHBvcnRzKHRyYW5zZm9ybWVkKSxcbiAgICAgICAgICAgICAgICBoYXNGb3JjZWRSZXNvbHZlcnM6IHRoaXMubG9jYWxTdGF0ZS5zaG91bGRGb3JjZVJlc29sdmVycyh0cmFuc2Zvcm1lZCksXG4gICAgICAgICAgICAgICAgY2xpZW50UXVlcnk6IGNsaWVudFF1ZXJ5LFxuICAgICAgICAgICAgICAgIHNlcnZlclF1ZXJ5OiBzZXJ2ZXJRdWVyeSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFyczogZ2V0RGVmYXVsdFZhbHVlcyhnZXRPcGVyYXRpb25EZWZpbml0aW9uKHRyYW5zZm9ybWVkKSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGFkZCA9IGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jICYmICF0cmFuc2Zvcm1DYWNoZS5oYXMoZG9jKSkge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1DYWNoZS5zZXQoZG9jLCBjYWNoZUVudHJ5XzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhZGQoZG9jdW1lbnQpO1xuICAgICAgICAgICAgYWRkKHRyYW5zZm9ybWVkKTtcbiAgICAgICAgICAgIGFkZChjbGllbnRRdWVyeSk7XG4gICAgICAgICAgICBhZGQoc2VydmVyUXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1DYWNoZS5nZXQoZG9jdW1lbnQpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRWYXJpYWJsZXMgPSBmdW5jdGlvbiAoZG9jdW1lbnQsIHZhcmlhYmxlcykge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMudHJhbnNmb3JtKGRvY3VtZW50KS5kZWZhdWx0VmFycyksIHZhcmlhYmxlcyk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLndhdGNoUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHZhcmlhYmxlczogdGhpcy5nZXRWYXJpYWJsZXMob3B0aW9ucy5xdWVyeSwgb3B0aW9ucy52YXJpYWJsZXMpIH0pO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb3B0aW9ucy5ub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlUXVlcnkoe1xuICAgICAgICAgICAgcXVlcnlNYW5hZ2VyOiB0aGlzLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2V0UXVlcnkob2JzZXJ2YWJsZS5xdWVyeUlkKS5pbml0KHtcbiAgICAgICAgICAgIGRvY3VtZW50OiBvcHRpb25zLnF1ZXJ5LFxuICAgICAgICAgICAgb2JzZXJ2YWJsZVF1ZXJ5OiBvYnNlcnZhYmxlLFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChvcHRpb25zLnF1ZXJ5LCAxNCkgOiBpbnZhcmlhbnQob3B0aW9ucy5xdWVyeSwgJ3F1ZXJ5IG9wdGlvbiBpcyByZXF1aXJlZC4gWW91IG11c3Qgc3BlY2lmeSB5b3VyIEdyYXBoUUwgZG9jdW1lbnQgJyArXG4gICAgICAgICAgICAnaW4gdGhlIHF1ZXJ5IG9wdGlvbi4nKTtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KG9wdGlvbnMucXVlcnkua2luZCA9PT0gJ0RvY3VtZW50JywgMTUpIDogaW52YXJpYW50KG9wdGlvbnMucXVlcnkua2luZCA9PT0gJ0RvY3VtZW50JywgJ1lvdSBtdXN0IHdyYXAgdGhlIHF1ZXJ5IHN0cmluZyBpbiBhIFwiZ3FsXCIgdGFnLicpO1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoIW9wdGlvbnMucmV0dXJuUGFydGlhbERhdGEsIDE2KSA6IGludmFyaWFudCghb3B0aW9ucy5yZXR1cm5QYXJ0aWFsRGF0YSwgJ3JldHVyblBhcnRpYWxEYXRhIG9wdGlvbiBvbmx5IHN1cHBvcnRlZCBvbiB3YXRjaFF1ZXJ5LicpO1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoIW9wdGlvbnMucG9sbEludGVydmFsLCAxNykgOiBpbnZhcmlhbnQoIW9wdGlvbnMucG9sbEludGVydmFsLCAncG9sbEludGVydmFsIG9wdGlvbiBvbmx5IHN1cHBvcnRlZCBvbiB3YXRjaFF1ZXJ5LicpO1xuICAgICAgICB2YXIgcXVlcnlJZCA9IHRoaXMuZ2VuZXJhdGVRdWVyeUlkKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoUXVlcnkocXVlcnlJZCwgb3B0aW9ucykuZmluYWxseShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zdG9wUXVlcnkocXVlcnlJZCk7IH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZW5lcmF0ZVF1ZXJ5SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy5xdWVyeUlkQ291bnRlcisrKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2VuZXJhdGVSZXF1ZXN0SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RJZENvdW50ZXIrKztcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2VuZXJhdGVNdXRhdGlvbklkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMubXV0YXRpb25JZENvdW50ZXIrKyk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0b3BRdWVyeUluU3RvcmUgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICB0aGlzLnN0b3BRdWVyeUluU3RvcmVOb0Jyb2FkY2FzdChxdWVyeUlkKTtcbiAgICAgICAgdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0b3BRdWVyeUluU3RvcmVOb0Jyb2FkY2FzdCA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIHZhciBxdWVyeUluZm8gPSB0aGlzLnF1ZXJpZXMuZ2V0KHF1ZXJ5SWQpO1xuICAgICAgICBpZiAocXVlcnlJbmZvKVxuICAgICAgICAgICAgcXVlcnlJbmZvLnN0b3AoKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuYWRkUXVlcnlMaXN0ZW5lciA9IGZ1bmN0aW9uIChxdWVyeUlkLCBsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmdldFF1ZXJ5KHF1ZXJ5SWQpLmxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5jbGVhclN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNhbmNlbFBlbmRpbmdGZXRjaGVzKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IG5ldyBJbnZhcmlhbnRFcnJvcigxOCkgOiBuZXcgSW52YXJpYW50RXJyb3IoJ1N0b3JlIHJlc2V0IHdoaWxlIHF1ZXJ5IHdhcyBpbiBmbGlnaHQgKG5vdCBjb21wbGV0ZWQgaW4gbGluayBjaGFpbiknKSk7XG4gICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeUluZm8pIHtcbiAgICAgICAgICAgIGlmIChxdWVyeUluZm8ub2JzZXJ2YWJsZVF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLm5ldHdvcmtTdGF0dXMgPSBOZXR3b3JrU3RhdHVzLmxvYWRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeUluZm8uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tdXRhdGlvblN0b3JlLnJlc2V0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLnJlc2V0KCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnJlc2V0U3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmNsZWFyU3RvcmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcyA9IGZ1bmN0aW9uIChpbmNsdWRlU3RhbmRieSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoaW5jbHVkZVN0YW5kYnkgPT09IHZvaWQgMCkgeyBpbmNsdWRlU3RhbmRieSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBvYnNlcnZhYmxlUXVlcnlQcm9taXNlcyA9IFtdO1xuICAgICAgICB0aGlzLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAoX2EsIHF1ZXJ5SWQpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlUXVlcnkgPSBfYS5vYnNlcnZhYmxlUXVlcnk7XG4gICAgICAgICAgICBpZiAob2JzZXJ2YWJsZVF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGZldGNoUG9saWN5ID0gb2JzZXJ2YWJsZVF1ZXJ5Lm9wdGlvbnMuZmV0Y2hQb2xpY3k7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZVF1ZXJ5LnJlc2V0TGFzdFJlc3VsdHMoKTtcbiAgICAgICAgICAgICAgICBpZiAoZmV0Y2hQb2xpY3kgIT09ICdjYWNoZS1vbmx5JyAmJlxuICAgICAgICAgICAgICAgICAgICAoaW5jbHVkZVN0YW5kYnkgfHwgZmV0Y2hQb2xpY3kgIT09ICdzdGFuZGJ5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZVF1ZXJ5UHJvbWlzZXMucHVzaChvYnNlcnZhYmxlUXVlcnkucmVmZXRjaCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMuZ2V0UXVlcnkocXVlcnlJZCkuc2V0RGlmZihudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwob2JzZXJ2YWJsZVF1ZXJ5UHJvbWlzZXMpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zZXRPYnNlcnZhYmxlUXVlcnkgPSBmdW5jdGlvbiAob2JzZXJ2YWJsZVF1ZXJ5KSB7XG4gICAgICAgIHRoaXMuZ2V0UXVlcnkob2JzZXJ2YWJsZVF1ZXJ5LnF1ZXJ5SWQpLnNldE9ic2VydmFibGVRdWVyeShvYnNlcnZhYmxlUXVlcnkpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdGFydEdyYXBoUUxTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHF1ZXJ5ID0gX2EucXVlcnksIGZldGNoUG9saWN5ID0gX2EuZmV0Y2hQb2xpY3ksIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgX2IgPSBfYS5jb250ZXh0LCBjb250ZXh0ID0gX2IgPT09IHZvaWQgMCA/IHt9IDogX2I7XG4gICAgICAgIHF1ZXJ5ID0gdGhpcy50cmFuc2Zvcm0ocXVlcnkpLmRvY3VtZW50O1xuICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhxdWVyeSwgdmFyaWFibGVzKTtcbiAgICAgICAgdmFyIG1ha2VPYnNlcnZhYmxlID0gZnVuY3Rpb24gKHZhcmlhYmxlcykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdldE9ic2VydmFibGVGcm9tTGluayhxdWVyeSwgY29udGV4dCwgdmFyaWFibGVzLCBmYWxzZSkubWFwKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZldGNoUG9saWN5IHx8IGZldGNoUG9saWN5ICE9PSAnbm8tY2FjaGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZ3JhcGhRTFJlc3VsdEhhc0Vycm9yKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNhY2hlLndyaXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSWQ6ICdST09UX1NVQlNDUklQVElPTicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChncmFwaFFMUmVzdWx0SGFzRXJyb3IocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQXBvbGxvRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogcmVzdWx0LmVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtKHF1ZXJ5KS5oYXNDbGllbnRFeHBvcnRzKSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZVByb21pc2VfMSA9IHRoaXMubG9jYWxTdGF0ZS5hZGRFeHBvcnRlZFZhcmlhYmxlcyhxdWVyeSwgdmFyaWFibGVzLCBjb250ZXh0KS50aGVuKG1ha2VPYnNlcnZhYmxlKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ViID0gbnVsbDtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlUHJvbWlzZV8xLnRoZW4oZnVuY3Rpb24gKG9ic2VydmFibGUpIHsgcmV0dXJuIHN1YiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKG9ic2VydmVyKTsgfSwgb2JzZXJ2ZXIuZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdWIgJiYgc3ViLnVuc3Vic2NyaWJlKCk7IH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFrZU9ic2VydmFibGUodmFyaWFibGVzKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc3RvcFF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdGhpcy5zdG9wUXVlcnlOb0Jyb2FkY2FzdChxdWVyeUlkKTtcbiAgICAgICAgdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0b3BRdWVyeU5vQnJvYWRjYXN0ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdGhpcy5zdG9wUXVlcnlJblN0b3JlTm9Ccm9hZGNhc3QocXVlcnlJZCk7XG4gICAgICAgIHRoaXMucmVtb3ZlUXVlcnkocXVlcnlJZCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnJlbW92ZVF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdGhpcy5mZXRjaENhbmNlbEZucy5kZWxldGUocXVlcnlJZCk7XG4gICAgICAgIHRoaXMuZ2V0UXVlcnkocXVlcnlJZCkuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LnVuc3Vic2NyaWJlKCk7IH0pO1xuICAgICAgICB0aGlzLnF1ZXJpZXMuZGVsZXRlKHF1ZXJ5SWQpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5icm9hZGNhc3RRdWVyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm9uQnJvYWRjYXN0KCk7XG4gICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmZvKSB7IHJldHVybiBpbmZvLm5vdGlmeSgpOyB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0TG9jYWxTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxTdGF0ZTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0T2JzZXJ2YWJsZUZyb21MaW5rID0gZnVuY3Rpb24gKHF1ZXJ5LCBjb250ZXh0LCB2YXJpYWJsZXMsIGRlZHVwbGljYXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGRlZHVwbGljYXRpb24gPT09IHZvaWQgMCkgeyBkZWR1cGxpY2F0aW9uID0gdGhpcy5xdWVyeURlZHVwbGljYXRpb247IH1cbiAgICAgICAgdmFyIG9ic2VydmFibGU7XG4gICAgICAgIHZhciBzZXJ2ZXJRdWVyeSA9IHRoaXMudHJhbnNmb3JtKHF1ZXJ5KS5zZXJ2ZXJRdWVyeTtcbiAgICAgICAgaWYgKHNlcnZlclF1ZXJ5KSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBpbkZsaWdodExpbmtPYnNlcnZhYmxlc18xID0gX2EuaW5GbGlnaHRMaW5rT2JzZXJ2YWJsZXMsIGxpbmsgPSBfYS5saW5rO1xuICAgICAgICAgICAgdmFyIG9wZXJhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBxdWVyeTogc2VydmVyUXVlcnksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uTmFtZTogZ2V0T3BlcmF0aW9uTmFtZShzZXJ2ZXJRdWVyeSkgfHwgdm9pZCAwLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMucHJlcGFyZUNvbnRleHQoX19hc3NpZ24oX19hc3NpZ24oe30sIGNvbnRleHQpLCB7IGZvcmNlRmV0Y2g6ICFkZWR1cGxpY2F0aW9uIH0pKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb250ZXh0ID0gb3BlcmF0aW9uLmNvbnRleHQ7XG4gICAgICAgICAgICBpZiAoZGVkdXBsaWNhdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBieVZhcmlhYmxlc18xID0gaW5GbGlnaHRMaW5rT2JzZXJ2YWJsZXNfMS5nZXQoc2VydmVyUXVlcnkpIHx8IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICBpbkZsaWdodExpbmtPYnNlcnZhYmxlc18xLnNldChzZXJ2ZXJRdWVyeSwgYnlWYXJpYWJsZXNfMSk7XG4gICAgICAgICAgICAgICAgdmFyIHZhckpzb25fMSA9IEpTT04uc3RyaW5naWZ5KHZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IGJ5VmFyaWFibGVzXzEuZ2V0KHZhckpzb25fMSk7XG4gICAgICAgICAgICAgICAgaWYgKCFvYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25jYXN0ID0gbmV3IENvbmNhc3QoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0ZShsaW5rLCBvcGVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICBieVZhcmlhYmxlc18xLnNldCh2YXJKc29uXzEsIG9ic2VydmFibGUgPSBjb25jYXN0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uY2FzdC5jbGVhbnVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChieVZhcmlhYmxlc18xLmRlbGV0ZSh2YXJKc29uXzEpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlWYXJpYWJsZXNfMS5zaXplIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluRmxpZ2h0TGlua09ic2VydmFibGVzXzEuZGVsZXRlKHNlcnZlclF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IG5ldyBDb25jYXN0KFtcbiAgICAgICAgICAgICAgICAgICAgZXhlY3V0ZShsaW5rLCBvcGVyYXRpb24pXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlID0gbmV3IENvbmNhc3QoW1xuICAgICAgICAgICAgICAgIE9ic2VydmFibGUub2YoeyBkYXRhOiB7fSB9KVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5wcmVwYXJlQ29udGV4dChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2xpZW50UXVlcnkgPSB0aGlzLnRyYW5zZm9ybShxdWVyeSkuY2xpZW50UXVlcnk7XG4gICAgICAgIGlmIChjbGllbnRRdWVyeSkge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IGFzeW5jTWFwKG9ic2VydmFibGUsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubG9jYWxTdGF0ZS5ydW5SZXNvbHZlcnMoe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudDogY2xpZW50UXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZVJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRSZXN1bHRzRnJvbUxpbmsgPSBmdW5jdGlvbiAocXVlcnlJbmZvLCBhbGxvd0NhY2hlV3JpdGUsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGxhc3RSZXF1ZXN0SWQgPSBxdWVyeUluZm8ubGFzdFJlcXVlc3RJZDtcbiAgICAgICAgcmV0dXJuIGFzeW5jTWFwKHRoaXMuZ2V0T2JzZXJ2YWJsZUZyb21MaW5rKHF1ZXJ5SW5mby5kb2N1bWVudCwgb3B0aW9ucy5jb250ZXh0LCBvcHRpb25zLnZhcmlhYmxlcyksIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHZhciBoYXNFcnJvcnMgPSBpc05vbkVtcHR5QXJyYXkocmVzdWx0LmVycm9ycyk7XG4gICAgICAgICAgICBpZiAobGFzdFJlcXVlc3RJZCA+PSBxdWVyeUluZm8ubGFzdFJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgIGlmIChoYXNFcnJvcnMgJiYgb3B0aW9ucy5lcnJvclBvbGljeSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgcXVlcnlJbmZvLm1hcmtFcnJvcihuZXcgQXBvbGxvRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogcmVzdWx0LmVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBxdWVyeUluZm8ubWFya1Jlc3VsdChyZXN1bHQsIG9wdGlvbnMsIGFsbG93Q2FjaGVXcml0ZSk7XG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLm1hcmtSZWFkeSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFxciA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBxdWVyeUluZm8ubmV0d29ya1N0YXR1cyB8fCBOZXR3b3JrU3RhdHVzLnJlYWR5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChoYXNFcnJvcnMgJiYgb3B0aW9ucy5lcnJvclBvbGljeSAhPT0gXCJpZ25vcmVcIikge1xuICAgICAgICAgICAgICAgIGFxci5lcnJvcnMgPSByZXN1bHQuZXJyb3JzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFxcjtcbiAgICAgICAgfSwgZnVuY3Rpb24gKG5ldHdvcmtFcnJvcikge1xuICAgICAgICAgICAgdmFyIGVycm9yID0gaXNBcG9sbG9FcnJvcihuZXR3b3JrRXJyb3IpXG4gICAgICAgICAgICAgICAgPyBuZXR3b3JrRXJyb3JcbiAgICAgICAgICAgICAgICA6IG5ldyBBcG9sbG9FcnJvcih7IG5ldHdvcmtFcnJvcjogbmV0d29ya0Vycm9yIH0pO1xuICAgICAgICAgICAgaWYgKGxhc3RSZXF1ZXN0SWQgPj0gcXVlcnlJbmZvLmxhc3RSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgICAgICBxdWVyeUluZm8ubWFya0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZmV0Y2hRdWVyeU9ic2VydmFibGUgPSBmdW5jdGlvbiAocXVlcnlJZCwgb3B0aW9ucywgbmV0d29ya1N0YXR1cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobmV0d29ya1N0YXR1cyA9PT0gdm9pZCAwKSB7IG5ldHdvcmtTdGF0dXMgPSBOZXR3b3JrU3RhdHVzLmxvYWRpbmc7IH1cbiAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy50cmFuc2Zvcm0ob3B0aW9ucy5xdWVyeSkuZG9jdW1lbnQ7XG4gICAgICAgIHZhciB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhxdWVyeSwgb3B0aW9ucy52YXJpYWJsZXMpO1xuICAgICAgICB2YXIgcXVlcnlJbmZvID0gdGhpcy5nZXRRdWVyeShxdWVyeUlkKTtcbiAgICAgICAgdmFyIG9sZE5ldHdvcmtTdGF0dXMgPSBxdWVyeUluZm8ubmV0d29ya1N0YXR1cztcbiAgICAgICAgdmFyIF9hID0gb3B0aW9ucy5mZXRjaFBvbGljeSwgZmV0Y2hQb2xpY3kgPSBfYSA9PT0gdm9pZCAwID8gXCJjYWNoZS1maXJzdFwiIDogX2EsIF9iID0gb3B0aW9ucy5lcnJvclBvbGljeSwgZXJyb3JQb2xpY3kgPSBfYiA9PT0gdm9pZCAwID8gXCJub25lXCIgOiBfYiwgX2MgPSBvcHRpb25zLnJldHVyblBhcnRpYWxEYXRhLCByZXR1cm5QYXJ0aWFsRGF0YSA9IF9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jLCBfZCA9IG9wdGlvbnMubm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlLCBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UgPSBfZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZCwgX2UgPSBvcHRpb25zLmNvbnRleHQsIGNvbnRleHQgPSBfZSA9PT0gdm9pZCAwID8ge30gOiBfZTtcbiAgICAgICAgaWYgKGZldGNoUG9saWN5ID09PSBcImNhY2hlLWFuZC1uZXR3b3JrXCIgfHxcbiAgICAgICAgICAgIGZldGNoUG9saWN5ID09PSBcIm5ldHdvcmstb25seVwiKSB7XG4gICAgICAgICAgICBvcHRpb25zLmZldGNoUG9saWN5ID0gXCJjYWNoZS1maXJzdFwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtaWdodFVzZU5ldHdvcmsgPSBmZXRjaFBvbGljeSA9PT0gXCJjYWNoZS1maXJzdFwiIHx8XG4gICAgICAgICAgICBmZXRjaFBvbGljeSA9PT0gXCJjYWNoZS1hbmQtbmV0d29ya1wiIHx8XG4gICAgICAgICAgICBmZXRjaFBvbGljeSA9PT0gXCJuZXR3b3JrLW9ubHlcIiB8fFxuICAgICAgICAgICAgZmV0Y2hQb2xpY3kgPT09IFwibm8tY2FjaGVcIjtcbiAgICAgICAgaWYgKG1pZ2h0VXNlTmV0d29yayAmJlxuICAgICAgICAgICAgbm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlICYmXG4gICAgICAgICAgICB0eXBlb2Ygb2xkTmV0d29ya1N0YXR1cyA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgICAgICAgb2xkTmV0d29ya1N0YXR1cyAhPT0gbmV0d29ya1N0YXR1cyAmJlxuICAgICAgICAgICAgaXNOZXR3b3JrUmVxdWVzdEluRmxpZ2h0KG5ldHdvcmtTdGF0dXMpKSB7XG4gICAgICAgICAgICBpZiAoZmV0Y2hQb2xpY3kgIT09IFwiY2FjaGUtZmlyc3RcIikge1xuICAgICAgICAgICAgICAgIGZldGNoUG9saWN5ID0gXCJjYWNoZS1hbmQtbmV0d29ya1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBub3JtYWxpemVkID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICBmZXRjaFBvbGljeTogZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICBlcnJvclBvbGljeTogZXJyb3JQb2xpY3ksXG4gICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogcmV0dXJuUGFydGlhbERhdGEsXG4gICAgICAgICAgICBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2U6IG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZnJvbVZhcmlhYmxlcyA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWQudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmZldGNoUXVlcnlCeVBvbGljeShxdWVyeUluZm8sIG5vcm1hbGl6ZWQsIG5ldHdvcmtTdGF0dXMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZldGNoQ2FuY2VsRm5zLnNldChxdWVyeUlkLCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbmNhc3QuY2FuY2VsKHJlYXNvbik7IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNvbmNhc3QgPSBuZXcgQ29uY2FzdCh0aGlzLnRyYW5zZm9ybShub3JtYWxpemVkLnF1ZXJ5KS5oYXNDbGllbnRFeHBvcnRzXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxTdGF0ZS5hZGRFeHBvcnRlZFZhcmlhYmxlcyhub3JtYWxpemVkLnF1ZXJ5LCBub3JtYWxpemVkLnZhcmlhYmxlcywgbm9ybWFsaXplZC5jb250ZXh0KS50aGVuKGZyb21WYXJpYWJsZXMpXG4gICAgICAgICAgICA6IGZyb21WYXJpYWJsZXMobm9ybWFsaXplZC52YXJpYWJsZXMpKTtcbiAgICAgICAgY29uY2FzdC5jbGVhbnVwKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmZldGNoQ2FuY2VsRm5zLmRlbGV0ZShxdWVyeUlkKTsgfSk7XG4gICAgICAgIHJldHVybiBjb25jYXN0O1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5mZXRjaFF1ZXJ5QnlQb2xpY3kgPSBmdW5jdGlvbiAocXVlcnlJbmZvLCBvcHRpb25zLCBuZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBxdWVyeSA9IG9wdGlvbnMucXVlcnksIHZhcmlhYmxlcyA9IG9wdGlvbnMudmFyaWFibGVzLCBmZXRjaFBvbGljeSA9IG9wdGlvbnMuZmV0Y2hQb2xpY3ksIGVycm9yUG9saWN5ID0gb3B0aW9ucy5lcnJvclBvbGljeSwgcmV0dXJuUGFydGlhbERhdGEgPSBvcHRpb25zLnJldHVyblBhcnRpYWxEYXRhLCBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0O1xuICAgICAgICBxdWVyeUluZm8uaW5pdCh7XG4gICAgICAgICAgICBkb2N1bWVudDogcXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGxhc3RSZXF1ZXN0SWQ6IHRoaXMuZ2VuZXJhdGVSZXF1ZXN0SWQoKSxcbiAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IG5ldHdvcmtTdGF0dXMsXG4gICAgICAgIH0pLnVwZGF0ZVdhdGNoKHZhcmlhYmxlcyk7XG4gICAgICAgIHZhciByZWFkQ2FjaGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jYWNoZS5kaWZmKHtcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICBvcHRpbWlzdGljOiB0cnVlLFxuICAgICAgICB9KTsgfTtcbiAgICAgICAgdmFyIHJlc3VsdHNGcm9tQ2FjaGUgPSBmdW5jdGlvbiAoZGlmZiwgbmV0d29ya1N0YXR1cykge1xuICAgICAgICAgICAgaWYgKG5ldHdvcmtTdGF0dXMgPT09IHZvaWQgMCkgeyBuZXR3b3JrU3RhdHVzID0gcXVlcnlJbmZvLm5ldHdvcmtTdGF0dXMgfHwgTmV0d29ya1N0YXR1cy5sb2FkaW5nOyB9XG4gICAgICAgICAgICB2YXIgZGF0YSA9IGRpZmYucmVzdWx0O1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgICAgICAgICBpc05vbkVtcHR5QXJyYXkoZGlmZi5taXNzaW5nKSAmJlxuICAgICAgICAgICAgICAgICFlcXVhbChkYXRhLCB7fSkpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgfHwgaW52YXJpYW50Lndhcm4oXCJNaXNzaW5nIGNhY2hlIHJlc3VsdCBmaWVsZHM6IFwiICsgZGlmZi5taXNzaW5nLm1hcChmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5wYXRoLmpvaW4oJy4nKTsgfSkuam9pbignLCAnKSwgZGlmZi5taXNzaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmcm9tRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBPYnNlcnZhYmxlLm9mKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGlzTmV0d29ya1JlcXVlc3RJbkZsaWdodChuZXR3b3JrU3RhdHVzKSxcbiAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBuZXR3b3JrU3RhdHVzLFxuICAgICAgICAgICAgfSk7IH07XG4gICAgICAgICAgICBpZiAoX3RoaXMudHJhbnNmb3JtKHF1ZXJ5KS5oYXNGb3JjZWRSZXNvbHZlcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubG9jYWxTdGF0ZS5ydW5SZXNvbHZlcnMoe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudDogcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZVJlc3VsdDogeyBkYXRhOiBkYXRhIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICBvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc29sdmVkKSB7IHJldHVybiBmcm9tRGF0YShyZXNvbHZlZC5kYXRhKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnJvbURhdGEoZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciByZXN1bHRzRnJvbUxpbmsgPSBmdW5jdGlvbiAoYWxsb3dDYWNoZVdyaXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0UmVzdWx0c0Zyb21MaW5rKHF1ZXJ5SW5mbywgYWxsb3dDYWNoZVdyaXRlLCB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICAgICAgZXJyb3JQb2xpY3k6IGVycm9yUG9saWN5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHN3aXRjaCAoZmV0Y2hQb2xpY3kpIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYXNlIFwiY2FjaGUtZmlyc3RcIjoge1xuICAgICAgICAgICAgICAgIHZhciBkaWZmID0gcmVhZENhY2hlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tQ2FjaGUoZGlmZiwgcXVlcnlJbmZvLm1hcmtSZWFkeSgpKSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJldHVyblBhcnRpYWxEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUNhY2hlKGRpZmYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21MaW5rKHRydWUpLFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUxpbmsodHJ1ZSksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJjYWNoZS1hbmQtbmV0d29ya1wiOiB7XG4gICAgICAgICAgICAgICAgdmFyIGRpZmYgPSByZWFkQ2FjaGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlmZi5jb21wbGV0ZSB8fCByZXR1cm5QYXJ0aWFsRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21DYWNoZShkaWZmKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tTGluayh0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21MaW5rKHRydWUpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiY2FjaGUtb25seVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tQ2FjaGUocmVhZENhY2hlKCksIHF1ZXJ5SW5mby5tYXJrUmVhZHkoKSksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGNhc2UgXCJuZXR3b3JrLW9ubHlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gW3Jlc3VsdHNGcm9tTGluayh0cnVlKV07XG4gICAgICAgICAgICBjYXNlIFwibm8tY2FjaGVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gW3Jlc3VsdHNGcm9tTGluayhmYWxzZSldO1xuICAgICAgICAgICAgY2FzZSBcInN0YW5kYnlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0UXVlcnkgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICBpZiAocXVlcnlJZCAmJiAhdGhpcy5xdWVyaWVzLmhhcyhxdWVyeUlkKSkge1xuICAgICAgICAgICAgdGhpcy5xdWVyaWVzLnNldChxdWVyeUlkLCBuZXcgUXVlcnlJbmZvKHRoaXMuY2FjaGUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyaWVzLmdldChxdWVyeUlkKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUucHJlcGFyZUNvbnRleHQgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB7fTsgfVxuICAgICAgICB2YXIgbmV3Q29udGV4dCA9IHRoaXMubG9jYWxTdGF0ZS5wcmVwYXJlQ29udGV4dChjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBuZXdDb250ZXh0KSwgeyBjbGllbnRBd2FyZW5lc3M6IHRoaXMuY2xpZW50QXdhcmVuZXNzIH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5jaGVja0luRmxpZ2h0ID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5nZXRRdWVyeVN0b3JlVmFsdWUocXVlcnlJZCk7XG4gICAgICAgIHJldHVybiAoISFxdWVyeSAmJlxuICAgICAgICAgICAgISFxdWVyeS5uZXR3b3JrU3RhdHVzICYmXG4gICAgICAgICAgICBxdWVyeS5uZXR3b3JrU3RhdHVzICE9PSBOZXR3b3JrU3RhdHVzLnJlYWR5ICYmXG4gICAgICAgICAgICBxdWVyeS5uZXR3b3JrU3RhdHVzICE9PSBOZXR3b3JrU3RhdHVzLmVycm9yKTtcbiAgICB9O1xuICAgIHJldHVybiBRdWVyeU1hbmFnZXI7XG59KCkpO1xuZnVuY3Rpb24gbWFya011dGF0aW9uUmVzdWx0KG11dGF0aW9uLCBjYWNoZSkge1xuICAgIGlmICghZ3JhcGhRTFJlc3VsdEhhc0Vycm9yKG11dGF0aW9uLnJlc3VsdCkpIHtcbiAgICAgICAgdmFyIGNhY2hlV3JpdGVzXzEgPSBbe1xuICAgICAgICAgICAgICAgIHJlc3VsdDogbXV0YXRpb24ucmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgZGF0YUlkOiAnUk9PVF9NVVRBVElPTicsXG4gICAgICAgICAgICAgICAgcXVlcnk6IG11dGF0aW9uLmRvY3VtZW50LFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogbXV0YXRpb24udmFyaWFibGVzLFxuICAgICAgICAgICAgfV07XG4gICAgICAgIHZhciBxdWVyeVVwZGF0ZXJzQnlJZF8xID0gbXV0YXRpb24ucXVlcnlVcGRhdGVyc0J5SWQ7XG4gICAgICAgIGlmIChxdWVyeVVwZGF0ZXJzQnlJZF8xKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhxdWVyeVVwZGF0ZXJzQnlJZF8xKS5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSA9IHF1ZXJ5VXBkYXRlcnNCeUlkXzFbaWRdLCB1cGRhdGVyID0gX2EudXBkYXRlciwgX2IgPSBfYS5xdWVyeUluZm8sIGRvY3VtZW50ID0gX2IuZG9jdW1lbnQsIHZhcmlhYmxlcyA9IF9iLnZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICB2YXIgX2MgPSBjYWNoZS5kaWZmKHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGRvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG9wdGltaXN0aWM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pLCBjdXJyZW50UXVlcnlSZXN1bHQgPSBfYy5yZXN1bHQsIGNvbXBsZXRlID0gX2MuY29tcGxldGU7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlICYmIGN1cnJlbnRRdWVyeVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dFF1ZXJ5UmVzdWx0ID0gdXBkYXRlcihjdXJyZW50UXVlcnlSZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uUmVzdWx0OiBtdXRhdGlvbi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeU5hbWU6IGdldE9wZXJhdGlvbk5hbWUoZG9jdW1lbnQpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFF1ZXJ5UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVdyaXRlc18xLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogbmV4dFF1ZXJ5UmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJZDogJ1JPT1RfUVVFUlknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBkb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FjaGUucGVyZm9ybVRyYW5zYWN0aW9uKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICBjYWNoZVdyaXRlc18xLmZvckVhY2goZnVuY3Rpb24gKHdyaXRlKSB7IHJldHVybiBjLndyaXRlKHdyaXRlKTsgfSk7XG4gICAgICAgICAgICB2YXIgdXBkYXRlID0gbXV0YXRpb24udXBkYXRlO1xuICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZShjLCBtdXRhdGlvbi5yZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBudWxsKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFF1ZXJ5TWFuYWdlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UXVlcnlNYW5hZ2VyLmpzLm1hcFxuIiwiaW1wb3J0IHsgaW52YXJpYW50IH0gZnJvbSAndHMtaW52YXJpYW50JztcbmltcG9ydCB7IE5ldHdvcmtTdGF0dXMgfSBmcm9tICcuL25ldHdvcmtTdGF0dXMuanMnO1xuXG52YXIgUmVvYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVvYnNlcnZlcihvYnNlcnZlciwgb3B0aW9ucywgZmV0Y2gsIHNob3VsZEZldGNoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5mZXRjaCA9IGZldGNoO1xuICAgICAgICB0aGlzLnNob3VsZEZldGNoID0gc2hvdWxkRmV0Y2g7XG4gICAgfVxuICAgIFJlb2JzZXJ2ZXIucHJvdG90eXBlLnJlb2JzZXJ2ZSA9IGZ1bmN0aW9uIChuZXdPcHRpb25zLCBuZXdOZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIGlmIChuZXdPcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMobmV3T3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvbGxpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29uY2FzdCA9IHRoaXMuZmV0Y2godGhpcy5vcHRpb25zLCBuZXdOZXR3b3JrU3RhdHVzKTtcbiAgICAgICAgaWYgKHRoaXMuY29uY2FzdCkge1xuICAgICAgICAgICAgdGhpcy5jb25jYXN0LnJlbW92ZU9ic2VydmVyKHRoaXMub2JzZXJ2ZXIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbmNhc3QuYWRkT2JzZXJ2ZXIodGhpcy5vYnNlcnZlcik7XG4gICAgICAgIHJldHVybiAodGhpcy5jb25jYXN0ID0gY29uY2FzdCkucHJvbWlzZTtcbiAgICB9O1xuICAgIFJlb2JzZXJ2ZXIucHJvdG90eXBlLnVwZGF0ZU9wdGlvbnMgPSBmdW5jdGlvbiAobmV3T3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBPYmplY3Qua2V5cyhuZXdPcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG5ld09wdGlvbnNba2V5XTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub3B0aW9uc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvbGxpbmcoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBSZW9ic2VydmVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jb25jYXN0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbmNhc3QucmVtb3ZlT2JzZXJ2ZXIodGhpcy5vYnNlcnZlcik7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jb25jYXN0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvbGxpbmdJbmZvKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5wb2xsaW5nSW5mby50aW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wb2xsSW50ZXJ2YWwgPSAwO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQb2xsaW5nKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlb2JzZXJ2ZXIucHJvdG90eXBlLnVwZGF0ZVBvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIHBvbGxpbmdJbmZvID0gX2EucG9sbGluZ0luZm8sIHBvbGxJbnRlcnZhbCA9IF9hLm9wdGlvbnMucG9sbEludGVydmFsO1xuICAgICAgICBpZiAoIXBvbGxJbnRlcnZhbCkge1xuICAgICAgICAgICAgaWYgKHBvbGxpbmdJbmZvKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHBvbGxpbmdJbmZvLnRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBvbGxpbmdJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb2xsaW5nSW5mbyAmJlxuICAgICAgICAgICAgcG9sbGluZ0luZm8uaW50ZXJ2YWwgPT09IHBvbGxJbnRlcnZhbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChwb2xsSW50ZXJ2YWwsIDIxKSA6IGludmFyaWFudChwb2xsSW50ZXJ2YWwsICdBdHRlbXB0ZWQgdG8gc3RhcnQgYSBwb2xsaW5nIHF1ZXJ5IHdpdGhvdXQgYSBwb2xsaW5nIGludGVydmFsLicpO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRGZXRjaCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5mbyA9IHBvbGxpbmdJbmZvIHx8ICh0aGlzLnBvbGxpbmdJbmZvID0ge30pO1xuICAgICAgICBpbmZvLmludGVydmFsID0gcG9sbEludGVydmFsO1xuICAgICAgICB2YXIgbWF5YmVGZXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5wb2xsaW5nSW5mbykge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zaG91bGRGZXRjaCAmJiBfdGhpcy5zaG91bGRGZXRjaCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJlb2JzZXJ2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogXCJuZXR3b3JrLW9ubHlcIixcbiAgICAgICAgICAgICAgICAgICAgfSwgTmV0d29ya1N0YXR1cy5wb2xsKS50aGVuKHBvbGwsIHBvbGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9sbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHBvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW5mbyA9IF90aGlzLnBvbGxpbmdJbmZvO1xuICAgICAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaW5mby50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICBpbmZvLnRpbWVvdXQgPSBzZXRUaW1lb3V0KG1heWJlRmV0Y2gsIGluZm8uaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwb2xsKCk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVvYnNlcnZlcjtcbn0oKSk7XG5cbmV4cG9ydCB7IFJlb2JzZXJ2ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJlb2JzZXJ2ZXIuanMubWFwXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIE9ic2VydmFibGUgfSBmcm9tICd6ZW4tb2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3N5bWJvbC1vYnNlcnZhYmxlJztcbmV4cG9ydCB7IGlzUmVmZXJlbmNlLCBtYWtlUmVmZXJlbmNlIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2dyYXBocWwvc3RvcmVVdGlscy5qcyc7XG5leHBvcnQgeyBBcG9sbG9MaW5rIH0gZnJvbSAnLi4vbGluay9jb3JlL0Fwb2xsb0xpbmsuanMnO1xuZXhwb3J0IHsgZXhlY3V0ZSB9IGZyb20gJy4uL2xpbmsvY29yZS9leGVjdXRlLmpzJztcbmV4cG9ydCB7IEFwb2xsb0Vycm9yLCBpc0Fwb2xsb0Vycm9yIH0gZnJvbSAnLi4vZXJyb3JzL0Fwb2xsb0Vycm9yLmpzJztcbmV4cG9ydCB7IE5ldHdvcmtTdGF0dXMgfSBmcm9tICcuL25ldHdvcmtTdGF0dXMuanMnO1xuZXhwb3J0IHsgT2JzZXJ2YWJsZVF1ZXJ5IH0gZnJvbSAnLi9PYnNlcnZhYmxlUXVlcnkuanMnO1xuZXhwb3J0IHsgbWFrZVZhciB9IGZyb20gJy4uL2NhY2hlL2lubWVtb3J5L3JlYWN0aXZlVmFycy5qcyc7XG5leHBvcnQgeyBzZXJpYWxpemVGZXRjaFBhcmFtZXRlciB9IGZyb20gJy4uL2xpbmsvaHR0cC9zZXJpYWxpemVGZXRjaFBhcmFtZXRlci5qcyc7XG5leHBvcnQgeyBzZWxlY3RVUkkgfSBmcm9tICcuLi9saW5rL2h0dHAvc2VsZWN0VVJJLmpzJztcbmV4cG9ydCB7IHRocm93U2VydmVyRXJyb3IgfSBmcm9tICcuLi9saW5rL3V0aWxzL3Rocm93U2VydmVyRXJyb3IuanMnO1xuZXhwb3J0IHsgcGFyc2VBbmRDaGVja0h0dHBSZXNwb25zZSB9IGZyb20gJy4uL2xpbmsvaHR0cC9wYXJzZUFuZENoZWNrSHR0cFJlc3BvbnNlLmpzJztcbmV4cG9ydCB7IGNoZWNrRmV0Y2hlciB9IGZyb20gJy4uL2xpbmsvaHR0cC9jaGVja0ZldGNoZXIuanMnO1xuZXhwb3J0IHsgZmFsbGJhY2tIdHRwQ29uZmlnLCBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHkgfSBmcm9tICcuLi9saW5rL2h0dHAvc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5LmpzJztcbmV4cG9ydCB7IGNyZWF0ZVNpZ25hbElmU3VwcG9ydGVkIH0gZnJvbSAnLi4vbGluay9odHRwL2NyZWF0ZVNpZ25hbElmU3VwcG9ydGVkLmpzJztcbmV4cG9ydCB7IHJld3JpdGVVUklGb3JHRVQgfSBmcm9tICcuLi9saW5rL2h0dHAvcmV3cml0ZVVSSUZvckdFVC5qcyc7XG5leHBvcnQgeyBmcm9tRXJyb3IgfSBmcm9tICcuLi9saW5rL3V0aWxzL2Zyb21FcnJvci5qcyc7XG5leHBvcnQgeyBjcmVhdGVIdHRwTGluayB9IGZyb20gJy4uL2xpbmsvaHR0cC9jcmVhdGVIdHRwTGluay5qcyc7XG5leHBvcnQgeyBIdHRwTGluayB9IGZyb20gJy4uL2xpbmsvaHR0cC9IdHRwTGluay5qcyc7XG5leHBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICcuLi9BcG9sbG9DbGllbnQuanMnO1xuZXhwb3J0IHsgQXBvbGxvQ2FjaGUgfSBmcm9tICcuLi9jYWNoZS9jb3JlL2NhY2hlLmpzJztcbmV4cG9ydCB7IENhY2hlIH0gZnJvbSAnLi4vY2FjaGUvY29yZS90eXBlcy9DYWNoZS5qcyc7XG5leHBvcnQgeyBNaXNzaW5nRmllbGRFcnJvciB9IGZyb20gJy4uL2NhY2hlL2NvcmUvdHlwZXMvY29tbW9uLmpzJztcbmV4cG9ydCB7IGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0IH0gZnJvbSAnLi4vY2FjaGUvaW5tZW1vcnkvcG9saWNpZXMuanMnO1xuZXhwb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJy4uL2NhY2hlL2lubWVtb3J5L2luTWVtb3J5Q2FjaGUuanMnO1xuZXhwb3J0IHsgZW1wdHkgfSBmcm9tICcuLi9saW5rL2NvcmUvZW1wdHkuanMnO1xuZXhwb3J0IHsgZnJvbSB9IGZyb20gJy4uL2xpbmsvY29yZS9mcm9tLmpzJztcbmV4cG9ydCB7IHNwbGl0IH0gZnJvbSAnLi4vbGluay9jb3JlL3NwbGl0LmpzJztcbmV4cG9ydCB7IGNvbmNhdCB9IGZyb20gJy4uL2xpbmsvY29yZS9jb25jYXQuanMnO1xuZXhwb3J0IHsgdG9Qcm9taXNlIH0gZnJvbSAnLi4vbGluay91dGlscy90b1Byb21pc2UuanMnO1xuZXhwb3J0IHsgZnJvbVByb21pc2UgfSBmcm9tICcuLi9saW5rL3V0aWxzL2Zyb21Qcm9taXNlLmpzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBncWwgfSBmcm9tICdncmFwaHFsLXRhZyc7XG5cbnZhciByZXNldENhY2hlcyA9IGdxbC5yZXNldENhY2hlcywgZGlzYWJsZUZyYWdtZW50V2FybmluZ3MgPSBncWwuZGlzYWJsZUZyYWdtZW50V2FybmluZ3MsIGVuYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzID0gZ3FsLmVuYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzLCBkaXNhYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMgPSBncWwuZGlzYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzO1xuXG5leHBvcnQgeyBkaXNhYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMsIGRpc2FibGVGcmFnbWVudFdhcm5pbmdzLCBlbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcywgcmVzZXRDYWNoZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwidmFyIE5ldHdvcmtTdGF0dXM7XG4oZnVuY3Rpb24gKE5ldHdvcmtTdGF0dXMpIHtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJsb2FkaW5nXCJdID0gMV0gPSBcImxvYWRpbmdcIjtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJzZXRWYXJpYWJsZXNcIl0gPSAyXSA9IFwic2V0VmFyaWFibGVzXCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wiZmV0Y2hNb3JlXCJdID0gM10gPSBcImZldGNoTW9yZVwiO1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcInJlZmV0Y2hcIl0gPSA0XSA9IFwicmVmZXRjaFwiO1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcInBvbGxcIl0gPSA2XSA9IFwicG9sbFwiO1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcInJlYWR5XCJdID0gN10gPSBcInJlYWR5XCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wiZXJyb3JcIl0gPSA4XSA9IFwiZXJyb3JcIjtcbn0pKE5ldHdvcmtTdGF0dXMgfHwgKE5ldHdvcmtTdGF0dXMgPSB7fSkpO1xuZnVuY3Rpb24gaXNOZXR3b3JrUmVxdWVzdEluRmxpZ2h0KG5ldHdvcmtTdGF0dXMpIHtcbiAgICByZXR1cm4gbmV0d29ya1N0YXR1cyA/IG5ldHdvcmtTdGF0dXMgPCA3IDogZmFsc2U7XG59XG5cbmV4cG9ydCB7IE5ldHdvcmtTdGF0dXMsIGlzTmV0d29ya1JlcXVlc3RJbkZsaWdodCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmV0d29ya1N0YXR1cy5qcy5tYXBcbiIsInZhciBNdXRhdGlvblN0b3JlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNdXRhdGlvblN0b3JlKCkge1xuICAgICAgICB0aGlzLnN0b3JlID0ge307XG4gICAgfVxuICAgIE11dGF0aW9uU3RvcmUucHJvdG90eXBlLmdldFN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZTtcbiAgICB9O1xuICAgIE11dGF0aW9uU3RvcmUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChtdXRhdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlW211dGF0aW9uSWRdO1xuICAgIH07XG4gICAgTXV0YXRpb25TdG9yZS5wcm90b3R5cGUuaW5pdE11dGF0aW9uID0gZnVuY3Rpb24gKG11dGF0aW9uSWQsIG11dGF0aW9uLCB2YXJpYWJsZXMpIHtcbiAgICAgICAgdGhpcy5zdG9yZVttdXRhdGlvbklkXSA9IHtcbiAgICAgICAgICAgIG11dGF0aW9uOiBtdXRhdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzIHx8IHt9LFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgTXV0YXRpb25TdG9yZS5wcm90b3R5cGUubWFya011dGF0aW9uRXJyb3IgPSBmdW5jdGlvbiAobXV0YXRpb25JZCwgZXJyb3IpIHtcbiAgICAgICAgdmFyIG11dGF0aW9uID0gdGhpcy5zdG9yZVttdXRhdGlvbklkXTtcbiAgICAgICAgaWYgKG11dGF0aW9uKSB7XG4gICAgICAgICAgICBtdXRhdGlvbi5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBtdXRhdGlvbi5lcnJvciA9IGVycm9yO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNdXRhdGlvblN0b3JlLnByb3RvdHlwZS5tYXJrTXV0YXRpb25SZXN1bHQgPSBmdW5jdGlvbiAobXV0YXRpb25JZCkge1xuICAgICAgICB2YXIgbXV0YXRpb24gPSB0aGlzLnN0b3JlW211dGF0aW9uSWRdO1xuICAgICAgICBpZiAobXV0YXRpb24pIHtcbiAgICAgICAgICAgIG11dGF0aW9uLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIG11dGF0aW9uLmVycm9yID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTXV0YXRpb25TdG9yZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RvcmUgPSB7fTtcbiAgICB9O1xuICAgIHJldHVybiBNdXRhdGlvblN0b3JlO1xufSgpKTtcblxuZXhwb3J0IHsgTXV0YXRpb25TdG9yZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bXV0YXRpb25zLmpzLm1hcFxuIiwiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgaXNOb25FbXB0eUFycmF5IH0gZnJvbSAnLi4vdXRpbGl0aWVzL2NvbW1vbi9hcnJheXMuanMnO1xuXG5mdW5jdGlvbiBpc0Fwb2xsb0Vycm9yKGVycikge1xuICAgIHJldHVybiBlcnIuaGFzT3duUHJvcGVydHkoJ2dyYXBoUUxFcnJvcnMnKTtcbn1cbnZhciBnZW5lcmF0ZUVycm9yTWVzc2FnZSA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICcnO1xuICAgIGlmIChpc05vbkVtcHR5QXJyYXkoZXJyLmdyYXBoUUxFcnJvcnMpKSB7XG4gICAgICAgIGVyci5ncmFwaFFMRXJyb3JzLmZvckVhY2goZnVuY3Rpb24gKGdyYXBoUUxFcnJvcikge1xuICAgICAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGdyYXBoUUxFcnJvclxuICAgICAgICAgICAgICAgID8gZ3JhcGhRTEVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICA6ICdFcnJvciBtZXNzYWdlIG5vdCBmb3VuZC4nO1xuICAgICAgICAgICAgbWVzc2FnZSArPSBlcnJvck1lc3NhZ2UgKyBcIlxcblwiO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGVyci5uZXR3b3JrRXJyb3IpIHtcbiAgICAgICAgbWVzc2FnZSArPSBlcnIubmV0d29ya0Vycm9yLm1lc3NhZ2UgKyBcIlxcblwiO1xuICAgIH1cbiAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKC9cXG4kLywgJycpO1xuICAgIHJldHVybiBtZXNzYWdlO1xufTtcbnZhciBBcG9sbG9FcnJvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFwb2xsb0Vycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwb2xsb0Vycm9yKF9hKSB7XG4gICAgICAgIHZhciBncmFwaFFMRXJyb3JzID0gX2EuZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yID0gX2EubmV0d29ya0Vycm9yLCBlcnJvck1lc3NhZ2UgPSBfYS5lcnJvck1lc3NhZ2UsIGV4dHJhSW5mbyA9IF9hLmV4dHJhSW5mbztcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZXJyb3JNZXNzYWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5ncmFwaFFMRXJyb3JzID0gZ3JhcGhRTEVycm9ycyB8fCBbXTtcbiAgICAgICAgX3RoaXMubmV0d29ya0Vycm9yID0gbmV0d29ya0Vycm9yIHx8IG51bGw7XG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UgfHwgZ2VuZXJhdGVFcnJvck1lc3NhZ2UoX3RoaXMpO1xuICAgICAgICBfdGhpcy5leHRyYUluZm8gPSBleHRyYUluZm87XG4gICAgICAgIF90aGlzLl9fcHJvdG9fXyA9IEFwb2xsb0Vycm9yLnByb3RvdHlwZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gQXBvbGxvRXJyb3I7XG59KEVycm9yKSk7XG5cbmV4cG9ydCB7IEFwb2xsb0Vycm9yLCBpc0Fwb2xsb0Vycm9yIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcG9sbG9FcnJvci5qcy5tYXBcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgT2JzZXJ2YWJsZSB9IGZyb20gJ3plbi1vYnNlcnZhYmxlJztcbmV4cG9ydCB7IGlzUmVmZXJlbmNlLCBtYWtlUmVmZXJlbmNlIH0gZnJvbSAnLi91dGlsaXRpZXMvZ3JhcGhxbC9zdG9yZVV0aWxzLmpzJztcbmV4cG9ydCB7IEFwb2xsb0xpbmsgfSBmcm9tICcuL2xpbmsvY29yZS9BcG9sbG9MaW5rLmpzJztcbmV4cG9ydCB7IGV4ZWN1dGUgfSBmcm9tICcuL2xpbmsvY29yZS9leGVjdXRlLmpzJztcbmV4cG9ydCB7IEFwb2xsb0Vycm9yLCBpc0Fwb2xsb0Vycm9yIH0gZnJvbSAnLi9lcnJvcnMvQXBvbGxvRXJyb3IuanMnO1xuZXhwb3J0IHsgTmV0d29ya1N0YXR1cyB9IGZyb20gJy4vY29yZS9uZXR3b3JrU3RhdHVzLmpzJztcbmV4cG9ydCB7IE9ic2VydmFibGVRdWVyeSB9IGZyb20gJy4vY29yZS9PYnNlcnZhYmxlUXVlcnkuanMnO1xuZXhwb3J0IHsgbWFrZVZhciB9IGZyb20gJy4vY2FjaGUvaW5tZW1vcnkvcmVhY3RpdmVWYXJzLmpzJztcbmV4cG9ydCB7IHNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyIH0gZnJvbSAnLi9saW5rL2h0dHAvc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIuanMnO1xuZXhwb3J0IHsgc2VsZWN0VVJJIH0gZnJvbSAnLi9saW5rL2h0dHAvc2VsZWN0VVJJLmpzJztcbmV4cG9ydCB7IHRocm93U2VydmVyRXJyb3IgfSBmcm9tICcuL2xpbmsvdXRpbHMvdGhyb3dTZXJ2ZXJFcnJvci5qcyc7XG5leHBvcnQgeyBwYXJzZUFuZENoZWNrSHR0cFJlc3BvbnNlIH0gZnJvbSAnLi9saW5rL2h0dHAvcGFyc2VBbmRDaGVja0h0dHBSZXNwb25zZS5qcyc7XG5leHBvcnQgeyBjaGVja0ZldGNoZXIgfSBmcm9tICcuL2xpbmsvaHR0cC9jaGVja0ZldGNoZXIuanMnO1xuZXhwb3J0IHsgZmFsbGJhY2tIdHRwQ29uZmlnLCBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHkgfSBmcm9tICcuL2xpbmsvaHR0cC9zZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHkuanMnO1xuZXhwb3J0IHsgY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQgfSBmcm9tICcuL2xpbmsvaHR0cC9jcmVhdGVTaWduYWxJZlN1cHBvcnRlZC5qcyc7XG5leHBvcnQgeyByZXdyaXRlVVJJRm9yR0VUIH0gZnJvbSAnLi9saW5rL2h0dHAvcmV3cml0ZVVSSUZvckdFVC5qcyc7XG5leHBvcnQgeyBmcm9tRXJyb3IgfSBmcm9tICcuL2xpbmsvdXRpbHMvZnJvbUVycm9yLmpzJztcbmV4cG9ydCB7IGNyZWF0ZUh0dHBMaW5rIH0gZnJvbSAnLi9saW5rL2h0dHAvY3JlYXRlSHR0cExpbmsuanMnO1xuZXhwb3J0IHsgSHR0cExpbmsgfSBmcm9tICcuL2xpbmsvaHR0cC9IdHRwTGluay5qcyc7XG5leHBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICcuL0Fwb2xsb0NsaWVudC5qcyc7XG5leHBvcnQgeyBBcG9sbG9DYWNoZSB9IGZyb20gJy4vY2FjaGUvY29yZS9jYWNoZS5qcyc7XG5leHBvcnQgeyBDYWNoZSB9IGZyb20gJy4vY2FjaGUvY29yZS90eXBlcy9DYWNoZS5qcyc7XG5leHBvcnQgeyBNaXNzaW5nRmllbGRFcnJvciB9IGZyb20gJy4vY2FjaGUvY29yZS90eXBlcy9jb21tb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdERhdGFJZEZyb21PYmplY3QgfSBmcm9tICcuL2NhY2hlL2lubWVtb3J5L3BvbGljaWVzLmpzJztcbmV4cG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICcuL2NhY2hlL2lubWVtb3J5L2luTWVtb3J5Q2FjaGUuanMnO1xuZXhwb3J0IHsgZW1wdHkgfSBmcm9tICcuL2xpbmsvY29yZS9lbXB0eS5qcyc7XG5leHBvcnQgeyBmcm9tIH0gZnJvbSAnLi9saW5rL2NvcmUvZnJvbS5qcyc7XG5leHBvcnQgeyBzcGxpdCB9IGZyb20gJy4vbGluay9jb3JlL3NwbGl0LmpzJztcbmV4cG9ydCB7IGNvbmNhdCB9IGZyb20gJy4vbGluay9jb3JlL2NvbmNhdC5qcyc7XG5leHBvcnQgeyB0b1Byb21pc2UgfSBmcm9tICcuL2xpbmsvdXRpbHMvdG9Qcm9taXNlLmpzJztcbmV4cG9ydCB7IGZyb21Qcm9taXNlIH0gZnJvbSAnLi9saW5rL3V0aWxzL2Zyb21Qcm9taXNlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ3FsIH0gZnJvbSAnZ3JhcGhxbC10YWcnO1xuZXhwb3J0IHsgZGlzYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzLCBkaXNhYmxlRnJhZ21lbnRXYXJuaW5ncywgZW5hYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMsIHJlc2V0Q2FjaGVzIH0gZnJvbSAnLi9jb3JlL2luZGV4LmpzJztcbmV4cG9ydCB7IGdldEFwb2xsb0NvbnRleHQsIHJlc2V0QXBvbGxvQ29udGV4dCB9IGZyb20gJy4vcmVhY3QvY29udGV4dC9BcG9sbG9Db250ZXh0LmpzJztcbmV4cG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnLi9yZWFjdC9jb250ZXh0L0Fwb2xsb1Byb3ZpZGVyLmpzJztcbmV4cG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAnLi9yZWFjdC9jb250ZXh0L0Fwb2xsb0NvbnN1bWVyLmpzJztcbmV4cG9ydCB7IERvY3VtZW50VHlwZSwgb3BlcmF0aW9uTmFtZSwgcGFyc2VyIH0gZnJvbSAnLi9yZWFjdC9wYXJzZXIvcGFyc2VyLmpzJztcbmV4cG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnLi9yZWFjdC9ob29rcy91c2VRdWVyeS5qcyc7XG5leHBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tICcuL3JlYWN0L2hvb2tzL3VzZUxhenlRdWVyeS5qcyc7XG5leHBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJy4vcmVhY3QvaG9va3MvdXNlTXV0YXRpb24uanMnO1xuZXhwb3J0IHsgdXNlU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9yZWFjdC9ob29rcy91c2VTdWJzY3JpcHRpb24uanMnO1xuZXhwb3J0IHsgdXNlQXBvbGxvQ2xpZW50IH0gZnJvbSAnLi9yZWFjdC9ob29rcy91c2VBcG9sbG9DbGllbnQuanMnO1xuZXhwb3J0IHsgUmVuZGVyUHJvbWlzZXMgfSBmcm9tICcuL3JlYWN0L3Nzci9SZW5kZXJQcm9taXNlcy5qcyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsImltcG9ydCB7IF9fZXh0ZW5kcyB9IGZyb20gJ3RzbGliJztcbmltcG9ydCB7IEludmFyaWFudEVycm9yLCBpbnZhcmlhbnQgfSBmcm9tICd0cy1pbnZhcmlhbnQnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnemVuLW9ic2VydmFibGUnO1xuaW1wb3J0ICdzeW1ib2wtb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyB2YWxpZGF0ZU9wZXJhdGlvbiB9IGZyb20gJy4uL3V0aWxzL3ZhbGlkYXRlT3BlcmF0aW9uLmpzJztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdGlvbiB9IGZyb20gJy4uL3V0aWxzL2NyZWF0ZU9wZXJhdGlvbi5qcyc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1PcGVyYXRpb24gfSBmcm9tICcuLi91dGlscy90cmFuc2Zvcm1PcGVyYXRpb24uanMnO1xuXG5mdW5jdGlvbiBwYXNzdGhyb3VnaChvcCwgZm9yd2FyZCkge1xuICAgIHJldHVybiAoZm9yd2FyZCA/IGZvcndhcmQob3ApIDogT2JzZXJ2YWJsZS5vZigpKTtcbn1cbmZ1bmN0aW9uIHRvTGluayhoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nID8gbmV3IEFwb2xsb0xpbmsoaGFuZGxlcikgOiBoYW5kbGVyO1xufVxuZnVuY3Rpb24gaXNUZXJtaW5hdGluZyhsaW5rKSB7XG4gICAgcmV0dXJuIGxpbmsucmVxdWVzdC5sZW5ndGggPD0gMTtcbn1cbnZhciBMaW5rRXJyb3IgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMaW5rRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGlua0Vycm9yKG1lc3NhZ2UsIGxpbmspIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbWVzc2FnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubGluayA9IGxpbms7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIExpbmtFcnJvcjtcbn0oRXJyb3IpKTtcbnZhciBBcG9sbG9MaW5rID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcG9sbG9MaW5rKHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QpXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICAgIH1cbiAgICBBcG9sbG9MaW5rLmVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JzZXJ2YWJsZS5vZigpOyB9KTtcbiAgICB9O1xuICAgIEFwb2xsb0xpbmsuZnJvbSA9IGZ1bmN0aW9uIChsaW5rcykge1xuICAgICAgICBpZiAobGlua3MubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIEFwb2xsb0xpbmsuZW1wdHkoKTtcbiAgICAgICAgcmV0dXJuIGxpbmtzLm1hcCh0b0xpbmspLnJlZHVjZShmdW5jdGlvbiAoeCwgeSkgeyByZXR1cm4geC5jb25jYXQoeSk7IH0pO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5zcGxpdCA9IGZ1bmN0aW9uICh0ZXN0LCBsZWZ0LCByaWdodCkge1xuICAgICAgICB2YXIgbGVmdExpbmsgPSB0b0xpbmsobGVmdCk7XG4gICAgICAgIHZhciByaWdodExpbmsgPSB0b0xpbmsocmlnaHQgfHwgbmV3IEFwb2xsb0xpbmsocGFzc3Rocm91Z2gpKTtcbiAgICAgICAgaWYgKGlzVGVybWluYXRpbmcobGVmdExpbmspICYmIGlzVGVybWluYXRpbmcocmlnaHRMaW5rKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdChvcGVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgID8gbGVmdExpbmsucmVxdWVzdChvcGVyYXRpb24pIHx8IE9ic2VydmFibGUub2YoKVxuICAgICAgICAgICAgICAgICAgICA6IHJpZ2h0TGluay5yZXF1ZXN0KG9wZXJhdGlvbikgfHwgT2JzZXJ2YWJsZS5vZigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbiwgZm9yd2FyZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0KG9wZXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgPyBsZWZ0TGluay5yZXF1ZXN0KG9wZXJhdGlvbiwgZm9yd2FyZCkgfHwgT2JzZXJ2YWJsZS5vZigpXG4gICAgICAgICAgICAgICAgICAgIDogcmlnaHRMaW5rLnJlcXVlc3Qob3BlcmF0aW9uLCBmb3J3YXJkKSB8fCBPYnNlcnZhYmxlLm9mKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXBvbGxvTGluay5leGVjdXRlID0gZnVuY3Rpb24gKGxpbmssIG9wZXJhdGlvbikge1xuICAgICAgICByZXR1cm4gKGxpbmsucmVxdWVzdChjcmVhdGVPcGVyYXRpb24ob3BlcmF0aW9uLmNvbnRleHQsIHRyYW5zZm9ybU9wZXJhdGlvbih2YWxpZGF0ZU9wZXJhdGlvbihvcGVyYXRpb24pKSkpIHx8IE9ic2VydmFibGUub2YoKSk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLmNvbmNhdCA9IGZ1bmN0aW9uIChmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIHZhciBmaXJzdExpbmsgPSB0b0xpbmsoZmlyc3QpO1xuICAgICAgICBpZiAoaXNUZXJtaW5hdGluZyhmaXJzdExpbmspKSB7XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgfHwgaW52YXJpYW50Lndhcm4obmV3IExpbmtFcnJvcihcIllvdSBhcmUgY2FsbGluZyBjb25jYXQgb24gYSB0ZXJtaW5hdGluZyBsaW5rLCB3aGljaCB3aWxsIGhhdmUgbm8gZWZmZWN0XCIsIGZpcnN0TGluaykpO1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0TGluaztcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV4dExpbmsgPSB0b0xpbmsoc2Vjb25kKTtcbiAgICAgICAgaWYgKGlzVGVybWluYXRpbmcobmV4dExpbmspKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaXJzdExpbmsucmVxdWVzdChvcGVyYXRpb24sIGZ1bmN0aW9uIChvcCkgeyByZXR1cm4gbmV4dExpbmsucmVxdWVzdChvcCkgfHwgT2JzZXJ2YWJsZS5vZigpOyB9KSB8fCBPYnNlcnZhYmxlLm9mKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXBvbGxvTGluayhmdW5jdGlvbiAob3BlcmF0aW9uLCBmb3J3YXJkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChmaXJzdExpbmsucmVxdWVzdChvcGVyYXRpb24sIGZ1bmN0aW9uIChvcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dExpbmsucmVxdWVzdChvcCwgZm9yd2FyZCkgfHwgT2JzZXJ2YWJsZS5vZigpO1xuICAgICAgICAgICAgICAgIH0pIHx8IE9ic2VydmFibGUub2YoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXBvbGxvTGluay5wcm90b3R5cGUuc3BsaXQgPSBmdW5jdGlvbiAodGVzdCwgbGVmdCwgcmlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uY2F0KEFwb2xsb0xpbmsuc3BsaXQodGVzdCwgbGVmdCwgcmlnaHQgfHwgbmV3IEFwb2xsb0xpbmsocGFzc3Rocm91Z2gpKSk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICByZXR1cm4gQXBvbGxvTGluay5jb25jYXQodGhpcywgbmV4dCk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gKG9wZXJhdGlvbiwgZm9yd2FyZCkge1xuICAgICAgICB0aHJvdyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBuZXcgSW52YXJpYW50RXJyb3IoMjApIDogbmV3IEludmFyaWFudEVycm9yKCdyZXF1ZXN0IGlzIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgdGhyb3cgcmVhc29uO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5wcm90b3R5cGUuc2V0T25FcnJvciA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB0aGlzLm9uRXJyb3IgPSBmbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gQXBvbGxvTGluaztcbn0oKSk7XG5cbmV4cG9ydCB7IEFwb2xsb0xpbmsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFwb2xsb0xpbmsuanMubWFwXG4iLCJpbXBvcnQgeyBBcG9sbG9MaW5rIH0gZnJvbSAnLi9BcG9sbG9MaW5rLmpzJztcblxudmFyIGNvbmNhdCA9IEFwb2xsb0xpbmsuY29uY2F0O1xuXG5leHBvcnQgeyBjb25jYXQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbmNhdC5qcy5tYXBcbiIsImltcG9ydCB7IEFwb2xsb0xpbmsgfSBmcm9tICcuL0Fwb2xsb0xpbmsuanMnO1xuXG52YXIgZW1wdHkgPSBBcG9sbG9MaW5rLmVtcHR5O1xuXG5leHBvcnQgeyBlbXB0eSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1wdHkuanMubWFwXG4iLCJpbXBvcnQgeyBBcG9sbG9MaW5rIH0gZnJvbSAnLi9BcG9sbG9MaW5rLmpzJztcblxudmFyIGV4ZWN1dGUgPSBBcG9sbG9MaW5rLmV4ZWN1dGU7XG5cbmV4cG9ydCB7IGV4ZWN1dGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4ZWN1dGUuanMubWFwXG4iLCJpbXBvcnQgeyBBcG9sbG9MaW5rIH0gZnJvbSAnLi9BcG9sbG9MaW5rLmpzJztcblxudmFyIGZyb20gPSBBcG9sbG9MaW5rLmZyb207XG5cbmV4cG9ydCB7IGZyb20gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyb20uanMubWFwXG4iLCJpbXBvcnQgeyBBcG9sbG9MaW5rIH0gZnJvbSAnLi9BcG9sbG9MaW5rLmpzJztcblxudmFyIHNwbGl0ID0gQXBvbGxvTGluay5zcGxpdDtcblxuZXhwb3J0IHsgc3BsaXQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwbGl0LmpzLm1hcFxuIiwiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgQXBvbGxvTGluayB9IGZyb20gJy4uL2NvcmUvQXBvbGxvTGluay5qcyc7XG5pbXBvcnQgeyBjcmVhdGVIdHRwTGluayB9IGZyb20gJy4vY3JlYXRlSHR0cExpbmsuanMnO1xuXG52YXIgSHR0cExpbmsgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIdHRwTGluaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIdHRwTGluayhvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNyZWF0ZUh0dHBMaW5rKG9wdGlvbnMpLnJlcXVlc3QpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBIdHRwTGluaztcbn0oQXBvbGxvTGluaykpO1xuXG5leHBvcnQgeyBIdHRwTGluayB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SHR0cExpbmsuanMubWFwXG4iLCJpbXBvcnQgeyBJbnZhcmlhbnRFcnJvciB9IGZyb20gJ3RzLWludmFyaWFudCc7XG5cbnZhciBjaGVja0ZldGNoZXIgPSBmdW5jdGlvbiAoZmV0Y2hlcikge1xuICAgIGlmICghZmV0Y2hlciAmJiB0eXBlb2YgZmV0Y2ggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IG5ldyBJbnZhcmlhbnRFcnJvcigzNSkgOiBuZXcgSW52YXJpYW50RXJyb3IoXCJcXG5cXFwiZmV0Y2hcXFwiIGhhcyBub3QgYmVlbiBmb3VuZCBnbG9iYWxseSBhbmQgbm8gZmV0Y2hlciBoYXMgYmVlbiBjb25maWd1cmVkLiBUbyBmaXggdGhpcywgaW5zdGFsbCBhIGZldGNoIHBhY2thZ2UgKGxpa2UgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvY3Jvc3MtZmV0Y2gpLCBpbnN0YW50aWF0ZSB0aGUgZmV0Y2hlciwgYW5kIHBhc3MgaXQgaW50byB5b3VyIEh0dHBMaW5rIGNvbnN0cnVjdG9yLiBGb3IgZXhhbXBsZTpcXG5cXG5pbXBvcnQgZmV0Y2ggZnJvbSAnY3Jvc3MtZmV0Y2gnO1xcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSHR0cExpbmsgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XFxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XFxuICBsaW5rOiBuZXcgSHR0cExpbmsoeyB1cmk6ICcvZ3JhcGhxbCcsIGZldGNoIH0pXFxufSk7XFxuICAgIFwiKTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBjaGVja0ZldGNoZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNoZWNrRmV0Y2hlci5qcy5tYXBcbiIsImltcG9ydCB7IF9fcmVzdCwgX19hc3NpZ24gfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICd6ZW4tb2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3N5bWJvbC1vYnNlcnZhYmxlJztcbmltcG9ydCB7IEFwb2xsb0xpbmsgfSBmcm9tICcuLi9jb3JlL0Fwb2xsb0xpbmsuanMnO1xuaW1wb3J0IHsgc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIgfSBmcm9tICcuL3NlcmlhbGl6ZUZldGNoUGFyYW1ldGVyLmpzJztcbmltcG9ydCB7IHNlbGVjdFVSSSB9IGZyb20gJy4vc2VsZWN0VVJJLmpzJztcbmltcG9ydCB7IHBhcnNlQW5kQ2hlY2tIdHRwUmVzcG9uc2UgfSBmcm9tICcuL3BhcnNlQW5kQ2hlY2tIdHRwUmVzcG9uc2UuanMnO1xuaW1wb3J0IHsgY2hlY2tGZXRjaGVyIH0gZnJvbSAnLi9jaGVja0ZldGNoZXIuanMnO1xuaW1wb3J0IHsgc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5LCBmYWxsYmFja0h0dHBDb25maWcgfSBmcm9tICcuL3NlbGVjdEh0dHBPcHRpb25zQW5kQm9keS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVTaWduYWxJZlN1cHBvcnRlZCB9IGZyb20gJy4vY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQuanMnO1xuaW1wb3J0IHsgcmV3cml0ZVVSSUZvckdFVCB9IGZyb20gJy4vcmV3cml0ZVVSSUZvckdFVC5qcyc7XG5pbXBvcnQgeyBmcm9tRXJyb3IgfSBmcm9tICcuLi91dGlscy9mcm9tRXJyb3IuanMnO1xuXG52YXIgY3JlYXRlSHR0cExpbmsgPSBmdW5jdGlvbiAobGlua09wdGlvbnMpIHtcbiAgICBpZiAobGlua09wdGlvbnMgPT09IHZvaWQgMCkgeyBsaW5rT3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gbGlua09wdGlvbnMudXJpLCB1cmkgPSBfYSA9PT0gdm9pZCAwID8gJy9ncmFwaHFsJyA6IF9hLCBmZXRjaGVyID0gbGlua09wdGlvbnMuZmV0Y2gsIGluY2x1ZGVFeHRlbnNpb25zID0gbGlua09wdGlvbnMuaW5jbHVkZUV4dGVuc2lvbnMsIHVzZUdFVEZvclF1ZXJpZXMgPSBsaW5rT3B0aW9ucy51c2VHRVRGb3JRdWVyaWVzLCByZXF1ZXN0T3B0aW9ucyA9IF9fcmVzdChsaW5rT3B0aW9ucywgW1widXJpXCIsIFwiZmV0Y2hcIiwgXCJpbmNsdWRlRXh0ZW5zaW9uc1wiLCBcInVzZUdFVEZvclF1ZXJpZXNcIl0pO1xuICAgIGNoZWNrRmV0Y2hlcihmZXRjaGVyKTtcbiAgICBpZiAoIWZldGNoZXIpIHtcbiAgICAgICAgZmV0Y2hlciA9IGZldGNoO1xuICAgIH1cbiAgICB2YXIgbGlua0NvbmZpZyA9IHtcbiAgICAgICAgaHR0cDogeyBpbmNsdWRlRXh0ZW5zaW9uczogaW5jbHVkZUV4dGVuc2lvbnMgfSxcbiAgICAgICAgb3B0aW9uczogcmVxdWVzdE9wdGlvbnMuZmV0Y2hPcHRpb25zLFxuICAgICAgICBjcmVkZW50aWFsczogcmVxdWVzdE9wdGlvbnMuY3JlZGVudGlhbHMsXG4gICAgICAgIGhlYWRlcnM6IHJlcXVlc3RPcHRpb25zLmhlYWRlcnMsXG4gICAgfTtcbiAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbikge1xuICAgICAgICB2YXIgY2hvc2VuVVJJID0gc2VsZWN0VVJJKG9wZXJhdGlvbiwgdXJpKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBvcGVyYXRpb24uZ2V0Q29udGV4dCgpO1xuICAgICAgICB2YXIgY2xpZW50QXdhcmVuZXNzSGVhZGVycyA9IHt9O1xuICAgICAgICBpZiAoY29udGV4dC5jbGllbnRBd2FyZW5lc3MpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IGNvbnRleHQuY2xpZW50QXdhcmVuZXNzLCBuYW1lXzEgPSBfYS5uYW1lLCB2ZXJzaW9uID0gX2EudmVyc2lvbjtcbiAgICAgICAgICAgIGlmIChuYW1lXzEpIHtcbiAgICAgICAgICAgICAgICBjbGllbnRBd2FyZW5lc3NIZWFkZXJzWydhcG9sbG9ncmFwaHFsLWNsaWVudC1uYW1lJ10gPSBuYW1lXzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmVyc2lvbikge1xuICAgICAgICAgICAgICAgIGNsaWVudEF3YXJlbmVzc0hlYWRlcnNbJ2Fwb2xsb2dyYXBocWwtY2xpZW50LXZlcnNpb24nXSA9IHZlcnNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbnRleHRIZWFkZXJzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGNsaWVudEF3YXJlbmVzc0hlYWRlcnMpLCBjb250ZXh0LmhlYWRlcnMpO1xuICAgICAgICB2YXIgY29udGV4dENvbmZpZyA9IHtcbiAgICAgICAgICAgIGh0dHA6IGNvbnRleHQuaHR0cCxcbiAgICAgICAgICAgIG9wdGlvbnM6IGNvbnRleHQuZmV0Y2hPcHRpb25zLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IGNvbnRleHQuY3JlZGVudGlhbHMsXG4gICAgICAgICAgICBoZWFkZXJzOiBjb250ZXh0SGVhZGVycyxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIF9iID0gc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5KG9wZXJhdGlvbiwgZmFsbGJhY2tIdHRwQ29uZmlnLCBsaW5rQ29uZmlnLCBjb250ZXh0Q29uZmlnKSwgb3B0aW9ucyA9IF9iLm9wdGlvbnMsIGJvZHkgPSBfYi5ib2R5O1xuICAgICAgICB2YXIgY29udHJvbGxlcjtcbiAgICAgICAgaWYgKCFvcHRpb25zLnNpZ25hbCkge1xuICAgICAgICAgICAgdmFyIF9jID0gY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQoKSwgX2NvbnRyb2xsZXIgPSBfYy5jb250cm9sbGVyLCBzaWduYWwgPSBfYy5zaWduYWw7XG4gICAgICAgICAgICBjb250cm9sbGVyID0gX2NvbnRyb2xsZXI7XG4gICAgICAgICAgICBpZiAoY29udHJvbGxlcilcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNpZ25hbCA9IHNpZ25hbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVmaW5pdGlvbklzTXV0YXRpb24gPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nICYmIGQub3BlcmF0aW9uID09PSAnbXV0YXRpb24nO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodXNlR0VURm9yUXVlcmllcyAmJlxuICAgICAgICAgICAgIW9wZXJhdGlvbi5xdWVyeS5kZWZpbml0aW9ucy5zb21lKGRlZmluaXRpb25Jc011dGF0aW9uKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICB2YXIgX2QgPSByZXdyaXRlVVJJRm9yR0VUKGNob3NlblVSSSwgYm9keSksIG5ld1VSSSA9IF9kLm5ld1VSSSwgcGFyc2VFcnJvciA9IF9kLnBhcnNlRXJyb3I7XG4gICAgICAgICAgICBpZiAocGFyc2VFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmcm9tRXJyb3IocGFyc2VFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaG9zZW5VUkkgPSBuZXdVUkk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IHNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyKGJvZHksICdQYXlsb2FkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAocGFyc2VFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmcm9tRXJyb3IocGFyc2VFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgZmV0Y2hlcihjaG9zZW5VUkksIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnNldENvbnRleHQoeyByZXNwb25zZTogcmVzcG9uc2UgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihwYXJzZUFuZENoZWNrSHR0cFJlc3BvbnNlKG9wZXJhdGlvbikpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLnJlc3VsdCAmJiBlcnIucmVzdWx0LmVycm9ycyAmJiBlcnIucmVzdWx0LmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChlcnIucmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlcilcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVIdHRwTGluayB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlSHR0cExpbmsuanMubWFwXG4iLCJ2YXIgY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBBYm9ydENvbnRyb2xsZXIgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICByZXR1cm4geyBjb250cm9sbGVyOiBmYWxzZSwgc2lnbmFsOiBmYWxzZSB9O1xuICAgIHZhciBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIHZhciBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDtcbiAgICByZXR1cm4geyBjb250cm9sbGVyOiBjb250cm9sbGVyLCBzaWduYWw6IHNpZ25hbCB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZVNpZ25hbElmU3VwcG9ydGVkLmpzLm1hcFxuIiwiaW1wb3J0IHsgdGhyb3dTZXJ2ZXJFcnJvciB9IGZyb20gJy4uL3V0aWxzL3Rocm93U2VydmVyRXJyb3IuanMnO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gcGFyc2VBbmRDaGVja0h0dHBSZXNwb25zZShvcGVyYXRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgLnRleHQoKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoYm9keVRleHQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGJvZHlUZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB2YXIgcGFyc2VFcnJvciA9IGVycjtcbiAgICAgICAgICAgIHBhcnNlRXJyb3IubmFtZSA9ICdTZXJ2ZXJQYXJzZUVycm9yJztcbiAgICAgICAgICAgIHBhcnNlRXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgIHBhcnNlRXJyb3Iuc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgICAgIHBhcnNlRXJyb3IuYm9keVRleHQgPSBib2R5VGV4dDtcbiAgICAgICAgICAgIHRocm93IHBhcnNlRXJyb3I7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgICAgICB0aHJvd1NlcnZlckVycm9yKHJlc3BvbnNlLCByZXN1bHQsIFwiUmVzcG9uc2Ugbm90IHN1Y2Nlc3NmdWw6IFJlY2VpdmVkIHN0YXR1cyBjb2RlIFwiICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzdWx0KSAmJlxuICAgICAgICAgICAgIWhhc093blByb3BlcnR5LmNhbGwocmVzdWx0LCAnZGF0YScpICYmXG4gICAgICAgICAgICAhaGFzT3duUHJvcGVydHkuY2FsbChyZXN1bHQsICdlcnJvcnMnKSkge1xuICAgICAgICAgICAgdGhyb3dTZXJ2ZXJFcnJvcihyZXNwb25zZSwgcmVzdWx0LCBcIlNlcnZlciByZXNwb25zZSB3YXMgbWlzc2luZyBmb3IgcXVlcnkgJ1wiICsgKEFycmF5LmlzQXJyYXkob3BlcmF0aW9ucylcbiAgICAgICAgICAgICAgICA/IG9wZXJhdGlvbnMubWFwKGZ1bmN0aW9uIChvcCkgeyByZXR1cm4gb3Aub3BlcmF0aW9uTmFtZTsgfSlcbiAgICAgICAgICAgICAgICA6IG9wZXJhdGlvbnMub3BlcmF0aW9uTmFtZSkgKyBcIicuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7IH07XG59XG5cbmV4cG9ydCB7IHBhcnNlQW5kQ2hlY2tIdHRwUmVzcG9uc2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlQW5kQ2hlY2tIdHRwUmVzcG9uc2UuanMubWFwXG4iLCJpbXBvcnQgeyBzZXJpYWxpemVGZXRjaFBhcmFtZXRlciB9IGZyb20gJy4vc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIuanMnO1xuXG5mdW5jdGlvbiByZXdyaXRlVVJJRm9yR0VUKGNob3NlblVSSSwgYm9keSkge1xuICAgIHZhciBxdWVyeVBhcmFtcyA9IFtdO1xuICAgIHZhciBhZGRRdWVyeVBhcmFtID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgcXVlcnlQYXJhbXMucHVzaChrZXkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKCdxdWVyeScgaW4gYm9keSkge1xuICAgICAgICBhZGRRdWVyeVBhcmFtKCdxdWVyeScsIGJvZHkucXVlcnkpO1xuICAgIH1cbiAgICBpZiAoYm9keS5vcGVyYXRpb25OYW1lKSB7XG4gICAgICAgIGFkZFF1ZXJ5UGFyYW0oJ29wZXJhdGlvbk5hbWUnLCBib2R5Lm9wZXJhdGlvbk5hbWUpO1xuICAgIH1cbiAgICBpZiAoYm9keS52YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIHNlcmlhbGl6ZWRWYXJpYWJsZXMgPSB2b2lkIDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkVmFyaWFibGVzID0gc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIoYm9keS52YXJpYWJsZXMsICdWYXJpYWJsZXMgbWFwJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHBhcnNlRXJyb3I6IHBhcnNlRXJyb3IgfTtcbiAgICAgICAgfVxuICAgICAgICBhZGRRdWVyeVBhcmFtKCd2YXJpYWJsZXMnLCBzZXJpYWxpemVkVmFyaWFibGVzKTtcbiAgICB9XG4gICAgaWYgKGJvZHkuZXh0ZW5zaW9ucykge1xuICAgICAgICB2YXIgc2VyaWFsaXplZEV4dGVuc2lvbnMgPSB2b2lkIDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkRXh0ZW5zaW9ucyA9IHNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyKGJvZHkuZXh0ZW5zaW9ucywgJ0V4dGVuc2lvbnMgbWFwJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHBhcnNlRXJyb3I6IHBhcnNlRXJyb3IgfTtcbiAgICAgICAgfVxuICAgICAgICBhZGRRdWVyeVBhcmFtKCdleHRlbnNpb25zJywgc2VyaWFsaXplZEV4dGVuc2lvbnMpO1xuICAgIH1cbiAgICB2YXIgZnJhZ21lbnQgPSAnJywgcHJlRnJhZ21lbnQgPSBjaG9zZW5VUkk7XG4gICAgdmFyIGZyYWdtZW50U3RhcnQgPSBjaG9zZW5VUkkuaW5kZXhPZignIycpO1xuICAgIGlmIChmcmFnbWVudFN0YXJ0ICE9PSAtMSkge1xuICAgICAgICBmcmFnbWVudCA9IGNob3NlblVSSS5zdWJzdHIoZnJhZ21lbnRTdGFydCk7XG4gICAgICAgIHByZUZyYWdtZW50ID0gY2hvc2VuVVJJLnN1YnN0cigwLCBmcmFnbWVudFN0YXJ0KTtcbiAgICB9XG4gICAgdmFyIHF1ZXJ5UGFyYW1zUHJlZml4ID0gcHJlRnJhZ21lbnQuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJztcbiAgICB2YXIgbmV3VVJJID0gcHJlRnJhZ21lbnQgKyBxdWVyeVBhcmFtc1ByZWZpeCArIHF1ZXJ5UGFyYW1zLmpvaW4oJyYnKSArIGZyYWdtZW50O1xuICAgIHJldHVybiB7IG5ld1VSSTogbmV3VVJJIH07XG59XG5cbmV4cG9ydCB7IHJld3JpdGVVUklGb3JHRVQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJld3JpdGVVUklGb3JHRVQuanMubWFwXG4iLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gJ3RzbGliJztcbmltcG9ydCB7IHByaW50IH0gZnJvbSAnZ3JhcGhxbC9sYW5ndWFnZS9wcmludGVyJztcblxudmFyIGRlZmF1bHRIdHRwT3B0aW9ucyA9IHtcbiAgICBpbmNsdWRlUXVlcnk6IHRydWUsXG4gICAgaW5jbHVkZUV4dGVuc2lvbnM6IGZhbHNlLFxufTtcbnZhciBkZWZhdWx0SGVhZGVycyA9IHtcbiAgICBhY2NlcHQ6ICcqLyonLFxuICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG59O1xudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxufTtcbnZhciBmYWxsYmFja0h0dHBDb25maWcgPSB7XG4gICAgaHR0cDogZGVmYXVsdEh0dHBPcHRpb25zLFxuICAgIGhlYWRlcnM6IGRlZmF1bHRIZWFkZXJzLFxuICAgIG9wdGlvbnM6IGRlZmF1bHRPcHRpb25zLFxufTtcbnZhciBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHkgPSBmdW5jdGlvbiAob3BlcmF0aW9uLCBmYWxsYmFja0NvbmZpZykge1xuICAgIHZhciBjb25maWdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgY29uZmlnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIG9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZmFsbGJhY2tDb25maWcub3B0aW9ucyksIHsgaGVhZGVyczogZmFsbGJhY2tDb25maWcuaGVhZGVycywgY3JlZGVudGlhbHM6IGZhbGxiYWNrQ29uZmlnLmNyZWRlbnRpYWxzIH0pO1xuICAgIHZhciBodHRwID0gZmFsbGJhY2tDb25maWcuaHR0cCB8fCB7fTtcbiAgICBjb25maWdzLmZvckVhY2goZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICBvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCBjb25maWcub3B0aW9ucyksIHsgaGVhZGVyczogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMuaGVhZGVycyksIGNvbmZpZy5oZWFkZXJzKSB9KTtcbiAgICAgICAgaWYgKGNvbmZpZy5jcmVkZW50aWFscylcbiAgICAgICAgICAgIG9wdGlvbnMuY3JlZGVudGlhbHMgPSBjb25maWcuY3JlZGVudGlhbHM7XG4gICAgICAgIGh0dHAgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaHR0cCksIGNvbmZpZy5odHRwKTtcbiAgICB9KTtcbiAgICB2YXIgb3BlcmF0aW9uTmFtZSA9IG9wZXJhdGlvbi5vcGVyYXRpb25OYW1lLCBleHRlbnNpb25zID0gb3BlcmF0aW9uLmV4dGVuc2lvbnMsIHZhcmlhYmxlcyA9IG9wZXJhdGlvbi52YXJpYWJsZXMsIHF1ZXJ5ID0gb3BlcmF0aW9uLnF1ZXJ5O1xuICAgIHZhciBib2R5ID0geyBvcGVyYXRpb25OYW1lOiBvcGVyYXRpb25OYW1lLCB2YXJpYWJsZXM6IHZhcmlhYmxlcyB9O1xuICAgIGlmIChodHRwLmluY2x1ZGVFeHRlbnNpb25zKVxuICAgICAgICBib2R5LmV4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xuICAgIGlmIChodHRwLmluY2x1ZGVRdWVyeSlcbiAgICAgICAgYm9keS5xdWVyeSA9IHByaW50KHF1ZXJ5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICBib2R5OiBib2R5LFxuICAgIH07XG59O1xuXG5leHBvcnQgeyBmYWxsYmFja0h0dHBDb25maWcsIHNlbGVjdEh0dHBPcHRpb25zQW5kQm9keSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5LmpzLm1hcFxuIiwidmFyIHNlbGVjdFVSSSA9IGZ1bmN0aW9uIChvcGVyYXRpb24sIGZhbGxiYWNrVVJJKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcGVyYXRpb24uZ2V0Q29udGV4dCgpO1xuICAgIHZhciBjb250ZXh0VVJJID0gY29udGV4dC51cmk7XG4gICAgaWYgKGNvbnRleHRVUkkpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHRVUkk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBmYWxsYmFja1VSSSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZmFsbGJhY2tVUkkob3BlcmF0aW9uKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxsYmFja1VSSSB8fCAnL2dyYXBocWwnO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IHNlbGVjdFVSSSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2VsZWN0VVJJLmpzLm1hcFxuIiwiaW1wb3J0IHsgSW52YXJpYW50RXJyb3IgfSBmcm9tICd0cy1pbnZhcmlhbnQnO1xuXG52YXIgc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIgPSBmdW5jdGlvbiAocCwgbGFiZWwpIHtcbiAgICB2YXIgc2VyaWFsaXplZDtcbiAgICB0cnkge1xuICAgICAgICBzZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkocCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHZhciBwYXJzZUVycm9yID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gbmV3IEludmFyaWFudEVycm9yKDM0KSA6IG5ldyBJbnZhcmlhbnRFcnJvcihcIk5ldHdvcmsgcmVxdWVzdCBmYWlsZWQuIFwiICsgbGFiZWwgKyBcIiBpcyBub3Qgc2VyaWFsaXphYmxlOiBcIiArIGUubWVzc2FnZSk7XG4gICAgICAgIHBhcnNlRXJyb3IucGFyc2VFcnJvciA9IGU7XG4gICAgICAgIHRocm93IHBhcnNlRXJyb3I7XG4gICAgfVxuICAgIHJldHVybiBzZXJpYWxpemVkO1xufTtcblxuZXhwb3J0IHsgc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyLmpzLm1hcFxuIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tICd0c2xpYic7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wZXJhdGlvbihzdGFydGluZywgb3BlcmF0aW9uKSB7XG4gICAgdmFyIGNvbnRleHQgPSBfX2Fzc2lnbih7fSwgc3RhcnRpbmcpO1xuICAgIHZhciBzZXRDb250ZXh0ID0gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGNvbnRleHQpLCBuZXh0KGNvbnRleHQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29udGV4dCksIG5leHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgZ2V0Q29udGV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIChfX2Fzc2lnbih7fSwgY29udGV4dCkpOyB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcGVyYXRpb24sICdzZXRDb250ZXh0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHNldENvbnRleHQsXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9wZXJhdGlvbiwgJ2dldENvbnRleHQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogZ2V0Q29udGV4dCxcbiAgICB9KTtcbiAgICByZXR1cm4gb3BlcmF0aW9uO1xufVxuXG5leHBvcnQgeyBjcmVhdGVPcGVyYXRpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZU9wZXJhdGlvbi5qcy5tYXBcbiIsImltcG9ydCBPYnNlcnZhYmxlIGZyb20gJ3plbi1vYnNlcnZhYmxlJztcbmltcG9ydCAnc3ltYm9sLW9ic2VydmFibGUnO1xuXG5mdW5jdGlvbiBmcm9tRXJyb3IoZXJyb3JWYWx1ZSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3JWYWx1ZSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGZyb21FcnJvciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbUVycm9yLmpzLm1hcFxuIiwiaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnemVuLW9ic2VydmFibGUnO1xuaW1wb3J0ICdzeW1ib2wtb2JzZXJ2YWJsZSc7XG5cbmZ1bmN0aW9uIGZyb21Qcm9taXNlKHByb21pc2UpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHByb21pc2VcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgZnJvbVByb21pc2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyb21Qcm9taXNlLmpzLm1hcFxuIiwidmFyIHRocm93U2VydmVyRXJyb3IgPSBmdW5jdGlvbiAocmVzcG9uc2UsIHJlc3VsdCwgbWVzc2FnZSkge1xuICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICBlcnJvci5uYW1lID0gJ1NlcnZlckVycm9yJztcbiAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIGVycm9yLnN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgZXJyb3IucmVzdWx0ID0gcmVzdWx0O1xuICAgIHRocm93IGVycm9yO1xufTtcblxuZXhwb3J0IHsgdGhyb3dTZXJ2ZXJFcnJvciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGhyb3dTZXJ2ZXJFcnJvci5qcy5tYXBcbiIsImltcG9ydCB7IGludmFyaWFudCB9IGZyb20gJ3RzLWludmFyaWFudCc7XG5cbmZ1bmN0aW9uIHRvUHJvbWlzZShvYnNlcnZhYmxlKSB7XG4gICAgdmFyIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgfHwgaW52YXJpYW50Lndhcm4oXCJQcm9taXNlIFdyYXBwZXIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSByZXN1bHRzIGZyb20gT2JzZXJ2YWJsZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyB0b1Byb21pc2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvUHJvbWlzZS5qcy5tYXBcbiIsImltcG9ydCB7IGdldE9wZXJhdGlvbk5hbWUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ3JhcGhxbC9nZXRGcm9tQVNULmpzJztcblxuZnVuY3Rpb24gdHJhbnNmb3JtT3BlcmF0aW9uKG9wZXJhdGlvbikge1xuICAgIHZhciB0cmFuc2Zvcm1lZE9wZXJhdGlvbiA9IHtcbiAgICAgICAgdmFyaWFibGVzOiBvcGVyYXRpb24udmFyaWFibGVzIHx8IHt9LFxuICAgICAgICBleHRlbnNpb25zOiBvcGVyYXRpb24uZXh0ZW5zaW9ucyB8fCB7fSxcbiAgICAgICAgb3BlcmF0aW9uTmFtZTogb3BlcmF0aW9uLm9wZXJhdGlvbk5hbWUsXG4gICAgICAgIHF1ZXJ5OiBvcGVyYXRpb24ucXVlcnksXG4gICAgfTtcbiAgICBpZiAoIXRyYW5zZm9ybWVkT3BlcmF0aW9uLm9wZXJhdGlvbk5hbWUpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRPcGVyYXRpb24ub3BlcmF0aW9uTmFtZSA9XG4gICAgICAgICAgICB0eXBlb2YgdHJhbnNmb3JtZWRPcGVyYXRpb24ucXVlcnkgIT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBnZXRPcGVyYXRpb25OYW1lKHRyYW5zZm9ybWVkT3BlcmF0aW9uLnF1ZXJ5KSB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA6ICcnO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNmb3JtZWRPcGVyYXRpb247XG59XG5cbmV4cG9ydCB7IHRyYW5zZm9ybU9wZXJhdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNmb3JtT3BlcmF0aW9uLmpzLm1hcFxuIiwiaW1wb3J0IHsgSW52YXJpYW50RXJyb3IgfSBmcm9tICd0cy1pbnZhcmlhbnQnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU9wZXJhdGlvbihvcGVyYXRpb24pIHtcbiAgICB2YXIgT1BFUkFUSU9OX0ZJRUxEUyA9IFtcbiAgICAgICAgJ3F1ZXJ5JyxcbiAgICAgICAgJ29wZXJhdGlvbk5hbWUnLFxuICAgICAgICAndmFyaWFibGVzJyxcbiAgICAgICAgJ2V4dGVuc2lvbnMnLFxuICAgICAgICAnY29udGV4dCcsXG4gICAgXTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMob3BlcmF0aW9uKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcbiAgICAgICAgaWYgKE9QRVJBVElPTl9GSUVMRFMuaW5kZXhPZihrZXkpIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gbmV3IEludmFyaWFudEVycm9yKDQzKSA6IG5ldyBJbnZhcmlhbnRFcnJvcihcImlsbGVnYWwgYXJndW1lbnQ6IFwiICsga2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3BlcmF0aW9uO1xufVxuXG5leHBvcnQgeyB2YWxpZGF0ZU9wZXJhdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmFsaWRhdGVPcGVyYXRpb24uanMubWFwXG4iLCJpbXBvcnQgeyBpbnZhcmlhbnQgfSBmcm9tICd0cy1pbnZhcmlhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEFwb2xsb0NvbnRleHQgfSBmcm9tICcuL0Fwb2xsb0NvbnRleHQuanMnO1xuXG52YXIgQXBvbGxvQ29uc3VtZXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgQXBvbGxvQ29udGV4dCA9IGdldEFwb2xsb0NvbnRleHQoKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBcG9sbG9Db250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoY29udGV4dCAmJiBjb250ZXh0LmNsaWVudCwgNCkgOiBpbnZhcmlhbnQoY29udGV4dCAmJiBjb250ZXh0LmNsaWVudCwgJ0NvdWxkIG5vdCBmaW5kIFwiY2xpZW50XCIgaW4gdGhlIGNvbnRleHQgb2YgQXBvbGxvQ29uc3VtZXIuICcgK1xuICAgICAgICAgICAgJ1dyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGFuIDxBcG9sbG9Qcm92aWRlcj4uJyk7XG4gICAgICAgIHJldHVybiBwcm9wcy5jaGlsZHJlbihjb250ZXh0LmNsaWVudCk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgeyBBcG9sbG9Db25zdW1lciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXBvbGxvQ29uc3VtZXIuanMubWFwXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgY29udGV4dFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvciA/XG4gICAgU3ltYm9sLmZvcignX19BUE9MTE9fQ09OVEVYVF9fJykgOlxuICAgICdfX0FQT0xMT19DT05URVhUX18nO1xuZnVuY3Rpb24gcmVzZXRBcG9sbG9Db250ZXh0KCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFjdCwgY29udGV4dFN5bWJvbCwge1xuICAgICAgICB2YWx1ZTogUmVhY3QuY3JlYXRlQ29udGV4dCh7fSksXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldEFwb2xsb0NvbnRleHQoKSB7XG4gICAgaWYgKCFSZWFjdFtjb250ZXh0U3ltYm9sXSkge1xuICAgICAgICByZXNldEFwb2xsb0NvbnRleHQoKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0W2NvbnRleHRTeW1ib2xdO1xufVxuXG5leHBvcnQgeyBnZXRBcG9sbG9Db250ZXh0LCByZXNldEFwb2xsb0NvbnRleHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFwb2xsb0NvbnRleHQuanMubWFwXG4iLCJpbXBvcnQgeyBpbnZhcmlhbnQgfSBmcm9tICd0cy1pbnZhcmlhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEFwb2xsb0NvbnRleHQgfSBmcm9tICcuL0Fwb2xsb0NvbnRleHQuanMnO1xuXG52YXIgQXBvbGxvUHJvdmlkZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xpZW50ID0gX2EuY2xpZW50LCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuO1xuICAgIHZhciBBcG9sbG9Db250ZXh0ID0gZ2V0QXBvbGxvQ29udGV4dCgpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEFwb2xsb0NvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHt9OyB9XG4gICAgICAgIGlmIChjbGllbnQgJiYgY29udGV4dC5jbGllbnQgIT09IGNsaWVudCkge1xuICAgICAgICAgICAgY29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHsgY2xpZW50OiBjbGllbnQgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGNvbnRleHQuY2xpZW50LCA1KSA6IGludmFyaWFudChjb250ZXh0LmNsaWVudCwgJ0Fwb2xsb1Byb3ZpZGVyIHdhcyBub3QgcGFzc2VkIGEgY2xpZW50IGluc3RhbmNlLiBNYWtlICcgK1xuICAgICAgICAgICAgJ3N1cmUgeW91IHBhc3MgaW4geW91ciBjbGllbnQgdmlhIHRoZSBcImNsaWVudFwiIHByb3AuJyk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChBcG9sbG9Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0IH0sIGNoaWxkcmVuKSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgeyBBcG9sbG9Qcm92aWRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXBvbGxvUHJvdmlkZXIuanMubWFwXG4iLCJpbXBvcnQgeyBfX2V4dGVuZHMsIF9fYXNzaWduIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgZXF1YWwgfSBmcm9tICdAd3J5L2VxdWFsaXR5JztcbmltcG9ydCB7IEFwb2xsb0Vycm9yIH0gZnJvbSAnLi4vLi4vZXJyb3JzL0Fwb2xsb0Vycm9yLmpzJztcbmltcG9ydCB7IERvY3VtZW50VHlwZSB9IGZyb20gJy4uL3BhcnNlci9wYXJzZXIuanMnO1xuaW1wb3J0IHsgT3BlcmF0aW9uRGF0YSB9IGZyb20gJy4vT3BlcmF0aW9uRGF0YS5qcyc7XG5cbnZhciBNdXRhdGlvbkRhdGEgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNdXRhdGlvbkRhdGEsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTXV0YXRpb25EYXRhKF9hKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gX2Eub3B0aW9ucywgY29udGV4dCA9IF9hLmNvbnRleHQsIHJlc3VsdCA9IF9hLnJlc3VsdCwgc2V0UmVzdWx0ID0gX2Euc2V0UmVzdWx0O1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zLCBjb250ZXh0KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5ydW5NdXRhdGlvbiA9IGZ1bmN0aW9uIChtdXRhdGlvbkZ1bmN0aW9uT3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uRnVuY3Rpb25PcHRpb25zID09PSB2b2lkIDApIHsgbXV0YXRpb25GdW5jdGlvbk9wdGlvbnMgPSB7fTsgfVxuICAgICAgICAgICAgX3RoaXMub25NdXRhdGlvblN0YXJ0KCk7XG4gICAgICAgICAgICB2YXIgbXV0YXRpb25JZCA9IF90aGlzLmdlbmVyYXRlTmV3TXV0YXRpb25JZCgpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm11dGF0ZShtdXRhdGlvbkZ1bmN0aW9uT3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbk11dGF0aW9uQ29tcGxldGVkKHJlc3BvbnNlLCBtdXRhdGlvbklkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbk11dGF0aW9uRXJyb3IoZXJyb3IsIG11dGF0aW9uSWQpO1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuZ2V0T3B0aW9ucygpLm9uRXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnZlcmlmeURvY3VtZW50VHlwZShvcHRpb25zLm11dGF0aW9uLCBEb2N1bWVudFR5cGUuTXV0YXRpb24pO1xuICAgICAgICBfdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIF90aGlzLnNldFJlc3VsdCA9IHNldFJlc3VsdDtcbiAgICAgICAgX3RoaXMubW9zdFJlY2VudE11dGF0aW9uSWQgPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnZlcmlmeURvY3VtZW50VHlwZSh0aGlzLmdldE9wdGlvbnMoKS5tdXRhdGlvbiwgRG9jdW1lbnRUeXBlLk11dGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHRoaXMucnVuTXV0YXRpb24sXG4gICAgICAgICAgICBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzdWx0KSwgeyBjbGllbnQ6IHRoaXMucmVmcmVzaENsaWVudCgpLmNsaWVudCB9KVxuICAgICAgICBdO1xuICAgIH07XG4gICAgTXV0YXRpb25EYXRhLnByb3RvdHlwZS5hZnRlckV4ZWN1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5tb3VudC5iaW5kKHRoaXMpO1xuICAgIH07XG4gICAgTXV0YXRpb25EYXRhLnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgTXV0YXRpb25EYXRhLnByb3RvdHlwZS5tdXRhdGUgPSBmdW5jdGlvbiAobXV0YXRpb25GdW5jdGlvbk9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaENsaWVudCgpLmNsaWVudC5tdXRhdGUoX19hc3NpZ24oX19hc3NpZ24oe30sICh0aGlzLmdldE9wdGlvbnMoKSB8fCB7fSkpLCAobXV0YXRpb25GdW5jdGlvbk9wdGlvbnMgfHwge30pKSk7XG4gICAgfTtcbiAgICBNdXRhdGlvbkRhdGEucHJvdG90eXBlLm9uTXV0YXRpb25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlc3VsdC5sb2FkaW5nICYmICF0aGlzLmdldE9wdGlvbnMoKS5pZ25vcmVSZXN1bHRzKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdCh7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBjYWxsZWQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNdXRhdGlvbkRhdGEucHJvdG90eXBlLm9uTXV0YXRpb25Db21wbGV0ZWQgPSBmdW5jdGlvbiAocmVzcG9uc2UsIG11dGF0aW9uSWQpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5nZXRPcHRpb25zKCksIG9uQ29tcGxldGVkID0gX2Eub25Db21wbGV0ZWQsIGlnbm9yZVJlc3VsdHMgPSBfYS5pZ25vcmVSZXN1bHRzO1xuICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGEsIGVycm9ycyA9IHJlc3BvbnNlLmVycm9ycztcbiAgICAgICAgdmFyIGVycm9yID0gZXJyb3JzICYmIGVycm9ycy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IG5ldyBBcG9sbG9FcnJvcih7IGdyYXBoUUxFcnJvcnM6IGVycm9ycyB9KVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBjYWxsT25jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBvbkNvbXBsZXRlZCA/IG9uQ29tcGxldGVkKGRhdGEpIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3N0UmVjZW50TXV0YXRpb24obXV0YXRpb25JZCkgJiYgIWlnbm9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzdWx0KHtcbiAgICAgICAgICAgICAgICBjYWxsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxPbmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICBNdXRhdGlvbkRhdGEucHJvdG90eXBlLm9uTXV0YXRpb25FcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgbXV0YXRpb25JZCkge1xuICAgICAgICB2YXIgb25FcnJvciA9IHRoaXMuZ2V0T3B0aW9ucygpLm9uRXJyb3I7XG4gICAgICAgIGlmICh0aGlzLmlzTW9zdFJlY2VudE11dGF0aW9uKG11dGF0aW9uSWQpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdCh7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBjYWxsZWQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTXV0YXRpb25EYXRhLnByb3RvdHlwZS5nZW5lcmF0ZU5ld011dGF0aW9uSWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiArK3RoaXMubW9zdFJlY2VudE11dGF0aW9uSWQ7XG4gICAgfTtcbiAgICBNdXRhdGlvbkRhdGEucHJvdG90eXBlLmlzTW9zdFJlY2VudE11dGF0aW9uID0gZnVuY3Rpb24gKG11dGF0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9zdFJlY2VudE11dGF0aW9uSWQgPT09IG11dGF0aW9uSWQ7XG4gICAgfTtcbiAgICBNdXRhdGlvbkRhdGEucHJvdG90eXBlLnVwZGF0ZVJlc3VsdCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkICYmXG4gICAgICAgICAgICAoIXRoaXMucHJldmlvdXNSZXN1bHQgfHwgIWVxdWFsKHRoaXMucHJldmlvdXNSZXN1bHQsIHJlc3VsdCkpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1Jlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE11dGF0aW9uRGF0YTtcbn0oT3BlcmF0aW9uRGF0YSkpO1xuXG5leHBvcnQgeyBNdXRhdGlvbkRhdGEgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU11dGF0aW9uRGF0YS5qcy5tYXBcbiIsImltcG9ydCB7IGludmFyaWFudCB9IGZyb20gJ3RzLWludmFyaWFudCc7XG5pbXBvcnQgeyBlcXVhbCB9IGZyb20gJ0B3cnkvZXF1YWxpdHknO1xuaW1wb3J0IHsgcGFyc2VyLCBvcGVyYXRpb25OYW1lIH0gZnJvbSAnLi4vcGFyc2VyL3BhcnNlci5qcyc7XG5cbnZhciBPcGVyYXRpb25EYXRhID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPcGVyYXRpb25EYXRhKG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcmV2aW91c09wdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0ge307XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0IHx8IHt9O1xuICAgIH1cbiAgICBPcGVyYXRpb25EYXRhLnByb3RvdHlwZS5nZXRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xuICAgIH07XG4gICAgT3BlcmF0aW9uRGF0YS5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChuZXdPcHRpb25zLCBzdG9yZVByZXZpb3VzKSB7XG4gICAgICAgIGlmIChzdG9yZVByZXZpb3VzID09PSB2b2lkIDApIHsgc3RvcmVQcmV2aW91cyA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChzdG9yZVByZXZpb3VzICYmICFlcXVhbCh0aGlzLm9wdGlvbnMsIG5ld09wdGlvbnMpKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzT3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBuZXdPcHRpb25zO1xuICAgIH07XG4gICAgT3BlcmF0aW9uRGF0YS5wcm90b3R5cGUudW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB9O1xuICAgIE9wZXJhdGlvbkRhdGEucHJvdG90eXBlLnJlZnJlc2hDbGllbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjbGllbnQgPSAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5jbGllbnQpIHx8XG4gICAgICAgICAgICAodGhpcy5jb250ZXh0ICYmIHRoaXMuY29udGV4dC5jbGllbnQpO1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoISFjbGllbnQsIDQ0KSA6IGludmFyaWFudCghIWNsaWVudCwgJ0NvdWxkIG5vdCBmaW5kIFwiY2xpZW50XCIgaW4gdGhlIGNvbnRleHQgb3IgcGFzc2VkIGluIGFzIGFuIG9wdGlvbi4gJyArXG4gICAgICAgICAgICAnV3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYW4gPEFwb2xsb1Byb3ZpZGVyPiwgb3IgcGFzcyBhbiAnICtcbiAgICAgICAgICAgICdBcG9sbG9DbGllbnQgaW5zdGFuY2UgaW4gdmlhIG9wdGlvbnMuJyk7XG4gICAgICAgIHZhciBpc05ldyA9IGZhbHNlO1xuICAgICAgICBpZiAoY2xpZW50ICE9PSB0aGlzLmNsaWVudCkge1xuICAgICAgICAgICAgaXNOZXcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgICAgIGlzTmV3OiBpc05ld1xuICAgICAgICB9O1xuICAgIH07XG4gICAgT3BlcmF0aW9uRGF0YS5wcm90b3R5cGUudmVyaWZ5RG9jdW1lbnRUeXBlID0gZnVuY3Rpb24gKGRvY3VtZW50LCB0eXBlKSB7XG4gICAgICAgIHZhciBvcGVyYXRpb24gPSBwYXJzZXIoZG9jdW1lbnQpO1xuICAgICAgICB2YXIgcmVxdWlyZWRPcGVyYXRpb25OYW1lID0gb3BlcmF0aW9uTmFtZSh0eXBlKTtcbiAgICAgICAgdmFyIHVzZWRPcGVyYXRpb25OYW1lID0gb3BlcmF0aW9uTmFtZShvcGVyYXRpb24udHlwZSk7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChvcGVyYXRpb24udHlwZSA9PT0gdHlwZSwgNDUpIDogaW52YXJpYW50KG9wZXJhdGlvbi50eXBlID09PSB0eXBlLCBcIlJ1bm5pbmcgYSBcIiArIHJlcXVpcmVkT3BlcmF0aW9uTmFtZSArIFwiIHJlcXVpcmVzIGEgZ3JhcGhxbCBcIiArXG4gICAgICAgICAgICAocmVxdWlyZWRPcGVyYXRpb25OYW1lICsgXCIsIGJ1dCBhIFwiICsgdXNlZE9wZXJhdGlvbk5hbWUgKyBcIiB3YXMgdXNlZCBpbnN0ZWFkLlwiKSk7XG4gICAgfTtcbiAgICByZXR1cm4gT3BlcmF0aW9uRGF0YTtcbn0oKSk7XG5cbmV4cG9ydCB7IE9wZXJhdGlvbkRhdGEgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9wZXJhdGlvbkRhdGEuanMubWFwXG4iLCJpbXBvcnQgeyBfX2V4dGVuZHMsIF9fYXNzaWduIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgZXF1YWwgfSBmcm9tICdAd3J5L2VxdWFsaXR5JztcbmltcG9ydCB7IEFwb2xsb0Vycm9yIH0gZnJvbSAnLi4vLi4vZXJyb3JzL0Fwb2xsb0Vycm9yLmpzJztcbmltcG9ydCB7IE5ldHdvcmtTdGF0dXMgfSBmcm9tICcuLi8uLi9jb3JlL25ldHdvcmtTdGF0dXMuanMnO1xuaW1wb3J0IHsgRG9jdW1lbnRUeXBlIH0gZnJvbSAnLi4vcGFyc2VyL3BhcnNlci5qcyc7XG5pbXBvcnQgeyBPcGVyYXRpb25EYXRhIH0gZnJvbSAnLi9PcGVyYXRpb25EYXRhLmpzJztcblxudmFyIFF1ZXJ5RGF0YSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFF1ZXJ5RGF0YSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRdWVyeURhdGEoX2EpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBfYS5vcHRpb25zLCBjb250ZXh0ID0gX2EuY29udGV4dCwgb25OZXdEYXRhID0gX2Eub25OZXdEYXRhO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zLCBjb250ZXh0KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcmV2aW91c0RhdGEgPSB7fTtcbiAgICAgICAgX3RoaXMucnVuTGF6eSA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5ydW5MYXp5UXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgX3RoaXMuY2xlYW51cCgpO1xuICAgICAgICAgICAgX3RoaXMucnVuTGF6eSA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy5sYXp5T3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICBfdGhpcy5vbk5ld0RhdGEoKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0UXVlcnlSZXN1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gX3RoaXMub2JzZXJ2YWJsZVF1ZXJ5RmllbGRzKCk7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IF90aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNraXApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzdWx0KSwgeyBkYXRhOiB1bmRlZmluZWQsIGVycm9yOiB1bmRlZmluZWQsIGxvYWRpbmc6IGZhbHNlLCBjYWxsZWQ6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UmVzdWx0ID0gX3RoaXMuY3VycmVudE9ic2VydmFibGUuZ2V0Q3VycmVudFJlc3VsdCgpO1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gY3VycmVudFJlc3VsdC5kYXRhLCBsb2FkaW5nID0gY3VycmVudFJlc3VsdC5sb2FkaW5nLCBwYXJ0aWFsID0gY3VycmVudFJlc3VsdC5wYXJ0aWFsLCBuZXR3b3JrU3RhdHVzID0gY3VycmVudFJlc3VsdC5uZXR3b3JrU3RhdHVzLCBlcnJvcnMgPSBjdXJyZW50UmVzdWx0LmVycm9ycztcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBjdXJyZW50UmVzdWx0LmVycm9yO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBuZXcgQXBvbGxvRXJyb3IoeyBncmFwaFFMRXJyb3JzOiBlcnJvcnMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXN1bHQpLCB7IGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IG5ldHdvcmtTdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvciwgY2FsbGVkOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIGlmIChsb2FkaW5nKSA7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IChfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5nZXRMYXN0UmVzdWx0KCkgfHwge30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmV0Y2hQb2xpY3kgPSBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5vcHRpb25zLmZldGNoUG9saWN5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydGlhbFJlZmV0Y2ggPSBvcHRpb25zLnBhcnRpYWxSZWZldGNoO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFydGlhbFJlZmV0Y2ggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpYWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICghZGF0YSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeSAhPT0gJ2NhY2hlLW9ubHknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1czogTmV0d29ya1N0YXR1cy5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5yZWZldGNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LmNsaWVudCA9IF90aGlzLmNsaWVudDtcbiAgICAgICAgICAgIF90aGlzLnNldE9wdGlvbnMob3B0aW9ucywgdHJ1ZSk7XG4gICAgICAgICAgICBfdGhpcy5wcmV2aW91c0RhdGEubG9hZGluZyA9XG4gICAgICAgICAgICAgICAgX3RoaXMucHJldmlvdXNEYXRhLnJlc3VsdCAmJiBfdGhpcy5wcmV2aW91c0RhdGEucmVzdWx0LmxvYWRpbmcgfHwgZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5wcmV2aW91c0RhdGEucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmFibGUgJiYgX3RoaXMuY3VycmVudE9ic2VydmFibGUucmVzZXRRdWVyeVN0b3JlRXJyb3JzKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vYnNSZWZldGNoID0gZnVuY3Rpb24gKHZhcmlhYmxlcykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnJlZmV0Y2godmFyaWFibGVzKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub2JzRmV0Y2hNb3JlID0gZnVuY3Rpb24gKGZldGNoTW9yZU9wdGlvbnMpIHsgcmV0dXJuIF90aGlzLmN1cnJlbnRPYnNlcnZhYmxlLmZldGNoTW9yZShmZXRjaE1vcmVPcHRpb25zKTsgfTtcbiAgICAgICAgX3RoaXMub2JzVXBkYXRlUXVlcnkgPSBmdW5jdGlvbiAobWFwRm4pIHsgcmV0dXJuIF90aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnVwZGF0ZVF1ZXJ5KG1hcEZuKTsgfTtcbiAgICAgICAgX3RoaXMub2JzU3RhcnRQb2xsaW5nID0gZnVuY3Rpb24gKHBvbGxJbnRlcnZhbCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgKF9hID0gX3RoaXMuY3VycmVudE9ic2VydmFibGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdGFydFBvbGxpbmcocG9sbEludGVydmFsKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub2JzU3RvcFBvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAoX2EgPSBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0b3BQb2xsaW5nKCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9ic1N1YnNjcmliZVRvTW9yZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7IHJldHVybiBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpYmVUb01vcmUob3B0aW9ucyk7IH07XG4gICAgICAgIF90aGlzLm9uTmV3RGF0YSA9IG9uTmV3RGF0YTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaENsaWVudCgpO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmdldE9wdGlvbnMoKSwgc2tpcCA9IF9hLnNraXAsIHF1ZXJ5ID0gX2EucXVlcnk7XG4gICAgICAgIGlmIChza2lwIHx8IHF1ZXJ5ICE9PSB0aGlzLnByZXZpb3VzRGF0YS5xdWVyeSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVRdWVyeVN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0RhdGEucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU9ic2VydmFibGVRdWVyeSgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpXG4gICAgICAgICAgICB0aGlzLnN0YXJ0UXVlcnlTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhlY3V0ZVNzclJlc3VsdCgpIHx8IHRoaXMuZ2V0RXhlY3V0ZVJlc3VsdCgpO1xuICAgIH07XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS5leGVjdXRlTGF6eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnJ1bkxhenlcbiAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgIHRoaXMucnVuTGF6eVF1ZXJ5LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IE5ldHdvcmtTdGF0dXMucmVhZHksXG4gICAgICAgICAgICAgICAgICAgIGNhbGxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDogW3RoaXMucnVuTGF6eVF1ZXJ5LCB0aGlzLmV4ZWN1dGUoKV07XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmZldGNoRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2tpcCB8fCBvcHRpb25zLnNzciA9PT0gZmFsc2UpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gX3RoaXMuc3RhcnRRdWVyeVN1YnNjcmlwdGlvbihyZXNvbHZlKTsgfSk7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmFmdGVyRXhlY3V0ZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX2IgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLmxhenksIGxhenkgPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYjtcbiAgICAgICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIWxhenkgfHwgdGhpcy5ydW5MYXp5KSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yT3JDb21wbGV0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXZpb3VzT3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucygpO1xuICAgICAgICByZXR1cm4gdGhpcy51bm1vdW50LmJpbmQodGhpcyk7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUXVlcnlTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudE9ic2VydmFibGU7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnByZXZpb3VzRGF0YS5yZXN1bHQ7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmdldE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gX3N1cGVyLnByb3RvdHlwZS5nZXRPcHRpb25zLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmxhenlPcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zLnZhcmlhYmxlcyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zLnZhcmlhYmxlcyksIHRoaXMubGF6eU9wdGlvbnMudmFyaWFibGVzKTtcbiAgICAgICAgICAgIG9wdGlvbnMuY29udGV4dCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zLmNvbnRleHQpLCB0aGlzLmxhenlPcHRpb25zLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJ1bkxhenkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnNraXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLnNzckluaXRpYXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dCAmJiB0aGlzLmNvbnRleHQucmVuZGVyUHJvbWlzZXM7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmdldEV4ZWN1dGVSZXN1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmdldFF1ZXJ5UmVzdWx0KCk7XG4gICAgICAgIHRoaXMuc3RhcnRRdWVyeVN1YnNjcmlwdGlvbigpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS5nZXRFeGVjdXRlU3NyUmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3NyRGlzYWJsZWQgPSB0aGlzLmdldE9wdGlvbnMoKS5zc3IgPT09IGZhbHNlO1xuICAgICAgICB2YXIgZmV0Y2hEaXNhYmxlZCA9IHRoaXMucmVmcmVzaENsaWVudCgpLmNsaWVudC5kaXNhYmxlTmV0d29ya0ZldGNoZXM7XG4gICAgICAgIHZhciBzc3JMb2FkaW5nID0gX19hc3NpZ24oeyBsb2FkaW5nOiB0cnVlLCBuZXR3b3JrU3RhdHVzOiBOZXR3b3JrU3RhdHVzLmxvYWRpbmcsIGNhbGxlZDogdHJ1ZSwgZGF0YTogdW5kZWZpbmVkLCBzdGFsZTogZmFsc2UsIGNsaWVudDogdGhpcy5jbGllbnQgfSwgdGhpcy5vYnNlcnZhYmxlUXVlcnlGaWVsZHMoKSk7XG4gICAgICAgIGlmIChzc3JEaXNhYmxlZCAmJiAodGhpcy5zc3JJbml0aWF0ZWQoKSB8fCBmZXRjaERpc2FibGVkKSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0RhdGEucmVzdWx0ID0gc3NyTG9hZGluZztcbiAgICAgICAgICAgIHJldHVybiBzc3JMb2FkaW5nO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIGlmICh0aGlzLnNzckluaXRpYXRlZCgpKSB7XG4gICAgICAgICAgICByZXN1bHQgPVxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5yZW5kZXJQcm9taXNlcy5hZGRRdWVyeVByb21pc2UodGhpcywgdGhpcy5nZXRRdWVyeVJlc3VsdCkgfHwgc3NyTG9hZGluZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS5wcmVwYXJlT2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy52ZXJpZnlEb2N1bWVudFR5cGUob3B0aW9ucy5xdWVyeSwgRG9jdW1lbnRUeXBlLlF1ZXJ5KTtcbiAgICAgICAgdmFyIGRpc3BsYXlOYW1lID0gb3B0aW9ucy5kaXNwbGF5TmFtZSB8fCAnUXVlcnknO1xuICAgICAgICBpZiAodGhpcy5zc3JJbml0aWF0ZWQoKSAmJlxuICAgICAgICAgICAgKG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknIHx8XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gJ2NhY2hlLWFuZC1uZXR3b3JrJykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPSAnY2FjaGUtZmlyc3QnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lLCBjb250ZXh0OiBvcHRpb25zLmNvbnRleHQgfSk7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmluaXRpYWxpemVPYnNlcnZhYmxlUXVlcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNzckluaXRpYXRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlID0gdGhpcy5jb250ZXh0LnJlbmRlclByb21pc2VzLmdldFNTUk9ic2VydmFibGUodGhpcy5nZXRPcHRpb25zKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50T2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGVRdWVyeU9wdGlvbnMgPSB0aGlzLnByZXBhcmVPYnNlcnZhYmxlUXVlcnlPcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzRGF0YS5vYnNlcnZhYmxlUXVlcnlPcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG9ic2VydmFibGVRdWVyeU9wdGlvbnMpLCB7IGNoaWxkcmVuOiBudWxsIH0pO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZSA9IHRoaXMucmVmcmVzaENsaWVudCgpLmNsaWVudC53YXRjaFF1ZXJ5KF9fYXNzaWduKHt9LCBvYnNlcnZhYmxlUXVlcnlPcHRpb25zKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zc3JJbml0aWF0ZWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5yZW5kZXJQcm9taXNlcy5yZWdpc3RlclNTUk9ic2VydmFibGUodGhpcy5jdXJyZW50T2JzZXJ2YWJsZSwgb2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUudXBkYXRlT2JzZXJ2YWJsZVF1ZXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudE9ic2VydmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZU9ic2VydmFibGVRdWVyeSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdPYnNlcnZhYmxlUXVlcnlPcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMucHJlcGFyZU9ic2VydmFibGVRdWVyeU9wdGlvbnMoKSksIHsgY2hpbGRyZW46IG51bGwgfSk7XG4gICAgICAgIGlmICghZXF1YWwobmV3T2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucywgdGhpcy5wcmV2aW91c0RhdGEub2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucykpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNEYXRhLm9ic2VydmFibGVRdWVyeU9wdGlvbnMgPSBuZXdPYnNlcnZhYmxlUXVlcnlPcHRpb25zO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZVxuICAgICAgICAgICAgICAgIC5zZXRPcHRpb25zKG5ld09ic2VydmFibGVRdWVyeU9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUuc3RhcnRRdWVyeVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChvbk5ld0RhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG9uTmV3RGF0YSA9PT0gdm9pZCAwKSB7IG9uTmV3RGF0YSA9IHRoaXMub25OZXdEYXRhOyB9XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gfHwgdGhpcy5nZXRPcHRpb25zKCkuc2tpcClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBuZXR3b3JrU3RhdHVzID0gX2EubmV0d29ya1N0YXR1cywgZGF0YSA9IF9hLmRhdGE7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzUmVzdWx0ID0gX3RoaXMucHJldmlvdXNEYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNSZXN1bHQgJiZcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNSZXN1bHQubG9hZGluZyA9PT0gbG9hZGluZyAmJlxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1Jlc3VsdC5uZXR3b3JrU3RhdHVzID09PSBuZXR3b3JrU3RhdHVzICYmXG4gICAgICAgICAgICAgICAgICAgIGVxdWFsKHByZXZpb3VzUmVzdWx0LmRhdGEsIGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25OZXdEYXRhKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc3Vic2NyaWJlVG9RdWVyeSgpO1xuICAgICAgICAgICAgICAgIGlmICghZXJyb3IuaGFzT3duUHJvcGVydHkoJ2dyYXBoUUxFcnJvcnMnKSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzUmVzdWx0ID0gX3RoaXMucHJldmlvdXNEYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAoKHByZXZpb3VzUmVzdWx0ICYmIHByZXZpb3VzUmVzdWx0LmxvYWRpbmcpIHx8XG4gICAgICAgICAgICAgICAgICAgICFlcXVhbChlcnJvciwgX3RoaXMucHJldmlvdXNEYXRhLmVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wcmV2aW91c0RhdGEuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgb25OZXdEYXRhKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUucmVzdWJzY3JpYmVUb1F1ZXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlbW92ZVF1ZXJ5U3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIHZhciBjdXJyZW50T2JzZXJ2YWJsZSA9IHRoaXMuY3VycmVudE9ic2VydmFibGU7XG4gICAgICAgIGlmIChjdXJyZW50T2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgdmFyIGxhc3RFcnJvciA9IGN1cnJlbnRPYnNlcnZhYmxlLmdldExhc3RFcnJvcigpO1xuICAgICAgICAgICAgdmFyIGxhc3RSZXN1bHQgPSBjdXJyZW50T2JzZXJ2YWJsZS5nZXRMYXN0UmVzdWx0KCk7XG4gICAgICAgICAgICBjdXJyZW50T2JzZXJ2YWJsZS5yZXNldExhc3RSZXN1bHRzKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0UXVlcnlTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3VycmVudE9ic2VydmFibGUsIHtcbiAgICAgICAgICAgICAgICBsYXN0RXJyb3I6IGxhc3RFcnJvcixcbiAgICAgICAgICAgICAgICBsYXN0UmVzdWx0OiBsYXN0UmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS5oYW5kbGVFcnJvck9yQ29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudE9ic2VydmFibGUgfHwgIXRoaXMucHJldmlvdXNEYXRhLnJlc3VsdClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcmV2aW91c0RhdGEucmVzdWx0LCBkYXRhID0gX2EuZGF0YSwgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGVycm9yID0gX2EuZXJyb3I7XG4gICAgICAgIGlmICghbG9hZGluZykge1xuICAgICAgICAgICAgdmFyIF9iID0gdGhpcy5nZXRPcHRpb25zKCksIHF1ZXJ5ID0gX2IucXVlcnksIHZhcmlhYmxlcyA9IF9iLnZhcmlhYmxlcywgb25Db21wbGV0ZWQgPSBfYi5vbkNvbXBsZXRlZCwgb25FcnJvciA9IF9iLm9uRXJyb3IsIHNraXAgPSBfYi5za2lwO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXNPcHRpb25zICYmXG4gICAgICAgICAgICAgICAgIXRoaXMucHJldmlvdXNEYXRhLmxvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICBlcXVhbCh0aGlzLnByZXZpb3VzT3B0aW9ucy5xdWVyeSwgcXVlcnkpICYmXG4gICAgICAgICAgICAgICAgZXF1YWwodGhpcy5wcmV2aW91c09wdGlvbnMudmFyaWFibGVzLCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9uQ29tcGxldGVkICYmICFlcnJvciAmJiAhc2tpcCkge1xuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob25FcnJvciAmJiBlcnJvcikge1xuICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLnJlbW92ZVF1ZXJ5U3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUub2JzZXJ2YWJsZVF1ZXJ5RmllbGRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IChfYSA9IHRoaXMuY3VycmVudE9ic2VydmFibGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS52YXJpYWJsZXMsXG4gICAgICAgICAgICByZWZldGNoOiB0aGlzLm9ic1JlZmV0Y2gsXG4gICAgICAgICAgICBmZXRjaE1vcmU6IHRoaXMub2JzRmV0Y2hNb3JlLFxuICAgICAgICAgICAgdXBkYXRlUXVlcnk6IHRoaXMub2JzVXBkYXRlUXVlcnksXG4gICAgICAgICAgICBzdGFydFBvbGxpbmc6IHRoaXMub2JzU3RhcnRQb2xsaW5nLFxuICAgICAgICAgICAgc3RvcFBvbGxpbmc6IHRoaXMub2JzU3RvcFBvbGxpbmcsXG4gICAgICAgICAgICBzdWJzY3JpYmVUb01vcmU6IHRoaXMub2JzU3Vic2NyaWJlVG9Nb3JlXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gUXVlcnlEYXRhO1xufShPcGVyYXRpb25EYXRhKSk7XG5cbmV4cG9ydCB7IFF1ZXJ5RGF0YSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UXVlcnlEYXRhLmpzLm1hcFxuIiwiaW1wb3J0IHsgX19leHRlbmRzLCBfX2Fzc2lnbiB9IGZyb20gJ3RzbGliJztcbmltcG9ydCB7IGVxdWFsIH0gZnJvbSAnQHdyeS9lcXVhbGl0eSc7XG5pbXBvcnQgeyBPcGVyYXRpb25EYXRhIH0gZnJvbSAnLi9PcGVyYXRpb25EYXRhLmpzJztcblxudmFyIFN1YnNjcmlwdGlvbkRhdGEgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJzY3JpcHRpb25EYXRhLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbkRhdGEoX2EpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBfYS5vcHRpb25zLCBjb250ZXh0ID0gX2EuY29udGV4dCwgc2V0UmVzdWx0ID0gX2Euc2V0UmVzdWx0O1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zLCBjb250ZXh0KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZSA9IHt9O1xuICAgICAgICBfdGhpcy5zZXRSZXN1bHQgPSBzZXRSZXN1bHQ7XG4gICAgICAgIF90aGlzLmluaXRpYWxpemUob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU3Vic2NyaXB0aW9uRGF0YS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0T3B0aW9ucygpLnNraXAgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHRoaXMuZ2V0T3B0aW9ucygpLnZhcmlhYmxlc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VycmVudFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgaWYgKHRoaXMucmVmcmVzaENsaWVudCgpLmlzTmV3KSB7XG4gICAgICAgICAgICBjdXJyZW50UmVzdWx0ID0gdGhpcy5nZXRMb2FkaW5nUmVzdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNob3VsZFJlc3Vic2NyaWJlID0gdGhpcy5nZXRPcHRpb25zKCkuc2hvdWxkUmVzdWJzY3JpYmU7XG4gICAgICAgIGlmICh0eXBlb2Ygc2hvdWxkUmVzdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHNob3VsZFJlc3Vic2NyaWJlID0gISFzaG91bGRSZXN1YnNjcmliZSh0aGlzLmdldE9wdGlvbnMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZFJlc3Vic2NyaWJlICE9PSBmYWxzZSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c09wdGlvbnMgJiZcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJldmlvdXNPcHRpb25zKS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAodGhpcy5wcmV2aW91c09wdGlvbnMuc3Vic2NyaXB0aW9uICE9PSB0aGlzLmdldE9wdGlvbnMoKS5zdWJzY3JpcHRpb24gfHxcbiAgICAgICAgICAgICAgICAhZXF1YWwodGhpcy5wcmV2aW91c09wdGlvbnMudmFyaWFibGVzLCB0aGlzLmdldE9wdGlvbnMoKS52YXJpYWJsZXMpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c09wdGlvbnMuc2tpcCAhPT0gdGhpcy5nZXRPcHRpb25zKCkuc2tpcCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICAgICAgY3VycmVudFJlc3VsdCA9IHRoaXMuZ2V0TG9hZGluZ1Jlc3VsdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSh0aGlzLmdldE9wdGlvbnMoKSk7XG4gICAgICAgIHRoaXMuc3RhcnRTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c09wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBjdXJyZW50UmVzdWx0KSwgeyB2YXJpYWJsZXM6IHRoaXMuZ2V0T3B0aW9ucygpLnZhcmlhYmxlcyB9KTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLmFmdGVyRXhlY3V0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uRGF0YS5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbmRTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnk7XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb25EYXRhLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkgfHwgdGhpcy5nZXRPcHRpb25zKCkuc2tpcCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeSA9IHRoaXMucmVmcmVzaENsaWVudCgpLmNsaWVudC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgcXVlcnk6IG9wdGlvbnMuc3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIGZldGNoUG9saWN5OiBvcHRpb25zLmZldGNoUG9saWN5XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uRGF0YS5wcm90b3R5cGUuc3RhcnRTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnN1YnNjcmlwdGlvbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb24gPSB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiB0aGlzLnVwZGF0ZUN1cnJlbnREYXRhLmJpbmQodGhpcyksXG4gICAgICAgICAgICBlcnJvcjogdGhpcy51cGRhdGVFcnJvci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgY29tcGxldGU6IHRoaXMuY29tcGxldGVTdWJzY3JpcHRpb24uYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLmdldExvYWRpbmdSZXN1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uRGF0YS5wcm90b3R5cGUudXBkYXRlUmVzdWx0ID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UmVzdWx0KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLnVwZGF0ZUN1cnJlbnREYXRhID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICB2YXIgb25TdWJzY3JpcHRpb25EYXRhID0gdGhpcy5nZXRPcHRpb25zKCkub25TdWJzY3JpcHRpb25EYXRhO1xuICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdCh7XG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3I6IHVuZGVmaW5lZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9uU3Vic2NyaXB0aW9uRGF0YSkge1xuICAgICAgICAgICAgb25TdWJzY3JpcHRpb25EYXRhKHtcbiAgICAgICAgICAgICAgICBjbGllbnQ6IHRoaXMucmVmcmVzaENsaWVudCgpLmNsaWVudCxcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25EYXRhOiByZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb25EYXRhLnByb3RvdHlwZS51cGRhdGVFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdCh7XG4gICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLmNvbXBsZXRlU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb25TdWJzY3JpcHRpb25Db21wbGV0ZSA9IHRoaXMuZ2V0T3B0aW9ucygpLm9uU3Vic2NyaXB0aW9uQ29tcGxldGU7XG4gICAgICAgIGlmIChvblN1YnNjcmlwdGlvbkNvbXBsZXRlKVxuICAgICAgICAgICAgb25TdWJzY3JpcHRpb25Db21wbGV0ZSgpO1xuICAgICAgICB0aGlzLmVuZFN1YnNjcmlwdGlvbigpO1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uRGF0YS5wcm90b3R5cGUuZW5kU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE9ic2VydmFibGUuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTdWJzY3JpcHRpb25EYXRhO1xufShPcGVyYXRpb25EYXRhKSk7XG5cbmV4cG9ydCB7IFN1YnNjcmlwdGlvbkRhdGEgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmlwdGlvbkRhdGEuanMubWFwXG4iLCJpbXBvcnQgeyBpbnZhcmlhbnQgfSBmcm9tICd0cy1pbnZhcmlhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEFwb2xsb0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0Fwb2xsb0NvbnRleHQuanMnO1xuXG5mdW5jdGlvbiB1c2VBcG9sbG9DbGllbnQoKSB7XG4gICAgdmFyIGNsaWVudCA9IFJlYWN0LnVzZUNvbnRleHQoZ2V0QXBvbGxvQ29udGV4dCgpKS5jbGllbnQ7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGNsaWVudCwgNikgOiBpbnZhcmlhbnQoY2xpZW50LCAnTm8gQXBvbGxvIENsaWVudCBpbnN0YW5jZSBjYW4gYmUgZm91bmQuIFBsZWFzZSBlbnN1cmUgdGhhdCB5b3UgJyArXG4gICAgICAgICdoYXZlIGNhbGxlZCBgQXBvbGxvUHJvdmlkZXJgIGhpZ2hlciB1cCBpbiB5b3VyIHRyZWUuJyk7XG4gICAgcmV0dXJuIGNsaWVudDtcbn1cblxuZXhwb3J0IHsgdXNlQXBvbGxvQ2xpZW50IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VBcG9sbG9DbGllbnQuanMubWFwXG4iLCJpbXBvcnQgeyB1c2VCYXNlUXVlcnkgfSBmcm9tICcuL3V0aWxzL3VzZUJhc2VRdWVyeS5qcyc7XG5cbmZ1bmN0aW9uIHVzZUxhenlRdWVyeShxdWVyeSwgb3B0aW9ucykge1xuICAgIHJldHVybiB1c2VCYXNlUXVlcnkocXVlcnksIG9wdGlvbnMsIHRydWUpO1xufVxuXG5leHBvcnQgeyB1c2VMYXp5UXVlcnkgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZUxhenlRdWVyeS5qcy5tYXBcbiIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0QXBvbGxvQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQXBvbGxvQ29udGV4dC5qcyc7XG5pbXBvcnQgeyBNdXRhdGlvbkRhdGEgfSBmcm9tICcuLi9kYXRhL011dGF0aW9uRGF0YS5qcyc7XG5cbmZ1bmN0aW9uIHVzZU11dGF0aW9uKG11dGF0aW9uLCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSB1c2VDb250ZXh0KGdldEFwb2xsb0NvbnRleHQoKSk7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoeyBjYWxsZWQ6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZSB9KSwgcmVzdWx0ID0gX2FbMF0sIHNldFJlc3VsdCA9IF9hWzFdO1xuICAgIHZhciB1cGRhdGVkT3B0aW9ucyA9IG9wdGlvbnMgPyBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgbXV0YXRpb246IG11dGF0aW9uIH0pIDogeyBtdXRhdGlvbjogbXV0YXRpb24gfTtcbiAgICB2YXIgbXV0YXRpb25EYXRhUmVmID0gdXNlUmVmKCk7XG4gICAgZnVuY3Rpb24gZ2V0TXV0YXRpb25EYXRhUmVmKCkge1xuICAgICAgICBpZiAoIW11dGF0aW9uRGF0YVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBtdXRhdGlvbkRhdGFSZWYuY3VycmVudCA9IG5ldyBNdXRhdGlvbkRhdGEoe1xuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHVwZGF0ZWRPcHRpb25zLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0OiBzZXRSZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtdXRhdGlvbkRhdGFSZWYuY3VycmVudDtcbiAgICB9XG4gICAgdmFyIG11dGF0aW9uRGF0YSA9IGdldE11dGF0aW9uRGF0YVJlZigpO1xuICAgIG11dGF0aW9uRGF0YS5zZXRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKTtcbiAgICBtdXRhdGlvbkRhdGEuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG11dGF0aW9uRGF0YS5hZnRlckV4ZWN1dGUoKTsgfSk7XG4gICAgcmV0dXJuIG11dGF0aW9uRGF0YS5leGVjdXRlKHJlc3VsdCk7XG59XG5cbmV4cG9ydCB7IHVzZU11dGF0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VNdXRhdGlvbi5qcy5tYXBcbiIsImltcG9ydCB7IHVzZUJhc2VRdWVyeSB9IGZyb20gJy4vdXRpbHMvdXNlQmFzZVF1ZXJ5LmpzJztcblxuZnVuY3Rpb24gdXNlUXVlcnkocXVlcnksIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdXNlQmFzZVF1ZXJ5KHF1ZXJ5LCBvcHRpb25zLCBmYWxzZSk7XG59XG5cbmV4cG9ydCB7IHVzZVF1ZXJ5IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VRdWVyeS5qcy5tYXBcbiIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0QXBvbGxvQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQXBvbGxvQ29udGV4dC5qcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25EYXRhIH0gZnJvbSAnLi4vZGF0YS9TdWJzY3JpcHRpb25EYXRhLmpzJztcblxuZnVuY3Rpb24gdXNlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbiwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gdXNlQ29udGV4dChnZXRBcG9sbG9Db250ZXh0KCkpO1xuICAgIHZhciB1cGRhdGVkT3B0aW9ucyA9IG9wdGlvbnNcbiAgICAgICAgPyBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb24gfSkgOiB7IHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uIH07XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiAhdXBkYXRlZE9wdGlvbnMuc2tpcCxcbiAgICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogdW5kZWZpbmVkXG4gICAgfSksIHJlc3VsdCA9IF9hWzBdLCBzZXRSZXN1bHQgPSBfYVsxXTtcbiAgICB2YXIgc3Vic2NyaXB0aW9uRGF0YVJlZiA9IHVzZVJlZigpO1xuICAgIGZ1bmN0aW9uIGdldFN1YnNjcmlwdGlvbkRhdGFSZWYoKSB7XG4gICAgICAgIGlmICghc3Vic2NyaXB0aW9uRGF0YVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25EYXRhUmVmLmN1cnJlbnQgPSBuZXcgU3Vic2NyaXB0aW9uRGF0YSh7XG4gICAgICAgICAgICAgICAgb3B0aW9uczogdXBkYXRlZE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQ6IHNldFJlc3VsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbkRhdGFSZWYuY3VycmVudDtcbiAgICB9XG4gICAgdmFyIHN1YnNjcmlwdGlvbkRhdGEgPSBnZXRTdWJzY3JpcHRpb25EYXRhUmVmKCk7XG4gICAgc3Vic2NyaXB0aW9uRGF0YS5zZXRPcHRpb25zKHVwZGF0ZWRPcHRpb25zLCB0cnVlKTtcbiAgICBzdWJzY3JpcHRpb25EYXRhLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpcHRpb25EYXRhLmFmdGVyRXhlY3V0ZSgpOyB9KTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaXB0aW9uRGF0YS5jbGVhbnVwLmJpbmQoc3Vic2NyaXB0aW9uRGF0YSk7IH0sIFtdKTtcbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uRGF0YS5leGVjdXRlKHJlc3VsdCk7XG59XG5cbmV4cG9ydCB7IHVzZVN1YnNjcmlwdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlU3Vic2NyaXB0aW9uLmpzLm1hcFxuIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEFwb2xsb0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L0Fwb2xsb0NvbnRleHQuanMnO1xuaW1wb3J0IHsgUXVlcnlEYXRhIH0gZnJvbSAnLi4vLi4vZGF0YS9RdWVyeURhdGEuanMnO1xuaW1wb3J0IHsgdXNlRGVlcE1lbW8gfSBmcm9tICcuL3VzZURlZXBNZW1vLmpzJztcblxuZnVuY3Rpb24gdXNlQmFzZVF1ZXJ5KHF1ZXJ5LCBvcHRpb25zLCBsYXp5KSB7XG4gICAgaWYgKGxhenkgPT09IHZvaWQgMCkgeyBsYXp5ID0gZmFsc2U7IH1cbiAgICB2YXIgY29udGV4dCA9IHVzZUNvbnRleHQoZ2V0QXBvbGxvQ29udGV4dCgpKTtcbiAgICB2YXIgX2EgPSB1c2VSZWR1Y2VyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4ICsgMTsgfSwgMCksIHRpY2sgPSBfYVswXSwgZm9yY2VVcGRhdGUgPSBfYVsxXTtcbiAgICB2YXIgdXBkYXRlZE9wdGlvbnMgPSBvcHRpb25zID8gX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHF1ZXJ5OiBxdWVyeSB9KSA6IHsgcXVlcnk6IHF1ZXJ5IH07XG4gICAgdmFyIHF1ZXJ5RGF0YVJlZiA9IHVzZVJlZigpO1xuICAgIHZhciBxdWVyeURhdGEgPSBxdWVyeURhdGFSZWYuY3VycmVudCB8fFxuICAgICAgICBuZXcgUXVlcnlEYXRhKHtcbiAgICAgICAgICAgIG9wdGlvbnM6IHVwZGF0ZWRPcHRpb25zLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIG9uTmV3RGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghcXVlcnlEYXRhLnNzckluaXRpYXRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIHF1ZXJ5RGF0YS5zZXRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKTtcbiAgICBxdWVyeURhdGEuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgaWYgKHF1ZXJ5RGF0YS5zc3JJbml0aWF0ZWQoKSAmJiAhcXVlcnlEYXRhUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcXVlcnlEYXRhUmVmLmN1cnJlbnQgPSBxdWVyeURhdGE7XG4gICAgfVxuICAgIHZhciBtZW1vID0ge1xuICAgICAgICBvcHRpb25zOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdXBkYXRlZE9wdGlvbnMpLCB7IG9uRXJyb3I6IHVuZGVmaW5lZCwgb25Db21wbGV0ZWQ6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgdGljazogdGlja1xuICAgIH07XG4gICAgdmFyIHJlc3VsdCA9IHVzZURlZXBNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuIChsYXp5ID8gcXVlcnlEYXRhLmV4ZWN1dGVMYXp5KCkgOiBxdWVyeURhdGEuZXhlY3V0ZSgpKTsgfSwgbWVtbyk7XG4gICAgdmFyIHF1ZXJ5UmVzdWx0ID0gbGF6eVxuICAgICAgICA/IHJlc3VsdFsxXVxuICAgICAgICA6IHJlc3VsdDtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXF1ZXJ5RGF0YVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBxdWVyeURhdGFSZWYuY3VycmVudCA9IHF1ZXJ5RGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gcXVlcnlEYXRhLmNsZWFudXAoKTsgfTtcbiAgICB9LCBbXSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHF1ZXJ5RGF0YS5hZnRlckV4ZWN1dGUoeyBsYXp5OiBsYXp5IH0pOyB9LCBbXG4gICAgICAgIHF1ZXJ5UmVzdWx0LmxvYWRpbmcsXG4gICAgICAgIHF1ZXJ5UmVzdWx0Lm5ldHdvcmtTdGF0dXMsXG4gICAgICAgIHF1ZXJ5UmVzdWx0LmVycm9yLFxuICAgICAgICBxdWVyeVJlc3VsdC5kYXRhLFxuICAgIF0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCB7IHVzZUJhc2VRdWVyeSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlQmFzZVF1ZXJ5LmpzLm1hcFxuIiwiaW1wb3J0IHsgZXF1YWwgfSBmcm9tICdAd3J5L2VxdWFsaXR5JztcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gdXNlRGVlcE1lbW8obWVtb0ZuLCBrZXkpIHtcbiAgICB2YXIgcmVmID0gdXNlUmVmKCk7XG4gICAgaWYgKCFyZWYuY3VycmVudCB8fCAhZXF1YWwoa2V5LCByZWYuY3VycmVudC5rZXkpKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0geyBrZXk6IGtleSwgdmFsdWU6IG1lbW9GbigpIH07XG4gICAgfVxuICAgIHJldHVybiByZWYuY3VycmVudC52YWx1ZTtcbn1cblxuZXhwb3J0IHsgdXNlRGVlcE1lbW8gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZURlZXBNZW1vLmpzLm1hcFxuIiwiaW1wb3J0IHsgaW52YXJpYW50IH0gZnJvbSAndHMtaW52YXJpYW50JztcblxudmFyIERvY3VtZW50VHlwZTtcbihmdW5jdGlvbiAoRG9jdW1lbnRUeXBlKSB7XG4gICAgRG9jdW1lbnRUeXBlW0RvY3VtZW50VHlwZVtcIlF1ZXJ5XCJdID0gMF0gPSBcIlF1ZXJ5XCI7XG4gICAgRG9jdW1lbnRUeXBlW0RvY3VtZW50VHlwZVtcIk11dGF0aW9uXCJdID0gMV0gPSBcIk11dGF0aW9uXCI7XG4gICAgRG9jdW1lbnRUeXBlW0RvY3VtZW50VHlwZVtcIlN1YnNjcmlwdGlvblwiXSA9IDJdID0gXCJTdWJzY3JpcHRpb25cIjtcbn0pKERvY3VtZW50VHlwZSB8fCAoRG9jdW1lbnRUeXBlID0ge30pKTtcbnZhciBjYWNoZSA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIG9wZXJhdGlvbk5hbWUodHlwZSkge1xuICAgIHZhciBuYW1lO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIERvY3VtZW50VHlwZS5RdWVyeTpcbiAgICAgICAgICAgIG5hbWUgPSAnUXVlcnknO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRG9jdW1lbnRUeXBlLk11dGF0aW9uOlxuICAgICAgICAgICAgbmFtZSA9ICdNdXRhdGlvbic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBEb2N1bWVudFR5cGUuU3Vic2NyaXB0aW9uOlxuICAgICAgICAgICAgbmFtZSA9ICdTdWJzY3JpcHRpb24nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuYW1lO1xufVxuZnVuY3Rpb24gcGFyc2VyKGRvY3VtZW50KSB7XG4gICAgdmFyIGNhY2hlZCA9IGNhY2hlLmdldChkb2N1bWVudCk7XG4gICAgaWYgKGNhY2hlZClcbiAgICAgICAgcmV0dXJuIGNhY2hlZDtcbiAgICB2YXIgdmFyaWFibGVzLCB0eXBlLCBuYW1lO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudCghIWRvY3VtZW50ICYmICEhZG9jdW1lbnQua2luZCwgNykgOiBpbnZhcmlhbnQoISFkb2N1bWVudCAmJiAhIWRvY3VtZW50LmtpbmQsIFwiQXJndW1lbnQgb2YgXCIgKyBkb2N1bWVudCArIFwiIHBhc3NlZCB0byBwYXJzZXIgd2FzIG5vdCBhIHZhbGlkIEdyYXBoUUwgXCIgK1xuICAgICAgICBcIkRvY3VtZW50Tm9kZS4gWW91IG1heSBuZWVkIHRvIHVzZSAnZ3JhcGhxbC10YWcnIG9yIGFub3RoZXIgbWV0aG9kIFwiICtcbiAgICAgICAgXCJ0byBjb252ZXJ0IHlvdXIgb3BlcmF0aW9uIGludG8gYSBkb2N1bWVudFwiKTtcbiAgICB2YXIgZnJhZ21lbnRzID0gZG9jdW1lbnQuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nOyB9KTtcbiAgICB2YXIgcXVlcmllcyA9IGRvY3VtZW50LmRlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geC5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicgJiYgeC5vcGVyYXRpb24gPT09ICdxdWVyeSc7XG4gICAgfSk7XG4gICAgdmFyIG11dGF0aW9ucyA9IGRvY3VtZW50LmRlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geC5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicgJiYgeC5vcGVyYXRpb24gPT09ICdtdXRhdGlvbic7XG4gICAgfSk7XG4gICAgdmFyIHN1YnNjcmlwdGlvbnMgPSBkb2N1bWVudC5kZWZpbml0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHgua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nICYmIHgub3BlcmF0aW9uID09PSAnc3Vic2NyaXB0aW9uJztcbiAgICB9KTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoIWZyYWdtZW50cy5sZW5ndGggfHxcbiAgICAgICAgKHF1ZXJpZXMubGVuZ3RoIHx8IG11dGF0aW9ucy5sZW5ndGggfHwgc3Vic2NyaXB0aW9ucy5sZW5ndGgpLCA4KSA6IGludmFyaWFudCghZnJhZ21lbnRzLmxlbmd0aCB8fFxuICAgICAgICAocXVlcmllcy5sZW5ndGggfHwgbXV0YXRpb25zLmxlbmd0aCB8fCBzdWJzY3JpcHRpb25zLmxlbmd0aCksIFwiUGFzc2luZyBvbmx5IGEgZnJhZ21lbnQgdG8gJ2dyYXBocWwnIGlzIG5vdCB5ZXQgc3VwcG9ydGVkLiBcIiArXG4gICAgICAgIFwiWW91IG11c3QgaW5jbHVkZSBhIHF1ZXJ5LCBzdWJzY3JpcHRpb24gb3IgbXV0YXRpb24gYXMgd2VsbFwiKTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQocXVlcmllcy5sZW5ndGggKyBtdXRhdGlvbnMubGVuZ3RoICsgc3Vic2NyaXB0aW9ucy5sZW5ndGggPD0gMSwgOSkgOiBpbnZhcmlhbnQocXVlcmllcy5sZW5ndGggKyBtdXRhdGlvbnMubGVuZ3RoICsgc3Vic2NyaXB0aW9ucy5sZW5ndGggPD0gMSwgXCJyZWFjdC1hcG9sbG8gb25seSBzdXBwb3J0cyBhIHF1ZXJ5LCBzdWJzY3JpcHRpb24sIG9yIGEgbXV0YXRpb24gcGVyIEhPQy4gXCIgK1xuICAgICAgICAoZG9jdW1lbnQgKyBcIiBoYWQgXCIgKyBxdWVyaWVzLmxlbmd0aCArIFwiIHF1ZXJpZXMsIFwiICsgc3Vic2NyaXB0aW9ucy5sZW5ndGggKyBcIiBcIikgK1xuICAgICAgICAoXCJzdWJzY3JpcHRpb25zIGFuZCBcIiArIG11dGF0aW9ucy5sZW5ndGggKyBcIiBtdXRhdGlvbnMuIFwiKSArXG4gICAgICAgIFwiWW91IGNhbiB1c2UgJ2NvbXBvc2UnIHRvIGpvaW4gbXVsdGlwbGUgb3BlcmF0aW9uIHR5cGVzIHRvIGEgY29tcG9uZW50XCIpO1xuICAgIHR5cGUgPSBxdWVyaWVzLmxlbmd0aCA/IERvY3VtZW50VHlwZS5RdWVyeSA6IERvY3VtZW50VHlwZS5NdXRhdGlvbjtcbiAgICBpZiAoIXF1ZXJpZXMubGVuZ3RoICYmICFtdXRhdGlvbnMubGVuZ3RoKVxuICAgICAgICB0eXBlID0gRG9jdW1lbnRUeXBlLlN1YnNjcmlwdGlvbjtcbiAgICB2YXIgZGVmaW5pdGlvbnMgPSBxdWVyaWVzLmxlbmd0aFxuICAgICAgICA/IHF1ZXJpZXNcbiAgICAgICAgOiBtdXRhdGlvbnMubGVuZ3RoXG4gICAgICAgICAgICA/IG11dGF0aW9uc1xuICAgICAgICAgICAgOiBzdWJzY3JpcHRpb25zO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChkZWZpbml0aW9ucy5sZW5ndGggPT09IDEsIDEwKSA6IGludmFyaWFudChkZWZpbml0aW9ucy5sZW5ndGggPT09IDEsIFwicmVhY3QtYXBvbGxvIG9ubHkgc3VwcG9ydHMgb25lIGRlZmluaXRpb24gcGVyIEhPQy4gXCIgKyBkb2N1bWVudCArIFwiIGhhZCBcIiArXG4gICAgICAgIChkZWZpbml0aW9ucy5sZW5ndGggKyBcIiBkZWZpbml0aW9ucy4gXCIpICtcbiAgICAgICAgXCJZb3UgY2FuIHVzZSAnY29tcG9zZScgdG8gam9pbiBtdWx0aXBsZSBvcGVyYXRpb24gdHlwZXMgdG8gYSBjb21wb25lbnRcIik7XG4gICAgdmFyIGRlZmluaXRpb24gPSBkZWZpbml0aW9uc1swXTtcbiAgICB2YXJpYWJsZXMgPSBkZWZpbml0aW9uLnZhcmlhYmxlRGVmaW5pdGlvbnMgfHwgW107XG4gICAgaWYgKGRlZmluaXRpb24ubmFtZSAmJiBkZWZpbml0aW9uLm5hbWUua2luZCA9PT0gJ05hbWUnKSB7XG4gICAgICAgIG5hbWUgPSBkZWZpbml0aW9uLm5hbWUudmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBuYW1lID0gJ2RhdGEnO1xuICAgIH1cbiAgICB2YXIgcGF5bG9hZCA9IHsgbmFtZTogbmFtZSwgdHlwZTogdHlwZSwgdmFyaWFibGVzOiB2YXJpYWJsZXMgfTtcbiAgICBjYWNoZS5zZXQoZG9jdW1lbnQsIHBheWxvYWQpO1xuICAgIHJldHVybiBwYXlsb2FkO1xufVxuXG5leHBvcnQgeyBEb2N1bWVudFR5cGUsIG9wZXJhdGlvbk5hbWUsIHBhcnNlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2VyLmpzLm1hcFxuIiwiZnVuY3Rpb24gbWFrZURlZmF1bHRRdWVyeUluZm8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VlbjogZmFsc2UsXG4gICAgICAgIG9ic2VydmFibGU6IG51bGxcbiAgICB9O1xufVxudmFyIFJlbmRlclByb21pc2VzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZW5kZXJQcm9taXNlcygpIHtcbiAgICAgICAgdGhpcy5xdWVyeVByb21pc2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnF1ZXJ5SW5mb1RyaWUgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIFJlbmRlclByb21pc2VzLnByb3RvdHlwZS5yZWdpc3RlclNTUk9ic2VydmFibGUgPSBmdW5jdGlvbiAob2JzZXJ2YWJsZSwgcHJvcHMpIHtcbiAgICAgICAgdGhpcy5sb29rdXBRdWVyeUluZm8ocHJvcHMpLm9ic2VydmFibGUgPSBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmdldFNTUk9ic2VydmFibGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9va3VwUXVlcnlJbmZvKHByb3BzKS5vYnNlcnZhYmxlO1xuICAgIH07XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmFkZFF1ZXJ5UHJvbWlzZSA9IGZ1bmN0aW9uIChxdWVyeUluc3RhbmNlLCBmaW5pc2gpIHtcbiAgICAgICAgdmFyIGluZm8gPSB0aGlzLmxvb2t1cFF1ZXJ5SW5mbyhxdWVyeUluc3RhbmNlLmdldE9wdGlvbnMoKSk7XG4gICAgICAgIGlmICghaW5mby5zZWVuKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5UHJvbWlzZXMuc2V0KHF1ZXJ5SW5zdGFuY2UuZ2V0T3B0aW9ucygpLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocXVlcnlJbnN0YW5jZS5mZXRjaERhdGEoKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmluaXNoKCk7XG4gICAgfTtcbiAgICBSZW5kZXJQcm9taXNlcy5wcm90b3R5cGUuaGFzUHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5UHJvbWlzZXMuc2l6ZSA+IDA7XG4gICAgfTtcbiAgICBSZW5kZXJQcm9taXNlcy5wcm90b3R5cGUuY29uc3VtZUFuZEF3YWl0UHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICB0aGlzLnF1ZXJ5UHJvbWlzZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvbWlzZSwgcXVlcnlJbnN0YW5jZSkge1xuICAgICAgICAgICAgX3RoaXMubG9va3VwUXVlcnlJbmZvKHF1ZXJ5SW5zdGFuY2UpLnNlZW4gPSB0cnVlO1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucXVlcnlQcm9taXNlcy5jbGVhcigpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH07XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmxvb2t1cFF1ZXJ5SW5mbyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICB2YXIgcXVlcnlJbmZvVHJpZSA9IHRoaXMucXVlcnlJbmZvVHJpZTtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gcHJvcHMucXVlcnksIHZhcmlhYmxlcyA9IHByb3BzLnZhcmlhYmxlcztcbiAgICAgICAgdmFyIHZhck1hcCA9IHF1ZXJ5SW5mb1RyaWUuZ2V0KHF1ZXJ5KSB8fCBuZXcgTWFwKCk7XG4gICAgICAgIGlmICghcXVlcnlJbmZvVHJpZS5oYXMocXVlcnkpKVxuICAgICAgICAgICAgcXVlcnlJbmZvVHJpZS5zZXQocXVlcnksIHZhck1hcCk7XG4gICAgICAgIHZhciB2YXJpYWJsZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh2YXJpYWJsZXMpO1xuICAgICAgICB2YXIgaW5mbyA9IHZhck1hcC5nZXQodmFyaWFibGVzU3RyaW5nKSB8fCBtYWtlRGVmYXVsdFF1ZXJ5SW5mbygpO1xuICAgICAgICBpZiAoIXZhck1hcC5oYXModmFyaWFibGVzU3RyaW5nKSlcbiAgICAgICAgICAgIHZhck1hcC5zZXQodmFyaWFibGVzU3RyaW5nLCBpbmZvKTtcbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgfTtcbiAgICByZXR1cm4gUmVuZGVyUHJvbWlzZXM7XG59KCkpO1xuXG5leHBvcnQgeyBSZW5kZXJQcm9taXNlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UmVuZGVyUHJvbWlzZXMuanMubWFwXG4iLCJmdW5jdGlvbiBpc05vbkVtcHR5QXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMDtcbn1cblxuZXhwb3J0IHsgaXNOb25FbXB0eUFycmF5IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJheXMuanMubWFwXG4iLCJ2YXIgY2FuVXNlV2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmICEodHlwZW9mIG5hdmlnYXRvciA9PT0gJ29iamVjdCcgJiZcbiAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyk7XG5cbmV4cG9ydCB7IGNhblVzZVdlYWtNYXAgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhblVzZS5qcy5tYXBcbiIsInZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgICByZXR1cm4gY2xvbmVEZWVwSGVscGVyKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGNsb25lRGVlcEhlbHBlcih2YWwsIHNlZW4pIHtcbiAgICBzd2l0Y2ggKHRvU3RyaW5nLmNhbGwodmFsKSkge1xuICAgICAgICBjYXNlIFwiW29iamVjdCBBcnJheV1cIjoge1xuICAgICAgICAgICAgc2VlbiA9IHNlZW4gfHwgbmV3IE1hcDtcbiAgICAgICAgICAgIGlmIChzZWVuLmhhcyh2YWwpKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWVuLmdldCh2YWwpO1xuICAgICAgICAgICAgdmFyIGNvcHlfMSA9IHZhbC5zbGljZSgwKTtcbiAgICAgICAgICAgIHNlZW4uc2V0KHZhbCwgY29weV8xKTtcbiAgICAgICAgICAgIGNvcHlfMS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvcHlfMVtpXSA9IGNsb25lRGVlcEhlbHBlcihjaGlsZCwgc2Vlbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjb3B5XzE7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIltvYmplY3QgT2JqZWN0XVwiOiB7XG4gICAgICAgICAgICBzZWVuID0gc2VlbiB8fCBuZXcgTWFwO1xuICAgICAgICAgICAgaWYgKHNlZW4uaGFzKHZhbCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlZW4uZ2V0KHZhbCk7XG4gICAgICAgICAgICB2YXIgY29weV8yID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKSk7XG4gICAgICAgICAgICBzZWVuLnNldCh2YWwsIGNvcHlfMik7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh2YWwpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGNvcHlfMltrZXldID0gY2xvbmVEZWVwSGVscGVyKHZhbFtrZXldLCBzZWVuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNvcHlfMjtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGNsb25lRGVlcCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xvbmVEZWVwLmpzLm1hcFxuIiwiZnVuY3Rpb24gZ2V0RW52KCkge1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuICAgIH1cbiAgICByZXR1cm4gJ2RldmVsb3BtZW50Jztcbn1cbmZ1bmN0aW9uIGlzRW52KGVudikge1xuICAgIHJldHVybiBnZXRFbnYoKSA9PT0gZW52O1xufVxuZnVuY3Rpb24gaXNEZXZlbG9wbWVudCgpIHtcbiAgICByZXR1cm4gaXNFbnYoJ2RldmVsb3BtZW50JykgPT09IHRydWU7XG59XG5mdW5jdGlvbiBpc1Rlc3QoKSB7XG4gICAgcmV0dXJuIGlzRW52KCd0ZXN0JykgPT09IHRydWU7XG59XG5cbmV4cG9ydCB7IGdldEVudiwgaXNEZXZlbG9wbWVudCwgaXNFbnYsIGlzVGVzdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW52aXJvbm1lbnQuanMubWFwXG4iLCJmdW5jdGlvbiBncmFwaFFMUmVzdWx0SGFzRXJyb3IocmVzdWx0KSB7XG4gICAgcmV0dXJuIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnMubGVuZ3RoID4gMCkgfHwgZmFsc2U7XG59XG5cbmV4cG9ydCB7IGdyYXBoUUxSZXN1bHRIYXNFcnJvciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXJyb3JIYW5kbGluZy5qcy5tYXBcbiIsImZ1bmN0aW9uIGZpbHRlckluUGxhY2UoYXJyYXksIHRlc3QsIGNvbnRleHQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gMDtcbiAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtLCBpKSB7XG4gICAgICAgIGlmICh0ZXN0LmNhbGwodGhpcywgZWxlbSwgaSwgYXJyYXkpKSB7XG4gICAgICAgICAgICBhcnJheVt0YXJnZXQrK10gPSBlbGVtO1xuICAgICAgICB9XG4gICAgfSwgY29udGV4dCk7XG4gICAgYXJyYXkubGVuZ3RoID0gdGFyZ2V0O1xuICAgIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IHsgZmlsdGVySW5QbGFjZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmlsdGVySW5QbGFjZS5qcy5tYXBcbiIsImltcG9ydCB7IGlzRGV2ZWxvcG1lbnQsIGlzVGVzdCB9IGZyb20gJy4vZW52aXJvbm1lbnQuanMnO1xuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG59XG5mdW5jdGlvbiBkZWVwRnJlZXplKHZhbHVlKSB7XG4gICAgdmFyIHdvcmtTZXQgPSBuZXcgU2V0KFt2YWx1ZV0pO1xuICAgIHdvcmtTZXQuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5pc0Zyb3plbihvYmopKVxuICAgICAgICAgICAgICAgIE9iamVjdC5mcmVlemUob2JqKTtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc09iamVjdChvYmpbbmFtZV0pKVxuICAgICAgICAgICAgICAgICAgICB3b3JrU2V0LmFkZChvYmpbbmFtZV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBtYXliZURlZXBGcmVlemUob2JqKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAoaXNEZXZlbG9wbWVudCgpIHx8IGlzVGVzdCgpKSkge1xuICAgICAgICBkZWVwRnJlZXplKG9iaik7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5cbmV4cG9ydCB7IG1heWJlRGVlcEZyZWV6ZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF5YmVEZWVwRnJlZXplLmpzLm1hcFxuIiwiaW1wb3J0IHsgX19zcHJlYWRBcnJheXMsIF9fYXNzaWduIH0gZnJvbSAndHNsaWInO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gbWVyZ2VEZWVwKCkge1xuICAgIHZhciBzb3VyY2VzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgc291cmNlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VEZWVwQXJyYXkoc291cmNlcyk7XG59XG5mdW5jdGlvbiBtZXJnZURlZXBBcnJheShzb3VyY2VzKSB7XG4gICAgdmFyIHRhcmdldCA9IHNvdXJjZXNbMF0gfHwge307XG4gICAgdmFyIGNvdW50ID0gc291cmNlcy5sZW5ndGg7XG4gICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgICB2YXIgbWVyZ2VyID0gbmV3IERlZXBNZXJnZXIoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBtZXJnZXIubWVyZ2UodGFyZ2V0LCBzb3VyY2VzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cbnZhciBkZWZhdWx0UmVjb25jaWxlciA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gdGhpcy5tZXJnZSh0YXJnZXRbcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbn07XG52YXIgRGVlcE1lcmdlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVlcE1lcmdlcihyZWNvbmNpbGVyKSB7XG4gICAgICAgIGlmIChyZWNvbmNpbGVyID09PSB2b2lkIDApIHsgcmVjb25jaWxlciA9IGRlZmF1bHRSZWNvbmNpbGVyOyB9XG4gICAgICAgIHRoaXMucmVjb25jaWxlciA9IHJlY29uY2lsZXI7XG4gICAgICAgIHRoaXMuaXNPYmplY3QgPSBpc09iamVjdDtcbiAgICAgICAgdGhpcy5wYXN0Q29waWVzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBEZWVwTWVyZ2VyLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY29udGV4dCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgY29udGV4dFtfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNPYmplY3Qoc291cmNlKSAmJiBpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZUtleSkge1xuICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgc291cmNlS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VmFsdWUgPSB0YXJnZXRbc291cmNlS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZVtzb3VyY2VLZXldICE9PSB0YXJnZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IF90aGlzLnJlY29uY2lsZXIuYXBwbHkoX3RoaXMsIF9fc3ByZWFkQXJyYXlzKFt0YXJnZXQsIHNvdXJjZSwgc291cmNlS2V5XSwgY29udGV4dCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdGFyZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBfdGhpcy5zaGFsbG93Q29weUZvck1lcmdlKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3NvdXJjZUtleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IF90aGlzLnNoYWxsb3dDb3B5Rm9yTWVyZ2UodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3NvdXJjZUtleV0gPSBzb3VyY2Vbc291cmNlS2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9O1xuICAgIERlZXBNZXJnZXIucHJvdG90eXBlLnNoYWxsb3dDb3B5Rm9yTWVyZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiAhdGhpcy5wYXN0Q29waWVzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IF9fYXNzaWduKHsgX19wcm90b19fOiBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpIH0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFzdENvcGllcy5hZGQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIHJldHVybiBEZWVwTWVyZ2VyO1xufSgpKTtcblxuZXhwb3J0IHsgRGVlcE1lcmdlciwgbWVyZ2VEZWVwLCBtZXJnZURlZXBBcnJheSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVyZ2VEZWVwLmpzLm1hcFxuIiwiaW1wb3J0IHsgaW52YXJpYW50IH0gZnJvbSAndHMtaW52YXJpYW50JztcbmltcG9ydCB7IHZpc2l0IH0gZnJvbSAnZ3JhcGhxbC9sYW5ndWFnZS92aXNpdG9yJztcblxuZnVuY3Rpb24gc2hvdWxkSW5jbHVkZShfYSwgdmFyaWFibGVzKSB7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSBfYS5kaXJlY3RpdmVzO1xuICAgIGlmICghZGlyZWN0aXZlcyB8fCAhZGlyZWN0aXZlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBnZXRJbmNsdXNpb25EaXJlY3RpdmVzKGRpcmVjdGl2ZXMpLmV2ZXJ5KGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgZGlyZWN0aXZlID0gX2EuZGlyZWN0aXZlLCBpZkFyZ3VtZW50ID0gX2EuaWZBcmd1bWVudDtcbiAgICAgICAgdmFyIGV2YWxlZFZhbHVlID0gZmFsc2U7XG4gICAgICAgIGlmIChpZkFyZ3VtZW50LnZhbHVlLmtpbmQgPT09ICdWYXJpYWJsZScpIHtcbiAgICAgICAgICAgIGV2YWxlZFZhbHVlID0gdmFyaWFibGVzICYmIHZhcmlhYmxlc1tpZkFyZ3VtZW50LnZhbHVlLm5hbWUudmFsdWVdO1xuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGV2YWxlZFZhbHVlICE9PSB2b2lkIDAsIDM2KSA6IGludmFyaWFudChldmFsZWRWYWx1ZSAhPT0gdm9pZCAwLCBcIkludmFsaWQgdmFyaWFibGUgcmVmZXJlbmNlZCBpbiBAXCIgKyBkaXJlY3RpdmUubmFtZS52YWx1ZSArIFwiIGRpcmVjdGl2ZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmFsZWRWYWx1ZSA9IGlmQXJndW1lbnQudmFsdWUudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZS5uYW1lLnZhbHVlID09PSAnc2tpcCcgPyAhZXZhbGVkVmFsdWUgOiBldmFsZWRWYWx1ZTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldERpcmVjdGl2ZU5hbWVzKHJvb3QpIHtcbiAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICB2aXNpdChyb290LCB7XG4gICAgICAgIERpcmVjdGl2ZTogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIG5hbWVzLnB1c2gobm9kZS5uYW1lLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gbmFtZXM7XG59XG5mdW5jdGlvbiBoYXNEaXJlY3RpdmVzKG5hbWVzLCByb290KSB7XG4gICAgcmV0dXJuIGdldERpcmVjdGl2ZU5hbWVzKHJvb3QpLnNvbWUoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIG5hbWVzLmluZGV4T2YobmFtZSkgPiAtMTsgfSk7XG59XG5mdW5jdGlvbiBoYXNDbGllbnRFeHBvcnRzKGRvY3VtZW50KSB7XG4gICAgcmV0dXJuIChkb2N1bWVudCAmJlxuICAgICAgICBoYXNEaXJlY3RpdmVzKFsnY2xpZW50J10sIGRvY3VtZW50KSAmJlxuICAgICAgICBoYXNEaXJlY3RpdmVzKFsnZXhwb3J0J10sIGRvY3VtZW50KSk7XG59XG5mdW5jdGlvbiBpc0luY2x1c2lvbkRpcmVjdGl2ZShfYSkge1xuICAgIHZhciB2YWx1ZSA9IF9hLm5hbWUudmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnc2tpcCcgfHwgdmFsdWUgPT09ICdpbmNsdWRlJztcbn1cbmZ1bmN0aW9uIGdldEluY2x1c2lvbkRpcmVjdGl2ZXMoZGlyZWN0aXZlcykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBpZiAoZGlyZWN0aXZlcyAmJiBkaXJlY3RpdmVzLmxlbmd0aCkge1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgaWYgKCFpc0luY2x1c2lvbkRpcmVjdGl2ZShkaXJlY3RpdmUpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmVBcmd1bWVudHMgPSBkaXJlY3RpdmUuYXJndW1lbnRzO1xuICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZU5hbWUgPSBkaXJlY3RpdmUubmFtZS52YWx1ZTtcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChkaXJlY3RpdmVBcmd1bWVudHMgJiYgZGlyZWN0aXZlQXJndW1lbnRzLmxlbmd0aCA9PT0gMSwgMzcpIDogaW52YXJpYW50KGRpcmVjdGl2ZUFyZ3VtZW50cyAmJiBkaXJlY3RpdmVBcmd1bWVudHMubGVuZ3RoID09PSAxLCBcIkluY29ycmVjdCBudW1iZXIgb2YgYXJndW1lbnRzIGZvciB0aGUgQFwiICsgZGlyZWN0aXZlTmFtZSArIFwiIGRpcmVjdGl2ZS5cIik7XG4gICAgICAgICAgICB2YXIgaWZBcmd1bWVudCA9IGRpcmVjdGl2ZUFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChpZkFyZ3VtZW50Lm5hbWUgJiYgaWZBcmd1bWVudC5uYW1lLnZhbHVlID09PSAnaWYnLCAzOCkgOiBpbnZhcmlhbnQoaWZBcmd1bWVudC5uYW1lICYmIGlmQXJndW1lbnQubmFtZS52YWx1ZSA9PT0gJ2lmJywgXCJJbnZhbGlkIGFyZ3VtZW50IGZvciB0aGUgQFwiICsgZGlyZWN0aXZlTmFtZSArIFwiIGRpcmVjdGl2ZS5cIik7XG4gICAgICAgICAgICB2YXIgaWZWYWx1ZSA9IGlmQXJndW1lbnQudmFsdWU7XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoaWZWYWx1ZSAmJlxuICAgICAgICAgICAgICAgIChpZlZhbHVlLmtpbmQgPT09ICdWYXJpYWJsZScgfHwgaWZWYWx1ZS5raW5kID09PSAnQm9vbGVhblZhbHVlJyksIDM5KSA6IGludmFyaWFudChpZlZhbHVlICYmXG4gICAgICAgICAgICAgICAgKGlmVmFsdWUua2luZCA9PT0gJ1ZhcmlhYmxlJyB8fCBpZlZhbHVlLmtpbmQgPT09ICdCb29sZWFuVmFsdWUnKSwgXCJBcmd1bWVudCBmb3IgdGhlIEBcIiArIGRpcmVjdGl2ZU5hbWUgKyBcIiBkaXJlY3RpdmUgbXVzdCBiZSBhIHZhcmlhYmxlIG9yIGEgYm9vbGVhbiB2YWx1ZS5cIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGRpcmVjdGl2ZTogZGlyZWN0aXZlLCBpZkFyZ3VtZW50OiBpZkFyZ3VtZW50IH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IHsgZ2V0RGlyZWN0aXZlTmFtZXMsIGdldEluY2x1c2lvbkRpcmVjdGl2ZXMsIGhhc0NsaWVudEV4cG9ydHMsIGhhc0RpcmVjdGl2ZXMsIHNob3VsZEluY2x1ZGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpcmVjdGl2ZXMuanMubWFwXG4iLCJpbXBvcnQgeyBfX2Fzc2lnbiwgX19zcHJlYWRBcnJheXMgfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgeyBJbnZhcmlhbnRFcnJvciwgaW52YXJpYW50IH0gZnJvbSAndHMtaW52YXJpYW50JztcblxuZnVuY3Rpb24gZ2V0RnJhZ21lbnRRdWVyeURvY3VtZW50KGRvY3VtZW50LCBmcmFnbWVudE5hbWUpIHtcbiAgICB2YXIgYWN0dWFsRnJhZ21lbnROYW1lID0gZnJhZ21lbnROYW1lO1xuICAgIHZhciBmcmFnbWVudHMgPSBbXTtcbiAgICBkb2N1bWVudC5kZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmIChkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gbmV3IEludmFyaWFudEVycm9yKDQwKSA6IG5ldyBJbnZhcmlhbnRFcnJvcihcIkZvdW5kIGEgXCIgKyBkZWZpbml0aW9uLm9wZXJhdGlvbiArIFwiIG9wZXJhdGlvblwiICsgKGRlZmluaXRpb24ubmFtZSA/IFwiIG5hbWVkICdcIiArIGRlZmluaXRpb24ubmFtZS52YWx1ZSArIFwiJ1wiIDogJycpICsgXCIuIFwiICtcbiAgICAgICAgICAgICAgICAnTm8gb3BlcmF0aW9ucyBhcmUgYWxsb3dlZCB3aGVuIHVzaW5nIGEgZnJhZ21lbnQgYXMgYSBxdWVyeS4gT25seSBmcmFnbWVudHMgYXJlIGFsbG93ZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZmluaXRpb24ua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgIGZyYWdtZW50cy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBhY3R1YWxGcmFnbWVudE5hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmcmFnbWVudHMubGVuZ3RoID09PSAxLCA0MSkgOiBpbnZhcmlhbnQoZnJhZ21lbnRzLmxlbmd0aCA9PT0gMSwgXCJGb3VuZCBcIiArIGZyYWdtZW50cy5sZW5ndGggKyBcIiBmcmFnbWVudHMuIGBmcmFnbWVudE5hbWVgIG11c3QgYmUgcHJvdmlkZWQgd2hlbiB0aGVyZSBpcyBub3QgZXhhY3RseSAxIGZyYWdtZW50LlwiKTtcbiAgICAgICAgYWN0dWFsRnJhZ21lbnROYW1lID0gZnJhZ21lbnRzWzBdLm5hbWUudmFsdWU7XG4gICAgfVxuICAgIHZhciBxdWVyeSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBkb2N1bWVudCksIHsgZGVmaW5pdGlvbnM6IF9fc3ByZWFkQXJyYXlzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBraW5kOiAnT3BlcmF0aW9uRGVmaW5pdGlvbicsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiAncXVlcnknLFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGcmFnbWVudFNwcmVhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhY3R1YWxGcmFnbWVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSwgZG9jdW1lbnQuZGVmaW5pdGlvbnMpIH0pO1xuICAgIHJldHVybiBxdWVyeTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50TWFwKGZyYWdtZW50cykge1xuICAgIGlmIChmcmFnbWVudHMgPT09IHZvaWQgMCkgeyBmcmFnbWVudHMgPSBbXTsgfVxuICAgIHZhciBzeW1UYWJsZSA9IHt9O1xuICAgIGZyYWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnbWVudCkge1xuICAgICAgICBzeW1UYWJsZVtmcmFnbWVudC5uYW1lLnZhbHVlXSA9IGZyYWdtZW50O1xuICAgIH0pO1xuICAgIHJldHVybiBzeW1UYWJsZTtcbn1cbmZ1bmN0aW9uIGdldEZyYWdtZW50RnJvbVNlbGVjdGlvbihzZWxlY3Rpb24sIGZyYWdtZW50TWFwKSB7XG4gICAgc3dpdGNoIChzZWxlY3Rpb24ua2luZCkge1xuICAgICAgICBjYXNlICdJbmxpbmVGcmFnbWVudCc6XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0aW9uO1xuICAgICAgICBjYXNlICdGcmFnbWVudFNwcmVhZCc6IHtcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGZyYWdtZW50TWFwICYmIGZyYWdtZW50TWFwW3NlbGVjdGlvbi5uYW1lLnZhbHVlXTtcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmcmFnbWVudCwgNDIpIDogaW52YXJpYW50KGZyYWdtZW50LCBcIk5vIGZyYWdtZW50IG5hbWVkIFwiICsgc2VsZWN0aW9uLm5hbWUudmFsdWUgKyBcIi5cIik7XG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgY3JlYXRlRnJhZ21lbnRNYXAsIGdldEZyYWdtZW50RnJvbVNlbGVjdGlvbiwgZ2V0RnJhZ21lbnRRdWVyeURvY3VtZW50IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcmFnbWVudHMuanMubWFwXG4iLCJpbXBvcnQgeyBpbnZhcmlhbnQsIEludmFyaWFudEVycm9yIH0gZnJvbSAndHMtaW52YXJpYW50JztcbmltcG9ydCB7IHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbiB9IGZyb20gJy4vc3RvcmVVdGlscy5qcyc7XG5cbmZ1bmN0aW9uIGNoZWNrRG9jdW1lbnQoZG9jKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGRvYyAmJiBkb2Mua2luZCA9PT0gJ0RvY3VtZW50JywgMjIpIDogaW52YXJpYW50KGRvYyAmJiBkb2Mua2luZCA9PT0gJ0RvY3VtZW50JywgXCJFeHBlY3RpbmcgYSBwYXJzZWQgR3JhcGhRTCBkb2N1bWVudC4gUGVyaGFwcyB5b3UgbmVlZCB0byB3cmFwIHRoZSBxdWVyeSBzdHJpbmcgaW4gYSBcXFwiZ3FsXFxcIiB0YWc/IGh0dHA6Ly9kb2NzLmFwb2xsb3N0YWNrLmNvbS9hcG9sbG8tY2xpZW50L2NvcmUuaHRtbCNncWxcIik7XG4gICAgdmFyIG9wZXJhdGlvbnMgPSBkb2MuZGVmaW5pdGlvbnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5raW5kICE9PSAnRnJhZ21lbnREZWZpbml0aW9uJzsgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgICAgICBpZiAoZGVmaW5pdGlvbi5raW5kICE9PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IG5ldyBJbnZhcmlhbnRFcnJvcigyMykgOiBuZXcgSW52YXJpYW50RXJyb3IoXCJTY2hlbWEgdHlwZSBkZWZpbml0aW9ucyBub3QgYWxsb3dlZCBpbiBxdWVyaWVzLiBGb3VuZDogXFxcIlwiICsgZGVmaW5pdGlvbi5raW5kICsgXCJcXFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH0pO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChvcGVyYXRpb25zLmxlbmd0aCA8PSAxLCAyNCkgOiBpbnZhcmlhbnQob3BlcmF0aW9ucy5sZW5ndGggPD0gMSwgXCJBbWJpZ3VvdXMgR3JhcGhRTCBkb2N1bWVudDogY29udGFpbnMgXCIgKyBvcGVyYXRpb25zLmxlbmd0aCArIFwiIG9wZXJhdGlvbnNcIik7XG4gICAgcmV0dXJuIGRvYztcbn1cbmZ1bmN0aW9uIGdldE9wZXJhdGlvbkRlZmluaXRpb24oZG9jKSB7XG4gICAgY2hlY2tEb2N1bWVudChkb2MpO1xuICAgIHJldHVybiBkb2MuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7IHJldHVybiBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJzsgfSlbMF07XG59XG5mdW5jdGlvbiBnZXRPcGVyYXRpb25OYW1lKGRvYykge1xuICAgIHJldHVybiAoZG9jLmRlZmluaXRpb25zXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nICYmIGRlZmluaXRpb24ubmFtZTtcbiAgICB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Lm5hbWUudmFsdWU7IH0pWzBdIHx8IG51bGwpO1xufVxuZnVuY3Rpb24gZ2V0RnJhZ21lbnREZWZpbml0aW9ucyhkb2MpIHtcbiAgICByZXR1cm4gZG9jLmRlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAoZGVmaW5pdGlvbikgeyByZXR1cm4gZGVmaW5pdGlvbi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJzsgfSk7XG59XG5mdW5jdGlvbiBnZXRRdWVyeURlZmluaXRpb24oZG9jKSB7XG4gICAgdmFyIHF1ZXJ5RGVmID0gZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihkb2MpO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChxdWVyeURlZiAmJiBxdWVyeURlZi5vcGVyYXRpb24gPT09ICdxdWVyeScsIDI1KSA6IGludmFyaWFudChxdWVyeURlZiAmJiBxdWVyeURlZi5vcGVyYXRpb24gPT09ICdxdWVyeScsICdNdXN0IGNvbnRhaW4gYSBxdWVyeSBkZWZpbml0aW9uLicpO1xuICAgIHJldHVybiBxdWVyeURlZjtcbn1cbmZ1bmN0aW9uIGdldEZyYWdtZW50RGVmaW5pdGlvbihkb2MpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZG9jLmtpbmQgPT09ICdEb2N1bWVudCcsIDI2KSA6IGludmFyaWFudChkb2Mua2luZCA9PT0gJ0RvY3VtZW50JywgXCJFeHBlY3RpbmcgYSBwYXJzZWQgR3JhcGhRTCBkb2N1bWVudC4gUGVyaGFwcyB5b3UgbmVlZCB0byB3cmFwIHRoZSBxdWVyeSBzdHJpbmcgaW4gYSBcXFwiZ3FsXFxcIiB0YWc/IGh0dHA6Ly9kb2NzLmFwb2xsb3N0YWNrLmNvbS9hcG9sbG8tY2xpZW50L2NvcmUuaHRtbCNncWxcIik7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGRvYy5kZWZpbml0aW9ucy5sZW5ndGggPD0gMSwgMjcpIDogaW52YXJpYW50KGRvYy5kZWZpbml0aW9ucy5sZW5ndGggPD0gMSwgJ0ZyYWdtZW50IG11c3QgaGF2ZSBleGFjdGx5IG9uZSBkZWZpbml0aW9uLicpO1xuICAgIHZhciBmcmFnbWVudERlZiA9IGRvYy5kZWZpbml0aW9uc1swXTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZnJhZ21lbnREZWYua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicsIDI4KSA6IGludmFyaWFudChmcmFnbWVudERlZi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJywgJ011c3QgYmUgYSBmcmFnbWVudCBkZWZpbml0aW9uLicpO1xuICAgIHJldHVybiBmcmFnbWVudERlZjtcbn1cbmZ1bmN0aW9uIGdldE1haW5EZWZpbml0aW9uKHF1ZXJ5RG9jKSB7XG4gICAgY2hlY2tEb2N1bWVudChxdWVyeURvYyk7XG4gICAgdmFyIGZyYWdtZW50RGVmaW5pdGlvbjtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gcXVlcnlEb2MuZGVmaW5pdGlvbnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBkZWZpbml0aW9uID0gX2FbX2ldO1xuICAgICAgICBpZiAoZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBvcGVyYXRpb24gPSBkZWZpbml0aW9uLm9wZXJhdGlvbjtcbiAgICAgICAgICAgIGlmIChvcGVyYXRpb24gPT09ICdxdWVyeScgfHxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24gPT09ICdtdXRhdGlvbicgfHxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24gPT09ICdzdWJzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZmluaXRpb24ua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicgJiYgIWZyYWdtZW50RGVmaW5pdGlvbikge1xuICAgICAgICAgICAgZnJhZ21lbnREZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZnJhZ21lbnREZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiBmcmFnbWVudERlZmluaXRpb247XG4gICAgfVxuICAgIHRocm93IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IG5ldyBJbnZhcmlhbnRFcnJvcigyOSkgOiBuZXcgSW52YXJpYW50RXJyb3IoJ0V4cGVjdGVkIGEgcGFyc2VkIEdyYXBoUUwgcXVlcnkgd2l0aCBhIHF1ZXJ5LCBtdXRhdGlvbiwgc3Vic2NyaXB0aW9uLCBvciBhIGZyYWdtZW50LicpO1xufVxuZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlcyhkZWZpbml0aW9uKSB7XG4gICAgdmFyIGRlZmF1bHRWYWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciBkZWZzID0gZGVmaW5pdGlvbiAmJiBkZWZpbml0aW9uLnZhcmlhYmxlRGVmaW5pdGlvbnM7XG4gICAgaWYgKGRlZnMgJiYgZGVmcy5sZW5ndGgpIHtcbiAgICAgICAgZGVmcy5mb3JFYWNoKGZ1bmN0aW9uIChkZWYpIHtcbiAgICAgICAgICAgIGlmIChkZWYuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGRlZmF1bHRWYWx1ZXMsIGRlZi52YXJpYWJsZS5uYW1lLCBkZWYuZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0VmFsdWVzO1xufVxuXG5leHBvcnQgeyBjaGVja0RvY3VtZW50LCBnZXREZWZhdWx0VmFsdWVzLCBnZXRGcmFnbWVudERlZmluaXRpb24sIGdldEZyYWdtZW50RGVmaW5pdGlvbnMsIGdldE1haW5EZWZpbml0aW9uLCBnZXRPcGVyYXRpb25EZWZpbml0aW9uLCBnZXRPcGVyYXRpb25OYW1lLCBnZXRRdWVyeURlZmluaXRpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdldEZyb21BU1QuanMubWFwXG4iLCJpbXBvcnQgeyBJbnZhcmlhbnRFcnJvciB9IGZyb20gJ3RzLWludmFyaWFudCc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJ2Zhc3QtanNvbi1zdGFibGUtc3RyaW5naWZ5JztcbmltcG9ydCB7IGdldEZyYWdtZW50RnJvbVNlbGVjdGlvbiB9IGZyb20gJy4vZnJhZ21lbnRzLmpzJztcblxuZnVuY3Rpb24gbWFrZVJlZmVyZW5jZShpZCkge1xuICAgIHJldHVybiB7IF9fcmVmOiBTdHJpbmcoaWQpIH07XG59XG5mdW5jdGlvbiBpc1JlZmVyZW5jZShvYmopIHtcbiAgICByZXR1cm4gQm9vbGVhbihvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5fX3JlZiA9PT0gJ3N0cmluZycpO1xufVxuZnVuY3Rpb24gaXNTdHJpbmdWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnU3RyaW5nVmFsdWUnO1xufVxuZnVuY3Rpb24gaXNCb29sZWFuVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0Jvb2xlYW5WYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0ludFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdJbnRWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0Zsb2F0VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0Zsb2F0VmFsdWUnO1xufVxuZnVuY3Rpb24gaXNWYXJpYWJsZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnVmFyaWFibGUnO1xufVxuZnVuY3Rpb24gaXNPYmplY3RWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnT2JqZWN0VmFsdWUnO1xufVxuZnVuY3Rpb24gaXNMaXN0VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0xpc3RWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0VudW1WYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnRW51bVZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzTnVsbFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdOdWxsVmFsdWUnO1xufVxuZnVuY3Rpb24gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGFyZ09iaiwgbmFtZSwgdmFsdWUsIHZhcmlhYmxlcykge1xuICAgIGlmIChpc0ludFZhbHVlKHZhbHVlKSB8fCBpc0Zsb2F0VmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IE51bWJlcih2YWx1ZS52YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQm9vbGVhblZhbHVlKHZhbHVlKSB8fCBpc1N0cmluZ1ZhbHVlKHZhbHVlKSkge1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3RWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIG5lc3RlZEFyZ09ial8xID0ge307XG4gICAgICAgIHZhbHVlLmZpZWxkcy5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihuZXN0ZWRBcmdPYmpfMSwgb2JqLm5hbWUsIG9iai52YWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IG5lc3RlZEFyZ09ial8xO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1ZhcmlhYmxlKHZhbHVlKSkge1xuICAgICAgICB2YXIgdmFyaWFibGVWYWx1ZSA9ICh2YXJpYWJsZXMgfHwge30pW3ZhbHVlLm5hbWUudmFsdWVdO1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSB2YXJpYWJsZVZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0xpc3RWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gdmFsdWUudmFsdWVzLm1hcChmdW5jdGlvbiAobGlzdFZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbmVzdGVkQXJnQXJyYXlPYmogPSB7fTtcbiAgICAgICAgICAgIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihuZXN0ZWRBcmdBcnJheU9iaiwgbmFtZSwgbGlzdFZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZEFyZ0FycmF5T2JqW25hbWUudmFsdWVdO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNFbnVtVmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc051bGxWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gbnVsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IG5ldyBJbnZhcmlhbnRFcnJvcigzMCkgOiBuZXcgSW52YXJpYW50RXJyb3IoXCJUaGUgaW5saW5lIGFyZ3VtZW50IFxcXCJcIiArIG5hbWUudmFsdWUgKyBcIlxcXCIgb2Yga2luZCBcXFwiXCIgKyB2YWx1ZS5raW5kICsgXCJcXFwiXCIgK1xuICAgICAgICAgICAgJ2lzIG5vdCBzdXBwb3J0ZWQuIFVzZSB2YXJpYWJsZXMgaW5zdGVhZCBvZiBpbmxpbmUgYXJndW1lbnRzIHRvICcgK1xuICAgICAgICAgICAgJ292ZXJjb21lIHRoaXMgbGltaXRhdGlvbi4nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdG9yZUtleU5hbWVGcm9tRmllbGQoZmllbGQsIHZhcmlhYmxlcykge1xuICAgIHZhciBkaXJlY3RpdmVzT2JqID0gbnVsbDtcbiAgICBpZiAoZmllbGQuZGlyZWN0aXZlcykge1xuICAgICAgICBkaXJlY3RpdmVzT2JqID0ge307XG4gICAgICAgIGZpZWxkLmRpcmVjdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzT2JqW2RpcmVjdGl2ZS5uYW1lLnZhbHVlXSA9IHt9O1xuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmUuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gX2EubmFtZSwgdmFsdWUgPSBfYS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihkaXJlY3RpdmVzT2JqW2RpcmVjdGl2ZS5uYW1lLnZhbHVlXSwgbmFtZSwgdmFsdWUsIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgYXJnT2JqID0gbnVsbDtcbiAgICBpZiAoZmllbGQuYXJndW1lbnRzICYmIGZpZWxkLmFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgYXJnT2JqID0ge307XG4gICAgICAgIGZpZWxkLmFyZ3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfYS5uYW1lLCB2YWx1ZSA9IF9hLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihhcmdPYmosIG5hbWUsIHZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFN0b3JlS2V5TmFtZShmaWVsZC5uYW1lLnZhbHVlLCBhcmdPYmosIGRpcmVjdGl2ZXNPYmopO1xufVxudmFyIEtOT1dOX0RJUkVDVElWRVMgPSBbXG4gICAgJ2Nvbm5lY3Rpb24nLFxuICAgICdpbmNsdWRlJyxcbiAgICAnc2tpcCcsXG4gICAgJ2NsaWVudCcsXG4gICAgJ3Jlc3QnLFxuICAgICdleHBvcnQnLFxuXTtcbmZ1bmN0aW9uIGdldFN0b3JlS2V5TmFtZShmaWVsZE5hbWUsIGFyZ3MsIGRpcmVjdGl2ZXMpIHtcbiAgICBpZiAoYXJncyAmJlxuICAgICAgICBkaXJlY3RpdmVzICYmXG4gICAgICAgIGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXSAmJlxuICAgICAgICBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2tleSddKSB7XG4gICAgICAgIGlmIChkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2ZpbHRlciddICYmXG4gICAgICAgICAgICBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2ZpbHRlciddLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJLZXlzID0gZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydmaWx0ZXInXVxuICAgICAgICAgICAgICAgID8gZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydmaWx0ZXInXVxuICAgICAgICAgICAgICAgIDogW107XG4gICAgICAgICAgICBmaWx0ZXJLZXlzLnNvcnQoKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZEFyZ3NfMSA9IHt9O1xuICAgICAgICAgICAgZmlsdGVyS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEFyZ3NfMVtrZXldID0gYXJnc1trZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydrZXknXSArIFwiKFwiICsgSlNPTi5zdHJpbmdpZnkoZmlsdGVyZWRBcmdzXzEpICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydrZXknXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgY29tcGxldGVGaWVsZE5hbWUgPSBmaWVsZE5hbWU7XG4gICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgdmFyIHN0cmluZ2lmaWVkQXJncyA9IHN0cmluZ2lmeShhcmdzKTtcbiAgICAgICAgY29tcGxldGVGaWVsZE5hbWUgKz0gXCIoXCIgKyBzdHJpbmdpZmllZEFyZ3MgKyBcIilcIjtcbiAgICB9XG4gICAgaWYgKGRpcmVjdGl2ZXMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGlyZWN0aXZlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoS05PV05fRElSRUNUSVZFUy5pbmRleE9mKGtleSkgIT09IC0xKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmIChkaXJlY3RpdmVzW2tleV0gJiYgT2JqZWN0LmtleXMoZGlyZWN0aXZlc1trZXldKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUZpZWxkTmFtZSArPSBcIkBcIiArIGtleSArIFwiKFwiICsgSlNPTi5zdHJpbmdpZnkoZGlyZWN0aXZlc1trZXldKSArIFwiKVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGVGaWVsZE5hbWUgKz0gXCJAXCIgKyBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY29tcGxldGVGaWVsZE5hbWU7XG59XG5mdW5jdGlvbiBhcmd1bWVudHNPYmplY3RGcm9tRmllbGQoZmllbGQsIHZhcmlhYmxlcykge1xuICAgIGlmIChmaWVsZC5hcmd1bWVudHMgJiYgZmllbGQuYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB2YXIgYXJnT2JqXzEgPSB7fTtcbiAgICAgICAgZmllbGQuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGFyZ09ial8xLCBuYW1lLCB2YWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhcmdPYmpfMTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiByZXN1bHRLZXlOYW1lRnJvbUZpZWxkKGZpZWxkKSB7XG4gICAgcmV0dXJuIGZpZWxkLmFsaWFzID8gZmllbGQuYWxpYXMudmFsdWUgOiBmaWVsZC5uYW1lLnZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0VHlwZW5hbWVGcm9tUmVzdWx0KHJlc3VsdCwgc2VsZWN0aW9uU2V0LCBmcmFnbWVudE1hcCkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0Ll9fdHlwZW5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQuX190eXBlbmFtZTtcbiAgICB9XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHNlbGVjdGlvblNldC5zZWxlY3Rpb25zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgc2VsZWN0aW9uID0gX2FbX2ldO1xuICAgICAgICBpZiAoaXNGaWVsZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uLm5hbWUudmFsdWUgPT09ICdfX3R5cGVuYW1lJykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRbcmVzdWx0S2V5TmFtZUZyb21GaWVsZChzZWxlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0eXBlbmFtZSA9IGdldFR5cGVuYW1lRnJvbVJlc3VsdChyZXN1bHQsIGdldEZyYWdtZW50RnJvbVNlbGVjdGlvbihzZWxlY3Rpb24sIGZyYWdtZW50TWFwKS5zZWxlY3Rpb25TZXQsIGZyYWdtZW50TWFwKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHlwZW5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaXNGaWVsZChzZWxlY3Rpb24pIHtcbiAgICByZXR1cm4gc2VsZWN0aW9uLmtpbmQgPT09ICdGaWVsZCc7XG59XG5mdW5jdGlvbiBpc0lubGluZUZyYWdtZW50KHNlbGVjdGlvbikge1xuICAgIHJldHVybiBzZWxlY3Rpb24ua2luZCA9PT0gJ0lubGluZUZyYWdtZW50Jztcbn1cblxuZXhwb3J0IHsgYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkLCBnZXRTdG9yZUtleU5hbWUsIGdldFR5cGVuYW1lRnJvbVJlc3VsdCwgaXNGaWVsZCwgaXNJbmxpbmVGcmFnbWVudCwgaXNSZWZlcmVuY2UsIG1ha2VSZWZlcmVuY2UsIHJlc3VsdEtleU5hbWVGcm9tRmllbGQsIHN0b3JlS2V5TmFtZUZyb21GaWVsZCwgdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdG9yZVV0aWxzLmpzLm1hcFxuIiwiaW1wb3J0IHsgX19hc3NpZ24sIF9fc3ByZWFkQXJyYXlzIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgaW52YXJpYW50IH0gZnJvbSAndHMtaW52YXJpYW50JztcbmltcG9ydCB7IGNyZWF0ZUZyYWdtZW50TWFwIH0gZnJvbSAnLi9mcmFnbWVudHMuanMnO1xuaW1wb3J0IHsgaXNGaWVsZCwgaXNJbmxpbmVGcmFnbWVudCB9IGZyb20gJy4vc3RvcmVVdGlscy5qcyc7XG5pbXBvcnQgeyBjaGVja0RvY3VtZW50LCBnZXRGcmFnbWVudERlZmluaXRpb25zLCBnZXRPcGVyYXRpb25EZWZpbml0aW9uLCBnZXRGcmFnbWVudERlZmluaXRpb24sIGdldE1haW5EZWZpbml0aW9uIH0gZnJvbSAnLi9nZXRGcm9tQVNULmpzJztcbmltcG9ydCB7IHZpc2l0IH0gZnJvbSAnZ3JhcGhxbC9sYW5ndWFnZS92aXNpdG9yJztcbmltcG9ydCB7IGZpbHRlckluUGxhY2UgfSBmcm9tICcuLi9jb21tb24vZmlsdGVySW5QbGFjZS5qcyc7XG5cbnZhciBUWVBFTkFNRV9GSUVMRCA9IHtcbiAgICBraW5kOiAnRmllbGQnLFxuICAgIG5hbWU6IHtcbiAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICB2YWx1ZTogJ19fdHlwZW5hbWUnLFxuICAgIH0sXG59O1xuZnVuY3Rpb24gaXNFbXB0eShvcCwgZnJhZ21lbnRzKSB7XG4gICAgcmV0dXJuIG9wLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmV2ZXJ5KGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGlvbi5raW5kID09PSAnRnJhZ21lbnRTcHJlYWQnICYmXG4gICAgICAgICAgICBpc0VtcHR5KGZyYWdtZW50c1tzZWxlY3Rpb24ubmFtZS52YWx1ZV0sIGZyYWdtZW50cyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBudWxsSWZEb2NJc0VtcHR5KGRvYykge1xuICAgIHJldHVybiBpc0VtcHR5KGdldE9wZXJhdGlvbkRlZmluaXRpb24oZG9jKSB8fCBnZXRGcmFnbWVudERlZmluaXRpb24oZG9jKSwgY3JlYXRlRnJhZ21lbnRNYXAoZ2V0RnJhZ21lbnREZWZpbml0aW9ucyhkb2MpKSlcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogZG9jO1xufVxuZnVuY3Rpb24gZ2V0RGlyZWN0aXZlTWF0Y2hlcihkaXJlY3RpdmVzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGRpcmVjdGl2ZU1hdGNoZXIoZGlyZWN0aXZlKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3RpdmVzLnNvbWUoZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgcmV0dXJuIChkaXIubmFtZSAmJiBkaXIubmFtZSA9PT0gZGlyZWN0aXZlLm5hbWUudmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgKGRpci50ZXN0ICYmIGRpci50ZXN0KGRpcmVjdGl2ZSkpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVtb3ZlRGlyZWN0aXZlc0Zyb21Eb2N1bWVudChkaXJlY3RpdmVzLCBkb2MpIHtcbiAgICB2YXIgdmFyaWFibGVzSW5Vc2UgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciB2YXJpYWJsZXNUb1JlbW92ZSA9IFtdO1xuICAgIHZhciBmcmFnbWVudFNwcmVhZHNJblVzZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIGZyYWdtZW50U3ByZWFkc1RvUmVtb3ZlID0gW107XG4gICAgdmFyIG1vZGlmaWVkRG9jID0gbnVsbElmRG9jSXNFbXB0eSh2aXNpdChkb2MsIHtcbiAgICAgICAgVmFyaWFibGU6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSwgX2tleSwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5raW5kICE9PSAnVmFyaWFibGVEZWZpbml0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNJblVzZVtub2RlLm5hbWUudmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBGaWVsZDoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZXMgJiYgbm9kZS5kaXJlY3RpdmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzaG91bGRSZW1vdmVGaWVsZCA9IGRpcmVjdGl2ZXMuc29tZShmdW5jdGlvbiAoZGlyZWN0aXZlKSB7IHJldHVybiBkaXJlY3RpdmUucmVtb3ZlOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFJlbW92ZUZpZWxkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRpcmVjdGl2ZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGlyZWN0aXZlcy5zb21lKGdldERpcmVjdGl2ZU1hdGNoZXIoZGlyZWN0aXZlcykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFyZ3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZy52YWx1ZS5raW5kID09PSAnVmFyaWFibGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNUb1JlbW92ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcmcudmFsdWUubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRBbGxGcmFnbWVudFNwcmVhZHNGcm9tU2VsZWN0aW9uU2V0KG5vZGUuc2VsZWN0aW9uU2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U3ByZWFkc1RvUmVtb3ZlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZnJhZy5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgRnJhZ21lbnRTcHJlYWQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50U3ByZWFkc0luVXNlW25vZGUubmFtZS52YWx1ZV0gPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgRGlyZWN0aXZlOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0RGlyZWN0aXZlTWF0Y2hlcihkaXJlY3RpdmVzKShub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pKTtcbiAgICBpZiAobW9kaWZpZWREb2MgJiZcbiAgICAgICAgZmlsdGVySW5QbGFjZSh2YXJpYWJsZXNUb1JlbW92ZSwgZnVuY3Rpb24gKHYpIHsgcmV0dXJuICEhdi5uYW1lICYmICF2YXJpYWJsZXNJblVzZVt2Lm5hbWVdOyB9KS5sZW5ndGgpIHtcbiAgICAgICAgbW9kaWZpZWREb2MgPSByZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQodmFyaWFibGVzVG9SZW1vdmUsIG1vZGlmaWVkRG9jKTtcbiAgICB9XG4gICAgaWYgKG1vZGlmaWVkRG9jICYmXG4gICAgICAgIGZpbHRlckluUGxhY2UoZnJhZ21lbnRTcHJlYWRzVG9SZW1vdmUsIGZ1bmN0aW9uIChmcykgeyByZXR1cm4gISFmcy5uYW1lICYmICFmcmFnbWVudFNwcmVhZHNJblVzZVtmcy5uYW1lXTsgfSlcbiAgICAgICAgICAgIC5sZW5ndGgpIHtcbiAgICAgICAgbW9kaWZpZWREb2MgPSByZW1vdmVGcmFnbWVudFNwcmVhZEZyb21Eb2N1bWVudChmcmFnbWVudFNwcmVhZHNUb1JlbW92ZSwgbW9kaWZpZWREb2MpO1xuICAgIH1cbiAgICByZXR1cm4gbW9kaWZpZWREb2M7XG59XG5mdW5jdGlvbiBhZGRUeXBlbmFtZVRvRG9jdW1lbnQoZG9jKSB7XG4gICAgcmV0dXJuIHZpc2l0KGNoZWNrRG9jdW1lbnQoZG9jKSwge1xuICAgICAgICBTZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSwgX2tleSwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCAmJlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGlvbnMgPSBub2RlLnNlbGVjdGlvbnM7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHNraXAgPSBzZWxlY3Rpb25zLnNvbWUoZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGlzRmllbGQoc2VsZWN0aW9uKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbi5uYW1lLnZhbHVlID09PSAnX190eXBlbmFtZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24ubmFtZS52YWx1ZS5sYXN0SW5kZXhPZignX18nLCAwKSA9PT0gMCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChza2lwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIGlmIChpc0ZpZWxkKGZpZWxkKSAmJlxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kaXJlY3RpdmVzICYmXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRpcmVjdGl2ZXMuc29tZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lLnZhbHVlID09PSAnZXhwb3J0JzsgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIG5vZGUpLCB7IHNlbGVjdGlvbnM6IF9fc3ByZWFkQXJyYXlzKHNlbGVjdGlvbnMsIFtUWVBFTkFNRV9GSUVMRF0pIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbmFkZFR5cGVuYW1lVG9Eb2N1bWVudC5hZGRlZCA9IGZ1bmN0aW9uIChmaWVsZCkge1xuICAgIHJldHVybiBmaWVsZCA9PT0gVFlQRU5BTUVfRklFTEQ7XG59O1xudmFyIGNvbm5lY3Rpb25SZW1vdmVDb25maWcgPSB7XG4gICAgdGVzdDogZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xuICAgICAgICB2YXIgd2lsbFJlbW92ZSA9IGRpcmVjdGl2ZS5uYW1lLnZhbHVlID09PSAnY29ubmVjdGlvbic7XG4gICAgICAgIGlmICh3aWxsUmVtb3ZlKSB7XG4gICAgICAgICAgICBpZiAoIWRpcmVjdGl2ZS5hcmd1bWVudHMgfHxcbiAgICAgICAgICAgICAgICAhZGlyZWN0aXZlLmFyZ3VtZW50cy5zb21lKGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIGFyZy5uYW1lLnZhbHVlID09PSAna2V5JzsgfSkpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgfHwgaW52YXJpYW50Lndhcm4oJ1JlbW92aW5nIGFuIEBjb25uZWN0aW9uIGRpcmVjdGl2ZSBldmVuIHRob3VnaCBpdCBkb2VzIG5vdCBoYXZlIGEga2V5LiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1lvdSBtYXkgd2FudCB0byB1c2UgdGhlIGtleSBwYXJhbWV0ZXIgdG8gc3BlY2lmeSBhIHN0b3JlIGtleS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lsbFJlbW92ZTtcbiAgICB9LFxufTtcbmZ1bmN0aW9uIHJlbW92ZUNvbm5lY3Rpb25EaXJlY3RpdmVGcm9tRG9jdW1lbnQoZG9jKSB7XG4gICAgcmV0dXJuIHJlbW92ZURpcmVjdGl2ZXNGcm9tRG9jdW1lbnQoW2Nvbm5lY3Rpb25SZW1vdmVDb25maWddLCBjaGVja0RvY3VtZW50KGRvYykpO1xufVxuZnVuY3Rpb24gZ2V0QXJndW1lbnRNYXRjaGVyKGNvbmZpZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBhcmd1bWVudE1hdGNoZXIoYXJndW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbmZpZy5zb21lKGZ1bmN0aW9uIChhQ29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJndW1lbnQudmFsdWUgJiZcbiAgICAgICAgICAgICAgICBhcmd1bWVudC52YWx1ZS5raW5kID09PSAnVmFyaWFibGUnICYmXG4gICAgICAgICAgICAgICAgYXJndW1lbnQudmFsdWUubmFtZSAmJlxuICAgICAgICAgICAgICAgIChhQ29uZmlnLm5hbWUgPT09IGFyZ3VtZW50LnZhbHVlLm5hbWUudmFsdWUgfHxcbiAgICAgICAgICAgICAgICAgICAgKGFDb25maWcudGVzdCAmJiBhQ29uZmlnLnRlc3QoYXJndW1lbnQpKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiByZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQoY29uZmlnLCBkb2MpIHtcbiAgICB2YXIgYXJnTWF0Y2hlciA9IGdldEFyZ3VtZW50TWF0Y2hlcihjb25maWcpO1xuICAgIHJldHVybiBudWxsSWZEb2NJc0VtcHR5KHZpc2l0KGRvYywge1xuICAgICAgICBPcGVyYXRpb25EZWZpbml0aW9uOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIG5vZGUpLCB7IHZhcmlhYmxlRGVmaW5pdGlvbnM6IG5vZGUudmFyaWFibGVEZWZpbml0aW9ucyA/IG5vZGUudmFyaWFibGVEZWZpbml0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHZhckRlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFjb25maWcuc29tZShmdW5jdGlvbiAoYXJnKSB7IHJldHVybiBhcmcubmFtZSA9PT0gdmFyRGVmLnZhcmlhYmxlLm5hbWUudmFsdWU7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9KSA6IFtdIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgRmllbGQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBzaG91bGRSZW1vdmVGaWVsZCA9IGNvbmZpZy5zb21lKGZ1bmN0aW9uIChhcmdDb25maWcpIHsgcmV0dXJuIGFyZ0NvbmZpZy5yZW1vdmU7IH0pO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRSZW1vdmVGaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJnTWF0Y2hDb3VudF8xID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuYXJndW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFyZ3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJnTWF0Y2hlcihhcmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ01hdGNoQ291bnRfMSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdNYXRjaENvdW50XzEgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgQXJndW1lbnQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChhcmdNYXRjaGVyKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSkpO1xufVxuZnVuY3Rpb24gcmVtb3ZlRnJhZ21lbnRTcHJlYWRGcm9tRG9jdW1lbnQoY29uZmlnLCBkb2MpIHtcbiAgICBmdW5jdGlvbiBlbnRlcihub2RlKSB7XG4gICAgICAgIGlmIChjb25maWcuc29tZShmdW5jdGlvbiAoZGVmKSB7IHJldHVybiBkZWYubmFtZSA9PT0gbm9kZS5uYW1lLnZhbHVlOyB9KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxJZkRvY0lzRW1wdHkodmlzaXQoZG9jLCB7XG4gICAgICAgIEZyYWdtZW50U3ByZWFkOiB7IGVudGVyOiBlbnRlciB9LFxuICAgICAgICBGcmFnbWVudERlZmluaXRpb246IHsgZW50ZXI6IGVudGVyIH0sXG4gICAgfSkpO1xufVxuZnVuY3Rpb24gZ2V0QWxsRnJhZ21lbnRTcHJlYWRzRnJvbVNlbGVjdGlvblNldChzZWxlY3Rpb25TZXQpIHtcbiAgICB2YXIgYWxsRnJhZ21lbnRzID0gW107XG4gICAgc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIGlmICgoaXNGaWVsZChzZWxlY3Rpb24pIHx8IGlzSW5saW5lRnJhZ21lbnQoc2VsZWN0aW9uKSkgJiZcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgIGdldEFsbEZyYWdtZW50U3ByZWFkc0Zyb21TZWxlY3Rpb25TZXQoc2VsZWN0aW9uLnNlbGVjdGlvblNldCkuZm9yRWFjaChmdW5jdGlvbiAoZnJhZykgeyByZXR1cm4gYWxsRnJhZ21lbnRzLnB1c2goZnJhZyk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGVjdGlvbi5raW5kID09PSAnRnJhZ21lbnRTcHJlYWQnKSB7XG4gICAgICAgICAgICBhbGxGcmFnbWVudHMucHVzaChzZWxlY3Rpb24pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFsbEZyYWdtZW50cztcbn1cbmZ1bmN0aW9uIGJ1aWxkUXVlcnlGcm9tU2VsZWN0aW9uU2V0KGRvY3VtZW50KSB7XG4gICAgdmFyIGRlZmluaXRpb24gPSBnZXRNYWluRGVmaW5pdGlvbihkb2N1bWVudCk7XG4gICAgdmFyIGRlZmluaXRpb25PcGVyYXRpb24gPSBkZWZpbml0aW9uLm9wZXJhdGlvbjtcbiAgICBpZiAoZGVmaW5pdGlvbk9wZXJhdGlvbiA9PT0gJ3F1ZXJ5Jykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfVxuICAgIHZhciBtb2RpZmllZERvYyA9IHZpc2l0KGRvY3VtZW50LCB7XG4gICAgICAgIE9wZXJhdGlvbkRlZmluaXRpb246IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbm9kZSksIHsgb3BlcmF0aW9uOiAncXVlcnknIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gbW9kaWZpZWREb2M7XG59XG5mdW5jdGlvbiByZW1vdmVDbGllbnRTZXRzRnJvbURvY3VtZW50KGRvY3VtZW50KSB7XG4gICAgY2hlY2tEb2N1bWVudChkb2N1bWVudCk7XG4gICAgdmFyIG1vZGlmaWVkRG9jID0gcmVtb3ZlRGlyZWN0aXZlc0Zyb21Eb2N1bWVudChbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChkaXJlY3RpdmUpIHsgcmV0dXJuIGRpcmVjdGl2ZS5uYW1lLnZhbHVlID09PSAnY2xpZW50JzsgfSxcbiAgICAgICAgICAgIHJlbW92ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLCBkb2N1bWVudCk7XG4gICAgaWYgKG1vZGlmaWVkRG9jKSB7XG4gICAgICAgIG1vZGlmaWVkRG9jID0gdmlzaXQobW9kaWZpZWREb2MsIHtcbiAgICAgICAgICAgIEZyYWdtZW50RGVmaW5pdGlvbjoge1xuICAgICAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1R5cGVuYW1lT25seSA9IG5vZGUuc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZXZlcnkoZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc0ZpZWxkKHNlbGVjdGlvbikgJiYgc2VsZWN0aW9uLm5hbWUudmFsdWUgPT09ICdfX3R5cGVuYW1lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVHlwZW5hbWVPbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtb2RpZmllZERvYztcbn1cblxuZXhwb3J0IHsgYWRkVHlwZW5hbWVUb0RvY3VtZW50LCBidWlsZFF1ZXJ5RnJvbVNlbGVjdGlvblNldCwgcmVtb3ZlQXJndW1lbnRzRnJvbURvY3VtZW50LCByZW1vdmVDbGllbnRTZXRzRnJvbURvY3VtZW50LCByZW1vdmVDb25uZWN0aW9uRGlyZWN0aXZlRnJvbURvY3VtZW50LCByZW1vdmVEaXJlY3RpdmVzRnJvbURvY3VtZW50LCByZW1vdmVGcmFnbWVudFNwcmVhZEZyb21Eb2N1bWVudCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNmb3JtLmpzLm1hcFxuIiwiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnemVuLW9ic2VydmFibGUnO1xuaW1wb3J0ICdzeW1ib2wtb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5IH0gZnJvbSAnLi9pdGVyYXRpb24uanMnO1xuXG5mdW5jdGlvbiBpc1Byb21pc2VMaWtlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG59XG52YXIgQ29uY2FzdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbmNhc3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29uY2FzdChzb3VyY2VzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgX3RoaXMuYWRkT2JzZXJ2ZXIob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJlbW92ZU9ic2VydmVyKG9ic2VydmVyKTsgfTtcbiAgICAgICAgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuICAgICAgICBfdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgX3RoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICBfdGhpcy5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpcy5oYW5kbGVycyA9IHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc3ViICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxhdGVzdCA9IFtcIm5leHRcIiwgcmVzdWx0XTtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZU9ic2VydmVyc1NhZmVseShfdGhpcy5vYnNlcnZlcnMsIFwibmV4dFwiLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnN1YiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc3ViKVxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN1YiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxhdGVzdCA9IFtcImVycm9yXCIsIGVycm9yXTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZU9ic2VydmVyc1NhZmVseShfdGhpcy5vYnNlcnZlcnMsIFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zdWIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gX3RoaXMuc291cmNlcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdWIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmxhdGVzdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxhdGVzdFswXSA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlKF90aGlzLmxhdGVzdFsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5KF90aGlzLm9ic2VydmVycywgXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1Byb21pc2VMaWtlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudGhlbihmdW5jdGlvbiAob2JzKSB7IHJldHVybiBfdGhpcy5zdWIgPSBvYnMuc3Vic2NyaWJlKF90aGlzLmhhbmRsZXJzKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdWIgPSB2YWx1ZS5zdWJzY3JpYmUoX3RoaXMuaGFuZGxlcnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuY2FuY2VsID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgICAgX3RoaXMucmVqZWN0KHJlYXNvbik7XG4gICAgICAgICAgICBfdGhpcy5zb3VyY2VzID0gW107XG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVycy5jb21wbGV0ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5wcm9taXNlLmNhdGNoKGZ1bmN0aW9uIChfKSB7IH0pO1xuICAgICAgICBpZiAoaXNQcm9taXNlTGlrZShzb3VyY2VzKSkge1xuICAgICAgICAgICAgc291cmNlcy50aGVuKGZ1bmN0aW9uIChpdGVyYWJsZSkgeyByZXR1cm4gX3RoaXMuc3RhcnQoaXRlcmFibGUpOyB9LCBfdGhpcy5oYW5kbGVycy5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zdGFydChzb3VyY2VzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbmNhc3QucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKHNvdXJjZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViICE9PSB2b2lkIDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuc291cmNlcyA9IEFycmF5LmZyb20oc291cmNlcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMuY29tcGxldGUoKTtcbiAgICB9O1xuICAgIENvbmNhc3QucHJvdG90eXBlLmFkZE9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5vYnNlcnZlcnMuaGFzKG9ic2VydmVyKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF0ZXN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHRPckVycm9yID0gdGhpcy5sYXRlc3RbMF07XG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZCA9IG9ic2VydmVyW25leHRPckVycm9yXTtcbiAgICAgICAgICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZC5jYWxsKG9ic2VydmVyLCB0aGlzLmxhdGVzdFsxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1YiA9PT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICBuZXh0T3JFcnJvciA9PT0gXCJuZXh0XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5hZGQob2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25jYXN0LnByb3RvdHlwZS5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlciwgcXVpZXRseSkge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcnMuZGVsZXRlKG9ic2VydmVyKSAmJlxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuc2l6ZSA8IDEpIHtcbiAgICAgICAgICAgIGlmIChxdWlldGx5KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWplY3QobmV3IEVycm9yKFwiT2JzZXJ2YWJsZSBjYW5jZWxsZWQgcHJlbWF0dXJlbHlcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdWIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25jYXN0LnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIG9uY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMub2JzZXJ2ZXJzLmRlbGV0ZShvYnNlcnZlcik7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9ic2VydmVyID0ge1xuICAgICAgICAgICAgbmV4dDogb25jZSxcbiAgICAgICAgICAgIGVycm9yOiBvbmNlLFxuICAgICAgICAgICAgY29tcGxldGU6IG9uY2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWRkT2JzZXJ2ZXIob2JzZXJ2ZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbmNhc3Q7XG59KE9ic2VydmFibGUpKTtcbmlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLnNwZWNpZXMpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uY2FzdCwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgICAgdmFsdWU6IE9ic2VydmFibGUsXG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IENvbmNhc3QgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbmNhc3QuanMubWFwXG4iLCJpbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICd6ZW4tb2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3N5bWJvbC1vYnNlcnZhYmxlJztcblxuZnVuY3Rpb24gYXN5bmNNYXAob2JzZXJ2YWJsZSwgbWFwRm4sIGNhdGNoRm4pIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHZhciBuZXh0ID0gb2JzZXJ2ZXIubmV4dCwgZXJyb3IgPSBvYnNlcnZlci5lcnJvciwgY29tcGxldGUgPSBvYnNlcnZlci5jb21wbGV0ZTtcbiAgICAgICAgdmFyIGFjdGl2ZUNhbGxiYWNrQ291bnQgPSAwO1xuICAgICAgICB2YXIgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VDYWxsYmFjayhleGFtaW5lciwgZGVsZWdhdGUpIHtcbiAgICAgICAgICAgIGlmIChleGFtaW5lcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgICsrYWN0aXZlQ2FsbGJhY2tDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHJlc29sdmUoZXhhbWluZXIoYXJnKSk7IH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1hY3RpdmVDYWxsYmFja0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCAmJiBuZXh0LmNhbGwob2JzZXJ2ZXIsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1hY3RpdmVDYWxsYmFja0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgJiYgZXJyb3IuY2FsbChvYnNlcnZlciwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykgeyByZXR1cm4gZGVsZWdhdGUgJiYgZGVsZWdhdGUuY2FsbChvYnNlcnZlciwgYXJnKTsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFuZGxlciA9IHtcbiAgICAgICAgICAgIG5leHQ6IG1ha2VDYWxsYmFjayhtYXBGbiwgbmV4dCksXG4gICAgICAgICAgICBlcnJvcjogbWFrZUNhbGxiYWNrKGNhdGNoRm4sIGVycm9yKSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZUNhbGxiYWNrQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGUgJiYgY29tcGxldGUuY2FsbChvYnNlcnZlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHN1YiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKGhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc3ViLnVuc3Vic2NyaWJlKCk7IH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGFzeW5jTWFwIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3luY01hcC5qcy5tYXBcbiIsImZ1bmN0aW9uIGl0ZXJhdGVPYnNlcnZlcnNTYWZlbHkob2JzZXJ2ZXJzLCBtZXRob2QsIGFyZ3VtZW50KSB7XG4gICAgdmFyIG9ic2VydmVyc1dpdGhNZXRob2QgPSBbXTtcbiAgICBvYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzKSB7IHJldHVybiBvYnNbbWV0aG9kXSAmJiBvYnNlcnZlcnNXaXRoTWV0aG9kLnB1c2gob2JzKTsgfSk7XG4gICAgb2JzZXJ2ZXJzV2l0aE1ldGhvZC5mb3JFYWNoKGZ1bmN0aW9uIChvYnMpIHsgcmV0dXJuIG9ic1ttZXRob2RdKGFyZ3VtZW50KTsgfSk7XG59XG5cbmV4cG9ydCB7IGl0ZXJhdGVPYnNlcnZlcnNTYWZlbHkgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWl0ZXJhdGlvbi5qcy5tYXBcbiIsInZhciB2ZXJzaW9uID0gJ2xvY2FsJztcblxuZXhwb3J0IHsgdmVyc2lvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmVyc2lvbi5qcy5tYXBcbiIsImV4cG9ydCAqIGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbiIsIi8vIFRoaXMgY3VycmVudENvbnRleHQgdmFyaWFibGUgd2lsbCBvbmx5IGJlIHVzZWQgaWYgdGhlIG1ha2VTbG90Q2xhc3NcclxuLy8gZnVuY3Rpb24gaXMgY2FsbGVkLCB3aGljaCBoYXBwZW5zIG9ubHkgaWYgdGhpcyBpcyB0aGUgZmlyc3QgY29weSBvZiB0aGVcclxuLy8gQHdyeS9jb250ZXh0IHBhY2thZ2UgdG8gYmUgaW1wb3J0ZWQuXHJcbnZhciBjdXJyZW50Q29udGV4dCA9IG51bGw7XHJcbi8vIFRoaXMgdW5pcXVlIGludGVybmFsIG9iamVjdCBpcyB1c2VkIHRvIGRlbm90ZSB0aGUgYWJzZW5jZSBvZiBhIHZhbHVlXHJcbi8vIGZvciBhIGdpdmVuIFNsb3QsIGFuZCBpcyBuZXZlciBleHBvc2VkIHRvIG91dHNpZGUgY29kZS5cclxudmFyIE1JU1NJTkdfVkFMVUUgPSB7fTtcclxudmFyIGlkQ291bnRlciA9IDE7XHJcbi8vIEFsdGhvdWdoIHdlIGNhbid0IGRvIGFueXRoaW5nIGFib3V0IHRoZSBjb3N0IG9mIGR1cGxpY2F0ZWQgY29kZSBmcm9tXHJcbi8vIGFjY2lkZW50YWxseSBidW5kbGluZyBtdWx0aXBsZSBjb3BpZXMgb2YgdGhlIEB3cnkvY29udGV4dCBwYWNrYWdlLCB3ZSBjYW5cclxuLy8gYXZvaWQgY3JlYXRpbmcgdGhlIFNsb3QgY2xhc3MgbW9yZSB0aGFuIG9uY2UgdXNpbmcgbWFrZVNsb3RDbGFzcy5cclxudmFyIG1ha2VTbG90Q2xhc3MgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTbG90KCkge1xyXG4gICAgICAgIC8vIElmIHlvdSBoYXZlIGEgU2xvdCBvYmplY3QsIHlvdSBjYW4gZmluZCBvdXQgaXRzIHNsb3QuaWQsIGJ1dCB5b3UgY2Fubm90XHJcbiAgICAgICAgLy8gZ3Vlc3MgdGhlIHNsb3QuaWQgb2YgYSBTbG90IHlvdSBkb24ndCBoYXZlIGFjY2VzcyB0bywgdGhhbmtzIHRvIHRoZVxyXG4gICAgICAgIC8vIHJhbmRvbWl6ZWQgc3VmZml4LlxyXG4gICAgICAgIHRoaXMuaWQgPSBbXHJcbiAgICAgICAgICAgIFwic2xvdFwiLFxyXG4gICAgICAgICAgICBpZENvdW50ZXIrKyxcclxuICAgICAgICAgICAgRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiksXHJcbiAgICAgICAgXS5qb2luKFwiOlwiKTtcclxuICAgIH1cclxuICAgIFNsb3QucHJvdG90eXBlLmhhc1ZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGNvbnRleHRfMSA9IGN1cnJlbnRDb250ZXh0OyBjb250ZXh0XzE7IGNvbnRleHRfMSA9IGNvbnRleHRfMS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgLy8gV2UgdXNlIHRoZSBTbG90IG9iamVjdCBpc2VsZiBhcyBhIGtleSB0byBpdHMgdmFsdWUsIHdoaWNoIG1lYW5zIHRoZVxyXG4gICAgICAgICAgICAvLyB2YWx1ZSBjYW5ub3QgYmUgb2J0YWluZWQgd2l0aG91dCBhIHJlZmVyZW5jZSB0byB0aGUgU2xvdCBvYmplY3QuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkIGluIGNvbnRleHRfMS5zbG90cykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gY29udGV4dF8xLnNsb3RzW3RoaXMuaWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBNSVNTSU5HX1ZBTFVFKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRleHRfMSAhPT0gY3VycmVudENvbnRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDYWNoZSB0aGUgdmFsdWUgaW4gY3VycmVudENvbnRleHQuc2xvdHMgc28gdGhlIG5leHQgbG9va3VwIHdpbGxcclxuICAgICAgICAgICAgICAgICAgICAvLyBiZSBmYXN0ZXIuIFRoaXMgY2FjaGluZyBpcyBzYWZlIGJlY2F1c2UgdGhlIHRyZWUgb2YgY29udGV4dHMgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHZhbHVlcyBvZiB0aGUgc2xvdHMgYXJlIGxvZ2ljYWxseSBpbW11dGFibGUuXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbnRleHQuc2xvdHNbdGhpcy5pZF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50Q29udGV4dCkge1xyXG4gICAgICAgICAgICAvLyBJZiBhIHZhbHVlIHdhcyBub3QgZm91bmQgZm9yIHRoaXMgU2xvdCwgaXQncyBuZXZlciBnb2luZyB0byBiZSBmb3VuZFxyXG4gICAgICAgICAgICAvLyBubyBtYXR0ZXIgaG93IG1hbnkgdGltZXMgd2UgbG9vayBpdCB1cCwgc28gd2UgbWlnaHQgYXMgd2VsbCBjYWNoZVxyXG4gICAgICAgICAgICAvLyB0aGUgYWJzZW5jZSBvZiB0aGUgdmFsdWUsIHRvby5cclxuICAgICAgICAgICAgY3VycmVudENvbnRleHQuc2xvdHNbdGhpcy5pZF0gPSBNSVNTSU5HX1ZBTFVFO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgU2xvdC5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzVmFsdWUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudENvbnRleHQuc2xvdHNbdGhpcy5pZF07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNsb3QucHJvdG90eXBlLndpdGhWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgY2FsbGJhY2ssIFxyXG4gICAgLy8gR2l2ZW4gdGhlIHByZXZhbGVuY2Ugb2YgYXJyb3cgZnVuY3Rpb25zLCBzcGVjaWZ5aW5nIGFyZ3VtZW50cyBpcyBsaWtlbHlcclxuICAgIC8vIHRvIGJlIG11Y2ggbW9yZSBjb21tb24gdGhhbiBzcGVjaWZ5aW5nIGB0aGlzYCwgaGVuY2UgdGhpcyBvcmRlcmluZzpcclxuICAgIGFyZ3MsIHRoaXNBcmcpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdmFyIHNsb3RzID0gKF9hID0ge1xyXG4gICAgICAgICAgICAgICAgX19wcm90b19fOiBudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF9hW3RoaXMuaWRdID0gdmFsdWUsXHJcbiAgICAgICAgICAgIF9hKTtcclxuICAgICAgICB2YXIgcGFyZW50ID0gY3VycmVudENvbnRleHQ7XHJcbiAgICAgICAgY3VycmVudENvbnRleHQgPSB7IHBhcmVudDogcGFyZW50LCBzbG90czogc2xvdHMgfTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkgYWxsb3dzIHRoZSBhcmd1bWVudHMgYXJyYXkgYXJndW1lbnQgdG8gYmVcclxuICAgICAgICAgICAgLy8gb21pdHRlZCBvciB1bmRlZmluZWQsIHNvIGFyZ3MhIGlzIGZpbmUgaGVyZS5cclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgY3VycmVudENvbnRleHQgPSBwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIENhcHR1cmUgdGhlIGN1cnJlbnQgY29udGV4dCBhbmQgd3JhcCBhIGNhbGxiYWNrIGZ1bmN0aW9uIHNvIHRoYXQgaXRcclxuICAgIC8vIHJlZXN0YWJsaXNoZXMgdGhlIGNhcHR1cmVkIGNvbnRleHQgd2hlbiBjYWxsZWQuXHJcbiAgICBTbG90LmJpbmQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IGN1cnJlbnRDb250ZXh0O1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzYXZlZCA9IGN1cnJlbnRDb250ZXh0O1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29udGV4dCA9IHNhdmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvLyBJbW1lZGlhdGVseSBydW4gYSBjYWxsYmFjayBmdW5jdGlvbiB3aXRob3V0IGFueSBjYXB0dXJlZCBjb250ZXh0LlxyXG4gICAgU2xvdC5ub0NvbnRleHQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIFxyXG4gICAgLy8gR2l2ZW4gdGhlIHByZXZhbGVuY2Ugb2YgYXJyb3cgZnVuY3Rpb25zLCBzcGVjaWZ5aW5nIGFyZ3VtZW50cyBpcyBsaWtlbHlcclxuICAgIC8vIHRvIGJlIG11Y2ggbW9yZSBjb21tb24gdGhhbiBzcGVjaWZ5aW5nIGB0aGlzYCwgaGVuY2UgdGhpcyBvcmRlcmluZzpcclxuICAgIGFyZ3MsIHRoaXNBcmcpIHtcclxuICAgICAgICBpZiAoY3VycmVudENvbnRleHQpIHtcclxuICAgICAgICAgICAgdmFyIHNhdmVkID0gY3VycmVudENvbnRleHQ7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29udGV4dCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAvLyBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkgYWxsb3dzIHRoZSBhcmd1bWVudHMgYXJyYXkgYXJndW1lbnQgdG8gYmVcclxuICAgICAgICAgICAgICAgIC8vIG9taXR0ZWQgb3IgdW5kZWZpbmVkLCBzbyBhcmdzISBpcyBmaW5lIGhlcmUuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkodGhpc0FyZywgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29udGV4dCA9IHNhdmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkodGhpc0FyZywgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBTbG90O1xyXG59KCkpOyB9O1xyXG4vLyBXZSBzdG9yZSBhIHNpbmdsZSBnbG9iYWwgaW1wbGVtZW50YXRpb24gb2YgdGhlIFNsb3QgY2xhc3MgYXMgYSBwZXJtYW5lbnRcclxuLy8gbm9uLWVudW1lcmFibGUgc3ltYm9sIHByb3BlcnR5IG9mIHRoZSBBcnJheSBjb25zdHJ1Y3Rvci4gVGhpcyBvYmZ1c2NhdGlvblxyXG4vLyBkb2VzIG5vdGhpbmcgdG8gcHJldmVudCBhY2Nlc3MgdG8gdGhlIFNsb3QgY2xhc3MsIGJ1dCBhdCBsZWFzdCBpdCBlbnN1cmVzXHJcbi8vIHRoZSBpbXBsZW1lbnRhdGlvbiAoaS5lLiBjdXJyZW50Q29udGV4dCkgY2Fubm90IGJlIHRhbXBlcmVkIHdpdGgsIGFuZCBhbGxcclxuLy8gY29waWVzIG9mIHRoZSBAd3J5L2NvbnRleHQgcGFja2FnZSAoaG9wZWZ1bGx5IGp1c3Qgb25lKSB3aWxsIHNoYXJlIHRoZVxyXG4vLyBzYW1lIFNsb3QgaW1wbGVtZW50YXRpb24uIFNpbmNlIHRoZSBmaXJzdCBjb3B5IG9mIHRoZSBAd3J5L2NvbnRleHQgcGFja2FnZVxyXG4vLyB0byBiZSBpbXBvcnRlZCB3aW5zLCB0aGlzIHRlY2huaXF1ZSBpbXBvc2VzIGEgdmVyeSBoaWdoIGNvc3QgZm9yIGFueVxyXG4vLyBmdXR1cmUgYnJlYWtpbmcgY2hhbmdlcyB0byB0aGUgU2xvdCBjbGFzcy5cclxudmFyIGdsb2JhbEtleSA9IFwiQHdyeS9jb250ZXh0OlNsb3RcIjtcclxudmFyIGhvc3QgPSBBcnJheTtcclxudmFyIFNsb3QgPSBob3N0W2dsb2JhbEtleV0gfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIFNsb3QgPSBtYWtlU2xvdENsYXNzKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShob3N0LCBnbG9iYWxLZXksIHtcclxuICAgICAgICAgICAgdmFsdWU6IGhvc3RbZ2xvYmFsS2V5XSA9IFNsb3QsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICByZXR1cm4gU2xvdDtcclxuICAgIH1cclxufSgpO1xuXG52YXIgYmluZCA9IFNsb3QuYmluZCwgbm9Db250ZXh0ID0gU2xvdC5ub0NvbnRleHQ7XHJcbmZ1bmN0aW9uIHNldFRpbWVvdXRXaXRoQ29udGV4dChjYWxsYmFjaywgZGVsYXkpIHtcclxuICAgIHJldHVybiBzZXRUaW1lb3V0KGJpbmQoY2FsbGJhY2spLCBkZWxheSk7XHJcbn1cclxuLy8gVHVybiBhbnkgZ2VuZXJhdG9yIGZ1bmN0aW9uIGludG8gYW4gYXN5bmMgZnVuY3Rpb24gKHVzaW5nIHlpZWxkIGluc3RlYWRcclxuLy8gb2YgYXdhaXQpLCB3aXRoIGNvbnRleHQgYXV0b21hdGljYWxseSBwcmVzZXJ2ZWQgYWNyb3NzIHlpZWxkcy5cclxuZnVuY3Rpb24gYXN5bmNGcm9tR2VuKGdlbkZuKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBnZW4gPSBnZW5Gbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHZhciBib3VuZE5leHQgPSBiaW5kKGdlbi5uZXh0KTtcclxuICAgICAgICB2YXIgYm91bmRUaHJvdyA9IGJpbmQoZ2VuLnRocm93KTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmd1bWVudCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gbWV0aG9kLmNhbGwoZ2VuLCBhcmd1bWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gcmVzdWx0LmRvbmUgPyByZXNvbHZlIDogaW52b2tlTmV4dDtcclxuICAgICAgICAgICAgICAgIGlmIChpc1Byb21pc2VMaWtlKHJlc3VsdC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUudGhlbihuZXh0LCByZXN1bHQuZG9uZSA/IHJlamVjdCA6IGludm9rZVRocm93KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQocmVzdWx0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaW52b2tlTmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gaW52b2tlKGJvdW5kTmV4dCwgdmFsdWUpOyB9O1xyXG4gICAgICAgICAgICB2YXIgaW52b2tlVGhyb3cgPSBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGludm9rZShib3VuZFRocm93LCBlcnJvcik7IH07XHJcbiAgICAgICAgICAgIGludm9rZU5leHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gaXNQcm9taXNlTGlrZSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxuLy8gSWYgeW91IHVzZSB0aGUgZmliZXJzIG5wbSBwYWNrYWdlIHRvIGltcGxlbWVudCBjb3JvdXRpbmVzIGluIE5vZGUuanMsXHJcbi8vIHlvdSBzaG91bGQgY2FsbCB0aGlzIGZ1bmN0aW9uIGF0IGxlYXN0IG9uY2UgdG8gZW5zdXJlIGNvbnRleHQgbWFuYWdlbWVudFxyXG4vLyByZW1haW5zIGNvaGVyZW50IGFjcm9zcyBhbnkgeWllbGRzLlxyXG52YXIgd3JhcHBlZEZpYmVycyA9IFtdO1xyXG5mdW5jdGlvbiB3cmFwWWllbGRpbmdGaWJlck1ldGhvZHMoRmliZXIpIHtcclxuICAgIC8vIFRoZXJlIGNhbiBiZSBvbmx5IG9uZSBpbXBsZW1lbnRhdGlvbiBvZiBGaWJlciBwZXIgcHJvY2Vzcywgc28gdGhpcyBhcnJheVxyXG4gICAgLy8gc2hvdWxkIG5ldmVyIGdyb3cgbG9uZ2VyIHRoYW4gb25lIGVsZW1lbnQuXHJcbiAgICBpZiAod3JhcHBlZEZpYmVycy5pbmRleE9mKEZpYmVyKSA8IDApIHtcclxuICAgICAgICB2YXIgd3JhcCA9IGZ1bmN0aW9uIChvYmosIG1ldGhvZCkge1xyXG4gICAgICAgICAgICB2YXIgZm4gPSBvYmpbbWV0aG9kXTtcclxuICAgICAgICAgICAgb2JqW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9Db250ZXh0KGZuLCBhcmd1bWVudHMsIHRoaXMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gVGhlc2UgbWV0aG9kcyBjYW4geWllbGQsIGFjY29yZGluZyB0b1xyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9sYXZlcmRldC9ub2RlLWZpYmVycy9ibG9iL2RkZWJlZDliOGFlMzg4M2U1N2Y4MjJlMjEwOGU2OTQzZTVjOGQyYTgvZmliZXJzLmpzI0w5Ny1MMTAwXHJcbiAgICAgICAgd3JhcChGaWJlciwgXCJ5aWVsZFwiKTtcclxuICAgICAgICB3cmFwKEZpYmVyLnByb3RvdHlwZSwgXCJydW5cIik7XHJcbiAgICAgICAgd3JhcChGaWJlci5wcm90b3R5cGUsIFwidGhyb3dJbnRvXCIpO1xyXG4gICAgICAgIHdyYXBwZWRGaWJlcnMucHVzaChGaWJlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRmliZXI7XHJcbn1cblxuZXhwb3J0IHsgU2xvdCwgYXN5bmNGcm9tR2VuLCBiaW5kLCBub0NvbnRleHQsIHNldFRpbWVvdXRXaXRoQ29udGV4dCBhcyBzZXRUaW1lb3V0LCB3cmFwWWllbGRpbmdGaWJlck1ldGhvZHMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRleHQuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsgU2xvdCB9IGZyb20gJ0B3cnkvY29udGV4dCc7XG5leHBvcnQgeyBhc3luY0Zyb21HZW4sIGJpbmQgYXMgYmluZENvbnRleHQsIG5vQ29udGV4dCwgc2V0VGltZW91dCB9IGZyb20gJ0B3cnkvY29udGV4dCc7XG5cbmZ1bmN0aW9uIGRlZmF1bHREaXNwb3NlKCkgeyB9XHJcbnZhciBDYWNoZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENhY2hlKG1heCwgZGlzcG9zZSkge1xyXG4gICAgICAgIGlmIChtYXggPT09IHZvaWQgMCkgeyBtYXggPSBJbmZpbml0eTsgfVxyXG4gICAgICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHsgZGlzcG9zZSA9IGRlZmF1bHREaXNwb3NlOyB9XHJcbiAgICAgICAgdGhpcy5tYXggPSBtYXg7XHJcbiAgICAgICAgdGhpcy5kaXNwb3NlID0gZGlzcG9zZTtcclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLm5ld2VzdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbGRlc3QgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgQ2FjaGUucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGtleSk7XHJcbiAgICB9O1xyXG4gICAgQ2FjaGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLmdldEVudHJ5KGtleSk7XHJcbiAgICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnZhbHVlO1xyXG4gICAgfTtcclxuICAgIENhY2hlLnByb3RvdHlwZS5nZXRFbnRyeSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLm1hcC5nZXQoa2V5KTtcclxuICAgICAgICBpZiAoZW50cnkgJiYgZW50cnkgIT09IHRoaXMubmV3ZXN0KSB7XHJcbiAgICAgICAgICAgIHZhciBvbGRlciA9IGVudHJ5Lm9sZGVyLCBuZXdlciA9IGVudHJ5Lm5ld2VyO1xyXG4gICAgICAgICAgICBpZiAobmV3ZXIpIHtcclxuICAgICAgICAgICAgICAgIG5ld2VyLm9sZGVyID0gb2xkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9sZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBvbGRlci5uZXdlciA9IG5ld2VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVudHJ5Lm9sZGVyID0gdGhpcy5uZXdlc3Q7XHJcbiAgICAgICAgICAgIGVudHJ5Lm9sZGVyLm5ld2VyID0gZW50cnk7XHJcbiAgICAgICAgICAgIGVudHJ5Lm5ld2VyID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5uZXdlc3QgPSBlbnRyeTtcclxuICAgICAgICAgICAgaWYgKGVudHJ5ID09PSB0aGlzLm9sZGVzdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbGRlc3QgPSBuZXdlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZW50cnk7XHJcbiAgICB9O1xyXG4gICAgQ2FjaGUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5nZXRFbnRyeShrZXkpO1xyXG4gICAgICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZW50cnkudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZW50cnkgPSB7XHJcbiAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgIG5ld2VyOiBudWxsLFxyXG4gICAgICAgICAgICBvbGRlcjogdGhpcy5uZXdlc3RcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aGlzLm5ld2VzdCkge1xyXG4gICAgICAgICAgICB0aGlzLm5ld2VzdC5uZXdlciA9IGVudHJ5O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5ld2VzdCA9IGVudHJ5O1xyXG4gICAgICAgIHRoaXMub2xkZXN0ID0gdGhpcy5vbGRlc3QgfHwgZW50cnk7XHJcbiAgICAgICAgdGhpcy5tYXAuc2V0KGtleSwgZW50cnkpO1xyXG4gICAgICAgIHJldHVybiBlbnRyeS52YWx1ZTtcclxuICAgIH07XHJcbiAgICBDYWNoZS5wcm90b3R5cGUuY2xlYW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMub2xkZXN0ICYmIHRoaXMubWFwLnNpemUgPiB0aGlzLm1heCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZSh0aGlzLm9sZGVzdC5rZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBDYWNoZS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMubWFwLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkgPT09IHRoaXMubmV3ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld2VzdCA9IGVudHJ5Lm9sZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbnRyeSA9PT0gdGhpcy5vbGRlc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2xkZXN0ID0gZW50cnkubmV3ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVudHJ5Lm5ld2VyKSB7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5uZXdlci5vbGRlciA9IGVudHJ5Lm9sZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5vbGRlcikge1xyXG4gICAgICAgICAgICAgICAgZW50cnkub2xkZXIubmV3ZXIgPSBlbnRyeS5uZXdlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1hcC5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwb3NlKGVudHJ5LnZhbHVlLCBrZXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDYWNoZTtcclxufSgpKTtcblxudmFyIHBhcmVudEVudHJ5U2xvdCA9IG5ldyBTbG90KCk7XG5cbmZ1bmN0aW9uIG1heWJlVW5zdWJzY3JpYmUoZW50cnlPckRlcCkge1xyXG4gICAgdmFyIHVuc3Vic2NyaWJlID0gZW50cnlPckRlcC51bnN1YnNjcmliZTtcclxuICAgIGlmICh0eXBlb2YgdW5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIGVudHJ5T3JEZXAudW5zdWJzY3JpYmUgPSB2b2lkIDA7XHJcbiAgICAgICAgdW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufVxuXG52YXIgZW1wdHlTZXRQb29sID0gW107XHJcbnZhciBQT09MX1RBUkdFVF9TSVpFID0gMTAwO1xyXG4vLyBTaW5jZSB0aGlzIHBhY2thZ2UgbWlnaHQgYmUgdXNlZCBicm93c2Vycywgd2Ugc2hvdWxkIGF2b2lkIHVzaW5nIHRoZVxyXG4vLyBOb2RlIGJ1aWx0LWluIGFzc2VydCBtb2R1bGUuXHJcbmZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG9wdGlvbmFsTWVzc2FnZSkge1xyXG4gICAgaWYgKCFjb25kaXRpb24pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3Iob3B0aW9uYWxNZXNzYWdlIHx8IFwiYXNzZXJ0aW9uIGZhaWx1cmVcIik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdmFsdWVJcyhhLCBiKSB7XHJcbiAgICB2YXIgbGVuID0gYS5sZW5ndGg7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgLy8gVW5rbm93biB2YWx1ZXMgYXJlIG5vdCBlcXVhbCB0byBlYWNoIG90aGVyLlxyXG4gICAgbGVuID4gMCAmJlxyXG4gICAgICAgIC8vIEJvdGggdmFsdWVzIG11c3QgYmUgb3JkaW5hcnkgKG9yIGJvdGggZXhjZXB0aW9uYWwpIHRvIGJlIGVxdWFsLlxyXG4gICAgICAgIGxlbiA9PT0gYi5sZW5ndGggJiZcclxuICAgICAgICAvLyBUaGUgdW5kZXJseWluZyB2YWx1ZSBvciBleGNlcHRpb24gbXVzdCBiZSB0aGUgc2FtZS5cclxuICAgICAgICBhW2xlbiAtIDFdID09PSBiW2xlbiAtIDFdKTtcclxufVxyXG5mdW5jdGlvbiB2YWx1ZUdldCh2YWx1ZSkge1xyXG4gICAgc3dpdGNoICh2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICBjYXNlIDA6IHRocm93IG5ldyBFcnJvcihcInVua25vd24gdmFsdWVcIik7XHJcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gdmFsdWVbMF07XHJcbiAgICAgICAgY2FzZSAyOiB0aHJvdyB2YWx1ZVsxXTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB2YWx1ZUNvcHkodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZS5zbGljZSgwKTtcclxufVxyXG52YXIgRW50cnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFbnRyeShmbiwgYXJncykge1xyXG4gICAgICAgIHRoaXMuZm4gPSBmbjtcclxuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgICAgIHRoaXMucGFyZW50cyA9IG5ldyBTZXQoKTtcclxuICAgICAgICB0aGlzLmNoaWxkVmFsdWVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIC8vIFdoZW4gdGhpcyBFbnRyeSBoYXMgY2hpbGRyZW4gdGhhdCBhcmUgZGlydHksIHRoaXMgcHJvcGVydHkgYmVjb21lc1xyXG4gICAgICAgIC8vIGEgU2V0IGNvbnRhaW5pbmcgb3RoZXIgRW50cnkgb2JqZWN0cywgYm9ycm93ZWQgZnJvbSBlbXB0eVNldFBvb2wuXHJcbiAgICAgICAgLy8gV2hlbiB0aGUgc2V0IGJlY29tZXMgZW1wdHksIGl0IGdldHMgcmVjeWNsZWQgYmFjayB0byBlbXB0eVNldFBvb2wuXHJcbiAgICAgICAgdGhpcy5kaXJ0eUNoaWxkcmVuID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJlY29tcHV0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGVwcyA9IG51bGw7XHJcbiAgICAgICAgKytFbnRyeS5jb3VudDtcclxuICAgIH1cclxuICAgIEVudHJ5LnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMSAmJiAhbWlnaHRCZURpcnR5KHRoaXMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBUaGlzIGlzIHRoZSBtb3N0IGltcG9ydGFudCBtZXRob2Qgb2YgdGhlIEVudHJ5IEFQSSwgYmVjYXVzZSBpdFxyXG4gICAgLy8gZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjYWNoZWQgdGhpcy52YWx1ZSBjYW4gYmUgcmV0dXJuZWQgaW1tZWRpYXRlbHksXHJcbiAgICAvLyBvciBtdXN0IGJlIHJlY29tcHV0ZWQuIFRoZSBvdmVyYWxsIHBlcmZvcm1hbmNlIG9mIHRoZSBjYWNoaW5nIHN5c3RlbVxyXG4gICAgLy8gZGVwZW5kcyBvbiB0aGUgdHJ1dGggb2YgdGhlIGZvbGxvd2luZyBvYnNlcnZhdGlvbnM6ICgxKSB0aGlzLmRpcnR5IGlzXHJcbiAgICAvLyB1c3VhbGx5IGZhbHNlLCAoMikgdGhpcy5kaXJ0eUNoaWxkcmVuIGlzIHVzdWFsbHkgbnVsbC9lbXB0eSwgYW5kIHRodXNcclxuICAgIC8vICgzKSB2YWx1ZUdldCh0aGlzLnZhbHVlKSBpcyB1c3VhbGx5IHJldHVybmVkIHdpdGhvdXQgcmVjb21wdXRhdGlvbi5cclxuICAgIEVudHJ5LnByb3RvdHlwZS5yZWNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYXNzZXJ0KCF0aGlzLnJlY29tcHV0aW5nLCBcImFscmVhZHkgcmVjb21wdXRpbmdcIik7XHJcbiAgICAgICAgcmVtZW1iZXJQYXJlbnQodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIG1pZ2h0QmVEaXJ0eSh0aGlzKVxyXG4gICAgICAgICAgICA/IHJlYWxseVJlY29tcHV0ZSh0aGlzKVxyXG4gICAgICAgICAgICA6IHZhbHVlR2V0KHRoaXMudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIEVudHJ5LnByb3RvdHlwZS5zZXREaXJ0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudmFsdWUubGVuZ3RoID0gMDtcclxuICAgICAgICByZXBvcnREaXJ0eSh0aGlzKTtcclxuICAgICAgICBmb3JnZXRDaGlsZHJlbih0aGlzKTtcclxuICAgICAgICAvLyBXZSBjYW4gZ28gYWhlYWQgYW5kIHVuc3Vic2NyaWJlIGhlcmUsIHNpbmNlIGFueSBmdXJ0aGVyIGRpcnR5XHJcbiAgICAgICAgLy8gbm90aWZpY2F0aW9ucyB3ZSByZWNlaXZlIHdpbGwgYmUgcmVkdW5kYW50LCBhbmQgdW5zdWJzY3JpYmluZyBtYXlcclxuICAgICAgICAvLyBmcmVlIHVwIHNvbWUgcmVzb3VyY2VzLCBlLmcuIGZpbGUgd2F0Y2hlcnMuXHJcbiAgICAgICAgbWF5YmVVbnN1YnNjcmliZSh0aGlzKTtcclxuICAgIH07XHJcbiAgICBFbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGZvcmdldENoaWxkcmVuKHRoaXMpO1xyXG4gICAgICAgIG1heWJlVW5zdWJzY3JpYmUodGhpcyk7XHJcbiAgICAgICAgLy8gQmVjYXVzZSB0aGlzIGVudHJ5IGhhcyBiZWVuIGtpY2tlZCBvdXQgb2YgdGhlIGNhY2hlIChpbiBpbmRleC5qcyksXHJcbiAgICAgICAgLy8gd2UndmUgbG9zdCB0aGUgYWJpbGl0eSB0byBmaW5kIG91dCBpZi93aGVuIHRoaXMgZW50cnkgYmVjb21lcyBkaXJ0eSxcclxuICAgICAgICAvLyB3aGV0aGVyIHRoYXQgaGFwcGVucyB0aHJvdWdoIGEgc3Vic2NyaXB0aW9uLCBiZWNhdXNlIG9mIGEgZGlyZWN0IGNhbGxcclxuICAgICAgICAvLyB0byBlbnRyeS5zZXREaXJ0eSgpLCBvciBiZWNhdXNlIG9uZSBvZiBpdHMgY2hpbGRyZW4gYmVjb21lcyBkaXJ0eS5cclxuICAgICAgICAvLyBCZWNhdXNlIG9mIHRoaXMgbG9zcyBvZiBmdXR1cmUgaW5mb3JtYXRpb24sIHdlIGhhdmUgdG8gYXNzdW1lIHRoZVxyXG4gICAgICAgIC8vIHdvcnN0ICh0aGF0IHRoaXMgZW50cnkgbWlnaHQgaGF2ZSBiZWNvbWUgZGlydHkgdmVyeSBzb29uKSwgc28gd2UgbXVzdFxyXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IG1hcmsgdGhpcyBlbnRyeSdzIHBhcmVudHMgYXMgZGlydHkuIE5vcm1hbGx5IHdlIGNvdWxkXHJcbiAgICAgICAgLy8ganVzdCBjYWxsIGVudHJ5LnNldERpcnR5KCkgcmF0aGVyIHRoYW4gY2FsbGluZyBwYXJlbnQuc2V0RGlydHkoKSBmb3JcclxuICAgICAgICAvLyBlYWNoIHBhcmVudCwgYnV0IHRoYXQgd291bGQgbGVhdmUgdGhpcyBlbnRyeSBpbiBwYXJlbnQuY2hpbGRWYWx1ZXNcclxuICAgICAgICAvLyBhbmQgcGFyZW50LmRpcnR5Q2hpbGRyZW4sIHdoaWNoIHdvdWxkIHByZXZlbnQgdGhlIGNoaWxkIGZyb20gYmVpbmdcclxuICAgICAgICAvLyB0cnVseSBmb3Jnb3R0ZW4uXHJcbiAgICAgICAgdGhpcy5wYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHBhcmVudCkge1xyXG4gICAgICAgICAgICBwYXJlbnQuc2V0RGlydHkoKTtcclxuICAgICAgICAgICAgZm9yZ2V0Q2hpbGQocGFyZW50LCBfdGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgRW50cnkucHJvdG90eXBlLmRlcGVuZE9uID0gZnVuY3Rpb24gKGRlcCkge1xyXG4gICAgICAgIGRlcC5hZGQodGhpcyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRlcHMpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXBzID0gZW1wdHlTZXRQb29sLnBvcCgpIHx8IG5ldyBTZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZXBzLmFkZChkZXApO1xyXG4gICAgfTtcclxuICAgIEVudHJ5LnByb3RvdHlwZS5mb3JnZXREZXBzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVwcykge1xyXG4gICAgICAgICAgICB0aGlzLmRlcHMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7IHJldHVybiBkZXAuZGVsZXRlKF90aGlzKTsgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVwcy5jbGVhcigpO1xyXG4gICAgICAgICAgICBlbXB0eVNldFBvb2wucHVzaCh0aGlzLmRlcHMpO1xyXG4gICAgICAgICAgICB0aGlzLmRlcHMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBFbnRyeS5jb3VudCA9IDA7XHJcbiAgICByZXR1cm4gRW50cnk7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIHJlbWVtYmVyUGFyZW50KGNoaWxkKSB7XHJcbiAgICB2YXIgcGFyZW50ID0gcGFyZW50RW50cnlTbG90LmdldFZhbHVlKCk7XHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgY2hpbGQucGFyZW50cy5hZGQocGFyZW50KTtcclxuICAgICAgICBpZiAoIXBhcmVudC5jaGlsZFZhbHVlcy5oYXMoY2hpbGQpKSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5jaGlsZFZhbHVlcy5zZXQoY2hpbGQsIFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1pZ2h0QmVEaXJ0eShjaGlsZCkpIHtcclxuICAgICAgICAgICAgcmVwb3J0RGlydHlDaGlsZChwYXJlbnQsIGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcG9ydENsZWFuQ2hpbGQocGFyZW50LCBjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJlbnQ7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVhbGx5UmVjb21wdXRlKGVudHJ5KSB7XHJcbiAgICBmb3JnZXRDaGlsZHJlbihlbnRyeSk7XHJcbiAgICAvLyBTZXQgZW50cnkgYXMgdGhlIHBhcmVudCBlbnRyeSB3aGlsZSBjYWxsaW5nIHJlY29tcHV0ZU5ld1ZhbHVlKGVudHJ5KS5cclxuICAgIHBhcmVudEVudHJ5U2xvdC53aXRoVmFsdWUoZW50cnksIHJlY29tcHV0ZU5ld1ZhbHVlLCBbZW50cnldKTtcclxuICAgIGlmIChtYXliZVN1YnNjcmliZShlbnRyeSkpIHtcclxuICAgICAgICAvLyBJZiB3ZSBzdWNjZXNzZnVsbHkgcmVjb21wdXRlZCBlbnRyeS52YWx1ZSBhbmQgZGlkIG5vdCBmYWlsIHRvXHJcbiAgICAgICAgLy8gKHJlKXN1YnNjcmliZSwgdGhlbiB0aGlzIEVudHJ5IGlzIG5vIGxvbmdlciBleHBsaWNpdGx5IGRpcnR5LlxyXG4gICAgICAgIHNldENsZWFuKGVudHJ5KTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZUdldChlbnRyeS52YWx1ZSk7XHJcbn1cclxuZnVuY3Rpb24gcmVjb21wdXRlTmV3VmFsdWUoZW50cnkpIHtcclxuICAgIGVudHJ5LnJlY29tcHV0aW5nID0gdHJ1ZTtcclxuICAgIC8vIFNldCBlbnRyeS52YWx1ZSBhcyB1bmtub3duLlxyXG4gICAgZW50cnkudmFsdWUubGVuZ3RoID0gMDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gSWYgZW50cnkuZm4gc3VjY2VlZHMsIGVudHJ5LnZhbHVlIHdpbGwgYmVjb21lIGEgbm9ybWFsIFZhbHVlLlxyXG4gICAgICAgIGVudHJ5LnZhbHVlWzBdID0gZW50cnkuZm4uYXBwbHkobnVsbCwgZW50cnkuYXJncyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIElmIGVudHJ5LmZuIHRocm93cywgZW50cnkudmFsdWUgd2lsbCBiZWNvbWUgZXhjZXB0aW9uYWwuXHJcbiAgICAgICAgZW50cnkudmFsdWVbMV0gPSBlO1xyXG4gICAgfVxyXG4gICAgLy8gRWl0aGVyIHdheSwgdGhpcyBsaW5lIGlzIGFsd2F5cyByZWFjaGVkLlxyXG4gICAgZW50cnkucmVjb21wdXRpbmcgPSBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBtaWdodEJlRGlydHkoZW50cnkpIHtcclxuICAgIHJldHVybiBlbnRyeS5kaXJ0eSB8fCAhIShlbnRyeS5kaXJ0eUNoaWxkcmVuICYmIGVudHJ5LmRpcnR5Q2hpbGRyZW4uc2l6ZSk7XHJcbn1cclxuZnVuY3Rpb24gc2V0Q2xlYW4oZW50cnkpIHtcclxuICAgIGVudHJ5LmRpcnR5ID0gZmFsc2U7XHJcbiAgICBpZiAobWlnaHRCZURpcnR5KGVudHJ5KSkge1xyXG4gICAgICAgIC8vIFRoaXMgRW50cnkgbWF5IHN0aWxsIGhhdmUgZGlydHkgY2hpbGRyZW4sIGluIHdoaWNoIGNhc2Ugd2UgY2FuJ3RcclxuICAgICAgICAvLyBsZXQgb3VyIHBhcmVudHMga25vdyB3ZSdyZSBjbGVhbiBqdXN0IHlldC5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXBvcnRDbGVhbihlbnRyeSk7XHJcbn1cclxuZnVuY3Rpb24gcmVwb3J0RGlydHkoY2hpbGQpIHtcclxuICAgIGNoaWxkLnBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAocGFyZW50KSB7IHJldHVybiByZXBvcnREaXJ0eUNoaWxkKHBhcmVudCwgY2hpbGQpOyB9KTtcclxufVxyXG5mdW5jdGlvbiByZXBvcnRDbGVhbihjaGlsZCkge1xyXG4gICAgY2hpbGQucGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJlbnQpIHsgcmV0dXJuIHJlcG9ydENsZWFuQ2hpbGQocGFyZW50LCBjaGlsZCk7IH0pO1xyXG59XHJcbi8vIExldCBhIHBhcmVudCBFbnRyeSBrbm93IHRoYXQgb25lIG9mIGl0cyBjaGlsZHJlbiBtYXkgYmUgZGlydHkuXHJcbmZ1bmN0aW9uIHJlcG9ydERpcnR5Q2hpbGQocGFyZW50LCBjaGlsZCkge1xyXG4gICAgLy8gTXVzdCBoYXZlIGNhbGxlZCByZW1lbWJlclBhcmVudChjaGlsZCkgYmVmb3JlIGNhbGxpbmdcclxuICAgIC8vIHJlcG9ydERpcnR5Q2hpbGQocGFyZW50LCBjaGlsZCkuXHJcbiAgICBhc3NlcnQocGFyZW50LmNoaWxkVmFsdWVzLmhhcyhjaGlsZCkpO1xyXG4gICAgYXNzZXJ0KG1pZ2h0QmVEaXJ0eShjaGlsZCkpO1xyXG4gICAgaWYgKCFwYXJlbnQuZGlydHlDaGlsZHJlbikge1xyXG4gICAgICAgIHBhcmVudC5kaXJ0eUNoaWxkcmVuID0gZW1wdHlTZXRQb29sLnBvcCgpIHx8IG5ldyBTZXQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwYXJlbnQuZGlydHlDaGlsZHJlbi5oYXMoY2hpbGQpKSB7XHJcbiAgICAgICAgLy8gSWYgd2UgYWxyZWFkeSBrbm93IHRoaXMgY2hpbGQgaXMgZGlydHksIHRoZW4gd2UgbXVzdCBoYXZlIGFscmVhZHlcclxuICAgICAgICAvLyBpbmZvcm1lZCBvdXIgb3duIHBhcmVudHMgdGhhdCB3ZSBhcmUgZGlydHksIHNvIHdlIGNhbiB0ZXJtaW5hdGVcclxuICAgICAgICAvLyB0aGUgcmVjdXJzaW9uIGVhcmx5LlxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBhcmVudC5kaXJ0eUNoaWxkcmVuLmFkZChjaGlsZCk7XHJcbiAgICByZXBvcnREaXJ0eShwYXJlbnQpO1xyXG59XHJcbi8vIExldCBhIHBhcmVudCBFbnRyeSBrbm93IHRoYXQgb25lIG9mIGl0cyBjaGlsZHJlbiBpcyBubyBsb25nZXIgZGlydHkuXHJcbmZ1bmN0aW9uIHJlcG9ydENsZWFuQ2hpbGQocGFyZW50LCBjaGlsZCkge1xyXG4gICAgLy8gTXVzdCBoYXZlIGNhbGxlZCByZW1lbWJlckNoaWxkKGNoaWxkKSBiZWZvcmUgY2FsbGluZ1xyXG4gICAgLy8gcmVwb3J0Q2xlYW5DaGlsZChwYXJlbnQsIGNoaWxkKS5cclxuICAgIGFzc2VydChwYXJlbnQuY2hpbGRWYWx1ZXMuaGFzKGNoaWxkKSk7XHJcbiAgICBhc3NlcnQoIW1pZ2h0QmVEaXJ0eShjaGlsZCkpO1xyXG4gICAgdmFyIGNoaWxkVmFsdWUgPSBwYXJlbnQuY2hpbGRWYWx1ZXMuZ2V0KGNoaWxkKTtcclxuICAgIGlmIChjaGlsZFZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHBhcmVudC5jaGlsZFZhbHVlcy5zZXQoY2hpbGQsIHZhbHVlQ29weShjaGlsZC52YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIXZhbHVlSXMoY2hpbGRWYWx1ZSwgY2hpbGQudmFsdWUpKSB7XHJcbiAgICAgICAgcGFyZW50LnNldERpcnR5KCk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVEaXJ0eUNoaWxkKHBhcmVudCwgY2hpbGQpO1xyXG4gICAgaWYgKG1pZ2h0QmVEaXJ0eShwYXJlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmVwb3J0Q2xlYW4ocGFyZW50KTtcclxufVxyXG5mdW5jdGlvbiByZW1vdmVEaXJ0eUNoaWxkKHBhcmVudCwgY2hpbGQpIHtcclxuICAgIHZhciBkYyA9IHBhcmVudC5kaXJ0eUNoaWxkcmVuO1xyXG4gICAgaWYgKGRjKSB7XHJcbiAgICAgICAgZGMuZGVsZXRlKGNoaWxkKTtcclxuICAgICAgICBpZiAoZGMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoZW1wdHlTZXRQb29sLmxlbmd0aCA8IFBPT0xfVEFSR0VUX1NJWkUpIHtcclxuICAgICAgICAgICAgICAgIGVtcHR5U2V0UG9vbC5wdXNoKGRjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXJlbnQuZGlydHlDaGlsZHJlbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIFJlbW92ZXMgYWxsIGNoaWxkcmVuIGZyb20gdGhpcyBlbnRyeSBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiB0aGVcclxuLy8gcmVtb3ZlZCBjaGlsZHJlbi5cclxuZnVuY3Rpb24gZm9yZ2V0Q2hpbGRyZW4ocGFyZW50KSB7XHJcbiAgICBpZiAocGFyZW50LmNoaWxkVmFsdWVzLnNpemUgPiAwKSB7XHJcbiAgICAgICAgcGFyZW50LmNoaWxkVmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKF92YWx1ZSwgY2hpbGQpIHtcclxuICAgICAgICAgICAgZm9yZ2V0Q2hpbGQocGFyZW50LCBjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBSZW1vdmUgdGhpcyBwYXJlbnQgRW50cnkgZnJvbSBhbnkgc2V0cyB0byB3aGljaCBpdCB3YXMgYWRkZWQgYnkgdGhlXHJcbiAgICAvLyBhZGRUb1NldCBtZXRob2QuXHJcbiAgICBwYXJlbnQuZm9yZ2V0RGVwcygpO1xyXG4gICAgLy8gQWZ0ZXIgd2UgZm9yZ2V0IGFsbCBvdXIgY2hpbGRyZW4sIHRoaXMuZGlydHlDaGlsZHJlbiBtdXN0IGJlIGVtcHR5XHJcbiAgICAvLyBhbmQgdGhlcmVmb3JlIG11c3QgaGF2ZSBiZWVuIHJlc2V0IHRvIG51bGwuXHJcbiAgICBhc3NlcnQocGFyZW50LmRpcnR5Q2hpbGRyZW4gPT09IG51bGwpO1xyXG59XHJcbmZ1bmN0aW9uIGZvcmdldENoaWxkKHBhcmVudCwgY2hpbGQpIHtcclxuICAgIGNoaWxkLnBhcmVudHMuZGVsZXRlKHBhcmVudCk7XHJcbiAgICBwYXJlbnQuY2hpbGRWYWx1ZXMuZGVsZXRlKGNoaWxkKTtcclxuICAgIHJlbW92ZURpcnR5Q2hpbGQocGFyZW50LCBjaGlsZCk7XHJcbn1cclxuZnVuY3Rpb24gbWF5YmVTdWJzY3JpYmUoZW50cnkpIHtcclxuICAgIGlmICh0eXBlb2YgZW50cnkuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBtYXliZVVuc3Vic2NyaWJlKGVudHJ5KTsgLy8gUHJldmVudCBkb3VibGUgc3Vic2NyaXB0aW9ucy5cclxuICAgICAgICAgICAgZW50cnkudW5zdWJzY3JpYmUgPSBlbnRyeS5zdWJzY3JpYmUuYXBwbHkobnVsbCwgZW50cnkuYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vIElmIHRoaXMgRW50cnkgaGFzIGEgc3Vic2NyaWJlIGZ1bmN0aW9uIGFuZCBpdCB0aHJldyBhbiBleGNlcHRpb25cclxuICAgICAgICAgICAgLy8gKG9yIGFuIHVuc3Vic2NyaWJlIGZ1bmN0aW9uIGl0IHByZXZpb3VzbHkgcmV0dXJuZWQgbm93IHRocm93cyksXHJcbiAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZSB0byBpbmRpY2F0ZSB0aGF0IHdlIHdlcmUgbm90IGFibGUgdG8gc3Vic2NyaWJlIChvclxyXG4gICAgICAgICAgICAvLyB1bnN1YnNjcmliZSksIGFuZCB0aGlzIEVudHJ5IHNob3VsZCByZW1haW4gZGlydHkuXHJcbiAgICAgICAgICAgIGVudHJ5LnNldERpcnR5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm5pbmcgdHJ1ZSBpbmRpY2F0ZXMgZWl0aGVyIHRoYXQgdGhlcmUgd2FzIG5vIGVudHJ5LnN1YnNjcmliZVxyXG4gICAgLy8gZnVuY3Rpb24gb3IgdGhhdCBpdCBzdWNjZWVkZWQuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxuXG4vLyBBIHRyaWUgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBob2xkcyBvYmplY3Qga2V5cyB3ZWFrbHksIHlldCBjYW4gYWxzbyBob2xkXHJcbi8vIG5vbi1vYmplY3Qga2V5cywgdW5saWtlIHRoZSBuYXRpdmUgYFdlYWtNYXBgLlxyXG4vLyBJZiBubyBtYWtlRGF0YSBmdW5jdGlvbiBpcyBzdXBwbGllZCwgdGhlIGxvb2tlZC11cCBkYXRhIHdpbGwgYmUgYW4gZW1wdHksXHJcbi8vIG5vLXByb3RvdHlwZSBPYmplY3QuXHJcbnZhciBkZWZhdWx0TWFrZURhdGEgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpOyB9O1xyXG52YXIgS2V5VHJpZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEtleVRyaWUod2Vha25lc3MsIG1ha2VEYXRhKSB7XHJcbiAgICAgICAgaWYgKG1ha2VEYXRhID09PSB2b2lkIDApIHsgbWFrZURhdGEgPSBkZWZhdWx0TWFrZURhdGE7IH1cclxuICAgICAgICB0aGlzLndlYWtuZXNzID0gd2Vha25lc3M7XHJcbiAgICAgICAgdGhpcy5tYWtlRGF0YSA9IG1ha2VEYXRhO1xyXG4gICAgfVxyXG4gICAgS2V5VHJpZS5wcm90b3R5cGUubG9va3VwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFycmF5W19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvb2t1cEFycmF5KGFycmF5KTtcclxuICAgIH07XHJcbiAgICBLZXlUcmllLnByb3RvdHlwZS5sb29rdXBBcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xyXG4gICAgICAgIHZhciBub2RlID0gdGhpcztcclxuICAgICAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIG5vZGUgPSBub2RlLmdldENoaWxkVHJpZShrZXkpOyB9KTtcclxuICAgICAgICByZXR1cm4gbm9kZS5kYXRhIHx8IChub2RlLmRhdGEgPSB0aGlzLm1ha2VEYXRhKGFycmF5LnNsaWNlKDApKSk7XHJcbiAgICB9O1xyXG4gICAgS2V5VHJpZS5wcm90b3R5cGUuZ2V0Q2hpbGRUcmllID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHZhciBtYXAgPSB0aGlzLndlYWtuZXNzICYmIGlzT2JqUmVmKGtleSlcclxuICAgICAgICAgICAgPyB0aGlzLndlYWsgfHwgKHRoaXMud2VhayA9IG5ldyBXZWFrTWFwKCkpXHJcbiAgICAgICAgICAgIDogdGhpcy5zdHJvbmcgfHwgKHRoaXMuc3Ryb25nID0gbmV3IE1hcCgpKTtcclxuICAgICAgICB2YXIgY2hpbGQgPSBtYXAuZ2V0KGtleSk7XHJcbiAgICAgICAgaWYgKCFjaGlsZClcclxuICAgICAgICAgICAgbWFwLnNldChrZXksIGNoaWxkID0gbmV3IEtleVRyaWUodGhpcy53ZWFrbmVzcywgdGhpcy5tYWtlRGF0YSkpO1xyXG4gICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gS2V5VHJpZTtcclxufSgpKTtcclxuZnVuY3Rpb24gaXNPYmpSZWYodmFsdWUpIHtcclxuICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XHJcbiAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyBGYWxsIHRocm91Z2ggdG8gcmV0dXJuIHRydWUuLi5cclxuICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cblxuZnVuY3Rpb24gZGVwKG9wdGlvbnMpIHtcclxuICAgIHZhciBkZXBzQnlLZXkgPSBuZXcgTWFwKCk7XHJcbiAgICB2YXIgc3Vic2NyaWJlID0gb3B0aW9ucyAmJiBvcHRpb25zLnN1YnNjcmliZTtcclxuICAgIGZ1bmN0aW9uIGRlcGVuZChrZXkpIHtcclxuICAgICAgICB2YXIgcGFyZW50ID0gcGFyZW50RW50cnlTbG90LmdldFZhbHVlKCk7XHJcbiAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICB2YXIgZGVwXzEgPSBkZXBzQnlLZXkuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgIGlmICghZGVwXzEpIHtcclxuICAgICAgICAgICAgICAgIGRlcHNCeUtleS5zZXQoa2V5LCBkZXBfMSA9IG5ldyBTZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhcmVudC5kZXBlbmRPbihkZXBfMSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIG1heWJlVW5zdWJzY3JpYmUoZGVwXzEpO1xyXG4gICAgICAgICAgICAgICAgZGVwXzEudW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRlcGVuZC5kaXJ0eSA9IGZ1bmN0aW9uIGRpcnR5KGtleSkge1xyXG4gICAgICAgIHZhciBkZXAgPSBkZXBzQnlLZXkuZ2V0KGtleSk7XHJcbiAgICAgICAgaWYgKGRlcCkge1xyXG4gICAgICAgICAgICBkZXAuZm9yRWFjaChmdW5jdGlvbiAoZW50cnkpIHsgcmV0dXJuIGVudHJ5LnNldERpcnR5KCk7IH0pO1xyXG4gICAgICAgICAgICBkZXBzQnlLZXkuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgIG1heWJlVW5zdWJzY3JpYmUoZGVwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGRlcGVuZDtcclxufVxuXG4vLyBUaGUgZGVmYXVsdE1ha2VDYWNoZUtleSBmdW5jdGlvbiBpcyByZW1hcmthYmx5IHBvd2VyZnVsLCBiZWNhdXNlIGl0IGdpdmVzXHJcbi8vIGEgdW5pcXVlIG9iamVjdCBmb3IgYW55IHNoYWxsb3ctaWRlbnRpY2FsIGxpc3Qgb2YgYXJndW1lbnRzLiBJZiB5b3UgbmVlZFxyXG4vLyB0byBpbXBsZW1lbnQgYSBjdXN0b20gbWFrZUNhY2hlS2V5IGZ1bmN0aW9uLCB5b3UgbWF5IGZpbmQgaXQgaGVscGZ1bCB0b1xyXG4vLyBkZWxlZ2F0ZSB0aGUgZmluYWwgd29yayB0byBkZWZhdWx0TWFrZUNhY2hlS2V5LCB3aGljaCBpcyB3aHkgd2UgZXhwb3J0IGl0XHJcbi8vIGhlcmUuIEhvd2V2ZXIsIHlvdSBtYXkgd2FudCB0byBhdm9pZCBkZWZhdWx0TWFrZUNhY2hlS2V5IGlmIHlvdXIgcnVudGltZVxyXG4vLyBkb2VzIG5vdCBzdXBwb3J0IFdlYWtNYXAsIG9yIHlvdSBoYXZlIHRoZSBhYmlsaXR5IHRvIHJldHVybiBhIHN0cmluZyBrZXkuXHJcbi8vIEluIHRob3NlIGNhc2VzLCBqdXN0IHdyaXRlIHlvdXIgb3duIGN1c3RvbSBtYWtlQ2FjaGVLZXkgZnVuY3Rpb25zLlxyXG52YXIga2V5VHJpZSA9IG5ldyBLZXlUcmllKHR5cGVvZiBXZWFrTWFwID09PSBcImZ1bmN0aW9uXCIpO1xyXG5mdW5jdGlvbiBkZWZhdWx0TWFrZUNhY2hlS2V5KCkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleVRyaWUubG9va3VwQXJyYXkoYXJncyk7XHJcbn1cclxudmFyIGNhY2hlcyA9IG5ldyBTZXQoKTtcclxuZnVuY3Rpb24gd3JhcChvcmlnaW5hbEZ1bmN0aW9uLCBvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpOyB9XHJcbiAgICB2YXIgY2FjaGUgPSBuZXcgQ2FjaGUob3B0aW9ucy5tYXggfHwgTWF0aC5wb3coMiwgMTYpLCBmdW5jdGlvbiAoZW50cnkpIHsgcmV0dXJuIGVudHJ5LmRpc3Bvc2UoKTsgfSk7XHJcbiAgICB2YXIga2V5QXJncyA9IG9wdGlvbnMua2V5QXJncyB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJncztcclxuICAgIH0pO1xyXG4gICAgdmFyIG1ha2VDYWNoZUtleSA9IG9wdGlvbnMubWFrZUNhY2hlS2V5IHx8IGRlZmF1bHRNYWtlQ2FjaGVLZXk7XHJcbiAgICBmdW5jdGlvbiBvcHRpbWlzdGljKCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBtYWtlQ2FjaGVLZXkuYXBwbHkobnVsbCwga2V5QXJncy5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcclxuICAgICAgICBpZiAoa2V5ID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb24uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gICAgICAgIHZhciBlbnRyeSA9IGNhY2hlLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgICAgICBlbnRyeS5hcmdzID0gYXJncztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVudHJ5ID0gbmV3IEVudHJ5KG9yaWdpbmFsRnVuY3Rpb24sIGFyZ3MpO1xyXG4gICAgICAgICAgICBjYWNoZS5zZXQoa2V5LCBlbnRyeSk7XHJcbiAgICAgICAgICAgIGVudHJ5LnN1YnNjcmliZSA9IG9wdGlvbnMuc3Vic2NyaWJlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdmFsdWUgPSBlbnRyeS5yZWNvbXB1dGUoKTtcclxuICAgICAgICAvLyBNb3ZlIHRoaXMgZW50cnkgdG8gdGhlIGZyb250IG9mIHRoZSBsZWFzdC1yZWNlbnRseSB1c2VkIHF1ZXVlLFxyXG4gICAgICAgIC8vIHNpbmNlIHdlIGp1c3QgZmluaXNoZWQgY29tcHV0aW5nIGl0cyB2YWx1ZS5cclxuICAgICAgICBjYWNoZS5zZXQoa2V5LCBlbnRyeSk7XHJcbiAgICAgICAgY2FjaGVzLmFkZChjYWNoZSk7XHJcbiAgICAgICAgLy8gQ2xlYW4gdXAgYW55IGV4Y2VzcyBlbnRyaWVzIGluIHRoZSBjYWNoZSwgYnV0IG9ubHkgaWYgdGhlcmUgaXMgbm9cclxuICAgICAgICAvLyBhY3RpdmUgcGFyZW50IGVudHJ5LCBtZWFuaW5nIHdlJ3JlIG5vdCBpbiB0aGUgbWlkZGxlIG9mIGEgbGFyZ2VyXHJcbiAgICAgICAgLy8gY29tcHV0YXRpb24gdGhhdCBtaWdodCBiZSBmbHVtbW94ZWQgYnkgdGhlIGNsZWFuaW5nLlxyXG4gICAgICAgIGlmICghcGFyZW50RW50cnlTbG90Lmhhc1ZhbHVlKCkpIHtcclxuICAgICAgICAgICAgY2FjaGVzLmZvckVhY2goZnVuY3Rpb24gKGNhY2hlKSB7IHJldHVybiBjYWNoZS5jbGVhbigpOyB9KTtcclxuICAgICAgICAgICAgY2FjaGVzLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGxvb2t1cCgpIHtcclxuICAgICAgICB2YXIga2V5ID0gbWFrZUNhY2hlS2V5LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgaWYgKGtleSAhPT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvcHRpbWlzdGljLmRpcnR5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IGxvb2t1cC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgICAgICBlbnRyeS5zZXREaXJ0eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvcHRpbWlzdGljLnBlZWsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gbG9va3VwLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5wZWVrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBvcHRpbWlzdGljO1xyXG59XG5cbmV4cG9ydCB7IEtleVRyaWUsIGRlZmF1bHRNYWtlQ2FjaGVLZXksIGRlcCwgd3JhcCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnVuZGxlLmVzbS5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=
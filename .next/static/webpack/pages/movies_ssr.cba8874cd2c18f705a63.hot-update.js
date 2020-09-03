webpackHotUpdate_N_E("pages/movies_ssr",{

/***/ "./pages/movies_ssr.js":
/*!*****************************!*\
  !*** ./pages/movies_ssr.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yongh/Documents/web_dev/hello-next/pages/movies_ssr.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Movies = function Movies(_ref) {\n  _s();\n\n  var movies = _ref.movies;\n\n  // state\n  // const [movie, setmovie] = useState([])\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('star wars'),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var searchQuery2 = 'star wars'; // fetch movie - 함수는 마운트 될때 실행됨\n\n  var api_key = '224502cedb2aea2828098f3724fd0b0c';\n  var movieList = 'https://api.themoviedb.org/4/list/3?page=1&api_key=224502cedb2aea2828098f3724fd0b0c';\n  var imgUrl = 'https://image.tmdb.org/t/p/w300';\n  var searchUrl = \"https://api.themoviedb.org/3/search/movie?query=\".concat(searchQuery2, \"&api_key=224502cedb2aea2828098f3724fd0b0c\");\n  var trandUrl = \"https://api.themoviedb.org/3/trending/all/day?api_key=\".concat(api_key);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {// fetchMovie();\n  }, []);\n\n  var showMovie = function showMovie() {\n    return (// <p>\n      //   { JSON.stringify(movies) }\n      //     { console.log(movies) }\n      // </p>\n      movies.map(function (item, i) {\n        return __jsx(\"div\", {\n          key: i,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 11\n          }\n        }, __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }\n        }, i, \". \", item.original_title), __jsx(\"img\", {\n          src: imgUrl + item.poster_path,\n          alt: item.poster_path,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }\n        }), __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }\n        }, i, \". \", item.overview));\n      })\n    );\n  };\n\n  var searchMovie = function searchMovie() {\n    return (// <p>\n      //   { JSON.stringify(movies) }\n      //     { console.log(movies) }\n      // </p>\n      movies.map(function (item, i) {\n        return __jsx(\"div\", {\n          key: i,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 11\n          }\n        }, __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }\n        }, i, \". \", item.original_title), __jsx(\"img\", {\n          src: imgUrl + item.poster_path,\n          alt: item.poster_path,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }\n        }), __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }\n        }, i, \". \", item.overview));\n      })\n    );\n  };\n\n  var handleTextChange = function handleTextChange(e) {\n    setSearchQuery(e.target.value);\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    console.log('submit');\n    e.preventDefault();\n    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(\"./movies_ssr/?searchTerm=\".concat(searchQuery));\n  };\n\n  var searchForm = function searchForm() {\n    return __jsx(\"form\", {\n      onSubmit: handleSubmit,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 7\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      onChange: handleTextChange,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }\n    }));\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Movies\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }, \"List of Movies\"), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }), searchForm(), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }), showMovie()));\n}; // SSR(콘텐츠를 Server Side Rendering)\n\n\n_s(Movies, \"BmAserlm82aDkKKGUqpwTmsP8SM=\");\n\n_c = Movies;\n\nMovies.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var query, movies, api_key, trandUrl, searchUrl, movie_url;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query;\n            api_key = '224502cedb2aea2828098f3724fd0b0c';\n            trandUrl = \"https://api.themoviedb.org/3/trending/all/day?api_key=\".concat(api_key);\n            searchUrl = \"https://api.themoviedb.org/3/search/movie?query=love&api_key=224502cedb2aea2828098f3724fd0b0c\";\n            movie_url = trandUrl; // 검색(query) 요청이 없으면 기본 데이터 출력\n\n            if (!query.searchTerm) {\n              movie_url = trandUrl;\n            } else {\n              movie_url = searchUrl;\n            }\n\n            _context.next = 8;\n            return fetch(movie_url).then(function (res) {\n              return res.json();\n            }).then(function (data) {\n              movies = data;\n              console.log(movies);\n            })[\"catch\"](function (err) {\n              console.log(err);\n              movies = [];\n            });\n\n          case 8:\n            return _context.abrupt(\"return\", {\n              movies: movies.results\n            });\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movies);\n\nvar _c;\n\n$RefreshReg$(_c, \"Movies\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVzX3Nzci5qcz85MGI4Il0sIm5hbWVzIjpbIk1vdmllcyIsIm1vdmllcyIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VhcmNoUXVlcnkyIiwiYXBpX2tleSIsIm1vdmllTGlzdCIsImltZ1VybCIsInNlYXJjaFVybCIsInRyYW5kVXJsIiwidXNlRWZmZWN0Iiwic2hvd01vdmllIiwibWFwIiwiaXRlbSIsImkiLCJvcmlnaW5hbF90aXRsZSIsInBvc3Rlcl9wYXRoIiwib3ZlcnZpZXciLCJzZWFyY2hNb3ZpZSIsImhhbmRsZVRleHRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJSb3V0ZXIiLCJwdXNoIiwic2VhcmNoRm9ybSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwibW92aWVfdXJsIiwic2VhcmNoVGVybSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZXJyIiwicmVzdWx0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFjO0FBQUE7O0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUMzQjtBQUNBO0FBRjJCLGtCQUdXQyxzREFBUSxDQUFDLFdBQUQsQ0FIbkI7QUFBQSxNQUdwQkMsV0FIb0I7QUFBQSxNQUdQQyxjQUhPOztBQUFBLG1CQUlHRixzREFBUSxDQUFDLEtBQUQsQ0FKWDtBQUFBLE1BSXBCRyxPQUpvQjtBQUFBLE1BSVhDLFVBSlc7O0FBSzNCLE1BQU1DLFlBQVksR0FBRyxXQUFyQixDQUwyQixDQU8zQjs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsa0NBQWhCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLHFGQUFsQjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxpQ0FBZjtBQUNBLE1BQU1DLFNBQVMsNkRBQXNESixZQUF0RCw4Q0FBZjtBQUNBLE1BQU1LLFFBQVEsbUVBQTRESixPQUE1RCxDQUFkO0FBRUFLLHlEQUFTLENBQUMsWUFBTSxDQUNkO0FBRUQsR0FIUSxFQUdOLEVBSE0sQ0FBVDs7QUFLQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFdBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQWIsWUFBTSxDQUFDYyxHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDdEIsZUFDRTtBQUFLLGFBQUcsRUFBRUEsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFJQSxDQUFKLFFBQVNELElBQUksQ0FBQ0UsY0FBZCxDQURGLEVBRUU7QUFBSyxhQUFHLEVBQUVSLE1BQU0sR0FBQ00sSUFBSSxDQUFDRyxXQUF0QjtBQUFtQyxhQUFHLEVBQUVILElBQUksQ0FBQ0csV0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFJRixDQUFKLFFBQVNELElBQUksQ0FBQ0ksUUFBZCxDQUhGLENBREY7QUFPRCxPQVJEO0FBTEY7QUFnQkQsR0FqQkQ7O0FBbUJBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsV0FDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBcEIsWUFBTSxDQUFDYyxHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDdEIsZUFDRTtBQUFLLGFBQUcsRUFBRUEsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFJQSxDQUFKLFFBQVNELElBQUksQ0FBQ0UsY0FBZCxDQURGLEVBRUU7QUFBSyxhQUFHLEVBQUVSLE1BQU0sR0FBQ00sSUFBSSxDQUFDRyxXQUF0QjtBQUFtQyxhQUFHLEVBQUVILElBQUksQ0FBQ0csV0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFJRixDQUFKLFFBQVNELElBQUksQ0FBQ0ksUUFBZCxDQUhGLENBREY7QUFPRCxPQVJEO0FBTEY7QUFnQkQsR0FqQkQ7O0FBbUJBLE1BQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzlCbkIsa0JBQWMsQ0FBQ21CLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNILENBQUQsRUFBTztBQUMxQkksV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBTCxLQUFDLENBQUNNLGNBQUY7QUFDQUMsc0RBQU0sQ0FBQ0MsSUFBUCxvQ0FBd0M1QixXQUF4QztBQUNELEdBSkQ7O0FBTUEsTUFBTTZCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsV0FDRTtBQUFNLGNBQVEsRUFBRU4sWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsY0FBUSxFQUFFSixnQkFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURBLENBREY7QUFLRCxHQU5EOztBQVFBLFNBQ0UsTUFBQywwREFBRDtBQUFRLFNBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdHVSxVQUFVLEVBSGIsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLSWxCLFNBQVMsRUFMYixDQURGLENBREY7QUFXRCxDQXRGRCxDLENBeUZBOzs7R0F6Rk1kLE07O0tBQUFBLE07O0FBMEZOQSxNQUFNLENBQUNpQyxlQUFQO0FBQUEsK0xBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFRQyxpQkFBUixTQUFRQSxLQUFSO0FBRWpCMUIsbUJBRmlCLEdBRVAsa0NBRk87QUFHakJJLG9CQUhpQixtRUFHbURKLE9BSG5EO0FBSWpCRyxxQkFKaUI7QUFLbkJ3QixxQkFMbUIsR0FLUHZCLFFBTE8sRUFPdkI7O0FBQ0EsZ0JBQUcsQ0FBQ3NCLEtBQUssQ0FBQ0UsVUFBVixFQUFzQjtBQUNwQkQsdUJBQVMsR0FBR3ZCLFFBQVo7QUFDRCxhQUZELE1BRU87QUFDTHVCLHVCQUFTLEdBQUd4QixTQUFaO0FBQ0Q7O0FBWnNCO0FBQUEsbUJBY2pCMEIsS0FBSyxDQUFDRixTQUFELENBQUwsQ0FDSEcsSUFERyxDQUNFLFVBQUFDLEdBQUc7QUFBQSxxQkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxhQURMLEVBRUhGLElBRkcsQ0FFRSxVQUFBRyxJQUFJLEVBQUk7QUFDWnhDLG9CQUFNLEdBQUd3QyxJQUFUO0FBQ0FkLHFCQUFPLENBQUNDLEdBQVIsQ0FBWTNCLE1BQVo7QUFDRCxhQUxHLFdBTUcsVUFBQXlDLEdBQUcsRUFBSTtBQUNaZixxQkFBTyxDQUFDQyxHQUFSLENBQVljLEdBQVo7QUFDQXpDLG9CQUFNLEdBQUcsRUFBVDtBQUNELGFBVEcsQ0FkaUI7O0FBQUE7QUFBQSw2Q0F5QmhCO0FBQ0xBLG9CQUFNLEVBQUVBLE1BQU0sQ0FBQzBDO0FBRFYsYUF6QmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXpCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQThCZTNDLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbW92aWVzX3Nzci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgTW92aWVzID0gKHttb3ZpZXN9KSA9PiB7XG4gIC8vIHN0YXRlXG4gIC8vIGNvbnN0IFttb3ZpZSwgc2V0bW92aWVdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJ3N0YXIgd2FycycpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBzZWFyY2hRdWVyeTIgPSAnc3RhciB3YXJzJ1xuXG4gIC8vIGZldGNoIG1vdmllIC0g7ZWo7IiY64qUIOuniOyatO2KuCDrkKDrlYwg7Iuk7ZaJ65CoXG4gIGNvbnN0IGFwaV9rZXkgPSAnMjI0NTAyY2VkYjJhZWEyODI4MDk4ZjM3MjRmZDBiMGMnO1xuICBjb25zdCBtb3ZpZUxpc3QgPSAnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvNC9saXN0LzM/cGFnZT0xJmFwaV9rZXk9MjI0NTAyY2VkYjJhZWEyODI4MDk4ZjM3MjRmZDBiMGMnXG4gIGNvbnN0IGltZ1VybCA9ICdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MzAwJ1xuICBjb25zdCBzZWFyY2hVcmwgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9zZWFyY2gvbW92aWU/cXVlcnk9JHtzZWFyY2hRdWVyeTJ9JmFwaV9rZXk9MjI0NTAyY2VkYjJhZWEyODI4MDk4ZjM3MjRmZDBiMGNgXG4gIGNvbnN0IHRyYW5kVXJsID0gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHJlbmRpbmcvYWxsL2RheT9hcGlfa2V5PSR7YXBpX2tleX1gXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBmZXRjaE1vdmllKCk7XG5cbiAgfSwgW10pIFxuXG4gIGNvbnN0IHNob3dNb3ZpZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gPHA+XG4gICAgICAvLyAgIHsgSlNPTi5zdHJpbmdpZnkobW92aWVzKSB9XG4gICAgICAvLyAgICAgeyBjb25zb2xlLmxvZyhtb3ZpZXMpIH1cbiAgICAgIC8vIDwvcD5cbiAgICAgIG1vdmllcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICA8cD57aX0uIHtpdGVtLm9yaWdpbmFsX3RpdGxlfTwvcD5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdVcmwraXRlbS5wb3N0ZXJfcGF0aH0gYWx0PXtpdGVtLnBvc3Rlcl9wYXRofSAvPlxuICAgICAgICAgICAgPHA+e2l9LiB7aXRlbS5vdmVydmlld308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICApXG4gIH1cblxuICBjb25zdCBzZWFyY2hNb3ZpZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gPHA+XG4gICAgICAvLyAgIHsgSlNPTi5zdHJpbmdpZnkobW92aWVzKSB9XG4gICAgICAvLyAgICAgeyBjb25zb2xlLmxvZyhtb3ZpZXMpIH1cbiAgICAgIC8vIDwvcD5cbiAgICAgIG1vdmllcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICA8cD57aX0uIHtpdGVtLm9yaWdpbmFsX3RpdGxlfTwvcD5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdVcmwraXRlbS5wb3N0ZXJfcGF0aH0gYWx0PXtpdGVtLnBvc3Rlcl9wYXRofSAvPlxuICAgICAgICAgICAgPHA+e2l9LiB7aXRlbS5vdmVydmlld308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICApXG4gIH1cblxuICBjb25zdCBoYW5kbGVUZXh0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdCcpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFJvdXRlci5wdXNoKGAuL21vdmllc19zc3IvP3NlYXJjaFRlcm09JHtzZWFyY2hRdWVyeX1gKVxuICB9XG5cbiAgY29uc3Qgc2VhcmNoRm9ybSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlVGV4dENoYW5nZX0gLz5cbiAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJNb3ZpZXNcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5MaXN0IG9mIE1vdmllczwvaDI+XG4gICAgICAgIDxoci8+XG4gICAgICAgIHtzZWFyY2hGb3JtKCl9XG4gICAgICAgIDxoci8+XG4gICAgICAgIHsgc2hvd01vdmllKCkgfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuXG4vLyBTU1Io7L2Y7YWQ7Lig66W8IFNlcnZlciBTaWRlIFJlbmRlcmluZylcbk1vdmllcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3F1ZXJ5fSkgPT4ge1xuICBsZXQgbW92aWVzO1xuICBjb25zdCBhcGlfa2V5ID0gJzIyNDUwMmNlZGIyYWVhMjgyODA5OGYzNzI0ZmQwYjBjJztcbiAgY29uc3QgdHJhbmRVcmwgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90cmVuZGluZy9hbGwvZGF5P2FwaV9rZXk9JHthcGlfa2V5fWBcbiAgY29uc3Qgc2VhcmNoVXJsID0gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoL21vdmllP3F1ZXJ5PWxvdmUmYXBpX2tleT0yMjQ1MDJjZWRiMmFlYTI4MjgwOThmMzcyNGZkMGIwY2BcbiAgbGV0IG1vdmllX3VybCA9IHRyYW5kVXJsO1xuICBcbiAgLy8g6rKA7IOJKHF1ZXJ5KSDsmpTssq3snbQg7JeG7Jy866m0IOq4sOuzuCDrjbDsnbTthLAg7Lac66ClXG4gIGlmKCFxdWVyeS5zZWFyY2hUZXJtKSB7XG4gICAgbW92aWVfdXJsID0gdHJhbmRVcmw7XG4gIH0gZWxzZSB7XG4gICAgbW92aWVfdXJsID0gc2VhcmNoVXJsO1xuICB9XG5cbiAgYXdhaXQgZmV0Y2gobW92aWVfdXJsKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgbW92aWVzID0gZGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKG1vdmllcylcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgbW92aWVzID0gW11cbiAgICB9KVxuXG4gIHJldHVybiB7IFxuICAgIG1vdmllczogbW92aWVzLnJlc3VsdHNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies_ssr.js\n");

/***/ })

})
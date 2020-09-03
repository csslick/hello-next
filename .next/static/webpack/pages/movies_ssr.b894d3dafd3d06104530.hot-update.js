webpackHotUpdate_N_E("pages/movies_ssr",{

/***/ "./pages/movies_ssr.js":
/*!*****************************!*\
  !*** ./pages/movies_ssr.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yongh/Documents/web_dev/hello-next/pages/movies_ssr.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Movies = function Movies(_ref) {\n  _s();\n\n  var movies = _ref.movies;\n\n  // state\n  // const [movie, setmovie] = useState([])\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('star wars'),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var searchQuery2 = 'star wars'; // fetch movie - 함수는 마운트 될때 실행됨\n\n  var api_key = '224502cedb2aea2828098f3724fd0b0c';\n  var url = 'https://api.themoviedb.org/3/movie/550?api_key=224502cedb2aea2828098f3724fd0b0c';\n  var movieList = 'https://api.themoviedb.org/4/list/3?page=1&api_key=224502cedb2aea2828098f3724fd0b0c';\n  var imgUrl = 'https://image.tmdb.org/t/p/w300';\n  var searchUrl = \"https://api.themoviedb.org/3/search/movie?query=\".concat(searchQuery2, \"&api_key=224502cedb2aea2828098f3724fd0b0c\");\n  var url2 = 'http://hn.algolia.com/api/v1/search?query=react';\n  var trandUrl = \"https://api.themoviedb.org/3/trending/all/day?api_key=\".concat(api_key);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {// fetchMovie();\n  }, []);\n\n  var showMovie = function showMovie() {\n    return (// <p>\n      //   { JSON.stringify(movies) }\n      //     { console.log(movies) }\n      // </p>\n      movies.map(function (item, i) {\n        return __jsx(\"div\", {\n          key: i,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 11\n          }\n        }, __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }\n        }, i, \". \", item.original_title), __jsx(\"img\", {\n          src: imgUrl + item.poster_path,\n          alt: item.poster_path,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }\n        }), __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }\n        }, i, \". \", item.overview));\n      })\n    );\n  };\n\n  var searchMovie = function searchMovie() {\n    return (// <p>\n      //   { JSON.stringify(movies) }\n      //     { console.log(movies) }\n      // </p>\n      movies.map(function (item, i) {\n        return __jsx(\"div\", {\n          key: i,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 11\n          }\n        }, __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }\n        }, i, \". \", item.original_title), __jsx(\"img\", {\n          src: imgUrl + item.poster_path,\n          alt: item.poster_path,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }\n        }), __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }\n        }, i, \". \", item.overview));\n      })\n    );\n  };\n\n  var handleTextChange = function handleTextChange(e) {\n    setSearchQuery(e.target.value);\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    console.log('submit');\n    e.preventDefault();\n    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(\"./movies_ssr/?searchTerm=\".concat(searchQuery));\n  };\n\n  var searchForm = function searchForm() {\n    return __jsx(\"form\", {\n      onSubmit: handleSubmit,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 7\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      onChange: handleTextChange,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 7\n      }\n    }));\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Movies\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }, \"List of Movies\"), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }), searchForm(), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }), showMovie()));\n}; // SSR(콘텐츠를 Server Side Rendering)\n\n\n_s(Movies, \"BmAserlm82aDkKKGUqpwTmsP8SM=\");\n\n_c = Movies;\n\nMovies.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var query, movies, api_key, trandUrl, searchUrl, movie_url;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query;\n            api_key = '224502cedb2aea2828098f3724fd0b0c';\n            trandUrl = \"https://api.themoviedb.org/3/trending/all/day?api_key=\".concat(api_key);\n            searchUrl = \"https://api.themoviedb.org/3/search/movie?query=\".concat(love, \"&api_key=\").concat(api_key);\n            movie_url = trandUrl; // 검색(query) 요청이 없으면 기본 데이터 출력\n\n            if (!query.searchTerm) {\n              movie_url = trandUrl;\n            } else {\n              movie_url = searchUrl;\n            }\n\n            _context.next = 8;\n            return fetch(movie_url).then(function (res) {\n              return res.json();\n            }).then(function (data) {\n              movies = data;\n              console.log(movies);\n            })[\"catch\"](function (err) {\n              console.log(err);\n              movies = [];\n            });\n\n          case 8:\n            return _context.abrupt(\"return\", {\n              movies: movies.results\n            });\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movies);\n\nvar _c;\n\n$RefreshReg$(_c, \"Movies\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVzX3Nzci5qcz85MGI4Il0sIm5hbWVzIjpbIk1vdmllcyIsIm1vdmllcyIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VhcmNoUXVlcnkyIiwiYXBpX2tleSIsInVybCIsIm1vdmllTGlzdCIsImltZ1VybCIsInNlYXJjaFVybCIsInVybDIiLCJ0cmFuZFVybCIsInVzZUVmZmVjdCIsInNob3dNb3ZpZSIsIm1hcCIsIml0ZW0iLCJpIiwib3JpZ2luYWxfdGl0bGUiLCJwb3N0ZXJfcGF0aCIsIm92ZXJ2aWV3Iiwic2VhcmNoTW92aWUiLCJoYW5kbGVUZXh0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiUm91dGVyIiwicHVzaCIsInNlYXJjaEZvcm0iLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImxvdmUiLCJtb3ZpZV91cmwiLCJzZWFyY2hUZXJtIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJlcnIiLCJyZXN1bHRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWM7QUFBQTs7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBQzNCO0FBQ0E7QUFGMkIsa0JBR1dDLHNEQUFRLENBQUMsV0FBRCxDQUhuQjtBQUFBLE1BR3BCQyxXQUhvQjtBQUFBLE1BR1BDLGNBSE87O0FBQUEsbUJBSUdGLHNEQUFRLENBQUMsS0FBRCxDQUpYO0FBQUEsTUFJcEJHLE9BSm9CO0FBQUEsTUFJWEMsVUFKVzs7QUFLM0IsTUFBTUMsWUFBWSxHQUFHLFdBQXJCLENBTDJCLENBTzNCOztBQUNBLE1BQU1DLE9B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QUE7QUFBQSw2Q0F5QmhCO0FBQ0xBLG9CQUFNLEVBQUVBLE1BQU0sQ0FBQzZDO0FBRFYsYUF6QmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXpCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQThCZTlDLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbW92aWVzX3Nzci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgTW92aWVzID0gKHttb3ZpZXN9KSA9PiB7XG4gIC8vIHN0YXRlXG4gIC8vIGNvbnN0IFttb3ZpZSwgc2V0bW92aWVdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJ3N0YXIgd2FycycpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBzZWFyY2hRdWVyeTIgPSAnc3RhciB3YXJzJ1xuXG4gIC8vIGZldGNoIG1vdmllIC0g7ZWo7IiY64qUIOuniOyatO2KuCDrkKDrlYwg7Iuk7ZaJ65CoXG4gIGNvbnN0IGFwaV9rZXkgPSAnMjI0NTAyY2VkYjJhZWEyODI4MDk4ZjM3MjRmZDBiMGMnO1xuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS81NTA/YXBpX2tleT0yMjQ1MDJjZWRiMmFlYTI4MjgwOThmMzcyNGZkMGIwYyc7XG4gIGNvbnN0IG1vdmllTGlzdCA9ICdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy80L2xpc3QvMz9wYWdlPTEmYXBpX2tleT0yMjQ1MDJjZWRiMmFlYTI4MjgwOThmMzcyNGZkMGIwYydcbiAgY29uc3QgaW1nVXJsID0gJ2h0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAnXG4gIGNvbnN0IHNlYXJjaFVybCA9IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZT9xdWVyeT0ke3NlYXJjaFF1ZXJ5Mn0mYXBpX2tleT0yMjQ1MDJjZWRiMmFlYTI4MjgwOThmMzcyNGZkMGIwY2BcbiAgY29uc3QgdXJsMiA9ICdodHRwOi8vaG4uYWxnb2xpYS5jb20vYXBpL3YxL3NlYXJjaD9xdWVyeT1yZWFjdCdcbiAgY29uc3QgdHJhbmRVcmwgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90cmVuZGluZy9hbGwvZGF5P2FwaV9rZXk9JHthcGlfa2V5fWBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGZldGNoTW92aWUoKTtcblxuICB9LCBbXSkgXG5cbiAgY29uc3Qgc2hvd01vdmllID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAvLyA8cD5cbiAgICAgIC8vICAgeyBKU09OLnN0cmluZ2lmeShtb3ZpZXMpIH1cbiAgICAgIC8vICAgICB7IGNvbnNvbGUubG9nKG1vdmllcykgfVxuICAgICAgLy8gPC9wPlxuICAgICAgbW92aWVzLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgIDxwPntpfS4ge2l0ZW0ub3JpZ2luYWxfdGl0bGV9PC9wPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1VybCtpdGVtLnBvc3Rlcl9wYXRofSBhbHQ9e2l0ZW0ucG9zdGVyX3BhdGh9IC8+XG4gICAgICAgICAgICA8cD57aX0uIHtpdGVtLm92ZXJ2aWV3fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgIClcbiAgfVxuXG4gIGNvbnN0IHNlYXJjaE1vdmllID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAvLyA8cD5cbiAgICAgIC8vICAgeyBKU09OLnN0cmluZ2lmeShtb3ZpZXMpIH1cbiAgICAgIC8vICAgICB7IGNvbnNvbGUubG9nKG1vdmllcykgfVxuICAgICAgLy8gPC9wPlxuICAgICAgbW92aWVzLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgIDxwPntpfS4ge2l0ZW0ub3JpZ2luYWxfdGl0bGV9PC9wPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1VybCtpdGVtLnBvc3Rlcl9wYXRofSBhbHQ9e2l0ZW0ucG9zdGVyX3BhdGh9IC8+XG4gICAgICAgICAgICA8cD57aX0uIHtpdGVtLm92ZXJ2aWV3fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnc3VibWl0JylcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgUm91dGVyLnB1c2goYC4vbW92aWVzX3Nzci8/c2VhcmNoVGVybT0ke3NlYXJjaFF1ZXJ5fWApXG4gIH1cblxuICBjb25zdCBzZWFyY2hGb3JtID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVUZXh0Q2hhbmdlfSAvPlxuICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIk1vdmllc1wiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkxpc3Qgb2YgTW92aWVzPC9oMj5cbiAgICAgICAgPGhyLz5cbiAgICAgICAge3NlYXJjaEZvcm0oKX1cbiAgICAgICAgPGhyLz5cbiAgICAgICAgeyBzaG93TW92aWUoKSB9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5cbi8vIFNTUijsvZjthZDsuKDrpbwgU2VydmVyIFNpZGUgUmVuZGVyaW5nKVxuTW92aWVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7cXVlcnl9KSA9PiB7XG4gIGxldCBtb3ZpZXM7XG4gIGNvbnN0IGFwaV9rZXkgPSAnMjI0NTAyY2VkYjJhZWEyODI4MDk4ZjM3MjRmZDBiMGMnO1xuICBjb25zdCB0cmFuZFVybCA9IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3RyZW5kaW5nL2FsbC9kYXk/YXBpX2tleT0ke2FwaV9rZXl9YFxuICBjb25zdCBzZWFyY2hVcmwgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9zZWFyY2gvbW92aWU/cXVlcnk9JHtsb3ZlfSZhcGlfa2V5PSR7YXBpX2tleX1gXG4gIGxldCBtb3ZpZV91cmwgPSB0cmFuZFVybDtcbiAgXG4gIC8vIOqygOyDiShxdWVyeSkg7JqU7LKt7J20IOyXhuycvOuptCDquLDrs7gg642w7J207YSwIOy2nOugpVxuICBpZighcXVlcnkuc2VhcmNoVGVybSkge1xuICAgIG1vdmllX3VybCA9IHRyYW5kVXJsO1xuICB9IGVsc2Uge1xuICAgIG1vdmllX3VybCA9IHNlYXJjaFVybDtcbiAgfVxuXG4gIGF3YWl0IGZldGNoKG1vdmllX3VybClcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIG1vdmllcyA9IGRhdGE7XG4gICAgICBjb25zb2xlLmxvZyhtb3ZpZXMpXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIG1vdmllcyA9IFtdXG4gICAgfSlcblxuICByZXR1cm4geyBcbiAgICBtb3ZpZXM6IG1vdmllcy5yZXN1bHRzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies_ssr.js\n");

/***/ })

})
webpackHotUpdate_N_E("pages/movies_ssr",{

/***/ "./pages/movies_ssr.js":
/*!*****************************!*\
  !*** ./pages/movies_ssr.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yongh/Documents/web_dev/hello-next/pages/movies_ssr.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Movies = function Movies(_ref) {\n  _s();\n\n  var movies = _ref.movies;\n\n  // state\n  // const [movie, setmovie] = useState([])\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('star wars'),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var searchQuery2 = 'star wars'; // fetch movie - 함수는 마운트 될때 실행됨\n\n  var api_key = '224502cedb2aea2828098f3724fd0b0c';\n  var movieList = 'https://api.themoviedb.org/4/list/3?page=1&api_key=224502cedb2aea2828098f3724fd0b0c';\n  var imgUrl = 'https://image.tmdb.org/t/p/w300';\n  var searchUrl = \"https://api.themoviedb.org/3/search/movie?query=\".concat(searchQuery2, \"&api_key=224502cedb2aea2828098f3724fd0b0c\");\n  var trandUrl = \"https://api.themoviedb.org/3/trending/all/day?api_key=\".concat(api_key);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {// showMovie();\n  }, []);\n\n  var showMovie = function showMovie() {\n    return (// <p>\n      //   { JSON.stringify(movies) }\n      //     { console.log(movies) }\n      // </p>\n      movies.map(function (item, i) {\n        return __jsx(\"div\", {\n          key: i,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 11\n          }\n        }, __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }\n        }, i, \". \", item.original_title), __jsx(\"img\", {\n          src: imgUrl + item.poster_path,\n          alt: item.poster_path,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }\n        }), __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }\n        }, i, \". \", item.overview));\n      })\n    );\n  };\n\n  var searchMovie = function searchMovie() {\n    return (// <p>\n      //   { JSON.stringify(movies) }\n      //     { console.log(movies) }\n      // </p>\n      movies.map(function (item, i) {\n        return __jsx(\"div\", {\n          key: i,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 11\n          }\n        }, __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }\n        }, i, \". \", item.original_title), __jsx(\"img\", {\n          src: imgUrl + item.poster_path,\n          alt: item.poster_path,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }\n        }), __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }\n        }, i, \". \", item.overview));\n      })\n    );\n  };\n\n  var handleTextChange = function handleTextChange(e) {\n    setSearchQuery(e.target.value);\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    console.log('submit');\n    e.preventDefault();\n    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(\"./movies_ssr/?searchTerm=\".concat(searchQuery));\n  };\n\n  var searchForm = function searchForm() {\n    return __jsx(\"form\", {\n      onSubmit: handleSubmit,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 7\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      onChange: handleTextChange,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }\n    }), __jsx(\"button\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 7\n      }\n    }, \"Search\"));\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Movies\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }, \"List of Movies\"), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }), searchForm(), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  }), showMovie()));\n}; // SSR(콘텐츠를 Server Side Rendering)\n\n\n_s(Movies, \"BmAserlm82aDkKKGUqpwTmsP8SM=\");\n\n_c = Movies;\n\nMovies.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var query, movies, api_key, trandUrl, searchUrl, movie_url;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query;\n            api_key = '224502cedb2aea2828098f3724fd0b0c';\n            trandUrl = \"https://api.themoviedb.org/3/trending/all/day?api_key=\".concat(api_key);\n            searchUrl = \"https://api.themoviedb.org/3/search/movie?query=\".concat(query, \"&api_key=\").concat(api_key);\n            movie_url = trandUrl; // 검색(query) 요청이 없으면 기본 데이터 출력\n\n            if (query.searchTerm) {\n              movie_url = searchUrl;\n            } else {\n              movie_url = trandUrl;\n            }\n\n            _context.next = 8;\n            return fetch(movie_url).then(function (res) {\n              return res.json();\n            }).then(function (data) {\n              movies = data;\n              console.log(movies);\n            })[\"catch\"](function (err) {\n              console.log(err);\n              movies = [];\n            });\n\n          case 8:\n            return _context.abrupt(\"return\", {\n              movies: movies.results\n            });\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movies);\n\nvar _c;\n\n$RefreshReg$(_c, \"Movies\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVzX3Nzci5qcz85MGI4Il0sIm5hbWVzIjpbIk1vdmllcyIsIm1vdmllcyIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VhcmNoUXVlcnkyIiwiYXBpX2tleSIsIm1vdmllTGlzdCIsImltZ1VybCIsInNlYXJjaFVybCIsInRyYW5kVXJsIiwidXNlRWZmZWN0Iiwic2hvd01vdmllIiwibWFwIiwiaXRlbSIsImkiLCJvcmlnaW5hbF90aXRsZSIsInBvc3Rlcl9wYXRoIiwib3ZlcnZpZXciLCJzZWFyY2hNb3ZpZSIsImhhbmRsZVRleHRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJSb3V0ZXIiLCJwdXNoIiwic2VhcmNoRm9ybSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwibW92aWVfdXJsIiwic2VhcmNoVGVybSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZXJyIiwicmVzdWx0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFjO0FBQUE7O0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUMzQjtBQUNBO0FBRjJCLGtCQUdXQyxzREFBUSxDQUFDLFdBQUQsQ0FIbkI7QUFBQSxNQUdwQkMsV0FIb0I7QUFBQSxNQUdQQyxjQUhPOztBQUFBLG1CQUlHRixzREFBUSxDQUFDLEtBQUQsQ0FKWDtBQUFBLE1BSXBCRyxPQUpvQjtBQUFBLE1BSVhDLFVBSlc7O0FBSzNCLE1BQU1DLFlBQVksR0FBRyxXQUFyQixDQUwyQixDQU8zQjs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsa0NBQWhCO0FBQ0Es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TSxDQUFDMEM7QUFEVixhQXpCZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBekI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBOEJlM0MscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXNfc3NyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBNb3ZpZXMgPSAoe21vdmllc30pID0+IHtcbiAgLy8gc3RhdGVcbiAgLy8gY29uc3QgW21vdmllLCBzZXRtb3ZpZV0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnc3RhciB3YXJzJylcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHNlYXJjaFF1ZXJ5MiA9ICdzdGFyIHdhcnMnXG5cbiAgLy8gZmV0Y2ggbW92aWUgLSDtlajsiJjripQg66eI7Jq07Yq4IOuQoOuVjCDsi6TtlonrkKhcbiAgY29uc3QgYXBpX2tleSA9ICcyMjQ1MDJjZWRiMmFlYTI4MjgwOThmMzcyNGZkMGIwYyc7XG4gIGNvbnN0IG1vdmllTGlzdCA9ICdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy80L2xpc3QvMz9wYWdlPTEmYXBpX2tleT0yMjQ1MDJjZWRiMmFlYTI4MjgwOThmMzcyNGZkMGIwYydcbiAgY29uc3QgaW1nVXJsID0gJ2h0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAnXG4gIGNvbnN0IHNlYXJjaFVybCA9IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZT9xdWVyeT0ke3NlYXJjaFF1ZXJ5Mn0mYXBpX2tleT0yMjQ1MDJjZWRiMmFlYTI4MjgwOThmMzcyNGZkMGIwY2BcbiAgY29uc3QgdHJhbmRVcmwgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90cmVuZGluZy9hbGwvZGF5P2FwaV9rZXk9JHthcGlfa2V5fWBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNob3dNb3ZpZSgpO1xuXG4gIH0sIFtdKSBcblxuICBjb25zdCBzaG93TW92aWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIC8vIDxwPlxuICAgICAgLy8gICB7IEpTT04uc3RyaW5naWZ5KG1vdmllcykgfVxuICAgICAgLy8gICAgIHsgY29uc29sZS5sb2cobW92aWVzKSB9XG4gICAgICAvLyA8L3A+XG4gICAgICBtb3ZpZXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgPHA+e2l9LiB7aXRlbS5vcmlnaW5hbF90aXRsZX08L3A+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1nVXJsK2l0ZW0ucG9zdGVyX3BhdGh9IGFsdD17aXRlbS5wb3N0ZXJfcGF0aH0gLz5cbiAgICAgICAgICAgIDxwPntpfS4ge2l0ZW0ub3ZlcnZpZXd9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgKVxuICB9XG5cbiAgY29uc3Qgc2VhcmNoTW92aWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIC8vIDxwPlxuICAgICAgLy8gICB7IEpTT04uc3RyaW5naWZ5KG1vdmllcykgfVxuICAgICAgLy8gICAgIHsgY29uc29sZS5sb2cobW92aWVzKSB9XG4gICAgICAvLyA8L3A+XG4gICAgICBtb3ZpZXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgPHA+e2l9LiB7aXRlbS5vcmlnaW5hbF90aXRsZX08L3A+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1nVXJsK2l0ZW0ucG9zdGVyX3BhdGh9IGFsdD17aXRlbS5wb3N0ZXJfcGF0aH0gLz5cbiAgICAgICAgICAgIDxwPntpfS4ge2l0ZW0ub3ZlcnZpZXd9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlVGV4dENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzdWJtaXQnKVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBSb3V0ZXIucHVzaChgLi9tb3ZpZXNfc3NyLz9zZWFyY2hUZXJtPSR7c2VhcmNoUXVlcnl9YClcbiAgfVxuXG4gIGNvbnN0IHNlYXJjaEZvcm0gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZVRleHRDaGFuZ2V9IC8+XG4gICAgICA8YnV0dG9uPlNlYXJjaDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIk1vdmllc1wiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkxpc3Qgb2YgTW92aWVzPC9oMj5cbiAgICAgICAgPGhyLz5cbiAgICAgICAgeyBzZWFyY2hGb3JtKCkgfVxuICAgICAgICA8aHIvPlxuICAgICAgICB7IHNob3dNb3ZpZSgpIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cblxuLy8gU1NSKOy9mO2FkOy4oOulvCBTZXJ2ZXIgU2lkZSBSZW5kZXJpbmcpXG5Nb3ZpZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtxdWVyeX0pID0+IHtcbiAgbGV0IG1vdmllcztcbiAgY29uc3QgYXBpX2tleSA9ICcyMjQ1MDJjZWRiMmFlYTI4MjgwOThmMzcyNGZkMGIwYyc7XG4gIGNvbnN0IHRyYW5kVXJsID0gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHJlbmRpbmcvYWxsL2RheT9hcGlfa2V5PSR7YXBpX2tleX1gXG4gIGNvbnN0IHNlYXJjaFVybCA9IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZT9xdWVyeT0ke3F1ZXJ5fSZhcGlfa2V5PSR7YXBpX2tleX1gXG4gIGxldCBtb3ZpZV91cmwgPSB0cmFuZFVybDtcbiAgXG4gIC8vIOqygOyDiShxdWVyeSkg7JqU7LKt7J20IOyXhuycvOuptCDquLDrs7gg642w7J207YSwIOy2nOugpVxuICBpZihxdWVyeS5zZWFyY2hUZXJtKSB7XG4gICAgbW92aWVfdXJsID0gc2VhcmNoVXJsO1xuICB9IGVsc2Uge1xuICAgIG1vdmllX3VybCA9IHRyYW5kVXJsO1xuICB9XG5cbiAgYXdhaXQgZmV0Y2gobW92aWVfdXJsKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgbW92aWVzID0gZGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKG1vdmllcylcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgbW92aWVzID0gW11cbiAgICB9KVxuXG4gIHJldHVybiB7IFxuICAgIG1vdmllczogbW92aWVzLnJlc3VsdHNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies_ssr.js\n");

/***/ })

})
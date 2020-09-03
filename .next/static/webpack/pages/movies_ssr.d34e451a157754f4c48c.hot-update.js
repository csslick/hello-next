webpackHotUpdate_N_E("pages/movies_ssr",{

/***/ "./pages/movies_ssr.js":
/*!*****************************!*\
  !*** ./pages/movies_ssr.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yongh/Documents/web_dev/hello-next/pages/movies_ssr.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Movies = function Movies(_ref) {\n  _s();\n\n  var movies = _ref.movies;\n\n  // state\n  // const [movie, setmovie] = useState([])\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('star wars'),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var searchQuery2 = 'star wars'; // fetch movie - 함수는 마운트 될때 실행됨\n\n  var api_key = '224502cedb2aea2828098f3724fd0b0c';\n  var movieList = 'https://api.themoviedb.org/4/list/3?page=1&api_key=224502cedb2aea2828098f3724fd0b0c';\n  var imgUrl = 'https://image.tmdb.org/t/p/w300';\n  var searchUrl = \"https://api.themoviedb.org/3/search/movie?query=\".concat(searchQuery2, \"&api_key=224502cedb2aea2828098f3724fd0b0c\");\n  var trandUrl = \"https://api.themoviedb.org/3/trending/all/day?api_key=\".concat(api_key);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {// fetchMovie();\n  }, []);\n\n  var showMovie = function showMovie() {\n    return (// <p>\n      //   { JSON.stringify(movies) }\n      //     { console.log(movies) }\n      // </p>\n      movies.map(function (item, i) {\n        return __jsx(\"div\", {\n          key: i,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 11\n          }\n        }, __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }\n        }, i, \". \", item.original_title), __jsx(\"img\", {\n          src: imgUrl + item.poster_path,\n          alt: item.poster_path,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }\n        }), __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }\n        }, i, \". \", item.overview));\n      })\n    );\n  };\n\n  var searchMovie = function searchMovie() {\n    return (// <p>\n      //   { JSON.stringify(movies) }\n      //     { console.log(movies) }\n      // </p>\n      movies.map(function (item, i) {\n        return __jsx(\"div\", {\n          key: i,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 11\n          }\n        }, __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }\n        }, i, \". \", item.original_title), __jsx(\"img\", {\n          src: imgUrl + item.poster_path,\n          alt: item.poster_path,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }\n        }), __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }\n        }, i, \". \", item.overview));\n      })\n    );\n  };\n\n  var handleTextChange = function handleTextChange(e) {\n    setSearchQuery(e.target.value);\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    console.log('submit');\n    e.preventDefault();\n    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(\"./movies_ssr/?searchTerm=\".concat(searchQuery));\n  };\n\n  var searchForm = function searchForm() {\n    return __jsx(\"form\", {\n      onSubmit: handleSubmit,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 7\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      value: searchQuery,\n      onChange: handleTextChange,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }\n    }));\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Movies\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }, \"List of Movies\"), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }), searchForm(), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }), showMovie()));\n}; // SSR(콘텐츠를 Server Side Rendering)\n\n\n_s(Movies, \"BmAserlm82aDkKKGUqpwTmsP8SM=\");\n\n_c = Movies;\n\nMovies.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var query, movies, api_key, trandUrl, searchUrl, movie_url;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query;\n            api_key = '224502cedb2aea2828098f3724fd0b0c';\n            trandUrl = \"https://api.themoviedb.org/3/trending/all/day?api_key=\".concat(api_key);\n            searchUrl = \"https://api.themoviedb.org/3/search/movie?query=\".concat(query, \"&api_key=\").concat(api_key);\n            movie_url = trandUrl; // 검색(query) 요청이 없으면 기본 데이터 출력\n\n            if (!query.searchTerm) {\n              movie_url = trandUrl;\n            } else {\n              movie_url = searchUrl;\n            }\n\n            _context.next = 8;\n            return fetch(movie_url).then(function (res) {\n              return res.json();\n            }).then(function (data) {\n              movies = data;\n              console.log(movies);\n            })[\"catch\"](function (err) {\n              console.log(err);\n              movies = [];\n            });\n\n          case 8:\n            return _context.abrupt(\"return\", {\n              movies: movies.results\n            });\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movies);\n\nvar _c;\n\n$RefreshReg$(_c, \"Movies\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVzX3Nzci5qcz85MGI4Il0sIm5hbWVzIjpbIk1vdmllcyIsIm1vdmllcyIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VhcmNoUXVlcnkyIiwiYXBpX2tleSIsIm1vdmllTGlzdCIsImltZ1VybCIsInNlYXJjaFVybCIsInRyYW5kVXJsIiwidXNlRWZmZWN0Iiwic2hvd01vdmllIiwibWFwIiwiaXRlbSIsImkiLCJvcmlnaW5hbF90aXRsZSIsInBvc3Rlcl9wYXRoIiwib3ZlcnZpZXciLCJzZWFyY2hNb3ZpZSIsImhhbmRsZVRleHRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJSb3V0ZXIiLCJwdXNoIiwic2VhcmNoRm9ybSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwibW92aWVfdXJsIiwic2VhcmNoVGVybSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZXJyIiwicmVzdWx0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFjO0FBQUE7O0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUMzQjtBQUNBO0FBRjJCLGtCQUdXQyxzREFBUSxDQUFDLFdBQUQsQ0FIbkI7QUFBQSxNQUdwQkMsV0FIb0I7QUFBQSxNQUdQQyxjQUhPOztBQUFBLG1CQUlHRixzREFBUSxDQUFDLEtBQUQsQ0FKWDtBQUFBLE1BSXBCRyxPQUpvQjtBQUFBLE1BSVhDLFVBSlc7O0FBSzNCLE1BQU1DLFlBQVksR0FBRyxXQUFyQixDQUwyQixDQU8zQjs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsa0NBQWhCO0FBQ0Es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ekJnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUE4QmUzQyxxRUFBZiIsImZpbGUiOiIuL3BhZ2VzL21vdmllc19zc3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IE1vdmllcyA9ICh7bW92aWVzfSkgPT4ge1xuICAvLyBzdGF0ZVxuICAvLyBjb25zdCBbbW92aWUsIHNldG1vdmllXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCdzdGFyIHdhcnMnKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgc2VhcmNoUXVlcnkyID0gJ3N0YXIgd2FycydcblxuICAvLyBmZXRjaCBtb3ZpZSAtIO2VqOyImOuKlCDrp4jsmrTtirgg65Cg65WMIOyLpO2WieuQqFxuICBjb25zdCBhcGlfa2V5ID0gJzIyNDUwMmNlZGIyYWVhMjgyODA5OGYzNzI0ZmQwYjBjJztcbiAgY29uc3QgbW92aWVMaXN0ID0gJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzQvbGlzdC8zP3BhZ2U9MSZhcGlfa2V5PTIyNDUwMmNlZGIyYWVhMjgyODA5OGYzNzI0ZmQwYjBjJ1xuICBjb25zdCBpbWdVcmwgPSAnaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMCdcbiAgY29uc3Qgc2VhcmNoVXJsID0gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoL21vdmllP3F1ZXJ5PSR7c2VhcmNoUXVlcnkyfSZhcGlfa2V5PTIyNDUwMmNlZGIyYWVhMjgyODA5OGYzNzI0ZmQwYjBjYFxuICBjb25zdCB0cmFuZFVybCA9IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3RyZW5kaW5nL2FsbC9kYXk/YXBpX2tleT0ke2FwaV9rZXl9YFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gZmV0Y2hNb3ZpZSgpO1xuXG4gIH0sIFtdKSBcblxuICBjb25zdCBzaG93TW92aWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIC8vIDxwPlxuICAgICAgLy8gICB7IEpTT04uc3RyaW5naWZ5KG1vdmllcykgfVxuICAgICAgLy8gICAgIHsgY29uc29sZS5sb2cobW92aWVzKSB9XG4gICAgICAvLyA8L3A+XG4gICAgICBtb3ZpZXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgPHA+e2l9LiB7aXRlbS5vcmlnaW5hbF90aXRsZX08L3A+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1nVXJsK2l0ZW0ucG9zdGVyX3BhdGh9IGFsdD17aXRlbS5wb3N0ZXJfcGF0aH0gLz5cbiAgICAgICAgICAgIDxwPntpfS4ge2l0ZW0ub3ZlcnZpZXd9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgKVxuICB9XG5cbiAgY29uc3Qgc2VhcmNoTW92aWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIC8vIDxwPlxuICAgICAgLy8gICB7IEpTT04uc3RyaW5naWZ5KG1vdmllcykgfVxuICAgICAgLy8gICAgIHsgY29uc29sZS5sb2cobW92aWVzKSB9XG4gICAgICAvLyA8L3A+XG4gICAgICBtb3ZpZXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgPHA+e2l9LiB7aXRlbS5vcmlnaW5hbF90aXRsZX08L3A+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1nVXJsK2l0ZW0ucG9zdGVyX3BhdGh9IGFsdD17aXRlbS5wb3N0ZXJfcGF0aH0gLz5cbiAgICAgICAgICAgIDxwPntpfS4ge2l0ZW0ub3ZlcnZpZXd9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlVGV4dENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzdWJtaXQnKVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBSb3V0ZXIucHVzaChgLi9tb3ZpZXNfc3NyLz9zZWFyY2hUZXJtPSR7c2VhcmNoUXVlcnl9YClcbiAgfVxuXG4gIGNvbnN0IHNlYXJjaEZvcm0gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17aGFuZGxlVGV4dENoYW5nZX0gLz5cbiAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJNb3ZpZXNcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5MaXN0IG9mIE1vdmllczwvaDI+XG4gICAgICAgIDxoci8+XG4gICAgICAgIHtzZWFyY2hGb3JtKCl9XG4gICAgICAgIDxoci8+XG4gICAgICAgIHsgc2hvd01vdmllKCkgfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuXG4vLyBTU1Io7L2Y7YWQ7Lig66W8IFNlcnZlciBTaWRlIFJlbmRlcmluZylcbk1vdmllcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3F1ZXJ5fSkgPT4ge1xuICBsZXQgbW92aWVzO1xuICBjb25zdCBhcGlfa2V5ID0gJzIyNDUwMmNlZGIyYWVhMjgyODA5OGYzNzI0ZmQwYjBjJztcbiAgY29uc3QgdHJhbmRVcmwgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90cmVuZGluZy9hbGwvZGF5P2FwaV9rZXk9JHthcGlfa2V5fWBcbiAgY29uc3Qgc2VhcmNoVXJsID0gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoL21vdmllP3F1ZXJ5PSR7cXVlcnl9JmFwaV9rZXk9JHthcGlfa2V5fWBcbiAgbGV0IG1vdmllX3VybCA9IHRyYW5kVXJsO1xuICBcbiAgLy8g6rKA7IOJKHF1ZXJ5KSDsmpTssq3snbQg7JeG7Jy866m0IOq4sOuzuCDrjbDsnbTthLAg7Lac66ClXG4gIGlmKCFxdWVyeS5zZWFyY2hUZXJtKSB7XG4gICAgbW92aWVfdXJsID0gdHJhbmRVcmw7XG4gIH0gZWxzZSB7XG4gICAgbW92aWVfdXJsID0gc2VhcmNoVXJsO1xuICB9XG5cbiAgYXdhaXQgZmV0Y2gobW92aWVfdXJsKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgbW92aWVzID0gZGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKG1vdmllcylcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgbW92aWVzID0gW11cbiAgICB9KVxuXG4gIHJldHVybiB7IFxuICAgIG1vdmllczogbW92aWVzLnJlc3VsdHNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies_ssr.js\n");

/***/ })

})
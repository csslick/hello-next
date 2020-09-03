webpackHotUpdate_N_E("pages/movies_ssr",{

/***/ "./pages/movies_ssr.js":
/*!*****************************!*\
  !*** ./pages/movies_ssr.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yongh/Documents/web_dev/hello-next/pages/movies_ssr.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Movies = function Movies(_ref) {\n  _s();\n\n  var movies = _ref.movies;\n\n  // state\n  // const [movie, setmovie] = useState([])\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('star wars'),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var searchQuery2 = 'star wars'; // fetch movie - 함수는 마운트 될때 실행됨\n\n  var api_key = '224502cedb2aea2828098f3724fd0b0c';\n  var url = 'https://api.themoviedb.org/3/movie/550?api_key=224502cedb2aea2828098f3724fd0b0c';\n  var movieList = 'https://api.themoviedb.org/4/list/3?page=1&api_key=224502cedb2aea2828098f3724fd0b0c';\n  var imgUrl = 'https://image.tmdb.org/t/p/w300';\n  var searchUrl = \"https://api.themoviedb.org/3/search/movie?query=\".concat(searchQuery2, \"&api_key=224502cedb2aea2828098f3724fd0b0c\");\n  var url2 = 'http://hn.algolia.com/api/v1/search?query=react';\n  var trandUrl = \"https://api.themoviedb.org/3/trending/all/day?api_key=\".concat(api_key);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {// fetchMovie();\n  }, []);\n\n  var showMovie = function showMovie() {\n    return (// <p>\n      //   { JSON.stringify(movies) }\n      //     { console.log(movies) }\n      // </p>\n      movies.map(function (item, i) {\n        return __jsx(\"div\", {\n          key: i,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 11\n          }\n        }, __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }\n        }, i, \". \", item.original_title), __jsx(\"img\", {\n          src: imgUrl + item.poster_path,\n          alt: item.poster_path,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }\n        }), __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }\n        }, i, \". \", item.overview));\n      })\n    );\n  };\n\n  var searchMovie = function searchMovie() {\n    return (// <p>\n      //   { JSON.stringify(movies) }\n      //     { console.log(movies) }\n      // </p>\n      movies.map(function (item, i) {\n        return __jsx(\"div\", {\n          key: i,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 11\n          }\n        }, __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }\n        }, i, \". \", item.original_title), __jsx(\"img\", {\n          src: imgUrl + item.poster_path,\n          alt: item.poster_path,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }\n        }), __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }\n        }, i, \". \", item.overview));\n      })\n    );\n  };\n\n  var handleTextChange = function handleTextChange(e) {\n    setSearchQuery(e.target.value);\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    console.log('submit');\n    e.preventDefault();\n    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(\"./movies_ssr/?searchTerm=\".concat(searchQuery));\n  };\n\n  var searchForm = function searchForm() {\n    return __jsx(\"form\", {\n      onSubmit: handleSubmit,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 7\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      onChange: handleTextChange,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 7\n      }\n    }));\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Movies\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }, \"List of Movies\"), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }), searchForm(), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }), showMovie()));\n}; // SSR(콘텐츠를 Server Side Rendering)\n\n\n_s(Movies, \"BmAserlm82aDkKKGUqpwTmsP8SM=\");\n\n_c = Movies;\n\nMovies.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var query, movies, api_key, trandUrl, searchUrl, movie_url;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query;\n            api_key = '224502cedb2aea2828098f3724fd0b0c';\n            trandUrl = \"https://api.themoviedb.org/3/trending/all/day?api_key=\".concat(api_key);\n            searchUrl = \"https://api.themoviedb.org/3/search/movie?query=\".concat(query, \"&api_key=224502cedb2aea2828098f3724fd0b0c\");\n            movie_url = trandUrl; // 검색(query) 요청이 없으면 기본 데이터 출력\n\n            if (!query.searchTerm) {\n              movie_url = trandUrl;\n            } else {\n              movie_url = searchUrl;\n            }\n\n            _context.next = 8;\n            return fetch(movie_url).then(function (res) {\n              return res.json();\n            }).then(function (data) {\n              movies = data; // console.log(movies)\n            })[\"catch\"](function (err) {\n              console.log(err);\n              movies = [];\n            });\n\n          case 8:\n            return _context.abrupt(\"return\", {\n              movies: movies.results\n            });\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movies);\n\nvar _c;\n\n$RefreshReg$(_c, \"Movies\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVzX3Nzci5qcz85MGI4Il0sIm5hbWVzIjpbIk1vdmllcyIsIm1vdmllcyIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VhcmNoUXVlcnkyIiwiYXBpX2tleSIsInVybCIsIm1vdmllTGlzdCIsImltZ1VybCIsInNlYXJjaFVybCIsInVybDIiLCJ0cmFuZFVybCIsInVzZUVmZmVjdCIsInNob3dNb3ZpZSIsIm1hcCIsIml0ZW0iLCJpIiwib3JpZ2luYWxfdGl0bGUiLCJwb3N0ZXJfcGF0aCIsIm92ZXJ2aWV3Iiwic2VhcmNoTW92aWUiLCJoYW5kbGVUZXh0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiUm91dGVyIiwicHVzaCIsInNlYXJjaEZvcm0iLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsIm1vdmllX3VybCIsInNlYXJjaFRlcm0iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVyciIsInJlc3VsdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBYztBQUFBOztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTs7QUFDM0I7QUFDQTtBQUYyQixrQkFHV0Msc0RBQVEsQ0FBQyxXQUFELENBSG5CO0FBQUEsTUFHcEJDLFdBSG9CO0FBQUEsTUFHUEMsY0FITzs7QUFBQSxtQkFJR0Ysc0RBQVEsQ0FBQyxLQUFELENBSlg7QUFBQSxNQUlwQkcsT0FKb0I7QUFBQSxNQUlYQyxVQUpXOztBQUszQixNQUFNQyxZQUFZLEdBQUcsV0FBckIsQ0FMMkIsQ0FPM0I7O0FBQ0EsTUFBTUMsT0FBTyxHQUFH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LGFBekJnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUE4QmU3QyxxRUFBZiIsImZpbGUiOiIuL3BhZ2VzL21vdmllc19zc3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IE1vdmllcyA9ICh7bW92aWVzfSkgPT4ge1xuICAvLyBzdGF0ZVxuICAvLyBjb25zdCBbbW92aWUsIHNldG1vdmllXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCdzdGFyIHdhcnMnKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgc2VhcmNoUXVlcnkyID0gJ3N0YXIgd2FycydcblxuICAvLyBmZXRjaCBtb3ZpZSAtIO2VqOyImOuKlCDrp4jsmrTtirgg65Cg65WMIOyLpO2WieuQqFxuICBjb25zdCBhcGlfa2V5ID0gJzIyNDUwMmNlZGIyYWVhMjgyODA5OGYzNzI0ZmQwYjBjJztcbiAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvNTUwP2FwaV9rZXk9MjI0NTAyY2VkYjJhZWEyODI4MDk4ZjM3MjRmZDBiMGMnO1xuICBjb25zdCBtb3ZpZUxpc3QgPSAnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvNC9saXN0LzM/cGFnZT0xJmFwaV9rZXk9MjI0NTAyY2VkYjJhZWEyODI4MDk4ZjM3MjRmZDBiMGMnXG4gIGNvbnN0IGltZ1VybCA9ICdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MzAwJ1xuICBjb25zdCBzZWFyY2hVcmwgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9zZWFyY2gvbW92aWU/cXVlcnk9JHtzZWFyY2hRdWVyeTJ9JmFwaV9rZXk9MjI0NTAyY2VkYjJhZWEyODI4MDk4ZjM3MjRmZDBiMGNgXG4gIGNvbnN0IHVybDIgPSAnaHR0cDovL2huLmFsZ29saWEuY29tL2FwaS92MS9zZWFyY2g/cXVlcnk9cmVhY3QnXG4gIGNvbnN0IHRyYW5kVXJsID0gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvdHJlbmRpbmcvYWxsL2RheT9hcGlfa2V5PSR7YXBpX2tleX1gXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBmZXRjaE1vdmllKCk7XG5cbiAgfSwgW10pIFxuXG4gIGNvbnN0IHNob3dNb3ZpZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gPHA+XG4gICAgICAvLyAgIHsgSlNPTi5zdHJpbmdpZnkobW92aWVzKSB9XG4gICAgICAvLyAgICAgeyBjb25zb2xlLmxvZyhtb3ZpZXMpIH1cbiAgICAgIC8vIDwvcD5cbiAgICAgIG1vdmllcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICA8cD57aX0uIHtpdGVtLm9yaWdpbmFsX3RpdGxlfTwvcD5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdVcmwraXRlbS5wb3N0ZXJfcGF0aH0gYWx0PXtpdGVtLnBvc3Rlcl9wYXRofSAvPlxuICAgICAgICAgICAgPHA+e2l9LiB7aXRlbS5vdmVydmlld308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICApXG4gIH1cblxuICBjb25zdCBzZWFyY2hNb3ZpZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gPHA+XG4gICAgICAvLyAgIHsgSlNPTi5zdHJpbmdpZnkobW92aWVzKSB9XG4gICAgICAvLyAgICAgeyBjb25zb2xlLmxvZyhtb3ZpZXMpIH1cbiAgICAgIC8vIDwvcD5cbiAgICAgIG1vdmllcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICA8cD57aX0uIHtpdGVtLm9yaWdpbmFsX3RpdGxlfTwvcD5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdVcmwraXRlbS5wb3N0ZXJfcGF0aH0gYWx0PXtpdGVtLnBvc3Rlcl9wYXRofSAvPlxuICAgICAgICAgICAgPHA+e2l9LiB7aXRlbS5vdmVydmlld308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICApXG4gIH1cblxuICBjb25zdCBoYW5kbGVUZXh0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdCcpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFJvdXRlci5wdXNoKGAuL21vdmllc19zc3IvP3NlYXJjaFRlcm09JHtzZWFyY2hRdWVyeX1gKVxuICB9XG5cbiAgY29uc3Qgc2VhcmNoRm9ybSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlVGV4dENoYW5nZX0gLz5cbiAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJNb3ZpZXNcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5MaXN0IG9mIE1vdmllczwvaDI+XG4gICAgICAgIDxoci8+XG4gICAgICAgIHtzZWFyY2hGb3JtKCl9XG4gICAgICAgIDxoci8+XG4gICAgICAgIHsgc2hvd01vdmllKCkgfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuXG4vLyBTU1Io7L2Y7YWQ7Lig66W8IFNlcnZlciBTaWRlIFJlbmRlcmluZylcbk1vdmllcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3F1ZXJ5fSkgPT4ge1xuICBsZXQgbW92aWVzO1xuICBjb25zdCBhcGlfa2V5ID0gJzIyNDUwMmNlZGIyYWVhMjgyODA5OGYzNzI0ZmQwYjBjJztcbiAgY29uc3QgdHJhbmRVcmwgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90cmVuZGluZy9hbGwvZGF5P2FwaV9rZXk9JHthcGlfa2V5fWBcbiAgY29uc3Qgc2VhcmNoVXJsID0gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoL21vdmllP3F1ZXJ5PSR7cXVlcnl9JmFwaV9rZXk9MjI0NTAyY2VkYjJhZWEyODI4MDk4ZjM3MjRmZDBiMGNgXG4gIGxldCBtb3ZpZV91cmwgPSB0cmFuZFVybDtcbiAgXG4gIC8vIOqygOyDiShxdWVyeSkg7JqU7LKt7J20IOyXhuycvOuptCDquLDrs7gg642w7J207YSwIOy2nOugpVxuICBpZighcXVlcnkuc2VhcmNoVGVybSkge1xuICAgIG1vdmllX3VybCA9IHRyYW5kVXJsO1xuICB9IGVsc2Uge1xuICAgIG1vdmllX3VybCA9IHNlYXJjaFVybDtcbiAgfVxuXG4gIGF3YWl0IGZldGNoKG1vdmllX3VybClcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIG1vdmllcyA9IGRhdGE7XG4gICAgICAvLyBjb25zb2xlLmxvZyhtb3ZpZXMpXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIG1vdmllcyA9IFtdXG4gICAgfSlcblxuICByZXR1cm4geyBcbiAgICBtb3ZpZXM6IG1vdmllcy5yZXN1bHRzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies_ssr.js\n");

/***/ })

})
"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["index"],{

/***/ "./src/fetchGIF.js":
/*!*************************!*\
  !*** ./src/fetchGIF.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchNew": () => (/* binding */ fetchNew)
/* harmony export */ });
const displayNotFound = document.getElementById('notFound');
const fetchNew = async () => {
  const image = document.getElementById('image');
  await fetch('https://api.giphy.com/v1/gifs/translate?api_key=AwFuWvUi5hOrf2vqElpXARws8MQPPZAR&s=cat', {
    mode: 'cors'
  }).then(data => {
    return data.json();
  }).then(response => {
    image.src = response.data.images.original.url;
    displayNotFound.innerHTML = '';
  }).catch(e => {
    console.log(e.code + ': ' + e.message);
  });
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _myStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myStyle.css */ "./src/myStyle.css");
/* harmony import */ var _fetchGIF_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchGIF.js */ "./src/fetchGIF.js");
/* harmony import */ var _giphy_js_fetch_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @giphy/js-fetch-api */ "./node_modules/@giphy/js-fetch-api/dist/index.js");
/* harmony import */ var _giphy_js_fetch_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_giphy_js_fetch_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _searchGIF_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searchGIF.js */ "./src/searchGIF.js");




 //for watching the html file 

__webpack_require__(/*! ./index.html */ "./src/index.html");

const countdown = {
  count: 20,

  decrement() {
    if (this.count == 0) {
      this.count = 20;
    } else {
      this.count--;
    }
  }

};
const button = document.getElementById('fetchButton');
button.addEventListener('click', _fetchGIF_js__WEBPACK_IMPORTED_MODULE_2__.fetchNew);
const img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=AwFuWvUi5hOrf2vqElpXARws8MQPPZAR&s=cat', {
  mode: 'cors'
}).then(function (response) {
  return response.json();
}).then(function (response) {
  img.src = response.data.images.original.url; //console.log(response)
});
setInterval(function () {
  location.reload();
}, 20000);
const countDisplay = document.getElementById('countdown');
countDisplay.innerHTML = countdown.count;
setInterval(function () {
  countdown.decrement();
  countDisplay.innerHTML = countdown.count;
}, 1000);

/***/ }),

/***/ "./src/searchGIF.js":
/*!**************************!*\
  !*** ./src/searchGIF.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchNew": () => (/* binding */ fetchNew),
/* harmony export */   "handleSearch": () => (/* binding */ handleSearch)
/* harmony export */ });
const fetchNew = async () => {
  const image = document.getElementById('image');
  await fetch('https://api.giphy.com/v1/gifs/translate?api_key=AwFuWvUi5hOrf2vqElpXARws8MQPPZAR&s=cat', {
    mode: 'cors'
  }).then(data => {
    return data.json();
  }).then(response => {
    image.src = response.data.images.original.url;
  }).catch(e => {
    console.log(e.code + ': ' + e.message);
  });
};
const searchField = document.getElementById('searchField');
const searchButton = document.getElementById('searchButton');
const displayNotFound = document.getElementById('notFound');
const handleSearch = async () => {
  const image = document.getElementById('image');
  var userQuery = searchField.value;
  var query = 'https://api.giphy.com/v1/gifs/search?api_key=AwFuWvUi5hOrf2vqElpXARws8MQPPZAR&q=' + userQuery.toString(); //var query = 'https://api.giphy.com/v1/gifs/translate?api_key=AwFuWvUi5hOrf2vqElpXARws8MQPPZAR&s=' + userQuery.toString(); 

  try {
    //    await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=AwFuWvUi5hOrf2vqElpXARws8MQPPZAR&s=cat&q=${query}`, { mode: 'cors' })
    await fetch(query, {
      mode: 'cors'
    }).then(data => {
      return data.json();
    }).then(response => {
      //image.src = response.data.images.original.url;
      //console.log(response)
      let url = findImage(userQuery, response.data);
      console.log(response.data);

      if (url != '') {
        image.src = url;
        displayNotFound.innerHTML = '';
      } else {
        image.src = 'https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif';
        displayNotFound.innerHTML = 'Your search result turned up nothing';
      }
    }).catch(e => {
      console.log(e.code + ': ' + e.message);
    });
  } catch (e) {
    console.log(e.code + ': ' + e.message);
  }
};
var event = new Event('input');
searchButton.addEventListener('click', () => {
  handleSearch();
}); //searchField.dispatchEvent(event);

function findImage(query, array) {
  var image = '';
  array.forEach(item => {
    if (item.title.toLowerCase().indexOf(query.toLowerCase()) != -1) {
      image = item.images.original.url;
    }
  });
  return image;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/myStyle.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/myStyle.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#container {\r\n    width: 100%; \r\n    height: 100%; \r\n    text-align: center;\r\n    justify-content: center;\r\n}\r\n\r\nimg {\r\nmargin: auto;\r\n}\r\n\r\n#countdown {\r\nfont-weight: bold;\r\n}\r\n\r\n\r\n#fetchContainer {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#searchContainer {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n}\r\n\r\n#searchField {\r\n    display: inline-block;\r\n}\r\n\r\n#searchButton {\r\n    display: inline-block;\r\n}\r\n\r\n#notFound {\r\n    height: 30px; \r\n}\r\n", "",{"version":3,"sources":["webpack://./src/myStyle.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;AACA,YAAY;AACZ;;AAEA;AACA,iBAAiB;AACjB;;;AAGA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB","sourcesContent":["#container {\r\n    width: 100%; \r\n    height: 100%; \r\n    text-align: center;\r\n    justify-content: center;\r\n}\r\n\r\nimg {\r\nmargin: auto;\r\n}\r\n\r\n#countdown {\r\nfont-weight: bold;\r\n}\r\n\r\n\r\n#fetchContainer {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#searchContainer {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n}\r\n\r\n#searchField {\r\n    display: inline-block;\r\n}\r\n\r\n#searchButton {\r\n    display: inline-block;\r\n}\r\n\r\n#notFound {\r\n    height: 30px; \r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title>Cat GIF</title>\r\n</head>\r\n<body>\r\n    <div id=\"container\">\r\n\r\n        <img src=\"#\" id=\"image\">\r\n        <div id=\"notFound\"></div>\r\n        <div id=\"fetchContainer\">\r\n            <button id=\"fetchButton\">New GIF</button>\r\n        </div>\r\n        <div id=\"searchContainer\">\r\n            <input type=\"text\" id=\"searchField\"/>\r\n            <button id=\"searchButton\">Search</button>\r\n        </div>\r\n        <div id=\"countContainer\">\r\n            <h3>New cat GIF in:</h3>\r\n            <p id=\"countdown\"></p>\r\n        </div>\r\n    </div>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/myStyle.css":
/*!*************************!*\
  !*** ./src/myStyle.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_myStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./myStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/myStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_myStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_myStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_myStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_myStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_giphy_js-fetch-api_dist_index_js-node_modules_css-loader_dist_runtime_ap-127b18","shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRm5CLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQXFHO0FBQ3JHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJK0M7QUFDdkUsT0FBTyxpRUFBZSx3RkFBTyxJQUFJLCtGQUFjLEdBQUcsK0ZBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9mZXRjaEdJRi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvc2VhcmNoR0lGLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvbXlTdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvbXlTdHlsZS5jc3M/MzQ2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkaXNwbGF5Tm90Rm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90Rm91bmQnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaE5ldyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlJyk7XHJcbiAgICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9QXdGdVd2VWk1aE9yZjJ2cUVscFhBUndzOE1RUFBaQVImcz1jYXQnLCB7IG1vZGU6ICdjb3JzJyB9KVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4geyByZXR1cm4gZGF0YS5qc29uKCk7IH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSByZXNwb25zZS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XHJcbiAgICAgICAgICAgIGRpc3BsYXlOb3RGb3VuZC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlID0+IHtjb25zb2xlLmxvZyhlLmNvZGUgKyAnOiAnICArIGUubWVzc2FnZSl9KVxyXG59XHJcblxyXG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJy4vbXlTdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBmZXRjaE5ldyB9IGZyb20gICcuL2ZldGNoR0lGLmpzJ1xyXG5pbXBvcnQgeyBHaXBoeUZldGNoIH0gZnJvbSAnQGdpcGh5L2pzLWZldGNoLWFwaSdcclxuaW1wb3J0ICcuL3NlYXJjaEdJRi5qcyc7XHJcblxyXG4vL2ZvciB3YXRjaGluZyB0aGUgaHRtbCBmaWxlIFxyXG5yZXF1aXJlKCcuL2luZGV4Lmh0bWwnKVxyXG5cclxuY29uc3QgY291bnRkb3duID0ge1xyXG4gICAgY291bnQ6IDIwLFxyXG4gICAgZGVjcmVtZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IDIwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudC0tO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn1cclxuXHJcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZXRjaEJ1dHRvbicpO1xyXG5cclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmV0Y2hOZXcpO1xyXG5cclxuY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbmZldGNoKCdodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT1Bd0Z1V3ZVaTVoT3JmMnZxRWxwWEFSd3M4TVFQUFpBUiZzPWNhdCcsIHsgbW9kZTogJ2NvcnMnIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGltZy5zcmMgPSByZXNwb25zZS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgIH0pXHJcblxyXG5cclxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbn0sIDIwMDAwKVxyXG5jb25zdCBjb3VudERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRkb3duJyk7XHJcbmNvdW50RGlzcGxheS5pbm5lckhUTUwgPSBjb3VudGRvd24uY291bnQ7XHJcbnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvdW50ZG93bi5kZWNyZW1lbnQoKTtcclxuICAgIGNvdW50RGlzcGxheS5pbm5lckhUTUwgPSBjb3VudGRvd24uY291bnQ7XHJcblxyXG59LCAxMDAwKVxyXG4iLCJleHBvcnQgY29uc3QgZmV0Y2hOZXcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZScpO1xyXG4gICAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PUF3RnVXdlVpNWhPcmYydnFFbHBYQVJ3czhNUVBQWkFSJnM9Y2F0JywgeyBtb2RlOiAnY29ycycgfSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHsgcmV0dXJuIGRhdGEuanNvbigpOyB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gcmVzcG9uc2UuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGUgPT4geyBjb25zb2xlLmxvZyhlLmNvZGUgKyAnOiAnICsgZS5tZXNzYWdlKSB9KVxyXG59XHJcblxyXG5jb25zdCBzZWFyY2hGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hGaWVsZCcpOyBcclxuXHJcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCdXR0b24nKTtcclxuY29uc3QgZGlzcGxheU5vdEZvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdEZvdW5kJyk7IFxyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlJyk7XHJcbiAgICB2YXIgdXNlclF1ZXJ5ID0gc2VhcmNoRmllbGQudmFsdWU7IFxyXG4gICAgdmFyIHF1ZXJ5ID0gJ2h0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3NlYXJjaD9hcGlfa2V5PUF3RnVXdlVpNWhPcmYydnFFbHBYQVJ3czhNUVBQWkFSJnE9JyArIHVzZXJRdWVyeS50b1N0cmluZygpOyBcclxuICAgIC8vdmFyIHF1ZXJ5ID0gJ2h0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PUF3RnVXdlVpNWhPcmYydnFFbHBYQVJ3czhNUVBQWkFSJnM9JyArIHVzZXJRdWVyeS50b1N0cmluZygpOyBcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgXHJcbiAgICAvLyAgICBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9QXdGdVd2VWk1aE9yZjJ2cUVscFhBUndzOE1RUFBaQVImcz1jYXQmcT0ke3F1ZXJ5fWAsIHsgbW9kZTogJ2NvcnMnIH0pXHJcbiAgICAgICAgYXdhaXQgZmV0Y2gocXVlcnksIHsgbW9kZTogJ2NvcnMnIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4geyByZXR1cm4gZGF0YS5qc29uKCk7IH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIC8vaW1hZ2Uuc3JjID0gcmVzcG9uc2UuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBmaW5kSW1hZ2UodXNlclF1ZXJ5LCByZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgICAgIGlmICh1cmwgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5vdEZvdW5kLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gJ2h0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhLzZ1R2hUMU80c3hwaTgvZ2lwaHkuZ2lmJ1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOb3RGb3VuZC5pbm5lckhUTUwgPSAnWW91ciBzZWFyY2ggcmVzdWx0IHR1cm5lZCB1cCBub3RoaW5nJzsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHsgY29uc29sZS5sb2coZS5jb2RlICsgJzogJyArIGUubWVzc2FnZSl9KVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLmNvZGUgKyAnOiAnICsgZS5tZXNzYWdlKVxyXG4gICAgfVxyXG59XHJcblxyXG52YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2lucHV0JylcclxuXHJcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgaGFuZGxlU2VhcmNoKCkgfSlcclxuLy9zZWFyY2hGaWVsZC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRJbWFnZShxdWVyeSwgYXJyYXkpIHtcclxuICAgIHZhciBpbWFnZSA9ICcnO1xyXG4gICAgYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbS50aXRsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgaW1hZ2UgPSBpdGVtLmltYWdlcy5vcmlnaW5hbC51cmw7IFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gaW1hZ2U7IFxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2NvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyBcXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG5tYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNjb3VudGRvd24ge1xcclxcbmZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jZmV0Y2hDb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoQ29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2hGaWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaEJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI25vdEZvdW5kIHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4OyBcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL215U3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyBcXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG5tYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNjb3VudGRvd24ge1xcclxcbmZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jZmV0Y2hDb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoQ29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2hGaWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaEJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI25vdEZvdW5kIHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4OyBcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sPlxcclxcbjxoZWFkPlxcclxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJ1dGYtOFxcXCIgLz5cXHJcXG4gICAgPHRpdGxlPkNhdCBHSUY8L3RpdGxlPlxcclxcbjwvaGVhZD5cXHJcXG48Ym9keT5cXHJcXG4gICAgPGRpdiBpZD1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxpbWcgc3JjPVxcXCIjXFxcIiBpZD1cXFwiaW1hZ2VcXFwiPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwibm90Rm91bmRcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiZmV0Y2hDb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcImZldGNoQnV0dG9uXFxcIj5OZXcgR0lGPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcInNlYXJjaENvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJzZWFyY2hGaWVsZFxcXCIvPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcInNlYXJjaEJ1dHRvblxcXCI+U2VhcmNoPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImNvdW50Q29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDM+TmV3IGNhdCBHSUYgaW46PC9oMz5cXHJcXG4gICAgICAgICAgICA8cCBpZD1cXFwiY291bnRkb3duXFxcIj48L3A+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9ib2R5PlxcclxcbjwvaHRtbD5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215U3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teVN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJkaXNwbGF5Tm90Rm91bmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmV0Y2hOZXciLCJpbWFnZSIsImZldGNoIiwibW9kZSIsInRoZW4iLCJkYXRhIiwianNvbiIsInJlc3BvbnNlIiwic3JjIiwiaW1hZ2VzIiwib3JpZ2luYWwiLCJ1cmwiLCJpbm5lckhUTUwiLCJjYXRjaCIsImUiLCJjb25zb2xlIiwibG9nIiwiY29kZSIsIm1lc3NhZ2UiLCJfIiwiR2lwaHlGZXRjaCIsInJlcXVpcmUiLCJjb3VudGRvd24iLCJjb3VudCIsImRlY3JlbWVudCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbWciLCJxdWVyeVNlbGVjdG9yIiwic2V0SW50ZXJ2YWwiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNvdW50RGlzcGxheSIsInNlYXJjaEZpZWxkIiwic2VhcmNoQnV0dG9uIiwiaGFuZGxlU2VhcmNoIiwidXNlclF1ZXJ5IiwidmFsdWUiLCJxdWVyeSIsInRvU3RyaW5nIiwiZmluZEltYWdlIiwiZXZlbnQiLCJFdmVudCIsImFycmF5IiwiZm9yRWFjaCIsIml0ZW0iLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiJdLCJzb3VyY2VSb290IjoiIn0=
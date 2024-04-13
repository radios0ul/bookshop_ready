/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n//import \"./styles/style.scss\";\r\n//import \"./index.pug\";\r\n\r\n\r\n\r\n\r\n\r\nlet slider = new _slider__WEBPACK_IMPORTED_MODULE_0__.Slider();\r\n\r\n//slider.bannerAutoSlide()\r\nslider.bannerManualSlide()\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://2024.02.29-booksshop/./src/index.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slider: () => (/* binding */ Slider)\n/* harmony export */ });\n\r\nclass Slider{\r\n\r\nconstructor() {\r\n\r\n\r\n\r\n   this.pointer1 = document.querySelector('.pointer-1');\r\n   this.pointer2 = document.querySelector('.pointer-2');\r\n   this.pointer3 = document.querySelector('.pointer-3');\r\n\r\n   this.banners = document.querySelectorAll('.hero__banner-img');\r\n   this.pointers = document.querySelectorAll('.banner-pointer');\r\n\r\n}\r\n\r\n\r\n showBanner(imgNmbr) {\r\n\r\n   console.log(\"showBanner \" + imgNmbr);\r\n   console.log(this.banners[imgNmbr]);\r\n\r\n    for (let i = 0; i < this.banners.length; i++) {\r\n\r\n   if (i == imgNmbr) {\r\n\r\n   this.banners[i].classList.add('slider-active');\r\n   this.banners[i].classList.remove('slider-inactive');\r\n   this.pointers[i].classList.add('active-pointer');\r\n   this.pointers[i].classList.remove('inactive-pointer');\r\n   \r\n      } else {\r\n\r\n   this.banners[i].classList.remove('slider-active');\r\n   this.banners[i].classList.add('slider-inactive');\r\n   this.pointers[i].classList.remove('active-pointer');\r\n   this.pointers[i].classList.add('inactive-pointer');\r\n  \r\n      }\r\n\r\n    } \r\n} \r\n\r\n\r\nbannerManualSlide() {\r\n   \r\n   for (let i = 0; i < this.banners.length; i++) {\r\n\r\n      this.pointers[i].addEventListener('click', ()=> {\r\n         console.log(\"i \"+i);\r\n         this.showBanner(i)\r\n      \r\n      })\r\n\r\n   }\r\n\r\n}\r\n\r\nbannerAutoSlide() {\r\n\r\n   for (let i = 0; i < this.banners.length; i++) {\r\n\r\n   this.IntervalID = setInterval(() => {\r\n\r\n      \r\n\r\n         this.showBanner(i)\r\n\r\n        \r\n      }, 500)\r\n\r\n\r\n      if (i == (this.banners.length-1)) {i=0}\r\n   }\r\n}\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://2024.02.29-booksshop/./src/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
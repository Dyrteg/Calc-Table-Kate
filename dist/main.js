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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_totalPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/totalPrice */ \"./src/modules/totalPrice.js\");\n\n\n(0,_modules_totalPrice__WEBPACK_IMPORTED_MODULE_0__.totalPrice)();\n\n//# sourceURL=webpack://coursetable-main/./src/index.js?");

/***/ }),

/***/ "./src/modules/totalPrice.js":
/*!***********************************!*\
  !*** ./src/modules/totalPrice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   totalPrice: () => (/* binding */ totalPrice)\n/* harmony export */ });\nconst totalPrice = () => {\r\n    let table = document.getElementById('table__body');\r\n\r\n        // Добавляем обработчик события на всю таблицу\r\n        table.addEventListener('input', function(event) {\r\n            let inputElement = event.target;\r\n\r\n            // Проверяем, что элемент — это инпут или чекбокс внутри таблицы\r\n            if (inputElement.tagName === 'INPUT' && (inputElement.classList.contains('applyDiscount') || inputElement.classList.contains('input'))) {\r\n                updateSum(inputElement);\r\n            }\r\n        });\r\n\r\n        function updateSum(input) {\r\n            let row = input.closest('tr'); // Находим ближайшую строку\r\n            let lengthInput = parseFloat(row.querySelector('.length').value) || 0;\r\n            let segmentsInput = parseFloat(row.querySelector('.segments').value) || 0;\r\n            let widthInput = parseFloat(row.querySelector('.width').value) || 0;\r\n            let heightInput = parseFloat(row.querySelector('.height').value) || 0;\r\n            let applyDiscount = row.querySelector('.applyDiscount').checked;\r\n            let resultElement = row.querySelector('.result'); // Получаем элемент для отображения результата\r\n\r\n            // Проверяем, что все значения введены\r\n            if (lengthInput == 0 || segmentsInput == 0 || widthInput == 0 || heightInput == 0) {\r\n                // resultElement.textContent = 'Сумма: Некорректный ввод';\r\n                return;\r\n            }\r\n\r\n            // Переводим длину в мм в метры и умножаем на 400\r\n            let lengthInMeters = lengthInput / 1000;\r\n            let lengthCost = lengthInMeters * 400;\r\n\r\n            // Умножаем количество сегментов на 50\r\n            let segmentsCost = segmentsInput * 50;\r\n\r\n            // Переводим ширину и высоту в мм в метры и умножаем их между собой, затем умножаем на 6900\r\n            let widthInMeters = widthInput / 1000;\r\n            let heightInMeters = heightInput / 1000;\r\n            let dimensionsCost = widthInMeters * heightInMeters * 6900;\r\n\r\n            // Считаем общую сумму\r\n            let totalCost = (lengthCost + segmentsCost + dimensionsCost)*1.5;\r\n            \r\n\r\n            // Если чекбокс активен, увеличиваем сумму на 35%\r\n            if (applyDiscount) {\r\n                totalCost *= 1.35;\r\n            }\r\n\r\n            // Округляем результат до двух знаков после точки\r\n            totalCost = totalCost.toFixed(2);\r\n\r\n            // Обновляем отображение суммы в текущей строке\r\n            resultElement.textContent = totalCost;\r\n        }\r\n}\n\n//# sourceURL=webpack://coursetable-main/./src/modules/totalPrice.js?");

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
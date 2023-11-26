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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_totalPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/totalPrice */ \"./src/modules/totalPrice.js\");\n/* harmony import */ var _modules_addLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addLine */ \"./src/modules/addLine.js\");\n/* harmony import */ var _modules_saveLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/saveLine */ \"./src/modules/saveLine.js\");\n/* harmony import */ var _modules_renderLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/renderLine */ \"./src/modules/renderLine.js\");\n/* harmony import */ var _modules_setupSorting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/setupSorting */ \"./src/modules/setupSorting.js\");\n/* harmony import */ var _modules_sortPrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sortPrice */ \"./src/modules/sortPrice.js\");\n\n\n\n\n\n\n\n(0,_modules_renderLine__WEBPACK_IMPORTED_MODULE_3__.renderLine)();\n(0,_modules_addLine__WEBPACK_IMPORTED_MODULE_1__.addLine)();\n(0,_modules_saveLine__WEBPACK_IMPORTED_MODULE_2__.saveLine)();\n(0,_modules_setupSorting__WEBPACK_IMPORTED_MODULE_4__.setupSorting)();\n(0,_modules_totalPrice__WEBPACK_IMPORTED_MODULE_0__.totalPrice)();\n(0,_modules_sortPrice__WEBPACK_IMPORTED_MODULE_5__.sortPrice)();\n\n//# sourceURL=webpack://coursetable-main/./src/index.js?");

/***/ }),

/***/ "./src/modules/addLine.js":
/*!********************************!*\
  !*** ./src/modules/addLine.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLine: () => (/* binding */ addLine)\n/* harmony export */ });\nconst addLine = () => {\r\n    const buttonAdd = document.querySelector('.button__add');\r\n    \r\n    buttonAdd.addEventListener('click', () => {\r\n      const tableBody = document.getElementById('table__body');\r\n      const tbody = tableBody.querySelector('tbody');\r\n    \r\n      // Создаем уникальный data-id на основе временной метки\r\n      const uniqueId = Date.now();\r\n    \r\n      const line = `\r\n        <tr data-id=\"${uniqueId}\">\r\n          <td class=\"table__number\"><input type=\"text\" class=\"input\" value=\"\"></td>\r\n          <td class=\"table__dlina\"><input class=\"length input\" onkeyup=\"this.value = this.value.replace(/D/g, '');\" name=\"text\" type=\"text\" id=\"input-id\" value=\"\"></td>\r\n          <td class=\"table__segment\"><input class=\"segments input\" onkeyup=\"this.value = this.value.replace(/D/g, '');\" name=\"text\" type=\"text\" value=\"\"></td>\r\n          <td class=\"table__wi\"><input class=\"width input\" onkeyup=\"this.value = this.value.replace(/D/g, '');\" name=\"text\" type=\"text\" value=\"\"></td>\r\n          <td class=\"table__he\"><input class=\"height input\" onkeyup=\"this.value = this.value.replace(/D/g, '');\" name=\"text\" type=\"text\" value=\"\"></td>\r\n          <td class=\"result\"></td>\r\n          <td class=\"street\" data-id=\"3\">\r\n            <label class=\"checkbox-btn\">\r\n              <label for=\"checkbox\"></label>\r\n              <input id=\"checkbox\" type=\"checkbox\" class=\"applyDiscount\">\r\n              <span class=\"checkmark\"></span>\r\n            </label>\r\n          </td>\r\n        </tr>\r\n      `;\r\n    \r\n      tbody.insertAdjacentHTML('beforeend', line);\r\n    })\r\n}\n\n//# sourceURL=webpack://coursetable-main/./src/modules/addLine.js?");

/***/ }),

/***/ "./src/modules/renderLine.js":
/*!***********************************!*\
  !*** ./src/modules/renderLine.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLine: () => (/* binding */ renderLine)\n/* harmony export */ });\nconst renderLine = () => {\r\n // Пример получения данных с сервера\r\n fetch('http://localhost:3000/posts')\r\n   .then(response => response.json())\r\n   .then(data => {\r\n     // Обработка полученных данных, например, рендеринг на странице\r\n     renderTable(data);\r\n   })\r\n   .catch(error => console.error('Error fetching data:', error));\r\n\r\n function renderTable(data) {\r\n   const tableBody = document.getElementById('table__body');\r\n   const tbody = tableBody.querySelector('tbody');\r\n\r\n   // Рендерим строки на основе полученных данных\r\n   data.forEach(row => {\r\n     const line = `\r\n       <tr data-id=\"${row.id}\">\r\n         <td class=\"table__number\"><input type=\"text\" class=\"input\" value=\"${row.number}\"></td>\r\n         <td class=\"table__dlina\"><input class=\"length input\" onkeyup=\"this.value = this.value.replace(/\\D/g, '');\" name=\"text\" type=\"text\" id=\"input-id\" value=\"${row.dlina}\"></td>\r\n         <td class=\"table__segment\"><input class=\"segments input\" onkeyup=\"this.value = this.value.replace(/\\D/g, '');\" name=\"text\" type=\"text\" value=\"${row.segment}\"></td>\r\n         <td class=\"table__wi\"><input class=\"width input\" onkeyup=\"this.value = this.value.replace(/\\D/g, '');\" name=\"text\" type=\"text\" value=\"${row.width}\"></td>\r\n         <td class=\"table__he\"><input class=\"height input\" onkeyup=\"this.value = this.value.replace(/\\D/g, '');\" name=\"text\" type=\"text\" value=\"${row.height}\"></td>\r\n         <td class=\"result\" data-price=\"${row.result}\">${row.result}</td>\r\n         <td class=\"street\" data-id=\"${row.id}\">\r\n           <label class=\"checkbox-btn\">\r\n             <label for=\"checkbox\"></label>\r\n             <input id=\"checkbox\" type=\"checkbox\" class=\"applyDiscount\" ${row.applyDiscount ? 'checked' : ''}>\r\n             <span class=\"checkmark\"></span>\r\n           </label>\r\n         </td>\r\n       </tr>\r\n     `;\r\n\r\n     tbody.insertAdjacentHTML('beforeend', line);\r\n   });\r\n }\r\n}\r\n\n\n//# sourceURL=webpack://coursetable-main/./src/modules/renderLine.js?");

/***/ }),

/***/ "./src/modules/saveLine.js":
/*!*********************************!*\
  !*** ./src/modules/saveLine.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   saveLine: () => (/* binding */ saveLine)\n/* harmony export */ });\nconst saveLine = () => {\r\n  const buttonSave = document.querySelector('.button__save');\r\n  let posts = [];\r\n\r\n  buttonSave.addEventListener('click', () => {\r\n    const tableRows = document.querySelectorAll('tr[data-id]');\r\n\r\n    const dataToUpdate = Array.from(tableRows).map(row => {\r\n      return {\r\n        id: row.getAttribute('data-id'),\r\n        number: row.querySelector('.table__number input').value,\r\n        dlina: row.querySelector('.table__dlina input').value,\r\n        segment: row.querySelector('.table__segment input').value,\r\n        width: row.querySelector('.table__wi input').value,\r\n        height: row.querySelector('.table__he input').value,\r\n        result: row.querySelector('.result').textContent,\r\n        applyDiscount: row.querySelector('.applyDiscount').checked,\r\n      };\r\n    });\r\n    fetch('http://localhost:3000/posts')\r\n    .then(response => response.json())\r\n    .then(data => {\r\n      // После получения данных с сервера, вызываем функцию saveLine\r\n      const posts = data;\r\n      updateDataOnServer(dataToUpdate, posts);\r\n    })\r\n    .catch(error => console.error('Error fetching data from server:', error));\r\n  });\r\n\r\n  function updateDataOnServer(dataToUpdate, posts) {\r\n    // Отправка запросов для каждого элемента с использованием id\r\n    dataToUpdate.forEach(item => {\r\n      // Проверяем наличие id в массиве posts\r\n      const isIdInPosts = posts && posts.some(post => post.id === item.id);\r\n\r\n      if (isIdInPosts) {\r\n        console.log(item);\r\n        // Если id присутствует, отправляем PUT-запрос для обновления данных\r\n        fetch(`http://localhost:3000/posts/${item.id}`, {\r\n          method: 'PATCH', // Меняем метод на PUT\r\n          headers: {\r\n            'Content-Type': 'application/json',\r\n          },\r\n          body: JSON.stringify(item),\r\n        })\r\n          .then(response => response.json())\r\n          .then(data => console.log(`Data for id ${item.id} updated on server:`, data))\r\n          .catch(error => console.error(`Error updating data for id ${item.id} on server:`, error));\r\n      } else {\r\n        // Если id отсутствует, отправляем POST-запрос для добавления нового элемента\r\n        fetch('http://localhost:3000/posts', {\r\n          method: 'POST',\r\n          headers: {\r\n            'Content-Type': 'application/json',\r\n          },\r\n          body: JSON.stringify(item),\r\n        })\r\n          .then(response => response.json())\r\n          .then(data => console.log(`New data for id ${item.id} added to server:`, data))\r\n          .catch(error => console.error(`Error adding new data for id ${item.id} on server:`, error));\r\n      }\r\n    });\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://coursetable-main/./src/modules/saveLine.js?");

/***/ }),

/***/ "./src/modules/setupSorting.js":
/*!*************************************!*\
  !*** ./src/modules/setupSorting.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupSorting: () => (/* binding */ setupSorting)\n/* harmony export */ });\n// Ваш клиентский код\r\n\r\nconst setupSorting = () => {\r\n const sortImage = document.querySelector('.table__num-image');\r\n const tableBody = document.getElementById('table__body');\r\n let ascendingOrder = true; // Переменная для отслеживания направления сортировки\r\n\r\n sortImage.addEventListener('click', () => {\r\n   const rows = Array.from(tableBody.querySelectorAll('tr[data-id]'));\r\n\r\n   // Получаем значения 'number' из каждой строки\r\n   const values = rows.map(row => {\r\n     return {\r\n       id: row.getAttribute('data-id'),\r\n       number: row.querySelector('.table__number input').value.toLowerCase(),\r\n       // Другие поля, если необходимо\r\n     };\r\n   });\r\n\r\n   // Разделяем строки на два массива: один с заполненными 'number', другой - с пустыми\r\n   const nonEmptyValues = values.filter(item => item.number.trim() !== '');\r\n   const emptyValues = values.filter(item => item.number.trim() === '');\r\n\r\n   // Сортируем массив с заполненными 'number' в алфавитном порядке\r\n   nonEmptyValues.sort((a, b) => {\r\n     const compareResult = a.number.localeCompare(b.number);\r\n     return ascendingOrder ? compareResult : -compareResult; // Убывание, если ascendingOrder = false\r\n   });\r\n\r\n   // Объединяем отсортированный массив с заполненными 'number' и массив с пустыми строками\r\n   const sortedValues = nonEmptyValues.concat(emptyValues);\r\n\r\n   // Обновляем порядок строк в таблице\r\n   sortedValues.forEach((item, index) => {\r\n     const row = rows.find(row => row.getAttribute('data-id') === item.id);\r\n     if (row) {\r\n       tableBody.appendChild(row);\r\n     }\r\n   });\r\n\r\n   // Изменяем направление сортировки для следующего нажатия\r\n   ascendingOrder = !ascendingOrder;\r\n });\r\n};\r\n\n\n//# sourceURL=webpack://coursetable-main/./src/modules/setupSorting.js?");

/***/ }),

/***/ "./src/modules/sortPrice.js":
/*!**********************************!*\
  !*** ./src/modules/sortPrice.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sortPrice: () => (/* binding */ sortPrice)\n/* harmony export */ });\nconst sortPrice = () => {\r\n  let ascendingOrder = true; // Переменная для отслеживания порядка сортировки\r\n\r\n  const moneyHeader = document.querySelector('.table__money');\r\n  moneyHeader.addEventListener('click', () => {\r\n    // Вызови функцию для сортировки данных по цене\r\n    sortDataByPrice();\r\n  });\r\n  \r\n  // Функция для сортировки данных по цене\r\n  const sortDataByPrice = () => {\r\n    // Получи все строки таблицы\r\n    const tableRows = document.querySelectorAll('tr[data-id]');\r\n  \r\n    // Преобразуй коллекцию строк в массив\r\n    const rowsArray = Array.from(tableRows);\r\n  \r\n    // Сортируй массив строк по цене\r\n    rowsArray.sort((rowA, rowB) => {\r\n      const priceA = parseFloat(rowA.querySelector('.result').getAttribute('data-price'));\r\n      const priceB = parseFloat(rowB.querySelector('.result').getAttribute('data-price'));\r\n  \r\n      // Изменяй знак сравнения в зависимости от порядка сортировки\r\n      return ascendingOrder ? priceA - priceB : priceB - priceA;\r\n    });\r\n  \r\n    // Обнови порядок сортировки для следующего клика\r\n    ascendingOrder = !ascendingOrder;\r\n  \r\n    // Очисти содержимое таблицы\r\n    const tableBody = document.getElementById('table__body');\r\n    const tbody = tableBody.querySelector('tbody');\r\n    tbody.innerHTML = '';\r\n  \r\n    // Вставь отсортированные строки обратно в таблицу\r\n    rowsArray.forEach(row => {\r\n      tbody.appendChild(row);\r\n    });\r\n  };\r\n  \r\n}\n\n//# sourceURL=webpack://coursetable-main/./src/modules/sortPrice.js?");

/***/ }),

/***/ "./src/modules/totalPrice.js":
/*!***********************************!*\
  !*** ./src/modules/totalPrice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   totalPrice: () => (/* binding */ totalPrice)\n/* harmony export */ });\nconst totalPrice = () => {\r\n    let table = document.getElementById('table__body');\r\n\r\n        // Добавляем обработчик события на всю таблицу\r\n        table.addEventListener('input', function(event) {\r\n            let inputElement = event.target;\r\n\r\n            // Проверяем, что элемент — это инпут или чекбокс внутри таблицы\r\n            if (inputElement.tagName === 'INPUT' && (inputElement.classList.contains('applyDiscount') || inputElement.classList.contains('input'))) {\r\n                updateSum(inputElement);\r\n            }\r\n        });\r\n\r\n        function updateSum(input) {\r\n            let row = input.closest('tr'); // Находим ближайшую строку\r\n            let lengthInput = parseFloat(row.querySelector('.length').value) || 0;\r\n            let segmentsInput = parseFloat(row.querySelector('.segments').value) || 0;\r\n            let widthInput = parseFloat(row.querySelector('.width').value) || 0;\r\n            let heightInput = parseFloat(row.querySelector('.height').value) || 0;\r\n            let applyDiscount = row.querySelector('.applyDiscount').checked;\r\n            let resultElement = row.querySelector('.result'); // Получаем элемент для отображения результата\r\n\r\n            // Проверяем, что все значения введены\r\n            if (lengthInput == 0 || segmentsInput == 0 || widthInput == 0 || heightInput == 0) {\r\n                // resultElement.textContent = 'Сумма: Некорректный ввод';\r\n                return;\r\n            }\r\n\r\n            // Переводим длину в мм в метры и умножаем на 400\r\n            let lengthInMeters = lengthInput / 1000;\r\n            let lengthCost = lengthInMeters * 400;\r\n\r\n            // Умножаем количество сегментов на 50\r\n            let segmentsCost = segmentsInput * 50;\r\n\r\n            // Переводим ширину и высоту в мм в метры и умножаем их между собой, затем умножаем на 6900\r\n            let widthInMeters = widthInput / 1000;\r\n            let heightInMeters = heightInput / 1000;\r\n            let dimensionsCost = widthInMeters * heightInMeters * 6900;\r\n\r\n            // Считаем общую сумму\r\n            let totalCost = (lengthCost + segmentsCost + dimensionsCost)*1.5;\r\n            \r\n\r\n            // Если чекбокс активен, увеличиваем сумму на 35%\r\n            if (applyDiscount) {\r\n                totalCost *= 1.35;\r\n            }\r\n\r\n            // Округляем результат до двух знаков после точки\r\n            totalCost = totalCost.toFixed(2);\r\n\r\n            // Обновляем отображение суммы в текущей строке\r\n            resultElement.textContent = totalCost;\r\n            resultElement.setAttribute('data-price', totalCost);\r\n        }\r\n}\n\n//# sourceURL=webpack://coursetable-main/./src/modules/totalPrice.js?");

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
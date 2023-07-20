/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Мы и так знаем что селектор есть, поэтому использован as но можно и проверять через if 
const selector = document.querySelector('.selector');
const info = document.querySelector('.info');
const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
// Загрузка данных с сервера
function loadData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            return yield response.json();
        }
        catch (error) {
            return console.error('Ошибка загрузки данных:', error);
        }
    });
}
// Обработка данных и создание селектора
function createSelector(currencies) {
    //чтобы изначально селект был с пустым значением
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Выберите значение';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.hidden = true;
    selector.appendChild(defaultOption);
    for (let currency in currencies) {
        const option = document.createElement('option');
        option.value = currency;
        option.text = `${currencies[currency].ID} - ${currencies[currency].Name}`;
        selector.appendChild(option);
    }
    selector.addEventListener('change', handleCurrencyChange);
}
// Обработчик изменения выбранной валюты
function handleCurrencyChange() {
    const selectedCurrency = selector.value;
    const currencyInfo = getCurrencyInfo(selectedCurrency);
    updateInfoBlock(currencyInfo);
}
// Получение информации о выбранной валюте
function getCurrencyInfo(currencyCode) {
    const currencies = JSON.parse(localStorage.getItem('currencies'));
    const currencyInfo = currencies.Valute[currencyCode];
    return {
        ID: currencyInfo.ID,
        Name: currencyInfo.Name,
        CharCode: currencyInfo.CharCode,
        Date: formatDate(currencies.Date),
        PreviousDate: formatDate(currencies.PreviousDate),
        Value: currencyInfo.Value,
        Previous: currencyInfo.Previous,
        Nominal: currencyInfo.Nominal,
        NumCode: currencyInfo.NumCode,
    };
}
// Обновление блока информации
function updateInfoBlock(currencyInfo) {
    info.style.visibility = 'visible';
    info.innerHTML = `
        <div>
        <h2>${currencyInfo.ID} - ${currencyInfo.Name} (${currencyInfo.CharCode})</h2>
        </div>
        <div>
        <strong>${currencyInfo.Date}</strong> - ${currencyInfo.Value}
        </div>
        <div>
        <strong>${currencyInfo.PreviousDate}</strong> - ${currencyInfo.Previous}
        </div>
    `;
}
// Форматирование даты
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString();
}
// Загрузка данных и инициализация приложения
function initApp() {
    return __awaiter(this, void 0, void 0, function* () {
        const currencies = localStorage.getItem('currencies');
        info.style.visibility = 'hidden';
        if (currencies) {
            // Если данные уже сохранены в localStorage, используем их
            createSelector(JSON.parse(currencies).Valute);
        }
        else {
            const response = yield loadData(url);
            localStorage.setItem('currencies', JSON.stringify(response));
            createSelector(response.Valute);
        }
    });
}
initApp();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlCQUF5QixJQUFJLDBCQUEwQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaUJBQWlCLElBQUksbUJBQW1CLEdBQUcsc0JBQXNCO0FBQy9FO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCLGNBQWM7QUFDbEQ7QUFDQTtBQUNBLGtCQUFrQiwwQkFBMEIsY0FBYztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7OztVRXRHQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8v0JzRiyDQuCDRgtCw0Log0LfQvdCw0LXQvCDRh9GC0L4g0YHQtdC70LXQutGC0L7RgCDQtdGB0YLRjCwg0L/QvtGN0YLQvtC80YMg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvSBhcyDQvdC+INC80L7QttC90L4g0Lgg0L/RgNC+0LLQtdGA0Y/RgtGMINGH0LXRgNC10LcgaWYgXG5jb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RvcicpO1xuY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJyk7XG5jb25zdCB1cmwgPSAnaHR0cHM6Ly93d3cuY2JyLXhtbC1kYWlseS5ydS9kYWlseV9qc29uLmpzJztcbi8vINCX0LDQs9GA0YPQt9C60LAg0LTQsNC90L3Ri9GFINGBINGB0LXRgNCy0LXRgNCwXG5mdW5jdGlvbiBsb2FkRGF0YSh1cmwpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaCh1cmwpO1xuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCfQntGI0LjQsdC60LAg0LfQsNCz0YDRg9C30LrQuCDQtNCw0L3QvdGL0YU6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyDQntCx0YDQsNCx0L7RgtC60LAg0LTQsNC90L3Ri9GFINC4INGB0L7Qt9C00LDQvdC40LUg0YHQtdC70LXQutGC0L7RgNCwXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcihjdXJyZW5jaWVzKSB7XG4gICAgLy/Rh9GC0L7QsdGLINC40LfQvdCw0YfQsNC70YzQvdC+INGB0LXQu9C10LrRgiDQsdGL0Lsg0YEg0L/Rg9GB0YLRi9C8INC30L3QsNGH0LXQvdC40LXQvFxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBkZWZhdWx0T3B0aW9uLnZhbHVlID0gJyc7XG4gICAgZGVmYXVsdE9wdGlvbi50ZXh0ID0gJ9CS0YvQsdC10YDQuNGC0LUg0LfQvdCw0YfQtdC90LjQtSc7XG4gICAgZGVmYXVsdE9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgZGVmYXVsdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgZGVmYXVsdE9wdGlvbi5oaWRkZW4gPSB0cnVlO1xuICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGRlZmF1bHRPcHRpb24pO1xuICAgIGZvciAobGV0IGN1cnJlbmN5IGluIGN1cnJlbmNpZXMpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGN1cnJlbmN5O1xuICAgICAgICBvcHRpb24udGV4dCA9IGAke2N1cnJlbmNpZXNbY3VycmVuY3ldLklEfSAtICR7Y3VycmVuY2llc1tjdXJyZW5jeV0uTmFtZX1gO1xuICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cbiAgICBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDdXJyZW5jeUNoYW5nZSk7XG59XG4vLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDQuNC30LzQtdC90LXQvdC40Y8g0LLRi9Cx0YDQsNC90L3QvtC5INCy0LDQu9GO0YLRi1xuZnVuY3Rpb24gaGFuZGxlQ3VycmVuY3lDaGFuZ2UoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDdXJyZW5jeSA9IHNlbGVjdG9yLnZhbHVlO1xuICAgIGNvbnN0IGN1cnJlbmN5SW5mbyA9IGdldEN1cnJlbmN5SW5mbyhzZWxlY3RlZEN1cnJlbmN5KTtcbiAgICB1cGRhdGVJbmZvQmxvY2soY3VycmVuY3lJbmZvKTtcbn1cbi8vINCf0L7Qu9GD0YfQtdC90LjQtSDQuNC90YTQvtGA0LzQsNGG0LjQuCDQviDQstGL0LHRgNCw0L3QvdC+0Lkg0LLQsNC70Y7RgtC1XG5mdW5jdGlvbiBnZXRDdXJyZW5jeUluZm8oY3VycmVuY3lDb2RlKSB7XG4gICAgY29uc3QgY3VycmVuY2llcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbmNpZXMnKSk7XG4gICAgY29uc3QgY3VycmVuY3lJbmZvID0gY3VycmVuY2llcy5WYWx1dGVbY3VycmVuY3lDb2RlXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBJRDogY3VycmVuY3lJbmZvLklELFxuICAgICAgICBOYW1lOiBjdXJyZW5jeUluZm8uTmFtZSxcbiAgICAgICAgQ2hhckNvZGU6IGN1cnJlbmN5SW5mby5DaGFyQ29kZSxcbiAgICAgICAgRGF0ZTogZm9ybWF0RGF0ZShjdXJyZW5jaWVzLkRhdGUpLFxuICAgICAgICBQcmV2aW91c0RhdGU6IGZvcm1hdERhdGUoY3VycmVuY2llcy5QcmV2aW91c0RhdGUpLFxuICAgICAgICBWYWx1ZTogY3VycmVuY3lJbmZvLlZhbHVlLFxuICAgICAgICBQcmV2aW91czogY3VycmVuY3lJbmZvLlByZXZpb3VzLFxuICAgICAgICBOb21pbmFsOiBjdXJyZW5jeUluZm8uTm9taW5hbCxcbiAgICAgICAgTnVtQ29kZTogY3VycmVuY3lJbmZvLk51bUNvZGUsXG4gICAgfTtcbn1cbi8vINCe0LHQvdC+0LLQu9C10L3QuNC1INCx0LvQvtC60LAg0LjQvdGE0L7RgNC80LDRhtC40LhcbmZ1bmN0aW9uIHVwZGF0ZUluZm9CbG9jayhjdXJyZW5jeUluZm8pIHtcbiAgICBpbmZvLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgaW5mby5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+JHtjdXJyZW5jeUluZm8uSUR9IC0gJHtjdXJyZW5jeUluZm8uTmFtZX0gKCR7Y3VycmVuY3lJbmZvLkNoYXJDb2RlfSk8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN0cm9uZz4ke2N1cnJlbmN5SW5mby5EYXRlfTwvc3Ryb25nPiAtICR7Y3VycmVuY3lJbmZvLlZhbHVlfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN0cm9uZz4ke2N1cnJlbmN5SW5mby5QcmV2aW91c0RhdGV9PC9zdHJvbmc+IC0gJHtjdXJyZW5jeUluZm8uUHJldmlvdXN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xufVxuLy8g0KTQvtGA0LzQsNGC0LjRgNC+0LLQsNC90LjQtSDQtNCw0YLRi1xuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlU3RyaW5nKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCk7XG59XG4vLyDQl9Cw0LPRgNGD0LfQutCwINC00LDQvdC90YvRhSDQuCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQv9GA0LjQu9C+0LbQtdC90LjRj1xuZnVuY3Rpb24gaW5pdEFwcCgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBjdXJyZW5jaWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbmNpZXMnKTtcbiAgICAgICAgaW5mby5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIGlmIChjdXJyZW5jaWVzKSB7XG4gICAgICAgICAgICAvLyDQldGB0LvQuCDQtNCw0L3QvdGL0LUg0YPQttC1INGB0L7RhdGA0LDQvdC10L3RiyDQsiBsb2NhbFN0b3JhZ2UsINC40YHQv9C+0LvRjNC30YPQtdC8INC40YVcbiAgICAgICAgICAgIGNyZWF0ZVNlbGVjdG9yKEpTT04ucGFyc2UoY3VycmVuY2llcykuVmFsdXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgbG9hZERhdGEodXJsKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW5jaWVzJywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIGNyZWF0ZVNlbGVjdG9yKHJlc3BvbnNlLlZhbHV0ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmluaXRBcHAoKTtcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvYXBwLnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
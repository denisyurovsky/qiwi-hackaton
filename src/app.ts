//Мы и так знаем что селектор есть, поэтому использован as но можно и проверять через if 
const selector = document.querySelector('.selector') as HTMLSelectElement;
const info = document.querySelector('.info') as HTMLDivElement;
const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

interface ICurrencyInfo {
    ID: string,
    CharCode: string,
    Name: string,
    Nominal: number,
    NumCode: string,
    Previous: number,
    Value: number,
    Date?: Date | string,
    PreviousDate?: Date | string,
}

interface ICurrencies {
    Date: string,
    PreviousDate: string,
    Timestamp: string,
    PreviousURL: string,
    Valute: Array<ICurrencyInfo>
}

// Загрузка данных с сервера
async function loadData(url: string) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        return console.error('Ошибка загрузки данных:', error);
    }
}

// Обработка данных и создание селектора
function createSelector(currencies: Array<ICurrencyInfo>) {

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
function getCurrencyInfo(currencyCode: string) {
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
function updateInfoBlock(currencyInfo: ICurrencyInfo) {
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
function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleString();
}

// Загрузка данных и инициализация приложения
async function initApp() {
    const currencies = localStorage.getItem('currencies');
    info.style.visibility = 'hidden';
    if (currencies) {
        // Если данные уже сохранены в localStorage, используем их
        createSelector(JSON.parse(currencies).Valute);
    } else {
        const response = await loadData(url);
        localStorage.setItem('currencies', JSON.stringify(response));
        createSelector(response.Valute);
    }
}

initApp();
export const sortPrice = () => {
  let ascendingOrder = true; // Переменная для отслеживания порядка сортировки

  const moneyHeader = document.querySelector('.table__money');
  moneyHeader.addEventListener('click', () => {
    // Вызови функцию для сортировки данных по цене
    sortDataByPrice();
  });
  
  // Функция для сортировки данных по цене
  const sortDataByPrice = () => {
    // Получи все строки таблицы
    const tableRows = document.querySelectorAll('tr[data-id]');
  
    // Преобразуй коллекцию строк в массив
    const rowsArray = Array.from(tableRows);
  
    // Сортируй массив строк по цене
    rowsArray.sort((rowA, rowB) => {
      const priceA = parseFloat(rowA.querySelector('.result').getAttribute('data-price'));
      const priceB = parseFloat(rowB.querySelector('.result').getAttribute('data-price'));
  
      // Изменяй знак сравнения в зависимости от порядка сортировки
      return ascendingOrder ? priceA - priceB : priceB - priceA;
    });
  
    // Обнови порядок сортировки для следующего клика
    ascendingOrder = !ascendingOrder;
  
    // Очисти содержимое таблицы
    const tableBody = document.getElementById('table__body');
    const tbody = tableBody.querySelector('tbody');
    tbody.innerHTML = '';
  
    // Вставь отсортированные строки обратно в таблицу
    rowsArray.forEach(row => {
      tbody.appendChild(row);
    });
  };
  
}
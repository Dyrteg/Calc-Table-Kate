// Ваш клиентский код

export const setupSorting = () => {
 const sortImage = document.querySelector('.table__num-image');
 const tableBody = document.getElementById('table__body');
 let ascendingOrder = true; // Переменная для отслеживания направления сортировки

 sortImage.addEventListener('click', () => {
   const rows = Array.from(tableBody.querySelectorAll('tr[data-id]'));

   // Получаем значения 'number' из каждой строки
   const values = rows.map(row => {
     return {
       id: row.getAttribute('data-id'),
       number: row.querySelector('.table__number input').value.toLowerCase(),
       // Другие поля, если необходимо
     };
   });

   // Разделяем строки на два массива: один с заполненными 'number', другой - с пустыми
   const nonEmptyValues = values.filter(item => item.number.trim() !== '');
   const emptyValues = values.filter(item => item.number.trim() === '');

   // Сортируем массив с заполненными 'number' в алфавитном порядке
   nonEmptyValues.sort((a, b) => {
     const compareResult = a.number.localeCompare(b.number);
     return ascendingOrder ? compareResult : -compareResult; // Убывание, если ascendingOrder = false
   });

   // Объединяем отсортированный массив с заполненными 'number' и массив с пустыми строками
   const sortedValues = nonEmptyValues.concat(emptyValues);

   // Обновляем порядок строк в таблице
   sortedValues.forEach((item, index) => {
     const row = rows.find(row => row.getAttribute('data-id') === item.id);
     if (row) {
       tableBody.appendChild(row);
     }
   });

   // Изменяем направление сортировки для следующего нажатия
   ascendingOrder = !ascendingOrder;
 });
};

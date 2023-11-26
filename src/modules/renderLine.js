export const renderLine = () => {
 // Пример получения данных с сервера
 fetch('http://localhost:3000/posts')
   .then(response => response.json())
   .then(data => {
     // Обработка полученных данных, например, рендеринг на странице
     renderTable(data);
   })
   .catch(error => console.error('Error fetching data:', error));

 function renderTable(data) {
   const tableBody = document.getElementById('table__body');
   const tbody = tableBody.querySelector('tbody');

   // Рендерим строки на основе полученных данных
   data.forEach(row => {
     const line = `
       <tr data-id="${row.id}">
         <td class="table__number"><input type="text" class="input" value="${row.number}"></td>
         <td class="table__dlina"><input class="length input" onkeyup="this.value = this.value.replace(/\D/g, '');" name="text" type="text" id="input-id" value="${row.dlina}"></td>
         <td class="table__segment"><input class="segments input" onkeyup="this.value = this.value.replace(/\D/g, '');" name="text" type="text" value="${row.segment}"></td>
         <td class="table__wi"><input class="width input" onkeyup="this.value = this.value.replace(/\D/g, '');" name="text" type="text" value="${row.width}"></td>
         <td class="table__he"><input class="height input" onkeyup="this.value = this.value.replace(/\D/g, '');" name="text" type="text" value="${row.height}"></td>
         <td class="result" data-price="${row.result}">${row.result}</td>
         <td class="street" data-id="${row.id}">
           <label class="checkbox-btn">
             <label for="checkbox"></label>
             <input id="checkbox" type="checkbox" class="applyDiscount" ${row.applyDiscount ? 'checked' : ''}>
             <span class="checkmark"></span>
           </label>
         </td>
       </tr>
     `;

     tbody.insertAdjacentHTML('beforeend', line);
   });
 }
}

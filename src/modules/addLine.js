export const addLine = () => {
    const buttonAdd = document.querySelector('.button__add');
    
    buttonAdd.addEventListener('click', () => {
      const tableBody = document.getElementById('table__body');
      const tbody = tableBody.querySelector('tbody');
    
      // Создаем уникальный data-id на основе временной метки
      const uniqueId = Date.now();
    
      const line = `
        <tr data-id="${uniqueId}">
          <td class="table__number"><input type="text" class="input" value=""></td>
          <td class="table__dlina"><input class="length input" onkeyup="this.value = this.value.replace(/D/g, '');" name="text" type="text" id="input-id" value=""></td>
          <td class="table__segment"><input class="segments input" onkeyup="this.value = this.value.replace(/D/g, '');" name="text" type="text" value=""></td>
          <td class="table__wi"><input class="width input" onkeyup="this.value = this.value.replace(/D/g, '');" name="text" type="text" value=""></td>
          <td class="table__he"><input class="height input" onkeyup="this.value = this.value.replace(/D/g, '');" name="text" type="text" value=""></td>
          <td class="result"></td>
          <td class="street" data-id="3">
            <label class="checkbox-btn">
              <label for="checkbox"></label>
              <input id="checkbox" type="checkbox" class="applyDiscount">
              <span class="checkmark"></span>
            </label>
          </td>
        </tr>
      `;
    
      tbody.insertAdjacentHTML('beforeend', line);
    })
}
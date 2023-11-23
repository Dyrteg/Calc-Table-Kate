export const totalPrice = () => {
    let table = document.getElementById('table__body');

        // Добавляем обработчик события на всю таблицу
        table.addEventListener('input', function(event) {
            let inputElement = event.target;

            // Проверяем, что элемент — это инпут или чекбокс внутри таблицы
            if (inputElement.tagName === 'INPUT' && (inputElement.classList.contains('applyDiscount') || inputElement.classList.contains('input'))) {
                updateSum(inputElement);
            }
        });

        function updateSum(input) {
            let row = input.closest('tr'); // Находим ближайшую строку
            let lengthInput = parseFloat(row.querySelector('.length').value) || 0;
            let segmentsInput = parseFloat(row.querySelector('.segments').value) || 0;
            let widthInput = parseFloat(row.querySelector('.width').value) || 0;
            let heightInput = parseFloat(row.querySelector('.height').value) || 0;
            let applyDiscount = row.querySelector('.applyDiscount').checked;
            let resultElement = row.querySelector('.result'); // Получаем элемент для отображения результата

            // Проверяем, что все значения введены
            if (lengthInput == 0 || segmentsInput == 0 || widthInput == 0 || heightInput == 0) {
                // resultElement.textContent = 'Сумма: Некорректный ввод';
                return;
            }

            // Переводим длину в мм в метры и умножаем на 400
            let lengthInMeters = lengthInput / 1000;
            let lengthCost = lengthInMeters * 400;

            // Умножаем количество сегментов на 50
            let segmentsCost = segmentsInput * 50;

            // Переводим ширину и высоту в мм в метры и умножаем их между собой, затем умножаем на 6900
            let widthInMeters = widthInput / 1000;
            let heightInMeters = heightInput / 1000;
            let dimensionsCost = widthInMeters * heightInMeters * 6900;

            // Считаем общую сумму
            let totalCost = (lengthCost + segmentsCost + dimensionsCost)*1.5;
            

            // Если чекбокс активен, увеличиваем сумму на 35%
            if (applyDiscount) {
                totalCost *= 1.35;
            }

            // Округляем результат до двух знаков после точки
            totalCost = totalCost.toFixed(2);

            // Обновляем отображение суммы в текущей строке
            resultElement.textContent = totalCost;
        }
}
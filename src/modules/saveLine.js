export const saveLine = () => {
  const buttonSave = document.querySelector('.button__save');
  let posts = [];

  buttonSave.addEventListener('click', () => {
    const tableRows = document.querySelectorAll('tr[data-id]');

    const dataToUpdate = Array.from(tableRows).map(row => {
      return {
        id: row.getAttribute('data-id'),
        number: row.querySelector('.table__number input').value,
        dlina: row.querySelector('.table__dlina input').value,
        segment: row.querySelector('.table__segment input').value,
        width: row.querySelector('.table__wi input').value,
        height: row.querySelector('.table__he input').value,
        result: row.querySelector('.result').textContent,
        applyDiscount: row.querySelector('.applyDiscount').checked,
      };
    });
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(data => {
      // После получения данных с сервера, вызываем функцию saveLine
      const posts = data;
      updateDataOnServer(dataToUpdate, posts);
    })
    .catch(error => console.error('Error fetching data from server:', error));
  });

  function updateDataOnServer(dataToUpdate, posts) {
    // Отправка запросов для каждого элемента с использованием id
    dataToUpdate.forEach(item => {
      // Проверяем наличие id в массиве posts
      const isIdInPosts = posts && posts.some(post => post.id === item.id);

      if (isIdInPosts) {
        console.log(item);
        // Если id присутствует, отправляем PUT-запрос для обновления данных
        fetch(`http://localhost:3000/posts/${item.id}`, {
          method: 'PATCH', // Меняем метод на PUT
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item),
        })
          .then(response => response.json())
          .then(data => console.log(`Data for id ${item.id} updated on server:`, data))
          .catch(error => console.error(`Error updating data for id ${item.id} on server:`, error));
      } else {
        // Если id отсутствует, отправляем POST-запрос для добавления нового элемента
        fetch('http://localhost:3000/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item),
        })
          .then(response => response.json())
          .then(data => console.log(`New data for id ${item.id} added to server:`, data))
          .catch(error => console.error(`Error adding new data for id ${item.id} on server:`, error));
      }
    });
  }
};

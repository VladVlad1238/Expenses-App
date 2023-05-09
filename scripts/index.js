//массив
const expenses = [];

const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const historyNode = document.querySelector('.js-history');

//добавляем событие на кнопку, которая будет передавать значения в массив
buttonNode.addEventListener('click', function() {
  //1. Получаем значение из поля ввода

  //проверка первый способо
  /*
  if (inputNode.value === '') {
    return;
  }*/
  //проверка второй способ
  if (!inputNode.value) {
    return;
  }

  //преобразует полученные данные из строки в число
  const expense = Number(inputNode.value);
  inputNode.value = '';

  //записывает данные в массив
  //2. Сохраняем трату в список
  expenses.push(expense);

  //3. Выведем новый список трат
  let expensesListHTML = '';

  expenses.forEach(element => {
    expensesListHTML += `<li>${element}</li>`;
  });

  historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;
});

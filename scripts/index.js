const LIMIT = 10000;
const CURRENCY = 'czk';
const IN_LIMIT = 'In limit';
const OUT_OF_LIMIT = 'Out of limit';
const STATUS_RED = 'status_red';
const RESET_SUM = '0';

const inputNode = document.querySelector('.js-expense-input');
const addExpenseButtonNode = document.querySelector('.js-expense-button');
const historyNode = document.querySelector('.js-history');
const sumNode = document.querySelector('.js-total');
const limitNode = document.querySelector('.js-limit');
const statusNode = document.querySelector('.js-status');
const resetHistoryButton = document.querySelector('.js-reset-button')

let expenses = [];



//Выводит лимит 
limitNode.innerText = LIMIT;
statusNode.innerText = IN_LIMIT;


addExpenseButtonNode.addEventListener('click', function() {
  // 1. Получаем значение из поля ввода
  if(!inputNode.value) {
    return;
  }
  
  const expense = Number(inputNode.value);
  inputNode.value = '';
  // 2. Сохраняем трату в список
  expenses.push(expense);

  // 3. Выведем новый список трат
  
  let expensesListHTML = '';

  expenses.forEach(element => {
    const elementHTML = `<li>${element} ${CURRENCY}</li>`;
    expensesListHTML += elementHTML;
  });
  historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`; 


  // Выводит сумму трат 
  let sum = 0;
  expenses.forEach(expense => {
    sum += expense;
  });
  sumNode.innerText = sum;

  if(sum <= LIMIT) {
    statusNode.innerText = IN_LIMIT;
  } else if(sum > LIMIT) {
    statusNode.innerText = OUT_OF_LIMIT;
    statusNode.classList.add(STATUS_RED);
  }
})

resetHistoryButton.addEventListener('click', function(){
  expenses = []
  historyNode.innerText = expenses;
  sumNode.innerHTML = RESET_SUM;
  statusNode.innerHTML = IN_LIMIT;
  statusNode.classList.remove(STATUS_RED);
})








































































































































































































/*const LIMIT = 10000;
const CURRENCY = 'CZK';
const STATUS_IN_LIMIT = 'You are in limit';
const STATUS_OUT_OF_LIMIT = 'You are out of limit';
const STATUS_OUT_OF_LIMIT_CLASSNAME = 'status_red';

const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const historyNode = document.querySelector('.js-history');
const sumNode = document.querySelector('.js-sum');
const limitNode = document.querySelector('.js-limit');
const statusNode = document.querySelector('.js-status');

const expenses = [];

init(expenses);
//добавляем событие на кнопку, которая будет передавать значения в массив
buttonNode.addEventListener('click', function() {
  const expense = getExpanseFromUser();

  if (!expense) {
    return;
  }

  trackExpanse(expense);
 
  render(expenses);
});

function init(expenses) {
  limitNode.innerText = LIMIT;
  statusNode.innerText = STATUS_IN_LIMIT;
  sumNode.innerText = calculateExpenses(expenses);
};

function trackExpanse(expense) {
  expenses.push(expense);
};


function getExpanseFromUser() {
  if (!inputNode.value) {
    return null;
  }

  //преобразует полученные данные из строки в число
  const expense = Number(inputNode.value);

  clearInput();

  return expense;
};

function clearInput() {
  inputNode.value = '';
};

function calculateExpenses(expenses) {
  let sum = 0;

  expenses.forEach(element => {
    sum += element;
  });

  return sum;
};

function render(expenses) {
  const sum = calculateExpenses(expenses);

  renderHistory(expenses);
  renderSum(sum);
  renderStatus(sum);
}

function renderHistory(expenses) {
  let expensesListHTML = '';

  expenses.forEach(element => {
    expensesListHTML += `<li>${element} ${CURRENCY}</li>`;
  });

  historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;
}

function renderSum(sum) {
  sumNode.innerText = sum;
}

function renderStatus(sum) {
  if (sum <= LIMIT) {
    statusNode.innerText = STATUS_IN_LIMIT;
    
  } else {
    statusNode.innerText = STATUS_OUT_OF_LIMIT;
    statusNode.classList.add(STATUS_OUT_OF_LIMIT_CLASSNAME);
  }
}*/
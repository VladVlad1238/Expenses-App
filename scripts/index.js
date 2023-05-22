const POPUP_OPENED_CLASSNAME = 'popup__open';
const CURRENCY = 'czk';
const IN_LIMIT = 'In limit';
const OUT_OF_LIMIT = 'Out of limit';
const STATUS_RED = 'status_red';
const STATUS_GREEN = 'status_green';
const RESET_SUM = '0';

const inputNode = document.querySelector('.js-expense-input');
const addExpenseButtonNode = document.querySelector('.js-expense-button');
const historyNode = document.querySelector('.js-history');
const categoryNode = document.querySelector('.js-category-list')
const sumNode = document.querySelector('.js-total');
const limitNode = document.querySelector('.js-limit');
const statusNode = document.querySelector('.js-status');
const resetHistoryButtonNode = document.querySelector('.js-reset-button');
//Popup
const popupNode = document.querySelector('.js-popup');
const popupOpenBtnNode = document.querySelector('.js-open-change-limit-button');
const popupCloseBtnNode = document.querySelector('.js-popup-close-btn');
const changeLimitButtonNode = document.querySelector('.js-change-limit-btn');
const popupInputNode = document.querySelector('.js-popup-input');


let expenses = [];
let category = [];
//Выводит лимит
let limit = 10000;
limitNode.innerText = limit;
//let limit = parseInt(limitNode.innerText);



const getTotal = () => {
  let sum = 0;
  expenses.forEach((expense) => {
    sum += expense.expense;
  });

  return sum;
};


const renderStatus = () => {
  const total = getTotal(expenses);
  sumNode.innerText = total;

  if(total <= limit) {
    statusNode.innerText = IN_LIMIT;
    statusNode.classList.remove(STATUS_RED);
  } else if(total > limit) {
    statusNode.innerText = `${OUT_OF_LIMIT} (${limit - total})`;
    statusNode.classList.add(STATUS_RED);
  }
};

const renderHistory = () => {
  historyNode.innerHTML = "";
  expenses.forEach((expense) => {
    const historyItem = document.createElement('li');
    historyItem.className = 'czk';
    historyItem.innerText = `${expense.type} - ${expense.expense}`;

    historyNode.appendChild(historyItem);
  })
};

const render = () => {
  renderStatus();
  renderHistory();
}


const getExpesneFromUser = () => parseInt(inputNode.value);

const getSelecetCategory = () => {
   return categoryNode.value;
};
console.log(getSelecetCategory());

console.log(category);



const clearInput = () => {
  inputNode.value = '';
  popupInputNode.value = '';
};

const addButtonHandler = () => {
  const type = getSelecetCategory();
  const expense = getExpesneFromUser();

  if(!expense) {
    return;
  }


  const currentCategory = getSelecetCategory();

  if(currentCategory === 'Category') {
    alert('Select category!');
    return;
  }

  /*const newExpense = { amount: expense, category: currentCategory };
  console.log(newExpense);*/

  expenses.push({
    expense: expense,
    type: type,
  });


  render();
  clearInput();
}

const removeButtonHandler = () => {
  expenses = []
  render();
}



const openPopupHandler = () => {
  popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
};


const newLimitHandler = () => {
  const newLimit = popupInputNode.value;

  const newLimitValue = parseInt(newLimit);


  limitNode.innerText = newLimitValue;

  limit = newLimitValue

  render();
  clearInput();
  openPopupHandler();
  
}

addExpenseButtonNode.addEventListener('click', addButtonHandler);
resetHistoryButtonNode.addEventListener('click', removeButtonHandler);
changeLimitButtonNode.addEventListener('click', newLimitHandler);
popupOpenBtnNode.addEventListener('click', openPopupHandler);
popupCloseBtnNode.addEventListener('click', openPopupHandler);


 









































































































































































































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
function solveEquation(a, b, c) {
  "use strict"

  let arr = [];
  let d;
  
  d = b**2-(4 * a * c);
  
  if (d < 0){
    arr = [];
  } else if (d === 0){
    arr[0] = -b / (2 * a);
  } else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d))/(2*a);
    arr[1] = (-b - Math.sqrt(d))/(2*a);
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict"

  let totalAmount;
  let error = '';
  let bodyCredit, months, pMonth;

// Проверка на кооректность ввода данных в поля с числами.
  if (Number.isNaN(Number(percent) + 1) === true){
    error += "Параметр \"Процентная ставка\" содержит неправильное значение \"" + percent + "\"";
  }
  if (Number.isNaN(Number(contribution) + 1) === true){
    error += "Параметр \"Начальный взнос\" содержит неправильное значение \"" + contribution + "\"";
  }
  if (Number.isNaN(Number(amount) + 1) === true){
    error += "Параметр \"Общая стоимость\" содержит неправильное значение \"" + amount + "\"";
  }
  if (error != ''){
    return error;
  }

  bodyCredit = amount - contribution;
  pMonth = percent / 12 / 100;
  months = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
  totalAmount = bodyCredit * (pMonth + (pMonth / (Math.pow(1 + pMonth,months) - 1))) * months;
  
  return +totalAmount.toFixed(2);

}

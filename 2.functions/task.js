// Задание 1
function getArrayParams(arr) {
  let 
    i = 0, 
    min = arr[0], 
    max = arr[0], 
    sum = 0, 
    avg;

  while (i < arr.length){
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    sum += arr[i];
    i++;
  }

  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let 
    sum = 0,
    i = 0;
  
  while (i < arr.length){
    sum += arr[i]
    i++;
  }

  return sum; 
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (i = 0; i < arrOfArr.length; i++){
    if (func(arrOfArr[i]) > max){
      max = func(arrOfArr[i]);
    }
}

  return max;
}

// Задание 3
function worker2(arr) {
  let 
    difference = 0,
    i = 0,
    min = arr[0],
    max = arr[0];

  while (i < arr.length){
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    difference = Math.abs(max - min);
    i++;
  }; 
  return difference;
}

function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length != arr2.length){
    return false;
  } else{
  result = arr1.every((items, i) => items === arr2[i]);
  }

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr
    .filter((items) => items > 0)
    .filter((items) => items % 3 === 0)
    .map((items) => items * 10);
    
  return resultArr; // array
}

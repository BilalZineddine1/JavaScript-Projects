function destroyer(arr) {
  for(let i = 0; i < arguments.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[j] === arguments[i]){
        arr.splice(j,1);
        j--;
      }
    }
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
function sumFibs(num) {
  let currentNum = 1;
  let prevNum = 0;
  let result = 0;
  while(currentNum <= num){
    if(currentNum % 2 !== 0){
      result+=currentNum;
    }
    currentNum+=prevNum;
    prevNum = currentNum - prevNum;
  }
  return result;
}

console.log(sumFibs(4));
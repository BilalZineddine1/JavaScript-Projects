function convertToRoman(num) {
  //we will define 4 helper functions the first one to convert the units , the second for the tens , the third for hundrends and the forth dor the thousends
    function unitsTr(num){
      let arr =[];
       if(num === 1 ){
          arr.push("I");
          return arr;
          }
      else if(num>1 && num<4){
          arr.push(`${"I".repeat(num)}`)
          return arr ;
          }
      else if(num===4){
          arr.push("IV");
          return arr; 
     }
     else if(num === 5){
          arr.push("V");
          return arr;
     }
     else if(num>5&&num<9){
          arr.push(`V${"I".repeat(num-5)}`);
          return arr;
   }
   else if(num === 9) {
          arr.push("IX");
          return arr;           
    }
    //the second helper function
    }
    function tensTr(num){
      let arr =[];
       if(num === 1 ){
          arr.push("X");
          return arr;
          }
      else if(num>1 && num<4){
          arr.push(`${"X".repeat(num)}`);
          return arr ;
          }
      else if(num===4){
          arr.push("XL");
          return arr; 
     }
     else if(num === 5){
          arr.push("L");
          return arr;
     }
     else if(num>5&&num<9){
          arr.push(`L${"X".repeat(num-5)}`);
          return arr;
   }
   else if(num===9) {
          arr.push("XC");
          return arr;           
    }
    // the third helper function
    }
    function hunderdsTr(num){
      let arr =[];
      if(num === 1 ){
          arr.push("C");
          return arr;
          }
      else if(num>1 && num<4){
          arr.push(`${"C".repeat(num)}`);
          return arr ;
          }
      else if(num===4){
          arr.push("CD");
          return arr; 
     }
     else if(num === 5){
          arr.push("D");
          return arr;
     }
     else if(num>5&&num<9){
          arr.push(`D${"C".repeat(num-5)}`);
          return arr;
   }
   else if(num===9) {
          arr.push("CM");
          return arr;           
    }
    //the forth helper function
    }
    function thousendsTr(num){
      let arr = [];
      if(num==1){  
          arr.push("M");
          return arr;
      }          
      else{
          arr.push(`${"M".repeat(num)}`)
          return arr ;  
      }
    }
    //then we will declare a empty array, and another array that have the number pushed into it and disccus the length cases , (i.e if we have a one number then we are in the units part and so one) in each case we call the helper functions
     let finalArr = [];
      let ourArr = (num).toString().split("").map(element => parseInt(element));
      switch(ourArr.length){
        case 1:
         finalArr.push(unitsTr(ourArr[0]));
          break;
        case 2:
          finalArr.push(tensTr(ourArr[0]),unitsTr(ourArr[1]));
          break;
        case 3:
          finalArr.push(hunderdsTr(ourArr[0]),tensTr(ourArr[1]),unitsTr(ourArr[2]));
          break;
        case 4:
          finalArr.push(thousendsTr(ourArr[0]),hunderdsTr(ourArr[1]),tensTr(ourArr[2]),unitsTr(ourArr[3]));
          break;  
     }
 return finalArr.flat().join("");

 }

 console.log(convertToRoman(20));
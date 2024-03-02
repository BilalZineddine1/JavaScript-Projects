function checkCashRegister(price, cash, cid) {
// for this problem we need to define the change variable , an array of change , the total cash-in-drawer and the result of the calculations
  let rest = cash - price ; 
  let arr = [];
  let totalCid = 0;
  let result = { status:'', change: []};
  for(let i = 0; i < cid.length; i++){
    totalCid += cid[i][1];
  }
// we have 4 stiuations : 1) if cash-in-drawer is less than the change due
  if(rest > totalCid){
    result.status = "INSUFFICIENT_FUNDS";
  }
  else{
// 2) if the cash-in-drawer is equal to the change     
    if(rest === totalCid){
      result.status = 'CLOSED';
      result.change = cid;
    }
    else {
// 3) if the cash-in-drawer is bigger then the change , then we have to calculate the change in coins and bills   
          if(rest >= 100){
      // we need to check if the change bigger then or equal to the currency amount      
          const hundred = (Math.floor(rest/100)*100);
          if(hundred < cid[8][1] ) cid[8][1] = hundred;
          rest -= cid[8][1];
          arr.push(cid[8]); 
        }
        if(rest >= 20){
          const twenty = (Math.floor(rest/20)*20);
          if(twenty < cid[7][1] ) cid[7][1] = twenty;
          rest -= cid[7][1]; 
          arr.push(cid[7]);
        }
        if(rest >= 10){
          const ten = (Math.floor(rest/10)*10);
          if(ten < cid[6][1] ) cid[6][1] = ten;
          rest -= cid[6][1];
          arr.push(cid[6]); 
        }
        if(rest >= 5){
          const five = (Math.floor(rest/5)*5);
          if(five < cid[5][1] ) {cid[5][1] = five;       
          rest -= cid[5][1];
          }
          arr.push(cid[5]); 
        }
        if(rest >= 1){
          const one = (Math.floor(rest));
          if(one < cid[4][1] ) cid[4][1] = one;
          rest -= cid[4][1];
          arr.push(cid[4]); 
        }
        if(rest >= 0.25){
          const quarter = (Math.floor(rest/0.25)*0.25);
          if(quarter < cid[3][1] ) cid[3][1] = quarter;
          rest -= cid[3][1];
          arr.push(cid[3]);
        }
        if(rest >= 0.1){
          const dime = (Math.floor(rest/0.1)*0.1);
          if(dime < cid[2][1] ) cid[2][1] = dime;
          rest -= cid[2][1];
          arr.push(cid[2]);
        }
        if(rest >= 0.05){
          const nickel = (Math.floor(rest/0.05)*0.05);
          if(nickel < cid[1][1] ) cid[1][1] = nickel;
          rest -= cid[1][1]; 
          arr.push(cid[1]);
        }
        if(rest >= 0.01){
          const penny = (Math.floor(rest/0.01)*0.01);
          if(penny < cid[0][1] ) cid[0][1] = penny + 0.01;
          rest -= cid[0][1];
          arr.push(cid[0]); 
        }
    // if the currency amount can not return the exact change (ie the rest is bigger then 0) then we can't retun the change
         if(rest > 0){
           return {status: "INSUFFICIENT_FUNDS", change: []}
         }
        result.status = "OPEN";
        result.change = arr;
      }
  }
return result;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
function telephoneCheck(str) {
  //to check if we have a valid phone number we have test the variants
  // the first check is for the country code "1"  
    if(str[0]==="1"){
  // the second is for white spaces after the 1    
      if(str[1]===" "){
        str = str.substring(2);
      }else{
        str = str.substring(1);
      } 
    }
    // after we elminate the US code country we have just to check for the variants, it means we have to check for the positioning of each variants   
    if(str.length === 10) return true;
    if((str[3] === "-" || str[3]=== " ") && (str[7] ==="-"||str[7]===" ")) return true;
    if(str[0]==="(" && str[4]===")"&&(str[8]==="-"|| str[9]==='-')) return true;
    return false;

  
}
console.log(telephoneCheck("1(555)555-5555"));   
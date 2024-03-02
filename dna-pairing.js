function pairElement(str) {
  return [...str].map(elmnt=>{
    switch(elmnt[0]){
      case "G":
        return ["G","C"];
      case "A":
        return ["A","T"];
      case "C":
        return ["C", "G"];
      case "T":
        return ["T", "A"]
    }
  })
}

console.log(pairElement("ATCA"));
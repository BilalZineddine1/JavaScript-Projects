function myReplace(str, before, after) {
  if(/^[A-Z]/.test(before)){
    after = after.replace(after[0],after[0].toUpperCase());
  }else{
    after = after.replace(after[0],after[0].toLowerCase());
  }
  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));

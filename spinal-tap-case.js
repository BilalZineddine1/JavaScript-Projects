function spinalCase(str) {
  return str
  .split(/(?=[A-Z])|\s|_/)
  .join("-")
  .toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
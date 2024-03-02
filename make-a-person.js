const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return firstAndLast;
  };
  this.getFirstName = function(){
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = function(){
    return firstAndLast.split(" ")[1];
  };
  this.setFullName = function(fullName){
    firstAndLast = fullName;
  };
  this.setFirstName = function(first){
    const newFirst = firstAndLast.split(' ');
    newFirst[0] = first;
    firstAndLast = newFirst.join(' ');
  };
  this.setLastName = function(last){
    const newLast = firstAndLast.split(' ');
    newLast[1] = last;
    firstAndLast = newLast.join(' ');
  };
};

const bob = new Person('Bob Ross');
// console.log(bob.getFullName());
// bob.setFirstName('Bilal');
// console.log(bob.getFullName());
// console.log(bob.getFirstName());
// console.log(bob.getLastName())

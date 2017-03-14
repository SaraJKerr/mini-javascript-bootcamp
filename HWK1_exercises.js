//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  var result = num * 10;
  return result;
  //code here
}

function subtractFive(num) {
  //return num after subtracting five
  var minusFive = num - 5;
  return minusFive;
  //code here
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  if (str1.length === str2.length) {
  return true;
  }
  return false; 
  //otherwise return false
  //code here
}

function areEqual(x, y) {
  //return true if x and y are the same
  if (x === y) {
  return true;
  }
  return false;
  //otherwise return false
  //code here
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  if (num < 90) {
  return true;
  }
  return false;
  //otherwise return false
  //code here
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  if (num > 50) {
  return true;
  }
  return false;
  //otherwise return false
  //code here
}

function add(x, y) {
  //add x and y together and return the value
  var sum = x + y;
  return sum;
  //code here
}

function subtract(x, y) {
  //subtract y from x and return the value
  var sub = x - y;
  return sub;
  //code here
}

function divide(x, y) {
  //divide x by y and return the value
  var div = x / y;
  return div;
  //code here
}

function multiply(x, y) {
  //multiply x by y and return the value
  var prod = x * y;
  return prod;
  //code here
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  var remain = x % y;
  return remain;
  //code here
}

function isEven(num) {
  //return true if num is even
  var x = num % 2;
  if (x == 0) {
  return true;
  }
  return false;
  //otherwise return false
  //code here
}

function isOdd(num) {
  //return true if num is false
  var x = num % 2;
  if (x != 0) {
  return true;
  }
  return false;
  //otherwise return false
  //code here
}

function square(num) {
  //square num and return the new value
  var sq = Math.pow(num, 2);
  return sq;
  //code here
}

function cube(num) {
  //cube num and return the new value
  var x = Math.pow(num, 3);
  return x;
  //code here
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  var pow = Math.pow(num, exponent);
  return pow;
  //code here
}

function roundNumber(num) {
  //round num and return it
  var round = Math.round(num);
  return round;
  //code here
}

function roundUp(num) {
  //round num up and return it
  var up = Math.ceil(num);
  return up;
  //code here
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  var exstr = str + '!';
  return exstr;
  //'hello world' -> 'hello world!'
  //code here
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  var fullName = firstName + ' ' + lastName;
  return fullName;
  //'Lambda', 'School' -> 'Lambda School'
  //code here
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  var greeting = 'Hello ' + name + '!';
  return greeting;
  //'Sam' -> 'Hello Sam!'
  //code here
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  var area = length * width;
  return area;

  //code here
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  var areaT = (height * base) / 2;
  return areaT;
  //code here
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  var areac = Math.PI * Math.pow(radius, 2);
  var areaC = Math.round(areac);
  return areaC;
  //code here
}

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  var areaRP = width * height * length;
  return areaRP;
  //code here
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};

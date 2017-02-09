
// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
//factorial(4)
var factorial = function(n) {
  if(n<0){return null}
  if(n===0){
    return 1;
  }
  return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  if(array.length===1){
    return array[0];
  }else if(array.length===0){
    return 0;
  }
  return array[0] + sum(array.slice(1))
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // 내부값이 배열일 때 처리
  if(Array.isArray(array[0])){
    return arraySum(array[0]) + arraySum(array.slice(1))
  }
  // 마지막 index에 대한 반환 조건
  if(array.length===1){
    return array[0]
  }else if(array.length===0){
    return 0;
  }
  // 기본 리턴 구문
  return array[0] + arraySum(array.slice(1))
};


// 4. Check if a number is even.
var isEven = function(n) {
  if(n===0){
    return true;
  }else if(n<0){
    return false;
  }
  return isEven(n-2)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n<=1){
    return 0;
  }
  return n-1+sumBelow(n-1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  if(x===y||y-x===1){
    return [];
  }
  if(x+2===y){
    return [x+1];
  }
  return [x+1].concat(range(x+1,y))
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
var exponent = function(base, exp) {
  if(exp===1){
    return base;
  }else if(exp===0){
    return 1;
  }
  return base * exponent(base,exp-1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if(n===1){
    return true;
  }
  if(n%2===1||n===0){
    return false
  }
  return powerOfTwo(n/2)
};

// 9. Write a function that accepts a string and reverses it.
var reverse = function(string) {
  if(string.length===1){
    return string.charAt(0)
  }
  return string.charAt(string.length-1) + reverse(string.substr(0,string.length-1))
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if(string.charAt(0)!==string.charAt(string.length-1)){
    return false
  }
  if(string.length<=1){
    return true
  }
  return palindrome(string.substr(1,string.length-2))
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if(y===1){
    return 0;
  }
  if((x-y)<0){
    return x;
  }
  return modulo(x-y,y)
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if(y==0){
    return 0;
  }
  if(y===1){
    return x
  }
  return x + multiply(x,y-1)
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  if(x===0||y===0){
    return 0;
  }
  if(y===1){
    return x;
  }
  if((x-y)<=0){
    return 0;
  }
  return 1 + divide(x-y,y)
};

// 14. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if(str1.length===0&&str2.length===0){
    return true;
  }
  if(str1.charAt(0)!==str2.charAt(0)){
    return false;
  }
  if(str1.length===1&&str2.length===1){
    return true;
  }
  return compareStr(str1.substr(1),str2.substr(1));
};

// 15. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if(str.length===1){
    return [str.charAt(0)]
  }
  return [str.charAt(0)].concat(createArray(str.substr(1)))
};

// 16. Reverse the order of an array
var reverseArr = function (array) {
  if(array.length===1){
    return array[0]
  }
  return [array[array.length-1]].concat(reverseArr(array.slice(0,array.length-1)))
};

// 17. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if(length===1){
    return [value]
  }
  return [value].concat(buildList(value,length-1))
};

// 18. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var result = 0
  if(array.length===1){
    if(array[0]===value){
      return 1;
    }else{
      return 0;
    }
  }

  if(array[0]===value){
    result = 1 + countOccurrence(array.slice(1),value)
  }else{
    result = countOccurrence(array.slice(1),value)
  }
  return result;
};

// 19. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  array[0] = callback(array[0])
  if(array.length===1){
    return array[0]
  }
  return [array[0]].concat(rMap(array.slice(1),callback))

};

// 20. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {

  var result = 0;
  for(var c in obj){
      if(c===key){
        result++;
      }
      if(typeof(obj[c])==="object"){
        result += countKeysInObj(obj[c],key)
      }
  }
  return result;
};

// 21. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var result = 0;
  for(var c in obj){
      if(obj[c]===value){
        result++;
      }
      if(typeof(obj[c])==="object"){
        result += countValuesInObj(obj[c],value)
      }
  }
  return result;
};

// 22. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  for(var c in obj){
      if(typeof(obj[c])==="object"){
        replaceKeysInObj(obj[c],key, newKey)
      }
      if(c === key){
        obj[newKey] = obj[c]
        delete obj[c];
      }
  }
  return obj;
};

// 23. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  var arr = []

  if(n<=0){
    return null
  }
  if(n===1){
    return [0,1];
  }

  if(arr[n]===undefined){
    arr = arr.concat(fibonacci(n-1));
  }

  arr.push(arr[n-1]+arr[n-2])


  return arr;
};

// 24. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if(n===0){
    return 0
  }else if(n===1){
    return 1
  }
  return nthFibo(n-1) + nthFibo(n-2)
};


// 25. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {

  var result = []
  for(var i = 0; i < array.length; i++){
    if(Array.isArray(array[i])){
      result = result.concat(flatten(array[i]))
    }else{
      result = result.concat([array[i]])
    }
  }
  return result;
}

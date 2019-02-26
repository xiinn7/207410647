// Create some arrays
const numbers = [43,56,33,23,44,36,5,100,20];
const numbers2 = new Array(22,45,33,76,54,100,20);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear', 'pineapple', 'Melon'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1, c:5}, new Date()];

let val;

// Get array length
val = numbers.length;
console.log(val);

// Check if is array
val = Array.isArray(numbers);
console.log(val);

// Get single value
val = numbers[8];
console.log(val);

// Insert into array
numbers[2] = 50;
console.log(numbers);

// Find index of value
val = numbers.indexOf(36);
console.log(val);

// MUTATING ARRAYS
// Add on to end
numbers.push(90);
console.log(numbers);

// Add on to front
numbers.unshift(80);
console.log(numbers);

// Take off from end
numbers.pop();
console.log(numbers);

// Take off from front
numbers.shift();
console.log(numbers);

// Splice values
numbers.splice(2,2);
console.log(numbers);

// Reverse
numbers.reverse();
console.log(numbers);

// Concatenate array
val = numbers.concat(numbers2);
console.log(val);

// Sorting arrays

val = fruit.sort();
console.log(val);

// Use the "compare function"
numbers.sort(function(a,b){return a-b});
console.log(numbers);

// Reverse sort
numbers.sort(function(a,b){return b-a});
console.log(numbers);
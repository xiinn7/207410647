const firstName = 'Chen';
const lastName = 'Rongxin';
const age = 18;
const str = 'Hello there my name is Cindy';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;
console.log(val);

// Append
val = 'Cindy ';
val += 'Traversy';
console.log(val);

val = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log(val);

// Escaping
val =  'That\'s awesome, I can\'t wait';
console.log(val);

// Length
val = firstName.length;
console.log(val);

// contact()
val = firstName.concat(' ', lastName);
console.log(val);

//change case
val = firstName.toUpperCase();
console.log(val);

val = firstName.toLowerCase();
console.log(val);

val = firstName[0];
console.log(val);

// indexOf()
val = firstName.indexOf('C');
console.log(val);
val = firstName.indexOf('C');
console.log(val);

// charAt()
val = firstName.charAt('5');
console.log(val);

// get last char
val = firstName.charAt(firstName.length-1)
console.log(val);

// substring()
val = firstName.substring(0.5);
console.log(val);

// slice()
val = firstName.slice(0.5);
console.log(val);
val = firstName.slice(-5);
console.log(val);

// split()
val = str.split(' ');
console.log(val);
val = tags.split(',');
console.log(val);

// replace()
val = str.replace('Cindy','Ruby');
console.log(val);

// includes()
val = str.includes('Cindy');
console.log(val);


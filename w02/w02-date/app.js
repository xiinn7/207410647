let val;

const today = new Date();
console.log(today);
let birthday = new Date('10-17-1999 11:25:00');
console.log(birthday);
birthday = new Date('October 17 1999');
console.log(birthday);
birthday = new Date('10/17/1999');
console.log(birthday);

val = today.getMonth();
console.log(val)
val = today.getDate();
console.log(val)
val = today.getDay();
console.log(val)
val = today.getFullYear();
console.log(val)
val = today.getHours();
console.log(val)
val = today.getMinutes();
console.log(val)
val = today.getSeconds();
console.log(val)
val = today.getMilliseconds();
console.log(val)
val = today.getTime();
console.log(val)

birthday.setMonth(10);
birthday.setDate(17);
birthday.setFullYear(1999);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);
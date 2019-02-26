// var, let, const

 var name = "RongXin Chen";
 console.log(name);
 name = 'Rongxin Chen';
 console.log(name);
 name = '2019';
 console.log(name);

 var greeting;
 console.log(greeting);
 gretting = 'Hello';
 console.log(greeting);

 // letter, numbers, _, $,
 // cannnot start with number
 
 // Multi word vars
 var firstName = 'Rongxin'; // Camel case, preferred
 var first_name = 'John';   // Underscore
 var FirstName = 'Sara';    // Pascal case
 var firstname;

 // let
 let name2 = "RongXin Chen";
 console.log(name2);
 name2 = 'Rongxin Chen';
 console.log(name2);
 name2 = '2019';
 console.log(name2);

 // const
 // const name3 = "Rongxin Chen";
 // console.log(name3);
 // name3 = 'Rongxin Chen';
 //console.log(name3);
 //name3 = '2019';
 //console.log(name3);

 const person = {
     name: '陳榕馨',
     age: 18
 };

 person.name = '陳榕馨';
 person.age = 18;
 console.log('person');

 const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);
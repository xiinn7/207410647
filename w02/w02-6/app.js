const name = 'Cindy';
const age = 18;
const job = 'Web Developer';
const city = 'Wugu';
let html;

// Without template strings (es5)

html = '<ul>' +
'<li> Name: ' + name + '</li>' +
'<li> Age: ' + age + '</li>' + 
'<li> Job: ' + job + '</li>' +
'<li> City: ' + city + '</li>' +
'</ul>';

document.body.innerHTML = html;
// With template strings (es6)


html = ''

'<ul>' +
       '<li> Name: ' + name + '</li>' +
       '<li Age: >' + age + '</li>' + 
       '<li Job: >' + job + '</li>' +
       '<li City: >' + city + '</li>' +
'</ul>';
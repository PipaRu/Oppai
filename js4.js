 function digits (n) {
    if (n > 999) {
        console.log("Число больше 999!");
        var number = {}
    }
     else var number = {
         'единицы': n % 10,
         'десятки': Math.floor(n / 10) % 10,
         'сотни': Math.floor(n / 100)
     };
     return number;
 }
// console.log(digits(1111));

function objectToQueryString(object){
    var str = "";
    for (const i in object) {
        str += i + " = " + object[i] + ", ";
    }
    return str;
}
var user = {
    user: 'Dmitry',
    password: 'pass',
    id: 1
}
alert(objectToQueryString(user));


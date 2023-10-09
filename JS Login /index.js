var login1 = "Vasya";
var login2 = "Zina"; 

var pass1 = 1111; 
var pass2 = 222;

var inputlogin = prompt ("Input your login:");
var inputpass = prompt ("Input your pass:");

switch(true){
    case login1==inputlogin && pass1==inputpass : console.log('Welcome, '+ login1);
    break;
    case login2==inputlogin && pass2==inputpass : console.log('Welcome, '+ login2);
    break;
    default: console.log("you aren't in system");
}

// exesice 1 Создайте цикл while, который будет выводить в консоль все нечётные числа от 1 до 30
var count = 1;
while(count < 30){   
    console.log (count);
    count+=2;

}
// exesice 2 Создайте цикл while, который будет выводить в консоль все нечётные числа от 1 до 30
var count = 1;
while(count < 30){
    if (count % 2 == 1){
    console.log (count);
    }
    count++;

}
//Создайте цикл while, который будет выводить в консоль все числа в диапазоне от 1 до 30, кратные 5. Небольшая подсказка - это можно проделать при помощи проверки равенства нулю остатка результата деления на 5.

var count = 1;
while(count <= 30){
    if (count % 5 === 0){
    console.log (count);
    }
    count++;

}

//Создайте цикл while, который будет выводить в консоль все чётные числа от 1 до 30, но в обратном порядке, то есть 30, 28, 26, ..., 2.
var count = 30;
while(count >= 1){
    if (count % 2 == 0){
    console.log (count);
    }
    count--;

}
// перебор символов в строке
var helloStr = "Hello String";
for (count = 0 ; count <= helloStr.length; count++)
{
    console.log(helloStr[count]);
}
//Создайте цикл for, который будет выводить в консоль все чётные числа от 1 до 30var helloStr = "Hello String";
for (count = 1 ; count <= 30; count+=2)
{
    console.log(count);
}
//Создайте цикл for, который будет выводить в консоль все числа в диапазоне от 1 до 30, кратные 7. Небольшая подсказка - это можно проделать при помощи проверки равенства нулю остатка результата деления на 7
for (count = 1 ; count <= 30; count++)
{ if(count%7==0){
    console.log(count);
}
}
//Создайте цикл for, который будет выводить в консоль все нечётные числа от 1 до 30, но в обратном порядке, то есть 29, 27, 25, ..., 1.
for (count = 30 ; count >= 1; count--)
{
    if(count%2==1){
        console.log(count);
    }
}

// or

for (count = 29 ; count> 0; count-=2)
{
    console.log(count);
}

// functions

function isNumberOdd(x){
    if (x % 2 == 0){
        console.log("false");
    } else {
        console.log("true");
    }
}
isNumberOdd(8);
isNumberOdd(25);

function factorial(y){
    var sumFactorial = 1;
    for(i=1; i<=y; i++){
        sumFactorial = sumFactorial* i;
    }
    console.log (sumFactorial);
}
factorial(5); // 1*2*3*4*5

function chengeSymbol(text){
    var newText = text.replace(/ /g, "_");
    console.log (newText);
}
chengeSymbol("text mw");


// вывод обьекта массива с определенными данными 
var cars = [
    {
    model: "Camry",
    color: "black",
    year: 2018,
    avaolable: true
},
{
    model: "Nisan",
    color: "black",
    year: 2018,
    avaolable: true
},
{
    model: "Mersedes",
    color: "black",
    year: 2018,
    avaolable: false
}
]
console.log (cars);
for (var i =0; i< cars.length;i++){
if (cars[i].avaolable === true) {
console.log (cars[i].model);
} 
}
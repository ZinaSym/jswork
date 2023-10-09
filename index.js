class Comment {
    constructor(text){
        this.text=text
        this.votesQty=0
    }
    upvote(){
        this.votesQty +=1
    }
}
const firstComment = new Comment('First comment')
const secondComment = new Comment('Second comment')
const thirdComment = new Comment('Third comment')
/* Exercise question 
1) exercise "survey"*/
var firsName = "Vasya";
console.log(firsName);
const name = prompt("Введите имя");
const lastName = prompt("Введите фамилию");
const age = prompt("Введите возраст");
console.log("Пользователь:"+" "+name+" "+lastName);

//2) exercise "Currency exchange"
var currency = 38.9;
const valueExchange = prompt("How much money do you want to change?");
const totalExchange = currency * valueExchange;
alert("you will receive: " + totalExchange);

//2) exercise "Your weight"


const yourAge = prompt("Input your age");
const yourWeight = prompt("Input your weight?");
const youHeight = prompt("Input your height?");
var yourIndex = yourWeight / (youHeight * youHeight);

if (yourAge > 18 && yourAge <25){
    if (yourIndex < 17,5){
        alert (yourIndex + "is not enough, dangerous to health");
    } else if  (yourIndex >=17,5 && yourIndex <=19,5){
        alert (yourIndex + "is not enough, but not dangerous to health");
    }  else if  (yourIndex >19,5 && yourIndex <=23){
        alert (yourIndex + "is normal");
    } else {
        alert (yourIndex + "is too much, overweight");
    }
} else if (yourAge > 26 && yourAge <46){
    if (yourIndex < 18){
        alert (yourIndex + "is not enough, dangerous to health");
    } else if  (yourIndex >=18 && yourIndex <=20){
        alert (yourIndex + "is not enough, but not dangerous to health");
    }  else if  (yourIndex >20 && yourIndex <=26){
        alert (yourIndex + "is normal");
    } else {
        alert (yourIndex + "is too much, overweight");
    }
} else { alert (yourIndex + "I don't have that number") ;
}

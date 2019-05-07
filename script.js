'use strict';

let money, time;
function start(){
    money = +prompt('Ваш бюджет на месяц?', "50000"),
    time = prompt('Введите дату в формате YYYY-MM-DD', "1991-06-13");
    while(isNaN(money) || money == "" || money == null ){
        money = +prompt('Ваш бюджет на месяц?', "50000");
    }
}
start();
var income = [];
var optionalExpenses = {};
var expenses = {};
var appData = {
    budget: (money),
    DataTime: (time),
    expenses,
    optionalExpenses,
    income,
    savings: true
};
function chooseExpenses(){
    for (let i = 0; i < 1; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяц", 'слона'),
            b = prompt ("Во сколько обойдется?",'10000');     
    
    if((typeof(a)) ==='string'&& (typeof(a)) != null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else{
     i = i-1;
     }
    }
}
chooseExpenses();

function detectDayBudget (){
appData.moneyPerDay = (appData.budget / 30).toFixed();
alert ("Ежедневный бюджет :" + appData.moneyPerDay)
}
detectDayBudget();


function detectLevel (){
if(appData.moneyPerDay <100){
    console.log("Минимальный уровень Достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
};    
}
detectLevel();
console.log(appData);

function checkSavings(){
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt ("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита :" + appData.monthIncome);

    }
}
checkSavings();

function chooseOptExpenses(){
    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?", '');
            appData.optionalExpenses [i+1] = a;
    }
}
chooseOptExpenses();
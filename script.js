'use strict';

var money = prompt('Ваш бюджет на месяц?',"25000"),
    time = prompt('Введите дату в формате YYYY-MM-DD',"30-04-2019");
var income= [];
var optionalExpenses ={};
var oneQ = prompt('Введите обязательную статью расходов в этом месяце',"Еда"),
    twoQ = prompt("Во сколько обойдется?",'15000');
var expenses = {
[oneQ] : twoQ
};

var appData = {
    budget : (money),
    DataTime : (time),
    expenses,
    optionalExpenses,
    income,
    savings: false
};
console.log(appData);
alert(appData.budget/30);
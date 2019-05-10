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
let income = [];
let optionalExpenses = {};
let expenses = {};
let appData = {
    budget: (money),
    DataTime: (time),
    expenses,
    optionalExpenses,
    income,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 1; i++) {
            let a = prompt ("Введите обязательную статью расходов в этом месяц", 'слона'),
                b = prompt ("Во сколько обойдется?",'10000');     
        
         if((typeof(a)) ==='string'&& (typeof(a)) != null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
         } else {
          i = i - 1;
         }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Ежедневный бюджет :" + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay <100){
            console.log("Минимальный уровень Достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000){
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }   
    },
    checkSavings: function(){
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt ("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита :" + appData.monthIncome);
    
        }
    },
 chooseOptExpenses: function(){
    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?", '');
            appData.optionalExpenses [i+1] = a;
    }
 },
  chooseIncome: function(){
      let items =prompt ('Что принесёт дополнительный доход? (перечислите через запятую)', '');
      if ((typeof(items)) ==='string'&& (typeof(items)) != null && items != '' && (isNaN(items) !=false)){
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то ещё?'));
        appData.income.sort();
        appData.income.forEach(function(item, i ,income){
            alert("Способы доп. заработка: " + (i+1) + ') '  + item);
        });
      } else{
          appData.chooseIncome();
      }
     
  }
};
for (let key in appData){
    console.log("Наша программа включает в себя данные: " + key  + appData[key]);
}
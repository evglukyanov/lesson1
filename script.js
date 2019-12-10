'use strict';
let money = prompt('Ваш бюджет на месяц?'),
         time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appDate = {
    budget: money,
    expenses : {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

let a1 = prompt('ВВедите обязательню статью расходов в этом ', ''),
        a2 = prompt('Во сколько это обойдется?', ''),
        a3 = prompt('ВВедите обязательню статью расходов в этом ', ''),
        a4 = prompt('Во сколько это обойдется?', '');

appDate.expenses [a1] = a3;
appDate.expenses [a2] = a4;

alert(appDate.budget/30);


// isStore = true;
// isSale = true;
//
// if (isStore && isSale) {
//     console.log('store and sale');
// }

// const temp = 30
// const willRain = true
// const weather = (temp && willRain)
// console.log(weather);

// function bark(name, weight) {
//     if (weight > 10) {
//         console.log(name + ' woof!')
//     } else {
//         console.log(name + ' meow!')
//     }
// }
//
// bark('cat', 5);
// bark('dog', 11);
// bark('cat', 3);
// bark('dog', 23);


const depositAmount = 1000;
const depositPeriodRate = 3;
const depositPeriod = 3;

function getDepositIncome(amount, rate, period) {

    let depositIncome = 0;
    let count = 0

    while (count < period) {
        depositIncome = depositIncome + amount * (rate / 100);
        count++;
    }
    return depositIncome;
}

const depositIncome1 = getDepositIncome(depositAmount, depositPeriodRate, depositPeriod)
const depositIncome2 = getDepositIncome(3000, 4, 5)

const totalIncome = depositIncome1 + depositIncome2

console.log(totalIncome);


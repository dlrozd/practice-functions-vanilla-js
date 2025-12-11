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

function bark(name, weight) {
    if (weight > 10) {
        console.log(name + ' woof!')
    } else {
        console.log(name + ' meow!')
    }
}

bark('cat', 5);
bark('dog', 11);
bark('cat', 3);
bark('dog', 23);



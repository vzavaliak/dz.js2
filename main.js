let numbers = [1, 2, 3, 4, 5];
let str1 = ['hello', 'okten', 'school', 'com', 'ua'];
let userInforms = ['Zavaliak', 'Volodymur', 24, 1996, true];
let others = ['Lviv', 'Ukraina', 'football', 4]

console.log(numbers)
console.log(str1)
console.log(userInforms)
console.log(others[0])
console.log(others[1])
console.log(others[2])
console.log(others[3])


let products = ['milk', 'chokolat', 'oil', 'woter', 'eggs', 'fish', 'bread', 'soul', 'apple', 'tomato']

for (let product of products) {
    document.write(`<div>${product}</div>`)
}
for (let i = 0; i < products.length; i++) {
    document.write(`<div> today is seil to ${products[i]}</div>`)
}


let shops = ['adidas', 'nike', 'puma', "lacosta", 'reabook', 'dfhpotkh', 'bryjrj', 'drnry', 'yjddrj', 'fdyndyfm', 'ndyfd', 'btnd', 'nbdndd', 'tnbstn', 'dyndy', 'fndf', 'dnttfn', 'bdynf']

let i = 0;
while (i < shops.length) {
    document.write(`<h1>${shops[i]}</h1>`)
    i++
}

let nambers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < nambers1.length; i++) {
    console.log(nambers1[i])
}
let words = ['welcom', 'hello', 'ok10', 'okten', 'school', 'mondey', 'com', 'ua', 'web', 'lorem',]

for (let i = 0; i < words.length; i++) {
    console.log(words[i])
}

let words1 = ['footboll', 'basketbool', 'hockey', 'justice', 2, 10, 5, 6 > 4, 5 > 6, 8 <= 1]

for (let i = 0; i < words1.length; i++) {
    console.log(words1[i])
}

let arr = [4 < 3, 10 == 10, 6 > 8, 9 == 9, 'shadow', 3 >= 4, 'leage', 'boll', 'bake', 'radio', 2, 23, 45, 76, 100]
for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === "boolean") {
        console.log('this elem is boolean ${arr[i]}')
    } else if (typeof (arr[i]) === "number") {
        console.log('this elem is number ${arr[i]}')
    } else if (typeof (arr[i]) === "string") {
        console.log('this elem is string ${arr[i]}')
    }
}


let wet = ['friend', 'world', 'buisnes', 'shadow', 3, 999, 4 > 5, 5 == 5, 4, 21]
for (let i = 0; i < wet.length; i++) {
    console.log(wet[i])
}

for (i = 0; i < 10; i++) {
    console.log(i)
    document.write(i)
}

for (i = 0; i < 100; i++) {
    console.log(i)
    document.write(`<div>${i}</div>`)
}


for (i = 0; i <= 100;i+=2){
 {
   console.log(i);
    document.write(`<h4>${i}</h4>`)
}
}
for (i = 1; i <= 100;i+=2){
    {
        console.log(i);
        document.write(`<h4>${i}</h4>`)
    }
}

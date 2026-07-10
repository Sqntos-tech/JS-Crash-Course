
/* NOTES */

console.log('beautiful')
console.log('Hello World'[10])
console.log(''.length)
let str = 'Edward'
console.log(str[str.length - 1])

let fullName = 'Edward Santos'
let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;
console.log('fahrenheit')
let bool = '1' === 1
console.log(bool)

console.log('edwarddaty')

{let cash = 60
let price = 40
let difference = cash - price

if (cash > price) {
    console.log(`you paid extra - here's ${difference} dollars change`)
}
else if (cash === price) {
    console.log("you paid the exact amount, have a nice day!")
}
else {
    console.log(`not enough money - you still owe ${price-cash} dollars`)
}
}

{let cash = 50
let price = 40
let isStoreOpen = false

if (cash >= price && isStoreOpen === false) {
    console.log('print the receipt')
}                     (!isStoreOpen)}

let cash = 50 
let price = 40
let isStoreOpen = true

{let str = cash >= price && isStoreOpen ? "give receipt" : "do not give receipt"
console.log(str)}

// let count = 1

// while (count <= 5) {
//     console.log(count)
//     count = count + 1
// }


// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

for (let i = 1; i < 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} -> Frontend Simplified`)
    }
    else if (i % 3 === 0) {
        console.log(` ${i} -> Frontend`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} -> Simplified`)
    }
    else {
        console.log(`${i} -> ${i}`)
    }
}

{const str = "Frontend Simplified"

for (let i = 0; i < str.length; ++i) {
    console.log(str[i])
} }